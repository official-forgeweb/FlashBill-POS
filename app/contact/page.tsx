'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

const info = [
  { icon:Mail, label:'Email', value:'hello@forgeweb.in', href:'mailto:hello@forgeweb.in' },
  { icon:Phone, label:'Phone', value:'+91 98765 43210', href:'tel:+919876543210' },
  { icon:MessageCircle, label:'WhatsApp', value:'Chat with us', href:'https://wa.me/919876543210' },
  { icon:MapPin, label:'Location', value:'India', href:null },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-warm pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border">
        <div className="site max-w-3xl"><div className="pill-tag mb-6">Contact</div>
          <h1 className="text-[clamp(36px,5vw,52px)] font-bold text-heading leading-[1.08] tracking-tight mb-5">Get in <span className="text-grad">touch</span></h1>
          <p className="text-body text-[16px] max-w-xl">Ready to modernize your billing? Reach out and we&apos;ll have you running in no time.</p>
        </div>
      </section>
      <section className="py-16 bg-cream">
        <div className="site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="lg:col-span-2">
              <h2 className="text-[20px] font-bold text-heading mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {info.map(i=>{const Icon=i.icon;const inner=(<div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-flame-bg flex items-center justify-center shrink-0"><Icon className="w-4 h-4 text-flame"/></div><div><p className="text-[12px] text-muted font-medium">{i.label}</p><p className="text-[15px] text-heading font-medium">{i.value}</p></div></div>);return i.href?<a key={i.label} href={i.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">{inner}</a>:<div key={i.label}>{inner}</div>;})}
              </div>
              <div className="bg-white border border-border rounded-xl p-5"><h3 className="text-[14px] font-semibold text-heading mb-2">Office Hours</h3><p className="text-[13px] text-body leading-relaxed">Monday – Saturday: 10 AM – 7 PM IST<br/>We typically respond within 2-4 hours.</p></div>
            </motion.div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="lg:col-span-3">
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-md">
                <div className="px-8 py-5 border-b border-border bg-flame-bg/50"><h2 className="text-[18px] font-bold text-heading">Send us a message</h2><p className="text-[13px] text-muted mt-1">We&apos;ll get back to you shortly.</p></div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
