'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'dark' | 'outline' | 'white';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantClasses = {
  blue: 'bg-brand-blue text-white shadow-[0_4px_20px_rgba(30,64,255,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(30,64,255,0.4)]',
  dark: 'bg-black text-white hover:bg-brand-blue',
  outline: 'bg-white text-black border-[1.5px] border-border hover:border-black',
  white: 'bg-white text-black hover:translate-y-[-2px]',
};

export default function Button({
  children,
  variant = 'blue',
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
