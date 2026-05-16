'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { features } from '@/lib/data/features';
import Link from 'next/link';

export default function FeaturesPreview() {
  const preview = features.slice(0, 6);
  return (
    <section className="py-20 bg-amber-soft border-y border-border">
      <div className="site">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
          <div className="pill-tag mb-4 mx-auto w-fit">Modules</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-heading leading-tight mb-4">
            Explore all <span className="text-grad">features</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {preview.map((f, i) => (
            <motion.div key={f.id} initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.06*i }}
              className="card p-6">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${f.included ? 'bg-green-bg text-green' : 'bg-gray-100 text-muted'}`}>
                {f.included ? 'Included' : 'Add-on'}
              </span>
              <h3 className="text-[17px] font-semibold text-heading mt-4 mb-2">{f.name}</h3>
              <p className="text-[14px] text-body leading-relaxed mb-4">{f.description}</p>
              <p className="text-[14px] font-bold text-flame">{f.price}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/features" className="inline-flex items-center gap-2 text-flame font-semibold text-[14px] hover:gap-3 transition-all">View all 13+ features <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  );
}
