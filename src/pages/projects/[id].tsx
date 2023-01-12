import { Project, projects } from "constants/projects";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ParsedUrlQuery } from "querystring";
import useTranslation from "next-translate/useTranslation";
import { useTitle } from "components/project/home/grid";

// components
import Nav from "components/nav";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import Link from "next/link";
import IconButton from "components/icon/Button";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const Project: NextPage<{ project: Project }> = ({ project }) => {
  const { t } = useTranslation();
  const title = useTitle(project.title);

  return (
    <>
      <Nav
        startIcon={
          <Link passHref href="/projects">
            <IconButton>
              <ArrowLeftLineIcon />
            </IconButton>
          </Link>
        }
      >
        {t("common:projectTitle")}
      </Nav>

      <main className="px-5 py-8 md:container ">
        <div className="relative overflow-hidden md:py-12">
          <div className="box-border md:mx-auto md:aspect-square md:max-h-80">
            <img
              src={project.miniature}
              alt=""
              className="relative z-20 h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute top-0 z-10 h-full w-full bg-black/70" />
          <img
            src={project.miniature}
            alt=""
            className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transform blur-2xl"
          />
        </div>

        <div className="lg:mb-32 lg:bg-gray-50 lg:px-16 lg:pb-2 lg:pt-2">
          <h1 className="mt-10 mb-3 w-3/4 text-2xl">{title}</h1>
          <div className="mb-8 h-px w-full bg-gray-300" />
          <p className="mb-16 text-lg text-gray-600">{project.description}</p>

          <h2 className="mb-4 text-xl font-medium text-violet-600">
            {t("project:prototypeTitle")}
          </h2>
          <iframe
            src="https://www.figma.com/embed?embed_host=dudubtw_personal&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FM7l7FGPxbjMNX1flWtEIn2%2FUntitled%3Fnode-id%3D0%253A1%26t%3DZOHH2D9yqwAwSvtK-1"
            className="mb-16 aspect-square w-full md:aspect-video"
            allowFullScreen
          />

          <h2 className="mb-4 text-xl font-medium text-violet-600">
            {t("project:videoTitle")}
          </h2>
          <iframe
            src="https://www.youtube.com/embed/YPQjHUw4KcE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="aspect-video w-full"
            allowFullScreen
          />

          <Link
            href="/projects"
            className="relative mx-auto my-32 flex w-min items-center justify-center gap-2 py-2 text-violet-600 hover:text-violet-900"
          >
            <div className="w-max text-lg uppercase">
              {t("common:projectsAll")}
            </div>
            <ArrowRightSLineIcon />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-violet-100" />
          </Link>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  const paths: {
    params: ParsedUrlQuery;
    locale?: string;
  }[] = [];

  projects.forEach((project) => {
    locales?.forEach((locale) => {
      paths.push({
        params: {
          id: project.id,
        },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const id = params?.["id"];
  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const project = projects.find((project) => project.id === id);
  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};

export default Project;
