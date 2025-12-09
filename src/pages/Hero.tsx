import  { useState, useEffect } from "react";
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Github,
  Phone,
  Mail,
} from "lucide-react";
import { SiUpwork, SiX, SiWhatsapp, SiFacebook } from "react-icons/si";

interface HeroSectionProps {
  name?: string;
  role?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
}

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const Hero: React.FC<HeroSectionProps> = ({
  name = "Elie Mucyo",
  description = `I'm a passionate software developer who specializes in building functional, scalable, and visually appealing applications using modern technologies, including the JavaScript ecosystem, React.js, and full-stack frameworks such as MERN and PERN Stacks.`,
  ctaText = "Get Started",
  ctaLink = "/projects",
  imageSrc = "/mucyo.png",
}) => {

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      className="
        flex flex-col 
        lg:py-20 py-10 px-6 lg:px-20 
        bg-gradient-to-r from-slate-50 to-slate-100 
        dark:from-slate-900 dark:to-slate-800 
        min-h-screen
        lg:ml-64
        border border-slate-300 dark:border-slate-700 
        z-20
      "
    >
      {/* TOP: TEXT + IMAGE */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
        
        {/* TEXT SECTION */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0 lg:ml-[2rem]">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Hi, I&apos;m <span className="text-orange-600">{name}</span> 
          </h1>

          {/* ⭐ TYPING ANIMATION ROLE */}
          <p className="text-xl lg:text-2xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
           I&apos;m a <span className="text-orange-600">{roles[index].substring(0, subIndex)}</span> 
            <span className="border-r-2 border-[#ea580c] ml-1 animate-pulse"></span>
          </p>

          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto lg:mx-0">
            {description}
          </p>

          <a
            href={ctaLink}
            className="inline-flex items-center mt-6 px-6 py-3 bg-[#ea580c] hover:bg-orange-500 text-white font-semibold rounded-lg transition-all duration-300"
          >
            {ctaText} <ArrowRight className="ml-2" size={18} />
          </a>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden shadow-2xl ring-4 ring-[#ea580c]/50 animate-pulse xl:mr-[4rem]">
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS FULL-WIDTH BAR */}
      <div className="w-full flex items-center justify-center gap-20 mt-40 flex-wrap">
        
        <a href="https://www.linkedin.com/in/mucyo-elie-9948b5390/" target="_blank"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <Linkedin className="w-6 h-6 text-[#006242]" />
        </a>

        <a href="https://www.upwork.com/freelancers/~016fc2630153b19d10" target="_blank"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <SiUpwork className="w-6 h-6 text-green-600" />
        </a>

        <a href="https://www.instagram.com/mucyo.web/" target="_blank"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <Instagram className="w-6 h-6 text-pink-500" />
        </a>

        <a href="mailto:mucyoelie84@gmail.com"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <Mail className="w-6 h-6 text-red-600" />
        </a>

        <a href="https://x.com/ElieM45470" target="_blank"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <SiX className="w-6 h-6 text-black dark:text-white" />
        </a>

        <a href="https://github.com/mucyoelie" target="_blank"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <Github className="w-6 h-6 text-slate-900 dark:text-white" />
        </a>

        <a href="tel:+250783175236"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <Phone className="w-6 h-6 text-[#006242]" />
        </a>

        <a href="https://wa.me/250783175236" target="_blank"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <SiWhatsapp className="w-6 h-6 text-green-500" />
        </a>

        <a href="https://www.facebook.com/mucyo.eliequintano/" target="_blank"
          className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
          <SiFacebook className="w-6 h-6 text-blue-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

