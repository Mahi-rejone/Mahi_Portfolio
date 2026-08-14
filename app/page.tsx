"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Layout from "@/components/Container";
import ProblemStatement from "@/components/Home/ProblemStatement";
import LeftSection from "@/components/Home/HeroLeftSection";
import RightSection from "@/components/Home/HeroRightSection";
import GridImage from "@/components/Home/gridimage";
import About from "@/components/about";
import Projcts from "@/components/projects";
import BespokeSection from "@/components/services";
import Contact from "@/components/contact";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const nextRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hero = heroRef.current;
    const next = nextRef.current;

    if (!hero || !next) return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobile) return;

    gsap.fromTo(
      hero,
      { opacity: 1, y: 0 },
      {
        opacity: 0.2,
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: hero, // 👈 change this
          start: "bottom bottom", // 👈 start when hero ends
          end: "bottom top", // 👈 finish when fully scrolled out
          scrub: 1.5,
        },
      },
    );

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <div ref={wrapperRef} className="relative">
        <section
          ref={heroRef}
          className="
          sticky top-0
          z-0
          flex items-center
          text-dark
          w-full min-h-screen
          bg-[linear-gradient(20deg,var(--pink)_0%,var(--lightBlue)_10%,var(--light)_20%)]!
          will-change-[transform,opacity]
        "
        >
          <Layout>
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8 py-8 md:py-0">
              <LeftSection />
              <RightSection />
            </div>
          </Layout>
        </section>

        <section ref={nextRef} className="relative z-10 w-full bg-dark">
          <div className="flex flex-col-reverse lg:flex-row w-full">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <ProblemStatement />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <GridImage />
            </div>
          </div>
        </section>
      </div>
      <About />
      <Projcts />
      <BespokeSection />
      <Contact />
    </div>
  );
}
