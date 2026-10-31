"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades the sticky hero as the next section scrolls over it.
 * Kept as a tiny client component so the page itself can stay a server component.
 * Skipped on mobile and when the user prefers reduced motion.
 */
export default function HeroScrollEffect() {
  useGSAP(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || reduced) return;

    gsap.fromTo(
      hero,
      { opacity: 1, y: 0 },
      {
        opacity: 0.2,
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      },
    );

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    // useGSAP reverts the animation and its ScrollTrigger on unmount; only the rAF needs cleanup.
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
