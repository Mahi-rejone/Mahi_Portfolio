import AnimatedText from "@/components/Home/animatedtext";
import TrustBadge from "@/components/Home/badge";
import SocialProof from "@/components/Home/socialproof";

export default function RightSection() {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start self-center text-center md:text-left px-4 md:px-0 pb-8 md:pb-0">
      <AnimatedText
        text="Turning Moments Into
        Cinematic Stories."
        className="text-2xl! sm:text-4xl! md:text-4xl! lg:text-5xl! text-center! md:text-left!"
        highlightWords={["Cinematic", "Stories."]}
      />

      <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        I create beautiful visuals that tell stories, capture emotions, and make
        an impact. Explore my work and see my photography and video editing in
        action.
      </p>

      {/* Trust badges — wrap gracefully on small screens */}
      <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
        <TrustBadge text="Professional Videographer" />
        <TrustBadge text="Professional Photographer" />
        <TrustBadge text="High-Quality Editor" />
      </div>

      {/* Social proof */}
      {/* <div className="mt-6 flex justify-center md:justify-start">
        <SocialProof
          avatars={[
            "/images/profile/developer-pic-1.png",
            "/images/profile/developer-pic-1.png",
            "/images/profile/developer-pic-1.png",
            "/images/profile/developer-pic-1.png",
            "/images/profile/developer-pic-1.png",
          ]}
        />
      </div> */}
    </div>
  );
}
