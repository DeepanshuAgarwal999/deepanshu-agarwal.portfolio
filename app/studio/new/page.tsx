import type { Metadata } from 'next';
import Link from 'next/link';
import PostEditor from '@/components/blog/PostEditor';

export const metadata: Metadata = {
  title: 'New Post — Studio',
  robots: { index: false, follow: false },
};

export default function NewPostPage() {
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
        <h1 className="text-2xl font-extrabold tracking-tight mb-8">New Post</h1>
        <PostEditor />
      </div>
    </div>
  );
}
