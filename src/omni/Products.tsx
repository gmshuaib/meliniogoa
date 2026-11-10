import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import { ProductCard } from './ProductCard';
import { Product } from './types';
import { ArrowRight } from 'lucide-react';

/**
 * PRODUCT GRID VARIANT 1 — Selected Pieces (the original catalog showcase).
 * Header + tab pills + uniform 4-col card grid + centered view-all button.
 */
export const Products: React.FC<{ data?: any; products?: Product[]; onQuickView?: (p: Product) => void }> = ({ data, products: propProducts, onQuickView }) => {
  const { navigateTo, setFilterState, products: storeProducts } = useStore();
  const products = propProducts && propProducts.length > 0 ? propProducts : (storeProducts || []);
  const [activeTab, setActiveTab] = useState<'featured' | 'bestsellers' | 'new'>('featured');

  const Badge = data?.Badge || data?.badge || 'SIGNATURE OFFERINGS';
  const Headline = data?.Headline || data?.headline || data?.title || 'Selected Pieces';
  const headline2 = data?.headline2 || data?.subheadline || data?.description || '';

  const bestSellers = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
  const newArrivals = [...products].reverse().slice(0, 8);
  const featured = products.filter((p) => p.isFeatured).slice(0, 8);

  const displayedProducts =
    activeTab === 'featured'
      ? featured.length > 0 ? featured : products.slice(0, 8)
      : activeTab === 'bestsellers'
      ? bestSellers
      : newArrivals;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            {Badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white font-display mt-1">
            {Headline}
          </h2>
          {headline2 && (
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {headline2}
            </p>
          )}
        </div>

        {/* Tab Selector */}
        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-full text-xs font-semibold self-start border border-zinc-200/80 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === 'featured'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab('bestsellers')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === 'bestsellers'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Best Sellers
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === 'new'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            New Arrivals
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => {
            setFilterState((prev) => ({ ...prev, categoryId: undefined }));
            navigateTo({ name: 'plp' });
          }}
          className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md hover:shadow-lg hover:scale-102"
        >
          <span>Explore Complete Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
