"use client";

import Image from "next/image";
import { TweeterIcon, InstagramIcon, FacebookIcon } from "./icon";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
};

const CustomLink = ({ href, title, className = "", onClick }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <a href={href} onClick={onClick} className={`${className} relative group`}>
      {title}
      <span
        className={
          pathname === href
            ? "h-px inline-block w-full bg-black absolute left-0 -bottom-0.5"
            : "h-px inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 origin-left"
        }
      />
    </a>
  );
};

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll while the mobile/tablet menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Don't hide the bar while the mobile menu is open
      if (isMobileMenuOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-3 font-medium flex items-center justify-between text-dark z-50 bg-light/30 backdrop-blur-lg border-b border-dark/10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* LEFT NAV (DESKTOP / TABLET) */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/services" title="Services" />
      </nav>

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/LOGO.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
        />
      </div>

      {/* RIGHT SIDE (DESKTOP / TABLET) */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-6">
        <CustomLink href="/contact" title="Contact" className="text-sm lg:text-base" />

        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TweeterIcon className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.a>

        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <InstagramIcon className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.a>

        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.a>

        <a href="/contact">
          <button className="relative overflow-hidden px-3 lg:px-4 py-2 border border-dark rounded-3xl text-xs lg:text-sm font-semibold group bg-blue whitespace-nowrap">
            <span className="absolute inset-0 bg-green w-0 group-hover:w-full transition-all duration-300 origin-left z-0"></span>
            <span className="relative z-10 text-white group-hover:text-dark transition-colors duration-300">
              Book a Free Consultation
            </span>
          </button>
        </a>
      </nav>

      {/* MOBILE / TABLET MENU TOGGLE */}
      <button
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        className="md:hidden text-2xl sm:text-3xl z-50"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <BiX /> : <BiMenu />}
      </button>

      {/* MOBILE / TABLET MENU PANEL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-light backdrop-blur-md flex flex-col items-center gap-6 py-6 px-6 md:hidden border-b border-dark/10 shadow-lg"
          >
            <CustomLink href="/" title="Home" onClick={closeMenu} className="text-base" />
            <CustomLink href="/about" title="About" onClick={closeMenu} className="text-base" />
            <CustomLink href="/projects" title="Projects" onClick={closeMenu} className="text-base" />
            <CustomLink href="/services" title="Services" onClick={closeMenu} className="text-base" />
            <CustomLink href="/contact" title="Contact" onClick={closeMenu} className="text-base" />

            <a href="/contact" className="w-full flex justify-center">
              <button className="relative overflow-hidden px-4 py-2 border border-dark rounded-3xl text-sm font-semibold group bg-blue w-full max-w-xs">
                <span className="absolute inset-0 bg-green w-0 group-hover:w-full transition-all duration-300 origin-left z-0"></span>
                <span className="relative z-10 text-white group-hover:text-dark transition-colors duration-300">
                  Book a Free Consultation
                </span>
              </button>
            </a>

            <div className="flex gap-6 pt-2">
              <motion.a href="/" target="_blank" whileTap={{ scale: 0.9 }}>
                <TweeterIcon className="w-6 h-6" />
              </motion.a>
              <motion.a href="/" target="_blank" whileTap={{ scale: 0.9 }}>
                <InstagramIcon className="w-6 h-6" />
              </motion.a>
              <motion.a href="/" target="_blank" whileTap={{ scale: 0.9 }}>
                <FacebookIcon className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
