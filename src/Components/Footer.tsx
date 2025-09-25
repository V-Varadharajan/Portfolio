import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20 dark:border-gray-700/50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl relative">
    {/* Subtle background decoration */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 sm:opacity-10 rounded-full blur-2xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left mb-8">
        
        {/* Name & Portfolio Home Navigation */}
        <div className="space-y-3 sm:space-y-4">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Varadharajan Vijayasimhan
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-110 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center gap-2">
              <span className="text-lg group-hover:animate-bounce transition-transform duration-300">🏠</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">Back to Home</span>
              <div className="w-0 group-hover:w-6 h-0.5 bg-white/50 rounded-full transition-all duration-300 ml-0 group-hover:ml-2"></div>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200">
            Get in Touch
          </h3>
          <div className="space-y-2">
            <a 
              href="mailto:varadharajan2507@gmail.com"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
            >
              📧 varadharajan2507@gmail.com
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              Available for opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Developed With & Tech Stack */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200">
            Developed With
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            <span className="px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-blue-600 dark:text-blue-400 border border-blue-500/20">
              React
            </span>
            <span className="px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-purple-600 dark:text-purple-400 border border-purple-500/20">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-teal-600 dark:text-teal-400 border border-teal-500/20">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Vite
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced separator */}
      <div className="relative mb-6 sm:mb-8">
        <div className="border-t border-white/20 dark:border-gray-700/50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Heart size={16} className="text-white fill-current" />
          </div>
        </div>
      </div>
      
      {/* Licensing & Copyright */}
      <div className="text-center space-y-2 sm:space-y-3">
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          © 2025 Varadharajan Vijayasimhan. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <span>🏛️ Open Source Portfolio</span>
          <span className="hidden sm:inline">•</span>
          <span>📄 MIT License</span>
          <span className="hidden sm:inline">•</span>
          <span>🚀 Deployed on Firebase</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;