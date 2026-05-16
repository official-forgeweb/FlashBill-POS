'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="tag mb-6">Offline-First POS</div>

            <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight text-heading mb-6">
              Manage your billing with a fast, reliable POS
            </h1>

            <p className="text-body text-[16px] leading-relaxed mb-8 max-w-md">
              Elegantly manage billing, inventory, and reports with FlashBill — offline-first POS software that works without internet, forever yours.
            </p>

            <Link href="/contact" className="btn-accent">
              Take a free demo
            </Link>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/hero-illustration.png"
              alt="FlashBill POS illustration"
              width={520}
              height={420}
              className="w-full max-w-[520px] h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
