'use client';
import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Download, Headphones, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { num:'01', title:'Contact Us', desc:'Reach out via WhatsApp, email, or our contact form.', icon:MessageCircle },
  { num:'02', title:'Choose & Pay', desc:'Select your plan. One-time payment via UPI, bank transfer, or card.', icon:CreditCard },
  { num:'03', title:'Installation', desc:'Our team installs FlashBill and configures everything. Under 24 hours.', icon:Download },
  { num:'04', title:'Go Live', desc:'Start billing immediately with complete staff training.', icon:Headphones },
];
const bens = ['No recurring costs — pay once, own forever','Full data ownership on your device','Predictable investment, no surprise fees','Regular updates at no extra cost'];

export default function HowToBuyPage() {
  return (
    <>
      <section className="hero-warm pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border text-center">
        <div className="site max-w-3xl mx-auto"><div className="pill-tag mb-6 mx-auto w-fit">How to Buy</div>
          <h1 className="text-[clamp(36px,5vw,52px)] font-bold text-heading leading-[1.08] tracking-tight mb-5">Get started in <span className="text-grad">4 simple steps</span></h1>
          <p className="text-body text-[16px] max-w-xl mx-auto">From first contact to going live — under 24 hours.</p>
        </div>
      </section>
      <section className="py-16 bg-cream">
        <div className="site max-w-[800px]">
          {steps.map((s,i)=>{const Icon=s.icon; return (
            <motion.div key={s.num} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1*i}} className="flex gap-6 relative">
              <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-2xl bg-flame-bg flex items-center justify-center shrink-0 z-10"><Icon className="w-5 h-5 text-flame"/></div>{i<steps.length-1&&<div className="w-px flex-1 bg-border"/>}</div>
              <div className="pb-12"><div className="text-[12px] font-bold text-flame uppercase tracking-wider mb-1">Step {s.num}</div><h3 className="text-[20px] font-semibold text-heading mb-2">{s.title}</h3><p className="text-body text-[15px] leading-relaxed max-w-md">{s.desc}</p></div>
            </motion.div>
          );})}
        </div>
      </section>
      <section className="py-16 bg-white border-y border-border">
        <div className="site max-w-[800px]"><div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div><h2 className="text-[28px] font-bold text-heading mb-4">Why a one-time license?</h2><p className="text-body text-[15px] leading-relaxed">Business software should be an asset you own, not a subscription trap.</p></div>
          <div className="space-y-4">{bens.map(b=><div key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-flame mt-0.5 shrink-0"/><span className="text-[14px] text-heading font-medium">{b}</span></div>)}</div>
        </div></div>
      </section>
      <section className="py-16 bg-cream text-center"><div className="site max-w-xl"><h2 className="text-[28px] font-bold text-heading mb-4">Ready to get started?</h2><p className="text-body text-[16px] mb-8">Book a free demo and our team will walk you through.</p><Link href="/contact" className="btn-flame">Book a Free Demo</Link></div></section>
    </>
  );
}
