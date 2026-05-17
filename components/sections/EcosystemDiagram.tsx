'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const labels = [
  { text: 'OUTLET', x: '15%', y: '14%', delay: 0.8 },
  { text: 'HEAD OFFICE', x: '48%', y: '8%', delay: 1.0 },
  { text: 'FRANCHISE', x: '75%', y: '20%', delay: 1.2 },
  { text: 'CENTRAL KITCHEN', x: '35%', y: '55%', delay: 1.4 },
];

export default function EcosystemDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-grid relative overflow-hidden"
    >
      <div className="site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side — Text */}
          <div className="z-10">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-5"
            >
              ● ONE SYSTEM, EVERY BUSINESS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(32px,4.5vw,52px)] font-black leading-[1.1] text-[#0A0A0A] mb-5"
            >
              All your business,<br />
              <span
                className="text-[#E8590C] font-medium"
                style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
              >
                flows into one.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#6B7280] text-[16px] leading-relaxed max-w-md mb-8"
            >
              From hotels to cafes, restaurants to retail — FlashBill connects every
              operation to ForgeWeb&apos;s secure infrastructure.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8"
            >
              {[
                { val: '100+', label: 'Businesses' },
                { val: '4', label: 'Sectors' },
                { val: '99.9%', label: 'Uptime' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-[28px] font-black text-[#0A0A0A] leading-none">{s.val}</div>
                  <div className="text-[10px] font-bold text-[#E8590C] uppercase tracking-[0.15em] mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-10 text-[16px] text-black/40"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              &ldquo;Everything connected. Everything{' '}
              <span className="text-[#E8590C]">secure.</span>&rdquo;
            </motion.p>
          </div>

          {/* Right side — Sketch image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 5 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 60, delay: 0.3 }}
            className="relative perspective-[1000px]"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Subtle glow behind the sketch */}
              <div className="absolute inset-0 bg-[#E8590C]/[0.04] blur-[80px] rounded-full pointer-events-none" />
              
              <Image
                src="/ecosystem-sketch.png"
                alt="FlashBill Ecosystem — Hotels, Restaurants, Cafes connected"
                width={800}
                height={600}
                className="w-full h-auto mix-blend-multiply drop-shadow-2xl relative z-10"
              />
            </motion.div>

            {/* Floating labels with pin markers */}
            {labels.map((label, i) => (
              <motion.div
                key={label.text}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: label.delay, duration: 0.6, type: 'spring', bounce: 0.4 }}
                className="absolute flex items-center gap-2 z-20"
                style={{ left: label.x, top: label.y }}
              >
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8590C] flex items-center justify-center shadow-lg shadow-[#E8590C]/40 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    {/* Pinging ring */}
                    <div className="absolute inset-0 rounded-full bg-[#E8590C] animate-ping opacity-60" />
                  </div>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#E8590C]" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, delay: i * 0.2 + 0.1, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/95 backdrop-blur-sm border border-[#E5E7EB] text-[#0A0A0A] px-3.5 py-1.5 rounded-lg shadow-xl shadow-black/5"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.1em]">{label.text}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
