'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { HeroTrustBadge } from './heroTrustData';

interface TrustBallProps {
  badge: HeroTrustBadge;
  state: 'hidden' | 'falling' | 'bouncing' | 'floating' | 'pill';
  onStateChange: (newState: 'hidden' | 'falling' | 'bouncing' | 'floating' | 'pill') => void;
  startX: number;
  landY: number;
  targetX: number;
  targetY: number;
  ballSize: number;
}

export default function TrustBall({
  badge,
  state,
  onStateChange,
  startX,
  landY,
  targetX,
  targetY,
  ballSize,
}: TrustBallProps) {
  const primaryColor = 'var(--color-brand)';
  const lighterColor = 'var(--color-brand-light)';

  useEffect(() => {
    if (state === 'bouncing') {
      // Transition from bouncing to floating after 0.8s (duration of bounce) + 0.3s (pause)
      const timer = setTimeout(() => {
        onStateChange('floating');
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [state, onStateChange]);

  if (state === 'hidden' || state === 'pill') return null;

  // Animation variants
  const variants: Variants = {
    falling: {
      opacity: [0, 1, 1],
      y: landY,
      x: 0,
      scale: 1,
      transition: {
        opacity: { times: [0, 0.15, 1], duration: 0.7, ease: 'linear' },
        y: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    },
    bouncing: {
      y: [
        landY,
        landY - ballSize * 1.0, // First bounce
        landY,
        landY - ballSize * 0.5, // Second bounce
        landY,
        landY - ballSize * 0.2, // Third bounce
        landY,
      ],
      scaleX: [1, 0.8, 1.25, 0.9, 1.12, 0.95, 1.03, 1],
      scaleY: [1, 1.2, 0.75, 1.1, 0.88, 1.05, 0.97, 1],
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'linear',
      },
    },
    floating: {
      x: targetX - startX,
      y: targetY,
      scale: 0.7,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // overshoot spring ease
      },
    },
  };

  const handleAnimationComplete = (definition: string) => {
    if (definition === 'falling') {
      onStateChange('bouncing');
    } else if (definition === 'floating') {
      // Small pause before morphing into the pill
      setTimeout(() => {
        onStateChange('pill');
      }, 150);
    }
  };

  const shadowColor = 'rgba(232, 89, 12, 0.35)';

  return (
    <motion.div
      initial={{ y: -80, x: 0, opacity: 0, scale: 1 }}
      animate={state}
      variants={variants}
      onAnimationComplete={handleAnimationComplete}
      className="fixed z-[9999] rounded-full border-2 border-white/35 flex items-center justify-center will-change-transform select-none pointer-events-none"
      style={{
        width: `${ballSize}px`,
        height: `${ballSize}px`,
        left: `${startX}px`,
        top: 0,
        background: `linear-gradient(135deg, ${lighterColor} 0%, ${primaryColor} 100%)`,
        boxShadow: `0 4px 16px ${shadowColor}`,
      }}
    >
      {/* 3D Glossy Shine Overlay */}
      <div 
        className="absolute rounded-full bg-white/40 blur-[1px] pointer-events-none"
        style={{
          width: `${ballSize * 0.27}px`,
          height: `${ballSize * 0.27}px`,
          top: `${ballSize * 0.14}px`,
          left: `${ballSize * 0.18}px`,
        }}
      />

      {/* SVG Icon Center */}
      <div 
        className="text-white flex items-center justify-center"
        style={{
          width: `${ballSize * 0.45}px`,
          height: `${ballSize * 0.45}px`,
        }}
      >
        {badge.svg}
      </div>
    </motion.div>
  );
}
