import type { SocialLink } from "@/types/site";

/** Leave url empty ("") to hide a link instead of showing a dead one. TODO: add your GitHub and LinkedIn URLs. */
export const socialLinks = [
  { platform: "github", label: "GitHub", url: "https://github.com/Mahi-rejone" },
  { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/mahi-rejone/" },
  { platform: "twitter", label: "Twitter", url: "" },
  { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/mahirejone/" },
  { platform: "facebook", label: "Facebook", url: "https://www.facebook.com/mahi.rejone" },
] satisfies SocialLink[];

/**
 * CV / resume. TODO: put your file in /public (e.g. /public/Mahi-CV.pdf) and set href to "/Mahi-CV.pdf".
 * While href is "" the download button is hidden.
 */
export const cv = { label: "Download CV", href: "/dummy.pdf" };
