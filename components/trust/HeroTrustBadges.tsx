'use client';

import { useState, useEffect, useMemo, RefObject } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { heroTrustBadges, HeroTrustBadge } from './heroTrustData';
import TrustBall from './TrustBall';
import TrustPill from './TrustPill';

interface HeroTrustBadgesProps {
  heroRef: RefObject<HTMLDivElement | null>;
}

type BallState = 'hidden' | 'falling' | 'bouncing' | 'floating' | 'pill';

export default function HeroTrustBadges({ heroRef }: HeroTrustBadgesProps) {
  // Trigger animation when the hero section is in view
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  // Track viewport and hero section dimensions dynamically
  const [dimensions, setDimensions] = useState({
    width: 1200,
    height: 800,
    heroBottom: 700,
  });

  const isMobile = dimensions.width < 768;
  const isVerySmall = dimensions.width < 380;

  // Responsive layout values
  const ballSize = isMobile ? 36 : 44;
  const pillHeight = isMobile ? 36 : 44;
  const gap = isMobile ? 6 : 8;
  const bottomOffsetBase = isMobile ? 12 : 24;

  // Listen for resize events to recalculate layout parameters
  useEffect(() => {
    if (!isInView) return;

    const handleResize = () => {
      const rect = heroRef.current?.getBoundingClientRect();
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        heroBottom: rect ? rect.bottom : window.innerHeight * 0.7,
      });
    };

    // Run initially
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize); // Update rect on scroll

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [isInView, heroRef]);

  // Filter visible badges dynamically based on screen width
  const visibleBadges = useMemo(() => {
    if (isVerySmall) {
      // Hide top 2 badges (last 2 in array) to avoid screen overflow
      return heroTrustBadges.slice(0, 4);
    }
    return heroTrustBadges;
  }, [isVerySmall]);

  // Track animation states for all active balls
  const [ballStates, setBallStates] = useState<BallState[]>(() =>
    Array(heroTrustBadges.length).fill('hidden')
  );

  // Trigger animations sequentially based on delays
  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      // Skip the physical simulation and skip directly to the finished pill state
      setBallStates(Array(heroTrustBadges.length).fill('pill'));
      return;
    }

    const timers: NodeJS.Timeout[] = [];
    const STAGGER_DELAY = 1.2; // 1.2 seconds stagger between drops

    visibleBadges.forEach((badge, idx) => {
      const timer = setTimeout(() => {
        setBallStates((prev) => {
          const next = [...prev];
          next[idx] = 'falling';
          return next;
        });
      }, idx * STAGGER_DELAY * 1000);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, [isInView, shouldReduceMotion, visibleBadges]);

  const handleStateChange = (idx: number, newState: BallState) => {
    setBallStates((prev) => {
      const next = [...prev];
      next[idx] = newState;
      return next;
    });
  };

  return (
    <div role="list" className="pointer-events-none select-none">
      {/* 1. Falling/Bouncing Balls */}
      {visibleBadges.map((badge, idx) => {
        const rightOffset = isMobile ? 12 : 24;
        const targetX = dimensions.width - rightOffset - ballSize;
        const startX = targetX; // Drop straight down on the right side
        
        // Stacking starts from the bottom up
        const bottomOffset = bottomOffsetBase + idx * (pillHeight + gap);
        const targetY = dimensions.height - bottomOffset - ballSize;
        
        // Land and bounce on the ground level aligned with the bottom-most pill
        const landY = dimensions.height - bottomOffsetBase - ballSize;

        return (
          <TrustBall
            key={`ball-${badge.id}`}
            badge={badge}
            state={ballStates[idx]}
            onStateChange={(state) => handleStateChange(idx, state)}
            startX={startX}
            landY={landY}
            targetX={targetX}
            targetY={targetY}
            ballSize={ballSize}
          />
        );
      })}

      {/* 2. Stacking & Morphing Pills */}
      {visibleBadges.map((badge, idx) => {
        if (ballStates[idx] !== 'pill') return null;

        const bottomOffset = bottomOffsetBase + idx * (pillHeight + gap);

        return (
          <TrustPill
            key={`pill-${badge.id}`}
            badge={badge}
            bottomOffset={bottomOffset}
            isMobile={isMobile}
            ballSize={ballSize}
          />
        );
      })}
    </div>
  );
}
