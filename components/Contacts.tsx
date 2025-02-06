import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Heading from "./Heading";
import data from "@/data/contacts";
import SectionWrapper from "./SectionWrapper";
import { MotionH1, MotionDiv } from "@/lib/motion";

const Contacts = () => {
  return (
    <SectionWrapper>
      <Heading>Contacts</Heading>
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1.3, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 1.2,
          duration: 0.3,
        }}
        className="flex flex-wrap px-1 py-1 items-center gap-2"
      >
        {data.map((contact) => (
          <Link
            href={contact.link}
            key={contact.id}
            target="_blank"
            className="flex items-center bg-zinc-100 dark:bg-slate-900 px-1 py-1 gap-2 hover:text-black hover:dark:text-white"
          >
            {contact.name === "github" && (
              <FaGithub size={18} className="text-black dark:text-white" />
            )}
            {contact.name === "twitter" && (
              <FaSquareXTwitter
                size={18}
                className="text-black dark:text-white"
              />
            )}
            {contact.name === "linkedin" && (
              <FaLinkedin
                size={18}
                className="text-[#0a66c2] dark:text-white"
              />
            )}
            {contact.name === "facebook" && (
              <FaFacebookSquare
                size={18}
                className="text-[#1877f2] dark:text-white"
              />
            )}
            {contact.name === "email" && (
              <MdEmail size={18} className="text-black dark:text-white" />
            )}
            {contact.name === "cv" && (
              <FaRegUserCircle
                size={18}
                className="text-black dark:text-white"
              />
            )}
            <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
              {contact.label}
            </span>
          </Link>
        ))}
      </MotionDiv>
    </SectionWrapper>
  );
};
export default Contacts;
