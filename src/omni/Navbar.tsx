import React, { useState, useRef, useEffect } from 'react';
import { useStore } from './OmniStoreContext';
import {
  Search,
  ShoppingBag,
  Heart,
  User as UserIcon,
  Menu,
  X,
  ArrowRight,
  LogOut,
  Settings,
  Package,
  Sun,
  Moon,
  ChevronRight,
  ChevronDown,
  Sliders,
  Scale,
  Sparkles,
  Tag,
  Compass,
  BookOpen,
  Truck,
  Building2,
  Globe,
  DollarSign,
} from 'lucide-react';
import { formatCurrency } from './utils';
import { SupportedLocale } from './i18n';
import { Product } from './types';
import { SignInPanel } from './SignInPanel';

export const Navbar: React.FC = () => {
  const {
    activePreset,
    switchPreset,
    allPresets,
    categories,
    products,
    cart,
    wishlist,
    compareList,
    currentUser,
    isLoggedIn,
    logout,
    navigateTo,
    setIsMiniCartOpen,
    setIsCompareModalOpen,
    setIsConfigDrawerOpen,
    t,
    currency,
    setCurrency,
    locale,
    setLocale,
    setFilterState,
    multiVendorMode,
    setMultiVendorMode,
    theme,
    updateThemeToken,
    showToast,
    pages,
    currentPageId,
    onNavigate,
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Cart quantity & subtotal
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Live search suggestions
  const searchResults: Product[] = searchQuery.trim().length > 1
    ? products.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          (p.title && p.title.toLowerCase().includes(q)) ||
          (p.brand && p.brand.toLowerCase().includes(q)) ||
          (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(q))) ||
          (p.categoryId && p.categoryId.toLowerCase().includes(q))
        );
      }).slice(0, 5)
    : [];

  const popularSearches = ['Cashmere', 'Lounge Chair', 'OLED 240Hz', 'Silk Scarf', 'Espresso', 'Handmade'];

  // Global Keyboard Shortcut (⌘K or Ctrl+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsAccountMenuOpen(false);
        setIsNavDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle outside click for search & account dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)) {
        setIsAccountMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when navigation drawer is open
  useEffect(() => {
    if (isNavDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavDrawerOpen]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setFilterState((prev) => ({ ...prev, searchQuery }));
    navigateTo({ name: 'plp', query: searchQuery });
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Header Row */}
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-6 min-w-0">
            
            {/* Left: Directory Menu Trigger + Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-6 min-w-0 shrink">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsNavDrawerOpen(true);
                }}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-all text-xs font-semibold shadow-xs cursor-pointer shrink-0"
                aria-label="Open Navigation Menu"
                id="header-nav-menu-button"
                data-no-link-override="true"
              >
                <Menu className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span className="hidden sm:inline">Menu</span>
              </button>

              {/* Brand Logo */}
              <div
                onClick={() => navigateTo({ name: 'home' })}
                className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group min-w-0"
                id="header-brand-logo"
              >
                <span className="w-8 h-8 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-sm font-serif-luxury tracking-wider group-hover:scale-105 transition-transform shadow-xs shrink-0">
                  {activePreset.name.charAt(0)}
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-zinc-950 dark:text-white font-display leading-tight truncate max-w-[90px] xs:max-w-[130px] sm:max-w-[180px] md:max-w-none">
                    {activePreset.name}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono hidden md:block truncate">
                    {activePreset.categoryTag}
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Search Bar with Autocomplete dropdown & Smart suggestions */}
            <div ref={searchContainerRef} className="flex-1 max-w-lg relative min-w-0">
              <form onSubmit={handleSearchSubmit} className="w-full relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  placeholder={t.nav.searchPlaceholder || "Search bespoke collections, materials, artisans..."}
                  className="w-full bg-zinc-100/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 pl-9 pr-14 py-2 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white border border-zinc-200 dark:border-zinc-800 transition-all placeholder:text-zinc-400"
                  id="header-search-input"
                />
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <span className="hidden sm:inline-flex items-center gap-0.5 absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-zinc-400 font-mono bg-zinc-200/80 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-300/40 dark:border-zinc-700/50">
                  ⌘K
                </span>
              </form>

              {/* Search Typeahead Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden z-50 p-4 animate-in fade-in zoom-in-95 duration-150">
                  {searchResults.length > 0 ? (
                    <div className="mb-3 space-y-1">
                      <div className="flex items-center justify-between pb-1 border-b border-zinc-100 dark:border-zinc-800">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                          Matching Curations ({searchResults.length})
                        </p>
                        <span className="text-[10px] text-zinc-400">Press ↵ to view all</span>
                      </div>
                      <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                        {searchResults.map((product) => (
                          <div
                            key={product.id}
                            onClick={() => {
                              navigateTo({ name: 'pdp', productId: product.id });
                              setIsSearchOpen(false);
                            }}
                            className="flex items-center gap-3 py-2 px-2 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/70 rounded-xl cursor-pointer transition-colors group"
                          >
                            <img
                              src={product.images[0]?.url}
                              alt={product.title}
                              className="w-10 h-10 object-cover rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                {product.title}
                              </p>
                              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                                <span>{product.brand}</span>
                                <span>•</span>
                                <span className="font-bold text-zinc-900 dark:text-zinc-200">
                                  {formatCurrency(product.price, currency)}
                                </span>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : searchQuery.trim().length > 1 ? (
                    <div className="py-4 text-center text-xs text-zinc-500">
                      No direct item matches found for &ldquo;{searchQuery}&rdquo;.
                    </div>
                  ) : null}

                  {searchQuery.trim().length > 0 && (
                    <button
                      onClick={() => handleSearchSubmit()}
                      className="w-full text-left py-2 px-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white flex items-center justify-between mb-3 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Search catalog for &ldquo;{searchQuery}&rdquo;</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Popular Searches & Quick Discovery */}
                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>Trending Searches</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => {
                            setSearchQuery(term);
                            setFilterState((prev) => ({ ...prev, searchQuery: term }));
                            navigateTo({ name: 'plp', query: term });
                            setIsSearchOpen(false);
                          }}
                          className="text-xs bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-lg transition-colors font-medium"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Actions (Compare, Wishlist, Account, Cart) */}
            <div className="flex items-center gap-0.5 sm:gap-1.5 shrink-0">
              
              {/* Compare Items Button with Badge */}
              <button
                onClick={() => navigateTo({ name: 'compare' })}
                className="hidden md:flex relative p-2 sm:p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Product Comparison Matrix"
                aria-label="View Product Compare"
                id="header-compare-button"
              >
                <Scale className="w-4 h-4" />
                {compareList.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center shadow-xs">
                    {compareList.length}
                  </span>
                )}
              </button>

              {/* Wishlist Button with Badge */}
              <button
                onClick={() => navigateTo({ name: 'wishlist' })}
                className="hidden sm:flex relative p-2 sm:p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title={t.nav.wishlist || "Saved Wishlist"}
                aria-label="View Wishlist"
                id="header-wishlist-button"
              >
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-full text-[9px] font-bold flex items-center justify-center shadow-xs">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Account Dropdown with Profile Icon Only */}
              <div ref={accountMenuRef} className="relative">
                <button
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  className="flex items-center gap-1.5 p-2.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  title={t.nav.account || "Account Center"}
                  aria-label="Open Account Menu"
                  id="header-account-button"
                >
                  <UserIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  <ChevronDown className="w-3 h-3 text-zinc-400 hidden sm:inline" />
                </button>

                {isAccountMenuOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden z-50 p-2 text-xs animate-in fade-in zoom-in-95 duration-150">
                    {isLoggedIn && currentUser ? (
                      <>
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-xl mb-2">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="p-1 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                              <UserIcon className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                            </div>
                            <p className="font-bold text-zinc-900 dark:text-white truncate">
                              {currentUser.name}
                            </p>
                          </div>
                          <p className="text-[11px] text-zinc-500 truncate pl-6">
                            {currentUser.email}
                          </p>
                          <div className="mt-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between text-[10px]">
                            <span className="text-zinc-500">Tier: {activePreset?.name || 'Store'} VIP</span>
                            <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                              {currentUser.loyalty?.pointsBalance || 450} Pts
                            </span>
                          </div>
                        </div>

                        <div className="space-y-0.5">
                          <button
                            onClick={() => {
                              navigateTo({ name: 'account', tab: 'profile' });
                              setIsAccountMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left font-medium"
                          >
                            <UserIcon className="w-3.5 h-3.5 text-zinc-400" />
                            {t.account.profile || "Profile & Settings"}
                          </button>

                          <button
                            onClick={() => {
                              navigateTo({ name: 'account', tab: 'orders' });
                              setIsAccountMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left font-medium"
                          >
                            <Package className="w-3.5 h-3.5 text-zinc-400" />
                            {t.account.orders || "Order History"}
                          </button>

                          <button
                            onClick={() => {
                              navigateTo({ name: 'order-tracking' });
                              setIsAccountMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left font-medium"
                          >
                            <Truck className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Live Consignment Tracking</span>
                          </button>
                        </div>

                        <div className="my-1.5 border-t border-zinc-100 dark:border-zinc-800" />

                        {currentUser.role === 'admin' && (
                          <button
                            onClick={() => {
                              navigateTo({ name: 'admin', section: 'dashboard' });
                              setIsAccountMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg font-semibold transition-colors text-left"
                          >
                            <Settings className="w-3.5 h-3.5 text-zinc-500" />
                            {t.admin.title || "Admin Back-Office"}
                          </button>
                        )}

                        <button
                          onClick={() => {
                            logout();
                            setIsAccountMenuOpen(false);
                            showToast('Signed Out', 'You have securely signed out of your session.', 'info');
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors text-left font-medium"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          {t.nav.signOut || "Sign Out"}
                        </button>
                      </>
                    ) : (
                      <SignInPanel onSuccess={() => setIsAccountMenuOpen(false)} />
                    )}
                  </div>
                )}
              </div>

              {/* Shopping Bag / Mini-Cart Button */}
              <button
                onClick={() => setIsMiniCartOpen(true)}
                className="flex items-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shrink-0 shadow-xs"
                aria-label="Open Shopping Bag"
                id="header-cart-button"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-amber-400 text-black rounded-full text-[9px] font-extrabold flex items-center justify-center ring-2 ring-zinc-950 dark:ring-white">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline">
                  {cartItemCount > 0 ? formatCurrency(cartSubtotal, currency) : t.nav.cart}
                </span>
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Collapsed Slide-Out Navigation Directory Drawer */}
      {isNavDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsNavDrawerOpen(false)}
          />

          {/* Drawer Panel — V1 Editorial Boutique Style */}
          <aside className="relative w-full max-w-sm bg-white dark:bg-zinc-950 h-full shadow-2xl border-r border-zinc-200 dark:border-zinc-800 flex flex-col z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-sm font-serif-luxury shadow-xs">
                  {activePreset.name.charAt(0)}
                </span>
                <div>
                  <span className="text-sm font-bold text-zinc-950 dark:text-white font-display block">
                    {activePreset.name}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                    {activePreset.categoryTag || 'Boutique Collection'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsNavDrawerOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close navigation drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 text-xs">
              {/* Primary Navigation */}
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                  Explore
                </p>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      navigateTo({ name: 'home' });
                      if (onNavigate) onNavigate('/');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsNavDrawerOpen(false);
                    }}
                    className="w-full text-left py-2.5 px-3 rounded-xl text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-semibold transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>Home</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                  </button>
                  <button
                    onClick={() => {
                      setFilterState((prev) => ({ ...prev, categoryId: undefined, discountOnly: false }));
                      navigateTo({ name: 'plp' });
                      const el = document.querySelector('[data-section-type="products"], #products, #section-products, [id*="product"]');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      setIsNavDrawerOpen(false);
                    }}
                    className="w-full text-left py-2.5 px-3 rounded-xl text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-semibold transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>All Products</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                  </button>
                  <button
                    onClick={() => {
                      setFilterState((prev) => ({ ...prev, discountOnly: true }));
                      navigateTo({ name: 'plp' });
                      const el = document.querySelector('[data-section-type="products"], #products, #section-products, [id*="product"]');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      setIsNavDrawerOpen(false);
                    }}
                    className="w-full text-left py-2.5 px-3 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 font-semibold transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Promotions & Deals</span>
                    </span>
                    <span className="text-[10px] bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 font-bold px-1.5 py-0.5 rounded">Sale</span>
                  </button>
                </div>
              </div>

              {/* Generated Pages */}
              {pages && pages.length > 1 && (
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                    Pages
                  </p>
                  <div className="space-y-1">
                    {pages.filter((p: any) => p.slug !== 'index' && p.name?.toLowerCase() !== 'home').map((p: any) => (
                      <button
                        key={p.id || p.slug}
                        onClick={() => {
                          if (onNavigate) onNavigate(`/${p.slug}`);
                          setIsNavDrawerOpen(false);
                        }}
                        className="w-full text-left py-2 px-3 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{p.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              {categories && categories.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                    Categories
                  </p>
                  <div className="space-y-1">
                    {categories.map((cat) => {
                      const count = products.filter((p) => p.categoryId === cat.id).length;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setFilterState((prev) => ({ ...prev, categoryId: cat.id, discountOnly: false }));
                            navigateTo({ name: 'plp', categoryId: cat.id });
                            const el = document.querySelector('[data-section-type="products"], #products, #section-products, [id*="product"]');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                            setIsNavDrawerOpen(false);
                          }}
                          className="w-full flex items-center justify-between p-2 rounded-xl text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-left cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5">
                            {cat.image ? (
                              <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-7 h-7 rounded-lg object-cover bg-zinc-200 dark:bg-zinc-800 shrink-0"
                              />
                            ) : (
                              <div className="w-7 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-[10px] text-zinc-500">
                                {cat.name.charAt(0)}
                              </div>
                            )}
                            <span className="font-medium text-xs text-zinc-900 dark:text-white group-hover:text-amber-600 transition-colors">
                              {cat.name}
                            </span>
                          </div>
                          {count > 0 && (
                            <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900">
                              {count}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer — Clean Cart & Currency */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 space-y-3">
              <button
                onClick={() => {
                  setIsNavDrawerOpen(false);
                  setIsMiniCartOpen(true);
                }}
                className="w-full py-2.5 px-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold rounded-xl text-xs flex items-center justify-between shadow-xs hover:opacity-90 transition-opacity cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>My Bag</span>
                </span>
                <span className="text-[11px] font-mono">
                  {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
                </span>
              </button>

              <button
                onClick={() => {
                  setIsNavDrawerOpen(false);
                  navigateTo({ name: 'admin' });
                }}
                className="w-full py-2.5 px-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Settings className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Store Admin & Orders</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40" />
              </button>

              <div className="flex items-center justify-between text-zinc-500 text-xs px-1">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <DollarSign className="w-3 h-3" />
                  <span>Currency</span>
                </span>
                <select
                  aria-label="Select Currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent text-zinc-900 dark:text-white text-xs font-bold focus:outline-none cursor-pointer"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

