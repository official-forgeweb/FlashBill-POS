'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/lib/data/pricing';
import Link from 'next/link';

export default function PricingPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">Simple, one-time pricing</h2>
          <p className="section-sub mx-auto">
            No subscriptions. No hidden fees. Pay once and own FlashBill forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`rounded-xl p-7 flex flex-col ${
                plan.popular
                  ? 'border-2 border-accent bg-white shadow-lg relative'
                  : 'border border-border bg-white'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-[18px] font-semibold text-heading mb-1">{plan.name}</h3>
              <div className="text-[36px] font-bold text-heading tracking-tight mb-1">{plan.price}</div>
              <p className="text-[12px] text-muted mb-6">{plan.priceNote}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-[14px] text-body">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full text-center py-3 rounded-md text-[14px] font-semibold transition-colors ${
                  plan.popular
                    ? 'btn-accent justify-center'
                    : 'btn-outline justify-center'
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
