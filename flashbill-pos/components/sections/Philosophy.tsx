'use client';

import { motion } from 'framer-motion';

const logos = [
  'Restaurant Hub', 'QuickServe', 'FreshMart', 'CafeBliss',
  'RetailPro', 'BakeHouse', 'UrbanBites', 'MegaMart',
];

export default function Philosophy() {
  return (
    <section className="py-16 border-t border-border bg-white">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted text-[14px] font-medium mb-10"
        >
          Trusted by 100+ businesses across India
        </motion.p>

        <div className="logo-grid">
          {logos.map((name) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              className="logo-grid-item"
            >
              <span className="text-[15px] font-bold text-heading tracking-wide">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
