import projects from "@/data/projects";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { useTheme } from "@/context/ThemeContext";
import { EffectCreative } from "swiper/modules";

export default function Projects() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <section className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className={`flex w-full xl:w-1/2 xl:h-[460px] flex-col xl:justify-between order-2 xl:order-none ${
              theme === "light" ? `bg-gray-400 text-black p-3 rounded-lg` : ""
            }`}
          >
            <li className="flex flex-col gap-10">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.id}
              </div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul>
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                <Link to={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={`w-16 h-16 rounded-xl flex items-center justify-center hover:border hover:border-accent bg-white/20 group-hover:bg-accent${
                          theme === "light" ? `bg-gray-400 text-black` : ""
                        }`}
                      >
                        <BsArrowUpRight className="text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link to={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-xl flex items-center justify-center hover:border hover:border-accent bg-white/20 group-hover:bg-accent">
                        <BsGithub className="text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </li>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative]}
              onSlideChange={handleSlideChange}
              className="mySwiper xl:h-[520px] mb-12"
            >
              {projects.map((p) => (
                <SwiperSlide className="w-full h-full">
                  <div className="h-[260px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full">
                      <img
                        src={p.image}
                        loading="lazy"
                        width={570}
                        height={362}
                        alt={p.title}
                        className="w-[850px] object-cover rounded-md"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
