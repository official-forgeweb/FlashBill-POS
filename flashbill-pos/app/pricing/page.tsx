'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { pricingPlans, addOns, pricingFAQs } from '@/lib/data/pricing';
import { features } from '@/lib/data/features';
import Link from 'next/link';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-border">
        <div className="container-site max-w-3xl text-center">
          <div className="tag justify-center mb-6">Pricing</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight text-heading mb-4">
            Simple, honest, one-time pricing
          </h1>
          <p className="text-body text-[16px] leading-relaxed max-w-xl mx-auto">
            No subscriptions. No hidden fees. Pay once and own FlashBill forever.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-bg-soft">
        <div className="container-site max-w-[960px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`bg-white rounded-xl p-7 flex flex-col ${
                  plan.popular
                    ? 'border-2 border-accent shadow-lg relative'
                    : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-[18px] font-semibold text-heading mb-1">{plan.name}</h3>
                <div className="text-[36px] font-bold text-heading tracking-tight mb-1">{plan.price}</div>
                <p className="text-[12px] text-muted mb-2">{plan.priceNote}</p>
                <p className="text-[14px] text-body mb-6 leading-relaxed">{plan.description}</p>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-[14px] text-body">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={`w-full text-center py-3 rounded-md text-[14px] font-semibold ${
                  plan.popular ? 'btn-accent justify-center' : 'btn-outline justify-center'
                }`}>
                  {plan.ctaText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container-site max-w-[960px]">
          <h2 className="text-[24px] font-bold text-heading text-center mb-10">Feature comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-bg-soft">
                  <th className="py-3 px-5 text-[12px] font-semibold text-muted uppercase tracking-wider">Feature</th>
                  <th className="py-3 px-4 text-center text-[12px] font-semibold text-muted uppercase tracking-wider">Basic</th>
                  <th className="py-3 px-4 text-center text-[12px] font-semibold text-accent uppercase tracking-wider">Standard</th>
                  <th className="py-3 px-4 text-center text-[12px] font-semibold text-muted uppercase tracking-wider">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {features.map((f) => (
                  <tr key={f.id}>
                    <td className="py-3 px-5 text-[13px] font-medium text-heading">{f.name}</td>
                    <td className="py-3 px-4 text-center">{f.included ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <span className="text-muted">—</span>}</td>
                    <td className="py-3 px-4 text-center bg-accent/[0.02]">{f.included || ['management','reporting'].includes(f.category) ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <span className="text-muted">—</span>}</td>
                    <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-bg-soft">
        <div className="container-site max-w-[960px]">
          <h2 className="text-[24px] font-bold text-heading mb-8">Add-on modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((a) => (
              <div key={a.name} className="flex items-center justify-between p-4 bg-white border border-border rounded-lg">
                <span className="text-[14px] font-medium text-heading">{a.name}</span>
                <span className="text-[14px] font-semibold text-accent">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-[700px]">
          <h2 className="text-[24px] font-bold text-heading text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-3">
            {pricingFAQs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl bg-white overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                  <span className="text-[15px] font-semibold text-heading pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-muted transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-body text-[14px] leading-relaxed">{faq.answer}</p>
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
