'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'accent' | 'dark' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantClasses = {
  accent: 'bg-gradient-to-r from-[#C2651A] to-[#D4793A] text-white shadow-[0_4px_20px_rgba(194,101,26,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(194,101,26,0.4)]',
  dark: 'bg-[#1A1A24] text-white border border-[rgba(255,255,255,0.06)] hover:border-[rgba(194,101,26,0.2)]',
  outline: 'bg-transparent text-heading border-[1.5px] border-[rgba(255,255,255,0.08)] hover:border-[rgba(194,101,26,0.3)] hover:text-[#D4793A]',
  ghost: 'bg-transparent text-heading border-[1.5px] border-[rgba(255,255,255,0.06)] hover:border-[rgba(194,101,26,0.2)] hover:text-[#D4793A] hover:bg-[rgba(194,101,26,0.04)]',
};

export default function Button({
  children,
  variant = 'accent',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className,
  fullWidth = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer no-underline',
    variantClasses[variant],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
