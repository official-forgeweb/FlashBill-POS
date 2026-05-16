import Link from 'next/link';
import { Zap } from 'lucide-react';

const cols = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How to Buy', href: '/how-to-buy' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'ForgeWeb', href: 'https://forgeweb.in', ext: true },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 relative overflow-hidden">
      {/* Faint grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="site relative z-10 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-[#E8590C] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[18px] font-bold text-white">
                Flash<span className="text-[#F97316]">Bill</span>
              </span>
            </Link>
            <p className="text-[14px] text-white/50 leading-relaxed max-w-[240px]">
              Offline-first POS &amp; billing software by ForgeWeb. Simple, reliable, and yours forever.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.label}>
                    {'ext' in item ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-white/60 hover:text-[#F97316] transition-colors duration-200"
                      >
                        {item.label} ↗
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-[14px] text-white/60 hover:text-[#F97316] transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="site py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/30">
            &copy; {new Date().getFullYear()} FlashBill by ForgeWeb. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-[13px] text-[#F97316] font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
