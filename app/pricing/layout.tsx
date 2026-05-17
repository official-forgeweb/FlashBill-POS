import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'FlashBill POS pricing — one-time payment plans starting from ₹12,000. No subscriptions, no hidden fees. Compare Basic, Standard, and Premium.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
