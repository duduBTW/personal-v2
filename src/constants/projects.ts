export type Project = {
  id: string;
  miniature: string;
  title: Record<string, string>;
  tecnologys: string;
  description?: string;
};

export const projects: Project[] = [
  {
    id: "aba",
    miniature:
      "https://pbs.twimg.com/media/Fk0klCpaYAIC802?format=png&name=large",
    title: {
      en: "Project name",
      "pt-BR": "Nome do projeto",
    },
    tecnologys: "react native, emotion, react query",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "aba2",
    miniature:
      "https://pbs.twimg.com/media/Fk1DZtcaYAAmc43?format=jpg&name=large",
    title: {
      en: "Project name 2",
      "pt-BR": "Nome do projeto 2",
    },
    tecnologys: "vue, nuxt, tailwind, prisma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "aba3",
    miniature:
      "https://pbs.twimg.com/media/FksIKeiaAAAoTLi?format=png&name=large",
    title: {
      en: "Bigger project name that takes more of the screen",
      "pt-BR": "Nome maior que toma mais da tela",
    },
    tecnologys: "react native, emotion, react query, test bigger text",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "aba4",
    miniature:
      "https://pbs.twimg.com/media/FkuzHW1agAEVVaQ?format=png&name=large",
    title: {
      en: "Bigger project name that takes more of the screen",
      "pt-BR": "Nome maior que toma mais da tela",
    },
    tecnologys: "react native, emotion, react query, test bigger text",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
