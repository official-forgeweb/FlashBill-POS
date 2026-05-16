'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Store, BarChart3, Shield, Clock } from 'lucide-react';

const stats = [
  { icon: Store, value: '100+', label: 'POS Installations', color: 'bg-[#FFF4ED] text-[#FF6B35]' },
  { icon: BarChart3, value: '5M+', label: 'Bills Processed', color: 'bg-[#EAFAF0] text-[#2D9B4E]' },
  { icon: Shield, value: '99.9%', label: 'Uptime Guarantee', color: 'bg-[#FFF9E6] text-[#D97706]' },
  { icon: Clock, value: '<24h', label: 'Setup Time', color: 'bg-[#F3F4F6] text-[#4B5563]' },
];

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 bg-white border-y border-[#E5E7EB] relative z-10" ref={ref}>
      <div className="site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 * i, duration: 0.6 }}
                  className="text-center group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[36px] font-bold text-[#1E1E2D] leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-[14px] font-medium text-[#6B7280]">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
