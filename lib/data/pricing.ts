export interface PricingPlan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'BASIC',
    price: '₹12k–15k',
    priceNote: 'ONE-TIME PAYMENT',
    description: 'Perfect for small cafes & startups',
    features: ['Offline Billing', 'Menu Management', 'Order Management', 'Basic Reports', 'Printer Management', '1 Device Included'],
    popular: false,
    ctaText: 'CHOOSE BASIC',
  },
  {
    name: 'STANDARD',
    price: '₹20,000',
    priceNote: 'ONE-TIME PAYMENT',
    description: 'Most popular for growing businesses',
    features: ['All Basic Features', 'Inventory Management', 'Expense Tracking', 'Standard Reports', 'Kitchen Management', 'Email Reports', '2 Devices Included'],
    popular: true,
    ctaText: 'CHOOSE STANDARD',
  },
  {
    name: 'PREMIUM',
    price: '₹26,999',
    priceNote: 'ONE-TIME PAYMENT',
    description: 'Complete solution for multi-outlets',
    features: ['All Standard Features', 'Staff Management', 'Website Integration & Orders', 'QR Code Orders', '5 Devices Included', 'Priority Support'],
    popular: false,
    ctaText: 'CHOOSE PREMIUM',
  },
];

export const addOns = [
  { name: 'Inventory Management', price: '₹2,499' },
  { name: 'Expense Management', price: '₹2,499' },
  { name: 'Report Analysis', price: '₹1,499' },
  { name: 'Staff Management', price: '₹2,999' },
  { name: 'Kitchen Management', price: '₹1,999' },
  { name: 'Email Reports (Automated)', price: '₹2,499' },
  { name: 'Website Integration & Orders', price: '₹3,999' },
  { name: 'QR Code Orders', price: '₹1,299' },
  { name: 'Additional Device Connection', price: '₹500/device' },
];

export const pricingFAQs = [
  {
    question: 'Is there any monthly or recurring fee?',
    answer: 'No. FlashBill is a one-time payment product. You pay once and own the software forever. There are no hidden charges, subscription fees, or recurring costs.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can start with the Basic plan and add individual features or upgrade to a higher plan at any time. You only pay the price difference.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, bank transfer, credit/debit cards, and net banking. For enterprise orders, we also offer invoice-based payments with flexible terms.',
  },
];
