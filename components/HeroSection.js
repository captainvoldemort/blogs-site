import Link from 'next/link';

/**
 * Hero section — Aptitude engineering blog.
 */
export default function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="relative overflow-hidden bg-surface-900">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{
             backgroundImage: `linear-gradient(rgba(232,255,71,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,71,0.3) 1px, transparent 1px)`,
             backgroundSize: '48px 48px',
           }}
      />

      {/* Gradient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
           style={{
             background: 'radial-gradient(circle at center, #e8ff47 0%, transparent 70%)',
           }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                          border border-lime-400/30 text-lime-400 text-xs font-medium mb-6
                          animate-fade-in"
               style={{ backgroundColor: 'rgba(232,255,71,0.08)' }}>
            <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
            Building in Public
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white 
                         tracking-tight leading-[1.1] mb-6 animate-fade-in"
              style={{ animationDelay: '0.1s' }}>
            Aptitude
            <br />
            <span className="text-lime-400">
              Engineering Blog
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-surface-400 leading-relaxed mb-4 max-w-2xl
                        animate-fade-in"
             style={{ animationDelay: '0.2s' }}>
            Vision-first assembly learning by observation.
          </p>
          <p className="text-base text-surface-500 leading-relaxed mb-8 max-w-2xl
                        animate-fade-in font-mono"
             style={{ animationDelay: '0.25s' }}>
            watch → understand → reproduce
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-surface-900 
                         text-sm font-semibold rounded-xl hover:bg-lime-300 transition-colors 
                         shadow-lg shadow-lime-400/20"
            >
              Read Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-surface-300 
                         text-sm font-medium rounded-xl border border-surface-600 
                         hover:border-lime-400/40 hover:text-lime-400 transition-colors"
            >
              About Aptitude
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
