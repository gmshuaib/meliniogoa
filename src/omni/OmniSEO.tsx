import React, { useEffect } from 'react';
import { useStore } from './OmniStoreContext';

interface OmniSEOProps {
  siteName?: string;
  defaultDescription?: string;
  /** Set true when rendered inside the Webgeny editor/preview — prevents
   *  the component from overwriting the host app's document.title. */
  isEditor?: boolean;
}

export const OmniSEO: React.FC<OmniSEOProps> = ({ siteName, defaultDescription, isEditor }) => {
  const { currentRoute, activePreset, products, currency } = useStore();

  useEffect(() => {
    // Never mutate the host document when running inside the Webgeny editor.
    if (isEditor) return;

    const storeName = siteName || activePreset.name || 'Store';
    let pageTitle = `${storeName} — ${activePreset.tagline || 'Modern E-Commerce'}`;
    let pageDescription = defaultDescription || `${storeName} - Curated luxury catalog and exclusive collections.`;
    let ogType = 'website';
    let ogImage = activePreset.banners?.[0]?.image || products[0]?.images?.[0]?.url || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80';
    let schemaJson: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'OnlineStore',
      name: storeName,
      description: pageDescription,
      url: window.location.origin,
      currenciesAccepted: currency || 'USD',
      paymentAccepted: 'Credit Card, PayPal, Apple Pay',
    };

    // Dynamic metadata per route
    switch (currentRoute.name) {
      case 'shop':
      case 'plp':
      case 'category':
        pageTitle = `Shop Complete Collection — ${storeName}`;
        pageDescription = `Explore our permanent catalog of master-crafted essentials and seasonal releases at ${storeName}.`;
        break;

      case 'pdp':
      case 'product': {
        const productId = (currentRoute as any).productId;
        const product = products.find((p) => p.id === productId) || products[0];
        if (product) {
          pageTitle = `${product.title} — ${storeName}`;
          pageDescription = product.shortDescription || product.fullDescription || `Buy ${product.title} at ${storeName}. Free shipping available.`;
          ogType = 'product';
          ogImage = product.images?.[0]?.url || ogImage;

          schemaJson = {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.title,
            image: product.images?.map((img: any) => img.url) || [ogImage],
            description: pageDescription,
            sku: product.sku || product.id,
            brand: {
              '@type': 'Brand',
              name: product.brand || storeName,
            },
            offers: {
              '@type': 'Offer',
              url: window.location.href,
              priceCurrency: currency || 'USD',
              price: String(product.price || 0),
              priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              itemCondition: 'https://schema.org/NewCondition',
              availability: (product.stockQuantity ?? 10) > 0
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
              seller: {
                '@type': 'Organization',
                name: storeName,
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: String(product.rating || 4.8),
              reviewCount: String(product.reviewCount || 12),
              bestRating: '5',
              worstRating: '1',
            },
          };
        }
        break;
      }

      case 'cart':
        pageTitle = `Shopping Cart — ${storeName}`;
        pageDescription = `Review your selected items and proceed to secure checkout at ${storeName}.`;
        break;

      case 'checkout':
        pageTitle = `Secure Checkout — ${storeName}`;
        pageDescription = `Encrypted 256-bit checkout for your order at ${storeName}.`;
        break;

      case 'order-tracking':
        pageTitle = `Track Your Shipment — ${storeName}`;
        pageDescription = `Check real-time package delivery milestones and order status at ${storeName}.`;
        break;

      case 'dashboard':
      case 'account':
        pageTitle = `Account & Orders — ${storeName}`;
        pageDescription = `Manage your profile, saved shipping addresses, and purchase history.`;
        break;

      case 'wishlist':
        pageTitle = `My Curated Wishlist — ${storeName}`;
        pageDescription = `Your saved favorites and bespoke collection at ${storeName}.`;
        break;

      case 'faq':
        pageTitle = `Help & FAQ — ${storeName}`;
        pageDescription = `Frequently asked questions regarding shipping, returns, sizing, and guarantees.`;
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is your shipping policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide complimentary carbon-neutral standard delivery on orders over $50. Expedited 2-day delivery is available at checkout.',
              },
            },
            {
              '@type': 'Question',
              name: 'How do returns work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We offer a 30-day hassle-free return window on all unworn items with original tags.',
              },
            },
          ],
        };
        break;

      case 'about':
        pageTitle = `Our Story & Philosophy — ${storeName}`;
        pageDescription = `Discover the artisanal craftsmanship, ethical sourcing, and design vision behind ${storeName}.`;
        break;

      case 'contact':
        pageTitle = `Contact Concierge — ${storeName}`;
        pageDescription = `Get in touch with our customer support and styling concierge.`;
        break;

      default:
        break;
    }

    // 1. Update Document Title
    document.title = pageTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) el.setAttribute('property', prop);
        } else if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMetaTag('meta[name="description"]', 'content', pageDescription);
    setMetaTag('meta[property="og:title"]', 'content', pageTitle);
    setMetaTag('meta[property="og:description"]', 'content', pageDescription);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:url"]', 'content', window.location.href);
    setMetaTag('meta[property="og:site_name"]', 'content', storeName);
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', pageDescription);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // 3. Inject / Update Schema.org JSON-LD script
    let scriptEl = document.getElementById('omni-schema-ld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'omni-schema-ld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaJson, null, 2);
  }, [currentRoute, activePreset, products, currency, siteName, defaultDescription, isEditor]);

  return null;
};
