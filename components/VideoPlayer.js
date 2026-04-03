'use client';

import { useRef, useState, useEffect } from 'react';

/**
 * Custom video player with accent-themed controls.
 */
export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
    setCurrentTime(v.currentTime);
  };

  const handleLoaded = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * v.duration;
  };

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-dark-card border border-dark-border
                    shadow-2xl shadow-accent/5">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
        onClick={toggle}
        className="w-full aspect-video object-cover cursor-pointer"
      />

      {/* Big center play button (when paused) */}
      {!playing && (
        <button onClick={toggle}
                className="absolute inset-0 flex items-center justify-center bg-black/30
                           transition-opacity group-hover:bg-black/40">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center
                          shadow-lg shadow-accent/30">
            <svg className="w-7 h-7 text-accent-text ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* Bottom controls bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8
                      bg-gradient-to-t from-black/80 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress bar */}
        <div ref={progressRef} onClick={handleSeek}
             className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 group/bar">
          <div className="h-full bg-accent rounded-full relative transition-all"
               style={{ width: `${progress}%` }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent
                            rounded-full shadow-md opacity-0 group-hover/bar:opacity-100 transition" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button onClick={toggle} className="text-white hover:text-accent transition">
              {playing ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Mute/Unmute */}
            <button onClick={() => { setMuted(!muted); if (videoRef.current) videoRef.current.muted = !muted; }}
                    className="text-white hover:text-accent transition">
              {muted ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>

            {/* Time */}
            <span className="text-xs text-zinc-400 font-mono">
              {fmt(currentTime)} / {fmt(duration)}
            </span>
          </div>

          {/* Fullscreen */}
          <button onClick={() => videoRef.current?.requestFullscreen?.()}
                  className="text-white hover:text-accent transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
