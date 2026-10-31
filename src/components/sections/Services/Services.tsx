import { services } from "@/config";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [lead, emphasis, mid, highlight, tail] = services.heading;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden bg-dark px-6 py-24 md:px-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 h-130 w-130 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 h-100 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto mb-20 max-w-4xl text-center">
        <h2
          id="services-heading"
          className="text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          {lead} <em className="text-muted not-italic">{emphasis}</em> {mid}{" "}
          <span className="text-highlight">{highlight}</span>
          <br />
          {tail}
        </h2>
      </div>

      <ul className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {services.offerings.map((offering) => (
          <ServiceCard key={offering.name} offering={offering} ctaLabel={services.quoteCtaLabel} />
        ))}
      </ul>
    </section>
  );
}
