'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog/types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/blog/types';
import { formatDate } from '@/lib/blog/blogUtils';
import BlogIcon from './BlogIcon';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const categoryColor = CATEGORY_COLORS[post.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-[#F97316]">
          {/* Icon cover area */}
          <div className="p-5 pb-0">
            <div
              className="w-full h-[140px] rounded-[12px] flex items-center justify-center"
              style={{ backgroundColor: `${categoryColor}10` }}
            >
              <BlogIcon slug={post.slug} category={post.category} size={48} />
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            {/* Category badge */}
            <span
              className="inline-flex self-start px-3 py-1 rounded-full text-[11px] font-semibold mb-3"
              style={{
                backgroundColor: `${categoryColor}1A`,
                color: categoryColor,
              }}
            >
              {CATEGORY_LABELS[post.category]}
            </span>

            {/* Title */}
            <h3 className="font-bold text-[16px] text-[#0A0A0A] leading-snug line-clamp-2 mb-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[13px] text-[#6B7280] leading-relaxed line-clamp-2 mb-4 flex-1">
              {post.excerpt}
            </p>

            {/* Bottom row */}
            <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6]">
              <span className="text-[12px] text-[#9CA3AF]">
                {post.author.name} · {post.readTime} min read
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#9CA3AF]">
                  {formatDate(post.publishedAt)}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#E8590C] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
