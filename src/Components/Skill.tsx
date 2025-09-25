import { Code, Heart, Star } from "lucide-react";
import Reveal from "./Reveal";

const Skills = ({ skills }: { skills: any }) => (
  <section
    id="skills"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 backdrop-blur-xl"
  >
    <div className="max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <Reveal variant="fade-up">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </Reveal>
        <Reveal variant="fade-left" delay={80}>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
            A versatile toolkit of modern technologies and strengths to build impactful solutions
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        {/* Technical Skills */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center justify-center lg:justify-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
              <Code size={18} className="sm:w-[22px] sm:h-[22px] text-white" />
            </div>
            <span className="text-lg sm:text-3xl">Technical Arsenal</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6">
            {skills.technical.map((skill: any, index: number) => (
              <Reveal key={`tech-${index}`} variant="fade-up" delay={index * 60}>
              <div
                key={index}
                className="flex items-center justify-center px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-4 bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/50 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg min-w-0"
              >
                <span className="text-lg sm:text-xl lg:text-2xl mr-2 sm:mr-3 flex-shrink-0">{skill.icon}</span>
                <span className="truncate">{skill.name}</span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
        {/* Soft Skills */}
        <div className="col-span-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center justify-center lg:justify-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
              <Heart size={18} className="sm:w-[22px] sm:h-[22px] text-white" />
            </div>
            <span className="text-lg sm:text-3xl">Core Strengths</span>
          </h3>
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6">
            {skills.soft.map((skill: any, index: number) => (
              <Reveal key={`soft-${index}`} variant="fade-up" delay={index * 60}>
              <div
                key={index}
                className="flex flex-col items-center justify-center px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-4 bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/50 hover:scale-110 hover:rotate-2 hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg min-w-0"
              >
                <span className="text-2xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">{skill.icon}</span>
                <span className="text-center text-xs sm:text-sm lg:text-base">{skill.name}</span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div className="col-span-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center justify-center lg:justify-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-md">
              <Star size={18} className="sm:w-[22px] sm:h-[22px] text-white" />
            </div>
            <span className="text-lg sm:text-3xl">Tools</span>
          </h3>
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6">
            {skills.tools.map((tool: any, index: number) => (
              <Reveal key={`tool-${index}`} variant="fade-up" delay={index * 60}>
              <div
                key={index}
                className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-3 bg-white/80 dark:bg-gray-800/80 rounded-lg sm:rounded-xl shadow-md border border-white/30 dark:border-gray-700/50 font-medium text-xs sm:text-sm lg:text-base hover:scale-105 hover:shadow-lg transition-all duration-300 min-w-0"
              >
                <span className="text-base sm:text-lg lg:text-xl mr-1 sm:mr-2 flex-shrink-0">{tool.icon}</span>
                <span className="truncate">{tool.name}</span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;