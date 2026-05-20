'use client';

import { motion } from 'framer-motion';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const CATEGORIES = ['all', 'guides', 'tips', 'industry', 'seo-articles', 'updates'] as const;

const CATEGORY_TAB_LABELS: Record<string, string> = {
  all: 'All',
  guides: 'Guides',
  tips: 'Tips',
  industry: 'Industry',
  'seo-articles': 'SEO Articles',
  updates: 'Updates',
};

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-none"
    >
      {CATEGORIES.map((cat, i) => (
        <motion.button
          key={cat}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => onCategoryChange(cat)}
          className={`relative px-5 py-2 rounded-full text-[13px] font-semibold cursor-pointer transition-colors duration-200 whitespace-nowrap ${
            activeCategory === cat
              ? 'text-white'
              : 'bg-[#F5F5F7] text-[#6B7280] hover:text-[#0A0A0A]'
          }`}
        >
          {activeCategory === cat && (
            <motion.div
              layoutId="category-indicator"
              className="absolute inset-0 bg-[#E8590C] rounded-full"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{CATEGORY_TAB_LABELS[cat]}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}
