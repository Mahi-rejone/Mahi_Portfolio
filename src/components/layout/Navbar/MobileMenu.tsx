"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import { ctaLabel, navItems } from "@/config";
import NavLink from "./NavLink";

type MobileMenuProps = {
  activeId: string;
  onNavigate: () => void;
};

/** Slide-down panel for small screens. Mount it inside <AnimatePresence> so it can animate out. */
export default function MobileMenu({ activeId, onNavigate }: MobileMenuProps) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 flex max-h-[calc(100vh-4rem)] w-full flex-col items-center gap-6 overflow-y-auto border-b border-dark/10 bg-light px-6 py-6 shadow-lg backdrop-blur-md md:hidden"
    >
      <nav aria-label="Mobile" className="flex flex-col items-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            id={item.id}
            title={item.label}
            active={activeId === item.id}
            onNavigate={onNavigate}
            className="py-1 text-base"
          />
        ))}
      </nav>

      <Button href="#contact" onNavigate={onNavigate} className="w-full max-w-xs">
        {ctaLabel}
      </Button>

      <SocialLinks className="pt-2" />
    </motion.div>
  );
}
