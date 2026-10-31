import type { Stat } from "@/types/site";

export const about = {
  heading: "Passion Fuels Purpose!",
  /** "{name}" in a paragraph is replaced by the site name, in bold. */
  bio: [
    "Hi, I'm {name}, a full-stack developer. I build web applications from the interface people see to the server and data behind it.",
    "I care about code that is readable, accessible and fast, and about shipping work that real people can use.",
    "I'm open to job and internship opportunities as well as freelance projects. If you're hiring or have something to build, I'd love to hear from you.",
  ],
  imageAlt: "Mahi at work",
  /** TODO: DEMO NUMBERS. Replace each `value` with your real number and each `label` if needed. */
  stats: [
    { value: 10, label: "projects built" },
    { value: 3, label: "years of experience" },
    { value: 5, label: "technologies used" },
  ] satisfies Stat[],
};
