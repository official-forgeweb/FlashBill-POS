'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ChevronDown } from 'lucide-react';
import { features, featureCategories } from '@/lib/data/features';
import Link from 'next/link';

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = activeCategory === 'all' ? features : features.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-border">
        <div className="container-site max-w-3xl">
          <div className="tag mb-6">All Features</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight text-heading mb-4">
            Everything your business needs, built in
          </h1>
          <p className="text-body text-[16px] leading-relaxed max-w-xl">
            13+ powerful features for billing, inventory, staff management, and reporting — all working offline.
          </p>
        </div>
      </section>

      {/* Filter + List */}
      <section className="py-16 bg-bg-soft">
        <div className="container-site">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {featureCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-accent text-white'
                    : 'bg-white text-body border border-border hover:border-muted'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-3">
            <AnimatePresence mode="wait">
              {filtered.map((feature) => {
                const isExpanded = expandedId === feature.id;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`bg-white border rounded-xl overflow-hidden transition-all ${
                      isExpanded ? 'border-accent shadow-sm' : 'border-border'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : feature.id)}
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          feature.included ? 'bg-green-50' : 'bg-gray-100'
                        }`}>
                          {feature.included ? <Check className="w-4 h-4 text-green-600" /> : <Plus className="w-4 h-4 text-muted" />}
                        </div>
                        <div>
                          <h3 className="text-[15px] font-semibold text-heading">{feature.name}</h3>
                          <span className={`text-[12px] font-medium ${feature.included ? 'text-green-600' : 'text-muted'}`}>
                            {feature.included ? 'Included' : 'Add-on'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[14px] font-semibold text-heading hidden sm:block">{feature.price}</span>
                        <ChevronDown className={`w-5 h-5 text-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0">
                            <div className="pl-11 border-t border-border pt-4">
                              <p className="text-body text-[14px] leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link href="/pricing" className="btn-accent">
              See pricing plans →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
