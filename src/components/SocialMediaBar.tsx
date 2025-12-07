import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialMediaBarProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

const SocialMediaBar: React.FC<SocialMediaBarProps> = ({
  githubUrl = "https://github.com/yourprofile",
  linkedinUrl = "https://linkedin.com/in/yourprofile",
  email = "example@gmail.com",
}) => {
  return (
    <div className="w-full flex items-center justify-center mt-10 lg:mt-20">
      <div className="flex flex-row items-center justify-center gap-6 border-t border-slate-400 dark:border-slate-600 pt-6 w-full max-w-4xl">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <Github className="w-6 h-6 text-slate-800 dark:text-slate-200 hover:text-[#006242] transition" />
        </a>

        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 text-slate-800 dark:text-slate-200 hover:text-[#006242] transition" />
        </a>

        <a href={`mailto:${email}`}>
          <Mail className="w-6 h-6 text-slate-800 dark:text-slate-200 hover:text-[#006242] transition" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaBar;
