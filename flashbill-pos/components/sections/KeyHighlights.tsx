'use client';
import { motion } from 'framer-motion';
import { WifiOff, Zap, Shield, IndianRupee, Printer, BarChart3, Users, Palette } from 'lucide-react';
import { highlights } from '@/lib/data/highlights';
const icons = [WifiOff, Zap, Shield, IndianRupee, Printer, BarChart3, Users, Palette];

export default function KeyHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="site">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
          <div className="pill-tag mb-4 mx-auto w-fit">Why FlashBill</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-heading leading-tight">
            Why businesses <span className="text-grad">choose FlashBill</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const Icon = icons[i] || Zap;
            return (
              <motion.div key={item.num} initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.06*i }}
                className="card p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-flame-bg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-flame" />
                </div>
                <h3 className="text-[16px] font-semibold text-heading mb-2">{item.title}</h3>
                <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
