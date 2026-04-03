import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '../../../lib/markdown';
import { getAuthorBySlug } from '../../../lib/authors';
import ShareSidebar from '../../../components/ShareSidebar';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: `${post.title} — Aptitude Blog`, description: post.description };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  let author = null;
  try { author = getAuthorBySlug(post.author); } catch {}

  const coverSrc = post.coverImage ? `${basePath}${post.coverImage}` : null;
  const avatarSrc = author?.avatar ? `${basePath}${author.avatar}` : null;

  return (
    <>
      {/* Fixed share sidebar */}
      <ShareSidebar title={post.title} slug={post.slug} />

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-section">
        {/* Back */}
        <Link href="/posts"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-accent transition mb-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to posts
        </Link>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-[11px] font-medium rounded-full bg-accent/10 text-accent">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-7">
          {post.title}
        </h1>

        {/* Author + Date */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-dark-border">
          <Link href={`/author/${post.author}`} className="shrink-0">
            <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-dark-border bg-dark-raised">
              {avatarSrc ? (
                <img src={avatarSrc} alt={author?.name || post.author} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-accent/10">
                  <span className="text-sm font-bold text-accent">
                    {(author?.name || post.author).charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </Link>
          <div>
            <Link href={`/author/${post.author}`}
                  className="text-sm font-medium text-white hover:text-accent transition">
              {author?.name || post.author.replace(/-/g, ' ')}
            </Link>
            <div className="text-xs text-zinc-600 mt-0.5">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
          </div>
        </div>

        {/* Cover */}
        {coverSrc && (
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-12 bg-dark-raised">
            <img src={coverSrc} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content */}
        <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-dark-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href={`/author/${post.author}`} className="shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-dark-raised ring-2 ring-dark-border">
                  {avatarSrc ? (
                    <img src={avatarSrc} alt={author?.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-accent/10">
                      <span className="text-sm font-bold text-accent">
                        {(author?.name || post.author).charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
              <div>
                <p className="text-[11px] text-zinc-600">Written by</p>
                <Link href={`/author/${post.author}`}
                      className="text-sm font-medium text-white hover:text-accent transition">
                  {author?.name || post.author.replace(/-/g, ' ')}
                </Link>
              </div>
            </div>
            <Link href="/posts"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full
                             border border-dark-border text-zinc-400 hover:border-accent/30 hover:text-accent transition">
              More posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
