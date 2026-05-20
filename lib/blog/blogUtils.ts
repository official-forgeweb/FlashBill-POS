import { blogPosts } from './blogData';
import type { BlogCategory, BlogPost } from './types';

/** Get a single blog post by slug */
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Get all posts sorted by publishedAt descending (newest first) */
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/** Get posts filtered by category, sorted by publishedAt descending */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

/** Get related posts — same category, excluding the current post */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((post) => post.category === current.category && post.slug !== slug)
    .slice(0, limit);
}

/** Get featured posts first, then latest — useful for hero sections */
export function getFeaturedPosts(limit: number = 4): BlogPost[] {
  const all = getAllPosts();
  const featured = all.filter((post) => post.featured);
  const nonFeatured = all.filter((post) => !post.featured);

  return [...featured, ...nonFeatured].slice(0, limit);
}

/** Format an ISO date string to a readable format: '2026-05-10' → 'May 10, 2026' */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Extract h2 and h3 headings from HTML content for table of contents */
export function extractHeadings(
  content: string
): { id: string; text: string; level: 2 | 3 }[] {
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  const regex = /<h([23])\s+id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;

  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1], 10) as 2 | 3,
      id: match[2],
      text: match[3].replace(/<[^>]*>/g, ''), // strip any inner HTML tags
    });
  }

  return headings;
}

/** Get adjacent (previous and next) posts based on chronological order */
export function getAdjacentPosts(
  slug: string
): { prev: BlogPost | null; next: BlogPost | null } {
  const sorted = getAllPosts(); // newest first
  const index = sorted.findIndex((post) => post.slug === slug);

  if (index === -1) return { prev: null, next: null };

  return {
    next: index > 0 ? sorted[index - 1] : null, // newer post
    prev: index < sorted.length - 1 ? sorted[index + 1] : null, // older post
  };
}
