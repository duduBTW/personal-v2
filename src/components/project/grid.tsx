import { projects } from "constants/projects";

// components
import ProjectCard from "./card";
import ProjectCardList from "./card/list";

const ProjectAllGrid = () => {
  return (
    <>
      <div className="mobile-lg">
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCardList key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="desktop-lg">
        <div className="grid grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectAllGrid;
