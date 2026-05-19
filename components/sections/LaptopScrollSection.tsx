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
    <section ref={ref} className="relative h-[160vh] md:h-[250vh]" style={{ background: '#F5F5F7' }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-visible">
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 z-20"
          style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
        >
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C]">
            ─── THE PRODUCT ───
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-8 md:block md:mt-0">
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
                className="relative w-[85vw] md:w-[80vw] max-w-[820px] aspect-[16/10.5] bg-[#1a1a1a] rounded-t-[12px] md:rounded-t-[16px] overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 border-[8px] md:border-[12px] border-[#1a1a1a] rounded-t-[12px] md:rounded-t-[16px] z-10 pointer-events-none" />
                <div className="absolute top-[3px] md:top-[4px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-[#333] z-20" />
                <div className="absolute inset-[8px] md:inset-[12px] rounded-[4px] overflow-hidden bg-white z-0" style={{ containerType: 'inline-size' }}>
                  <div className="w-[800px] h-[525px] origin-top-left" style={{ transform: 'scale(calc(100cqw / 800))' }}>
                    <PosUIMockup />
                  </div>
                </div>
              </motion.div>

              <div className="relative w-[85vw] md:w-[80vw] max-w-[820px] h-[14px] md:h-[18px] bg-gradient-to-b from-[#c0c0c0] to-[#a0a0a0] rounded-b-[6px] md:rounded-b-[8px] shadow-[0_6px_30px_rgba(0,0,0,0.15)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[3px] bg-[#888] rounded-b-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[8%] h-[3px] bg-[#999] rounded-t-full" />
              </div>
            </motion.div>

            {/* CALLOUT LABELS — tight to the screen edges */}
            <motion.div
              style={{ opacity: calloutOpacity, y: calloutY }}
              className="hidden md:block pointer-events-none"
            >
              {/* Top-left */}
              <div className="absolute top-8 -left-[200px] lg:-left-[280px] flex items-start gap-3 z-30">
                <div className="text-right pt-2">
                  <p className="text-[28px] lg:text-[36px] text-[#E8590C] font-medium leading-none" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                    Offline Billing
                  </p>
                  <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-1">No internet needed</p>
                </div>
                <CurlyArrow direction="top-left" />
              </div>

              {/* Top-right */}
              <div className="absolute top-10 -right-[200px] lg:-right-[280px] flex items-start gap-3 z-30">
                <CurlyArrow direction="top-right" />
                <div className="text-left pt-2">
                  <p className="text-[28px] lg:text-[36px] text-[#E8590C] font-medium leading-none" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                    Real-time Reports
                  </p>
                  <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-1">Hourly analytics</p>
                </div>
              </div>

              {/* Bottom-left */}
              <div className="absolute bottom-8 -left-[190px] lg:-left-[260px] flex items-end gap-3 z-30">
                <div className="text-right pb-2">
                  <p className="text-[28px] lg:text-[36px] text-[#E8590C] font-medium leading-none" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                    QR Ordering
                  </p>
                  <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-1">Customer self-order</p>
                </div>
                <CurlyArrow direction="bottom-left" />
              </div>

              {/* Bottom-right */}
              <div className="absolute bottom-12 -right-[190px] lg:-right-[260px] flex items-end gap-3 z-30">
                <CurlyArrow direction="bottom-right" />
                <div className="text-left pb-2">
                  <p className="text-[28px] lg:text-[36px] text-[#E8590C] font-medium leading-none" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                    Kitchen Display
                  </p>
                  <p className="uppercase text-[8px] tracking-[0.2em] text-black/35 font-bold mt-1">Smart KOT system</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile labels - now sitting immediately below the laptop */}
          <motion.div style={{ opacity: calloutOpacity }} className="md:hidden w-[85vw] mt-2">
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Offline Billing', desc: 'No internet' },
                { title: 'Real-time Reports', desc: 'Analytics' },
                { title: 'QR Ordering', desc: 'Self-order' },
                { title: 'Kitchen Display', desc: 'Smart KOT' }
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-3 border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8590C] shrink-0" />
                    <span className="text-[13px] font-bold text-[#0A0A0A] leading-tight">{item.title}</span>
                  </div>
                  <span className="text-[10px] font-medium text-[#6B7280] ml-3.5 uppercase tracking-wider">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
