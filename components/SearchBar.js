'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

export default function SearchBar({ basePath = '' }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [fuse, setFuse] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch(`${basePath}/search-index.json`)
      .then((r) => r.json())
      .then((data) => {
        setFuse(new Fuse(data, {
          keys: [
            { name: 'title', weight: 2 },
            { name: 'description', weight: 1.5 },
            { name: 'content', weight: 1 },
            { name: 'tags', weight: 1 },
          ],
          threshold: 0.35,
          includeMatches: true,
          minMatchCharLength: 2,
        }));
      })
      .catch(console.error);
  }, [basePath]);

  useEffect(() => {
    if (!fuse || query.length < 2) { setResults([]); setIsOpen(false); return; }
    const r = fuse.search(query).slice(0, 5);
    setResults(r);
    setIsOpen(r.length > 0);
  }, [query, fuse]);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[220px]">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600"
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="search-input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          className="w-full pl-9 pr-3 py-2 text-[13px] bg-white/5 border border-white/10
                     rounded-full focus:outline-none focus:ring-1 focus:ring-accent/40
                     focus:border-accent/40 text-white placeholder:text-zinc-600 transition-all"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-dark-card border border-dark-border
                        rounded-xl shadow-2xl overflow-hidden z-50 animate-slide-down">
          {results.map(({ item }) => (
            <Link
              key={item.slug}
              href={`/posts/${item.slug}`}
              onClick={() => { setIsOpen(false); setQuery(''); }}
              className="block px-4 py-3 hover:bg-white/5 transition-colors border-b
                         border-dark-border last:border-b-0"
            >
              <p className="text-sm font-medium text-white truncate">{item.title}</p>
              <p className="text-xs text-zinc-500 mt-0.5 truncate">{item.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
