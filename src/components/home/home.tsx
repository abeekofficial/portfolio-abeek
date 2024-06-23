import { useTypewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../social/social";
import Photo from "../photo/photo";

export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Abbosbek Ruzimov", "Frontend Developer"],
    loop: true,
    typeSpeed: 150,
    delaySpeed: 50,
  } as any);

  return (
    <section className="h-full mt-10">
      <div className="container mx-auto h-full">
        <div className="flex items-center justify-between flex-col xl:flex-row">
          <div className="text-center xl:text-left">
            <h3 className="font-jetbrains font-semibold">Frontend Developer</h3>
            <h1 className="text-rose-600 font-jetbrains font-bold text-2xl xl:text-4xl">
              Hello, I'm <br />{" "}
              <span className="text-accent z-20 h-10 block"> {typeEffect}</span>
            </h1>
            <p className="mt-4">
              I'm a creative and passionate junior frontend developer. I am
              perspective and eagerness to learn and innovate.
            </p>
            <div className="mt-3 flex gap-5 items-center flex-col xl:flex-row xl:items-center xl:mt-6">
              <Button
                variant={"outline"}
                className="flex py-5 items-center gap-2"
              >
                <FiDownload />
                Download CV
              </Button>
              <Social />
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
