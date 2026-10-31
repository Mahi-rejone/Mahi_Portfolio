import { skills } from "@/config";
import SkillCategoryCard from "./SkillCategoryCard";

export default function Skills() {
  // A category with no items is hidden until it is filled in the config.
  const categories = skills.categories.filter((c) => c.items.length > 0);

  return (
    <section id="skills" className="w-full bg-light px-4 py-24 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-dark/70 uppercase">
              {skills.eyebrow}
            </p>
            <h2 className="font-birthstone text-6xl leading-none font-bold text-dark sm:text-7xl md:text-8xl">
              {skills.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-dark/70 md:text-right">{skills.intro}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
