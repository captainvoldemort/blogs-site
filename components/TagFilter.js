'use client';

import { useState, useMemo } from 'react';

/**
 * Client-side tag filter for the posts page.
 * Dynamically extracts tags from all posts and filters them.
 */
export default function TagFilter({ allTags, selectedTag, onTagSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* "All" chip */}
      <button
        onClick={() => onTagSelect(null)}
        className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 border
          ${!selectedTag
            ? 'text-surface-900 border-lime-400 shadow-sm'
            : 'bg-white text-surface-500 border-surface-200 hover:border-lime-300 hover:text-surface-700'
          }`}
        style={!selectedTag ? { backgroundColor: '#e8ff47' } : {}}
      >
        All
      </button>

      {/* Tag chips */}
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag === selectedTag ? null : tag)}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 border
            ${tag === selectedTag
              ? 'text-surface-900 border-lime-400 shadow-sm'
              : 'bg-white text-surface-500 border-surface-200 hover:border-lime-300 hover:text-surface-700'
            }`}
          style={tag === selectedTag ? { backgroundColor: '#e8ff47' } : {}}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
