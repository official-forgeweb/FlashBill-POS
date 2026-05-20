import { Metadata } from 'next';
import { getBlogPost, getAllPosts, getRelatedPosts, extractHeadings, getAdjacentPosts, formatDate } from '@/lib/blog/blogUtils';
import { blogPosts } from '@/lib/blog/blogData';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/blog/types';
import { notFound } from 'next/navigation';
import ReadingProgress from '@/components/blog/ReadingProgress';
import BlogArticle from '@/components/blog/BlogArticle';
import BlogSidebar from '@/components/blog/BlogSidebar';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleHeader from './ArticleHeader';
import ArticleFooter from './ArticleFooter';
import { PageLoaderWrapper } from '@/components/ui/PageLoaderWrapper';

/* ── Static generation ── */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/* ── SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
    },
  };
}

/* ── Page Component ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedPosts(post.slug, 3);
  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <PageLoaderWrapper page="blog-post">
      <ReadingProgress />

      {/* Article Header */}
      <ArticleHeader post={post} />

      {/* Content + Sidebar */}
      <div className="site py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: TOC + Article Content */}
          <div className="flex-1 min-w-0 lg:max-w-[65%]">
            <BlogArticle post={post} />

            {/* Article Footer */}
            <ArticleFooter
              post={post}
              prevPost={prev}
              nextPost={next}
              relatedPosts={relatedPosts}
            />
          </div>

          {/* Right: Sidebar */}
          <aside className="w-full lg:w-[35%]">
            <div className="lg:sticky lg:top-24 space-y-0">
              {/* TOC - visible only on desktop */}
              <div className="hidden lg:block mb-6">
                <TableOfContents headings={headings} />
              </div>

              <BlogSidebar
                currentSlug={post.slug}
                category={post.category}
              />
            </div>
          </aside>
        </div>
      </div>
    </PageLoaderWrapper>
  );
}
