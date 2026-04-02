import Link from 'next/link';
import BlogCard from '../../../components/BlogCard';
import { getAuthorBySlug, getAllAuthorSlugs } from '../../../lib/authors';
import { getAllPosts } from '../../../lib/markdown';

export function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const author = getAuthorBySlug(params.slug);
  return { title: `${author.name} — Aptitude Blog`, description: author.bio };
}

export default function AuthorPage({ params }) {
  const author = getAuthorBySlug(params.slug);
  const allPosts = getAllPosts();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const authorPosts = allPosts.filter((p) => p.author === params.slug);
  const avatarSrc = author.avatar ? `${basePath}${author.avatar}` : null;

  return (
    <div className="max-w-site mx-auto px-6 pt-28 pb-section">
      <Link href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-accent transition mb-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back
      </Link>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-14 pb-10
                      border-b border-dark-border">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-dark-border shrink-0 bg-dark-raised">
          {avatarSrc ? (
            <img src={avatarSrc} alt={author.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-accent/10">
              <span className="text-3xl font-bold text-accent">{author.name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{author.name}</h1>
          <p className="text-zinc-500 leading-relaxed max-w-xl mb-4">{author.bio}</p>
          {author.social && (
            <div className="flex items-center justify-center sm:justify-start gap-4">
              {author.social.website && (
                <a href={author.social.website} target="_blank" rel="noopener noreferrer"
                   className="text-sm text-zinc-500 hover:text-accent transition flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  Website
                </a>
              )}
              {author.social.github && (
                <a href={author.social.github} target="_blank" rel="noopener noreferrer"
                   className="text-sm text-zinc-500 hover:text-accent transition flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-6">
          Posts by {author.name}
          <span className="text-zinc-600 font-normal text-base ml-2">({authorPosts.length})</span>
        </h2>
        {authorPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {authorPosts.map((post) => (
              <BlogCard key={post.slug} post={post} basePath={basePath} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-600 py-10 text-center">No posts by this author yet.</p>
        )}
      </div>
    </div>
  );
}
