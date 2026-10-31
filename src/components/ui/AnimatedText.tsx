"use client";
import { motion } from "framer-motion";

type AnimationProps = {
  text: string;
  className?: string;
  highlightWords?: string[];
  /** Heading level. Use "h1" once per page (the hero) and "h2" for every other section. */
  as?: "h1" | "h2";
};

const singleWord = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const quote = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.12 },
  },
};

export default function AnimatedText({
  text,
  className = "",
  highlightWords = [],
  as = "h2",
}: AnimationProps) {
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  return (
    <div className="mx-auto flex w-full items-center justify-center py-2 text-center">
      <Heading
        className={`${className} inline-block w-full font-bold text-dark capitalize`}
        variants={quote}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {text.split(" ").map((word, index) => {
          const isHighlighted = highlightWords.includes(word);

          return (
            <motion.span
              key={word + "-" + index}
              className={`inline-block ${isHighlighted ? "font-birthstone" : ""}`}
              style={{
                marginRight: "0.25em",
                ...(isHighlighted ? { fontSize: "1.4em" } : {}),
              }}
              variants={singleWord}
            >
              {word}
            </motion.span>
          );
        })}
      </Heading>
    </div>
  );
}
