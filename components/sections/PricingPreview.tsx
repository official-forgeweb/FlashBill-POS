'use client';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { pricingPlans } from '@/lib/data/pricing';
import Link from 'next/link';

export default function PricingPreview() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-5">
            ● PRICING
          </span>
          <h2 className="text-[clamp(30px,4.5vw,46px)] font-black text-[#0A0A0A] leading-tight mb-4">
            Simple,{' '}
            <span
              className="text-[#E8590C] font-medium"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              one-time
            </span>{' '}
            pricing
          </h2>
          <p className="text-[#6B7280] text-[16px] max-w-xl mx-auto">
            No subscriptions. No hidden fees. Pay once, own forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto items-center">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-8 flex flex-col relative group transition-all duration-400 ${
                plan.popular
                  ? 'bg-[#0A0A0A] text-white py-12 scale-100 lg:scale-105 z-10 shadow-2xl'
                  : 'bg-white border border-[#E5E7EB] hover:border-[#E8590C]/30 hover:shadow-lg z-0'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#E8590C] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-md">
                  <Crown className="w-3.5 h-3.5" /> Popular
                </span>
              )}

              <h3 className={`text-[20px] font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#0A0A0A]'}`}>
                {plan.name}
              </h3>
              <div className={`text-[44px] font-black tracking-tight mb-1 ${plan.popular ? 'text-white' : 'text-[#0A0A0A]'}`}>
                {plan.price}
              </div>
              <p className={`text-[13px] mb-8 font-medium ${plan.popular ? 'text-white/50' : 'text-[#6B7280]'}`}>
                {plan.priceNote}
              </p>

              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                      plan.popular ? 'bg-[#E8590C] text-white' : 'bg-[#FFF7ED] text-[#E8590C]'
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-[15px] ${plan.popular ? 'text-white/70' : 'text-[#6B7280]'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full text-center py-4 rounded-full text-[14px] font-bold uppercase tracking-[0.05em] transition-all duration-300 block ${
                  plan.popular
                    ? 'bg-[#E8590C] text-white hover:bg-[#D14D0A] shadow-lg shadow-[rgba(232,89,12,0.3)] hover:-translate-y-0.5'
                    : 'bg-white border-2 border-[#E5E7EB] text-[#6B7280] hover:border-[#E8590C] hover:text-[#E8590C]'
                }`}
              >
                {plan.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
