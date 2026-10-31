import Button from "@/components/ui/Button";
import { ctaLabel, pitch } from "@/config";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 shrink-0 text-emerald-500"
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

export default function PitchCopy() {
  const [before, emphasis, after] = pitch.heading;

  return (
    <div className="relative z-20 flex w-full items-center bg-dark">
      <div className="w-full px-6 py-12 md:px-12 lg:px-16 lg:py-20">
        <div className="flex w-full max-w-[56ch] flex-col gap-8">
          <h2 className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl xl:text-6xl">
            {before} <span className="italic">{emphasis}</span> {after}
          </h2>

          <div className="flex flex-col gap-4 text-sm text-neutral-300 md:text-base">
            {pitch.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <ul className="mt-1 flex flex-col gap-3 text-white">
              {pitch.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {pitch.outro.map((p, i) => (
              <p key={p} className={i === 0 ? "mt-1" : undefined}>
                {p}
              </p>
            ))}
          </div>

          <Button href="#contact" className="w-full sm:w-auto">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
