"use client";

import { motion } from "framer-motion";
import { ComparisonTable } from "./ComparisonTable";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="relative w-full py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="site max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-sm bg-[#FFF7ED] border border-[#ffedd5]">
              <span className="text-xs font-mono tracking-widest text-[#E8590C] uppercase">
                <span className="mr-2">●</span>
                COMPARISON
              </span>
            </div>
            
            <h2 className="text-[clamp(32px,4vw,44px)] font-black text-[#0A0A0A] tracking-tight mb-4 leading-tight">
              Why FlashBill wins
            </h2>
            
            <p className="text-[#6B7280] text-[18px] max-w-2xl mx-auto font-medium">
              An honest look at how we stack up against the competition.
            </p>
          </motion.div>
        </div>

        {/* Table */}
        <ComparisonTable />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center flex flex-col items-center"
        >
          <p className="text-[#6B7280] text-[12px] max-w-3xl mx-auto leading-relaxed mb-12">
            * Competitor data based on publicly available pricing and feature information as of 2026. 
            Actual features and prices may vary by specific plan or configuration.
          </p>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-[#0A0A0A] mb-2">Ready to make the switch?</h3>
              <p className="text-[#6B7280] font-medium text-[15px]">Join 100+ businesses running on FlashBill.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <Link href="/contact" className="btn-brand w-full sm:w-auto justify-center group text-[13px] py-[14px]">
                Book Free Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/pricing" className="btn-outline w-full sm:w-auto justify-center border-gray-200 text-gray-700 hover:border-[#E8590C] text-[13px] py-[14px]">
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
