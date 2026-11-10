import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import { Product, ProductVariant } from './types';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  Scale,
  Plus,
  Minus,
  Check,
  Truck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { formatCurrency } from './utils';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const {
    currency,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    navigateTo,
    t,
  } = useStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product?.variants?.[0] || null,
  );
  const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string | number | boolean>>(
    product?.variants?.[0]?.attributes || {},
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const currentPrice = selectedVariant?.price || product.price;
  const currentComparePrice = selectedVariant?.compareAtPrice || product.compareAtPrice;
  const currentStock = selectedVariant ? selectedVariant.stockQuantity : product.stockQuantity;
  const inWish = isInWishlist(product.id);
  const inComp = isInCompare(product.id);

  const handleAttributeSelect = (attrKey: string, value: string | number | boolean) => {
    const updated = { ...selectedAttributes, [attrKey]: value };
    setSelectedAttributes(updated);
    const match = product.variants?.find((v) =>
      Object.entries(updated).every(([k, val]) => v.attributes?.[k] === val),
    );
    if (match) {
      setSelectedVariant(match);
      if (match.image) {
        const imgIdx = (product.images || []).findIndex((img) => img.url === match.image);
        if (imgIdx !== -1) setSelectedImageIndex(imgIdx);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart(product, {
      variantId: selectedVariant?.id,
      quantity,
      attributes: selectedAttributes,
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-200/80 dark:border-white/10 overflow-hidden text-zinc-900 dark:text-white p-6 sm:p-8 animate-in zoom-in-95 duration-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100/80 dark:hover:bg-white/10 text-zinc-500 hover:text-black dark:hover:text-white z-10 transition-colors"
            aria-label="Close Quick View"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery Column */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                <img
                  src={product.images?.[selectedImageIndex]?.url || product.images?.[0]?.url || ''}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImageIndex === idx
                          ? 'border-black dark:border-white scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Options & Details */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  {product.brand}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-display mt-1 mb-2">
                  {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 text-xs">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold text-zinc-800 dark:text-zinc-200 ml-1">
                      {product.rating?.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-zinc-400">({product.reviewCount} reviews)</span>
                  <span className="text-zinc-300 dark:text-zinc-700">•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    {currentStock > 0 ? `In Stock (${currentStock})` : 'Sold Out'}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-extrabold">
                    {formatCurrency(currentPrice, currency)}
                  </span>
                  {currentComparePrice && currentComparePrice > currentPrice && (
                    <span className="text-sm text-zinc-400 line-through">
                      {formatCurrency(currentComparePrice, currency)}
                    </span>
                  )}
                  {product.unitOfMeasure && (
                    <span className="text-xs text-zinc-500 font-medium">/{product.unitOfMeasure}</span>
                  )}
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {product.shortDescription || product.fullDescription || ''}
                </p>

                {/* Dynamic Variant Selectors */}
                {product.variants && product.variants.length > 1 && (
                  <div className="space-y-4 mb-6">
                    {Array.from(
                      new Set<string>(product.variants.flatMap((v) => Object.keys(v.attributes || {}))),
                    ).map((attrKey) => {
                      const distinctValues = Array.from(
                        new Set(
                          product.variants!.map((v) => v.attributes?.[attrKey]).filter(
                            (val): val is string | number | boolean => val !== undefined,
                          ),
                        ),
                      );
                      return (
                        <div key={attrKey}>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                            Select {attrKey}:{' '}
                            <span className="text-zinc-900 dark:text-white capitalize">
                              {String(selectedAttributes[attrKey] || '')}
                            </span>
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {distinctValues.map((val) => {
                              const isSelected = selectedAttributes[attrKey] === val;
                              return (
                                <button
                                  key={String(val)}
                                  onClick={() => handleAttributeSelect(attrKey, val)}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                                    isSelected
                                      ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black shadow-sm font-bold'
                                      : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-500'
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

                {/* Quantity Stepper */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Qty:</span>
                  <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-xl p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 text-zinc-500 hover:text-black dark:hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(currentStock, quantity + 1))}
                      className="p-1.5 text-zinc-500 hover:text-black dark:hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="flex gap-4 text-xs text-zinc-500 mb-2">
                  <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Free shipping over $75</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 30-Day Returns</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-2">
                  <button
                    onClick={handleAddToCart}
                    disabled={currentStock <= 0}
                    className="flex-1 bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-2xl font-bold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add {quantity} to Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3.5 rounded-2xl border transition-colors ${
                      inWish
                        ? 'bg-rose-500 text-white border-rose-500'
                        : 'border-zinc-300 dark:border-zinc-700 hover:text-rose-500'
                    }`}
                    title="Add to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${inWish ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    onClick={() => toggleCompare(product.id)}
                    className={`p-3.5 rounded-2xl border transition-colors ${
                      inComp
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'border-zinc-300 dark:border-zinc-700 hover:text-purple-600'
                    }`}
                    title="Add to Compare"
                  >
                    <Scale className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    navigateTo({ name: 'pdp', productId: product.id } as any);
                  }}
                  className="w-full text-center py-2 text-xs font-semibold text-zinc-500 hover:text-black dark:hover:text-white flex items-center justify-center gap-1 hover:underline"
                >
                  <span>View Full Specifications & Reviews</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
