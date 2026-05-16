'use client';

import { motion } from 'framer-motion';

const marqueeItems = [
  { text: 'BLAZING FAST POS & BILLING', type: 'normal' as const },
  { text: '₹20,000 LIFETIME', type: 'pill' as const },
  { text: 'GET STARTED', type: 'cta' as const },
  { text: 'FLASHBILL', type: 'brand' as const },
  { text: 'OFFLINE-FIRST SYSTEM', type: 'normal' as const },
  { text: '13+ FEATURES', type: 'pill' as const },
  { text: 'NO MONTHLY FEES', type: 'normal' as const },
  { text: 'BUILT BY FORGEWEB', type: 'brand' as const },
];

function MarqueeItem({ item }: { item: typeof marqueeItems[number] }) {
  return (
    <span className="inline-flex items-center gap-6 mx-6">
      {item.type === 'pill' ? (
        <span className="px-4 py-1.5 rounded-full border border-white/20 text-white/90">
          {item.text}
        </span>
      ) : item.type === 'cta' ? (
        <span className="text-brand-blue-light font-bold">
          {item.text} <span className="ml-1">↗</span>
        </span>
      ) : item.type === 'brand' ? (
        <span className="font-black">{item.text}</span>
      ) : (
        <span>{item.text}</span>
      )}
      <span className="text-white/30 text-[8px]">●</span>
    </span>
  );
}

export default function MarqueeBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="bg-black text-white py-4 overflow-hidden select-none"
    >
      <div className="marquee-container">
        <div className="marquee-content text-[13px] font-bold tracking-[0.12em]">
          {[...Array(4)].map((_, repeat) =>
            marqueeItems.map((item, i) => (
              <MarqueeItem key={`${repeat}-${i}`} item={item} />
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}
