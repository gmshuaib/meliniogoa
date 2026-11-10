import React, { useEffect } from 'react';
import { OmniStoreProvider, useStore } from './omni/OmniStoreContext';
import { OMNI_STYLE, OMNI_CONTENT, OMNI_SECTIONS } from './omni/config';
import { Navbar } from './omni/Navbar';
import { Hero } from './omni/Hero';
import { About } from './omni/About';
import { Footer } from './omni/Footer';
import { Products } from './omni/Products';
import { ProductDetail } from './omni/ProductDetail';
import { Cart } from './omni/Cart';
import { Checkout } from './omni/Checkout';
import { ShopOmni } from './omni/ShopOmni';
import { OrderConfirmationOmni } from './omni/OrderConfirmationOmni';
import { OrderTrackingOmni } from './omni/OrderTrackingOmni';
import { DashboardOmni } from './omni/DashboardOmni';
import { SupportHubOmni } from './omni/SupportHubOmni';
import { WishlistOmni } from './omni/WishlistOmni';
import { MiniCartDrawer } from './omni/MiniCartDrawer';
import { QuickViewModal } from './omni/QuickViewModal';
import { CompareModal } from './omni/CompareModal';
import { LiveChatWidget } from './omni/LiveChatWidget';
import { CookieConsent } from './omni/CookieConsent';
import { OmniSEO } from './omni/OmniSEO';
import Watermark from './components/UI/Watermark';

const has = (t: string) => (OMNI_SECTIONS as readonly string[]).includes(t);

function StoreContent(): JSX.Element {
  const { currentRoute, quickViewProduct, setQuickViewProduct, products: storeProducts } = useStore();

  useEffect(() => {
    const el = document.documentElement;
    Object.entries(OMNI_STYLE.omniVars || {}).forEach(([k, val]) => el.style.setProperty(k, String(val)));
  }, []);

  const renderView = () => {
    switch (currentRoute.name) {
      case 'shop':
      case 'plp':
      case 'category':
        return <ShopOmni products={OMNI_CONTENT.items as any} />;
      case 'pdp':
      case 'product': {
        const prod = storeProducts.find((p: any) => p.id === (currentRoute as any).productId) || (OMNI_CONTENT.items as any)?.[0];
        return <ProductDetail product={prod} />;
      }
      case 'cart':
        return <Cart />;
      case 'checkout':
        return <Checkout initialStep={(currentRoute as any).step} />;
      case 'order-confirmation':
        return <OrderConfirmationOmni orderId={(currentRoute as any).orderId} />;
      case 'order-tracking':
        return <OrderTrackingOmni />;
      case 'dashboard':
      case 'account':
      case 'login':
      case 'signup':
      case 'vendor-dashboard':
        return <DashboardOmni />;
      case 'wishlist':
        return <WishlistOmni />;
      case 'faq':
        return <SupportHubOmni initialTab="faq" />;
      case 'about':
        return <SupportHubOmni initialTab="about" />;
      case 'contact':
        return <SupportHubOmni initialTab="contact" />;
      case 'shipping-policy':
        return <SupportHubOmni initialTab="shipping-policy" />;
      case 'terms':
        return <SupportHubOmni initialTab="terms" />;
      case 'privacy':
        return <SupportHubOmni initialTab="privacy" />;
      case 'home':
      default:
        return (
          <>
            {has('hero') && <Hero />}
            {has('products') && <Products products={OMNI_CONTENT.items as any} />}
            {has('about') && <About />}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col justify-between preview-content">
      <Navbar />
      <main className="flex-1">
        {renderView()}
      </main>
      <Footer />
      <MiniCartDrawer />
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      <CompareModal />
      <LiveChatWidget />
      <CookieConsent />
      <OmniSEO />
      <Watermark isPaidUser={false} />
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <OmniStoreProvider data={{ ...OMNI_CONTENT }} style={{ ...OMNI_STYLE }}>
      <StoreContent />
    </OmniStoreProvider>
  );
}