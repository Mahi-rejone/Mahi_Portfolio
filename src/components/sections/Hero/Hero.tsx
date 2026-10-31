import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroPortrait from "./HeroPortrait";

/** Sticky hero. The next section scrolls over it (see HeroScrollEffect for the fade). */
export default function Hero() {
  return (
    <section
      id="home"
      className="sticky top-0 z-0 flex min-h-screen w-full items-center bg-[linear-gradient(20deg,var(--pink)_0%,var(--lightBlue)_10%,var(--light)_20%)] text-dark"
    >
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-6 py-8 md:flex-row md:gap-8 md:py-0">
          <HeroPortrait />
          <HeroContent />
        </div>
      </Container>
    </section>
  );
}
