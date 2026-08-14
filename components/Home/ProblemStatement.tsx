"use client";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-emerald-500 shrink-0 mt-1"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

export default function ProblemStatement() {
  return (
    <div className="bg-dark relative w-full flex items-center z-20">
      <div className="w-full px-6 py-12 md:px-12 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-8 w-full max-w-[56ch]">
          {/* Heading — smaller on mobile */}
          <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            Is Your <span className="italic">Visual</span> Content Costing You
            Clients?
          </h2>

          {/* Body */}
          <div className="flex flex-col text-neutral-300 text-sm md:text-base gap-4">
            <p>
              If your videos and photos don&apos;t capture attention instantly,
              you&apos;re losing opportunities before your work even gets seen.
            </p>

            <p>
              As a professional video editor and photographer, I help brands,
              creators, and businesses turn raw footage into compelling visual
              stories that:
            </p>

            <ul className="flex flex-col gap-3 text-white mt-1">
              <li className="flex gap-3 items-start">
                <CheckIcon />
                <span>Capture attention within the first few seconds</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckIcon />
                <span>
                  Deliver a cinematic, high-quality viewing experience
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckIcon />
                <span>
                  Enhance brand identity through consistent visual style
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckIcon />
                <span>Keep viewers engaged from start to finish</span>
              </li>
            </ul>

            <p className="mt-1">
              In a world where content is everywhere, average visuals get
              ignored. Professionally crafted editing ensure
              your content stands out, builds trust, and leaves a lasting
              impression.<br />
              Whether it&apos;s social media content, promotional videos,
              or personal branding, I create visuals that don&apos;t just look good —
              they perform, engage, and convert.
            </p>
          </div>

          {/* CTA */}
          <a href="/" target="_blank">
            <button className="relative overflow-hidden px-5 py-2.5 border border-dark rounded-3xl text-sm font-semibold group bg-blue w-full sm:w-auto">
              <span className="absolute inset-0 bg-green w-0 group-hover:w-full transition-all duration-300 origin-left z-0" />
              <span className="relative z-10 text-white group-hover:text-dark transition-colors duration-300">
                Book a Free Consultation
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
