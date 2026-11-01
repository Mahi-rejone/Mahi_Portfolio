import PitchCopy from "./PitchCopy";

/** Dark section that scrolls over the hero: pitch text beside the code card. */
export default function Pitch() {
  return (
    <section className="relative z-10 w-full bg-dark">
      <div className="flex w-full flex-col-reverse lg:flex-row">
        {/* Left Section */}
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <PitchCopy />
        </div>

        {/* Right Section - GitHub SVG */}
        <div className="flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
          <img
            src="https://raw.githubusercontent.com/Mahi-rejone/Mahi-rejone/main/profile%20(2).svg"
            alt="GitHub Profile Code Card"
            className="h-auto w-full max-w-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
