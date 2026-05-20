"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  popular?: boolean;
}

export function FAQAccordionItem({ question, answer, isOpen, onClick, popular }: FAQAccordionItemProps) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-3 pr-4">
          <span className="text-lg font-medium text-[#fafafa] group-hover:text-[#e8590c] transition-colors">
            {question}
          </span>
          {popular && (
            <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono bg-[#e8590c]/10 text-[#e8590c] rounded border border-[#e8590c]/20 whitespace-nowrap">
              Popular
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-[#a1a1aa] group-hover:bg-[#e8590c]/10 group-hover:text-[#e8590c]"
        >
          <Plus size={18} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-[#a1a1aa] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
