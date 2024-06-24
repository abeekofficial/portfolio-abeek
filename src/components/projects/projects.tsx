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

export default function Projects() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <section className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="flex w-full xl:w-1/2 xl:h-[460px] flex-col xl:justify-between order-2 xl:order-none">
            <li className="mx-auto flex gap-5 xl:justify-start rounded-2xl flex-col">
              <h1 className="text-6xl font-bold text-outline">{project.id}</h1>
              <h1 className="text-3xl font-semibold font-poppins">
                {project.title}
              </h1>
              <p className="text-white/60 text-[12px] leading-6">
                {project.description}
              </p>
              <p className="flex items-center gap-2">
                {project.stack.map((s, i) => (
                  <div className="text-accent text-sm" key={i}>
                    {s.name}
                  </div>
                ))}
              </p>
              <div className="border mt-1 rounded-md border-white/30"></div>
              <div className="flex items-center gap-3">
                <Link
                  to={project?.live}
                  className="w-12 h-12 mt-2 flex items-center justify-center rounded-full bg-white/20"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsArrowUpRight className="text-xl font-bold hover:text-accent transition-all" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  to={project.github}
                  className="w-12 h-12 mt-2 flex items-center justify-center rounded-full bg-white/20"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsGithub className="text-xl font-bold hover:text-accent transition-all" />
                      </TooltipTrigger>
                      <TooltipContent>Github code</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </li>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((p, i) => (
                <SwiperSlide key={i}>slide</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
