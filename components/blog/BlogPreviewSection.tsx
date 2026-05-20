'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlogCard from './BlogCard';
import { getFeaturedPosts } from '@/lib/blog/blogUtils';

export default function BlogPreviewSection() {
  const posts = getFeaturedPosts(3);

  return (
    <section className="py-28 bg-[#FAFAFA]">
      <div className="site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-4">
            ● RESOURCES
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-4">
            Learn &{' '}
            <span
              className="text-[#E8590C] font-medium"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Grow
            </span>
          </h2>
          <p className="text-[15px] text-[#6B7280] max-w-lg mx-auto">
            Tips, guides & insights for Indian restaurant & retail owners
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Link href="/blog" className="btn-outline px-8 py-3 text-[13px]">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
