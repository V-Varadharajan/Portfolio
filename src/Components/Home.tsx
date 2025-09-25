import React from "react";
import { Rocket, ArrowRight, Mail, Download, ChevronDown } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import Reveal from "./Reveal";
import image from "../Asserts/image.png";
import resume from "../Asserts/Varadharajan-resume.pdf";

type HomeProps = { scrollToSection: (id: string) => void };

const Home: React.FC<HomeProps> = ({ scrollToSection }) => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative scroll-mt-24 md:scroll-mt-28"
  >
    

    <div className="max-w-6xl mx-auto w-full">
      {/* Mobile-First Layout: Stack on mobile, grid on larger screens */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Profile Section - Shows first on mobile with modern styling */}
        <div className="flex flex-col items-center text-center lg:order-2 lg:items-end">
          <Reveal variant="fade-in">
          <img
            src={image}
            alt="Portrait of Varadharajan Vijayasimhan"
            className="rounded-2xl w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 xl:w-[340px] xl:h-[420px] object-cover shadow-2xl border-4 border-[#232425] mb-8"
            loading="lazy"
            decoding="async"
          />
          </Reveal>

          {/* Modern glassmorphism social icons */}
          <Reveal className="self-center lg:self-end" variant="fade-up" delay={100}>
          <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-end">
            <a
              href="https://www.linkedin.com/in/varadharajan-vijayasimhan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="group relative p-4 sm:p-5 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:bg-blue-500/20 active:scale-95"
            >
              <Linkedin size={22} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
            </a>
            <a
              href="https://github.com/V-Varadharajan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="group relative p-4 sm:p-5 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:bg-gray-800/20 active:scale-95"
            >
              <Github size={22} className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
            </a>
            <a
              href="https://www.reddit.com/user/Mysterious-Vast8010/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reddit profile"
              className="group relative p-4 sm:p-5 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:bg-orange-500/20 active:scale-95"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
            </a>
          </div>
          </Reveal>
        </div>

        {/* Content Section - Mobile optimized */}
        <div className="text-center lg:text-left lg:order-1 space-y-6">
          <div>
            <Reveal variant="fade-up">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-black dark:text-white tracking-tight mb-4 leading-tight">
                VARADHARAJAN VIJAYASIMHAN
              </h1>
            </Reveal>
            <Reveal variant="fade-left" delay={80}>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-orange-500 mb-6 mx-auto lg:mx-0"></div>
            </Reveal>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
            <Reveal variant="fade-up">
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              2025 Computer Science Engineering graduate specializing in Blockchain technology.
              I love building robust, scalable, and innovative solutions using
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Java</span>,
              <span className="font-semibold text-purple-600 dark:text-purple-400"> Web</span>, and
              <span className="font-semibold text-green-600 dark:text-green-400"> Blockchain</span> development.
            </p>
            </Reveal>
            <Reveal variant="fade-up" delay={120}>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              I thrive in teams that share a vision of "technology for good" and am humbled by their support. I'm excited by the ever-growing challenges in my field and keen to take them on.
            </p>
            </Reveal>
          </div>

          {/* Modern mobile-first CTA buttons with better hierarchy */}
          <Reveal variant="fade-up" delay={160}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            {/* Primary CTA - Larger and more prominent */}
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative w-full sm:w-auto overflow-hidden px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Rocket size={24} className="group-hover:rotate-12 transition-transform duration-500" />
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </button>

            {/* Secondary CTAs - More compact and elegant */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 py-3 sm:px-7 sm:py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border-2 border-blue-500/30 text-blue-600 dark:text-blue-400 rounded-xl font-semibold text-base transition-all duration-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-105 active:scale-95"
              >
                <div className="flex items-center justify-center gap-2">
                  <Mail size={18} className="group-hover:animate-pulse" />
                  <span>Contact</span>
                </div>
              </button>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 sm:px-7 sm:py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold text-base transition-all duration-500 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-105 active:scale-95"
              >
                <div className="flex items-center justify-center gap-2">
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span>Resume</span>
                </div>
              </a>
            </div>
          </div>
          </Reveal>

          {/* Scroll indicator */}
          <Reveal variant="fade-in" delay={200}>
          <div className="flex justify-center lg:justify-start pt-4">
            <div className="animate-bounce">
              <ChevronDown size={28} className="text-gray-400 dark:text-gray-500" />
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Home;