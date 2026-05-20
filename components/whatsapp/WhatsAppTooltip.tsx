'use client';

import { motion } from 'framer-motion';

// Waving hand icon as SVG instead of raw emoji
const WavingHandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-amber-500 inline-block mr-1 align-middle wa-animate-wave"
  >
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M6 14a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h3" />
    <path d="M18 11a2 2 0 0 1 2 2v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.33l-1.68-1.68a1 1 0 0 1 .08-1.48l.81-.61a2 2 0 0 1 2.21-.24L9 15" />
  </svg>
);

// Lightning bolt icon as SVG instead of raw emoji
const LightningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3.5 h-3.5 text-[#25d366] inline-block mr-1 align-middle"
  >
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

interface WhatsAppTooltipProps {
  onClose: (e: React.MouseEvent) => void;
}

export default function WhatsAppTooltip({ onClose }: WhatsAppTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 8 }}
      transition={{ duration: 0.2, ease: 'backOut' }}
      className="fixed bottom-[76px] right-4 left-4 md:absolute md:bottom-[68px] md:right-0 md:left-auto md:w-[220px] md:max-w-[220px] bg-white border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.12)] p-4 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[4px] z-[9998] select-none text-left"
    >
      {/* Self-contained CSS for the wave animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wa-wave {
          0%, 100% { transform: rotate(0deg); }
          20%, 60% { transform: rotate(-15deg); }
          40%, 80% { transform: rotate(15deg); }
        }
        .wa-animate-wave {
          animation: wa-wave 1.5s infinite;
          transform-origin: 70% 70%;
        }
      `}} />

      {/* Speech bubble tail: modern rotated square matching border and background */}
      <div className="absolute bottom-[-5px] right-[15px] w-2.5 h-2.5 bg-white border-r border-b border-gray-200 rotate-45" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-50 cursor-pointer"
        aria-label="Close message"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Online indicator */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25d366]"></span>
        </span>
        <span className="text-[10px] font-semibold text-[#25d366] uppercase tracking-wider">
          Online
        </span>
      </div>

      {/* Message content */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-900 leading-tight flex items-center">
          <WavingHandIcon />
          <span>Hi! Need help with FlashBill?</span>
        </h4>
        <p className="text-xs text-gray-500">
          Chat with us on WhatsApp
        </p>
      </div>

      {/* Reply indicator */}
      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center text-[11px] font-medium text-[#25d366]">
        <LightningIcon />
        <span>Usually replies in minutes</span>
      </div>
    </motion.div>
  );
}
