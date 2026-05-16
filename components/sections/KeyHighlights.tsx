'use client';
import { motion } from 'framer-motion';
import { WifiOff, Zap, Shield, IndianRupee, Printer, BarChart3, Users, Palette, ArrowUpRight } from 'lucide-react';

const highlights = [
  {
    num: '01', title: 'Offline-First System', desc: 'No internet dependency — billing never stops, even during outages.',
    icon: WifiOff, metric: '99.9%', metricLabel: 'Uptime',
  },
  {
    num: '02', title: 'Fast & Reliable', desc: 'Local processing delivers instant billing with zero latency.',
    icon: Zap, metric: '<50ms', metricLabel: 'Response',
  },
  {
    num: '03', title: 'Local Data Storage', desc: 'All data stays on your device — complete privacy, no cloud dependency.',
    icon: Shield, metric: '100%', metricLabel: 'Private',
  },
  {
    num: '04', title: 'QR & Website Orders', desc: 'Customers scan, order, and pay — seamlessly integrated into your workflow.',
    icon: IndianRupee, metric: '3x', metricLabel: 'Faster',
  },
  {
    num: '05', title: 'Automated Reports', desc: 'Hourly analytics delivered to your inbox — track performance effortlessly.',
    icon: Printer, metric: '24/7', metricLabel: 'Insights',
  },
  {
    num: '06', title: 'Complete Management', desc: 'Inventory, expense tracking, and staff management — all in one dashboard.',
    icon: BarChart3, metric: '13+', metricLabel: 'Modules',
  },
  {
    num: '07', title: 'Detailed Analytics', desc: 'Comprehensive business insights with visual dashboards and trend analysis.',
    icon: Users, metric: '50+', metricLabel: 'Metrics',
  },
  {
    num: '08', title: '100% Customizable', desc: 'Tailored to your exact business needs — menus, receipts, taxes, and more.',
    icon: Palette, metric: '∞', metricLabel: 'Flexibility',
  },
];

export default function KeyHighlights() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-5">
            ● WHY FLASHBILL
          </span>
          <h2 className="text-[clamp(30px,4.5vw,46px)] font-black text-[#0A0A0A] leading-tight">
            Why businesses{' '}
            <span
              className="text-[#E8590C] font-medium"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              choose
            </span>{' '}
            FlashBill
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#FAFAFA] hover:bg-white border border-transparent hover:border-[#E5E7EB] rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] cursor-default"
              >
                {/* Top row: number + arrow */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold text-[#D1D5DB] uppercase tracking-[0.15em]">{item.num}</span>
                  <div className="w-7 h-7 rounded-full bg-transparent group-hover:bg-[#FFF7ED] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E8590C]" />
                  </div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#FFF7ED] border border-[#E5E7EB] group-hover:border-[#E8590C]/20 flex items-center justify-center mb-5 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#E8590C] transition-colors duration-300" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-[#0A0A0A] mb-2 group-hover:text-[#E8590C] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#9CA3AF] leading-relaxed mb-5 group-hover:text-[#6B7280] transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Bottom metric */}
                <div className="pt-4 border-t border-[#F3F4F6] group-hover:border-[#E5E7EB] transition-colors duration-300 flex items-baseline gap-2">
                  <span className="text-[22px] font-black text-[#0A0A0A] leading-none">{item.metric}</span>
                  <span className="text-[10px] font-bold text-[#D1D5DB] uppercase tracking-[0.15em]">{item.metricLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
