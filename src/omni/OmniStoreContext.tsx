/**
 * OMNISTORE BRIDGE â€” adapts Webgeny's template props onto the OmniStore
 * StoreContext surface that the ported section variants consume.
 *
 * Reads `data.niche` to select among the 10 canonical store presets
 * (fashion, electronics, home, grocery, food, beauty, furniture, sports,
 * luxury, handmade) â€” each carrying its own theme, categories, vendors,
 * banners, and products.  Falls back to `fashion` if unset.
 *
 * All cart/checkout/orders/reviews/compare/quickview state needed by the
 * ported section variants is provided here.  Overlay modals (MiniCart,
 * QuickView, Compare, LiveChat, CookieConsent) are rendered inside the
 * provider so they function across all e-commerce pages.
 */

import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import type {
  CartItem,
  CategorySchema,
  Coupon,
  FilterState,
  Order,
  Product,
  QAItem,
  Review,
  ReturnRequest,
  SavedForLaterItem,
  StorePreset,
  ThemeTokens,
  User,
  Vendor,
  ViewRoute,
} from './types';
import { t as i18nT, SupportedLocale, Translations } from './i18n';
import { getOmniStorePreset } from './data';
import { initialCoupons, initialOrders, initialUser } from './data';
import {
  loadOmniStorage,
  saveOmniStorage,
  syncOmniWithCloud,
  clearOmniStorage,
} from './omniPersistence';
import { useGeneratedAuth } from '../hooks/useGeneratedAuth';
import { subscribeToCatalogUpdates } from '../utils/catalogSync';

// ---------------------------------------------------------------------------
// Context surface â€” full superset of what all ported variants destructure
// ---------------------------------------------------------------------------

export interface OmniStoreContextType {
  // Navigation & Routing
  currentRoute: ViewRoute;
  navigateTo: (route: ViewRoute) => void;

  // Preset & Store Info
  activePreset: StorePreset;
  switchPreset: (presetId: string) => void;
  allPresets: StorePreset[];
  storePresets: Record<string, StorePreset>;
  multiVendorMode: boolean;
  setMultiVendorMode: (enabled: boolean) => void;

  // Catalog Data
  products: Product[];
  categories: CategorySchema[];
  vendors: Vendor[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCategories: React.Dispatch<React.SetStateAction<CategorySchema[]>>;

  // Cart & Checkout State
  cart: CartItem[];
  savedForLater: SavedForLaterItem[];
  addToCart: (product: Product, options?: { quantity?: number; variantId?: string; attributes?: Record<string, any>; isSubscription?: boolean; subscriptionInterval?: string }) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  saveItemForLater: (cartItemId: string) => void;
  moveItemToCart: (savedItemId: string) => void;
  removeSavedItem: (savedItemId: string) => void;
  moveCartItemToWishlist: (cartItemId: string) => void;
  clearCart: () => void;

  // Coupon & Loyalty
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  loyaltyPointsToRedeem: number;
  setLoyaltyPointsToRedeem: (points: number) => void;
  giftWrapOption: boolean;
  setGiftWrapOption: (enabled: boolean) => void;
  orderNote: string;
  setOrderNote: (note: string) => void;

  // Cart Totals (computed)
  cartSubtotal: number;
  cartDiscount: number;
  cartShippingFee: number;
  cartTax: number;
  cartLoyaltyCredit: number;
  cartTotal: number;

  // Wishlist & Compare
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
  compareList: string[];
  toggleCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
  removeFromCompare: (productId: string) => void;
  recentlyViewed: string[];
  addRecentlyViewed: (productId: string) => void;

  // User & Auth
  currentUser: User | null;
  isLoggedIn: boolean;
  logout: () => void;

  // Orders
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt' | 'trackingEvents'>) => Order;
  returnRequests: ReturnRequest[];

  // Reviews & Q&A
  reviews: Record<string, Review[]>;
  qas: Record<string, QAItem[]>;
  questions: Record<string, QAItem[]>;
  addReview: (review: Omit<Review, 'id' | 'createdAt' | 'likes' | 'dislikes' | 'approved'>) => void;
  addQuestion: (productId: string, question: string) => void;

  // Filtering
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;

  // Theme & i18n
  theme: ThemeTokens;
  setTheme: React.Dispatch<React.SetStateAction<ThemeTokens>>;
  updateThemeToken: <K extends keyof ThemeTokens>(key: K, value: ThemeTokens[K]) => void;
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  t: Translations;

  // UI Modals & Drawers
  isMiniCartOpen: boolean;
  setIsMiniCartOpen: (open: boolean) => void;
  isConfigDrawerOpen: boolean;
  setIsConfigDrawerOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isCompareModalOpen: boolean;
  setIsCompareModalOpen: (open: boolean) => void;

  // Notifications
  showToast: (title: string, message?: string, type?: string) => void;

  // Persistence & Cloud Sync
  syncWithCloud: () => Promise<void>;
  clearPersistentState: () => void;

  // Legacy storeConfig shim (some ported variants read storeConfig)
  storeConfig?: any;

  // Webgeny Page Navigation Bridge
  pages?: any[];
  currentPageId?: string;
  onNavigate?: (slugOrId: string) => void;
}

const OmniStoreContext = createContext<OmniStoreContextType | undefined>(undefined);

// ---------------------------------------------------------------------------
// Helper: map a Webgeny product-data prop into a full Product shape
// ---------------------------------------------------------------------------

function toOmniProduct(raw: any, index: number): Product {
  const title = raw?.name || raw?.title || 'Curated Piece';
  const primaryImg = raw?.image || (Array.isArray(raw?.images) && raw.images.length > 0 ? (typeof raw.images[0] === 'string' ? raw.images[0] : raw.images[0]?.url) : '') || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800';

  let images: { id: string; url: string; alt?: string }[] = [];
  if (raw?.image && Array.isArray(raw?.images) && raw.images.length > 0) {
    const firstImgUrl = typeof raw.images[0] === 'string' ? raw.images[0] : raw.images[0]?.url;
    if (firstImgUrl !== raw.image) {
      images = [{ id: `${raw?.id || 'p'}-0`, url: raw.image, alt: title }];
    } else {
      images = raw.images.map((img: any, i: number) =>
        typeof img === 'string'
          ? { id: `${raw?.id || 'p'}-${i}`, url: img, alt: title }
          : { id: img?.id || `${raw?.id || 'p'}-${i}`, url: img?.url || '', alt: img?.alt || title },
      );
    }
  } else if (raw?.image) {
    images = [{ id: `${raw?.id || 'p'}-0`, url: raw.image, alt: title }];
  } else if (Array.isArray(raw?.images) && raw.images.length > 0) {
    images = raw.images.map((img: any, i: number) =>
      typeof img === 'string'
        ? { id: `${raw?.id || 'p'}-${i}`, url: img, alt: title }
        : { id: img?.id || `${raw?.id || 'p'}-${i}`, url: img?.url || '', alt: img?.alt || title },
    );
  } else {
    images = [{ id: `${raw?.id || 'p'}-0`, url: primaryImg, alt: title }];
  }

  return {
    id: raw?.id || `omni-product-${index}`,
    title,
    slug: raw?.slug || `piece-${index}`,
    sku: raw?.sku || `SKU-${index}`,
    categoryId: raw?.categoryId || 'cat-general',
    brand: raw?.brand || 'Store Brand',
    price: typeof raw?.price === 'number' ? raw.price : 0,
    compareAtPrice: raw?.compareAtPrice,
    currency: 'USD',
    type: raw?.type || 'simple',
    stockQuantity: raw?.stockQuantity ?? 12,
    images,
    shortDescription: raw?.shortDescription || raw?.description || '',
    fullDescription: raw?.fullDescription || raw?.description || '',
    specifications: raw?.specifications || {},
    attributes: raw?.attributes || {},
    variants: raw?.variants,
    rating: raw?.rating ?? 4.6,
    reviewCount: raw?.reviewCount ?? 18,
    ratingDistribution: raw?.ratingDistribution || { 5: 30, 4: 10 },
    isFeatured: raw?.isFeatured ?? index < 4,
    isTrending: raw?.isTrending,
    isNewArrival: raw?.isNewArrival,
    isBestSeller: raw?.isBestSeller ?? index < 4,
    tags: raw?.tags || [],
    createdAt: raw?.createdAt || new Date().toISOString(),
  };
}

const DEFAULT_FILTER_STATE: FilterState = {
  searchQuery: '',
  categoryId: '',
  subcategoryId: undefined,
  brands: [],
  minPrice: 0,
  maxPrice: 3000,
  rating: null,
  inStockOnly: false,
  discountOnly: false,
  productType: 'all',
  unitOfMeasure: undefined,
  attributes: {},
  sortBy: 'featured',
};

export interface OmniProviderProps {
  data?: any;
  style?: any;
  children: React.ReactNode;
  pages?: any[];
  currentPageId?: string;
  onNavigate?: (slugOrId: string) => void;
}

export const OmniStoreProvider: React.FC<OmniProviderProps> = ({
  data,
  style,
  children,
  pages,
  currentPageId,
  onNavigate,
}) => {
  // -------------------------------------------------------------------------
  // 1. Pick the right preset from the 10 canonical store types
  //    Priority: data.niche â†’ data.storeType â†’ data.storeName â†’ site name/desc
  // -------------------------------------------------------------------------
  const presetKey =
    data?.niche ||
    data?.storeType ||
    data?.presetId ||
    data?.storeName ||
    data?.siteName ||
    data?.name ||
    'fashion';

  const basePreset: StorePreset = useMemo(
    () => getOmniStorePreset(presetKey),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [presetKey],
  );

  // -------------------------------------------------------------------------
  // 2. Override preset fields from section `data` when provided
  // -------------------------------------------------------------------------
  const storeName =
    data?.storeName ||
    data?.brandName ||
    data?.brand ||
    data?.logo ||
    data?.businessName ||
    data?.siteName ||
    data?.name ||
    basePreset.name;

  const activePreset: StorePreset = useMemo(() => {
    // Products: prefer data.items/products, then preset products
    const rawProducts =
      (Array.isArray(data?.items) && data.items.length > 0 ? data.items : undefined) ||
      (Array.isArray(data?.products) && data.products.length > 0 ? data.products : undefined) ||
      basePreset.products ||
      [];

    const mappedProducts = rawProducts.map(toOmniProduct);

    return {
      ...basePreset,
      name: storeName,
      tagline:
        data?.subheadline ||
        data?.subtitle ||
        data?.description ||
        basePreset.tagline,
      categoryTag:
        data?.badge ||
        data?.categoryTag ||
        data?.highlightText ||
        basePreset.categoryTag,
      theme: {
        ...basePreset.theme,
        darkMode: false,
        fontDisplay: style?.headingFont
          ? `${style.headingFont}, Georgia, serif`
          : basePreset.theme.fontDisplay,
        fontBody: style?.bodyFont
          ? `${style.bodyFont}, system-ui, sans-serif`
          : basePreset.theme.fontBody,
      },
      // Use preset categories/vendors/banners â€” they match the store type
      categories:
        Array.isArray(data?.categories) && data.categories.length > 0
          ? data.categories
          : basePreset.categories,
      vendors: basePreset.vendors,
      banners:
        basePreset.banners.length > 0
          ? [
              {
                ...basePreset.banners[0],
                Headline: data?.Headline || data?.headline || data?.title || basePreset.banners[0].title,
                headline: data?.Headline || data?.headline || data?.title || basePreset.banners[0].title,
                title: data?.Headline || data?.headline || data?.title || basePreset.banners[0].title,
                headline2:
                  data?.headline2 ||
                  data?.subheadline ||
                  data?.subtitle ||
                  basePreset.banners[0].subtitle,
                subheadline:
                  data?.headline2 ||
                  data?.subheadline ||
                  data?.subtitle ||
                  basePreset.banners[0].subtitle,
                subtitle:
                  data?.headline2 ||
                  data?.subheadline ||
                  data?.subtitle ||
                  basePreset.banners[0].subtitle,
                Badge: data?.Badge || data?.badge || data?.categoryTag || basePreset.banners[0].tag,
                badge: data?.Badge || data?.badge || data?.categoryTag || basePreset.banners[0].tag,
                tag: data?.Badge || data?.badge || data?.categoryTag || basePreset.banners[0].tag,
                CTA1: data?.CTA1 || data?.cta || data?.ctaText || basePreset.banners[0].ctaText,
                cta: data?.CTA1 || data?.cta || data?.ctaText || basePreset.banners[0].ctaText,
                ctaText: data?.CTA1 || data?.cta || data?.ctaText || basePreset.banners[0].ctaText,
                CTA2: data?.CTA2 || data?.secondaryCta,
                secondaryCta: data?.CTA2 || data?.secondaryCta,
                image:
                  data?.image ||
                  data?.heroImage ||
                  data?.imageUrl ||
                  basePreset.banners[0].image,
              },
              ...basePreset.banners.slice(1),
            ]
          : basePreset.banners,
      products: mappedProducts,
    };
  }, [basePreset, data, style, storeName]);

  // Store persistence scope key
  const storeSlug =
    data?.slug ||
    data?.siteSlug ||
    (typeof window !== 'undefined' && (window as any).__CURRENT_PROJECT_SLUG__) ||
    activePreset?.id ||
    'store';

  // -------------------------------------------------------------------------
  // 3. State
  // -------------------------------------------------------------------------
  const [theme, setTheme] = useState<ThemeTokens>(activePreset.theme);
  const [products, setProducts] = useState<Product[]>(activePreset.products);
  const [categories, setCategories] = useState<CategorySchema[]>(activePreset.categories);

  // Sync when activePreset changes (e.g. niche switches).
  // Preserve darkMode so user-toggled state isn't reset when activePreset recomputes.
  React.useEffect(() => {
    const slugKey = storeSlug ? `webgeny_omni_catalog_${storeSlug}` : null;
    const stored = (slugKey ? localStorage.getItem(slugKey) : null) || localStorage.getItem('webgeny_omni_catalog_latest');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed.items) && parsed.items.length > 0) {
          setProducts(parsed.items.map(toOmniProduct));
          if (activePreset.categories?.length > 0) setCategories(activePreset.categories);
          setTheme({ ...activePreset.theme, darkMode: false });
          return;
        }
      } catch {}
    }
    if (activePreset.products?.length > 0) setProducts(activePreset.products);
    if (activePreset.categories?.length > 0) setCategories(activePreset.categories);
    setTheme({ ...activePreset.theme, darkMode: false });
  }, [activePreset, storeSlug]);

  // Real-time sync from Admin Dashboard, cross-tab BroadcastChannel, or events
  React.useEffect(() => {
    const handleLiveCatalog = (payload?: any) => {
      try {
        if (payload?.items && Array.isArray(payload.items) && payload.items.length > 0) {
          setProducts(payload.items.map(toOmniProduct));
          return;
        }
        const slugKey = storeSlug ? `webgeny_omni_catalog_${storeSlug}` : null;
        const raw = (slugKey ? localStorage.getItem(slugKey) : null) || localStorage.getItem('webgeny_omni_catalog_latest');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed.items) && parsed.items.length > 0) {
            setProducts(parsed.items.map(toOmniProduct));
          }
        }
      } catch {
        // ignore
      }
    };

    handleLiveCatalog();
    const unsubscribe = subscribeToCatalogUpdates((payload) => {
      handleLiveCatalog(payload);
    });
    return unsubscribe;
  }, [storeSlug]);

  // Cart & Saved For Later (Persistent)
  const [cart, setCart] = useState<CartItem[]>(() =>
    loadOmniStorage(storeSlug, 'cart', []),
  );
  const [savedForLater, setSavedForLater] = useState<SavedForLaterItem[]>(() =>
    loadOmniStorage(storeSlug, 'saved_for_later', []),
  );

  // Coupon / Loyalty / Options
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [availableCoupons] = useState<Coupon[]>(initialCoupons);
  const [loyaltyPointsToRedeem, setLoyaltyPointsToRedeem] = useState(0);
  const [giftWrapOption, setGiftWrapOption] = useState(false);
  const [orderNote, setOrderNote] = useState('');

  // Wishlist, Compare & Recently Viewed (Persistent)
  const [wishlist, setWishlist] = useState<string[]>(() =>
    loadOmniStorage(storeSlug, 'wishlist', []),
  );
  const [compareList, setCompareList] = useState<string[]>(() =>
    loadOmniStorage(storeSlug, 'compare', []),
  );
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() =>
    loadOmniStorage(storeSlug, 'recently_viewed', []),
  );

  // Orders (Persistent)
  const [orders, setOrders] = useState<Order[]>(() =>
    loadOmniStorage(storeSlug, 'orders', initialOrders),
  );
  const [returnRequests] = useState<ReturnRequest[]>([]);

  // Reviews & Q&A (Persistent)
  const [reviews, setReviews] = useState<Record<string, Review[]>>(() =>
    loadOmniStorage(storeSlug, 'reviews', {}),
  );
  const [qas, setQas] = useState<Record<string, QAItem[]>>(() =>
    loadOmniStorage(storeSlug, 'qas', {}),
  );

  // Persistence Auto-Save Effects
  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'cart', cart);
  }, [storeSlug, cart]);

  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'saved_for_later', savedForLater);
  }, [storeSlug, savedForLater]);

  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'wishlist', wishlist);
  }, [storeSlug, wishlist]);

  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'compare', compareList);
  }, [storeSlug, compareList]);

  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'recently_viewed', recentlyViewed);
  }, [storeSlug, recentlyViewed]);

  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'orders', orders);
  }, [storeSlug, orders]);

  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'reviews', reviews);
  }, [storeSlug, reviews]);

  React.useEffect(() => {
    saveOmniStorage(storeSlug, 'qas', qas);
  }, [storeSlug, qas]);

  // Cross-Tab and Inter-Window Synchronization
  React.useEffect(() => {
    const handleSync = (e: any) => {
      const detail = e?.detail;
      if (!detail || detail.slug !== storeSlug) return;
      if (detail.key === 'cart') setCart(detail.value);
      if (detail.key === 'saved_for_later') setSavedForLater(detail.value);
      if (detail.key === 'wishlist') setWishlist(detail.value);
      if (detail.key === 'compare') setCompareList(detail.value);
      if (detail.key === 'recently_viewed') setRecentlyViewed(detail.value);
      if (detail.key === 'orders') setOrders(detail.value);
      if (detail.key === 'reviews') setReviews(detail.value);
      if (detail.key === 'qas') setQas(detail.value);
    };
    window.addEventListener('webgeny_omni_sync', handleSync);
    return () => window.removeEventListener('webgeny_omni_sync', handleSync);
  }, [storeSlug]);

  // Filter
  const [filterState, setFilterState] = useState<FilterState>(DEFAULT_FILTER_STATE);

  // i18n / Currency
  const [currency, setCurrency] = useState('USD');
  const [locale, setLocale] = useState<SupportedLocale>('en');
  const [multiVendorMode, setMultiVendorMode] = useState(true);

  // UI Modals
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // -------------------------------------------------------------------------
  // 4. Cart Computed Totals
  // -------------------------------------------------------------------------
  const cartSubtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const cartDiscount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.type === 'percentage') {
      const d = (cartSubtotal * appliedCoupon.value) / 100;
      return appliedCoupon.maxDiscount ? Math.min(d, appliedCoupon.maxDiscount) : d;
    }
    if (appliedCoupon.type === 'fixed') return Math.min(appliedCoupon.value, cartSubtotal);
    return 0;
  }, [appliedCoupon, cartSubtotal]);

  const cartLoyaltyCredit = loyaltyPointsToRedeem * 0.1;
  const cartShippingFee = cartSubtotal - cartDiscount >= 75 || appliedCoupon?.type === 'free_shipping' ? 0 : 5.99;
  const cartTax = parseFloat(((cartSubtotal - cartDiscount) * 0.081).toFixed(2));
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount - cartLoyaltyCredit + cartShippingFee + cartTax + (giftWrapOption ? 5 : 0));

  // Check whether we are running inside Webgeny's host app (which uses HashRouter)
  const isWebgenyHost = typeof window !== 'undefined' && (
    Boolean((window as any).__WEBGENY_HOST__) ||
    window.location.hash.startsWith('#/preview') ||
    window.location.hash.startsWith('#/generator') ||
    window.location.hash.startsWith('#/admin') ||
    window.location.hash.startsWith('#/dashboard')
  );

  // Navigation Route State
  const [currentRoute, setCurrentRoute] = useState<ViewRoute>(() => {
    if (!isWebgenyHost && typeof window !== 'undefined' && window.location.hash) {
      const raw = window.location.hash.replace(/^#\/?/, '').trim();
      if (raw) return { name: raw as any };
    }
    return { name: 'home' };
  });

  // -------------------------------------------------------------------------
  // 4b. Auth Integration
  // -------------------------------------------------------------------------
  const authProviderConfig =
    data?.authProvider ||
    (typeof window !== 'undefined' && (
      (window as any).__WEBGENY_AUTH_CONFIG__ ||
      (() => {
        try {
          const cfg = localStorage.getItem('webgeny_auth_config');
          if (cfg) return JSON.parse(cfg);
          const sup = localStorage.getItem('webgeny_ecommerce_supabase');
          if (sup) return { provider: 'supabase', supabase: JSON.parse(sup) };
        } catch {}
        return undefined;
      })()
    ));
  const { user: genUser, profile: genProfile, signOut: genSignOut } = useGeneratedAuth(authProviderConfig);

  const currentUser: User | null = useMemo(() => {
    if (genUser || genProfile) {
      return {
        id: genUser?.id || genUser?.uid || 'usr-auth',
        name: genProfile?.name || genUser?.displayName || genUser?.email?.split('@')[0] || 'User',
        email: genUser?.email || genProfile?.email || '',
        role: (genUser?.role || genProfile?.role || 'customer') as any,
        loyaltyTier: 'Gold',
        loyaltyPoints: 350,
        avatar: genUser?.avatar || genProfile?.avatar,
        addresses: [],
        paymentMethods: [],
      };
    }
    return null;
  }, [genUser, genProfile]);

  const isLoggedIn = Boolean(currentUser);

  const logout = useCallback(() => {
    genSignOut();
  }, [genSignOut]);

  // -------------------------------------------------------------------------
  // 5. Actions
  // -------------------------------------------------------------------------
  const navigateTo = useCallback(
    (route?: any) => {
      if (typeof route === 'string') {
        route = { name: route };
      }
      if (typeof route === 'object' && route !== null) {
        // Auto-redirect if already logged in and visiting login/signup
        if (isLoggedIn && (route.name === 'login' || route.name === 'signup')) {
          if (onNavigate) {
            onNavigate('/profile');
            return;
          }
          route = { name: 'account' };
        }

        setCurrentRoute(route);

        if (route.name === 'admin') {
          const slug =
            data?.slug ||
            data?.siteSlug ||
            (window as any).__CURRENT_PROJECT_SLUG__ ||
            'store';
          window.open(`/#/admin/${slug}`, '_blank');
          return;
        }
        if (route.name === 'compare') {
          setIsCompareModalOpen(true);
          return;
        }
        if (route.name === 'cart') {
          setIsMiniCartOpen(true);
          return;
        }
        if (route.name === 'checkout') {
          setIsMiniCartOpen(false);
        }

        if (!isWebgenyHost && typeof window !== 'undefined') {
          window.location.hash = `#${route.name}`;
        }
        
        // If host app onNavigate is provided, route to the corresponding page in Webgeny
        if (onNavigate) {
          const rawName = String(route.name || '').toLowerCase().trim();
          if (rawName === 'home' || rawName === 'index') {
            onNavigate('/');
          } else {
            const candidateSlugs = [
              rawName,
              rawName === 'plp' ? 'shop' : '',
              rawName === 'plp' ? 'products' : '',
              rawName === 'plp' ? 'catalog' : '',
              rawName === 'pdp' ? 'product' : '',
              rawName === 'order-tracking' ? 'track' : '',
              rawName === 'order-tracking' ? 'order-tracking' : '',
              rawName === 'order-tracking' ? 'ordertracking' : '',
              rawName === 'faq' ? 'faq' : '',
              rawName === 'faq' ? 'support' : '',
              rawName === 'about' ? 'about' : '',
              rawName === 'contact' ? 'contact' : '',
              rawName === 'blog' ? 'blog' : '',
              rawName === 'blog' ? 'journal' : '',
            ].filter(Boolean);

            const match = pages?.find((p: any) =>
              candidateSlugs.includes(p.slug?.toLowerCase()) ||
              candidateSlugs.includes(p.name?.toLowerCase()) ||
              p.slug?.toLowerCase().includes(rawName) ||
              rawName.includes(p.slug?.toLowerCase() || '')
            );

            if (match) {
              onNavigate(match.slug === 'index' ? '/' : `/${match.slug}`);
            } else if (rawName !== 'cart' && rawName !== 'compare') {
              const targetEl = document.getElementById(rawName) ||
                               document.getElementById(`section-${rawName}`) ||
                               (rawName === 'plp' ? document.querySelector('[data-section-type="products"], [id*="product"], [id*="shop"]') : null);
              if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigate(`/${rawName}`);
              }
            }
          }
        }

        if (typeof window !== 'undefined') {
          // Scroll to matching section element if present on current template page
          const targetId = route.name === 'plp' || route.name === 'shop' ? 'shop' : route.name;
          const sectionAliases: Record<string, string[]> = {
            'order-tracking': ['order-tracking', 'orderTracking', 'track'],
            'faq': ['faq', 'support', 'help', 'supportHub'],
            'blog': ['blog', 'journal', 'news', 'articles'],
            'plp': ['shop', 'products', 'catalog', 'plp'],
            'shop': ['shop', 'products', 'catalog', 'plp'],
            'about': ['about', 'aboutUs', 'story', 'brand'],
            'contact': ['contact', 'contactUs'],
          };
          const candidates = [targetId, ...(sectionAliases[targetId] || [])];
          let targetElement: Element | null = null;
          for (const cand of candidates) {
            targetElement =
              document.getElementById(cand) ||
              document.querySelector(`[data-section-type="${cand}"]`) ||
              document.querySelector(`[id="${cand}"]`);
            if (targetElement) break;
          }

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          } else if (route.name === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }
    },
    [data, isLoggedIn, isWebgenyHost, onNavigate, pages],
  );

  const showToast = useCallback((title: string, message?: string) => {
    // In Webgeny preview, just log â€” exported sites can swap in a real toast lib
    console.log(`[OmniStore Toast] ${title}${message ? ': ' + message : ''}`);
  }, []);

  const addToCart = useCallback(
    (product: Product, options?: { quantity?: number; variantId?: string; attributes?: Record<string, any>; isSubscription?: boolean; subscriptionInterval?: string }) => {
      if (!isLoggedIn) {
        showToast('Sign In Required', 'Please sign in to add items to your shopping bag.');
        navigateTo({ name: 'login' });
        return;
      }
      const qty = options?.quantity ?? 1;
      setCart((prev) => {
        const key = `${product.id}_${options?.variantId || 'base'}_${JSON.stringify(options?.attributes || {})}`;
        const existing = prev.find((i) => i.id === key);
        if (existing) {
          return prev.map((i) => (i.id === key ? { ...i, quantity: i.quantity + qty } : i));
        }
        return [
          ...prev,
          {
            id: key,
            productId: product.id,
            variantId: options?.variantId,
            title: product.title,
            brand: product.brand,
            price: product.price,
            originalPrice: product.compareAtPrice,
            image: product.images[0]?.url || '',
            quantity: qty,
            selectedAttributes: options?.attributes,
            isSubscription: options?.isSubscription,
            subscriptionInterval: options?.subscriptionInterval,
          },
        ];
      });
      showToast('Added to Bag', `${product.title} added to your shopping bag.`);
    },
    [isLoggedIn, navigateTo, showToast],
  );

  const removeFromCart = useCallback(
    (cartItemId: string) => setCart((prev) => prev.filter((i) => i.id !== cartItemId)),
    [],
  );

  const updateCartQuantity = useCallback((cartItemId: string, quantity: number) => {
    setCart((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.id !== cartItemId)
        : prev.map((i) => (i.id === cartItemId ? { ...i, quantity } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const saveItemForLater = useCallback((cartItemId: string) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === cartItemId);
      if (!item) return prev;
      setSavedForLater((sfl) => [...sfl, { ...item, savedAt: new Date().toISOString() }]);
      return prev.filter((i) => i.id !== cartItemId);
    });
  }, []);

  const moveItemToCart = useCallback((savedItemId: string) => {
    setSavedForLater((prev) => {
      const item = prev.find((i) => i.id === savedItemId);
      if (!item) return prev;
      const { savedAt: _savedAt, ...cartItem } = item as any;
      setCart((c) => [...c, cartItem]);
      return prev.filter((i) => i.id !== savedItemId);
    });
  }, []);

  const removeSavedItem = useCallback(
    (savedItemId: string) => setSavedForLater((prev) => prev.filter((i) => i.id !== savedItemId)),
    [],
  );

  const moveCartItemToWishlist = useCallback((cartItemId: string) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === cartItemId);
      if (!item) return prev;
      setWishlist((wl) => (wl.includes(item.productId) ? wl : [...wl, item.productId]));
      return prev.filter((i) => i.id !== cartItemId);
    });
  }, []);

  // Coupon
  const applyCoupon = useCallback(
    (code: string): { success: boolean; message: string } => {
      const coupon = availableCoupons.find(
        (c) => c.code.toUpperCase() === code.toUpperCase() && c.isActive,
      );
      if (!coupon) return { success: false, message: 'Invalid or expired coupon code.' };
      if (coupon.minCartValue && cartSubtotal < coupon.minCartValue)
        return {
          success: false,
          message: `Minimum cart value of $${coupon.minCartValue} required.`,
        };
      setAppliedCoupon(coupon);
      showToast('Coupon Applied!', coupon.description);
      return { success: true, message: coupon.description };
    },
    [availableCoupons, cartSubtotal, showToast],
  );

  const removeCoupon = useCallback(() => setAppliedCoupon(null), []);

  // Wishlist
  const toggleWishlist = useCallback(
    (productId: string) => {
      if (!isLoggedIn) {
        showToast('Sign In Required', 'Please sign in to manage your wishlist.');
        navigateTo({ name: 'login' });
        return;
      }
      setWishlist((prev) =>
        prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
      );
    },
    [isLoggedIn, navigateTo, showToast],
  );
  const removeFromWishlist = useCallback(
    (productId: string) => setWishlist((prev) => prev.filter((id) => id !== productId)),
    [],
  );

  // Compare
  const toggleCompare = useCallback(
    (productId: string) =>
      setCompareList((prev) => {
        if (prev.includes(productId)) return prev.filter((id) => id !== productId);
        if (prev.length >= 4) {
          showToast('Comparison Limit', 'You can compare up to 4 products at a time.');
          return prev;
        }
        return [...prev, productId];
      }),
    [showToast],
  );
  const clearCompare = useCallback(() => setCompareList([]), []);
  const removeFromCompare = useCallback(
    (productId: string) => setCompareList((prev) => prev.filter((id) => id !== productId)),
    [],
  );

  const addRecentlyViewed = useCallback(
    (productId: string) =>
      setRecentlyViewed((prev) => [productId, ...prev.filter((id) => id !== productId)].slice(0, 20)),
    [],
  );

  // Orders
  const createOrder = useCallback(
    (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt' | 'trackingEvents'>): Order => {
      const generatedOrderNumber = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
      const orderId = `ord-${Date.now()}`;
      const now = new Date().toISOString();

      const newOrder: Order = {
        ...orderData,
        id: orderId,
        orderNumber: generatedOrderNumber,
        createdAt: now,
        updatedAt: now,
        trackingEvents: [
          {
            status: 'placed',
            title: 'Order Received',
            description: 'Order placed successfully and payment confirmed.',
            location: 'Order Fulfillment Hub',
            timestamp: new Date().toLocaleString(),
            completed: true,
          },
        ],
      };

      setOrders((prev) => [newOrder, ...prev]);

      // â”€â”€â”€ Sync with AdminDashboard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      if (typeof window !== 'undefined') {
        try {
          const adminOrderPayload = {
            id: `#${generatedOrderNumber}`,
            customerName: orderData.customerName || 'Guest Customer',
            customerEmail: orderData.customerEmail || 'shopper@example.com',
            date: now.replace('T', ' ').slice(0, 16),
            itemsCount: orderData.items?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 1,
            total: orderData.total || 0,
            paymentStatus: (orderData.paymentStatus === 'paid' ? 'Paid' : 'Pending') as 'Paid' | 'Pending',
            fulfillmentStatus: 'Processing' as const,
          };

          const adminOrderKey = storeSlug ? `webgeny_orders_${storeSlug}` : 'webgeny_orders_default';
          const existingRaw = localStorage.getItem(adminOrderKey);
          const existingOrders = existingRaw ? JSON.parse(existingRaw) : [];
          const updatedOrders = [adminOrderPayload, ...(Array.isArray(existingOrders) ? existingOrders : [])];

          localStorage.setItem(adminOrderKey, JSON.stringify(updatedOrders));
          localStorage.setItem('webgeny_orders_latest', JSON.stringify(updatedOrders));

          // Also update customer record
          const adminCustomerKey = storeSlug ? `webgeny_customers_${storeSlug}` : 'webgeny_customers_default';
          const existingCustRaw = localStorage.getItem(adminCustomerKey);
          const existingCustomers: any[] = existingCustRaw ? JSON.parse(existingCustRaw) : [];
          const matchedCust = existingCustomers.find((c) => c.email === adminOrderPayload.customerEmail);
          let updatedCustomers = [...existingCustomers];
          if (matchedCust) {
            matchedCust.ordersCount = (matchedCust.ordersCount || 0) + 1;
            matchedCust.totalSpent = (matchedCust.totalSpent || 0) + adminOrderPayload.total;
          } else {
            updatedCustomers.unshift({
              id: `CUST-${Math.floor(100 + Math.random() * 900)}`,
              name: adminOrderPayload.customerName,
              email: adminOrderPayload.customerEmail,
              ordersCount: 1,
              totalSpent: adminOrderPayload.total,
              joinedDate: now.slice(0, 10),
              status: 'Active',
            });
          }
          localStorage.setItem(adminCustomerKey, JSON.stringify(updatedCustomers));

          // Dispatch live event for open Admin Dashboard tabs
          window.dispatchEvent(
            new CustomEvent('webgeny_order_created', { detail: adminOrderPayload })
          );
        } catch (e) {
          console.warn('[OmniStoreContext] Order sync to Admin failed:', e);
        }
      }

      return newOrder;
    },
    [storeSlug],
  );

  // Reviews
  const addReview = useCallback(
    (review: Omit<Review, 'id' | 'createdAt' | 'likes' | 'dislikes' | 'approved'>) => {
      const newReview: Review = {
        ...review,
        id: `rev-${Date.now()}`,
        createdAt: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
        approved: true,
      };
      setReviews((prev) => ({
        ...prev,
        [review.productId]: [newReview, ...(prev[review.productId] || [])],
      }));
    },
    [],
  );

  // Q&A
  const addQuestion = useCallback((productId: string, question: string) => {
    const newQA: QAItem = {
      id: `qa-${Date.now()}`,
      productId,
      question,
      askedBy: 'Guest Shopper',
      askedAt: new Date().toISOString(),
      answers: [],
    };
    setQas((prev) => ({
      ...prev,
      [productId]: [newQA, ...(prev[productId] || [])],
    }));
  }, []);

  const resetFilters = useCallback(() => setFilterState(DEFAULT_FILTER_STATE), []);

  const syncWithCloud = useCallback(async () => {
    if (!initialUser?.id) return;
    try {
      await syncOmniWithCloud(initialUser.id, storeSlug, {
        cart,
        savedForLater,
        wishlist,
        compareList,
        recentlyViewed,
        orders,
        reviews,
        qas,
      });
      showToast('Cloud Sync', 'Your store bag, wishlist and orders are saved to your account.');
    } catch (err) {
      console.warn('Cloud sync error:', err);
    }
  }, [storeSlug, cart, savedForLater, wishlist, compareList, recentlyViewed, orders, reviews, qas, showToast]);

  const clearPersistentState = useCallback(() => {
    clearOmniStorage(storeSlug);
    setCart([]);
    setSavedForLater([]);
    setWishlist([]);
    setCompareList([]);
    setRecentlyViewed([]);
    setOrders([]);
    setReviews({});
    setQas({});
    showToast('Storage Reset', 'Local store cart, wishlist, and activity reset.');
  }, [storeSlug, showToast]);

  // -------------------------------------------------------------------------
  // 6. Context value
  // -------------------------------------------------------------------------
  const value: OmniStoreContextType = {
    currentRoute,
    navigateTo,
    activePreset,
    switchPreset: () => {},
    allPresets: [activePreset],
    storePresets: { [activePreset.id]: activePreset },
    multiVendorMode,
    setMultiVendorMode,
    products,
    categories,
    vendors: activePreset.vendors || [],
    setProducts,
    setCategories: setCategories as any,
    cart,
    savedForLater,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    saveItemForLater,
    moveItemToCart,
    removeSavedItem,
    moveCartItemToWishlist,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    loyaltyPointsToRedeem,
    setLoyaltyPointsToRedeem,
    giftWrapOption,
    setGiftWrapOption,
    orderNote,
    setOrderNote,
    cartSubtotal,
    cartDiscount,
    cartShippingFee,
    cartTax,
    cartLoyaltyCredit,
    cartTotal,
    wishlist,
    toggleWishlist,
    isInWishlist: (id) => wishlist.includes(id),
    removeFromWishlist,
    compareList,
    toggleCompare,
    isInCompare: (id) => compareList.includes(id),
    clearCompare,
    removeFromCompare,
    recentlyViewed,
    addRecentlyViewed,
    currentUser,
    isLoggedIn,
    logout,
    orders,
    createOrder,
    returnRequests,
    reviews,
    qas,
    questions: qas,
    addReview,
    addQuestion,
    filterState,
    setFilterState,
    resetFilters,
    theme,
    setTheme,
    updateThemeToken: (key, val) => {
      if (key === 'darkMode') return; // E-commerce is strictly light mode
      setTheme((prev) => ({ ...prev, [key]: val }));
    },
    locale,
    setLocale,
    currency,
    setCurrency,
    t: i18nT,
    isMiniCartOpen,
    setIsMiniCartOpen,
    isConfigDrawerOpen,
    setIsConfigDrawerOpen,
    quickViewProduct,
    setQuickViewProduct,
    isCompareModalOpen,
    setIsCompareModalOpen,
    showToast,
    syncWithCloud,
    clearPersistentState,
    storeConfig: undefined,
    pages,
    currentPageId,
    onNavigate,
  };

  return (
    <OmniStoreContext.Provider value={value}>
      {children}
    </OmniStoreContext.Provider>
  );
};

export const useStore = (): OmniStoreContextType => {
  const ctx = useContext(OmniStoreContext);
  if (!ctx) return FALLBACK_STORE;
  return ctx;
};

// ---------------------------------------------------------------------------
// Fallback (used when variants render outside a provider, e.g. export tooling)
// ---------------------------------------------------------------------------
const noop = () => {};
const FALLBACK_STORE: OmniStoreContextType = {
  currentRoute: { name: 'home' },
  navigateTo: noop,
  activePreset: {
    id: 'fallback', name: 'Store', tagline: 'Modern elegance.', categoryTag: 'NEW COLLECTION',
    currency: 'USD', currencySymbol: '$', theme: {
      presetName: 'fallback', primaryColor: '#18181b', primaryHover: '#3f3f46',
      secondaryColor: '#a1a1aa', accentColor: '#f59e0b', surfaceColor: '#ffffff',
      surfaceElevated: '#f4f4f5', textColor: '#09090b', textMuted: '#71717a',
      borderColor: '#e4e4e7', fontDisplay: 'Playfair Display, Georgia, serif',
      fontBody: 'Inter, system-ui, sans-serif', borderRadius: 'rounded-xl',
      shadowIntensity: 'shadow-sm', darkMode: false, direction: 'ltr',
    },
    categories: [], products: [], banners: [], vendors: [], blogPosts: [], defaultUnit: 'piece',
  },
  switchPreset: noop,
  allPresets: [],
  storePresets: {},
  multiVendorMode: true,
  setMultiVendorMode: noop,
  products: [],
  categories: [],
  vendors: [],
  setProducts: noop as any,
  setCategories: noop as any,
  cart: [],
  savedForLater: [],
  addToCart: noop as any,
  removeFromCart: noop,
  updateCartQuantity: noop as any,
  saveItemForLater: noop,
  moveItemToCart: noop,
  removeSavedItem: noop,
  moveCartItemToWishlist: noop,
  clearCart: noop,
  appliedCoupon: null,
  applyCoupon: () => ({ success: false, message: '' }),
  removeCoupon: noop,
  loyaltyPointsToRedeem: 0,
  setLoyaltyPointsToRedeem: noop as any,
  giftWrapOption: false,
  setGiftWrapOption: noop as any,
  orderNote: '',
  setOrderNote: noop as any,
  cartSubtotal: 0,
  cartDiscount: 0,
  cartShippingFee: 0,
  cartTax: 0,
  cartLoyaltyCredit: 0,
  cartTotal: 0,
  wishlist: [],
  toggleWishlist: noop as any,
  isInWishlist: () => false,
  removeFromWishlist: noop,
  compareList: [],
  toggleCompare: noop as any,
  isInCompare: () => false,
  clearCompare: noop,
  removeFromCompare: noop,
  recentlyViewed: [],
  addRecentlyViewed: noop,
  currentUser: null,
  isLoggedIn: false,
  logout: noop,
  orders: [],
  createOrder: (() => ({})) as any,
  returnRequests: [],
  reviews: {},
  qas: {},
  questions: {},
  addReview: noop as any,
  addQuestion: noop,
  filterState: {
    searchQuery: '', categoryId: '', brands: [], minPrice: 0, maxPrice: 3000,
    rating: null, inStockOnly: false, discountOnly: false, productType: 'all',
    attributes: {}, sortBy: 'featured',
  },
  setFilterState: noop as any,
  resetFilters: noop,
  theme: {
    presetName: 'fallback', primaryColor: '#18181b', primaryHover: '#3f3f46',
    secondaryColor: '#a1a1aa', accentColor: '#f59e0b', surfaceColor: '#ffffff',
    surfaceElevated: '#f4f4f5', textColor: '#09090b', textMuted: '#71717a',
    borderColor: '#e4e4e7', fontDisplay: 'Playfair Display, Georgia, serif',
    fontBody: 'Inter, system-ui, sans-serif', borderRadius: 'rounded-xl',
    shadowIntensity: 'shadow-sm', darkMode: false, direction: 'ltr',
  },
  setTheme: noop as any,
  updateThemeToken: noop as any,
  locale: 'en',
  setLocale: noop as any,
  currency: 'USD',
  setCurrency: noop as any,
  t: i18nT,
  isMiniCartOpen: false,
  setIsMiniCartOpen: noop,
  isConfigDrawerOpen: false,
  setIsConfigDrawerOpen: noop,
  quickViewProduct: null,
  setQuickViewProduct: noop as any,
  isCompareModalOpen: false,
  setIsCompareModalOpen: noop as any,
  showToast: noop as any,
};
