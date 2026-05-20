'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Calendar, Share2, Copy, ChevronRight } from 'lucide-react';
import { BlogPost, CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/blog/types';
import { formatDate } from '@/lib/blog/blogUtils';
import { useState } from 'react';
import BlogIcon from '@/components/blog/BlogIcon';

export default function ArticleHeader({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);
  const catColor = CATEGORY_COLORS[post.category];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = `${post.title} — ${window.location.href}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section className="bg-white border-b border-[#E5E7EB]">
      {/* Breadcrumb */}
      <div className="site pt-28 pb-4">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[12px] text-[#9CA3AF] flex-wrap"
        >
          <Link href="/" className="hover:text-[#0A0A0A] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#0A0A0A] transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span style={{ color: catColor }}>
            {CATEGORY_LABELS[post.category]}
          </span>
        </motion.nav>
      </div>

      <div className="site pb-10">
        <div className="max-w-3xl">
          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${catColor}15`,
                color: catColor,
              }}
            >
              {CATEGORY_LABELS[post.category]}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4vw,40px)] font-black text-[#0A0A0A] leading-[1.15] tracking-tight mt-4 mb-4"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] text-[#6B7280] leading-relaxed italic mb-6"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 text-[13px] text-[#6B7280] mb-8"
          >
            {/* Author */}
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                style={{ backgroundColor: catColor }}
              >
                {post.author.avatar}
              </div>
              <div>
                <span className="font-semibold text-[#0A0A0A]">
                  {post.author.name}
                </span>
                <span className="text-[#9CA3AF] ml-1 text-[11px]">
                  {post.author.role}
                </span>
              </div>
            </div>

            <span className="text-[#E5E7EB]">·</span>

            {/* Date */}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </div>

            <span className="text-[#E5E7EB]">·</span>

            {/* Read time */}
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min read
            </div>

            <span className="text-[#E5E7EB] hidden sm:inline">·</span>

            {/* Share buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleWhatsAppShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-[11px] font-semibold hover:bg-[#25D366]/20 transition-colors cursor-pointer"
              >
                <Share2 className="w-3 h-3" />
                WhatsApp
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F7] text-[#6B7280] text-[11px] font-semibold hover:bg-[#E5E7EB] transition-colors cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Cover emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[280px] sm:h-[360px] rounded-[20px] flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${catColor}15, ${catColor}08, ${catColor}20)`,
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-10 right-10 w-40 h-40 rounded-full blur-[80px] opacity-30"
            style={{ backgroundColor: catColor }}
          />
          <div
            className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-[60px] opacity-20"
            style={{ backgroundColor: catColor }}
          />
          <div className="relative z-10">
            <BlogIcon slug={post.slug} category={post.category} size={120} />
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-2 mt-6"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#F5F5F7] text-[#6B7280] text-[11px] font-medium border border-[#E5E7EB]"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
