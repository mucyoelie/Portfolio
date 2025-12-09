
import React from "react";

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  description?: string[];
}

const services = [
  { name: "Frontend Development", description: "Building responsive and interactive user interfaces using React, Tailwind CSS, and modern JS frameworks." },
  { name: "Backend Development", description: "Creating robust server-side applications with Node.js, Express.js, and database integration." },
  { name: "Web Design", description: "Designing visually appealing and user-friendly web layouts using Figma, HTML, CSS, and modern design principles." },
  { name: "Full Stack Development", description: "Combining frontend and backend skills to build complete end-to-end web applications." },
];

const About: React.FC<AboutUsProps> = ({
 
  description = [
    `Hello! I'm Elie Joseph Mucyo, a Junior Software Developer and Computer Science student at the University of Kigali, based in Kigali with over 2 years of experience working with MERN and PERN stacks.`,
    `I enjoy collaborating with teams, solving challenging problems, and I am quick to learn new technologies. I also value teamwork and occasionally engage in sports, which helps me stay disciplined, energetic, and focused.`,
    `I am passionate about building functional, scalable, and user-friendly applications and am always eager to take on new challenges to grow as a developer.`,
    `I am also highly motivated to stay updated with the latest technologies and industry best practices. I enjoy exploring new tools, frameworks, and design patterns to continuously improve my workflow. 
    My goal is to become a versatile engineer capable of contributing to impactful and innovative software solutions.`
  ],
}) => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between py-16 px-6 lg:px-20 bg-slate-50 dark:bg-slate-900 min-h-screen lg:ml-64 border border-slate-300 dark:border-slate-700">

      {/* SERVICES SECTION */}
      <div className="flex-1 flex flex-col gap-6 mb-10 lg:mb-0">
     
        <div className="flex flex-col gap-4 mt-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm shadow-md hover:shadow-lg transition-all pt-10"
            >
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                {service.name}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TEXT + STATS SECTION */}
      <div className="flex-1 lg:pl-12 text-center lg:text-left">
          
        {/* Split description into multiple paragraphs */}
        <div className="mt-6 max-w-lg mx-auto lg:mx-0">
          {description.map((para, index) => (
            <p
              key={index}
              className="text-slate-500 dark:text-slate-400 leading-relaxed mt-4"
            >
              {para}
            </p>
          ))}
        </div>

        {/* ---- STATS SECTION ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-sm shadow-md hover:shadow-lg transition-all">
            <p className="text-4xl font-bold text-orange-600">6+</p>
            <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">Projects Done</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-sm shadow-md hover:shadow-lg transition-all">
            <p className="text-4xl font-bold text-orange-600">3+</p>
            <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">Years Experience</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-sm shadow-md hover:shadow-lg transition-all">
            <p className="text-4xl font-bold text-orange-600">4+</p>
            <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
