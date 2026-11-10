import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import {
  Package,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  ShieldCheck,
  Copy,
  ExternalLink,
  PhoneCall,
  ArrowRight,
  Download,
  AlertCircle,
} from 'lucide-react';
import { formatCurrency } from './utils';
import { Order } from './types';

export const OrderTrackingOmni: React.FC<{ data?: any }> = () => {
  const { activePreset, orders, navigateTo, showToast, currency } = useStore();
  const [orderQuery, setOrderQuery] = useState('AURA-ORD-1092');
  const [emailQuery, setEmailQuery] = useState('');
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(
    orders[0] || null
  );
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    const query = orderQuery.trim().toLowerCase();
    const found = orders.find(
      (o) =>
        o.orderNumber.toLowerCase() === query ||
        o.id.toLowerCase() === query ||
        (o.trackingNumber && o.trackingNumber.toLowerCase() === query)
    );

    setSearchedOrder(found || null);
    setHasSearched(true);

    if (found) {
      showToast('Order Located', `Displaying live dispatch updates for ${found.orderNumber}.`, 'success');
    } else {
      showToast('Order Not Found', 'Please check the order reference number or contact concierge.', 'error');
    }
  };

  const handleCopyTracking = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast('Copied', 'Tracking number copied to clipboard.', 'info');
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Header & Lookup Bar */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          Global Courier Dispatch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white">
          Track Your {activePreset?.name || 'Order'} Consignment
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Monitor your shipment in real-time across international couriers with verified temperature, customs, and carbon offset tracking.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={orderQuery}
              onChange={(e) => setOrderQuery(e.target.value)}
              placeholder="Order Number (e.g. AURA-ORD-1092) or Tracking Code"
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white shadow-xs"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black dark:bg-white text-white dark:text-black font-bold text-xs sm:text-sm px-7 py-3 rounded-2xl hover:bg-zinc-800 transition-colors shadow-md shrink-0 flex items-center justify-center gap-2"
          >
            <span>Track Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Sample Order Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-zinc-500">
          <span>Quick Lookup:</span>
          {orders.map((o) => (
            <button
              key={o.id}
              onClick={() => {
                setOrderQuery(o.orderNumber);
                setSearchedOrder(o);
                setHasSearched(true);
              }}
              className="underline hover:text-zinc-900 dark:hover:text-white font-mono"
            >
              {o.orderNumber}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Search Result View */}
      {hasSearched && searchedOrder && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Order Header Summary Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold font-mono text-zinc-900 dark:text-white">
                    {searchedOrder.orderNumber}
                  </h2>
                  <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold capitalize border border-emerald-500/20">
                    {searchedOrder.orderStatus.replace(/_/g, ' ')}
                  </span>
                </div>
                <p className="text-xs text-zinc-500">
                  Consigned to <strong className="text-zinc-800 dark:text-zinc-200">{searchedOrder.customerName}</strong> ({searchedOrder.customerEmail})
                </p>
              </div>

              {/* Carrier & Tracking Code */}
              <div className="flex flex-wrap items-center gap-3">
                {searchedOrder.trackingNumber && (
                  <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/80 px-4 py-2 rounded-xl border border-zinc-200/60 dark:border-zinc-700">
                    <span className="text-xs text-zinc-400">Carrier:</span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">{searchedOrder.carrier || 'DHL Express'}</span>
                    <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 ml-1">{searchedOrder.trackingNumber}</span>
                    <button
                      onClick={() => handleCopyTracking(searchedOrder.trackingNumber!)}
                      className="p-1 hover:text-zinc-900 dark:hover:text-white text-zinc-400 transition-colors"
                      title="Copy Tracking Number"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                <button
                  onClick={() => showToast('Invoice Exported', `Official PDF invoice for ${searchedOrder.orderNumber} prepared.`, 'info')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Invoice</span>
                </button>
              </div>
            </div>

            {/* Estimated Delivery Banner */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800">
                <Calendar className="w-5 h-5 text-zinc-500 shrink-0" />
                <div>
                  <span className="block text-[11px] text-zinc-400 uppercase font-semibold">Estimated Delivery</span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    {new Date(searchedOrder.estimatedDeliveryDate).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800">
                <MapPin className="w-5 h-5 text-zinc-500 shrink-0" />
                <div>
                  <span className="block text-[11px] text-zinc-400 uppercase font-semibold">Destination</span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white truncate max-w-[200px] block">
                    {searchedOrder.shippingAddress.city}, {searchedOrder.shippingAddress.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <span className="block text-[11px] text-zinc-400 uppercase font-semibold">Carbon Offset</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    100% Neutral Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Interactive Milestone Timeline */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-lg space-y-6">
            <h3 className="text-base font-bold font-display text-zinc-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-500" />
              <span>Consignment Checkpoints & Live Feed</span>
            </h3>

            {/* Checkpoint list */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800">
              {searchedOrder.trackingEvents && searchedOrder.trackingEvents.length > 0 ? (
                searchedOrder.trackingEvents.map((evt, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      evt.completed
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-400'
                    }`}>
                      {evt.completed ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className={`text-xs sm:text-sm font-bold ${evt.completed ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>
                          {evt.title}
                        </h4>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {new Date(evt.timestamp).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        {evt.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <MapPin className="w-3 h-3" />
                        {evt.location}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-xs text-zinc-500">
                  Consignment registered with international shipping provider.
                </div>
              )}
            </div>
          </div>

          {/* 4. Items Manifest */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-lg space-y-4">
            <h3 className="text-base font-bold font-display text-zinc-900 dark:text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-zinc-500" />
              <span>Manifest Summary ({searchedOrder.items.length} pieces)</span>
            </h3>

            <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {searchedOrder.items.map((item) => (
                <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover border border-zinc-200/60 dark:border-zinc-800 bg-zinc-100 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Qty: {item.quantity} {item.attributes && `• ${Object.entries(item.attributes).map(([k, v]) => `${k}: ${v}`).join(' ')}`}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold font-mono text-zinc-900 dark:text-white">
                    {formatCurrency(item.price * item.quantity, currency)}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* 3. Empty State if not found */}
      {hasSearched && !searchedOrder && (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 p-12 text-center space-y-4 shadow-md max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-display">
            No Matching Consignment Found
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            We could not locate an active shipment under reference &ldquo;{orderQuery}&rdquo;. Please verify your tracking code or reach out to our client concierge for instant lookups.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => navigateTo({ name: 'contact' })}
              className="px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs shadow-md"
            >
              Contact Concierge
            </button>
            <button
              onClick={() => {
                setOrderQuery('AURA-ORD-1092');
                setSearchedOrder(orders[0] || null);
              }}
              className="px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
            >
              Load Demo Order
            </button>
          </div>
        </div>
      )}

      {/* 4. Customer Care Callout */}
      <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <PhoneCall className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
          <div>
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white">Require Address Rerouting or Signature Holds?</h4>
            <p className="text-[11px] text-zinc-500">Our concierge can modify delivery instructions with couriers up to 2 hours before local transit.</p>
          </div>
        </div>
        <button
          onClick={() => navigateTo({ name: 'contact' })}
          className="text-xs font-bold px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shrink-0"
        >
          Dispatch Instruction
        </button>
      </div>

    </div>
  );
};
