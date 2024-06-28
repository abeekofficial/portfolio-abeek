type projectsProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  live: string;
  github: string;
  stack: { name: string }[];
}[];
export default projectsProps;
