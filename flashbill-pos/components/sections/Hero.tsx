'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-warm pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <div className="pill-tag mb-6">
              <span className="w-2 h-2 rounded-full bg-green inline-block" style={{ boxShadow:'0 0 6px #2D9B4E' }} />
              Top Choice For 100+ Retailers
            </div>
            <h1 className="text-[clamp(36px,5.5vw,56px)] font-bold text-heading leading-[1.08] tracking-tight mb-6">
              Our Advanced POS <span className="text-grad">Software Solutions</span>
            </h1>
            <p className="text-body text-[16px] leading-relaxed mb-10 max-w-md">
              Our suite of POS software is designed to fuel productivity for businesses of all sizes — 100% offline, zero monthly fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-flame">Get Started Now <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/features" className="btn-white"><Play className="w-4 h-4" /> Explore Features</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8, delay:0.3 }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <Image src="/hero-illustration.png" alt="FlashBill POS" width={480} height={400} className="w-full max-w-[480px] h-auto rounded-2xl float-anim" priority />
              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-border float-anim-delay">
                <div className="text-[11px] text-muted font-medium mb-1">Daily Sales</div>
                <div className="text-[22px] font-bold text-heading">₹48.5K</div>
                <div className="text-[11px] text-green font-semibold">↑ 12.5%</div>
              </div>
              <div className="absolute -bottom-2 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-border float-anim">
                <div className="text-[11px] text-muted font-medium mb-1">Orders Today</div>
                <div className="text-[22px] font-bold text-heading">127</div>
                <div className="flex gap-1 mt-1">
                  <div className="w-6 h-1.5 rounded-full bg-flame" />
                  <div className="w-4 h-1.5 rounded-full bg-amber" />
                  <div className="w-3 h-1.5 rounded-full bg-green" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
