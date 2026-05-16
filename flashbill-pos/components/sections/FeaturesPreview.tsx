'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { features } from '@/lib/data/features';
import Link from 'next/link';

export default function FeaturesPreview() {
  const preview = features.slice(0, 6);

  return (
    <section className="py-20 bg-bg-soft border-y border-border">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">Explore all features</h2>
          <p className="section-sub mx-auto">
            From billing to reporting, FlashBill packs everything a modern business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {preview.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  f.included
                    ? 'bg-green-50 text-green-600'
                    : 'bg-gray-100 text-muted'
                }`}>
                  {f.included ? 'Included' : 'Add-on'}
                </span>
                <span className="text-[13px] font-semibold text-heading">{f.price}</span>
              </div>
              <h3 className="text-[16px] font-semibold text-heading mb-2">{f.name}</h3>
              <p className="text-[14px] text-body leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/features" className="inline-flex items-center gap-2 text-accent font-semibold text-[14px] hover:gap-3 transition-all">
            View all 13+ features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
