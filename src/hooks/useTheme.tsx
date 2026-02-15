import { useEffect, useState } from "react";

export const useTheme = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");

    // If user has already chosen a theme → use it
    if (savedTheme) return savedTheme;

    // Otherwise follow system default theme
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return systemPrefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
