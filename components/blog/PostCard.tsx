import Link from 'next/link';
import Image from 'next/image';
import type { PlainPost } from '@/lib/posts';

export default function PostCard({ post }: { post: PlainPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-surface card-hover card-shadow p-3.5 flex flex-col gap-3.5"
    >
      {post.coverImage ? (
        <div className="rounded-xl overflow-hidden relative aspect-video bg-line">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      ) : (
        <div className="rounded-xl aspect-video bg-linear-to-br from-teal-dark via-teal to-[#0F3F3C] flex items-center justify-center">
          <span className="text-3xl font-extrabold text-white/85 tracking-tight">DA</span>
        </div>
      )}
      <div className="px-2 pb-2.5">
        <div className="flex items-center gap-3 mb-2.5">
          {post.publishedAt && (
            <span className="text-xs text-faint">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          )}
        </div>
        <h2 className="text-lg font-extrabold tracking-tight mb-1.5">{post.title}</h2>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
        {post.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag-neutral">
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
