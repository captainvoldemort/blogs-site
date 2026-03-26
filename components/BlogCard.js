import Link from 'next/link';

/**
 * Blog post card for use in feed/grid listings.
 */
export default function BlogCard({ post, basePath = '' }) {
  const coverSrc = post.coverImage
    ? `${basePath}${post.coverImage}`
    : null;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl border border-surface-100 overflow-hidden 
                          hover:border-surface-200 hover:shadow-lg hover:shadow-surface-100/50 
                          transition-all duration-300">
        {/* Cover Image */}
        {coverSrc && (
          <div className="relative aspect-[16/9] overflow-hidden bg-surface-100">
            <img
              src={coverSrc}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium bg-primary-50 text-primary-600 
                             rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-semibold text-surface-900 mb-2 leading-snug 
                         group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-surface-500 leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-surface-400">
            <span className="capitalize">{post.author?.replace(/-/g, ' ')}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
