import React from "react";
import { Rocket, ArrowRight, Mail, Download, ChevronDown } from "lucide-react";
import image from "../Asserts/image.png";
import resume from "../Asserts/Varadharajan-resume.pdf";

const Home = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 relative"
  >
    {/* Decorative Gradient Background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-400 opacity-20 rounded-full blur-2xl"></div>
    </div>
    <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <h1 className="text-6xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight mb-4">
          VARADHARAJAN VIJAYASIMHAN
        </h1>
        <div className="w-32 h-1 bg-orange-500 mb-8"></div>
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
          I'm passionate about innovation and driven by impact.
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
          2025 Computer Science Engineering graduate specializing in Blockchain technology.<br />
          I love building robust, scalable, and innovative solutions using <span className="font-semibold text-blue-600 dark:text-blue-400">Java</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Web</span>, and <span className="font-semibold text-green-600 dark:text-green-400">Blockchain</span> development.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
          I thrive in teams that share a vision of "technology for good" and am humbled by their support. I’m excited by the ever-growing challenges in my field and keen to take them on.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 mb-10">
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <Rocket size={24} className="mr-3 group-hover:animate-bounce" />
            View Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-full transition-all duration-300 font-semibold text-lg hover:scale-105"
          >
            <Mail size={24} className="mr-3 group-hover:animate-pulse" />
            Contact Me
          </button>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-full transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <Download size={24} className="mr-3 group-hover:animate-bounce" />
            Download CV
          </a>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src={image}
          alt="profile"
          className="rounded-2xl w-[340px] h-[420px] object-cover shadow-2xl border-4 border-[#232425]"
        />
      </div>
    </div>
  </section>
);

export default Home;