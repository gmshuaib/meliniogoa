export type SupportedLocale = 'en' | 'es' | 'fr' | 'ar';

export interface Translations {
  nav: {
    home: string;
    categories: string;
    deals: string;
    newArrivals: string;
    bestSellers: string;
    blog: string;
    adminPanel: string;
    vendorPortal: string;
    searchPlaceholder: string;
    wishlist: string;
    compare: string;
    cart: string;
    account: string;
    signIn: string;
    signOut: string;
    switchPreset: string;
  };
  home: {
    heroBadge: string;
    shopNow: string;
    exploreCategories: string;
    flashSale: string;
    endsIn: string;
    featuredProducts: string;
    trendingNow: string;
    recommendedForYou: string;
    shoppableFeed: string;
    communityLove: string;
    freeShipping: string;
    freeShippingDesc: string;
    securePayment: string;
    securePaymentDesc: string;
    easyReturns: string;
    easyReturnsDesc: string;
    support247: string;
    support247Desc: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    subscribe: string;
  };
  product: {
    inStock: string;
    outOfStock: string;
    lowStock: string;
    addToCart: string;
    buyNow: string;
    addedToCart: string;
    compare: string;
    wishlist: string;
    share: string;
    specifications: string;
    description: string;
    reviews: string;
    qa: string;
    frequentlyBoughtTogether: string;
    addBundleToCart: string;
    estimatedDelivery: string;
    checkPincode: string;
    verifiedPurchase: string;
    writeReview: string;
    askQuestion: string;
    ratingBreakdown: string;
    seller: string;
    warranty: string;
  };
  cart: {
    title: string;
    emptyCart: string;
    startShopping: string;
    subtotal: string;
    discount: string;
    shipping: string;
    free: string;
    tax: string;
    total: string;
    checkout: string;
    promoCode: string;
    apply: string;
    saveForLater: string;
    moveToWishlist: string;
    savedItems: string;
    moveToCart: string;
    freeShippingProgress: string;
    giftWrap: string;
    orderNotes: string;
  };
  checkout: {
    title: string;
    stepAddress: string;
    stepDelivery: string;
    stepPayment: string;
    stepReview: string;
    stepConfirmation: string;
    placeOrder: string;
    paymentNote: string;
    orderSuccess: string;
    orderNumber: string;
    viewOrder: string;
  };
  account: {
    welcome: string;
    profile: string;
    orders: string;
    addresses: string;
    loyaltyPoints: string;
    settings: string;
    trackOrder: string;
    requestReturn: string;
    reorder: string;
  };
  admin: {
    title: string;
    overview: string;
    products: string;
    categories: string;
    inventory: string;
    orders: string;
    marketing: string;
    reviews: string;
    themeCustomizer: string;
    analytics: string;
    exitAdmin: string;
  };
}

export const translations: Record<SupportedLocale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      categories: 'Categories',
      deals: 'Flash Deals',
      newArrivals: 'New Arrivals',
      bestSellers: 'Best Sellers',
      blog: 'Journal',
      adminPanel: 'Admin Studio',
      vendorPortal: 'Vendor Hub',
      searchPlaceholder: 'Search anything across catalog, SKU, attributes...',
      wishlist: 'Wishlist',
      compare: 'Compare',
      cart: 'Cart',
      account: 'Account',
      signIn: 'Sign In',
      signOut: 'Sign Out',
      switchPreset: 'Switch Store Preset',
    },
    home: {
      heroBadge: 'Curated Season Collection',
      shopNow: 'Shop Collection',
      exploreCategories: 'Explore Categories',
      flashSale: '⚡ Limited Time Deals',
      endsIn: 'Ends in',
      featuredProducts: 'Featured Selections',
      trendingNow: 'Trending Right Now',
      recommendedForYou: 'Personalized For You',
      shoppableFeed: 'Community & Lifestyle',
      communityLove: 'Tagged by our customers worldwide',
      freeShipping: 'Free Global Express',
      freeShippingDesc: 'On orders over $75 with carbon-neutral packaging',
      securePayment: 'Guaranteed Safe Checkout',
      securePaymentDesc: '256-bit encrypted simulated and live payment gateways',
      easyReturns: '30-Day Hassle-Free Returns',
      easyReturnsDesc: 'Prepaid return label and instant store credit',
      support247: '24/7 Dedicated Concierge',
      support247Desc: 'Real-time human and AI guided resolution',
      newsletterTitle: 'Unlock 15% Off Your Next Order',
      newsletterSubtitle: 'Join our inner circle for member-only drops, seasonal lookbooks, and private sales.',
      subscribe: 'Subscribe',
    },
    product: {
      inStock: 'In Stock & Ready to Ship',
      outOfStock: 'Currently Out of Stock',
      lowStock: '🔥 High demand: Only few remaining!',
      addToCart: 'Add to Bag',
      buyNow: 'Instant Checkout',
      addedToCart: 'Added to Bag',
      compare: 'Compare',
      wishlist: 'Wishlist',
      share: 'Share',
      specifications: 'Specifications',
      description: 'Product Overview',
      reviews: 'Customer Reviews',
      qa: 'Questions & Answers',
      frequentlyBoughtTogether: 'Frequently Bought Together',
      addBundleToCart: 'Add Bundle to Bag',
      estimatedDelivery: 'Estimated Delivery',
      checkPincode: 'Check Delivery ETA',
      verifiedPurchase: 'Verified Buyer',
      writeReview: 'Write a Review',
      askQuestion: 'Ask a Question',
      ratingBreakdown: 'Rating Distribution',
      seller: 'Sold & Fulfilled by',
      warranty: 'Warranty & Guarantee',
    },
    cart: {
      title: 'Shopping Bag',
      emptyCart: 'Your shopping bag is empty',
      startShopping: 'Explore Catalog',
      subtotal: 'Subtotal',
      discount: 'Discounts & Offers',
      shipping: 'Estimated Shipping',
      free: 'FREE',
      tax: 'Estimated Taxes (VAT/GST)',
      total: 'Estimated Total',
      checkout: 'Proceed to Checkout',
      promoCode: 'Promo or Voucher Code',
      apply: 'Apply',
      saveForLater: 'Save for Later',
      moveToWishlist: 'Move to Wishlist',
      savedItems: 'Saved for Later',
      moveToCart: 'Move to Bag',
      freeShippingProgress: 'Add more to unlock Free Express Delivery!',
      giftWrap: 'Add Eco-Friendly Gift Wrapping (+$5.00)',
      orderNotes: 'Delivery instructions or special request',
    },
    checkout: {
      title: 'Seamless Checkout',
      stepAddress: '1. Shipping Address',
      stepDelivery: '2. Delivery Speed',
      stepPayment: '3. Payment Method',
      stepReview: '4. Order Review',
      stepConfirmation: '5. Order Confirmed',
      placeOrder: 'Place Demo Order',
      paymentNote: 'Safe Sandbox Mode: Transactions are fully simulated with test cards and webhooks.',
      orderSuccess: 'Thank you for your order!',
      orderNumber: 'Order Reference',
      viewOrder: 'Track Order Progress',
    },
    account: {
      welcome: 'Welcome back',
      profile: 'Personal Profile',
      orders: 'Order History',
      addresses: 'Saved Addresses',
      loyaltyPoints: 'Rewards & Loyalty Points',
      settings: 'Preferences & Privacy',
      trackOrder: 'Track Shipment',
      requestReturn: 'Initiate Return',
      reorder: 'Buy Again',
    },
    admin: {
      title: 'Commerce Command Studio',
      overview: 'Performance Overview',
      products: 'Catalog & Inventory',
      categories: 'Category Schemas',
      inventory: 'Stock Control',
      orders: 'Fulfillment & Orders',
      marketing: 'Promotions & Coupons',
      reviews: 'Reviews Moderation',
      themeCustomizer: 'Theme & Brand Tokens',
      analytics: 'Financial Analytics',
      exitAdmin: 'Back to Storefront',
    },
  },
  es: {} as any,
  fr: {} as any,
  ar: {} as any,
};

export const t: Translations = translations.en;
