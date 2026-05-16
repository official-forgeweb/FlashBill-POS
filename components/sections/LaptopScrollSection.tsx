'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PosUIMockup from '@/components/ui/PosUIMockup';
import CurlyArrow from '@/components/ui/CurlyArrow';

export default function LaptopScrollSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const screenRotateX = useTransform(scrollYProgress, [0.05, 0.4], [-100, 0]);
  const laptopRotateY = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
  const laptopRotateX = useTransform(scrollYProgress, [0, 0.4], [20, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.45], [0.8, 1]);
  const calloutOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const calloutY = useTransform(scrollYProgress, [0.45, 0.6], [20, 0]);

  return (
    <section ref={ref} className="relative h-[250vh]" style={{ background: '#F5F5F7' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-visible">
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 z-20"
          style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
        >
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C]">
            ─── THE PRODUCT ───
          </span>
        </motion.div>

        <div className="relative" style={{ perspective: '2000px' }}>
          <motion.div
            style={{
              rotateY: laptopRotateY,
              rotateX: laptopRotateX,
              scale: laptopScale,
              transformStyle: 'preserve-3d',
            }}
            className="relative"
          >
            <motion.div
              style={{
                rotateX: screenRotateX,
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
              }}
              className="relative w-[80vw] max-w-[820px] aspect-[16/10.5] bg-[#1a1a1a] rounded-t-[12px] md:rounded-t-[16px] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 border-[8px] md:border-[12px] border-[#1a1a1a] rounded-t-[12px] md:rounded-t-[16px] z-10 pointer-events-none" />
              <div className="absolute top-[3px] md:top-[4px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-[#333] z-20" />
              <div className="absolute inset-[8px] md:inset-[12px] rounded-[4px] overflow-hidden bg-white z-0">
                <PosUIMockup />
              </div>
            </motion.div>

            <div className="relative w-[80vw] max-w-[820px] h-[14px] md:h-[18px] bg-gradient-to-b from-[#c0c0c0] to-[#a0a0a0] rounded-b-[6px] md:rounded-b-[8px] shadow-[0_6px_30px_rgba(0,0,0,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[3px] bg-[#888] rounded-b-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[8%] h-[3px] bg-[#999] rounded-t-full" />
            </div>
          </motion.div>

          {/* CALLOUT LABELS — tight to the screen edges */}
          <motion.div
            style={{ opacity: calloutOpacity, y: calloutY }}
            className="hidden md:block pointer-events-none"
          >
            {/* Top-left — near left edge of screen */}
            <div className="absolute -top-20 -left-[140px] lg:-left-[160px] flex items-end gap-2 z-30">
              <div className="text-right">
                <p className="text-[18px] lg:text-[22px] text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
                  Offline Billing
                </p>
                <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-0.5">No internet needed</p>
              </div>
              <CurlyArrow direction="bottom-right" />
            </div>

            {/* Top-right — near right edge of screen */}
            <div className="absolute -top-16 -right-[140px] lg:-right-[160px] flex items-end gap-2 z-30">
              <CurlyArrow direction="bottom-left" />
              <div className="text-left">
                <p className="text-[18px] lg:text-[22px] text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
                  Real-time Reports
                </p>
                <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-0.5">Hourly analytics</p>
              </div>
            </div>

            {/* Bottom-left */}
            <div className="absolute -bottom-16 -left-[130px] lg:-left-[150px] flex items-start gap-2 z-30">
              <div className="text-right">
                <p className="text-[18px] lg:text-[22px] text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
                  QR Ordering
                </p>
                <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-0.5">Customer self-order</p>
              </div>
              <CurlyArrow direction="top-right" />
            </div>

            {/* Bottom-right */}
            <div className="absolute -bottom-20 -right-[130px] lg:-right-[150px] flex items-start gap-2 z-30">
              <CurlyArrow direction="top-left" />
              <div className="text-left">
                <p className="text-[18px] lg:text-[22px] text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
                  Kitchen Display
                </p>
                <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-0.5">Smart KOT system</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile labels */}
        <motion.div style={{ opacity: calloutOpacity }} className="md:hidden absolute bottom-6 left-0 right-0 px-6">
          <div className="grid grid-cols-2 gap-3">
            {['Offline Billing', 'Real-time Reports', 'QR Ordering', 'Kitchen Display'].map(label => (
              <div key={label} className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-[#E5E7EB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8590C] inline-block mr-2" />
                <span className="text-[12px] font-bold text-[#0A0A0A]">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
