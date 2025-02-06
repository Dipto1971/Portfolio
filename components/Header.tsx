"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { MotionDiv, MotionH1, MotionH3 } from "../lib/motion";
import { EmailBtn } from "./EmailBtn";

import data from "../data/header";
import HeaderInfo from "./HeaderInfo";
const Header = () => {
  const { image, name, jobTitle, experience, education, address } = data;
  return (
    <MotionH1
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.7,
        duration: 0.3,
      }}
      className="flex flex-wrap md:flex-row flex-col items-center gap-y-9 gap-x-8 pb-7"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1.3, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 1.2,
          duration: 0.3,
        }}
        className="w-[200px] md:w-[150px] h-[200px] md:h-[150px] relative rounded-full overflow-hidden"
      >
        <Image
          src={image}
          fill
          alt="profile image"
          sizes="(max-width: 250px), (max-width: 400px)"
          className="w-full h-full object-cover hover:scale-125 hover:rotate-12 transition-all duration-500"
        />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex-1"
      >
        <MotionH1 className="text-4xl md:text-5xl font-black capitalize text-gray-900 dark:text-white">
          {name}
        </MotionH1>
        <MotionH3 className="mt-2 text-lg md:text-xl  font-semibold md:font-bold capitalize dark:text-zinc-400">
          {jobTitle}
        </MotionH3>
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2"
        >
          <HeaderInfo
            Icon={
              <FaMapMarkerAlt
                className="text-blue-500 dark:text-zinc-400"
                size={16}
              />
            }
            title={address}
          />
          <HeaderInfo
            Icon={
              <BsTerminalFill
                className="text-blue-500 dark:text-zinc-400"
                size={16}
              />
            }
            title={experience}
          />
          <HeaderInfo
            Icon={
              <IoIosSchool
                className="text-blue-500 dark:text-zinc-400"
                size={16}
              />
            }
            title={education}
          />
        </MotionDiv>
      </MotionDiv>
    </MotionH1>
  );
};
export default Header;
