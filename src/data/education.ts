import med from "../assets/img/education/med.jpg";
import nt1 from "../assets/img/education/nt-1.jpg";
import nt2 from "../assets/img/education/nt-2.jpg";
import comp from "../assets/img/education/comp.jpg";
import ielts from "../assets/img/education/ielts.jpg";

type EducationProps = {
  id: number;
  course: string;
  place: string;
  year: string;
  certification: string;
};

const education = {
  title: "My education",
  content:
    "A summary of my educational background, including studies in medicine, English, and frontend development with React JS.",
  records: [
    {
      id: 1,
      course: "Medicine",
      place: "Urgench Medical College",
      year: "2016 - 2019",
      certification: med,
    },
    {
      id: 2,
      course: "Computer Literacy",
      place: "TATU",
      year: "2018",
      certification: comp,
    },
    {
      id: 3,
      course: "English",
      place: "Urgench academic lyceum",
      year: "2019 - 2020",
      certification: ielts,
    },
    {
      id: 4,
      course: "Frontend React JS",
      place: "Najot Ta'lim",
      year: "2023 - 2024",
      certification: nt1 && nt2,
    },
  ] as EducationProps[],
};

export default education;
