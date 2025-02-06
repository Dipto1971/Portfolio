import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import SkillComponent from "./SkillComponent";
import skills from "@/data/skills";

const { languages, techstacks, tools } = skills;
import { MotionH1, MotionDiv } from "@/lib/motion";

const Skills = () => {
  return (
    <SectionWrapper>
      <Heading>Skills</Heading>
      <MotionH1
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.3,
        }}
        className="mt-4"
      >
        Languages
      </MotionH1>
      <MotionDiv
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex flex-wrap items-center gap-2 py-2"
      >
        {languages.map((language) => (
          <SkillComponent skill={language} key={language.id} />
        ))}
      </MotionDiv>

      <MotionH1
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.3,
        }}
      >
        Frameworks
      </MotionH1>
      <MotionDiv
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex flex-wrap items-center gap-2 py-2"
      >
        {techstacks.map((techstack) => (
          <SkillComponent skill={techstack} key={techstack.id} />
        ))}
      </MotionDiv>
      <MotionH1
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.3,
        }}
      >
        Tools
      </MotionH1>
      <MotionDiv
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex flex-wrap items-center gap-2 py-2"
      >
        {tools.map((tool) => (
          <SkillComponent skill={tool} key={tool.id} />
        ))}
      </MotionDiv>
    </SectionWrapper>
  );
};
export default Skills;
