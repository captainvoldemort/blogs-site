'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

/**
 * Site navigation bar — Common Labs / Aptitude branding.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/posts', label: 'Posts' },
    { href: '/about', label: 'About' },
    { href: '/scope', label: 'Scope & Status' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-surface-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src={`${basePath}/images/cl-icon-light.png`}
              alt="Common Labs"
              className="w-8 h-8 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-surface-900 tracking-tight">
                Common Labs
              </span>
              <span className="text-[10px] font-medium text-surface-400 tracking-widest uppercase">
                Aptitude Blog
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-surface-600 hover:text-surface-900 
                           transition-colors relative group/link whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-lime-400 
                                 group-hover/link:w-full transition-all duration-300" />
              </Link>
            ))}
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
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-surface-600 hover:text-surface-900 
                             hover:bg-surface-50 transition-colors px-3 py-2 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-1">
                <SearchBar basePath={basePath} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
