import { HireMeRingIcon } from "@/components/icons";
import { siteConfig } from "@/config";

/**
 * Spinning ring with a "Hire Me" mailto button in the middle.
 * Its size is fixed; the parent scales it for different screen sizes.
 */
export default function HireMeBadge() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-40 w-40">
        <div className="absolute inset-0 flex items-center justify-center">
          <HireMeRingIcon
            aria-hidden="true"
            className="h-full w-auto animate-spin-very-slow font-bold"
            style={{ transformOrigin: "center center", maxWidth: "100%", maxHeight: "100%" }}
          />
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Hire me – send an email"
            className="absolute left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-solid border-dark bg-black text-base font-medium text-light shadow-md hover:bg-dark"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
