"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { prefersReducedMotion } from "@/lib/scroll";

type AnimatedCounterProps = {
  value: number;
};

/** Counts up from 0 to `value` the first time it scrolls into view. */
export default function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion()) {
      if (ref.current) ref.current.textContent = String(value);
    } else {
      motionValue.set(value);
    }
  }, [value, motionValue, isInView]);

  useEffect(() => {
    // on() returns an unsubscribe function; returning it avoids a listener leak
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}
