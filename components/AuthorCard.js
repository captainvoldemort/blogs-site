import Link from 'next/link';

export default function AuthorCard({ author, basePath = '' }) {
  const avatarSrc = author.avatar ? `${basePath}${author.avatar}` : null;

  return (
    <Link href={`/author/${author.slug}`} className="group block">
      <div className="bg-dark-card border border-dark-border rounded-2xl p-5 text-center
                      hover:border-accent/20 transition-all duration-300">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden
                        ring-2 ring-dark-border bg-dark-raised">
          {avatarSrc ? (
            <img src={avatarSrc} alt={author.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-accent/10">
              <span className="text-lg font-bold text-accent">{author.name.charAt(0)}</span>
            </div>
          )}
        </div>

        <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-accent transition-colors">
          {author.name}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
          {author.bio}
        </p>
      </div>
    </Link>
  );
}
