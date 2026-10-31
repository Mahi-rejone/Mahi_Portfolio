import type { NavItem } from "@/types/site";

/** Section ids must match the id on each section element. */
export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
] satisfies NavItem[];

export const ctaLabel = "Get in Touch";
