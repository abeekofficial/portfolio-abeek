import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import skills from "@/data/skills";
import about from "@/data/about";
import education from "@/data/education";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Resume() {
  const [showImage, setShowImage] = useState<string | null>(null);

  const handleShowImage = (image: string) => {
    setShowImage(image);
  };

  const closeModal = () => {
    setShowImage(null);
  };

  return (
    <div className="container">
      <Tabs
        defaultValue="about"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full text-center">
          {/* About  */}
          <TabsContent value="about" className="w-full">
            <h1 className="text-4xl font-bold font-jetbrains text-gray-100 mb-3">
              {about.title}
            </h1>
            <p className="font-medium text-md leading-loop text-white/60">
              {about.content}
            </p>

            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 max-w-[620px] mx-auto rounded-xl bg-[#27272c]">
              {about.info.map((info, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 justify-center xl:justify-start"
                >
                  <span className="text-white/60 text-md font-medium">
                    {info.fieldName}:{" "}
                  </span>
                  <span className="text-white text-xl font-semibold">
                    {info.fieldValue}
                  </span>
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* Education  */}
          <TabsContent value="education" className="w-full">
            <div className="my-5 text-center xl:text-left">
              <h1 className="text-5xl font-bold font-jetbrains text-gray-100 mb-10">
                {education.title}
              </h1>
              <p className="font-medium text-md leading-loop text-gray-400">
                {education.content}
              </p>
            </div>
            <ScrollArea>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 mx-auto">
                {education.records.map((edu) => (
                  <li
                    key={edu.id}
                    className="flex items-center justify-center xl:justify-start"
                  >
                    <div className="p-5 w-[320px] flex flex-col gap-2 items-center rounded-xl bg-[#27272c]">
                      <p className="text-5xl text-outline font-extrabold leading-none text-gray-100">
                        {edu.id}
                      </p>

                      <p className="text-accent">{edu.year}</p>
                      <h3 className="text-xl text-center max-w-[260px] min-h-10">
                        {edu.course}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <p className="text-white/60">{edu.place}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleShowImage(edu.certification)}
                          className="text-rose-500 underline font-semibold"
                        >
                          {showImage === edu.certification
                            ? "Hide certification"
                            : "Show certification"}
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </TabsContent>

          {/* Skills Content   */}
          <TabsContent value="skills" className="w-full">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="my-5">
                  <h1 className="text-5xl font-bold font-jetbrains text-gray-100 mb-10">
                    {skill.title}
                  </h1>
                  <p className="font-medium text-md leading-loop text-gray-400">
                    {skill.description}
                  </p>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:gap-10 mt-10 mx-auto">
                  {skill.skillsList.map((s, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="xl:w-20 xl:h-16 md:w-16 md:h-10 rounded-xl hover:bg-accent transition-all bg-gray-400 justify-center flex items-center gap-y-48 mt-10 xl:mt-0">
                            <img
                              src={s.icon}
                              className="w-[35px] md:w-[25px]"
                            />
                          </TooltipTrigger>
                          <TooltipContent className="text-rose-500 font-black">
                            {s.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </TabsContent>
        </div>
      </Tabs>

      {showImage && (
        <div className="modal" onClick={closeModal}>
          <span onClick={closeModal} className="close">
            <AiOutlineCloseCircle className="hover:text-rose-500" />
          </span>
          <img className="modal-content" src={showImage} alt="Certification" />
        </div>
      )}
    </div>
  );
}
