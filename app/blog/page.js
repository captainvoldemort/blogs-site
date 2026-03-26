import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../lib/markdown';

export const metadata = {
  title: 'Blog — All Posts',
  description: 'Browse all blog posts. Technical guides, tutorials, and insights.',
};

/**
 * Blog feed page — lists all blog posts.
 */
export default function BlogFeedPage() {
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

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} basePath={basePath} />
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-surface-400 text-lg">No posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
