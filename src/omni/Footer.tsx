import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import {
  ShieldCheck,
  RotateCcw,
  Truck,
  Headphones,
  ArrowRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { activePreset, categories, navigateTo, showToast, t } = useStore();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    showToast('Subscribed', 'You will receive our latest updates and lookbooks.', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 transition-colors duration-200 mt-24">
      {/* Value Proposition Grid (4 Trust Pillars) */}
      <div className="border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-zinc-400 shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-200 text-xs">{t.home.freeShipping}</h4>
                <p className="text-[11px] text-zinc-500">{t.home.freeShippingDesc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-200 text-xs">{t.home.securePayment}</h4>
                <p className="text-[11px] text-zinc-500">{t.home.securePaymentDesc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <RotateCcw className="w-4 h-4 text-zinc-400 shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-200 text-xs">{t.home.easyReturns}</h4>
                <p className="text-[11px] text-zinc-500">{t.home.easyReturnsDesc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Headphones className="w-4 h-4 text-zinc-400 shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-200 text-xs">{t.home.support247}</h4>
                <p className="text-[11px] text-zinc-500">{t.home.support247Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <div
              onClick={() => navigateTo({ name: 'home' })}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="w-6 h-6 rounded bg-white text-zinc-950 flex items-center justify-center font-bold text-xs">
                {activePreset.name.charAt(0)}
              </span>
              <span className="text-base font-bold text-white font-display">
                {activePreset.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
              {activePreset.tagline}.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="flex gap-1.5 max-w-xs">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-zinc-900 border border-zinc-800 text-white text-xs px-3 py-1.5 rounded-lg flex-1 focus:outline-none focus:border-zinc-500 placeholder:text-zinc-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-zinc-950 font-medium text-xs px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Catalog Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Categories
            </h4>
            <ul className="space-y-1.5 text-xs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigateTo({ name: 'plp', categoryId: cat.id })}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigateTo({ name: 'plp' })}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  All Products
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service & Help */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Support
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo({ name: 'faq' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Help & FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'shipping-policy' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Shipping Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'order-tracking' })}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Track Order</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase">Live</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'contact' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'account', tab: 'orders' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo({ name: 'about' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'blog' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'vendor-store', vendorId: activePreset.vendors[0]?.id || '' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Artisan Houses
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'terms' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ name: 'privacy' })}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900/80 py-4 text-[11px] text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {activePreset.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
