/**
 * Cross-tab & Cross-window Catalog Sync Utility
 * Uses BroadcastChannel with localStorage and CustomEvent fallback.
 */

const CHANNEL_NAME = 'webgeny_catalog_sync_channel';

let channel: BroadcastChannel | null = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    channel = new BroadcastChannel(CHANNEL_NAME);
  }
} catch {
  // BroadcastChannel not available or sandboxed
}

export interface CatalogSyncPayload {
  slug: string;
  items: any[];
  updatedAt: number;
}

export const broadcastCatalogUpdate = (slug: string, items: any[]) => {
  const payload: CatalogSyncPayload = {
    slug: slug || 'store',
    items,
    updatedAt: Date.now(),
  };

  try {
    channel?.postMessage({ type: 'catalog_updated', payload });
  } catch {}

  try {
    localStorage.setItem('webgeny_omni_catalog_latest', JSON.stringify(payload));
    if (slug) {
      localStorage.setItem(`webgeny_omni_catalog_${slug}`, JSON.stringify(payload));
    }
    localStorage.setItem('omnistore_products', JSON.stringify(items));
  } catch {}

  try {
    window.dispatchEvent(new CustomEvent('webgeny_catalog_updated', { detail: payload }));
  } catch {}
};

export const subscribeToCatalogUpdates = (onUpdate: (payload: CatalogSyncPayload) => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const handleMessage = (event: MessageEvent) => {
    if (event.data?.type === 'catalog_updated' && event.data?.payload) {
      onUpdate(event.data.payload);
    }
  };

  const handleCustomEvent = (e: Event) => {
    const detail = (e as CustomEvent).detail;
    if (detail?.items) {
      onUpdate(detail);
    }
  };

  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'webgeny_omni_catalog_latest' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (parsed?.items) onUpdate(parsed);
      } catch {}
    }
  };

  try {
    channel?.addEventListener('message', handleMessage);
  } catch {}
  window.addEventListener('webgeny_catalog_updated', handleCustomEvent);
  window.addEventListener('storage', handleStorage);

  return () => {
    try {
      channel?.removeEventListener('message', handleMessage);
    } catch {}
    window.removeEventListener('webgeny_catalog_updated', handleCustomEvent);
    window.removeEventListener('storage', handleStorage);
  };
};

export const getStoredCatalog = (slug?: string): any[] | null => {
  if (typeof window === 'undefined') return null;
  try {
    const slugKey = slug ? `webgeny_omni_catalog_${slug}` : null;
    const raw = (slugKey ? localStorage.getItem(slugKey) : null) ||
                localStorage.getItem('webgeny_omni_catalog_latest') ||
                localStorage.getItem('omnistore_products');
    if (raw) {
      const parsed = JSON.parse(raw);
      const list = Array.isArray(parsed) ? parsed : parsed.items;
      if (Array.isArray(list) && list.length > 0) return list;
    }
  } catch {}
  return null;
};
