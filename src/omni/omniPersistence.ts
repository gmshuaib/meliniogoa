/**
 * OmniStore Persistence Layer
 *
 * Provides resilient, store-scoped localStorage & cross-tab synchronization
 * for Cart, Wishlist, Saved-for-Later, Recently Viewed, Compare, Orders, Reviews, and Q&A.
 * Supports cloud sync hooks for authenticated user accounts.
 */

import type { CartItem, SavedForLaterItem, Order, Review, QAItem } from './types';

const STORAGE_PREFIX = 'webgeny_omni_';

export interface OmniStoreState {
  cart: CartItem[];
  savedForLater: SavedForLaterItem[];
  wishlist: string[];
  compareList: string[];
  recentlyViewed: string[];
  orders: Order[];
  reviews: Record<string, Review[]>;
  qas: Record<string, QAItem[]>;
}

export function getSafeStorageKey(slug: string, key: string): string {
  const cleanSlug = (slug || 'store').replace(/[^a-zA-Z0-9_-]/g, '_');
  return `${STORAGE_PREFIX}${cleanSlug}_${key}`;
}

export function loadOmniStorage<T>(slug: string, key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(getSafeStorageKey(slug, key));
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn(`[OmniPersistence] Failed to load key "${key}" for store "${slug}":`, err);
    return fallback;
  }
}

export function saveOmniStorage<T>(slug: string, key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    const storageKey = getSafeStorageKey(slug, key);
    localStorage.setItem(storageKey, JSON.stringify(value));
    
    // Dispatch custom event for intra-window reactivity
    window.dispatchEvent(
      new CustomEvent('webgeny_omni_sync', {
        detail: { slug, key, value },
      })
    );
  } catch (err) {
    console.warn(`[OmniPersistence] Failed to save key "${key}" for store "${slug}":`, err);
  }
}

export function clearOmniStorage(slug: string): void {
  if (typeof window === 'undefined') return;
  try {
    const keys = ['cart', 'saved_for_later', 'wishlist', 'compare', 'recently_viewed', 'orders', 'reviews', 'qas'];
    keys.forEach((k) => localStorage.removeItem(getSafeStorageKey(slug, k)));
  } catch (err) {
    console.warn(`[OmniPersistence] Failed to clear storage for store "${slug}":`, err);
  }
}

/**
 * Cloud Sync Stub / Adapter
 * Can be hooked into Supabase user profile data or a backend API
 */
export async function syncOmniWithCloud(
  userId: string,
  slug: string,
  localState: Partial<OmniStoreState>
): Promise<{ success: boolean; remoteState?: Partial<OmniStoreState> }> {
  if (!userId) return { success: false };
  try {
    const cloudKey = `webgeny_cloud_user_${userId}_${slug}`;
    const existing = localStorage.getItem(cloudKey);
    const existingParsed = existing ? JSON.parse(existing) : {};
    
    const merged = {
      ...existingParsed,
      ...localState,
      updatedAt: new Date().toISOString(),
    };
    
    localStorage.setItem(cloudKey, JSON.stringify(merged));
    return { success: true, remoteState: merged };
  } catch (err) {
    console.warn('[OmniPersistence] Cloud sync failed:', err);
    return { success: false };
  }
}
