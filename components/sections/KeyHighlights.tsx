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
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[9px] font-bold text-[#E8590C] mb-3">
            ● WHY FLASHBILL
          </span>
          <h2 className="text-[clamp(24px,4vw,38px)] font-black text-[#0A0A0A] leading-tight">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.05 * i, duration: 0.5, type: "spring", stiffness: 120 }}
                className="group relative bg-[#FAFAFA] border border-[#E5E7EB] rounded-[16px] p-5 transition-all duration-300 hover:bg-white hover:border-[#E8590C]/30 hover:shadow-[0_15px_35px_-10px_rgba(232,89,12,0.1)] hover:-translate-y-1 cursor-default overflow-hidden"
              >
                {/* Decorative background gradient on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-[#FFE4E6]/60 via-[#FFF7ED]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl pointer-events-none" />

                {/* Top row: number + arrow */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="text-[10px] font-bold text-[#9CA3AF] group-hover:text-[#E8590C] uppercase tracking-[0.15em] transition-colors duration-300">{item.num}</span>
                  <div className="w-6 h-6 rounded-full bg-[#E5E7EB]/50 group-hover:bg-[#E8590C] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-[10px] bg-white group-hover:bg-[#FFF7ED] border border-[#E5E7EB] group-hover:border-[#E8590C]/20 flex items-center justify-center mb-4 transition-all duration-300 relative z-10 shadow-sm shadow-black/[0.02]">
                  <Icon className="w-4 h-4 text-[#4B5563] group-hover:text-[#E8590C] transition-colors duration-300" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-bold text-[#0A0A0A] mb-1.5 relative z-10 group-hover:text-[#E8590C] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-[#6B7280] leading-[1.5] mb-5 relative z-10">
                  {item.desc}
                </p>

                {/* Bottom metric */}
                <div className="pt-3 border-t border-[#E5E7EB]/70 group-hover:border-[#E8590C]/20 transition-colors duration-300 flex items-baseline gap-1.5 relative z-10">
                  <span className="text-[18px] font-black text-[#0A0A0A] leading-none tracking-tight">{item.metric}</span>
                  <span className="text-[9px] font-bold text-[#9CA3AF] group-hover:text-[#E8590C] uppercase tracking-[0.15em] transition-colors duration-300">{item.metricLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
