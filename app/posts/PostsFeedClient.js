'use client';

import { useState, useMemo } from 'react';
import BlogCard from '../../components/BlogCard';
import TagFilter from '../../components/TagFilter';

export default function PostsFeedClient({ posts, basePath }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = useMemo(() => {
    const s = new Set();
    posts.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((p) => (p.tags || []).includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <>
      {allTags.length > 0 && (
        <div className="mb-10">
          <p className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-3">
            Filter by topic
          </p>
          <TagFilter allTags={allTags} selectedTag={selectedTag} onTagSelect={setSelectedTag} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} basePath={basePath} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-zinc-600 text-lg">
            {selectedTag ? `No posts tagged "${selectedTag}" yet.` : 'No posts yet.'}
          </p>
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-3 text-sm font-medium text-accent hover:brightness-110 transition"
            >
              Clear filter
            </button>
          )}
        </div>
      )}
    </>
  );
}
