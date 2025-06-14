// Import project images
import mobilux from "@/assets/img/projects/mbx.png";
import yt from "@/assets/img/projects/yt.png";
import projectsProps from "@/types/projectprops";
import zedmovie from "@/assets/img/projects/zedmovies.png";
import mysplash from "@/assets/img/projects/my-splash.png";

const projects: projectsProps = [
  {
    id: "01",
    title: "My-Splash",
    description:
      "MySplash is a photo gallery application that allows users to browse and search for beautiful images. It features user authentication via Firebase, image download functionality, and a clean interface with image categorization and search capabilities.",
    image: mysplash,
    live: "https://mysplash-abeek.vercel.app/",
    github: "https://github.com/abeekofficial/my-splash",
    stack: [
      {
        name: "React, Material UI, Context API, Firebase Authentication, Firebase Storage, Unsplash API",
      },
    ],
  },
  {
    id: "02",
    title: "ZedMovies",
    description:
      "Zedmovies is a movie streaming platform. It offers a variety of movies and series to watch. It has features like searching for movies and selecting categories too",
    image: zedmovie,
    live: "https://zedmovies-abeek.netlify.app/",
    github: "https://github.com/abeekofficial/zedmovies",
    stack: [
      {
        name: "React Js, Material Ui, Typescript, Tailwind, React-Swiper, Redux-toolkit",
      },
    ],
  },
  {
    id: "03",
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
  {
    id: "04",
    title: "Youtube Clone",
    description:
      "The app clone of youtube.In the app you can see information of videos and channels.It has features like searching for videos and selecting categories too",
    image: yt,
    live: "https://yt-abeek.netlify.app/",
    github: "https://github.com/abeekofficial/youtube_clone",
    stack: [{ name: "React Js, Material Ui, Typescript, Tailwind" }],
  },
];

export default projects;
