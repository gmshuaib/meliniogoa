import React from 'react';
import { useStore } from './OmniStoreContext';
import { X, Scale, ShoppingBag, Trash2, Check, Star } from 'lucide-react';
import { formatCurrency } from './utils';

export const CompareModal: React.FC = () => {
  const {
    compareList,
    removeFromCompare,
    clearCompare,
    isCompareModalOpen,
    setIsCompareModalOpen,
    addToCart,
    currency,
    navigateTo,
    products,
  } = useStore();

  if (!isCompareModalOpen) return null;

  // Resolve product IDs to full Product objects
  const compareProducts = compareList
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  // Collect all unique attribute keys across compared products
  const attributeKeys: string[] = Array.from(
    new Set(compareProducts.flatMap((p) => (p.attributes ? Object.keys(p.attributes) : []))),
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsCompareModalOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-5xl bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-200/80 dark:border-white/10 overflow-hidden text-zinc-900 dark:text-white p-6 sm:p-8 animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-200/60 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 rounded-2xl">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display">
                  Product Comparison ({compareProducts.length}/4)
                </h2>
                <p className="text-xs text-zinc-500">
                  Compare specifications, attributes, and pricing side-by-side.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {compareProducts.length > 0 && (
                <button
                  onClick={clearCompare}
                  className="text-xs text-rose-500 hover:underline px-3 py-1.5 font-medium"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-black dark:hover:text-white"
                aria-label="Close Compare"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Table */}
          {compareProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mx-auto flex items-center justify-center mb-4 text-zinc-400">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold mb-1">No products in comparison</h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto mb-6">
                Click the compare icon on any product card to inspect specs side-by-side.
              </p>
              <button
                onClick={() => {
                  setIsCompareModalOpen(false);
                  navigateTo({ name: 'plp' });
                }}
                className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-6 py-2.5 rounded-full"
              >
                Explore Catalog
              </button>
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <th className="py-4 px-4 w-40 font-bold text-zinc-400 uppercase tracking-wider bg-zinc-50 dark:bg-zinc-800/40 rounded-l-2xl">
                      Product Spec
                    </th>
                    {compareProducts.map((product) => (
                      <th key={product.id} className="py-4 px-4 min-w-[200px] align-top">
                        <div className="relative group">
                          <button
                            onClick={() => removeFromCompare(product.id)}
                            className="absolute -top-2 -right-2 p-1 bg-zinc-200 dark:bg-zinc-700 hover:bg-rose-500 hover:text-white rounded-full text-zinc-600 dark:text-zinc-300 transition-colors"
                            title="Remove from comparison"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                          <img
                            src={product.images[0]?.url}
                            alt={product.title}
                            className="w-full h-36 object-cover rounded-xl bg-zinc-100 dark:bg-zinc-800 mb-3 cursor-pointer"
                            onClick={() => {
                              setIsCompareModalOpen(false);
                              navigateTo({ name: 'pdp', productId: product.id } as any);
                            }}
                          />
                          <p className="font-bold text-sm text-zinc-900 dark:text-white line-clamp-2 mb-1">
                            {product.title}
                          </p>
                          <p className="text-xs text-zinc-500 mb-2">{product.brand}</p>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-base font-extrabold text-zinc-900 dark:text-white">
                              {formatCurrency(product.price, currency)}
                            </span>
                            <span className="flex items-center gap-1 text-amber-500 font-semibold">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              {product.rating}
                            </span>
                          </div>
                          <button
                            onClick={() => addToCart(product, { quantity: 1 })}
                            className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-xl text-xs font-bold hover:bg-zinc-800 flex items-center justify-center gap-1.5"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {/* Brand */}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-zinc-500 bg-zinc-50 dark:bg-zinc-800/30">
                      Brand / Maker
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="py-3 px-4 font-medium">
                        {p.brand}
                      </td>
                    ))}
                  </tr>

                  {/* Stock */}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-zinc-500 bg-zinc-50 dark:bg-zinc-800/30">
                      Stock Status
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="py-3 px-4">
                        {p.stockQuantity > 0 ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                            <Check className="w-3.5 h-3.5" /> In Stock ({p.stockQuantity})
                          </span>
                        ) : (
                          <span className="text-rose-500 font-semibold">Out of Stock</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Unit of Measure */}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-zinc-500 bg-zinc-50 dark:bg-zinc-800/30">
                      Unit
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="py-3 px-4 capitalize">
                        {p.unitOfMeasure || 'piece'}
                      </td>
                    ))}
                  </tr>

                  {/* Ratings */}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-zinc-500 bg-zinc-50 dark:bg-zinc-800/30">
                      Rating
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="py-3 px-4">
                        <span className="flex items-center gap-1 text-amber-500">
                          <Star className="w-3 h-3 fill-current" />
                          {p.rating?.toFixed(1)} ({p.reviewCount} reviews)
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Dynamic Attributes */}
                  {attributeKeys.map((attrKey) => (
                    <tr key={attrKey}>
                      <td className="py-3 px-4 font-semibold text-zinc-500 bg-zinc-50 dark:bg-zinc-800/30 capitalize">
                        {attrKey.replace(/_/g, ' ')}
                      </td>
                      {compareProducts.map((p) => {
                        const val = p.attributes?.[attrKey];
                        return (
                          <td key={p.id} className="py-3 px-4">
                            {val !== undefined ? (
                              Array.isArray(val) ? (
                                val.join(', ')
                              ) : typeof val === 'boolean' ? (
                                val ? 'Yes' : 'No'
                              ) : (
                                String(val)
                              )
                            ) : (
                              <span className="text-zinc-400">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
