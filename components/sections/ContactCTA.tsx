'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Faint grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/10 blur-[150px] pointer-events-none" />

      <div className="site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#F97316] mb-6">
            ● READY?
          </span>
          <h2 className="text-[clamp(32px,5vw,52px)] font-black text-white leading-[1.1] tracking-tight mb-6">
            Ready to take your business{' '}
            <span
              className="text-[#F97316] font-medium"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              to the next level?
            </span>
          </h2>

          <p className="text-white/50 text-[17px] mb-12 leading-relaxed font-medium">
            Join 100+ businesses already using FlashBill. Book a free demo and see the difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-blue px-10 py-4 text-[14px]">
              Book a Free Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pricing" className="btn-outline border-white/20 text-white hover:border-[#F97316] hover:text-[#F97316] hover:bg-transparent px-10 py-4 text-[14px]">
              View Pricing
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-[13px] text-white/30 mt-8 uppercase tracking-[0.15em] font-bold"
          >
            Free forever · Unlimited users · No credit card
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
