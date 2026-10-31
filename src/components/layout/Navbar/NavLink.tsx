"use client";

import { cn } from "@/lib/cn";
import { handleAnchorClick } from "@/lib/scroll";

type NavLinkProps = {
  id: string;
  title: string;
  active: boolean;
  className?: string;
  onNavigate?: () => void;
};

export default function NavLink({ id, title, active, className, onNavigate }: NavLinkProps) {
  const href = `#${id}`;
  return (
    <a
      href={href}
      onClick={(e) => {
        handleAnchorClick(e, href);
        onNavigate?.();
      }}
      aria-current={active ? "location" : undefined}
      className={cn("group relative", className)}
    >
      {title}
      <span
        aria-hidden
        className={cn(
          "ease absolute -bottom-0.5 left-0 inline-block h-px origin-left bg-black transition-[width] duration-300",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </a>
  );
}
