import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Mail, Sun, Moon, Orbit  } from 'lucide-react';


interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems: NavItem[] = [
    { name: 'Home', icon: <Home size={20} />, href: '#home' },
    { name: 'About', icon: <User size={20} />, href: '#about' },
    { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
    { name: 'Skills', icon: <Code size={20} />, href: '#skills' },
     { name: 'Experience', icon: <Code size={20} />, href: '#experience' },
    { name: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Sun size={18} />, href: 'https://github.com' },
    { name: 'LinkedIn', icon: <Moon size={18} />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Orbit size={18} />, href: 'https://twitter.com' },
  ];

  return (
    <div
      className={`w-64 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 shadow-2xl ${className}`}
    >
      {/* Profile Section */}
      <div className="p-6 border-b border-slate-500">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg ring-4 ring-slate-700 overflow-hidden">
             <img
                  src="/image.jpg"
                 alt="Profile"
                 className="w-full h-full object-cover"
              />
          </div>
          <h2 className="font-bold text-lg text-center">Elie Joseph MUCYO</h2>
          <p className="text-xs text-slate-400 mt-1 text-center">Full Stack Developer</p>
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
            }}
            className={`flex items-center gap-3 px-4 py-3  rounded-lg transition-all duration-200 group ${
              activeItem === item.name
                ? 'bg-gradient-to-r from-[#006242] to-[#006644] shadow-lg'
                : 'hover:bg-slate-700/50'
            }`}
          >
            <span className={`transition-transform duration-200 ${
              activeItem === item.name ? 'scale-110' : 'group-hover:scale-110'
            }`}>
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Social Links */}
      <div className="border-t border-slate-700 p-4">
        <p className="text-xs text-slate-400  text-center">Connect with me</p>
        <div className="flex justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-110"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center border-t border-slate-700">
        <p className="text-xs text-slate-400">© 2024 TUYISHIME Evode</p>
      </div>
    </div>
  );
};

export default Sidebar;