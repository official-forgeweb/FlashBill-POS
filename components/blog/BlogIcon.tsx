'use client';

import { 
  UtensilsCrossed, 
  WifiOff, 
  Coffee, 
  Receipt, 
  TrendingUp, 
  Cpu, 
  Store, 
  ShieldCheck,
  BookOpen,
  Lightbulb,
  Globe,
  Bell,
  Search
} from 'lucide-react';
import type { BlogCategory } from '@/lib/blog/types';
import { CATEGORY_COLORS } from '@/lib/blog/types';

interface BlogIconProps {
  slug?: string;
  category?: BlogCategory;
  className?: string;
  size?: number;
}

export default function BlogIcon({ slug, category, className = '', size = 24 }: BlogIconProps) {
  const color = category ? CATEGORY_COLORS[category] : '#E8590C';

  // Map slugs to specific premium icons
  if (slug) {
    switch (slug) {
      case 'best-pos-software-restaurants-india-2026':
        return <UtensilsCrossed className={className} size={size} style={{ color }} />;
      case 'offline-billing-software-india':
        return <WifiOff className={className} size={size} style={{ color }} />;
      case 'how-to-choose-pos-system-cafe':
        return <Coffee className={className} size={size} style={{ color }} />;
      case 'gst-billing-complete-guide-restaurants':
        return <Receipt className={className} size={size} style={{ color }} />;
      case 'increase-restaurant-revenue-pos-data':
        return <TrendingUp className={className} size={size} style={{ color }} />;
      case 'restaurant-technology-trends-india-2026':
        return <Cpu className={className} size={size} style={{ color }} />;
      case 'pos-software-small-business-india':
        return <Store className={className} size={size} style={{ color }} />;
      case 'reduce-billing-errors-restaurant':
        return <ShieldCheck className={className} size={size} style={{ color }} />;
    }
  }

  // Fallback map for categories if slug doesn't match or is not provided
  if (category) {
    switch (category) {
      case 'guides':
        return <BookOpen className={className} size={size} style={{ color }} />;
      case 'tips':
        return <Lightbulb className={className} size={size} style={{ color }} />;
      case 'industry':
        return <Globe className={className} size={size} style={{ color }} />;
      case 'updates':
        return <Bell className={className} size={size} style={{ color }} />;
      case 'seo-articles':
        return <Search className={className} size={size} style={{ color }} />;
    }
  }

  return <BookOpen className={className} size={size} style={{ color }} />;
}
