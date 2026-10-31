export type SocialPlatform = "github" | "linkedin" | "twitter" | "instagram" | "facebook";

export type NavItem = { label: string; id: string };

export type SocialLink = { platform: SocialPlatform; label: string; url: string };

export type Stat = { value: number; label: string };

export type Offering = { name: string; summary: string; features: string[] };

export type SkillCategory = { title: string; description: string; items: string[] };

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  /** Optional screenshot, e.g. "/images/projects/my-app.webp". Without it the card shows a neutral placeholder. */
  image?: string;
  /** Leave "" to hide the button. */
  github: string;
  /** Leave "" to hide the button. */
  live: string;
  /** TODO: remove this flag from each demo card once it is replaced with a real project. */
  demo?: boolean;
};
