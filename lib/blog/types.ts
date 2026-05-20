export type BlogCategory = 'guides' | 'tips' | 'industry' | 'updates' | 'seo-articles';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
  coverEmoji: string;
  seoTitle: string;
  seoDescription: string;
};

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  guides: 'Guides',
  tips: 'Tips',
  industry: 'Industry',
  updates: 'Updates',
  'seo-articles': 'SEO Articles',
};

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  guides: '#3b82f6',
  tips: '#22c55e',
  industry: '#a855f7',
  updates: '#f59e0b',
  'seo-articles': '#f97316',
};
