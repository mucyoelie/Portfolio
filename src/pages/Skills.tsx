import React from "react";
import {
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiNestjs,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "React.js", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
  {
    name: "Figma",
    icon: (
      <svg
        width="40"
        height="60"
        viewBox="0 0 256 384"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#f24e1e" d="M128 192c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64z"/>
        <path fill="#ff7262" d="M0 320c0-35.3 28.7-64 64-64h64v64c0 35.3-28.7 64-64 64S0 355.3 0 320z"/>
        <path fill="#a259ff" d="M128 0v128h64c35.3 0 64-28.7 64-64S227.3 0 192 0h-64z"/>
        <path fill="#1abcfe" d="M0 64c0 35.3 28.7 64 64 64h64V0H64C28.7 0 0 28.7 0 64z"/>
        <path fill="#0acf83" d="M0 192c0 35.3 28.7 64 64 64h64V128H64c-35.3 0-64 28.7-64 64z"/>
      </svg>
    ),
  },
    {
    name: "Thunkable",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="128" cy="128" r="128" fill="#202C59" />
        <path
          fill="#FFFFFF"
          d="M181.333 74.667H74.667c-8.16 0-14.667 6.507-14.667 14.666v77.334c0 8.16 6.507 14.666 14.667 14.666h106.666c8.16 0 14.667-6.506 14.667-14.666V89.333c0-8.159-6.507-14.666-14.667-14.666zm-53.333 98.666c-22.08 0-40-17.92-40-40 0-22.079 17.92-40 40-40 22.079 0 40 17.921 40 40 0 22.08-17.921 40-40 40z"
        />
        <circle cx="128" cy="128" r="26.667" fill="#FF4F5A" />
      </svg>
    ),
  },

];

const Skills: React.FC = () => {
  return (
    <section className="min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900  bg-slate-50">

      {/* Main content area */}
      <div className="lg:ml-40 lg:mr-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-slate-800 dark:text-white text-center">
            My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 lg:mr-12 ">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="
                  flex flex-col items-center justify-center
                  gap-3 p-6
                  bg-transparent 
                  rounded-xl shadow-sm 
                  hover:shadow-xl hover:scale-105
                  transition-all duration-300
                  cursor-pointer
                  group
                  aspect-square
              
                "
              >
                <div className="text-4xl lg:text-5xl transform group-hover:scale-110 transition-transform duration-300 ">
                  {skill.icon}
                </div>
                <p className="text-sm lg:text-base font-semibold text-slate-700 dark:text-slate-300 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;