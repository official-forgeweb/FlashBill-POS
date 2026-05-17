'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Unlock scroll after animation is mostly done
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1000);
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed inset-0 z-[10000] pointer-events-none flex">
          {/* Staggered Panels */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: '100%' }}
              exit={{ height: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.76, 0, 0.24, 1], 
                delay: i * 0.06 
              }}
              className="flex-1 bg-[#0A0A0A] border-r border-[#1a1a1a] last:border-none origin-bottom"
            />
          ))}

          {/* Logo overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 mix-blend-difference text-white"
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight"
              >
                <span className="text-[#E8590C]">Flash</span>Bill.
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mt-6">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <p className="text-[#A1A1AA] text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-4">
                  Initializing Offline Core
                </p>
                <div className="w-[150px] h-[2px] bg-[#333] relative overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
                    className="absolute inset-0 bg-[#E8590C]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
