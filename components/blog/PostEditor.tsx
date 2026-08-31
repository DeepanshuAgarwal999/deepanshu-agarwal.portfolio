'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import { createPost, updatePost, PostFormInput } from '@/lib/actions/posts';
import type { PlainPost } from '@/lib/posts';
import MarkdownContent from './MarkdownContent';

const fieldClass =
  'w-full px-4.5 py-4 rounded-2xl border border-line bg-surface text-sm text-ink placeholder-faint focus:outline-none focus:ring-2 focus:ring-teal';

export default function PostEditor({ initialPost }: { initialPost?: PlainPost }) {
  const router = useRouter();
  const isEditing = Boolean(initialPost);

  const [title, setTitle] = useState(initialPost?.title ?? '');
  const [slug, setSlug] = useState(initialPost?.slug ?? '');
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt ?? '');
  const [content, setContent] = useState(initialPost?.content ?? '');
  const [coverImage, setCoverImage] = useState(initialPost?.coverImage ?? '');
  const [tagsInput, setTagsInput] = useState(initialPost?.tags?.join(', ') ?? '');
  const [metaTitle, setMetaTitle] = useState(initialPost?.metaTitle ?? '');
  const [metaDescription, setMetaDescription] = useState(initialPost?.metaDescription ?? '');
  const [showSeo, setShowSeo] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!slugTouched) {
      setSlug(slugify(title, { lower: true, strict: true }));
    }
  }, [title, slugTouched]);

  function buildInput(status: 'draft' | 'published'): PostFormInput {
    return {
      title,
      slug,
      excerpt,
      content,
      coverImage: coverImage || undefined,
      tags: tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      status,
      metaTitle: metaTitle || undefined,
      metaDescription: metaDescription || undefined,
    };
  }

  function handleSave(status: 'draft' | 'published') {
    setError(null);
    setSavedMessage(null);

    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      setError('Title, excerpt and content are required.');
      return;
    }

    startTransition(async () => {
      const input = buildInput(status);

      if (isEditing && initialPost) {
        const result = await updatePost(initialPost._id, input);
        if (result?.error) {
          setError(result.error);
        } else {
          setSavedMessage(status === 'published' ? 'Published.' : 'Draft saved.');
          router.refresh();
        }
      } else {
        const result = await createPost(input);
        if (result?.error) {
          setError(result.error);
        }
      }
    });
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="flex flex-col gap-3.5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className={`${fieldClass} text-lg font-bold`}
        />

        <div className="flex items-center gap-1.5">
          <span className="text-sm text-faint whitespace-nowrap">/blog/</span>
          <input
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setSlugTouched(true);
            }}
            placeholder="post-slug"
            className={fieldClass}
          />
        </div>

        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          placeholder="Short excerpt — used for the blog list preview and as the SEO description"
          className={fieldClass}
        />

        <input
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          placeholder="Cover image URL (optional)"
          className={fieldClass}
        />

        <input
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="Tags, comma separated (optional)"
          className={fieldClass}
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={18}
          placeholder="Write your post in Markdown..."
          className={`${fieldClass} font-mono text-[13px] leading-relaxed`}
        />

        <button
          type="button"
          onClick={() => setShowSeo((v) => !v)}
          className="text-sm font-bold text-teal-dark self-start"
        >
          {showSeo ? 'Hide SEO overrides' : 'SEO overrides (optional)'}
        </button>

        {showSeo && (
          <div className="flex flex-col gap-3.5 p-4 rounded-2xl bg-tag">
            <input
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="Meta title (defaults to post title)"
              className={fieldClass}
            />
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              rows={2}
              placeholder="Meta description (defaults to excerpt)"
              className={fieldClass}
            />
          </div>
        )}

        {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
        {savedMessage && <p className="text-sm font-semibold text-teal-dark">{savedMessage}</p>}

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            disabled={isPending}
            onClick={() => handleSave('draft')}
            className="btn-outline disabled:opacity-50"
          >
            {isPending ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={() => handleSave('published')}
            className="btn-dark disabled:opacity-50"
          >
            {isPending ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </div>

      <div className="card-surface card-shadow p-6 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto">
        <div className="eyebrow mb-3">Preview</div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">{title || 'Untitled post'}</h1>
        <MarkdownContent content={content || '_Nothing to preview yet..._'} />
      </div>
    </div>
  );
}
