import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import {
  User as UserIcon,
  Package,
  MapPin,
  CreditCard,
  Award,
  Sparkles,
  RotateCcw,
  Truck,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { formatCurrency } from './utils';
import { SignInPanel } from './SignInPanel';

interface DashboardOmniProps {
  data?: any;
}

export const DashboardOmni: React.FC<DashboardOmniProps> = ({ data }) => {
  const {
    currentUser,
    orders,
    logout,
    isLoggedIn,
    currency,
    addToCart,
    products,
    navigateTo,
    showToast,
  } = useStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'addresses' | 'loyalty'>('overview');

  // Sample orders if none exist in preview state
  const displayOrders = orders && orders.length > 0 ? orders : [
    {
      id: 'ORD-84920',
      orderNumber: 'ORD-84920',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      status: 'shipped',
      total: 480.00,
      items: [
        { productId: 'piece-1', title: 'Monaco Double-Breasted Cashmere Overcoat', price: 480, quantity: 1, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'ORD-72109',
      orderNumber: 'ORD-72109',
      createdAt: new Date(Date.now() - 86400000 * 12).toISOString(),
      status: 'delivered',
      total: 240.00,
      items: [
        { productId: 'piece-2', title: 'Vegetable-Tanned Saddle Bag', price: 240, quantity: 1, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop&q=80' }
      ]
    }
  ];

  const headline = data?.headline || 'Customer Account & Orders';
  const subheadline = data?.subheadline || 'Track current deliveries, review purchase history, and manage store credits.';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            ACCOUNT PORTAL
          </span>
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white font-display mt-1">
            {headline}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {subheadline}
          </p>
        </div>

        {/* Quick Nav Tabs */}
        <div className="flex flex-wrap gap-2 bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 self-start">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'orders'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Orders ({displayOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('loyalty')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'loyalty'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Store Rewards
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-[11px] font-bold uppercase tracking-wider">Active Orders</span>
            <Package className="w-4 h-4 text-zinc-400" />
          </div>
          <p className="text-2xl font-bold font-display text-zinc-900 dark:text-white">1 In Transit</p>
          <p className="text-[11px] text-emerald-500 flex items-center gap-1">
            <Truck className="w-3 h-3" /> Arriving in 2 business days
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-[11px] font-bold uppercase tracking-wider">Total Spent</span>
            <CreditCard className="w-4 h-4 text-zinc-400" />
          </div>
          <p className="text-2xl font-bold font-display text-zinc-900 dark:text-white">{formatCurrency(720.00, currency)}</p>
          <p className="text-[11px] text-zinc-400">Lifetime purchases</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-[11px] font-bold uppercase tracking-wider">Reward Credits</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-bold font-display text-amber-500">450 Pts</p>
          <p className="text-[11px] text-zinc-400">Worth $45.00 in checkout discounts</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-[11px] font-bold uppercase tracking-wider">Tier Status</span>
            <Sparkles className="w-4 h-4 text-zinc-400" />
          </div>
          <p className="text-2xl font-bold font-display text-zinc-900 dark:text-white">Gold Patron</p>
          <p className="text-[11px] text-zinc-400">Complimentary courier on all orders</p>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders Card */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white font-display">Recent Activity</h2>
              <button onClick={() => setActiveTab('orders')} className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-semibold flex items-center gap-1">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {displayOrders.map((ord: any) => (
                <div key={ord.id} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {ord.items?.[0]?.image ? (
                      <img src={ord.items[0].image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                        <Package className="w-6 h-6 text-zinc-400" />
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">{ord.orderNumber}</span>
                      <p className="text-[11px] text-zinc-500">{ord.items?.[0]?.title || 'Store Items'}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className="text-xs font-bold font-mono text-zinc-900 dark:text-white">
                      {formatCurrency(ord.total, currency)}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      ord.status === 'delivered'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    }`}>
                      {ord.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Support & Delivery Notice */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
              <span className="inline-flex p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white font-display">Concierge Guarantee</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                All purchases are backed by carbon-neutral courier logistics, 30-day effortless returns, and 24/7 client advisor support.
              </p>
            </div>

            <div className="bg-zinc-950 text-white rounded-3xl p-6 space-y-3 shadow-lg">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">CLIENT ADVISOR</span>
              <h3 className="text-base font-bold font-display">Need assistance with a piece?</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our bespoke styling advisors are ready to assist with sizing, bespoke commissions, and care inquiries.
              </p>
              <button
                onClick={() => showToast('Connecting', 'Connecting to client advisor concierge...', 'info')}
                className="w-full py-2.5 rounded-full bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-200 transition-colors"
              >
                Inquire Advisor
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-display">All Purchase History</h2>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {displayOrders.map((ord: any) => (
              <div key={ord.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">{ord.orderNumber}</span>
                    <span className="text-xs text-zinc-400">· {new Date(ord.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-xs text-zinc-500">{ord.items?.[0]?.title} ({ord.items?.length || 1} item)</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold font-mono">{formatCurrency(ord.total, currency)}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 capitalize font-medium">
                    {ord.status}
                  </span>
                  <button
                    onClick={() => showToast('Tracking', `Order ${ord.orderNumber} is on the delivery route.`, 'info')}
                    className="text-xs font-bold text-zinc-900 dark:text-white underline hover:opacity-80"
                  >
                    Track Parcel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'loyalty' && (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200/80 dark:border-zinc-800 text-center max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold font-display text-zinc-900 dark:text-white">450 Reward Credits Available</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Earn 1 credit for every $1 spent. Redeem your credits at checkout for instant discounts and access to private capsule releases.
          </p>
          <div className="pt-2">
            <button
              onClick={() => showToast('Credits Applied', '$45 store discount will apply at your next checkout!', 'success')}
              className="px-6 py-3 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold hover:scale-102 transition-transform"
            >
              Redeem At Next Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DashboardOmni;
