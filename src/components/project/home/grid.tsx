import { projects as allProjectsList } from "constants/projects";
import useTranslation from "next-translate/useTranslation";
import ProjectCardLarge from "../card/large";

// components
import ProjectCardList from "../card/list";

export const useTitle = (title: Record<string, string>) => {
  const { lang } = useTranslation();

  return title[lang] ?? "?";
};

const ProjectHomeGrid = () => {
  const firstProject = allProjectsList[0];

  const firstCard = firstProject && (
    <>
      <div className="mobile-lg">
        <ProjectCardList project={firstProject} />
      </div>
      <div className="desktop-lg">
        <ProjectCardLarge project={firstProject} />
      </div>
    </>
  );

  const cardList = allProjectsList
    .slice(1, 3)
    .map((project) => <ProjectCardList key={project.id} project={project} />);

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="lg:w-[44%]">{firstCard}</div>
      <div className="flex flex-grow flex-col gap-10">{cardList}</div>
    </div>
  );
};

export default ProjectHomeGrid;
