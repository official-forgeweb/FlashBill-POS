"use client";

import { motion } from "framer-motion";
import { FAQCategory } from "@/lib/data/faqData";

interface FAQCategoryTabsProps {
  categories: { id: FAQCategory; label: string }[];
  activeCategory: FAQCategory;
  onSelect: (category: FAQCategory) => void;
}

export function FAQCategoryTabs({ categories, activeCategory, onSelect }: FAQCategoryTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`relative px-4 py-2 text-sm font-mono transition-colors rounded-full outline-none ${
              isActive ? "text-[#fafafa]" : "text-[#a1a1aa] hover:text-[#e8590c]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#e8590c] rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
