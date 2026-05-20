'use client';

import { motion } from 'framer-motion';
import { homepageBadges, pricingBadges, contactBadges } from './trustData';
import BadgeItem from './BadgeItem';

interface TrustBadgesProps {
  variant: 'homepage' | 'pricing' | 'contact';
}

export default function TrustBadges({ variant }: TrustBadgesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (variant === 'homepage') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-wrap items-center justify-center gap-4 mt-12 w-full max-w-4xl mx-auto"
      >
        {homepageBadges.map((badge) => (
          <BadgeItem key={badge.id} badge={badge} variant={variant} />
        ))}
      </motion.div>
    );
  }

  if (variant === 'pricing') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-16 w-full"
      >
        {/* Protected Purchase Label */}
        <div className="text-center mb-8">
          <span className="inline-block uppercase tracking-[0.25em] text-[11px] font-bold text-[#6B7280]">
            Your purchase is protected
          </span>
          <div className="w-12 h-[2px] bg-[#E8590C]/20 mx-auto mt-3 rounded-full" />
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pricingBadges.map((badge) => (
            <BadgeItem key={badge.id} badge={badge} variant={variant} />
          ))}
        </div>
      </motion.div>
    );
  }

  // contact variant: compact vertical stack
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="flex flex-col gap-4 w-full mt-10 border-t border-[#E5E7EB] pt-10"
    >
      <div className="mb-2">
        <h3 className="text-[16px] font-bold text-[#0A0A0A]">Why work with ForgeWeb?</h3>
        <p className="text-[13px] text-[#6B7280] mt-0.5">We build POS systems that scale with your business.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
        {contactBadges.map((badge) => (
          <BadgeItem key={badge.id} badge={badge} variant={variant} />
        ))}
      </div>
    </motion.div>
  );
}
