"use client";

import { useCallback, useEffect, useState } from "react";

/** Hides on scroll down, shows on scroll up. Pass `paused` to keep it visible (e.g. while a menu is open). */
export function useHideOnScroll(paused: boolean) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (paused) return;
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [paused]);

  const show = useCallback(() => setIsVisible(true), []);

  return { isVisible, show };
}
