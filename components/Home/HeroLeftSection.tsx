import Image from "next/image";
import HireMe from "@/components/Home/Hireme";
import Profilepic from "../../public/images/profile/developer-pic-1.png";

export default function LeftSection() {
  return (
    /*
      Mobile  : full width centered
      Small   : 75% width centered
      Medium+ : 45% of the flex row — matches the md:flex-row switch in
                page.tsx, so it lines up with HeroRightSection's md:w-1/2
                instead of overflowing on tablets (768–1023px)
    */
    <div className="relative w-full sm:w-[75%] md:w-[45%] mx-auto md:mx-0">
      <Image
        src={Profilepic}
        alt="tamzid"
        className="w-full h-auto object-cover"
        priority
      />

      {/*
        HireMe pinned to bottom-left corner.
        Mobile  : scale 60%
        Small   : scale 75%
        Medium  : scale 90%
        Large+  : full size
      */}
      <div className="absolute bottom-4 left-4 scale-[0.6] origin-bottom-left sm:scale-75 md:scale-90 lg:scale-100">
        <HireMe />
      </div>
    </div>
  );
}
