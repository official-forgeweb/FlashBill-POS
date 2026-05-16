'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

const links = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-to-buy', label: 'How to Buy' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const p = usePathname();

  useEffect(() => { const fn = () => setScrolled(window.scrollY > 10); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []);
  useEffect(() => setOpen(false), [p]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scroll' : 'bg-transparent'}`}>
      <nav className="site flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-flame to-flame-light flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[17px] font-bold text-heading">Flash<span className="text-flame">Bill</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`text-[14px] font-medium transition-colors ${p === l.href ? 'text-flame' : 'text-body hover:text-heading'}`}>{l.label}</Link>
          ))}
        </div>

        <Link href="/contact" className="hidden lg:inline-flex btn-flame text-[13px] py-2.5 px-6">
          Book A Demo <ArrowRight className="w-4 h-4" />
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-heading">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border">
            <div className="site py-4 flex flex-col gap-3">
              {links.map(l => <Link key={l.href} href={l.href} className="text-[15px] font-medium text-body py-2">{l.label}</Link>)}
              <Link href="/contact" className="btn-flame text-[14px] py-3 justify-center mt-2">Book A Demo</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
