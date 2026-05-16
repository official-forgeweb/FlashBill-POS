'use client';
import { motion } from 'framer-motion';
import { Store, BarChart3, Shield, Clock } from 'lucide-react';

const stats = [
  { icon: Store, value: '100+', label: 'POS Installations', color: 'text-flame' },
  { icon: BarChart3, value: '5M+', label: 'Bills Processed', color: 'text-amber' },
  { icon: Shield, value: '99.9%', label: 'Uptime Guarantee', color: 'text-green' },
  { icon: Clock, value: '<24h', label: 'Setup Time', color: 'text-flame-light' },
];

export default function Philosophy() {
  return (
    <section className="py-10 bg-white relative z-10">
      <div className="site">
        <div className="stats-card p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1*i }} className="text-center">
                  <Icon className={`w-6 h-6 mx-auto mb-3 ${s.color}`} />
                  <div className="text-[32px] font-bold text-heading leading-none mb-1">{s.value}</div>
                  <div className="text-[13px] text-muted">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
