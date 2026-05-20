'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function HeroTextBlock() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center bg-grid relative overflow-hidden pt-[72px]">
      {/* Corner decorative markers */}
      <div className="absolute top-28 left-8 w-3 h-3 rounded-full border-2 border-[#E8590C]/20 hidden md:block" />
      <div className="absolute top-28 right-8 w-3 h-3 rounded-full border-2 border-[#E8590C]/20 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-3 h-3 rounded-full bg-[#E8590C]/10 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-3 h-3 rounded-full bg-[#E8590C]/10 hidden md:block" />

      {/* Faint radial glow behind title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#E8590C]/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        {/* Top label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block uppercase tracking-[0.3em] text-[11px] font-bold text-[#E8590C] mb-10"
        >
          ● FLASHBILL POS — BY FORGEWEB
        </motion.span>

        {/* Italic intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[clamp(24px,4vw,48px)] text-black/70 mb-1"
          style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
        >
          Introducing the
        </motion.p>

        {/* MASSIVE title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[clamp(72px,16vw,240px)] font-black text-[#E8590C] leading-[0.85] tracking-[-0.04em] my-3"
        >
          FLASHBILL
        </motion.h1>

        {/* Italic accent below */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[clamp(24px,4vw,48px)] text-black/70 mt-1"
          style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
        >
          future of <span className="text-[#E8590C]">billing.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 mt-14 justify-center"
        >
          <Link href="/contact" className="btn-blue">
            GET STARTED →
          </Link>
          <Link href="/features" className="btn-outline">
            ▶ WATCH DEMO
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator at bottom */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="uppercase text-[10px] tracking-[0.3em] text-black/30 font-medium">
            Scroll to explore
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-black/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
