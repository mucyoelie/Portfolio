import React, { useState } from "react";
import type { JSX } from "react";
import { FolderOpen } from "lucide-react";

const techIcons: Record<string, JSX.Element> = {
  react: (
    <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.11 0c-.45.89-.96 1.76-1.5 2.58a24.3 24.3 0 0 0 1.57-.26l-.07-.32m-1.44-7.11c.48-.35.94-.64 1.32-.85-.77-.16-1.59-.27-2.45-.33.37.56.73 1.15 1.13 1.18M12 3.04c-.52-.59-1.03-1.12-1.51-1.56-.29.07-.56.15-.82.24.53.63 1.12 1.34 1.76 2.12.19-.27.38-.53.57-.8M5.7 3.32c.38.21.84.5 1.32.85.4-.03.76-.62 1.13-1.18-.86.06-1.68.17-2.45.33m-2.14 2.36c-.85.37-1.58.79-2.14 1.23.12.73.42 1.5.81 2.26C3.07 9.5 4.03 9.2 5.03 9c-.29-.56-.56-1.15-.8-1.77-.27-.03-.55-.06-.82-.1a3.15 3.15 0 0 1 .15-.45m11.43 13c-.48.35-.94.64-1.32.85.77.16 1.59.27 2.45.33-.37-.56-.73-1.15-1.13-1.18M12 20.96c.52.59 1.03 1.12 1.51 1.56.29-.07.56-.15.82-.24-.53-.63-1.12-1.34-1.76-2.12-.19.27-.38.53-.57.8m6.3-.64c-.38-.21-.84-.5-1.32-.85-.4.03-.76.62-1.13 1.18.86-.06 1.68-.17 2.45-.33m2.14-2.36c.85-.37 1.58-.79 2.14-1.23-.12-.73-.42-1.5-.81-2.26-.84-.33-1.8-.63-2.8-.83.29.56.56 1.15.8 1.77.27.03.55.06.82.1-.05.15-.1.3-.15.45z"/>
    </svg>
  ),
  tailwind: (
    <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  node: (
    <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.05-.139.146-.139.242v10.15c0 .097.054.19.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.944-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm7.100-7.509c0-1.599-1.076-2.023-3.347-2.323-2.297-.307-2.532-.463-2.532-.998 0-.441.198-.94 1.916-.94 1.53 0 2.094.331 2.327 1.364.021.094.105.163.2.163h1.14c.058 0 .114-.024.154-.065.041-.041.061-.099.054-.157-.191-2.275-1.703-3.336-3.875-3.336-2.216 0-3.536 1.064-3.536 2.848 0 1.621 1.254 2.071 3.264 2.27 2.406.238 2.614.594 2.614 1.062 0 .822-.661 1.169-2.212 1.169-1.951 0-2.389-.489-2.533-1.458-.021-.103-.107-.179-.211-.179h-1.137c-.114 0-.208.094-.208.208 0 1.225.667 2.686 4.089 2.686 2.447 0 3.833-.963 3.833-2.636z"/>
    </svg>
  ),
  mongo: (
    <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  ),
  javascript: (
    <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  typescript: (
    <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
    </svg>
  ),
};

// === PROJECT DATA ===
const webProjects = [
  {
    title: "GoldPack Live",
    type: "Frontend Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech: ["react", "tailwind", "javascript"],
    period: "2023 - 2024",
    description:
      "A complete IT solutions platform built with React & Tailwind CSS.",
    link: "https://goldpacklive.com",
  },
  {
    title: "QuizMaster",
    type: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    tech: ["react", "node", "mongo"],
    period: "2024",
    description:
      "A quiz platform with login, categories, leaderboards and real-time quizzes.",
    link: "https://quizmaster.com",
  },
];

const mobileProjects = [
  {
    title: "WalletPro",
    type: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tech: ["react", "typescript"],
    period: "2024 - Present",
    description:
      "A wallet app for tracking transactions, budgets, categories and reports.",
    link: "https://walletpro.com",
  },
];

const uiProjects = [
  {
    title: "Course Platform UI",
    type: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
    tech: ["tailwind", "javascript"],
    period: "2023",
    description:
      "Designed course cards, dashboards, student progress and mobile-first UI.",
    link: "https://courseplatform.com",
  },
];

interface ProjectsProps {
  isSidebarOpen?: boolean;
}

const Projects: React.FC<ProjectsProps> = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile" | "ui">("web");

  const projects =
    activeTab === "web"
      ? webProjects
      : activeTab === "mobile"
      ? mobileProjects
      : uiProjects;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:ml-60">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 lg:mb-12">
          <FolderOpen className="text-orange-500 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
            Projects
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16 flex-wrap">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition text-sm sm:text-base ${
              activeTab === "web"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white/10 text-orange-500 border border-orange-400"
            }`}
          >
            Frontend Projects
          </button>

          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition text-sm sm:text-base ${
              activeTab === "mobile"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white/10 text-orange-500 border border-orange-400"
            }`}
          >
            Full-Stack Projects
          </button>

          <button
            onClick={() => setActiveTab("ui")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition text-sm sm:text-base ${
              activeTab === "ui"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white/10 text-orange-500 border border-orange-400"
            }`}
          >
            Mobile App
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-sm overflow-hidden shadow-2xl border border-orange-500/30 hover:border-orange-500 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div
                className="h-56 sm:h-64 lg:h-72 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Dark Overlay - appears on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/85 transition-all duration-300"></div>

              {/* Hover Content - Tech Stack & Specifications */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-orange-300 mb-0.5">{project.type}</p>
                <p className="text-xs text-gray-300 mb-2 sm:mb-3">{project.period}</p>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 max-w-sm leading-relaxed px-2">
                  {project.description}
                </p>

                {/* Tech Stack Label */}
                <p className="text-xs sm:text-sm text-orange-400 font-semibold mb-2">
                  Tech Stack
                </p>

                {/* Tech Icons */}
                <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center flex-wrap">
                  {project.tech.map((t, i) => (
                    <div
                      key={i}
                      className="p-1.5 sm:p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {techIcons[t]}
                    </div>
                  ))}
                </div>

                {/* Visit Website Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Website
                </a>
              </div>

              {/* Bottom Info Bar (visible by default) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white break-words">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-orange-300">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;