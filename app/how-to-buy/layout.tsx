import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Buy',
  description: 'Get FlashBill POS in 4 simple steps. Contact us, choose your plan, get setup in 24 hours, and start billing immediately.',
};

export default function HowToBuyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
