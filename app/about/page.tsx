'use client';
import { motion } from 'framer-motion';
import { WifiOff, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const stats=[{value:'100+',label:'Businesses'},{value:'13+',label:'Features'},{value:'<24h',label:'Setup'},{value:'₹0',label:'Monthly'}];
const principles=[{icon:WifiOff,title:'Offline-First',desc:'Works without internet. Billing never stops.'},{icon:Shield,title:'Data on Your Device',desc:'All data stays locally. No cloud dependency.'},{icon:Zap,title:'Blazing Fast',desc:'Local processing. Zero latency.'}];

export default function AboutPage() {
  return (
    <>
      <section className="hero-warm pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border">
        <div className="site max-w-3xl"><div className="pill-tag mb-6">About FlashBill</div>
          <h1 className="text-[clamp(36px,5vw,52px)] font-bold text-heading leading-[1.08] tracking-tight mb-5">Built for businesses <span className="text-grad">like yours</span></h1>
          <p className="text-body text-[16px] max-w-xl">Most POS systems need internet, charge monthly, or are too complex. We built something better.</p>
        </div>
      </section>
      <section className="py-12 bg-cream border-b border-border"><div className="site"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map(s=><div key={s.label} className="text-center"><div className="text-[32px] font-bold text-heading mb-1">{s.value}</div><div className="text-[13px] text-muted">{s.label}</div></div>)}</div></div></section>
      <section className="py-16 bg-white">
        <div className="site max-w-[800px]"><div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div><h2 className="text-[28px] font-bold text-heading mb-4">Our Story</h2><p className="text-body text-[15px] leading-relaxed mb-4">FlashBill was created at ForgeWeb when we noticed a critical gap in POS systems for small businesses.</p><p className="text-body text-[15px] leading-relaxed">We built a POS that works offline, costs one-time, and handles any business size.</p></div>
          <div><h2 className="text-[28px] font-bold text-heading mb-4">Why Offline-First?</h2><div className="space-y-6">{principles.map(p=>{const Icon=p.icon;return(<div key={p.title} className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-flame-bg flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-flame"/></div><div><h3 className="text-[15px] font-semibold text-heading mb-1">{p.title}</h3><p className="text-[14px] text-body leading-relaxed">{p.desc}</p></div></div>);})}</div></div>
        </div></div>
      </section>
      <section className="py-16 bg-flame-soft text-center border-t border-border"><div className="site max-w-xl"><p className="text-[13px] text-muted uppercase tracking-wider font-semibold mb-3">A product by</p><h2 className="text-[28px] font-bold text-heading mb-4">ForgeWeb</h2><p className="text-body text-[15px] leading-relaxed mb-8">Premium digital agency specializing in web development and software solutions.</p><div className="flex justify-center gap-4"><a href="https://forgeweb.in" target="_blank" rel="noopener noreferrer" className="btn-flame">Visit ForgeWeb ↗</a><Link href="/contact" className="btn-white">Contact Us</Link></div></div></section>
    </>
  );
}
