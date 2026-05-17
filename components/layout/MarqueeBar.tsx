'use client';

import { motion } from 'framer-motion';

const marqueeItems = [
  { text: 'BLAZING FAST POS', type: 'normal' as const },
  { text: 'FREE FOREVER', type: 'pill' as const },
  { text: 'TRY NOW', type: 'cta' as const },
  { text: 'FLASHBILL', type: 'brand' as const },
  { text: 'OFFLINE-FIRST', type: 'normal' as const },
  { text: 'NO FEES', type: 'pill' as const },
  { text: 'START BILLING', type: 'cta' as const },
  { text: 'FORGEWEB', type: 'brand' as const },
];

function MarqueeItem({ item }: { item: typeof marqueeItems[number] }) {
  return (
    <span className="inline-flex items-center gap-6 mx-6">
      {item.type === 'pill' ? (
        <span className="px-4 py-1.5 rounded-full border border-[#2D9B4E] text-[#2D9B4E] bg-[#EAFAF0] font-bold uppercase tracking-widest text-[11px]">
          {item.text}
        </span>
      ) : item.type === 'cta' ? (
        <span className="text-[#FF6B35] font-bold">
          {item.text} <span className="ml-1">↗</span>
        </span>
      ) : item.type === 'brand' ? (
        <span className="font-black text-[#1E1E2D]">{item.text}</span>
      ) : (
        <span className="text-[#6B7280] font-semibold">{item.text}</span>
      )}
      <span className="text-[#E5E7EB] text-[8px]">◆</span>
    </span>
  );
}

export default function MarqueeBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative bg-white border-y border-[#E5E7EB] py-4 overflow-hidden select-none"
    >
      <div className="marquee-container relative">
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
