"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqData, FAQCategory } from "@/lib/data/faqData";
import { FAQCategoryTabs } from "@/components/ui/FAQCategoryTabs";
import { FAQAccordionItem } from "@/components/ui/FAQAccordionItem";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES: { id: FAQCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "technical", label: "Technical" },
  { id: "pricing", label: "Pricing" },
  { id: "support", label: "Support" },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const baseFilteredFaqs = faqData.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  const isAllCategory = activeCategory === "all";
  const shouldLimit = isAllCategory && !showAll;
  const filteredFaqs = shouldLimit ? baseFilteredFaqs.slice(0, 5) : baseFilteredFaqs;
  const hasMore = isAllCategory && baseFilteredFaqs.length > 5 && !showAll;

  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-3 py-1 mb-6 rounded-sm bg-white/5 border border-white/10">
                  <span className="text-xs font-mono tracking-widest text-[#a1a1aa] uppercase">
                    <span className="text-[#e8590c] mr-2">●</span>
                    FAQ
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-semibold text-[#fafafa] tracking-tight mb-6">
                  Got questions? <br />
                  <span className="text-[#a1a1aa]">We've got answers.</span>
                </h2>
                
                <p className="text-[#a1a1aa] text-lg mb-10 leading-relaxed">
                  Everything you need to know about FlashBill POS, from offline capabilities to pricing structure.
                </p>
                
                <FAQCategoryTabs 
                  categories={CATEGORIES}
                  activeCategory={activeCategory}
                  onSelect={(cat) => {
                    setActiveCategory(cat);
                    setOpenId(null);
                    setShowAll(false);
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <div className="flex flex-col">
                {filteredFaqs.length > 0 ? (
                  <>
                    {filteredFaqs.map((faq) => (
                      <FAQAccordionItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        popular={faq.popular}
                        isOpen={openId === faq.id}
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                      />
                    ))}
                    {hasMore && (
                      <div className="pt-6 pb-2 text-center">
                        <button 
                          onClick={() => setShowAll(true)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 text-[#fafafa] border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
                        >
                          View more FAQs
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-12 text-center text-[#a1a1aa]">
                    No questions found for this category.
                  </div>
                )}
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <h4 className="text-[#fafafa] font-medium text-lg">Still have questions?</h4>
                  <p className="text-[#a1a1aa] text-sm mt-1">Our team is ready to help you out.</p>
                </div>
                <Link 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#e8590c]/10 text-[#e8590c] hover:bg-[#e8590c]/20 border border-[#e8590c]/20 transition-all rounded-full font-medium whitespace-nowrap group"
                >
                  Chat on WhatsApp
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
