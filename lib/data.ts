import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import crypto from "@/public/crypto.jpg";
import disney from "@/public/disney.jpg";
import movie from "@/public/movie.jpg";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiPrismic } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Development Intern",
    location: "Remote",
    company: "Techmates",
    description:
      "As a Frontend Development Intern at TechMates, I built UI components with React.js, TypeScript, and Material-UI, and collaborated using GitHub and Jira.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2022 - Apr 2023",
  },
  {
    title: "React Developer Intern",
    location: "Remote",
    company: "CTO - Ninja",
    description:
      "At CTO-Ninja, I built responsive web apps with React.js, handled REST APIs using Axios, and turned Figma designs into functional UIs. This role sharpened my skills and remote teamwork.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Oct 2023",
  },
  {
    title: "React Developer",
    location: "Remote",
    company: "TheMoonDevs",
    description:
      "At TheMoonDevs, I develop and optimize UIs with React.js and Next.js, handle API integration and automation, and ensure code quality through PR reviews.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - present",
  },
] as const;

export const educationsData = [
  {
    year: "2016",
    qualification: "Matriculation (Class X)",
    institution: "Shri Ganeshdas Rathi Vidyalaya, Amravati",
    percentage: "81.4%"
  },
  {
    year: "2018",
    qualification: "Intermediate (Class XII)",
    institution: "Government Vidarbha Institute of Science & Humanities, Amravati",
    percentage: "61.2%"
  },
  {
    year: "2022",
    qualification: "Bachelor of Science (Computer Science)",
    institution: "Art's, Commerce and Science College, Amravati",
    percentage: "75.18%"
  },
  {
    year: "2022 - 2023",
    qualification: "Full Stack Development Bootcamp",
    institution: "Newton School"
  }
];


export const projectsData = [
  {
    title: "Disney+ Clone",
    description:
      "Developed a fully responsive Disney+ clone using React, Vite, Tailwind, Firebase, and Redux Toolkit, with secure authentication and enhanced user features.",
    tags: ["React", "Vite", "Tailwind", "Firebase", "Styled Components", "Redux Toolkit"],
    link: 'https://hotstar-wine.vercel.app/',
    imageUrl: disney,
  },
  {
    title: "Crypto-Currency App",
    description:
      "A demo app showing current statuses of various cryptocurrencies with a responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Material-UI"],
    link: 'https://appcryptocurrency.netlify.app/',
    imageUrl: crypto,
  },
  {
    title: "Movie App",
    description:
      "A demo app allowing users to browse movies and TV series by categories such as Trending, Movies, and TV Series.",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Material-UI"],
    link: 'https://teal-toffee-10c53d.netlify.app/',
    imageUrl: movie,
  },
] as const;

export const skillsData = [
  {
    skill: "HTML",
    icon: React.createElement(FaHtml5)
  },
  {
    skill: "CSS",
    icon: React.createElement(FaCss3)
  },
  {
    skill: "JavaScript",
    icon: React.createElement(IoLogoJavascript)
  },
  {
    skill: "TypeScript",
    icon: React.createElement(SiTypescript)
  },
  {
    skill: "React",
    icon: React.createElement(FaReact)
  },
  {
    skill: "Material-UI",
    icon: React.createElement(SiMui)
  },
  {
    skill: "Styled Components",
    icon: React.createElement(SiStyledcomponents)
  },
  {
    skill: "Next.js",
    icon: React.createElement(RiNextjsFill)
  },
  {
    skill: "Tailwind",
    icon: React.createElement(SiTailwindcss)
  },
  {
    skill: "Redux",
    icon: React.createElement(SiRedux)
  },
  {
    skill: "Prismic CMS",
    icon: React.createElement(SiPrismic)
  },
  {
    skill: "Prisma",
    icon: React.createElement(SiPrisma)
  },
  {
    skill: "API Development",
    icon: React.createElement(AiOutlineApi)
  },
  {
    skill: "Backend Development",
    icon: React.createElement(FaServer)
  },
  {
    skill: "Web Development",
    icon: React.createElement(FaGlobe)
  },
  {
    skill: "Microservices",
    icon: React.createElement(GiCube)
  },
  {
    skill: "Automation",
    icon: React.createElement(FaRobot)
  }
] as const;

