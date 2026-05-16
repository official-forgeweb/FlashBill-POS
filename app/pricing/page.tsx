'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Crown } from 'lucide-react';
import { pricingPlans, addOns, pricingFAQs } from '@/lib/data/pricing';
import { features } from '@/lib/data/features';
import Link from 'next/link';

export default function PricingPage() {
  const [faq, setFaq] = useState<number | null>(null);
  return (
    <>
      <section className="min-h-[50vh] flex items-center justify-center bg-grid relative pt-[72px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.03] blur-[100px] pointer-events-none" />
        <div className="site max-w-3xl mx-auto relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">● PRICING</span>
            <h1 className="text-[clamp(36px,5vw,52px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
              Simple, honest{' '}
              <span className="text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>one-time pricing</span>
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
                className={`rounded-2xl p-8 flex flex-col relative group transition-all duration-400 ${
                  p.popular
                    ? 'bg-[#0A0A0A] text-white py-12 scale-100 lg:scale-105 z-10 shadow-2xl'
                    : 'bg-white border border-[#E5E7EB] hover:border-[#E8590C]/30 hover:shadow-lg z-0'
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

      <section className="py-16 bg-[#F5F5F7] border-y border-[#E5E7EB]">
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
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                faq === i ? 'border-[#E8590C] bg-[#FFF7ED]/20 shadow-sm' : 'border-[#E5E7EB] bg-white hover:border-[#D1D5DB]'
              }`}>
                <button onClick={() => setFaq(faq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left cursor-pointer">
                  <span className="text-[16px] font-bold text-[#0A0A0A] pr-4">{q.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${faq === i ? 'rotate-180 text-[#E8590C]' : 'text-[#9CA3AF]'}`} />
                </button>
                <AnimatePresence>
                  {faq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                      <p className="px-6 pb-6 text-[#6B7280] text-[15px] leading-relaxed border-t border-[#E5E7EB] pt-4">{q.answer}</p>
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
