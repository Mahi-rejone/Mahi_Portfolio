import type { SkillCategory } from "@/types/site";

export const skills = {
  eyebrow: "Tech Stack",
  heading: "My Skills",
  intro: "The technologies I use to design, build and ship web applications.",
  /**
   * TODO: add the rest of your stack. A category with an empty `items` list is hidden.
   * "Frontend" below only lists what this site itself is built with.
   */
  categories: [
    {
      title: "Frontend",
      description: "Interfaces, styling and motion.",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    },
    { title: "Backend & Databases", description: "Servers, APIs and data.", items: [] },
    { title: "Tools & Workflow", description: "How I build and ship.", items: [] },
  ] satisfies SkillCategory[],
};
