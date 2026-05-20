'use client';

import { useState } from 'react';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog/blogUtils';
import { BlogCategory } from '@/lib/blog/types';
import BlogHeader from '@/components/blog/BlogHeader';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogGrid from '@/components/blog/BlogGrid';
import { PageLoaderWrapper } from '@/components/ui/PageLoaderWrapper';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPosts(1)[0];

  const filteredPosts =
    activeCategory === 'all'
      ? allPosts.filter((p) => p.slug !== featuredPost?.slug)
      : allPosts.filter((p) => p.category === activeCategory);

  return (
    <PageLoaderWrapper page="blog">
      <BlogHeader />

      <section className="py-12 bg-[#FAFAFA]">
        <div className="site">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <BlogGrid
            posts={filteredPosts}
            featuredPost={activeCategory === 'all' ? featuredPost : undefined}
          />
        </div>
      </section>
    </PageLoaderWrapper>
  );
}
