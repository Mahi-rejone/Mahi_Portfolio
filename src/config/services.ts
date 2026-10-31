import type { Offering } from "@/types/site";

export const services = {
  heading: ["Turn your", "idea", "into a", "working web app", "built end to end."],
  offerings: [
    {
      name: "Frontend development",
      summary: "Responsive, accessible interfaces that feel good to use.",
      features: ["Responsive layouts", "Accessible components", "Smooth, purposeful motion"],
    },
    {
      name: "Backend & APIs",
      summary: "The server side that makes your product work.",
      features: ["API design and integration", "Data storage", "Authentication"],
    },
    {
      name: "Full web applications",
      summary: "From first idea to a live site.",
      features: ["Planning and structure", "Design to code", "Deployment"],
    },
  ] satisfies Offering[],
  quoteCtaLabel: "Contact for a quote",
};
