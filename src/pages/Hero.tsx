import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  role?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroSectionProps> = ({
  name = "Elie Joseph Mucyo",
  role = "Full Stack Developer",
  description = `I'm a passionate software developer who specializes in building functional, scalable, and visually appealing applications using modern technologies, including the JavaScript ecosystem, React.js, and full-stack frameworks such as MERN and PERN Stacks.`,
  ctaText = "Get Started",
  ctaLink = "/projects",
  imageSrc = "/image.jpg",
}) => {
  return (
    <section
      className="
        relative 
        flex flex-col-reverse lg:flex-row 
        items-center justify-between 
        lg:py-20 py-10 px-6 lg:px-20 
        bg-gradient-to-r from-slate-50 to-slate-100 
        dark:from-slate-900 dark:to-slate-800 
        min-h-screen

        /* IMPORTANT: Shift page beside sidebar */
        lg:ml-64
          border border-slate-300 dark:border-slate-700 
        
      "
    >
     
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0 lg:ml-[2rem]">
        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
          Hi, I&apos;m <br/> {name}
        </h1>

        <p className="text-xl lg:text-2xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
          {role}
        </p>

        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto lg:mx-0">
          {description}
        </p>

        {/* Call-to-action button */}
        <a
          href={ctaLink}
          className="inline-flex items-center mt-6 px-6 py-3 bg-[#006242] hover:bg-[#007755] text-white font-semibold rounded-lg transition-all duration-300 "
        >
          {ctaText} <ArrowRight className="ml-2" size={18} />
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden shadow-2xl ring-4 ring-[#006242]/50 animate-pulse lg:mr-[4rem]">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
     
    </section>
  );
};

export default Hero;

