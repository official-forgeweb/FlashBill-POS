'use client';
import { motion } from 'framer-motion';
import { WifiOff, Shield, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '100+', label: 'Businesses' },
  { value: '13+', label: 'Features' },
  { value: '<24h', label: 'Setup' },
  { value: '₹0', label: 'Monthly' },
];

const principles = [
  { icon: WifiOff, title: 'Offline-First', desc: 'Works without internet. Billing never stops.' },
  { icon: Shield, title: 'Data on Your Device', desc: 'All data stays locally. No cloud dependency.' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Local processing. Zero latency.' },
];

import { PageLoaderWrapper } from '@/components/ui/PageLoaderWrapper';

export default function AboutPage() {
  return (
    <PageLoaderWrapper page="about">
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center bg-grid relative pt-[72px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.03] blur-[100px] pointer-events-none" />
        <div className="site max-w-3xl relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">● ABOUT US</span>
            <h1 className="text-[clamp(36px,5vw,52px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
              Built for businesses{' '}
              <span className="text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
                like yours
              </span>
            </h1>
            <p className="text-[#6B7280] text-[18px] max-w-xl mx-auto font-medium">
              Most POS systems need internet, charge monthly, or are too complex. We built something better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-y border-[#E5E7EB]">
        <div className="site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="text-center">
                <div className="text-[40px] font-black text-[#0A0A0A] mb-1">{s.value}</div>
                <div className="text-[12px] font-bold text-[#E8590C] uppercase tracking-[0.2em]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Principles */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="site max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-[32px] font-black text-[#0A0A0A] mb-6">Our Story</h2>
              <p className="text-[#6B7280] text-[16px] leading-relaxed mb-4">
                FlashBill was created at ForgeWeb when we noticed a critical gap in POS systems for small businesses.
              </p>
              <p className="text-[#6B7280] text-[16px] leading-relaxed">
                We built a POS that works offline, costs one-time, and handles any business size with an incredibly intuitive interface.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-[32px] font-black text-[#0A0A0A] mb-6">Why Offline-First?</h2>
              <div className="space-y-6">
                {principles.map(p => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#E8590C] flex items-center justify-center shrink-0 group-hover:bg-[#E8590C] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-[16px] font-bold text-[#0A0A0A] mb-1">{p.title}</h3>
                        <p className="text-[14px] text-[#6B7280] leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ForgeWeb */}
      <section className="py-28 bg-[#0A0A0A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="site max-w-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#F97316] mb-4">A PRODUCT BY</span>
            <h2 className="text-[40px] font-black text-white mb-5">ForgeWeb</h2>
            <p className="text-white/50 text-[16px] leading-relaxed mb-10 font-medium">
              Premium digital agency specializing in web development and software solutions.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://forgeweb.in" target="_blank" rel="noopener noreferrer" className="btn-blue">Visit ForgeWeb ↗</a>
              <Link href="/contact" className="btn-outline border-white/20 text-white hover:border-[#F97316] hover:text-[#F97316] hover:bg-transparent">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLoaderWrapper>
  );
}
