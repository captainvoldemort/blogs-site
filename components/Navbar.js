'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const links = [
    { href: '/posts', label: 'Posts' },
    { href: '/about', label: 'About' },
    { href: '/scope', label: 'Scope & Status' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-site mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src={`${basePath}/images/cl-icon-dark.png`}
            alt="Common Labs"
            className="w-8 h-8"
          />
          <span className="text-[15px] font-bold tracking-tight text-white uppercase">
            Common Labs
          </span>
        </Link>

        {/* Center links (desktop) */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <SearchBar basePath={basePath} />
          <a
            href="mailto:hello@commonlabs.dev"
            className="px-5 py-2 text-[13px] font-semibold rounded-full bg-accent text-accent-text
                       hover:brightness-110 transition-all whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl animate-slide-down">
          <div className="max-w-site mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-zinc-400 hover:text-white py-2.5 px-3 rounded-lg
                           hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3">
              <SearchBar basePath={basePath} />
            </div>
            <a
              href="mailto:hello@commonlabs.dev"
              className="mt-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-accent text-accent-text
                         text-center hover:brightness-110 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
