// Import project images
import mobilux from "@/assets/img/projects/mobilux.png";
import youtube from "@/assets/img/projects/youtube.png";

type projectsProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  live: string;
  github: string;
  stack: { name: string }[];
}[];

const projects: projectsProps = [
  {
    id: "01",
    title: "Youtube Clone",
    description:
      "The app clone of youtube.In the app you can see information of videos and channels.It has features like searching for videos and selecting categories too",
    image: youtube,
    live: "",
    github: "https://github.com/abeekofficial/youtube_clone",
    stack: [{ name: "React Js, Material Ui, Typescript, Tailwind" }],
  },
  {
    id: "02",
    title: "Mobilux",
    description:
      "Mobilux is a modern e-commerce platform built with Next.js. It offers seamless product search and cart functionality, featuring Tailwind CSS and Shadcn UI. Powered by TypeScript and Redux Toolkit",
    image: mobilux,
    live: "",
    github: "https://github.com/abeekofficial/mobilux",
    stack: [
      { name: "Next Js, Typescript, Redux-toolkit, Tailwind, Shadcn Ui" },
    ],
  },
];

export default projects;
