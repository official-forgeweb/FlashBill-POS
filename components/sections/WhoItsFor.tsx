'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ArrowRightSVG = () => (
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9CA3AF] opacity-80 ml-auto mt-2 drop-shadow-sm">
    <path d="M 5 20 C 25 40 45 -5 65 20 M 55 10 L 65 20 L 55 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeftSVG = () => (
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9CA3AF] opacity-80 mr-auto mt-2 drop-shadow-sm">
    <path d="M 75 20 C 55 -5 35 40 15 20 M 25 10 L 15 20 L 25 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function WhoItsFor() {
  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-2xl mx-auto"
        >
          <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold text-[#1E1E2D] leading-tight flex items-center justify-center gap-3 mb-6">
            <span style={{ fontFamily: 'var(--font-caveat), cursive' }} className="font-normal text-[115%]">Complex</span>
            <span className="w-8 h-8 rounded-full bg-[#2D9B4E] flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
            <span style={{ fontFamily: 'var(--font-caveat), cursive' }} className="font-normal text-[115%]">meets</span>
            <span className="w-8 h-8 rounded-full bg-[#2D9B4E] flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white rotate-180" />
            </span>
            <span style={{ fontFamily: 'var(--font-caveat), cursive' }} className="font-normal text-[115%]">intuitive</span>
          </h2>
          <p className="text-[#6B7280] text-[16px] leading-relaxed">
            <span className="font-bold text-[#4B5563]">Interface that has it all:</span> so intuitive that anyone can master it in minutes, yet
            packed with a range of advanced options. Handle any transaction with ease
            and focus on what matters: the customers.
          </p>
        </motion.div>

        {/* Central interface with handwritten notes around it */}
        <div className="relative max-w-[1200px] mx-auto mt-16 mb-20">
          
          {/* Main Screenshot - using true transparent PNG now */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto w-full flex justify-center"
          >
            <Image
              src="/pos_interface_ui.png"
              alt="Intuitive POS Interface"
              width={1000}
              height={600}
              className="w-full max-w-[900px] h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating handwritten annotations */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-[10%] -left-8 text-right w-64 z-20"
            >
              <div style={{ fontFamily: 'var(--font-caveat), cursive' }} className="text-[40px] text-[#4B5563] font-medium leading-tight">Customized<br/>selling</div>
              <ArrowRightSVG />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute top-[45%] -left-8 text-right w-64 z-20"
            >
              <div style={{ fontFamily: 'var(--font-caveat), cursive' }} className="text-[40px] text-[#4B5563] font-medium leading-tight">Loyalty<br/>programs</div>
              <ArrowRightSVG />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-[10%] -left-8 text-right w-72 z-20"
            >
              <div style={{ fontFamily: 'var(--font-caveat), cursive' }} className="text-[40px] text-[#4B5563] font-medium leading-tight">Multiple payment<br/>methods</div>
              <ArrowRightSVG />
            </motion.div>

            {/* Right side annotations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-[5%] -right-8 text-left w-64 z-20"
            >
              <div style={{ fontFamily: 'var(--font-caveat), cursive' }} className="text-[40px] text-[#4B5563] font-medium leading-tight">Reliable online<br/>and offline</div>
              <ArrowLeftSVG />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute top-[35%] -right-8 text-left w-64 z-20"
            >
              <div style={{ fontFamily: 'var(--font-caveat), cursive' }} className="text-[40px] text-[#4B5563] font-medium leading-tight">Filter by product<br/>categories</div>
              <ArrowLeftSVG />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-[20%] -right-8 text-left w-64 z-20"
            >
              <div style={{ fontFamily: 'var(--font-caveat), cursive' }} className="text-[40px] text-[#4B5563] font-medium leading-tight">Intuitive<br/>display</div>
              <ArrowLeftSVG />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
