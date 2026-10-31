import Image from "next/image";
import portrait from "@/assets/images/profile/hero-portrait.png";
import { hero } from "@/config";
import HireMeBadge from "./HireMeBadge";

export default function HeroPortrait() {
  return (
    // Mobile: full width centered. Small: 75%. Medium+: 45% of the flex row (matches HeroContent's md:w-1/2).
    <div className="relative mx-auto w-full sm:w-[75%] md:mx-0 md:w-[45%]">
      <Image src={portrait} alt={hero.imageAlt} className="h-auto w-full object-cover" priority />

      {/* Pinned bottom-left, scaled down on small screens */}
      <div className="absolute bottom-4 left-4 origin-bottom-left scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
        <HireMeBadge />
      </div>
    </div>
  );
}
