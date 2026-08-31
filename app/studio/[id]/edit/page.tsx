import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostById } from '@/lib/posts';
import PostEditor from '@/components/blog/PostEditor';

export const metadata: Metadata = {
  title: 'Edit Post — Studio',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id).catch(() => null);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-page">
      <header className="bg-surface border-b border-line">
        <div className="section-container flex items-center justify-between h-17">
          <Link href="/studio" className="text-sm font-semibold text-ink-soft hover:text-teal-dark">
            &larr; Back to posts
          </Link>
        </div>
      </header>
      <div className="section-container py-10">
        <h1 className="text-2xl font-extrabold tracking-tight mb-8">Edit Post</h1>
        <PostEditor initialPost={post} />
      </div>
    </div>
  );
}
