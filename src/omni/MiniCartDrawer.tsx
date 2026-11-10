import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Bookmark,
  Heart,
  Gift,
  Tag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';
import { formatCurrency } from './utils';

export const MiniCartDrawer: React.FC = () => {
  const {
    isMiniCartOpen,
    setIsMiniCartOpen,
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
    products,
    addToCart,
    t,
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [showOrderNoteInput, setShowOrderNoteInput] = useState(false);

  if (!isMiniCartOpen) return null;

  const freeShippingThreshold = 75;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  // Cross-sell product recommendations (items not in cart)
  const cartProductIds = cart.map((c) => c.productId);
  const crossSellRecommendations = products.filter((p) => !cartProductIds.includes(p.id)).slice(0, 3);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    setCouponError('');
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsMiniCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside aria-label="Shopping Bag Drawer" className="w-screen max-w-md bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-l border-zinc-200/70 dark:border-white/10 shadow-2xl flex flex-col z-50 text-zinc-900 dark:text-zinc-100 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-zinc-200/60 dark:border-white/10 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-black dark:text-white" />
              <h2 className="text-lg font-bold font-display">
                {t.cart?.title || 'Shopping Bag'} ({cart.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsMiniCartOpen(false)}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-4 sm:px-6 py-3 bg-zinc-100/60 dark:bg-white/5 backdrop-blur-xs border-b border-zinc-200/60 dark:border-white/10">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
                <Truck className="w-3.5 h-3.5 text-amber-500" />
                {progressToFreeShipping >= 100
                  ? '🎉 You unlocked Free Carbon-Neutral Shipping!'
                  : `Add ${formatCurrency(remainingForFreeShipping, currency)} more for FREE Express Shipping`}
              </span>
              <span className="text-zinc-500">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-black dark:bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full mx-auto flex items-center justify-center mb-4 text-zinc-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold mb-1">{t.cart?.emptyCart || 'Your bag is empty'}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 max-w-xs mx-auto">
                  Discover curations from our latest seasonal lookbook and artisan sellers.
                </p>
                <button
                  onClick={() => {
                    setIsMiniCartOpen(false);
                    navigateTo({ name: 'plp' });
                  }}
                  className="bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-6 py-3 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  {t.cart?.startShopping || 'Start Shopping'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200/70 dark:border-zinc-800"
                  >
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-24 object-cover rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0"
                    />

                    {/* Details & Controls */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white line-clamp-1">
                            {item.title}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-zinc-400 hover:text-rose-500 transition-colors p-1"
                            title="Remove item"
                            aria-label={`Remove ${item.title} from cart`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Selected attributes & Unit */}
                        <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {item.selectedAttributes &&
                            Object.entries(item.selectedAttributes).map(([k, v]) => (
                              <span key={k} className="capitalize">
                                {k}: <strong className="text-zinc-700 dark:text-zinc-300">{String(v)}</strong>
                              </span>
                            ))}
                          {item.unitOfMeasure && (
                            <span>
                              Unit: <strong className="text-zinc-700 dark:text-zinc-300">{item.unitOfMeasure}</strong>
                            </span>
                          )}
                          {item.isSubscription && (
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-0.5">
                              <Sparkles className="w-3 h-3" /> Auto-ship ({item.subscriptionInterval})
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Stepper & Price */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-zinc-200/50 dark:border-zinc-700/50">
                        <div className="flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg p-0.5">
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-zinc-500 hover:text-black dark:hover:text-white"
                            aria-label={`Decrease quantity of ${item.title}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-zinc-500 hover:text-black dark:hover:text-white"
                            aria-label={`Increase quantity of ${item.title}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-sm font-bold text-zinc-900 dark:text-white">
                            {formatCurrency(item.price * item.quantity, currency)}
                          </span>
                        </div>
                      </div>

                      {/* Item Sub-actions (Save for later, Wishlist) */}
                      <div className="flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400 mt-2">
                        <button
                          onClick={() => saveItemForLater(item.id)}
                          className="hover:text-black dark:hover:text-white flex items-center gap-1"
                        >
                          <Bookmark className="w-3 h-3" /> {t.cart?.saveForLater || 'Save for later'}
                        </button>
                        <button
                          onClick={() => moveCartItemToWishlist(item.id)}
                          className="hover:text-black dark:hover:text-white flex items-center gap-1"
                        >
                          <Heart className="w-3 h-3" /> {t.cart?.moveToWishlist || 'Move to Wishlist'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saved for Later Section */}
            {savedForLater && savedForLater.length > 0 && (
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  {t.cart?.savedItems || 'Saved for Later'} ({savedForLater.length})
                </h4>
                <div className="space-y-3">
                  {savedForLater.map((saved) => (
                    <div
                      key={saved.id}
                      className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={saved.image}
                          alt={saved.title}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                        <div>
                          <p className="text-xs font-semibold line-clamp-1">{saved.title}</p>
                          <p className="text-xs text-zinc-500">{formatCurrency(saved.price, currency)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => moveItemToCart(saved.id)}
                          className="text-xs font-semibold bg-black dark:bg-white text-white dark:text-black px-2.5 py-1 rounded-lg hover:bg-zinc-800"
                        >
                          {t.cart?.moveToCart || 'Move to Cart'}
                        </button>
                        <button
                          onClick={() => removeSavedItem(saved.id)}
                          className="text-zinc-400 hover:text-rose-500 p-1"
                          aria-label={`Remove saved item ${saved.title}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cross-Sell Recommendations */}
            {crossSellRecommendations.length > 0 && cart.length > 0 && (
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Recommended Add-ons
                </h4>
                <div className="space-y-2">
                  {crossSellRecommendations.map((prod) => (
                    <div
                      key={prod.id}
                      className="flex items-center justify-between p-2.5 bg-zinc-50 dark:bg-zinc-800/40 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.images[0]?.url}
                          alt={prod.title}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                        <div>
                          <p className="text-xs font-semibold line-clamp-1">{prod.title}</p>
                          <p className="text-xs text-zinc-500">{formatCurrency(prod.price, currency)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(prod, { quantity: 1 })}
                        className="text-xs font-semibold border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coupons & Promo Codes */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 rounded-xl text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                      <Tag className="w-4 h-4" />
                      <div>
                        <p className="font-bold">{appliedCoupon.code} Applied</p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400">{appliedCoupon.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-emerald-700 dark:text-emerald-300 font-semibold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Promo Code (e.g. WELCOME10)"
                        className="w-full bg-zinc-100 dark:bg-zinc-800 pl-8 pr-3 py-2 text-xs rounded-xl border border-transparent focus:border-black dark:focus:border-white uppercase"
                      />
                      <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    </div>
                    <button
                      type="submit"
                      className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-zinc-800"
                    >
                      {t.cart?.apply || 'Apply'}
                    </button>
                  </form>
                )}
                {couponError && <p className="text-xs text-rose-500">{couponError}</p>}

                {/* Loyalty points redemption slider */}
                {currentUser && currentUser.loyalty?.pointsBalance > 0 && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl">
                    <div className="flex items-center justify-between text-xs font-semibold text-amber-900 dark:text-amber-300 mb-2">
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
                        Saves {formatCurrency(loyaltyPointsToRedeem * 0.1, currency)} off this order!
                      </p>
                    )}
                  </div>
                )}

                {/* Gift Wrap Toggle */}
                <label className="flex items-center gap-2 text-xs cursor-pointer select-none text-zinc-700 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={giftWrapOption}
                    onChange={(e) => setGiftWrapOption(e.target.checked)}
                    className="rounded text-black focus:ring-0"
                  />
                  <Gift className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.cart?.giftWrap || 'Gift wrapping ($5.00)'}</span>
                </label>

                {/* Order Note Toggle */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowOrderNoteInput(!showOrderNoteInput)}
                    className="text-xs text-zinc-500 hover:text-black dark:hover:text-white underline"
                  >
                    {showOrderNoteInput ? 'Hide Delivery Note' : '+ Add Special Delivery Instructions'}
                  </button>
                  {showOrderNoteInput && (
                    <textarea
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="e.g. Leave package by side porch, gate code #4412"
                      rows={2}
                      className="w-full mt-2 bg-zinc-100 dark:bg-zinc-800 p-2 text-xs rounded-xl border focus:outline-none"
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Breakdown & Proceed to Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-xl border-t border-zinc-200/60 dark:border-white/10 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>{t.cart?.subtotal || 'Subtotal'}</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">{formatCurrency(cartSubtotal, currency)}</span>
                </div>

                {cartDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>{t.cart?.discount || 'Discount'}</span>
                    <span>-{formatCurrency(cartDiscount, currency)}</span>
                  </div>
                )}

                {cartLoyaltyCredit > 0 && (
                  <div className="flex justify-between text-amber-600 dark:text-amber-400 font-medium">
                    <span>Loyalty Points Credit</span>
                    <span>-{formatCurrency(cartLoyaltyCredit, currency)}</span>
                  </div>
                )}

                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>{t.cart?.shipping || 'Shipping'}</span>
                  <span>{cartShippingFee === 0 ? <strong className="text-emerald-600">{t.cart?.free || 'Free'}</strong> : formatCurrency(cartShippingFee, currency)}</span>
                </div>

                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>{t.cart?.tax || 'Tax'}</span>
                  <span>{formatCurrency(cartTax, currency)}</span>
                </div>

                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700 flex justify-between text-base font-bold text-zinc-900 dark:text-white">
                  <span>{t.cart?.total || 'Total'}</span>
                  <span>{formatCurrency(cartTotal, currency)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsMiniCartOpen(false);
                  navigateTo({ name: 'checkout' });
                }}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-full font-bold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{t.cart?.checkout || 'Proceed to Checkout'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted & Verified Checkout</span>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
