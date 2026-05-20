'use client';

import { motion } from 'framer-motion';

export default function BlogHeader() {
  return (
    <section className="bg-grid relative overflow-hidden pt-36 pb-20 border-b border-[#E5E7EB]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.03] blur-[100px] pointer-events-none" />

      <div className="site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">
            ● BLOG & RESOURCES
          </span>

          <h1 className="text-[clamp(30px,5vw,50px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
            <span
              className="text-[#E8590C] font-medium"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontStyle: 'italic',
              }}
            >
              Insights
            </span>{' '}
            for Indian Business Owners
          </h1>

          <p className="text-[#6B7280] text-[16px] leading-relaxed mb-8 max-w-lg mx-auto font-medium">
            POS guides, billing tips, and industry news — updated monthly
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[12px] text-[#9CA3AF] uppercase tracking-[0.2em] font-bold"
          >
            8 Articles · 4 Categories · Free Forever
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
