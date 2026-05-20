'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogCategory } from '@/lib/blog/types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/blog/types';
import { getRelatedPosts } from '@/lib/blog/blogUtils';
import BlogIcon from './BlogIcon';

interface BlogSidebarProps {
  currentSlug: string;
  category: BlogCategory;
}

export default function BlogSidebar({ currentSlug, category }: BlogSidebarProps) {
  const relatedPosts = getRelatedPosts(currentSlug, 3);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  }

  return (
    <aside className="sticky top-24 space-y-6">
      {/* Box 1 — CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#FFF7ED] border border-[#E8590C]/20 rounded-[16px] p-6"
      >
        <p className="text-[18px] font-bold text-[#0A0A0A] mb-2">⚡ Try FlashBill Free</p>
        <p className="text-[13px] text-[#6B7280] mb-5 leading-relaxed">
          Book a free demo and see how FlashBill can transform your billing
        </p>
        <Link
          href="/contact"
          className="bg-[#E8590C] text-white rounded-full px-6 py-3 block text-center text-[13px] font-semibold transition-all hover:bg-[#D14D0A] hover:shadow-lg mb-3"
        >
          Book Demo <ArrowRight className="w-4 h-4 inline ml-1" />
        </Link>
        <Link
          href="https://wa.me/919999999999"
          target="_blank"
          className="border border-[#E5E7EB] rounded-full px-6 py-3 block text-center text-[13px] font-semibold text-[#0A0A0A] transition-all hover:border-[#E8590C] hover:text-[#E8590C]"
        >
          WhatsApp Us →
        </Link>
      </motion.div>

      {/* Box 2 — Related Articles */}
      {relatedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#E5E7EB] rounded-[16px] p-6"
        >
          <h4 className="text-[15px] font-bold text-[#0A0A0A] mb-4">Related Articles</h4>
          <div className="space-y-4">
            {relatedPosts.map((post) => {
              const catColor = CATEGORY_COLORS[post.category];
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 group"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${catColor}1A` }}
                  >
                    <BlogIcon slug={post.slug} category={post.category} size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-[#0A0A0A] leading-snug line-clamp-2 transition-colors group-hover:text-[#E8590C]">
                      {post.title}
                    </p>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5">
                      {post.readTime} min read
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Box 3 — Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F5F5F7] border border-[#E5E7EB] rounded-[16px] p-6"
      >
        <p className="text-[15px] font-bold text-[#0A0A0A] mb-3">Get billing tips monthly</p>
        {subscribed ? (
          <p className="text-[13px] text-[#22c55e] font-medium">
            ✓ You&apos;re subscribed! Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="input-f text-[13px] mb-3"
            />
            <button
              type="submit"
              className="w-full bg-[#0A0A0A] text-white rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all hover:bg-[#1a1a1a] cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[11px] text-[#9CA3AF] mt-3">No spam. Unsubscribe anytime.</p>
      </motion.div>
    </aside>
  );
}
