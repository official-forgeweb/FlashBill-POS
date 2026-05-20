export interface TrustBadge {
  id: string;
  title: string;
  subtitle: string;
  iconPath: string; // The inner SVG paths/elements
}

export const homepageBadges: TrustBadge[] = [
  {
    id: 'lifetime-ownership',
    title: 'Lifetime ownership',
    subtitle: 'No recurring subscriptions',
    // Infinity symbol
    iconPath: '<path d="M12 17a5 5 0 0 1-5-5 5 5 0 0 1 5-5c2 0 3.5 1 5 3 1.5-2 3-3 5-3a5 5 0 0 1 5 5 5 5 0 0 1-5 5c-2 0-3.5-1-5-3-1.5 2-3 3-5 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'offline-operation',
    title: 'Free offline operation',
    subtitle: 'No cloud dependencies',
    // Cloud off symbol
    iconPath: '<path d="m2 2 20 20M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 6.85 5.062" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'developer-codebase',
    title: 'Developer-friendly codebase',
    subtitle: 'Next.js 14+ / TypeScript',
    // Code symbol
    iconPath: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
];

export const pricingBadges: TrustBadge[] = [
  {
    id: 'risk-free',
    title: '100% Risk-Free Guarantee',
    subtitle: '14-day refund window',
    // Shield Check symbol
    iconPath: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 11 2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'instant-delivery',
    title: 'Instant License Delivery',
    subtitle: 'Start in under 2 minutes',
    // Lightning/Zap symbol
    iconPath: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'secure-payment',
    title: 'Secure Payment Gateways',
    subtitle: 'PCI-DSS compliant checkouts',
    // Lock symbol
    iconPath: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
];

export const contactBadges: TrustBadge[] = [
  {
    id: 'direct-developer-support',
    title: 'Direct Developer Support',
    subtitle: 'No automated ticket queues',
    // Headphones support symbol
    iconPath: '<path d="M3 18v-6a9 9 0 0 1 18 0v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'custom-integration',
    title: 'Custom Integration Consulting',
    subtitle: 'Tailored POS setups available',
    // Wrench/consulting symbol
    iconPath: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'comprehensive-docs',
    title: 'Comprehensive Documentation',
    subtitle: 'APIs, guides & setup tutorials',
    // Book open symbol
    iconPath: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
];
