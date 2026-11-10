export type ProductType = 'simple' | 'variable' | 'bundle' | 'digital' | 'subscription';

export type UnitOfMeasure = 'piece' | 'kg' | 'g' | 'lb' | 'oz' | 'liter' | 'ml' | 'box' | 'pack' | 'pair' | 'set' | 'bottle' | 'sqft' | 'license';

export interface AttributeDef {
  key: string;
  label: string;
  type: 'select' | 'multiselect' | 'range' | 'color' | 'boolean' | 'text';
  options?: string[];
  colorCodes?: Record<string, string>; // e.g. { "Midnight Black": "#1a1a1a", "Crimson Red": "#e11d48" }
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  filterable: boolean;
  displayInSpec?: boolean;
  required?: boolean;
}

export interface CategorySchema {
  id: string;
  name: string;
  slug: string;
  icon?: string; // Lucide icon name
  parentId?: string | null;
  level: number; // 0 for root, 1 for sub, 2 for sub-sub
  image?: string;
  bannerImage?: string;
  description?: string;
  allowedUnits?: UnitOfMeasure[];
  attributes: AttributeDef[];
}

export interface ProductVariant {
  id: string;
  sku: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  stockQuantity: number;
  attributes: Record<string, string | number | boolean>;
  image?: string;
}

export interface ProductBundleItem {
  productId: string;
  variantId?: string;
  quantity: number;
  discountPercentage?: number;
}

export interface ProductDigitalAsset {
  fileName: string;
  fileSize: string;
  fileFormat: string;
  previewUrl?: string;
  downloadUrl?: string;
}

export interface ProductSubscriptionDetails {
  interval: 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'annual';
  discountPercentage: number;
  trialDays?: number;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  sku: string;
  categoryId: string;
  subcategoryId?: string;
  subSubcategoryId?: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  costPrice?: number;
  currency: string;
  type: ProductType;
  unitOfMeasure?: UnitOfMeasure;
  stockQuantity: number;
  lowStockThreshold?: number;
  images: { id: string; url: string; alt: string; isPrimary?: boolean }[];
  videoUrl?: string;
  shortDescription: string;
  fullDescription: string;
  specifications: Record<string, string>;
  attributes: Record<string, any>; // maps to category schema attributes
  variants?: ProductVariant[];
  bundleItems?: ProductBundleItem[];
  digitalAsset?: ProductDigitalAsset;
  subscriptionDetails?: ProductSubscriptionDetails;
  rating: number;
  reviewCount: number;
  ratingDistribution: Record<number, number>; // { 1: 2, 2: 1, 3: 5, 4: 18, 5: 45 }
  isFeatured?: boolean;
  isTrending?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  flashSale?: {
    endDate: string; // ISO date string
    discountPercent: number;
  };
  tags: string[];
  sellerId?: string;
  warranty?: string;
  returnPolicy?: string;
  minOrderQuantity?: number;
  maxOrderQuantity?: number;
  badge?: string; // e.g. "Eco-Friendly", "Bestseller", "Editor's Pick"
  createdAt: string;
}

export interface CartItem {
  id: string; // unique item uuid (can be product + variant + options)
  productId: string;
  variantId?: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  unitOfMeasure?: UnitOfMeasure;
  selectedAttributes?: Record<string, any>;
  sellerId?: string;
  isSubscription?: boolean;
  subscriptionInterval?: string;
  digitalDownload?: boolean;
  giftWrap?: boolean;
  orderNote?: string;
}

export interface SavedForLaterItem extends CartItem {
  savedAt: string;
}

export interface Address {
  id: string;
  userId?: string;
  fullName: string;
  phone: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefaultShipping?: boolean;
  isDefaultBilling?: boolean;
  type: 'home' | 'work' | 'other';
}

export interface TrackingEvent {
  status: string;
  title: string;
  description: string;
  location: string;
  timestamp: string;
  completed: boolean;
}

export interface ReturnRequest {
  id: string;
  orderId: string;
  orderNumber: string;
  itemId: string;
  reason: string;
  status: 'requested' | 'approved' | 'item_received' | 'refunded' | 'rejected';
  requestedAt: string;
  refundAmount: number;
  notes?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  variantId?: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  unitOfMeasure?: UnitOfMeasure;
  attributes?: Record<string, any>;
  sellerId?: string;
  isDigital?: boolean;
  digitalDownloadUrl?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  tax: number;
  loyaltyCreditApplied?: number;
  total: number;
  currency: string;
  paymentStatus: 'paid' | 'pending' | 'failed' | 'refunded';
  paymentMethod: 'credit_card' | 'paypal' | 'apple_pay' | 'crypto' | 'cod';
  shippingMethod: 'standard' | 'express' | 'overnight' | 'pickup';
  shippingAddress: Address;
  billingAddress: Address;
  orderStatus: 'placed' | 'confirmed' | 'processing' | 'shipped' | 'out_for_delivery' | 'delivered' | 'cancelled' | 'returned';
  trackingNumber?: string;
  carrier?: string;
  trackingEvents: TrackingEvent[];
  estimatedDeliveryDate: string;
  couponCode?: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
  isGift?: boolean;
  giftMessage?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId?: string;
  userName: string;
  userAvatar?: string;
  verifiedPurchase: boolean;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  likes: number;
  dislikes: number;
  userVote?: 'like' | 'dislike' | null;
  sellerReply?: {
    author: string;
    content: string;
    date: string;
  };
  createdAt: string;
  flagged?: boolean;
  approved: boolean;
}

export interface QAAnswer {
  id: string;
  answer: string;
  answeredBy: string;
  answeredAt: string;
  isOfficialSeller: boolean;
  upvotes: number;
  userUpvoted?: boolean;
}

export interface QAItem {
  id: string;
  productId: string;
  question: string;
  askedBy: string;
  askedAt: string;
  answers: QAAnswer[];
}

export interface Coupon {
  code: string;
  description: string;
  type: 'percentage' | 'fixed' | 'free_shipping' | 'bogo';
  value: number;
  minCartValue?: number;
  maxDiscount?: number;
  categoryId?: string;
  productId?: string;
  firstOrderOnly?: boolean;
  expiryDate?: string;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
}

export interface LoyaltyProgram {
  pointsBalance: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  tierProgress: number; // percentage to next tier
  history: {
    id: string;
    points: number;
    type: 'earn' | 'redeem' | 'bonus';
    description: string;
    date: string;
  }[];
}

export interface SavedPayment {
  id: string;
  type: 'visa' | 'mastercard' | 'amex' | 'paypal';
  last4: string;
  expiry: string;
  holderName: string;
  isDefault: boolean;
}

export interface NotificationPreferences {
  orderUpdatesEmail: boolean;
  orderUpdatesSms: boolean;
  priceDropAlerts: boolean;
  backInStockAlerts: boolean;
  promotionsNewsletter: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'admin' | 'vendor';
  avatar?: string;
  loyalty: LoyaltyProgram;
  referralCode: string;
  referredCount: number;
  referralEarnings: number;
  addresses: Address[];
  savedPayments: SavedPayment[];
  notificationSettings: NotificationPreferences;
  is2FAEnabled: boolean;
  vendorId?: string;
  createdAt: string;
}

export interface Vendor {
  id: string;
  name: string;
  slug: string;
  logo: string;
  banner: string;
  rating: number;
  reviewCount: number;
  salesCount: number;
  description: string;
  location: string;
  commissionRate: number; // percentage taken by marketplace
  joinedDate: string;
  email: string;
  phone: string;
  balance: number;
  payoutMethod: string;
  isVerified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface ThemeTokens {
  presetName: string;
  primaryColor: string;
  primaryHover: string;
  secondaryColor: string;
  accentColor: string;
  surfaceColor: string;
  surfaceElevated: string;
  textColor: string;
  textMuted: string;
  borderColor: string;
  fontDisplay: string;
  fontBody: string;
  borderRadius: 'rounded-none' | 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-full';
  shadowIntensity: 'shadow-none' | 'shadow-sm' | 'shadow-md' | 'shadow-lg';
  darkMode: boolean;
  direction: 'ltr' | 'rtl';
}

export interface StorePreset {
  id: string;
  name: string;
  tagline: string;
  categoryTag: string; // e.g. "Fashion", "Tech & Electronics", "Home & Living", "Gourmet Grocery"
  currency: string;
  currencySymbol: string;
  theme: ThemeTokens;
  categories: CategorySchema[];
  products: Product[];
  banners: {
    id: string;
    title: string;
    subtitle: string;
    tag: string;
    ctaText: string;
    linkCategory: string;
    image: string;
    accentColor: string;
    overlayGradient: string;
  }[];
  vendors: Vendor[];
  blogPosts: BlogPost[];
  defaultUnit: UnitOfMeasure;
}

// ---------------------------------------------------------------------------
// Master-template store configuration (drives variant + style resolution)
// ---------------------------------------------------------------------------

/** Store types a generated store can belong to. Mirrors Webgeny's e-commerce subtypes. */
export type StoreType =
  | 'fashion'
  | 'electronics'
  | 'home'
  | 'grocery'
  | 'food'
  | 'beauty'
  | 'furniture'
  | 'sports'
  | 'luxury'
  | 'handmade';

export type VariantSectionType =
  | 'navbar'
  | 'hero'
  | 'about'
  | 'footer'
  | 'productGrid'
  | 'productDetail'
  | 'cart'
  | 'checkout';

export interface StoreConfig {
  /** Seed that deterministically produced every pick below (reproducible). */
  seed: number;
  /** Which bundled catalog/content set the store sells. */
  storeType: StoreType;
  /** Zero-based variant index per section type. */
  sectionVariants: Record<VariantSectionType, number>;
  /** Style-preset entry ids chosen per dimension (see config/stylePresets.ts). */
  stylePicks: {
    typography: string;
    palette: string;
    layout: string;
    whitespace: string;
  };
  /** True when the config was generated by Webgeny rather than dev defaults. */
  source: 'webgeny' | 'dev' | 'default';
}

export type ViewRoute =
  | { name: 'home' }
  | { name: 'category'; categorySlug: string; subcategorySlug?: string }
  | { name: 'plp'; query?: string; categoryId?: string; filterTag?: string }
  | { name: 'pdp'; productId: string }
  | { name: 'cart' }
  | { name: 'checkout'; step?: 'address' | 'delivery' | 'payment' | 'review' | 'confirmation'; orderId?: string }
  | { name: 'account'; tab?: 'profile' | 'orders' | 'order-detail' | 'addresses' | 'loyalty' | 'wishlist' | 'settings' | 'security'; selectedOrderId?: string }
  | { name: 'dashboard'; tab?: 'profile' | 'orders' | 'order-detail' | 'addresses' | 'loyalty' | 'wishlist' | 'settings' | 'security' }
  | { name: 'login' }
  | { name: 'signup' }
  | { name: 'admin'; section?: 'dashboard' | 'products' | 'categories' | 'inventory' | 'orders' | 'marketing' | 'reviews' | 'theme' | 'analytics' | 'settings' }
  | { name: 'vendor-store'; vendorId: string }
  | { name: 'vendor-dashboard'; vendorId?: string }
  | { name: 'compare' }
  | { name: 'wishlist' }
  | { name: 'blog'; postId?: string }
  | { name: 'faq' }
  | { name: 'about' }
  | { name: 'contact' }
  | { name: 'terms' }
  | { name: 'privacy' }
  | { name: 'shipping-policy' }
  | { name: 'order-tracking'; orderNumber?: string }
  | { name: 'store-locator' }
  | { name: '404' };

export interface FilterState {
  searchQuery: string;
  categoryId?: string;
  subcategoryId?: string;
  brands: string[];
  minPrice: number;
  maxPrice: number;
  rating: number | null;
  inStockOnly: boolean;
  discountOnly: boolean;
  productType?: ProductType | 'all';
  unitOfMeasure?: string;
  attributes: Record<string, any>; // e.g. { size: ['M', 'L'], color: ['Black'], ram: ['16GB'] }
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating' | 'discount';
}
