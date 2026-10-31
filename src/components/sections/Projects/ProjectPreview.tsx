import type { ProjectItem } from "@/types/site";

export default function ProjectPreview({ project }: { project: ProjectItem }) {
  if (!project.image) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-neutral-800 to-neutral-900 text-sm font-medium text-neutral-400"
      >
        Project preview
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
