import React, { useState } from "react";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  isSidebarOpen: boolean;
}

const fullTimeExperience = [
  {
    role: "Full Stack Developer Trainee",
    company: "The Gym - software development trainee program",
    logo: "/mucyo.png",
    period: "May 2025 - Present",
    description:
      "During the training period, I learned and practiced full-stack development using ReactJS, Node.js, and NestJS. I designed modern user interfaces with Tailwind CSS and improved my skills in JavaScript, TypeScript, Redux, MongoDB, and PostgreSQL.",
  },
];

const freelanceExperience = [
    {
    role: "Frontend Developer",
    company: "GoldPack Live",
    logo: "/mucyo.png",
    period: "2022 - 2023",
    description:
      "Developed responsive UI, product dashboards, optimized performance, and built interactive components.",
  },
  {
    role: "Junior Software Engineer",
    company: "Freelance",
    logo: "/mucyo.png",
    period: "2021 - 2022",
    description:
      "Built landing pages, full web apps, REST API integrations and delivered solutions for clients.",
  },
  {
    role: "Web Designer",
    company: "Freelance Project",
    logo: "/mucyo.png",
    period: "2020 - 2021",
    description:
      "Designed UI/UX for websites and landing pages for clients across different industries.",
  },
];

const Experience: React.FC<ExperienceProps> = () => {
  const [activeTab, setActiveTab] = useState<"fulltime" | "freelance">(
    "fulltime"
  );

  const experiences =
    activeTab === "fulltime" ? fullTimeExperience : freelanceExperience;

  return (
    <div className="min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900  bg-slate-50 text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:ml-60">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 lg:mb-12">
          <Briefcase className="text-orange-500 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
            Experience
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16 flex-wrap">
          <button
            onClick={() => setActiveTab("fulltime")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition text-sm sm:text-base ${
              activeTab === "fulltime"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white/10 text-orange-500 border border-orange-400"
            }`}
          >
            Full-Time
          </button>
          <button
            onClick={() => setActiveTab("freelance")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition text-sm sm:text-base ${
              activeTab === "freelance"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white/10 text-orange-500 border border-orange-400"
            }`}
          >
            Freelance
          </button>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          {/* Timeline - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-gradient-to-b from-orange-500 to-orange-300 h-full"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`mb-8 sm:mb-10 lg:mb-16 flex flex-col md:flex-row ${
                  isLeft ? "md:flex-row-reverse" : ""
                } items-center md:gap-8 lg:gap-12`}
              >
                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-6/12"></div>

                {/* Content Card */}
                <div className="w-full md:w-6/12  dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900  bg-slate-50 backdrop-blur-md p-4 sm:p-6 rounded-sm shadow-2xl border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                  {/* Logo and Role */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-orange-500 object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-400 break-words">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 break-words">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <p className="text-xs sm:text-sm text-orange-300 font-semibold mb-2 sm:mb-3">
                    {exp.period}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Timeline Dot - only visible on md+ */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-orange-500 rounded-full border-2 border-gray-300 shadow-lg z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
