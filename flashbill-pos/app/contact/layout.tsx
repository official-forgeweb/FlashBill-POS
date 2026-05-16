import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the FlashBill team. Book a demo, get a custom quote, or ask any questions about our POS software.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
