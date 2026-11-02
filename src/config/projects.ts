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
    title: "BloodFlow",
    description:
      "A full-stack blood donation platform that connects donors, patients, hospitals and blood banks, with verified donations and role-based management.",
    tags: ["Next.js", "TypeScript", "Redux Toolkit (RTK Query)", "Tailwind CSS", "Ant Design", "shadcn/ui", "Express.js", "Prisma", "PostgreSQL (Neon)", "Zod", "JWT", "Resend", "SSLCommerz", "Vercel"],
    image: "/images/projects/bloodflow.png",
    github: "https://github.com/Mahi-rejone/Bloodflow",
    live: "https://bloodflow-kappa.vercel.app/",
    demo: false,
  },
  {
    id: 2,
    title: "Movie Ticket Booking App",
    description:
      "Demo card. Replace this with one or two sentences about what the project does and the problem it solves.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "",
    live: "https://quickshow.vercel.app/",
    image:
      "https://greatstack.dev/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FPez37wmUaQM%2Fmaxresdefault.jpg&w=828&q=75",
    demo: false,
  },
  {
    id: 3,
    title: "Instacart-Groceruy-Delivary-App",
    description:
      "Demo card. Replace this with one or two sentences about what the project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Mahi-rejone/E-commers",
    live: "https://e-commers-two-nu.vercel.app/",
    image:
      "https://greatstack.dev/_next/image?url=http%3A%2F%2Fimg.youtube.com%2Fvi%2FsaiDl2Qacm8%2Fmaxresdefault.jpg&w=828&q=75",
    demo: false,
  },
] satisfies ProjectItem[];
