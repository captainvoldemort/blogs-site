import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import AuthorCard from '../components/AuthorCard';
import { getAllPosts } from '../lib/markdown';
import { getAllAuthors } from '../lib/authors';

/**
 * Homepage — Hero + Latest Blogs + Featured Authors
 */
export default function HomePage() {
  const posts = getAllPosts();
  const authors = getAllAuthors();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Latest Blogs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
              Latest Posts
            </h2>
            <p className="text-surface-500 mt-2 text-sm">
              Fresh insights and technical deep-dives
            </p>
          </div>
          <a
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-600 
                       hover:text-primary-700 transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} basePath={basePath} />
          ))}
        </div>
      </section>

      {/* Featured Authors */}
      <section className="bg-surface-50 border-y border-surface-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
              Featured Authors
            </h2>
            <p className="text-surface-500 mt-2 text-sm">
              The people behind the posts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {authors.map((author) => (
              <AuthorCard key={author.slug} author={author} basePath={basePath} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
