'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ChevronDown, ArrowRight } from 'lucide-react';
import { features, featureCategories } from '@/lib/data/features';
import Link from 'next/link';

export default function FeaturesPage() {
  const [cat, setCat] = useState('all');
  const [exp, setExp] = useState<number|null>(null);
  const list = cat==='all' ? features : features.filter(f=>f.category===cat);

  return (
    <>
      <section className="hero-warm pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border">
        <div className="site max-w-3xl"><div className="pill-tag mb-6">All Features</div>
          <h1 className="text-[clamp(36px,5vw,52px)] font-bold text-heading leading-[1.08] tracking-tight mb-5">Everything your business <span className="text-grad">needs</span></h1>
          <p className="text-body text-[16px] max-w-xl">13+ powerful features for billing, inventory, staff management, and reporting.</p>
        </div>
      </section>
      <section className="py-16 bg-cream">
        <div className="site">
          <div className="flex flex-wrap gap-2 mb-10">
            {featureCategories.map(c=>(
              <button key={c.key} onClick={()=>setCat(c.key)} className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all cursor-pointer ${cat===c.key?'bg-gradient-to-r from-flame to-flame-light text-white shadow-md shadow-flame/15':'bg-white text-body border border-border hover:border-flame/30'}`}>{c.label}</button>
            ))}
          </div>
          <div className="space-y-3">
            <AnimatePresence mode="wait">
              {list.map(f=>{const open=exp===f.id; return (
                <motion.div key={f.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={`bg-white border rounded-2xl overflow-hidden transition-all ${open?'border-flame shadow-sm':'border-border'}`}>
                  <button onClick={()=>setExp(open?null:f.id)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${f.included?'bg-green-bg':'bg-gray-100'}`}>{f.included?<Check className="w-4 h-4 text-green"/>:<Plus className="w-4 h-4 text-muted"/>}</div>
                      <div><h3 className="text-[15px] font-semibold text-heading">{f.name}</h3><span className={`text-[12px] font-medium ${f.included?'text-green':'text-muted'}`}>{f.included?'Included':'Add-on'}</span></div>
                    </div>
                    <div className="flex items-center gap-4"><span className="text-[14px] font-bold text-flame hidden sm:block">{f.price}</span><ChevronDown className={`w-5 h-5 text-muted transition-transform ${open?'rotate-180':''}`}/></div>
                  </button>
                  <AnimatePresence>{open&&(<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><div className="px-5 pb-5 pl-16 border-t border-border pt-4"><p className="text-body text-[14px] leading-relaxed">{f.description}</p></div></motion.div>)}</AnimatePresence>
                </motion.div>
              );})}
            </AnimatePresence>
          </div>
          <div className="text-center mt-14"><Link href="/pricing" className="btn-flame">See Pricing <ArrowRight className="w-4 h-4"/></Link></div>
        </div>
      </section>
    </>
  );
}
