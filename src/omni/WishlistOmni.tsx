import React from 'react';
import { useStore } from './OmniStoreContext';
import { Heart, ShoppingBag, Trash2, ArrowRight, Share2 } from 'lucide-react';
import { formatCurrency } from './utils';
import { Product } from './types';

export const WishlistOmni: React.FC<{ data?: any }> = () => {
  const { wishlist, products, removeFromWishlist, addToCart, navigateTo, currency, showToast, t } = useStore();

  const wishlistProducts = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const handleMoveAllToCart = () => {
    wishlistProducts.forEach((item) => {
      addToCart(item, { quantity: 1 });
    });
    showToast('Items Added', 'All wishlist items have been added to your shopping bag!', 'success');
  };

  const handleShareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Curated Wishlist',
        url: window.location.href,
      }).catch(() => {
        // user cancelled or share failed
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Public wishlist link copied to clipboard.', 'info');
    }
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-3xl mx-auto flex items-center justify-center text-zinc-400">
          <Heart className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-display text-zinc-900 dark:text-white">Your Wishlist is Empty</h2>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto mt-1">
            Tap the heart icon on any product to save pieces you love for later.
          </p>
        </div>
        <button
          onClick={() => navigateTo({ name: 'plp' })}
          className="bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-800 transition-colors shadow-lg inline-flex items-center gap-2"
        >
          <span>{t.cart?.startShopping || 'Start Shopping'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white">
            {t.nav?.wishlist || 'Wishlist'} ({wishlistProducts.length})
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Your saved items will remain here until you are ready to order.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShareWishlist}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Wishlist</span>
          </button>
          <button
            onClick={handleMoveAllToCart}
            className="flex items-center gap-1.5 text-xs font-bold px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Move All to Bag</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistProducts.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div
                onClick={() => navigateTo({ name: 'pdp', productId: item.id })}
                className="aspect-[4/5] aspect-4/5 bg-zinc-100 dark:bg-zinc-800 relative cursor-pointer overflow-hidden"
              >
                {item.images?.[0]?.url && (
                  <img
                    src={item.images[0].url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(item.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-xs rounded-full text-zinc-400 hover:text-rose-500 transition-colors"
                  aria-label={`Remove ${item.title} from wishlist`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {item.brand}
                </span>
                <h3
                  onClick={() => navigateTo({ name: 'pdp', productId: item.id })}
                  className="font-bold text-sm text-zinc-900 dark:text-white mt-1 cursor-pointer hover:underline line-clamp-1"
                >
                  {item.title}
                </h3>
                <p className="text-sm font-extrabold text-zinc-900 dark:text-white mt-2">
                  {formatCurrency(item.price, currency)}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => {
                  addToCart(item, { quantity: 1 });
                  removeFromWishlist(item.id);
                }}
                className="w-full bg-black dark:bg-white text-white dark:text-black font-bold text-xs py-2.5 rounded-xl hover:bg-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Move to Bag</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
