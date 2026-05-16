'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const labels = [
  { text: 'OUTLET', x: '18%', y: '12%', delay: 0.8 },
  { text: 'HEAD OFFICE', x: '52%', y: '8%', delay: 1.0 },
  { text: 'FRANCHISE', x: '78%', y: '18%', delay: 1.2 },
  { text: 'CENTRAL KITCHEN', x: '38%', y: '52%', delay: 1.4 },
];

export default function EcosystemDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-grid flex flex-col items-center relative overflow-hidden"
    >
      {/* Section heading */}
      <div className="text-center mb-10 z-10 px-6">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-5"
        >
          ─── ONE SYSTEM, EVERY BUSINESS ───
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] text-[#0A0A0A]"
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
          className="text-black/50 mt-4 max-w-lg mx-auto text-[15px] leading-relaxed"
        >
          From hotels to cafes, restaurants to retail — FlashBill connects every
          operation to ForgeWeb&apos;s secure infrastructure.
        </motion.p>
      </div>

      {/* Sketch illustration — compact size */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-3xl px-6"
      >
        <Image
          src="/ecosystem-sketch.png"
          alt="FlashBill Ecosystem — Hotels, Restaurants, Cafes connected"
          width={900}
          height={520}
          className="w-full h-auto mix-blend-multiply"
        />

        {/* Floating labels with pin markers */}
        {labels.map((label) => (
          <motion.div
            key={label.text}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: label.delay, duration: 0.5, type: 'spring', stiffness: 200 }}
            className="absolute flex items-center gap-1.5"
            style={{ left: label.x, top: label.y }}
          >
            <div className="relative">
              <div className="w-5 h-5 rounded-full bg-[#E8590C] flex items-center justify-center shadow-lg shadow-[rgba(232,89,12,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#E8590C]" />
            </div>
            <div className="bg-[#F59E0B] text-white px-3 py-1 rounded-md shadow-md">
              <span className="text-[9px] font-black uppercase tracking-[0.1em]">{label.text}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="text-center mt-10 z-10 px-6"
      >
        <p
          className="text-[clamp(16px,2.5vw,22px)] text-black/50"
          style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
        >
          &ldquo;Everything connected. Everything{' '}
          <span className="text-[#E8590C]">secure.</span>&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
