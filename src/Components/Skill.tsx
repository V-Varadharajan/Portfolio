import React from "react";
import { Code, Heart, Star } from "lucide-react";

const Skills = ({ skills }: { skills: any }) => (
  <section
    id="skills"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 backdrop-blur-xl"
  >
    <div className="max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
          A versatile toolkit of modern technologies and strengths to build impactful solutions
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10">
        {/* Technical Skills */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center justify-center lg:justify-start">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <Code size={22} className="text-white" />
            </div>
            Technical Arsenal
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {skills.technical.map((skill: any, index: number) => (
              <div
                key={index}
                className="flex items-center w-44 justify-center px-6 py-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/50 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                <span className="text-2xl mr-3">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center justify-center lg:justify-start">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <Heart size={22} className="text-white" />
            </div>
            Core Strengths
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {skills.soft.map((skill: any, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-44 px-6 py-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/50 hover:scale-110 hover:rotate-2 hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                <span className="text-3xl mb-2">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center justify-center lg:justify-start">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4 shadow-md">
              <Star size={22} className="text-white" />
            </div>
            Tools
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {skills.tools.map((tool: any, index: number) => (
              <div
                key={index}
                className="flex items-center w-44 justify-center px-5 py-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md border border-white/30 dark:border-gray-700/50 font-medium text-base hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-xl mr-2">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;