import HeroScrollEffect from "@/components/motion/HeroScrollEffect";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Pitch from "@/components/sections/Pitch";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <div>
      <HeroScrollEffect />
      {/* Hero is sticky; the pitch section scrolls over it */}
      <div className="relative">
        <Hero />
        <Pitch />
      </div>
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
