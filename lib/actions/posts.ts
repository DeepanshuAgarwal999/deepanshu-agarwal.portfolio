'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import slugify from 'slugify';
import { connectToDatabase } from '@/lib/db';
import Post from '@/lib/models/Post';
import { SESSION_COOKIE, isValidSessionToken } from '@/lib/auth';

export interface PostFormInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  status: 'draft' | 'published';
  metaTitle?: string;
  metaDescription?: string;
}

export interface PostActionResult {
  error?: string;
  success?: boolean;
}

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!(await isValidSessionToken(token))) {
    throw new Error('Not authorized.');
  }
}

function normalizeSlug(input: string, title: string) {
  const base = input.trim() || title;
  return slugify(base, { lower: true, strict: true });
}

export async function createPost(input: PostFormInput): Promise<PostActionResult> {
  await requireAdmin();
  await connectToDatabase();

  const slug = normalizeSlug(input.slug, input.title);
  const existing = await Post.findOne({ slug });
  if (existing) {
    return { error: 'A post with this slug already exists.' };
  }

  const post = await Post.create({
    ...input,
    slug,
    publishedAt: input.status === 'published' ? new Date() : undefined,
  });

  revalidatePath('/blog');
  revalidatePath('/studio');
  redirect(`/studio/${post._id}/edit`);
}

export async function updatePost(id: string, input: PostFormInput): Promise<PostActionResult> {
  await requireAdmin();
  await connectToDatabase();

  const slug = normalizeSlug(input.slug, input.title);
  const slugTaken = await Post.findOne({ slug, _id: { $ne: id } });
  if (slugTaken) {
    return { error: 'A post with this slug already exists.' };
  }

  const current = await Post.findById(id);
  if (!current) {
    return { error: 'Post not found.' };
  }

  const wasPublished = current.status === 'published';
  const willBePublished = input.status === 'published';
  const previousSlug = current.slug;

  await Post.findByIdAndUpdate(id, {
    ...input,
    slug,
    publishedAt: !wasPublished && willBePublished ? new Date() : current.publishedAt,
  });

  revalidatePath('/blog');
  revalidatePath(`/blog/${previousSlug}`);
  if (slug !== previousSlug) revalidatePath(`/blog/${slug}`);
  revalidatePath('/studio');

  return { success: true };
}

export async function deletePost(id: string): Promise<PostActionResult> {
  await requireAdmin();
  await connectToDatabase();

  const post = await Post.findByIdAndDelete(id);

  revalidatePath('/blog');
  if (post?.slug) revalidatePath(`/blog/${post.slug}`);
  revalidatePath('/studio');

  return { success: true };
}
