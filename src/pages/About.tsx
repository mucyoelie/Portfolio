
interface AboutUsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
}

const About: React.FC<AboutUsProps> = ({
  title = "About Me",
  subtitle = "Who i am",
  description = `We are a team of passionate developers and designers committed to building high-quality web and mobile applications. Our mission is to deliver functional, scalable, and visually appealing solutions using modern technologies like React, TypeScript, Node.js, and Tailwind CSS.`,
  imageSrc = "/about-us.jpg",
}) => {
  return (
    <section className="flex flex-col lg:flex-row h-screen items-center justify-between py-16 px-6 lg:px-20 bg-slate-50 dark:bg-slate-900 lg:ml-64  border border-slate-300 dark:border-slate-700 ">
      
      {/* TEXT SECTION */}
      <div className="flex-1 lg:pr-12 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
          {subtitle}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-lg mx-auto lg:mx-0">
          {description}
        </p>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden shadow-2xl ring-4 ring-[#006242]/50">
          <img
            src={imageSrc}
            alt="About us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

