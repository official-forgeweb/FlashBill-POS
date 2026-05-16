'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@forgeweb.in', href: 'mailto:hello@forgeweb.in' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919876543210' },
  { icon: MapPin, label: 'Location', value: 'India', href: null },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-border">
        <div className="container-site max-w-3xl">
          <div className="tag mb-6">Contact</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight text-heading mb-4">
            Get in touch with us
          </h1>
          <p className="text-body text-[16px] leading-relaxed max-w-xl">
            Ready to modernize your billing? Reach out and we&apos;ll have you running in no time.
          </p>
        </div>
      </section>

      <section className="py-16 bg-bg-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <h2 className="text-[20px] font-bold text-heading mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-[12px] text-muted font-medium">{item.label}</p>
                        <p className="text-[15px] text-heading font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="bg-white border border-border rounded-xl p-5">
                <h3 className="text-[14px] font-semibold text-heading mb-2">Office Hours</h3>
                <p className="text-[13px] text-body leading-relaxed">
                  Monday – Saturday: 10:00 AM – 7:00 PM IST<br />
                  We typically respond within 2-4 hours.
                </p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-border rounded-xl overflow-hidden">
                <div className="px-8 py-5 border-b border-border">
                  <h2 className="text-[18px] font-bold text-heading">Send us a message</h2>
                  <p className="text-[13px] text-muted mt-1">Fill out the form and we&apos;ll get back to you shortly.</p>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
