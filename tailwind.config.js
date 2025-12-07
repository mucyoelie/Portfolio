/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
  extend: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"], // Custom font family
    },
    animation: {
      "spin-slow": "spinSlow 12s linear infinite",
    },
    keyframes: {
      spinSlow: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
},
plugins: [],
}