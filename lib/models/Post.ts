import { Schema, models, model } from 'mongoose';

export interface PostDocument {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  status: 'draft' | 'published';
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<PostDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    coverImage: { type: String, trim: true },
    tags: { type: [String], default: [] },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    metaTitle: { type: String, trim: true },
    metaDescription: { type: String, trim: true },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export const Post = models.Post || model<PostDocument>('Post', PostSchema);

export default Post;
