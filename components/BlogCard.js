import Link from 'next/link';

export default function BlogCard({ post, basePath = '' }) {
  const coverSrc = post.coverImage ? `${basePath}${post.coverImage}` : null;

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden
                          hover:border-accent/20 transition-all duration-300">
        {coverSrc && (
          <div className="relative aspect-[16/9] overflow-hidden bg-dark-raised">
            <img
              src={coverSrc}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-5">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[11px] font-medium rounded-full
                             bg-accent/10 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-base font-semibold text-white mb-2 leading-snug
                         group-hover:text-accent transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center justify-between text-xs text-zinc-600">
            <span className="capitalize">{post.author?.replace(/-/g, ' ')}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric',
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
