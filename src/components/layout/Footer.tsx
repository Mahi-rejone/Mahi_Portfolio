import SocialLinks from "@/components/ui/SocialLinks";
import { navItems, siteConfig } from "@/config";

const FOOTER_LINK_IDS = ["about", "contact"];

export default function Footer() {
  const links = navItems.filter((n) => FOOTER_LINK_IDS.includes(n.id));

  return (
    <footer className="w-full border-t border-black/20 bg-light text-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <span className="text-center text-sm md:text-left md:text-base">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </span>

        <span className="text-lg font-semibold tracking-wide">{siteConfig.brand}</span>

        <SocialLinks iconClassName="w-5 h-5" className="gap-4" />

        <nav aria-label="Footer" className="flex gap-6 text-sm md:text-base">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="transition hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
