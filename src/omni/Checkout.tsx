import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import { Address } from './types';
import { processPaymentGateway, testCards } from './paymentProvider';
import {
  ShieldCheck,
  Lock,
  Truck,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Gift,
  Sparkles,
  Zap,
  Info,
  Code,
  Layers,
} from 'lucide-react';
import { formatCurrency } from './utils';

export interface CheckoutShippingOption {
  id: string;
  name: string;
  estimatedDays: string;
  price: number;
  carrier?: string;
  carbonNeutral?: boolean;
}

interface CheckoutPageProps {
  initialStep?: 'address' | 'shipping' | 'payment' | 'review';
}

export const Checkout: React.FC<CheckoutPageProps> = ({ initialStep = 'address' }) => {
  const {
    cart,
    cartSubtotal,
    cartDiscount,
    cartTax,
    cartLoyaltyCredit,
    cartTotal,
    appliedCoupon,
    loyaltyPointsToRedeem,
    giftWrapOption,
    orderNote,
    currentUser,
    currency,
    createOrder,
    clearCart,
    navigateTo,
    showToast,
    t,
  } = useStore();

  const [step, setStep] = useState<'address' | 'shipping' | 'payment' | 'review'>(initialStep);

  // Address State
  const [shippingAddress, setShippingAddress] = useState<Address>({
    id: 'addr_1',
    fullName: currentUser?.name || 'Jessica Miller',
    street: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    postalCode: '97477',
    country: 'United States',
    phone: '+1 (555) 349-2810',
    type: 'home',
    isDefaultShipping: true,
  });
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  // Shipping Method
  const shippingMethods: CheckoutShippingOption[] = [
    {
      id: 'ship_standard',
      name: 'Standard Carbon-Neutral Delivery',
      estimatedDays: '3-5 Business Days',
      price: cartSubtotal >= 75 ? 0 : 5.99,
      carbonNeutral: true,
      carrier: 'CarbonNeutral Express',
    },
    {
      id: 'ship_express',
      name: 'Priority Express Air',
      estimatedDays: '2 Business Days',
      price: 14.99,
      carrier: 'FedEx Priority',
    },
    {
      id: 'ship_overnight',
      name: 'Same-Day Courier / Overnight',
      estimatedDays: 'Next Day by 10:30 AM',
      price: 24.99,
      carrier: 'Courier Direct',
    },
  ];
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<CheckoutShippingOption>(shippingMethods[0]);

  // Payment Form State
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'paypal' | 'apple_pay' | 'crypto' | 'cod'>('credit_card');
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242');
  const [cardHolder, setCardHolder] = useState('JESSICA MILLER');
  const [expiry, setExpiry] = useState('12/28');
  const [cvv, setCvv] = useState('424');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // 3D Secure modal challenge simulation
  const [show3DSModal, setShow3DSModal] = useState(false);

  // Redirect to cart if empty
  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold mb-4">Your bag is empty</h2>
        <button
          onClick={() => navigateTo({ name: 'plp' })}
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-xs font-bold"
        >
          Return to Store
        </button>
      </div>
    );
  }

  // Handle Card brand detection
  const getCardBrand = (num: string) => {
    const clean = num.replace(/\s/g, '');
    if (clean.startsWith('4')) return 'Visa';
    if (clean.startsWith('5')) return 'Mastercard';
    if (clean.startsWith('34') || clean.startsWith('37')) return 'Amex';
    return 'Credit Card';
  };

  const handleTestCardFill = (index: number) => {
    const card = testCards[index];
    if (!card) return;
    setCardNumber(card.number);
    setCardHolder(card.name);
    setExpiry(card.expiry);
    setCvv(card.cvv);
    setPaymentError(null);
  };

  const handlePlaceOrder = async () => {
    setIsProcessingPayment(true);
    setPaymentError(null);

    const is3DSCard = cardNumber.includes('5555') || cardNumber.includes('4444');
    const isDeclineCard = cardNumber.includes('3782') || cardNumber.includes('00005');

    try {
      const result = await processPaymentGateway({
        orderId: `ord_tmp_${Date.now()}`,
        orderNumber: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
        amount: cartTotal,
        currency,
        paymentMethod,
        cardDetails: {
          cardNumber,
          cardHolder,
          expiryDate: expiry,
          cvv,
        },
        customerEmail: currentUser?.email || 'customer@example.com',
        simulateFailure: isDeclineCard,
      });

      if (is3DSCard) {
        setIsProcessingPayment(false);
        setShow3DSModal(true);
        return;
      }

      if (!result.success) {
        setIsProcessingPayment(false);
        setPaymentError(result.errorMessage || 'Payment gateway simulation declined transaction.');
        showToast('Payment Declined', result.errorMessage || 'Transaction failed', 'error');
        return;
      }

      // Payment successful -> Place Order into store state
      const newOrder = createOrder({
        customerName: shippingAddress.fullName,
        customerEmail: currentUser?.email || 'customer@example.com',
        customerPhone: shippingAddress.phone,
        items: cart.map((item) => ({
          id: `item_${item.id}`,
          productId: item.productId,
          variantId: item.variantId,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          unitOfMeasure: item.unitOfMeasure,
          attributes: item.selectedAttributes,
        })),
        subtotal: cartSubtotal,
        discount: cartDiscount,
        shippingFee: selectedShippingMethod.price,
        tax: cartTax,
        loyaltyCreditApplied: cartLoyaltyCredit,
        total: cartTotal,
        currency,
        paymentStatus: 'paid',
        paymentMethod,
        shippingMethod: 'standard',
        shippingAddress,
        billingAddress: billingSameAsShipping ? shippingAddress : shippingAddress,
        orderStatus: 'placed',
        carrier: selectedShippingMethod.carrier,
        estimatedDeliveryDate: selectedShippingMethod.estimatedDays,
        couponCode: appliedCoupon?.code,
        notes: orderNote,
        isGift: giftWrapOption,
      });

      clearCart();
      setIsProcessingPayment(false);
      showToast('Order Confirmed!', `Order #${newOrder.orderNumber} placed successfully.`, 'success');
      navigateTo({ name: 'order-confirmation', orderId: newOrder.id });
    } catch (err: any) {
      setIsProcessingPayment(false);
      setPaymentError(err.message || 'An unexpected payment error occurred.');
    }
  };

  const handleComplete3DS = () => {
    setShow3DSModal(false);
    setIsProcessingPayment(true);
    setTimeout(() => {
      const newOrder = createOrder({
        customerName: shippingAddress.fullName,
        customerEmail: currentUser?.email || 'customer@example.com',
        customerPhone: shippingAddress.phone,
        items: cart.map((item) => ({
          id: `item_${item.id}`,
          productId: item.productId,
          variantId: item.variantId,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          unitOfMeasure: item.unitOfMeasure,
          attributes: item.selectedAttributes,
        })),
        subtotal: cartSubtotal,
        discount: cartDiscount,
        shippingFee: selectedShippingMethod.price,
        tax: cartTax,
        loyaltyCreditApplied: cartLoyaltyCredit,
        total: cartTotal,
        currency,
        paymentStatus: 'paid',
        paymentMethod: 'credit_card',
        shippingMethod: 'standard',
        shippingAddress,
        billingAddress: shippingAddress,
        orderStatus: 'placed',
        carrier: selectedShippingMethod.carrier,
        estimatedDeliveryDate: selectedShippingMethod.estimatedDays,
        couponCode: appliedCoupon?.code,
      });
      clearCart();
      setIsProcessingPayment(false);
      navigateTo({ name: 'order-confirmation', orderId: newOrder.id });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Checkout Progress Stepper */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />

          {[
            { id: 'address', label: '1. Shipping', desc: 'Address & Contact' },
            { id: 'shipping', label: '2. Delivery', desc: 'Carrier Speed' },
            { id: 'payment', label: '3. Payment', desc: 'Demo Sandbox' },
            { id: 'review', label: '4. Review', desc: 'Confirm & Place' },
          ].map((s, idx) => {
            const isCompleted =
              (s.id === 'address' && step !== 'address') ||
              (s.id === 'shipping' && (step === 'payment' || step === 'review')) ||
              (s.id === 'payment' && step === 'review');
            const isCurrent = step === s.id;

            return (
              <div key={s.id} className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    isCompleted
                      ? 'bg-emerald-600 text-white'
                      : isCurrent
                      ? 'bg-black text-white dark:bg-white dark:text-black ring-4 ring-zinc-200 dark:ring-zinc-700'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                </div>
                <span className={`text-xs font-bold mt-2 ${isCurrent ? 'text-black dark:text-white' : 'text-zinc-400'}`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Wizard Form Body (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* STEP 1: Shipping Address */}
          {step === 'address' && (
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                  Shipping & Contact Details
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Where should we dispatch your order?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">First Name</label>
                  <input
                    type="text"
                    value={shippingAddress.firstName}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">Last Name</label>
                  <input
                    type="text"
                    value={shippingAddress.lastName}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">Street Address</label>
                  <input
                    type="text"
                    value={shippingAddress.street}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                    placeholder="e.g. 742 Evergreen Terrace, Apt 4B"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">City</label>
                  <input
                    type="text"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">State / Region</label>
                    <input
                      type="text"
                      value={shippingAddress.state}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                      className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">Postal Code</label>
                    <input
                      type="text"
                      value={shippingAddress.postalCode}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                      className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">Phone Number (For Delivery SMS)</label>
                  <input
                    type="tel"
                    value={shippingAddress.phone}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 text-xs cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={billingSameAsShipping}
                    onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                    className="rounded accent-black dark:accent-white"
                  />
                  <span>Billing address is identical to shipping address</span>
                </label>
              </div>

              <div className="flex justify-end pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => setStep('shipping')}
                  className="bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-800 flex items-center gap-2"
                >
                  <span>Continue to Delivery Speed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Shipping Method */}
          {step === 'shipping' && (
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                  Select Delivery Speed
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  All packages dispatched in recyclable, carbon-neutral packaging.
                </p>
              </div>

              <div className="space-y-3">
                {shippingMethods.map((method) => {
                  const isSelected = selectedShippingMethod.id === method.id;
                  return (
                    <div
                      key={method.id}
                      onClick={() => setSelectedShippingMethod(method)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800/80 shadow-xs'
                          : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping_method"
                          checked={isSelected}
                          onChange={() => setSelectedShippingMethod(method)}
                          className="accent-black dark:accent-white"
                        />
                        <div>
                          <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                            <span>{method.name}</span>
                            {method.carbonNeutral && (
                              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                                100% Eco-Neutral
                              </span>
                            )}
                          </p>
                          <p className="text-[11px] text-zinc-500">{method.estimatedDays}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">
                        {method.price === 0 ? 'FREE' : formatCurrency(method.price, currency)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => setStep('address')}
                  className="text-xs font-semibold text-zinc-500 hover:text-black dark:hover:text-white flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Address
                </button>
                <button
                  onClick={() => setStep('payment')}
                  className="bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-800 flex items-center gap-2"
                >
                  <span>Continue to Payment Sandbox</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment (Mock Gateway) */}
          {step === 'payment' && (
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6 animate-in fade-in duration-300">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                    Secure Payment Gateway
                  </h2>
                  <span className="text-[11px] font-mono bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" /> 256-bit Encrypted
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  PCI-compliant checkout. Select your preferred payment method below to complete your order.
                </p>
              </div>

              {/* Payment Method Selector */}
              <div className="flex items-center gap-2 p-3 bg-zinc-100 dark:bg-zinc-800/60 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                <div className="p-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">Credit / Debit Card</span>
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono px-2 py-0.5 rounded-full font-bold">Instant</span>
                  </div>
                  <p className="text-[11px] text-zinc-500">All major credit and debit cards accepted securely.</p>
                </div>
              </div>

              {/* Test Card Fill Quick-Buttons */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-700 dark:text-zinc-300">Quick Test Cards:</span>
                  <span className="text-[10px] text-zinc-400">Click to autofill card numbers</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {testCards.map((card, idx) => (
                    <button
                      key={card.name}
                      type="button"
                      onClick={() => handleTestCardFill(idx)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs border transition-all ${card.badgeColor} hover:opacity-80`}
                    >
                      {card.name}: {card.number}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Form */}
              {paymentMethod === 'credit_card' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">
                      Card Number ({getCardBrand(cardNumber)})
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4242 4242 4242 4242"
                        className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 font-mono tracking-wider focus:outline-none"
                      />
                      <Lock className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">Expiration Date</label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 font-mono focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">CVV Security Code</label>
                      <input
                        type="password"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        maxLength={4}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-300">Name on Card</label>
                    <input
                      type="text"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      placeholder="JESSICA MILLER"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 uppercase focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Klarna Installment Banner */}
              {paymentMethod === 'klarna' && (
                <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 rounded-2xl text-xs space-y-2">
                  <p className="font-bold text-rose-950 dark:text-rose-200">
                    Pay in 4 Interest-Free Installments of {formatCurrency(cartTotal / 4, currency)}
                  </p>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                    Due today: {formatCurrency(cartTotal / 4, currency)}, followed by 3 automatic bi-weekly installments. No hidden fees or hard credit checks.
                  </p>
                </div>
              )}

              {paymentError && (
                <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-2xl text-xs text-rose-600 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Transaction Declined</p>
                    <p className="text-[11px] mt-0.5">{paymentError}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => setStep('shipping')}
                  className="text-xs font-semibold text-zinc-500 hover:text-black dark:hover:text-white flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Shipping
                </button>
                <button
                  onClick={() => setStep('review')}
                  className="bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-8 py-3.5 rounded-full hover:bg-zinc-800 flex items-center gap-2"
                >
                  <span>Review Final Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Place Order */}
          {step === 'review' && (
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                  Review & Confirm Order
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Verify shipping address, delivery method, and payment authorization.
                </p>
              </div>

              {/* Address & Delivery Review Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-zinc-400 uppercase tracking-wider">Shipping To</span>
                    <button onClick={() => setStep('address')} className="text-purple-600 hover:underline">Edit</button>
                  </div>
                  <p className="font-bold text-zinc-900 dark:text-white">{shippingAddress.firstName} {shippingAddress.lastName}</p>
                  <p className="text-zinc-600 dark:text-zinc-300">{shippingAddress.street}</p>
                  <p className="text-zinc-600 dark:text-zinc-300">{shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode}</p>
                  <p className="text-zinc-500">{shippingAddress.phone}</p>
                </div>

                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-zinc-400 uppercase tracking-wider">Payment & Method</span>
                    <button onClick={() => setStep('payment')} className="text-purple-600 hover:underline">Edit</button>
                  </div>
                  <p className="font-bold text-zinc-900 dark:text-white capitalize">{paymentMethod.replace('_', ' ')}</p>
                  <p className="text-zinc-600 dark:text-zinc-300 font-mono">**** **** **** {cardNumber.slice(-4)}</p>
                  <p className="text-emerald-600 font-semibold">{selectedShippingMethod.name}</p>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Items in Order ({cart.length})</p>
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {cart.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt="" className="w-10 h-10 object-cover rounded-xl" />
                        <div>
                          <p className="font-bold text-zinc-900 dark:text-white">{item.title}</p>
                          <p className="text-[11px] text-zinc-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold">{formatCurrency(item.price * item.quantity, currency)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {paymentError && (
                <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-2xl text-xs text-rose-600">
                  {paymentError}
                </div>
              )}

              <div className="flex justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => setStep('payment')}
                  className="text-xs font-semibold text-zinc-500 hover:text-black dark:hover:text-white flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Payment
                </button>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessingPayment}
                  className="bg-black dark:bg-white text-white dark:text-black font-bold text-sm px-10 py-4 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-2xl active:scale-98 disabled:opacity-50"
                >
                  {isProcessingPayment ? (
                    <>
                      <span className="w-4 h-4 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                      <span>Processing Demo Order...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Place Demo Order ({formatCurrency(cartTotal, currency)})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Order Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              Order Breakdown
            </h3>

            {/* Price Calculations */}
            <div className="space-y-2 text-xs divide-y divide-zinc-100 dark:divide-zinc-800">
              <div className="pt-2 flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Subtotal</span>
                <span className="font-semibold text-zinc-900 dark:text-white">{formatCurrency(cartSubtotal, currency)}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="pt-2 flex justify-between text-emerald-600 font-medium">
                  <span>Promo Discount ({appliedCoupon?.code})</span>
                  <span>-{formatCurrency(cartDiscount, currency)}</span>
                </div>
              )}
              {cartLoyaltyCredit > 0 && (
                <div className="pt-2 flex justify-between text-amber-600 font-medium">
                  <span>Loyalty Points Credit</span>
                  <span>-{formatCurrency(cartLoyaltyCredit, currency)}</span>
                </div>
              )}
              <div className="pt-2 flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Shipping ({selectedShippingMethod.name})</span>
                <span>{selectedShippingMethod.price === 0 ? <strong className="text-emerald-600">FREE</strong> : formatCurrency(selectedShippingMethod.price, currency)}</span>
              </div>
              <div className="pt-2 flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Estimated Sales Tax</span>
                <span>{formatCurrency(cartTax, currency)}</span>
              </div>
              <div className="pt-3 flex justify-between text-lg font-extrabold text-zinc-900 dark:text-white">
                <span>Total Amount Due</span>
                <span>{formatCurrency(cartTotal, currency)}</span>
              </div>
            </div>

            {/* Security Assurance */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span className="text-amber-700 dark:text-amber-300 font-medium">Demo checkout — simulated sandbox payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-zinc-400" />
                <span>Simulated order dispatch & tracking flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Secure Challenge Simulation Modal */}
      {show3DSModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl rounded-3xl max-w-md w-full p-6 text-center border border-zinc-200/80 dark:border-white/10 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white font-display">
              Bank 3D Secure 2.0 Verification
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Please authorize this purchase with your issuing bank via one-time passcode. (Simulation)
            </p>
            <div className="p-4 bg-zinc-100/60 dark:bg-white/5 backdrop-blur-xs border border-zinc-200/50 dark:border-white/10 rounded-2xl text-xs font-mono text-zinc-800 dark:text-zinc-200">
              OTP Sent to Registered Mobile: <strong>***-***-8491</strong>
            </div>
            <button
              onClick={handleComplete3DS}
              className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-xs hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Verify & Complete Authentication
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
