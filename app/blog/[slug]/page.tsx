import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MarkdownContent from '@/components/blog/MarkdownContent';
import { getPublishedPostBySlug } from '@/lib/posts';

const SITE_URL = 'https://deepanshuagarwal.dev';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return { title: 'Post not found' };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${title} | Deepanshu Agarwal`,
    description,
    alternates: { canonical: url },
    authors: [{ name: 'Deepanshu Agarwal' }],
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['Deepanshu Agarwal'],
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.coverImage ? [post.coverImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: 'Deepanshu Agarwal',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Deepanshu Agarwal',
      url: SITE_URL,
    },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-14 pb-4">
        <article className="section-container max-w-160">
          <header className="mb-8">
            {post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-teal">
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-faint">
              <span>Deepanshu Agarwal</span>
              {post.publishedAt && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </>
              )}
            </div>
          </header>

          {post.coverImage && (
            <div className="rounded-panel overflow-hidden relative aspect-video mb-10 bg-line">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          <MarkdownContent content={post.content} />
        </article>
      </main>
      <Footer />
    </>
  );
}
