'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-heading rounded-2xl px-8 py-16 md:px-16 text-center"
        >
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-white leading-tight mb-4">
            Ready to streamline your business?
          </h2>
          <p className="text-white/60 text-[16px] mb-8 max-w-lg mx-auto">
            Get a free demo of FlashBill and see how it can transform your billing and operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-[15px] px-8 py-3.5">
              Book a Free Demo
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-md text-[15px] font-semibold hover:bg-white/20 transition-colors">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
