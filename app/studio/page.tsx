import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostsForAdmin } from '@/lib/posts';
import { logoutAction } from '@/lib/actions/auth';
import DeletePostButton from '@/components/blog/DeletePostButton';

export const metadata: Metadata = {
  title: 'Studio',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function StudioDashboard() {
  const posts = await getAllPostsForAdmin();

  return (
    <div className="min-h-screen bg-page">
      <header className="bg-surface border-b border-line">
        <div className="section-container flex items-center justify-between h-17">
          <div className="flex items-center gap-2.5">
            <span className="w-8.5 h-8.5 rounded-full bg-ink text-white flex items-center justify-center font-extrabold text-sm">
              D
            </span>
            <span className="font-extrabold text-sm">Studio</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/blog" className="text-sm font-semibold text-ink-soft hover:text-teal-dark">
              View blog
            </Link>
            <form action={logoutAction}>
              <button type="submit" className="text-sm font-semibold text-ink-soft hover:text-teal-dark">
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="section-container py-10">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight">Posts</h1>
          <Link href="/studio/new" className="btn-dark">
            New Post
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet — create your first one.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <div
                key={post._id}
                className="card-surface p-5 flex items-center justify-between gap-4 flex-wrap"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span
                      className={
                        post.status === 'published'
                          ? 'tag-teal'
                          : 'tag-neutral'
                      }
                    >
                      {post.status === 'published' ? 'PUBLISHED' : 'DRAFT'}
                    </span>
                    <span className="text-xs text-faint">
                      Updated {new Date(post.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="font-extrabold truncate">{post.title}</div>
                  <div className="text-sm text-faint truncate">/blog/{post.slug}</div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <Link
                    href={`/studio/${post._id}/edit`}
                    className="text-sm font-semibold text-teal-dark hover:text-teal"
                  >
                    Edit
                  </Link>
                  <DeletePostButton id={post._id} title={post.title} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
