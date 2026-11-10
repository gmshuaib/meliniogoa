export interface PaymentRequestPayload {
  orderId: string;
  orderNumber: string;
  amount: number;
  currency: string;
  paymentMethod: 'credit_card' | 'paypal' | 'apple_pay' | 'crypto' | 'cod';
  cardDetails?: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  };
  customerEmail: string;
  simulateFailure?: boolean;
}

export interface PaymentResponseResult {
  success: boolean;
  transactionId?: string;
  authorizationCode?: string;
  paidAt?: string;
  errorMessage?: string;
  requires3DS?: boolean;
  rawGatewayResponse?: Record<string, any>;
}

export const testCards = [
  {
    name: 'Standard Card (Instant)',
    number: '4242 •••• •••• 4242',
    rawNumber: '4242424242424242',
    expiry: '12/28',
    cvv: '123',
    badge: 'Standard',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:border-emerald-800',
  },
  {
    name: '3D Secure Card',
    number: '5555 •••• •••• 4444',
    rawNumber: '5555444433332222',
    expiry: '09/27',
    cvv: '456',
    badge: '3DS Enabled',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800',
  },
  {
    name: 'Test Decline Card',
    number: '3782 •••••• 00005',
    rawNumber: '378282246310005',
    expiry: '03/26',
    cvv: '8888',
    badge: 'Decline Check',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-200 dark:border-rose-800',
  },
];

export async function processPaymentGateway(
  payload: PaymentRequestPayload
): Promise<PaymentResponseResult> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (payload.simulateFailure) {
    return {
      success: false,
      errorMessage: 'Payment authorization declined by issuing bank.',
    };
  }

  if (payload.paymentMethod === 'credit_card' && payload.cardDetails) {
    const rawNum = payload.cardDetails.cardNumber.replace(/\s+/g, '');
    if (rawNum.length < 13) {
      return {
        success: false,
        errorMessage: 'Invalid card number format. Please check card digits.',
      };
    }
  }

  const txId = `txn_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`;
  const authCode = `AUTH_${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    success: true,
    transactionId: txId,
    authorizationCode: authCode,
    paidAt: new Date().toISOString(),
    rawGatewayResponse: {
      provider: payload.paymentMethod === 'credit_card' ? 'SecurePay Gateway' : payload.paymentMethod.toUpperCase(),
      status: 'succeeded',
      captured: true,
      risk_score: 0,
      seller_message: 'Payment completed successfully.',
    },
  };
}
