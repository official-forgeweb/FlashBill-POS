'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { pricingPlans, addOns, pricingFAQs } from '@/lib/data/pricing';
import { features } from '@/lib/data/features';
import Link from 'next/link';

export default function PricingPage() {
  const [faq, setFaq] = useState<number|null>(null);
  return (
    <>
      <section className="hero-warm pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border text-center">
        <div className="site max-w-3xl mx-auto"><div className="pill-tag mb-6 mx-auto w-fit">Pricing</div>
          <h1 className="text-[clamp(36px,5vw,52px)] font-bold text-heading leading-[1.08] tracking-tight mb-5">Simple, honest <span className="text-grad">one-time pricing</span></h1>
          <p className="text-body text-[16px] max-w-xl mx-auto">No subscriptions. No hidden fees. Pay once, own forever.</p>
        </div>
      </section>
      <section className="py-16 bg-cream">
        <div className="site max-w-[960px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((p,i)=>(
              <motion.div key={p.name} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1*i}}
                className={`rounded-2xl p-7 flex flex-col ${p.popular?'bg-gradient-to-br from-flame to-flame-light text-white shadow-2xl shadow-flame/20 relative scale-100 lg:scale-105':'bg-white border border-border shadow-sm'}`}>
                {p.popular&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-flame text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow">Popular</span>}
                <h3 className={`text-[18px] font-semibold mb-1 ${p.popular?'text-white':''}`}>{p.name}</h3>
                <div className={`text-[36px] font-bold tracking-tight mb-1 ${p.popular?'text-white':''}`}>{p.price}</div>
                <p className={`text-[12px] mb-2 ${p.popular?'text-white/60':'text-muted'}`}>{p.priceNote}</p>
                <p className={`text-[14px] mb-6 leading-relaxed ${p.popular?'text-white/70':'text-body'}`}>{p.description}</p>
                <ul className="space-y-3 flex-1 mb-8">{p.features.map(f=><li key={f} className="flex items-start gap-2.5"><Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular?'text-white/80':'text-flame'}`}/><span className={`text-[14px] ${p.popular?'text-white/80':'text-body'}`}>{f}</span></li>)}</ul>
                <Link href="/contact" className={`w-full text-center py-3 rounded-full text-[14px] font-semibold ${p.popular?'bg-white text-flame hover:shadow-lg':'border border-border hover:border-flame hover:text-flame'}`}>{p.ctaText}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-y border-border">
        <div className="site max-w-[960px]">
          <h2 className="text-[24px] font-bold text-heading text-center mb-10">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left"><thead><tr className="border-b border-border bg-cream"><th className="py-3 px-5 text-[12px] font-semibold text-muted uppercase">Feature</th><th className="py-3 px-4 text-center text-[12px] font-semibold text-muted uppercase">Basic</th><th className="py-3 px-4 text-center text-[12px] font-semibold text-flame uppercase">Standard</th><th className="py-3 px-4 text-center text-[12px] font-semibold text-muted uppercase">Premium</th></tr></thead>
            <tbody className="divide-y divide-border">{features.map(f=><tr key={f.id}><td className="py-3 px-5 text-[13px] font-medium text-heading">{f.name}</td><td className="py-3 px-4 text-center">{f.included?<Check className="w-4 h-4 text-green mx-auto"/>:<span className="text-muted">—</span>}</td><td className="py-3 px-4 text-center bg-flame/[0.02]">{f.included||['management','reporting'].includes(f.category)?<Check className="w-4 h-4 text-green mx-auto"/>:<span className="text-muted">—</span>}</td><td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-green mx-auto"/></td></tr>)}</tbody></table>
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream"><div className="site max-w-[960px]"><h2 className="text-[24px] font-bold text-heading mb-8">Add-on Modules</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{addOns.map(a=><div key={a.name} className="flex items-center justify-between p-4 bg-white border border-border rounded-xl hover:border-flame/20 transition-all"><span className="text-[14px] font-medium text-heading">{a.name}</span><span className="text-[14px] font-bold text-flame">{a.price}</span></div>)}</div></div></section>
      <section className="py-16 bg-white"><div className="site max-w-[700px]"><h2 className="text-[24px] font-bold text-heading text-center mb-10">Frequently Asked Questions</h2><div className="space-y-3">{pricingFAQs.map((q,i)=><div key={i} className="border border-border rounded-2xl bg-white overflow-hidden"><button onClick={()=>setFaq(faq===i?null:i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer"><span className="text-[15px] font-semibold text-heading pr-4">{q.question}</span><ChevronDown className={`w-5 h-5 text-muted transition-transform shrink-0 ${faq===i?'rotate-180':''}`}/></button><AnimatePresence>{faq===i&&<motion.div initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} className="overflow-hidden"><p className="px-5 pb-5 text-body text-[14px] leading-relaxed">{q.answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
    </>
  );
}
