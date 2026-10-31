"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { handleAnchorClick } from "@/lib/scroll";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** Marks the link as a file download (e.g. a CV). */
  download?: boolean;
  onNavigate?: () => void;
};

/** A link styled as a button (avoids the invalid <a><button/></a> pattern). */
export default function Button({
  href,
  children,
  className,
  external,
  download,
  onNavigate,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        handleAnchorClick(e, href);
        onNavigate?.();
      }}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-3xl border border-dark bg-accent px-5 py-2.5 text-sm font-semibold whitespace-nowrap",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 z-0 w-0 origin-left bg-accent-hover transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
      />
      <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-dark group-focus-visible:text-dark">
        {children}
      </span>
    </a>
  );
}
