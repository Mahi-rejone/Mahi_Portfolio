"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
  id: number;
  src: string;
  alt: string;
}

const ROW_1: WorkItem[] = [
  { id: 1,  src: "/images/gridimage/grid-image-showcase-01.webp", alt: "Project 1" },
  { id: 2,  src: "/images/gridimage/grid-image-showcase-02.webp", alt: "Project 2" },
  { id: 3,  src: "/images/gridimage/grid-image-showcase-03.webp", alt: "Project 3" },
  { id: 4,  src: "/images/gridimage/grid-image-showcase-04.webp", alt: "Project 4" },
];
const ROW_2: WorkItem[] = [
  { id: 5,  src: "/images/gridimage/grid-image-showcase-05.webp", alt: "Project 5" },
  { id: 6,  src: "/images/gridimage/grid-image-showcase-06.webp", alt: "Project 6" },
  { id: 7,  src: "/images/gridimage/grid-image-showcase-07.webp", alt: "Project 7" },
  { id: 8,  src: "/images/gridimage/grid-image-showcase-08.webp", alt: "Project 8" },
];
const ROW_3: WorkItem[] = [
  { id: 9,  src: "/images/gridimage/grid-image-showcase-09.webp", alt: "Project 9"  },
  { id: 10, src: "/images/gridimage/grid-image-showcase-10.webp", alt: "Project 10" },
  { id: 11, src: "/images/gridimage/grid-image-showcase-11.webp", alt: "Project 11" },
  { id: 12, src: "/images/gridimage/grid-image-showcase-12.webp", alt: "Project 12" },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="relative w-27.5 sm:w-40 md:w-50 lg:w-62.5 aspect-4/3 shrink-0 overflow-hidden rounded-xl lg:rounded-2xl bg-neutral-900">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 110px, (max-width: 768px) 160px, 250px"
        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
      />
    </div>
  );
}

export default function GridImage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref    = useRef<HTMLDivElement>(null);
  const row2Ref    = useRef<HTMLDivElement>(null);
  const row3Ref    = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const row1    = row1Ref.current;
      const row2    = row2Ref.current;
      const row3    = row3Ref.current;
      if (!section || !row1 || !row2 || !row3) return;

      const shared = {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      };

      const t1 = gsap.fromTo(row1, { x: -60 }, { x: 60,  ease: "none", scrollTrigger: shared });
      const t2 = gsap.fromTo(row2, { x: 60  }, { x: -60, ease: "none", scrollTrigger: shared });
      const t3 = gsap.fromTo(row3, { x: -60 }, { x: 60,  ease: "none", scrollTrigger: shared });

      return () => {
        t1.scrollTrigger?.kill();
        t2.scrollTrigger?.kill();
        t3.scrollTrigger?.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full overflow-hidden py-12 lg:py-24 bg-dark">
      <div className="flex flex-col gap-4 lg:gap-6 will-change-transform">
        <div ref={row1Ref} className="flex gap-3 lg:gap-5 will-change-transform" style={{ paddingLeft: "5vw" }}>
          {ROW_1.map((item) => <WorkCard key={item.id} item={item} />)}
        </div>
        <div ref={row2Ref} className="flex gap-3 lg:gap-5 will-change-transform" style={{ paddingLeft: "10vw" }}>
          {ROW_2.map((item) => <WorkCard key={item.id} item={item} />)}
        </div>
        <div ref={row3Ref} className="flex gap-3 lg:gap-5 will-change-transform" style={{ paddingLeft: "5vw" }}>
          {ROW_3.map((item) => <WorkCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}