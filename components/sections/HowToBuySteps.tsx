'use client';
import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Download, Headphones } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Reach out via WhatsApp, email, or form.', icon: MessageCircle },
  { num: '02', title: 'Choose Your Plan', desc: 'Select Basic, Standard, or Premium.', icon: CreditCard },
  { num: '03', title: 'Get Setup', desc: 'We install everything in under 24 hours.', icon: Download },
  { num: '04', title: 'Go Live', desc: 'Start billing with full training & support.', icon: Headphones },
];

export default function HowToBuySteps() {
  return (
    <section className="py-28 bg-[#F5F5F7] relative overflow-hidden border-y border-[#E5E7EB]">
      <div className="site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-5">
            ● HOW IT WORKS
          </span>
          <h2 className="text-[clamp(30px,4.5vw,46px)] font-black text-[#0A0A0A] leading-tight">
            Get started in{' '}
            <span
              className="text-[#E8590C] font-medium"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              4 easy steps
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1100px] mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center relative group"
              >
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md border border-[#E5E7EB] flex items-center justify-center mx-auto mb-6 group-hover:border-[#E8590C] group-hover:shadow-lg transition-all duration-300 relative">
                    <Icon className="w-8 h-8 text-[#E8590C] group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-[11px] font-bold border-2 border-white">
                      {s.num}
                    </div>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0A0A0A] mb-3">{s.title}</h3>
                  <p className="text-[15px] text-[#6B7280] leading-relaxed px-2">{s.desc}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#E5E7EB] to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/how-to-buy"
            className="inline-flex items-center gap-2 font-bold text-[#E8590C] uppercase tracking-[0.1em] text-[14px] hover:gap-3 transition-all"
          >
            Learn more details →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
