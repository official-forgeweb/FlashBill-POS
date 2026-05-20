'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppTooltip from './WhatsAppTooltip';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

export default function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [autoShowActive, setAutoShowActive] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Notification dot appears after 3 seconds with a bounce
    const dotTimer = setTimeout(() => {
      setShowDot(true);
    }, 3000);

    // 2. Auto-tooltip appears after 5 seconds on the first visit only
    const tooltipTimer = setTimeout(() => {
      try {
        const wasShown = localStorage.getItem('flashbill_wa_shown');
        const wasClosed = localStorage.getItem('wa_tooltip_closed');

        if (!wasShown && !wasClosed) {
          setAutoShowActive(true);
          localStorage.setItem('flashbill_wa_shown', 'true');
        }
      } catch (error) {
        console.warn('LocalStorage is not accessible:', error);
      }
    }, 5000);

    // 3. Pulse ring stops after 8 seconds
    const pulseTimer = setTimeout(() => {
      setShowPulse(false);
    }, 8000);

    return () => {
      clearTimeout(dotTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  // Avoid hydration mismatch by not rendering on server initial load
  if (!mounted) return null;

  // Do not render the WhatsApp button on the contact page
  if (pathname === '/contact') return null;

  // Tooltip shows when hovered OR when auto-shown (unless closed)
  const shouldShowTooltip = (autoShowActive && !isClosed) || isHovered;

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the main button click
    setIsClosed(true);
    try {
      localStorage.setItem('wa_tooltip_closed', 'true');
    } catch (error) {
      console.warn('LocalStorage write failed:', error);
    }
  };

  const handleButtonClick = () => {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9998] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {shouldShowTooltip && (
          <WhatsAppTooltip onClose={handleCloseTooltip} />
        )}
      </AnimatePresence>

      <button
        onClick={handleButtonClick}
        className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center cursor-pointer select-none shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 z-10"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7 text-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M11.99 2C6.469 2 2 6.471 2 11.99c0 1.763.46 3.419 1.258 4.866L2 22l5.29-1.232 A9.953 9.953 0 0011.99 22 C17.511 22 22 17.529 22 12.01 22 6.469 17.511 2 11.99 2z" />
        </svg>

        {/* Pulse ring (attention grabber) - stops animating and hides after 8s */}
        <AnimatePresence>
          {showPulse && (
            <motion.span
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: 1.6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="absolute inset-0 rounded-full bg-[#25d366] -z-10"
            />
          )}
        </AnimatePresence>

        {/* Notification dot - appears with scale/bounce animation after 3s */}
        <AnimatePresence>
          {showDot && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute top-0.5 right-0.5 block h-2 w-2 rounded-full bg-[#ef4444] border border-white ring-1 ring-red-500/20 z-20"
            />
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
