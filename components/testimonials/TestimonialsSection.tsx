"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { testimonialsData } from "./testimonialsData";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    // We wait for layout to settle, then measure
    // Since the array is perfectly duplicated, half the scrollWidth is our loop point
    if (containerRef.current) {
      // Small timeout to ensure fonts and layout have rendered
      setTimeout(() => {
        if (containerRef.current) {
          const totalWidth = containerRef.current.scrollWidth;
          setContentWidth(totalWidth / 2);
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (contentWidth === 0) return;

    if (!isHovered) {
      controls.start({
        x: -contentWidth,
        transition: {
          duration: 35, // Smooth, slow speed
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      });
    } else {
      controls.stop();
    }
  }, [contentWidth, isHovered, controls]);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#fcfcfc] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 text-center flex flex-col items-center">
        <div className="inline-block px-3 py-1 mb-6 rounded-sm bg-[#fff7ed] border border-[#ffedd5]">
          <span className="text-xs font-mono tracking-widest text-[#e8590c] uppercase">
            <span className="mr-2">●</span>
            Testimonials
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
          Trusted by 100+ businesses
        </h2>
        
        <p className="text-gray-500 text-lg max-w-2xl">
          Real feedback from restaurants, cafes & retail shops across India
        </p>
      </div>

      {/* Carousel */}
      <div 
        className="w-full relative py-4"
        style={{
          // Edge fade mask using CSS linear-gradient
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <motion.div
          ref={containerRef}
          animate={controls}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onPointerDown={() => setIsHovered(true)}
          onPointerUp={() => setIsHovered(false)}
          drag="x"
          // We constrain drag loosely, the seamless loop might break if user drags way too far left/right,
          // but for basic interaction it works perfectly well.
          dragConstraints={{ left: -contentWidth * 1.5, right: contentWidth * 0.5 }}
          dragElastic={0.1}
          onDragEnd={() => setIsHovered(false)}
          className="flex gap-6 w-max px-[20vw] cursor-grab active:cursor-grabbing items-center"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
