"use client";
import { motion } from "framer-motion";

type AnimationProps = {
  text: string;
  className?: string;
  highlightWords?: string[];
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
}: AnimationProps) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center">
      <motion.h1
        className={`${className} inline-block w-full text-dark font-bold capitalize`}
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
              className={`inline-block ${isHighlighted ? "font-archivo-black" : ""}`}
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
      </motion.h1>
    </div>
  );
}
