import React, { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Sun,
  Moon,
  Orbit,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface SidebarProps {
  onToggle3D?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle3D }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // for mobile menu
  const { theme, toggleTheme } = useTheme();

  const navItems: NavItem[] = [
    { name: "Home", icon: <Home size={20} />, href: "#home" },
    { name: "About", icon: <User size={20} />, href: "#about" },
    { name: "Projects", icon: <Briefcase size={20} />, href: "#projects" },
    { name: "Skills", icon: <Code size={20} />, href: "#skills" },
    { name: "Experience", icon: <Code size={20} />, href: "#experience" },
    { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-200 dark:bg-slate-700/50 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-white text-slate-900 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 dark:text-white
        w-64 lg:w-64 flex flex-col shadow-2xl
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Profile Section */}
        <div className="p-6 border-b border-slate-300 dark:border-slate-500">
          <div className="flex flex-col items-center">
            <div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
              flex items-center justify-center mb-4 shadow-lg ring-4 ring-slate-300 dark:ring-slate-700 overflow-hidden"
            >
              <img
                src="/image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-bold text-lg text-center">Elie Joseph MUCYO</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-hidden py-6 px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.name);
                setIsOpen(false); // close menu on mobile
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group 
                ${
                  activeItem === item.name
                    ? "bg-gradient-to-r from-[#006242] to-[#006644] shadow-lg text-white"
                    : "hover:bg-slate-200 dark:hover:bg-slate-700/50"
                }`}
            >
              <span
                className={`transition-transform duration-200 ${
                  activeItem === item.name ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Bottom Controls */}
        <div className="flex items-center gap-3 py-4 px-4 border-t border-slate-300 dark:border-slate-700">
          {/* Orbit icon */}
          {onToggle3D && (
            <button
              onClick={onToggle3D}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700/50 hover:bg-purple-400 dark:hover:bg-purple-600 transition-all duration-200"
            >
              <Orbit size={22} />
            </button>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700/50 hover:bg-yellow-400 dark:hover:bg-blue-600 transition-all duration-200"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 text-center border-t border-slate-300 dark:border-slate-700">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {new Date().getFullYear()} &copy; Developed by
            <span className="text-[#006242] font-bold mx-1 text-xs">mucyo.web</span>
          </p>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;


