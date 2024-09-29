/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import type { Skill as SkillType } from "constants/skills";
import skills from "constants/skills";

// components
import ProjectHomeGrid from "components/project/home/grid";
import ExperienceCard from "components/experience/card";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import Link from "next/link";
import Nav from "components/nav";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <main className="px-5 md:container">
        <Hero />
        <Projects />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
};

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <header className="flex md:pt-8">
        <div className="flex min-h-screen flex-col justify-center gap-2 md:h-[534px] md:min-h-0">
          <h1 className="mt-40 text-3xl font-bold text-violet-600 md:mt-auto md:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="text-gray-400 md:text-lg">{t("heroSubTitle")}</p>
          <h2 className="sticky bottom-4 mt-auto text-xl text-violet-500 md:text-2xl">
            Carlos Eduardo
          </h2>
        </div>
        {/* <img
          src="https://pbs.twimg.com/media/FlzdsbjaAAI-37_?format=jpg&name=large"
          className="ml-auto hidden h-[534px] lg:block"
          alt=""
        /> */}
      </header>
      <div className="z-10 h-0.5 w-full bg-gray-100 md:mt-2" />
    </>
  );
};

const Projects = () => {
  const { t } = useTranslation("common");

  return (
    <section className="my-32">
      <h3 className="mb-5 text-xl font-bold text-violet-600 md:text-2xl">
        {t("projectsTitle")}
      </h3>
      <ProjectHomeGrid />
      <div className="mt-16 flex items-center gap-6 lg:mt-10">
        <div className="hidden h-0 w-full border border-dashed border-violet-200 lg:block" />
        <Link
          href="/projects"
          className="relative  flex w-full items-center justify-between gap-2 py-2 text-violet-600 hover:text-violet-900 lg:w-auto lg:justify-end"
        >
          <div className="w-max text-lg uppercase">{t("projectsAll")}</div>
          <ArrowRightSLineIcon />
          <div className="absolute bottom-0 h-px w-full bg-violet-100" />
        </Link>
      </div>
    </section>
  );
};

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="my-32 lg:w-3/4">
      <h3 className="relative mb-8 text-lg font-medium text-violet-600 md:text-xl">
        {t("home:aboutMeTitle")}
        <div className="top- absolute right-full top-1/2 mr-6 h-px w-screen -translate-y-1/2 bg-violet-200" />
      </h3>

      <p className="text-gray-500">{t("home:aboutMe")}</p>

      <h4 className="mt-16 font-medium text-violet-600">
        {t("home:experienceTitle")}
      </h4>
      <ExperienceCard
        title="Prosesmt - Full stack dev"
        subTitle={t("home:experienceProsesmtDesc")}
        from="2019"
        to="2021"
        miniature="/prosesmt-logo.png"
      />
      <ExperienceCard
        title="Uninter - Front end dev"
        subTitle={t("home:experienceUninterDesc")}
        from="2021"
        to="2023"
        miniature="/uninter-logo.png"
      />
      <ExperienceCard
        title="Personetics - Front end dev"
        subTitle={t("home:experiencePersoneticsDesc")}
        from="2023"
        to={t("common:now")}
        miniature="/logo-y-Personetics-600x600-1.png"
      />
      <h4 className="mt-16 font-medium text-violet-600">
        {t("home:educationTitle")}
      </h4>
      <ExperienceCard
        title={t("home:educationEniacTitle")}
        subTitle={t("home:educationEniacDesc")}
        from="2019"
        to="2021"
        miniature="/eniac-logo.png"
      />
    </section>
  );
};

const Skills = () => {
  const { t } = useTranslation("home");
  const skillsList = Object.entries(skills);

  return (
    <section className="my-32">
      <h3 className="relative -mb-5 text-lg font-medium text-violet-600 md:text-xl">
        {t("skillsTitle")}
        <div className="top- absolute right-full top-1/2 mr-6 h-px w-screen -translate-y-1/2 bg-violet-200" />
      </h3>

      {skillsList.map(([sectionTitle, skills]) => (
        <div key={sectionTitle} className="mt-12">
          <h5 className="mb-4 font-medium text-gray-400">{sectionTitle}</h5>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {skills.map((skill) => (
              <Skill
                key={typeof skill !== "string" ? skill.name : "more"}
                skill={skill}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const Skill = ({ skill }: { skill: SkillType }) => {
  let content = (
    <span className="w-full text-center text-violet-500">
      And much, much more...
    </span>
  );

  if (typeof skill !== "string") {
    content = (
      <>
        <img
          loading="lazy"
          src={skill.image}
          alt=""
          className="h-8 w-8 object-contain"
        />
        <div className="font-medium">{skill.name}</div>
      </>
    );
  }

  return (
    <div className="flex items-center gap-4 border border-violet-200 p-3">
      {content}
    </div>
  );
};

export default Home;
