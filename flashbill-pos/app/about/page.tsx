'use client';

import { motion } from 'framer-motion';
import { WifiOff, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '100+', label: 'Businesses served' },
  { value: '13+', label: 'Built-in features' },
  { value: '<24h', label: 'Setup time' },
  { value: '₹0', label: 'Monthly fees' },
];

const principles = [
  { icon: WifiOff, title: 'Offline-First', desc: 'Works without internet. Your billing never stops.' },
  { icon: Shield, title: 'Your Data, Your Device', desc: 'All data stays locally. No cloud dependency.' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Local processing means zero latency.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-border">
        <div className="container-site max-w-3xl">
          <div className="tag mb-6">About FlashBill</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight text-heading mb-6">
            Built for businesses like yours
          </h1>
          <p className="text-body text-[16px] leading-relaxed max-w-xl">
            Most POS systems need constant internet, charge monthly fees, or are too complex. We built something better.
          </p>
        </div>
      </section>

      <section className="py-12 bg-bg-soft border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[32px] font-bold text-heading mb-1">{s.value}</div>
                <div className="text-[14px] text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site max-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[28px] font-bold text-heading mb-4">Our Story</h2>
              <p className="text-body text-[15px] leading-relaxed mb-4">
                FlashBill was created at ForgeWeb when we noticed a critical gap in POS systems for small businesses.
              </p>
              <p className="text-body text-[15px] leading-relaxed">
                We built a POS that works offline, costs a one-time fee, and is powerful enough for any business size.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-bold text-heading mb-4">Why Offline-First?</h2>
              <div className="space-y-6">
                {principles.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-heading mb-1">{p.title}</h3>
                        <p className="text-[14px] text-body leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-soft border-y border-border text-center">
        <div className="container-site max-w-xl">
          <p className="text-[13px] text-muted uppercase tracking-wider font-semibold mb-3">A product by</p>
          <h2 className="text-[28px] font-bold text-heading mb-4">ForgeWeb</h2>
          <p className="text-body text-[15px] leading-relaxed mb-8">
            A premium digital agency specializing in web development and software solutions.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://forgeweb.in" target="_blank" rel="noopener noreferrer" className="btn-accent">Visit ForgeWeb ↗</a>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
