import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import { Product, ProductVariant, Review } from './types';
import { ProductCard } from './ProductCard';
import {
  Star,
  ShoppingBag,
  Heart,
  Scale,
  Truck,
  RotateCcw,
  ShieldCheck,
  Share2,
  Plus,
  Minus,
  Check,
  Sparkles,
  Info,
  Layers,
  ChevronRight,
  MessageSquare,
  HelpCircle,
  ThumbsUp,
  Flame,
  Zap,
  Ruler,
  X,
  Type,
  Gift,
  Award,
} from 'lucide-react';
import { formatCurrency } from './utils';

interface ProductDetailPageProps {
  productId?: string;
  data?: any;
  product?: Product;
}

export const ProductDetail: React.FC<ProductDetailPageProps> = ({ productId, data, product: propProduct }) => {
  const {
    activePreset,
    products,
    categories,
    reviews,
    addReview,
    questions,
    addQuestion,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    currency,
    navigateTo,
    showToast,
    multiVendorMode,
    t,
  } = useStore();

  const product = (productId ? products?.find((p) => p.id === productId) : undefined) || propProduct || (products && products[0]);
  const category = categories?.find((c) => c.id === product?.categoryId);

  // States
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product?.variants?.[0] || null
  );
  const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string | number | boolean>>(
    product?.variants?.[0]?.attributes || {}
  );
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscriptionInterval, setSubscriptionInterval] = useState<'1 month' | '2 months' | '3 months'>('1 month');
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews' | 'qa' | 'shipping'>('specs');

  // Review submission form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [selectedReviewRatingFilter, setSelectedReviewRatingFilter] = useState<number | 'all'>('all');
  const [reviewHelpfulVotes, setReviewHelpfulVotes] = useState<Record<string, number>>({});

  // Monogram & Personalization Studio state
  const [isMonogramEnabled, setIsMonogramEnabled] = useState(false);
  const [monogramInitials, setMonogramInitials] = useState('');
  const [monogramFoil, setMonogramFoil] = useState<'gold' | 'silver' | 'blind'>('gold');
  const [monogramPlacement, setMonogramPlacement] = useState('Front Bottom Corner');

  // Size & Fit Advisor modal state
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [sizeUnit, setSizeUnit] = useState<'cm' | 'in'>('cm');

  // Q&A submission form state
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionAuthor, setNewQuestionAuthor] = useState('');

  // Frequently bought together bundle checkboxes
  const relatedProducts = products.filter((p) => p.id !== product?.id && p.categoryId === product?.categoryId).slice(0, 2);
  const [bundleSelected, setBundleSelected] = useState<Record<string, boolean>>({
    ...(product ? { [product.id]: true } : {}),
    ...(relatedProducts[0] ? { [relatedProducts[0].id]: true } : {}),
  });

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold mb-4">Product Not Found</h2>
        <button
          onClick={() => navigateTo({ name: 'plp' })}
          className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  const currentPrice = selectedVariant?.price || product.price;
  const currentComparePrice = selectedVariant?.compareAtPrice || product.compareAtPrice;
  const currentStock = selectedVariant ? selectedVariant.stockQuantity : product.stockQuantity;
  const inWish = isInWishlist(product.id);
  const inComp = isInCompare(product.id);

  // Bulk Tier Discounts
  const bulkTiers = [
    { qty: 1, discount: 0 },
    { qty: 2, discount: 5 },
    { qty: 5, discount: 10 },
  ];

  // Image zoom handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleAttributeSelect = (attrKey: string, value: string | number | boolean) => {
    const updated = { ...selectedAttributes, [attrKey]: value };
    setSelectedAttributes(updated);

    // Match variant
    const match = product.variants?.find((v) =>
      Object.entries(updated).every(([k, val]) => v.attributes?.[k] === val)
    );
    if (match) {
      setSelectedVariant(match);
      if (match.image) {
        const imgIdx = (product.images || []).findIndex((img) => img.url === match.image);
        if (imgIdx !== -1) setSelectedImageIndex(imgIdx);
      }
    }
  };

  const handleAddToCart = (directToCheckout = false) => {
    const finalAttributes = { ...selectedAttributes };
    if (isMonogramEnabled && monogramInitials.trim()) {
      finalAttributes['Personalization'] = `Embossed "${monogramInitials.toUpperCase().trim()}" [${monogramFoil.toUpperCase()} FOIL - ${monogramPlacement}]`;
    }

    addToCart(product, {
      variantId: selectedVariant?.id,
      quantity,
      attributes: finalAttributes,
      isSubscription,
      subscriptionInterval: isSubscription ? subscriptionInterval : undefined,
    });
    if (directToCheckout) {
      navigateTo({ name: 'checkout', step: 'address' });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Product link copied to clipboard.', 'info');
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim() || !newReviewAuthor.trim()) return;

    addReview({
      productId: product.id,
      userId: 'user_custom',
      userName: newReviewAuthor,
      userAvatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80`,
      rating: newReviewRating,
      title: newReviewTitle || 'Verified Purchase Feedback',
      content: newReviewComment,
      verifiedPurchase: true,
    });

    setShowReviewForm(false);
    setNewReviewTitle('');
    setNewReviewComment('');
    setNewReviewAuthor('');
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim() || !newQuestionAuthor.trim()) return;

    addQuestion(product.id, newQuestionText);

    setShowQuestionForm(false);
    setNewQuestionText('');
    setNewQuestionAuthor('');
  };

  // Filter reviews and questions for this product safely from store Record
  const productReviews = (product && reviews ? reviews[product.id] : []) || [];
  const productQuestions = (product && questions ? questions[product.id] : []) || [];

  // Bundle Total Calculation
  const bundleItems = [product, ...relatedProducts].filter((p) => bundleSelected[p.id]);
  const bundleSubtotal = bundleItems.reduce((acc, p) => acc + p.price, 0);
  const bundleDiscountedTotal = bundleSubtotal * 0.9; // 10% bundle discount

  const handleAddBundleToCart = () => {
    bundleItems.forEach((p) => addToCart(p, { quantity: 1 }));
    showToast('Bundle Added', 'All selected bundle items added to your bag with 10% savings!', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb Bar */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500">
        <button onClick={() => navigateTo({ name: 'home' })} className="hover:text-black dark:hover:text-white">
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        {category && (
          <>
            <button
              onClick={() => navigateTo({ name: 'plp', categoryId: category.id })}
              className="hover:text-black dark:hover:text-white"
            >
              {category.name}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        )}
        <span className="text-zinc-900 dark:text-white font-medium truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Main Grid: Gallery on Left, Details & Selectors on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Gallery Section (5 Columns) */}
        <div className="lg:col-span-6 lg:order-2 space-y-4">
          {/* Main Stage with Loupe Zoom */}
          <div
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            className="relative aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-crosshair border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            <img
              src={product.images?.[selectedImageIndex]?.url || product.images?.[0]?.url || ''}
              alt={product.title}
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
              className="w-full h-full object-cover"
            />

            {/* High-res zoom window */}
            {isZoomed && (
              <div
                className="absolute inset-0 pointer-events-none bg-no-repeat z-20"
                style={{
                  backgroundImage: `url(${product.images?.[selectedImageIndex]?.url || product.images?.[0]?.url || ''})`,
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  backgroundSize: '250%',
                }}
              />
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10 pointer-events-none">
              {product.isFeatured && (
                <span className="bg-zinc-950 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Featured Drop
                </span>
              )}
              {currentStock <= 5 && currentStock > 0 && (
                <span className="bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-md animate-pulse">
                  Only {currentStock} left in stock
                </span>
              )}
            </div>
          </div>

          {/* Thumbnails strip */}
          <div className="flex flex-wrap gap-3 pb-2">
            {(product.images || []).map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                  selectedImageIndex === idx
                    ? 'border-black dark:border-white scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Config & Order Panel (7 Columns) */}
        <div className="lg:col-span-6 lg:order-1 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                {product.brand}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
                  title="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${
                    inWish ? 'text-rose-500' : 'text-zinc-500'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWish ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => toggleCompare(product.id)}
                  className={`p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${
                    inComp ? 'text-purple-600' : 'text-zinc-500'
                  }`}
                  title="Compare"
                >
                  <Scale className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white mt-1 mb-2">
              {product.title}
            </h1>

            {/* Ratings & Stock pill */}
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-zinc-900 dark:text-white ml-1">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <button
                onClick={() => setActiveTab('reviews')}
                className="text-zinc-500 hover:underline"
              >
                ({productReviews.length} customer reviews)
              </button>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                {currentStock > 0 ? `Ready to Dispatch (${currentStock} in inventory)` : 'Backordered'}
              </span>
            </div>
          </div>

          {/* Pricing & Unit */}
          <div className="flex items-baseline gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
              {formatCurrency(currentPrice, currency)}
            </span>
            {currentComparePrice && currentComparePrice > currentPrice && (
              <span className="text-base text-zinc-400 line-through">
                {formatCurrency(currentComparePrice, currency)}
              </span>
            )}
            {product.unitOfMeasure && (
              <span className="text-xs text-zinc-500 font-medium bg-zinc-200 dark:bg-zinc-700 px-2 py-0.5 rounded">
                per {product.unitOfMeasure}
              </span>
            )}
            {multiVendorMode && ((product as any).vendorName || product.brand) && (
              <span className="ml-auto text-xs text-zinc-400">
                Sold by <strong className="text-zinc-700 dark:text-zinc-200">{(product as any).vendorName || product.brand}</strong>
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {product.shortDescription || product.fullDescription || ''}
          </p>

          {/* Dynamic Variant Attributes Matrix */}
          {product.variants && product.variants.length > 1 && (
            <div className="space-y-4 pt-2">
              {Array.from(new Set<string>(product.variants.flatMap((v) => Object.keys(v.attributes || {})))).map((attrKey) => {
                const distinctValues: (string | number | boolean)[] = Array.from(
                  new Set(product.variants!.map((v) => v.attributes?.[attrKey]).filter((val): val is string | number | boolean => val !== undefined))
                );
                const isSizeKey = attrKey.toLowerCase().includes('size');

                return (
                  <div key={attrKey}>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        {attrKey}: <span className="text-zinc-900 dark:text-white capitalize">{String(selectedAttributes[attrKey] || '')}</span>
                      </label>
                      {isSizeKey && (
                        <button
                          type="button"
                          onClick={() => setShowSizeGuide(true)}
                          className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors underline decoration-dotted underline-offset-2"
                        >
                          <Ruler className="w-3.5 h-3.5" />
                          <span>Size & Fit Advisor</span>
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {distinctValues.map((val) => {
                        const isSelected = selectedAttributes[attrKey] === val;
                        return (
                          <button
                            key={String(val)}
                            onClick={() => handleAttributeSelect(attrKey, val)}
                            className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all ${
                              isSelected
                                ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black shadow-md font-bold'
                                : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-400'
                            }`}
                          >
                            {String(val)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bespoke Monogramming & Custom Inscription Studio */}
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isMonogramEnabled}
                  onChange={(e) => setIsMonogramEnabled(e.target.checked)}
                  className="rounded accent-black dark:accent-white"
                />
                <div className="flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">
                    Bespoke Monogram & Foil Inscription
                  </span>
                </div>
              </label>
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-200/60 dark:border-amber-800/40">
                Complimentary {activePreset?.name || 'Studio'} Craft
              </span>
            </div>

            {isMonogramEnabled && (
              <div className="pt-2 space-y-3 border-t border-zinc-200 dark:border-zinc-800 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Initials (Max 4 Chars)
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      value={monogramInitials}
                      onChange={(e) => setMonogramInitials(e.target.value.toUpperCase())}
                      placeholder="e.g. A.R."
                      className="w-full uppercase font-mono tracking-widest text-center text-sm font-bold bg-white dark:bg-zinc-800 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Foil Finish
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setMonogramFoil('gold')}
                        className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-center ${
                          monogramFoil === 'gold'
                            ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                            : 'border-zinc-200 dark:border-zinc-700'
                        }`}
                      >
                        Gold
                      </button>
                      <button
                        type="button"
                        onClick={() => setMonogramFoil('silver')}
                        className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-center ${
                          monogramFoil === 'silver'
                            ? 'border-zinc-400 bg-zinc-400/10 text-zinc-800 dark:text-zinc-200'
                            : 'border-zinc-200 dark:border-zinc-700'
                        }`}
                      >
                        Silver
                      </button>
                      <button
                        type="button"
                        onClick={() => setMonogramFoil('blind')}
                        className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-center ${
                          monogramFoil === 'blind'
                            ? 'border-black dark:border-white bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white'
                            : 'border-zinc-200 dark:border-zinc-700'
                        }`}
                      >
                        Deboss
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Foil Embossing Simulator */}
                {monogramInitials.trim() && (
                  <div className="p-3 bg-zinc-900 text-white rounded-xl border border-zinc-700 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider block">
                        Live Hot-Stamp Simulation
                      </span>
                      <p
                        className={`text-lg font-serif font-bold tracking-[0.3em] uppercase ${
                          monogramFoil === 'gold'
                            ? 'text-amber-300 drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)]'
                            : monogramFoil === 'silver'
                            ? 'text-zinc-200 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]'
                            : 'text-zinc-500 drop-shadow-[0_-1px_1px_rgba(0,0,0,0.8)]'
                        }`}
                      >
                        {monogramInitials}
                      </p>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      Hand-Crafted by {activePreset?.name || 'Artisans'}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Subscription / Auto-Ship Toggle */}
          <div className="p-4 rounded-2xl border-2 border-dashed border-emerald-500/40 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isSubscription}
                  onChange={(e) => setIsSubscription(e.target.checked)}
                  className="rounded accent-emerald-600"
                />
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  Subscribe & Save an Extra 10%
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {formatCurrency(currentPrice * 0.9, currency)}
              </span>
            </label>

            {isSubscription && (
              <div className="flex items-center gap-3 pt-2 text-xs">
                <span className="text-zinc-500">Delivery Frequency:</span>
                <select
                  value={subscriptionInterval}
                  onChange={(e) => setSubscriptionInterval(e.target.value as any)}
                  className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white px-3 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 font-semibold"
                >
                  <option value="1 month">Every 1 Month</option>
                  <option value="2 months">Every 2 Months</option>
                  <option value="3 months">Every 3 Months</option>
                </select>
              </div>
            )}
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex gap-3">
              {/* Stepper */}
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-1 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-zinc-500 hover:text-black dark:hover:text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 text-sm font-bold min-w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(currentStock, quantity + 1))}
                  className="p-3 text-zinc-500 hover:text-black dark:hover:text-white"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Bag */}
              <button
                onClick={() => handleAddToCart(false)}
                disabled={currentStock <= 0}
                className="flex-1 bg-black dark:bg-white text-white dark:text-black font-bold text-sm py-4 rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-98 disabled:opacity-50"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add {quantity > 1 ? `(${quantity})` : ''} to Bag</span>
              </button>

              {/* Buy Now (Direct Checkout) */}
              <button
                onClick={() => handleAddToCart(true)}
                disabled={currentStock <= 0}
                className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold text-sm px-6 py-4 rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-lg active:scale-98 disabled:opacity-50"
              >
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Instant Buy</span>
              </button>
            </div>
          </div>

          {/* Delivery speed & Carbon-neutral pledge */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300">
            <div className="flex items-center gap-2 p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-xl">
              <Truck className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Est. Delivery: <strong>2-3 Business Days</strong></span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-xl">
              <RotateCcw className="w-4 h-4 text-purple-500 shrink-0" />
              <span>Complimentary <strong>30-Day Returns</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Bought Together Bundle */}
      {relatedProducts.length > 0 && (
        <section className="bg-zinc-50 dark:bg-zinc-800/40 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-bold font-display text-zinc-900 dark:text-white mb-1">
            Frequently Bought Together
          </h3>
          <p className="text-xs text-zinc-500 mb-6">
            Bundle with matching items from the {product.brand} collection and receive an automatic 10% off.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Products Strip */}
            <div className="flex flex-wrap items-center gap-4">
              {[product, ...relatedProducts].map((item, idx) => (
                <React.Fragment key={item.id}>
                  <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <input
                      type="checkbox"
                      checked={bundleSelected[item.id] || false}
                      onChange={(e) => setBundleSelected({ ...bundleSelected, [item.id]: e.target.checked })}
                      className="rounded accent-black dark:accent-white"
                    />
                    <img src={item.images[0]?.url} alt="" className="w-14 h-14 object-cover rounded-xl" />
                    <div>
                      <p className="text-xs font-bold line-clamp-1 max-w-[150px]">{item.title}</p>
                      <p className="text-xs text-zinc-500 font-semibold">{formatCurrency(item.price, currency)}</p>
                    </div>
                  </div>
                  {idx < relatedProducts.length && (
                    <span className="text-zinc-400 font-bold">+</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Bundle Total & CTA */}
            <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 w-full lg:w-auto justify-between lg:justify-start">
              <div>
                <p className="text-xs text-zinc-400 line-through">{formatCurrency(bundleSubtotal, currency)}</p>
                <p className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                  {formatCurrency(bundleDiscountedTotal, currency)}
                </p>
              </div>
              <button
                onClick={handleAddBundleToCart}
                className="bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-6 py-3 rounded-xl hover:bg-zinc-800 transition-colors"
              >
                Add Bundle to Bag
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Information Hub: Specs, Reviews, Q&A */}
      <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
        {/* Tab Headers */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-8 text-sm font-bold">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-4 border-b-2 transition-colors ${
              activeTab === 'specs'
                ? 'border-black dark:border-white text-black dark:text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-700'
            }`}
          >
            Technical Specs & Attributes
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 border-b-2 transition-colors ${
              activeTab === 'reviews'
                ? 'border-black dark:border-white text-black dark:text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-700'
            }`}
          >
            Customer Reviews ({productReviews.length})
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`pb-4 border-b-2 transition-colors ${
              activeTab === 'qa'
                ? 'border-black dark:border-white text-black dark:text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-700'
            }`}
          >
            Q&A ({productQuestions.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="pt-6">
          {/* Tab 1: Specs */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold mb-3 text-zinc-900 dark:text-white">
                  Dynamic Schema Specification
                </h4>
                <div className="bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl p-4 divide-y divide-zinc-200 dark:divide-zinc-700 text-xs">
                  <div className="py-2.5 flex justify-between">
                    <span className="text-zinc-500">SKU</span>
                    <span className="font-mono font-semibold">{product.sku}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-zinc-500">Category Schema</span>
                    <span className="font-semibold">{category?.name || 'Standard'}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-zinc-500">Unit of Measure</span>
                    <span className="font-semibold capitalize">{product.unitOfMeasure || 'piece'}</span>
                  </div>
                  {product.attributes &&
                    Object.entries(product.attributes).map(([k, val]) => (
                      <div key={k} className="py-2.5 flex justify-between">
                        <span className="text-zinc-500 capitalize">{k.replace('_', ' ')}</span>
                        <span className="font-semibold">
                          {Array.isArray(val) ? val.join(', ') : String(val)}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold mb-3 text-zinc-900 dark:text-white">
                  Detailed Product Description
                </h4>
                <div className="prose dark:prose-invert text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <p>{product.fullDescription || product.shortDescription || ''}</p>
                  <p className="mt-3">
                    Every piece is crafted to the highest quality standards, verified by internal QA before fulfillment from our climate-controlled hubs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Rating Overview & Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-zinc-50 dark:bg-zinc-800/40 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <div className="md:col-span-4 flex flex-col justify-center space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-sm text-zinc-400 font-semibold">/ 5.0</span>
                  </div>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500">
                    Based on {productReviews.length} verified customer submissions
                  </p>
                  <button
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="mt-3 inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors w-fit"
                  >
                    {showReviewForm ? 'Cancel Form' : 'Write a Verified Review'}
                  </button>
                </div>

                {/* Star Percentage Bars */}
                <div className="md:col-span-8 flex flex-col justify-center space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = productReviews.filter((r) => Math.round(r.rating) === stars).length;
                    const pct = productReviews.length > 0 ? Math.round((count / productReviews.length) * 100) : stars === 5 ? 80 : stars === 4 ? 20 : 0;
                    return (
                      <div key={stars} className="flex items-center gap-3 text-xs">
                        <span className="w-12 font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
                          <span>{stars}</span>
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        </span>
                        <div className="flex-1 bg-zinc-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-amber-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-10 text-right text-zinc-400 font-mono text-[11px]">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Rating Filter Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-bold text-zinc-500 mr-1">Filter Reviews:</span>
                <button
                  onClick={() => setSelectedReviewRatingFilter('all')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                    selectedReviewRatingFilter === 'all'
                      ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-xs'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                  }`}
                >
                  All ({productReviews.length})
                </button>
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = productReviews.filter((r) => Math.round(r.rating) === stars).length;
                  if (count === 0 && selectedReviewRatingFilter !== stars) return null;
                  return (
                    <button
                      key={stars}
                      onClick={() => setSelectedReviewRatingFilter(stars)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all flex items-center gap-1 ${
                        selectedReviewRatingFilter === stars
                          ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-xs'
                          : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                      }`}
                    >
                      <span>{stars} Stars</span>
                      <span className="text-[10px] opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Review Form */}
              {showReviewForm && (
                <form onSubmit={handleSubmitReview} className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-3xl space-y-4 max-w-xl">
                  <h4 className="text-sm font-bold">Submit Your Feedback</h4>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      placeholder="e.g. Jessica M."
                      className="w-full bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-xs border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReviewRating(star)}
                          className="p-1 text-amber-400"
                        >
                          <Star className={`w-6 h-6 ${star <= newReviewRating ? 'fill-current' : 'text-zinc-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Headline</label>
                    <input
                      type="text"
                      value={newReviewTitle}
                      onChange={(e) => setNewReviewTitle(e.target.value)}
                      placeholder="e.g. Exceptional craftsmanship and speed!"
                      className="w-full bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-xs border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Review Comments</label>
                    <textarea
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="Tell other shoppers how this product fit your specifications..."
                      rows={3}
                      className="w-full bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-xs border"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl text-xs font-bold"
                  >
                    Post Review
                  </button>
                </form>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {productReviews
                  .filter((r) => (selectedReviewRatingFilter === 'all' ? true : Math.round(r.rating) === selectedReviewRatingFilter))
                  .map((rev) => {
                    const currentHelpful = reviewHelpfulVotes[rev.id] ?? rev.likes;
                    return (
                      <div key={rev.id} className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            {rev.userAvatar ? (
                              <img src={rev.userAvatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                {rev.userName.charAt(0)}
                              </div>
                            )}
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-zinc-900 dark:text-white">{rev.userName}</span>
                                {rev.verifiedPurchase && (
                                  <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-semibold border border-emerald-200/50 dark:border-emerald-800/50 flex items-center gap-1">
                                    <Check className="w-2.5 h-2.5" />
                                    Verified Buyer
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-zinc-400">
                                Reviewed on {new Date(rev.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <div className="flex text-amber-400">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-3.5 h-3.5 ${s <= rev.rating ? 'fill-current' : 'text-zinc-200 dark:text-zinc-700'}`}
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-bold text-zinc-900 dark:text-white mb-1">{rev.title}</p>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {rev.comment}
                          </p>
                        </div>

                        {/* Helpful vote */}
                        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[11px]">
                          <span className="text-zinc-400">Was this review helpful?</span>
                          <button
                            onClick={() => {
                              setReviewHelpfulVotes((prev) => ({
                                ...prev,
                                [rev.id]: (prev[rev.id] ?? rev.likes) + 1,
                              }));
                              showToast('Vote Recorded', 'Thank you for your feedback.', 'info');
                            }}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold transition-colors"
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span>Helpful ({currentHelpful})</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Tab 3: Q&A */}
          {activeTab === 'qa' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl">
                <div>
                  <h4 className="text-sm font-bold">Have a technical or sizing question?</h4>
                  <p className="text-xs text-zinc-500">Ask our customer concierge or community verified buyers.</p>
                </div>
                <button
                  onClick={() => setShowQuestionForm(!showQuestionForm)}
                  className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-6 py-3 rounded-full hover:bg-zinc-800"
                >
                  {showQuestionForm ? 'Cancel' : 'Ask a Question'}
                </button>
              </div>

              {/* Question Form */}
              {showQuestionForm && (
                <form onSubmit={handleSubmitQuestion} className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-3xl space-y-4 max-w-xl">
                  <h4 className="text-sm font-bold">Ask the Community</h4>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      value={newQuestionAuthor}
                      onChange={(e) => setNewQuestionAuthor(e.target.value)}
                      placeholder="e.g. David L."
                      className="w-full bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-xs border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Your Question</label>
                    <textarea
                      value={newQuestionText}
                      onChange={(e) => setNewQuestionText(e.target.value)}
                      placeholder="e.g. Does this fit true to size, or should I order a half size up?"
                      rows={3}
                      className="w-full bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-xs border"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl text-xs font-bold"
                  >
                    Submit Question
                  </button>
                </form>
              )}

              {/* Questions List */}
              <div className="space-y-4">
                {productQuestions.map((q) => (
                  <div key={q.id} className="p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-2xl space-y-2">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-amber-500" />
                      Q: {q.question}
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      Asked by {q.askedBy} • {new Date(q.createdAt).toLocaleDateString()}
                    </p>

                    {q.answer ? (
                      <div className="mt-2 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs">
                        <p className="text-zinc-700 dark:text-zinc-300">
                          <strong className="text-black dark:text-white">A:</strong> {q.answer}
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-1">Answered by {q.answeredBy}</p>
                      </div>
                    ) : (
                      <p className="text-xs text-zinc-500 italic">Pending verified response from seller.</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Size & Fit Advisor Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    Bespoke Size & Fit Matrix
                  </h3>
                  <p className="text-xs text-zinc-500">Precision {activePreset?.name || 'tailored'} measurement calibrations</p>
                </div>
              </div>
              <button
                onClick={() => setShowSizeGuide(false)}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Close size guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Unit Toggle */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Certified International Standard Sizing</span>
              </div>
              <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setSizeUnit('cm')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    sizeUnit === 'cm'
                      ? 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                  }`}
                >
                  Centimeters (cm)
                </button>
                <button
                  type="button"
                  onClick={() => setSizeUnit('in')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    sizeUnit === 'in'
                      ? 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                  }`}
                >
                  Inches (in)
                </button>
              </div>
            </div>

            {/* Sizing Table */}
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 mb-6">
              <table className="w-full text-xs text-left">
                <thead className="bg-zinc-50 dark:bg-zinc-800/60 text-zinc-500 font-bold uppercase text-[10px] tracking-wider border-b border-zinc-200 dark:border-zinc-800">
                  <tr>
                    <th className="p-3">Size</th>
                    <th className="p-3">Chest / Width</th>
                    <th className="p-3">Length</th>
                    <th className="p-3">Shoulder</th>
                    <th className="p-3">Sleeve</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-medium">
                  {[
                    { size: 'XS', cm: [92, 68, 42, 62], in: [36.2, 26.8, 16.5, 24.4] },
                    { size: 'S', cm: [98, 70, 44, 63], in: [38.6, 27.5, 17.3, 24.8] },
                    { size: 'M', cm: [104, 72, 46, 64], in: [40.9, 28.3, 18.1, 25.2] },
                    { size: 'L', cm: [110, 74, 48, 65], in: [43.3, 29.1, 18.9, 25.6] },
                    { size: 'XL', cm: [116, 76, 50, 66], in: [45.7, 29.9, 19.7, 26.0] },
                    { size: 'XXL', cm: [122, 78, 52, 67], in: [48.0, 30.7, 20.5, 26.4] },
                  ].map((row) => {
                    const values = sizeUnit === 'cm' ? row.cm : row.in;
                    return (
                      <tr key={row.size} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                        <td className="p-3 font-bold font-mono text-zinc-900 dark:text-white">{row.size}</td>
                        <td className="p-3">{values[0]} {sizeUnit}</td>
                        <td className="p-3">{values[1]} {sizeUnit}</td>
                        <td className="p-3">{values[2]} {sizeUnit}</td>
                        <td className="p-3">{values[3]} {sizeUnit}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Concierge Fit Advice */}
            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/40 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Master Tailor's Recommendation</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                This garment is cut for an elegant, modern silhouette with a relaxed drape through the chest and structured shoulders. If you prefer a tailored, snug fit or are between two standard sizes, we recommend ordering one size down.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-zinc-800 transition-colors"
              >
                Got It, Return to Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
