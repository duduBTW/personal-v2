import type { Project } from "constants/projects";
import { useTitle } from "../home/grid";

// components
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  const title = useTitle(project.title);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="-m-4 flex flex-col gap-4 p-4 hover:bg-gray-50 focus:bg-gray-50"
    >
      <Image
        width={400}
        height={400}
        className="aspect-square w-full border border-gray-500 border-opacity-25 object-cover"
        src={project.miniature}
        alt={`Miniature ${title}`}
      />
      <div className="flex h-32 flex-col justify-between border-b border-b-violet-100 pb-3">
        <div className="text-lg font-medium text-gray-800 lg:text-xl">
          {title}
        </div>
        <div className="w-0 min-w-full truncate text-sm text-violet-400  lg:text-base">
          {project.tecnologys}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
