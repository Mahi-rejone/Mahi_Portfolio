import { projects, projectsList } from "@/config";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full overflow-hidden bg-dark py-16 md:py-24"
    >
      <div className="mb-10 px-6 md:px-10">
        <h2
          id="projects-heading"
          className="text-5xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="font-birthstone block font-bold text-white/80">{projects.eyebrow}</span>
          <span className="font-birthstone ml-12 block font-normal text-white/60">
            {projects.heading}
          </span>
        </h2>
      </div>

      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {projectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
