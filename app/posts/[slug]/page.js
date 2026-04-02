import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '../../../lib/markdown';
import { getAuthorBySlug } from '../../../lib/authors';

/**
 * Generate static params for all blog posts at build time.
 */
export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate metadata for each blog post.
 */
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} — Aptitude Blog`,
    description: post.description,
  };
}

/**
 * Individual blog post page.
 */
export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Try to load author data
  let author = null;
  try {
    author = getAuthorBySlug(post.author);
  } catch {
    // Author not found — will show slug as fallback
  }

  const coverSrc = post.coverImage ? `${basePath}${post.coverImage}` : null;
  const avatarSrc = author?.avatar ? `${basePath}${author.avatar}` : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Back Link */}
      <Link
        href="/posts"
        className="inline-flex items-center gap-1.5 text-sm text-surface-400 hover:text-lime-700 
                   transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to all posts
      </Link>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ backgroundColor: '#e8ff4733', color: '#5c670e' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tight leading-tight mb-6">
        {post.title}
      </h1>

      {/* Author + Date */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-surface-100">
        {/* Author Avatar */}
        <Link href={`/author/${post.author}`} className="flex-shrink-0">
          <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm"
               style={{ background: 'linear-gradient(135deg, #f6ffab, #e8ff47)' }}>
            {avatarSrc ? (
              <img src={avatarSrc} alt={author?.name || post.author} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-sm font-bold text-lime-800">
                  {(author?.name || post.author).charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </Link>

        <div>
          <Link
            href={`/author/${post.author}`}
            className="text-sm font-medium text-surface-900 hover:text-lime-700 transition-colors"
          >
            {author?.name || post.author.replace(/-/g, ' ')}
          </Link>
          <div className="flex items-center gap-2 text-xs text-surface-400 mt-0.5">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {coverSrc && (
        <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-10 bg-surface-100 shadow-md">
          <img
            src={coverSrc}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Post Footer */}
      <div className="mt-16 pt-8 border-t border-surface-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href={`/author/${post.author}`} className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden"
                   style={{ background: 'linear-gradient(135deg, #f6ffab, #e8ff47)' }}>
                {avatarSrc ? (
                  <img src={avatarSrc} alt={author?.name || post.author} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-sm font-bold text-lime-800">
                      {(author?.name || post.author).charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </Link>
            <div>
              <p className="text-xs text-surface-400">Written by</p>
              <Link
                href={`/author/${post.author}`}
                className="text-sm font-medium text-surface-900 hover:text-lime-700 transition-colors"
              >
                {author?.name || post.author.replace(/-/g, ' ')}
              </Link>
            </div>
          </div>

          <Link
            href="/posts"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium 
                       text-surface-900 rounded-xl border border-surface-200 
                       hover:border-lime-400 hover:bg-lime-50 transition-colors"
          >
            More posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
