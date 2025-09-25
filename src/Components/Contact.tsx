import { Send, Mail, Phone, MapPin, Linkedin, Github, Rocket, Zap } from "lucide-react";
import Reveal from "./Reveal";

const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl scroll-mt-24 md:scroll-mt-28 relative">
    {/* Background decoration for mobile */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-tr from-emerald-400 to-teal-400 opacity-10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
    </div>
    
    <div className="max-w-7xl mx-auto">
      {/* Mobile-optimized header */}
      <div className="text-center mb-12 sm:mb-16">
        <Reveal variant="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Let's Create Something Amazing
          </h2>
        </Reveal>
        <Reveal variant="fade-left" delay={80}>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
          </p>
        </Reveal>
      </div>
      
      {/* Mobile-first responsive grid */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Enhanced Contact Form - Mobile First */}
  <Reveal variant="fade-up">
  <div className="order-2 lg:order-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <Send size={16} className="sm:w-5 sm:h-5 text-white" />
            </div>
            Send Message
          </h3>
          <form className="space-y-5 sm:space-y-6" action="https://formsubmit.co/varadharajan2507@gmail.com" method="post">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-300 text-base sm:text-lg"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-300 text-base sm:text-lg"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700 dark:text-gray-300">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl resize-none transition-all duration-300 text-base sm:text-lg min-h-[120px] sm:min-h-[140px]"
                placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                required
              ></textarea>
            </div>
            
            {/* Hidden FormSubmit fields */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
            >
              <Send size={20} className="sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Send Message
              <Zap size={18} className="sm:w-5 sm:h-5 ml-2 animate-pulse" />
            </button>
          </form>
  </div>
  </Reveal>
        {/* Contact Info & Social Links - Mobile Optimized */}
        <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
          <Reveal variant="fade-up">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <Mail size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              Get In Touch
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <a href="mailto:varadharajan2507@gmail.com" aria-label="Send email" className="flex items-center p-3 sm:p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Mail size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base truncate">varadharajan2507@gmail.com</div>
                </div>
              </a>
              <a href="tel:+917871132754" aria-label="Call phone" className="flex items-center p-3 sm:p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Phone size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">+91 78711 32754</div>
                </div>
              </a>
              <div className="flex items-center p-3 sm:p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Location</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect With Me</h4>
            
            {/* Modern glassmorphism social icons */}
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/varadharajan-vijayasimhan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="group relative p-4 sm:p-5 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:bg-blue-500/20 active:scale-95"
              >
                <Linkedin size={24} className="sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
              </a>
              <a
                href="https://github.com/V-Varadharajan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="group relative p-4 sm:p-5 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:bg-gray-800/20 active:scale-95"
              >
                <Github size={24} className="sm:w-7 sm:h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
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
                  className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
              </a>
            </div>
            
            {/* Availability status card */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                <Rocket size={20} className="sm:w-6 sm:h-6 mr-2" />
                Available For
              </h5>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Full-time opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Consulting & mentoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Speaking engagements
                </li>
              </ul>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;