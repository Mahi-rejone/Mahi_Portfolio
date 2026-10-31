"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/types/site";

export default function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-dark/10 bg-white/40 p-5 sm:p-7"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-2 w-2 rounded-full bg-dark" />
          <h3 className="text-xl font-bold text-dark">{category.title}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-dark/70">{category.description}</p>
      </div>

      <ul className="flex flex-wrap gap-3">
        {category.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-dark/10 bg-light px-4 py-2 text-sm font-semibold text-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-dark/30 hover:shadow-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
