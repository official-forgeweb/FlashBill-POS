'use client';

import { motion, Variants } from 'framer-motion';
import { HeroTrustBadge } from './heroTrustData';

interface TrustPillProps {
  badge: HeroTrustBadge;
  bottomOffset: number;
  isMobile: boolean;
  ballSize: number;
}

export default function TrustPill({ badge, bottomOffset, isMobile, ballSize }: TrustPillProps) {
  const primaryColor = 'var(--color-brand)';
  const lighterColor = 'var(--color-brand-light)';

  const pillWidth = isMobile ? 160 : 200;
  const pillHeight = isMobile ? 36 : 44;
  const rightOffset = isMobile ? 12 : 24;

  const shadowNormal = 'rgba(232, 89, 12, 0.35)';
  const shadowHover = 'rgba(232, 89, 12, 0.5)';

  // Content reveal stagger variants
  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.05,
      },
    },
  };

  const textLineVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ width: ballSize, height: ballSize, scale: 0.7, borderRadius: '9999px' }}
      animate={{ width: pillWidth, height: pillHeight, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: `0 8px 24px ${shadowHover}` }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      role="listitem"
      aria-label={`${badge.label}: ${badge.sublabel}`}
      className="fixed z-[9999] border border-white/25 flex items-center shadow-lg cursor-default select-none overflow-hidden"
      style={{
        right: `${rightOffset}px`,
        bottom: `${bottomOffset}px`,
        background: `linear-gradient(135deg, ${lighterColor} 0%, ${primaryColor} 100%)`,
        boxShadow: `0 4px 20px ${shadowNormal}, 0 1px 0 rgba(255,255,255,0.15) inset`,
      }}
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex items-center gap-2 px-[14px] md:gap-2.5"
        style={{
          paddingLeft: isMobile ? '10px' : '14px',
          paddingRight: isMobile ? '10px' : '14px',
        }}
      >
        {/* Left Side SVG */}
        <motion.div
          variants={textLineVariants}
          className="text-white shrink-0 flex items-center justify-center"
          style={{
            width: isMobile ? '14px' : '16px',
            height: isMobile ? '14px' : '16px',
          }}
        >
          {badge.svg}
        </motion.div>

        {/* Right Side Stack */}
        <div className="flex flex-col text-left leading-tight overflow-hidden">
          <motion.span
            variants={textLineVariants}
            className="text-white font-bold tracking-wide truncate"
            style={{
              fontSize: isMobile ? '10px' : '12px',
            }}
          >
            {badge.label}
          </motion.span>
          <motion.span
            variants={textLineVariants}
            className="text-white/70 truncate"
            style={{
              fontSize: isMobile ? '8.5px' : '10px',
            }}
          >
            {badge.sublabel}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
