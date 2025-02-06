"use client";
import Heading from "./Heading";
import { FaArrowTrendUp } from "react-icons/fa6";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/projects";
import Model from "./Model";
import { useState } from "react";
import { MotionDiv } from "@/lib/motion";

const Projects = () => {
  const [state, setState] = useState(false);
  const [details, setDetails] = useState<{
    id: number;
    title: string;
    description: string;
    skills: { id: number; name: string; image: string }[];
    source_code: string;
    demo: string;
    image: string;
  } | null>(null);
  const toggleModel = () => {
    setState(!state);
  };
  return (
    <>
      <Model state={state} details={details} toggleModel={toggleModel} />
      <SectionWrapper>
        <Heading>Projects</Heading>
        {data.map((project) => (
          <MotionDiv
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
            key={project.id}
            className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10"
          >
            <div className="flex-1">
              <div className="flex space-x-3">
                <h2 className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-100 leading-[25px]">
                  {project.title}
                </h2>
                <FaArrowTrendUp
                  className="text-[20px] text-zinc-900 dark:text-white cursor-pointer"
                  onClick={() => {
                    toggleModel();
                    setDetails({
                      ...project,
                      image: project.image || "/work/No-pic.png",
                    });
                  }}
                />
              </div>

              <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2">
                {project.description.length > 100 ? (
                  <span>{project.description.slice(0, 1000)}...</span>
                ) : (
                  project.description
                )}
              </p>
            </div>
          </MotionDiv>
        ))}
      </SectionWrapper>
    </>
  );
};
export default Projects;
