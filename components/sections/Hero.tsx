'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-light pt-32 pb-20 md:pt-44 md:pb-32 relative text-center">
      <div className="site relative z-10 max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline mimicking the Odoo reference */}
          <h1 className="text-[clamp(44px,6vw,72px)] font-bold text-[#1E1E2D] leading-[1.1] tracking-tight mb-6">
            <span className="font-['var(--font-caveat)'] font-normal text-[110%] mr-2">PoS</span>
            <span className="font-['var(--font-caveat)'] text-[#2D9B4E] font-normal text-[110%]">made for retail</span>
          </h1>

          <p className="text-[#6B7280] text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-[700px] mx-auto font-medium">
            A <span className="text-[#1E1E2D] font-bold">reliable Point of Sale</span> built for modern retailers. Inventory, promotions, loyalty, multi-store, accounting — all in one platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/contact" className="btn-primary">
              Start now — It&apos;s free
            </Link>
            <Link href="/features" className="btn-secondary">
              Meet an advisor
            </Link>
          </div>

          <p className="text-[14px] text-[#6B7280]">
            Free, forever, with unlimited users.{' '}
            <Link href="/pricing" className="text-[#FF6B35] font-medium hover:underline">
              See why
            </Link>
          </p>
        </motion.div>

        {/* Hero image with floating elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative flex justify-center"
        >
          {/* Decorative burst/sparks (like Odoo red sparks) */}
          <div className="absolute -top-12 -left-8 w-24 h-24">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#FF6B35] opacity-80">
              <path d="M 20 50 L 5 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="animate-pulse" />
              <path d="M 30 30 L 15 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              <path d="M 50 20 L 50 5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            </svg>
          </div>

          <div className="relative inline-block">
            {/* Main POS screenshot frame mimicking the reference */}
            <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 md:p-4 border border-[#E5E7EB] z-10 relative">
              <Image
                src="/hero-illustration.png"
                alt="FlashBill POS Interface"
                width={800}
                height={500}
                className="w-full max-w-[800px] h-auto rounded-lg"
                priority
              />
            </div>

            {/* Small floating terminal mimicking reference */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-2xl p-4 border border-[#E5E7EB] z-20 float-anim-delay"
            >
              {/* Dummy terminal UI */}
              <div className="w-32 h-40 bg-[#F9FAFB] rounded-xl flex flex-col p-2 border border-[#E5E7EB]">
                <div className="bg-[#1E1E2D] h-10 rounded-lg w-full mb-2"></div>
                <div className="grid grid-cols-3 gap-1 flex-1">
                  {[1,2,3,4,5,6,7,8,9].map(n => (
                    <div key={n} className="bg-white border border-[#E5E7EB] rounded flex items-center justify-center text-xs font-bold text-[#4B5563]">{n}</div>
                  ))}
                  <div className="bg-white border border-[#E5E7EB] rounded"></div>
                  <div className="bg-white border border-[#E5E7EB] rounded flex items-center justify-center text-xs font-bold text-[#4B5563]">0</div>
                  <div className="bg-[#2D9B4E] rounded flex items-center justify-center text-white text-xs">✓</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
