import type { Metadata } from 'next';
import { Inter, Playfair_Display, Caveat } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/ui/Preloader';
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'FlashBill POS — The Future of Billing',
    template: '%s | FlashBill POS',
  },
  description: 'FlashBill is an offline-first POS & billing software for restaurants, cafes, and retail businesses. One-time payment, lifetime ownership. Built by ForgeWeb.',
  keywords: ['POS', 'billing software', 'offline billing', 'restaurant POS', 'FlashBill', 'ForgeWeb'],
  authors: [{ name: 'ForgeWeb', url: 'https://forgeweb.in' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'FlashBill POS',
    title: 'FlashBill POS — The Future of Billing',
    description: 'Offline-first POS & billing software. One-time payment, lifetime ownership.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${caveat.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#FAFAFA] text-[#0A0A0A]">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton 
          phoneNumber="918510882886"
          message="Hi, I'm interested in FlashBill POS!"
        />
      </body>
    </html>
  );
}
