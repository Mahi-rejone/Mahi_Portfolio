import type Lenis from "lenis";
import type { MouseEvent } from "react";

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Scroll to a section by id, using Lenis when it is running and native scrolling otherwise. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = prefersReducedMotion();

  if (lenisInstance && !reduced) {
    lenisInstance.scrollTo(id === "home" ? 0 : el, { offset: id === "home" ? 0 : -64 });
  } else {
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }
  history.pushState(null, "", `#${id}`);
}

/** onClick handler for in-page links such as href="#contact". Modified clicks keep default behavior. */
export function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  const id = href.slice(1);
  if (!document.getElementById(id)) return;
  e.preventDefault();
  scrollToSection(id);
}
