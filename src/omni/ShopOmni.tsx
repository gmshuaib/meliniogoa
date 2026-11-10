import React, { useState, useMemo } from 'react';
import { useStore } from './OmniStoreContext';
import { ProductCard } from './ProductCard';
import { Product } from './types';
import {
  Filter,
  SlidersHorizontal,
  Grid,
  List as ListIcon,
  X,
  ChevronDown,
  Star,
  Search,
  Check,
  ArrowUpDown,
} from 'lucide-react';
import { formatCurrency } from './utils';

interface ShopOmniProps {
  data?: any;
  products?: Product[];
}

export const ShopOmni: React.FC<ShopOmniProps> = ({ data, products: propProducts }) => {
  const {
    products: storeProducts,
    categories,
    filterState,
    setFilterState,
    currency,
  } = useStore();

  const allProducts = (propProducts && propProducts.length > 0) ? propProducts : (storeProducts || []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesCat = selectedCategory === 'all' || p.categoryId === selectedCategory;
      const matchesSearch = !searchQuery.trim() ||
        (p.title && p.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return (b.reviewCount || 0) - (a.reviewCount || 0);
    });
  }, [allProducts, selectedCategory, searchQuery, sortBy]);

  const Badge = data?.Badge || data?.badge || 'CATALOG & STORE';
  const Headline = data?.Headline || data?.headline || data?.title || 'Explore Complete Collection';
  const headline2 = data?.headline2 || data?.subheadline || data?.description || 'Browse our permanent catalog of master-crafted essentials and limited seasonal releases.';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {Badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 dark:text-white font-display">
          {Headline}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {headline2}
        </p>
      </div>

      {/* Control Bar (Search, Category Pills, Sort, View Toggle) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200 dark:border-zinc-800">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            All Items ({allProducts.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right Tools (Search, Sort, Grid/List) */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* Search input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="pl-8 pr-3 py-1.5 rounded-full text-xs bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-950 dark:focus:border-white w-40 sm:w-48"
            />
          </div>

          {/* Sort selector */}
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-full text-xs bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 space-y-3">
          <p className="text-sm font-semibold text-zinc-500">No pieces match your filter criteria.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="text-xs font-bold underline text-zinc-900 dark:text-white"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ShopOmni;
