export interface CheckoutConfig {
  mode: 'mock' | 'stripe' | 'supabase';
  stripePublishableKey?: string;
  simulateFailureDefault?: boolean;
}

export const CHECKOUT_CONFIG: CheckoutConfig = {
  mode: ((import.meta as any).env?.VITE_CHECKOUT_MODE as any) || 'mock',
  stripePublishableKey: (import.meta as any).env?.VITE_STRIPE_PUBLISHABLE_KEY || '',
  simulateFailureDefault: false,
};
