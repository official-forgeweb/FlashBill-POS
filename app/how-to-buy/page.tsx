'use client';
import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Download, Headphones, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import HowToBuyPreloader from '@/components/ui/HowToBuyPreloader';

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Reach out via WhatsApp, email, or our contact form.', icon: MessageCircle },
  { num: '02', title: 'Choose & Pay', desc: 'Select your plan. One-time payment via UPI, bank transfer, or card.', icon: CreditCard },
  { num: '03', title: 'Installation', desc: 'Our team installs FlashBill and configures everything. Under 24 hours.', icon: Download },
  { num: '04', title: 'Go Live', desc: 'Start billing immediately with complete staff training.', icon: Headphones },
];
const bens = [
  'No recurring costs — pay once, own forever',
  'Full data ownership on your device',
  'Predictable investment, no surprise fees',
  'Regular updates at no extra cost',
];

export default function HowToBuyPage() {
  return (
    <>
      <HowToBuyPreloader />
      <section className="min-h-[50vh] flex items-center justify-center bg-white relative pt-[72px] overflow-hidden">
        {/* Decorative background grid and glow */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.05] blur-[100px] pointer-events-none" />
        
        <div className="site max-w-3xl mx-auto relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">● HOW TO BUY</span>
            <h1 className="text-[clamp(36px,5vw,56px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
              Get started in{' '}
              <span className="text-[#E8590C] font-medium block md:inline-block" style={{ fontFamily: 'var(--font-caveat), cursive', fontStyle: 'normal' }}>4 simple steps</span>
            </h1>
            <p className="text-[#6B7280] text-[18px] max-w-xl mx-auto font-medium">From first contact to going live — under 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#FAFAFA] border-y border-[#E5E7EB]">
        <div className="site max-w-[800px]">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.6, type: "spring", stiffness: 100 }} className="flex gap-6 md:gap-10 relative group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-sm shadow-[#E8590C]/5 border border-[#E5E7EB] flex items-center justify-center shrink-0 z-10 group-hover:border-[#E8590C]/40 group-hover:bg-[#FFF7ED] transition-all duration-400 relative">
                    <Icon className="w-6 h-6 text-[#4B5563] group-hover:text-[#E8590C] transition-colors duration-400" />
                  </div>
                  {i < steps.length - 1 && <div className="w-[2px] flex-1 bg-[#E5E7EB] group-hover:bg-[#E8590C]/20 transition-colors duration-400 my-2" />}
                </div>
                <div className="pb-16 pt-1">
                  <div className="text-[11px] font-black text-[#9CA3AF] group-hover:text-[#E8590C] uppercase tracking-[0.2em] mb-2 transition-colors duration-400">Step {s.num}</div>
                  <h3 className="text-[22px] md:text-[26px] font-black text-[#0A0A0A] mb-3 group-hover:text-[#E8590C] transition-colors duration-400">{s.title}</h3>
                  <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-[1.6] max-w-md">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="site max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-[36px] font-black text-[#0A0A0A] mb-6">Why a one-time license?</h2>
              <p className="text-[#6B7280] text-[18px] leading-relaxed font-medium">Business software should be an asset you own, not a subscription trap.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-5">
              {bens.map((b, i) => (
                <motion.div key={b} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-[#E8590C] transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-[#E8590C] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[16px] text-[#0A0A0A] font-medium pt-1">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0A0A0A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="site max-w-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[36px] font-black text-white mb-6">Ready to get started?</h2>
            <p className="text-white/50 text-[18px] mb-10 font-medium">Book a free demo and our team will walk you through.</p>
            <Link href="/contact" className="bg-[#E8590C] text-white text-[14px] font-bold uppercase tracking-[0.08em] px-10 py-4 rounded-full shadow-lg shadow-[rgba(232,89,12,0.2)] hover:bg-[#D14D0A] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-block">Book a Free Demo</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
