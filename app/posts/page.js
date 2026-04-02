import { getAllPosts } from '../../lib/markdown';
import PostsFeedClient from './PostsFeedClient';

export const metadata = {
  title: 'Posts — Aptitude Engineering Blog',
  description: 'Engineering updates, experiments, and learnings from the Aptitude project.',
};

/**
 * Posts feed page — server component that passes data to client for filtering.
 */
export default function PostsFeedPage() {
  const posts = getAllPosts();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
          All Posts
        </h1>
        <p className="text-surface-500 mt-2">
          {posts.length} article{posts.length !== 1 ? 's' : ''} and counting
        </p>
      </div>

      <PostsFeedClient posts={posts} basePath={basePath} />
    </div>
  );
}
