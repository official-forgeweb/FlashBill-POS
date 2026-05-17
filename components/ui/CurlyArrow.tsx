'use client';

import { motion } from 'framer-motion';

type Direction = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// Double-wiggle paths ending perfectly horizontal.
const pathData: Record<Direction, string> = {
  'top-left':     'M 90 90 C 70 60, 80 50, 50 50 C 20 50, 30 20, 5 20',
  'top-right':    'M 10 90 C 30 60, 20 50, 50 50 C 80 50, 70 20, 95 20',
  'bottom-left':  'M 90 10 C 70 40, 80 50, 50 50 C 20 50, 30 80, 5 80',
  'bottom-right': 'M 10 10 C 30 40, 20 50, 50 50 C 80 50, 70 80, 95 80',
};

// Arrowheads pointing in the correct final direction.
// The paths above end horizontally.
// 'top-left' & 'bottom-left' end pointing LEFT.
// 'top-right' & 'bottom-right' end pointing RIGHT.
const arrowHeads: Record<Direction, { x: number; y: number; points: string }> = {
  'top-left':     { x: 5,  y: 20, points: "0,0 10,-4 7,0 10,4" },   // Points Left
  'bottom-left':  { x: 5,  y: 80, points: "0,0 10,-4 7,0 10,4" },   // Points Left
  'top-right':    { x: 95, y: 20, points: "0,0 -10,-4 -7,0 -10,4" }, // Points Right
  'bottom-right': { x: 95, y: 80, points: "0,0 -10,-4 -7,0 -10,4" }, // Points Right
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
      {/* Wrapper <g> so Framer Motion's scale doesn't overwrite our translation */}
      <g transform={`translate(${ah.x}, ${ah.y})`}>
        <motion.polygon
          points={ah.points}
          fill="#E8590C"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.3, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "0px 0px" }}
        />
      </g>
    </svg>
  );
}
