import React from 'react';
import { useStore } from './OmniStoreContext';
import {
  CheckCircle2,
  Package,
  Truck,
  MapPin,
  Printer,
  ArrowRight,
  Award,
} from 'lucide-react';
import { formatCurrency } from './utils';

interface OrderConfirmationPageProps {
  orderId?: string;
  data?: any;
}

export const OrderConfirmationOmni: React.FC<OrderConfirmationPageProps> = ({ orderId }) => {
  const { orders, navigateTo, currency, activePreset } = useStore();

  const order = orders.find((o) => o.id === orderId) || orders[0];

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold mb-4">No order found</h2>
        <button
          onClick={() => navigateTo({ name: 'home' })}
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-xs font-bold"
        >
          Return Home
        </button>
      </div>
    );
  }

  const earnedPoints = Math.round(order.total * 10);
  const carrierName = (order.shippingMethod as any)?.carrier || order.carrier || 'Carbon-Neutral Express';
  const shippingMethodName = (order.shippingMethod as any)?.name || order.shippingMethod || 'Standard Delivery';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Celebration Header */}
      <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
              Simulated Order Placed (Demo Mode)
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-display">
              Thank you for testing!
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
              Simulated demo order <span className="font-mono text-white font-bold">{order.orderNumber}</span> has been created for preview testing. No real payment was charged.
            </p>
          </div>

          {/* Loyalty Reward Points Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-xs font-bold border border-amber-400/30">
            <Award className="w-4 h-4" />
            <span>You earned +{earnedPoints} Loyalty Reward Points on this purchase!</span>
          </div>
        </div>
      </div>

      {/* Real-Time Courier Tracking Progress Timeline */}
      <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <h3 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
              <Truck className="w-5 h-5 text-amber-500" />
              <span>Live Delivery Tracking: {carrierName}</span>
            </h3>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">
              Tracking Number: {order.trackingNumber || 'FDX-993821094'}
            </p>
          </div>
          <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-full self-start sm:self-auto capitalize">
            Status: {order.orderStatus || 'Confirmed'}
          </span>
        </div>

        {/* Milestone Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
          <div className="flex items-start gap-3 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900/50">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-300">Order Placed</p>
              <p className="text-[10px] text-zinc-500">Verified by Gateway</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white">Fulfillment Hub</p>
              <p className="text-[10px] text-zinc-500">Item picking & QA</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white">In Transit</p>
              <p className="text-[10px] text-zinc-500">Carrier dispatch</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white">Delivered</p>
              <p className="text-[10px] text-zinc-500">Est. 2-3 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Itemized Receipt */}
      <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <h3 className="font-bold text-base text-zinc-900 dark:text-white">
            Receipt & Dispatch Breakdown
          </h3>
          <button
            onClick={() => window.print()}
            className="text-xs text-zinc-500 hover:text-black dark:hover:text-white flex items-center gap-1.5 font-medium border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-xl"
          >
            <Printer className="w-3.5 h-3.5" /> Print Receipt
          </button>
        </div>

        {/* Items */}
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800 text-xs">
          {order.items.map((item) => (
            <div key={item.id} className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={item.image} alt="" className="w-12 h-12 object-cover rounded-xl bg-zinc-100" />
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white">{item.title}</p>
                  <p className="text-zinc-500">Qty: {item.quantity} • Unit: {item.unitOfMeasure || 'piece'}</p>
                </div>
              </div>
              <span className="font-bold text-zinc-900 dark:text-white">
                {formatCurrency(item.price * item.quantity, currency)}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing totals */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-1.5 text-xs">
          <div className="flex justify-between text-zinc-500">
            <span>Subtotal</span>
            <span className="font-semibold text-zinc-900 dark:text-white">{formatCurrency(order.subtotal, currency)}</span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between text-emerald-600 font-medium">
              <span>Discount</span>
              <span>-{formatCurrency(order.discount, currency)}</span>
            </div>
          )}
          <div className="flex justify-between text-zinc-500">
            <span>Shipping ({shippingMethodName})</span>
            <span>{order.shippingFee === 0 ? 'FREE' : formatCurrency(order.shippingFee, currency)}</span>
          </div>
          <div className="flex justify-between text-zinc-500">
            <span>Sales Tax</span>
            <span>{formatCurrency(order.tax, currency)}</span>
          </div>
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-between text-base font-extrabold text-zinc-900 dark:text-white">
            <span>Order Total (Simulated)</span>
            <span>{formatCurrency(order.total, currency)}</span>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={() => navigateTo({ name: 'plp' })}
          className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-800 flex items-center justify-center gap-2 shadow-lg"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => navigateTo({ name: 'home' })}
          className="w-full sm:w-auto bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-200"
        >
          Return to Storefront
        </button>
      </div>
    </div>
  );
};
