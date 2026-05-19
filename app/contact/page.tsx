'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

const info = [
  { icon: Mail, label: 'Email', value: 'hello@forgeweb.in', href: 'mailto:hello@forgeweb.in' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919876543210' },
  { icon: MapPin, label: 'Location', value: 'India', href: null },
];

import { PageLoaderWrapper } from '@/components/ui/PageLoaderWrapper';

export default function ContactPage() {
  return (
    <PageLoaderWrapper page="contact">
      <section className="min-h-[50vh] flex items-center justify-center bg-grid relative pt-[72px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8590C]/[0.03] blur-[100px] pointer-events-none" />
        <div className="site max-w-3xl relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-6">● CONTACT</span>
            <h1 className="text-[clamp(36px,5vw,52px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-5">
              Get in{' '}
              <span className="text-[#E8590C] font-medium" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>touch</span>
            </h1>
            <p className="text-[#6B7280] text-[18px] max-w-xl mx-auto font-medium">
              Ready to modernize your billing? Reach out and we&apos;ll have you running in no time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F7] border-t border-[#E5E7EB]">
        <div className="site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
              <h2 className="text-[24px] font-black text-[#0A0A0A] mb-7">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {info.map((item, i) => {
                  const Icon = item.icon;
                  const inner = (
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-5 group bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#E8590C]/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#FFF7ED] text-[#E8590C] flex items-center justify-center shrink-0 group-hover:bg-[#E8590C] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#6B7280] font-bold uppercase tracking-[0.15em]">{item.label}</p>
                        <p className="text-[16px] text-[#0A0A0A] font-semibold">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
                <h3 className="text-[16px] font-bold text-[#0A0A0A] mb-2">Office Hours</h3>
                <p className="text-[14px] text-[#6B7280] leading-relaxed">
                  Monday – Saturday: 10 AM – 7 PM IST<br />
                  We typically respond within 2-4 hours.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-lg overflow-hidden">
                <div className="px-8 py-6 border-b border-[#E5E7EB] bg-[#FAFAFA]">
                  <h2 className="text-[20px] font-black text-[#0A0A0A]">Send us a message</h2>
                  <p className="text-[14px] text-[#6B7280] mt-1 font-medium">We&apos;ll get back to you shortly.</p>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLoaderWrapper>
  );
}
