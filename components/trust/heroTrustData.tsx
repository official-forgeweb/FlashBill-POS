import { ReactNode } from 'react';

export interface HeroTrustBadge {
  id: string;
  svg: ReactNode;
  label: string;
  sublabel: string;
  color: string;
  delay: number;
}

export const heroTrustBadges: HeroTrustBadge[] = [
  {
    id: 'india',
    label: 'Made in India',
    sublabel: 'Built for Indian businesses',
    color: '#FF9933',
    delay: 0.0,
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Saffron Stripe */}
        <rect x="2" y="5" width="20" height="4.5" fill="#FF9933" rx="0.5" />
        {/* White Stripe */}
        <rect x="2" y="9.5" width="20" height="4.5" fill="#FFFFFF" rx="0.5" />
        {/* Green Stripe */}
        <rect x="2" y="14" width="20" height="4.5" fill="#128807" rx="0.5" />
        {/* Ashoka Chakra */}
        <circle cx="12" cy="11.75" r="2.1" stroke="#000088" strokeWidth="0.4" fill="none" />
        <circle cx="12" cy="11.75" r="0.35" fill="#000088" />
        {/* Spokes (Simplistic clean lines) */}
        <line x1="12" y1="9.65" x2="12" y2="13.85" stroke="#000088" strokeWidth="0.15" />
        <line x1="9.9" y1="11.75" x2="14.1" y2="11.75" stroke="#000088" strokeWidth="0.15" />
        <line x1="10.5" y1="10.25" x2="13.5" y2="13.25" stroke="#000088" strokeWidth="0.15" />
        <line x1="10.5" y1="13.25" x2="13.5" y2="10.25" stroke="#000088" strokeWidth="0.15" />
      </svg>
    ),
  },
  {
    id: 'gst',
    label: 'GST Compliant',
    sublabel: 'Auto GST calculation',
    color: '#00a651',
    delay: 0.2,
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: 'offline',
    label: 'Works Offline',
    sublabel: 'No internet needed',
    color: '#f59e0b',
    delay: 0.4,
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'secure',
    label: '100% Secure',
    sublabel: 'Local data storage',
    color: '#3b82f6',
    delay: 0.6,
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9" y="11" width="6" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 11V9.5a2 2 0 0 1 4 0V11" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'subscription',
    label: 'No Subscriptions',
    sublabel: 'Pay once, own forever',
    color: '#22c55e',
    delay: 0.8,
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'setup',
    label: '24hr Setup',
    sublabel: 'We install everything',
    color: '#a855f7',
    delay: 1.0,
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.2.2 2.4.6 3.4L6 12l6 6 3.4 3.4c1-.4 2.2-.6 3.4-.6 5.5 0 10-4.5 10-10S22.5 2 17 2z" />
        <path d="M9 15 2 22" />
        <path d="M17 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
  },
];
