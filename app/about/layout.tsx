import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about FlashBill POS — built by ForgeWeb for businesses that need fast, reliable, offline-first billing software.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
