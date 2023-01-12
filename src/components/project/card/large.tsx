import type { Project } from "constants/projects";
import Link from "next/link";
import { useTitle } from "../home/grid";

const ProjectCardLarge = ({ project }: { project: Project }) => {
  const title = useTitle(project.title);

  return (
    <Link href={`/projects/${project.id}`} className="flex flex-col gap-4">
      <img
        className="aspect-square w-full border border-gray-500 border-opacity-25 object-cover"
        src={project.miniature}
        alt={`Miniature ${title}`}
      />
      <div className="flex flex-1 flex-col justify-between lg:justify-end">
        <div className="w-0 min-w-full truncate text-sm text-violet-400 lg:mb-1 lg:text-base">
          {project.tecnologys}
        </div>
        <div className="mb-2 text-lg font-medium text-gray-800 lg:text-xl">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCardLarge;
