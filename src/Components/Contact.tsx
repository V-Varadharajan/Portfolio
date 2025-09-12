import React from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Rocket, Zap, Heart } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let's Create Something Amazing
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
              <Send size={20} className="text-white" />
            </div>
            Send Message
          </h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-300 text-lg"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-300 text-lg"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl resize-none transition-all duration-300 text-lg"
                placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Send size={24} className="mr-3" />
              Send Message
              <Zap size={20} className="ml-2 animate-pulse" />
            </button>
          </form>
        </div>
        {/* Contact Info & Social Links */}
        <div className="space-y-8">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <Mail size={20} className="text-white" />
              </div>
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white/50 dark:bg-gray-900/50 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                  <div className="text-gray-600 dark:text-gray-300">alex.johnson@example.com</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/50 dark:bg-gray-900/50 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                  <div className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/50 dark:bg-gray-900/50 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                  <div className="text-gray-600 dark:text-gray-300">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <h4 className="text-2xl font-bold mb-6">Connect With Me</h4>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/in/varadharajan-vijayasimhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={28} className="text-white group-hover:animate-bounce" />
              </a>
              <a
                href="https://github.com/V-Varadharajan"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Github size={28} className="text-white group-hover:animate-bounce" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Twitter size={28} className="text-white group-hover:animate-bounce" />
              </a>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white">
              <h5 className="text-xl font-bold mb-4 flex items-center">
                <Rocket size={24} className="mr-2" />
                Available For
              </h5>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Full-time opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Consulting & mentoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Speaking engagements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;