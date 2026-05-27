'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => setOpen(false), [p]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500">
      <motion.nav
        initial={false}
        animate={{
          maxWidth: scrolled ? 780 : 1200,
          paddingLeft: scrolled ? 8 : 24,
          paddingRight: scrolled ? 8 : 24,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full flex items-center justify-between h-[56px] transition-all duration-500 ${
          scrolled
            ? 'nav-float px-2'
            : 'bg-transparent rounded-none'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group pl-2">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-8 h-8 rounded-lg bg-[#E8590C] flex items-center justify-center shadow-md shadow-[rgba(232,89,12,0.25)]"
          >
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </motion.div>
          <span className="text-[18px] font-bold text-[#0A0A0A]">
            Flash<span className="text-[#E8590C]">Bill</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-[13px] font-semibold transition-colors duration-200 pb-0.5 ${
                p === l.href ? 'text-[#E8590C]' : 'text-[#6B7280] hover:text-[#0A0A0A]'
              }`}
            >
              {l.label}
              {p === l.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#E8590C] rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 pr-2">
          <Link href="/signup" className="text-[13px] font-semibold text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
            Sign in
          </Link>
          <Link
            href="/contact"
            className="bg-[#E8590C] text-white text-[11px] font-bold uppercase tracking-[0.08em] px-5 py-2 rounded-full shadow-md shadow-[rgba(232,89,12,0.2)] hover:bg-[#D14D0A] hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#0A0A0A] pr-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[68px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E5E7EB] shadow-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <Link
                    href={l.href}
                    className={`text-[15px] font-medium py-2.5 px-4 rounded-xl block transition-all ${
                      p === l.href ? 'text-[#E8590C] bg-[#FFF7ED]' : 'text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F9FAFB]'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/contact" className="btn-outline justify-center py-2.5 text-[13px]">Sign in</Link>
                <Link href="/contact" className="btn-blue justify-center py-2.5 text-[13px]">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
