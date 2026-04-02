'use client';

import { useState, useMemo } from 'react';
import BlogCard from '../../components/BlogCard';
import TagFilter from '../../components/TagFilter';

/**
 * Client wrapper for the posts feed page with tag filtering.
 */
export default function PostsFeedClient({ posts, basePath }) {
  const [selectedTag, setSelectedTag] = useState(null);

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set();
    posts.forEach((post) => {
      (post.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => (post.tags || []).includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <>
      {/* Tag Filter */}
      {allTags.length > 0 && (
        <div className="mb-8">
          <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-3">
            Filter by topic
          </p>
          <TagFilter
            allTags={allTags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
          />
        </div>
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} basePath={basePath} />
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-surface-400 text-lg">
            {selectedTag
              ? `No posts tagged "${selectedTag}" yet.`
              : 'No posts yet. Check back soon!'}
          </p>
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-3 text-sm font-medium text-lime-700 hover:text-lime-600 transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>
      )}
    </>
  );
}
