import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import AuthorCard from '../components/AuthorCard';
import HomepageCarousel from '../components/HomepageCarousel';
import Link from 'next/link';
import { getAllPosts } from '../lib/markdown';
import { getAllAuthors } from '../lib/authors';

export default function HomePage() {
  const posts = getAllPosts();
  const authors = getAllAuthors();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  /* ── Pipeline ── */
  const pipeline = [
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>),
      title: 'Capture', desc: 'Multi-view RGB-D cameras record the workspace in 3D',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>),
      title: 'Reconstruct', desc: 'Object-centric state via CAD model fitting',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
      title: 'Understand', desc: 'Infer state changes — pick, place, align, insert',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>),
      title: 'Compile', desc: 'Build a directed task graph with constraints',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>),
      title: 'Emit', desc: 'Output a structured recipe for humans or machines',
    },
  ];

  /* ── Differentiators ── */
  const diffs = [
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>),
      title: 'Not Video Analytics',
      desc: "We don't care about dwell-time charts. We want to tell you what actually transformed in the scene.",
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>),
      title: 'Not CAD Documentation',
      desc: "CAD describes what the product is supposed to be — not how a skilled worker assembled it.",
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
      title: 'Not Trajectory Imitation',
      desc: 'What transfers is the semantic structure — which object, what relation, what state marks success.',
    },
  ];

  /* ── Carousel items ── */
  const carouselItems = [
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>),
      title: 'Assembly Line Recording',
      desc: 'Capture and formalize manual assembly procedures as structured, reusable recipes that any team can follow.',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
      title: 'Process Comparison',
      desc: 'Compare assembly procedures across operators to surface best practices, deviations, and efficiency improvements.',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
      title: 'Robot Skill Transfer',
      desc: 'Translate observed task graphs directly into executable robot skills with motion plans and grasp strategies.',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      title: 'Digital Twin Replay',
      desc: 'Replay recorded procedures in a simulated environment for validation, training, and iterative improvement.',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
      title: 'Training & On-boarding',
      desc: 'Generate step-by-step visual guides from observed demonstrations to accelerate operator training cycles.',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
      title: 'Quality Assurance',
      desc: 'Verify assembly correctness by comparing observed procedures against the canonical task graph in real time.',
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Video Section ── */}
      <section className="py-section bg-black">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full border border-accent/20 text-accent
                             text-[11px] font-semibold uppercase tracking-widest mb-5">
              Demo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              See Aptitude <span className="text-accent">in action</span>
            </h2>
            <p className="text-zinc-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              A walkthrough of the observation-to-recipe pipeline running on a real assembly task.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-card border
                            border-dark-border shadow-2xl shadow-accent/5">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Aptitude Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Image + Text Section ── */}
      <section className="py-section bg-dark-subtle">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border
                            shadow-xl">
              <img
                src={`${basePath}/images/roboarmssetup.jpg`}
                alt="Robotic arms workspace setup"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-accent/20 text-accent
                               text-[11px] font-semibold uppercase tracking-widest mb-5">
                The Workcell
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                Built for real-world
                <span className="text-accent"> observation</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Our multi-camera workcell combines calibrated RGB-D sensors with a collaborative robot arm
                in a compact setup designed for real manufacturing environments. Every camera is precisely
                calibrated to a shared world frame — enabling centimeter-accurate 3D reconstruction of
                the entire workspace.
              </p>
              <ul className="space-y-3">
                {[
                  'Multi-view RGB-D cameras (Intel RealSense D455 + D405)',
                  'Collaborative robot arm with MoveIt 2 integration',
                  'Real-time DDS communication across compute nodes',
                  'Sub-centimeter calibration accuracy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <svg className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pipeline Section ── */}
      <section className="py-section bg-black">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-accent/20 text-accent
                             text-[11px] font-semibold uppercase tracking-widest mb-5">
              The Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              From demonstration to
              <span className="text-accent"> executable recipe</span>
            </h2>
            <p className="text-zinc-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Five steps from raw observation to a structured artifact that humans can review
              and robots can execute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pipeline.map((step, i) => (
              <div
                key={step.title}
                className="relative bg-dark-card border border-dark-border rounded-2xl p-6
                           hover:border-accent/20 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center
                                text-accent mb-4 group-hover:bg-accent/20 transition">
                  {step.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>

                {i < pipeline.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-zinc-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="py-section bg-dark-subtle">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              What Aptitude <span className="text-accent">is not</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {diffs.map((d, i) => (
              <div
                key={d.title}
                className="bg-dark-card border border-dark-border rounded-2xl p-7
                           hover:border-accent/15 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center
                                text-zinc-400 mb-5">
                  {d.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{d.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases Carousel ── */}
      <section className="py-section bg-black overflow-hidden">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 items-start">
            {/* Left: text */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block px-3 py-1 rounded-full border border-accent/20 text-accent
                               text-[11px] font-semibold uppercase tracking-widest mb-5">
                Applications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Use cases that drive
                <span className="text-accent"> real value</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Explore how structured assembly recipes unlock value across manufacturing,
                robotics, training, and quality assurance workflows.
              </p>
            </div>

            {/* Right: carousel */}
            <HomepageCarousel items={carouselItems} />
          </div>
        </div>
      </section>

      {/* ── Latest Posts ── */}
      <section className="py-section bg-dark-subtle">
        <div className="max-w-site mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-accent/20 text-accent
                               text-[11px] font-semibold uppercase tracking-widest mb-4">
                Blog
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest posts</h2>
            </div>
            <Link href="/posts"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm text-zinc-500
                             hover:text-accent transition-colors">
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.slice(0, 4).map((post) => (
              <BlogCard key={post.slug} post={post} basePath={basePath} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-section bg-black">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The Team</h2>
            <p className="text-zinc-500 mt-3 text-sm">Common Lab Ventures Pte. Ltd.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {authors.map((a) => (
              <AuthorCard key={a.slug} author={a} basePath={basePath} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-section bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-12 sm:p-16
                          relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]"
                 style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #e8ff47 0%, transparent 60%)' }} />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Follow along as we build
              </h2>
              <p className="text-zinc-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                Progress, failures, experiments, and learnings — documented openly.
              </p>
              <Link href="/posts"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent
                               text-accent-text font-semibold text-sm hover:brightness-110
                               transition shadow-lg shadow-accent/20">
                Read the Blog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
