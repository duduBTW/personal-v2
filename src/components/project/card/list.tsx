/* eslint-disable @next/next/no-img-element */
import type { Project } from "constants/projects";
import { useTitle } from "../home/grid";

// components
import Link from "next/link";
import Image from "next/image";

const ProjectCardList = ({ project }: { project: Project }) => {
  const title = useTitle(project.title);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="-m-4 flex gap-4 p-4 hover:bg-gray-50 focus:bg-gray-50 lg:gap-6"
    >
      <Image
        width={400}
        height={400}
        className="aspect-square w-32 border border-gray-500 border-opacity-25 object-cover lg:w-48"
        src={project.miniature}
        alt={`Miniature ${title}`}
      />
      <div className="flex flex-1 flex-col justify-between lg:flex-col-reverse lg:justify-end">
        <div className="mb-2 text-lg font-medium text-gray-800  lg:text-xl">
          {title}
        </div>
        <div className="w-0 min-w-full truncate text-sm text-violet-400 lg:mt-4 lg:mb-1 lg:text-base">
          {project.tecnologys}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCardList;
