"use client";

import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import { ctaLabel, navItems, siteConfig } from "@/config";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { cn } from "@/lib/cn";
import { handleAnchorClick } from "@/lib/scroll";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const SECTION_IDS = navItems.map((item) => item.id);
const leftItems = navItems.slice(0, -1);
const rightItems = navItems.slice(-1);

export default function Navbar() {
  const mobileMenu = useMobileMenu();
  const { isVisible, show } = useHideOnScroll(mobileMenu.isOpen);
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header
      // Never leave keyboard focus inside a hidden header
      onFocusCapture={show}
      className={cn(
        "sticky top-0 z-50 flex w-full items-center justify-between border-b border-dark/10 bg-light/30 px-4 py-3 font-medium text-dark backdrop-blur-lg transition-transform duration-300 sm:px-6 md:px-10 lg:px-20",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {/* Left nav (desktop / tablet) */}
      <nav
        aria-label="Primary"
        className="hidden items-center gap-4 text-sm md:flex lg:gap-6 lg:text-base"
      >
        {leftItems.map((item) => (
          <NavLink key={item.id} id={item.id} title={item.label} active={activeId === item.id} />
        ))}
      </nav>
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleAnchorClick(e, "#home")}
        className="flex items-center gap-2 rounded-full"
      >
        <Image
          src="/images/logo2.png"
          alt={`${siteConfig.brand} – back to top`}
          width={70}
          height={70}
          className="h-8 w-8 rounded-full sm:h-9 sm:w-9 md:h-10 md:w-10"
        />
      </a>

      {/* Right side (desktop / tablet) */}
      <div className="hidden items-center gap-4 md:flex lg:gap-6">
        <SocialLinks iconClassName="w-5 h-5 lg:w-6 lg:h-6" className="gap-4 lg:gap-6" />
        <Button href="#contact" className="px-3 py-2 text-xs lg:px-4 lg:text-sm">
          {ctaLabel}
        </Button>
      </div>

      {/* Mobile / tablet menu toggle */}
      <button
        type="button"
        aria-label={mobileMenu.isOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenu.isOpen}
        aria-controls="mobile-menu"
        className="z-50 flex h-11 w-11 items-center justify-center text-2xl sm:text-3xl md:hidden"
        onClick={mobileMenu.toggle}
      >
        {mobileMenu.isOpen ? <BiX aria-hidden /> : <BiMenu aria-hidden />}
      </button>

      <AnimatePresence>
        {mobileMenu.isOpen && <MobileMenu activeId={activeId} onNavigate={mobileMenu.close} />}
      </AnimatePresence>
    </header>
  );
}
