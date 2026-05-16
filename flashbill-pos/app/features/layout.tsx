import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore all 13+ features of FlashBill POS — offline billing, inventory management, kitchen display, QR ordering, and more.',
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
