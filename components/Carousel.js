'use client';

import { useRef, useState, useEffect } from 'react';

/**
 * Horizontal carousel that cards enter from the right. Not infinite —
 * scrolls from start to end with prev/next buttons.
 */
export default function Carousel({ items }) {
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Cards track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[320px] flex-shrink-0 bg-dark-card border border-dark-border
                       rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center
                            text-accent mb-5">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-6">{item.desc}</p>
            <div className="text-zinc-700 group-hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Nav buttons */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={() => scroll(-1)}
          disabled={!canPrev}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all
            ${canPrev
              ? 'border-zinc-700 text-zinc-400 hover:border-accent/40 hover:text-accent'
              : 'border-zinc-800 text-zinc-800 cursor-not-allowed'}`}
          aria-label="Previous"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={!canNext}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all
            ${canNext
              ? 'border-zinc-700 text-zinc-400 hover:border-accent/40 hover:text-accent'
              : 'border-zinc-800 text-zinc-800 cursor-not-allowed'}`}
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
