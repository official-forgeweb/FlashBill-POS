'use client';

import { motion, Variants } from 'framer-motion';
import { TrustBadge } from './trustData';

interface BadgeItemProps {
  badge: TrustBadge;
  variant: 'homepage' | 'pricing' | 'contact';
}

export default function BadgeItem({ badge, variant }: BadgeItemProps) {
  // SVG Icon Renderer
  const renderIcon = (extraClass = '') => (
    <svg
      className={`w-5 h-5 shrink-0 ${extraClass}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: badge.iconPath }}
    />
  );

  if (variant === 'homepage') {
    // Horizontal row item, small, clean, high text readability, sleek micro-borders, minimal icons
    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 10 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 }
      }
    };

    return (
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 bg-white/60 hover:bg-white border border-[#E5E7EB] hover:border-[#E8590C]/30 px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#E8590C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {renderIcon('w-4 h-4')}
        </div>
        <div className="text-left leading-tight">
          <p className="text-[12px] font-bold text-[#0A0A0A] tracking-tight">{badge.title}</p>
          <p className="text-[10px] text-[#6B7280] font-medium">{badge.subtitle}</p>
        </div>
      </motion.div>
    );
  }

  if (variant === 'pricing') {
    // Card slide-up and fade-in on hover, center text, larger icon with background
    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 80, damping: 15 }
      }
    };

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6, scale: 1.02 }}
        className="bg-white border border-[#E5E7EB] hover:border-[#E8590C]/30 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-default"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7ED]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="w-12 h-12 rounded-full bg-[#FFF7ED] text-[#E8590C] flex items-center justify-center mb-4 group-hover:bg-[#E8590C] group-hover:text-white transition-all duration-300 shadow-inner">
          {renderIcon('w-5 h-5')}
        </div>
        <h4 className="text-[16px] font-bold text-[#0A0A0A] mb-1 group-hover:text-[#E8590C] transition-colors duration-300">
          {badge.title}
        </h4>
        <p className="text-[13px] text-[#6B7280] font-medium leading-relaxed">
          {badge.subtitle}
        </p>
      </motion.div>
    );
  }

  // contact variant: Compact vertical stack, left-aligned, matching contact info page styling.
  // Slide-in from left list items
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-5 bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#E8590C]/30 transition-all group text-left"
    >
      <div className="w-12 h-12 rounded-full bg-[#FFF7ED] text-[#E8590C] flex items-center justify-center shrink-0 group-hover:bg-[#E8590C] group-hover:text-white transition-colors duration-300">
        {renderIcon('w-5 h-5')}
      </div>
      <div>
        <p className="text-[14px] text-[#0A0A0A] font-bold tracking-tight">{badge.title}</p>
        <p className="text-[12px] text-[#6B7280] font-medium mt-0.5">{badge.subtitle}</p>
      </div>
    </motion.div>
  );
}
