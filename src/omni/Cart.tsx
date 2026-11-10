import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import {
  ShoppingBag,
  Trash2,
  Bookmark,
  Heart,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  Gift,
  Truck,
  Sparkles,
} from 'lucide-react';
import { formatCurrency } from './utils';

export const Cart: React.FC = () => {
  const {
    cart,
    savedForLater,
    removeFromCart,
    updateCartQuantity,
    saveItemForLater,
    moveItemToCart,
    removeSavedItem,
    moveCartItemToWishlist,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    loyaltyPointsToRedeem,
    setLoyaltyPointsToRedeem,
    currentUser,
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
    navigateTo,
    currency,
    t,
  } = useStore();

  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const freeShippingThreshold = 75;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    if (!res.success) {
      setCouponMsg({ type: 'error', text: res.message });
    } else {
      setCouponMsg({ type: 'success', text: 'Coupon activated!' });
      setCouponCode('');
    }
  };

  if (cart.length === 0 && (!savedForLater || savedForLater.length === 0)) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-3xl mx-auto flex items-center justify-center mb-4 text-zinc-400">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold font-display mb-2">{t.cart?.emptyCart || 'Your bag is empty'}</h2>
        <p className="text-sm text-zinc-500 max-w-md mx-auto mb-8 leading-relaxed">
          Your shopping bag is currently empty. Explore our catalog to find curated collections tailored to your lifestyle.
        </p>
        <button
          onClick={() => navigateTo({ name: 'plp' })}
          className="bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-800 transition-colors shadow-lg"
        >
          {t.cart?.startShopping || 'Start Shopping'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white">
          {t.cart?.title || 'Shopping Bag'} ({cart.reduce((a, b) => a + b.quantity, 0)})
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Review your items, apply promotional credits, and select gift packaging.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Items List (8 Cols) */}
        <div className="lg:col-span-8 lg:order-2 space-y-6">
          {/* Free Shipping Progress Indicator */}
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200">
                <Truck className="w-4 h-4 text-amber-500" />
                {progressToFreeShipping >= 100
                  ? '🎉 Free Carbon-Neutral Shipping Unlocked!'
                  : `Add ${formatCurrency(Math.max(0, freeShippingThreshold - cartSubtotal), currency)} more for FREE Express Delivery`}
              </span>
              <span className="text-zinc-500">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-black dark:bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-28 object-cover rounded-2xl bg-zinc-100 dark:bg-zinc-800 shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-400 hover:text-rose-500 p-1"
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Attributes */}
                    <div className="flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {item.selectedAttributes &&
                        Object.entries(item.selectedAttributes).map(([k, v]) => (
                          <span key={k} className="capitalize">
                            {k}: <strong className="text-zinc-700 dark:text-zinc-200">{String(v)}</strong>
                          </span>
                        ))}
                      {item.unitOfMeasure && (
                        <span>
                          Unit: <strong className="text-zinc-700 dark:text-zinc-200">{item.unitOfMeasure}</strong>
                        </span>
                      )}
                      {item.isSubscription && (
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> Auto-ship ({item.subscriptionInterval})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Stepper & Subtotal */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-xl p-1">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-zinc-500 hover:text-black dark:hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-zinc-500 hover:text-black dark:hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <button
                          onClick={() => saveItemForLater(item.id)}
                          className="hover:text-black dark:hover:text-white flex items-center gap-1"
                        >
                          <Bookmark className="w-3.5 h-3.5" /> {t.cart?.saveForLater || 'Save for later'}
                        </button>
                        <button
                          onClick={() => moveCartItemToWishlist(item.id)}
                          className="hover:text-black dark:hover:text-white flex items-center gap-1"
                        >
                          <Heart className="w-3.5 h-3.5" /> {t.cart?.moveToWishlist || 'Move to Wishlist'}
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-lg font-extrabold text-zinc-900 dark:text-white">
                        {formatCurrency(item.price * item.quantity, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Saved for Later Section */}
          {savedForLater && savedForLater.length > 0 && (
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
                {t.cart?.savedItems || 'Saved for Later'} ({savedForLater.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedForLater.map((saved) => (
                  <div
                    key={saved.id}
                    className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="flex items-center gap-3">
                      <img src={saved.image} alt="" className="w-12 h-12 object-cover rounded-xl" />
                      <div>
                        <p className="text-xs font-bold line-clamp-1">{saved.title}</p>
                        <p className="text-xs text-zinc-500 font-semibold">{formatCurrency(saved.price, currency)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => moveItemToCart(saved.id)}
                        className="text-xs font-bold bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-xl hover:bg-zinc-800"
                      >
                        {t.cart?.moveToCart || 'Move to Bag'}
                      </button>
                      <button
                        onClick={() => removeSavedItem(saved.id)}
                        className="text-zinc-400 hover:text-rose-500 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary & Actions (4 Cols) */}
        <div className="lg:col-span-4 lg:order-1 space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              Order Summary
            </h2>

            {/* Coupons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Promotional Code
              </label>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">{appliedCoupon.code}</span>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400">{appliedCoupon.description}</p>
                  </div>
                  <button onClick={removeCoupon} className="text-rose-500 font-semibold hover:underline">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="e.g. WELCOME10"
                      className="w-full bg-zinc-100 dark:bg-zinc-800 pl-8 pr-3 py-2 text-xs rounded-xl uppercase focus:outline-none"
                    />
                    <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponMsg && (
                <p className={`text-xs mt-1.5 ${couponMsg.type === 'error' ? 'text-rose-500' : 'text-emerald-500'}`}>
                  {couponMsg.text}
                </p>
              )}
            </div>

            {/* Loyalty points slider */}
            {currentUser && currentUser.loyalty && currentUser.loyalty.pointsBalance > 0 && (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl">
                <div className="flex justify-between text-xs font-bold text-amber-900 dark:text-amber-300 mb-2">
                  <span>Redeem Loyalty Points</span>
                  <span>{loyaltyPointsToRedeem} / {currentUser.loyalty.pointsBalance} pts</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={currentUser.loyalty.pointsBalance}
                  step={50}
                  value={loyaltyPointsToRedeem}
                  onChange={(e) => setLoyaltyPointsToRedeem(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
                {loyaltyPointsToRedeem > 0 && (
                  <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-1">
                    Saves {formatCurrency(loyaltyPointsToRedeem * 0.1, currency)} off total!
                  </p>
                )}
              </div>
            )}

            {/* Gift Wrap & Notes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center gap-2 text-xs cursor-pointer select-none text-zinc-700 dark:text-zinc-300">
                <input
                  type="checkbox"
                  checked={giftWrapOption}
                  onChange={(e) => setGiftWrapOption(e.target.checked)}
                  className="rounded text-black focus:ring-0"
                />
                <Gift className="w-4 h-4 text-amber-600" />
                <span>Add Premium Gift Box Packaging (+$5.00)</span>
              </label>

              <textarea
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                placeholder="Optional special delivery instructions or gift card message..."
                rows={2}
                className="w-full bg-zinc-100 dark:bg-zinc-800 p-2.5 text-xs rounded-xl border focus:outline-none"
              />
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 text-xs pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>{t.cart?.subtotal || 'Subtotal'}</span>
                <span className="font-semibold text-zinc-900 dark:text-white">{formatCurrency(cartSubtotal, currency)}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>{t.cart?.discount || 'Discounts'}</span>
                  <span>-{formatCurrency(cartDiscount, currency)}</span>
                </div>
              )}
              {cartLoyaltyCredit > 0 && (
                <div className="flex justify-between text-amber-600 font-medium">
                  <span>Loyalty Redemption</span>
                  <span>-{formatCurrency(cartLoyaltyCredit, currency)}</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>{t.cart?.shipping || 'Shipping'}</span>
                <span>{cartShippingFee === 0 ? <strong className="text-emerald-600">{t.cart?.free || 'FREE'}</strong> : formatCurrency(cartShippingFee, currency)}</span>
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>{t.cart?.tax || 'Tax'}</span>
                <span>{formatCurrency(cartTax, currency)}</span>
              </div>
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-lg font-bold text-zinc-900 dark:text-white">
                <span>{t.cart?.total || 'Total'}</span>
                <span>{formatCurrency(cartTotal, currency)}</span>
              </div>
            </div>

            {/* Proceed to Checkout CTA */}
            <button
              onClick={() => navigateTo({ name: 'checkout' })}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-transform active:scale-98 flex items-center justify-center gap-2 shadow-xl"
            >
              <span>{t.cart?.checkout || 'Proceed to Checkout'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
