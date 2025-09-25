import { Code, Zap, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const About = () => (
  <section id="about" className="py-24 px-4 sm:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      {/* Left - About Me */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/30 dark:border-gray-700/50 hover:shadow-blue-500/20 transition-all duration-500">
        <Reveal variant="fade-up">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={80}>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          I am a <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science Engineering graduate (2025)</span> 
          with a specialization in Blockchain technology.<br /><br />
          Passionate about building scalable and innovative solutions using <span className="font-semibold text-purple-600 dark:text-purple-400">Java, Web, and Blockchain development</span>.<br /><br />
          I thrive on <span className="font-semibold text-green-600 dark:text-green-400">problem-solving</span>, <span className="font-semibold text-teal-600 dark:text-teal-400">teamwork</span>, and <span className="font-semibold text-orange-600 dark:text-orange-400">continuous learning</span>.
        </p>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm">
            <Code size={16} className="mr-2" /> Java
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full font-medium text-sm">
            <Zap size={16} className="mr-2" /> Blockchain
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full font-medium text-sm">
            <Sparkles size={16} className="mr-2" /> Web Development
          </span>
        </div>
        </Reveal>
      </div>
      {/* Right - Quick Stats */}
      <div className="grid grid-cols-2 gap-8">
        {[
          { icon: "📂", value: "5+", label: "Academic Projects", color: "text-blue-500" },
          { icon: "🎓", value: "2025", label: "Graduation Year", color: "text-green-500" },
          { icon: "💼", value: "Fresher", label: "Experience", color: "text-purple-500" },
          { icon: "🚀", value: "Open", label: "Opportunities", color: "text-orange-500" },
        ].map((stat, i) => (
          <Reveal key={i} variant="fade-up" delay={i * 80}>
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/30 dark:border-gray-700/50 hover:scale-105 transition-all duration-300"
          >
            <span className="text-4xl mb-2">{stat.icon}</span>
            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
            <span className="text-base text-gray-600 dark:text-gray-400 mt-1">{stat.label}</span>
          </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;