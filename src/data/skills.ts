import html from "@/assets/icons/html.svg";
import css from "@/assets/icons/css.svg";
import sass from "@/assets/icons/sass.svg";
import js from "@/assets/icons/js.svg";
import ts from "@/assets/icons/ts.svg";
import react from "@/assets/icons/react.svg";
import redux from "@/assets/icons/redux.svg";
import tailwind from "@/assets/icons/tailwind.svg";
import next from "@/assets/icons/next.svg";
import mui from "@/assets/icons/mui.svg";
import bootstrap from "@/assets/icons/bootstrap.svg";
import shadcn from "@/assets/icons/shadcn.svg";

type SkillProps = {
  title: string;
  description: string;
  skillsList: {
    name: string;
    icon: string;
  }[];
};

const skills: SkillProps[] = [
  {
    title: "My skills",
    description:
      "I am interested in learning new technologies, which helps improve my soft skills and increases my productivity at work.",
    skillsList: [
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "SASS",
        icon: sass,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "TypeScript",
        icon: ts,
      },
      {
        name: "React JS",
        icon: react,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Next JS",
        icon: next,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
      {
        name: "Material UI",
        icon: mui,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        name: "Shadcn UI",
        icon: shadcn,
      },
    ],
  },
];

export default skills;
