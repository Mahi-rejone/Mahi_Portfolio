"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { setLenis, prefersReducedMotion } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect the user's reduced-motion setting: keep native scrolling.
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
    });
    setLenis(lenis);

    function onTick(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      setLenis(null);
      lenis.destroy();
      gsap.ticker.remove(onTick);
    };
  }, []);

  // reducedMotion="user" makes framer-motion skip transform animations when the OS asks for it.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
