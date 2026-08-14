"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
    });

    // ✅ Named function so we can properly remove it on cleanup
    function onTick(time: number) {
      lenis.raf(time * 1000);
    }

    // ✅ Step 1 — drive Lenis from GSAP's RAF (correct order)
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // ✅ Step 2 — on each Lenis scroll event, sync ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // ✅ NO scrollerProxy — that API breaks modern Lenis
    // ✅ NO ScrollTrigger.refresh() here — page.tsx handles it
    //    after the component tree has fully painted

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onTick);
    };
  }, []);

  return <>{children}</>;
}