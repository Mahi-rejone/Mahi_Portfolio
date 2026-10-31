import type { ComponentType } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";
import { socialLinks } from "@/config";
import { cn } from "@/lib/cn";
import type { SocialPlatform } from "@/types/site";

type IconComponent = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

const ICONS: Record<SocialPlatform, IconComponent> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

type SocialLinksProps = {
  iconClassName?: string;
  className?: string;
};

/** Renders only the links that have a url in the config, so there are never dead icons. */
export default function SocialLinks({ iconClassName = "h-6 w-6", className }: SocialLinksProps) {
  const links = socialLinks.filter((s) => s.url.trim() !== "");
  if (links.length === 0) return null;

  return (
    <ul className={cn("flex items-center gap-6", className)}>
      {links.map(({ platform, label, url }) => {
        const Icon = ICONS[platform];
        return (
          <li key={platform}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="block transition-transform hover:-translate-y-0.5"
            >
              <Icon className={iconClassName} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
