'use client';

import { motion } from 'framer-motion';
import { WifiOff, Zap, Shield, IndianRupee, Printer, BarChart3, Users, Palette } from 'lucide-react';
import { highlights } from '@/lib/data/highlights';

const icons = [WifiOff, Zap, Shield, IndianRupee, Printer, BarChart3, Users, Palette];

export default function KeyHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">Why businesses choose FlashBill</h2>
          <p className="section-sub mx-auto">
            Everything you need to run your store, cafe, or restaurant — built into one simple app
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => {
            const Icon = icons[i] || Zap;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-accent" />
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
