import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'FlashBill POS — Fast. Reliable. Yours.',
    template: '%s | FlashBill POS',
  },
  description: 'FlashBill is an offline-first POS & billing software for restaurants, cafes, and retail businesses. One-time payment, lifetime ownership. Built by ForgeWeb.',
  keywords: ['POS', 'billing software', 'offline billing', 'restaurant POS', 'FlashBill', 'ForgeWeb'],
  authors: [{ name: 'ForgeWeb', url: 'https://forgeweb.in' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'FlashBill POS',
    title: 'FlashBill POS — Fast. Reliable. Yours.',
    description: 'Offline-first POS & billing software. One-time payment, lifetime ownership.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
