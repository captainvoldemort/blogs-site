'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

/**
 * Site navigation bar with logo, links, and search.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-surface-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg 
                            flex items-center justify-center shadow-md shadow-primary-200 
                            group-hover:shadow-lg group-hover:shadow-primary-300 transition-shadow">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-lg font-bold text-surface-900 tracking-tight">
              Blog<span className="text-primary-600">Site</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors"
            >
              Blog
            </Link>
            <SearchBar basePath={basePath} />
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-surface-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors px-2 py-1.5"
              >
                Home
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors px-2 py-1.5"
              >
                Blog
              </Link>
              <div className="pt-2">
                <SearchBar basePath={basePath} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
