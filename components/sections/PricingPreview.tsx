'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/lib/data/pricing';
import Link from 'next/link';

export default function PricingPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="site">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
          <div className="pill-tag mb-4 mx-auto w-fit">Pricing</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-heading leading-tight mb-4">Simple, <span className="text-grad">one-time</span> pricing</h2>
          <p className="text-body text-[16px] max-w-xl mx-auto">No subscriptions. No hidden fees. Pay once, own forever.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1*i }}
              className={`rounded-2xl p-7 flex flex-col ${plan.popular ? 'bg-gradient-to-br from-flame to-flame-light text-white shadow-2xl shadow-flame/20 relative scale-100 lg:scale-105' : 'bg-white border border-border shadow-sm'}`}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-flame text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">Most Popular</span>}
              <h3 className={`text-[18px] font-semibold mb-1 ${plan.popular ? 'text-white' : ''}`}>{plan.name}</h3>
              <div className={`text-[36px] font-bold tracking-tight mb-1 ${plan.popular ? 'text-white' : ''}`}>{plan.price}</div>
              <p className={`text-[12px] mb-6 ${plan.popular ? 'text-white/60' : 'text-muted'}`}>{plan.priceNote}</p>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? 'text-white/80' : 'text-flame'}`} />
                    <span className={`text-[14px] ${plan.popular ? 'text-white/80' : 'text-body'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`w-full text-center py-3 rounded-full text-[14px] font-semibold transition-all ${plan.popular ? 'bg-white text-flame hover:shadow-lg' : 'border border-border hover:border-flame hover:text-flame'}`}>{plan.ctaText}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
