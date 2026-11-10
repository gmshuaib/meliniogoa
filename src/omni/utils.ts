/**
 * Trimmed utils from the OmniStore master template — only what the ported
 * section variants import (formatCurrency, calculateDiscountPercent).
 */

export const CURRENCY_RATES: Record<string, { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  JPY: { symbol: '¥', rate: 152.0 },
};

export function formatCurrency(
  amountInUSD: number,
  targetCurrency: string = 'USD',
  locale: string = 'en-US'
): string {
  const currencyInfo = CURRENCY_RATES[targetCurrency] || CURRENCY_RATES.USD;
  const converted = amountInUSD * currencyInfo.rate;

  if (targetCurrency === 'JPY') {
    return `${currencyInfo.symbol}${Math.round(converted).toLocaleString(locale)}`;
  }

  return `${currencyInfo.symbol}${converted.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function calculateDiscountPercent(price: number, compareAtPrice?: number): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
  return Math.round(discount);
}
