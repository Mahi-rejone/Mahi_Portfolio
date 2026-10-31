import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import { hero } from "@/config";

export default function HeroContent() {
  return (
    <div className="flex w-full flex-col items-center self-center px-4 pb-8 text-center md:w-1/2 md:items-start md:px-0 md:pb-0 md:text-left">
      <AnimatedText
        as="h1"
        text={hero.headline}
        className="text-center text-2xl sm:text-4xl md:text-left lg:text-5xl"
        highlightWords={hero.highlightWords}
      />

      <p className="mt-3 text-sm font-medium sm:text-base md:text-lg lg:text-xl">{hero.intro}</p>

      <ul className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
        {hero.badges.map((text) => (
          <li key={text}>
            <Badge text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
