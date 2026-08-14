"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
type VideoSource =
  | { type: "local";   src: string }
  | { type: "youtube"; id: string  }
  | { type: "vimeo";   id: string  };

interface VideoItem {
  id: number;
  title: string;
  source: VideoSource;
  thumbnail: string;
}

// ── Data — replace with your real videos ──────────────────────────────────────
const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    thumbnail: "/images/thumbs/video-01.webp",
    source: { type: "youtube", id: "dQw4w9WgXcQ" },
  },
  {
    id: 2,
    title: "Urban Timelapse",
    thumbnail: "/images/thumbs/video-02.webp",
    source: { type: "vimeo", id: "76979871" },
  },
  {
    id: 3,
    title: "Wedding Reel 2024",
    thumbnail: "/images/thumbs/video-03.webp",
    source: { type: "local", src: "/videos/wedding-reel.mp4" },
  },
  {
    id: 4,
    title: "Product Launch Film",
    thumbnail: "/images/thumbs/video-04.webp",
    source: { type: "youtube", id: "ScMzIvxBSi4" },
  },
  {
    id: 5,
    title: "Nature Documentary",
    thumbnail: "/images/thumbs/video-05.webp",
    source: { type: "vimeo", id: "148751763" },
  },
];

// ── URL builders ──────────────────────────────────────────────────────────────
function youtubeSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0&playsinline=1`;
}
function vimeoSrc(id: string) {
  return `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&background=1`;
}

// ── Video layer ───────────────────────────────────────────────────────────────
function VideoLayer({ item, active }: { item: VideoItem; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) { v.currentTime = 0; v.play().catch(() => {}); }
    else v.pause();
  }, [active]);

  if (!active || item.source.type === "local") {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            active && item.source.type === "local" ? "opacity-0" : "opacity-100"
          }`}
        />
        {item.source.type === "local" && (
          <video
            ref={videoRef}
            src={item.source.src}
            muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </>
    );
  }

  const src =
    item.source.type === "youtube"
      ? youtubeSrc(item.source.id)
      : vimeoSrc(item.source.id);

  return (
    <iframe
      src={src}
      allow="autoplay; fullscreen"
      allowFullScreen
      className="absolute inset-0 w-full h-full border-0 scale-[1.04]"
      title={item.title}
    />
  );
}

// ── Chevron ───────────────────────────────────────────────────────────────────
function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round">
      {dir === "left"
        ? <path d="M15 18l-6-6 6-6" />
        : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function VideoShowcase() {
  const [current, setCurrent] = useState(0);
  const total = VIDEOS.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [prev, next]);

  const nextIndex  = (current + 1) % total;
  const nextVideo  = VIDEOS[nextIndex];

  return (
    <section className="relative w-full bg-dark overflow-hidden select-none py-10 min-h-screen">

      {/* ── Section heading ───────────────────────────────────────────────── */}
      <div className="px-6 md:px-10 mb-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          <span className="block font-bold text-white/80 font-birthstone">Featured</span>
          <span className="block ml-12 font-normal text-white/50 font-birthstone">Video Projects</span>
        </h2>
      </div>

      {/* ── Slider area ───────────────────────────────────────────────────── */}
      <div
        className="relative flex w-full"
        style={{ height: "clamp(240px, 55vw, 720px)" }}
      >
        <div className="relative overflow-hidden shrink-0 w-full lg:w-[63%]">
          {VIDEOS.map((item, i) => (
            <div
              key={item.id}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{
                opacity: i === current ? 1 : 0,
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              <VideoLayer item={item} active={i === current} />
            </div>
          ))}

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent pointer-events-none z-10" />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 z-20 p-5 md:p-8 lg:p-12">
            <p className="uppercase tracking-[0.3em] text-white/50 text-xs mb-1 font-primary">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-primary leading-tight">
              {VIDEOS[current].title}
            </h3>
          </div>
        </div>

        {/* ── PEEK CARD — hidden on mobile, visible lg+ ─────────────────── */}
        <div
          className="relative flex-1 items-center justify-start pl-5 pr-6 hidden lg:flex"
          style={{ background: "var(--dark)" }}
        >
          <div
            className="relative w-full h-[80%] rounded-2xl overflow-hidden cursor-pointer group"
            onClick={next}
            style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={nextVideo.thumbnail}
              alt={nextVideo.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            {/* Up next label + title */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1 font-primary">Up next</p>
              <p className="text-white font-bold text-lg font-primary leading-snug">
                {nextVideo.title}
              </p>
            </div>

            {/* Play icon on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* ── Controls bar ──────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-6 md:px-10 py-5">

        {/* Arrows — left */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-300 focus:outline-none"
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-300 focus:outline-none"
          >
            <ChevronIcon dir="right" />
          </button>
        </div>

        {/* Dots — right */}
        <div className="flex items-center gap-2">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-0.75 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width: i === current ? 36 : 14,
                background: i === current ? "var(--green)" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}