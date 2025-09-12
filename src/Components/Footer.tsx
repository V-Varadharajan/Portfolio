import React from "react";
import { Linkedin, Github, Twitter, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20 dark:border-gray-700/50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-6">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Varadharajan Vijayasimhan
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Crafting digital experiences that inspire and innovate
        </p>
      </div>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://www.linkedin.com/in/varadharajan-vijayasimhan/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/V-Varadharajan" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Github size={24} />
        </a>
        <a href="https://twitter.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-colors">
          <Twitter size={24} />
        </a>
      </div>
      <div className="border-t border-white/20 dark:border-gray-700/50 pt-8">
        <p className="text-gray-600 dark:text-gray-300">
          © 2025 Varadharajan Vijayasimhan. Designed & Built with <Heart size={16} className="inline text-red-500 fill-current mx-1" /> using React & Tailwind CSS.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;