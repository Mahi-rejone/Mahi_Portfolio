import Button from "@/components/ui/Button";
import type { Offering } from "@/types/site";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")";

type ServiceCardProps = {
  offering: Offering;
  ctaLabel: string;
};

export default function ServiceCard({ offering, ctaLabel }: ServiceCardProps) {
  return (
    <li
      className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-surface p-7 transition-all duration-500 focus-within:border-transparent hover:border-transparent"
      style={{ backgroundImage: NOISE }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 0 1.5px rgba(56,189,248,0.7), 0 0 32px rgba(56,189,248,0.18)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-0 right-6 left-6 h-px rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent"
      />

      <h3 className="text-2xl leading-tight font-bold text-white md:text-3xl">{offering.name}</h3>

      <p className="text-sm leading-relaxed text-neutral-200 md:text-base">{offering.summary}</p>

      <ul className="flex flex-col gap-2 text-sm leading-relaxed text-neutral-300 md:text-base">
        {offering.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href="#contact" className="mt-auto w-full">
        {ctaLabel}
        <span className="sr-only">: {offering.name}</span>
      </Button>
    </li>
  );
}
