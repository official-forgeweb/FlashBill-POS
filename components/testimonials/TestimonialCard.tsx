"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { Testimonial } from "./testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion value tracking the distance from the viewport center
  const xDist = useMotionValue(0);
  
  // Transform distance to scale (1 at center, 0.85 at edges)
  const scale = useTransform(xDist, [-800, 0, 800], [0.85, 1, 0.85]);
  // Transform distance to opacity (1 at center, 0.3 at edges)
  const opacity = useTransform(xDist, [-800, -300, 0, 300, 800], [0.3, 0.6, 1, 0.6, 0.3]);

  useAnimationFrame(() => {
    if (!cardRef.current) return;
    
    const viewportCenter = window.innerWidth / 2;
    const rect = cardRef.current.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    
    // Set distance to the motion value
    xDist.set(cardCenter - viewportCenter);
  });

  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="flex-shrink-0 w-[300px] sm:w-[380px] bg-white rounded-3xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-200/80 flex flex-col gap-5"
    >
      <div className="flex text-[#e8590c] gap-1 text-xl tracking-widest">
        ★★★★★
      </div>
      
      <p className="text-gray-800 text-[15px] sm:text-[17px] leading-relaxed flex-grow font-medium">
        "{testimonial.review}"
      </p>
      
      <div className="flex items-center gap-4 mt-2 pt-5 border-t border-gray-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#fff7ed] to-[#ffe4c4] text-[#e8590c] flex items-center justify-center font-bold text-sm shrink-0 border border-[#ffd8a8]/50">
          {initials}
        </div>
        <div className="flex flex-col flex-grow min-w-0">
          <h4 className="text-gray-900 font-bold text-[15px] truncate">{testimonial.name}</h4>
          <span className="text-gray-500 text-xs sm:text-sm truncate">{testimonial.businessName}, {testimonial.location}</span>
        </div>
        <div className="px-2.5 py-1.5 rounded-md bg-[#f9fafb] border border-gray-200/80 text-gray-600 text-[10px] font-bold tracking-widest uppercase shrink-0 shadow-sm">
          {testimonial.tag}
        </div>
      </div>
    </motion.div>
  );
}
