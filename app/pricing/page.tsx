'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Crown } from 'lucide-react';
import { pricingPlans, addOns, pricingFAQs } from '@/lib/data/pricing';
import { features } from '@/lib/data/features';
import Link from 'next/link';
import PricingPreloader from '@/components/ui/PricingPreloader';

export default function PricingPage() {
  const [faq, setFaq] = useState<number | null>(null);
  return (
    <>
      <PricingPreloader />
      <section className="min-h-[50vh] flex items-center justify-center bg-white relative pt-[72px] overflow-hidden">
        {/* Decorative background grid and glow */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.05] blur-[100px] pointer-events-none" />
        
        <div className="site max-w-3xl mx-auto relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">● PRICING PLANS</span>
            <h1 className="text-[clamp(36px,5vw,56px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
              Simple, honest{' '}
              <span className="text-[#E8590C] font-medium block md:inline-block" style={{ fontFamily: 'var(--font-caveat), cursive', fontStyle: 'normal' }}>one-time pricing</span>
            </h1>
            <p className="text-[#6B7280] text-[18px] max-w-xl mx-auto font-medium">No subscriptions. No hidden fees. Pay once, own forever.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F7] border-t border-[#E5E7EB]">
        <div className="site max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            {pricingPlans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-[24px] p-8 flex flex-col relative group transition-all duration-500 ${
                  p.popular
                    ? 'bg-[#0A0A0A] text-white py-12 scale-100 lg:scale-105 z-10 shadow-[0_30px_60px_-15px_rgba(232,89,12,0.2)] border border-[#E8590C]/20'
                    : 'bg-[#FAFAFA] border border-[#E5E7EB] hover:bg-white hover:border-[#E8590C]/30 hover:shadow-[0_20px_40px_-10px_rgba(232,89,12,0.1)] hover:-translate-y-1 z-0'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#E8590C] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-md">
                    <Crown className="w-3.5 h-3.5" /> Popular
                  </span>
                )}
                <h3 className={`text-[20px] font-bold mb-2 ${p.popular ? 'text-white' : 'text-[#0A0A0A]'}`}>{p.name}</h3>
                <div className={`text-[44px] font-black tracking-tight mb-1 ${p.popular ? 'text-white' : 'text-[#0A0A0A]'}`}>{p.price}</div>
                <p className={`text-[13px] mb-4 font-medium uppercase tracking-[0.1em] ${p.popular ? 'text-white/40' : 'text-[#6B7280]'}`}>{p.priceNote}</p>
                <p className={`text-[15px] mb-8 leading-relaxed ${p.popular ? 'text-white/60' : 'text-[#6B7280]'}`}>{p.description}</p>
                <ul className="space-y-4 flex-1 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                        p.popular ? 'bg-[#E8590C] text-white' : 'bg-[#FFF7ED] text-[#E8590C]'
                      }`}><Check className="w-3.5 h-3.5" /></div>
                      <span className={`text-[15px] ${p.popular ? 'text-white/70' : 'text-[#6B7280]'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full text-center py-4 rounded-full text-[14px] font-bold uppercase tracking-[0.05em] transition-all duration-300 block ${
                  p.popular
                    ? 'bg-[#E8590C] text-white hover:bg-[#D14D0A] shadow-lg shadow-[rgba(232,89,12,0.3)]'
                    : 'bg-white border-2 border-[#E5E7EB] text-[#6B7280] hover:border-[#E8590C] hover:text-[#E8590C]'
                }`}>{p.ctaText}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="site max-w-[1000px]">
          <h2 className="text-[32px] font-black text-[#0A0A0A] text-center mb-12">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-sm">
            <table className="light-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="text-center">Basic</th>
                  <th className="text-center text-[#E8590C]">Standard</th>
                  <th className="text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                {features.map(f => (
                  <tr key={f.id}>
                    <td className="font-semibold">{f.name}</td>
                    <td className="text-center">{f.included ? <Check className="w-5 h-5 text-[#E8590C] mx-auto" /> : <span className="text-[#D1D5DB]">—</span>}</td>
                    <td className="text-center bg-[#FFF7ED]/30">{f.included || ['management', 'reporting'].includes(f.category) ? <Check className="w-5 h-5 text-[#E8590C] mx-auto" /> : <span className="text-[#D1D5DB]">—</span>}</td>
                    <td className="text-center"><Check className="w-5 h-5 text-[#E8590C] mx-auto" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA] border-y border-[#E5E7EB]">
        <div className="site max-w-[1000px]">
          <h2 className="text-[32px] font-black text-[#0A0A0A] mb-10 text-center">Add-on Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOns.map(a => (
              <div key={a.name} className="flex items-center justify-between p-6 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#E8590C]/30 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-[16px] font-semibold text-[#0A0A0A]">{a.name}</span>
                <span className="text-[16px] font-bold text-[#E8590C]">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="site max-w-[800px]">
          <h2 className="text-[32px] font-black text-[#0A0A0A] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {pricingFAQs.map((q, i) => (
              <div key={i} className={`group bg-[#FAFAFA] border rounded-[20px] overflow-hidden transition-all duration-400 ${
                faq === i ? 'bg-white border-[#E8590C]/50 shadow-[0_20px_40px_-10px_rgba(232,89,12,0.15)] scale-[1.01]' : 'border-[#E5E7EB] hover:bg-white hover:border-[#E8590C]/30 hover:shadow-[0_15px_35px_-10px_rgba(232,89,12,0.1)] hover:-translate-y-0.5'
              }`}>
                <button onClick={() => setFaq(faq === i ? null : i)} className="w-full flex items-center justify-between p-6 md:p-7 text-left cursor-pointer">
                  <span className="text-[17px] font-bold text-[#0A0A0A] pr-4 group-hover:text-[#E8590C] transition-colors duration-300">{q.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${faq === i ? 'bg-[#FFF7ED]' : 'bg-[#F3F4F6] group-hover:bg-[#E8590C]'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${faq === i ? 'rotate-180 text-[#E8590C]' : 'text-[#9CA3AF] group-hover:text-white'}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {faq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                      <div className="px-6 md:px-7 pb-7 border-t border-[#E5E7EB]/50 pt-5 relative">
                        {/* Decorative blur in expanded state */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE4E6]/40 via-[#FFF7ED]/40 to-transparent opacity-100 rounded-full blur-xl pointer-events-none" />
                        <p className="text-[#6B7280] text-[15px] leading-[1.6] relative z-10">{q.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
