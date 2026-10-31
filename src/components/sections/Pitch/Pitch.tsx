import CodeCard from "./CodeCard";
import PitchCopy from "./PitchCopy";

/** Dark section that scrolls over the hero: pitch text beside the code card. */
export default function Pitch() {
  return (
    <section className="relative z-10 w-full bg-dark">
      <div className="flex w-full flex-col-reverse lg:flex-row">
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <PitchCopy />
        </div>
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}
