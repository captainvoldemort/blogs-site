import Link from 'next/link';

export default function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={`${basePath}/images/ourlab.jpg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#e8ff47 1px, transparent 1px), linear-gradient(90deg, #e8ff47 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-site mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20
                     text-accent text-xs font-medium mb-8 animate-fade-in"
          style={{ backgroundColor: '#e8ff4708' }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Building in Public
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-tight leading-[1.05]
                     text-white mb-7 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Assembly should be
          <br />
          <span className="text-accent">observed, not programmed.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed
                     animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Aptitude watches human assembly, understands what happened, and compiles it
          into structured recipes any system can use.
        </p>

        {/* CTA */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent
                       text-accent-text font-semibold text-sm hover:brightness-110
                       transition-all shadow-lg shadow-accent/20 animate-glow"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
