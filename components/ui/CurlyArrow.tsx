'use client';

import { motion } from 'framer-motion';

type Direction = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const pathData: Record<Direction, string> = {
  'bottom-right': 'M 10 5 C 15 20, 35 15, 25 35 S 55 50, 45 70 S 70 80, 75 95',
  'bottom-left':  'M 90 5 C 85 20, 65 15, 75 35 S 45 50, 55 70 S 30 80, 25 95',
  'top-right':    'M 10 95 C 15 80, 35 85, 25 65 S 55 50, 45 30 S 70 20, 75 5',
  'top-left':     'M 90 95 C 85 80, 65 85, 75 65 S 45 50, 55 30 S 30 20, 25 5',
};

const arrowHeads: Record<Direction, { x: number; y: number; rotate: number }> = {
  'bottom-right': { x: 75, y: 95, rotate: 160 },
  'bottom-left':  { x: 25, y: 95, rotate: 200 },
  'top-right':    { x: 75, y: 5, rotate: -20 },
  'top-left':     { x: 25, y: 5, rotate: 20 },
};

export default function CurlyArrow({ direction }: { direction: Direction }) {
  const ah = arrowHeads[direction];

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="overflow-visible shrink-0"
      fill="none"
    >
      <motion.path
        d={pathData[direction]}
        stroke="#E8590C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
      />
      <motion.polygon
        points="0,-5 10,0 0,5"
        fill="#E8590C"
        transform={`translate(${ah.x}, ${ah.y}) rotate(${ah.rotate})`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.3 }}
        viewport={{ once: true }}
      />
    </svg>
  );
}
