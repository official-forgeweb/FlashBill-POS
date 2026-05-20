'use client';

import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog/types';

interface BlogArticleProps {
  post: BlogPost;
}

export default function BlogArticle({ post }: BlogArticleProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`
        max-w-none
        [&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:text-[#0A0A0A] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:border-l-4 [&_h2]:border-[#E8590C] [&_h2]:pl-4
        [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:text-[#0A0A0A] [&_h3]:mt-8 [&_h3]:mb-3
        [&_p]:text-[15px] [&_p]:text-[#4B5563] [&_p]:leading-[1.8] [&_p]:mb-4
        [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:mb-4
        [&_ul_li]:relative [&_ul_li]:pl-5 [&_ul_li]:text-[15px] [&_ul_li]:text-[#4B5563]
        [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-[10px] [&_ul_li]:before:w-[6px] [&_ul_li]:before:h-[6px] [&_ul_li]:before:rounded-full [&_ul_li]:before:bg-[#E8590C]
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:marker:text-[#E8590C]
        [&_strong]:text-[#E8590C] [&_strong]:font-semibold
        [&_blockquote]:border-l-4 [&_blockquote]:border-[#E8590C] [&_blockquote]:bg-[#FFF7ED] [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:my-6 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-[#4B5563]
        [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:rounded-lg [&_table]:overflow-hidden
        [&_th]:bg-[#0A0A0A] [&_th]:text-white [&_th]:text-[13px] [&_th]:font-semibold [&_th]:p-3 [&_th]:text-left
        [&_td]:p-3 [&_td]:text-[13px] [&_td]:border-b [&_td]:border-[#E5E7EB] [&_td]:text-[#4B5563]
        [&_tr:nth-child(even)]:bg-[#F9FAFB]
        [&_code]:bg-[#FFF7ED] [&_code]:text-[#E8590C] [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[13px] [&_code]:font-mono
        [&_a]:text-[#E8590C] [&_a]:underline hover:[&_a]:text-[#D14D0A]
      `}
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
}
