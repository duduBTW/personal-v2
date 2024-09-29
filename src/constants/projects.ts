export type Project = {
  id: string;
  miniature: string;
  title: Record<string, string>;
  tecnologys: string;
  description?: string;
  figmaUrl?: string;
  youtubeUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "figure-store",
    miniature: "/figure_store.jpg",
    title: {
      en: "Figure store",
      "pt-BR": "Loja de figures",
    },
    tecnologys: "react, nextjs, emotioncss, react-query, prisma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsZv5SVKpdqLSR1kY1HVUDb%2FAnime-figure-store%3Fnode-id%3D0%253A1%26t%3D7QPYTYwX9mVXRl80-1",
    codeUrl: "https://github.com/duduBTW/figure-store",
    youtubeUrl: "https://www.youtube.com/embed/okycbW8Rhhk",
  },
  {
    id: "commission",
    miniature: "/commission.jpg",
    title: {
      en: "Commission app",
      "pt-BR": "Sites de comissão",
    },
    tecnologys: "react, nextjs, emotioncss, react-query, prisma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0hcdboX2qek0J6YMcnpk3i%2FCommission%3Fnode-id%3D0%253A1%26t%3D2zBmgqACo97METq6-1",
    codeUrl: "https://github.com/duduBTW/commissionv2",
  },
  {
    id: "book-creator",
    miniature: "/book_creator.jpg",
    title: {
      en: "Book creator",
      "pt-BR": "Criador de livros",
    },
    tecnologys: "vue, nuxtjs, tailwindcss, prisma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FslOV82juJNOvQjj2FNL4Sf%2FLeitor%3Fnode-id%3D7518%253A482%26t%3DgkoHGEb8durXh1Bu-1",
    codeUrl: "https://github.com/duduBTW/leitor",
    youtubeUrl: "https://www.youtube.com/embed/HibYy5OYEgY",
  },
  {
    id: "university",
    miniature: "/university.png",
    title: {
      en: "University portal",
      "pt-BR": "Portal de universidade",
    },
    tecnologys: "react",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    codeUrl: "https://github.com/duduBTW/university-portal/tree/main",
    youtubeUrl: "https://www.youtube.com/embed/QmBYqm4_JA4",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/ugpY5jHYBf34ZomKphZrtf/University?node-id=0-1&t=9BHmAdqkZWEWS7Kc-1",
  },
  {
    id: "app",
    miniature: "/app-store.png",
    title: {
      en: "Application store",
      "pt-BR": "Loja de aplicativos",
    },
    tecnologys: "react, vite, stylex and tanstack router",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    codeUrl: "https://github.com/duduBTW/application-store",
    youtubeUrl: "https://www.youtube.com/embed/M0pfAKm5Ty4",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/5Yauto2xarZGwDshfMzKV1/Untitled?node-id=0-1&t=U73SQ7vm3n28irbu-1",
  },
  {
    id: "goodsmile",
    miniature: "/Goodsmile-Company-Brand-Logo.webp",
    title: {
      en: "Goodsmile clone",
      "pt-BR": "Clone do goodsmile",
    },
    tecnologys: "golang, typescript, webpack and tailwindcss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    codeUrl: "https://github.com/duduBTW/goodsmile-clome",
    youtubeUrl: "https://www.youtube.com/embed/IvuJGoY7Orc",
  },
  {
    id: "book-reader",
    miniature: "/book_reader.jpg",
    title: {
      en: "Book reader",
      "pt-BR": "Leitor de livros",
    },
    tecnologys: "react native, expo, tailwindcss, prisma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FslOV82juJNOvQjj2FNL4Sf%2FLeitor%3Fnode-id%3D7850%253A755%26t%3DDtRxv1ZMQdqChL9r-1",
    codeUrl: "https://github.com/duduBTW/leitor",
  },
  {
    id: "serie-watcher",
    miniature: "/serie_watcher.jpg",
    title: {
      en: "Serie watcher app",
      "pt-BR": "App para assistir series",
    },
    tecnologys: "react native, expo, emotioncss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzzW8aDwchZnGFzAdL9RNlM%2FUntitled%3Fnode-id%3D0%253A1%26t%3DEedfs6MWiVkEDadJ-1",
    youtubeUrl: "https://www.youtube.com/embed/g-mwZLBFdy0",
    codeUrl: "https://github.com/duduBTW/serie-watcher",
  },
  {
    id: "personal",
    miniature: "/personal.jpg",
    title: {
      en: "Personal project",
      "pt-BR": "Site pessoal",
    },
    tecnologys: "react, nextjs, tailwindcss, next-traslate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNYRHQh0iAlSxmh7CXnzgpg%2FPersonal%3Fnode-id%3D7518%253A483%26t%3D3H0UkluZseO9ZPuL-1",
    codeUrl: "https://github.com/duduBTW/personal-v2",
  },

  {
    id: "utopia",
    miniature: "/utopia.jpg",
    title: {
      en: "Utopia institutional website",
      "pt-BR": "Website institucional utopia",
    },
    tecnologys: "react, nextjs, emotioncss",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    figmaUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjLIZy8qhEvujWlHQJ9GGvY%2FUtopia%3Fnode-id%3D0%253A1%26t%3DdqZBbHfYreyuXdpO-1",
    codeUrl: "https://github.com/duduBTW/site-institucional-utopia",
  },
  // {
  //   id: "aba3",
  //   miniature:
  //     "https://pbs.twimg.com/media/FksIKeiaAAAoTLi?format=png&name=large",
  //   title: {
  //     en: "Bigger project name that takes more of the screen",
  //     "pt-BR": "Nome maior que toma mais da tela",
  //   },
  //   tecnologys: "react native, emotion, react query, test bigger text",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  // },
  // {
  //   id: "aba4",
  //   miniature:
  //     "https://pbs.twimg.com/media/FkuzHW1agAEVVaQ?format=png&name=large",
  //   title: {
  //     en: "Bigger project name that takes more of the screen",
  //     "pt-BR": "Nome maior que toma mais da tela",
  //   },
  //   tecnologys: "react native, emotion, react query, test bigger text",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  // },
];
