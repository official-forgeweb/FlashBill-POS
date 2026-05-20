'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Share2, Copy } from 'lucide-react';
import { BlogPost, CATEGORY_COLORS } from '@/lib/blog/types';
import BlogCard from '@/components/blog/BlogCard';
import { useState } from 'react';

interface ArticleFooterProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
  relatedPosts: BlogPost[];
}

export default function ArticleFooter({
  post,
  prevPost,
  nextPost,
  relatedPosts,
}: ArticleFooterProps) {
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
    <div className="mt-12">
      {/* Tags section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 pb-8 border-b border-[#E5E7EB]"
      >
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full bg-[#F5F5F7] text-[#6B7280] text-[12px] font-medium border border-[#E5E7EB] hover:border-[#E8590C]/30 hover:text-[#E8590C] transition-colors"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Author card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-8 border-b border-[#E5E7EB] flex items-start gap-4"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-[18px] font-bold text-white shrink-0"
          style={{ backgroundColor: catColor }}
        >
          {post.author.avatar}
        </div>
        <div>
          <h3 className="text-[16px] font-bold text-[#0A0A0A]">
            {post.author.name}
          </h3>
          <p className="text-[13px] text-[#9CA3AF] mb-2">{post.author.role}</p>
          <p className="text-[13px] text-[#6B7280] leading-relaxed">
            ForgeWeb team writes about POS, billing, and restaurant technology
            for Indian business owners.
          </p>
        </div>
      </motion.div>

      {/* Share section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="py-8 border-b border-[#E5E7EB]"
      >
        <p className="text-[14px] font-semibold text-[#0A0A0A] mb-4">
          Found this helpful? Share it:
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleWhatsAppShare}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-[13px] font-semibold hover:bg-[#20BD5A] transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            Share on WhatsApp
          </button>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5E7EB] text-[#6B7280] text-[13px] font-semibold hover:border-[#E8590C] hover:text-[#E8590C] transition-colors cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </motion.div>

      {/* Previous / Next navigation */}
      <div className="py-8 border-b border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex items-center gap-3 p-4 rounded-[14px] border border-[#E5E7EB] hover:border-[#E8590C]/30 hover:bg-[#FFF7ED] transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#E8590C] transition-colors shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] text-[#9CA3AF] font-medium uppercase tracking-wider mb-1">
                Previous
              </p>
              <p className="text-[13px] font-semibold text-[#0A0A0A] group-hover:text-[#E8590C] transition-colors truncate">
                {prevPost.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex items-center gap-3 p-4 rounded-[14px] border border-[#E5E7EB] hover:border-[#E8590C]/30 hover:bg-[#FFF7ED] transition-all text-right"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-[#9CA3AF] font-medium uppercase tracking-wider mb-1">
                Next
              </p>
              <p className="text-[13px] font-semibold text-[#0A0A0A] group-hover:text-[#E8590C] transition-colors truncate">
                {nextPost.title}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#E8590C] transition-colors shrink-0" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <h2 className="text-[22px] font-black text-[#0A0A0A] mb-2">
            More Articles You&apos;ll Like
          </h2>
          <p className="text-[14px] text-[#6B7280] mb-8">
            Continue reading about {post.category.replace('-', ' ')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost, i) => (
              <BlogCard key={relPost.slug} post={relPost} index={i} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Mobile sticky share bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] p-3 flex gap-3 lg:hidden z-50">
        <button
          onClick={handleWhatsAppShare}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#25D366] text-white text-[13px] font-semibold cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          WhatsApp
        </button>
        <button
          onClick={handleCopyLink}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#E5E7EB] text-[#6B7280] text-[13px] font-semibold cursor-pointer"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-16 lg:hidden" />
    </div>
  );
}
