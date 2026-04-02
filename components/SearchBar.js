'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

/**
 * Client-side search bar using Fuse.js with lime-accent styling.
 */
export default function SearchBar({ basePath = '' }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [fuse, setFuse] = useState(null);
  const containerRef = useRef(null);

  // Load search index on mount
  useEffect(() => {
    fetch(`${basePath}/search-index.json`)
      .then((res) => res.json())
      .then((data) => {
        const fuseInstance = new Fuse(data, {
          keys: [
            { name: 'title', weight: 2 },
            { name: 'description', weight: 1.5 },
            { name: 'content', weight: 1 },
            { name: 'tags', weight: 1 },
          ],
          threshold: 0.35,
          includeMatches: true,
          minMatchCharLength: 2,
        });
        setFuse(fuseInstance);
      })
      .catch((err) => console.error('Failed to load search index:', err));
  }, [basePath]);

  // Search on query change
  useEffect(() => {
    if (!fuse || query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const searchResults = fuse.search(query).slice(0, 5);
    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  }, [query, fuse]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      {/* Search Input */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          id="search-input"
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 text-sm bg-surface-50 border border-surface-200 
                     rounded-full focus:outline-none focus:ring-2 focus:ring-lime-200 
                     focus:border-lime-400 transition-all placeholder:text-surface-400"
        />
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-surface-200 
                        rounded-xl shadow-xl overflow-hidden z-50 animate-slide-down">
          {results.map(({ item }) => (
            <Link
              key={item.slug}
              href={`/posts/${item.slug}`}
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="block px-4 py-3 hover:bg-lime-50 transition-colors border-b 
                         border-surface-100 last:border-b-0"
            >
              <p className="text-sm font-medium text-surface-900 truncate">
                {item.title}
              </p>
              <p className="text-xs text-surface-500 mt-0.5 truncate">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
