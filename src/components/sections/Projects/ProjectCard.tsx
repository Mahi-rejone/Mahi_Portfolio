import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { projects } from "@/config";
import type { ProjectItem } from "@/types/site";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const hasGithub = project.github.trim() !== "";
  const hasLive = project.live.trim() !== "";

  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-300 focus-within:border-white/30 hover:border-white/30">
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
        <ProjectPreview project={project} />
        {project.demo && (
          <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
            Demo placeholder
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
          {project.description}
        </p>

        <ul aria-label={`Technologies used in ${project.title}`} className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>

        {(hasGithub || hasLive) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {hasGithub && (
              <Button href={project.github} external>
                {projects.githubLabel}
                <span className="sr-only">
                  {" "}
                  repository for {project.title} (opens in a new tab)
                </span>
              </Button>
            )}
            {hasLive && (
              <Button href={project.live} external>
                {projects.liveLabel}
                <span className="sr-only"> of {project.title} (opens in a new tab)</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
