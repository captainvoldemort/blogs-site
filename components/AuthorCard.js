import Link from 'next/link';

/**
 * Author profile card with lime accents.
 */
export default function AuthorCard({ author, basePath = '' }) {
  const avatarSrc = author.avatar
    ? `${basePath}${author.avatar}`
    : null;

  return (
    <Link href={`/author/${author.slug}`} className="group block">
      <div className="bg-white rounded-2xl border border-surface-100 p-6 text-center
                      hover:border-lime-300 hover:shadow-lg hover:shadow-lime-100/30 
                      transition-all duration-300">
        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white shadow-md"
             style={{ background: 'linear-gradient(135deg, #f6ffab, #e8ff47)' }}>
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold text-lime-800">
                {author.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="text-base font-semibold text-surface-900 mb-1 
                       group-hover:text-lime-700 transition-colors">
          {author.name}
        </h3>

        {/* Bio */}
        <p className="text-sm text-surface-500 leading-relaxed line-clamp-2">
          {author.bio}
        </p>

        {/* Social Links */}
        {author.social && (
          <div className="flex items-center justify-center gap-3 mt-4">
            {author.social.github && (
              <span className="text-surface-400 hover:text-surface-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
            )}
            {author.social.website && (
              <span className="text-surface-400 hover:text-surface-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
