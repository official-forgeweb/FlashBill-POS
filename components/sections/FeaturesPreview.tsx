'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { features } from '@/lib/data/features';
import Link from 'next/link';

export default function FeaturesPreview() {
  const preview = features.slice(0, 6);
  return (
    <section className="py-28 bg-[#F5F5F7] relative overflow-hidden border-y border-[#E5E7EB]">
      <div className="site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-5">
            ● CAPABILITIES
          </span>
          <h2 className="text-[clamp(30px,4.5vw,46px)] font-black text-[#0A0A0A] leading-tight">
            Explore all{' '}
            <span
              className="text-[#E8590C] font-medium"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              features
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {preview.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card bg-white p-7 group"
            >
              <span
                className={`text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${
                  f.included
                    ? 'bg-[#FFF7ED] text-[#E8590C]'
                    : 'bg-[#F3F4F6] text-[#6B7280]'
                }`}
              >
                {f.included ? 'Included' : 'Add-on'}
              </span>

              <h3 className="text-[18px] font-bold text-[#0A0A0A] mt-6 mb-3">{f.name}</h3>
              <p className="text-[15px] text-[#6B7280] leading-relaxed mb-6">{f.description}</p>

              <div className="flex items-center justify-between pt-5 border-t border-[#E5E7EB]">
                <p className="text-[15px] font-bold text-[#E8590C]">{f.price}</p>
                <ArrowRight className="w-5 h-5 text-[#D1D5DB] group-hover:text-[#E8590C] group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-[#E8590C] font-bold text-[15px] uppercase tracking-[0.1em] hover:gap-3 transition-all duration-300 group"
          >
            View all 13+ features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
