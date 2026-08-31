import { connectToDatabase } from '@/lib/db';
import Post, { IPost } from '@/lib/models/Post';

export type PlainPost = Omit<IPost, '_id' | 'createdAt' | 'updatedAt' | 'publishedAt'> & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
};

function toPlain(doc: unknown): PlainPost {
  return JSON.parse(JSON.stringify(doc));
}

export async function getPublishedPosts(): Promise<PlainPost[]> {
  await connectToDatabase();
  const posts = await Post.find({ status: 'published' }).sort({ publishedAt: -1 }).lean();
  return posts.map(toPlain);
}

export async function getPublishedPostBySlug(slug: string): Promise<PlainPost | null> {
  await connectToDatabase();
  const post = await Post.findOne({ slug, status: 'published' }).lean();
  return post ? toPlain(post) : null;
}

export async function getAllPostsForAdmin(): Promise<PlainPost[]> {
  await connectToDatabase();
  const posts = await Post.find({}).sort({ updatedAt: -1 }).lean();
  return posts.map(toPlain);
}

export async function getPostById(id: string): Promise<PlainPost | null> {
  await connectToDatabase();
  const post = await Post.findById(id).lean();
  return post ? toPlain(post) : null;
}
