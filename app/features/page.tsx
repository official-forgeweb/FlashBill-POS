'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ChevronDown, ArrowRight } from 'lucide-react';
import { features, featureCategories } from '@/lib/data/features';
import Link from 'next/link';

export default function FeaturesPage() {
  const [cat, setCat] = useState('all');
  const [exp, setExp] = useState<number | null>(null);
  const list = cat === 'all' ? features : features.filter(f => f.category === cat);

  return (
    <>
      <section className="min-h-[50vh] flex items-center justify-center bg-grid relative pt-[72px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.03] blur-[100px] pointer-events-none" />
        <div className="site max-w-3xl relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">● FEATURES</span>
            <h1 className="text-[clamp(36px,5vw,52px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
              Everything your business{' '}
              <span className="text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>needs</span>
            </h1>
            <p className="text-[#6B7280] text-[18px] max-w-xl mx-auto font-medium">
              13+ powerful features for billing, inventory, staff management, and reporting.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F7] border-t border-[#E5E7EB]">
        <div className="site max-w-[800px]">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3 mb-10 justify-center">
            {featureCategories.map(c => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-[0.05em] transition-all duration-300 cursor-pointer ${
                  cat === c.key
                    ? 'bg-[#E8590C] text-white shadow-md shadow-[rgba(232,89,12,0.2)]'
                    : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#E8590C] hover:text-[#E8590C]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </motion.div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {list.map(f => {
                const open = exp === f.id;
                return (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                    className={`bg-white border rounded-2xl overflow-hidden transition-all duration-400 ${
                      open ? 'border-[#E8590C] shadow-[0_10px_30px_rgba(232,89,12,0.08)]' : 'border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-sm'
                    }`}
                  >
                    <button onClick={() => setExp(open ? null : f.id)} className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          f.included ? 'bg-[#FFF7ED] text-[#E8590C]' : 'bg-[#F3F4F6] text-[#9CA3AF]'
                        }`}>
                          {f.included ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="text-[16px] font-bold text-[#0A0A0A]">{f.name}</h3>
                          <span className={`text-[12px] font-bold uppercase tracking-[0.1em] ${f.included ? 'text-[#E8590C]' : 'text-[#6B7280]'}`}>
                            {f.included ? 'Included' : 'Add-on'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[15px] font-bold text-[#E8590C] hidden sm:block">{f.price}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180 text-[#E8590C]' : 'text-[#9CA3AF]'}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-[72px] border-t border-[#E5E7EB] pt-5">
                            <p className="text-[#6B7280] text-[15px] leading-relaxed">{f.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="text-center mt-16">
            <Link href="/pricing" className="btn-blue">See Pricing <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
