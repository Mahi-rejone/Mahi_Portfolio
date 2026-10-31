import Image from "next/image";
import portrait from "@/assets/images/profile/about-portrait.jpg";
import { about } from "@/config";

export default function ProfileCard() {
  return (
    <div className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 md:col-span-1 lg:col-span-3">
      <Image
        src={portrait}
        alt={about.imageAlt}
        className="h-auto w-full rounded-2xl"
        loading="eager"
      />
      {/* Shadow block behind the card */}
      <div
        aria-hidden
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-4xl bg-dark"
      />
    </div>
  );
}
