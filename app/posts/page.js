import { getAllPosts } from '../../lib/markdown';
import PostsFeedClient from './PostsFeedClient';

export const metadata = {
  title: 'Posts — Aptitude Engineering Blog',
  description: 'Engineering updates, experiments, and learnings from the Aptitude project.',
};

export default function PostsFeedPage() {
  const posts = getAllPosts();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="max-w-site mx-auto px-6 pt-28 pb-section">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">All Posts</h1>
        <p className="text-zinc-500 text-sm">
          {posts.length} article{posts.length !== 1 ? 's' : ''} and counting
        </p>
      </div>
      <PostsFeedClient posts={posts} basePath={basePath} />
    </div>
  );
}
