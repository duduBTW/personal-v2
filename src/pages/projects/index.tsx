import { type NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

// components
import Nav from "components/nav";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import Link from "next/link";
import IconButton from "components/icon/Button";
import ProjectAllGrid from "components/project/grid";

const Projects: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Nav
        startIcon={
          <Link passHref href="/">
            <IconButton>
              <ArrowLeftLineIcon />
            </IconButton>
          </Link>
        }
      >
        {t("projectsTitle")}
      </Nav>
      <main className="mt-12 mb-28 px-5 md:container">
        <ProjectAllGrid />
      </main>
    </>
  );
};

export default Projects;
