import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import { Product } from './types';
import {
  Heart,
  Eye,
  Scale,
  ShoppingBag,
  Star,
  Check,
  Sparkles,
  Zap,
} from 'lucide-react';
import { formatCurrency } from './utils';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const {
    currency,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    navigateTo,
    multiVendorMode,
  } = useStore();

  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariantImage, setSelectedVariantImage] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  const inWish = isInWishlist(product.id);
  const inComp = isInCompare(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, { quantity: 1 });
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleCardClick = () => {
    navigateTo({ name: 'pdp', productId: product.id });
  };

  const currentImageUrl = selectedVariantImage || (isHovered && product.images?.[1] ? product.images[1].url : product.images?.[0]?.url) || (product as any).image || '';
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedVariantImage(null);
      }}
      className="group relative bg-white dark:bg-zinc-950 rounded-xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer select-none border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700"
    >
      {/* Media Box */}
      <div className="relative aspect-[4/5] aspect-4/5 w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        {currentImageUrl && !imgError ? (
          <img
            src={currentImageUrl}
            alt={product.title || (product as any).name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-100 to-zinc-200">
            <ShoppingBag className="w-10 h-10 text-zinc-300" />
          </div>
        )}

        {/* Minimal Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {hasDiscount && (
            <span className="bg-zinc-900/90 dark:bg-white/90 text-white dark:text-zinc-950 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded backdrop-blur-xs">
              -{discountPercent}%
            </span>
          )}
          {product.isFeatured && !hasDiscount && (
            <span className="bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white text-[10px] font-medium tracking-wider px-2 py-0.5 rounded backdrop-blur-xs">
              Featured
            </span>
          )}
        </div>

        {/* Floating Actions on Hover (Wishlist & Quick View) */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`p-1.5 rounded-full backdrop-blur-md transition-all ${
              inWish
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                : 'bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white'
            }`}
            title="Wishlist"
            aria-label={`Add ${product.title} to wishlist`}
          >
            <Heart className={`w-3.5 h-3.5 ${inWish ? 'fill-current' : ''}`} />
          </button>

          {/* Quick View */}
          {onQuickView && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="p-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white backdrop-blur-md transition-all"
              title="Quick View"
              aria-label={`Quick view ${product.title}`}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quick Add to Cart Overlay Button */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            disabled={product.stockQuantity <= 0}
            className="w-full bg-zinc-900/95 dark:bg-white/95 text-white dark:text-zinc-900 backdrop-blur-md py-2 rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-98 disabled:opacity-50"
          >
            {isAdding ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : product.stockQuantity <= 0 ? (
              <span>Out of Stock</span>
            ) : (
              <span>Quick Add</span>
            )}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand */}
          <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium mb-1">
            {product.brand}
          </p>

          {/* Title */}
          <h3 className="font-medium text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 line-clamp-1 leading-snug">
            {product.title}
          </h3>

          {/* Color / Variant Swatches preview */}
          {product.variants && product.variants.length > 1 && (
            <div className="flex items-center gap-1.5 mt-2">
              {product.variants.slice(0, 4).map((variant) => (
                <div
                  key={variant.id}
                  onMouseEnter={() => {
                    if (variant.image) setSelectedVariantImage(variant.image);
                  }}
                  className="w-2.5 h-2.5 rounded-full ring-1 ring-zinc-300 dark:ring-zinc-700 cursor-pointer transition-transform hover:scale-125"
                  style={{
                    backgroundColor:
                      typeof variant.attributes?.color === 'string'
                        ? variant.attributes.color.toLowerCase()
                        : '#71717a',
                  }}
                  title={String(variant.title || variant.attributes?.color || '')}
                />
              ))}
              {product.variants.length > 4 && (
                <span className="text-[10px] text-zinc-400">+{product.variants.length - 4}</span>
              )}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="mt-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-900 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
              {formatCurrency(product.price, currency)}
            </span>
            {hasDiscount && (
              <span className="text-[11px] text-zinc-400 line-through">
                {formatCurrency(product.compareAtPrice!, currency)}
              </span>
            )}
          </div>
          {product.unitOfMeasure && (
            <span className="text-[10px] text-zinc-400 font-normal">
              /{product.unitOfMeasure}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
