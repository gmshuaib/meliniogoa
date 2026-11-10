/**
 * Standalone Data Bundle for Exported OmniStore E-Commerce Site
 * Contains catalog presets, mock orders, coupons, and customer profiles.
 */

import type { StorePreset, Product, Coupon, Order, User } from './types';

export const initialCoupons: Coupon[] = [
  {
    "code": "WELCOME10",
    "description": "10% discount on your first order across all categories",
    "type": "percentage",
    "value": 10,
    "minCartValue": 50,
    "maxDiscount": 100,
    "firstOrderOnly": true,
    "usedCount": 142,
    "isActive": true
  },
  {
    "code": "SAVE20",
    "description": "$20 off on orders over $150",
    "type": "fixed",
    "value": 20,
    "minCartValue": 150,
    "usedCount": 89,
    "isActive": true
  },
  {
    "code": "FREESHIP",
    "description": "Free expedited carbon-neutral shipping on any cart",
    "type": "free_shipping",
    "value": 0,
    "minCartValue": 40,
    "usedCount": 215,
    "isActive": true
  },
  {
    "code": "VIPFLASH",
    "description": "25% VIP flash discount on select items",
    "type": "percentage",
    "value": 25,
    "minCartValue": 200,
    "maxDiscount": 250,
    "usedCount": 34,
    "isActive": true
  }
];

export const initialUser: User = {
  "id": "usr-001",
  "name": "Eleanor Vance",
  "email": "eleanor.vance@example.com",
  "phone": "+1 (555) 234-5678",
  "role": "customer",
  "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  "loyalty": {
    "pointsBalance": 450,
    "tier": "Gold",
    "tierProgress": 75,
    "history": [
      {
        "id": "lh-1",
        "points": 150,
        "type": "earn",
        "description": "Points earned on Order #ORD-84920",
        "date": "2026-02-10"
      },
      {
        "id": "lh-2",
        "points": 200,
        "type": "bonus",
        "description": "Birthday Member Bonus",
        "date": "2026-01-20"
      },
      {
        "id": "lh-3",
        "points": 100,
        "type": "earn",
        "description": "Review written with photo",
        "date": "2026-01-15"
      }
    ]
  },
  "referralCode": "ELEANOR-VIP",
  "referredCount": 3,
  "referralEarnings": 60,
  "is2FAEnabled": false,
  "addresses": [
    {
      "id": "addr-1",
      "fullName": "Eleanor Vance",
      "phone": "+1 (555) 234-5678",
      "street": "742 Evergreen Terrace",
      "street2": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94107",
      "country": "United States",
      "isDefaultShipping": true,
      "isDefaultBilling": true,
      "type": "home"
    },
    {
      "id": "addr-2",
      "fullName": "Eleanor Vance (Office)",
      "phone": "+1 (555) 987-6543",
      "street": "500 Howard Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94105",
      "country": "United States",
      "isDefaultShipping": false,
      "isDefaultBilling": false,
      "type": "work"
    }
  ],
  "savedPayments": [
    {
      "id": "sp-1",
      "type": "visa",
      "last4": "4242",
      "expiry": "12/28",
      "holderName": "Eleanor Vance",
      "isDefault": true
    },
    {
      "id": "sp-2",
      "type": "mastercard",
      "last4": "8812",
      "expiry": "06/27",
      "holderName": "Eleanor Vance",
      "isDefault": false
    }
  ],
  "notificationSettings": {
    "orderUpdatesEmail": true,
    "orderUpdatesSms": true,
    "priceDropAlerts": true,
    "backInStockAlerts": true,
    "promotionsNewsletter": false
  },
  "createdAt": "2025-06-15T10:00:00Z"
};

export const initialOrders: Order[] = [
  {
    "id": "ord-1001",
    "orderNumber": "ORD-84920",
    "userId": "usr-001",
    "customerName": "Eleanor Vance",
    "customerEmail": "eleanor.vance@example.com",
    "customerPhone": "+1 (555) 234-5678",
    "items": [
      {
        "id": "oi-1",
        "productId": "fash-001",
        "title": "Monaco Double-Breasted Cashmere Overcoat",
        "price": 680,
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&auto=format&fit=crop&q=80",
        "attributes": {
          "size": "M",
          "color": "Camel Gold"
        },
        "sellerId": "vendor-aura-flagship"
      }
    ],
    "subtotal": 680,
    "discount": 68,
    "shippingFee": 0,
    "tax": 55.08,
    "total": 667.08,
    "currency": "USD",
    "paymentStatus": "paid",
    "paymentMethod": "credit_card",
    "shippingMethod": "express",
    "shippingAddress": {
      "id": "addr-1",
      "fullName": "Eleanor Vance",
      "phone": "+1 (555) 234-5678",
      "street": "742 Evergreen Terrace",
      "street2": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94107",
      "country": "United States",
      "isDefaultShipping": true,
      "isDefaultBilling": true,
      "type": "home"
    },
    "billingAddress": {
      "id": "addr-1",
      "fullName": "Eleanor Vance",
      "phone": "+1 (555) 234-5678",
      "street": "742 Evergreen Terrace",
      "street2": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94107",
      "country": "United States",
      "isDefaultShipping": true,
      "isDefaultBilling": true,
      "type": "home"
    },
    "orderStatus": "shipped",
    "trackingNumber": "FDX-993821094",
    "carrier": "FedEx Carbon-Neutral Express",
    "estimatedDeliveryDate": "2026-08-26",
    "couponCode": "WELCOME10",
    "createdAt": "2026-08-22T14:30:00Z",
    "updatedAt": "2026-08-23T09:15:00Z",
    "trackingEvents": [
      {
        "status": "placed",
        "title": "Order Placed & Payment Authorized",
        "description": "Your order was received and verified.",
        "location": "San Francisco, CA",
        "timestamp": "2026-08-22 14:30",
        "completed": true
      },
      {
        "status": "confirmed",
        "title": "Order Confirmed by Flagship Studio",
        "description": "Item inspection and luxury packaging prepared.",
        "location": "Fulfillment Center, NY",
        "timestamp": "2026-08-22 16:45",
        "completed": true
      },
      {
        "status": "shipped",
        "title": "Departed Carrier Sorting Facility",
        "description": "Package is in transit via Express Air.",
        "location": "FedEx Hub, Memphis, TN",
        "timestamp": "2026-08-23 04:10",
        "completed": true
      },
      {
        "status": "out_for_delivery",
        "title": "Out for Local Delivery",
        "description": "Courier vehicle assigned.",
        "location": "San Francisco Distribution Hub",
        "timestamp": "Pending",
        "completed": false
      },
      {
        "status": "delivered",
        "title": "Delivered",
        "description": "Package handed to resident.",
        "location": "San Francisco, CA",
        "timestamp": "Estimated Aug 26",
        "completed": false
      }
    ]
  },
  {
    "id": "ord-1002",
    "orderNumber": "ORD-77312",
    "userId": "usr-001",
    "customerName": "Eleanor Vance",
    "customerEmail": "eleanor.vance@example.com",
    "customerPhone": "+1 (555) 234-5678",
    "items": [
      {
        "id": "oi-2",
        "productId": "fash-002",
        "title": "Silk High-Neck Long-Sleeve Maxi Dress",
        "price": 340,
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&auto=format&fit=crop&q=80",
        "attributes": {
          "size": "S",
          "color": "Emerald Forest"
        },
        "sellerId": "vendor-aura-flagship"
      }
    ],
    "subtotal": 340,
    "discount": 0,
    "shippingFee": 0,
    "tax": 27.2,
    "total": 367.2,
    "currency": "USD",
    "paymentStatus": "paid",
    "paymentMethod": "apple_pay",
    "shippingMethod": "standard",
    "shippingAddress": {
      "id": "addr-1",
      "fullName": "Eleanor Vance",
      "phone": "+1 (555) 234-5678",
      "street": "742 Evergreen Terrace",
      "street2": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94107",
      "country": "United States",
      "isDefaultShipping": true,
      "isDefaultBilling": true,
      "type": "home"
    },
    "billingAddress": {
      "id": "addr-1",
      "fullName": "Eleanor Vance",
      "phone": "+1 (555) 234-5678",
      "street": "742 Evergreen Terrace",
      "street2": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94107",
      "country": "United States",
      "isDefaultShipping": true,
      "isDefaultBilling": true,
      "type": "home"
    },
    "orderStatus": "delivered",
    "trackingNumber": "UPS-88491029",
    "carrier": "UPS Ground",
    "estimatedDeliveryDate": "2026-07-28",
    "createdAt": "2026-07-25T11:20:00Z",
    "updatedAt": "2026-07-28T15:40:00Z",
    "trackingEvents": [
      {
        "status": "placed",
        "title": "Order Placed",
        "description": "Payment verified.",
        "location": "San Francisco, CA",
        "timestamp": "2026-07-25 11:20",
        "completed": true
      },
      {
        "status": "shipped",
        "title": "In Transit",
        "description": "Handed to UPS.",
        "location": "Oakland, CA",
        "timestamp": "2026-07-26 09:00",
        "completed": true
      },
      {
        "status": "delivered",
        "title": "Delivered to Front Door",
        "description": "Signed by recipient.",
        "location": "San Francisco, CA",
        "timestamp": "2026-07-28 15:40",
        "completed": true
      }
    ]
  }
];

export const storePresets: Record<string, StorePreset> = {
  "fashion": {
    "id": "fashion",
    "name": "AURA Boutique",
    "tagline": "Modern Elegance & Haute Couture Essentials",
    "categoryTag": "Apparel & Fashion",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "fashion",
      "primaryColor": "#18181b",
      "primaryHover": "#27272a",
      "secondaryColor": "#a1a1aa",
      "accentColor": "#9333ea",
      "surfaceColor": "#ffffff",
      "surfaceElevated": "#f4f4f5",
      "textColor": "#09090b",
      "textMuted": "#71717a",
      "borderColor": "#e4e4e7",
      "fontDisplay": "Playfair Display, Georgia, serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-none",
      "shadowIntensity": "shadow-sm",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-fashion-women",
        "name": "Women's Collection",
        "slug": "womens-collection",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80",
        "bannerImage": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1600&auto=format&fit=crop&q=80",
        "description": "Sophisticated silhouettes, premium tailoring, and contemporary essentials.",
        "allowedUnits": [
          "piece",
          "set"
        ],
        "attributes": [
          {
            "key": "size",
            "label": "Size",
            "type": "select",
            "options": [
              "XS",
              "S",
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "color",
            "label": "Color",
            "type": "color",
            "options": [
              "Midnight Black",
              "Ivory Silk",
              "Camel Gold",
              "Emerald Forest",
              "Burgundy Velvet"
            ],
            "colorCodes": {
              "Midnight Black": "#121212",
              "Ivory Silk": "#faf7f2",
              "Camel Gold": "#c19a6b",
              "Emerald Forest": "#046307",
              "Burgundy Velvet": "#800020"
            },
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "material",
            "label": "Fabric & Material",
            "type": "select",
            "options": [
              "100% Cashmere",
              "Mulberry Silk",
              "Organic Linen",
              "Italian Wool",
              "Recycled Cotton"
            ],
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "fit",
            "label": "Fit Style",
            "type": "select",
            "options": [
              "Tailored Slim",
              "Relaxed Oversized",
              "Regular Fit",
              "Structured Boxy"
            ],
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "season",
            "label": "Season",
            "type": "select",
            "options": [
              "Autumn/Winter",
              "Spring/Summer",
              "Resort Collection",
              "All-Season"
            ],
            "filterable": true,
            "displayInSpec": false
          }
        ]
      },
      {
        "id": "cat-fashion-men",
        "name": "Men's Sartorial",
        "slug": "mens-sartorial",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80",
        "bannerImage": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=80",
        "description": "Handcrafted suiting, structured outerwear, and refined casualwear.",
        "allowedUnits": [
          "piece",
          "set"
        ],
        "attributes": [
          {
            "key": "size",
            "label": "Size",
            "type": "select",
            "options": [
              "38R",
              "40R",
              "42R",
              "44R",
              "S",
              "M",
              "L",
              "XL"
            ],
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "color",
            "label": "Color",
            "type": "color",
            "options": [
              "Charcoal Navy",
              "Slate Grey",
              "Espresso Brown",
              "Pure Black",
              "Oatmeal Tweed"
            ],
            "colorCodes": {
              "Charcoal Navy": "#1c2833",
              "Slate Grey": "#566573",
              "Espresso Brown": "#4a2c2a",
              "Pure Black": "#0a0a0a",
              "Oatmeal Tweed": "#d5c4a1"
            },
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "material",
            "label": "Material",
            "type": "select",
            "options": [
              "Super 130s Merino Wool",
              "Egyptian Cotton",
              "Nubuck Leather",
              "Brushed Flannel"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-fashion-accessories",
        "name": "Leather Goods & Accessories",
        "slug": "accessories",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
        "description": "Artisanal bags, swiss horology timepieces, and hand-finished eyewear.",
        "allowedUnits": [
          "piece"
        ],
        "attributes": [
          {
            "key": "color",
            "label": "Leather Finish",
            "type": "color",
            "options": [
              "Cognac Tan",
              "Onyx Black",
              "Olive Suede"
            ],
            "colorCodes": {
              "Cognac Tan": "#9a3324",
              "Onyx Black": "#1a1a1a",
              "Olive Suede": "#556b2f"
            },
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "gender",
            "label": "Gender",
            "type": "select",
            "options": [
              "Unisex",
              "Women",
              "Men"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-fashion-footwear",
        "name": "Footwear & Boots",
        "slug": "footwear",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
        "description": "Goodyear welted shoes, minimal sneakers, and handcrafted leather boots.",
        "allowedUnits": [
          "pair"
        ],
        "attributes": [
          {
            "key": "size",
            "label": "Shoe Size (US)",
            "type": "select",
            "options": [
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ],
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "color",
            "label": "Color",
            "type": "color",
            "options": [
              "Vintage Tan",
              "Matte Black",
              "Chalk White"
            ],
            "colorCodes": {
              "Vintage Tan": "#b87333",
              "Matte Black": "#1c1c1c",
              "Chalk White": "#f0f0f0"
            },
            "filterable": true,
            "displayInSpec": true
          }
        ]
      }
    ],
    "products": [
      {
        "id": "fash-001",
        "title": "Monaco Double-Breasted Cashmere Overcoat",
        "slug": "monaco-cashmere-overcoat",
        "sku": "AURA-COAT-01",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 680,
        "compareAtPrice": 850,
        "costPrice": 280,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 38,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 29
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Editor’s Pick",
        "images": [
          {
            "id": "img-1-1",
            "url": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1000&auto=format&fit=crop&q=80",
            "alt": "Monaco Double-Breasted Cashmere Overcoat view 1",
            "isPrimary": true
          },
          {
            "id": "img-1-2",
            "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Monaco Double-Breasted Cashmere Overcoat view 2",
            "isPrimary": false
          },
          {
            "id": "img-1-3",
            "url": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&auto=format&fit=crop&q=80",
            "alt": "Monaco Double-Breasted Cashmere Overcoat view 3",
            "isPrimary": false
          }
        ],
        "shortDescription": "Meticulously tailored from 100% Grade-A Mongolian cashmere with horn button fastenings and a relaxed silhouette.",
        "fullDescription": "An enduring investment piece designed in Paris and handcrafted in Florence. Merges architectural lapels with the cloud-like warmth of pure double-faced cashmere.",
        "specifications": {
          "Outer Shell": "100% Grade-A Mongolian Cashmere (520 GSM)",
          "Lining": "100% Cupro (Sleeve lining only)",
          "Closure": "Natural Buffalo Horn Double-Breasted Buttons",
          "Origin": "Handcrafted in Tuscany, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Camel Gold",
          "material": "100% Cashmere",
          "fit": "Relaxed Oversized",
          "season": "Autumn/Winter"
        },
        "variants": [
          {
            "id": "var-1-S-1",
            "sku": "AURA-COAT-01-S-CAM",
            "title": "S / Camel Gold",
            "price": 680,
            "compareAtPrice": 850,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-1-S-2",
            "sku": "AURA-COAT-01-S-MID",
            "title": "S / Midnight Black",
            "price": 680,
            "compareAtPrice": 850,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-1-M-1",
            "sku": "AURA-COAT-01-M-CAM",
            "title": "M / Camel Gold",
            "price": 680,
            "compareAtPrice": 850,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-1-M-2",
            "sku": "AURA-COAT-01-M-MID",
            "title": "M / Midnight Black",
            "price": 680,
            "compareAtPrice": 850,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-1-L-1",
            "sku": "AURA-COAT-01-L-CAM",
            "title": "L / Camel Gold",
            "price": 680,
            "compareAtPrice": 850,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-1-L-2",
            "sku": "AURA-COAT-01-L-MID",
            "title": "L / Midnight Black",
            "price": 680,
            "compareAtPrice": 850,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          }
        ],
        "tags": [
          "outerwear",
          "cashmere",
          "luxury",
          "winter",
          "sustainable"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-11-10T17:39:37.976Z"
      },
      {
        "id": "fash-002",
        "title": "Silk High-Neck Long-Sleeve Maxi Dress",
        "slug": "silk-high-neck-maxi-dress",
        "sku": "AURA-DRS-04",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 340,
        "compareAtPrice": 420,
        "costPrice": 120,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 45,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 8,
          "5": 34
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Trending",
        "images": [
          {
            "id": "img-2-1",
            "url": "https://images.unsplash.com/photo-1544441893-675973e31985?w=1000&auto=format&fit=crop&q=80",
            "alt": "Silk High-Neck Long-Sleeve Maxi Dress view 1",
            "isPrimary": true
          },
          {
            "id": "img-2-2",
            "url": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1000&auto=format&fit=crop&q=80",
            "alt": "Silk High-Neck Long-Sleeve Maxi Dress view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Liquid 22mm Mulberry silk crafted with an elegant modest high neckline, gathered cuffs, and a graceful floor-sweeping drape.",
        "fullDescription": "Constructed from heavy 22-momme Mulberry silk charmeuse, this long-sleeve maxi dress offers timeless modesty and fluid elegance for private salons and evening events.",
        "specifications": {
          "Material": "100% Grade 6A Mulberry Silk (22 Momme)",
          "Care": "Gentle Hand Wash or Dry Clean",
          "Origin": "Lyon, France",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "S",
          "color": "Ivory Silk",
          "material": "Mulberry Silk",
          "fit": "Tailored Slim",
          "season": "All-Season"
        },
        "variants": [
          {
            "id": "var-2-XS-1",
            "sku": "AURA-DRS-04-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-2-XS-2",
            "sku": "AURA-DRS-04-XS-MID",
            "title": "XS / Midnight Black",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-2-XS-3",
            "sku": "AURA-DRS-04-XS-BUR",
            "title": "XS / Burgundy Velvet",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Burgundy Velvet"
            }
          },
          {
            "id": "var-2-S-1",
            "sku": "AURA-DRS-04-S-IVO",
            "title": "S / Ivory Silk",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-2-S-2",
            "sku": "AURA-DRS-04-S-MID",
            "title": "S / Midnight Black",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-2-S-3",
            "sku": "AURA-DRS-04-S-BUR",
            "title": "S / Burgundy Velvet",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Burgundy Velvet"
            }
          },
          {
            "id": "var-2-M-1",
            "sku": "AURA-DRS-04-M-IVO",
            "title": "M / Ivory Silk",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-2-M-2",
            "sku": "AURA-DRS-04-M-MID",
            "title": "M / Midnight Black",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-2-M-3",
            "sku": "AURA-DRS-04-M-BUR",
            "title": "M / Burgundy Velvet",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Burgundy Velvet"
            }
          },
          {
            "id": "var-2-L-1",
            "sku": "AURA-DRS-04-L-IVO",
            "title": "L / Ivory Silk",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-2-L-2",
            "sku": "AURA-DRS-04-L-MID",
            "title": "L / Midnight Black",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-2-L-3",
            "sku": "AURA-DRS-04-L-BUR",
            "title": "L / Burgundy Velvet",
            "price": 340,
            "compareAtPrice": 420,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Burgundy Velvet"
            }
          }
        ],
        "tags": [
          "modest",
          "eveningwear",
          "silk",
          "dress",
          "designer",
          "minimalist"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-11-08T17:39:37.976Z"
      },
      {
        "id": "fash-003",
        "title": "The Complete Parisian Capsule Wardrobe Set",
        "slug": "parisian-capsule-wardrobe-bundle",
        "sku": "AURA-BUN-01",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 890,
        "compareAtPrice": 1120,
        "costPrice": 380,
        "currency": "USD",
        "type": "bundle",
        "unitOfMeasure": "set",
        "stockQuantity": 8,
        "lowStockThreshold": 4,
        "rating": 5,
        "reviewCount": 19,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 14
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Bundle Deal • 20% Off",
        "images": [
          {
            "id": "img-3-1",
            "url": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop&q=80",
            "alt": "The Complete Parisian Capsule Wardrobe Set view 1",
            "isPrimary": true
          },
          {
            "id": "img-3-2",
            "url": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&auto=format&fit=crop&q=80",
            "alt": "The Complete Parisian Capsule Wardrobe Set view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Three iconic wardrobe foundations: The Monaco Cashmere Overcoat, Silk Slip Dress, and Milanese Pleated Trousers.",
        "fullDescription": "A complete curated capsule wardrobe curated by our Paris design studio. Designed to create up to 12 distinct ensembles with zero styling friction.",
        "specifications": {
          "Bundle Includes": "1x Monaco Coat, 1x Silk Slip Dress, 1x Pleated Trouser",
          "Packaging": "Delivered in luxury cedarwood preservation box",
          "Garment Origin": "Italy & France",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Camel Gold",
          "material": "100% Cashmere",
          "season": "All-Season"
        },
        "tags": [
          "bundle",
          "capsule",
          "wardrobe",
          "curated",
          "luxury"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-11-06T17:39:37.976Z"
      },
      {
        "id": "fash-004",
        "title": "Florence Handcrafted Tuscan Leather Weekender",
        "slug": "florence-tuscan-leather-weekender",
        "sku": "AURA-BAG-09",
        "categoryId": "cat-fashion-accessories",
        "brand": "Bottega Cuoio",
        "price": 495,
        "compareAtPrice": 620,
        "costPrice": 190,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 92,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 5,
          "4": 17,
          "5": 69
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Artisan Handmade",
        "images": [
          {
            "id": "img-4-1",
            "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&auto=format&fit=crop&q=80",
            "alt": "Florence Handcrafted Tuscan Leather Weekender view 1",
            "isPrimary": true
          },
          {
            "id": "img-4-2",
            "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1000&auto=format&fit=crop&q=80",
            "alt": "Florence Handcrafted Tuscan Leather Weekender view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Full-grain vegetable-tanned Vacchetta leather with solid antiqued brass hardware and waterproof twill lining.",
        "fullDescription": "Hand-burnished along the Arno River using artisanal vegetable tanning techniques that age gracefully into a rich caramel patina.",
        "specifications": {
          "Leather": "Full-Grain Italian Vacchetta Bovine Leather (2.2 mm)",
          "Hardware": "Solid Sand-Cast Brass with Antique Finish",
          "Dimensions": "52 cm x 30 cm x 26 cm (40L Capacity)",
          "Origin": "Florence, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Cognac Tan",
          "gender": "Unisex"
        },
        "variants": [
          {
            "id": "var-4-One Size-1",
            "sku": "AURA-BAG-09-One Size-COG",
            "title": "One Size / Cognac Tan",
            "price": 495,
            "compareAtPrice": 620,
            "stockQuantity": 6,
            "attributes": {
              "size": "One Size",
              "color": "Cognac Tan"
            }
          },
          {
            "id": "var-4-One Size-2",
            "sku": "AURA-BAG-09-One Size-ONY",
            "title": "One Size / Onyx Black",
            "price": 495,
            "compareAtPrice": 620,
            "stockQuantity": 6,
            "attributes": {
              "size": "One Size",
              "color": "Onyx Black"
            }
          },
          {
            "id": "var-4-One Size-3",
            "sku": "AURA-BAG-09-One Size-OLI",
            "title": "One Size / Olive Suede",
            "price": 495,
            "compareAtPrice": 620,
            "stockQuantity": 6,
            "attributes": {
              "size": "One Size",
              "color": "Olive Suede"
            }
          }
        ],
        "tags": [
          "leather",
          "bag",
          "travel",
          "weekender",
          "handcrafted"
        ],
        "sellerId": "vendor-cuoio-firenze",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-11-04T17:39:37.977Z"
      },
      {
        "id": "fash-005",
        "title": "Sartorial Super 150s Merino Wool Suit",
        "slug": "sartorial-merino-wool-suit",
        "sku": "AURA-SUIT-02",
        "categoryId": "cat-fashion-men",
        "brand": "Sartoria Milano",
        "price": 790,
        "compareAtPrice": 980,
        "costPrice": 320,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "set",
        "stockQuantity": 11,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 28,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 21
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Hand-Stitched",
        "images": [
          {
            "id": "img-5-1",
            "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sartorial Super 150s Merino Wool Suit view 1",
            "isPrimary": true
          },
          {
            "id": "img-5-2",
            "url": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sartorial Super 150s Merino Wool Suit view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Full-canvas jacket construction paired with side-tab trousers crafted from Lanificio Cerruti Super 150s yarn.",
        "fullDescription": "A modern Italian masterwork with natural roped shoulders, high armholes, and breathable horsehair canvassing that molds to the wearer over time.",
        "specifications": {
          "Cloth": "Lanificio Cerruti Super 150s Tasmanian Wool (240 GSM)",
          "Construction": "Floating Full-Canvas Chest Piece",
          "Buttons": "Genuine Horn with Surgeon Cuffs",
          "Origin": "Biella & Milan, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "40R",
          "color": "Charcoal Navy",
          "material": "Super 130s Merino Wool"
        },
        "variants": [
          {
            "id": "var-5-38R-1",
            "sku": "AURA-SUIT-02-38R-CHA",
            "title": "38R / Charcoal Navy",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-5-38R-2",
            "sku": "AURA-SUIT-02-38R-SLA",
            "title": "38R / Slate Grey",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-5-38R-3",
            "sku": "AURA-SUIT-02-38R-PUR",
            "title": "38R / Pure Black",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-5-40R-1",
            "sku": "AURA-SUIT-02-40R-CHA",
            "title": "40R / Charcoal Navy",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-5-40R-2",
            "sku": "AURA-SUIT-02-40R-SLA",
            "title": "40R / Slate Grey",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-5-40R-3",
            "sku": "AURA-SUIT-02-40R-PUR",
            "title": "40R / Pure Black",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-5-42R-1",
            "sku": "AURA-SUIT-02-42R-CHA",
            "title": "42R / Charcoal Navy",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-5-42R-2",
            "sku": "AURA-SUIT-02-42R-SLA",
            "title": "42R / Slate Grey",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-5-42R-3",
            "sku": "AURA-SUIT-02-42R-PUR",
            "title": "42R / Pure Black",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-5-44R-1",
            "sku": "AURA-SUIT-02-44R-CHA",
            "title": "44R / Charcoal Navy",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-5-44R-2",
            "sku": "AURA-SUIT-02-44R-SLA",
            "title": "44R / Slate Grey",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-5-44R-3",
            "sku": "AURA-SUIT-02-44R-PUR",
            "title": "44R / Pure Black",
            "price": 790,
            "compareAtPrice": 980,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Pure Black"
            }
          }
        ],
        "tags": [
          "suiting",
          "menswear",
          "merino",
          "formal",
          "tailoring"
        ],
        "sellerId": "vendor-sartoria-milano",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-11-02T17:39:37.977Z"
      },
      {
        "id": "fash-006",
        "title": "Verona Ribbed Fisherman Cashmere Sweater",
        "slug": "verona-ribbed-cashmere-sweater",
        "sku": "AURA-KNIT-08",
        "categoryId": "cat-fashion-women",
        "brand": "Verona Fine Knits",
        "price": 295,
        "compareAtPrice": 360,
        "costPrice": 124,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 62,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 11,
          "5": 47
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Best Seller",
        "images": [
          {
            "id": "img-6-1",
            "url": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1000&auto=format&fit=crop&q=80",
            "alt": "Verona Ribbed Fisherman Cashmere Sweater view 1",
            "isPrimary": true
          },
          {
            "id": "img-6-2",
            "url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1000&auto=format&fit=crop&q=80",
            "alt": "Verona Ribbed Fisherman Cashmere Sweater view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Plush 4-ply Mongolian cashmere woven into an authentic 5-gauge fisherman stitch with reinforced crew collar.",
        "fullDescription": "The ultimate cool-weather layer. Dense yet featherlight 4-ply yarn delivers exceptional warmth without bulk.",
        "specifications": {
          "Yarn": "4-Ply 100% Cashmere",
          "Gauge": "5 GG Heavy Knit",
          "Origin": "Verona, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Ivory Silk",
          "material": "100% Cashmere",
          "fit": "Relaxed Oversized"
        },
        "variants": [
          {
            "id": "var-6-XS-1",
            "sku": "AURA-KNIT-08-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-6-XS-2",
            "sku": "AURA-KNIT-08-XS-CAM",
            "title": "XS / Camel Gold",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-6-XS-3",
            "sku": "AURA-KNIT-08-XS-MID",
            "title": "XS / Midnight Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-6-S-1",
            "sku": "AURA-KNIT-08-S-IVO",
            "title": "S / Ivory Silk",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-6-S-2",
            "sku": "AURA-KNIT-08-S-CAM",
            "title": "S / Camel Gold",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-6-S-3",
            "sku": "AURA-KNIT-08-S-MID",
            "title": "S / Midnight Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-6-M-1",
            "sku": "AURA-KNIT-08-M-IVO",
            "title": "M / Ivory Silk",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-6-M-2",
            "sku": "AURA-KNIT-08-M-CAM",
            "title": "M / Camel Gold",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-6-M-3",
            "sku": "AURA-KNIT-08-M-MID",
            "title": "M / Midnight Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-6-L-1",
            "sku": "AURA-KNIT-08-L-IVO",
            "title": "L / Ivory Silk",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-6-L-2",
            "sku": "AURA-KNIT-08-L-CAM",
            "title": "L / Camel Gold",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-6-L-3",
            "sku": "AURA-KNIT-08-L-MID",
            "title": "L / Midnight Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          }
        ],
        "tags": [
          "knitwear",
          "cashmere",
          "sweater",
          "winter"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-31T17:39:37.977Z"
      },
      {
        "id": "fash-007",
        "title": "Goodyear-Welted Chelsea Leather Boots",
        "slug": "goodyear-welted-chelsea-boots",
        "sku": "AURA-SHOE-01",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 360,
        "compareAtPrice": 450,
        "costPrice": 151,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 19,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 54,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 10,
          "5": 41
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Goodyear Welt",
        "images": [
          {
            "id": "img-7-1",
            "url": "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=1000&auto=format&fit=crop&q=80",
            "alt": "Goodyear-Welted Chelsea Leather Boots view 1",
            "isPrimary": true
          },
          {
            "id": "img-7-2",
            "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&auto=format&fit=crop&q=80",
            "alt": "Goodyear-Welted Chelsea Leather Boots view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "French box calf leather Chelsea boot with elasticated side gussets and resoleable Dainite rubber studded sole.",
        "fullDescription": "Constructed on our signature almond-toe last with cork bed filler that molds precisely to the contours of your foot over time.",
        "specifications": {
          "Upper": "French Box Calf Leather",
          "Sole": "British Dainite Studded Rubber",
          "Construction": "360° Goodyear Welt",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "9",
          "color": "Matte Black"
        },
        "variants": [
          {
            "id": "var-7-7-1",
            "sku": "AURA-SHOE-01-7-MAT",
            "title": "7 / Matte Black",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "7",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-7-7-2",
            "sku": "AURA-SHOE-01-7-VIN",
            "title": "7 / Vintage Tan",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "7",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-7-8-1",
            "sku": "AURA-SHOE-01-8-MAT",
            "title": "8 / Matte Black",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-7-8-2",
            "sku": "AURA-SHOE-01-8-VIN",
            "title": "8 / Vintage Tan",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-7-9-1",
            "sku": "AURA-SHOE-01-9-MAT",
            "title": "9 / Matte Black",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-7-9-2",
            "sku": "AURA-SHOE-01-9-VIN",
            "title": "9 / Vintage Tan",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-7-10-1",
            "sku": "AURA-SHOE-01-10-MAT",
            "title": "10 / Matte Black",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-7-10-2",
            "sku": "AURA-SHOE-01-10-VIN",
            "title": "10 / Vintage Tan",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-7-11-1",
            "sku": "AURA-SHOE-01-11-MAT",
            "title": "11 / Matte Black",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-7-11-2",
            "sku": "AURA-SHOE-01-11-VIN",
            "title": "11 / Vintage Tan",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-7-12-1",
            "sku": "AURA-SHOE-01-12-MAT",
            "title": "12 / Matte Black",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-7-12-2",
            "sku": "AURA-SHOE-01-12-VIN",
            "title": "12 / Vintage Tan",
            "price": 360,
            "compareAtPrice": 450,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Vintage Tan"
            }
          }
        ],
        "tags": [
          "footwear",
          "chelsea-boots",
          "leather",
          "shoes"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-29T17:39:37.977Z"
      },
      {
        "id": "fash-008",
        "title": "Minimalist Calfskin Low-Top Court Sneakers",
        "slug": "minimalist-calfskin-court-sneakers",
        "sku": "AURA-SHOE-04",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 240,
        "compareAtPrice": 290,
        "costPrice": 101,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 30,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 78,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 4,
          "4": 14,
          "5": 59
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "New Season",
        "images": [
          {
            "id": "img-8-1",
            "url": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1000&auto=format&fit=crop&q=80",
            "alt": "Minimalist Calfskin Low-Top Court Sneakers view 1",
            "isPrimary": true
          },
          {
            "id": "img-8-2",
            "url": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1000&auto=format&fit=crop&q=80",
            "alt": "Minimalist Calfskin Low-Top Court Sneakers view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Supple Italian nappa leather upper with Margom cupsole and padded calfskin lining for walking comfort.",
        "fullDescription": "Stripped of branding, these understated sneakers represent the pinnacle of quiet luxury footwear.",
        "specifications": {
          "Upper": "Full-Grain Italian Nappa Leather",
          "Outsole": "Original Italian Margom Rubber",
          "Origin": "Civitanova Marche, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "10",
          "color": "Chalk White"
        },
        "variants": [
          {
            "id": "var-8-8-1",
            "sku": "AURA-SHOE-04-8-CHA",
            "title": "8 / Chalk White",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "8",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-8-8-2",
            "sku": "AURA-SHOE-04-8-MAT",
            "title": "8 / Matte Black",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-8-9-1",
            "sku": "AURA-SHOE-04-9-CHA",
            "title": "9 / Chalk White",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "9",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-8-9-2",
            "sku": "AURA-SHOE-04-9-MAT",
            "title": "9 / Matte Black",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-8-10-1",
            "sku": "AURA-SHOE-04-10-CHA",
            "title": "10 / Chalk White",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "10",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-8-10-2",
            "sku": "AURA-SHOE-04-10-MAT",
            "title": "10 / Matte Black",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-8-11-1",
            "sku": "AURA-SHOE-04-11-CHA",
            "title": "11 / Chalk White",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "11",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-8-11-2",
            "sku": "AURA-SHOE-04-11-MAT",
            "title": "11 / Matte Black",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "11",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-8-12-1",
            "sku": "AURA-SHOE-04-12-CHA",
            "title": "12 / Chalk White",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "12",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-8-12-2",
            "sku": "AURA-SHOE-04-12-MAT",
            "title": "12 / Matte Black",
            "price": 240,
            "compareAtPrice": 290,
            "stockQuantity": 3,
            "attributes": {
              "size": "12",
              "color": "Matte Black"
            }
          }
        ],
        "tags": [
          "sneakers",
          "minimalist",
          "footwear",
          "casual"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-27T17:39:37.977Z"
      },
      {
        "id": "fash-009",
        "title": "Solstice Heritage Automatic Swiss Watch",
        "slug": "solstice-heritage-automatic-watch",
        "sku": "AURA-WATCH-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "Solstice Horology",
        "price": 1250,
        "compareAtPrice": 1450,
        "costPrice": 525,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 7,
        "lowStockThreshold": 4,
        "rating": 5,
        "reviewCount": 16,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 12
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Swiss Made",
        "images": [
          {
            "id": "img-9-1",
            "url": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1000&auto=format&fit=crop&q=80",
            "alt": "Solstice Heritage Automatic Swiss Watch view 1",
            "isPrimary": true
          },
          {
            "id": "img-9-2",
            "url": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&auto=format&fit=crop&q=80",
            "alt": "Solstice Heritage Automatic Swiss Watch view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "39mm surgical stainless steel case with Sellita SW200-1 automatic calibre and sapphire exhibition back.",
        "fullDescription": "Hand-assembled in Geneva with a 38-hour power reserve, sunburst dial, and hand-stitched alligator embossed strap.",
        "specifications": {
          "Movement": "Sellita SW200-1 Swiss Automatic (28,800 vph)",
          "Glass": "Double-Domed AR Sapphire",
          "Water Resistance": "50M / 5 ATM",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Onyx Black",
          "gender": "Unisex"
        },
        "variants": [
          {
            "id": "var-9-39mm-1",
            "sku": "AURA-WATCH-01-39mm-ONY",
            "title": "39mm / Onyx Black",
            "price": 1250,
            "compareAtPrice": 1450,
            "stockQuantity": 3,
            "attributes": {
              "size": "39mm",
              "color": "Onyx Black"
            }
          },
          {
            "id": "var-9-39mm-2",
            "sku": "AURA-WATCH-01-39mm-COG",
            "title": "39mm / Cognac Tan",
            "price": 1250,
            "compareAtPrice": 1450,
            "stockQuantity": 3,
            "attributes": {
              "size": "39mm",
              "color": "Cognac Tan"
            }
          }
        ],
        "tags": [
          "watch",
          "horology",
          "swiss-made",
          "luxury",
          "accessories"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-25T17:39:37.977Z"
      },
      {
        "id": "fash-010",
        "title": "Como Silk Twill Floral Printed Scarf",
        "slug": "como-silk-twill-printed-scarf",
        "sku": "AURA-SCARF-02",
        "categoryId": "cat-fashion-accessories",
        "brand": "L’Étoile Paris",
        "price": 185,
        "compareAtPrice": 220,
        "costPrice": 78,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 34,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 41,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 31
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Hand-Rolled Hem",
        "images": [
          {
            "id": "img-10-1",
            "url": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1000&auto=format&fit=crop&q=80",
            "alt": "Como Silk Twill Floral Printed Scarf view 1",
            "isPrimary": true
          },
          {
            "id": "img-10-2",
            "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&auto=format&fit=crop&q=80",
            "alt": "Como Silk Twill Floral Printed Scarf view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "90x90cm 100% silk twill with hand-rolled French edges and screen-printed botanical archive motifs.",
        "fullDescription": "Screen-printed using traditional 14-screen separation in Lake Como, creating brilliant color depth and lustrous sheen.",
        "specifications": {
          "Material": "100% Mulberry Silk Twill (16 Momme)",
          "Dimensions": "90 x 90 cm",
          "Edges": "Hand-Rolled & Stitched",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Emerald Forest",
          "gender": "Women"
        },
        "tags": [
          "silk",
          "scarf",
          "accessories",
          "luxury",
          "print"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-23T17:39:37.978Z"
      },
      {
        "id": "fash-011",
        "title": "Milanese Tailored High-Rise Pleated Trousers",
        "slug": "milanese-tailored-pleated-trousers",
        "sku": "AURA-TRS-06",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 260,
        "compareAtPrice": 320,
        "costPrice": 109,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 29
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "New Season",
        "images": [
          {
            "id": "img-11-1",
            "url": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&auto=format&fit=crop&q=80",
            "alt": "Milanese Tailored High-Rise Pleated Trousers view 1",
            "isPrimary": true
          },
          {
            "id": "img-11-2",
            "url": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&auto=format&fit=crop&q=80",
            "alt": "Milanese Tailored High-Rise Pleated Trousers view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Double front pleats with high-rise waistband, discreet side pockets, and a fluid wide-leg silhouette in Italian wool blend.",
        "fullDescription": "Impeccably tailored trousers engineered to elongate the silhouette while providing all-day comfort and drape.",
        "specifications": {
          "Composition": "96% Virgin Wool, 4% Elastane",
          "Rise": "High Rise (32 cm)",
          "Origin": "Milan, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Camel Gold",
          "material": "Italian Wool",
          "fit": "Structured Boxy"
        },
        "variants": [
          {
            "id": "var-11-XS-1",
            "sku": "AURA-TRS-06-XS-CAM",
            "title": "XS / Camel Gold",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-11-XS-2",
            "sku": "AURA-TRS-06-XS-MID",
            "title": "XS / Midnight Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-11-XS-3",
            "sku": "AURA-TRS-06-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-11-S-1",
            "sku": "AURA-TRS-06-S-CAM",
            "title": "S / Camel Gold",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-11-S-2",
            "sku": "AURA-TRS-06-S-MID",
            "title": "S / Midnight Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-11-S-3",
            "sku": "AURA-TRS-06-S-IVO",
            "title": "S / Ivory Silk",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-11-M-1",
            "sku": "AURA-TRS-06-M-CAM",
            "title": "M / Camel Gold",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-11-M-2",
            "sku": "AURA-TRS-06-M-MID",
            "title": "M / Midnight Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-11-M-3",
            "sku": "AURA-TRS-06-M-IVO",
            "title": "M / Ivory Silk",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-11-L-1",
            "sku": "AURA-TRS-06-L-CAM",
            "title": "L / Camel Gold",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-11-L-2",
            "sku": "AURA-TRS-06-L-MID",
            "title": "L / Midnight Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-11-L-3",
            "sku": "AURA-TRS-06-L-IVO",
            "title": "L / Ivory Silk",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          }
        ],
        "tags": [
          "trousers",
          "pants",
          "tailored",
          "workwear",
          "wool"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-21T17:39:37.978Z"
      },
      {
        "id": "fash-012",
        "title": "Belgian Loafers in Velveteen Suede",
        "slug": "belgian-loafers-velveteen-suede",
        "sku": "AURA-SHOE-09",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 310,
        "compareAtPrice": 380,
        "costPrice": 130,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 16,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 32,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 6,
          "5": 24
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Hand-Sewn",
        "images": [
          {
            "id": "img-12-1",
            "url": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=1000&auto=format&fit=crop&q=80",
            "alt": "Belgian Loafers in Velveteen Suede view 1",
            "isPrimary": true
          },
          {
            "id": "img-12-2",
            "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&auto=format&fit=crop&q=80",
            "alt": "Belgian Loafers in Velveteen Suede view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Unlined baby calf suede with bow detail, unconstructed heel cup, and ultra-flexible leather sole.",
        "fullDescription": "Hand-sewn on the last for an glove-like fit that requires zero break-in period.",
        "specifications": {
          "Upper": "Baby Calf Suede",
          "Sole": "Flexible Single Leather Sole",
          "Origin": "Antwerp, Belgium",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "9",
          "color": "Vintage Tan"
        },
        "variants": [
          {
            "id": "var-12-8-1",
            "sku": "AURA-SHOE-09-8-VIN",
            "title": "8 / Vintage Tan",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-12-8-2",
            "sku": "AURA-SHOE-09-8-MAT",
            "title": "8 / Matte Black",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-12-9-1",
            "sku": "AURA-SHOE-09-9-VIN",
            "title": "9 / Vintage Tan",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-12-9-2",
            "sku": "AURA-SHOE-09-9-MAT",
            "title": "9 / Matte Black",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-12-10-1",
            "sku": "AURA-SHOE-09-10-VIN",
            "title": "10 / Vintage Tan",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-12-10-2",
            "sku": "AURA-SHOE-09-10-MAT",
            "title": "10 / Matte Black",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-12-11-1",
            "sku": "AURA-SHOE-09-11-VIN",
            "title": "11 / Vintage Tan",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-12-11-2",
            "sku": "AURA-SHOE-09-11-MAT",
            "title": "11 / Matte Black",
            "price": 310,
            "compareAtPrice": 380,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Matte Black"
            }
          }
        ],
        "tags": [
          "loafers",
          "suede",
          "footwear",
          "menswear",
          "casual"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-19T17:39:37.978Z"
      },
      {
        "id": "fash-013",
        "title": "Oxford Cotton Button-Down Dress Shirt",
        "slug": "oxford-cotton-button-down-shirt",
        "sku": "AURA-SHT-01",
        "categoryId": "cat-fashion-men",
        "brand": "AURA",
        "price": 165,
        "compareAtPrice": 195,
        "costPrice": 69,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 42,
        "lowStockThreshold": 4,
        "rating": 4.7,
        "reviewCount": 88,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 4,
          "4": 16,
          "5": 66
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Essential",
        "images": [
          {
            "id": "img-13-1",
            "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Oxford Cotton Button-Down Dress Shirt view 1",
            "isPrimary": true
          },
          {
            "id": "img-13-2",
            "url": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Oxford Cotton Button-Down Dress Shirt view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Heavyweight two-ply 100% Giza cotton Oxford cloth with authentic mother-of-pearl buttons and soft roll collar.",
        "fullDescription": "The definitive classic shirt crafted with single-needle 21-stitch per inch construction.",
        "specifications": {
          "Cloth": "100% Long-Staple Egyptian Giza Cotton",
          "Buttons": "Australian Mother-of-Pearl",
          "Collar": "3.25\" Roll Collar",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Slate Grey",
          "material": "Egyptian Cotton"
        },
        "variants": [
          {
            "id": "var-13-S-1",
            "sku": "AURA-SHT-01-S-SLA",
            "title": "S / Slate Grey",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "S",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-13-S-2",
            "sku": "AURA-SHT-01-S-PUR",
            "title": "S / Pure Black",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "S",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-13-M-1",
            "sku": "AURA-SHT-01-M-SLA",
            "title": "M / Slate Grey",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "M",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-13-M-2",
            "sku": "AURA-SHT-01-M-PUR",
            "title": "M / Pure Black",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "M",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-13-L-1",
            "sku": "AURA-SHT-01-L-SLA",
            "title": "L / Slate Grey",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "L",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-13-L-2",
            "sku": "AURA-SHT-01-L-PUR",
            "title": "L / Pure Black",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "L",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-13-XL-1",
            "sku": "AURA-SHT-01-XL-SLA",
            "title": "XL / Slate Grey",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "XL",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-13-XL-2",
            "sku": "AURA-SHT-01-XL-PUR",
            "title": "XL / Pure Black",
            "price": 165,
            "compareAtPrice": 195,
            "stockQuantity": 5,
            "attributes": {
              "size": "XL",
              "color": "Pure Black"
            }
          }
        ],
        "tags": [
          "shirt",
          "oxford",
          "menswear",
          "classic",
          "cotton"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-17T17:39:37.978Z"
      },
      {
        "id": "fash-014",
        "title": "Trench Coat in Water-Repellent Gabardine",
        "slug": "trench-coat-water-repellent-gabardine",
        "sku": "AURA-COAT-05",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 540,
        "compareAtPrice": 650,
        "costPrice": 227,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 15,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 47,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 2,
          "4": 8,
          "5": 35
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Weatherproof",
        "images": [
          {
            "id": "img-14-1",
            "url": "https://images.unsplash.com/photo-1544441893-675973e31985?w=1000&auto=format&fit=crop&q=80",
            "alt": "Trench Coat in Water-Repellent Gabardine view 1",
            "isPrimary": true
          },
          {
            "id": "img-14-2",
            "url": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1000&auto=format&fit=crop&q=80",
            "alt": "Trench Coat in Water-Repellent Gabardine view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Triple-woven cotton gabardine with storm flap, D-ring horn buckle belt, and checked interior lining.",
        "fullDescription": "A modern translation of archival heritage outerwear built to withstand city storms in refined elegance.",
        "specifications": {
          "Shell": "100% Compact Woven Cotton Gabardine (DWR Treated)",
          "Buckles": "Genuine Calf Leather Wrapped",
          "Length": "118 cm",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Camel Gold",
          "material": "Organic Linen",
          "season": "Autumn/Winter"
        },
        "variants": [
          {
            "id": "var-14-XS-1",
            "sku": "AURA-COAT-05-XS-CAM",
            "title": "XS / Camel Gold",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-14-XS-2",
            "sku": "AURA-COAT-05-XS-MID",
            "title": "XS / Midnight Black",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-14-S-1",
            "sku": "AURA-COAT-05-S-CAM",
            "title": "S / Camel Gold",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-14-S-2",
            "sku": "AURA-COAT-05-S-MID",
            "title": "S / Midnight Black",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-14-M-1",
            "sku": "AURA-COAT-05-M-CAM",
            "title": "M / Camel Gold",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-14-M-2",
            "sku": "AURA-COAT-05-M-MID",
            "title": "M / Midnight Black",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-14-L-1",
            "sku": "AURA-COAT-05-L-CAM",
            "title": "L / Camel Gold",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-14-L-2",
            "sku": "AURA-COAT-05-L-MID",
            "title": "L / Midnight Black",
            "price": 540,
            "compareAtPrice": 650,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          }
        ],
        "tags": [
          "trench",
          "outerwear",
          "waterproof",
          "women",
          "coat"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-15T17:39:37.978Z"
      },
      {
        "id": "fash-015",
        "title": "Unstructured Linen-Wool Summer Blazer",
        "slug": "unstructured-linen-wool-blazer",
        "sku": "AURA-BLZ-03",
        "categoryId": "cat-fashion-men",
        "brand": "Sartoria Milano",
        "price": 490,
        "compareAtPrice": 590,
        "costPrice": 206,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 17,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 29,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 22
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Seasonal",
        "images": [
          {
            "id": "img-15-1",
            "url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Unstructured Linen-Wool Summer Blazer view 1",
            "isPrimary": true
          },
          {
            "id": "img-15-2",
            "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&auto=format&fit=crop&q=80",
            "alt": "Unstructured Linen-Wool Summer Blazer view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Unlined Italian 55% linen 45% virgin wool blend with patch pockets and double side vents for breezy sophistication.",
        "fullDescription": "Lightweight Neapolitan tailoring with soft shirt-shoulder construction (spalla camicia).",
        "specifications": {
          "Fabric": "55% Irish Linen, 45% Italian Virgin Wool (210 GSM)",
          "Lining": "Unlined Butterfly Construction",
          "Buttons": "Corozo Nut",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "40R",
          "color": "Oatmeal Tweed",
          "material": "Super 130s Merino Wool"
        },
        "variants": [
          {
            "id": "var-15-38R-1",
            "sku": "AURA-BLZ-03-38R-OAT",
            "title": "38R / Oatmeal Tweed",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-15-38R-2",
            "sku": "AURA-BLZ-03-38R-CHA",
            "title": "38R / Charcoal Navy",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-15-40R-1",
            "sku": "AURA-BLZ-03-40R-OAT",
            "title": "40R / Oatmeal Tweed",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-15-40R-2",
            "sku": "AURA-BLZ-03-40R-CHA",
            "title": "40R / Charcoal Navy",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-15-42R-1",
            "sku": "AURA-BLZ-03-42R-OAT",
            "title": "42R / Oatmeal Tweed",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-15-42R-2",
            "sku": "AURA-BLZ-03-42R-CHA",
            "title": "42R / Charcoal Navy",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-15-44R-1",
            "sku": "AURA-BLZ-03-44R-OAT",
            "title": "44R / Oatmeal Tweed",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-15-44R-2",
            "sku": "AURA-BLZ-03-44R-CHA",
            "title": "44R / Charcoal Navy",
            "price": 490,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Charcoal Navy"
            }
          }
        ],
        "tags": [
          "blazer",
          "linen",
          "menswear",
          "summer",
          "tailoring"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-13T17:39:37.978Z"
      },
      {
        "id": "fash-016",
        "title": "Sculpted Brass & Onyx Architectural Cuff",
        "slug": "sculpted-brass-onyx-cuff",
        "sku": "AURA-JEW-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "AURA",
        "price": 190,
        "compareAtPrice": 240,
        "costPrice": 80,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 26,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 23,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 17
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Limited Edition",
        "images": [
          {
            "id": "img-16-1",
            "url": "https://images.unsplash.com/photo-1611591475878-a7346123497d?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sculpted Brass & Onyx Architectural Cuff view 1",
            "isPrimary": true
          },
          {
            "id": "img-16-2",
            "url": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sculpted Brass & Onyx Architectural Cuff view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Hand-forged raw brushed brass inset with natural black onyx cabochon stone. Hand-polished satin finish.",
        "fullDescription": "Sculptural jewelry inspired by brutalist architecture and clean modernist curves.",
        "specifications": {
          "Metal": "Solid Brass with Micron Gold Dip",
          "Stone": "Natural Grade-A Black Onyx",
          "Weight": "42g",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Onyx Black",
          "gender": "Unisex"
        },
        "tags": [
          "jewelry",
          "cuff",
          "brass",
          "accessories",
          "luxury"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-11T17:39:37.978Z"
      },
      {
        "id": "fash-017",
        "title": "Artisanal Vegetable-Tanned Bifold Wallet",
        "slug": "vegetable-tanned-bifold-wallet",
        "sku": "AURA-WAL-02",
        "categoryId": "cat-fashion-accessories",
        "brand": "Bottega Cuoio",
        "price": 135,
        "compareAtPrice": 165,
        "costPrice": 57,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 45,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 67,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 3,
          "4": 12,
          "5": 50
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Bestseller",
        "images": [
          {
            "id": "img-17-1",
            "url": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1000&auto=format&fit=crop&q=80",
            "alt": "Artisanal Vegetable-Tanned Bifold Wallet view 1",
            "isPrimary": true
          },
          {
            "id": "img-17-2",
            "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&auto=format&fit=crop&q=80",
            "alt": "Artisanal Vegetable-Tanned Bifold Wallet view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Saddle-stitched by hand with 8 card slots, dual receipt pockets, and RFID blocking lining.",
        "fullDescription": "Pared back to essentials, this slim bifold slips into tailored trousers without creating bulk.",
        "specifications": {
          "Leather": "Tuscan Buttero Leather",
          "Thread": "Waxed Linen Fil Au Chinois",
          "Dimensions": "11 x 9 cm",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Cognac Tan",
          "gender": "Unisex"
        },
        "variants": [
          {
            "id": "var-17-One Size-1",
            "sku": "AURA-WAL-02-One Size-COG",
            "title": "One Size / Cognac Tan",
            "price": 135,
            "compareAtPrice": 165,
            "stockQuantity": 15,
            "attributes": {
              "size": "One Size",
              "color": "Cognac Tan"
            }
          },
          {
            "id": "var-17-One Size-2",
            "sku": "AURA-WAL-02-One Size-ONY",
            "title": "One Size / Onyx Black",
            "price": 135,
            "compareAtPrice": 165,
            "stockQuantity": 15,
            "attributes": {
              "size": "One Size",
              "color": "Onyx Black"
            }
          },
          {
            "id": "var-17-One Size-3",
            "sku": "AURA-WAL-02-One Size-OLI",
            "title": "One Size / Olive Suede",
            "price": 135,
            "compareAtPrice": 165,
            "stockQuantity": 15,
            "attributes": {
              "size": "One Size",
              "color": "Olive Suede"
            }
          }
        ],
        "tags": [
          "wallet",
          "leather",
          "accessories",
          "everyday"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-09T17:39:37.978Z"
      },
      {
        "id": "fash-018",
        "title": "Merino Wool Rollneck Knit Jumper",
        "slug": "merino-wool-rollneck-jumper",
        "sku": "AURA-KNIT-04",
        "categoryId": "cat-fashion-men",
        "brand": "Nordic Loom",
        "price": 220,
        "compareAtPrice": 270,
        "costPrice": 92,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 33,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 71,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 4,
          "4": 13,
          "5": 53
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Extra Fine",
        "images": [
          {
            "id": "img-18-1",
            "url": "https://images.unsplash.com/photo-1614975058789-41316d0e2e98?w=1000&auto=format&fit=crop&q=80",
            "alt": "Merino Wool Rollneck Knit Jumper view 1",
            "isPrimary": true
          },
          {
            "id": "img-18-2",
            "url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Merino Wool Rollneck Knit Jumper view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Seamless whole-garment 3D knit in 19.5 micron Australian extrafine merino wool.",
        "fullDescription": "Engineered without seams for frictionless movement and structured rollneck drape.",
        "specifications": {
          "Yarn": "100% Extrafine Merino Wool",
          "Knit Technique": "3D Shima Seiki WholeGarment",
          "Origin": "Oslo, Norway",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "L",
          "color": "Charcoal Navy",
          "material": "Super 130s Merino Wool"
        },
        "variants": [
          {
            "id": "var-18-S-1",
            "sku": "AURA-KNIT-04-S-CHA",
            "title": "S / Charcoal Navy",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-18-S-2",
            "sku": "AURA-KNIT-04-S-SLA",
            "title": "S / Slate Grey",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-18-S-3",
            "sku": "AURA-KNIT-04-S-ESP",
            "title": "S / Espresso Brown",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-18-M-1",
            "sku": "AURA-KNIT-04-M-CHA",
            "title": "M / Charcoal Navy",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-18-M-2",
            "sku": "AURA-KNIT-04-M-SLA",
            "title": "M / Slate Grey",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-18-M-3",
            "sku": "AURA-KNIT-04-M-ESP",
            "title": "M / Espresso Brown",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-18-L-1",
            "sku": "AURA-KNIT-04-L-CHA",
            "title": "L / Charcoal Navy",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-18-L-2",
            "sku": "AURA-KNIT-04-L-SLA",
            "title": "L / Slate Grey",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-18-L-3",
            "sku": "AURA-KNIT-04-L-ESP",
            "title": "L / Espresso Brown",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-18-XL-1",
            "sku": "AURA-KNIT-04-XL-CHA",
            "title": "XL / Charcoal Navy",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "XL",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-18-XL-2",
            "sku": "AURA-KNIT-04-XL-SLA",
            "title": "XL / Slate Grey",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "XL",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-18-XL-3",
            "sku": "AURA-KNIT-04-XL-ESP",
            "title": "XL / Espresso Brown",
            "price": 220,
            "compareAtPrice": 270,
            "stockQuantity": 2,
            "attributes": {
              "size": "XL",
              "color": "Espresso Brown"
            }
          }
        ],
        "tags": [
          "knitwear",
          "merino",
          "rollneck",
          "menswear",
          "winter"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-07T17:39:37.979Z"
      },
      {
        "id": "fash-019",
        "title": "Pleated Georgette Midi Skirt",
        "slug": "pleated-georgette-midi-skirt",
        "sku": "AURA-SKT-03",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 210,
        "compareAtPrice": 260,
        "costPrice": 88,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 24,
        "lowStockThreshold": 4,
        "rating": 4.7,
        "reviewCount": 36,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 6,
          "5": 27
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Popular",
        "images": [
          {
            "id": "img-19-1",
            "url": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pleated Georgette Midi Skirt view 1",
            "isPrimary": true
          },
          {
            "id": "img-19-2",
            "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pleated Georgette Midi Skirt view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Permanent accordion pleating in lightweight georgette with comfortable grosgrain elastic waist.",
        "fullDescription": "Creates an enchanting sense of movement with every stride. Fully lined in silky satin.",
        "specifications": {
          "Fabric": "Recycled Poly-Georgette with Silk Handfeel",
          "Length": "82 cm (Midi)",
          "Care": "Dry Clean",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Emerald Forest",
          "material": "Organic Linen"
        },
        "variants": [
          {
            "id": "var-19-XS-1",
            "sku": "AURA-SKT-03-XS-EME",
            "title": "XS / Emerald Forest",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-19-XS-2",
            "sku": "AURA-SKT-03-XS-MID",
            "title": "XS / Midnight Black",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-19-XS-3",
            "sku": "AURA-SKT-03-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-19-S-1",
            "sku": "AURA-SKT-03-S-EME",
            "title": "S / Emerald Forest",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-19-S-2",
            "sku": "AURA-SKT-03-S-MID",
            "title": "S / Midnight Black",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-19-S-3",
            "sku": "AURA-SKT-03-S-IVO",
            "title": "S / Ivory Silk",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-19-M-1",
            "sku": "AURA-SKT-03-M-EME",
            "title": "M / Emerald Forest",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-19-M-2",
            "sku": "AURA-SKT-03-M-MID",
            "title": "M / Midnight Black",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-19-M-3",
            "sku": "AURA-SKT-03-M-IVO",
            "title": "M / Ivory Silk",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-19-L-1",
            "sku": "AURA-SKT-03-L-EME",
            "title": "L / Emerald Forest",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-19-L-2",
            "sku": "AURA-SKT-03-L-MID",
            "title": "L / Midnight Black",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-19-L-3",
            "sku": "AURA-SKT-03-L-IVO",
            "title": "L / Ivory Silk",
            "price": 210,
            "compareAtPrice": 260,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          }
        ],
        "tags": [
          "skirt",
          "pleated",
          "women",
          "midi",
          "elegant"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-05T17:39:37.979Z"
      },
      {
        "id": "fash-020",
        "title": "Hand-Burnished Oxford Cap-Toe Shoes",
        "slug": "hand-burnished-oxford-cap-toe",
        "sku": "AURA-SHOE-03",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 395,
        "compareAtPrice": 480,
        "costPrice": 166,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 14,
        "lowStockThreshold": 4,
        "rating": 5,
        "reviewCount": 42,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 8,
          "5": 32
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Formal Classic",
        "images": [
          {
            "id": "img-20-1",
            "url": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Burnished Oxford Cap-Toe Shoes view 1",
            "isPrimary": true
          },
          {
            "id": "img-20-2",
            "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Burnished Oxford Cap-Toe Shoes view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Museum calf leather with hand-painted gradient patina and closed channel oak bark leather sole.",
        "fullDescription": "The pinnacle of black-tie and boardroom elegance. Hand-lasted over 8 weeks in Northamptonshire.",
        "specifications": {
          "Leather": "Italian Crust Calf with Hand-Applied Patina",
          "Sole": "Oak Bark Tanned Leather (JR Rendenbach)",
          "Welt": "Goodyear Welted",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "10",
          "color": "Vintage Tan"
        },
        "variants": [
          {
            "id": "var-20-7-1",
            "sku": "AURA-SHOE-03-7-VIN",
            "title": "7 / Vintage Tan",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "7",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-20-7-2",
            "sku": "AURA-SHOE-03-7-MAT",
            "title": "7 / Matte Black",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "7",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-20-8-1",
            "sku": "AURA-SHOE-03-8-VIN",
            "title": "8 / Vintage Tan",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-20-8-2",
            "sku": "AURA-SHOE-03-8-MAT",
            "title": "8 / Matte Black",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-20-9-1",
            "sku": "AURA-SHOE-03-9-VIN",
            "title": "9 / Vintage Tan",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-20-9-2",
            "sku": "AURA-SHOE-03-9-MAT",
            "title": "9 / Matte Black",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-20-10-1",
            "sku": "AURA-SHOE-03-10-VIN",
            "title": "10 / Vintage Tan",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-20-10-2",
            "sku": "AURA-SHOE-03-10-MAT",
            "title": "10 / Matte Black",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-20-11-1",
            "sku": "AURA-SHOE-03-11-VIN",
            "title": "11 / Vintage Tan",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-20-11-2",
            "sku": "AURA-SHOE-03-11-MAT",
            "title": "11 / Matte Black",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-20-12-1",
            "sku": "AURA-SHOE-03-12-VIN",
            "title": "12 / Vintage Tan",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-20-12-2",
            "sku": "AURA-SHOE-03-12-MAT",
            "title": "12 / Matte Black",
            "price": 395,
            "compareAtPrice": 480,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Matte Black"
            }
          }
        ],
        "tags": [
          "oxford",
          "shoes",
          "formal",
          "footwear",
          "menswear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-03T17:39:37.979Z"
      },
      {
        "id": "fash-021",
        "title": "Japanese Selvedge Raw Denim 14oz Jeans",
        "slug": "japanese-selvedge-raw-denim-jeans",
        "sku": "AURA-DNM-01",
        "categoryId": "cat-fashion-men",
        "brand": "AURA",
        "price": 245,
        "compareAtPrice": 295,
        "costPrice": 103,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 31,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 65,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 12,
          "5": 49
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Okayama Shuttle Loom",
        "images": [
          {
            "id": "img-21-1",
            "url": "https://images.unsplash.com/photo-1542272604-780c96856592?w=1000&auto=format&fit=crop&q=80",
            "alt": "Japanese Selvedge Raw Denim 14oz Jeans view 1",
            "isPrimary": true
          },
          {
            "id": "img-21-2",
            "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Japanese Selvedge Raw Denim 14oz Jeans view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "14oz ring-spun Zimbabwe cotton woven on vintage Toyoda shuttle looms with classic pink selvedge ID line.",
        "fullDescription": "Untreated sanforized raw indigo denim that fades into a personalized one-of-a-kind pattern with wear.",
        "specifications": {
          "Denim": "14oz Okayama Selvedge Denim",
          "Hardware": "Solid Copper Rivets & Iron Donut Buttons",
          "Cut": "Relaxed Tapered",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "40R",
          "color": "Pure Black",
          "material": "Egyptian Cotton"
        },
        "variants": [
          {
            "id": "var-21-38R-1",
            "sku": "AURA-DNM-01-38R-PUR",
            "title": "38R / Pure Black",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "38R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-21-38R-2",
            "sku": "AURA-DNM-01-38R-CHA",
            "title": "38R / Charcoal Navy",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "38R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-21-40R-1",
            "sku": "AURA-DNM-01-40R-PUR",
            "title": "40R / Pure Black",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "40R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-21-40R-2",
            "sku": "AURA-DNM-01-40R-CHA",
            "title": "40R / Charcoal Navy",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "40R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-21-42R-1",
            "sku": "AURA-DNM-01-42R-PUR",
            "title": "42R / Pure Black",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "42R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-21-42R-2",
            "sku": "AURA-DNM-01-42R-CHA",
            "title": "42R / Charcoal Navy",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "42R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-21-44R-1",
            "sku": "AURA-DNM-01-44R-PUR",
            "title": "44R / Pure Black",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "44R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-21-44R-2",
            "sku": "AURA-DNM-01-44R-CHA",
            "title": "44R / Charcoal Navy",
            "price": 245,
            "compareAtPrice": 295,
            "stockQuantity": 3,
            "attributes": {
              "size": "44R",
              "color": "Charcoal Navy"
            }
          }
        ],
        "tags": [
          "denim",
          "selvedge",
          "jeans",
          "raw-denim",
          "menswear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-10-01T17:39:37.979Z"
      },
      {
        "id": "fash-022",
        "title": "Mulberry Silk Buttoned Blouse",
        "slug": "mulberry-silk-buttoned-blouse",
        "sku": "AURA-BLS-02",
        "categoryId": "cat-fashion-women",
        "brand": "Kyoto Silk Works",
        "price": 225,
        "compareAtPrice": 280,
        "costPrice": 95,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 29,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 48,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 9,
          "5": 36
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Pure Silk",
        "images": [
          {
            "id": "img-22-1",
            "url": "https://images.unsplash.com/photo-1551803091-e20673f15770?w=1000&auto=format&fit=crop&q=80",
            "alt": "Mulberry Silk Buttoned Blouse view 1",
            "isPrimary": true
          },
          {
            "id": "img-22-2",
            "url": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&auto=format&fit=crop&q=80",
            "alt": "Mulberry Silk Buttoned Blouse view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Matte sand-washed 19mm silk crepe de chine with concealed placket and French cuff details.",
        "fullDescription": "Designed for fluid draping and tactile softness against the skin. Breathable in summer, insulating in winter.",
        "specifications": {
          "Material": "100% Sandwashed Silk Crepe (19 Momme)",
          "Buttons": "Real Mother of Pearl",
          "Origin": "Kyoto, Japan",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "S",
          "color": "Ivory Silk",
          "material": "Mulberry Silk",
          "fit": "Regular Fit"
        },
        "variants": [
          {
            "id": "var-22-XS-1",
            "sku": "AURA-BLS-02-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-22-XS-2",
            "sku": "AURA-BLS-02-XS-EME",
            "title": "XS / Emerald Forest",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-22-XS-3",
            "sku": "AURA-BLS-02-XS-MID",
            "title": "XS / Midnight Black",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-22-S-1",
            "sku": "AURA-BLS-02-S-IVO",
            "title": "S / Ivory Silk",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-22-S-2",
            "sku": "AURA-BLS-02-S-EME",
            "title": "S / Emerald Forest",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-22-S-3",
            "sku": "AURA-BLS-02-S-MID",
            "title": "S / Midnight Black",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-22-M-1",
            "sku": "AURA-BLS-02-M-IVO",
            "title": "M / Ivory Silk",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-22-M-2",
            "sku": "AURA-BLS-02-M-EME",
            "title": "M / Emerald Forest",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-22-M-3",
            "sku": "AURA-BLS-02-M-MID",
            "title": "M / Midnight Black",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-22-L-1",
            "sku": "AURA-BLS-02-L-IVO",
            "title": "L / Ivory Silk",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-22-L-2",
            "sku": "AURA-BLS-02-L-EME",
            "title": "L / Emerald Forest",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-22-L-3",
            "sku": "AURA-BLS-02-L-MID",
            "title": "L / Midnight Black",
            "price": 225,
            "compareAtPrice": 280,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          }
        ],
        "tags": [
          "blouse",
          "silk",
          "tops",
          "women",
          "office"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-29T17:39:37.979Z"
      },
      {
        "id": "fash-023",
        "title": "Aviator Titanium Polarized Sunglasses",
        "slug": "aviator-titanium-polarized-sunglasses",
        "sku": "AURA-SUN-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "AURA",
        "price": 280,
        "compareAtPrice": 340,
        "costPrice": 118,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 21,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 37,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 28
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Japanese Titanium",
        "images": [
          {
            "id": "img-23-1",
            "url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1000&auto=format&fit=crop&q=80",
            "alt": "Aviator Titanium Polarized Sunglasses view 1",
            "isPrimary": true
          },
          {
            "id": "img-23-2",
            "url": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Aviator Titanium Polarized Sunglasses view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Ultra-lightweight Japanese beta-titanium frame with scratch-resistant mineral glass polarized lenses.",
        "fullDescription": "Weighing only 18 grams, these precision-engineered sunglasses offer 100% UVA/UVB protection with anti-reflective back coating.",
        "specifications": {
          "Frame": "100% Beta Titanium (Sabae, Fukui)",
          "Lenses": "Barberini Mineral Polarized Glass",
          "Weight": "18 Grams",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Onyx Black",
          "gender": "Unisex"
        },
        "tags": [
          "sunglasses",
          "eyewear",
          "titanium",
          "accessories",
          "luxury"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-27T17:39:37.979Z"
      },
      {
        "id": "fash-024",
        "title": "Structured Leather Crossbody Bag",
        "slug": "structured-leather-crossbody-bag",
        "sku": "AURA-BAG-04",
        "categoryId": "cat-fashion-accessories",
        "brand": "Bottega Cuoio",
        "price": 380,
        "compareAtPrice": 460,
        "costPrice": 160,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 19,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 58,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 10,
          "5": 44
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Top Rated",
        "images": [
          {
            "id": "img-24-1",
            "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1000&auto=format&fit=crop&q=80",
            "alt": "Structured Leather Crossbody Bag view 1",
            "isPrimary": true
          },
          {
            "id": "img-24-2",
            "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&auto=format&fit=crop&q=80",
            "alt": "Structured Leather Crossbody Bag view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Saddle silhouette in structured box calf leather with magnetic clasp and adjustable shoulder strap.",
        "fullDescription": "Compact yet deceptively spacious, carrying your phone, wallet, cosmetics, and keys with refined ease.",
        "specifications": {
          "Exterior": "French Box Calf Leather",
          "Interior": "Lambskin Nappa Suede",
          "Hardware": "Polished Gold-Tone Brass",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Cognac Tan",
          "gender": "Women"
        },
        "variants": [
          {
            "id": "var-24-One Size-1",
            "sku": "AURA-BAG-04-One Size-COG",
            "title": "One Size / Cognac Tan",
            "price": 380,
            "compareAtPrice": 460,
            "stockQuantity": 9,
            "attributes": {
              "size": "One Size",
              "color": "Cognac Tan"
            }
          },
          {
            "id": "var-24-One Size-2",
            "sku": "AURA-BAG-04-One Size-ONY",
            "title": "One Size / Onyx Black",
            "price": 380,
            "compareAtPrice": 460,
            "stockQuantity": 9,
            "attributes": {
              "size": "One Size",
              "color": "Onyx Black"
            }
          }
        ],
        "tags": [
          "handbag",
          "crossbody",
          "leather",
          "accessories"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-25T17:39:37.979Z"
      },
      {
        "id": "fash-025",
        "title": "Chunky Cable-Knit Alpaca Cardigan",
        "slug": "chunky-cable-knit-alpaca-cardigan",
        "sku": "AURA-KNIT-12",
        "categoryId": "cat-fashion-women",
        "brand": "Nordic Loom",
        "price": 320,
        "compareAtPrice": 390,
        "costPrice": 134,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 44,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 8,
          "5": 33
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Peruvian Alpaca",
        "images": [
          {
            "id": "img-25-1",
            "url": "https://images.unsplash.com/photo-1584297091622-af8e5fd64132?w=1000&auto=format&fit=crop&q=80",
            "alt": "Chunky Cable-Knit Alpaca Cardigan view 1",
            "isPrimary": true
          },
          {
            "id": "img-25-2",
            "url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1000&auto=format&fit=crop&q=80",
            "alt": "Chunky Cable-Knit Alpaca Cardigan view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Hand-knitted in Peru using 70% Royal Baby Alpaca and 30% Mulberry Silk with tortoiseshell button closures.",
        "fullDescription": "Fluffy, insulating, and hypo-allergenic. A statement winter cardigan that feels like wrapping yourself in clouds.",
        "specifications": {
          "Yarn": "70% Royal Baby Alpaca, 30% Silk",
          "Buttons": "Handmade Buffalo Horn",
          "Origin": "Arequipa, Peru",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Ivory Silk",
          "material": "100% Cashmere",
          "fit": "Relaxed Oversized"
        },
        "variants": [
          {
            "id": "var-25-S-1",
            "sku": "AURA-KNIT-12-S-IVO",
            "title": "S / Ivory Silk",
            "price": 320,
            "compareAtPrice": 390,
            "stockQuantity": 3,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-25-S-2",
            "sku": "AURA-KNIT-12-S-CAM",
            "title": "S / Camel Gold",
            "price": 320,
            "compareAtPrice": 390,
            "stockQuantity": 3,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-25-M-1",
            "sku": "AURA-KNIT-12-M-IVO",
            "title": "M / Ivory Silk",
            "price": 320,
            "compareAtPrice": 390,
            "stockQuantity": 3,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-25-M-2",
            "sku": "AURA-KNIT-12-M-CAM",
            "title": "M / Camel Gold",
            "price": 320,
            "compareAtPrice": 390,
            "stockQuantity": 3,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-25-L-1",
            "sku": "AURA-KNIT-12-L-IVO",
            "title": "L / Ivory Silk",
            "price": 320,
            "compareAtPrice": 390,
            "stockQuantity": 3,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-25-L-2",
            "sku": "AURA-KNIT-12-L-CAM",
            "title": "L / Camel Gold",
            "price": 320,
            "compareAtPrice": 390,
            "stockQuantity": 3,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          }
        ],
        "tags": [
          "cardigan",
          "alpaca",
          "knitwear",
          "winter",
          "sustainable"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-23T17:39:37.979Z"
      },
      {
        "id": "fash-026",
        "title": "Tailored Double-Pleat Gurkha Trousers",
        "slug": "tailored-double-pleat-gurkha-trousers",
        "sku": "AURA-TRS-09",
        "categoryId": "cat-fashion-men",
        "brand": "Sartoria Milano",
        "price": 275,
        "compareAtPrice": 340,
        "costPrice": 116,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 23,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 31,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 6,
          "5": 23
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Gurkha Style",
        "images": [
          {
            "id": "img-26-1",
            "url": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1000&auto=format&fit=crop&q=80",
            "alt": "Tailored Double-Pleat Gurkha Trousers view 1",
            "isPrimary": true
          },
          {
            "id": "img-26-2",
            "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&auto=format&fit=crop&q=80",
            "alt": "Tailored Double-Pleat Gurkha Trousers view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Distinctive criss-cross buckle waistband closure with forward double pleats in British heavy cotton drill.",
        "fullDescription": "A sartorial staple that combines military heritage functionality with modern high-waisted tailoring.",
        "specifications": {
          "Fabric": "100% Heavy British Cotton Twill (340 GSM)",
          "Closure": "Dual Brass Buckle Gurkha Waistband",
          "Origin": "Naples, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "40R",
          "color": "Oatmeal Tweed",
          "material": "Egyptian Cotton"
        },
        "variants": [
          {
            "id": "var-26-38R-1",
            "sku": "AURA-TRS-09-38R-OAT",
            "title": "38R / Oatmeal Tweed",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-26-38R-2",
            "sku": "AURA-TRS-09-38R-CHA",
            "title": "38R / Charcoal Navy",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-26-40R-1",
            "sku": "AURA-TRS-09-40R-OAT",
            "title": "40R / Oatmeal Tweed",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-26-40R-2",
            "sku": "AURA-TRS-09-40R-CHA",
            "title": "40R / Charcoal Navy",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-26-42R-1",
            "sku": "AURA-TRS-09-42R-OAT",
            "title": "42R / Oatmeal Tweed",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-26-42R-2",
            "sku": "AURA-TRS-09-42R-CHA",
            "title": "42R / Charcoal Navy",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-26-44R-1",
            "sku": "AURA-TRS-09-44R-OAT",
            "title": "44R / Oatmeal Tweed",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-26-44R-2",
            "sku": "AURA-TRS-09-44R-CHA",
            "title": "44R / Charcoal Navy",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Charcoal Navy"
            }
          }
        ],
        "tags": [
          "gurkha",
          "trousers",
          "menswear",
          "pleated",
          "tailored"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-21T17:39:37.979Z"
      },
      {
        "id": "fash-027",
        "title": "Hand-Stitched Leather Derby Brogues",
        "slug": "hand-stitched-leather-derby-brogues",
        "sku": "AURA-SHOE-07",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 370,
        "compareAtPrice": 440,
        "costPrice": 155,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 15,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 27,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 20
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Brogue Detail",
        "images": [
          {
            "id": "img-27-1",
            "url": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Stitched Leather Derby Brogues view 1",
            "isPrimary": true
          },
          {
            "id": "img-27-2",
            "url": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Stitched Leather Derby Brogues view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Classic wingtip brogue punching on rich waxy calfskin with storm welt and double leather sole.",
        "fullDescription": "Substantial, durable, and sophisticated. Built for longevity through decades of wear and resoling.",
        "specifications": {
          "Leather": "Waxed Full-Grain Bovine Leather",
          "Sole": "Double Oak Bark Leather",
          "Construction": "Storm Welt 360",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "10",
          "color": "Vintage Tan"
        },
        "variants": [
          {
            "id": "var-27-8-1",
            "sku": "AURA-SHOE-07-8-VIN",
            "title": "8 / Vintage Tan",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-27-8-2",
            "sku": "AURA-SHOE-07-8-MAT",
            "title": "8 / Matte Black",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-27-9-1",
            "sku": "AURA-SHOE-07-9-VIN",
            "title": "9 / Vintage Tan",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-27-9-2",
            "sku": "AURA-SHOE-07-9-MAT",
            "title": "9 / Matte Black",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-27-10-1",
            "sku": "AURA-SHOE-07-10-VIN",
            "title": "10 / Vintage Tan",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-27-10-2",
            "sku": "AURA-SHOE-07-10-MAT",
            "title": "10 / Matte Black",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-27-11-1",
            "sku": "AURA-SHOE-07-11-VIN",
            "title": "11 / Vintage Tan",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-27-11-2",
            "sku": "AURA-SHOE-07-11-MAT",
            "title": "11 / Matte Black",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-27-12-1",
            "sku": "AURA-SHOE-07-12-VIN",
            "title": "12 / Vintage Tan",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-27-12-2",
            "sku": "AURA-SHOE-07-12-MAT",
            "title": "12 / Matte Black",
            "price": 370,
            "compareAtPrice": 440,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Matte Black"
            }
          }
        ],
        "tags": [
          "brogues",
          "derby",
          "shoes",
          "footwear",
          "classic"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-19T17:39:37.979Z"
      },
      {
        "id": "fash-028",
        "title": "Pure Linen Resort Camp-Collar Shirt",
        "slug": "pure-linen-camp-collar-shirt",
        "sku": "AURA-SHT-05",
        "categoryId": "cat-fashion-men",
        "brand": "AURA",
        "price": 150,
        "compareAtPrice": 180,
        "costPrice": 63,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 38,
        "lowStockThreshold": 4,
        "rating": 4.7,
        "reviewCount": 52,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 9,
          "5": 39
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Summer Essential",
        "images": [
          {
            "id": "img-28-1",
            "url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pure Linen Resort Camp-Collar Shirt view 1",
            "isPrimary": true
          },
          {
            "id": "img-28-2",
            "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pure Linen Resort Camp-Collar Shirt view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Pre-washed 100% Normandy flax linen with relaxed Cuban camp collar and straight hem for untucked styling.",
        "fullDescription": "Cooling, breathable, and effortlessly relaxed. Perfect for seaside vacations or warm urban weekends.",
        "specifications": {
          "Fabric": "100% French Normandy Linen (165 GSM)",
          "Buttons": "Real Coconut Shell",
          "Fit": "Relaxed Boxy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Oatmeal Tweed",
          "material": "Egyptian Cotton"
        },
        "variants": [
          {
            "id": "var-28-S-1",
            "sku": "AURA-SHT-05-S-OAT",
            "title": "S / Oatmeal Tweed",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "S",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-28-S-2",
            "sku": "AURA-SHT-05-S-SLA",
            "title": "S / Slate Grey",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "S",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-28-M-1",
            "sku": "AURA-SHT-05-M-OAT",
            "title": "M / Oatmeal Tweed",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "M",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-28-M-2",
            "sku": "AURA-SHT-05-M-SLA",
            "title": "M / Slate Grey",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "M",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-28-L-1",
            "sku": "AURA-SHT-05-L-OAT",
            "title": "L / Oatmeal Tweed",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "L",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-28-L-2",
            "sku": "AURA-SHT-05-L-SLA",
            "title": "L / Slate Grey",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "L",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-28-XL-1",
            "sku": "AURA-SHT-05-XL-OAT",
            "title": "XL / Oatmeal Tweed",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "XL",
              "color": "Oatmeal Tweed"
            }
          },
          {
            "id": "var-28-XL-2",
            "sku": "AURA-SHT-05-XL-SLA",
            "title": "XL / Slate Grey",
            "price": 150,
            "compareAtPrice": 180,
            "stockQuantity": 4,
            "attributes": {
              "size": "XL",
              "color": "Slate Grey"
            }
          }
        ],
        "tags": [
          "linen",
          "shirt",
          "resort",
          "summer",
          "menswear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-17T17:39:37.979Z"
      },
      {
        "id": "fash-029",
        "title": "Velvet Peak-Lapel Smoking Jacket",
        "slug": "velvet-peak-lapel-smoking-jacket",
        "sku": "AURA-JKT-08",
        "categoryId": "cat-fashion-men",
        "brand": "Sartoria Milano",
        "price": 620,
        "compareAtPrice": 750,
        "costPrice": 260,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 10,
        "lowStockThreshold": 4,
        "rating": 5,
        "reviewCount": 18,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 14
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Black Tie",
        "images": [
          {
            "id": "img-29-1",
            "url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Velvet Peak-Lapel Smoking Jacket view 1",
            "isPrimary": true
          },
          {
            "id": "img-29-2",
            "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&auto=format&fit=crop&q=80",
            "alt": "Velvet Peak-Lapel Smoking Jacket view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Plush cotton velvet with wide silk grosgrain peak lapels, gauntlet cuffs, and woven frogging buttons.",
        "fullDescription": "The epitome of festive evening grandeur. Lined in royal purple Bemberg cupro jacquard.",
        "specifications": {
          "Shell": "100% Italian Cotton Velvet (480 GSM)",
          "Lapels": "100% Silk Grosgrain",
          "Origin": "Milan, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "42R",
          "color": "Pure Black",
          "material": "Super 130s Merino Wool"
        },
        "variants": [
          {
            "id": "var-29-38R-1",
            "sku": "AURA-JKT-08-38R-PUR",
            "title": "38R / Pure Black",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-29-38R-2",
            "sku": "AURA-JKT-08-38R-CHA",
            "title": "38R / Charcoal Navy",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-29-40R-1",
            "sku": "AURA-JKT-08-40R-PUR",
            "title": "40R / Pure Black",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-29-40R-2",
            "sku": "AURA-JKT-08-40R-CHA",
            "title": "40R / Charcoal Navy",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-29-42R-1",
            "sku": "AURA-JKT-08-42R-PUR",
            "title": "42R / Pure Black",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-29-42R-2",
            "sku": "AURA-JKT-08-42R-CHA",
            "title": "42R / Charcoal Navy",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-29-44R-1",
            "sku": "AURA-JKT-08-44R-PUR",
            "title": "44R / Pure Black",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-29-44R-2",
            "sku": "AURA-JKT-08-44R-CHA",
            "title": "44R / Charcoal Navy",
            "price": 620,
            "compareAtPrice": 750,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Charcoal Navy"
            }
          }
        ],
        "tags": [
          "smoking-jacket",
          "velvet",
          "black-tie",
          "eveningwear",
          "menswear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-15T17:39:37.980Z"
      },
      {
        "id": "fash-030",
        "title": "Drape Neck Satin Cocktail Gown",
        "slug": "drape-neck-satin-cocktail-gown",
        "sku": "AURA-DRS-08",
        "categoryId": "cat-fashion-women",
        "brand": "L’Étoile Paris",
        "price": 450,
        "compareAtPrice": 560,
        "costPrice": 189,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 12,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 33,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 6,
          "5": 25
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Haute Couture",
        "images": [
          {
            "id": "img-30-1",
            "url": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1000&auto=format&fit=crop&q=80",
            "alt": "Drape Neck Satin Cocktail Gown view 1",
            "isPrimary": true
          },
          {
            "id": "img-30-2",
            "url": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1000&auto=format&fit=crop&q=80",
            "alt": "Drape Neck Satin Cocktail Gown view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Cowl neckline that cascades effortlessly into an open back with delicate criss-cross strap fastenings.",
        "fullDescription": "Liquid shine satin woven with high-density filament threads that catch ambient light from every angle.",
        "specifications": {
          "Composition": "100% Silk Back Satin",
          "Length": "Floor Length (150 cm)",
          "Origin": "Paris, France",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "S",
          "color": "Burgundy Velvet",
          "material": "Mulberry Silk",
          "fit": "Tailored Slim"
        },
        "variants": [
          {
            "id": "var-30-XS-1",
            "sku": "AURA-DRS-08-XS-BUR",
            "title": "XS / Burgundy Velvet",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Burgundy Velvet"
            }
          },
          {
            "id": "var-30-XS-2",
            "sku": "AURA-DRS-08-XS-MID",
            "title": "XS / Midnight Black",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-30-XS-3",
            "sku": "AURA-DRS-08-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-30-S-1",
            "sku": "AURA-DRS-08-S-BUR",
            "title": "S / Burgundy Velvet",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Burgundy Velvet"
            }
          },
          {
            "id": "var-30-S-2",
            "sku": "AURA-DRS-08-S-MID",
            "title": "S / Midnight Black",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-30-S-3",
            "sku": "AURA-DRS-08-S-IVO",
            "title": "S / Ivory Silk",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-30-M-1",
            "sku": "AURA-DRS-08-M-BUR",
            "title": "M / Burgundy Velvet",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Burgundy Velvet"
            }
          },
          {
            "id": "var-30-M-2",
            "sku": "AURA-DRS-08-M-MID",
            "title": "M / Midnight Black",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-30-M-3",
            "sku": "AURA-DRS-08-M-IVO",
            "title": "M / Ivory Silk",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-30-L-1",
            "sku": "AURA-DRS-08-L-BUR",
            "title": "L / Burgundy Velvet",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Burgundy Velvet"
            }
          },
          {
            "id": "var-30-L-2",
            "sku": "AURA-DRS-08-L-MID",
            "title": "L / Midnight Black",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-30-L-3",
            "sku": "AURA-DRS-08-L-IVO",
            "title": "L / Ivory Silk",
            "price": 450,
            "compareAtPrice": 560,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          }
        ],
        "tags": [
          "gown",
          "eveningwear",
          "satin",
          "dress",
          "gala"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-13T17:39:37.980Z"
      },
      {
        "id": "fash-031",
        "title": "Handcrafted Woven Straw Panama Hat",
        "slug": "woven-straw-panama-hat",
        "sku": "AURA-HAT-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "AURA",
        "price": 160,
        "compareAtPrice": 195,
        "costPrice": 67,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 22,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 17
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Grade 8 Toquilla",
        "images": [
          {
            "id": "img-31-1",
            "url": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=1000&auto=format&fit=crop&q=80",
            "alt": "Handcrafted Woven Straw Panama Hat view 1",
            "isPrimary": true
          },
          {
            "id": "img-31-2",
            "url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1000&auto=format&fit=crop&q=80",
            "alt": "Handcrafted Woven Straw Panama Hat view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Hand-woven in Montecristi from natural Toquilla palm fibers with black grosgrain band and moisture-wicking sweatband.",
        "fullDescription": "Lightweight sun protection with timeless panache. Foldable and resilient for jet-setting travel.",
        "specifications": {
          "Straw": "100% Montecristi Toquilla Straw (Grade 8)",
          "Band": "Cotton-Rayon Grosgrain",
          "Origin": "Ecuador",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Cognac Tan",
          "gender": "Unisex"
        },
        "tags": [
          "hat",
          "panama",
          "summer",
          "accessories",
          "straw"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-11T17:39:37.980Z"
      },
      {
        "id": "fash-032",
        "title": "Shearling-Lined Suede Aviator Jacket",
        "slug": "shearling-lined-suede-aviator-jacket",
        "sku": "AURA-JKT-14",
        "categoryId": "cat-fashion-men",
        "brand": "AURA",
        "price": 880,
        "compareAtPrice": 1100,
        "costPrice": 370,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 9,
        "lowStockThreshold": 4,
        "rating": 5,
        "reviewCount": 21,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 16
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Heritage Leather",
        "images": [
          {
            "id": "img-32-1",
            "url": "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1000&auto=format&fit=crop&q=80",
            "alt": "Shearling-Lined Suede Aviator Jacket view 1",
            "isPrimary": true
          },
          {
            "id": "img-32-2",
            "url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Shearling-Lined Suede Aviator Jacket view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Heavy Spanish Merino lamb shearling with plush curly wool interior, brass double-buckle collar, and storm cuffs.",
        "fullDescription": "Engineered for sub-zero climates without compromising rugged masculine sophistication.",
        "specifications": {
          "Pelt": "100% Spanish Merino Lamb Shearling (15mm Wool Depth)",
          "Zippers": "Solid Raccagni Brass",
          "Weight": "2.1 kg",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "42R",
          "color": "Espresso Brown",
          "material": "Nubuck Leather"
        },
        "variants": [
          {
            "id": "var-32-38R-1",
            "sku": "AURA-JKT-14-38R-ESP",
            "title": "38R / Espresso Brown",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-32-38R-2",
            "sku": "AURA-JKT-14-38R-PUR",
            "title": "38R / Pure Black",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-32-40R-1",
            "sku": "AURA-JKT-14-40R-ESP",
            "title": "40R / Espresso Brown",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-32-40R-2",
            "sku": "AURA-JKT-14-40R-PUR",
            "title": "40R / Pure Black",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-32-42R-1",
            "sku": "AURA-JKT-14-42R-ESP",
            "title": "42R / Espresso Brown",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-32-42R-2",
            "sku": "AURA-JKT-14-42R-PUR",
            "title": "42R / Pure Black",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-32-44R-1",
            "sku": "AURA-JKT-14-44R-ESP",
            "title": "44R / Espresso Brown",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-32-44R-2",
            "sku": "AURA-JKT-14-44R-PUR",
            "title": "44R / Pure Black",
            "price": 880,
            "compareAtPrice": 1100,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Pure Black"
            }
          }
        ],
        "tags": [
          "shearling",
          "jacket",
          "leather",
          "winter",
          "menswear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-09T17:39:37.980Z"
      },
      {
        "id": "fash-033",
        "title": "Hand-Pleated Linen Wide-Leg Palazzo Pants",
        "slug": "pleated-linen-palazzo-pants",
        "sku": "AURA-TRS-11",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 230,
        "compareAtPrice": 280,
        "costPrice": 97,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 27,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 40,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 30
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pure Linen",
        "images": [
          {
            "id": "img-33-1",
            "url": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Pleated Linen Wide-Leg Palazzo Pants view 1",
            "isPrimary": true
          },
          {
            "id": "img-33-2",
            "url": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Pleated Linen Wide-Leg Palazzo Pants view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "High-waisted palazzo cut with deep origami pleats and an ultra-wide fluid hem crafted in crisp European linen.",
        "fullDescription": "Cool, dramatic, and flattering. Transitions seamlessly from barefoot beach walks to seaside dinners.",
        "specifications": {
          "Composition": "100% European Flax Certified Linen",
          "Pockets": "Deep On-Seam Welt Pockets",
          "Leg Opening": "64 cm",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Ivory Silk",
          "material": "Organic Linen",
          "fit": "Structured Boxy"
        },
        "variants": [
          {
            "id": "var-33-XS-1",
            "sku": "AURA-TRS-11-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-33-XS-2",
            "sku": "AURA-TRS-11-XS-CAM",
            "title": "XS / Camel Gold",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "XS",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-33-S-1",
            "sku": "AURA-TRS-11-S-IVO",
            "title": "S / Ivory Silk",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-33-S-2",
            "sku": "AURA-TRS-11-S-CAM",
            "title": "S / Camel Gold",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-33-M-1",
            "sku": "AURA-TRS-11-M-IVO",
            "title": "M / Ivory Silk",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-33-M-2",
            "sku": "AURA-TRS-11-M-CAM",
            "title": "M / Camel Gold",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-33-L-1",
            "sku": "AURA-TRS-11-L-IVO",
            "title": "L / Ivory Silk",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-33-L-2",
            "sku": "AURA-TRS-11-L-CAM",
            "title": "L / Camel Gold",
            "price": 230,
            "compareAtPrice": 280,
            "stockQuantity": 3,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          }
        ],
        "tags": [
          "linen",
          "palazzo",
          "pants",
          "summer",
          "women"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-07T17:39:37.980Z"
      },
      {
        "id": "fash-034",
        "title": "Italian Suede Driving Loafers",
        "slug": "italian-suede-driving-loafers",
        "sku": "AURA-SHOE-11",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 260,
        "compareAtPrice": 320,
        "costPrice": 109,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 22,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 46,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 8,
          "5": 35
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Gommino Sole",
        "images": [
          {
            "id": "img-34-1",
            "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&auto=format&fit=crop&q=80",
            "alt": "Italian Suede Driving Loafers view 1",
            "isPrimary": true
          },
          {
            "id": "img-34-2",
            "url": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=1000&auto=format&fit=crop&q=80",
            "alt": "Italian Suede Driving Loafers view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Velvety Italian calf suede with 133 rubber pebbles on the sole and heel for unparalleled pedal grip and comfort.",
        "fullDescription": "Hand-sewn tubular moccasin construction that envelops the foot in supple luxury.",
        "specifications": {
          "Upper": "Calfskin Split Suede (Water-Resistant Treated)",
          "Sole": "Rubber Nubbed Gommino Sole",
          "Origin": "Marche, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "9",
          "color": "Vintage Tan"
        },
        "variants": [
          {
            "id": "var-34-8-1",
            "sku": "AURA-SHOE-11-8-VIN",
            "title": "8 / Vintage Tan",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-34-8-2",
            "sku": "AURA-SHOE-11-8-MAT",
            "title": "8 / Matte Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-34-9-1",
            "sku": "AURA-SHOE-11-9-VIN",
            "title": "9 / Vintage Tan",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-34-9-2",
            "sku": "AURA-SHOE-11-9-MAT",
            "title": "9 / Matte Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-34-10-1",
            "sku": "AURA-SHOE-11-10-VIN",
            "title": "10 / Vintage Tan",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-34-10-2",
            "sku": "AURA-SHOE-11-10-MAT",
            "title": "10 / Matte Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-34-11-1",
            "sku": "AURA-SHOE-11-11-VIN",
            "title": "11 / Vintage Tan",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-34-11-2",
            "sku": "AURA-SHOE-11-11-MAT",
            "title": "11 / Matte Black",
            "price": 260,
            "compareAtPrice": 320,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Matte Black"
            }
          }
        ],
        "tags": [
          "loafers",
          "driving-shoes",
          "suede",
          "footwear",
          "casual"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-05T17:39:37.980Z"
      },
      {
        "id": "fash-035",
        "title": "Cashmere-Lined Nappa Leather Gloves",
        "slug": "cashmere-lined-nappa-leather-gloves",
        "sku": "AURA-GLV-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "Bottega Cuoio",
        "price": 155,
        "compareAtPrice": 190,
        "costPrice": 65,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 36,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 29
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Touchscreen Compatible",
        "images": [
          {
            "id": "img-35-1",
            "url": "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1000&auto=format&fit=crop&q=80",
            "alt": "Cashmere-Lined Nappa Leather Gloves view 1",
            "isPrimary": true
          },
          {
            "id": "img-35-2",
            "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&auto=format&fit=crop&q=80",
            "alt": "Cashmere-Lined Nappa Leather Gloves view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Supple Ethiopian lambskin nappa with 100% Scottish cashmere knit lining and invisible conductive touchscreen tips.",
        "fullDescription": "Hand-cut by master glovers in Naples. Fits like a second skin while keeping fingers toasty in winter.",
        "specifications": {
          "Leather": "0.6mm Ethiopian Hair-Sheep Nappa",
          "Lining": "100% 2-Ply Scottish Cashmere",
          "Origin": "Naples, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Onyx Black",
          "gender": "Unisex"
        },
        "variants": [
          {
            "id": "var-35-One Size-1",
            "sku": "AURA-GLV-01-One Size-ONY",
            "title": "One Size / Onyx Black",
            "price": 155,
            "compareAtPrice": 190,
            "stockQuantity": 18,
            "attributes": {
              "size": "One Size",
              "color": "Onyx Black"
            }
          },
          {
            "id": "var-35-One Size-2",
            "sku": "AURA-GLV-01-One Size-COG",
            "title": "One Size / Cognac Tan",
            "price": 155,
            "compareAtPrice": 190,
            "stockQuantity": 18,
            "attributes": {
              "size": "One Size",
              "color": "Cognac Tan"
            }
          }
        ],
        "tags": [
          "gloves",
          "leather",
          "cashmere",
          "winter",
          "accessories"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-03T17:39:37.980Z"
      },
      {
        "id": "fash-036",
        "title": "Classic Breton Striped Heavyweight Tee",
        "slug": "breton-striped-heavyweight-tee",
        "sku": "AURA-TEE-01",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 110,
        "compareAtPrice": 135,
        "costPrice": 46,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 48,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 64,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 12,
          "5": 48
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Organic Cotton",
        "images": [
          {
            "id": "img-36-1",
            "url": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Classic Breton Striped Heavyweight Tee view 1",
            "isPrimary": true
          },
          {
            "id": "img-36-2",
            "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1000&auto=format&fit=crop&q=80",
            "alt": "Classic Breton Striped Heavyweight Tee view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "280 GSM dry-touch organic combed cotton with classic boat neckline and nautical indigo stripes.",
        "fullDescription": "Woven on circular knitting machines in Normandy for authentic maritime texture that softens with each wash.",
        "specifications": {
          "Cloth": "100% GOTS Certified Organic Cotton (280 GSM)",
          "Neckline": "Authentic Boat Neck",
          "Origin": "Brittany, France",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "S",
          "color": "Ivory Silk",
          "material": "Recycled Cotton",
          "fit": "Regular Fit"
        },
        "variants": [
          {
            "id": "var-36-XS-1",
            "sku": "AURA-TEE-01-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-36-XS-2",
            "sku": "AURA-TEE-01-XS-MID",
            "title": "XS / Midnight Black",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-36-S-1",
            "sku": "AURA-TEE-01-S-IVO",
            "title": "S / Ivory Silk",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-36-S-2",
            "sku": "AURA-TEE-01-S-MID",
            "title": "S / Midnight Black",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-36-M-1",
            "sku": "AURA-TEE-01-M-IVO",
            "title": "M / Ivory Silk",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-36-M-2",
            "sku": "AURA-TEE-01-M-MID",
            "title": "M / Midnight Black",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-36-L-1",
            "sku": "AURA-TEE-01-L-IVO",
            "title": "L / Ivory Silk",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-36-L-2",
            "sku": "AURA-TEE-01-L-MID",
            "title": "L / Midnight Black",
            "price": 110,
            "compareAtPrice": 135,
            "stockQuantity": 6,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          }
        ],
        "tags": [
          "tshirt",
          "breton",
          "cotton",
          "striped",
          "casual"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-09-01T17:39:37.980Z"
      },
      {
        "id": "fash-037",
        "title": "Fine Gauge Silk-Cotton Knit Polo Shirt",
        "slug": "fine-gauge-silk-cotton-polo",
        "sku": "AURA-POLO-03",
        "categoryId": "cat-fashion-men",
        "brand": "Sartoria Milano",
        "price": 195,
        "compareAtPrice": 240,
        "costPrice": 82,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 34,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 43,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 8,
          "5": 32
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "18-Gauge Knit",
        "images": [
          {
            "id": "img-37-1",
            "url": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fine Gauge Silk-Cotton Knit Polo Shirt view 1",
            "isPrimary": true
          },
          {
            "id": "img-37-2",
            "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fine Gauge Silk-Cotton Knit Polo Shirt view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "55% Mulberry silk and 45% long-staple cotton blended into a silky 18-gauge jersey with Johnny collar.",
        "fullDescription": "Effortlessly bridges casual relaxed days and smart-casual suiting with luxurious breathability.",
        "specifications": {
          "Yarn": "55% Silk, 45% Supima Cotton (18 GG)",
          "Collar": "Placketless Johnny Collar",
          "Origin": "Perugia, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Charcoal Navy",
          "material": "Egyptian Cotton"
        },
        "variants": [
          {
            "id": "var-37-S-1",
            "sku": "AURA-POLO-03-S-CHA",
            "title": "S / Charcoal Navy",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-37-S-2",
            "sku": "AURA-POLO-03-S-SLA",
            "title": "S / Slate Grey",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-37-S-3",
            "sku": "AURA-POLO-03-S-ESP",
            "title": "S / Espresso Brown",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-37-M-1",
            "sku": "AURA-POLO-03-M-CHA",
            "title": "M / Charcoal Navy",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-37-M-2",
            "sku": "AURA-POLO-03-M-SLA",
            "title": "M / Slate Grey",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-37-M-3",
            "sku": "AURA-POLO-03-M-ESP",
            "title": "M / Espresso Brown",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-37-L-1",
            "sku": "AURA-POLO-03-L-CHA",
            "title": "L / Charcoal Navy",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-37-L-2",
            "sku": "AURA-POLO-03-L-SLA",
            "title": "L / Slate Grey",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-37-L-3",
            "sku": "AURA-POLO-03-L-ESP",
            "title": "L / Espresso Brown",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-37-XL-1",
            "sku": "AURA-POLO-03-XL-CHA",
            "title": "XL / Charcoal Navy",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "XL",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-37-XL-2",
            "sku": "AURA-POLO-03-XL-SLA",
            "title": "XL / Slate Grey",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "XL",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-37-XL-3",
            "sku": "AURA-POLO-03-XL-ESP",
            "title": "XL / Espresso Brown",
            "price": 195,
            "compareAtPrice": 240,
            "stockQuantity": 2,
            "attributes": {
              "size": "XL",
              "color": "Espresso Brown"
            }
          }
        ],
        "tags": [
          "polo",
          "knitwear",
          "silk",
          "menswear",
          "smart-casual"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-30T17:39:37.980Z"
      },
      {
        "id": "fash-038",
        "title": "Tailored Wool-Mohair Midnight Tuxedo",
        "slug": "tailored-wool-mohair-midnight-tuxedo",
        "sku": "AURA-TUX-01",
        "categoryId": "cat-fashion-men",
        "brand": "Sartoria Milano",
        "price": 950,
        "compareAtPrice": 1200,
        "costPrice": 399,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 8,
        "lowStockThreshold": 4,
        "rating": 5,
        "reviewCount": 15,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 11
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Black Tie Gala",
        "images": [
          {
            "id": "img-38-1",
            "url": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1000&auto=format&fit=crop&q=80",
            "alt": "Tailored Wool-Mohair Midnight Tuxedo view 1",
            "isPrimary": true
          },
          {
            "id": "img-38-2",
            "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&auto=format&fit=crop&q=80",
            "alt": "Tailored Wool-Mohair Midnight Tuxedo view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "84% wool 16% mohair cloth with satin shawl collar, jetted pockets, and silk side-stripe trousers.",
        "fullDescription": "Mohair adds crisp resilience and subtle nocturnal sheen under grand chandeliers.",
        "specifications": {
          "Fabric": "84% Super 140s Wool, 16% South African Mohair",
          "Facings": "100% Silk Satin",
          "Origin": "Biella, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "40R",
          "color": "Pure Black",
          "material": "Super 130s Merino Wool"
        },
        "variants": [
          {
            "id": "var-38-38R-1",
            "sku": "AURA-TUX-01-38R-PUR",
            "title": "38R / Pure Black",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-38-38R-2",
            "sku": "AURA-TUX-01-38R-CHA",
            "title": "38R / Charcoal Navy",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-38-40R-1",
            "sku": "AURA-TUX-01-40R-PUR",
            "title": "40R / Pure Black",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-38-40R-2",
            "sku": "AURA-TUX-01-40R-CHA",
            "title": "40R / Charcoal Navy",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-38-42R-1",
            "sku": "AURA-TUX-01-42R-PUR",
            "title": "42R / Pure Black",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-38-42R-2",
            "sku": "AURA-TUX-01-42R-CHA",
            "title": "42R / Charcoal Navy",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-38-44R-1",
            "sku": "AURA-TUX-01-44R-PUR",
            "title": "44R / Pure Black",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Pure Black"
            }
          },
          {
            "id": "var-38-44R-2",
            "sku": "AURA-TUX-01-44R-CHA",
            "title": "44R / Charcoal Navy",
            "price": 950,
            "compareAtPrice": 1200,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Charcoal Navy"
            }
          }
        ],
        "tags": [
          "tuxedo",
          "black-tie",
          "mohair",
          "formal",
          "menswear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-28T17:39:37.980Z"
      },
      {
        "id": "fash-039",
        "title": "Quilted Diamond Down Gilet Vest",
        "slug": "quilted-diamond-down-gilet",
        "sku": "AURA-VST-02",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 270,
        "compareAtPrice": 330,
        "costPrice": 113,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 21,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 35,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 6,
          "5": 26
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "800 Fill Power",
        "images": [
          {
            "id": "img-39-1",
            "url": "https://images.unsplash.com/photo-1544441893-675973e31985?w=1000&auto=format&fit=crop&q=80",
            "alt": "Quilted Diamond Down Gilet Vest view 1",
            "isPrimary": true
          },
          {
            "id": "img-39-2",
            "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Quilted Diamond Down Gilet Vest view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Water-resistant matte nylon shell packed with responsibly sourced 800-fill European white goose down.",
        "fullDescription": "Ultralight layering piece that slots under overcoats or layers over knits for crisp morning strolls.",
        "specifications": {
          "Insulation": "800 FP 90/10 White Goose Down (RDS Certified)",
          "Shell": "Micro-Ripstop Recycled Nylon",
          "Weight": "210g",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Midnight Black",
          "material": "Organic Linen",
          "season": "Autumn/Winter"
        },
        "variants": [
          {
            "id": "var-39-XS-1",
            "sku": "AURA-VST-02-XS-MID",
            "title": "XS / Midnight Black",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-39-XS-2",
            "sku": "AURA-VST-02-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-39-XS-3",
            "sku": "AURA-VST-02-XS-CAM",
            "title": "XS / Camel Gold",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-39-S-1",
            "sku": "AURA-VST-02-S-MID",
            "title": "S / Midnight Black",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-39-S-2",
            "sku": "AURA-VST-02-S-IVO",
            "title": "S / Ivory Silk",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-39-S-3",
            "sku": "AURA-VST-02-S-CAM",
            "title": "S / Camel Gold",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-39-M-1",
            "sku": "AURA-VST-02-M-MID",
            "title": "M / Midnight Black",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-39-M-2",
            "sku": "AURA-VST-02-M-IVO",
            "title": "M / Ivory Silk",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-39-M-3",
            "sku": "AURA-VST-02-M-CAM",
            "title": "M / Camel Gold",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-39-L-1",
            "sku": "AURA-VST-02-L-MID",
            "title": "L / Midnight Black",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-39-L-2",
            "sku": "AURA-VST-02-L-IVO",
            "title": "L / Ivory Silk",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-39-L-3",
            "sku": "AURA-VST-02-L-CAM",
            "title": "L / Camel Gold",
            "price": 270,
            "compareAtPrice": 330,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          }
        ],
        "tags": [
          "vest",
          "down",
          "outerwear",
          "winter",
          "layering"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-26T17:39:37.980Z"
      },
      {
        "id": "fash-040",
        "title": "Suede Combat Boot with Vibram Lug Sole",
        "slug": "suede-combat-boot-vibram-sole",
        "sku": "AURA-SHOE-14",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 385,
        "compareAtPrice": 460,
        "costPrice": 162,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 17,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 38,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 29
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Vibram Sole",
        "images": [
          {
            "id": "img-40-1",
            "url": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Suede Combat Boot with Vibram Lug Sole view 1",
            "isPrimary": true
          },
          {
            "id": "img-40-2",
            "url": "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=1000&auto=format&fit=crop&q=80",
            "alt": "Suede Combat Boot with Vibram Lug Sole view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Hydrophobic reverse-chamois leather upper with speed lace eyelets and rugged Vibram Commando lug sole.",
        "fullDescription": "Built to conquer wet cobblestones and winter terrain with commanding architectural style.",
        "specifications": {
          "Upper": "3.0mm Waxed Reverse Chamois Suede",
          "Outsole": "Vibram Montagna Commando Sole",
          "Hardware": "Gunmetal Speed Hooks",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "10",
          "color": "Matte Black"
        },
        "variants": [
          {
            "id": "var-40-8-1",
            "sku": "AURA-SHOE-14-8-MAT",
            "title": "8 / Matte Black",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-40-8-2",
            "sku": "AURA-SHOE-14-8-VIN",
            "title": "8 / Vintage Tan",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-40-9-1",
            "sku": "AURA-SHOE-14-9-MAT",
            "title": "9 / Matte Black",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-40-9-2",
            "sku": "AURA-SHOE-14-9-VIN",
            "title": "9 / Vintage Tan",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-40-10-1",
            "sku": "AURA-SHOE-14-10-MAT",
            "title": "10 / Matte Black",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-40-10-2",
            "sku": "AURA-SHOE-14-10-VIN",
            "title": "10 / Vintage Tan",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-40-11-1",
            "sku": "AURA-SHOE-14-11-MAT",
            "title": "11 / Matte Black",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-40-11-2",
            "sku": "AURA-SHOE-14-11-VIN",
            "title": "11 / Vintage Tan",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "11",
              "color": "Vintage Tan"
            }
          },
          {
            "id": "var-40-12-1",
            "sku": "AURA-SHOE-14-12-MAT",
            "title": "12 / Matte Black",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-40-12-2",
            "sku": "AURA-SHOE-14-12-VIN",
            "title": "12 / Vintage Tan",
            "price": 385,
            "compareAtPrice": 460,
            "stockQuantity": 2,
            "attributes": {
              "size": "12",
              "color": "Vintage Tan"
            }
          }
        ],
        "tags": [
          "boots",
          "combat-boots",
          "vibram",
          "suede",
          "footwear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-24T17:39:37.980Z"
      },
      {
        "id": "fash-041",
        "title": "Geometric Silk Jacquard Woven Necktie",
        "slug": "geometric-silk-jacquard-necktie",
        "sku": "AURA-TIE-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "L’Étoile Paris",
        "price": 120,
        "compareAtPrice": 150,
        "costPrice": 50,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 50,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 29,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 22
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Seven-Fold Silk",
        "images": [
          {
            "id": "img-41-1",
            "url": "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=1000&auto=format&fit=crop&q=80",
            "alt": "Geometric Silk Jacquard Woven Necktie view 1",
            "isPrimary": true
          },
          {
            "id": "img-41-2",
            "url": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1000&auto=format&fit=crop&q=80",
            "alt": "Geometric Silk Jacquard Woven Necktie view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Unlined 7-fold silk construction woven on historic jacquard looms in Como, Italy.",
        "fullDescription": "Ties a full, dimpled knot with perfect weight and memory drape.",
        "specifications": {
          "Silk": "100% Como Silk Jacquard (350 GSM)",
          "Width": "8.0 cm (Classic Blade)",
          "Origin": "Como, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Onyx Black",
          "gender": "Men"
        },
        "tags": [
          "tie",
          "silk",
          "necktie",
          "formal",
          "accessories"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-22T17:39:37.980Z"
      },
      {
        "id": "fash-042",
        "title": "Bouclé Wool Structured Cropped Jacket",
        "slug": "boucle-wool-structured-jacket",
        "sku": "AURA-JKT-19",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 460,
        "compareAtPrice": 570,
        "costPrice": 193,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 26,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 20
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Artisan Bouclé",
        "images": [
          {
            "id": "img-42-1",
            "url": "https://images.unsplash.com/photo-1544441893-675973e31985?w=1000&auto=format&fit=crop&q=80",
            "alt": "Bouclé Wool Structured Cropped Jacket view 1",
            "isPrimary": true
          },
          {
            "id": "img-42-2",
            "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=80",
            "alt": "Bouclé Wool Structured Cropped Jacket view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Textured French bouclé with braided metallic fringe trim and jewel-encrusted lion crest buttons.",
        "fullDescription": "A modern tribute to French couture tailoring, cropped to pair with high-waisted trousers.",
        "specifications": {
          "Composition": "78% Virgin Wool, 18% Mohair, 4% Polyamide",
          "Lining": "100% Silk Twill",
          "Buttons": "Hand-Cast Brass Crest",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "S",
          "color": "Ivory Silk",
          "material": "Italian Wool",
          "fit": "Structured Boxy"
        },
        "variants": [
          {
            "id": "var-42-XS-1",
            "sku": "AURA-JKT-19-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-42-XS-2",
            "sku": "AURA-JKT-19-XS-MID",
            "title": "XS / Midnight Black",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-42-S-1",
            "sku": "AURA-JKT-19-S-IVO",
            "title": "S / Ivory Silk",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-42-S-2",
            "sku": "AURA-JKT-19-S-MID",
            "title": "S / Midnight Black",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-42-M-1",
            "sku": "AURA-JKT-19-M-IVO",
            "title": "M / Ivory Silk",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-42-M-2",
            "sku": "AURA-JKT-19-M-MID",
            "title": "M / Midnight Black",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-42-L-1",
            "sku": "AURA-JKT-19-L-IVO",
            "title": "L / Ivory Silk",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-42-L-2",
            "sku": "AURA-JKT-19-L-MID",
            "title": "L / Midnight Black",
            "price": 460,
            "compareAtPrice": 570,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          }
        ],
        "tags": [
          "boucle",
          "jacket",
          "couture",
          "women",
          "tailored"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-20T17:39:37.981Z"
      },
      {
        "id": "fash-043",
        "title": "Minimalist Slim Leather Cardholder",
        "slug": "minimalist-slim-leather-cardholder",
        "sku": "AURA-CRD-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "Bottega Cuoio",
        "price": 85,
        "compareAtPrice": 110,
        "costPrice": 36,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 60,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 95,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 5,
          "4": 17,
          "5": 71
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Everyday Carry",
        "images": [
          {
            "id": "img-43-1",
            "url": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1000&auto=format&fit=crop&q=80",
            "alt": "Minimalist Slim Leather Cardholder view 1",
            "isPrimary": true
          },
          {
            "id": "img-43-2",
            "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&auto=format&fit=crop&q=80",
            "alt": "Minimalist Slim Leather Cardholder view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Ultra-thin profile holding up to 6 cards and folded cash notes in vegetable-tanned French calf.",
        "fullDescription": "Hand-painted edge finishing and hot-stamped gold foil logo detail.",
        "specifications": {
          "Leather": "French Box Calf Leather (0.8mm)",
          "Capacity": "6 Cards + Central Cash Pocket",
          "Dimensions": "10 x 7 cm",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Cognac Tan",
          "gender": "Unisex"
        },
        "variants": [
          {
            "id": "var-43-One Size-1",
            "sku": "AURA-CRD-01-One Size-COG",
            "title": "One Size / Cognac Tan",
            "price": 85,
            "compareAtPrice": 110,
            "stockQuantity": 20,
            "attributes": {
              "size": "One Size",
              "color": "Cognac Tan"
            }
          },
          {
            "id": "var-43-One Size-2",
            "sku": "AURA-CRD-01-One Size-ONY",
            "title": "One Size / Onyx Black",
            "price": 85,
            "compareAtPrice": 110,
            "stockQuantity": 20,
            "attributes": {
              "size": "One Size",
              "color": "Onyx Black"
            }
          },
          {
            "id": "var-43-One Size-3",
            "sku": "AURA-CRD-01-One Size-OLI",
            "title": "One Size / Olive Suede",
            "price": 85,
            "compareAtPrice": 110,
            "stockQuantity": 20,
            "attributes": {
              "size": "One Size",
              "color": "Olive Suede"
            }
          }
        ],
        "tags": [
          "cardholder",
          "wallet",
          "leather",
          "accessories",
          "edc"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-18T17:39:37.981Z"
      },
      {
        "id": "fash-044",
        "title": "Washed French Linen Midi Wrap Dress",
        "slug": "washed-french-linen-wrap-dress",
        "sku": "AURA-DRS-14",
        "categoryId": "cat-fashion-women",
        "brand": "AURA",
        "price": 275,
        "compareAtPrice": 340,
        "costPrice": 116,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 20,
        "lowStockThreshold": 4,
        "rating": 4.7,
        "reviewCount": 42,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 8,
          "5": 32
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Breathable Flax",
        "images": [
          {
            "id": "img-44-1",
            "url": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Washed French Linen Midi Wrap Dress view 1",
            "isPrimary": true
          },
          {
            "id": "img-44-2",
            "url": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1000&auto=format&fit=crop&q=80",
            "alt": "Washed French Linen Midi Wrap Dress view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Self-tie adjustable waist with flutter sleeves and asymmetrical ruffled hem in stone-washed Normandy flax.",
        "fullDescription": "A breezy summer staple that moves gracefully from garden tea to coastal dinner.",
        "specifications": {
          "Composition": "100% Stone-Washed French Linen (190 GSM)",
          "Closure": "True Wrap with Interior Anchor Button",
          "Origin": "Normandy, France",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Ivory Silk",
          "material": "Organic Linen",
          "fit": "Tailored Slim"
        },
        "variants": [
          {
            "id": "var-44-XS-1",
            "sku": "AURA-DRS-14-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-44-XS-2",
            "sku": "AURA-DRS-14-XS-EME",
            "title": "XS / Emerald Forest",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-44-XS-3",
            "sku": "AURA-DRS-14-XS-CAM",
            "title": "XS / Camel Gold",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "XS",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-44-S-1",
            "sku": "AURA-DRS-14-S-IVO",
            "title": "S / Ivory Silk",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-44-S-2",
            "sku": "AURA-DRS-14-S-EME",
            "title": "S / Emerald Forest",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-44-S-3",
            "sku": "AURA-DRS-14-S-CAM",
            "title": "S / Camel Gold",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "S",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-44-M-1",
            "sku": "AURA-DRS-14-M-IVO",
            "title": "M / Ivory Silk",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-44-M-2",
            "sku": "AURA-DRS-14-M-EME",
            "title": "M / Emerald Forest",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-44-M-3",
            "sku": "AURA-DRS-14-M-CAM",
            "title": "M / Camel Gold",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "M",
              "color": "Camel Gold"
            }
          },
          {
            "id": "var-44-L-1",
            "sku": "AURA-DRS-14-L-IVO",
            "title": "L / Ivory Silk",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-44-L-2",
            "sku": "AURA-DRS-14-L-EME",
            "title": "L / Emerald Forest",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-44-L-3",
            "sku": "AURA-DRS-14-L-CAM",
            "title": "L / Camel Gold",
            "price": 275,
            "compareAtPrice": 340,
            "stockQuantity": 2,
            "attributes": {
              "size": "L",
              "color": "Camel Gold"
            }
          }
        ],
        "tags": [
          "dress",
          "linen",
          "wrap-dress",
          "summer",
          "women"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-16T17:39:37.981Z"
      },
      {
        "id": "fash-045",
        "title": "Suede Field Utility Jacket with Horn Buttons",
        "slug": "suede-field-utility-jacket",
        "sku": "AURA-JKT-22",
        "categoryId": "cat-fashion-men",
        "brand": "AURA",
        "price": 740,
        "compareAtPrice": 920,
        "costPrice": 311,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 11,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 25,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 19
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Field Edition",
        "images": [
          {
            "id": "img-45-1",
            "url": "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1000&auto=format&fit=crop&q=80",
            "alt": "Suede Field Utility Jacket with Horn Buttons view 1",
            "isPrimary": true
          },
          {
            "id": "img-45-2",
            "url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Suede Field Utility Jacket with Horn Buttons view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Four bellows utility pockets with hidden storm flap, drawstring waist, and velvet-soft goat suede exterior.",
        "fullDescription": "Combines rugged safari utilitarianism with uncompromising Italian craftsmanship.",
        "specifications": {
          "Shell": "100% Goat Suede Leather (0.9mm)",
          "Lining": "100% Cotton Tattersall Check",
          "Origin": "Florence, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "42R",
          "color": "Espresso Brown",
          "material": "Nubuck Leather"
        },
        "variants": [
          {
            "id": "var-45-38R-1",
            "sku": "AURA-JKT-22-38R-ESP",
            "title": "38R / Espresso Brown",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-45-38R-2",
            "sku": "AURA-JKT-22-38R-SLA",
            "title": "38R / Slate Grey",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-45-40R-1",
            "sku": "AURA-JKT-22-40R-ESP",
            "title": "40R / Espresso Brown",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-45-40R-2",
            "sku": "AURA-JKT-22-40R-SLA",
            "title": "40R / Slate Grey",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-45-42R-1",
            "sku": "AURA-JKT-22-42R-ESP",
            "title": "42R / Espresso Brown",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-45-42R-2",
            "sku": "AURA-JKT-22-42R-SLA",
            "title": "42R / Slate Grey",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Slate Grey"
            }
          },
          {
            "id": "var-45-44R-1",
            "sku": "AURA-JKT-22-44R-ESP",
            "title": "44R / Espresso Brown",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-45-44R-2",
            "sku": "AURA-JKT-22-44R-SLA",
            "title": "44R / Slate Grey",
            "price": 740,
            "compareAtPrice": 920,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Slate Grey"
            }
          }
        ],
        "tags": [
          "field-jacket",
          "suede",
          "jacket",
          "menswear",
          "outerwear"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-14T17:39:37.981Z"
      },
      {
        "id": "fash-046",
        "title": "Braided Leather Belt with Brushed Brass Buckle",
        "slug": "braided-leather-belt-brass-buckle",
        "sku": "AURA-BLT-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "Bottega Cuoio",
        "price": 115,
        "compareAtPrice": 140,
        "costPrice": 48,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 42,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 51,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 9,
          "5": 38
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Hand-Braided",
        "images": [
          {
            "id": "img-46-1",
            "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&auto=format&fit=crop&q=80",
            "alt": "Braided Leather Belt with Brushed Brass Buckle view 1",
            "isPrimary": true
          },
          {
            "id": "img-46-2",
            "url": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1000&auto=format&fit=crop&q=80",
            "alt": "Braided Leather Belt with Brushed Brass Buckle view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Eight-strand plaited vegetable-tanned bridle leather with holeless pin fastening for a micro-adjustable fit.",
        "fullDescription": "Supple leather strips hand-woven by master leatherworkers for lifelong durability.",
        "specifications": {
          "Leather": "English Bridle Leather (32mm Width)",
          "Buckle": "Solid Cast Brass with Matte Nickel Brush",
          "Origin": "Walsall, UK",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Cognac Tan",
          "gender": "Unisex"
        },
        "variants": [
          {
            "id": "var-46-One Size-1",
            "sku": "AURA-BLT-01-One Size-COG",
            "title": "One Size / Cognac Tan",
            "price": 115,
            "compareAtPrice": 140,
            "stockQuantity": 21,
            "attributes": {
              "size": "One Size",
              "color": "Cognac Tan"
            }
          },
          {
            "id": "var-46-One Size-2",
            "sku": "AURA-BLT-01-One Size-ONY",
            "title": "One Size / Onyx Black",
            "price": 115,
            "compareAtPrice": 140,
            "stockQuantity": 21,
            "attributes": {
              "size": "One Size",
              "color": "Onyx Black"
            }
          }
        ],
        "tags": [
          "belt",
          "leather",
          "braided",
          "accessories",
          "everyday"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-12T17:39:37.981Z"
      },
      {
        "id": "fash-047",
        "title": "Heeled Strappy Leather Evening Sandals",
        "slug": "heeled-strappy-leather-sandals",
        "sku": "AURA-SHOE-18",
        "categoryId": "cat-fashion-footwear",
        "brand": "AURA",
        "price": 295,
        "compareAtPrice": 360,
        "costPrice": 124,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 18,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 34,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 6,
          "5": 26
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Artisan Footwear",
        "images": [
          {
            "id": "img-47-1",
            "url": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heeled Strappy Leather Evening Sandals view 1",
            "isPrimary": true
          },
          {
            "id": "img-47-2",
            "url": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heeled Strappy Leather Evening Sandals view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Minimalist 75mm stiletto heel with delicate tubular nappa leather crossover straps and padded insole.",
        "fullDescription": "Engineered with balanced arch pitch to dance through nocturnal celebrations in total comfort.",
        "specifications": {
          "Upper": "Metallic Gold Nappa Leather",
          "Heel Height": "75 mm (3.0 Inches)",
          "Insole": "High-Density Memory Foam Cushion",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "8",
          "color": "Chalk White"
        },
        "variants": [
          {
            "id": "var-47-7-1",
            "sku": "AURA-SHOE-18-7-CHA",
            "title": "7 / Chalk White",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "7",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-47-7-2",
            "sku": "AURA-SHOE-18-7-MAT",
            "title": "7 / Matte Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "7",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-47-8-1",
            "sku": "AURA-SHOE-18-8-CHA",
            "title": "8 / Chalk White",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-47-8-2",
            "sku": "AURA-SHOE-18-8-MAT",
            "title": "8 / Matte Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "8",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-47-9-1",
            "sku": "AURA-SHOE-18-9-CHA",
            "title": "9 / Chalk White",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-47-9-2",
            "sku": "AURA-SHOE-18-9-MAT",
            "title": "9 / Matte Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "9",
              "color": "Matte Black"
            }
          },
          {
            "id": "var-47-10-1",
            "sku": "AURA-SHOE-18-10-CHA",
            "title": "10 / Chalk White",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Chalk White"
            }
          },
          {
            "id": "var-47-10-2",
            "sku": "AURA-SHOE-18-10-MAT",
            "title": "10 / Matte Black",
            "price": 295,
            "compareAtPrice": 360,
            "stockQuantity": 2,
            "attributes": {
              "size": "10",
              "color": "Matte Black"
            }
          }
        ],
        "tags": [
          "sandals",
          "heels",
          "eveningwear",
          "footwear",
          "women"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-10T17:39:37.981Z"
      },
      {
        "id": "fash-048",
        "title": "Fine Merino V-Neck Knit Jumper",
        "slug": "fine-merino-v-neck-knit-jumper",
        "sku": "AURA-KNIT-16",
        "categoryId": "cat-fashion-women",
        "brand": "Verona Fine Knits",
        "price": 185,
        "compareAtPrice": 230,
        "costPrice": 78,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 36,
        "lowStockThreshold": 4,
        "rating": 4.8,
        "reviewCount": 56,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 10,
          "5": 42
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Merino Wool",
        "images": [
          {
            "id": "img-48-1",
            "url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fine Merino V-Neck Knit Jumper view 1",
            "isPrimary": true
          },
          {
            "id": "img-48-2",
            "url": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fine Merino V-Neck Knit Jumper view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Refined 16-gauge knit in Australian extrafine merino with ribbed trims and relaxed dropped shoulder.",
        "fullDescription": "An effortless layering hero that pairs seamlessly over crisp collared shirts or worn solo against the skin.",
        "specifications": {
          "Composition": "100% Extrafine Australian Merino (16 GG)",
          "Care": "Hand Wash Cold or Dry Clean",
          "Origin": "Biella, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "M",
          "color": "Ivory Silk",
          "material": "Italian Wool",
          "fit": "Regular Fit"
        },
        "variants": [
          {
            "id": "var-48-XS-1",
            "sku": "AURA-KNIT-16-XS-IVO",
            "title": "XS / Ivory Silk",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "XS",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-48-XS-2",
            "sku": "AURA-KNIT-16-XS-EME",
            "title": "XS / Emerald Forest",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "XS",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-48-XS-3",
            "sku": "AURA-KNIT-16-XS-MID",
            "title": "XS / Midnight Black",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "XS",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-48-S-1",
            "sku": "AURA-KNIT-16-S-IVO",
            "title": "S / Ivory Silk",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "S",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-48-S-2",
            "sku": "AURA-KNIT-16-S-EME",
            "title": "S / Emerald Forest",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "S",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-48-S-3",
            "sku": "AURA-KNIT-16-S-MID",
            "title": "S / Midnight Black",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "S",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-48-M-1",
            "sku": "AURA-KNIT-16-M-IVO",
            "title": "M / Ivory Silk",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "M",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-48-M-2",
            "sku": "AURA-KNIT-16-M-EME",
            "title": "M / Emerald Forest",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "M",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-48-M-3",
            "sku": "AURA-KNIT-16-M-MID",
            "title": "M / Midnight Black",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "M",
              "color": "Midnight Black"
            }
          },
          {
            "id": "var-48-L-1",
            "sku": "AURA-KNIT-16-L-IVO",
            "title": "L / Ivory Silk",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "L",
              "color": "Ivory Silk"
            }
          },
          {
            "id": "var-48-L-2",
            "sku": "AURA-KNIT-16-L-EME",
            "title": "L / Emerald Forest",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "L",
              "color": "Emerald Forest"
            }
          },
          {
            "id": "var-48-L-3",
            "sku": "AURA-KNIT-16-L-MID",
            "title": "L / Midnight Black",
            "price": 185,
            "compareAtPrice": 230,
            "stockQuantity": 3,
            "attributes": {
              "size": "L",
              "color": "Midnight Black"
            }
          }
        ],
        "tags": [
          "merino",
          "knitwear",
          "vneck",
          "sweater",
          "women"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-08T17:39:37.981Z"
      },
      {
        "id": "fash-049",
        "title": "Waxed Heritage Raincoat with Corduroy Collar",
        "slug": "waxed-heritage-raincoat-corduroy",
        "sku": "AURA-COAT-09",
        "categoryId": "cat-fashion-men",
        "brand": "AURA",
        "price": 480,
        "compareAtPrice": 590,
        "costPrice": 202,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 41,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 2,
          "4": 7,
          "5": 31
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Weatherproof",
        "images": [
          {
            "id": "img-49-1",
            "url": "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1000&auto=format&fit=crop&q=80",
            "alt": "Waxed Heritage Raincoat with Corduroy Collar view 1",
            "isPrimary": true
          },
          {
            "id": "img-49-2",
            "url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Waxed Heritage Raincoat with Corduroy Collar view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "6oz Sylkoil waxed cotton with heavy brass two-way zip, handwarmer pockets, and tartan wool lining.",
        "fullDescription": "Time-tested weatherproof protection built for countryside rambles and rainy city mornings.",
        "specifications": {
          "Outer": "6oz Sylkoil Waxed Cotton (Halley Stevensons)",
          "Collar": "100% Cotton Heavy Corduroy",
          "Lining": "100% Brushed Cotton Tartan",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "size": "42R",
          "color": "Charcoal Navy",
          "material": "Egyptian Cotton"
        },
        "variants": [
          {
            "id": "var-49-38R-1",
            "sku": "AURA-COAT-09-38R-CHA",
            "title": "38R / Charcoal Navy",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-49-38R-2",
            "sku": "AURA-COAT-09-38R-ESP",
            "title": "38R / Espresso Brown",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "38R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-49-40R-1",
            "sku": "AURA-COAT-09-40R-CHA",
            "title": "40R / Charcoal Navy",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-49-40R-2",
            "sku": "AURA-COAT-09-40R-ESP",
            "title": "40R / Espresso Brown",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "40R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-49-42R-1",
            "sku": "AURA-COAT-09-42R-CHA",
            "title": "42R / Charcoal Navy",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-49-42R-2",
            "sku": "AURA-COAT-09-42R-ESP",
            "title": "42R / Espresso Brown",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "42R",
              "color": "Espresso Brown"
            }
          },
          {
            "id": "var-49-44R-1",
            "sku": "AURA-COAT-09-44R-CHA",
            "title": "44R / Charcoal Navy",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Charcoal Navy"
            }
          },
          {
            "id": "var-49-44R-2",
            "sku": "AURA-COAT-09-44R-ESP",
            "title": "44R / Espresso Brown",
            "price": 480,
            "compareAtPrice": 590,
            "stockQuantity": 2,
            "attributes": {
              "size": "44R",
              "color": "Espresso Brown"
            }
          }
        ],
        "tags": [
          "waxed-jacket",
          "raincoat",
          "outerwear",
          "menswear",
          "heritage"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-06T17:39:37.981Z"
      },
      {
        "id": "fash-050",
        "title": "Hand-Cast Sterling Silver Signet Ring",
        "slug": "hand-cast-sterling-silver-signet-ring",
        "sku": "AURA-RNG-01",
        "categoryId": "cat-fashion-accessories",
        "brand": "AURA",
        "price": 145,
        "compareAtPrice": 180,
        "costPrice": 61,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 30,
        "lowStockThreshold": 4,
        "rating": 4.9,
        "reviewCount": 28,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 21
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Solid 925 Silver",
        "images": [
          {
            "id": "img-50-1",
            "url": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Cast Sterling Silver Signet Ring view 1",
            "isPrimary": true
          },
          {
            "id": "img-50-2",
            "url": "https://images.unsplash.com/photo-1611591475878-a7346123497d?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hand-Cast Sterling Silver Signet Ring view 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Solid 925 sterling silver lost-wax cast signet ring with hand-engraved brushed plateau face.",
        "fullDescription": "Substantial weight and ergonomic contour that rests naturally against the finger.",
        "specifications": {
          "Metal": "Solid 925 Sterling Silver (14g)",
          "Face": "14mm x 12mm Cushion Plateau",
          "Origin": "Arezzo, Italy",
          "Shipping": "Complimentary carbon-neutral worldwide courier delivery",
          "Sustainability": "OEKO-TEX Standard 100 & Certified Circular Materials"
        },
        "attributes": {
          "color": "Onyx Black",
          "gender": "Unisex"
        },
        "tags": [
          "ring",
          "signet",
          "silver",
          "jewelry",
          "accessories"
        ],
        "sellerId": "vendor-aura-flagship",
        "warranty": "Lifetime stitching and button repair guarantee",
        "returnPolicy": "30-day complimentary return or exchange in original garment bag",
        "createdAt": "2026-08-04T17:39:37.981Z"
      }
    ],
    "banners": [
      {
        "id": "ban-f1",
        "title": "Autumnal Serenade",
        "subtitle": "Pure Cashmere & Heavy Silks Handcrafted for the Season",
        "tag": "NEW RUNWAY DROP",
        "ctaText": "Explore Collection",
        "linkCategory": "cat-fashion-women",
        "image": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#c19a6b",
        "overlayGradient": "from-black/80 via-black/40 to-transparent"
      },
      {
        "id": "ban-f2",
        "title": "The Sartorial Masterclass",
        "subtitle": "Bespoke-Trained Suiting and Hand-Stitched Leather Accessories",
        "tag": "CRAFT & HERITAGE",
        "ctaText": "Discover Tailoring",
        "linkCategory": "cat-fashion-men",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#566573",
        "overlayGradient": "from-stone-950/85 via-stone-900/50 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-aura-flagship",
        "name": "AURA Direct",
        "slug": "aura-flagship",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.9,
        "reviewCount": 412,
        "salesCount": 3200,
        "description": "Official flagship boutique of AURA haute couture and ready-to-wear luxury collections.",
        "location": "Paris, France",
        "commissionRate": 10,
        "joinedDate": "2023-01-10",
        "email": "concierge@aura-boutique.com",
        "phone": "+33 1 42 68 55 00",
        "balance": 14250,
        "payoutMethod": "SEPA Direct Wire (FR76...)",
        "isVerified": true
      },
      {
        "id": "vendor-sartoria",
        "name": "Sartoria Milano",
        "slug": "sartoria-milano",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.85,
        "reviewCount": 189,
        "salesCount": 1450,
        "description": "Generational Milanese tailor guild delivering handcrafted suits and traditional Italian shoemaking.",
        "location": "Milan, Italy",
        "commissionRate": 12,
        "joinedDate": "2023-06-15",
        "email": "orders@sartoriamilano.it",
        "phone": "+39 02 876 543",
        "balance": 8900,
        "payoutMethod": "Bank Wire Transfer",
        "isVerified": true
      },
      {
        "id": "vendor-cuoio",
        "name": "Cuoio Firenze Leather",
        "slug": "cuoio-firenze",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.95,
        "reviewCount": 96,
        "salesCount": 880,
        "description": "Family tannery and leather workshop producing certified vegetable-tanned travel goods along the Arno river.",
        "location": "Florence, Italy",
        "commissionRate": 10,
        "joinedDate": "2024-02-01",
        "email": "bottega@cuoiofirenze.it",
        "phone": "+39 055 234 567",
        "balance": 4120,
        "payoutMethod": "Stripe Direct",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "post-1",
        "title": "The Anatomy of Pure Cashmere: Why Micron Count Matters",
        "slug": "cashmere-micron-guide",
        "excerpt": "Discover why 14-micron Mongolian fibers provide superior loft, resistance to pilling, and thermal insulation over synthetic blends.",
        "content": "True luxury lies in the fiber. When evaluating high-grade knitwear, fiber diameter (measured in microns) and staple length dictate both longevity and hand-feel...",
        "coverImage": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Camille Laurent",
          "role": "Creative Director",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 18, 2026",
        "category": "Materials & Craft",
        "tags": [
          "Cashmere",
          "Sustainability",
          "Care Guide"
        ],
        "readTime": "4 min read"
      },
      {
        "id": "post-2",
        "title": "Building a Capsule Wardrobe for the Global Traveler",
        "slug": "travel-capsule-wardrobe",
        "excerpt": "Five crease-resistant pieces that form twelve distinct ensembles from boardroom presentations to weekend escapes.",
        "content": "Packing with intention transforms travel. By anchoring around high-twist wool blazers and silk slip dresses...",
        "coverImage": "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Matteo Rossi",
          "role": "Senior Stylist",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 10, 2026",
        "category": "Styling Editorial",
        "tags": [
          "Travel",
          "Capsule Wardrobe",
          "Menswear"
        ],
        "readTime": "6 min read"
      }
    ]
  },
  "electronics": {
    "id": "electronics",
    "name": "NEXUS Quantum",
    "tagline": "Next-Gen Performance Hardware & Pro Creator Gear",
    "categoryTag": "Electronics & Hardware",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "electronics",
      "primaryColor": "#0f172a",
      "primaryHover": "#1e293b",
      "secondaryColor": "#64748b",
      "accentColor": "#0284c7",
      "surfaceColor": "#ffffff",
      "surfaceElevated": "#f8fafc",
      "textColor": "#020617",
      "textMuted": "#64748b",
      "borderColor": "#e2e8f0",
      "fontDisplay": "Space Grotesk, system-ui, sans-serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-xl",
      "shadowIntensity": "shadow-md",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-elec-laptops",
        "name": "Laptops & Workstations",
        "slug": "laptops-workstations",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
        "bannerImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=80",
        "description": "Ultra-thin AI workstations, OLED creator laptops, and high-FPS gaming rigs.",
        "allowedUnits": [
          "piece"
        ],
        "attributes": [
          {
            "key": "processor",
            "label": "Processor Architecture",
            "type": "select",
            "options": [
              "Apple M4 Max",
              "Intel Core Ultra 9",
              "AMD Ryzen AI 9 HX",
              "Snapdragon X Elite"
            ],
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "ram",
            "label": "Unified RAM",
            "type": "select",
            "options": [
              "16GB",
              "32GB",
              "64GB",
              "128GB"
            ],
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "storage",
            "label": "NVMe SSD Storage",
            "type": "select",
            "options": [
              "512GB SSD",
              "1TB PCIe 5.0",
              "2TB PCIe 5.0",
              "4TB Pro Array"
            ],
            "filterable": true,
            "displayInSpec": true,
            "required": true
          },
          {
            "key": "screen_size",
            "label": "Display Dimension",
            "type": "select",
            "options": [
              "14-inch OLED",
              "16-inch Mini-LED 165Hz",
              "18-inch 4K HDR"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-elec-audio",
        "name": "Audiophile & Studio Sound",
        "slug": "audio-sound",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
        "description": "Lossless planar magnetic headphones, wireless active noise-cancelling monitors, and DAC amplifiers.",
        "allowedUnits": [
          "piece",
          "pair"
        ],
        "attributes": [
          {
            "key": "connectivity",
            "label": "Connectivity",
            "type": "select",
            "options": [
              "Bluetooth 5.4 + LDAC",
              "Wired 3.5mm / 4.4mm Balanced",
              "Lossless 2.4GHz Ultra-Low Latency"
            ],
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "battery_life",
            "label": "Battery Endurance",
            "type": "select",
            "options": [
              "30+ Hours ANC",
              "50+ Hours Ultra Mode",
              "Wired (No Battery)"
            ],
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "color",
            "label": "Chassis Finish",
            "type": "color",
            "options": [
              "Titanium Grey",
              "Matte Carbon",
              "Cyber Silver"
            ],
            "colorCodes": {
              "Titanium Grey": "#475569",
              "Matte Carbon": "#0f172a",
              "Cyber Silver": "#cbd5e1"
            },
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-elec-wearables",
        "name": "Biometric & Smart Wearables",
        "slug": "smart-wearables",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
        "description": "Titanium ECG smart rings, sapphire OLED sports watches, and spatial audio smart glasses.",
        "allowedUnits": [
          "piece"
        ],
        "attributes": [
          {
            "key": "battery_life",
            "label": "Battery Endurance",
            "type": "select",
            "options": [
              "7 Days",
              "14 Days Ultra",
              "30 Days Solar"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-elec-accessories",
        "name": "Pro Displays & Studio Gear",
        "slug": "displays-studio-gear",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
        "description": "Quantum Dot OLED monitors, mechanical keyboards, and Thunderbolt 5 docks.",
        "allowedUnits": [
          "piece"
        ],
        "attributes": [
          {
            "key": "compatibility",
            "label": "OS Compatibility",
            "type": "select",
            "options": [
              "Universal (iOS & Android)",
              "Windows / macOS / Linux",
              "Cross-Platform"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      }
    ],
    "products": [
      {
        "id": "elec-001",
        "title": "NEXUS ProBook 16 Studio Edition (M4 Pro / 64GB / 2TB)",
        "slug": "nexus-probook-16-studio",
        "sku": "NEXUS-PB16-01",
        "categoryId": "cat-elec-laptops",
        "brand": "NEXUS Technologies",
        "price": 2499,
        "compareAtPrice": 2799,
        "costPrice": 1650,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "lowStockThreshold": 3,
        "rating": 4.95,
        "reviewCount": 64,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 1,
          "4": 8,
          "5": 54
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Flagship Creator",
        "images": [
          {
            "id": "eimg-1-1",
            "url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&auto=format&fit=crop&q=80",
            "alt": "NEXUS ProBook 16 Studio Edition (M4 Pro / 64GB / 2TB) - View 1",
            "isPrimary": true
          },
          {
            "id": "eimg-1-2",
            "url": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=80",
            "alt": "NEXUS ProBook 16 Studio Edition (M4 Pro / 64GB / 2TB) - View 2",
            "isPrimary": false
          }
        ],
        "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        "shortDescription": "16.2-inch Liquid Retina XDR 120Hz display with 16-core CPU, 40-core GPU, vapor chamber cooling, and 22-hour battery life.",
        "fullDescription": "Engineered for 8K video render pipelines, local LLM quantization, and complex 3D ray tracing. Features hardware-accelerated ProRes encoders, 3x Thunderbolt 5 ports, MagSafe 3 charging, and studio-grade triple microphone array.",
        "specifications": {
          "Processor": "Apple M4 Max (16-Core CPU, 40-Core GPU, 16-Core Neural Engine)",
          "Unified Memory": "64GB Fast 400GB/s Unified Bandwidth",
          "Storage": "2TB PCIe Gen 5 SSD (7,400 MB/s Read)",
          "Display": "16.2” 3456x2234 Liquid Retina XDR, 1,600 nits peak HDR, 120Hz ProMotion",
          "Ports": "3x Thunderbolt 5 (USB-C), HDMI 2.1, SDXC Card Slot, 3.5mm Headphone Jack",
          "Battery": "100Wh Lithium-Polymer (up to 22 hrs video playback)",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Apple M4 Max",
          "ram": "64GB",
          "storage": "2TB PCIe 5.0",
          "screen_size": "16-inch Mini-LED 165Hz"
        },
        "variants": [
          {
            "id": "var-e-1-0-0",
            "sku": "NEXUS-PB16-01-32GB-1TBPCIe5.0",
            "title": "32GB RAM / 1TB PCIe 5.0",
            "price": 2499,
            "compareAtPrice": 2799,
            "stockQuantity": 14,
            "attributes": {
              "ram": "32GB",
              "storage": "1TB PCIe 5.0"
            }
          },
          {
            "id": "var-e-1-0-1",
            "sku": "NEXUS-PB16-01-32GB-2TBPCIe5.0",
            "title": "32GB RAM / 2TB PCIe 5.0",
            "price": 2749,
            "compareAtPrice": 3049,
            "stockQuantity": 13,
            "attributes": {
              "ram": "32GB",
              "storage": "2TB PCIe 5.0"
            }
          },
          {
            "id": "var-e-1-0-2",
            "sku": "NEXUS-PB16-01-32GB-4TBProArray",
            "title": "32GB RAM / 4TB Pro Array",
            "price": 2999,
            "compareAtPrice": 3299,
            "stockQuantity": 12,
            "attributes": {
              "ram": "32GB",
              "storage": "4TB Pro Array"
            }
          },
          {
            "id": "var-e-1-1-0",
            "sku": "NEXUS-PB16-01-64GB-1TBPCIe5.0",
            "title": "64GB RAM / 1TB PCIe 5.0",
            "price": 2799,
            "compareAtPrice": 3099,
            "stockQuantity": 13,
            "attributes": {
              "ram": "64GB",
              "storage": "1TB PCIe 5.0"
            }
          },
          {
            "id": "var-e-1-1-1",
            "sku": "NEXUS-PB16-01-64GB-2TBPCIe5.0",
            "title": "64GB RAM / 2TB PCIe 5.0",
            "price": 3049,
            "compareAtPrice": 3349,
            "stockQuantity": 12,
            "attributes": {
              "ram": "64GB",
              "storage": "2TB PCIe 5.0"
            }
          },
          {
            "id": "var-e-1-1-2",
            "sku": "NEXUS-PB16-01-64GB-4TBProArray",
            "title": "64GB RAM / 4TB Pro Array",
            "price": 3299,
            "compareAtPrice": 3599,
            "stockQuantity": 11,
            "attributes": {
              "ram": "64GB",
              "storage": "4TB Pro Array"
            }
          },
          {
            "id": "var-e-1-2-0",
            "sku": "NEXUS-PB16-01-128GB-1TBPCIe5.0",
            "title": "128GB RAM / 1TB PCIe 5.0",
            "price": 3099,
            "compareAtPrice": 3399,
            "stockQuantity": 12,
            "attributes": {
              "ram": "128GB",
              "storage": "1TB PCIe 5.0"
            }
          },
          {
            "id": "var-e-1-2-1",
            "sku": "NEXUS-PB16-01-128GB-2TBPCIe5.0",
            "title": "128GB RAM / 2TB PCIe 5.0",
            "price": 3349,
            "compareAtPrice": 3649,
            "stockQuantity": 11,
            "attributes": {
              "ram": "128GB",
              "storage": "2TB PCIe 5.0"
            }
          },
          {
            "id": "var-e-1-2-2",
            "sku": "NEXUS-PB16-01-128GB-4TBProArray",
            "title": "128GB RAM / 4TB Pro Array",
            "price": 3599,
            "compareAtPrice": 3899,
            "stockQuantity": 10,
            "attributes": {
              "ram": "128GB",
              "storage": "4TB Pro Array"
            }
          }
        ],
        "tags": [
          "laptop",
          "workstation",
          "creator",
          "ai",
          "high-performance"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-11-10T17:39:37.984Z"
      },
      {
        "id": "elec-002",
        "title": "Titan Apex 18 Dual-Chamber AI Overclocked Rig",
        "slug": "titan-apex-18-workstation",
        "sku": "TITAN-APX-18",
        "categoryId": "cat-elec-laptops",
        "brand": "Titan Dynamics",
        "price": 3299,
        "compareAtPrice": 3599,
        "costPrice": 2100,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 8,
        "lowStockThreshold": 3,
        "rating": 4.92,
        "reviewCount": 38,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 32
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "RTX 4090 Mobile",
        "images": [
          {
            "id": "eimg-2-1",
            "url": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1000&auto=format&fit=crop&q=80",
            "alt": "Titan Apex 18 Dual-Chamber AI Overclocked Rig - View 1",
            "isPrimary": true
          },
          {
            "id": "eimg-2-2",
            "url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1000&auto=format&fit=crop&q=80",
            "alt": "Titan Apex 18 Dual-Chamber AI Overclocked Rig - View 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "18-inch 4K Mini-LED 240Hz monster featuring Intel Core Ultra 9 185H, RTX 4090 175W TGP, and 128GB DDR5.",
        "fullDescription": "Industrial CNC milled magnesium alloy chassis with liquid metal thermal interface and quad-fan airflow tunnel. Designed for scientific simulations, unreal engine virtual production, and AAA game development.",
        "specifications": {
          "Processor": "Intel Core Ultra 9 185H (24 cores, up to 5.8 GHz Turbo)",
          "GPU": "NVIDIA GeForce RTX 4090 Laptop GPU 16GB GDDR6 (175W Max TGP)",
          "Memory": "128GB Dual-Channel DDR5-5600 MHz",
          "Display": "18.0” 4K UHD+ 3840x2400 100% DCI-P3 240Hz 3ms",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Intel Core Ultra 9",
          "ram": "128GB",
          "storage": "4TB Pro Array",
          "screen_size": "18-inch 4K HDR"
        },
        "tags": [
          "laptop",
          "rtx4090",
          "4k",
          "gaming",
          "unreal-engine"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-11-08T17:39:37.984Z"
      },
      {
        "id": "elec-003",
        "title": "AuraBook Air 14 Featherlight Magnesium OLED",
        "slug": "aurabook-air-14-oled",
        "sku": "AURA-AIR-14",
        "categoryId": "cat-elec-laptops",
        "brand": "AURA Tech",
        "price": 1499,
        "compareAtPrice": 1699,
        "costPrice": 974,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "lowStockThreshold": 3,
        "rating": 4.88,
        "reviewCount": 52,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 6,
          "5": 43
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-3-1",
            "url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&auto=format&fit=crop&q=80",
            "alt": "AuraBook Air 14 Featherlight Magnesium OLED - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "0.98 kg ultraportable with 14-inch 2.8K 120Hz OLED, Snapdragon X Elite NPU, and 28-hour battery.",
        "fullDescription": "Crafted from aerospace magnesium-lithium alloy. Instant wakeup, silent fanless thermal architecture, and 45 TOPS on-device neural processing engine.",
        "specifications": {
          "Weight": "980 grams (2.16 lbs)",
          "Processor": "Snapdragon X Elite 12-Core 4.0 GHz",
          "Display": "14.0” 2880x1800 120Hz Pure OLED 600 nits HDR",
          "Battery Life": "Up to 28 hours video playback",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Snapdragon X Elite",
          "ram": "32GB",
          "storage": "1TB PCIe 5.0",
          "screen_size": "14-inch OLED"
        },
        "tags": [
          "ultrabook",
          "oled",
          "fanless",
          "lightweight",
          "travel"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-11-06T17:39:37.984Z"
      },
      {
        "id": "elec-004",
        "title": "Vanguard Creator 16 Studio AMD Ryzen AI 9",
        "slug": "vanguard-creator-16-ryzen",
        "sku": "VAN-CR-16",
        "categoryId": "cat-elec-laptops",
        "brand": "Vanguard Computing",
        "price": 1899,
        "compareAtPrice": 2099,
        "costPrice": 1234,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 17,
        "lowStockThreshold": 3,
        "rating": 4.86,
        "reviewCount": 41,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 34
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-4-1",
            "url": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=80",
            "alt": "Vanguard Creator 16 Studio AMD Ryzen AI 9 - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "AMD Ryzen AI 9 HX 370 with Radeon 890M, 64GB LPDDR5X, and 16-inch 3.2K 165Hz IPS color-graded display.",
        "fullDescription": "Calibrated Delta E < 0.8 with Calman certification. Full size SD 8.0 card reader, glass haptic trackpad, and Dolby Atmos quad speakers.",
        "specifications": {
          "Processor": "AMD Ryzen AI 9 HX 370 (12 cores / 24 threads, 50 TOPS NPU)",
          "Display": "16.0” 3200x2000 165Hz 100% AdobeRGB Calibrated",
          "RAM": "64GB LPDDR5X-7500 MHz",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "AMD Ryzen AI 9 HX",
          "ram": "64GB",
          "storage": "2TB PCIe 5.0",
          "screen_size": "16-inch Mini-LED 165Hz"
        },
        "tags": [
          "creator",
          "ryzen",
          "calibrated",
          "editing",
          "color-accurate"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-11-04T17:39:37.984Z"
      },
      {
        "id": "elec-005",
        "title": "NEXUS MiniCube Pro Compact AI Edge Server",
        "slug": "nexus-minicube-pro-edge-server",
        "sku": "NEX-CUBE-01",
        "categoryId": "cat-elec-laptops",
        "brand": "NEXUS Technologies",
        "price": 1299,
        "costPrice": 844,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 19,
        "lowStockThreshold": 3,
        "rating": 4.94,
        "reviewCount": 29,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 24
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "eimg-5-1",
            "url": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000&auto=format&fit=crop&q=80",
            "alt": "NEXUS MiniCube Pro Compact AI Edge Server - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Anodized aluminum 1.5-liter mini workstation with dual 10GbE LAN, 64GB RAM, and 70W low-noise cooling.",
        "fullDescription": "Ideal for local homelab hosting, container clusters, Plex 4K transcoding, and edge inference. Features dual NVMe Gen4 slots and 4x USB4 ports.",
        "specifications": {
          "Form Factor": "1.5 Liter Solid CNC Billet Aluminum",
          "Networking": "Dual 10GbE Aquantia Ethernet + WiFi 7",
          "RAM": "64GB DDR5 SO-DIMM",
          "Storage": "2TB NVMe PCIe 4.0 SSD",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "AMD Ryzen AI 9 HX",
          "ram": "64GB",
          "storage": "2TB PCIe 5.0"
        },
        "tags": [
          "minipc",
          "homelab",
          "server",
          "edge-ai",
          "compact"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-11-02T17:39:37.985Z"
      },
      {
        "id": "elec-006",
        "title": "CyberDeck Foldable Dual-OLED Touchscreen Mobile Station",
        "slug": "cyberdeck-foldable-dual-oled",
        "sku": "CYB-FL-02",
        "categoryId": "cat-elec-laptops",
        "brand": "FutureTech Labs",
        "price": 2199,
        "compareAtPrice": 2499,
        "costPrice": 1429,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 9,
        "lowStockThreshold": 3,
        "rating": 4.81,
        "reviewCount": 23,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 19
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Dual Screen",
        "images": [
          {
            "id": "eimg-6-1",
            "url": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1000&auto=format&fit=crop&q=80",
            "alt": "CyberDeck Foldable Dual-OLED Touchscreen Mobile Station - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Dual 13.3-inch 2.8K Tandem OLED touchscreens with detachable Bluetooth magnetic keyboard and stylus.",
        "fullDescription": "Transform from a 13-inch clamshell into an expansive 18-inch dual vertical stack workspace in coffee shops or flights.",
        "specifications": {
          "Displays": "2x 13.3” 2.8K 120Hz Pure OLED (Total 18” equivalent)",
          "Accessories": "Active Stylus 4096 pressure levels + Wireless Magnetic Keyboard",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Intel Core Ultra 9",
          "ram": "32GB",
          "storage": "1TB PCIe 5.0",
          "screen_size": "14-inch OLED"
        },
        "tags": [
          "dual-screen",
          "foldable",
          "innovative",
          "oled",
          "touch"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-31T17:39:37.985Z"
      },
      {
        "id": "elec-007",
        "title": "MatrixBlade 15 Ultra-Slim GPU Workstation",
        "slug": "matrixblade-15-ultra-slim",
        "sku": "MTX-BL-15",
        "categoryId": "cat-elec-laptops",
        "brand": "Titan Dynamics",
        "price": 2299,
        "costPrice": 1494,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 12,
        "lowStockThreshold": 3,
        "rating": 4.89,
        "reviewCount": 37,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 31
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-7-1",
            "url": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1000&auto=format&fit=crop&q=80",
            "alt": "MatrixBlade 15 Ultra-Slim GPU Workstation - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "15.6mm thin unibody housing RTX 4080 140W and 240Hz QHD OLED display with per-key RGB mechanical switches.",
        "fullDescription": "Custom vapor chamber with 0.05mm ultra-thin copper fins. Delivers desktop-grade rendering speed inside a svelte 1.8 kg chassis.",
        "specifications": {
          "GPU": "NVIDIA RTX 4080 Mobile 12GB GDDR6",
          "Display": "15.6” 2560x1440 240Hz 0.2ms OLED",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Intel Core Ultra 9",
          "ram": "32GB",
          "storage": "2TB PCIe 5.0",
          "screen_size": "16-inch Mini-LED 165Hz"
        },
        "tags": [
          "laptop",
          "thin",
          "rtx4080",
          "gaming",
          "oled"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-29T17:39:37.985Z"
      },
      {
        "id": "elec-008",
        "title": "Zenith Studio Desk Tower Liquid-Cooled 96-Core Threadripper",
        "slug": "zenith-studio-desk-threadripper",
        "sku": "ZEN-DSK-96",
        "categoryId": "cat-elec-laptops",
        "brand": "Titan Dynamics",
        "price": 6499,
        "compareAtPrice": 6999,
        "costPrice": 4224,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 4,
        "lowStockThreshold": 3,
        "rating": 4.98,
        "reviewCount": 18,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 15
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Enterprise Grade",
        "images": [
          {
            "id": "eimg-8-1",
            "url": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000&auto=format&fit=crop&q=80",
            "alt": "Zenith Studio Desk Tower Liquid-Cooled 96-Core Threadripper - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "AMD Threadripper PRO 7995WX 96-core, 256GB ECC DDR5, Dual RTX 4090 24GB NVLink, and 360mm custom loop.",
        "fullDescription": "Built for VFX studios, photogrammetry, climate modeling, and 400B parameter LLM fine-tuning. Whisper-quiet under sustained 800W draw.",
        "specifications": {
          "CPU": "AMD Ryzen Threadripper PRO 7995WX (96 Cores / 192 Threads)",
          "GPUs": "2x NVIDIA GeForce RTX 4090 24GB",
          "RAM": "256GB 8-Channel ECC Registered DDR5-5200",
          "Storage": "8TB (2x 4TB PCIe Gen5 RAID-0) 14,000 MB/s",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "AMD Ryzen AI 9 HX",
          "ram": "128GB",
          "storage": "4TB Pro Array"
        },
        "tags": [
          "workstation",
          "threadripper",
          "dual-gpu",
          "ai",
          "vfx"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-27T17:39:37.985Z"
      },
      {
        "id": "elec-009",
        "title": "AuraTab Pro 13-inch Tandem OLED Stylus Tablet",
        "slug": "auratab-pro-13-oled-tablet",
        "sku": "AUR-TAB-13",
        "categoryId": "cat-elec-laptops",
        "brand": "AURA Tech",
        "price": 999,
        "compareAtPrice": 1149,
        "costPrice": 649,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 26,
        "lowStockThreshold": 3,
        "rating": 4.91,
        "reviewCount": 77,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 2,
          "4": 9,
          "5": 64
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-9-1",
            "url": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000&auto=format&fit=crop&q=80",
            "alt": "AuraTab Pro 13-inch Tandem OLED Stylus Tablet - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "5.1mm ultra-thin slate with 13-inch 120Hz tandem OLED, pressure stylus, and desktop windowing OS.",
        "fullDescription": "Zero latency digital canvas for concept artists and UI illustrators. Includes magnetic active stylus with 8,192 tilt levels.",
        "specifications": {
          "Display": "13.0” 2752x2064 Ultra Retina Tandem OLED 1600 nits",
          "Weight": "580 grams",
          "Stylus": "Zero-Lag 8192 Pressure Tilt Sensitive Haptic Pen",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Apple M4 Max",
          "ram": "16GB",
          "storage": "512GB SSD",
          "screen_size": "14-inch OLED"
        },
        "tags": [
          "tablet",
          "stylus",
          "illustration",
          "oled",
          "portable"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-25T17:39:37.985Z"
      },
      {
        "id": "elec-010",
        "title": "QuantumBook 14 Carbon Fiber Developer Special",
        "slug": "quantumbook-14-carbon-fiber",
        "sku": "QNT-BK-14",
        "categoryId": "cat-elec-laptops",
        "brand": "NEXUS Technologies",
        "price": 1699,
        "costPrice": 1104,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 15,
        "lowStockThreshold": 3,
        "rating": 4.87,
        "reviewCount": 45,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 37
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-10-1",
            "url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&auto=format&fit=crop&q=80",
            "alt": "QuantumBook 14 Carbon Fiber Developer Special - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "100% Linux hardware compatibility out of the box with Coreboot open firmware and swappable modular ports.",
        "fullDescription": "Custom carbon fiber lid with tactile 1.8mm travel mechanical keyboard and dedicated physical camera/mic kill-switches.",
        "specifications": {
          "OS": "Ubuntu LTS / Fedora / Arch Linux Certified or Windows 11 Pro",
          "Firmware": "Open-Source Coreboot + Embedded Controller",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "AMD Ryzen AI 9 HX",
          "ram": "32GB",
          "storage": "1TB PCIe 5.0",
          "screen_size": "14-inch OLED"
        },
        "tags": [
          "linux",
          "open-source",
          "carbon-fiber",
          "developer",
          "modular"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-23T17:39:37.985Z"
      },
      {
        "id": "elec-011",
        "title": "OmniStation X Mobile Rendering Suitcase Rig",
        "slug": "omnistation-x-mobile-rendering-rig",
        "sku": "OMN-STN-01",
        "categoryId": "cat-elec-laptops",
        "brand": "Titan Dynamics",
        "price": 4899,
        "costPrice": 3184,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 5,
        "lowStockThreshold": 3,
        "rating": 4.96,
        "reviewCount": 14,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 12
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "eimg-11-1",
            "url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1000&auto=format&fit=crop&q=80",
            "alt": "OmniStation X Mobile Rendering Suitcase Rig - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Pelican case certified rugged on-set DIT station with 3x hot-swappable U.2 NVMe sleds and SDI 12G capture.",
        "fullDescription": "Designed for Hollywood production trucks and broadcast streaming units. IP67 weather-sealed lid with anti-vibration rubber isolation.",
        "specifications": {
          "Ingress Protection": "IP67 Water & Dust Resistant Pelican Shell",
          "Capture": "Quad Blackmagic DeckLink 12G-SDI In/Out",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Intel Core Ultra 9",
          "ram": "128GB",
          "storage": "4TB Pro Array"
        },
        "tags": [
          "dit",
          "broadcast",
          "rugged",
          "filmmaking",
          "heavy-duty"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-21T17:39:37.985Z"
      },
      {
        "id": "elec-012",
        "title": "AeroBook Pro 15 Thin & Light Silent Workhorse",
        "slug": "aerobook-pro-15-silent-workhorse",
        "sku": "AERO-BK-15",
        "categoryId": "cat-elec-laptops",
        "brand": "AURA Tech",
        "price": 1399,
        "compareAtPrice": 1549,
        "costPrice": 909,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 20,
        "lowStockThreshold": 3,
        "rating": 4.84,
        "reviewCount": 36,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 30
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-12-1",
            "url": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=80",
            "alt": "AeroBook Pro 15 Thin & Light Silent Workhorse - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Sub-20dB acoustic profile at full load with 15.3-inch 120Hz IPS, 32GB RAM, and 90Wh battery.",
        "fullDescription": "Crafted for focused writing, academic research, and full-stack web development without thermal throttling.",
        "specifications": {
          "Display": "15.3” 2880x1864 120Hz 500 nits IPS",
          "Acoustics": "< 20dB at 100% sustained CPU load",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Snapdragon X Elite",
          "ram": "32GB",
          "storage": "1TB PCIe 5.0",
          "screen_size": "16-inch Mini-LED 165Hz"
        },
        "tags": [
          "silent",
          "workhorse",
          "battery-life",
          "developer",
          "aluminum"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-19T17:39:37.986Z"
      },
      {
        "id": "elec-013",
        "title": "SpectraBook 17 Dual-Screen Colorist Reference Laptop",
        "slug": "spectrabook-17-colorist-reference",
        "sku": "SPC-BK-17",
        "categoryId": "cat-elec-laptops",
        "brand": "Vanguard Computing",
        "price": 2799,
        "costPrice": 1819,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 7,
        "lowStockThreshold": 3,
        "rating": 4.93,
        "reviewCount": 21,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 18
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-13-1",
            "url": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1000&auto=format&fit=crop&q=80",
            "alt": "SpectraBook 17 Dual-Screen Colorist Reference Laptop - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "17.3-inch 4K Mini-LED 1000-zone local dimming screen paired with a secondary 8-inch color scope panel.",
        "fullDescription": "Built in collaboration with DaVinci Resolve colorists. Includes hardware LUT calibration sensor built into the bezel.",
        "specifications": {
          "Primary Panel": "17.3” 3840x2160 Mini-LED 1000-zone 120Hz 1000 nits HDR",
          "Secondary Panel": "8.0” 1920x1080 Touch Scope & Waveform Display",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "processor": "Apple M4 Max",
          "ram": "64GB",
          "storage": "2TB PCIe 5.0",
          "screen_size": "18-inch 4K HDR"
        },
        "tags": [
          "colorist",
          "davinci-resolve",
          "mini-led",
          "4k",
          "hdr"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-17T17:39:37.986Z"
      },
      {
        "id": "elec-014",
        "title": "AERO Planar Wireless Spatial ANC Studio Headphones",
        "slug": "aero-planar-wireless-headphones",
        "sku": "AERO-NC-900",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 449,
        "compareAtPrice": 529,
        "costPrice": 292,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "lowStockThreshold": 3,
        "rating": 4.88,
        "reviewCount": 92,
        "ratingDistribution": {
          "1": 2,
          "2": 1,
          "3": 2,
          "4": 11,
          "5": 76
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Spatial Lossless",
        "images": [
          {
            "id": "eimg-14-1",
            "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=80",
            "alt": "AERO Planar Wireless Spatial ANC Studio Headphones - View 1",
            "isPrimary": true
          },
          {
            "id": "eimg-14-2",
            "url": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1000&auto=format&fit=crop&q=80",
            "alt": "AERO Planar Wireless Spatial ANC Studio Headphones - View 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Custom 50mm Planar Magnetic drivers delivering 5Hz - 50kHz frequency response with adaptive Hybrid ANC and lossless LDAC.",
        "fullDescription": "Zero-distortion audiophile performance on the go. Aircraft-grade aluminum gimbal with memory foam lambskin ear pads, 45-hour battery runtime, and dual-device multipoint Bluetooth.",
        "specifications": {
          "Drivers": "50mm Custom Planar Magnetic Transducers",
          "Frequency Response": "5Hz – 50,000Hz (Hi-Res Audio Certified)",
          "Codecs": "LDAC, aptX Lossless, AAC, SBC",
          "Noise Cancellation": "-42dB Hybrid Digital ANC with Transparency Mode",
          "Battery": "45 Hours (ANC On), Quick Charge 10 min = 5 hrs play",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Bluetooth 5.4 + LDAC",
          "battery_life": "50+ Hours Ultra Mode",
          "color": "Matte Carbon"
        },
        "variants": [
          {
            "id": "var-e-14-col-0",
            "sku": "AERO-NC-900-MATTE-CARBON",
            "title": "Matte Carbon",
            "price": 449,
            "compareAtPrice": 529,
            "stockQuantity": 28,
            "attributes": {
              "color": "Matte Carbon"
            }
          },
          {
            "id": "var-e-14-col-1",
            "sku": "AERO-NC-900-TITANIUM-GREY",
            "title": "Titanium Grey",
            "price": 449,
            "compareAtPrice": 529,
            "stockQuantity": 26,
            "attributes": {
              "color": "Titanium Grey"
            }
          },
          {
            "id": "var-e-14-col-2",
            "sku": "AERO-NC-900-CYBER-SILVER",
            "title": "Cyber Silver",
            "price": 449,
            "compareAtPrice": 529,
            "stockQuantity": 24,
            "attributes": {
              "color": "Cyber Silver"
            }
          }
        ],
        "tags": [
          "audio",
          "headphones",
          "audiophile",
          "anc",
          "wireless"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-15T17:39:37.986Z"
      },
      {
        "id": "elec-015",
        "title": "Sonus Reference Open-Back Dynamic Mastering Monitors",
        "slug": "sonus-reference-open-back-monitors",
        "sku": "SON-OB-800",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 699,
        "compareAtPrice": 799,
        "costPrice": 454,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 16,
        "lowStockThreshold": 3,
        "rating": 4.96,
        "reviewCount": 48,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 40
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-15-1",
            "url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sonus Reference Open-Back Dynamic Mastering Monitors - View 1",
            "isPrimary": true
          },
          {
            "id": "eimg-15-2",
            "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sonus Reference Open-Back Dynamic Mastering Monitors - View 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "56mm ring radiator transducers with honeycomb acoustical open grilles for hyper-precise 3D stereo soundstage.",
        "fullDescription": "Handcrafted in Denmark with real birch acoustic damping rings and silver-plated oxygen-free copper balanced cables.",
        "specifications": {
          "Impedance": "300 Ohms",
          "Total Harmonic Distortion": "< 0.02% (1kHz, 100dB SPL)",
          "Cable": "Detachable 4.4mm Pentaconn Balanced + 6.35mm Single-Ended",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "audiophile",
          "open-back",
          "mastering",
          "studio",
          "reference"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-13T17:39:37.986Z"
      },
      {
        "id": "elec-016",
        "title": "Valkyrie R2R Balanced Ladder Desktop DAC & Headphone Amp",
        "slug": "valkyrie-r2r-ladder-dac-amp",
        "sku": "VALK-R2R-01",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 899,
        "costPrice": 584,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 11,
        "lowStockThreshold": 3,
        "rating": 4.97,
        "reviewCount": 35,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 30
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "R2R Discrete",
        "images": [
          {
            "id": "eimg-16-1",
            "url": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
            "alt": "Valkyrie R2R Balanced Ladder Desktop DAC & Headphone Amp - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "True discrete resistor ladder 24-bit R2R DAC with Class-A pure discrete amplification (6000mW @ 32Ω).",
        "fullDescription": "Organic, natural, tube-like analog warmth with digital precision. Features USB XMOS XU316, I2S HDMI, optical, and balanced XLR outs.",
        "specifications": {
          "Topology": "Discrete 24-bit R2R Resistor Network",
          "Output Power": "6W per channel @ 32 Ohms balanced",
          "Inputs": "USB-C, Optical, Coaxial, AES/EBU, I2S",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "dac",
          "amp",
          "r2r",
          "discrete",
          "audiophile"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-11T17:39:37.987Z"
      },
      {
        "id": "elec-017",
        "title": "Pulse Pro Wireless Spatial Earbuds with Heart Rate & Body Temp",
        "slug": "pulse-pro-spatial-earbuds",
        "sku": "PLS-PRO-EB",
        "categoryId": "cat-elec-audio",
        "brand": "NEXUS Technologies",
        "price": 199,
        "compareAtPrice": 249,
        "costPrice": 129,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "pair",
        "stockQuantity": 42,
        "lowStockThreshold": 3,
        "rating": 4.82,
        "reviewCount": 118,
        "ratingDistribution": {
          "1": 4,
          "2": 1,
          "3": 2,
          "4": 14,
          "5": 97
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "eimg-17-1",
            "url": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pulse Pro Wireless Spatial Earbuds with Heart Rate & Body Temp - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Dual micro-dynamic drivers with real-time biometric biometric sensors, -48dB ANC, and wireless charging case.",
        "fullDescription": "IPX7 sweatproof rated for intensive workouts, live binaural spatial head tracking, and clear voice beamforming microphones.",
        "specifications": {
          "ANC Level": "-48dB Adaptive Noise Cancellation",
          "Battery": "8 Hours in buds + 28 Hours in MagSafe charging case",
          "Sensors": "Optical PPG Heart Rate + Micro-thermistor Skin Temp",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Bluetooth 5.4 + LDAC",
          "battery_life": "30+ Hours ANC"
        },
        "tags": [
          "earbuds",
          "anc",
          "fitness",
          "biometrics",
          "wireless"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-09T17:39:37.987Z"
      },
      {
        "id": "elec-018",
        "title": "AuraSound Studio 8 Active Bi-Amplified Nearfield Monitors (Pair)",
        "slug": "aurasound-studio-8-monitors-pair",
        "sku": "AS-MON-08",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 849,
        "compareAtPrice": 999,
        "costPrice": 552,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 14,
        "lowStockThreshold": 3,
        "rating": 4.92,
        "reviewCount": 40,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 33
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-18-1",
            "url": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1000&auto=format&fit=crop&q=80",
            "alt": "AuraSound Studio 8 Active Bi-Amplified Nearfield Monitors (Pair) - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "8-inch woven Kevlar woofer + 1-inch titanium waveguide tweeter with integrated DSP room acoustic correction.",
        "fullDescription": "Class-D bi-amped 200W total RMS power per speaker. Comes with acoustic isolation pads and measurement calibration microphone.",
        "specifications": {
          "Total Output": "400W RMS System Power (200W per side)",
          "Frequency Response": "35Hz - 28kHz (+/- 1.5dB)",
          "DSP": "Room Correction Acoustic EQ via onboard rotary selector",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "speakers",
          "studio-monitors",
          "kevlar",
          "dsp",
          "music-production"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-07T17:39:37.987Z"
      },
      {
        "id": "elec-019",
        "title": "EchoSphere 360 Spatial High-Res Smart Home Speaker",
        "slug": "echosphere-360-spatial-speaker",
        "sku": "ECH-SPH-360",
        "categoryId": "cat-elec-audio",
        "brand": "AURA Tech",
        "price": 349,
        "costPrice": 227,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "lowStockThreshold": 3,
        "rating": 4.85,
        "reviewCount": 63,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 8,
          "5": 52
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-19-1",
            "url": "https://images.unsplash.com/photo-1543512214-318c7553f230?w=1000&auto=format&fit=crop&q=80",
            "alt": "EchoSphere 360 Spatial High-Res Smart Home Speaker - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Six beamforming horn tweeters + downward firing long-throw subwoofer with Apple AirPlay 2, Cast, and Matter support.",
        "fullDescription": "Self-tuning room analysis microphones instantly adapt EQ when placed next to walls, corners, or center tables.",
        "specifications": {
          "Protocols": "AirPlay 2, Spotify Connect, Tidal Connect, Matter, Bluetooth 5.4",
          "Drivers": "6x Array Tweeters + 5.25” Long-Throw Neodymium Sub",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Lossless 2.4GHz Ultra-Low Latency",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "smart-speaker",
          "airplay",
          "room-tuning",
          "spatial",
          "lossless"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-05T17:39:37.987Z"
      },
      {
        "id": "elec-020",
        "title": "Orpheus Custom Fit In-Ear 8-Driver Balanced Armature Monitors",
        "slug": "orpheus-custom-fit-iem-8-driver",
        "sku": "ORP-IEM-08",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 1199,
        "compareAtPrice": 1399,
        "costPrice": 779,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 9,
        "lowStockThreshold": 3,
        "rating": 4.97,
        "reviewCount": 27,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 23
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "8 BA Drivers",
        "images": [
          {
            "id": "eimg-20-1",
            "url": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000&auto=format&fit=crop&q=80",
            "alt": "Orpheus Custom Fit In-Ear 8-Driver Balanced Armature Monitors - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "8 Knowles balanced armature drivers per ear with 4-way passive crossover inside medical-grade 3D printed resin shells.",
        "fullDescription": "The ultimate stage and touring monitor. Unrivaled vocal clarity, tight punchy sub-bass, and holographic instrument separation.",
        "specifications": {
          "Drivers": "8 Balanced Armatures (2 Sub-bass, 2 Bass, 2 Mid, 2 Ultra-High)",
          "Isolation": "-26dB passive noise suppression",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "iem",
          "in-ear",
          "balanced-armature",
          "audiophile",
          "stage"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-03T17:39:37.987Z"
      },
      {
        "id": "elec-021",
        "title": "Acoustic Labs Portable DAC/Amp Dongle (Dual CS43198)",
        "slug": "acoustic-labs-portable-dac-dongle",
        "sku": "AL-DAC-DNG",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 129,
        "costPrice": 84,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 60,
        "lowStockThreshold": 3,
        "rating": 4.89,
        "reviewCount": 95,
        "ratingDistribution": {
          "1": 2,
          "2": 1,
          "3": 2,
          "4": 11,
          "5": 79
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "eimg-21-1",
            "url": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
            "alt": "Acoustic Labs Portable DAC/Amp Dongle (Dual CS43198) - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Dual Cirrus Logic flagship DACs supporting 32-bit/384kHz and DSD256 with 3.5mm and 4.4mm balanced headphone jacks.",
        "fullDescription": "Plug-and-play with iPhone 15/16, Android, macOS, and Windows. OLED status screen displaying sample rates and gain modes.",
        "specifications": {
          "DAC Chipset": "Dual Cirrus Logic CS43198",
          "Outputs": "3.5mm Single-Ended (125mW) + 4.4mm Balanced (280mW)",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "dongle",
          "dac",
          "portable",
          "hires",
          "balanced"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-10-01T17:39:37.987Z"
      },
      {
        "id": "elec-022",
        "title": "StreamMic Pro Broadcast Dynamic XLR / USB-C Microphone",
        "slug": "streammic-pro-broadcast-xlr-usb",
        "sku": "STR-MIC-PRO",
        "categoryId": "cat-elec-audio",
        "brand": "NEXUS Technologies",
        "price": 249,
        "costPrice": 162,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 33,
        "lowStockThreshold": 3,
        "rating": 4.91,
        "reviewCount": 88,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 2,
          "4": 11,
          "5": 73
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-22-1",
            "url": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000&auto=format&fit=crop&q=80",
            "alt": "StreamMic Pro Broadcast Dynamic XLR / USB-C Microphone - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Cardioid dynamic capsule with built-in analog preamp booster, hardware DSP noise gate, and RGB gain meter ring.",
        "fullDescription": "Switch seamlessly from USB-C direct streaming to XLR professional mixer setups without external preamps.",
        "specifications": {
          "Capsule": "Heavy-diaphragm Cardioid Dynamic",
          "Connectivity": "Dual XLR Balanced + USB-C 24-bit/96kHz",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "microphone",
          "podcast",
          "streaming",
          "broadcast",
          "xlr"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-29T17:39:37.987Z"
      },
      {
        "id": "elec-023",
        "title": "SoundBar Ultra 7.1.4 Dolby Atmos Wireless Home Cinema",
        "slug": "soundbar-ultra-dolby-atmos-cinema",
        "sku": "SND-BAR-714",
        "categoryId": "cat-elec-audio",
        "brand": "AURA Tech",
        "price": 1099,
        "compareAtPrice": 1299,
        "costPrice": 714,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 12,
        "lowStockThreshold": 3,
        "rating": 4.88,
        "reviewCount": 44,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 37
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-23-1",
            "url": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1000&auto=format&fit=crop&q=80",
            "alt": "SoundBar Ultra 7.1.4 Dolby Atmos Wireless Home Cinema - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "17 discrete drivers with wireless up-firing rear satellite speakers and 10-inch 300W wireless subwoofer.",
        "fullDescription": "HDMI eARC 2.1 passthrough with 4K 120Hz HDR gaming support, DTS:X, and automatic room calibration.",
        "specifications": {
          "Channels": "7.1.4 Dolby Atmos True Object Audio",
          "Total Output": "820W Peak Power",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Lossless 2.4GHz Ultra-Low Latency",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "soundbar",
          "dolby-atmos",
          "home-theater",
          "wireless-sub",
          "surround"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-27T17:39:37.987Z"
      },
      {
        "id": "elec-024",
        "title": "ChronoVinyl Precision Belt-Drive Turntable with Ortofon Cartridge",
        "slug": "chronovinyl-precision-turntable",
        "sku": "CHR-VIN-01",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 799,
        "costPrice": 519,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 15,
        "lowStockThreshold": 3,
        "rating": 4.95,
        "reviewCount": 31,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 26
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-24-1",
            "url": "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1000&auto=format&fit=crop&q=80",
            "alt": "ChronoVinyl Precision Belt-Drive Turntable with Ortofon Cartridge - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Solid acrylic plinth with optical speed sensor, carbon fiber tonearm, and pre-mounted Ortofon 2M Bronze stylus.",
        "fullDescription": "Ultra-quiet isolated DC motor eliminates micro-vibrations for pristine analog vinyl groove playback.",
        "specifications": {
          "Platter": "High-density 20mm frosted resonance-free Acrylic",
          "Cartridge": "Ortofon 2M Bronze Nude Fine Line Stylus",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "turntable",
          "vinyl",
          "analog",
          "ortofon",
          "audiophile"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-25T17:39:37.987Z"
      },
      {
        "id": "elec-025",
        "title": "AeroWave ANC Bone Conduction Sport Open-Ear Headset",
        "slug": "aerowave-bone-conduction-headset",
        "sku": "AERO-BC-02",
        "categoryId": "cat-elec-audio",
        "brand": "NEXUS Technologies",
        "price": 159,
        "costPrice": 103,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 40,
        "lowStockThreshold": 3,
        "rating": 4.79,
        "reviewCount": 65,
        "ratingDistribution": {
          "1": 2,
          "2": 1,
          "3": 1,
          "4": 8,
          "5": 53
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-25-1",
            "url": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000&auto=format&fit=crop&q=80",
            "alt": "AeroWave ANC Bone Conduction Sport Open-Ear Headset - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Titanium wraparound open-ear design delivering punchy bass through cheekbones while maintaining full traffic awareness.",
        "fullDescription": "IP68 fully waterproof for swimming and heavy rain runs. Includes 32GB onboard MP3 storage and Bluetooth 5.4.",
        "specifications": {
          "Waterproofing": "IP68 Submersible up to 2 meters",
          "Onboard Storage": "32GB (holds ~8000 lossless audio files)",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Bluetooth 5.4 + LDAC",
          "battery_life": "30+ Hours ANC"
        },
        "tags": [
          "bone-conduction",
          "running",
          "waterproof",
          "open-ear",
          "sport"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-23T17:39:37.987Z"
      },
      {
        "id": "elec-026",
        "title": "AudioGuard Pro Active Noise Cancelling Studio Pods",
        "slug": "audioguard-pro-anc-studio-pods",
        "sku": "AG-POD-PRO",
        "categoryId": "cat-elec-audio",
        "brand": "Acoustic Labs",
        "price": 299,
        "costPrice": 194,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 24,
        "lowStockThreshold": 3,
        "rating": 4.87,
        "reviewCount": 51,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 6,
          "5": 42
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "eimg-26-1",
            "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=80",
            "alt": "AudioGuard Pro Active Noise Cancelling Studio Pods - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Ultra-compact earplugs with selectable active acoustic filters for concert-goers, drummers, and audio engineers.",
        "fullDescription": "Flat -18dB attenuation preserves full dynamic musical spectrum without muffling treble frequencies.",
        "specifications": {
          "Attenuation": "Switchable 0dB / -12dB / -18dB / -24dB Flat Filter",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "connectivity": "Wired 3.5mm / 4.4mm Balanced",
          "battery_life": "Wired (No Battery)"
        },
        "tags": [
          "hearing-protection",
          "concert",
          "musician",
          "earplugs"
        ],
        "sellerId": "vendor-acoustic-labs",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-21T17:39:37.987Z"
      },
      {
        "id": "elec-027",
        "title": "Pro Visual 49-inch Curved DQHD QD-OLED 240Hz Monitor",
        "slug": "pro-visual-49-curved-oled",
        "sku": "VIS-49-OLED",
        "categoryId": "cat-elec-accessories",
        "brand": "VisualDynamics",
        "price": 1299,
        "compareAtPrice": 1599,
        "costPrice": 844,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 8,
        "lowStockThreshold": 2,
        "rating": 4.9,
        "reviewCount": 34,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 28
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "0.03ms Response",
        "images": [
          {
            "id": "eimg-27-1",
            "url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pro Visual 49-inch Curved DQHD QD-OLED 240Hz Monitor - View 1",
            "isPrimary": true
          },
          {
            "id": "eimg-27-2",
            "url": "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pro Visual 49-inch Curved DQHD QD-OLED 240Hz Monitor - View 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Dual QHD (5120x1440) 32:9 Super Ultra-Wide curved gaming and productivity panel with 0.03ms GtG response and 99.3% DCI-P3 gamut.",
        "fullDescription": "Equivalent to two seamless 27-inch QHD monitors side-by-side. Equipped with 90W USB-C Power Delivery KVM switch for multi-device laptop docking.",
        "specifications": {
          "Panel Type": "Samsung Quantum Dot OLED (1800R Curve)",
          "Resolution": "5120 x 1440 (32:9 Aspect Ratio)",
          "Refresh Rate": "240Hz with AMD FreeSync Premium Pro",
          "Color Accuracy": "Delta E < 1.0 Factory Calibrated",
          "Ports": "1x DP 1.4, 2x HDMI 2.1, USB-C 90W PD, 3x USB 3.2 Hub",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "monitor",
          "oled",
          "ultrawide",
          "gaming",
          "desk-setup"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-19T17:39:37.987Z"
      },
      {
        "id": "elec-028",
        "title": "DevSuite Pro: Lifetime License + Cloud Compilation Tokens",
        "slug": "devsuite-pro-digital-license",
        "sku": "DEV-DIG-01",
        "categoryId": "cat-elec-accessories",
        "brand": "ByteFlow Software",
        "price": 199,
        "compareAtPrice": 299,
        "costPrice": 129,
        "currency": "USD",
        "type": "digital",
        "unitOfMeasure": "license",
        "stockQuantity": 999,
        "lowStockThreshold": 3,
        "rating": 4.97,
        "reviewCount": 154,
        "ratingDistribution": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 18,
          "5": 130
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Instant Digital Download",
        "images": [
          {
            "id": "eimg-28-1",
            "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
            "alt": "DevSuite Pro: Lifetime License + Cloud Compilation Tokens - View 1",
            "isPrimary": true
          }
        ],
        "digitalAsset": {
          "fileName": "DevSuite-Pro-v4.8-Universal.dmg",
          "fileSize": "480 MB",
          "fileFormat": "Installer + Cryptographic License Key",
          "previewUrl": "https://example.com/demo-preview",
          "downloadUrl": "https://example.com/download/devsuite-pro"
        },
        "shortDescription": "Instant activation key + installer bundle for the premier AI-augmented profiling, memory debugging, and distributed build system.",
        "fullDescription": "Delivered directly to your account dashboard and email upon purchase. Includes unlimited local compilations, 500 monthly cloud GPU credits, and lifetime minor updates.",
        "specifications": {
          "Delivery Method": "Instant Cryptographic Activation Key via Email",
          "Platforms": "macOS (Apple Silicon & Intel), Windows 11, Linux x86/ARM",
          "License Term": "Perpetual Commercial Use for 3 Concurrent Workstations",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Windows / macOS / Linux"
        },
        "tags": [
          "digital",
          "software",
          "developer-tools",
          "license",
          "ai"
        ],
        "sellerId": "vendor-byteflow",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-17T17:39:37.987Z"
      },
      {
        "id": "elec-029",
        "title": "KeyChronos Split Ergo Mechanical Wireless Keyboard (Hall Effect)",
        "slug": "keychronos-split-ergo-keyboard",
        "sku": "KC-SPL-ERGO",
        "categoryId": "cat-elec-accessories",
        "brand": "ByteFlow Hardware",
        "price": 279,
        "compareAtPrice": 320,
        "costPrice": 181,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 21,
        "lowStockThreshold": 3,
        "rating": 4.93,
        "reviewCount": 76,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 2,
          "4": 9,
          "5": 64
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Hall Effect Magnetic",
        "images": [
          {
            "id": "eimg-29-1",
            "url": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1000&auto=format&fit=crop&q=80",
            "alt": "KeyChronos Split Ergo Mechanical Wireless Keyboard (Hall Effect) - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Ergonomic columnar split design with rapid-trigger magnetic switches, OLED thumb cluster, and tenting stand.",
        "fullDescription": "Fully programmable with QMK/VIA/ZMK firmware. CNC aluminum housing with seamless 2.4GHz ultra-low latency wireless dongle.",
        "specifications": {
          "Switches": "Gateron Magnetic Jade Rapid-Trigger Hall Effect (0.1mm - 4.0mm adjustable)",
          "Tenting Angle": "Adjustable 5° to 35° Integrated Tenting Legs",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "keyboard",
          "ergonomic",
          "split",
          "mechanical",
          "hall-effect"
        ],
        "sellerId": "vendor-byteflow",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-15T17:39:37.987Z"
      },
      {
        "id": "elec-030",
        "title": "QuantumPrecision 8K Wireless Esports Mouse with Carbon Shell",
        "slug": "quantumprecision-8k-wireless-mouse",
        "sku": "QP-MS-8K",
        "categoryId": "cat-elec-accessories",
        "brand": "NEXUS Technologies",
        "price": 149,
        "costPrice": 97,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 38,
        "lowStockThreshold": 3,
        "rating": 4.89,
        "reviewCount": 94,
        "ratingDistribution": {
          "1": 2,
          "2": 1,
          "3": 2,
          "4": 11,
          "5": 78
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-30-1",
            "url": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1000&auto=format&fit=crop&q=80",
            "alt": "QuantumPrecision 8K Wireless Esports Mouse with Carbon Shell - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "39-gram ultra-lightweight magnesium alloy chassis with true 8000Hz polling rate and 30,000 DPI optical sensor.",
        "fullDescription": "Zero latency tracking with optical switch micro-clicks rated for 100 million activations without double clicking.",
        "specifications": {
          "Weight": "39 grams",
          "Polling Rate": "True 8000Hz Wireless / Wired",
          "Sensor": "PAW3950 Optical (30,000 DPI, 750 IPS)",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Universal (iOS & Android)"
        },
        "tags": [
          "mouse",
          "esports",
          "8khz",
          "lightweight",
          "gaming"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-13T17:39:37.987Z"
      },
      {
        "id": "elec-031",
        "title": "CalibratePro 32-inch 6K Retinal IPS Black Reference Monitor",
        "slug": "calibratepro-32-6k-monitor",
        "sku": "CAL-32-6K",
        "categoryId": "cat-elec-accessories",
        "brand": "VisualDynamics",
        "price": 1999,
        "compareAtPrice": 2299,
        "costPrice": 1299,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 6,
        "lowStockThreshold": 3,
        "rating": 4.96,
        "reviewCount": 28,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 24
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-31-1",
            "url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1000&auto=format&fit=crop&q=80",
            "alt": "CalibratePro 32-inch 6K Retinal IPS Black Reference Monitor - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "32-inch 6016x3384 6K Retina panel with IPS Black technology delivering 2000:1 contrast and built-in motorized colorimeter.",
        "fullDescription": "Automated overnight hardware calibration sensor emerges from bezel. Thunderbolt 4 daisy-chaining with 140W host charging.",
        "specifications": {
          "Resolution": "6K 6016 x 3384 (218 PPI Retinal density)",
          "Contrast": "2000:1 IPS Black Deep Contrast",
          "Color Spaces": "99% DCI-P3, 100% sRGB, 98% AdobeRGB",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "monitor",
          "6k",
          "retina",
          "colorimeter",
          "thunderbolt4"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-11T17:39:37.987Z"
      },
      {
        "id": "elec-032",
        "title": "ThunderHub 16-Port Thunderbolt 5 Pro Docking Station",
        "slug": "thunderhub-16-port-thunderbolt-5-dock",
        "sku": "THB-5-16P",
        "categoryId": "cat-elec-accessories",
        "brand": "NEXUS Technologies",
        "price": 349,
        "costPrice": 227,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 29,
        "lowStockThreshold": 3,
        "rating": 4.91,
        "reviewCount": 62,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 7,
          "5": 52
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-32-1",
            "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80",
            "alt": "ThunderHub 16-Port Thunderbolt 5 Pro Docking Station - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "120Gbps bandwidth with 3x Thunderbolt 5 downstreams, 140W Power Delivery, 2.5GbE Ethernet, and UHS-II SD/CFexpress card slots.",
        "fullDescription": "Powers triple 4K 144Hz displays or dual 8K monitors effortlessly with dedicated active cooling heatsink.",
        "specifications": {
          "Bandwidth": "Up to 120Gbps Bandwidth Boost",
          "Host Charging": "Up to 140W USB-PD 3.1",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Windows / macOS / Linux"
        },
        "tags": [
          "dock",
          "thunderbolt5",
          "usb-c",
          "hub",
          "workstation"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-09T17:39:37.987Z"
      },
      {
        "id": "elec-033",
        "title": "StreamDeck Omni 24 Haptic LCD Key Controller",
        "slug": "streamdeck-omni-24-lcd-controller",
        "sku": "STR-DK-24",
        "categoryId": "cat-elec-accessories",
        "brand": "ByteFlow Hardware",
        "price": 229,
        "costPrice": 149,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 35,
        "lowStockThreshold": 3,
        "rating": 4.88,
        "reviewCount": 71,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 9,
          "5": 59
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-33-1",
            "url": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1000&auto=format&fit=crop&q=80",
            "alt": "StreamDeck Omni 24 Haptic LCD Key Controller - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "24 customizable IPS LCD tactile buttons with 4 rotary dials for audio mixing, OBS scenes, and IDE shortcuts.",
        "fullDescription": "Custom plugin store with native integrations for Figma, VS Code, Blender, Spotify, and smart home lighting.",
        "specifications": {
          "Display": "24x Miniature 120x120 IPS Color Displays with Haptic Feedback",
          "Dials": "4x High-Resolution Endless Encoders with Push Buttons",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "stream-deck",
          "macro-pad",
          "obs",
          "productivity",
          "controller"
        ],
        "sellerId": "vendor-byteflow",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-07T17:39:37.987Z"
      },
      {
        "id": "elec-034",
        "title": "DeskPad Pro Italian Horween Leather & Merino Wool Desk Mat",
        "slug": "deskpad-pro-horween-leather-mat",
        "sku": "DP-LTH-01",
        "categoryId": "cat-elec-accessories",
        "brand": "AURA Tech",
        "price": 89,
        "costPrice": 58,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 50,
        "lowStockThreshold": 3,
        "rating": 4.94,
        "reviewCount": 83,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 2,
          "4": 10,
          "5": 70
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-34-1",
            "url": "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1000&auto=format&fit=crop&q=80",
            "alt": "DeskPad Pro Italian Horween Leather & Merino Wool Desk Mat - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Full-grain vegetable tanned Horween leather bonded with 100% German high-density merino wool backing.",
        "fullDescription": "Smooth mouse gliding surface with magnetic cable organizing rail and hidden NFC productivity automation chip.",
        "specifications": {
          "Dimensions": "90 x 42 cm (35.4 x 16.5 inches)",
          "Materials": "Horween Chromexcel Leather + German Merino Wool",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "desk-mat",
          "leather",
          "accessories",
          "workspace",
          "horween"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-05T17:39:37.987Z"
      },
      {
        "id": "elec-035",
        "title": "ApexArm Carbon Fiber Gas-Spring Dual Monitor Arm",
        "slug": "apexarm-carbon-fiber-monitor-arm",
        "sku": "APX-ARM-02",
        "categoryId": "cat-elec-accessories",
        "brand": "VisualDynamics",
        "price": 189,
        "costPrice": 123,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "lowStockThreshold": 3,
        "rating": 4.92,
        "reviewCount": 46,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 38
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-35-1",
            "url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1000&auto=format&fit=crop&q=80",
            "alt": "ApexArm Carbon Fiber Gas-Spring Dual Monitor Arm - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Heavy-duty counterbalanced carbon fiber arms supporting monitors up to 49-inch curved and 18kg per arm.",
        "fullDescription": "Integrated hidden cable channels and quick-release VESA 75/100 brackets with 360-degree rotation.",
        "specifications": {
          "Weight Capacity": "Up to 18 kg (39.6 lbs) per arm",
          "VESA": "75x75mm and 100x100mm Quick-Release",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "monitor-arm",
          "desk-setup",
          "ergonomic",
          "carbon-fiber"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-03T17:39:37.987Z"
      },
      {
        "id": "elec-036",
        "title": "LumbarGuard Ergonomic Carbon Mesh Studio Task Chair",
        "slug": "lumbarguard-carbon-mesh-chair",
        "sku": "LMB-CHR-01",
        "categoryId": "cat-elec-accessories",
        "brand": "NEXUS Technologies",
        "price": 899,
        "compareAtPrice": 1099,
        "costPrice": 584,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "lowStockThreshold": 3,
        "rating": 4.95,
        "reviewCount": 68,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 8,
          "5": 57
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "eimg-36-1",
            "url": "https://images.unsplash.com/photo-1580481077195-c9a924b17169?w=1000&auto=format&fit=crop&q=80",
            "alt": "LumbarGuard Ergonomic Carbon Mesh Studio Task Chair - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Dynamic auto-conforming lumbar suspension with breathable carbon mesh, 4D magnetic armrests, and polished alloy base.",
        "fullDescription": "Relieves spinal pressure during 12+ hour programming or editing sessions with synchronized tilt kinematics.",
        "specifications": {
          "Adjustability": "4D Armrests, Forward Tilt 4°, Pneumatic Height, Dynamic Lumbar",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "chair",
          "ergonomic",
          "mesh",
          "workspace",
          "office"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-09-01T17:39:37.987Z"
      },
      {
        "id": "elec-037",
        "title": "LuminaBar Pro ScreenBar Halo Monitor Light with Wireless Controller",
        "slug": "luminabar-pro-screenbar-halo",
        "sku": "LUM-BAR-01",
        "categoryId": "cat-elec-accessories",
        "brand": "VisualDynamics",
        "price": 139,
        "costPrice": 90,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 44,
        "lowStockThreshold": 3,
        "rating": 4.89,
        "reviewCount": 110,
        "ratingDistribution": {
          "1": 3,
          "2": 1,
          "3": 2,
          "4": 13,
          "5": 91
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-37-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "LuminaBar Pro ScreenBar Halo Monitor Light with Wireless Controller - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Zero screen glare asymmetrical optical lamp with back ambient bias lighting and magnetic rotary dial puck.",
        "fullDescription": "CRI 98 natural sun spectrum reduces eye fatigue. Automatic ambient light sensor dynamically adjusts illuminance.",
        "specifications": {
          "CRI": "Ra > 98 High Color Rendering Index",
          "Illuminance": "1000 Lux @ 45cm center desk",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "lightbar",
          "lamp",
          "desk-lighting",
          "eye-care",
          "ambient"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-30T17:39:37.988Z"
      },
      {
        "id": "elec-038",
        "title": "SwiftBackup 4TB Rugged Thunderbolt 5 NVMe Portable SSD",
        "slug": "swiftbackup-4tb-tb5-portable-ssd",
        "sku": "SWF-SSD-4T",
        "categoryId": "cat-elec-accessories",
        "brand": "NEXUS Technologies",
        "price": 499,
        "costPrice": 324,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 30,
        "lowStockThreshold": 3,
        "rating": 4.97,
        "reviewCount": 57,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 1,
          "4": 7,
          "5": 48
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-38-1",
            "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80",
            "alt": "SwiftBackup 4TB Rugged Thunderbolt 5 NVMe Portable SSD - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Up to 6,200 MB/s sustained transfer speed inside an IP68 silicone-cushioned aluminum enclosure.",
        "fullDescription": "Transfer an entire 4K feature film RAW reel in under 8 seconds. Hardware AES-256 encryption with fingerprint unlock.",
        "specifications": {
          "Read/Write Speed": "Up to 6,200 MB/s Read, 5,800 MB/s Write",
          "Durability": "3-Meter Drop Proof, IP68 Waterproof & Dustproof",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Windows / macOS / Linux"
        },
        "tags": [
          "ssd",
          "portable-storage",
          "thunderbolt5",
          "nvme",
          "rugged"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-28T17:39:37.988Z"
      },
      {
        "id": "elec-039",
        "title": "Chronos Ultra Titanium Sapphire Smartwatch (Cellular + ECG)",
        "slug": "chronos-ultra-titanium-smartwatch",
        "sku": "CHR-ULT-TI",
        "categoryId": "cat-elec-mobile",
        "brand": "NEXUS Technologies",
        "price": 799,
        "compareAtPrice": 899,
        "costPrice": 519,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "lowStockThreshold": 3,
        "rating": 4.93,
        "reviewCount": 84,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 2,
          "4": 10,
          "5": 70
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Dual-Band GPS",
        "images": [
          {
            "id": "eimg-39-1",
            "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80",
            "alt": "Chronos Ultra Titanium Sapphire Smartwatch (Cellular + ECG) - View 1",
            "isPrimary": true
          },
          {
            "id": "eimg-39-2",
            "url": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1000&auto=format&fit=crop&q=80",
            "alt": "Chronos Ultra Titanium Sapphire Smartwatch (Cellular + ECG) - View 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Aerospace Grade 5 titanium case with sapphire crystal, 3000 nits OLED, dual-frequency GPS, and 100m dive computer rating.",
        "fullDescription": "Built for high-altitude mountaineering, ultra-marathons, and open ocean diving. Features 7-day battery life and blood oxygen tracking.",
        "specifications": {
          "Case": "49mm Grade 5 Titanium with Action Button",
          "Display": "1.99” Always-On LTPO OLED (3000 nits peak)",
          "Water Rating": "100m (EN13319 Certified Scuba Dive Computer)",
          "Battery": "Up to 7 days normal use / 60 hours multi-sport GPS mode",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Universal (iOS & Android)"
        },
        "variants": [
          {
            "id": "var-e-39-col-0",
            "sku": "CHR-ULT-TI-TITANIUM-GREY",
            "title": "Titanium Grey",
            "price": 799,
            "compareAtPrice": 899,
            "stockQuantity": 25,
            "attributes": {
              "color": "Titanium Grey"
            }
          },
          {
            "id": "var-e-39-col-1",
            "sku": "CHR-ULT-TI-MATTE-CARBON",
            "title": "Matte Carbon",
            "price": 799,
            "compareAtPrice": 899,
            "stockQuantity": 23,
            "attributes": {
              "color": "Matte Carbon"
            }
          },
          {
            "id": "var-e-39-col-2",
            "sku": "CHR-ULT-TI-CYBER-SILVER",
            "title": "Cyber Silver",
            "price": 799,
            "compareAtPrice": 899,
            "stockQuantity": 21,
            "attributes": {
              "color": "Cyber Silver"
            }
          }
        ],
        "tags": [
          "smartwatch",
          "titanium",
          "gps",
          "diving",
          "fitness"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-26T17:39:37.988Z"
      },
      {
        "id": "elec-040",
        "title": "AeroDrone 8K Cinematic Folding Drone with 1-inch CMOS Gimbal",
        "slug": "aerodrone-8k-cinematic-folding-drone",
        "sku": "AERO-DRN-8K",
        "categoryId": "cat-elec-mobile",
        "brand": "Titan Dynamics",
        "price": 1599,
        "compareAtPrice": 1799,
        "costPrice": 1039,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 10,
        "lowStockThreshold": 3,
        "rating": 4.91,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 33
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "8K HDR Video",
        "images": [
          {
            "id": "eimg-40-1",
            "url": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1000&auto=format&fit=crop&q=80",
            "alt": "AeroDrone 8K Cinematic Folding Drone with 1-inch CMOS Gimbal - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "1-inch 50MP Hasselblad optics sensor with 8K 30fps / 4K 120fps video, 46-minute flight time, and omnidirectional LiDAR obstacle avoidance.",
        "fullDescription": "Includes smart controller with 7-inch 2000-nit high-brightness screen and 15km video transmission range.",
        "specifications": {
          "Sensor": "1” CMOS 50MP Sensor (f/2.8 - f/11 adjustable aperture)",
          "Flight Time": "Up to 46 minutes per intelligent battery",
          "Transmission": "O3+ Lossless 1080p 60fps Video up to 15 km",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "drone",
          "cinematography",
          "8k",
          "hasselblad",
          "aerial"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-24T17:39:37.988Z"
      },
      {
        "id": "elec-041",
        "title": "VisionAir XR Spatial Computing Glasses with Micro-OLED",
        "slug": "visionair-xr-spatial-glasses",
        "sku": "VIS-XR-01",
        "categoryId": "cat-elec-mobile",
        "brand": "FutureTech Labs",
        "price": 649,
        "compareAtPrice": 749,
        "costPrice": 422,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "lowStockThreshold": 3,
        "rating": 4.86,
        "reviewCount": 42,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 35
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "120Hz Micro-OLED",
        "images": [
          {
            "id": "eimg-41-1",
            "url": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1000&auto=format&fit=crop&q=80",
            "alt": "VisionAir XR Spatial Computing Glasses with Micro-OLED - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "75g featherlight sunglasses projecting a private 201-inch virtual display directly in front of your eyes at 120Hz.",
        "fullDescription": "Direct USB-C DisplayPort connection to laptops, Steam Deck, iPad, and smartphones. Electrochromic tint darkening button for daylight use.",
        "specifications": {
          "Display": "Dual Sony 0.55” Micro-OLED panels (3840x1080 per eye)",
          "Field of View": "46° FOV (Equivalent to 201” at 6 meters)",
          "Weight": "75 grams",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Universal (iOS & Android)"
        },
        "tags": [
          "xr",
          "ar-glasses",
          "micro-oled",
          "spatial",
          "wearable"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-22T17:39:37.988Z"
      },
      {
        "id": "elec-042",
        "title": "LumaCam Pro Full-Frame Mirrorless 61MP Studio Camera",
        "slug": "lumacam-pro-mirrorless-61mp",
        "sku": "LUM-CAM-61",
        "categoryId": "cat-elec-mobile",
        "brand": "VisualDynamics",
        "price": 3499,
        "costPrice": 2274,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 6,
        "lowStockThreshold": 3,
        "rating": 4.97,
        "reviewCount": 31,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 26
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-42-1",
            "url": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000&auto=format&fit=crop&q=80",
            "alt": "LumaCam Pro Full-Frame Mirrorless 61MP Studio Camera - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "61.0 MP Back-Illuminated Exmor R sensor with AI subject-recognition autofocus, 8-stop in-body stabilization, and 8K video.",
        "fullDescription": "Built-in Wi-Fi 6E high-speed FTP tethering for instantaneous studio image transfers. Dual CFexpress Type A / SD card slots.",
        "specifications": {
          "Sensor": "61.0 MP 35mm Full-Frame BSI CMOS Sensor",
          "Autofocus": "693 Phase-Detection AF Points with AI Deep Learning Tracking",
          "Stabilization": "8.0-Stop 5-Axis In-Body Optical Image Stabilization",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "camera",
          "mirrorless",
          "61mp",
          "photography",
          "full-frame"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-20T17:39:37.988Z"
      },
      {
        "id": "elec-043",
        "title": "GimbalMaster 4-Axis Handheld Carbon Video Stabilizer",
        "slug": "gimbalmaster-4-axis-carbon-stabilizer",
        "sku": "GMB-MST-04",
        "categoryId": "cat-elec-mobile",
        "brand": "Titan Dynamics",
        "price": 549,
        "costPrice": 357,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 16,
        "lowStockThreshold": 3,
        "rating": 4.88,
        "reviewCount": 37,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 31
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-43-1",
            "url": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000&auto=format&fit=crop&q=80",
            "alt": "GimbalMaster 4-Axis Handheld Carbon Video Stabilizer - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "4.5 kg payload motor torque with integrated LiDAR autofocus focusing motor and wireless briefcase handle.",
        "fullDescription": "Carbon fiber structural arms with automated axis locks that snap into position when powered on in 1 second.",
        "specifications": {
          "Payload": "Tested Payload 4.5 kg (10.0 lbs)",
          "Battery Life": "12 Hours with 18W Fast Charging",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "gimbal",
          "stabilizer",
          "filmmaking",
          "camera-rig",
          "lidar"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-18T17:39:37.988Z"
      },
      {
        "id": "elec-044",
        "title": "AuraRing Horizon Titanium Sleep & Biometric Ring",
        "slug": "auraring-horizon-biometric-ring",
        "sku": "AUR-RNG-01",
        "categoryId": "cat-elec-mobile",
        "brand": "AURA Tech",
        "price": 349,
        "costPrice": 227,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 34,
        "lowStockThreshold": 3,
        "rating": 4.9,
        "reviewCount": 112,
        "ratingDistribution": {
          "1": 3,
          "2": 1,
          "3": 2,
          "4": 13,
          "5": 93
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-44-1",
            "url": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&auto=format&fit=crop&q=80",
            "alt": "AuraRing Horizon Titanium Sleep & Biometric Ring - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Non-invasive PPG sensors tracking sleep stages, HRV, body temperature readiness, and recovery index for 8 days per charge.",
        "fullDescription": "Ultra-light 4-gram titanium band with medical-grade hypoallergenic resin interior. No screen distractions, pure biometric intelligence.",
        "specifications": {
          "Sensors": "Infrared PPG, Negative Temperature Coefficient (NTC), 3D Accelerometer",
          "Battery": "Up to 8 days runtime with wireless puck charging",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Universal (iOS & Android)"
        },
        "tags": [
          "smart-ring",
          "biometrics",
          "sleep-tracking",
          "recovery",
          "titanium"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-16T17:39:37.988Z"
      },
      {
        "id": "elec-045",
        "title": "Optix Prime 35mm f/1.2 Cine Prime Anamorphic Lens",
        "slug": "optix-prime-35mm-anamorphic-lens",
        "sku": "OPT-CIN-35",
        "categoryId": "cat-elec-mobile",
        "brand": "VisualDynamics",
        "price": 1899,
        "costPrice": 1234,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 7,
        "lowStockThreshold": 3,
        "rating": 4.95,
        "reviewCount": 22,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 19
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-45-1",
            "url": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000&auto=format&fit=crop&q=80",
            "alt": "Optix Prime 35mm f/1.2 Cine Prime Anamorphic Lens - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "1.33x anamorphic squeeze with vintage oval bokeh, creamy horizontal flares, and 0.8 Mod cine focus gearing.",
        "fullDescription": "All-metal precision mechanical barrel with clicked/de-clicked aperture ring and interchangeable PL/E/RF mount.",
        "specifications": {
          "Focal Length": "35mm (1.33x Anamorphic)",
          "Aperture": "T1.2 - T16 (14-Blade Circular Iris)",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "lens",
          "cinema",
          "anamorphic",
          "filmmaking",
          "prime-lens"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-14T17:39:37.988Z"
      },
      {
        "id": "elec-046",
        "title": "NovaPower 300W GaN Desktop Fast Charging Matrix",
        "slug": "novapower-300w-gan-charging-matrix",
        "sku": "NOV-GAN-300",
        "categoryId": "cat-elec-mobile",
        "brand": "NEXUS Technologies",
        "price": 179,
        "costPrice": 116,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 45,
        "lowStockThreshold": 3,
        "rating": 4.92,
        "reviewCount": 89,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 2,
          "4": 11,
          "5": 74
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "images": [
          {
            "id": "eimg-46-1",
            "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80",
            "alt": "NovaPower 300W GaN Desktop Fast Charging Matrix - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Gallium Nitride Gen5 power matrix with 4x USB-C (up to 140W single port) and real-time color digital wattage HUD.",
        "fullDescription": "Simultaneously fast-charge two 16-inch laptops, an iPad Pro, and a phone at full unrestricted wattage.",
        "specifications": {
          "Total Output": "300W Max GaN Fast Delivery",
          "Port Configuration": "4x USB-C PD 3.1 + 1x USB-A (22.5W)",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Universal (iOS & Android)"
        },
        "tags": [
          "charger",
          "gan",
          "300w",
          "usb-c",
          "power-delivery"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-12T17:39:37.988Z"
      },
      {
        "id": "elec-047",
        "title": "PocketCinema 4K Ultra-Compact Gimbal Camera",
        "slug": "pocketcinema-4k-gimbal-camera",
        "sku": "PKT-CAM-4K",
        "categoryId": "cat-elec-mobile",
        "brand": "Titan Dynamics",
        "price": 499,
        "costPrice": 324,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "lowStockThreshold": 3,
        "rating": 4.87,
        "reviewCount": 63,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 8,
          "5": 52
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-47-1",
            "url": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1000&auto=format&fit=crop&q=80",
            "alt": "PocketCinema 4K Ultra-Compact Gimbal Camera - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "1-inch CMOS sensor with 3-axis mechanical stabilization, 2-inch rotatable OLED touchscreen, and wireless mic transmitter.",
        "fullDescription": "Fits right in your shirt pocket for cinematic handheld vlogging with 4K 120fps slow-motion and face tracking.",
        "specifications": {
          "Sensor": "1” CMOS 4K 120fps Slow-Motion",
          "Audio": "3-Mic Directional Stereo Array with Wind Screen",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Universal (iOS & Android)"
        },
        "tags": [
          "vlog",
          "gimbal-camera",
          "pocket-camera",
          "4k",
          "youtube"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-10T17:39:37.988Z"
      },
      {
        "id": "elec-048",
        "title": "ThermalVision Pro Smartphone Thermal Imaging Core (FLIR)",
        "slug": "thermalvision-pro-thermal-camera",
        "sku": "THM-VIS-01",
        "categoryId": "cat-elec-mobile",
        "brand": "FutureTech Labs",
        "price": 389,
        "costPrice": 253,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 20,
        "lowStockThreshold": 3,
        "rating": 4.89,
        "reviewCount": 45,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 37
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-48-1",
            "url": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1000&auto=format&fit=crop&q=80",
            "alt": "ThermalVision Pro Smartphone Thermal Imaging Core (FLIR) - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "384x288 high-resolution infrared thermal sensor plugging into USB-C to detect PCB hot spots and insulation leaks.",
        "fullDescription": "-20°C to 550°C temperature measurement range with 25Hz smooth thermal video streaming and point temp markers.",
        "specifications": {
          "Thermal Resolution": "384 x 288 (110,592 Temperature Measurement Pixels)",
          "Temp Range": "-20°C to 550°C (-4°F to 1022°F)",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Universal (iOS & Android)"
        },
        "tags": [
          "thermal-camera",
          "flir",
          "inspection",
          "pcb",
          "hardware-tools"
        ],
        "sellerId": "vendor-byteflow",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-08T17:39:37.988Z"
      },
      {
        "id": "elec-049",
        "title": "SolarCharge Max 100W Foldable ETFE Outdoor Power Station Panel",
        "slug": "solarcharge-max-100w-solar-panel",
        "sku": "SOL-100-ETFE",
        "categoryId": "cat-elec-mobile",
        "brand": "Titan Dynamics",
        "price": 199,
        "costPrice": 129,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 32,
        "lowStockThreshold": 3,
        "rating": 4.85,
        "reviewCount": 54,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 6,
          "5": 45
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Pro Grade",
        "images": [
          {
            "id": "eimg-49-1",
            "url": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1000&auto=format&fit=crop&q=80",
            "alt": "SolarCharge Max 100W Foldable ETFE Outdoor Power Station Panel - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Monocrystalline solar cells with 23.5% conversion efficiency, IP67 ETFE lamination, and 65W USB-C PD output.",
        "fullDescription": "Foldable briefcase footprint for remote off-grid camping, expedition power, and emergency mobile charging.",
        "specifications": {
          "Rated Power": "100W (23.5% Monocrystalline SunPower Cells)",
          "Outputs": "USB-C PD 65W, USB-A QC 3.0, DC 18V 5.5A",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "solar",
          "camping",
          "power-station",
          "off-grid",
          "outdoor"
        ],
        "sellerId": "vendor-nexus-direct",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-06T17:39:37.988Z"
      },
      {
        "id": "elec-050",
        "title": "QuantumKey Cryptographic FIDO2 USB-C + NFC Security Key (Dual Pack)",
        "slug": "quantumkey-cryptographic-security-key",
        "sku": "QNT-SEC-02",
        "categoryId": "cat-elec-mobile",
        "brand": "ByteFlow Software",
        "price": 95,
        "costPrice": 62,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 80,
        "lowStockThreshold": 3,
        "rating": 4.98,
        "reviewCount": 140,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 3,
          "4": 17,
          "5": 119
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "eimg-50-1",
            "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
            "alt": "QuantumKey Cryptographic FIDO2 USB-C + NFC Security Key (Dual Pack) - View 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hardware-backed post-quantum cryptographic passkey token supporting FIDO2, WebAuthn, U2F, and PIV smartcard.",
        "fullDescription": "Indestructible IP68 fiberglass-reinforced unibody with gold-plated contacts and tamper-resistant secure element.",
        "specifications": {
          "Protocols": "FIDO2/WebAuthn, U2F, OpenPGP, PIV, OATH-TOTP",
          "Security Certification": "FIPS 140-3 Level 3 Physical Tamper Resistance",
          "Warranty": "2-Year Direct Manufacturer Full Coverage",
          "Return Policy": "30-Day Hassle-Free Return Guarantee"
        },
        "attributes": {
          "compatibility": "Cross-Platform"
        },
        "tags": [
          "security",
          "fido2",
          "passkey",
          "encryption",
          "hardware-token"
        ],
        "sellerId": "vendor-byteflow",
        "warranty": "2-Year Direct Manufacturer Full Coverage",
        "returnPolicy": "30-Day Hassle-Free Return Guarantee",
        "createdAt": "2026-08-04T17:39:37.988Z"
      }
    ],
    "banners": [
      {
        "id": "ban-e1",
        "title": "Architected for Peak Compute",
        "subtitle": "Next-Generation Silicon, Quantum Dot OLEDs, and Studio Planar Transducers",
        "tag": "HARDWARE REVOLUTION",
        "ctaText": "Shop Tech Rig",
        "linkCategory": "cat-elec-laptops",
        "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#0284c7",
        "overlayGradient": "from-slate-950/90 via-slate-900/60 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-nexus-direct",
        "name": "NEXUS Direct Hardware",
        "slug": "nexus-direct",
        "logo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 680,
        "salesCount": 8400,
        "description": "Official manufacturer and fulfillment arm for NEXUS computing and precision displays.",
        "location": "Austin, TX, USA",
        "commissionRate": 8,
        "joinedDate": "2022-11-01",
        "email": "enterprise@nexus-tech.io",
        "phone": "+1 (800) 555-0199",
        "balance": 48900,
        "payoutMethod": "Automated ACH / Wire",
        "isVerified": true
      },
      {
        "id": "vendor-acoustic-labs",
        "name": "Acoustic Labs Audio",
        "slug": "acoustic-labs",
        "logo": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.88,
        "reviewCount": 220,
        "salesCount": 2100,
        "description": "Specialized Danish audio engineering studio crafting planar magnetic transducers.",
        "location": "Copenhagen, Denmark",
        "commissionRate": 10,
        "joinedDate": "2023-04-12",
        "email": "support@acousticlabs.dk",
        "phone": "+45 33 12 34 56",
        "balance": 11400,
        "payoutMethod": "Stripe Connect",
        "isVerified": true
      },
      {
        "id": "vendor-byteflow",
        "name": "ByteFlow Software Corp",
        "slug": "byteflow",
        "logo": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.98,
        "reviewCount": 310,
        "salesCount": 5200,
        "description": "High-performance compiler tooling and AI debugging software.",
        "location": "San Francisco, CA",
        "commissionRate": 15,
        "joinedDate": "2023-09-01",
        "email": "licensing@byteflow.dev",
        "phone": "+1 (415) 555-0144",
        "balance": 19800,
        "payoutMethod": "PayPal Enterprise",
        "isVerified": true
      },
      {
        "id": "vendor-keeb-lab",
        "name": "Precision Keeb Lab",
        "slug": "precision-keeb-lab",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.93,
        "reviewCount": 175,
        "salesCount": 3100,
        "description": "Custom CNC aluminum mechanical keyboards, magnetic Hall effect switches, and brass desk mats.",
        "location": "Tokyo, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-05-18",
        "email": "support@keeblab.io",
        "phone": "+81 3 5550 9182",
        "balance": 13200,
        "payoutMethod": "Stripe Connect",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "epost-1",
        "title": "Planar Magnetic vs. Dynamic Drivers: An Acoustic Deep Dive",
        "slug": "planar-magnetic-vs-dynamic-drivers",
        "excerpt": "Why ultra-thin suspended diaphragm ribbons produce zero phase distortion across transient frequency spikes.",
        "content": "Traditional dynamic drivers use a conical diaphragm driven by a concentrated voice coil...",
        "coverImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Henrik Vestergaard",
          "role": "Chief Acoustic Engineer",
          "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 14, 2026",
        "category": "Audio Engineering",
        "tags": [
          "Headphones",
          "Audiophile",
          "Acoustics"
        ],
        "readTime": "5 min read"
      }
    ]
  },
  "home": {
    "id": "home",
    "name": "LUMEN Sanctuary",
    "tagline": "Modern Architectural Living, Organic Ceramics & Natural Woodcraft",
    "categoryTag": "Home & Living",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "home",
      "primaryColor": "#292524",
      "primaryHover": "#1c1917",
      "secondaryColor": "#78716c",
      "accentColor": "#d97706",
      "surfaceColor": "#fafaf9",
      "surfaceElevated": "#f5f5f4",
      "textColor": "#1c1917",
      "textMuted": "#78716c",
      "borderColor": "#e7e5e4",
      "fontDisplay": "Playfair Display, Georgia, serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-lg",
      "shadowIntensity": "shadow-sm",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-home-furniture",
        "name": "Architectural Furniture",
        "slug": "furniture",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
        "description": "Solid white oak dining tables, boucle lounge seating, and modular walnut sideboards.",
        "allowedUnits": [
          "piece",
          "set"
        ],
        "attributes": [
          {
            "key": "room",
            "label": "Room Space",
            "type": "select",
            "options": [
              "Living Room",
              "Dining Room",
              "Bedroom",
              "Home Studio"
            ],
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "wood_finish",
            "label": "Wood & Finish",
            "type": "select",
            "options": [
              "Solid White Oak",
              "Fumed Walnut",
              "Natural Ash",
              "Brushed Travertine"
            ],
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "assembly",
            "label": "Assembly Requirement",
            "type": "select",
            "options": [
              "White-Glove Included",
              "No Assembly Required",
              "Simple 10-Min Assembly"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-home-lighting",
        "name": "Sculptural Lighting",
        "slug": "lighting",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
        "description": "Hand-blown opaline pendants, washi paper floor luminaires, and brass sconces.",
        "allowedUnits": [
          "piece"
        ],
        "attributes": [
          {
            "key": "light_source",
            "label": "Light Source & Dimming",
            "type": "select",
            "options": [
              "Warm 2700K Dimmable LED",
              "Triac Phase Dimmable",
              "Smart Home Zigbee/Matter"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-home-ceramics",
        "name": "Artisan Ceramics & Tableware",
        "slug": "ceramics-tableware",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80",
        "description": "Stoneware dinner sets, hand-thrown vases, and cast bronze kitchenware.",
        "allowedUnits": [
          "piece",
          "set"
        ],
        "attributes": [
          {
            "key": "dishwasher_safe",
            "label": "Dishwasher & Oven Safe",
            "type": "select",
            "options": [
              "Yes (100% Dishwasher & Microwave Safe)",
              "Hand-Wash Only"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-home-textiles",
        "name": "Luxury Textiles & Bedding",
        "slug": "textiles-bedding",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80",
        "description": "Washed Belgian linen duvet sets, Mongolian cashmere throws, and organic waffle towels.",
        "allowedUnits": [
          "piece",
          "set"
        ],
        "attributes": [
          {
            "key": "material",
            "label": "Fiber Composition",
            "type": "select",
            "options": [
              "100% French Flax Linen",
              "Pure Cashmere",
              "Organic GOTS Cotton"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      }
    ],
    "products": [
      {
        "id": "home-001",
        "title": "Solstice Curved Bouclé Lounge Armchair & Ottoman",
        "slug": "solstice-boucle-armchair",
        "sku": "LUMEN-CHR-01",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 1150,
        "compareAtPrice": 1390,
        "costPrice": 518,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 7,
        "lowStockThreshold": 2,
        "rating": 4.93,
        "reviewCount": 31,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 27
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Bespoke Upholstery",
        "images": [
          {
            "id": "himg-1-1",
            "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Solstice Curved Bouclé Lounge Armchair & Ottoman - Angle 1",
            "isPrimary": true
          },
          {
            "id": "himg-1-2",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&auto=format&fit=crop&q=80",
            "alt": "Solstice Curved Bouclé Lounge Armchair & Ottoman - Angle 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Organic sculptural silhouette upholstered in heavyweight Italian textured wool bouclé with a hidden 360-degree silent swivel base.",
        "fullDescription": "Designed as a sanctuary for deep reading and contemplation. High-resilience cold-cured foam core over a kiln-dried hardwood frame provides sublime ergonomic lumbar support.",
        "specifications": {
          "Dimensions": "W 92 x D 88 x H 78 cm (Seat Height: 42 cm)",
          "Upholstery": "85% Virgin Wool, 15% Alpaca Bouclé (Rub Count: 45,000 Martindale)",
          "Frame": "FSC-Certified Solid Birch & Molded Plywood",
          "Base": "Heavyweight steel 360° silent ball-bearing swivel mechanism",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room",
          "wood_finish": "Solid White Oak",
          "assembly": "No Assembly Required"
        },
        "variants": [
          {
            "id": "var-h-1-wf-0",
            "sku": "LUMEN-CHR-01-SOLID-WHITE-OAK",
            "title": "Solid White Oak",
            "price": 1150,
            "compareAtPrice": 1390,
            "stockQuantity": 7,
            "attributes": {
              "wood_finish": "Solid White Oak"
            }
          },
          {
            "id": "var-h-1-wf-1",
            "sku": "LUMEN-CHR-01-FUMED-WALNUT",
            "title": "Fumed Walnut",
            "price": 1150,
            "compareAtPrice": 1390,
            "stockQuantity": 6,
            "attributes": {
              "wood_finish": "Fumed Walnut"
            }
          }
        ],
        "tags": [
          "furniture",
          "armchair",
          "boucle",
          "sculptural",
          "living-room"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-11-10T17:39:37.990Z"
      },
      {
        "id": "home-002",
        "title": "Kyoto Monolith Solid White Oak Dining Table (8-10 Seater)",
        "slug": "kyoto-solid-oak-dining-table",
        "sku": "LUMEN-TBL-08",
        "categoryId": "cat-home-furniture",
        "brand": "Komorebi Woodcraft",
        "price": 2450,
        "compareAtPrice": 2800,
        "costPrice": 1103,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 4,
        "lowStockThreshold": 2,
        "rating": 4.96,
        "reviewCount": 22,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 19
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-2-1",
            "url": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kyoto Monolith Solid White Oak Dining Table (8-10 Seater) - Angle 1",
            "isPrimary": true
          },
          {
            "id": "himg-2-2",
            "url": "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kyoto Monolith Solid White Oak Dining Table (8-10 Seater) - Angle 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Seamless 40mm thick live-edge European white oak top with traditional mortise-and-tenon architectural trestle legs.",
        "fullDescription": "Hand-finished with zero-VOC natural hardwax matte oil that highlights the natural grain, medullary rays, and warm organic character.",
        "specifications": {
          "Dimensions": "L 240 x W 100 x H 75 cm",
          "Material": "100% Sustainably Harvested French White Oak",
          "Weight": "94 kg",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Dining Room",
          "wood_finish": "Solid White Oak",
          "assembly": "White-Glove Included"
        },
        "variants": [
          {
            "id": "var-h-2-wf-0",
            "sku": "LUMEN-TBL-08-SOLID-WHITE-OAK",
            "title": "Solid White Oak",
            "price": 2450,
            "compareAtPrice": 2800,
            "stockQuantity": 4,
            "attributes": {
              "wood_finish": "Solid White Oak"
            }
          },
          {
            "id": "var-h-2-wf-1",
            "sku": "LUMEN-TBL-08-FUMED-WALNUT",
            "title": "Fumed Walnut",
            "price": 2450,
            "compareAtPrice": 2800,
            "stockQuantity": 3,
            "attributes": {
              "wood_finish": "Fumed Walnut"
            }
          },
          {
            "id": "var-h-2-wf-2",
            "sku": "LUMEN-TBL-08-NATURAL-ASH",
            "title": "Natural Ash",
            "price": 2450,
            "compareAtPrice": 2800,
            "stockQuantity": 2,
            "attributes": {
              "wood_finish": "Natural Ash"
            }
          }
        ],
        "tags": [
          "dining-table",
          "white-oak",
          "handcrafted",
          "dining-room",
          "japanese-minimalism"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-11-08T17:39:37.991Z"
      },
      {
        "id": "home-003",
        "title": "Arcadia Modular Deep Linen Sectional Sofa (4-Piece Set)",
        "slug": "arcadia-modular-linen-sectional-sofa",
        "sku": "LUMEN-SFA-04",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 3890,
        "compareAtPrice": 4400,
        "costPrice": 1751,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "set",
        "stockQuantity": 5,
        "lowStockThreshold": 2,
        "rating": 4.91,
        "reviewCount": 19,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 16
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "100% Belgian Flax",
        "images": [
          {
            "id": "himg-3-1",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&auto=format&fit=crop&q=80",
            "alt": "Arcadia Modular Deep Linen Sectional Sofa (4-Piece Set) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Ultra-deep 110cm feather-down cushions wrapped in removable, stonewashed Belgian pure linen slipcovers.",
        "fullDescription": "Configure in L-shape, conversation pit, or separate lounge chaises. Built with no-sag sinuous spring suspension and natural latex cushioning.",
        "specifications": {
          "Dimensions": "W 340 x D 220 x H 82 cm (Seat Depth: 72 cm)",
          "Slipcover": "100% Stonewashed Belgian Flax Linen (Machine Washable)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room",
          "assembly": "White-Glove Included"
        },
        "tags": [
          "sectional",
          "sofa",
          "linen",
          "modular",
          "living-room"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-11-06T17:39:37.991Z"
      },
      {
        "id": "home-004",
        "title": "Torii Minimalist Fumed Walnut Low Credenza & Media Unit",
        "slug": "torii-walnut-low-credenza",
        "sku": "LUMEN-CRD-02",
        "categoryId": "cat-home-furniture",
        "brand": "Komorebi Woodcraft",
        "price": 1850,
        "costPrice": 833,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 8,
        "lowStockThreshold": 2,
        "rating": 4.88,
        "reviewCount": 26,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 22
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "himg-4-1",
            "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1000&auto=format&fit=crop&q=80",
            "alt": "Torii Minimalist Fumed Walnut Low Credenza & Media Unit - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Slatted tambour sliding doors concealing acoustic fabric shelves, cable management channels, and push-to-open soft-close drawers.",
        "fullDescription": "Slender brass dowel feet elevate the low horizontal profile, creating an airy architectural statement in modern living rooms.",
        "specifications": {
          "Dimensions": "W 200 x D 45 x H 52 cm",
          "Timber": "FSC American Walnut & Solid Walnut Slat Tambour",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room",
          "wood_finish": "Fumed Walnut",
          "assembly": "No Assembly Required"
        },
        "tags": [
          "credenza",
          "media-unit",
          "walnut",
          "slatted",
          "storage"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-11-04T17:39:37.991Z"
      },
      {
        "id": "home-005",
        "title": "Kanso Solid Ash Floating Platform Bed with Tatami Insets",
        "slug": "kanso-ash-floating-platform-bed",
        "sku": "LUMEN-BED-01",
        "categoryId": "cat-home-furniture",
        "brand": "Komorebi Woodcraft",
        "price": 2190,
        "compareAtPrice": 2490,
        "costPrice": 986,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 6,
        "lowStockThreshold": 2,
        "rating": 4.95,
        "reviewCount": 34,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 30
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Tatami Inset",
        "images": [
          {
            "id": "himg-5-1",
            "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kanso Solid Ash Floating Platform Bed with Tatami Insets - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Cantilevered floating frame in natural bleached ash featuring authentic Japanese rush-grass tatami mat inserts and integrated bedside ledges.",
        "fullDescription": "Promotes natural air circulation and peaceful acoustic dampening in the sleep sanctuary. Zero metallic fasteners used in the main frame.",
        "specifications": {
          "Dimensions": "King: W 220 x L 230 x H 28 cm",
          "Tatami": "100% Natural Igusa Rush Grass & Rice Straw Core",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Bedroom",
          "wood_finish": "Natural Ash",
          "assembly": "Simple 10-Min Assembly"
        },
        "tags": [
          "bed",
          "platform-bed",
          "tatami",
          "bedroom",
          "zen"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-11-02T17:39:37.991Z"
      },
      {
        "id": "home-006",
        "title": "Travertine Column Sculptural Pedestal Coffee Table",
        "slug": "travertine-sculptural-coffee-table",
        "sku": "LUMEN-CFT-03",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 1390,
        "costPrice": 626,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 9,
        "lowStockThreshold": 2,
        "rating": 4.92,
        "reviewCount": 28,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 24
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "himg-6-1",
            "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1000&auto=format&fit=crop&q=80",
            "alt": "Travertine Column Sculptural Pedestal Coffee Table - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Solid monolithic honed Roman travertine table top resting gracefully on twin fluted cylindrical stone columns.",
        "fullDescription": "Each piece features completely unique natural geological vugs and warm beige veining, hand-honed to a silky matte touch.",
        "specifications": {
          "Dimensions": "L 130 x W 70 x H 38 cm",
          "Stone": "Unfilled Honed Italian Roman Travertine",
          "Weight": "68 kg",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room",
          "wood_finish": "Brushed Travertine",
          "assembly": "White-Glove Included"
        },
        "tags": [
          "coffee-table",
          "travertine",
          "stone",
          "marble",
          "sculptural"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-31T17:39:37.991Z"
      },
      {
        "id": "home-007",
        "title": "Oasis Curved Cane & Solid Oak Armless Dining Chairs (Set of 2)",
        "slug": "oasis-cane-oak-dining-chairs-set",
        "sku": "LUMEN-DCHR-02",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 680,
        "compareAtPrice": 780,
        "costPrice": 306,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 18,
        "lowStockThreshold": 2,
        "rating": 4.87,
        "reviewCount": 42,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 36
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Artisan Craft",
        "images": [
          {
            "id": "himg-7-1",
            "url": "https://images.unsplash.com/photo-1503602642458-232111445657?w=1000&auto=format&fit=crop&q=80",
            "alt": "Oasis Curved Cane & Solid Oak Armless Dining Chairs (Set of 2) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Steam-bent solid oak frames holding hand-woven French cane mesh backrests with high-density linen padded seats.",
        "fullDescription": "Lightweight yet incredibly durable architectural dining chairs that add airy warmth to minimalist dining tables.",
        "specifications": {
          "Dimensions": "W 50 x D 54 x H 80 cm (Seat Height: 46 cm)",
          "Materials": "Solid European White Oak, Natural Rattan Weave, Linen Fabric",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Dining Room",
          "wood_finish": "Solid White Oak",
          "assembly": "No Assembly Required"
        },
        "tags": [
          "dining-chairs",
          "cane",
          "rattan",
          "oak",
          "set-of-2"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-29T17:39:37.991Z"
      },
      {
        "id": "home-008",
        "title": "Nordic Floating Wall Desk with Concealed Cable Dock",
        "slug": "nordic-floating-wall-desk",
        "sku": "LUMEN-DSK-01",
        "categoryId": "cat-home-furniture",
        "brand": "Komorebi Woodcraft",
        "price": 890,
        "costPrice": 401,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 12,
        "lowStockThreshold": 2,
        "rating": 4.89,
        "reviewCount": 30,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 26
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-8-1",
            "url": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Nordic Floating Wall Desk with Concealed Cable Dock - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Space-saving French-cleat mounted floating desk in solid walnut with felt-lined drawers and magnetic cord pass-throughs.",
        "fullDescription": "Engineered for dedicated home studios and compact urban apartments. Includes heavy-duty steel structural internal wall bracket.",
        "specifications": {
          "Dimensions": "W 120 x D 50 x H 18 cm",
          "Weight Rating": "Supports up to 75 kg static load on brick/stud walls",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Home Studio",
          "wood_finish": "Fumed Walnut",
          "assembly": "Simple 10-Min Assembly"
        },
        "tags": [
          "desk",
          "floating-desk",
          "home-office",
          "walnut",
          "minimalist"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-27T17:39:37.991Z"
      },
      {
        "id": "home-009",
        "title": "Palais Solid Teak Ribbed Sideboard & Bar Cabinet",
        "slug": "palais-solid-teak-ribbed-sideboard",
        "sku": "LUMEN-BAR-01",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 2650,
        "compareAtPrice": 2990,
        "costPrice": 1193,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 5,
        "lowStockThreshold": 2,
        "rating": 4.94,
        "reviewCount": 16,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 14
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Reclaimed Teak",
        "images": [
          {
            "id": "himg-9-1",
            "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1000&auto=format&fit=crop&q=80",
            "alt": "Palais Solid Teak Ribbed Sideboard & Bar Cabinet - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Vertical fluted reclaimed teak facade with solid brass hardware, mirrored interior bar shelves, and wine glass racks.",
        "fullDescription": "Each slat is hand-carved by master woodworkers. Features soft-close Blum hinges and integrated motion-sensor LED lighting inside.",
        "specifications": {
          "Dimensions": "W 180 x D 48 x H 85 cm",
          "Interior": "Smoked Mirror Backing, Integrated Glass Hanger, 12-Bottle Wine Grid",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Dining Room",
          "wood_finish": "Fumed Walnut",
          "assembly": "White-Glove Included"
        },
        "tags": [
          "sideboard",
          "bar-cabinet",
          "teak",
          "fluted",
          "luxury"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-25T17:39:37.991Z"
      },
      {
        "id": "home-010",
        "title": "Zephyr Ergonomic Saddle Stool in Saddle Leather",
        "slug": "zephyr-saddle-stool-leather",
        "sku": "LUMEN-STL-01",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 490,
        "costPrice": 221,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "lowStockThreshold": 2,
        "rating": 4.86,
        "reviewCount": 37,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 32
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "himg-10-1",
            "url": "https://images.unsplash.com/photo-1503602642458-232111445657?w=1000&auto=format&fit=crop&q=80",
            "alt": "Zephyr Ergonomic Saddle Stool in Saddle Leather - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Contoured thick vegetable-tanned bridle leather saddle seat over matte black steel architectural legs.",
        "fullDescription": "Naturally encourages an upright open-hip posture whether at kitchen islands, studio drawing tables, or cafe counters.",
        "specifications": {
          "Dimensions": "W 44 x D 38 x H 65 cm (Counter Height)",
          "Leather": "4mm Thick Full-Grain Bridle Saddle Leather (Develops Patina)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Dining Room",
          "assembly": "No Assembly Required"
        },
        "tags": [
          "counter-stool",
          "bar-stool",
          "leather",
          "saddle",
          "kitchen"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-23T17:39:37.992Z"
      },
      {
        "id": "home-011",
        "title": "Aura Arch Bookshelf & Room Divider (Solid Ash)",
        "slug": "aura-arch-bookshelf-ash",
        "sku": "LUMEN-BSH-01",
        "categoryId": "cat-home-furniture",
        "brand": "Komorebi Woodcraft",
        "price": 1950,
        "costPrice": 878,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 6,
        "lowStockThreshold": 2,
        "rating": 4.91,
        "reviewCount": 20,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 17
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "himg-11-1",
            "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1000&auto=format&fit=crop&q=80",
            "alt": "Aura Arch Bookshelf & Room Divider (Solid Ash) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Cathedral arched silhouette featuring 5 open tiers for curated art monograph displays and ceramic vessels.",
        "fullDescription": "Open back design allows light to filter through, functioning as an elegant spatial divider between living and dining zones.",
        "specifications": {
          "Dimensions": "W 110 x D 38 x H 200 cm",
          "Capacity": "Up to 35 kg per shelf tier",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room",
          "wood_finish": "Natural Ash",
          "assembly": "White-Glove Included"
        },
        "tags": [
          "bookshelf",
          "arched",
          "shelving",
          "room-divider",
          "solid-ash"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-21T17:39:37.992Z"
      },
      {
        "id": "home-012",
        "title": "Sola Solid Walnut Bedside Nightstand with Wireless Charging",
        "slug": "sola-walnut-bedside-nightstand",
        "sku": "LUMEN-NST-01",
        "categoryId": "cat-home-furniture",
        "brand": "Komorebi Woodcraft",
        "price": 580,
        "compareAtPrice": 650,
        "costPrice": 261,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 16,
        "lowStockThreshold": 2,
        "rating": 4.9,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 34
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-12-1",
            "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sola Solid Walnut Bedside Nightstand with Wireless Charging - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Seamless dovetail-jointed solid walnut drawer unit with hidden Qi2 fast wireless charging coil embedded in top slab.",
        "fullDescription": "Simply place your phone or earbuds on the subtle laser-etched target for silent 15W charging without visible cords.",
        "specifications": {
          "Dimensions": "W 50 x D 42 x H 48 cm",
          "Tech": "Embedded 15W Qi2 MagSafe Wireless Charger + Undermount USB-C",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Bedroom",
          "wood_finish": "Fumed Walnut",
          "assembly": "No Assembly Required"
        },
        "tags": [
          "nightstand",
          "bedside-table",
          "walnut",
          "wireless-charging",
          "bedroom"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-19T17:39:37.992Z"
      },
      {
        "id": "home-013",
        "title": "Hearth Daybed in Natural Untreated Leather & Birch",
        "slug": "hearth-daybed-untreated-leather",
        "sku": "LUMEN-DYB-01",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 1890,
        "costPrice": 851,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 5,
        "lowStockThreshold": 2,
        "rating": 4.93,
        "reviewCount": 14,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 12
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Artisan Craft",
        "images": [
          {
            "id": "himg-13-1",
            "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hearth Daybed in Natural Untreated Leather & Birch - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Architectural daybed inspired by mid-century Danish masters with tufted natural aniline leather cushion and bolster pillow.",
        "fullDescription": "Supported by heavy-gauge canvas web strapping on solid FSC birch framework with brass buckles.",
        "specifications": {
          "Dimensions": "L 200 x W 85 x H 40 cm",
          "Leather": "Swedish Tärnsjö Aniline Natural Leather (Raw Finish)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room",
          "wood_finish": "Solid White Oak",
          "assembly": "Simple 10-Min Assembly"
        },
        "tags": [
          "daybed",
          "chaise",
          "leather",
          "danish-design",
          "lounge"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-17T17:39:37.992Z"
      },
      {
        "id": "home-014",
        "title": "Sculpt Travertine Round Plinth Side Table",
        "slug": "sculpt-travertine-plinth-side-table",
        "sku": "LUMEN-SDT-01",
        "categoryId": "cat-home-furniture",
        "brand": "LUMEN Studio",
        "price": 640,
        "costPrice": 288,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 15,
        "lowStockThreshold": 2,
        "rating": 4.88,
        "reviewCount": 32,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 27
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-14-1",
            "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sculpt Travertine Round Plinth Side Table - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Substantial solid honed travertine cylinder pedestal acting as a side table or sculptural display column.",
        "fullDescription": "Seamless chamfered edge with matte sealant protecting against coffee and wine stains while preserving velvety texture.",
        "specifications": {
          "Dimensions": "Diameter 38 x H 46 cm",
          "Weight": "34 kg",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room",
          "wood_finish": "Brushed Travertine",
          "assembly": "No Assembly Required"
        },
        "tags": [
          "side-table",
          "plinth",
          "travertine",
          "stone",
          "living-room"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-15T17:39:37.992Z"
      },
      {
        "id": "home-015",
        "title": "Aura Halo Hand-Blown Opaline Glass Chandelier",
        "slug": "aura-halo-opaline-glass-chandelier",
        "sku": "LUM-LGT-01",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 890,
        "compareAtPrice": 1050,
        "costPrice": 401,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 12,
        "lowStockThreshold": 2,
        "rating": 4.95,
        "reviewCount": 46,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 40
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Mouth-Blown Glass",
        "images": [
          {
            "id": "himg-15-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Aura Halo Hand-Blown Opaline Glass Chandelier - Angle 1",
            "isPrimary": true
          },
          {
            "id": "himg-15-2",
            "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1000&auto=format&fit=crop&q=80",
            "alt": "Aura Halo Hand-Blown Opaline Glass Chandelier - Angle 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Six triple-layered acid-etched milk opaline globes floating along a brushed solid brass concentric ring with warm 2700K dimming.",
        "fullDescription": "Produces an ethereal, glare-free ambient luminescence over dining tables and grand entry foyers. Includes telescopic brass drop-rods.",
        "specifications": {
          "Diameter": "95 cm (37.4 inches), Drop height adjustable 40cm to 180cm",
          "Light Source": "6x 8W 2700K Warm Integrated LED (2800 Total Lumens, CRI 96)",
          "Voltage": "100-240V Universal with TRIAC & 0-10V Dimming Compatibility",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Warm 2700K Dimmable LED"
        },
        "tags": [
          "lighting",
          "chandelier",
          "pendant",
          "brass",
          "opaline-glass",
          "dining-room"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-13T17:39:37.992Z"
      },
      {
        "id": "home-016",
        "title": "Akari Origami Washi Paper Sculptural Floor Luminaire",
        "slug": "akari-washi-paper-floor-luminaire",
        "sku": "LUM-LGT-02",
        "categoryId": "cat-home-lighting",
        "brand": "Komorebi Woodcraft",
        "price": 520,
        "costPrice": 234,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "lowStockThreshold": 2,
        "rating": 4.91,
        "reviewCount": 38,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 33
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "images": [
          {
            "id": "himg-16-1",
            "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1000&auto=format&fit=crop&q=80",
            "alt": "Akari Origami Washi Paper Sculptural Floor Luminaire - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Handmade Mulberry washi paper stretched over a spiraled bamboo ribbing frame on delicate black lacquered steel tripod legs.",
        "fullDescription": "Transforms electrical light into warm, organic poetic sunlight. Includes brass foot-step dimmer with step-less luminosity control.",
        "specifications": {
          "Dimensions": "Diameter 48 x H 160 cm",
          "Materials": "Authentic Echizen Washi Paper, Natural Bamboo Ribbing, Cast Iron Base",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Triac Phase Dimmable"
        },
        "tags": [
          "floor-lamp",
          "washi-paper",
          "japanese",
          "sculptural",
          "soft-light"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-11T17:39:37.992Z"
      },
      {
        "id": "home-017",
        "title": "Sol Brass & Alabaster Disc Wall Sconce (Pair)",
        "slug": "sol-brass-alabaster-disc-sconce",
        "sku": "LUM-SCN-02",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 460,
        "compareAtPrice": 540,
        "costPrice": 207,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 24,
        "lowStockThreshold": 2,
        "rating": 4.93,
        "reviewCount": 52,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 45
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-17-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sol Brass & Alabaster Disc Wall Sconce (Pair) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Natural Spanish translucent alabaster stone disc radiating an organic corona of light against an unlacquered brushed brass backplate.",
        "fullDescription": "IP44 rated for luxury powder room vanity mirrors, master suites, and hallway galleries.",
        "specifications": {
          "Diameter": "25 cm per sconce (Depth: 6 cm)",
          "Stone": "Genuine Volterra Alabaster (Hand-Turned)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Warm 2700K Dimmable LED"
        },
        "tags": [
          "sconce",
          "wall-light",
          "alabaster",
          "brass",
          "vanity"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-09T17:39:37.992Z"
      },
      {
        "id": "home-018",
        "title": "Morphe Cordless Portable LED Table Lamp in Solid Bronze",
        "slug": "morphe-cordless-portable-table-lamp",
        "sku": "LUM-TAB-01",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 240,
        "costPrice": 108,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 40,
        "lowStockThreshold": 2,
        "rating": 4.88,
        "reviewCount": 94,
        "ratingDistribution": {
          "1": 3,
          "2": 0,
          "3": 1,
          "4": 9,
          "5": 81
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-18-1",
            "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1000&auto=format&fit=crop&q=80",
            "alt": "Morphe Cordless Portable LED Table Lamp in Solid Bronze - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Heavyweight machined solid bronze cordless lamp with magnetic charging puck and 3-stage capacitive touch dimming.",
        "fullDescription": "Provides up to 24 hours of warm candle-like 2200K - 2700K ambient illumination on dining patios or library desks.",
        "specifications": {
          "Battery": "24 Hours on Low / 8 Hours on Maximum Brightness",
          "Protection": "IP54 Water-Resistant for Outdoor Dining",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Warm 2700K Dimmable LED"
        },
        "tags": [
          "portable-lamp",
          "cordless",
          "bronze",
          "rechargeable",
          "table-lamp"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-07T17:39:37.992Z"
      },
      {
        "id": "home-019",
        "title": "Eclipse Kinetic Counterbalance Brass Floor Lamp",
        "slug": "eclipse-kinetic-counterbalance-floor-lamp",
        "sku": "LUM-LGT-05",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 1120,
        "costPrice": 504,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 8,
        "lowStockThreshold": 2,
        "rating": 4.96,
        "reviewCount": 19,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 2,
          "5": 17
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Kinetic Balance",
        "images": [
          {
            "id": "himg-19-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Eclipse Kinetic Counterbalance Brass Floor Lamp - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Fluid 360-degree cantilever arm smoothly counterbalanced by a solid marble sphere for precision task and reading light.",
        "fullDescription": "Adjust position with the touch of a single finger. Features an optical rotary dimmer knob on the main mast.",
        "specifications": {
          "Reach": "180 cm cantilever horizontal extension",
          "Materials": "Solid Brass, Nero Marquina Marble Counterweight",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Triac Phase Dimmable"
        },
        "tags": [
          "floor-lamp",
          "counterbalance",
          "brass",
          "reading-lamp",
          "marble"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-05T17:39:37.992Z"
      },
      {
        "id": "home-020",
        "title": "Totem Ceramic Textured Table Lamp with Linen Drum Shade",
        "slug": "totem-ceramic-table-lamp",
        "sku": "LUM-TAB-02",
        "categoryId": "cat-home-lighting",
        "brand": "LUMEN Studio",
        "price": 380,
        "costPrice": 171,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "lowStockThreshold": 2,
        "rating": 4.89,
        "reviewCount": 45,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 39
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-20-1",
            "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1000&auto=format&fit=crop&q=80",
            "alt": "Totem Ceramic Textured Table Lamp with Linen Drum Shade - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hand-thrown coarse terracotta base with volcanic mineral crawl glaze crowned with an oatmeal raw linen shade.",
        "fullDescription": "Infuses rustic warmth and tactile depth to credenzas, side tables, and entry consoles.",
        "specifications": {
          "Dimensions": "Diameter 35 x H 58 cm",
          "Socket": "Standard E26 / E27 Medium Base (Dimmable Warm LED Included)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Warm 2700K Dimmable LED"
        },
        "tags": [
          "table-lamp",
          "ceramic",
          "terracotta",
          "linen-shade",
          "earthy"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-03T17:39:37.993Z"
      },
      {
        "id": "home-021",
        "title": "Pebble Smoked Glass Trio Linear Island Pendant",
        "slug": "pebble-smoked-glass-island-pendant",
        "sku": "LUM-PND-03",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 780,
        "compareAtPrice": 890,
        "costPrice": 351,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "lowStockThreshold": 2,
        "rating": 4.92,
        "reviewCount": 33,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 29
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "himg-21-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Pebble Smoked Glass Trio Linear Island Pendant - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Three organically shaped asymmetrical mouth-blown smoked glass pebbles suspended from a matte black canopy.",
        "fullDescription": "Custom suspension heights for each droplet create an evocative underwater bubbling aesthetic above kitchen islands.",
        "specifications": {
          "Canopy Length": "120 cm (47 inches)",
          "Glass": "Artisan Hand-Blown Bohemian Smoked Crystal",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Triac Phase Dimmable"
        },
        "tags": [
          "kitchen-island",
          "linear-pendant",
          "smoked-glass",
          "modern",
          "lighting"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-10-01T17:39:37.993Z"
      },
      {
        "id": "home-022",
        "title": "Aura Matter Smart Recessed Architectural Downlight (4-Pack)",
        "slug": "aura-matter-smart-recessed-downlight-pack",
        "sku": "LUM-SMT-04",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 290,
        "costPrice": 131,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 35,
        "lowStockThreshold": 2,
        "rating": 4.9,
        "reviewCount": 58,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 50
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "himg-22-1",
            "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1000&auto=format&fit=crop&q=80",
            "alt": "Aura Matter Smart Recessed Architectural Downlight (4-Pack) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Deep-recessed anti-glare trimless downlights with full Matter over Thread integration (1800K - 4000K tunable circadian white).",
        "fullDescription": "Replicates natural solar progression throughout the day to optimize melatonin and cortisol rhythms in modern homes.",
        "specifications": {
          "Protocols": "Matter over Thread (Apple Home, Google Home, Home Assistant)",
          "Tunable CCT": "1800K Ultra-Warm Candle to 4000K Crisp Daylight (CRI 98)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Smart Home Zigbee/Matter"
        },
        "tags": [
          "smart-lighting",
          "matter",
          "downlights",
          "circadian",
          "recessed"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-29T17:39:37.993Z"
      },
      {
        "id": "home-023",
        "title": "Vesper Cast Bronze Art Deco Picture Light (60cm)",
        "slug": "vesper-cast-bronze-picture-light",
        "sku": "LUM-PIC-01",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 360,
        "costPrice": 162,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 20,
        "lowStockThreshold": 2,
        "rating": 4.94,
        "reviewCount": 27,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 23
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-23-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Vesper Cast Bronze Art Deco Picture Light (60cm) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Heavy cast bronze picture luminaire with museum-grade 99 CRI LED strip that illuminates fine art paintings without UV damage.",
        "fullDescription": "Adjustable knuckle rotation allows precise beam angling across oil canvas or photography prints.",
        "specifications": {
          "Width": "60 cm (23.6 inches)",
          "Spectrum": "Zero UV / IR Emissions (Safe for Delicate Historical Artworks)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Warm 2700K Dimmable LED"
        },
        "tags": [
          "picture-light",
          "art-lighting",
          "bronze",
          "museum-grade",
          "gallery"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-27T17:39:37.993Z"
      },
      {
        "id": "home-024",
        "title": "Luna Solid Oak Minimalist Wall Sconce with Rotatable Shutter",
        "slug": "luna-oak-rotatable-wall-sconce",
        "sku": "LUM-SCN-04",
        "categoryId": "cat-home-lighting",
        "brand": "Komorebi Woodcraft",
        "price": 210,
        "costPrice": 95,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 30,
        "lowStockThreshold": 2,
        "rating": 4.87,
        "reviewCount": 41,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 35
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-24-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Luna Solid Oak Minimalist Wall Sconce with Rotatable Shutter - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Solid turned white oak disc that rotates 360° to manually reveal lunar slivers or full glows of soft ambient light.",
        "fullDescription": "Tactile, playful, and deeply satisfying to operate as bedside reading sconces.",
        "specifications": {
          "Diameter": "20 cm",
          "Material": "FSC White Oak with Natural Beeswax Sealant",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Warm 2700K Dimmable LED"
        },
        "tags": [
          "sconce",
          "oak",
          "rotatable",
          "bedside",
          "interactive"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-25T17:39:37.993Z"
      },
      {
        "id": "home-025",
        "title": "Solarium Rattan Dome Handwoven Oversized Pendant",
        "slug": "solarium-rattan-oversized-pendant",
        "sku": "LUM-PND-08",
        "categoryId": "cat-home-lighting",
        "brand": "LUMEN Studio",
        "price": 490,
        "costPrice": 221,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 16,
        "lowStockThreshold": 2,
        "rating": 4.89,
        "reviewCount": 35,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 30
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Artisan Craft",
        "images": [
          {
            "id": "himg-25-1",
            "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1000&auto=format&fit=crop&q=80",
            "alt": "Solarium Rattan Dome Handwoven Oversized Pendant - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "70cm diameter open-weave natural cane pendant that casts mesmerizing lattice shadow patterns across ceiling and walls.",
        "fullDescription": "Handcrafted over 14 days by master weavers using unbleached sustainable wild rattan vines.",
        "specifications": {
          "Diameter": "70 cm x H 50 cm",
          "Cord": "3-Meter Twisted Natural Jute Fabric Cable",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Triac Phase Dimmable"
        },
        "tags": [
          "pendant",
          "rattan",
          "boho-chic",
          "dining-room",
          "handwoven"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-23T17:39:37.993Z"
      },
      {
        "id": "home-026",
        "title": "Arc Floor Lamp in Satin Graphite with Fluted Glass Diffuser",
        "slug": "arc-floor-lamp-satin-graphite",
        "sku": "LUM-FLR-09",
        "categoryId": "cat-home-lighting",
        "brand": "Studio Vesper Lighting",
        "price": 890,
        "costPrice": 401,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 10,
        "lowStockThreshold": 2,
        "rating": 4.93,
        "reviewCount": 25,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 22
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "himg-26-1",
            "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Arc Floor Lamp in Satin Graphite with Fluted Glass Diffuser - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Sweeping 2.1-meter architectural arch reaching effortlessly over large sectional sofas and reading chaises.",
        "fullDescription": "Anchored by a solid 25kg honed basalt stone base that prevents tipping while maintaining slim silhouette lines.",
        "specifications": {
          "Dimensions": "Max Height: 215 cm, Arch Reach: 165 cm",
          "Base": "Solid Basalt Volcanic Stone Weight Disc",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "light_source": "Warm 2700K Dimmable LED"
        },
        "tags": [
          "arc-lamp",
          "floor-lamp",
          "living-room",
          "graphite",
          "statement-lighting"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-21T17:39:37.993Z"
      },
      {
        "id": "home-027",
        "title": "Kurogane Matte Black Stoneware Dinner Service (16-Piece Set)",
        "slug": "kurogane-stoneware-dinner-service-16pc",
        "sku": "LUM-CRM-01",
        "categoryId": "cat-home-ceramics",
        "brand": "Komorebi Ceramics",
        "price": 320,
        "compareAtPrice": 380,
        "costPrice": 144,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 28,
        "lowStockThreshold": 2,
        "rating": 4.96,
        "reviewCount": 64,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 56
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "16-Piece Service",
        "images": [
          {
            "id": "himg-27-1",
            "url": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kurogane Matte Black Stoneware Dinner Service (16-Piece Set) - Angle 1",
            "isPrimary": true
          },
          {
            "id": "himg-27-2",
            "url": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kurogane Matte Black Stoneware Dinner Service (16-Piece Set) - Angle 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "High-fired iron-rich Japanese stoneware with an organic raw rim and silky velvet volcanic matte glaze.",
        "fullDescription": "Includes 4 dinner plates (27cm), 4 salad plates (21cm), 4 pasta bowls (19cm), and 4 soup/cereal bowls (15cm). Completely scratch-resistant against cutlery.",
        "specifications": {
          "Includes": "4 Dinner Plates, 4 Salad Plates, 4 Pasta Bowls, 4 Cereal Bowls",
          "Firing": "Cone 10 High-Fire Stoneware (1280°C)",
          "Care": "100% Dishwasher, Microwave & Oven Safe (up to 250°C)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Yes (100% Dishwasher & Microwave Safe)"
        },
        "tags": [
          "ceramics",
          "tableware",
          "dinner-set",
          "stoneware",
          "matte-black",
          "dining"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-19T17:39:37.993Z"
      },
      {
        "id": "home-028",
        "title": "Vase Monolith Raw Terracotta Sculptural Vessel",
        "slug": "vase-monolith-raw-terracotta",
        "sku": "LUM-VAS-01",
        "categoryId": "cat-home-ceramics",
        "brand": "LUMEN Studio",
        "price": 165,
        "costPrice": 74,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 34,
        "lowStockThreshold": 2,
        "rating": 4.9,
        "reviewCount": 48,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 41
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "himg-28-1",
            "url": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1000&auto=format&fit=crop&q=80",
            "alt": "Vase Monolith Raw Terracotta Sculptural Vessel - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hand-coiled sculptural vase with dual architectural ear handles and untreated sandy mineral exterior texture.",
        "fullDescription": "Glazed internally to remain 100% watertight for fresh eucalyptus branches, dried pampas, or standalone art display.",
        "specifications": {
          "Dimensions": "W 26 x D 18 x H 38 cm",
          "Material": "Natural Coarse Terracotta with Waterproof Internal Sealant",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Hand-Wash Only"
        },
        "tags": [
          "vase",
          "terracotta",
          "sculpture",
          "centerpiece",
          "handmade"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-17T17:39:37.993Z"
      },
      {
        "id": "home-029",
        "title": "Kyoto Pour-Over Ceramic Coffee Dripper & Glass Carafe Set",
        "slug": "kyoto-pour-over-ceramic-set",
        "sku": "LUM-COF-01",
        "categoryId": "cat-home-ceramics",
        "brand": "Komorebi Ceramics",
        "price": 95,
        "costPrice": 43,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 45,
        "lowStockThreshold": 2,
        "rating": 4.94,
        "reviewCount": 82,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 8,
          "5": 71
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-29-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kyoto Pour-Over Ceramic Coffee Dripper & Glass Carafe Set - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Spiral grooved Hasami ceramic pour-over cone with 700ml hand-blown borosilicate glass serving jug and brass collar.",
        "fullDescription": "Optimized 60-degree flow rate ensures even extraction for single-origin specialty coffees.",
        "specifications": {
          "Capacity": "700 mL (2-4 Cups)",
          "Filters": "Compatible with standard V60-02 paper or stainless filters",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Yes (100% Dishwasher & Microwave Safe)"
        },
        "tags": [
          "coffee",
          "pour-over",
          "hasami",
          "carafe",
          "morning-ritual"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-15T17:39:37.993Z"
      },
      {
        "id": "home-030",
        "title": "Antico Forged Matte Black Cutlery Service (24-Piece Set)",
        "slug": "antico-forged-matte-black-cutlery-24pc",
        "sku": "LUM-CUT-01",
        "categoryId": "cat-home-ceramics",
        "brand": "LUMEN Studio",
        "price": 240,
        "compareAtPrice": 280,
        "costPrice": 108,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 25,
        "lowStockThreshold": 2,
        "rating": 4.89,
        "reviewCount": 53,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 46
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-30-1",
            "url": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1000&auto=format&fit=crop&q=80",
            "alt": "Antico Forged Matte Black Cutlery Service (24-Piece Set) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hand-forged 18/10 stainless steel flatware with physical vapor deposition (PVD) titanium matte graphite finish.",
        "fullDescription": "Substantial balanced heft in the hand with razor-sharp micro-serrated steak knife blades.",
        "specifications": {
          "Service for": "6 People (6 Dinner Knives, 6 Forks, 6 Spoons, 6 Teaspoons)",
          "Steel Grade": "Heavy 18/10 Stainless Steel with Ultra-Durable PVD Coating",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Yes (100% Dishwasher & Microwave Safe)"
        },
        "tags": [
          "cutlery",
          "flatware",
          "matte-black",
          "pvd",
          "dining"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-13T17:39:37.993Z"
      },
      {
        "id": "home-031",
        "title": "Soleil Hand-Glazed Ochre Ceramic Pasta Bowls (Set of 4)",
        "slug": "soleil-ochre-ceramic-pasta-bowls-set4",
        "sku": "LUM-BWL-04",
        "categoryId": "cat-home-ceramics",
        "brand": "Komorebi Ceramics",
        "price": 110,
        "costPrice": 50,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 38,
        "lowStockThreshold": 2,
        "rating": 4.92,
        "reviewCount": 67,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 58
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Artisan Craft",
        "images": [
          {
            "id": "himg-31-1",
            "url": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1000&auto=format&fit=crop&q=80",
            "alt": "Soleil Hand-Glazed Ochre Ceramic Pasta Bowls (Set of 4) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Generous 22cm shallow rimmed bowls with warm speckled amber reactive glaze perfect for handmade pastas and grain bowls.",
        "fullDescription": "Each bowl carries unique kiln fire markings and subtle color variegations celebrating wabi-sabi aesthetics.",
        "specifications": {
          "Diameter": "22 cm (Capacity: 850 mL)",
          "Care": "Dishwasher and microwave safe",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Yes (100% Dishwasher & Microwave Safe)"
        },
        "tags": [
          "pasta-bowls",
          "ceramics",
          "tableware",
          "amber",
          "set-of-4"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-11T17:39:37.993Z"
      },
      {
        "id": "home-032",
        "title": "Artisan Olive Wood Salad Servers & Mixing Bowl Set",
        "slug": "artisan-olive-wood-salad-servers-bowl",
        "sku": "LUM-SLD-01",
        "categoryId": "cat-home-ceramics",
        "brand": "LUMEN Studio",
        "price": 145,
        "costPrice": 65,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 20,
        "lowStockThreshold": 2,
        "rating": 4.88,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 33
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-32-1",
            "url": "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=1000&auto=format&fit=crop&q=80",
            "alt": "Artisan Olive Wood Salad Servers & Mixing Bowl Set - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Carved from a single piece of Mediterranean ancient non-producing olive timber with gorgeous dramatic grain swirls.",
        "fullDescription": "Naturally antibacterial and conditioned with organic raw walnut oil and beeswax for years of dinner gatherings.",
        "specifications": {
          "Bowl Diameter": "30 cm x H 12 cm",
          "Servers Length": "32 cm",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Hand-Wash Only"
        },
        "tags": [
          "salad-bowl",
          "olive-wood",
          "woodware",
          "salad-servers",
          "kitchen"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-09T17:39:37.993Z"
      },
      {
        "id": "home-033",
        "title": "Murano Swirl Hand-Blown Colored Glass Tumblers (Set of 6)",
        "slug": "murano-swirl-colored-glass-tumblers-set6",
        "sku": "LUM-GLS-06",
        "categoryId": "cat-home-ceramics",
        "brand": "Studio Vesper Lighting",
        "price": 135,
        "compareAtPrice": 160,
        "costPrice": 61,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 30,
        "lowStockThreshold": 2,
        "rating": 4.95,
        "reviewCount": 73,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 64
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Murano Crystal",
        "images": [
          {
            "id": "himg-33-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Murano Swirl Hand-Blown Colored Glass Tumblers (Set of 6) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Jewel-toned mouth-blown Italian crystal glasses in amber, olive, smoke, cobalt, blush, and amethyst.",
        "fullDescription": "Comfortably ribbed exterior texture with flame-polished rims for water, cocktails, and natural wines.",
        "specifications": {
          "Capacity": "350 mL (11.8 oz) per glass",
          "Care": "Dishwasher safe on delicate top rack setting",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Yes (100% Dishwasher & Microwave Safe)"
        },
        "tags": [
          "glasses",
          "tumblers",
          "murano",
          "colored-glass",
          "cocktail",
          "set-of-6"
        ],
        "sellerId": "vendor-vesper",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-07T17:39:37.993Z"
      },
      {
        "id": "home-034",
        "title": "Zenith Heavy Cast Iron Enameled Dutch Oven (5.5L)",
        "slug": "zenith-cast-iron-enameled-dutch-oven",
        "sku": "LUM-COK-01",
        "categoryId": "cat-home-ceramics",
        "brand": "LUMEN Studio",
        "price": 210,
        "compareAtPrice": 260,
        "costPrice": 95,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "lowStockThreshold": 2,
        "rating": 4.97,
        "reviewCount": 88,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 9,
          "5": 77
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Lifetime Cookware",
        "images": [
          {
            "id": "himg-34-1",
            "url": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1000&auto=format&fit=crop&q=80",
            "alt": "Zenith Heavy Cast Iron Enameled Dutch Oven (5.5L) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Multi-layer matte black enamel interior with self-basting condensation spiked lid and solid brass knob.",
        "fullDescription": "Superior thermal heat retention for artisan sourdough bread loaves, slow-braised short ribs, and winter stews.",
        "specifications": {
          "Capacity": "5.5 Liters (5.8 Quarts)",
          "Heat Rating": "Safe up to 260°C (500°F) on Induction, Gas, Electric & Oven",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Yes (100% Dishwasher & Microwave Safe)"
        },
        "tags": [
          "dutch-oven",
          "cast-iron",
          "cookware",
          "baking",
          "sourdough"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-05T17:39:37.993Z"
      },
      {
        "id": "home-035",
        "title": "Terra Matcha Ceremonial Chawan Bowl & Bamboo Whisk Kit",
        "slug": "terra-matcha-ceremonial-kit",
        "sku": "LUM-MTC-01",
        "categoryId": "cat-home-ceramics",
        "brand": "Komorebi Ceramics",
        "price": 85,
        "costPrice": 38,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 50,
        "lowStockThreshold": 2,
        "rating": 4.96,
        "reviewCount": 91,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 9,
          "5": 79
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-35-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Terra Matcha Ceremonial Chawan Bowl & Bamboo Whisk Kit - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hand-pinched shino-glazed tea bowl paired with a 100-prong golden bamboo chasen whisk and ceramic whisk stand.",
        "fullDescription": "Crafted for serene morning Japanese matcha tea preparation rituals.",
        "specifications": {
          "Kit Includes": "Shino Chawan Bowl, 100-Prong Bamboo Chasen, Ceramic Whisk Holder, Bamboo Chashaku Spoon",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Hand-Wash Only"
        },
        "tags": [
          "matcha",
          "tea-ceremony",
          "chawan",
          "bamboo-whisk",
          "japanese"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-03T17:39:37.993Z"
      },
      {
        "id": "home-036",
        "title": "Nero Marble Wine Cooler & Champagne Chiller Vessel",
        "slug": "nero-marble-wine-cooler-chiller",
        "sku": "LUM-MAR-01",
        "categoryId": "cat-home-ceramics",
        "brand": "LUMEN Studio",
        "price": 110,
        "costPrice": 50,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "lowStockThreshold": 2,
        "rating": 4.9,
        "reviewCount": 44,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 38
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "himg-36-1",
            "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1000&auto=format&fit=crop&q=80",
            "alt": "Nero Marble Wine Cooler & Champagne Chiller Vessel - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Solid Nero Marquina marble with crisp white calcite veins. Natural stone thermal mass keeps chilled bottles cold for hours.",
        "fullDescription": "No ice cubes required—simply store the cylinder in the refrigerator before hosting dinner parties.",
        "specifications": {
          "Dimensions": "Diameter 13 cm x H 19 cm (Fits standard 750ml & Champagne bottles)",
          "Weight": "2.8 kg",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Hand-Wash Only"
        },
        "tags": [
          "wine-cooler",
          "marble",
          "barware",
          "entertaining",
          "nero-marquina"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-09-01T17:39:37.993Z"
      },
      {
        "id": "home-037",
        "title": "Mizu Minimalist Ceramic Incense Burner & Brass Holder",
        "slug": "mizu-ceramic-incense-burner-set",
        "sku": "LUM-INC-01",
        "categoryId": "cat-home-ceramics",
        "brand": "Komorebi Ceramics",
        "price": 48,
        "costPrice": 22,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 65,
        "lowStockThreshold": 2,
        "rating": 4.88,
        "reviewCount": 79,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 8,
          "5": 68
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Artisan Craft",
        "images": [
          {
            "id": "himg-37-1",
            "url": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1000&auto=format&fit=crop&q=80",
            "alt": "Mizu Minimalist Ceramic Incense Burner & Brass Holder - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Calm water-droplet ceramic ash catcher dish with a solid turned brass incense stick orb.",
        "fullDescription": "Catches all burning ash effortlessly while elevating meditation and morning reading spaces.",
        "specifications": {
          "Diameter": "14 cm",
          "Materials": "Matte Stoneware & Pure Brushed Brass",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Yes (100% Dishwasher & Microwave Safe)"
        },
        "tags": [
          "incense",
          "incense-burner",
          "meditation",
          "brass",
          "ceramic"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-30T17:39:37.993Z"
      },
      {
        "id": "home-038",
        "title": "Travertine Mortar & Pestle Spice Grinding Set",
        "slug": "travertine-mortar-and-pestle",
        "sku": "LUM-MOR-01",
        "categoryId": "cat-home-ceramics",
        "brand": "LUMEN Studio",
        "price": 88,
        "costPrice": 40,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 32,
        "lowStockThreshold": 2,
        "rating": 4.93,
        "reviewCount": 51,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 44
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-38-1",
            "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1000&auto=format&fit=crop&q=80",
            "alt": "Travertine Mortar & Pestle Spice Grinding Set - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Heavyweight honed natural travertine stone for crushing coarse sea salts, peppercorns, garlic, and fresh herb pestos.",
        "fullDescription": "Rough unpolished interior creates optimal grinding friction while remaining easy to clean.",
        "specifications": {
          "Diameter": "15 cm x H 10 cm",
          "Weight": "2.6 kg",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "dishwasher_safe": "Hand-Wash Only"
        },
        "tags": [
          "mortar-pestle",
          "travertine",
          "kitchen-tools",
          "spice-grinder"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-28T17:39:37.993Z"
      },
      {
        "id": "home-039",
        "title": "Atlas High-Atlas Hand-Knotted Pure Wool Berber Rug (8x10 ft)",
        "slug": "atlas-hand-knotted-berber-wool-rug",
        "sku": "LUM-RUG-01",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 1650,
        "compareAtPrice": 1950,
        "costPrice": 743,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "piece",
        "stockQuantity": 6,
        "lowStockThreshold": 2,
        "rating": 4.97,
        "reviewCount": 29,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 3,
          "5": 25
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "100% Organic Wool",
        "images": [
          {
            "id": "himg-39-1",
            "url": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1000&auto=format&fit=crop&q=80",
            "alt": "Atlas High-Atlas Hand-Knotted Pure Wool Berber Rug (8x10 ft) - Angle 1",
            "isPrimary": true
          },
          {
            "id": "himg-39-2",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&auto=format&fit=crop&q=80",
            "alt": "Atlas High-Atlas Hand-Knotted Pure Wool Berber Rug (8x10 ft) - Angle 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Plush 35mm thick natural undyed cream sheep wool hand-knotted by artisan women in the Moroccan High Atlas Mountains.",
        "fullDescription": "Featuring subtle minimalist geometric charcoal diamond totems. Unbelievably soft underfoot with natural lanolin stain resistance.",
        "specifications": {
          "Dimensions": "240 x 300 cm (8 x 10 ft)",
          "Pile Height": "35 mm Luxury Shag Pile",
          "Material": "100% Hand-Spun Natural Mountain Sheep Wool & Cotton Warp",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room"
        },
        "variants": [
          {
            "id": "var-h-39-sz-0",
            "sku": "LUM-RUG-01-6X9-FT",
            "title": "6x9 ft",
            "price": 1650,
            "compareAtPrice": 1950,
            "stockQuantity": 6,
            "attributes": {
              "size": "6x9 ft"
            }
          },
          {
            "id": "var-h-39-sz-1",
            "sku": "LUM-RUG-01-8X10-FT",
            "title": "8x10 ft",
            "price": 1850,
            "compareAtPrice": 2150,
            "stockQuantity": 5,
            "attributes": {
              "size": "8x10 ft"
            }
          },
          {
            "id": "var-h-39-sz-2",
            "sku": "LUM-RUG-01-9X12-FT",
            "title": "9x12 ft",
            "price": 2050,
            "compareAtPrice": 2350,
            "stockQuantity": 4,
            "attributes": {
              "size": "9x12 ft"
            }
          }
        ],
        "tags": [
          "rug",
          "berber",
          "moroccan",
          "wool-rug",
          "living-room",
          "hand-knotted"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-26T17:39:37.994Z"
      },
      {
        "id": "home-040",
        "title": "Elysian Stonewashed French Linen Duvet Cover Set (Queen/King)",
        "slug": "elysian-french-linen-duvet-set",
        "sku": "LUM-LIN-01",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 280,
        "compareAtPrice": 340,
        "costPrice": 126,
        "currency": "USD",
        "type": "variable",
        "unitOfMeasure": "set",
        "stockQuantity": 30,
        "lowStockThreshold": 2,
        "rating": 4.94,
        "reviewCount": 118,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 2,
          "4": 12,
          "5": 103
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "himg-40-1",
            "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1000&auto=format&fit=crop&q=80",
            "alt": "Elysian Stonewashed French Linen Duvet Cover Set (Queen/King) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "175 GSM pure Normandy flax linen pre-washed with natural pumice stones for immediate cloud-like broken-in softness.",
        "fullDescription": "Thermo-regulating breathability keeps you cool in summer and cozy in winter. Includes 1 duvet cover and 2 pillow shams with coconut shell buttons.",
        "specifications": {
          "Includes": "1 Duvet Cover with Corner Ties + 2 Pillow Shams",
          "Fiber": "100% Certified French Flax (OEKO-TEX Standard 100)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Bedroom"
        },
        "variants": [
          {
            "id": "var-h-40-sz-0",
            "sku": "LUM-LIN-01-QUEEN",
            "title": "Queen",
            "price": 280,
            "compareAtPrice": 340,
            "stockQuantity": 30,
            "attributes": {
              "size": "Queen"
            }
          },
          {
            "id": "var-h-40-sz-1",
            "sku": "LUM-LIN-01-KING",
            "title": "King",
            "price": 480,
            "compareAtPrice": 540,
            "stockQuantity": 29,
            "attributes": {
              "size": "King"
            }
          }
        ],
        "tags": [
          "bedding",
          "linen",
          "duvet",
          "french-flax",
          "bedroom"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-24T17:39:37.994Z"
      },
      {
        "id": "home-041",
        "title": "Alpaca Cloud Chunky Hand-Knit Throw Blanket (150x200cm)",
        "slug": "alpaca-cloud-hand-knit-throw-blanket",
        "sku": "LUM-THR-01",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 220,
        "costPrice": 99,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 24,
        "lowStockThreshold": 2,
        "rating": 4.91,
        "reviewCount": 65,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 56
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "himg-41-1",
            "url": "https://images.unsplash.com/photo-1580481077195-c9a924b17169?w=1000&auto=format&fit=crop&q=80",
            "alt": "Alpaca Cloud Chunky Hand-Knit Throw Blanket (150x200cm) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Ultra-plush hand-knitted throw crafted from 80% Peruvian baby alpaca and 20% fine merino wool in natural oatmeal.",
        "fullDescription": "Hypoallergenic and naturally warmer than sheep wool without any itchiness or prickly fibers.",
        "specifications": {
          "Dimensions": "150 x 200 cm (59 x 79 inches)",
          "Composition": "80% Baby Alpaca, 20% Extra-Fine Merino Wool",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room"
        },
        "tags": [
          "throw-blanket",
          "alpaca",
          "merino-wool",
          "cozy",
          "living-room"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-22T17:39:37.994Z"
      },
      {
        "id": "home-042",
        "title": "Waffle Organic Cotton Heavy Bath Towel Bundle (6-Piece Set)",
        "slug": "waffle-organic-cotton-bath-towel-bundle",
        "sku": "LUM-TWL-06",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 160,
        "compareAtPrice": 195,
        "costPrice": 72,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 42,
        "lowStockThreshold": 2,
        "rating": 4.89,
        "reviewCount": 84,
        "ratingDistribution": {
          "1": 3,
          "2": 0,
          "3": 1,
          "4": 8,
          "5": 72
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-42-1",
            "url": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1000&auto=format&fit=crop&q=80",
            "alt": "Waffle Organic Cotton Heavy Bath Towel Bundle (6-Piece Set) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Deep three-dimensional honeycomb waffle weave 600 GSM GOTS certified organic Aegean long-staple cotton.",
        "fullDescription": "Dries 40% faster than traditional terry towels while gently exfoliating skin during post-bath rituals.",
        "specifications": {
          "Set Contains": "2 Bath Sheets (100x150cm), 2 Hand Towels (50x90cm), 2 Washcloths (30x30cm)",
          "Certification": "GOTS Certified 100% Organic Turkish Cotton",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Bathroom"
        },
        "tags": [
          "towels",
          "waffle-towel",
          "organic-cotton",
          "bath",
          "set-of-6"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-20T17:39:37.994Z"
      },
      {
        "id": "home-043",
        "title": "Sahara Raw Silk & Linen Slub Decorative Cushion (50x50cm)",
        "slug": "sahara-raw-silk-linen-cushion",
        "sku": "LUM-CSH-01",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 78,
        "costPrice": 35,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 55,
        "lowStockThreshold": 2,
        "rating": 4.87,
        "reviewCount": 46,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 39
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Artisan Craft",
        "images": [
          {
            "id": "himg-43-1",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sahara Raw Silk & Linen Slub Decorative Cushion (50x50cm) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Tactile slub textured raw silk front with stonewashed linen back and 100% RDS certified duck feather insert.",
        "fullDescription": "Creates effortless elevated layering on accent chairs, leather daybeds, and master bedding suites.",
        "specifications": {
          "Dimensions": "50 x 50 cm with Concealed YKK Brass Zipper",
          "Insert": "Includes Heavyweight RDS Certified Feather/Down Cushion Pad",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room"
        },
        "tags": [
          "cushion",
          "pillow",
          "raw-silk",
          "linen",
          "living-room-decor"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-18T17:39:37.994Z"
      },
      {
        "id": "home-044",
        "title": "Kyoto Hand-Dyed Indigo Shibori Linen Noren Room Divider",
        "slug": "kyoto-shibori-indigo-linen-noren",
        "sku": "LUM-NOR-01",
        "categoryId": "cat-home-textiles",
        "brand": "Komorebi Ceramics",
        "price": 130,
        "costPrice": 59,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 26,
        "lowStockThreshold": 2,
        "rating": 4.93,
        "reviewCount": 37,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 32
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-44-1",
            "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kyoto Hand-Dyed Indigo Shibori Linen Noren Room Divider - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Traditional split doorway hanging fabric hand-dyed with natural plant-extracted Japanese indigo (Aizome).",
        "fullDescription": "Provides gentle privacy between rooms while allowing refreshing breezes and filtered sunlight to flow.",
        "specifications": {
          "Dimensions": "W 85 x H 150 cm with Top Tension Rod Pocket",
          "Dye Method": "100% Natural Fermented Indigo Vat Dyeing",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Home Studio"
        },
        "tags": [
          "noren",
          "doorway-curtain",
          "indigo",
          "shibori",
          "japanese-textiles"
        ],
        "sellerId": "vendor-komorebi",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-16T17:39:37.994Z"
      },
      {
        "id": "home-045",
        "title": "Botanical Velvet Thermal Blackout Drapery Panel (Pair)",
        "slug": "botanical-velvet-thermal-blackout-drapery",
        "sku": "LUM-DRP-02",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 340,
        "compareAtPrice": 410,
        "costPrice": 153,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 19,
        "lowStockThreshold": 2,
        "rating": 4.92,
        "reviewCount": 50,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 43
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-45-1",
            "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&auto=format&fit=crop&q=80",
            "alt": "Botanical Velvet Thermal Blackout Drapery Panel (Pair) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Matte cotton-pile acoustic velvet curtains with hidden 100% light-blocking thermal acoustic liner.",
        "fullDescription": "Dramatically blocks drafts, dampens echo in high-ceiling rooms, and ensures complete deep sleep darkness.",
        "specifications": {
          "Dimensions": "Pair includes 2 Panels (Each: W 135 x L 270 cm)",
          "Header": "Dual-Function 3-in-1 Pole Pocket & Pinch Pleat Hook Header",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Bedroom"
        },
        "tags": [
          "curtains",
          "drapes",
          "blackout",
          "velvet",
          "thermal",
          "acoustic"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-14T17:39:37.994Z"
      },
      {
        "id": "home-046",
        "title": "Sisal & Jute Geometric Border Runner Rug (2.5x10 ft)",
        "slug": "sisal-jute-border-runner-rug",
        "sku": "LUM-RUG-02",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 190,
        "costPrice": 86,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "lowStockThreshold": 2,
        "rating": 4.86,
        "reviewCount": 41,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 35
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "images": [
          {
            "id": "himg-46-1",
            "url": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sisal & Jute Geometric Border Runner Rug (2.5x10 ft) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "High-traffic hallway runner hand-woven from sustainable East African sisal with non-slip natural latex backing.",
        "fullDescription": "Finished with a wide cotton twill border tape for pristine modern hallway and kitchen galley transitions.",
        "specifications": {
          "Dimensions": "75 x 300 cm (2.5 x 10 ft)",
          "Backing": "Eco-Friendly Non-Slip Natural Rubber Latex",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room"
        },
        "tags": [
          "runner-rug",
          "sisal",
          "jute",
          "hallway",
          "natural-fiber"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-12T17:39:37.994Z"
      },
      {
        "id": "home-047",
        "title": "Linen Hemstitched Table Runner & Napkins Dining Set",
        "slug": "linen-hemstitched-table-runner-napkins",
        "sku": "LUM-TAB-RUN",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 98,
        "costPrice": 44,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 44,
        "lowStockThreshold": 2,
        "rating": 4.9,
        "reviewCount": 59,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 51
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-47-1",
            "url": "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=1000&auto=format&fit=crop&q=80",
            "alt": "Linen Hemstitched Table Runner & Napkins Dining Set - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Heavy 220 GSM pure linen table runner (45x250cm) with 6 matching mitered corner hemstitched dinner napkins.",
        "fullDescription": "Drapes gracefully with natural organic texture for holiday feasts and relaxed Sunday brunches.",
        "specifications": {
          "Includes": "1 Table Runner (45x250cm) + 6 Dinner Napkins (45x45cm)",
          "Care": "Machine wash warm, tumble dry low for relaxed texture",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Dining Room"
        },
        "tags": [
          "table-runner",
          "napkins",
          "table-linens",
          "entertaining",
          "dining"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-10T17:39:37.994Z"
      },
      {
        "id": "home-048",
        "title": "Merino Wool Felt Acoustic Wall Tiles (Set of 12 Hexagons)",
        "slug": "merino-wool-acoustic-wall-tiles-12pack",
        "sku": "LUM-ACS-12",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 180,
        "costPrice": 81,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 32,
        "lowStockThreshold": 2,
        "rating": 4.94,
        "reviewCount": 47,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 41
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-48-1",
            "url": "https://images.unsplash.com/photo-1580481077195-c9a924b17169?w=1000&auto=format&fit=crop&q=80",
            "alt": "Merino Wool Felt Acoustic Wall Tiles (Set of 12 Hexagons) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "12mm compressed pure German merino wool felt acoustic tiles with peel-and-stick damage-free adhesive backing.",
        "fullDescription": "Absorbs flutter echoes in home recording studios, video conference offices, and minimalist living rooms.",
        "specifications": {
          "Noise Reduction Coefficient": "NRC 0.85 (High Voice Frequency Absorption)",
          "Tile Size": "30 cm x 26 cm per hexagon (Covers approx 0.8 sqm)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Home Studio"
        },
        "tags": [
          "acoustic-panels",
          "wool-felt",
          "studio",
          "wall-decor",
          "sound-absorbing"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-08T17:39:37.994Z"
      },
      {
        "id": "home-049",
        "title": "Mulberry Silk Oxford Pillowcases (Set of 2)",
        "slug": "mulberry-silk-oxford-pillowcases-pair",
        "sku": "LUM-SLK-02",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 120,
        "costPrice": 54,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 50,
        "lowStockThreshold": 2,
        "rating": 4.96,
        "reviewCount": 110,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 2,
          "4": 11,
          "5": 96
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "22 Momme Silk",
        "images": [
          {
            "id": "himg-49-1",
            "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1000&auto=format&fit=crop&q=80",
            "alt": "Mulberry Silk Oxford Pillowcases (Set of 2) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "22 Momme Grade 6A pure long-strand mulberry silk with wide 5cm Oxford border flanges.",
        "fullDescription": "Glides smoothly against facial skin and hair cuticles to prevent sleep creases, friction frizz, and moisture loss.",
        "specifications": {
          "Size": "Standard / Queen (50 x 75 cm + 5cm flange)",
          "Grade": "100% Pure Grade 6A Mulberry Silk (Both Sides)",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Bedroom"
        },
        "tags": [
          "silk-pillowcase",
          "beauty-sleep",
          "mulberry-silk",
          "hair-care",
          "bedroom"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-06T17:39:37.994Z"
      },
      {
        "id": "home-050",
        "title": "Chunky Wool Floor Pouf & Meditation Ottoman (Diameter 60cm)",
        "slug": "chunky-wool-floor-pouf-ottoman",
        "sku": "LUM-POF-01",
        "categoryId": "cat-home-textiles",
        "brand": "LUMEN Studio",
        "price": 175,
        "costPrice": 79,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "lowStockThreshold": 2,
        "rating": 4.88,
        "reviewCount": 36,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 31
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "himg-50-1",
            "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1000&auto=format&fit=crop&q=80",
            "alt": "Chunky Wool Floor Pouf & Meditation Ottoman (Diameter 60cm) - Angle 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hand-braided thick New Zealand wool cable knit pouf filled with dense shape-retaining micro-bead core.",
        "fullDescription": "Functions as impromptu casual floor seating, comfortable footrest, or low tea tray surface.",
        "specifications": {
          "Dimensions": "Diameter 60 cm x H 35 cm",
          "Weight": "4.5 kg",
          "Craftsmanship": "Handmade by Guild Artisans using FSC-Certified & Sustainable Raw Materials",
          "White Glove Delivery": "Available for oversized pieces with inside room placement and packaging removal"
        },
        "attributes": {
          "room": "Living Room"
        },
        "tags": [
          "pouf",
          "ottoman",
          "floor-cushion",
          "wool",
          "living-room"
        ],
        "sellerId": "vendor-lumen-direct",
        "warranty": "5-Year Frame & Craftsmanship Structural Guarantee",
        "returnPolicy": "30-Day In-Home Trial with Free Returns in Original Packaging",
        "createdAt": "2026-08-04T17:39:37.994Z"
      }
    ],
    "banners": [
      {
        "id": "ban-h1",
        "title": "Spaces of Calm & Clarity",
        "subtitle": "Handcrafted Japanese Washi, Solid White Oak, and Sculptural Bouclé",
        "tag": "SANCTUARY EDITION",
        "ctaText": "View Furniture",
        "linkCategory": "cat-home-furniture",
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#d97706",
        "overlayGradient": "from-stone-950/80 via-stone-900/50 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-lumen-direct",
        "name": "LUMEN Studio Flagship",
        "slug": "lumen-flagship",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.94,
        "reviewCount": 310,
        "salesCount": 1800,
        "description": "Nordic and Japanese-inspired architectural furniture and lighting design studio.",
        "location": "Stockholm, Sweden",
        "commissionRate": 10,
        "joinedDate": "2023-03-01",
        "email": "studio@lumen-living.com",
        "phone": "+46 8 123 456",
        "balance": 18400,
        "payoutMethod": "Bank Wire",
        "isVerified": true
      },
      {
        "id": "vendor-komorebi",
        "name": "Komorebi Crafts Studio",
        "slug": "komorebi-crafts",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.92,
        "reviewCount": 140,
        "salesCount": 1200,
        "description": "Handmade washi rice paper lanterns and cast brass lighting fixtures.",
        "location": "Kyoto, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-06-15",
        "email": "contact@komorebicrafts.jp",
        "phone": "+81 75 555 0192",
        "balance": 9200,
        "payoutMethod": "Stripe Connect",
        "isVerified": true
      },
      {
        "id": "vendor-kyoto-ceramics",
        "name": "Kyoto Stoneware Works",
        "slug": "kyoto-stoneware",
        "logo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 220,
        "salesCount": 2900,
        "description": "Hand-thrown wood-fired stoneware ceramics and matcha chawan bowls.",
        "location": "Shigaraki, Shiga, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-01-20",
        "email": "master@kyotoceramics.jp",
        "phone": "+81 748 82 0011",
        "balance": 14600,
        "payoutMethod": "Bank Wire",
        "isVerified": true
      },
      {
        "id": "vendor-nordic-linen",
        "name": "Nordic Linen & Weavers",
        "slug": "nordic-linen",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.91,
        "reviewCount": 180,
        "salesCount": 2400,
        "description": "Heritage stonewashed French flax linen and pure Mongolian cashmere textiles.",
        "location": "Copenhagen, Denmark",
        "commissionRate": 10,
        "joinedDate": "2023-04-10",
        "email": "hello@nordiclinen.dk",
        "phone": "+45 33 99 88 77",
        "balance": 11800,
        "payoutMethod": "SEPA Transfer",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "hpost-1",
        "title": "The Art of Light Temperature: Crafting Circadian Balance at Home",
        "slug": "circadian-lighting-guide",
        "excerpt": "How shifting from 5000K daylight work lighting to 2200K amber evening glows promotes natural rest and mental calm.",
        "content": "Lighting is the invisible architecture of your emotional state...",
        "coverImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Elinor Lind",
          "role": "Interior Architect",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 05, 2026",
        "category": "Design Philosophy",
        "tags": [
          "Lighting",
          "Circadian",
          "Wellness"
        ],
        "readTime": "4 min read"
      }
    ]
  },
  "grocery": {
    "id": "grocery",
    "name": "TERRA Harvest & Pantry",
    "tagline": "Direct-From-Farm Organic Produce, Artisan Pantry & Cold-Pressed Oils",
    "categoryTag": "Gourmet Grocery & Organics",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "kg",
    "theme": {
      "presetName": "grocery",
      "primaryColor": "#14532d",
      "primaryHover": "#166534",
      "secondaryColor": "#65a30d",
      "accentColor": "#16a34a",
      "surfaceColor": "#ffffff",
      "surfaceElevated": "#f0fdf4",
      "textColor": "#052e16",
      "textMuted": "#4b5563",
      "borderColor": "#dcfce7",
      "fontDisplay": "Plus Jakarta Sans, system-ui, sans-serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-2xl",
      "shadowIntensity": "shadow-md",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-groc-produce",
        "name": "Organic Farm Harvest",
        "slug": "organic-produce",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=80",
        "description": "Picked at peak dawn freshness, pesticide-free heirloom fruits, roots, and leafy greens.",
        "allowedUnits": [
          "kg",
          "g",
          "lb",
          "box"
        ],
        "attributes": [
          {
            "key": "dietary",
            "label": "Dietary & Certification",
            "type": "select",
            "options": [
              "100% USDA Certified Organic",
              "Biodynamic Demeter",
              "Non-GMO Project Verified",
              "Wild Harvested"
            ],
            "filterable": true,
            "displayInSpec": true
          },
          {
            "key": "origin",
            "label": "Farm Origin",
            "type": "select",
            "options": [
              "Sonoma Valley Organic Farm",
              "Sicily Heritage Grove",
              "Kyoto Mountain Harvest"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-groc-pantry",
        "name": "Artisan Pantry & Single-Estate Oils",
        "slug": "artisan-pantry",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80",
        "description": "Cold-pressed extra virgin olive oils, 25-year aged balsamic vinegars, and raw forest honeys.",
        "allowedUnits": [
          "liter",
          "ml",
          "box",
          "piece"
        ],
        "attributes": [
          {
            "key": "press_method",
            "label": "Extraction Method",
            "type": "select",
            "options": [
              "First Cold-Pressed (Sub-22°C)",
              "Traditional Stone Mill",
              "Raw & Unfiltered"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-groc-bakery",
        "name": "Artisan Bakery & Specialty Coffee",
        "slug": "bakery-specialty-coffee",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
        "description": "72-hour slow cold-fermented sourdough batards, single-origin Gesha coffee, and ceremonial grade Uji matcha.",
        "allowedUnits": [
          "piece",
          "g",
          "box",
          "bottle"
        ],
        "attributes": [
          {
            "key": "dietary",
            "label": "Dietary & Certification",
            "type": "select",
            "options": [
              "100% USDA Certified Organic",
              "Wild Harvested",
              "Gluten-Friendly"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      },
      {
        "id": "cat-groc-beverages",
        "name": "Botanical Elixirs & Cold-Pressed Juices",
        "slug": "botanical-elixirs-juices",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
        "description": "Raw honey fermented jun kombuchas, hydraulic-pressed immunity green juices, and tart Montmorency sleep tonics.",
        "allowedUnits": [
          "bottle",
          "box"
        ],
        "attributes": [
          {
            "key": "dietary",
            "label": "Dietary & Certification",
            "type": "select",
            "options": [
              "100% USDA Certified Organic",
              "Wild Harvested",
              "Probiotic Rich"
            ],
            "filterable": true,
            "displayInSpec": true
          }
        ]
      }
    ],
    "products": [
      {
        "id": "groc-001",
        "title": "Heirloom Honeycrisp Organic Apple Harvest (2 kg Box)",
        "slug": "heirloom-honeycrisp-organic-apples",
        "sku": "TERRA-APL-02",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 18,
        "costPrice": 7,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "kg",
        "stockQuantity": 55,
        "lowStockThreshold": 10,
        "rating": 4.95,
        "reviewCount": 92,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 82
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Dawn Picked",
        "images": [
          {
            "id": "gimg-1-1",
            "url": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heirloom Honeycrisp Organic Apple Harvest (2 kg Box) - Photo 1",
            "isPrimary": true
          },
          {
            "id": "gimg-1-2",
            "url": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heirloom Honeycrisp Organic Apple Harvest (2 kg Box) - Photo 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Unsprayed heirloom Honeycrisp apples picked at peak sugar-brix ratio from high-altitude orchard slopes.",
        "fullDescription": "Crisp, explosively juicy with a lively balance of floral tartness and deep honey sweetness. Shipped chilled in breathable recyclable fiber trays.",
        "specifications": {
          "Net Weight": "2.0 kg (~8-10 Large Apples)",
          "Certification": "USDA 100% Certified Organic & Non-GMO Verified",
          "Harvest Date": "Picked within 24 hours of dispatch",
          "Storage": "Refrigerate at 2-4°C for up to 4 weeks of peak crispness",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "apples",
          "organic",
          "fruit",
          "farm-fresh",
          "produce"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-11-10T17:39:37.996Z"
      },
      {
        "id": "groc-002",
        "title": "Kyoto Micro-Greens & Edible Flowers Chef Box (300g)",
        "slug": "kyoto-microgreens-edible-flowers-box",
        "sku": "TERRA-GRN-01",
        "categoryId": "cat-groc-produce",
        "brand": "Kyoto Mountain Farm",
        "price": 24,
        "costPrice": 10,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "box",
        "stockQuantity": 30,
        "lowStockThreshold": 5,
        "rating": 4.93,
        "reviewCount": 47,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 42
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "badge": "Chef Specialty",
        "subscriptionDetails": {
          "interval": "weekly",
          "discountPercentage": 15
        },
        "images": [
          {
            "id": "gimg-2-1",
            "url": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Kyoto Micro-Greens & Edible Flowers Chef Box (300g) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Living hydroponic pea shoots, red shiso micro-leaves, radish sprouts, and seasonal borage and viola blossoms.",
        "fullDescription": "Packed with 40x the micronutrient density of mature vegetables. Packed on live roots for maximum culinary freshness.",
        "specifications": {
          "Weight": "300g living root tray",
          "Varieties": "Red Shiso, Wasabi Radish, Tendril Pea, Viola, Nasturtium",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "Biodynamic Demeter",
          "origin": "Kyoto Mountain Harvest"
        },
        "tags": [
          "microgreens",
          "edible-flowers",
          "chef-box",
          "hydroponic",
          "gourmet"
        ],
        "sellerId": "vendor-kyoto-farm",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-11-08T17:39:37.996Z"
      },
      {
        "id": "groc-003",
        "title": "Tuscan Lacinato Dinosaur Kale & Wild Rocket (1 kg Bundle)",
        "slug": "tuscan-lacinato-kale-wild-rocket",
        "sku": "TERRA-KLE-01",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 12,
        "costPrice": 5,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "kg",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.88,
        "reviewCount": 35,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 31
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-3-1",
            "url": "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=1000&auto=format&fit=crop&q=80",
            "alt": "Tuscan Lacinato Dinosaur Kale & Wild Rocket (1 kg Bundle) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Deep emerald textured Cavolo Nero kale paired with peppery wild arugula grown in compost-enriched volcanic soil.",
        "fullDescription": "Rich in lutein, vitamin K, and active antioxidants. Ideal for Tuscan white bean soups, raw massaged salads, and morning green juices.",
        "specifications": {
          "Bundle": "600g Lacinato Kale + 400g Wild Rocket",
          "Farming": "Regenerative organic no-till agriculture",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "kale",
          "arugula",
          "greens",
          "superfoods",
          "organic"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-11-06T17:39:37.996Z"
      },
      {
        "id": "groc-004",
        "title": "Sicilian Blood Oranges (Tarocco Reserve 3 kg Wooden Crate)",
        "slug": "sicilian-blood-oranges-tarocco",
        "sku": "TERRA-ORG-03",
        "categoryId": "cat-groc-produce",
        "brand": "Sicily Heritage Grove",
        "price": 32,
        "compareAtPrice": 38,
        "costPrice": 13,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 28,
        "lowStockThreshold": 5,
        "rating": 4.98,
        "reviewCount": 68,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 61
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Volcanic Soil DOP",
        "images": [
          {
            "id": "gimg-4-1",
            "url": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sicilian Blood Oranges (Tarocco Reserve 3 kg Wooden Crate) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Grown on the volcanic slopes of Mount Etna. Deep ruby anthocyanin-streaked flesh with raspberry-infused citrus sweetness.",
        "fullDescription": "The most prized blood orange variety in Europe. Thin-skinned, seedless, and loaded with natural vitamin C.",
        "specifications": {
          "Net Weight": "3.0 kg in traditional slatted wooden keepsake crate",
          "Origin": "Catania & Syracuse, Mount Etna, Sicily (DOP)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sicily Heritage Grove"
        },
        "tags": [
          "blood-orange",
          "citrus",
          "sicilian",
          "dop",
          "fruit-crate"
        ],
        "sellerId": "vendor-sicily-groves",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-11-04T17:39:37.997Z"
      },
      {
        "id": "groc-005",
        "title": "Wild Foraged Chanterelle & Porcini Mushrooms (500g Fresh)",
        "slug": "wild-foraged-chanterelles-porcini",
        "sku": "TERRA-MSH-01",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 38,
        "costPrice": 15,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 20,
        "lowStockThreshold": 5,
        "rating": 4.94,
        "reviewCount": 44,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 39
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Wild Foraged",
        "images": [
          {
            "id": "gimg-5-1",
            "url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1000&auto=format&fit=crop&q=80",
            "alt": "Wild Foraged Chanterelle & Porcini Mushrooms (500g Fresh) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hand-harvested golden chanterelles and Boletus edulis porcini gathered in old-growth pine forests after autumn rains.",
        "fullDescription": "Meaty texture with apricot and hazelnut aromas. Cleaned with horsehair brushes and delivered ready for garlic butter sautés.",
        "specifications": {
          "Weight": "500 grams mixed seasonal harvest",
          "Species": "Cantharellus cibarius & Boletus edulis",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "Wild Harvested",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "mushrooms",
          "porcini",
          "chanterelle",
          "wild-foraged",
          "gourmet"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-11-02T17:39:37.997Z"
      },
      {
        "id": "groc-006",
        "title": "Rainbow Heirloom Carrots with Leafy Tops (1.5 kg Bunch)",
        "slug": "rainbow-heirloom-carrots-bunch",
        "sku": "TERRA-CRT-01",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 11,
        "costPrice": 4,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "kg",
        "stockQuantity": 45,
        "lowStockThreshold": 5,
        "rating": 4.89,
        "reviewCount": 52,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 46
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "gimg-6-1",
            "url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1000&auto=format&fit=crop&q=80",
            "alt": "Rainbow Heirloom Carrots with Leafy Tops (1.5 kg Bunch) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Purple Haze, Atomic Red, Solar Yellow, and Cosmic White sweet heirloom carrots with edible feathery green tops for pesto.",
        "fullDescription": "Gently dug by hand from deep sandy loam to protect delicate root tips and preserve intense earthy sweetness.",
        "specifications": {
          "Weight": "1.5 kg with full fresh greens attached",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "carrots",
          "heirloom",
          "organic",
          "root-vegetables",
          "produce"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-31T17:39:37.997Z"
      },
      {
        "id": "groc-007",
        "title": "Hass Avocado Estate Harvest (Box of 8 Extra-Large)",
        "slug": "hass-avocado-estate-harvest-box8",
        "sku": "TERRA-AVO-08",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 22,
        "costPrice": 9,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "box",
        "stockQuantity": 38,
        "lowStockThreshold": 5,
        "rating": 4.96,
        "reviewCount": 89,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 79
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Farm Harvest",
        "subscriptionDetails": {
          "interval": "biweekly",
          "discountPercentage": 10
        },
        "images": [
          {
            "id": "gimg-7-1",
            "url": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=1000&auto=format&fit=crop&q=80",
            "alt": "Hass Avocado Estate Harvest (Box of 8 Extra-Large) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Tree-ripened, exceptionally buttery organic Hass avocados with high heart-healthy oleic oil content.",
        "fullDescription": "Never gas-ripened. Shipped green-firm so you can enjoy them over 10 days as they gently soften on your counter.",
        "specifications": {
          "Count": "8 Jumbo Grade A Avocados (~280g each)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "avocado",
          "organic",
          "healthy-fats",
          "superfood",
          "produce"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-29T17:39:37.997Z"
      },
      {
        "id": "groc-008",
        "title": "Heirloom Black Krim & Cherokee Purple Tomatoes (1.5 kg)",
        "slug": "heirloom-black-krim-tomatoes",
        "sku": "TERRA-TOM-02",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 19,
        "costPrice": 8,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "kg",
        "stockQuantity": 32,
        "lowStockThreshold": 5,
        "rating": 4.92,
        "reviewCount": 61,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 54
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Open Pollinated",
        "images": [
          {
            "id": "gimg-8-1",
            "url": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heirloom Black Krim & Cherokee Purple Tomatoes (1.5 kg) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Vine-ripened heritage beefsteak tomatoes with smoky, savory umami depth that modern hybrids have lost.",
        "fullDescription": "Irreplaceable for Caprese salads with buffalo mozzarella, flaky sea salt, and cold-pressed extra virgin olive oil.",
        "specifications": {
          "Weight": "1.5 kg (~4-6 Large Tomatoes)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "tomatoes",
          "heirloom",
          "organic",
          "summer-harvest",
          "produce"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-27T17:39:37.997Z"
      },
      {
        "id": "groc-009",
        "title": "Meyer Lemons & Key Limes Basket (2 kg Mixed Citrus)",
        "slug": "meyer-lemons-key-limes-basket",
        "sku": "TERRA-LMN-02",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 16,
        "costPrice": 6,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "kg",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.91,
        "reviewCount": 49,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 43
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-9-1",
            "url": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1000&auto=format&fit=crop&q=80",
            "alt": "Meyer Lemons & Key Limes Basket (2 kg Mixed Citrus) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Fragrant thin-skinned Meyer lemons (cross between lemon and mandarin) paired with intensely aromatic Key limes.",
        "fullDescription": "Ideal for homemade lemon curd, vinaigrettes, cocktails, and fish ceviche.",
        "specifications": {
          "Contents": "1.2 kg Meyer Lemons + 800g Key Limes",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "lemon",
          "lime",
          "citrus",
          "baking",
          "cocktails"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-25T17:39:37.997Z"
      },
      {
        "id": "groc-010",
        "title": "Fresh Purple Garlic & Shallot Braid (1 kg Artisan Braid)",
        "slug": "purple-garlic-shallot-artisan-braid",
        "sku": "TERRA-GRL-01",
        "categoryId": "cat-groc-produce",
        "brand": "Sicily Heritage Grove",
        "price": 26,
        "costPrice": 10,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 25,
        "lowStockThreshold": 5,
        "rating": 4.97,
        "reviewCount": 38,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 34
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-10-1",
            "url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fresh Purple Garlic & Shallot Braid (1 kg Artisan Braid) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Naturally cured softneck purple garlic bulbs and French banana shallots hand-braided on natural twine.",
        "fullDescription": "Hang in your kitchen for easy cloves whenever cooking. Mild allicin heat with sweet caramelized notes when roasted.",
        "specifications": {
          "Weight": "1.0 kg Braid (approx. 14 garlic bulbs & 10 shallots)",
          "Shelf Life": "6 months when stored in cool, ventilated kitchen pantry",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sicily Heritage Grove"
        },
        "tags": [
          "garlic",
          "shallots",
          "allium",
          "cooking-staple",
          "artisan"
        ],
        "sellerId": "vendor-sicily-groves",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-23T17:39:37.997Z"
      },
      {
        "id": "groc-011",
        "title": "Japanese Sweet Satsumaimo Yams (2 kg Box)",
        "slug": "japanese-sweet-satsumaimo-yams",
        "sku": "TERRA-YAM-02",
        "categoryId": "cat-groc-produce",
        "brand": "Kyoto Mountain Farm",
        "price": 18,
        "costPrice": 7,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "kg",
        "stockQuantity": 36,
        "lowStockThreshold": 5,
        "rating": 4.93,
        "reviewCount": 45,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 40
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "gimg-11-1",
            "url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1000&auto=format&fit=crop&q=80",
            "alt": "Japanese Sweet Satsumaimo Yams (2 kg Box) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Deep purple skin with creamy golden flesh that turns buttery, chestnut-sweet, and velvety when slow roasted.",
        "fullDescription": "High in dietary fiber, potassium, and slow-burning complex carbs for athletic sustained energy.",
        "specifications": {
          "Weight": "2.0 kg (~6-8 Medium Yams)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Kyoto Mountain Harvest"
        },
        "tags": [
          "sweet-potato",
          "yams",
          "japanese",
          "roasting",
          "healthy"
        ],
        "sellerId": "vendor-kyoto-farm",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-21T17:39:37.997Z"
      },
      {
        "id": "groc-012",
        "title": "Seasonal Organic Farm CSA Harvest Box (Standard Family 8 kg)",
        "slug": "seasonal-organic-csa-harvest-box",
        "sku": "TERRA-CSA-08",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 58,
        "compareAtPrice": 72,
        "costPrice": 23,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "box",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.98,
        "reviewCount": 154,
        "ratingDistribution": {
          "1": 1,
          "2": 1,
          "3": 2,
          "4": 12,
          "5": 138
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Weekly Farm Share",
        "subscriptionDetails": {
          "interval": "weekly",
          "discountPercentage": 20
        },
        "images": [
          {
            "id": "gimg-12-1",
            "url": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1000&auto=format&fit=crop&q=80",
            "alt": "Seasonal Organic Farm CSA Harvest Box (Standard Family 8 kg) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Curated weekly farm bounty containing 12-14 seasonal heirloom vegetables, crisp orchard fruits, and fresh culinary herbs.",
        "fullDescription": "Includes recipe cards from our farm kitchen. 100% grown without synthetic chemicals or pesticides.",
        "specifications": {
          "Weight": "8.0 - 9.0 kg diverse seasonal selection",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "csa-box",
          "produce-subscription",
          "organic-farm",
          "seasonal",
          "vegetables"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-19T17:39:37.998Z"
      },
      {
        "id": "groc-013",
        "title": "Fresh French Culinary Herb Bouquets (Tarragon, Thyme, Rosemary, Sage)",
        "slug": "fresh-french-culinary-herb-bouquets",
        "sku": "TERRA-HRB-04",
        "categoryId": "cat-groc-produce",
        "brand": "Sonoma Valley Organic Farm",
        "price": 14,
        "costPrice": 6,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 48,
        "lowStockThreshold": 5,
        "rating": 4.9,
        "reviewCount": 42,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 37
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Farm Harvest",
        "images": [
          {
            "id": "gimg-13-1",
            "url": "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fresh French Culinary Herb Bouquets (Tarragon, Thyme, Rosemary, Sage) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "4 generous bunches of freshly clipped aromatics wrapped in damp butcher paper to preserve essential aromatic oils.",
        "fullDescription": "Essential building blocks for roasting meats, flavoring compound butters, and seasoning pan sauces.",
        "specifications": {
          "Includes": "French Tarragon, Winter Thyme, Tuscan Rosemary, Purple Garden Sage",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "herbs",
          "tarragon",
          "rosemary",
          "thyme",
          "culinary"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-17T17:39:37.998Z"
      },
      {
        "id": "groc-014",
        "title": "Heirloom Taggiasca Extra Virgin Olive Oil (Single Estate 500ml)",
        "slug": "taggiasca-extra-virgin-olive-oil",
        "sku": "TERRA-OIL-01",
        "categoryId": "cat-groc-pantry",
        "brand": "Frantoio San Michele",
        "price": 34,
        "compareAtPrice": 42,
        "costPrice": 14,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "bottle",
        "stockQuantity": 45,
        "lowStockThreshold": 5,
        "rating": 4.96,
        "reviewCount": 78,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 70
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Single Estate Reserve",
        "subscriptionDetails": {
          "interval": "monthly",
          "discountPercentage": 15
        },
        "images": [
          {
            "id": "gimg-14-1",
            "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heirloom Taggiasca Extra Virgin Olive Oil (Single Estate 500ml) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Harvested by hand in Liguria, Italy. Pressed within 4 hours with ultra-low 0.18% acidity and vibrant notes of artichoke and fresh grass.",
        "fullDescription": "Certified Protected Designation of Origin (DOP). Bottled in dark UV-resistant glass to protect poly-phenols and delicate aromatic terpenes.",
        "specifications": {
          "Net Volume": "500 mL (16.9 fl oz)",
          "Acidity": "< 0.20% (Ultra-low Free Fatty Acid)",
          "Harvest Date": "November 2025 (Current Crop Year)",
          "Origin": "Imperia, Liguria, Italy",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "press_method": "First Cold-Pressed (Sub-22°C)",
          "origin": "Sicily Heritage Grove"
        },
        "tags": [
          "olive-oil",
          "organic",
          "gourmet",
          "pantry",
          "subscription"
        ],
        "sellerId": "vendor-san-michele",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-15T17:39:37.998Z"
      },
      {
        "id": "groc-015",
        "title": "Wild Tasmanian Leatherwood Raw Honeycomb (400g Box)",
        "slug": "tasmanian-leatherwood-honeycomb",
        "sku": "TERRA-HON-09",
        "categoryId": "cat-groc-pantry",
        "brand": "Wild Rainforest Apiary",
        "price": 28,
        "costPrice": 11,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 30,
        "lowStockThreshold": 5,
        "rating": 4.92,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 35
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "gimg-15-1",
            "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1000&auto=format&fit=crop&q=80",
            "alt": "Wild Tasmanian Leatherwood Raw Honeycomb (400g Box) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "100% pure raw honeycomb cut straight from pristine UNESCO wilderness hives. Spicy floral bouquet unique to the ancient Leatherwood tree.",
        "fullDescription": "Completely unheated, unpasteurized, and unfiltered. Eat the beeswax comb whole on artisanal cheeses, warm sourdough, or with fresh yogurt.",
        "specifications": {
          "Net Weight": "400g (14.1 oz)",
          "Ingredients": "100% Pure Raw Honey & Natural Beeswax",
          "Floral Source": "Eucryphia lucida (Leatherwood flower)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "Wild Harvested"
        },
        "tags": [
          "honey",
          "honeycomb",
          "raw-honey",
          "pantry",
          "superfood"
        ],
        "sellerId": "vendor-rainforest-honey",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-13T17:39:37.998Z"
      },
      {
        "id": "groc-016",
        "title": "Traditional Aceto Balsamico di Modena Extravecchio (25-Year Aged 100ml)",
        "slug": "traditional-balsamic-modena-25yr",
        "sku": "TERRA-BLS-25",
        "categoryId": "cat-groc-pantry",
        "brand": "Frantoio San Michele",
        "price": 120,
        "compareAtPrice": 145,
        "costPrice": 48,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 18,
        "lowStockThreshold": 5,
        "rating": 4.99,
        "reviewCount": 42,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 38
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "25-Year DOP Gold Cap",
        "images": [
          {
            "id": "gimg-16-1",
            "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1000&auto=format&fit=crop&q=80",
            "alt": "Traditional Aceto Balsamico di Modena Extravecchio (25-Year Aged 100ml) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Aged through a battery of seven heritage wooden casks (oak, chestnut, cherry, ash, mulberry, juniper).",
        "fullDescription": "Thick, syrupy nectar with sublime balance of dark wood tannins, cooked grape must, and complex acidity. Drizzle drop by drop over aged Parmigiano or strawberries.",
        "specifications": {
          "Volume": "100 mL in Giugiaro spherical consortium bottle",
          "Aging": "Minimum 25 Years in wood cask battery (Extravecchio DOP)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "press_method": "Traditional Stone Mill"
        },
        "tags": [
          "balsamic",
          "modena",
          "dop",
          "aged-vinegar",
          "luxury-pantry"
        ],
        "sellerId": "vendor-san-michele",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-11T17:39:37.998Z"
      },
      {
        "id": "groc-017",
        "title": "Fleur de Sel de Guérande Hand-Harvested Sea Salt (500g Linen Bag)",
        "slug": "fleur-de-sel-de-guerande-salt",
        "sku": "TERRA-SLT-01",
        "categoryId": "cat-groc-pantry",
        "brand": "Frantoio San Michele",
        "price": 16,
        "costPrice": 6,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 60,
        "lowStockThreshold": 5,
        "rating": 4.96,
        "reviewCount": 95,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 8,
          "5": 85
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-17-1",
            "url": "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fleur de Sel de Guérande Hand-Harvested Sea Salt (500g Linen Bag) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Skimmed from the surface of Brittany salt marshes using wooden lousse rakes during hot dry summer afternoons.",
        "fullDescription": "Moist, mineral-rich pyramid crystals with a delicate violet fragrance that crunch gracefully on grilled steaks and chocolate cookies.",
        "specifications": {
          "Weight": "500g in traditional hand-stitched linen pouch with wooden scoop",
          "Origin": "Guérande, Brittany, France (IGP)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "salt",
          "fleur-de-sel",
          "guerande",
          "finishing-salt",
          "french"
        ],
        "sellerId": "vendor-san-michele",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-09T17:39:37.998Z"
      },
      {
        "id": "groc-018",
        "title": "Raw Sicilian Pistachio Butter (Bronte DOP 100% Pure 250g Jar)",
        "slug": "raw-sicilian-pistachio-butter-bronte",
        "sku": "TERRA-PST-01",
        "categoryId": "cat-groc-pantry",
        "brand": "Sicily Heritage Grove",
        "price": 26,
        "costPrice": 10,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 34,
        "lowStockThreshold": 5,
        "rating": 4.97,
        "reviewCount": 71,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 64
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "100% Pure Pistachio",
        "images": [
          {
            "id": "gimg-18-1",
            "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1000&auto=format&fit=crop&q=80",
            "alt": "Raw Sicilian Pistachio Butter (Bronte DOP 100% Pure 250g Jar) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Made solely from emerald green Bronte pistachios stone-ground for 12 hours. Zero added oil, sugar, or emulsifiers.",
        "fullDescription": "Intense emerald color and deep roasted nutty aroma. Spread on toasted brioche or drizzle over gelato.",
        "specifications": {
          "Net Weight": "250g Glass Jar",
          "Ingredients": "100% Sicilian Bronte Pistachios DOP",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "press_method": "Traditional Stone Mill",
          "origin": "Sicily Heritage Grove"
        },
        "tags": [
          "pistachio-butter",
          "bronte",
          "nut-butter",
          "sicily",
          "gourmet"
        ],
        "sellerId": "vendor-sicily-groves",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-07T17:39:37.998Z"
      },
      {
        "id": "groc-019",
        "title": "Aged Parmigiano Reggiano Vacche Rosse (36-Month 500g Wedge)",
        "slug": "parmigiano-reggiano-vacche-rosse-36mo",
        "sku": "TERRA-CHS-36",
        "categoryId": "cat-groc-pantry",
        "brand": "Frantoio San Michele",
        "price": 36,
        "costPrice": 14,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 26,
        "lowStockThreshold": 5,
        "rating": 4.98,
        "reviewCount": 83,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 74
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Farm Harvest",
        "images": [
          {
            "id": "gimg-19-1",
            "url": "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1000&auto=format&fit=crop&q=80",
            "alt": "Aged Parmigiano Reggiano Vacche Rosse (36-Month 500g Wedge) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Crafted exclusively from the nutrient-dense milk of heritage Red Cows (Razza Reggiana).",
        "fullDescription": "Studded with crunchy tyrosine calcium crystals. Deep straw yellow paste with notes of toasted hazelnuts, dried pineapple, and brown butter.",
        "specifications": {
          "Weight": "500g Vacuum-sealed wedge",
          "Aging": "36 Months Certified Consortium Red Cow DOP",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "parmigiano",
          "cheese",
          "vacche-rosse",
          "artisanal-cheese",
          "dop"
        ],
        "sellerId": "vendor-san-michele",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-05T17:39:37.998Z"
      },
      {
        "id": "groc-020",
        "title": "Organic White Truffle Oil & Sea Salt Finishing Kit",
        "slug": "organic-white-truffle-oil-salt-kit",
        "sku": "TERRA-TRF-02",
        "categoryId": "cat-groc-pantry",
        "brand": "Frantoio San Michele",
        "price": 45,
        "costPrice": 18,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 32,
        "lowStockThreshold": 5,
        "rating": 4.91,
        "reviewCount": 57,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 50
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-20-1",
            "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1000&auto=format&fit=crop&q=80",
            "alt": "Organic White Truffle Oil & Sea Salt Finishing Kit - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Infused with real Tuber magnatum pico Alba white truffles. Includes 100ml cold-pressed olive oil and 120g truffle sea salt.",
        "fullDescription": "No synthetic 2,4-dithiapentane flavoring. 100% authentic truffle infusion for handmade pasta, risotto, and scrambled pasture eggs.",
        "specifications": {
          "Kit Includes": "100ml Extra Virgin White Truffle Oil + 120g Guérande Truffle Salt",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "press_method": "First Cold-Pressed (Sub-22°C)"
        },
        "tags": [
          "truffle-oil",
          "white-truffle",
          "truffle-salt",
          "gourmet",
          "finishing"
        ],
        "sellerId": "vendor-san-michele",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-03T17:39:37.998Z"
      },
      {
        "id": "groc-021",
        "title": "Single-Varietal Marcona Almond Butter with Smoked Sea Salt (300g)",
        "slug": "marcona-almond-butter-smoked-salt",
        "sku": "TERRA-ALM-01",
        "categoryId": "cat-groc-pantry",
        "brand": "Sicily Heritage Grove",
        "price": 21,
        "costPrice": 8,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.89,
        "reviewCount": 48,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 42
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "gimg-21-1",
            "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1000&auto=format&fit=crop&q=80",
            "alt": "Single-Varietal Marcona Almond Butter with Smoked Sea Salt (300g) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Plump Spanish Marcona almonds dry-roasted in small batches and stone-milled with oak-smoked salt.",
        "fullDescription": "Naturally sweeter, rounder, and creamier than California almonds. Rich in healthy monounsaturated fats.",
        "specifications": {
          "Net Weight": "300g Glass Jar",
          "Ingredients": "99% Roasted Spanish Marcona Almonds, 1% Oak-Smoked Sea Salt",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "press_method": "Traditional Stone Mill"
        },
        "tags": [
          "almond-butter",
          "marcona",
          "nut-butter",
          "keto",
          "vegan"
        ],
        "sellerId": "vendor-sicily-groves",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-10-01T17:39:37.998Z"
      },
      {
        "id": "groc-022",
        "title": "Organic Stone-Ground Khorasan Kamut Ancient Wheat Flour (2.5 kg)",
        "slug": "khorasan-kamut-ancient-flour",
        "sku": "TERRA-FLR-01",
        "categoryId": "cat-groc-pantry",
        "brand": "Sonoma Valley Organic Farm",
        "price": 18,
        "costPrice": 7,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "kg",
        "stockQuantity": 50,
        "lowStockThreshold": 5,
        "rating": 4.95,
        "reviewCount": 62,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 55
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-22-1",
            "url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1000&auto=format&fit=crop&q=80",
            "alt": "Organic Stone-Ground Khorasan Kamut Ancient Wheat Flour (2.5 kg) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Unbleached ancient grain flour cold-milled on slow granite stones to retain 100% of germ oils and vitamins.",
        "fullDescription": "Yields golden sourdough loaves with a rich nutty flavor and gentle gluten structure easier on sensitive digestion.",
        "specifications": {
          "Net Weight": "2.5 kg in breathable cotton flour sack",
          "Extraction": "100% Whole Grain Low-Heat Stone Ground",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "flour",
          "ancient-grains",
          "kamut",
          "sourdough-baking",
          "organic"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-29T17:39:37.998Z"
      },
      {
        "id": "groc-023",
        "title": "Greek Kalamata Jumbo Olives in Wild Oregano & Extra Virgin Oil (500g)",
        "slug": "greek-kalamata-olives-wild-oregano",
        "sku": "TERRA-OLV-01",
        "categoryId": "cat-groc-pantry",
        "brand": "Frantoio San Michele",
        "price": 15,
        "costPrice": 6,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 44,
        "lowStockThreshold": 5,
        "rating": 4.93,
        "reviewCount": 56,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 50
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-23-1",
            "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1000&auto=format&fit=crop&q=80",
            "alt": "Greek Kalamata Jumbo Olives in Wild Oregano & Extra Virgin Oil (500g) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Naturally brine-cured for 6 months without caustic lye chemicals. Plump, wine-fruity, and marinated with wild mountain oregano.",
        "fullDescription": "Hand-picked in Messinia, Greece. Perfect for Greek mezze platters and rustic bread boards.",
        "specifications": {
          "Net Drained Weight": "500g Glass Jar",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "olives",
          "kalamata",
          "greek",
          "antipasto",
          "organic"
        ],
        "sellerId": "vendor-san-michele",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-27T17:39:37.998Z"
      },
      {
        "id": "groc-024",
        "title": "Raw Fermented Black Garlic Bulbs (Pack of 6)",
        "slug": "raw-fermented-black-garlic-pack6",
        "sku": "TERRA-GRL-BLK",
        "categoryId": "cat-groc-pantry",
        "brand": "Kyoto Mountain Farm",
        "price": 22,
        "costPrice": 9,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 35,
        "lowStockThreshold": 5,
        "rating": 4.96,
        "reviewCount": 47,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 42
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "60-Day Ferment",
        "images": [
          {
            "id": "gimg-24-1",
            "url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1000&auto=format&fit=crop&q=80",
            "alt": "Raw Fermented Black Garlic Bulbs (Pack of 6) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Slow-aged for 60 days in controlled humid chambers until transformed into jelly-soft black cloves tasting of balsamic, tamarind, and molasses.",
        "fullDescription": "Zero raw garlic bite. Pure umami richness to smash into butter, spread on crostini, or blend into demi-glace sauces.",
        "specifications": {
          "Contents": "6 Whole Fermented Softneck Garlic Heads",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Kyoto Mountain Harvest"
        },
        "tags": [
          "black-garlic",
          "fermented",
          "umami",
          "superfood",
          "gourmet"
        ],
        "sellerId": "vendor-kyoto-farm",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-25T17:39:37.998Z"
      },
      {
        "id": "groc-025",
        "title": "Spanish Saffron Strands Coupe Superior (2g Glass Vial with Cork)",
        "slug": "spanish-saffron-strands-coupe-2g",
        "sku": "TERRA-SAF-02",
        "categoryId": "cat-groc-pantry",
        "brand": "Frantoio San Michele",
        "price": 32,
        "costPrice": 13,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.98,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 35
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Category I ISO 3632",
        "images": [
          {
            "id": "gimg-25-1",
            "url": "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1000&auto=format&fit=crop&q=80",
            "alt": "Spanish Saffron Strands Coupe Superior (2g Glass Vial with Cork) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hand-picked all-red Crocus sativus stigmas from Castilla-La Mancha. Unrivaled crocin coloring strength and floral-hay aroma.",
        "fullDescription": "A single pinch blooms into luminous golden yellow broth for authentic Valencian paella, saffron risotto, and bouillabaisse.",
        "specifications": {
          "Weight": "2.0 grams (serves approx 20-25 generous paellas)",
          "Origin": "DO Azafrán de La Mancha, Spain",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "saffron",
          "spices",
          "paella",
          "spanish",
          "luxury-pantry"
        ],
        "sellerId": "vendor-san-michele",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-23T17:39:37.999Z"
      },
      {
        "id": "groc-026",
        "title": "Cold-Pressed Golden Flaxseed Oil (Omega-3 Rich 250ml UV Glass)",
        "slug": "cold-pressed-flaxseed-oil-omega3",
        "sku": "TERRA-FLX-01",
        "categoryId": "cat-groc-pantry",
        "brand": "Sonoma Valley Organic Farm",
        "price": 14,
        "costPrice": 6,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "bottle",
        "stockQuantity": 45,
        "lowStockThreshold": 5,
        "rating": 4.88,
        "reviewCount": 50,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 44
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "subscriptionDetails": {
          "interval": "monthly",
          "discountPercentage": 10
        },
        "images": [
          {
            "id": "gimg-26-1",
            "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1000&auto=format&fit=crop&q=80",
            "alt": "Cold-Pressed Golden Flaxseed Oil (Omega-3 Rich 250ml UV Glass) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Freshly pressed weekly under nitrogen blankets to protect delicate ALA Omega-3 fatty acids from oxidation.",
        "fullDescription": "Nutty, golden finishing oil for morning smoothies, oatmeal bowls, steamed vegetables, and cottage cheese.",
        "specifications": {
          "Volume": "250 mL",
          "Omega-3 Content": "7,200mg Plant ALA per Tablespoon",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "press_method": "First Cold-Pressed (Sub-22°C)"
        },
        "tags": [
          "flaxseed-oil",
          "omega-3",
          "cold-pressed",
          "health",
          "vegan"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-21T17:39:37.999Z"
      },
      {
        "id": "groc-027",
        "title": "Heritage Country Sourdough Batard (72-Hour Ferment 900g Loaf)",
        "slug": "heritage-country-sourdough-batard",
        "sku": "TERRA-BRD-01",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Bakehouse",
        "price": 12,
        "costPrice": 5,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "lowStockThreshold": 5,
        "rating": 4.97,
        "reviewCount": 114,
        "ratingDistribution": {
          "1": 0,
          "2": 1,
          "3": 2,
          "4": 9,
          "5": 102
        },
        "isFeatured": true,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "72-Hour Slow Cold Ferment",
        "subscriptionDetails": {
          "interval": "weekly",
          "discountPercentage": 15
        },
        "images": [
          {
            "id": "gimg-27-1",
            "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heritage Country Sourdough Batard (72-Hour Ferment 900g Loaf) - Photo 1",
            "isPrimary": true
          },
          {
            "id": "gimg-27-2",
            "url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1000&auto=format&fit=crop&q=80",
            "alt": "Heritage Country Sourdough Batard (72-Hour Ferment 900g Loaf) - Photo 2",
            "isPrimary": false
          }
        ],
        "shortDescription": "Blistered caramelized mahogany crust with an open custard-like wild crumb baked on stone hearths every dawn.",
        "fullDescription": "Baked using a 40-year-old sourdough mother culture and organic stone-milled heirloom grains with zero commercial yeast.",
        "specifications": {
          "Net Weight": "900g (~2 lbs)",
          "Ingredients": "Organic Wheat Flour, Whole Rye, Filtered Water, Sea Salt, Wild Sourdough Culture",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "sourdough",
          "artisan-bread",
          "bakery",
          "organic",
          "fresh-baked"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-19T17:39:37.999Z"
      },
      {
        "id": "groc-028",
        "title": "Ethiopia Yirgacheffe Gesha Natural Coffee Beans (250g Whole Bean)",
        "slug": "ethiopia-yirgacheffe-gesha-coffee",
        "sku": "TERRA-COF-01",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Specialty Roasters",
        "price": 24,
        "compareAtPrice": 28,
        "costPrice": 10,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "g",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.96,
        "reviewCount": 88,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 79
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Score 91.5 SCA",
        "subscriptionDetails": {
          "interval": "biweekly",
          "discountPercentage": 15
        },
        "images": [
          {
            "id": "gimg-28-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Ethiopia Yirgacheffe Gesha Natural Coffee Beans (250g Whole Bean) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "High-altitude 2,100m single-estate lot with explosive tasting notes of jasmine blossom, bergamot, and ripe peach.",
        "fullDescription": "Light roast profile roasted on a vintage cast iron drum roaster. Degassed in valved nitrogen-flushed recyclable bags.",
        "specifications": {
          "Weight": "250g Whole Roasted Coffee Beans",
          "Process": "Anaerobic Natural Fermentation",
          "Elevation": "2,150 MASL",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "coffee",
          "specialty-coffee",
          "gesha",
          "ethiopia",
          "single-origin"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-17T17:39:37.999Z"
      },
      {
        "id": "groc-029",
        "title": "Ceremonial Uji Matcha First Harvest (Single Cultivar Okumidori 30g Tin)",
        "slug": "ceremonial-uji-matcha-okumidori",
        "sku": "TERRA-MTC-30",
        "categoryId": "cat-groc-bakery",
        "brand": "Kyoto Mountain Farm",
        "price": 36,
        "costPrice": 14,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 35,
        "lowStockThreshold": 5,
        "rating": 4.99,
        "reviewCount": 96,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 8,
          "5": 86
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "First Flush Okumidori",
        "images": [
          {
            "id": "gimg-29-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Ceremonial Uji Matcha First Harvest (Single Cultivar Okumidori 30g Tin) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Shaded under straw mats for 30 days before harvest and slow ground on micro-granite stones at 40g per hour.",
        "fullDescription": "Vibrant neon emerald green color with thick creamy umami, zero astringency, and lingering sweet finish.",
        "specifications": {
          "Net Weight": "30g Hermetically Sealed Pull-Tab Gold Tin",
          "Origin": "Uji, Kyoto, Japan (100% Okumidori Cultivar)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Kyoto Mountain Harvest"
        },
        "tags": [
          "matcha",
          "ceremonial-matcha",
          "tea",
          "kyoto",
          "superfood"
        ],
        "sellerId": "vendor-kyoto-farm",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-15T17:39:37.999Z"
      },
      {
        "id": "groc-030",
        "title": "French Valrhona Chocolate Almond Pain au Chocolat (Box of 4)",
        "slug": "valrhona-chocolate-almond-croissants-box4",
        "sku": "TERRA-CRS-04",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Bakehouse",
        "price": 18,
        "costPrice": 7,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 22,
        "lowStockThreshold": 5,
        "rating": 4.93,
        "reviewCount": 75,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 67
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-30-1",
            "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80",
            "alt": "French Valrhona Chocolate Almond Pain au Chocolat (Box of 4) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Laminated with 84% butterfat Normandy AOP butter and filled with double Valrhona 66% dark chocolate batons and frangipane.",
        "fullDescription": "Baked to deep amber crispness, dipped in orange blossom syrup, and topped with toasted sliced almonds.",
        "specifications": {
          "Pack": "4 Oversized Fresh-Baked Croissants",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "croissants",
          "pastry",
          "valrhona",
          "french-bakery",
          "breakfast"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-13T17:39:37.999Z"
      },
      {
        "id": "groc-031",
        "title": "Cardamom & Orange Blossom Brioche Knots (Box of 6)",
        "slug": "cardamom-orange-blossom-brioche-knots",
        "sku": "TERRA-BRC-06",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Bakehouse",
        "price": 20,
        "costPrice": 8,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 24,
        "lowStockThreshold": 5,
        "rating": 4.91,
        "reviewCount": 48,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 42
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "badge": "Farm Harvest",
        "images": [
          {
            "id": "gimg-31-1",
            "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80",
            "alt": "Cardamom & Orange Blossom Brioche Knots (Box of 6) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Swedish-style twisted cardamom buns enriched with pasture eggs, whole milk, and coarse pearl sugar crunch.",
        "fullDescription": "Freshly ground green cardamom pods infuse every buttery flaky ribbon with comforting Scandinavian warmth.",
        "specifications": {
          "Pack": "6 Buns in artisan kraft window box",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "brioche",
          "cardamom-buns",
          "fika",
          "bakery",
          "pastry"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-11T17:39:37.999Z"
      },
      {
        "id": "groc-032",
        "title": "High Mountain Alishan Oolong Loose Leaf Tea (100g Vacuum Pack)",
        "slug": "alishan-high-mountain-oolong-tea",
        "sku": "TERRA-TEA-01",
        "categoryId": "cat-groc-bakery",
        "brand": "Kyoto Mountain Farm",
        "price": 28,
        "costPrice": 11,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 38,
        "lowStockThreshold": 5,
        "rating": 4.95,
        "reviewCount": 52,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 46
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-32-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "High Mountain Alishan Oolong Loose Leaf Tea (100g Vacuum Pack) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Grown above mist lines at 1,600m. Lightly oxidized tightly rolled pearls with creamy buttery orchid aromas.",
        "fullDescription": "Can be re-steeped up to 7 times in Gongfu style, with each infusion unlocking evolving floral and honeyed notes.",
        "specifications": {
          "Weight": "100g Vacuum Packed with Oxygen Absorber",
          "Elevation": "1,600 MASL Alishan Misty Mountain Terroir",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "oolong",
          "tea",
          "alishan",
          "loose-leaf",
          "high-mountain"
        ],
        "sellerId": "vendor-kyoto-farm",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-09T17:39:37.999Z"
      },
      {
        "id": "groc-033",
        "title": "Ancient Grain Granola with Wild Blueberries & Pecans (500g Bag)",
        "slug": "ancient-grain-granola-wild-blueberries",
        "sku": "TERRA-GRN-02",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Bakehouse",
        "price": 15,
        "costPrice": 6,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "g",
        "stockQuantity": 50,
        "lowStockThreshold": 5,
        "rating": 4.89,
        "reviewCount": 66,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 58
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "subscriptionDetails": {
          "interval": "biweekly",
          "discountPercentage": 10
        },
        "images": [
          {
            "id": "gimg-33-1",
            "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80",
            "alt": "Ancient Grain Granola with Wild Blueberries & Pecans (500g Bag) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Clusters of rolled spelt, puffed amaranth, and toasted Georgia pecans baked slow with maple syrup and freeze-dried wild berries.",
        "fullDescription": "Satisfying crunchy clusters with zero refined sugars, artificial preservatives, or palm oils.",
        "specifications": {
          "Weight": "500g Resealable Kraft Pouch",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "granola",
          "breakfast",
          "cereal",
          "ancient-grains",
          "blueberries"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-07T17:39:37.999Z"
      },
      {
        "id": "groc-034",
        "title": "Artisan Dark Rye Crispbread with Caraway & Sea Salt (300g Box)",
        "slug": "artisan-dark-rye-crispbread",
        "sku": "TERRA-CSP-01",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Bakehouse",
        "price": 9,
        "costPrice": 4,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 60,
        "lowStockThreshold": 5,
        "rating": 4.87,
        "reviewCount": 41,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 36
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-34-1",
            "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80",
            "alt": "Artisan Dark Rye Crispbread with Caraway & Sea Salt (300g Box) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Thin, ultra-crispy sourdough rye crackers baked with toasted caraway, sesame, and flaky Celtic salt.",
        "fullDescription": "The classic Scandinavian foundation for smoked salmon, aged cheeses, pickled herring, and whipped butter.",
        "specifications": {
          "Weight": "300g Box",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "crispbread",
          "crackers",
          "rye",
          "scandinavian",
          "snack"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-05T17:39:37.999Z"
      },
      {
        "id": "groc-035",
        "title": "Colombia Pink Bourbon Natural Filter Roast (250g Whole Bean)",
        "slug": "colombia-pink-bourbon-coffee",
        "sku": "TERRA-COF-02",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Specialty Roasters",
        "price": 22,
        "costPrice": 9,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "g",
        "stockQuantity": 42,
        "lowStockThreshold": 5,
        "rating": 4.94,
        "reviewCount": 59,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 52
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-35-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Colombia Pink Bourbon Natural Filter Roast (250g Whole Bean) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Rare Pink Bourbon mutation with delicate notes of pink grapefruit, papaya, and wildflower honey sweetness.",
        "fullDescription": "Hand-picked by smallholder farmers in Huila, Colombia. Outstanding clarity when brewed on Chemex or V60.",
        "specifications": {
          "Weight": "250g Whole Bean",
          "Origin": "Acevedo, Huila, Colombia (1,850 MASL)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "coffee",
          "colombia",
          "pink-bourbon",
          "specialty-coffee",
          "pourover"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-03T17:39:37.999Z"
      },
      {
        "id": "groc-036",
        "title": "Single-Origin Madagascar 75% Dark Chocolate Bar (80g)",
        "slug": "madagascar-75-dark-chocolate-bar",
        "sku": "TERRA-CHO-01",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Bakehouse",
        "price": 8,
        "costPrice": 3,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 70,
        "lowStockThreshold": 5,
        "rating": 4.96,
        "reviewCount": 84,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 75
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "gimg-36-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Single-Origin Madagascar 75% Dark Chocolate Bar (80g) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Bean-to-bar chocolate crafted from organic Sambirano Valley cacao with bright notes of red cherry and citrus.",
        "fullDescription": "Stone-conched for 72 hours with organic cane sugar and raw cocoa butter. Wrapped in gold foil with letterpress sleeve.",
        "specifications": {
          "Weight": "80g Bar",
          "Ingredients": "Organic Madagascar Cacao Beans, Organic Cane Sugar, Cocoa Butter",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "chocolate",
          "bean-to-bar",
          "dark-chocolate",
          "madagascar",
          "cacao"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-09-01T17:39:37.999Z"
      },
      {
        "id": "groc-037",
        "title": "Organic Vanilla Bean Paste with Pure Madagascar Seeds (120ml Jar)",
        "slug": "organic-vanilla-bean-paste-madagascar",
        "sku": "TERRA-VAN-01",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Bakehouse",
        "price": 24,
        "costPrice": 10,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 45,
        "lowStockThreshold": 5,
        "rating": 4.98,
        "reviewCount": 62,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 56
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Farm Harvest",
        "images": [
          {
            "id": "gimg-37-1",
            "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1000&auto=format&fit=crop&q=80",
            "alt": "Organic Vanilla Bean Paste with Pure Madagascar Seeds (120ml Jar) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Thick gourmet baking paste loaded with thousands of aromatic Bourbon vanilla bean specks.",
        "fullDescription": "1 tablespoon equals the flavor and seed content of 1 whole vanilla pod. Elevates custards, cookies, and frosting.",
        "specifications": {
          "Net Volume": "120 mL Glass Jar",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "vanilla-paste",
          "baking",
          "madagascar-vanilla",
          "pastry-ingredient"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-30T17:39:37.999Z"
      },
      {
        "id": "groc-038",
        "title": "Cold-Brew Coffee Concentrate (1 Liter Glass Bottle - 1:4 Dilution)",
        "slug": "cold-brew-coffee-concentrate-1l",
        "sku": "TERRA-CBR-01",
        "categoryId": "cat-groc-bakery",
        "brand": "Terra Specialty Roasters",
        "price": 18,
        "costPrice": 7,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "bottle",
        "stockQuantity": 36,
        "lowStockThreshold": 5,
        "rating": 4.92,
        "reviewCount": 78,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 69
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "subscriptionDetails": {
          "interval": "weekly",
          "discountPercentage": 15
        },
        "images": [
          {
            "id": "gimg-38-1",
            "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Cold-Brew Coffee Concentrate (1 Liter Glass Bottle - 1:4 Dilution) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Slow steeped for 24 hours in cold filtered spring water. Silky smooth, chocolatey, and virtually acid-free.",
        "fullDescription": "Mix 1 part concentrate with 3 parts oat milk or cold water over ice. Makes 10-12 generous iced coffees.",
        "specifications": {
          "Volume": "1.0 Liter Glass Jug",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "cold-brew",
          "iced-coffee",
          "concentrate",
          "coffee-subscription"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-28T17:39:37.999Z"
      },
      {
        "id": "groc-039",
        "title": "Wild Botanical Jun Kombucha Raw Champagne Ferment (750ml Bottle)",
        "slug": "wild-botanical-jun-kombucha",
        "sku": "TERRA-KOM-01",
        "categoryId": "cat-groc-beverages",
        "brand": "Terra Ferments",
        "price": 16,
        "compareAtPrice": 19,
        "costPrice": 6,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "bottle",
        "stockQuantity": 32,
        "lowStockThreshold": 5,
        "rating": 4.94,
        "reviewCount": 55,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 49
        },
        "isFeatured": true,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Raw Honey Ferment",
        "subscriptionDetails": {
          "interval": "biweekly",
          "discountPercentage": 15
        },
        "images": [
          {
            "id": "gimg-39-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Wild Botanical Jun Kombucha Raw Champagne Ferment (750ml Bottle) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Known as the \"Champagne of Kombuchas\"—fermented with raw wildflower honey and green tea rather than refined cane sugar.",
        "fullDescription": "Infused with lavender blossom, wild elderflower, and fresh ginger. Light, effervescent, and packed with live probiotic cultures.",
        "specifications": {
          "Net Volume": "750 mL Swing-Top Glass Bottle",
          "Probiotics": "Over 2 Billion Live CFU per serving",
          "Alcohol": "< 0.5% ABV (Non-Alcoholic)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "kombucha",
          "jun",
          "probiotics",
          "gut-health",
          "raw-ferment",
          "beverage"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-26T17:39:37.999Z"
      },
      {
        "id": "groc-040",
        "title": "Immunity Cold-Pressed Green Elixir (Pack of 6 x 350ml Bottles)",
        "slug": "immunity-cold-pressed-green-elixir-6pack",
        "sku": "TERRA-JCE-06",
        "categoryId": "cat-groc-beverages",
        "brand": "Sonoma Valley Organic Farm",
        "price": 36,
        "compareAtPrice": 42,
        "costPrice": 14,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "box",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.96,
        "reviewCount": 93,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 7,
          "5": 83
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "subscriptionDetails": {
          "interval": "weekly",
          "discountPercentage": 20
        },
        "images": [
          {
            "id": "gimg-40-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Immunity Cold-Pressed Green Elixir (Pack of 6 x 350ml Bottles) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Hydraulic cold-pressed kale, English cucumber, celery, green apple, ginger root, and lemon with zero water added.",
        "fullDescription": "High-pressure processed (HPP) to preserve living digestive enzymes, phytonutrients, and vibrant chlorophyll.",
        "specifications": {
          "Contents": "6 x 350ml Recyclable Chilled Glass Bottles",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "green-juice",
          "cold-pressed",
          "cleanse",
          "wellness",
          "detox"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-24T17:39:37.999Z"
      },
      {
        "id": "groc-041",
        "title": "Sparkling Yuzu & Bergamot Botanical Tonic (4-Pack Glass Bottles)",
        "slug": "sparkling-yuzu-bergamot-botanical-tonic",
        "sku": "TERRA-YZU-04",
        "categoryId": "cat-groc-beverages",
        "brand": "Kyoto Mountain Farm",
        "price": 14,
        "costPrice": 6,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 50,
        "lowStockThreshold": 5,
        "rating": 4.91,
        "reviewCount": 64,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 57
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": true,
        "images": [
          {
            "id": "gimg-41-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Sparkling Yuzu & Bergamot Botanical Tonic (4-Pack Glass Bottles) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Pressed Japanese Yuzu fruit juice blended with Italian bergamot essential oils and mineral mountain water.",
        "fullDescription": "Tart, uplifting floral citrus bubbles with low sugar (only 4g per bottle). An exquisite non-alcoholic aperitif.",
        "specifications": {
          "Pack": "4 x 275ml Crown-Capped Glass Bottles",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Kyoto Mountain Harvest"
        },
        "tags": [
          "yuzu",
          "sparkling-water",
          "tonic",
          "botanical",
          "non-alcoholic"
        ],
        "sellerId": "vendor-kyoto-farm",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-22T17:39:37.999Z"
      },
      {
        "id": "groc-042",
        "title": "Tart Montmorency Cherry Sleep Elixir with Chamomile (500ml Glass)",
        "slug": "montmorency-cherry-sleep-elixir",
        "sku": "TERRA-CHR-01",
        "categoryId": "cat-groc-beverages",
        "brand": "Sonoma Valley Organic Farm",
        "price": 18,
        "costPrice": 7,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 34,
        "lowStockThreshold": 5,
        "rating": 4.95,
        "reviewCount": 81,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 72
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Natural Melatonin",
        "images": [
          {
            "id": "gimg-42-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Tart Montmorency Cherry Sleep Elixir with Chamomile (500ml Glass) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "100% pure organic tart cherry concentrate infused with Roman chamomile and magnesium glycinate for restful deep sleep.",
        "fullDescription": "Drink 30ml diluted in sparkling or warm water 45 minutes before bedtime to reduce muscle soreness and promote natural REM sleep.",
        "specifications": {
          "Volume": "500 mL (~16 Nightly Servings)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "tart-cherry",
          "sleep-remedy",
          "melatonin",
          "recovery",
          "wellness"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-20T17:39:37.999Z"
      },
      {
        "id": "groc-043",
        "title": "Turmeric Ginger Cayenne Fire Cider Tonic (375ml Amber Glass)",
        "slug": "turmeric-ginger-fire-cider-tonic",
        "sku": "TERRA-CID-01",
        "categoryId": "cat-groc-beverages",
        "brand": "Sonoma Valley Organic Farm",
        "price": 22,
        "costPrice": 9,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 38,
        "lowStockThreshold": 5,
        "rating": 4.92,
        "reviewCount": 49,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 43
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Farm Harvest",
        "images": [
          {
            "id": "gimg-43-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Turmeric Ginger Cayenne Fire Cider Tonic (375ml Amber Glass) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Raw unfiltered apple cider vinegar infused with fresh horseradish, turmeric root, ginger, garlic, cayenne, and raw honey.",
        "fullDescription": "Traditional folk remedy to stimulate digestion, clear sinuses, and ignite the immune system during cold seasons.",
        "specifications": {
          "Volume": "375 mL",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "fire-cider",
          "apple-cider-vinegar",
          "immunity",
          "tonic",
          "herbal"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-18T17:39:37.999Z"
      },
      {
        "id": "groc-044",
        "title": "Organic Japanese Ceremonial Hojicha Cold-Brew Tea (6 x 330ml)",
        "slug": "hojicha-cold-brew-tea-6pack",
        "sku": "TERRA-HOJ-06",
        "categoryId": "cat-groc-beverages",
        "brand": "Kyoto Mountain Farm",
        "price": 24,
        "costPrice": 10,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 28,
        "lowStockThreshold": 5,
        "rating": 4.93,
        "reviewCount": 41,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 36
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-44-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Organic Japanese Ceremonial Hojicha Cold-Brew Tea (6 x 330ml) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Charcoal-roasted green tea leaves cold-steeped to extract nutty roasted barley and caramel notes with low caffeine.",
        "fullDescription": "Zero sugar, unsweetened and refreshing. Can be enjoyed at dinner without disrupting evening sleep.",
        "specifications": {
          "Pack": "6 x 330ml Glass Bottles",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Kyoto Mountain Harvest"
        },
        "tags": [
          "hojicha",
          "tea",
          "japanese-tea",
          "cold-brew",
          "low-caffeine"
        ],
        "sellerId": "vendor-kyoto-farm",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-16T17:39:37.999Z"
      },
      {
        "id": "groc-045",
        "title": "Golden Coconut Milk Turmeric Chai Latte Concentrate (1 Liter)",
        "slug": "golden-turmeric-chai-latte-concentrate",
        "sku": "TERRA-CHAI-01",
        "categoryId": "cat-groc-beverages",
        "brand": "Terra Bakehouse",
        "price": 16,
        "costPrice": 6,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "bottle",
        "stockQuantity": 44,
        "lowStockThreshold": 5,
        "rating": 4.9,
        "reviewCount": 67,
        "ratingDistribution": {
          "1": 2,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 59
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": false,
        "isTrending": false,
        "subscriptionDetails": {
          "interval": "biweekly",
          "discountPercentage": 10
        },
        "images": [
          {
            "id": "gimg-45-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Golden Coconut Milk Turmeric Chai Latte Concentrate (1 Liter) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Fresh Hawaiian turmeric root, crushed cardamom, cinnamon bark, black pepper, and whole vanilla in organic coconut milk.",
        "fullDescription": "Warm 1:1 with your favorite milk for an instant restorative Golden Milk latte with anti-inflammatory curcumin.",
        "specifications": {
          "Volume": "1.0 Liter Glass Bottle",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "turmeric-latte",
          "golden-milk",
          "chai",
          "anti-inflammatory",
          "vegan"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-14T17:39:37.999Z"
      },
      {
        "id": "groc-046",
        "title": "Wild Lingonberry & Birch Water Hydration Elixir (4-Pack)",
        "slug": "wild-lingonberry-birch-water-4pack",
        "sku": "TERRA-BRC-04",
        "categoryId": "cat-groc-beverages",
        "brand": "Terra Ferments",
        "price": 15,
        "costPrice": 6,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 36,
        "lowStockThreshold": 5,
        "rating": 4.88,
        "reviewCount": 39,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 34
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": true,
        "isTrending": true,
        "images": [
          {
            "id": "gimg-46-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Wild Lingonberry & Birch Water Hydration Elixir (4-Pack) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Tapped directly from Nordic birch trees during early spring thaw and blended with wild Arctic lingonberry puree.",
        "fullDescription": "Naturally rich in electrolytes, xylitol, and manganese for deep cellular rehydration after workouts or saunas.",
        "specifications": {
          "Pack": "4 x 330ml Glass Bottles",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "Wild Harvested"
        },
        "tags": [
          "birch-water",
          "electrolytes",
          "lingonberry",
          "hydration",
          "nordic"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-12T17:39:37.999Z"
      },
      {
        "id": "groc-047",
        "title": "Fermented Beet Kvass with Sea Salt & Dill (500ml Living Tonic)",
        "slug": "fermented-beet-kvass-tonic",
        "sku": "TERRA-KVS-01",
        "categoryId": "cat-groc-beverages",
        "brand": "Terra Ferments",
        "price": 12,
        "costPrice": 5,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 30,
        "lowStockThreshold": 5,
        "rating": 4.89,
        "reviewCount": 42,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 3,
          "5": 37
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "images": [
          {
            "id": "gimg-47-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Fermented Beet Kvass with Sea Salt & Dill (500ml Living Tonic) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Ancient Slavic raw fermented tonic made from organic red beets, fresh garlic, dill seeds, and unrefined sea salt.",
        "fullDescription": "Rich in dietary nitrates to boost blood flow and athletic endurance while delivering billions of live lactobacillus bacteria.",
        "specifications": {
          "Volume": "500 mL Swing-Top Glass Bottle",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "kvass",
          "beet-kvass",
          "probiotics",
          "nitrates",
          "ferment"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-10T17:39:37.999Z"
      },
      {
        "id": "groc-048",
        "title": "Cold-Pressed Valencia Orange & Passionfruit Juice (1 Liter)",
        "slug": "valencia-orange-passionfruit-juice",
        "sku": "TERRA-ORG-01",
        "categoryId": "cat-groc-beverages",
        "brand": "Sonoma Valley Organic Farm",
        "price": 14,
        "costPrice": 6,
        "currency": "USD",
        "type": "subscription",
        "unitOfMeasure": "bottle",
        "stockQuantity": 40,
        "lowStockThreshold": 5,
        "rating": 4.97,
        "reviewCount": 76,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 6,
          "5": 68
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "subscriptionDetails": {
          "interval": "weekly",
          "discountPercentage": 15
        },
        "images": [
          {
            "id": "gimg-48-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Cold-Pressed Valencia Orange & Passionfruit Juice (1 Liter) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Freshly squeezed California Valencia oranges with the pulp of tropical purple passionfruit. No added sugar or concentrates.",
        "fullDescription": "High natural vitamin C with a luscious tropical sweet-tart balance for weekend brunch mimosa cocktails.",
        "specifications": {
          "Volume": "1.0 Liter Glass Carafe",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic",
          "origin": "Sonoma Valley Organic Farm"
        },
        "tags": [
          "orange-juice",
          "passionfruit",
          "cold-pressed",
          "breakfast",
          "juice"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-08T17:39:37.999Z"
      },
      {
        "id": "groc-049",
        "title": "Organic Sparkling Ginger Beer with Habanero & Lime (6-Pack)",
        "slug": "organic-sparkling-ginger-beer-6pack",
        "sku": "TERRA-GNG-06",
        "categoryId": "cat-groc-beverages",
        "brand": "Terra Ferments",
        "price": 16,
        "costPrice": 6,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "box",
        "stockQuantity": 46,
        "lowStockThreshold": 5,
        "rating": 4.93,
        "reviewCount": 58,
        "ratingDistribution": {
          "1": 1,
          "2": 0,
          "3": 1,
          "4": 5,
          "5": 51
        },
        "isFeatured": false,
        "isBestSeller": true,
        "isNewArrival": true,
        "isTrending": false,
        "badge": "Farm Harvest",
        "images": [
          {
            "id": "gimg-49-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Organic Sparkling Ginger Beer with Habanero & Lime (6-Pack) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Naturally fermented with live ginger bug culture, fresh lime juice, cane sugar, and a subtle whisper of habanero pepper.",
        "fullDescription": "Bold ginger heat with refreshing bubbly carbonation. Ideal for Moscow Mules, Dark & Stormies, or solo sipping.",
        "specifications": {
          "Pack": "6 x 275ml Amber Glass Bottles",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "ginger-beer",
          "cocktails",
          "fermented",
          "spicy",
          "beverage"
        ],
        "sellerId": "vendor-terra-bakehouse",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-06T17:39:37.999Z"
      },
      {
        "id": "groc-050",
        "title": "Herbal Adaptogen Immunity Broth Concentrate (Shiitake & Astragalus 500ml)",
        "slug": "adaptogen-immunity-broth-concentrate",
        "sku": "TERRA-BRH-01",
        "categoryId": "cat-groc-beverages",
        "brand": "Sonoma Valley Organic Farm",
        "price": 20,
        "costPrice": 8,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 35,
        "lowStockThreshold": 5,
        "rating": 4.95,
        "reviewCount": 46,
        "ratingDistribution": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 4,
          "5": 41
        },
        "isFeatured": false,
        "isBestSeller": false,
        "isNewArrival": false,
        "isTrending": false,
        "badge": "Adaptogenic",
        "images": [
          {
            "id": "gimg-50-1",
            "url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&auto=format&fit=crop&q=80",
            "alt": "Herbal Adaptogen Immunity Broth Concentrate (Shiitake & Astragalus 500ml) - Photo 1",
            "isPrimary": true
          }
        ],
        "shortDescription": "Simmered for 18 hours with organic shiitake, lion’s mane, reishi mushrooms, astragalus root, ginger, and sea kelp.",
        "fullDescription": "Sip warm from a mug as a nourishing savory coffee alternative or use as an umami broth base for ramen and grain bowls.",
        "specifications": {
          "Volume": "500 mL Glass Bottle (~10 Servings)",
          "Farm Fresh Guarantee": "Picked and packed within 24 hours in 100% compostable insulated cold packaging",
          "Storage Guide": "Keep refrigerated upon arrival for maximum flavor longevity"
        },
        "attributes": {
          "dietary": "100% USDA Certified Organic"
        },
        "tags": [
          "bone-broth-alternative",
          "mushrooms",
          "adaptogens",
          "reishi",
          "immunity"
        ],
        "sellerId": "vendor-sonoma-valley",
        "warranty": "100% Farm-Fresh Flavor Satisfaction Guarantee",
        "returnPolicy": "Full instant refund or replacement for any damaged or sub-fresh items",
        "createdAt": "2026-08-04T17:39:37.999Z"
      }
    ],
    "banners": [
      {
        "id": "ban-g1",
        "title": "From Soil to Soul",
        "subtitle": "Single-Estate Olive Oils, Raw Wild Honeycomb & Biodynamic Produce",
        "tag": "EARTH HARVEST",
        "ctaText": "Shop the Pantry",
        "linkCategory": "cat-groc-pantry",
        "image": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#16a34a",
        "overlayGradient": "from-emerald-950/85 via-emerald-900/50 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-sonoma-valley",
        "name": "Sonoma Valley Organic Farm",
        "slug": "sonoma-valley-organic",
        "logo": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 430,
        "salesCount": 8200,
        "description": "Regenerative organic farm producing heirloom fruits, greens, and hydraulic-pressed juices in northern California.",
        "location": "Sonoma Valley, CA, USA",
        "commissionRate": 10,
        "joinedDate": "2022-03-15",
        "email": "harvest@sonomavalleyorganics.com",
        "phone": "+1 (707) 555-0182",
        "balance": 34200,
        "payoutMethod": "Direct ACH Wire",
        "isVerified": true
      },
      {
        "id": "vendor-san-michele",
        "name": "Frantoio San Michele Estate",
        "slug": "san-michele",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 280,
        "salesCount": 4200,
        "description": "Generational Ligurian olive grove certified organic since 1988.",
        "location": "Liguria, Italy",
        "commissionRate": 10,
        "joinedDate": "2023-05-20",
        "email": "olio@sanmichele.it",
        "phone": "+39 0183 12345",
        "balance": 16500,
        "payoutMethod": "Direct Wire",
        "isVerified": true
      },
      {
        "id": "vendor-sicily-groves",
        "name": "Sicily Heritage Grove",
        "slug": "sicily-heritage-grove",
        "logo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.95,
        "reviewCount": 190,
        "salesCount": 2800,
        "description": "Centuries-old volcanic soil orchards growing Tarocco blood oranges and stone-milled Bronte pistachios.",
        "location": "Catania, Sicily, Italy",
        "commissionRate": 10,
        "joinedDate": "2023-08-11",
        "email": "ordini@sicilyheritage.it",
        "phone": "+39 095 88214",
        "balance": 12400,
        "payoutMethod": "SEPA Transfer",
        "isVerified": true
      },
      {
        "id": "vendor-kyoto-farm",
        "name": "Kyoto Mountain Farm",
        "slug": "kyoto-mountain-farm",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.97,
        "reviewCount": 310,
        "salesCount": 3900,
        "description": "Single-estate tea masters and biodynamic growers in the misty highlands of Uji and Wazuka.",
        "location": "Kyoto Prefecture, Japan",
        "commissionRate": 12,
        "joinedDate": "2023-02-14",
        "email": "tea@kyotomountain.jp",
        "phone": "+81 774 21 0000",
        "balance": 19800,
        "payoutMethod": "International SWIFT",
        "isVerified": true
      },
      {
        "id": "vendor-terra-bakehouse",
        "name": "Terra Artisan Bakehouse & Roasters",
        "slug": "terra-bakehouse",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.94,
        "reviewCount": 260,
        "salesCount": 5100,
        "description": "Wild yeast naturally leavened sourdough bread and micro-lot specialty coffee roasters.",
        "location": "Portland, OR, USA",
        "commissionRate": 10,
        "joinedDate": "2023-09-01",
        "email": "bake@terrabakehouse.com",
        "phone": "+1 (503) 555-0149",
        "balance": 14700,
        "payoutMethod": "Direct ACH Wire",
        "isVerified": true
      },
      {
        "id": "vendor-wild-apiary",
        "name": "Wild Rainforest Apiaries",
        "slug": "wild-rainforest",
        "logo": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.92,
        "reviewCount": 94,
        "salesCount": 960,
        "description": "Sustainable apiculture in the remote Tasmanian wilderness.",
        "location": "Hobart, Tasmania",
        "commissionRate": 10,
        "joinedDate": "2024-01-10",
        "email": "buzz@wildrainforest.com.au",
        "phone": "+61 3 6200 0000",
        "balance": 3800,
        "payoutMethod": "Stripe Direct",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "gpost-1",
        "title": "Demystifying Polyphenols: The Secret Health Metric in Extra Virgin Olive Oil",
        "slug": "polyphenols-olive-oil-guide",
        "excerpt": "Why that peppery tickle in the back of your throat indicates peak antioxidant concentration.",
        "content": "High-polyphenol olive oils contain potent anti-inflammatory compounds called oleocanthal...",
        "coverImage": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Dr. Marco Donati",
          "role": "Food Biochemist",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 02, 2026",
        "category": "Nutrition Science",
        "tags": [
          "Olive Oil",
          "Polyphenols",
          "Longevity"
        ],
        "readTime": "4 min read"
      }
    ]
  },
  "food": {
    "id": "food",
    "name": "Saveur Table & Bistro",
    "tagline": "Artisanal Gastronomy, Chef Tasting Menus & Epicurean Provisions",
    "categoryTag": "Restaurant & Gourmet Dining",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "kg",
    "theme": {
      "presetName": "food",
      "primaryColor": "#b45309",
      "primaryHover": "#92400e",
      "secondaryColor": "#65a30d",
      "accentColor": "#65a30d",
      "surfaceColor": "#ffffff",
      "surfaceElevated": "#f0fdf4",
      "textColor": "#052e16",
      "textMuted": "#4b5563",
      "borderColor": "#dcfce7",
      "fontDisplay": "Fraunces, Georgia, serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-2xl",
      "shadowIntensity": "shadow-md",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-food-entrees",
        "name": "Signature Entrees & Mains",
        "slug": "signature-entrees",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
        "description": "Prime dry-aged steaks, wood-fired cuts, and chef-crafted seasonal mains.",
        "attributes": []
      },
      {
        "id": "cat-food-pasta",
        "name": "Artisan Pasta & Risotto",
        "slug": "artisan-pasta",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
        "description": "Hand-rolled bronze-die pastas and slow-simmered regional sauces.",
        "attributes": []
      },
      {
        "id": "cat-food-pantry",
        "name": "Gourmet Pantry & Delicacies",
        "slug": "gourmet-pantry",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=80",
        "description": "Truffle carpaccio, 25-year balsamico, cold-pressed oils, and rare spices.",
        "attributes": []
      },
      {
        "id": "cat-food-bakery",
        "name": "Artisan Bakery & Desserts",
        "slug": "bakery-desserts",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
        "description": "Slow-fermented sourdoughs, layered brioches, and handcrafted patisserie.",
        "attributes": []
      },
      {
        "id": "cat-food-drinks",
        "name": "Fine Beverages & Cocktails",
        "slug": "beverages-cocktails",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=80",
        "description": "Craft cocktails, house-made sodas, premium wines, and single-origin cold brew.",
        "attributes": []
      }
    ],
    "products": [
      {
        "id": "food-001",
        "title": "Wood-Fired Black Truffle & Porcini Risotto",
        "slug": "black-truffle-porcini-risotto",
        "sku": "REST-RIS-01",
        "categoryId": "cat-food-pasta",
        "brand": "Saveur Kitchen",
        "price": 34,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 40,
        "rating": 4.95,
        "reviewCount": 68,
        "isFeatured": true,
        "isBestSeller": true,
        "badge": "Chef Special",
        "images": [
          {
            "id": "fimg-1",
            "url": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=800&auto=format&fit=crop&q=80",
            "alt": "Black Truffle Risotto"
          }
        ],
        "shortDescription": "Acquerello carnaroli rice simmered with wild porcini, parmigiano reggiano 24-month, and shaved black truffles.",
        "fullDescription": "Crafted with master Italian culinary precision.",
        "specifications": {
          "Origin": "Piedmont, Italy",
          "Portion": "Single Entree",
          "Dietary": "Vegetarian, Gluten-Free Friendly"
        },
        "attributes": {},
        "tags": [
          "chef-special",
          "pasta",
          "truffle"
        ]
      },
      {
        "id": "food-002",
        "title": "45-Day Dry-Aged Prime Bone-In Ribeye (16 oz)",
        "slug": "dry-aged-prime-ribeye",
        "sku": "REST-STK-02",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 68,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "rating": 4.98,
        "reviewCount": 94,
        "isFeatured": true,
        "isBestSeller": true,
        "badge": "Heritage Cut",
        "images": [
          {
            "id": "fimg-2",
            "url": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
            "alt": "Dry-Aged Ribeye"
          }
        ],
        "shortDescription": "Charred over white oak and Japanese binchotan charcoal. Finished with roasted bone marrow butter and sea salt.",
        "fullDescription": "Aged in our Himalayan salt locker for 45 full days to concentrate deep umami flavors.",
        "specifications": {
          "Cut": "Prime Bone-in Ribeye",
          "Weight": "16 oz (450g)",
          "Age": "45 Days Dry-Aged"
        },
        "attributes": {},
        "tags": [
          "steak",
          "entree",
          "signature"
        ]
      },
      {
        "id": "food-003",
        "title": "Handmade Saffron Tagliolini with Langoustines",
        "slug": "saffron-tagliolini-langoustines",
        "sku": "REST-PAS-03",
        "categoryId": "cat-food-pasta",
        "brand": "Saveur Kitchen",
        "price": 42,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 30,
        "rating": 4.9,
        "reviewCount": 52,
        "isFeatured": true,
        "badge": "Handmade Daily",
        "images": [
          {
            "id": "fimg-3",
            "url": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
            "alt": "Saffron Tagliolini"
          }
        ],
        "shortDescription": "Golden egg pasta infused with Greek red saffron, sweet Mediterranean langoustines, and Meyer lemon butter.",
        "fullDescription": "Hand-rolled fresh every morning in our open pasta kitchen.",
        "specifications": {
          "Pasta Type": "Tagliolini",
          "Seafood": "Mediterranean Langoustine",
          "Allergens": "Shellfish, Eggs, Wheat"
        },
        "attributes": {},
        "tags": [
          "pasta",
          "seafood",
          "fresh"
        ]
      },
      {
        "id": "food-004",
        "title": "Pan-Seared Chilean Sea Bass with Miso Glaze",
        "slug": "pan-seared-chilean-sea-bass",
        "sku": "REST-SEA-04",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 48,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 20,
        "rating": 4.88,
        "reviewCount": 41,
        "isNewArrival": true,
        "images": [
          {
            "id": "fimg-4",
            "url": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80",
            "alt": "Chilean Sea Bass"
          }
        ],
        "shortDescription": "Wild-caught fillet caramelized in saikyo sweet white miso, baby bok choy, and dashi reduction.",
        "fullDescription": "Melt-in-your-mouth Chilean sea bass marinated for 72 hours in traditional Kyoto white miso.",
        "specifications": {
          "Origin": "Wild Pacific",
          "Glaze": "Kyoto Saikyo Miso",
          "Dietary": "Pescatarian, Dairy-Free"
        },
        "attributes": {},
        "tags": [
          "seafood",
          "entree",
          "miso"
        ]
      },
      {
        "id": "food-005",
        "title": "36-Hour Fermented Country Sourdough Loaf",
        "slug": "country-sourdough-loaf",
        "sku": "REST-BAK-05",
        "categoryId": "cat-food-bakery",
        "brand": "Saveur Bakehouse",
        "price": 12,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 50,
        "rating": 4.96,
        "reviewCount": 110,
        "isBestSeller": true,
        "images": [
          {
            "id": "fimg-5",
            "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
            "alt": "Artisan Sourdough"
          }
        ],
        "shortDescription": "Stone-milled heritage grain, wild sourdough culture, blistered deep crust, and airy custard crumb.",
        "fullDescription": "Baked in our stone hearth oven at dawn.",
        "specifications": {
          "Fermentation": "36 Hours Cold Retard",
          "Flour": "Stone-Ground Organic Heirloom",
          "Vegan": "Yes"
        },
        "attributes": {},
        "tags": [
          "bakery",
          "sourdough",
          "bread"
        ]
      },
      {
        "id": "food-006",
        "title": "Reserve Black Truffle Carpaccio & Cold-Pressed EVOO",
        "slug": "black-truffle-carpaccio-reserve",
        "sku": "REST-PAN-06",
        "categoryId": "cat-food-pantry",
        "brand": "Saveur Reserve",
        "price": 45,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 35,
        "rating": 4.93,
        "reviewCount": 38,
        "isFeatured": true,
        "badge": "Artisan Reserve",
        "images": [
          {
            "id": "fimg-6",
            "url": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=80",
            "alt": "Truffle Carpaccio"
          }
        ],
        "shortDescription": "Hand-sliced Italian winter black truffles preserved in monocultivar Taggiasca extra virgin olive oil.",
        "fullDescription": "An indispensable pantry delicacy for finishing fresh pastas, roasted meats, and artisanal focaccia.",
        "specifications": {
          "Volume": "180g Jar",
          "Truffle Content": "Tuber Melanosporum 75%",
          "Origin": "Umbria, Italy"
        },
        "attributes": {},
        "tags": [
          "pantry",
          "truffle",
          "olive-oil"
        ]
      },
      {
        "id": "food-007",
        "title": "Valrhona Grand Cru Dark Chocolate Soufflé",
        "slug": "dark-chocolate-souffle",
        "sku": "REST-DES-07",
        "categoryId": "cat-food-bakery",
        "brand": "Saveur Patisserie",
        "price": 18,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 30,
        "rating": 4.94,
        "reviewCount": 77,
        "isBestSeller": true,
        "images": [
          {
            "id": "fimg-7",
            "url": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80",
            "alt": "Chocolate Souffle"
          }
        ],
        "shortDescription": "Warm molten Valrhona Guanaja 70% dark chocolate soufflé served with Tahitian vanilla bean creme anglaise.",
        "fullDescription": "Baked to order with an airy exterior and luscious molten chocolate center.",
        "specifications": {
          "Chocolate": "Valrhona Guanaja 70%",
          "Serve Time": "Freshly Baked (15 min)",
          "Allergens": "Dairy, Eggs"
        },
        "attributes": {},
        "tags": [
          "dessert",
          "chocolate",
          "souffle"
        ]
      },
      {
        "id": "food-008",
        "title": "Heritage Artisanal Charcuterie & Cheese Tasting Board",
        "slug": "charcuterie-cheese-board",
        "sku": "REST-APP-08",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 36,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 45,
        "rating": 4.91,
        "reviewCount": 83,
        "images": [
          {
            "id": "fimg-8",
            "url": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80",
            "alt": "Charcuterie Board"
          }
        ],
        "shortDescription": "Prosciutto di Parma 24-month, salame finocchiona, aged Comté, raw milk goat cheese, and honeycomb.",
        "fullDescription": "The quintessential beginning to an unforgettable meal.",
        "specifications": {
          "Serves": "2-4 Guests",
          "Origin": "France, Italy, Spain",
          "Pairing": "Pinot Noir / Barolo"
        },
        "attributes": {},
        "tags": [
          "charcuterie",
          "cheese",
          "appetizer"
        ]
      },
      {
        "id": "food-009",
        "title": "Burrata Caprese with San Marzano Heirloom Tomatoes",
        "slug": "burrata-caprese-heirloom",
        "sku": "REST-APP-09",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 22,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 35,
        "rating": 4.87,
        "reviewCount": 61,
        "isNewArrival": true,
        "images": [
          {
            "id": "fimg-9",
            "url": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop&q=80",
            "alt": "Burrata Caprese"
          }
        ],
        "shortDescription": "Hand-stretched Puglia burrata, rooftop-grown heirloom tomatoes, aged 25-year balsamic, and Sicilian basil oil.",
        "fullDescription": "Simple perfection using only peak-season ingredients. Served at room temperature with warm focaccia.",
        "specifications": {
          "Cheese": "Hand-Stretched Puglia Burrata",
          "Tomatoes": "San Marzano Heirloom",
          "Dietary": "Vegetarian"
        },
        "attributes": {},
        "tags": [
          "appetizer",
          "burrata",
          "vegetarian"
        ]
      },
      {
        "id": "food-010",
        "title": "Roasted Duck Breast with Cherry & Foie Gras Jus",
        "slug": "roasted-duck-breast-foie-gras",
        "sku": "REST-ENT-10",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 56,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "rating": 4.93,
        "reviewCount": 44,
        "isFeatured": true,
        "badge": "House Signature",
        "images": [
          {
            "id": "fimg-10",
            "url": "https://images.unsplash.com/photo-1607103960830-b53a3b2a0dd3?w=800&auto=format&fit=crop&q=80",
            "alt": "Duck Breast"
          }
        ],
        "shortDescription": "Slow-rendered Moulard duck breast with Morello cherry gastrique, sautéed spinach, and black truffle polenta.",
        "fullDescription": "Scored and rendered to a glass-like crisp skin, finished oven-rested for a blush pink interior.",
        "specifications": {
          "Bird": "Moulard Duck (Quebec Farm-Raised)",
          "Sauce": "Morello Cherry & Foie Gras Jus",
          "Allergens": "Dairy"
        },
        "attributes": {},
        "tags": [
          "duck",
          "entree",
          "signature"
        ]
      },
      {
        "id": "food-011",
        "title": "House-Smoked Burgers & Truffle Parmesan Frites",
        "slug": "smoked-burger-truffle-frites",
        "sku": "REST-BUR-11",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 26,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 55,
        "rating": 4.85,
        "reviewCount": 132,
        "isBestSeller": true,
        "images": [
          {
            "id": "fimg-11",
            "url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
            "alt": "Truffle Burger"
          }
        ],
        "shortDescription": "Smoked 8oz short-rib blend patty, aged cheddar, caramelized onion jam, and house-smoked aioli.",
        "fullDescription": "Cold-smoked over mesquite chips for 2 hours before griddle-searing. Served on a brioche bun with truffle-scented parmesan frites.",
        "specifications": {
          "Patty": "8oz Smoked Short-Rib Blend",
          "Cheese": "Aged Wisconsin Cheddar",
          "Sides": "Truffle Parmesan Frites"
        },
        "attributes": {},
        "tags": [
          "burger",
          "comfort",
          "bestseller"
        ]
      },
      {
        "id": "food-012",
        "title": "Single-Origin Cold Brew Coffee Concentrate",
        "slug": "single-origin-cold-brew",
        "sku": "REST-DRK-12",
        "categoryId": "cat-food-drinks",
        "brand": "Saveur Roastery",
        "price": 16,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 80,
        "rating": 4.9,
        "reviewCount": 89,
        "isNewArrival": true,
        "badge": "House Brew",
        "images": [
          {
            "id": "fimg-12",
            "url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop&q=80",
            "alt": "Cold Brew Coffee"
          }
        ],
        "shortDescription": "Ethiopian Yirgacheffe Gr.1 coffee steeped 22 hours in filtered water. Smooth, low-acid, and naturally sweet.",
        "fullDescription": "Dilute 1:2 for glass-poured iced coffee or enjoy as-is over ice for an intense espresso-like experience.",
        "specifications": {
          "Origin": "Yirgacheffe, Ethiopia",
          "Steep Time": "22 Hours Cold",
          "Volume": "750ml Concentrate"
        },
        "attributes": {},
        "tags": [
          "coffee",
          "beverage",
          "cold-brew"
        ]
      },
      {
        "id": "food-013",
        "title": "Hand-Rolled Cinnamon Cardamom Morning Buns",
        "slug": "cinnamon-cardamom-morning-buns",
        "sku": "REST-BAK-13",
        "categoryId": "cat-food-bakery",
        "brand": "Saveur Bakehouse",
        "price": 8,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 60,
        "rating": 4.92,
        "reviewCount": 104,
        "isBestSeller": true,
        "images": [
          {
            "id": "fimg-13",
            "url": "https://images.unsplash.com/photo-1586376341752-571e2b7d68b2?w=800&auto=format&fit=crop&q=80",
            "alt": "Cinnamon Buns"
          }
        ],
        "shortDescription": "Laminated Viennoiserie dough layered with Ceylon cinnamon, green cardamom, and raw turbinado sugar.",
        "fullDescription": "Proofed overnight in our cold room and baked at dawn for maximum caramelization and flaky layers.",
        "specifications": {
          "Type": "Viennoiserie",
          "Spices": "Ceylon Cinnamon & Green Cardamom",
          "Best Served": "Warm"
        },
        "attributes": {},
        "tags": [
          "bakery",
          "pastry",
          "morning"
        ]
      },
      {
        "id": "food-014",
        "title": "Lobster Bisque with Cognac & Crème Fraîche",
        "slug": "lobster-bisque-cognac",
        "sku": "REST-SOP-14",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 28,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "rating": 4.94,
        "reviewCount": 58,
        "isFeatured": true,
        "images": [
          {
            "id": "fimg-14",
            "url": "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&auto=format&fit=crop&q=80",
            "alt": "Lobster Bisque"
          }
        ],
        "shortDescription": "Rich Maine lobster bisque finished with aged cognac, house crème fraîche, and chervil.",
        "fullDescription": "Slow-reduced lobster shells and aromatics create a deeply savory, velvety base with generous chunks of claw meat.",
        "specifications": {
          "Lobster": "Maine (Wild Caught)",
          "Finish": "Aged Cognac & Crème Fraîche",
          "Allergens": "Shellfish, Dairy"
        },
        "attributes": {},
        "tags": [
          "soup",
          "lobster",
          "premium"
        ]
      },
      {
        "id": "food-015",
        "title": "Seasonal Tasting Menu (5 Courses)",
        "slug": "seasonal-tasting-menu-5-course",
        "sku": "REST-MENU-15",
        "categoryId": "cat-food-entrees",
        "brand": "Saveur Kitchen",
        "price": 145,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "person",
        "stockQuantity": 30,
        "rating": 4.99,
        "reviewCount": 29,
        "isFeatured": true,
        "badge": "Chef Experience",
        "images": [
          {
            "id": "fimg-15",
            "url": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
            "alt": "Chef Tasting Menu"
          }
        ],
        "shortDescription": "Five courses featuring amuse-bouche, crudo, pasta, main, and petit four dessert selection. Wine pairing available.",
        "fullDescription": "A curated journey through the season's finest produce, composed daily by our chef and pastry team.",
        "specifications": {
          "Courses": "5 + Amuse-Bouche",
          "Duration": "2.5 Hours",
          "Advance Notice": "Reservation Required"
        },
        "attributes": {},
        "tags": [
          "tasting-menu",
          "experience",
          "chef"
        ]
      },
      {
        "id": "food-016",
        "title": "House Signature Negroni Cocktail",
        "slug": "house-signature-negroni",
        "sku": "REST-DRK-16",
        "categoryId": "cat-food-drinks",
        "brand": "Saveur Bar",
        "price": 18,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 100,
        "rating": 4.88,
        "reviewCount": 71,
        "isNewArrival": true,
        "images": [
          {
            "id": "fimg-16",
            "url": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80",
            "alt": "Negroni Cocktail"
          }
        ],
        "shortDescription": "Barrel-aged gin, Campari, house sweet vermouth, and a hand-expressed orange coin over a single large ice sphere.",
        "fullDescription": "Our bar director's take on the classic: rested 30 days in American oak to mellow the bitterness and amplify caramel notes.",
        "specifications": {
          "Base": "Barrel-Aged Gin",
          "Type": "Classic Cocktail",
          "Finish": "Orange Peel Expression"
        },
        "attributes": {},
        "tags": [
          "cocktail",
          "bar",
          "signature"
        ]
      }
    ],
    "banners": [
      {
        "id": "ban-food-1",
        "title": "Artisanal Gastronomy & Seasonal Menus",
        "subtitle": "Farm-to-table cuisine crafted with heritage techniques and fresh dawn harvest",
        "tag": "CHEF TASTING MENU",
        "ctaText": "Explore Menu & Reserve",
        "linkCategory": "cat-food-entrees",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#b45309",
        "overlayGradient": "from-black/80 via-black/45 to-transparent"
      },
      {
        "id": "ban-food-2",
        "title": "The Chef's Table & Private Cellar",
        "subtitle": "An intimate culinary journey with rare seasonal delicacies and sommelier pairings",
        "tag": "EXCLUSIVE DINING",
        "ctaText": "View Wine & Cellar List",
        "linkCategory": "cat-food-pasta",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#92400e",
        "overlayGradient": "from-stone-950/85 via-stone-900/50 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-sonoma-valley",
        "name": "Sonoma Valley Organic Farm",
        "slug": "sonoma-valley-organic",
        "logo": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 430,
        "salesCount": 8200,
        "description": "Regenerative organic farm producing heirloom fruits, greens, and hydraulic-pressed juices in northern California.",
        "location": "Sonoma Valley, CA, USA",
        "commissionRate": 10,
        "joinedDate": "2022-03-15",
        "email": "harvest@sonomavalleyorganics.com",
        "phone": "+1 (707) 555-0182",
        "balance": 34200,
        "payoutMethod": "Direct ACH Wire",
        "isVerified": true
      },
      {
        "id": "vendor-san-michele",
        "name": "Frantoio San Michele Estate",
        "slug": "san-michele",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 280,
        "salesCount": 4200,
        "description": "Generational Ligurian olive grove certified organic since 1988.",
        "location": "Liguria, Italy",
        "commissionRate": 10,
        "joinedDate": "2023-05-20",
        "email": "olio@sanmichele.it",
        "phone": "+39 0183 12345",
        "balance": 16500,
        "payoutMethod": "Direct Wire",
        "isVerified": true
      },
      {
        "id": "vendor-sicily-groves",
        "name": "Sicily Heritage Grove",
        "slug": "sicily-heritage-grove",
        "logo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.95,
        "reviewCount": 190,
        "salesCount": 2800,
        "description": "Centuries-old volcanic soil orchards growing Tarocco blood oranges and stone-milled Bronte pistachios.",
        "location": "Catania, Sicily, Italy",
        "commissionRate": 10,
        "joinedDate": "2023-08-11",
        "email": "ordini@sicilyheritage.it",
        "phone": "+39 095 88214",
        "balance": 12400,
        "payoutMethod": "SEPA Transfer",
        "isVerified": true
      },
      {
        "id": "vendor-kyoto-farm",
        "name": "Kyoto Mountain Farm",
        "slug": "kyoto-mountain-farm",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.97,
        "reviewCount": 310,
        "salesCount": 3900,
        "description": "Single-estate tea masters and biodynamic growers in the misty highlands of Uji and Wazuka.",
        "location": "Kyoto Prefecture, Japan",
        "commissionRate": 12,
        "joinedDate": "2023-02-14",
        "email": "tea@kyotomountain.jp",
        "phone": "+81 774 21 0000",
        "balance": 19800,
        "payoutMethod": "International SWIFT",
        "isVerified": true
      },
      {
        "id": "vendor-terra-bakehouse",
        "name": "Terra Artisan Bakehouse & Roasters",
        "slug": "terra-bakehouse",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.94,
        "reviewCount": 260,
        "salesCount": 5100,
        "description": "Wild yeast naturally leavened sourdough bread and micro-lot specialty coffee roasters.",
        "location": "Portland, OR, USA",
        "commissionRate": 10,
        "joinedDate": "2023-09-01",
        "email": "bake@terrabakehouse.com",
        "phone": "+1 (503) 555-0149",
        "balance": 14700,
        "payoutMethod": "Direct ACH Wire",
        "isVerified": true
      },
      {
        "id": "vendor-wild-apiary",
        "name": "Wild Rainforest Apiaries",
        "slug": "wild-rainforest",
        "logo": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.92,
        "reviewCount": 94,
        "salesCount": 960,
        "description": "Sustainable apiculture in the remote Tasmanian wilderness.",
        "location": "Hobart, Tasmania",
        "commissionRate": 10,
        "joinedDate": "2024-01-10",
        "email": "buzz@wildrainforest.com.au",
        "phone": "+61 3 6200 0000",
        "balance": 3800,
        "payoutMethod": "Stripe Direct",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "gpost-1",
        "title": "Demystifying Polyphenols: The Secret Health Metric in Extra Virgin Olive Oil",
        "slug": "polyphenols-olive-oil-guide",
        "excerpt": "Why that peppery tickle in the back of your throat indicates peak antioxidant concentration.",
        "content": "High-polyphenol olive oils contain potent anti-inflammatory compounds called oleocanthal...",
        "coverImage": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Dr. Marco Donati",
          "role": "Food Biochemist",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 02, 2026",
        "category": "Nutrition Science",
        "tags": [
          "Olive Oil",
          "Polyphenols",
          "Longevity"
        ],
        "readTime": "4 min read"
      }
    ]
  },
  "beauty": {
    "id": "beauty",
    "name": "LUMIÈRE Botanicals",
    "tagline": "Clean Beauty, Radiant Skin & Modern Rituals",
    "categoryTag": "Beauty & Skincare",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "beauty",
      "primaryColor": "#be185d",
      "primaryHover": "#9d174d",
      "secondaryColor": "#a1a1aa",
      "accentColor": "#c084fc",
      "surfaceColor": "#ffffff",
      "surfaceElevated": "#f4f4f5",
      "textColor": "#09090b",
      "textMuted": "#71717a",
      "borderColor": "#e4e4e7",
      "fontDisplay": "Cormorant Garamond, Georgia, serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-none",
      "shadowIntensity": "shadow-sm",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-beauty-serums",
        "name": "Serums & Facial Elixirs",
        "slug": "serums-elixirs",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        "description": "Multi-weight hyaluronic acids, copper peptides, and botanical antioxidants.",
        "attributes": []
      },
      {
        "id": "cat-beauty-creams",
        "name": "Barrier Creams & Balms",
        "slug": "barrier-creams",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
        "description": "Ceramide-rich barrier restorative balms and whipped overnight sleeping masks.",
        "attributes": []
      },
      {
        "id": "cat-beauty-cleanse",
        "name": "Cleansers & Exfoliants",
        "slug": "cleansers-exfoliants",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1570194065650-d99fb4abbd90?w=800&auto=format&fit=crop&q=80",
        "description": "Gentle micellar waters, AHA/BHA chemical exfoliants, and oil cleansing balms.",
        "attributes": []
      },
      {
        "id": "cat-beauty-spf",
        "name": "Sunscreen & UV Protection",
        "slug": "sunscreen-spf",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&auto=format&fit=crop&q=80",
        "description": "Mineral and chemical broad-spectrum SPF formulations for daily UV defense.",
        "attributes": []
      },
      {
        "id": "cat-beauty-makeup",
        "name": "Makeup & Color",
        "slug": "makeup-color",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80",
        "description": "Buildable foundation, pigment-rich lip colors, and skin-nourishing tinted balms.",
        "attributes": []
      }
    ],
    "products": [
      {
        "id": "beauty-001",
        "title": "Multi-Peptide Radiance & Firming Glow Serum",
        "slug": "multi-peptide-firming-serum",
        "sku": "LUM-SER-01",
        "categoryId": "cat-beauty-serums",
        "brand": "LUMIÈRE Botanicals",
        "price": 72,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 50,
        "rating": 4.97,
        "reviewCount": 120,
        "isFeatured": true,
        "isBestSeller": true,
        "badge": "Clinical Favorite",
        "images": [
          {
            "id": "bimg-1",
            "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
            "alt": "Radiance Serum"
          }
        ],
        "shortDescription": "Bio-active peptide complex infused with snow mushroom hyaluronic acid for bouncy, hydrated glass skin.",
        "fullDescription": "Formulated without synthetic fragrance or silicones. Clinically proven to boost skin elasticity within 14 days.",
        "specifications": {
          "Size": "50 ml / 1.7 fl oz",
          "Key Actives": "Copper Peptides, Tremella Mushroom",
          "Skin Type": "All Skin Types"
        },
        "attributes": {},
        "tags": [
          "serum",
          "skincare",
          "radiance"
        ]
      },
      {
        "id": "beauty-002",
        "title": "Squalane & Ceramide Deep Barrier Hydrating Cream",
        "slug": "squalane-ceramide-barrier-cream",
        "sku": "LUM-CRM-02",
        "categoryId": "cat-beauty-creams",
        "brand": "LUMIÈRE Botanicals",
        "price": 58,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 45,
        "rating": 4.91,
        "reviewCount": 86,
        "isFeatured": true,
        "images": [
          {
            "id": "bimg-2",
            "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
            "alt": "Barrier Cream"
          }
        ],
        "shortDescription": "Rich velvet moisture cream restoring compromised lipid barriers with plant squalane and 5 essential ceramides.",
        "fullDescription": "A cushiony cloud of hydration that calms redness and locks in active serums.",
        "specifications": {
          "Size": "60 ml / 2.0 fl oz",
          "Cruelty Free": "Yes",
          "Packaging": "Recyclable Amber Glass"
        },
        "attributes": {},
        "tags": [
          "cream",
          "moisturizer",
          "barrier"
        ]
      },
      {
        "id": "beauty-003",
        "title": "Vitamin C + Niacinamide Brightening Ampoule",
        "slug": "vitamin-c-niacinamide-ampoule",
        "sku": "LUM-SER-03",
        "categoryId": "cat-beauty-serums",
        "brand": "LUMIÈRE Botanicals",
        "price": 65,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 55,
        "rating": 4.93,
        "reviewCount": 98,
        "isFeatured": true,
        "badge": "New Formula",
        "images": [
          {
            "id": "bimg-3",
            "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80",
            "alt": "Vitamin C Ampoule"
          }
        ],
        "shortDescription": "20% stable L-Ascorbic Acid paired with 10% niacinamide to visibly fade dark spots and even skin tone.",
        "fullDescription": "Ethyl-stabilized vitamin C complex that stays potent for 18 months. Apply AM under SPF for maximum brightening efficacy.",
        "specifications": {
          "Vitamin C": "20% Stable Ethyl Ascorbate",
          "Niacinamide": "10%",
          "pH": "3.5–3.8"
        },
        "attributes": {},
        "tags": [
          "vitamin-c",
          "brightening",
          "serum"
        ]
      },
      {
        "id": "beauty-004",
        "title": "Micellar + AHA Gentle Resurfacing Cleansing Water",
        "slug": "micellar-aha-cleansing-water",
        "sku": "LUM-CLN-04",
        "categoryId": "cat-beauty-cleanse",
        "brand": "LUMIÈRE Botanicals",
        "price": 38,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 70,
        "rating": 4.85,
        "reviewCount": 144,
        "isBestSeller": true,
        "images": [
          {
            "id": "bimg-4",
            "url": "https://images.unsplash.com/photo-1570194065650-d99fb4abbd90?w=800&auto=format&fit=crop&q=80",
            "alt": "Cleansing Water"
          }
        ],
        "shortDescription": "Dual-action formula: micelles lift makeup and SPF while 3% PHA gently resurfaces texture without irritation.",
        "fullDescription": "Fragrance-free and pH-balanced at 5.5 for daily use even on sensitive and rosacea-prone skin.",
        "specifications": {
          "Size": "250 ml",
          "Active": "3% Lactobionic PHA",
          "Suitable For": "All Skin Types incl. Sensitive"
        },
        "attributes": {},
        "tags": [
          "cleanser",
          "micellar",
          "gentle"
        ]
      },
      {
        "id": "beauty-005",
        "title": "Retinal + Bakuchiol Anti-Aging Night Serum",
        "slug": "retinal-bakuchiol-night-serum",
        "sku": "LUM-SER-05",
        "categoryId": "cat-beauty-serums",
        "brand": "LUMIÈRE Botanicals",
        "price": 89,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 35,
        "rating": 4.96,
        "reviewCount": 74,
        "isFeatured": true,
        "badge": "Pro Strength",
        "images": [
          {
            "id": "bimg-5",
            "url": "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&auto=format&fit=crop&q=80",
            "alt": "Night Serum"
          }
        ],
        "shortDescription": "0.1% Retinal (10x more potent than Retinol) paired with plant-derived Bakuchiol for minimized irritation.",
        "fullDescription": "Encapsulated Retinal released slowly overnight to maximize collagen stimulation while you sleep.",
        "specifications": {
          "Key Active": "0.1% Retinal + 1% Bakuchiol",
          "Use": "PM Only",
          "Size": "30 ml"
        },
        "attributes": {},
        "tags": [
          "retinal",
          "anti-aging",
          "night"
        ]
      },
      {
        "id": "beauty-006",
        "title": "Mineral Tinted SPF 50 Sunscreen Fluid",
        "slug": "mineral-tinted-spf50-fluid",
        "sku": "LUM-SPF-06",
        "categoryId": "cat-beauty-spf",
        "brand": "LUMIÈRE Botanicals",
        "price": 44,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 90,
        "rating": 4.88,
        "reviewCount": 167,
        "isBestSeller": true,
        "images": [
          {
            "id": "bimg-6",
            "url": "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&auto=format&fit=crop&q=80",
            "alt": "Mineral SPF"
          }
        ],
        "shortDescription": "Weightless mineral SPF 50 with sheer universal tint, blue light filtering iron oxides, and niacinamide.",
        "fullDescription": "Reef-safe non-nano zinc oxide. Leaves no white cast on medium to deep skin tones. Doubles as a daily primer.",
        "specifications": {
          "SPF": "50 / PA++++",
          "Filter": "Non-Nano Zinc Oxide 20%",
          "Tint": "Universal Sheer"
        },
        "attributes": {},
        "tags": [
          "spf",
          "sunscreen",
          "mineral"
        ]
      },
      {
        "id": "beauty-007",
        "title": "Watermelon + Hyaluronic Acid Hydrating Gel Moisturizer",
        "slug": "watermelon-hyaluronic-gel-moisturizer",
        "sku": "LUM-CRM-07",
        "categoryId": "cat-beauty-creams",
        "brand": "LUMIÈRE Botanicals",
        "price": 46,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 65,
        "rating": 4.9,
        "reviewCount": 132,
        "isBestSeller": true,
        "images": [
          {
            "id": "bimg-7",
            "url": "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=800&auto=format&fit=crop&q=80",
            "alt": "Gel Moisturizer"
          }
        ],
        "shortDescription": "Watermelon seed extract and 3-weight hyaluronic acid complex in a refreshing oil-free gel texture.",
        "fullDescription": "Absorbs in seconds without residue. Ideal layered under SPF for oily, combination, and acne-prone skin.",
        "specifications": {
          "Texture": "Weightless Gel",
          "Key Actives": "Citrullus Lanatus Seed Extract, HA Complex",
          "Oil Free": "Yes"
        },
        "attributes": {},
        "tags": [
          "gel",
          "hydrating",
          "oil-free"
        ]
      },
      {
        "id": "beauty-008",
        "title": "BHA 2% Salicylic Acid Pore Clarifying Exfoliant",
        "slug": "bha-salicylic-acid-exfoliant",
        "sku": "LUM-CLN-08",
        "categoryId": "cat-beauty-cleanse",
        "brand": "LUMIÈRE Botanicals",
        "price": 36,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 85,
        "rating": 4.87,
        "reviewCount": 201,
        "isBestSeller": true,
        "images": [
          {
            "id": "bimg-8",
            "url": "https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&auto=format&fit=crop&q=80",
            "alt": "BHA Exfoliant"
          }
        ],
        "shortDescription": "Leave-on 2% BHA liquid exfoliant that penetrates deep into pores to dissolve blackheads and smooth bumpy skin texture.",
        "fullDescription": "Oil-soluble salicylic acid penetrates the lipid layer of pore walls to remove excess sebum and dead skin cells.",
        "specifications": {
          "BHA": "2% Salicylic Acid",
          "pH": "3.2",
          "Use": "Evening, after cleansing"
        },
        "attributes": {},
        "tags": [
          "bha",
          "exfoliant",
          "acne"
        ]
      },
      {
        "id": "beauty-009",
        "title": "Velvet Matte Liquid Lipstick — Long Wear",
        "slug": "velvet-matte-liquid-lipstick",
        "sku": "LUM-MKP-09",
        "categoryId": "cat-beauty-makeup",
        "brand": "LUMIÈRE Color",
        "price": 29,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 110,
        "rating": 4.84,
        "reviewCount": 178,
        "isNewArrival": true,
        "images": [
          {
            "id": "bimg-9",
            "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80",
            "alt": "Liquid Lipstick"
          }
        ],
        "shortDescription": "Velvety matte finish with 12-hour transfer-proof wear. Infused with shea butter and vitamin E for comfort.",
        "fullDescription": "Buildable intensity from sheer to full-opaque. Non-drying formula keeps lips comfortable throughout the day.",
        "specifications": {
          "Finish": "Velvet Matte",
          "Wear Time": "12 Hours",
          "Ingredients": "Shea Butter, Vitamin E"
        },
        "attributes": {},
        "tags": [
          "lipstick",
          "matte",
          "makeup"
        ]
      },
      {
        "id": "beauty-010",
        "title": "Rose Quartz Facial Gua Sha + Jade Roller Set",
        "slug": "rose-quartz-gua-sha-jade-roller",
        "sku": "LUM-TOOL-10",
        "categoryId": "cat-beauty-creams",
        "brand": "LUMIÈRE Botanicals",
        "price": 42,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 48,
        "rating": 4.89,
        "reviewCount": 96,
        "isFeatured": true,
        "images": [
          {
            "id": "bimg-10",
            "url": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&auto=format&fit=crop&q=80",
            "alt": "Gua Sha Set"
          }
        ],
        "shortDescription": "Genuine grade-A rose quartz Gua Sha tool and dual-ended jade face roller for lymphatic drainage and facial lifting.",
        "fullDescription": "Use with facial oil to sculpt jawline, reduce puffiness, and boost serum absorption through lymphatic drainage.",
        "specifications": {
          "Material": "Genuine Rose Quartz & Jade",
          "Includes": "Gua Sha + Dual-End Roller + Velvet Pouch",
          "Cruelty Free": "Yes"
        },
        "attributes": {},
        "tags": [
          "gua-sha",
          "facial-tool",
          "wellness"
        ]
      },
      {
        "id": "beauty-011",
        "title": "Overnight Restorative Sleeping Mask — Ceramide Cocoon",
        "slug": "overnight-sleeping-mask-ceramide",
        "sku": "LUM-CRM-11",
        "categoryId": "cat-beauty-creams",
        "brand": "LUMIÈRE Botanicals",
        "price": 52,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 40,
        "rating": 4.94,
        "reviewCount": 83,
        "isFeatured": true,
        "badge": "Bestseller",
        "images": [
          {
            "id": "bimg-11",
            "url": "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=800&auto=format&fit=crop&q=80",
            "alt": "Sleeping Mask"
          }
        ],
        "shortDescription": "Rich overnight treatment sealing ceramides, niacinamide, and calming bisabolol into your skin barrier as you sleep.",
        "fullDescription": "Apply as the final step in your evening ritual. Wake to visibly plumper, calmer, and deeply moisturized skin.",
        "specifications": {
          "Use": "PM (Final Skincare Step)",
          "Size": "80ml",
          "Key Actives": "Ceramide NP/AP/EOP + Bisabolol"
        },
        "attributes": {},
        "tags": [
          "sleeping-mask",
          "ceramide",
          "overnight"
        ]
      },
      {
        "id": "beauty-012",
        "title": "Hydrating Foundation — Buildable Serum Coverage",
        "slug": "hydrating-serum-foundation",
        "sku": "LUM-MKP-12",
        "categoryId": "cat-beauty-makeup",
        "brand": "LUMIÈRE Color",
        "price": 48,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 75,
        "rating": 4.86,
        "reviewCount": 142,
        "isNewArrival": true,
        "images": [
          {
            "id": "bimg-12",
            "url": "https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?w=800&auto=format&fit=crop&q=80",
            "alt": "Serum Foundation"
          }
        ],
        "shortDescription": "Skin-care-meets-makeup: hyaluronic acid infused foundation offering SPF 20, 32 inclusive shades, and 16-hour wear.",
        "fullDescription": "Buildable from medium to full coverage. The serum-texture formula skin-adapts across all undertones without oxidizing.",
        "specifications": {
          "SPF": "20",
          "Shades": "32 Inclusive",
          "Wear": "16 Hours",
          "Finish": "Natural Satin"
        },
        "attributes": {},
        "tags": [
          "foundation",
          "makeup",
          "serum"
        ]
      },
      {
        "id": "beauty-013",
        "title": "Facial Cleansing Balm — Luxury Melt-Away Makeup",
        "slug": "facial-cleansing-balm-meltaway",
        "sku": "LUM-CLN-13",
        "categoryId": "cat-beauty-cleanse",
        "brand": "LUMIÈRE Botanicals",
        "price": 54,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 42,
        "rating": 4.92,
        "reviewCount": 91,
        "isFeatured": true,
        "images": [
          {
            "id": "bimg-13",
            "url": "https://images.unsplash.com/photo-1573575155376-b5010099301b?w=800&auto=format&fit=crop&q=80",
            "alt": "Cleansing Balm"
          }
        ],
        "shortDescription": "Shea and mango butter balm melts into a silky oil to dissolve SPF, long-wear makeup, and daily impurities.",
        "fullDescription": "Rinses clean without a residue film. Leaves skin soft and prepped — never stripped. Great for double cleansing.",
        "specifications": {
          "Size": "100g",
          "Format": "Solid-to-Oil Balm",
          "Key Butters": "Shea, Mango, Kokum"
        },
        "attributes": {},
        "tags": [
          "balm",
          "oil-cleanser",
          "makeup-remover"
        ]
      },
      {
        "id": "beauty-014",
        "title": "Sun Drop Invisible Airy SPF 50 PA++++",
        "slug": "sun-drop-invisible-spf50",
        "sku": "LUM-SPF-14",
        "categoryId": "cat-beauty-spf",
        "brand": "LUMIÈRE Botanicals",
        "price": 38,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 100,
        "rating": 4.91,
        "reviewCount": 224,
        "isBestSeller": true,
        "badge": "Top Rated",
        "images": [
          {
            "id": "bimg-14",
            "url": "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop&q=80",
            "alt": "Invisible SPF"
          }
        ],
        "shortDescription": "Water-drop texture SPF 50 PA++++ that sinks invisibly into skin within 30 seconds. Zero white cast, fragrance-free.",
        "fullDescription": "Photostable hybrid filter system with Tinosorb S Aqua and avobenzone. Reapply-friendly formula works over or under makeup.",
        "specifications": {
          "SPF": "50 / PA++++",
          "Texture": "Water-Drop Essence",
          "White Cast": "None"
        },
        "attributes": {},
        "tags": [
          "spf",
          "invisible",
          "daily"
        ]
      }
    ],
    "banners": [
      {
        "id": "ban-beauty-1",
        "title": "Botanical Radiance & Clinical Actives",
        "subtitle": "Pure bio-active formulations designed to nourish and replenish luminous complexions",
        "tag": "CLEAN BOTANICALS",
        "ctaText": "Explore Skincare Collection",
        "linkCategory": "cat-beauty-serums",
        "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#be185d",
        "overlayGradient": "from-pink-950/80 via-pink-900/40 to-transparent"
      },
      {
        "id": "ban-beauty-2",
        "title": "The Modern Skincare Ritual",
        "subtitle": "Science-backed ingredients with a clean beauty philosophy — no compromise",
        "tag": "SKIN SCIENCE",
        "ctaText": "Shop Bestsellers",
        "linkCategory": "cat-beauty-serums",
        "image": "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#9d174d",
        "overlayGradient": "from-rose-950/80 via-rose-900/40 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-aura-flagship",
        "name": "AURA Direct",
        "slug": "aura-flagship",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.9,
        "reviewCount": 412,
        "salesCount": 3200,
        "description": "Official flagship boutique of AURA haute couture and ready-to-wear luxury collections.",
        "location": "Paris, France",
        "commissionRate": 10,
        "joinedDate": "2023-01-10",
        "email": "concierge@aura-boutique.com",
        "phone": "+33 1 42 68 55 00",
        "balance": 14250,
        "payoutMethod": "SEPA Direct Wire (FR76...)",
        "isVerified": true
      },
      {
        "id": "vendor-sartoria",
        "name": "Sartoria Milano",
        "slug": "sartoria-milano",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.85,
        "reviewCount": 189,
        "salesCount": 1450,
        "description": "Generational Milanese tailor guild delivering handcrafted suits and traditional Italian shoemaking.",
        "location": "Milan, Italy",
        "commissionRate": 12,
        "joinedDate": "2023-06-15",
        "email": "orders@sartoriamilano.it",
        "phone": "+39 02 876 543",
        "balance": 8900,
        "payoutMethod": "Bank Wire Transfer",
        "isVerified": true
      },
      {
        "id": "vendor-cuoio",
        "name": "Cuoio Firenze Leather",
        "slug": "cuoio-firenze",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.95,
        "reviewCount": 96,
        "salesCount": 880,
        "description": "Family tannery and leather workshop producing certified vegetable-tanned travel goods along the Arno river.",
        "location": "Florence, Italy",
        "commissionRate": 10,
        "joinedDate": "2024-02-01",
        "email": "bottega@cuoiofirenze.it",
        "phone": "+39 055 234 567",
        "balance": 4120,
        "payoutMethod": "Stripe Direct",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "post-1",
        "title": "The Anatomy of Pure Cashmere: Why Micron Count Matters",
        "slug": "cashmere-micron-guide",
        "excerpt": "Discover why 14-micron Mongolian fibers provide superior loft, resistance to pilling, and thermal insulation over synthetic blends.",
        "content": "True luxury lies in the fiber. When evaluating high-grade knitwear, fiber diameter (measured in microns) and staple length dictate both longevity and hand-feel...",
        "coverImage": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Camille Laurent",
          "role": "Creative Director",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 18, 2026",
        "category": "Materials & Craft",
        "tags": [
          "Cashmere",
          "Sustainability",
          "Care Guide"
        ],
        "readTime": "4 min read"
      },
      {
        "id": "post-2",
        "title": "Building a Capsule Wardrobe for the Global Traveler",
        "slug": "travel-capsule-wardrobe",
        "excerpt": "Five crease-resistant pieces that form twelve distinct ensembles from boardroom presentations to weekend escapes.",
        "content": "Packing with intention transforms travel. By anchoring around high-twist wool blazers and silk slip dresses...",
        "coverImage": "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Matteo Rossi",
          "role": "Senior Stylist",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 10, 2026",
        "category": "Styling Editorial",
        "tags": [
          "Travel",
          "Capsule Wardrobe",
          "Menswear"
        ],
        "readTime": "6 min read"
      }
    ]
  },
  "furniture": {
    "id": "furniture",
    "name": "Hearth & Timber",
    "tagline": "Solid-Wood Furniture for Homes with Character",
    "categoryTag": "Furniture & Interiors",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "furniture",
      "primaryColor": "#78350f",
      "primaryHover": "#5f2f0a",
      "secondaryColor": "#78716c",
      "accentColor": "#ca8a04",
      "surfaceColor": "#fafaf9",
      "surfaceElevated": "#f5f5f4",
      "textColor": "#1c1917",
      "textMuted": "#78716c",
      "borderColor": "#e7e5e4",
      "fontDisplay": "Lora, Georgia, serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-lg",
      "shadowIntensity": "shadow-sm",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-furn-living",
        "name": "Living & Lounge Seating",
        "slug": "living-lounge",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
        "description": "Sculptural lounge chairs, deep modular sectionals, and solid oak tables.",
        "attributes": []
      },
      {
        "id": "cat-furn-dining",
        "name": "Dining Tables & Chairs",
        "slug": "dining-tables-chairs",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&auto=format&fit=crop&q=80",
        "description": "Solid hardwood dining tables and matching upholstered dining chairs.",
        "attributes": []
      },
      {
        "id": "cat-furn-bedroom",
        "name": "Bedroom & Storage",
        "slug": "bedroom-storage",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&auto=format&fit=crop&q=80",
        "description": "Platform beds, solid wood dressers, nightstands, and wardrobe systems.",
        "attributes": []
      },
      {
        "id": "cat-furn-office",
        "name": "Home Office",
        "slug": "home-office",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop&q=80",
        "description": "Standing desks, ergonomic task chairs, and solid wood office shelving.",
        "attributes": []
      }
    ],
    "products": [
      {
        "id": "furn-001",
        "title": "Solid White Oak Architectural Dining Table (84\")",
        "slug": "solid-oak-dining-table",
        "sku": "FUR-TBL-01",
        "categoryId": "cat-furn-dining",
        "brand": "Hearth & Timber",
        "price": 1250,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 15,
        "rating": 4.98,
        "reviewCount": 35,
        "isFeatured": true,
        "badge": "Solid Hardwood",
        "images": [
          {
            "id": "fur-img-1",
            "url": "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&auto=format&fit=crop&q=80",
            "alt": "Oak Dining Table"
          }
        ],
        "shortDescription": "Sustainably harvested French white oak finished with non-toxic natural matte hardwax oil.",
        "fullDescription": "Built with traditional mortise-and-tenon joinery. Seats up to 8 adults with comfortable leg clearance.",
        "specifications": {
          "Dimensions": "84\"L x 38\"W x 30\"H",
          "Material": "100% Solid French White Oak",
          "Seating": "8 People"
        },
        "attributes": {},
        "tags": [
          "furniture",
          "oak",
          "dining"
        ]
      },
      {
        "id": "furn-002",
        "title": "Boucle Curved Lounge Chair with Walnut Base",
        "slug": "boucle-curved-lounge-chair",
        "sku": "FUR-CHR-02",
        "categoryId": "cat-furn-living",
        "brand": "Hearth & Timber",
        "price": 895,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 20,
        "rating": 4.95,
        "reviewCount": 48,
        "isFeatured": true,
        "isBestSeller": true,
        "badge": "Designer Pick",
        "images": [
          {
            "id": "fur-img-2",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
            "alt": "Boucle Lounge Chair"
          }
        ],
        "shortDescription": "Cloud-soft Italian boucle upholstery on a sculptural solid American walnut frame with 360° swivel.",
        "fullDescription": "Inspired by mid-century organic forms. The hand-bent walnut base is individually turned and sanded by craftspeople.",
        "specifications": {
          "Upholstery": "Italian Boucle (Wool-Poly Blend)",
          "Frame": "Solid American Black Walnut",
          "Swivel": "360° Ball-Bearing"
        },
        "attributes": {},
        "tags": [
          "chair",
          "lounge",
          "boucle"
        ]
      },
      {
        "id": "furn-003",
        "title": "Marble-Top & Walnut Live-Edge Coffee Table",
        "slug": "marble-walnut-coffee-table",
        "sku": "FUR-TBL-03",
        "categoryId": "cat-furn-living",
        "brand": "Hearth & Timber",
        "price": 720,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 12,
        "rating": 4.92,
        "reviewCount": 41,
        "isFeatured": true,
        "images": [
          {
            "id": "fur-img-3",
            "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80",
            "alt": "Coffee Table"
          }
        ],
        "shortDescription": "Calacatta Viola marble slab top on a solid walnut live-edge base with hand-rubbed oil finish.",
        "fullDescription": "Each marble slab is unique — vein pattern varies as nature intended. Sold with a moisture-protective sealant kit.",
        "specifications": {
          "Top": "Calacatta Viola Marble, 20mm thick",
          "Base": "Solid Walnut Live-Edge",
          "Dimensions": "48\"L x 24\"W x 17\"H"
        },
        "attributes": {},
        "tags": [
          "coffee-table",
          "marble",
          "walnut"
        ]
      },
      {
        "id": "furn-004",
        "title": "Deep Modular Corner Sectional Sofa — Oatmeal Linen",
        "slug": "modular-corner-sectional-linen",
        "sku": "FUR-SOF-04",
        "categoryId": "cat-furn-living",
        "brand": "Hearth & Timber",
        "price": 2890,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 8,
        "rating": 4.97,
        "reviewCount": 29,
        "isFeatured": true,
        "badge": "Flagship",
        "images": [
          {
            "id": "fur-img-4",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
            "alt": "Modular Sectional"
          }
        ],
        "shortDescription": "Deep-seat modular L-sectional in natural linen with solid oak feet. 6 configurable pieces. Removable/washable covers.",
        "fullDescription": "Box-spring coil core with GOTS-certified organic cotton batting. Feather-down wrapped cushions for cloud comfort.",
        "specifications": {
          "Upholstery": "Belgian Natural Linen",
          "Frame": "Kiln-Dried Birch",
          "Configuration": "6-Piece Modular"
        },
        "attributes": {},
        "tags": [
          "sofa",
          "sectional",
          "modular"
        ]
      },
      {
        "id": "furn-005",
        "title": "Upholstered Platform Bed Frame — Velvet Headboard (Queen)",
        "slug": "upholstered-platform-bed-queen",
        "sku": "FUR-BED-05",
        "categoryId": "cat-furn-bedroom",
        "brand": "Hearth & Timber",
        "price": 1180,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "rating": 4.94,
        "reviewCount": 56,
        "isFeatured": true,
        "images": [
          {
            "id": "fur-img-5",
            "url": "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&auto=format&fit=crop&q=80",
            "alt": "Platform Bed"
          }
        ],
        "shortDescription": "Low-profile queen platform bed with floor-to-ceiling channelled velvet headboard and solid oak feet.",
        "fullDescription": "No box spring needed. Solid birch slat system supports up to 800 lbs. Available in Sage, Warm Sand, or Navy Blue velvet.",
        "specifications": {
          "Size": "Queen (60\" x 80\")",
          "Headboard": "Channelled Velvet, 55\" Tall",
          "Legs": "Solid White Oak"
        },
        "attributes": {},
        "tags": [
          "bed",
          "bedroom",
          "velvet"
        ]
      },
      {
        "id": "furn-006",
        "title": "Sit-Stand Electric Height-Adjustable Desk (60\")",
        "slug": "electric-sit-stand-desk",
        "sku": "FUR-DSK-06",
        "categoryId": "cat-furn-office",
        "brand": "Hearth & Timber",
        "price": 875,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "rating": 4.91,
        "reviewCount": 78,
        "isBestSeller": true,
        "images": [
          {
            "id": "fur-img-6",
            "url": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop&q=80",
            "alt": "Standing Desk"
          }
        ],
        "shortDescription": "Dual-motor electric height-adjustment from 25\" to 51\" with memory presets, cable management grommet, and 300 lb capacity.",
        "fullDescription": "Solid bamboo desktop on a cold-rolled steel frame. Whisper-quiet 45dB motor adjustment speed 1.5\"/sec.",
        "specifications": {
          "Desktop": "Solid Bamboo, 60\"W x 30\"D",
          "Height Range": "25\" to 51\"",
          "Motor": "Dual 350W Brushless"
        },
        "attributes": {},
        "tags": [
          "desk",
          "standing",
          "office"
        ]
      },
      {
        "id": "furn-007",
        "title": "Solid Walnut Floating Wall Shelving System",
        "slug": "walnut-floating-wall-shelves",
        "sku": "FUR-SHF-07",
        "categoryId": "cat-furn-bedroom",
        "brand": "Hearth & Timber",
        "price": 420,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 30,
        "rating": 4.89,
        "reviewCount": 64,
        "images": [
          {
            "id": "fur-img-7",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
            "alt": "Wall Shelves"
          }
        ],
        "shortDescription": "Set of 3 solid black walnut floating shelves with concealed steel keyhole brackets. 50 lb load capacity each.",
        "fullDescription": "Precision-cut from thick-sawn solid American black walnut. Hand-planed and oiled. Each shelf is 40\" x 10\" x 2\".",
        "specifications": {
          "Includes": "3 Shelves + Brackets",
          "Dimensions": "40\"W x 10\"D x 2\"T each",
          "Load Capacity": "50 lbs per shelf"
        },
        "attributes": {},
        "tags": [
          "shelf",
          "walnut",
          "floating"
        ]
      },
      {
        "id": "furn-008",
        "title": "Ergonomic Mesh Task Chair — Executive Pro",
        "slug": "ergonomic-mesh-task-chair",
        "sku": "FUR-CHR-08",
        "categoryId": "cat-furn-office",
        "brand": "Hearth & Timber",
        "price": 650,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "rating": 4.93,
        "reviewCount": 92,
        "isBestSeller": true,
        "images": [
          {
            "id": "fur-img-8",
            "url": "https://images.unsplash.com/photo-1589599904144-eb3a28a20e1d?w=800&auto=format&fit=crop&q=80",
            "alt": "Ergonomic Chair"
          }
        ],
        "shortDescription": "4D armrests, lumbar support, headrest, synchro-tilt recline lock, and breathable 3D spacer mesh back.",
        "fullDescription": "Certified to BIFMA standards. Supports users up to 300 lbs with a 12-year structural warranty.",
        "specifications": {
          "Back": "3D Spacer Mesh",
          "Armrests": "4D Adjustable",
          "Certification": "BIFMA Level 2",
          "Warranty": "12 Years"
        },
        "attributes": {},
        "tags": [
          "chair",
          "ergonomic",
          "office"
        ]
      },
      {
        "id": "furn-009",
        "title": "Rattan & Teak Garden Dining Set (6-Seater)",
        "slug": "rattan-teak-garden-dining-set",
        "sku": "FUR-OUT-09",
        "categoryId": "cat-furn-dining",
        "brand": "Hearth & Timber",
        "price": 1850,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 10,
        "rating": 4.96,
        "reviewCount": 31,
        "isFeatured": true,
        "badge": "Outdoor Living",
        "images": [
          {
            "id": "fur-img-9",
            "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
            "alt": "Garden Dining Set"
          }
        ],
        "shortDescription": "Grade-A plantation teak table and 6 UV-stable synthetic rattan chairs. Weather-resistant for year-round outdoor use.",
        "fullDescription": "Includes cushions in fade-resistant Sunbrella fabric. Teak is FSC-certified and oiled for moisture protection.",
        "specifications": {
          "Table": "Grade-A FSC Teak, 78\"L x 40\"W",
          "Chairs": "6 x Synthetic Rattan",
          "Cushions": "Sunbrella Fade-Resistant"
        },
        "attributes": {},
        "tags": [
          "outdoor",
          "garden",
          "dining"
        ]
      },
      {
        "id": "furn-010",
        "title": "Solid Pine Shaker Bedroom Dresser — 6 Drawer",
        "slug": "pine-shaker-dresser-6-drawer",
        "sku": "FUR-DRS-10",
        "categoryId": "cat-furn-bedroom",
        "brand": "Hearth & Timber",
        "price": 680,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "rating": 4.87,
        "reviewCount": 45,
        "images": [
          {
            "id": "fur-img-10",
            "url": "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=800&auto=format&fit=crop&q=80",
            "alt": "Bedroom Dresser"
          }
        ],
        "shortDescription": "6-drawer solid knotty pine shaker dresser with dovetail-jointed drawer boxes and brass cup-pull hardware.",
        "fullDescription": "Finished in a natural beeswax oil that lets the grain breathe. Full-extension soft-close drawer runners.",
        "specifications": {
          "Material": "Solid Knotty Pine",
          "Drawers": "6 Dovetail-Jointed",
          "Dimensions": "60\"W x 18\"D x 36\"H"
        },
        "attributes": {},
        "tags": [
          "dresser",
          "bedroom",
          "storage"
        ]
      },
      {
        "id": "furn-011",
        "title": "Solid Oak Upholstered Dining Chair Set (Set of 2)",
        "slug": "oak-upholstered-dining-chairs",
        "sku": "FUR-CHR-11",
        "categoryId": "cat-furn-dining",
        "brand": "Hearth & Timber",
        "price": 590,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 28,
        "rating": 4.9,
        "reviewCount": 62,
        "isBestSeller": true,
        "images": [
          {
            "id": "fur-img-11",
            "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",
            "alt": "Dining Chairs"
          }
        ],
        "shortDescription": "Set of 2 solid white oak dining chairs with foam-padded seat in natural linen. Hairpin legs available as upgrade.",
        "fullDescription": "Slim Scandinavian silhouette with angled rear legs for stability. Seat height 18\" suits most 30\" dining tables.",
        "specifications": {
          "Set": "2 Chairs",
          "Frame": "Solid White Oak",
          "Upholstery": "Natural Linen (Removable Cover)"
        },
        "attributes": {},
        "tags": [
          "chair",
          "dining",
          "set"
        ]
      },
      {
        "id": "furn-012",
        "title": "Minimalist Solid Ash Bedside Nightstand",
        "slug": "solid-ash-bedside-nightstand",
        "sku": "FUR-NS-12",
        "categoryId": "cat-furn-bedroom",
        "brand": "Hearth & Timber",
        "price": 310,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 35,
        "rating": 4.88,
        "reviewCount": 54,
        "isNewArrival": true,
        "images": [
          {
            "id": "fur-img-12",
            "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
            "alt": "Nightstand"
          }
        ],
        "shortDescription": "Minimalist solid European ash nightstand with one dovetail-jointed drawer and an open lower shelf. 24\"H.",
        "fullDescription": "Finished in natural Osmo hardwax oil. Pairs equally well with platform beds and elevated traditional frames.",
        "specifications": {
          "Material": "Solid European Ash",
          "Drawer": "1 Full-Extension Soft-Close",
          "Dimensions": "20\"W x 18\"D x 24\"H"
        },
        "attributes": {},
        "tags": [
          "nightstand",
          "bedroom",
          "ash"
        ]
      }
    ],
    "banners": [
      {
        "id": "ban-furn-1",
        "title": "Solid Hardwood & Architectural Interiors",
        "subtitle": "Heirloom craftsmanship, sculptural forms, and sustainable European timber",
        "tag": "HANDCRAFTED TIMBER",
        "ctaText": "Explore Dining & Living",
        "linkCategory": "cat-furn-dining",
        "image": "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#78350f",
        "overlayGradient": "from-amber-950/85 via-amber-900/40 to-transparent"
      },
      {
        "id": "ban-furn-2",
        "title": "The Bedroom Collection — Rest Well",
        "subtitle": "Platform beds, dressers, and nightstands crafted to stand the test of generations",
        "tag": "BEDROOM SERIES",
        "ctaText": "Shop Bedroom",
        "linkCategory": "cat-furn-bedroom",
        "image": "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#5f2f0a",
        "overlayGradient": "from-stone-950/85 via-stone-900/40 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-lumen-direct",
        "name": "LUMEN Studio Flagship",
        "slug": "lumen-flagship",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.94,
        "reviewCount": 310,
        "salesCount": 1800,
        "description": "Nordic and Japanese-inspired architectural furniture and lighting design studio.",
        "location": "Stockholm, Sweden",
        "commissionRate": 10,
        "joinedDate": "2023-03-01",
        "email": "studio@lumen-living.com",
        "phone": "+46 8 123 456",
        "balance": 18400,
        "payoutMethod": "Bank Wire",
        "isVerified": true
      },
      {
        "id": "vendor-komorebi",
        "name": "Komorebi Crafts Studio",
        "slug": "komorebi-crafts",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.92,
        "reviewCount": 140,
        "salesCount": 1200,
        "description": "Handmade washi rice paper lanterns and cast brass lighting fixtures.",
        "location": "Kyoto, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-06-15",
        "email": "contact@komorebicrafts.jp",
        "phone": "+81 75 555 0192",
        "balance": 9200,
        "payoutMethod": "Stripe Connect",
        "isVerified": true
      },
      {
        "id": "vendor-kyoto-ceramics",
        "name": "Kyoto Stoneware Works",
        "slug": "kyoto-stoneware",
        "logo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 220,
        "salesCount": 2900,
        "description": "Hand-thrown wood-fired stoneware ceramics and matcha chawan bowls.",
        "location": "Shigaraki, Shiga, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-01-20",
        "email": "master@kyotoceramics.jp",
        "phone": "+81 748 82 0011",
        "balance": 14600,
        "payoutMethod": "Bank Wire",
        "isVerified": true
      },
      {
        "id": "vendor-nordic-linen",
        "name": "Nordic Linen & Weavers",
        "slug": "nordic-linen",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.91,
        "reviewCount": 180,
        "salesCount": 2400,
        "description": "Heritage stonewashed French flax linen and pure Mongolian cashmere textiles.",
        "location": "Copenhagen, Denmark",
        "commissionRate": 10,
        "joinedDate": "2023-04-10",
        "email": "hello@nordiclinen.dk",
        "phone": "+45 33 99 88 77",
        "balance": 11800,
        "payoutMethod": "SEPA Transfer",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "hpost-1",
        "title": "The Art of Light Temperature: Crafting Circadian Balance at Home",
        "slug": "circadian-lighting-guide",
        "excerpt": "How shifting from 5000K daylight work lighting to 2200K amber evening glows promotes natural rest and mental calm.",
        "content": "Lighting is the invisible architecture of your emotional state...",
        "coverImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Elinor Lind",
          "role": "Interior Architect",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 05, 2026",
        "category": "Design Philosophy",
        "tags": [
          "Lighting",
          "Circadian",
          "Wellness"
        ],
        "readTime": "4 min read"
      }
    ]
  },
  "sports": {
    "id": "sports",
    "name": "Velocity Athletics & Performance",
    "tagline": "Performance Gear Built to Outlast Your Limits",
    "categoryTag": "Sports, Fitness & Activewear",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "sports",
      "primaryColor": "#ea580c",
      "primaryHover": "#c2410c",
      "secondaryColor": "#64748b",
      "accentColor": "#0ea5e9",
      "surfaceColor": "#ffffff",
      "surfaceElevated": "#f8fafc",
      "textColor": "#020617",
      "textMuted": "#64748b",
      "borderColor": "#e2e8f0",
      "fontDisplay": "Syne, system-ui, sans-serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-xl",
      "shadowIntensity": "shadow-md",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-sports-shoes",
        "name": "Performance Footwear",
        "slug": "performance-footwear",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
        "description": "Carbon-plated marathon racing shoes, trail running boots, and training sneakers.",
        "attributes": []
      },
      {
        "id": "cat-sports-apparel",
        "name": "Technical Activewear",
        "slug": "technical-activewear",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
        "description": "Moisture-wicking compression tights, thermal jackets, and aeroready shirts.",
        "attributes": []
      },
      {
        "id": "cat-sports-gear",
        "name": "Strength & Gym Equipment",
        "slug": "gym-equipment",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
        "description": "Adjustable dumbbell sets, resistance bands, Olympic barbells, and benches.",
        "attributes": []
      },
      {
        "id": "cat-sports-recovery",
        "name": "Recovery & Nutrition",
        "slug": "recovery-nutrition",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
        "description": "Percussion massage guns, high-density rollers, and protein supplements.",
        "attributes": []
      },
      {
        "id": "cat-sports-outdoor",
        "name": "Outdoor & Adventure",
        "slug": "outdoor-adventure",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80",
        "description": "Trail gear, hydration packs, and all-weather outdoor performance apparel.",
        "attributes": []
      }
    ],
    "products": [
      {
        "id": "sport-001",
        "title": "Velocity Carbon Pro Marathon Running Shoes",
        "slug": "carbon-pro-marathon-running-shoes",
        "sku": "SPT-SHOE-01",
        "categoryId": "cat-sports-shoes",
        "brand": "Velocity Athletics",
        "price": 195,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 45,
        "rating": 4.96,
        "reviewCount": 142,
        "isFeatured": true,
        "isBestSeller": true,
        "badge": "Race Ready",
        "images": [
          {
            "id": "simg-1",
            "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
            "alt": "Running Shoes"
          }
        ],
        "shortDescription": "Full-length carbon fiber propulsion plate with ultra-responsive nitrogen-infused foam midsole.",
        "fullDescription": "Engineered for competitive distance runners seeking explosive energy return.",
        "specifications": {
          "Weight": "198g (Size 9)",
          "Drop": "8mm",
          "Plate": "100% Carbon Fiber"
        },
        "attributes": {},
        "tags": [
          "shoes",
          "running",
          "carbon"
        ]
      },
      {
        "id": "sport-002",
        "title": "Technical Seamless Compression Tights",
        "slug": "technical-seamless-compression-tights",
        "sku": "SPT-APP-02",
        "categoryId": "cat-sports-apparel",
        "brand": "Velocity Athletics",
        "price": 78,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 60,
        "rating": 4.89,
        "reviewCount": 88,
        "isFeatured": true,
        "badge": "Gradient Support",
        "images": [
          {
            "id": "simg-2",
            "url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
            "alt": "Compression Tights"
          }
        ],
        "shortDescription": "Graduated muscle compression fabric reducing vibration fatigue with moisture-wicking anti-odor weave.",
        "fullDescription": "Four-way stretch technical fabric engineered to stabilize hamstring and quad muscles.",
        "specifications": {
          "Material": "78% Recycled Poly, 22% Spandex",
          "Compression": "20-25 mmHg",
          "Pocket": "Zippered Phone Pocket"
        },
        "attributes": {},
        "tags": [
          "apparel",
          "compression",
          "training"
        ]
      },
      {
        "id": "sport-003",
        "title": "Rapid-Dial Adjustable Dumbbell Set (5–52.5 lbs)",
        "slug": "adjustable-dumbbell-set",
        "sku": "SPT-GEAR-03",
        "categoryId": "cat-sports-gear",
        "brand": "Apex Strength",
        "price": 349,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 20,
        "rating": 4.97,
        "reviewCount": 165,
        "isFeatured": true,
        "isBestSeller": true,
        "badge": "Best Seller",
        "images": [
          {
            "id": "simg-3",
            "url": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
            "alt": "Adjustable Dumbbells"
          }
        ],
        "shortDescription": "Replaces 15 pairs of free weights. Precision click mechanism switches from 5 to 52.5 lbs in 2.5 lb increments.",
        "fullDescription": "Heavy-duty steel plates enclosed in durable molding for smooth, silent lifts.",
        "specifications": {
          "Weight Range": "5 to 52.5 lbs per bell",
          "Increments": "2.5 lbs",
          "Warranty": "3 Years"
        },
        "attributes": {},
        "tags": [
          "gear",
          "weights",
          "strength"
        ]
      },
      {
        "id": "sport-004",
        "title": "Deep Percussion Muscle Therapy Recovery Gun",
        "slug": "deep-percussion-massage-gun",
        "sku": "SPT-REC-04",
        "categoryId": "cat-sports-recovery",
        "brand": "Apex Recovery",
        "price": 180,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 35,
        "rating": 4.92,
        "reviewCount": 98,
        "isNewArrival": true,
        "images": [
          {
            "id": "simg-4",
            "url": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
            "alt": "Massage Gun"
          }
        ],
        "shortDescription": "QuietBrushless 60W motor delivering 16mm amplitude for deep tissue relief and lactic acid clearance.",
        "fullDescription": "Equipped with 5 targeted medical silicone attachments and a 6-hour lithium-ion battery.",
        "specifications": {
          "Amplitude": "16mm",
          "Speeds": "5 Gears (1800–3200 RPM)",
          "Battery Life": "6 Hours"
        },
        "attributes": {},
        "tags": [
          "recovery",
          "massage",
          "wellness"
        ]
      },
      {
        "id": "sport-005",
        "title": "Ultralight Trail Running Vest Hydration Pack (12L)",
        "slug": "trail-running-hydration-vest",
        "sku": "SPT-OUT-05",
        "categoryId": "cat-sports-outdoor",
        "brand": "Apex Recovery",
        "price": 129,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 28,
        "rating": 4.91,
        "reviewCount": 76,
        "isFeatured": true,
        "badge": "Trail Series",
        "images": [
          {
            "id": "simg-5",
            "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80",
            "alt": "Hydration Vest"
          }
        ],
        "shortDescription": "12L ultralight trail vest with 2L hydration bladder, front-load bottle pockets, and emergency whistle.",
        "fullDescription": "Anatomically shaped shoulder harness distributes weight evenly without bounce across mountain terrain.",
        "specifications": {
          "Capacity": "12L + 2L Bladder",
          "Weight": "290g",
          "Pockets": "14 Compartments"
        },
        "attributes": {},
        "tags": [
          "outdoor",
          "trail",
          "hydration"
        ]
      },
      {
        "id": "sport-006",
        "title": "Aeroknit Performance Training T-Shirt",
        "slug": "aeroknit-training-tshirt",
        "sku": "SPT-APP-06",
        "categoryId": "cat-sports-apparel",
        "brand": "Velocity Athletics",
        "price": 55,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 80,
        "rating": 4.85,
        "reviewCount": 117,
        "images": [
          {
            "id": "simg-6",
            "url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=80",
            "alt": "Training Shirt"
          }
        ],
        "shortDescription": "Seamless knit construction with zoned ventilation mesh panels and quick-dry silver ion anti-odor treatment.",
        "fullDescription": "Made from 85% recycled PET bottles. Flat-locked seams prevent chafing during long training sessions.",
        "specifications": {
          "Material": "85% Recycled Poly, 15% Spandex",
          "Fit": "Athletic Slim",
          "Care": "Machine Wash Cold"
        },
        "attributes": {},
        "tags": [
          "apparel",
          "training",
          "tshirt"
        ]
      },
      {
        "id": "sport-007",
        "title": "Olympic Hex Barbell — 300 lbs Loaded Capacity",
        "slug": "olympic-hex-barbell",
        "sku": "SPT-GEAR-07",
        "categoryId": "cat-sports-gear",
        "brand": "Apex Strength",
        "price": 249,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 12,
        "rating": 4.94,
        "reviewCount": 53,
        "isFeatured": true,
        "images": [
          {
            "id": "simg-7",
            "url": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80",
            "alt": "Hex Barbell"
          }
        ],
        "shortDescription": "Dual-handle hex bar for deadlifts, farmer carries, and trap-bar shrugs. 300 lbs max load, chrome-finished knurled grips.",
        "fullDescription": "Solid steel construction with dual low/high handle positions for versatile lifting mechanics and reduced spinal load.",
        "specifications": {
          "Max Load": "300 lbs",
          "Bar Weight": "45 lbs",
          "Handle Height": "Low (3\") & High (8\")"
        },
        "attributes": {},
        "tags": [
          "barbell",
          "powerlifting",
          "gear"
        ]
      },
      {
        "id": "sport-008",
        "title": "Whey Isolate Protein Powder — Chocolate Hazelnut (2lb)",
        "slug": "whey-isolate-chocolate-hazelnut",
        "sku": "SPT-NUT-08",
        "categoryId": "cat-sports-recovery",
        "brand": "Apex Nutrition",
        "price": 64,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 95,
        "rating": 4.88,
        "reviewCount": 203,
        "isBestSeller": true,
        "images": [
          {
            "id": "simg-8",
            "url": "https://images.unsplash.com/photo-1579722820903-f8997a2f2966?w=800&auto=format&fit=crop&q=80",
            "alt": "Protein Powder"
          }
        ],
        "shortDescription": "25g whey isolate per serving, <1g fat, 5.5g BCAAs. Cold micro-filtered for superior absorption. Soy-free, no sucralose.",
        "fullDescription": "Sourced from grass-fed dairy with transparent third-party Informed Sport certification.",
        "specifications": {
          "Protein/Serving": "25g",
          "Servings": "28",
          "Sweetener": "Monk Fruit Extract"
        },
        "attributes": {},
        "tags": [
          "nutrition",
          "protein",
          "supplement"
        ]
      },
      {
        "id": "sport-009",
        "title": "Competition Resistance Band Set (5 Levels)",
        "slug": "competition-resistance-band-set",
        "sku": "SPT-GEAR-09",
        "categoryId": "cat-sports-gear",
        "brand": "Apex Strength",
        "price": 49,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 120,
        "rating": 4.82,
        "reviewCount": 189,
        "isBestSeller": true,
        "images": [
          {
            "id": "simg-9",
            "url": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80",
            "alt": "Resistance Bands"
          }
        ],
        "shortDescription": "5-band set: 10, 20, 30, 40, 50 lbs resistance. 100% natural latex with fabric anti-roll coating.",
        "fullDescription": "Competition-grade latex withstands 100,000+ repetitions. Ideal for pull-up assistance, glute activation, and mobility work.",
        "specifications": {
          "Resistance Levels": "10/20/30/40/50 lbs",
          "Material": "100% Natural Latex",
          "Includes": "Carry Bag + Exercise Guide"
        },
        "attributes": {},
        "tags": [
          "bands",
          "resistance",
          "training"
        ]
      },
      {
        "id": "sport-010",
        "title": "Trail Running Waterproof Jacket — Storm Shield",
        "slug": "waterproof-trail-running-jacket",
        "sku": "SPT-OUT-10",
        "categoryId": "cat-sports-outdoor",
        "brand": "Velocity Athletics",
        "price": 175,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "rating": 4.93,
        "reviewCount": 68,
        "isFeatured": true,
        "badge": "All-Weather",
        "images": [
          {
            "id": "simg-10",
            "url": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
            "alt": "Trail Jacket"
          }
        ],
        "shortDescription": "3-layer Gore-Tex waterproof shell, taped seams, and packable down to a fist-sized chest pocket.",
        "fullDescription": "Tested at 40mph headwinds and 4 hours of continuous rain. Articulated patterning enables full arm range of motion.",
        "specifications": {
          "Shell": "3L Gore-Tex Paclite Plus",
          "Weight": "245g (Medium)",
          "Packable": "Yes (Stuffs to 600ml)"
        },
        "attributes": {},
        "tags": [
          "jacket",
          "waterproof",
          "outdoor"
        ]
      },
      {
        "id": "sport-011",
        "title": "Foam Roller — High-Density Myofascial Release",
        "slug": "high-density-foam-roller",
        "sku": "SPT-REC-11",
        "categoryId": "cat-sports-recovery",
        "brand": "Apex Recovery",
        "price": 38,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 75,
        "rating": 4.79,
        "reviewCount": 231,
        "isBestSeller": true,
        "images": [
          {
            "id": "simg-11",
            "url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
            "alt": "Foam Roller"
          }
        ],
        "shortDescription": "Extra firm EPE foam with textured ridges targeting trigger points in IT bands, calves, and thoracic spine.",
        "fullDescription": "Medical-grade molded core prevents compression degradation even after intense daily use over years.",
        "specifications": {
          "Density": "Extra Firm (85D)",
          "Dimensions": "18\" x 5.75\"",
          "Surface": "Multi-Zone Ridged Texture"
        },
        "attributes": {},
        "tags": [
          "recovery",
          "foam-roller",
          "mobility"
        ]
      },
      {
        "id": "sport-012",
        "title": "Featherweight Running Cap — Laser-Cut Ventilation",
        "slug": "featherweight-running-cap",
        "sku": "SPT-APP-12",
        "categoryId": "cat-sports-apparel",
        "brand": "Velocity Athletics",
        "price": 32,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 90,
        "rating": 4.83,
        "reviewCount": 79,
        "isNewArrival": true,
        "images": [
          {
            "id": "simg-12",
            "url": "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?w=800&auto=format&fit=crop&q=80",
            "alt": "Running Cap"
          }
        ],
        "shortDescription": "Laser-perforated UPF 50+ fabric cap with reflective brim strip and silicone sweat-grip interior band.",
        "fullDescription": "Weighs only 58g. 360° laser micro-perforations enhance airflow while UV-blocking fabric protects your scalp.",
        "specifications": {
          "Weight": "58g",
          "UPF Rating": "UPF 50+",
          "Closure": "Reflective Snap-Back"
        },
        "attributes": {},
        "tags": [
          "cap",
          "running",
          "accessory"
        ]
      },
      {
        "id": "sport-013",
        "title": "Smart Gym Jump Rope — LED Counter Display",
        "slug": "smart-jump-rope-led-counter",
        "sku": "SPT-GEAR-13",
        "categoryId": "cat-sports-gear",
        "brand": "Apex Strength",
        "price": 45,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 65,
        "rating": 4.86,
        "reviewCount": 145,
        "isBestSeller": true,
        "images": [
          {
            "id": "simg-13",
            "url": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
            "alt": "Jump Rope"
          }
        ],
        "shortDescription": "Ball-bearing speed rope with built-in LED digital counter, calorie tracker, and adjustable stainless cable.",
        "fullDescription": "Used by amateur and professional boxers alike. The micro ball-bearing system allows sub-1ms rotation speed for double-unders.",
        "specifications": {
          "Cable": "Adjustable Stainless (Fits 4'–7' Heights)",
          "Display": "LED Jump Counter + Calories",
          "Battery": "USB-C Rechargeable"
        },
        "attributes": {},
        "tags": [
          "jump-rope",
          "cardio",
          "boxing"
        ]
      },
      {
        "id": "sport-014",
        "title": "Yoga Mat Pro — 6mm Natural Rubber Non-Slip",
        "slug": "yoga-mat-pro-natural-rubber",
        "sku": "SPT-GEAR-14",
        "categoryId": "cat-sports-gear",
        "brand": "Apex Strength",
        "price": 89,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 40,
        "rating": 4.91,
        "reviewCount": 112,
        "isFeatured": true,
        "images": [
          {
            "id": "simg-14",
            "url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
            "alt": "Yoga Mat"
          }
        ],
        "shortDescription": "6mm natural tree rubber base with PU microfiber top. Superior grip when wet — the more you sweat, the stickier it gets.",
        "fullDescription": "Anti-tear closed-cell surface prevents bacteria absorption. 183cm x 68cm extra-wide format.",
        "specifications": {
          "Thickness": "6mm",
          "Material": "Natural Rubber + PU Microfiber",
          "Dimensions": "183cm x 68cm"
        },
        "attributes": {},
        "tags": [
          "yoga",
          "mat",
          "fitness"
        ]
      },
      {
        "id": "sport-015",
        "title": "GPS Sport Watch — Multi-Sport Tracking",
        "slug": "gps-sport-watch-multi-sport",
        "sku": "SPT-TECH-15",
        "categoryId": "cat-sports-recovery",
        "brand": "Velocity Athletics",
        "price": 299,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "rating": 4.95,
        "reviewCount": 87,
        "isFeatured": true,
        "badge": "Pro Edition",
        "images": [
          {
            "id": "simg-15",
            "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
            "alt": "GPS Sport Watch"
          }
        ],
        "shortDescription": "Built-in GPS, optical heart rate, SpO2, sleep tracking, 20+ sport modes, and 14-day battery life.",
        "fullDescription": "Military-grade MIL-STD-810H tested for shock, vibration, altitude, and temperature extremes.",
        "specifications": {
          "GPS": "Multi-band L1+L5",
          "Battery": "Up to 14 Days Smartwatch / 30hrs GPS",
          "Water Resistance": "10 ATM"
        },
        "attributes": {},
        "tags": [
          "watch",
          "gps",
          "tracking"
        ]
      }
    ],
    "banners": [
      {
        "id": "ban-sports-1",
        "title": "Engineered for Peak Athletic Performance",
        "subtitle": "Next-generation technical running footwear and high-output training apparel",
        "tag": "ELITE ATHLETICS",
        "ctaText": "Shop Performance Footwear",
        "linkCategory": "cat-sports-shoes",
        "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#ea580c",
        "overlayGradient": "from-zinc-950/85 via-zinc-900/40 to-transparent"
      },
      {
        "id": "ban-sports-2",
        "title": "Conquer Every Trail & Mountain",
        "subtitle": "Ultralight weather-sealed gear built for endurance and outdoor exploration",
        "tag": "OUTDOOR SERIES",
        "ctaText": "Explore Gear",
        "linkCategory": "cat-sports-gear",
        "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#c2410c",
        "overlayGradient": "from-black/80 via-black/45 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-nexus-direct",
        "name": "NEXUS Direct Hardware",
        "slug": "nexus-direct",
        "logo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 680,
        "salesCount": 8400,
        "description": "Official manufacturer and fulfillment arm for NEXUS computing and precision displays.",
        "location": "Austin, TX, USA",
        "commissionRate": 8,
        "joinedDate": "2022-11-01",
        "email": "enterprise@nexus-tech.io",
        "phone": "+1 (800) 555-0199",
        "balance": 48900,
        "payoutMethod": "Automated ACH / Wire",
        "isVerified": true
      },
      {
        "id": "vendor-acoustic-labs",
        "name": "Acoustic Labs Audio",
        "slug": "acoustic-labs",
        "logo": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.88,
        "reviewCount": 220,
        "salesCount": 2100,
        "description": "Specialized Danish audio engineering studio crafting planar magnetic transducers.",
        "location": "Copenhagen, Denmark",
        "commissionRate": 10,
        "joinedDate": "2023-04-12",
        "email": "support@acousticlabs.dk",
        "phone": "+45 33 12 34 56",
        "balance": 11400,
        "payoutMethod": "Stripe Connect",
        "isVerified": true
      },
      {
        "id": "vendor-byteflow",
        "name": "ByteFlow Software Corp",
        "slug": "byteflow",
        "logo": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.98,
        "reviewCount": 310,
        "salesCount": 5200,
        "description": "High-performance compiler tooling and AI debugging software.",
        "location": "San Francisco, CA",
        "commissionRate": 15,
        "joinedDate": "2023-09-01",
        "email": "licensing@byteflow.dev",
        "phone": "+1 (415) 555-0144",
        "balance": 19800,
        "payoutMethod": "PayPal Enterprise",
        "isVerified": true
      },
      {
        "id": "vendor-keeb-lab",
        "name": "Precision Keeb Lab",
        "slug": "precision-keeb-lab",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.93,
        "reviewCount": 175,
        "salesCount": 3100,
        "description": "Custom CNC aluminum mechanical keyboards, magnetic Hall effect switches, and brass desk mats.",
        "location": "Tokyo, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-05-18",
        "email": "support@keeblab.io",
        "phone": "+81 3 5550 9182",
        "balance": 13200,
        "payoutMethod": "Stripe Connect",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "epost-1",
        "title": "Planar Magnetic vs. Dynamic Drivers: An Acoustic Deep Dive",
        "slug": "planar-magnetic-vs-dynamic-drivers",
        "excerpt": "Why ultra-thin suspended diaphragm ribbons produce zero phase distortion across transient frequency spikes.",
        "content": "Traditional dynamic drivers use a conical diaphragm driven by a concentrated voice coil...",
        "coverImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Henrik Vestergaard",
          "role": "Chief Acoustic Engineer",
          "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 14, 2026",
        "category": "Audio Engineering",
        "tags": [
          "Headphones",
          "Audiophile",
          "Acoustics"
        ],
        "readTime": "5 min read"
      }
    ]
  },
  "luxury": {
    "id": "luxury",
    "name": "MAISON NOIR",
    "tagline": "Quiet Luxury. Loud Craftsmanship.",
    "categoryTag": "Luxury & Fine Goods",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "luxury",
      "primaryColor": "#b8860b",
      "primaryHover": "#8f6a08",
      "secondaryColor": "#a1a1aa",
      "accentColor": "#e5e4e2",
      "surfaceColor": "#0c0a09",
      "surfaceElevated": "#1c1917",
      "textColor": "#fafaf9",
      "textMuted": "#a8a29e",
      "borderColor": "#292524",
      "fontDisplay": "Cinzel, Georgia, serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-none",
      "shadowIntensity": "shadow-sm",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-lux-watches",
        "name": "Fine Timepieces & Horology",
        "slug": "fine-timepieces",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80",
        "description": "Swiss certified automatic chronographs, tourbillons, and platinum dress watches.",
        "attributes": []
      },
      {
        "id": "cat-lux-jewelry",
        "name": "Fine Jewelry & Gems",
        "slug": "fine-jewelry",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
        "description": "GIA-certified diamond rings, sapphire necklaces, and 18k gold collections.",
        "attributes": []
      },
      {
        "id": "cat-lux-leather",
        "name": "Leather Goods & Accessories",
        "slug": "leather-accessories",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
        "description": "Hand-stitched full-grain leather wallets, belts, card holders, and portfolio bags.",
        "attributes": []
      },
      {
        "id": "cat-lux-fragrance",
        "name": "Rare Fragrances & Parfums",
        "slug": "rare-fragrances",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&auto=format&fit=crop&q=80",
        "description": "Exclusive parfum extraits, oud attars, and house-blended limited editions.",
        "attributes": []
      }
    ],
    "products": [
      {
        "id": "lux-001",
        "title": "Sovereign Automatic Skeleton Watch (40mm)",
        "slug": "sovereign-automatic-skeleton-watch",
        "sku": "LUX-WAT-01",
        "categoryId": "cat-lux-watches",
        "brand": "MAISON NOIR",
        "price": 3850,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 10,
        "rating": 4.99,
        "reviewCount": 22,
        "isFeatured": true,
        "badge": "Swiss Made",
        "images": [
          {
            "id": "lux-img-1",
            "url": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80",
            "alt": "Luxury Watch"
          }
        ],
        "shortDescription": "In-house automatic mechanical movement with 72-hour power reserve and double anti-reflective sapphire crystal.",
        "fullDescription": "Hand-finished Geneva stripes and chamfered bridges visible through open-worked sapphire dial.",
        "specifications": {
          "Movement": "Calibre MN-04 Auto (28,800 vph)",
          "Case Diameter": "40mm",
          "Water Resistance": "100m"
        },
        "attributes": {},
        "tags": [
          "luxury",
          "watch",
          "swiss"
        ]
      },
      {
        "id": "lux-002",
        "title": "Diamond Solitaire Eternity Ring — 18K White Gold (1ct)",
        "slug": "diamond-solitaire-eternity-ring",
        "sku": "LUX-JWL-02",
        "categoryId": "cat-lux-jewelry",
        "brand": "MAISON NOIR",
        "price": 4200,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 8,
        "rating": 4.98,
        "reviewCount": 18,
        "isFeatured": true,
        "badge": "GIA Certified",
        "images": [
          {
            "id": "lux-img-2",
            "url": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
            "alt": "Diamond Ring"
          }
        ],
        "shortDescription": "GIA triple-excellent 1.0ct round brilliant diamond set in 18k white gold cathedral prong solitaire.",
        "fullDescription": "Each stone is personally graded by GIA gemologists for cut, color (D-F), clarity (VS1-VS2), and carat weight.",
        "specifications": {
          "Diamond": "1.0ct Round Brilliant, GIA Cert.",
          "Setting": "18K White Gold 4-Prong Cathedral",
          "Clarity": "VS1-VS2"
        },
        "attributes": {},
        "tags": [
          "diamond",
          "ring",
          "jewelry"
        ]
      },
      {
        "id": "lux-003",
        "title": "Chronograph Flyback Racing Watch — Titanium Case (42mm)",
        "slug": "chronograph-flyback-titanium",
        "sku": "LUX-WAT-03",
        "categoryId": "cat-lux-watches",
        "brand": "MAISON NOIR",
        "price": 5650,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 6,
        "rating": 4.97,
        "reviewCount": 14,
        "isFeatured": true,
        "badge": "COSC Chronometer",
        "images": [
          {
            "id": "lux-img-3",
            "url": "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=80",
            "alt": "Chronograph Watch"
          }
        ],
        "shortDescription": "COSC-certified flyback column-wheel chronograph. Grade 5 titanium case, ceramic bezel, bracelet or leather strap.",
        "fullDescription": "Column-wheel flyback mechanism for single-press lap reset. Tachymeter scale calibrated at 4 Hz (28,800 vph).",
        "specifications": {
          "Movement": "Flyback Column-Wheel COSC Chronograph",
          "Case": "Grade 5 Titanium, 42mm",
          "Power Reserve": "68 Hours"
        },
        "attributes": {},
        "tags": [
          "chronograph",
          "titanium",
          "racing"
        ]
      },
      {
        "id": "lux-004",
        "title": "Blue Sapphire & Diamond Pavé Pendant Necklace",
        "slug": "blue-sapphire-diamond-pave-necklace",
        "sku": "LUX-JWL-04",
        "categoryId": "cat-lux-jewelry",
        "brand": "MAISON NOIR",
        "price": 2800,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 12,
        "rating": 4.96,
        "reviewCount": 27,
        "isFeatured": true,
        "images": [
          {
            "id": "lux-img-4",
            "url": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
            "alt": "Sapphire Necklace"
          }
        ],
        "shortDescription": "Vivid blue Ceylon sapphire (2ct, GIA) surrounded by 0.35ctw brilliant diamond pavé in 18k yellow gold.",
        "fullDescription": "The sapphire exhibits natural cornflower blue saturation characteristic of unheated Ceylon origin stones.",
        "specifications": {
          "Sapphire": "2ct Ceylon (GIA No-Heat Cert.)",
          "Diamonds": "0.35ctw Pavé F/VS",
          "Chain": "18K Yellow Gold, 18\""
        },
        "attributes": {},
        "tags": [
          "sapphire",
          "necklace",
          "gold"
        ]
      },
      {
        "id": "lux-005",
        "title": "Slim Bifold Wallet — Full-Grain Horween Shell Cordovan",
        "slug": "slim-bifold-horween-cordovan",
        "sku": "LUX-LTH-05",
        "categoryId": "cat-lux-leather",
        "brand": "MAISON NOIR",
        "price": 320,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 40,
        "rating": 4.95,
        "reviewCount": 68,
        "isBestSeller": true,
        "images": [
          {
            "id": "lux-img-5",
            "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
            "alt": "Leather Wallet"
          }
        ],
        "shortDescription": "Classic 6-card bifold in hand-burnished Horween Shell Cordovan — the rarest and most durable leather on Earth.",
        "fullDescription": "Develops a deep, glassy patina with use. Hand-stitched with Tiger Thread waxed linen. Sized to fit 6 cards + bills.",
        "specifications": {
          "Leather": "Horween Shell Cordovan (Chicago)",
          "Capacity": "6 Cards + Bill Compartment",
          "Stitching": "Tiger Thread Waxed Linen"
        },
        "attributes": {},
        "tags": [
          "wallet",
          "leather",
          "cordovan"
        ]
      },
      {
        "id": "lux-006",
        "title": "Oud & Amber Parfum Extrait — Limited Edition (50ml)",
        "slug": "oud-amber-parfum-extrait",
        "sku": "LUX-FRG-06",
        "categoryId": "cat-lux-fragrance",
        "brand": "MAISON NOIR",
        "price": 490,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 25,
        "rating": 4.97,
        "reviewCount": 39,
        "isFeatured": true,
        "badge": "Limited Edition",
        "images": [
          {
            "id": "lux-img-6",
            "url": "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&auto=format&fit=crop&q=80",
            "alt": "Oud Parfum"
          }
        ],
        "shortDescription": "Wild Cambodian oud absolute, Omani frankincense, aged Bengali amber, and Mysore sandalwood. 40% concentration extrait.",
        "fullDescription": "A deeply intimate woody oriental that evolves across 16+ hours. Only 500 bottles produced globally per year.",
        "specifications": {
          "Concentration": "Extrait de Parfum (40%)",
          "Volume": "50 ml",
          "Notes": "Oud / Frankincense / Amber / Sandalwood"
        },
        "attributes": {},
        "tags": [
          "oud",
          "parfum",
          "fragrance"
        ]
      },
      {
        "id": "lux-007",
        "title": "Yellow Gold Tennis Bracelet — 5ct Diamond Line",
        "slug": "gold-tennis-bracelet-diamond",
        "sku": "LUX-JWL-07",
        "categoryId": "cat-lux-jewelry",
        "brand": "MAISON NOIR",
        "price": 6500,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 5,
        "rating": 4.99,
        "reviewCount": 11,
        "isFeatured": true,
        "badge": "Investment Piece",
        "images": [
          {
            "id": "lux-img-7",
            "url": "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=80",
            "alt": "Tennis Bracelet"
          }
        ],
        "shortDescription": "5ctw round brilliant diamond line bracelet in 18k yellow gold with box-tongue-and-safety clasp. 7\" length.",
        "fullDescription": "Every diamond individually GIA-graded E-F color, VS clarity. Bracelet width: 3.5mm.",
        "specifications": {
          "Total Diamonds": "5ct (60 stones)",
          "Gold": "18K Yellow Gold",
          "Clarity/Color": "VS / E-F"
        },
        "attributes": {},
        "tags": [
          "tennis-bracelet",
          "diamond",
          "gold"
        ]
      },
      {
        "id": "lux-008",
        "title": "Dress Belt — Full-Grain Ostrich Skin (35mm)",
        "slug": "dress-belt-ostrich-skin",
        "sku": "LUX-LTH-08",
        "categoryId": "cat-lux-leather",
        "brand": "MAISON NOIR",
        "price": 480,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "rating": 4.91,
        "reviewCount": 32,
        "images": [
          {
            "id": "lux-img-8",
            "url": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80",
            "alt": "Ostrich Belt"
          }
        ],
        "shortDescription": "Genuine full-quill South African ostrich leather dress belt with 18k gold-plated pin buckle.",
        "fullDescription": "Each quill pattern is unique. The dense quill structure makes ostrich leather 3x more durable than cowhide.",
        "specifications": {
          "Leather": "Full-Quill South African Ostrich",
          "Width": "35mm",
          "Buckle": "18K Gold-Plated Solid Brass"
        },
        "attributes": {},
        "tags": [
          "belt",
          "ostrich",
          "leather"
        ]
      },
      {
        "id": "lux-009",
        "title": "Rose Nuit Parfum — Absolute Rose & Suede (75ml)",
        "slug": "rose-nuit-parfum-absolute-suede",
        "sku": "LUX-FRG-09",
        "categoryId": "cat-lux-fragrance",
        "brand": "MAISON NOIR",
        "price": 320,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "bottle",
        "stockQuantity": 35,
        "rating": 4.93,
        "reviewCount": 55,
        "isBestSeller": true,
        "images": [
          {
            "id": "lux-img-9",
            "url": "https://images.unsplash.com/photo-1563170351-be an image?w=800&auto=format&fit=crop&q=80",
            "alt": "Rose Parfum"
          }
        ],
        "shortDescription": "Turkish rose absolute, Turkish suede accord, white musk, and cold iris root. Feminine yet genderless in temperament.",
        "fullDescription": "Eau de parfum at 22% concentration. An intimate florals-meets-leather signature that carries beautifully in all seasons.",
        "specifications": {
          "Concentration": "Eau de Parfum (22%)",
          "Volume": "75 ml",
          "Notes": "Rose Absolute / Suede / Iris / White Musk"
        },
        "attributes": {},
        "tags": [
          "rose",
          "parfum",
          "fragrance"
        ]
      },
      {
        "id": "lux-010",
        "title": "Card Holder — Alligator Embossed Calfskin, 4-Slot",
        "slug": "card-holder-alligator-calfskin",
        "sku": "LUX-LTH-10",
        "categoryId": "cat-lux-leather",
        "brand": "MAISON NOIR",
        "price": 185,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 55,
        "rating": 4.89,
        "reviewCount": 84,
        "isBestSeller": true,
        "images": [
          {
            "id": "lux-img-10",
            "url": "https://images.unsplash.com/photo-1572635196184-84e35138cf62?w=800&auto=format&fit=crop&q=80",
            "alt": "Card Holder"
          }
        ],
        "shortDescription": "Slim 4-slot card holder in alligator-embossed Italian vegetable-tanned calfskin with gold-edged trim.",
        "fullDescription": "Sits flat in a breast pocket and develops a distinctive patina over time. Fits 4–6 cards plus folded bills.",
        "specifications": {
          "Leather": "Alligator-Embossed Italian VT Calf",
          "Capacity": "4–6 Cards",
          "Dimensions": "4.2\" x 2.9\" x 0.3\""
        },
        "attributes": {},
        "tags": [
          "card-holder",
          "leather",
          "slim"
        ]
      },
      {
        "id": "lux-011",
        "title": "Platinum & Diamond Stud Earrings — 0.5ct Each",
        "slug": "platinum-diamond-stud-earrings",
        "sku": "LUX-JWL-11",
        "categoryId": "cat-lux-jewelry",
        "brand": "MAISON NOIR",
        "price": 3200,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "pair",
        "stockQuantity": 9,
        "rating": 4.98,
        "reviewCount": 20,
        "isFeatured": true,
        "images": [
          {
            "id": "lux-img-11",
            "url": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop&q=80",
            "alt": "Diamond Earrings"
          }
        ],
        "shortDescription": "2x 0.50ct round brilliant diamonds (D/IF) in 6-prong platinum martini settings with push-back posts.",
        "fullDescription": "Perfect pair matching in cut, color, and clarity within 1% tolerance. GIA certification included for each stone.",
        "specifications": {
          "Diamonds": "2x 0.50ct D/IF (GIA)",
          "Setting": "Platinum 950 6-Prong Martini",
          "Back": "Push-Back Post"
        },
        "attributes": {},
        "tags": [
          "earrings",
          "diamond",
          "platinum"
        ]
      },
      {
        "id": "lux-012",
        "title": "Moonphase Dress Watch — Mother-of-Pearl Dial (36mm)",
        "slug": "moonphase-dress-watch-mop",
        "sku": "LUX-WAT-12",
        "categoryId": "cat-lux-watches",
        "brand": "MAISON NOIR",
        "price": 2950,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 7,
        "rating": 4.96,
        "reviewCount": 16,
        "images": [
          {
            "id": "lux-img-12",
            "url": "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&auto=format&fit=crop&q=80",
            "alt": "Moonphase Watch"
          }
        ],
        "shortDescription": "Ultra-thin moonphase complication with genuine white mother-of-pearl dial and 18k rose gold case on satin leather.",
        "fullDescription": "The moonphase disc rotates precisely, deviating only 1 day every 122 years from the true lunar cycle.",
        "specifications": {
          "Complication": "Precision Moonphase",
          "Dial": "White MOP with Diamond Hour Markers",
          "Case": "18K Rose Gold, 36mm"
        },
        "attributes": {},
        "tags": [
          "moonphase",
          "dress-watch",
          "rose-gold"
        ]
      }
    ],
    "banners": [
      {
        "id": "ban-lux-1",
        "title": "Quiet Luxury & Master Horology",
        "subtitle": "Swiss-crafted automatic timepieces and certified heirloom diamond jewelry",
        "tag": "FINE HOROLOGY",
        "ctaText": "Discover Timepieces",
        "linkCategory": "cat-lux-watches",
        "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#b8860b",
        "overlayGradient": "from-black/90 via-black/50 to-transparent"
      },
      {
        "id": "ban-lux-2",
        "title": "Fine Jewelry — Certified & Exceptional",
        "subtitle": "GIA-graded diamonds, no-heat sapphires, and 18k gold craftsmanship",
        "tag": "FINE JEWELRY",
        "ctaText": "Explore the Collection",
        "linkCategory": "cat-lux-jewelry",
        "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#8f6a08",
        "overlayGradient": "from-black/90 via-black/50 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-aura-flagship",
        "name": "AURA Direct",
        "slug": "aura-flagship",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.9,
        "reviewCount": 412,
        "salesCount": 3200,
        "description": "Official flagship boutique of AURA haute couture and ready-to-wear luxury collections.",
        "location": "Paris, France",
        "commissionRate": 10,
        "joinedDate": "2023-01-10",
        "email": "concierge@aura-boutique.com",
        "phone": "+33 1 42 68 55 00",
        "balance": 14250,
        "payoutMethod": "SEPA Direct Wire (FR76...)",
        "isVerified": true
      },
      {
        "id": "vendor-sartoria",
        "name": "Sartoria Milano",
        "slug": "sartoria-milano",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.85,
        "reviewCount": 189,
        "salesCount": 1450,
        "description": "Generational Milanese tailor guild delivering handcrafted suits and traditional Italian shoemaking.",
        "location": "Milan, Italy",
        "commissionRate": 12,
        "joinedDate": "2023-06-15",
        "email": "orders@sartoriamilano.it",
        "phone": "+39 02 876 543",
        "balance": 8900,
        "payoutMethod": "Bank Wire Transfer",
        "isVerified": true
      },
      {
        "id": "vendor-cuoio",
        "name": "Cuoio Firenze Leather",
        "slug": "cuoio-firenze",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.95,
        "reviewCount": 96,
        "salesCount": 880,
        "description": "Family tannery and leather workshop producing certified vegetable-tanned travel goods along the Arno river.",
        "location": "Florence, Italy",
        "commissionRate": 10,
        "joinedDate": "2024-02-01",
        "email": "bottega@cuoiofirenze.it",
        "phone": "+39 055 234 567",
        "balance": 4120,
        "payoutMethod": "Stripe Direct",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "post-1",
        "title": "The Anatomy of Pure Cashmere: Why Micron Count Matters",
        "slug": "cashmere-micron-guide",
        "excerpt": "Discover why 14-micron Mongolian fibers provide superior loft, resistance to pilling, and thermal insulation over synthetic blends.",
        "content": "True luxury lies in the fiber. When evaluating high-grade knitwear, fiber diameter (measured in microns) and staple length dictate both longevity and hand-feel...",
        "coverImage": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Camille Laurent",
          "role": "Creative Director",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 18, 2026",
        "category": "Materials & Craft",
        "tags": [
          "Cashmere",
          "Sustainability",
          "Care Guide"
        ],
        "readTime": "4 min read"
      },
      {
        "id": "post-2",
        "title": "Building a Capsule Wardrobe for the Global Traveler",
        "slug": "travel-capsule-wardrobe",
        "excerpt": "Five crease-resistant pieces that form twelve distinct ensembles from boardroom presentations to weekend escapes.",
        "content": "Packing with intention transforms travel. By anchoring around high-twist wool blazers and silk slip dresses...",
        "coverImage": "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Matteo Rossi",
          "role": "Senior Stylist",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 10, 2026",
        "category": "Styling Editorial",
        "tags": [
          "Travel",
          "Capsule Wardrobe",
          "Menswear"
        ],
        "readTime": "6 min read"
      }
    ]
  },
  "handmade": {
    "id": "handmade",
    "name": "Artisan & Loom",
    "tagline": "Handcrafted Goods with a Human Story",
    "categoryTag": "Handmade & Craft",
    "currency": "USD",
    "currencySymbol": "$",
    "defaultUnit": "piece",
    "theme": {
      "presetName": "handmade",
      "primaryColor": "#7c2d12",
      "primaryHover": "#61240d",
      "secondaryColor": "#78716c",
      "accentColor": "#0f766e",
      "surfaceColor": "#fafaf9",
      "surfaceElevated": "#f5f5f4",
      "textColor": "#1c1917",
      "textMuted": "#78716c",
      "borderColor": "#e7e5e4",
      "fontDisplay": "Fraunces, Georgia, serif",
      "fontBody": "Plus Jakarta Sans, system-ui, sans-serif",
      "borderRadius": "rounded-lg",
      "shadowIntensity": "shadow-sm",
      "darkMode": false,
      "direction": "ltr"
    },
    "categories": [
      {
        "id": "cat-hand-pottery",
        "name": "Wheel-Thrown Ceramics",
        "slug": "wheel-thrown-ceramics",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80",
        "description": "Small-batch stoneware mugs, sculptural vases, and speckled tea bowls.",
        "attributes": []
      },
      {
        "id": "cat-hand-textiles",
        "name": "Woven Textiles & Macramé",
        "slug": "woven-textiles",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1558171813-9932e8e8d7f4?w=800&auto=format&fit=crop&q=80",
        "description": "Hand-loomed throws, wall hangings, macramé plant hangers, and cushion covers.",
        "attributes": []
      },
      {
        "id": "cat-hand-wood",
        "name": "Hand-Carved Woodcraft",
        "slug": "hand-carved-woodcraft",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80",
        "description": "Carved wooden spoons, serving boards, and sculptural kitchen tools.",
        "attributes": []
      },
      {
        "id": "cat-hand-candles",
        "name": "Handpoured Candles & Scents",
        "slug": "handpoured-candles",
        "level": 0,
        "image": "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?w=800&auto=format&fit=crop&q=80",
        "description": "Soy wax candles with botanical garnishes, essential oils, and concrete vessels.",
        "attributes": []
      }
    ],
    "products": [
      {
        "id": "hand-001",
        "title": "Speckled Stoneware Ceramic Pour-Over Dripper & Carafe",
        "slug": "speckled-stoneware-pour-over",
        "sku": "HND-POT-01",
        "categoryId": "cat-hand-pottery",
        "brand": "Artisan & Loom",
        "price": 68,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 28,
        "rating": 4.95,
        "reviewCount": 47,
        "isFeatured": true,
        "badge": "Studio Batch",
        "images": [
          {
            "id": "hnd-img-1",
            "url": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80",
            "alt": "Handmade Ceramics"
          }
        ],
        "shortDescription": "Wheel-thrown iron-flecked clay finished with matte eggshell glaze. Microwave and dishwasher safe.",
        "fullDescription": "Individually shaped and trimmed on the potter wheel in our studio.",
        "specifications": {
          "Capacity": "600ml Carafe",
          "Clay Body": "Stoneware Iron-Flecked",
          "Food Safe": "Yes, Lead-Free"
        },
        "attributes": {},
        "tags": [
          "handmade",
          "ceramics",
          "pottery"
        ]
      },
      {
        "id": "hand-002",
        "title": "Reactive Glaze Matcha Bowl — Chawan (Small Batch)",
        "slug": "reactive-glaze-matcha-bowl",
        "sku": "HND-POT-02",
        "categoryId": "cat-hand-pottery",
        "brand": "Artisan & Loom",
        "price": 52,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 22,
        "rating": 4.93,
        "reviewCount": 38,
        "isFeatured": true,
        "images": [
          {
            "id": "hnd-img-2",
            "url": "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?w=800&auto=format&fit=crop&q=80",
            "alt": "Matcha Bowl"
          }
        ],
        "shortDescription": "Traditional chawan-form matcha bowl with tenmoku reactive glaze. Each fires to a unique surface pattern.",
        "fullDescription": "High-fire reduction kilned stoneware. The reactive tenmoku glaze produces unpredictable iron crystallization on every piece.",
        "specifications": {
          "Diameter": "4.5\" / 11.5cm",
          "Glaze": "Tenmoku Reactive (Unique Per Piece)",
          "Kiln": "1280°C Reduction"
        },
        "attributes": {},
        "tags": [
          "bowl",
          "matcha",
          "ceramic"
        ]
      },
      {
        "id": "hand-003",
        "title": "Hand-Loomed Cotton Throw Blanket — Natural Stripe",
        "slug": "hand-loomed-cotton-throw",
        "sku": "HND-TXT-03",
        "categoryId": "cat-hand-textiles",
        "brand": "Artisan & Loom",
        "price": 89,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 35,
        "rating": 4.91,
        "reviewCount": 62,
        "isBestSeller": true,
        "images": [
          {
            "id": "hnd-img-3",
            "url": "https://images.unsplash.com/photo-1558171813-9932e8e8d7f4?w=800&auto=format&fit=crop&q=80",
            "alt": "Woven Throw"
          }
        ],
        "shortDescription": "Hand-loomed 100% GOTS-certified organic cotton throw in subtle natural stripe. 50\" x 70\", 400 GSM weight.",
        "fullDescription": "Each woven on a floor loom by artisans in our community workshop. Fringed ends are hand-knotted individually.",
        "specifications": {
          "Material": "100% GOTS Organic Cotton",
          "Dimensions": "50\" x 70\"",
          "Weight": "400 GSM"
        },
        "attributes": {},
        "tags": [
          "blanket",
          "textile",
          "organic"
        ]
      },
      {
        "id": "hand-004",
        "title": "Macramé Wall Hanging — Boho Arch Form (Large)",
        "slug": "macrame-wall-hanging-arch",
        "sku": "HND-TXT-04",
        "categoryId": "cat-hand-textiles",
        "brand": "Artisan & Loom",
        "price": 74,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 18,
        "rating": 4.88,
        "reviewCount": 55,
        "isFeatured": true,
        "images": [
          {
            "id": "hnd-img-4",
            "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
            "alt": "Macramé Wall Art"
          }
        ],
        "shortDescription": "Triple-strand natural cotton macramé in an organic arch form. 24\" wide x 40\" tall including hand-driftwood rod.",
        "fullDescription": "Knotted by hand using square knots, spiral hitching, and lark's head patterns. Comes with 3 hanging hooks.",
        "specifications": {
          "Dimensions": "24\"W x 40\"H (incl. fringe)",
          "Material": "Natural 3mm Macramé Cotton Cord",
          "Rod": "Hand-Found Driftwood"
        },
        "attributes": {},
        "tags": [
          "macrame",
          "wall-art",
          "boho"
        ]
      },
      {
        "id": "hand-005",
        "title": "Hand-Carved Olive Wood Serving Board",
        "slug": "carved-olive-wood-serving-board",
        "sku": "HND-WOD-05",
        "categoryId": "cat-hand-wood",
        "brand": "Artisan & Loom",
        "price": 62,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 25,
        "rating": 4.97,
        "reviewCount": 91,
        "isBestSeller": true,
        "images": [
          {
            "id": "hnd-img-5",
            "url": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80",
            "alt": "Olive Wood Board"
          }
        ],
        "shortDescription": "Hand-carved from a single slab of 40+ year Mediterranean olive wood. Food-safe beeswax finish. Unique grain per board.",
        "fullDescription": "Olive wood is naturally antibacterial and hypoallergenic, making it ideal for serving cheese, bread, and charcuterie.",
        "specifications": {
          "Material": "Mediterranean Olive Wood",
          "Dimensions": "Approx 14\" x 8\" (varies)",
          "Finish": "Beeswax + Mineral Oil Food-Safe"
        },
        "attributes": {},
        "tags": [
          "board",
          "wood",
          "kitchen"
        ]
      },
      {
        "id": "hand-006",
        "title": "Botanical Soy Wax Candle — Dried Flower Garnish (9oz)",
        "slug": "botanical-soy-candle-dried-flower",
        "sku": "HND-CND-06",
        "categoryId": "cat-hand-candles",
        "brand": "Artisan & Loom",
        "price": 38,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 75,
        "rating": 4.89,
        "reviewCount": 128,
        "isBestSeller": true,
        "images": [
          {
            "id": "hnd-img-6",
            "url": "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?w=800&auto=format&fit=crop&q=80",
            "alt": "Botanical Candle"
          }
        ],
        "shortDescription": "All-natural soy wax candle with dried lavender, rose petals, and chamomile garnish. Hand-poured in a reusable matte jar.",
        "fullDescription": "Fragranced with pure essential oils (bergamot, lavender, and soft sandalwood). Burns clean for 55+ hours.",
        "specifications": {
          "Wax": "100% Natural Soy",
          "Fragrance": "Essential Oil Only (No Synthetic)",
          "Burn Time": "55 Hours",
          "Vessel": "Reusable Matte Ceramic Jar"
        },
        "attributes": {},
        "tags": [
          "candle",
          "botanical",
          "soy"
        ]
      },
      {
        "id": "hand-007",
        "title": "Hand-Thrown Speckled Mug Set — 4 Piece",
        "slug": "speckled-mug-set-4-piece",
        "sku": "HND-POT-07",
        "categoryId": "cat-hand-pottery",
        "brand": "Artisan & Loom",
        "price": 96,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 20,
        "rating": 4.94,
        "reviewCount": 73,
        "isFeatured": true,
        "badge": "Gift Ready",
        "images": [
          {
            "id": "hnd-img-7",
            "url": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=80",
            "alt": "Mug Set"
          }
        ],
        "shortDescription": "Set of 4 hand-thrown 12oz stoneware mugs. Speckled sand glaze with a celadon interior. Each subtly unique.",
        "fullDescription": "Wheel-thrown and trimmed in our studio, then fired to cone 10 stoneware for long-lasting durability and chip resistance.",
        "specifications": {
          "Set": "4 Mugs",
          "Capacity": "12 oz Each",
          "Microwave/Dishwasher": "Yes",
          "Glaze": "Speckled Sand / Celadon Interior"
        },
        "attributes": {},
        "tags": [
          "mugs",
          "set",
          "ceramics"
        ]
      },
      {
        "id": "hand-008",
        "title": "Woven Jute & Cotton Market Tote Bag",
        "slug": "woven-jute-market-tote",
        "sku": "HND-TXT-08",
        "categoryId": "cat-hand-textiles",
        "brand": "Artisan & Loom",
        "price": 44,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 60,
        "rating": 4.86,
        "reviewCount": 104,
        "isBestSeller": true,
        "images": [
          {
            "id": "hnd-img-8",
            "url": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=80",
            "alt": "Market Tote"
          }
        ],
        "shortDescription": "Fair-trade woven jute and organic cotton tote with leather handles and inside zipper pocket.",
        "fullDescription": "The weave pattern is a traditional diagonal herringbone. Holds up to 22 lbs grocery load.",
        "specifications": {
          "Material": "Jute + GOTS Cotton Blend",
          "Handles": "Vegetable-Tanned Leather",
          "Dimensions": "16\"H x 14\"W x 5\"D"
        },
        "attributes": {},
        "tags": [
          "tote",
          "jute",
          "sustainable"
        ]
      },
      {
        "id": "hand-009",
        "title": "Hand-Carved Wooden Cooking Spoon Set — 3 Piece",
        "slug": "carved-wooden-spoon-set",
        "sku": "HND-WOD-09",
        "categoryId": "cat-hand-wood",
        "brand": "Artisan & Loom",
        "price": 54,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 45,
        "rating": 4.92,
        "reviewCount": 83,
        "isBestSeller": true,
        "images": [
          {
            "id": "hnd-img-9",
            "url": "https://images.unsplash.com/photo-1577594729455-c4e44693ccf9?w=800&auto=format&fit=crop&q=80",
            "alt": "Wooden Spoons"
          }
        ],
        "shortDescription": "Set of 3 hand-carved cherry wood cooking spoons: soup ladle, stirring spoon, and serving spatula. Oiled finish.",
        "fullDescription": "Carved from green cherry wood and slowly dried to prevent splitting. Finished with food-safe walnut oil.",
        "specifications": {
          "Wood": "American Wild Cherry",
          "Set": "3 Piece (Ladle, Stirrer, Spatula)",
          "Finish": "Food-Safe Walnut Oil"
        },
        "attributes": {},
        "tags": [
          "spoon",
          "kitchen",
          "carved"
        ]
      },
      {
        "id": "hand-010",
        "title": "Concrete & Soy Candle Duo — Cedar & Smoke",
        "slug": "concrete-soy-candle-cedar-smoke",
        "sku": "HND-CND-10",
        "categoryId": "cat-hand-candles",
        "brand": "Artisan & Loom",
        "price": 58,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 40,
        "rating": 4.9,
        "reviewCount": 66,
        "isNewArrival": true,
        "images": [
          {
            "id": "hnd-img-10",
            "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
            "alt": "Concrete Candle"
          }
        ],
        "shortDescription": "Pair of hand-poured soy candles in handmade concrete vessels. Cedar + vetiver and campfire smoke + benzoin scents.",
        "fullDescription": "Concrete vessels are individually hand-cast and sand-polished. The vessels live on as plant pots or desk organizers after burning.",
        "specifications": {
          "Set": "2 x 6oz Candles",
          "Vessel": "Hand-Cast Concrete (Reusable)",
          "Wax": "Soy + Coconut Blend",
          "Burn Time": "40 Hours Each"
        },
        "attributes": {},
        "tags": [
          "candle",
          "concrete",
          "cedar"
        ]
      },
      {
        "id": "hand-011",
        "title": "Indigo Shibori-Dyed Linen Cushion Cover (18\"x18\")",
        "slug": "indigo-shibori-linen-cushion",
        "sku": "HND-TXT-11",
        "categoryId": "cat-hand-textiles",
        "brand": "Artisan & Loom",
        "price": 48,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 32,
        "rating": 4.87,
        "reviewCount": 51,
        "isFeatured": true,
        "images": [
          {
            "id": "hnd-img-11",
            "url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
            "alt": "Shibori Cushion"
          }
        ],
        "shortDescription": "Natural indigo shibori-dyed linen cushion cover with zipper back. Each piece unique — pattern varies.",
        "fullDescription": "Dyed in small batches using traditional Japanese itajime (clamp-resist) shibori technique with natural indigo paste.",
        "specifications": {
          "Material": "Belgian Linen",
          "Dimensions": "18\" x 18\"",
          "Dye": "Natural Indigo (Japan Technique)",
          "Closure": "Invisible Zipper"
        },
        "attributes": {},
        "tags": [
          "cushion",
          "indigo",
          "shibori"
        ]
      },
      {
        "id": "hand-012",
        "title": "Walnut & Resin River Serving Charcuterie Board",
        "slug": "walnut-resin-river-charcuterie-board",
        "sku": "HND-WOD-12",
        "categoryId": "cat-hand-wood",
        "brand": "Artisan & Loom",
        "price": 128,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 14,
        "rating": 4.96,
        "reviewCount": 44,
        "isFeatured": true,
        "badge": "One-of-a-Kind",
        "images": [
          {
            "id": "hnd-img-12",
            "url": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&auto=format&fit=crop&q=80",
            "alt": "River Resin Board"
          }
        ],
        "shortDescription": "Book-matched black walnut slabs with teal \"river\" channel filled with food-safe epoxy resin. Each entirely unique.",
        "fullDescription": "The resin is poured between the two halves of a split walnut slab, mimicking a river seen from above.",
        "specifications": {
          "Material": "Black Walnut + Food-Safe Epoxy Resin",
          "Approximate Size": "18\"L x 10\"W",
          "Resin Color": "Teal (varies per piece)",
          "Finish": "Satin Food-Safe Varnish"
        },
        "attributes": {},
        "tags": [
          "board",
          "resin",
          "walnut"
        ]
      },
      {
        "id": "hand-013",
        "title": "Beeswax Wrap Set — Reusable Food Storage (3 Pack)",
        "slug": "beeswax-wrap-reusable-3pack",
        "sku": "HND-KIT-13",
        "categoryId": "cat-hand-candles",
        "brand": "Artisan & Loom",
        "price": 28,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "set",
        "stockQuantity": 90,
        "rating": 4.83,
        "reviewCount": 147,
        "isBestSeller": true,
        "images": [
          {
            "id": "hnd-img-13",
            "url": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80",
            "alt": "Beeswax Wraps"
          }
        ],
        "shortDescription": "Set of 3 hand-dipped beeswax food wraps in small, medium, and large. Replaces hundreds of single-use plastic wraps.",
        "fullDescription": "Made with 100% organic cotton coated in a blend of local beeswax, jojoba oil, and tree resin for grip and flexibility.",
        "specifications": {
          "Set": "S (7\"x8\"), M (10\"x11\"), L (13\"x14\")",
          "Material": "Organic Cotton + Beeswax + Tree Resin",
          "Lifespan": "200+ Washes"
        },
        "attributes": {},
        "tags": [
          "beeswax",
          "sustainable",
          "kitchen"
        ]
      },
      {
        "id": "hand-014",
        "title": "Ceramic Vase — Textured Coil-Built Vessel (Large)",
        "slug": "ceramic-coil-built-vase-large",
        "sku": "HND-POT-14",
        "categoryId": "cat-hand-pottery",
        "brand": "Artisan & Loom",
        "price": 84,
        "currency": "USD",
        "type": "simple",
        "unitOfMeasure": "piece",
        "stockQuantity": 16,
        "rating": 4.91,
        "reviewCount": 37,
        "isNewArrival": true,
        "images": [
          {
            "id": "hnd-img-14",
            "url": "https://images.unsplash.com/photo-1565540791402-3c7fce8fe6d4?w=800&auto=format&fit=crop&q=80",
            "alt": "Ceramic Vase"
          }
        ],
        "shortDescription": "Large coil-built stoneware vase with visible construction texture and matte celadon glaze. 14\" tall.",
        "fullDescription": "Coil-built entirely by hand without a wheel — the visible coil texture is a deliberate design feature honoring the making process.",
        "specifications": {
          "Height": "14\"",
          "Construction": "Coil-Built by Hand",
          "Glaze": "Matte Celadon",
          "Water-Tight": "Yes"
        },
        "attributes": {},
        "tags": [
          "vase",
          "ceramics",
          "coil-built"
        ]
      }
    ],
    "banners": [
      {
        "id": "ban-hand-1",
        "title": "Objects with a Human Story",
        "subtitle": "Small-batch wheel-thrown pottery, woven textiles, and hand-carved woodcraft",
        "tag": "STUDIO ATELIER",
        "ctaText": "Shop Handcrafted Pieces",
        "linkCategory": "cat-hand-pottery",
        "image": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#7c2d12",
        "overlayGradient": "from-stone-950/85 via-stone-900/40 to-transparent"
      },
      {
        "id": "ban-hand-2",
        "title": "Craft the Home You Deserve",
        "subtitle": "Botanical candles, hand-carved boards, and woven textiles for a meaningful home",
        "tag": "HOME & KITCHEN",
        "ctaText": "Explore Home Collection",
        "linkCategory": "cat-hand-wood",
        "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80",
        "accentColor": "#0f766e",
        "overlayGradient": "from-stone-950/85 via-stone-900/40 to-transparent"
      }
    ],
    "vendors": [
      {
        "id": "vendor-lumen-direct",
        "name": "LUMEN Studio Flagship",
        "slug": "lumen-flagship",
        "logo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.94,
        "reviewCount": 310,
        "salesCount": 1800,
        "description": "Nordic and Japanese-inspired architectural furniture and lighting design studio.",
        "location": "Stockholm, Sweden",
        "commissionRate": 10,
        "joinedDate": "2023-03-01",
        "email": "studio@lumen-living.com",
        "phone": "+46 8 123 456",
        "balance": 18400,
        "payoutMethod": "Bank Wire",
        "isVerified": true
      },
      {
        "id": "vendor-komorebi",
        "name": "Komorebi Crafts Studio",
        "slug": "komorebi-crafts",
        "logo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.92,
        "reviewCount": 140,
        "salesCount": 1200,
        "description": "Handmade washi rice paper lanterns and cast brass lighting fixtures.",
        "location": "Kyoto, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-06-15",
        "email": "contact@komorebicrafts.jp",
        "phone": "+81 75 555 0192",
        "balance": 9200,
        "payoutMethod": "Stripe Connect",
        "isVerified": true
      },
      {
        "id": "vendor-kyoto-ceramics",
        "name": "Kyoto Stoneware Works",
        "slug": "kyoto-stoneware",
        "logo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.96,
        "reviewCount": 220,
        "salesCount": 2900,
        "description": "Hand-thrown wood-fired stoneware ceramics and matcha chawan bowls.",
        "location": "Shigaraki, Shiga, Japan",
        "commissionRate": 10,
        "joinedDate": "2023-01-20",
        "email": "master@kyotoceramics.jp",
        "phone": "+81 748 82 0011",
        "balance": 14600,
        "payoutMethod": "Bank Wire",
        "isVerified": true
      },
      {
        "id": "vendor-nordic-linen",
        "name": "Nordic Linen & Weavers",
        "slug": "nordic-linen",
        "logo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        "banner": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&auto=format&fit=crop&q=80",
        "rating": 4.91,
        "reviewCount": 180,
        "salesCount": 2400,
        "description": "Heritage stonewashed French flax linen and pure Mongolian cashmere textiles.",
        "location": "Copenhagen, Denmark",
        "commissionRate": 10,
        "joinedDate": "2023-04-10",
        "email": "hello@nordiclinen.dk",
        "phone": "+45 33 99 88 77",
        "balance": 11800,
        "payoutMethod": "SEPA Transfer",
        "isVerified": true
      }
    ],
    "blogPosts": [
      {
        "id": "hpost-1",
        "title": "The Art of Light Temperature: Crafting Circadian Balance at Home",
        "slug": "circadian-lighting-guide",
        "excerpt": "How shifting from 5000K daylight work lighting to 2200K amber evening glows promotes natural rest and mental calm.",
        "content": "Lighting is the invisible architecture of your emotional state...",
        "coverImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
        "author": {
          "name": "Elinor Lind",
          "role": "Interior Architect",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "date": "Aug 05, 2026",
        "category": "Design Philosophy",
        "tags": [
          "Lighting",
          "Circadian",
          "Wellness"
        ],
        "readTime": "4 min read"
      }
    ]
  }
};

export const allPresets: StorePreset[] = Object.values(storePresets);

export const defaultPresetId = 'fashion';

export const OMNI_STORE_TYPE_NAMES = [
  'fashion',
  'electronics',
  'home',
  'grocery',
  'food',
  'beauty',
  'furniture',
  'sports',
  'luxury',
  'handmade',
] as const;

export type OmniStoreTypeKey = (typeof OMNI_STORE_TYPE_NAMES)[number];

export function normalizeToStoreType(raw?: string): OmniStoreTypeKey {
  if (!raw) return 'fashion';
  const lower = raw.toLowerCase();

  if (lower.includes('tech') || lower.includes('gadget') || lower.includes('electronic') || lower.includes('phone') || lower.includes('comput')) {
    return 'electronics';
  }
  if (lower.includes('luxur') || lower.includes('watch') || lower.includes('jewelry') || lower.includes('gold') || lower.includes('diamond')) {
    return 'luxury';
  }
  if (lower.includes('beaut') || lower.includes('skin') || lower.includes('cosmetic') || lower.includes('makeup')) {
    return 'beauty';
  }
  if (lower.includes('furnitur') || lower.includes('interior') || lower.includes('decor') || lower.includes('chair') || lower.includes('table')) {
    return 'furniture';
  }
  if (lower.includes('home') || lower.includes('living') || lower.includes('ceramic') || lower.includes('lighting')) {
    return 'home';
  }
  if (lower.includes('grocer') || lower.includes('supermarket') || lower.includes('market') || lower.includes('produce')) {
    return 'grocery';
  }
  if (lower.includes('food') || lower.includes('restaurant') || lower.includes('chef') || lower.includes('cafe') || lower.includes('coffee') || lower.includes('bakery') || lower.includes('beverage')) {
    return 'food';
  }
  if (lower.includes('sport') || lower.includes('fit') || lower.includes('gym') || lower.includes('athlet') || lower.includes('sneak') || lower.includes('run')) {
    return 'sports';
  }
  if (lower.includes('hand') || lower.includes('craft') || lower.includes('artisan') || lower.includes('pottery') || lower.includes('knit')) {
    return 'handmade';
  }
  if (lower.includes('cloth') || lower.includes('apparel') || lower.includes('wear') || lower.includes('boutique') || lower.includes('fashion') || lower.includes('shoe') || lower.includes('dress')) {
    return 'fashion';
  }

  return 'fashion';
}

export function getOmniStorePreset(storeType?: string): StorePreset {
  const key = normalizeToStoreType(storeType);
  return storePresets[key] || storePresets[defaultPresetId];
}

export function getOmniProducts(storeType?: string, limit: number = 50): Product[] {
  const preset = getOmniStorePreset(storeType);
  const products = preset.products || [];
  return products.slice(0, limit);
}

export function sanitizeOmniProduct(p: Partial<Product>, index: number = 0): Product {
  const images = Array.isArray(p.images) && p.images.length > 0
    ? p.images
    : [{ id: `img-${index}`, url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80', alt: p.title || 'Product' }];

  return {
    id: p.id || `prod-${index}`,
    title: p.title || `Curated Piece ${index + 1}`,
    slug: p.slug || `piece-${index + 1}`,
    sku: p.sku || `SKU-${index + 1}`,
    categoryId: p.categoryId || 'general',
    subcategoryId: p.subcategoryId,
    subSubcategoryId: p.subSubcategoryId,
    brand: p.brand || 'Store Brand',
    price: typeof p.price === 'number' ? p.price : 99,
    compareAtPrice: p.compareAtPrice,
    costPrice: p.costPrice,
    currency: p.currency || 'USD',
    type: p.type || 'simple',
    unitOfMeasure: p.unitOfMeasure || 'piece',
    stockQuantity: typeof p.stockQuantity === 'number' ? p.stockQuantity : 20,
    lowStockThreshold: p.lowStockThreshold || 3,
    rating: typeof p.rating === 'number' ? p.rating : 4.8,
    reviewCount: typeof p.reviewCount === 'number' ? p.reviewCount : 15,
    ratingDistribution: p.ratingDistribution || { 5: 12, 4: 3, 3: 0, 2: 0, 1: 0 },
    isFeatured: p.isFeatured ?? index < 4,
    isBestSeller: p.isBestSeller ?? index % 3 === 0,
    isNewArrival: p.isNewArrival ?? index % 2 === 0,
    isTrending: p.isTrending ?? index % 4 === 0,
    badge: p.badge,
    images,
    shortDescription: p.shortDescription || 'Crafted with premium materials and timeless design.',
    fullDescription: p.fullDescription || 'Crafted with premium materials, uncompromising craftsmanship, and ethical sourcing.',
    specifications: p.specifications || {},
    attributes: p.attributes || {},
    variants: p.variants,
    tags: p.tags || ['featured', 'curated'],
    sellerId: p.sellerId || 'official-store',
    warranty: p.warranty || '1-Year Limited Warranty',
    returnPolicy: p.returnPolicy || '30-Day Hassle-Free Returns',
    createdAt: p.createdAt || new Date().toISOString(),
  };
}
