import { image } from "framer-motion/client";

const data = [
  {
    id: 1,
    title: "FFMPEG Video Processor",
    description:
      "Developed a C# command line application for a studio company, integrating 15 custom-built video shaders using FFmpeg for video processing. Implemented OpenCV for complex video processing tasks like generating multiple frames between two frames.	Implemented FFmpeg command line instructions for video effect generation and combined multiple shaders into a single application for enhanced video processing.",
    skills: [
      { id: 1, name: "opencv", image: "/skills/OpenCV.png" },
      { id: 2, name: "ffmpeg", image: "/skills/FFMPEG.png" },
      { id: 3, name: "C#", image: "/skills/csharp.png" },
      { id: 4, name: "python", image: "/skills/python.png" },
      { id: 5, name: "shell", image: "/skills/command-shell.png" },
    ],
    source_code: "https://github.com/Dipto1971/FFMPEG-Video-Processor.git",
    demo: "https://github.com/Dipto1971/FFMPEG-Video-Processor.git",
    image: "/projects/ffmpeg.png",
  },
  {
    id: 2,
    title: "HyperSec Platform Integration Collector",
    description:
      "Developed a Windows application using C# WPF and WinForms for a cybersecurity company (HyperSec), automating the registration process of domain computers in Windows Event Viewer and simplifying GPO management across multiple domains.Added functionalities like extracting, manipulating, and building new XML files.",
    skills: [
      { id: 3, name: "C#", image: "/skills/csharp.png" },
      { id: 4, name: "WPF", image: "/skills/windows-2.png" },
      { id: 5, name: "WinForms", image: "/skills/windows.png" },
    ],
    source_code:
      "https://github.com/Dipto1971/Hypersec-Platform-Integration-Collector",
    demo: "https://github.com/Dipto1971/Hypersec-Platform-Integration-Collector",
  },

  {
    id: 3,
    title: "Job Portal with MERN Stack, Next.js, and TailwindCSS",
    description:
      "job portal application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Includes a strict TypeScript backend and a modern, responsive frontend with rich UI components. Implemented Radix UI for a highly customizable and accessible component library, State management with Redux Toolkit and persistence with redux-persist. ",
    skills: [
      { id: 1, name: "react", image: "/skills/react.png" },
      { id: 2, name: "typescript", image: "/skills/typescript.png" },
      { id: 3, name: "next", image: "/skills/next-js.png" },
      { id: 4, name: "tailwindcss", image: "/skills/tailwind.png" },
    ],
    source_code: "https://github.com/Dipto1971/Job-Portal",
    demo: "https://github.com/Dipto1971/Job-Portal",
    image: "/projects/Job-Portal.png",
  },
  {
    id: 4,
    title: "JSON Voyager",
    description:
      "Developed a React application that allows users to visualize and interact with JSON data in a tree structure. Implemented custom features like search, expand/collapse, and data filtering to enhance the user experience. Integrated TypeScript for strict type-checking and improved code quality. ",
    skills: [
      { id: 1, name: "react", image: "/skills/react.png" },
      { id: 2, name: "typescript", image: "/skills/typescript.png" },
    ],
    source_code: "https://github.com/Dipto1971/JSON-Voyager",
    demo: "https://json-voyager-mqtx-ghixzt8ph-diptos-projects-6f0bce34.vercel.app/",
    image: "/projects/JSON-Voyager.png",
  },
  {
    id: 5,
    title:
      "Issue Tracking System with NEXTjs, Prisma, TypeScript and TailwindCSS",
    description:
      "Powerful and intuitive issue tracker designed to help teams efficiently manage and resolve bugs, tasks, and feature requests. Built with the MERN stack, Bugsy provides a seamless experience for users at all levels, from developers to project managers.",
    skills: [
      { id: 1, name: "react", image: "/skills/react.png" },
      { id: 4, name: "typescript", image: "/skills/typescript.png" },
      { id: 2, name: "next", image: "/skills/next-js.png" },
      { id: 3, name: "tailwindcss", image: "/skills/tailwind.png" },
    ],
    source_code: "https://github.com/Dipto1971/Bugsy-The-Issue-Tracker",
    demo: "http://www.demo.com/mydemo",
  },
  {
    id: 6,
    title: "Simple Todo Appplcation",
    description:
      "The primary goal of this project is to gain a thorough understanding of building a scalable and secure web application using the MERN stack. It is designed to explore best practices for building real-world applications, including setting up secure authentication, managing data flow efficiently, and enforcing strict type-checking with TypeScript. This application serves as a learning platform for integrating advanced tools and libraries that enhance both developer experience and application performance.",
    skills: [
      { id: 1, name: "react", image: "/skills/react.png" },
      { id: 2, name: "redux", image: "/skills/redux.png" },
      { id: 3, name: "Typescript", image: "/skills/Typescript.png" },
      { id: 4, name: "mongodb", image: "/skills/mongodb.png" },
    ],
    source_code: "",
    demo: "",
  },
];
export default data;
