'use client';

import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Download, Headphones } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Reach out via WhatsApp, email, or our contact form.', icon: MessageCircle },
  { num: '02', title: 'Choose Your Plan', desc: 'Select Basic, Standard, or Premium — or customize.', icon: CreditCard },
  { num: '03', title: 'Get Setup', desc: 'We install and configure everything in under 24 hours.', icon: Download },
  { num: '04', title: 'Go Live', desc: 'Start billing immediately with full training & support.', icon: Headphones },
];

export default function HowToBuySteps() {
  return (
    <section className="py-20 bg-bg-soft border-y border-border">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">Get started in 4 easy steps</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[960px] mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-[12px] font-bold text-muted uppercase tracking-wider mb-2">Step {step.num}</div>
                <h3 className="text-[16px] font-semibold text-heading mb-2">{step.title}</h3>
                <p className="text-[14px] text-body leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/how-to-buy" className="text-accent font-semibold text-[14px] hover:underline">
            Learn more about the process →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
