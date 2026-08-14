"use client";

interface Card {
  title: string;
  description: string;
}

const CARDS: Card[] = [
  {
    title: "Basic Package — $25",
    description:
      "Best for short-form edits and simple content.\n\n• Up to 1 minute running time\n• 1 Revision\n• Basic cuts & transitions\n• Color correction\n• Background music\n• Clean audio leveling\n\nPlease contact and discuss before ordering to confirm your requirements.",
  },
  {
    title: "Standard Package — $50",
    description:
      "Ideal for content creators and social media videos.\n\n• Up to 3 minutes running time\n• 2 Revisions\n• Color grading\n• Sound design & mixing\n• Motion graphics (basic)\n• Transitions & effects\n• Subtitles (if needed)\n\nPlease contact and discuss before ordering for a custom quote if needed.",
  },
  {
    title: "Premium Package — $100+",
    description:
      "For high-quality, cinematic, and brand-focused video projects.\n\n• Up to 5+ minutes running time\n• Priority / unlimited revisions\n• Advanced cinematic color grading\n• Professional sound design & mixing\n• Advanced motion graphics\n• Story-driven editing\n• High-end transitions & effects\n• Priority delivery\n\nCustom requirements available — please contact before ordering.",
  },
];

export default function BespokeSection() {
  return (
    <section className="relative w-full bg-dark overflow-hidden py-24 px-6 md:px-16">
      {/* ── Ambient background glows ───────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -bottom-32 -left-32 w-130 h-130 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.06)_0%,transparent_70%)]" />
      </div>

      {/* ── Heading ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
          Elevate your <em className="not-italic text-[#94a3b8]">content</em>{" "}
          with
          <br />
          professional <span className="text-[#93c5fd]">video editing</span>
          <br />
          that captures attention and converts viewers.
        </h2>
      </div>

      {/* ── Cards ──────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-7 bg-[#0f172a] border border-white/10 transition-all duration-500 hover:border-transparent cursor-default"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            }}
          >
            {/* Hover glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow:
                  "inset 0 0 0 1.5px rgba(56,189,248,0.7), 0 0 32px rgba(56,189,248,0.18)",
              }}
            />

            {/* Top highlight */}
            <div
              aria-hidden
              className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent rounded-full"
            />

            <h3 className="text-white font-bold text-xl md:text-2xl leading-snug mb-4 whitespace-pre-line">
              {card.title}
            </h3>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
