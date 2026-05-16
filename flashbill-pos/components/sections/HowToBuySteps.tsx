'use client';
import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Download, Headphones } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { num:'01', title:'Contact Us', desc:'Reach out via WhatsApp, email, or form.', icon:MessageCircle },
  { num:'02', title:'Choose Your Plan', desc:'Select Basic, Standard, or Premium.', icon:CreditCard },
  { num:'03', title:'Get Setup', desc:'We install everything in under 24 hours.', icon:Download },
  { num:'04', title:'Go Live', desc:'Start billing with full training & support.', icon:Headphones },
];

export default function HowToBuySteps() {
  return (
    <section className="py-20 bg-cream border-y border-border">
      <div className="site">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
          <div className="pill-tag mb-4 mx-auto w-fit">Process</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-heading leading-tight">Get started in <span className="text-grad">4 easy steps</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[960px] mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.num} initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1*i }}
                className="card p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-flame-bg flex items-center justify-center mx-auto mb-4"><Icon className="w-6 h-6 text-flame" /></div>
                <div className="text-[12px] font-bold text-flame uppercase tracking-wider mb-2">Step {s.num}</div>
                <h3 className="text-[16px] font-semibold text-heading mb-2">{s.title}</h3>
                <p className="text-[14px] text-body leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="text-center mt-10">
          <Link href="/how-to-buy" className="text-flame font-semibold text-[14px] hover:underline">Learn more →</Link>
        </motion.div>
      </div>
    </section>
  );
}
