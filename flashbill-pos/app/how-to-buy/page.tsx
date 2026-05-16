'use client';

import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Download, Headphones, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Reach out via WhatsApp, email, or our contact form. Tell us about your business and requirements.', icon: MessageCircle },
  { num: '02', title: 'Choose & Pay', desc: 'Select your plan — Basic, Standard, or Premium. Add features if needed. Make a one-time payment via UPI, bank transfer, or card.', icon: CreditCard },
  { num: '03', title: 'Installation', desc: 'Our team installs FlashBill on your devices, configures your menu, printers, and settings. Complete setup in under 24 hours.', icon: Download },
  { num: '04', title: 'Go Live', desc: 'Start billing immediately. We provide complete training for your staff and ongoing technical support.', icon: Headphones },
];

const whyOneTime = [
  'No recurring costs — pay once, own forever',
  'Full data ownership — everything stays on your device',
  'Predictable investment — no surprise price hikes',
  'Regular updates included at no extra cost',
];

export default function HowToBuyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-border">
        <div className="container-site max-w-3xl text-center">
          <div className="tag justify-center mb-6">How to Buy</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight text-heading mb-4">
            Get started in 4 simple steps
          </h1>
          <p className="text-body text-[16px] leading-relaxed max-w-xl mx-auto">
            From first contact to going live — the entire process takes less than 24 hours.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-bg-soft">
        <div className="container-site max-w-[800px]">
          <div className="space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex gap-6 relative"
                >
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center shrink-0 z-10">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 bg-border" />}
                  </div>

                  {/* Content */}
                  <div className="pb-12">
                    <div className="text-[12px] font-bold text-muted uppercase tracking-wider mb-1">Step {step.num}</div>
                    <h3 className="text-[20px] font-semibold text-heading mb-2">{step.title}</h3>
                    <p className="text-body text-[15px] leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why One-Time */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container-site max-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[28px] font-bold text-heading mb-4 leading-tight">
                Why a one-time license?
              </h2>
              <p className="text-body text-[15px] leading-relaxed">
                We believe business software should be an asset you own, not a subscription you&apos;re trapped in.
              </p>
            </div>
            <div className="space-y-4">
              {whyOneTime.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-[14px] text-heading font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-soft text-center">
        <div className="container-site max-w-xl">
          <h2 className="text-[28px] font-bold text-heading mb-4">Ready to get started?</h2>
          <p className="text-body text-[16px] mb-8">Book a free demo and our team will walk you through everything.</p>
          <Link href="/contact" className="btn-accent">Book a Free Demo</Link>
        </div>
      </section>
    </>
  );
}
