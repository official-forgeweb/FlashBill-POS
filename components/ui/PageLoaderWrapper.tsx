'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Info, MessageSquare, BookOpen, FileText } from 'lucide-react';

const PAGE_CONFIG = {
  about: {
    icon: Info,
    text: 'LOADING ABOUT...',
  },
  contact: {
    icon: MessageSquare,
    text: 'LOADING CONTACT...',
  },
  blog: {
    icon: BookOpen,
    text: 'LOADING BLOG...',
  },
  'blog-post': {
    icon: FileText,
    text: 'LOADING ARTICLE...',
  },
};

export function PageLoaderWrapper({ page, children }: { page: 'about' | 'contact' | 'blog' | 'blog-post', children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const config = PAGE_CONFIG[page];
  const Icon = config.icon;

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Unlock scroll after animation is mostly done
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <div className="fixed inset-0 z-[40] pointer-events-none flex items-center justify-center bg-[#FAFAFA]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center mt-10"
            >
              {/* Elegant pulse loader with SVG */}
              <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#E8590C]/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-[3px] border-[#E8590C]/20 border-t-[#E8590C] rounded-full"
                />
                <Icon className="w-6 h-6 text-[#E8590C] stroke-[2.5]" />
              </div>
              
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                  className="text-[#6B7280] text-[11px] font-bold uppercase tracking-[0.2em]"
                >
                  {config.text}
                </motion.p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Page content renders underneath the fixed loader overlay */}
      {children}
    </>
  );
}
