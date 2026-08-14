"use client"; 

import AnimatedText from "@/components/Home/animatedtext";
import Layout from "@/components/Container";
import Skills from "@/components/skills";
import Profilepic from "../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedNumbersProps = {
  value: number;
};

function AnimatedNumbers({ value }: AnimatedNumbersProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true }); 

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [value, motionValue, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function About() {
  return (
    <main className="flex w-full flex-col items-center justify-center background-light text-dark">
      <Layout>
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="text-2xl! sm:text-5xl! lg:text-6xl! text-center! mb-16"
          highlightWords={["Passion", "Purpose!", "Fuels"]}
        />

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 lg:gap-16">

          {/* ── Biography ── */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 font-bold uppercase text-dark/75 text-lg sm:text-2xl lg:text-4xl font-primary">
              Biography
            </h2>
            <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
              Hi, I&apos;m{" "}
              <strong className="text-dark font-bold">Tamzid</strong>, a
              professional photographer and video editor with a passion for
              creating beautiful, cinematic visuals. With 4+ years of experience
              in the field, I am always looking for new and innovative ways to
              bring my clients&apos; visions to life.
            </p>
            <p className="text-sm sm:text-base text-black leading-relaxed my-4 font-medium">
              I believe that photography is about more than just capturing
              moments — it&apos;s about telling stories, evoking emotions, and
              leaving lasting impressions that connect with people on a deeper
              level.
            </p>
            <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
              Whether I&apos;m shooting a portrait, a wedding, or editing a
              cinematic reel, I bring my full commitment to visual excellence
              and creative thinking to every project I work on. I look forward
              to bringing my skills and passion to your next project.
            </p>
          </div>

          {/* ── Profile Image Card ── */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <Image
              src={Profilepic}
              alt="Tamzid"
              className="w-full h-auto rounded-2xl"
              loading="eager"
            />
            {/* Shadow block behind the card */}
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-4xl! bg-dark" />
          </div>

          {/* ── Stats ── */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-row md:flex-row lg:flex-col items-center lg:items-end justify-around lg:justify-between py-4 lg:py-0">

            <div className="flex flex-col items-center lg:items-end justify-center">
              <span className="inline-block text-4xl sm:text-5xl lg:text-7xl font-bold">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="text-sm sm:text-base lg:text-2xl font-medium capitalize text-center lg:text-right">
                satisfied clients
              </h2>
            </div>

            <div className="flex flex-col items-center lg:items-end justify-center">
              <span className="inline-block text-4xl sm:text-5xl lg:text-7xl font-bold">
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="text-sm sm:text-base lg:text-2xl font-medium capitalize text-center lg:text-right">
                successful projects
              </h2>
            </div>

            <div className="flex flex-col items-center lg:items-end justify-center">
              <span className="inline-block text-4xl sm:text-5xl lg:text-7xl font-bold">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="text-sm sm:text-base lg:text-2xl font-medium capitalize text-center lg:text-right">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills/>
      </Layout>
    </main>
  );
}