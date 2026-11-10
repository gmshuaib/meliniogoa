# Melinio

Generated Restaurant / Food site

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at your local development URL (typically `http://localhost:5173`)

## 🛍 E-Commerce Store Navigation & Routes

This exported store contains a self-contained single-page store application with full hash-based routing:

- **`#home`**: Featured hero, product highlights, curated collections, and about sections
- **`#shop`**: Complete searchable product catalog with faceted category filters, sort options, and grid/list views
- **`#pdp`** or **`#product`**: Product detail page with image gallery, variant selectors, stock indicators, and customer reviews
- **`#cart`**: Dynamic cart with quantity adjustments, promo coupons, loyalty points, and notes
- **`#checkout`**: Multi-step checkout flow with shipping options and simulated demo payment processing
- **`#order-confirmation`**: Order summary receipt with shipping milestones
- **`#order-tracking`**: Live order lookup and shipment timeline tracking
- **`#dashboard`** / **`#account`**: Customer profile, past order history, saved addresses, and payment methods
- **`#wishlist`**: Saved favorites with 1-click move to cart and sharing
- **`#faq`** / **`#contact`** / **`#terms`** / **`#privacy`**: Interactive Support Hub

### 💳 Testing Checkout (Demo Mode)

The store comes with a built-in mock payment gateway supporting instant testing:

| Card Type | Card Number | Expiry | CVV | Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **Visa (Success)** | `4242 •••• •••• 4242` | `12/28` | `123` | Instant order approval |
| **Mastercard (3DS)** | `5555 •••• •••• 4444` | `09/27` | `456` | 3D-Secure simulation |
| **Amex (Decline)** | `3782 •••••• 00005` | `03/26` | `8888` | Simulated decline test |

### ⚙️ Connecting Live Payments & Database

Checkout runs in simulated demo mode by default (`VITE_CHECKOUT_MODE=mock`). Real payment processing requires implementing your own server-side payment intent/checkout sessions (e.g. Stripe, Razorpay) to keep secret API keys secure.

To configure client-side environment variables or connect a Supabase database, copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

- **Supabase**: Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to connect your database
- **Payments**: See `/lib/payment-provider.ts` to wire your backend payment API

## 🔍 SEO Configuration

This project was generated with automatic SEO metadata. Here's what's included and what you'll need to configure after deployment:

### Canonical URL & Domain
> **⚠️ Action required:** The canonical URL, sitemap, and robots.txt currently use a placeholder domain (`https://your-production-domain.com`). Replace this with your real domain in:
> - `index.html` → `<link rel="canonical" href="...">` and `og:url`
> - `public/robots.txt` → `Sitemap:` line
> - `public/sitemap.xml` → all `<loc>` entries


### Automatically Generated SEO
- **`index.html`** — `<title>`, `<meta description>`, `<link rel="canonical">`, Open Graph tags, Twitter Card tags, Schema.org JSON-LD
- **`public/sitemap.xml`** — one entry per page with correct slugs and priority
- **`public/robots.txt`** — allows all bots, disallows `/admin` and `/api/`, points to sitemap

### Page SEO Values
- **Homepage** — The homepage SEO title and description (from the first page's `seo` block in WebGeny) are emitted directly into the static `index.html` `<title>`, `<meta description>`, and Open Graph tags. Search engines read these immediately without JavaScript.
- **Other pages** — Each page's `seo.title` and `seo.description` values are available in `src/siteConfig.json` under each page's `seo` object. They are **not** emitted as separate static HTML files. To apply them at runtime, your app can read `siteConfig.json` and update `document.title` on route change.
- **Dynamic per-route static metadata** — Requires JavaScript execution or a future prerendering step. Not required for a working launch.

### React/Vite SEO Note
This is a client-side React/Vite application. Search engines crawl the static `index.html` metadata immediately, but dynamic per-route titles require JavaScript execution. For maximum SEO coverage on all routes, consider adding a prerendering step (e.g., `vite-plugin-prerender` or deploying on a platform with edge rendering) after launch. This is **not required** for a working launch.

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Vite and deploys instantly

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual (Any Static Host)
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 🛠 Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

---

Built with ❤️ using [Webgeny](https://webgeny.app)
