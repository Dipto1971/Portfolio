import Heading from "./Heading";
import data from "@/data/about";
import SectionWrapper from "./SectionWrapper";
import { MotionDiv, MotionH3, MotionP } from "@/lib/motion";
import { EmailBtn } from "./EmailBtn";

const About = () => {
  return (
    <SectionWrapper>
      <Heading>About</Heading>
      <MotionH3
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.3,
        }}
        className="text-xl md:text-2xl font-semibold capitalize text-black dark:text-white"
      >
        {data.heading}
      </MotionH3>
      <MotionP
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 1,
          duration: 0.3,
        }}
        className="mt-3 text-base md:text-lg font-semibold text-black dark:text-zinc-200"
      >
        {data.bio}
      </MotionP>
    </SectionWrapper>
  );
};
export default About;
