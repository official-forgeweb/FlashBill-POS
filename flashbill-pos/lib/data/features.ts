export interface Feature {
  id: number;
  name: string;
  description: string;
  price: string;
  included: boolean;
  category: 'core' | 'management' | 'integration' | 'reporting';
}

export const features: Feature[] = [
  { id: 1, name: 'Offline Billing', description: 'Complete billing without internet — process transactions instantly even without connectivity.', price: 'Included in all plans', included: true, category: 'core' },
  { id: 2, name: 'Menu Management', description: 'Create, organize, and update your menu items effortlessly with categories, modifiers, and pricing.', price: 'Included in all plans', included: true, category: 'core' },
  { id: 3, name: 'Orders Management', description: 'Track and manage all orders in real-time with status updates and order history.', price: 'Included in all plans', included: true, category: 'core' },
  { id: 4, name: 'Inventory Management', description: 'Real-time inventory tracking with low-stock alerts, purchase orders, and waste tracking.', price: '₹2,499', included: false, category: 'management' },
  { id: 5, name: 'Expense Management', description: 'Track all business expenses with categorization, receipt management, and financial reports.', price: '₹2,499', included: false, category: 'management' },
  { id: 6, name: 'Report Analysis', description: 'Comprehensive Sales, Inventory, CRM, and Payment reports with visual analytics dashboards.', price: '₹1,499', included: false, category: 'reporting' },
  { id: 7, name: 'Staff Management', description: 'Manage employees, roles, permissions, shifts, and attendance with payroll tracking.', price: '₹2,999', included: false, category: 'management' },
  { id: 8, name: 'Kitchen Management', description: 'KOT (Kitchen Order Tickets) and kitchen display system for streamlined food preparation.', price: '₹1,999', included: false, category: 'management' },
  { id: 9, name: 'Printer Management', description: 'Multi-printer support with configurable receipt templates and automatic routing.', price: 'Included in all plans', included: true, category: 'core' },
  { id: 10, name: 'Email Reports (Automated)', description: 'Hourly automated email reports with sales summaries, inventory alerts, and key metrics.', price: '₹2,499', included: false, category: 'reporting' },
  { id: 11, name: 'Website Integration & Orders', description: 'Custom website with online ordering, menu sync, and seamless POS integration.', price: '₹3,999', included: false, category: 'integration' },
  { id: 12, name: 'QR Code Orders', description: 'QR-based table ordering system — customers scan, browse menu, and place orders directly.', price: '₹1,299', included: false, category: 'integration' },
  { id: 13, name: 'Multiple Device / Outlet Connection', description: 'Connect multiple devices and outlets with centralized management and synced data.', price: '₹500/device', included: false, category: 'integration' },
];

export const featureCategories = [
  { key: 'all', label: 'All Features' },
  { key: 'core', label: 'Core' },
  { key: 'management', label: 'Management' },
  { key: 'integration', label: 'Integration' },
  { key: 'reporting', label: 'Reporting' },
] as const;
