import type { ProjectItem } from "@/types/site";

export const projects = {
  eyebrow: "Featured",
  heading: "Projects",
  githubLabel: "GitHub",
  liveLabel: "Live demo",
};

/** TODO: DEMO PROJECTS. Replace these with your real projects (title, description, tags, image, github, live). */
export const projectsList = [
  {
    id: 1,
    title: "Project Name One",
    description:
      "Demo card. Replace this with one or two sentences about what the project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "",
    live: "",
    demo: true,
  },
  {
    id: 2,
    title: "Project Name Two",
    description:
      "Demo card. Replace this with one or two sentences about what the project does and the problem it solves.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "",
    live: "",
    demo: true,
  },
  {
    id: 3,
    title: "Project Name Three",
    description:
      "Demo card. Replace this with one or two sentences about what the project does and the problem it solves.",
    tags: ["Tag One", "Tag Two", "Tag Three"],
    github: "",
    live: "",
    demo: true,
  },
] satisfies ProjectItem[];
