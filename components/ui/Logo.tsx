'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant?: 'default' | 'light' | 'dark';
  showText?: boolean;
}

export function LogoIcon({ className = "w-8 h-8", variant = 'default' }: { className?: string; variant?: 'default' | 'light' | 'dark' }) {
  // Color configuration based on variant
  const bgGradStart = variant === 'light' ? '#FF8C00' : '#E8590C';
  const bgGradEnd = variant === 'light' ? '#FF5500' : '#B83E00';
  
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main Background Gradient */}
        <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bgGradStart} />
          <stop offset="100%" stopColor={bgGradEnd} />
        </linearGradient>
        
        {/* Glow / Shadow filter for high-end look */}
        <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#E8590C" floodOpacity="0.3" />
        </filter>

        {/* 3D Bolt Gradients */}
        <linearGradient id="boltLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFE0B2" />
        </linearGradient>
        <linearGradient id="boltRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE5D9" />
          <stop offset="100%" stopColor="#FFB74D" />
        </linearGradient>

        {/* Card Overlay Gradient */}
        <linearGradient id="cardOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* Main Premium Rounded Container */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="26"
        fill="url(#logoBgGrad)"
        filter="url(#premiumGlow)"
      />

      {/* Glossy inner border */}
      <rect
        x="7.5"
        y="7.5"
        width="85"
        height="85"
        rx="24.5"
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.15"
      />

      {/* Bill / Receipt Background Elements (Subtle lines inside the container) */}
      <path
        d="M 28 32 L 72 32 L 64 72 L 20 72 Z"
        fill="url(#cardOverlay)"
      />
      <line x1="32" y1="40" x2="68" y2="40" stroke="white" strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round" />
      <line x1="30" y1="48" x2="52" y2="48" stroke="white" strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round" />
      <line x1="28" y1="56" x2="60" y2="56" stroke="white" strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round" />

      {/* Highly-tuned 3D Split Lightning Bolt */}
      {/* Left / Front Facet */}
      <path
        d="M 54 18 L 28 55 H 48 L 46 82 L 50 50 Z"
        fill="url(#boltLeftGrad)"
      />
      
      {/* Right / Shadow Facet */}
      <path
        d="M 54 18 L 50 50 L 46 82 L 52 45 H 72 Z"
        fill="url(#boltRightGrad)"
      />

      {/* Micro-spark Dot at the tip */}
      <circle cx="46" cy="82" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

export default function Logo({
  className = "flex items-center gap-2.5 group",
  iconClassName = "w-8 h-8",
  textClassName = "",
  variant = 'default',
  showText = true
}: LogoProps) {
  
  const textColorClass = variant === 'dark' 
    ? 'text-white' 
    : 'text-[#0A0A0A]';

  return (
    <div className={className}>
      <motion.div
        whileHover={{ rotate: [0, -5, 10, 0], scale: 1.08 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="shrink-0"
      >
        <LogoIcon className={iconClassName} variant={variant} />
      </motion.div>
      
      {showText && (
        <span className={`text-[19px] tracking-tight font-extrabold flex items-center ${textColorClass} ${textClassName}`}>
          <span>Flash</span>
          <span className="text-[#E8590C] font-black relative flex items-center">
            Bill
            {/* Elegant tiny neon dot after the text */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8590C] ml-0.5 inline-block shadow-sm shadow-[#E8590C]" />
          </span>
        </span>
      )}
    </div>
  );
}
