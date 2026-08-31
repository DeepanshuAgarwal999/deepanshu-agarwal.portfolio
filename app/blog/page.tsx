import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostCard from '@/components/blog/PostCard';
import { getPublishedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Deepanshu Agarwal',
  description:
    'Notes on full-stack development, React, Next.js, Node.js and building production software — written by Deepanshu Agarwal.',
  alternates: { canonical: 'https://deepanshuagarwal.dev/blog' },
  openGraph: {
    type: 'website',
    title: 'Blog | Deepanshu Agarwal',
    description:
      'Notes on full-stack development, React, Next.js, Node.js and building production software.',
    url: 'https://deepanshuagarwal.dev/blog',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <Navbar />
      <main className="pt-14 pb-4">
        <div className="section-container mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Blog</h1>
          <p className="text-muted max-w-140">
            Notes on full-stack development, shipping products, and the stack I use day to day.
          </p>
        </div>

        <div className="section-container">
          {posts.length === 0 ? (
            <p className="text-muted">No posts published yet — check back soon.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
