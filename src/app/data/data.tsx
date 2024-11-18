import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const MockupLanguage = [
  {
    id: 1,
    name: "Javascript",
    icon: "/logo/javascript.svg",
  },
  {
    id: 2,
    name: "React",
    icon: "/logo/react.svg",
  },
  {
    id: 3,
    name: "NextJS",
    icon: "/logo/nextjs.svg",
  },
  {
    id: 4,
    name: "HTML",
    icon: "/logo/html.svg",
  },
  {
    id: 5,
    name: "CSS",
    icon: "/logo/css.svg",
  },
  {
    id: 6,
    name: "SCSS",
    icon: "/logo/scss.svg",
  },
  {
    id: 7,
    name: "TailwindCSS",
    icon: "/logo/tailwind.svg",
  },
  {
    id: 8,
    name: "Strapi",
    icon: "/logo/strapi.svg",
  },
  {
    id: 9,
    name: "Redux",
    icon: "/logo/redux.svg",
  },
];

export const MockupTools = [
  {
    id: 1,
    name: "Github",
    icon: "/logo/github.svg",
  },
  {
    id: 2,
    name: "Gitlab",
    icon: "/logo/gitlab.svg",
  },
  {
    id: 3,
    name: "Vite",
    icon: "/logo/vite.svg",
  },
  {
    id: 4,
    name: "Eslint",
    icon: "/logo/eslint.svg",
  },
  {
    id: 5,
    name: "Docker",
    icon: "/logo/docker.svg",
  },
  {
    id: 6,
    name: "Figma",
    icon: "/logo/figma.svg",
  },
];

export const MockUpContact = [
  {
    id: 1,
    name: "Github",
    img: <GitHubLogoIcon />,
    link: "https://github.com/quanxenon5525",
  },
  {
    id: 2,
    name: "Linkedin",
    img: <LinkedInLogoIcon />,
    link: "https://www.linkedin.com/in/quanxenon5525/",
  },
  {
    id: 3,
    name: "Email",
    img: <EnvelopeClosedIcon />,
    link: "#",
  },
];

export const MockUpProjects = [
  {
    id: 1,
    name: "Portfolio",
    techs: [
      {
        icon: "/logo/react.svg",
      },
      {
        icon: "/logo/tailwind.svg",
      },
      {
        icon: "/logo/nextjs.svg",
      },
    ],
    content: "Want to know more about me?. Come to find me in this project",
    image: "/anh1.jpeg",
    link: "",
  },
  {
    id: 2,
    name: "Nextix Shop",
    techs: [
      {
        icon: "/logo/javascript.svg",
      },
      {
        icon: "/logo/html.svg",
      },
      {
        icon: "/logo/css.svg",
      },
    ],
    content: "Online sale ticket for sports club",
    image: "/anh2.jpg",
    link: "",
  },
];

export const MockUpExperiences = [
  {
    id: 1,
    name: "Nexpando Joint Stock Company",
    year: "2022-Current",
    role: "Front-end Developer",
    information:
      "Started from intern to official developer. As a front-end dev I have a chance to join and develop projects in here. Highlights as Nextix_shop, Vnshop, Ces_Web",
    icon: "/company/nexpando.png",
  },
];
