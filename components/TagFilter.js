'use client';

export default function TagFilter({ allTags, selectedTag, onTagSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagSelect(null)}
        className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 border
          ${!selectedTag
            ? 'bg-accent text-accent-text border-accent'
            : 'bg-transparent text-zinc-500 border-dark-border hover:border-accent/30 hover:text-zinc-300'
          }`}
      >
        All
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag === selectedTag ? null : tag)}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 border
            ${tag === selectedTag
              ? 'bg-accent text-accent-text border-accent'
              : 'bg-transparent text-zinc-500 border-dark-border hover:border-accent/30 hover:text-zinc-300'
            }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
