'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ChevronDown, ArrowRight } from 'lucide-react';
import { features, featureCategories } from '@/lib/data/features';
import Link from 'next/link';
import FeaturesPreloader from '@/components/ui/FeaturesPreloader';

export default function FeaturesPage() {
  const [cat, setCat] = useState('all');
  const [exp, setExp] = useState<number | null>(null);
  const list = cat === 'all' ? features : features.filter(f => f.category === cat);

  return (
    <>
      <FeaturesPreloader />
      <section className="min-h-[50vh] flex items-center justify-center bg-white relative pt-[72px] overflow-hidden">
        {/* Decorative background grid and glow */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.05] blur-[100px] pointer-events-none" />
        
        <div className="site max-w-3xl relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">● EXPLORE THE SYSTEM</span>
            <h1 className="text-[clamp(36px,5vw,56px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
              Everything your business{' '}
              <span className="text-[#E8590C] font-medium block md:inline-block" style={{ fontFamily: 'var(--font-caveat), cursive', fontStyle: 'normal' }}>needs</span>
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
                    className={`group bg-[#FAFAFA] border rounded-[20px] overflow-hidden transition-all duration-400 ${
                      open ? 'bg-white border-[#E8590C]/50 shadow-[0_20px_40px_-10px_rgba(232,89,12,0.15)] scale-[1.01]' : 'border-[#E5E7EB] hover:bg-white hover:border-[#E8590C]/30 hover:shadow-[0_15px_35px_-10px_rgba(232,89,12,0.1)] hover:-translate-y-0.5'
                    }`}
                  >
                    <button onClick={() => setExp(open ? null : f.id)} className="w-full flex items-center justify-between p-5 md:p-7 text-left cursor-pointer">
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-[14px] border flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${
                          f.included ? 'bg-[#FFF7ED] text-[#E8590C] border-[#E8590C]/20' : 'bg-white text-[#9CA3AF] border-[#E5E7EB] group-hover:border-[#E8590C]/20 group-hover:text-[#E8590C]'
                        }`}>
                          {f.included ? <Check className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                        </div>
                        <div>
                          <h3 className="text-[17px] font-bold text-[#0A0A0A] group-hover:text-[#E8590C] transition-colors duration-300">{f.name}</h3>
                          <span className={`text-[10px] font-bold uppercase tracking-[0.15em] mt-1 inline-block ${f.included ? 'text-[#E8590C]' : 'text-[#9CA3AF]'}`}>
                            {f.included ? 'Included' : 'Add-on'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <span className="text-[18px] font-black text-[#0A0A0A] hidden sm:block">{f.price}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${open ? 'bg-[#FFF7ED]' : 'bg-[#F3F4F6] group-hover:bg-[#E8590C]'}`}>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180 text-[#E8590C]' : 'text-[#9CA3AF] group-hover:text-white'}`} />
                        </div>
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
                          <div className="px-5 md:px-7 pb-7 pl-[88px] border-t border-[#E5E7EB]/50 pt-5 relative">
                            {/* Decorative blur in expanded state */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE4E6]/40 via-[#FFF7ED]/40 to-transparent opacity-100 rounded-full blur-xl pointer-events-none" />
                            <p className="text-[#6B7280] text-[14px] leading-[1.6] max-w-2xl relative z-10">{f.description}</p>
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
