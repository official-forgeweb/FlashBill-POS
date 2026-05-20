'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Inbox } from 'lucide-react';
import type { BlogPost } from '@/lib/blog/types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/blog/types';
import { formatDate } from '@/lib/blog/blogUtils';
import BlogCard from './BlogCard';
import BlogIcon from './BlogIcon';

interface BlogGridProps {
  posts: BlogPost[];
  featuredPost?: BlogPost;
}

export default function BlogGrid({ posts, featuredPost }: BlogGridProps) {
  return (
    <div className="mt-8">
      {/* Featured article — full-width horizontal card */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-[#F97316]">
              {/* Left: icon area */}
              <div
                className="w-full md:w-[280px] h-[200px] md:h-auto flex-shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor: `${CATEGORY_COLORS[featuredPost.category]}10`,
                }}
              >
                <BlogIcon slug={featuredPost.slug} category={featuredPost.category} size={64} />
              </div>

              {/* Right: content */}
              <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-[#E8590C] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-semibold"
                    style={{
                      backgroundColor: `${CATEGORY_COLORS[featuredPost.category]}1A`,
                      color: CATEGORY_COLORS[featuredPost.category],
                    }}
                  >
                    {CATEGORY_LABELS[featuredPost.category]}
                  </span>
                </div>

                <h2 className="text-[clamp(20px,3vw,26px)] font-black text-[#0A0A0A] leading-tight mb-3 group-hover:text-[#E8590C] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[12px] text-[#9CA3AF]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                      style={{
                        backgroundColor:
                          CATEGORY_COLORS[featuredPost.category],
                      }}
                    >
                      {featuredPost.author.avatar}
                    </div>
                    <span className="font-medium text-[#6B7280]">
                      {featuredPost.author.name}
                    </span>
                  </div>
                  <span>·</span>
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readTime} min read
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Article grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="flex justify-center mb-4">
            <Inbox className="w-12 h-12 text-[#9CA3AF]" />
          </div>
          <p className="text-[16px] font-semibold text-[#6B7280]">
            No articles in this category yet
          </p>
          <p className="text-[13px] text-[#9CA3AF] mt-2">
            Check back soon — we&apos;re always adding new content
          </p>
        </motion.div>
      )}
    </div>
  );
}
