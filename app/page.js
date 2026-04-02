import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import AuthorCard from '../components/AuthorCard';
import Link from 'next/link';
import { getAllPosts } from '../lib/markdown';
import { getAllAuthors } from '../lib/authors';

/**
 * Homepage — Hero + Latest Posts + Pipeline Overview + Team
 */
export default function HomePage() {
  const posts = getAllPosts();
  const authors = getAllAuthors();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Pipeline steps for the animated section
  const pipelineSteps = [
    {
      icon: '📹',
      title: 'Capture',
      desc: 'Multi-view RGB-D cameras record the workspace in 3D',
    },
    {
      icon: '🧊',
      title: 'Reconstruct',
      desc: 'Object-centric state via CAD model fitting to observed scene',
    },
    {
      icon: '🔍',
      title: 'Understand',
      desc: 'Infer state changes — pick, place, align, insert, tighten',
    },
    {
      icon: '🔗',
      title: 'Compile',
      desc: 'Build a directed task graph with nodes, relations, and constraints',
    },
    {
      icon: '📋',
      title: 'Emit',
      desc: 'Output a structured recipe — human-readable or machine-executable',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Pipeline Overview Section */}
      <section className="bg-surface-50 border-y border-surface-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
              The Pipeline
            </h2>
            <p className="text-surface-500 mt-2 text-sm max-w-lg mx-auto">
              Human demonstration → scene understanding → action understanding → task graph → executable recipe
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pipelineSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative bg-white rounded-xl border border-surface-100 p-5 text-center
                           hover:border-lime-300 hover:shadow-md hover:shadow-lime-100/30 
                           transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full 
                                text-[10px] font-bold flex items-center justify-center text-surface-900
                                group-hover:scale-110 transition-transform"
                     style={{ backgroundColor: '#e8ff47' }}>
                  {i + 1}
                </div>

                <div className="text-2xl mb-2 mt-1">{step.icon}</div>
                <h3 className="text-sm font-semibold text-surface-900 mb-1">{step.title}</h3>
                <p className="text-xs text-surface-500 leading-relaxed">{step.desc}</p>

                {/* Connector arrow (except last) */}
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-surface-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
              Latest Posts
            </h2>
            <p className="text-surface-500 mt-2 text-sm">
              Engineering updates, experiments, and learnings
            </p>
          </div>
          <Link
            href="/posts"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium 
                       text-lime-700 hover:text-lime-600 transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} basePath={basePath} />
          ))}
        </div>
      </section>

      {/* What Makes Aptitude Different */}
      <section className="bg-surface-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Aptitude <span className="text-lime-400">Is Not</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Not Video Analytics',
                desc: 'We don\'t care about dwell-time charts or zone presence. We want to tell you what actually transformed in the scene.',
              },
              {
                title: 'Not CAD Documentation',
                desc: 'CAD describes what the product is supposed to be — not how a skilled worker assembled it under real conditions.',
              },
              {
                title: 'Not Trajectory Imitation',
                desc: 'What transfers is the semantic structure: which object to manipulate, what relation to establish, what state marks success.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-surface-700 p-6 
                           hover:border-lime-400/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${i * 0.15}s`, backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
            The Team
          </h2>
          <p className="text-surface-500 mt-2 text-sm">
            Common Lab Ventures Pte. Ltd.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {authors.map((author) => (
            <AuthorCard key={author.slug} author={author} basePath={basePath} />
          ))}
        </div>
      </section>
    </>
  );
}
