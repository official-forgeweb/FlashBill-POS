'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const blocks = [
  { title:'Lightning-Fast Billing', desc:'Generate bills in seconds. Works entirely offline — billing never stops.', image:'/feature-billing.png', points:['Hundreds of bills daily','Auto taxes & discounts'], reverse:false },
  { title:'Smart Inventory', desc:'Track every item in real-time with barcode scanning and low-stock alerts.', image:'/feature-inventory.png', points:['Real-time stock tracking','Automatic low-stock alerts'], reverse:true },
  { title:'Powerful Reports', desc:'Clear, actionable reports — revenue, best-sellers, and trends at a glance.', image:'/feature-reports.png', points:['Daily/weekly/monthly breakdowns','Export reports as PDF'], reverse:false },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 bg-flame-soft">
      <div className="site">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-16">
          <div className="pill-tag mb-4 mx-auto w-fit">FlashBill POS Features</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-heading leading-tight mb-4">
            Business With Our Cutting Edge<br /><span className="text-grad">FlashBill POS Software</span>
          </h2>
          <p className="text-body text-[16px] max-w-xl mx-auto">Make your business operations seamless with our feature-rich billing software</p>
        </motion.div>

        <div className="space-y-20">
          {blocks.map((f) => (
            <div key={f.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
              <motion.div initial={{ opacity:0, x: f.reverse?30:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className={f.reverse ? 'md:order-2' : ''}>
                <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <Image src={f.image} alt={f.title} width={560} height={400} className="w-full h-auto rounded-xl" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity:0, x: f.reverse?-30:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className={f.reverse ? 'md:order-1' : ''}>
                <h3 className="text-[28px] font-bold text-heading mb-4">{f.title}</h3>
                <p className="text-body text-[15px] leading-relaxed mb-6">{f.desc}</p>
                <div className="space-y-3">
                  {f.points.map(p => (
                    <div key={p} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-flame-bg flex items-center justify-center shrink-0"><CheckCircle className="w-3.5 h-3.5 text-flame" /></div>
                      <span className="text-[14px] text-heading font-medium">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
