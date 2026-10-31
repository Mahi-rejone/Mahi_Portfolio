import Container from "@/components/layout/Container";
import AnimatedText from "@/components/ui/AnimatedText";
import { about } from "@/config";
import Skills from "@/components/sections/Skills";
import Biography from "./Biography";
import ProfileCard from "./ProfileCard";
import StatsList from "./StatsList";

export default function About() {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center bg-light text-dark"
    >
      <Container>
        <AnimatedText
          text={about.heading}
          className="mb-16 text-center text-2xl sm:text-5xl lg:text-6xl"
          highlightWords={about.heading.split(" ")}
        />

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-8 lg:gap-16">
          <Biography />
          <ProfileCard />
          <StatsList />
        </div>

        <Skills />
      </Container>
    </section>
  );
}
