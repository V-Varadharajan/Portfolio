import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { LogoImage } from "../Asserts/ImageNav";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/50" aria-label="Main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Branding */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center group"
            aria-label="Go to Home"
            type="button"
          >
            <span className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-gray-800/90 ring-1 ring-black/5 dark:ring-white/10 shadow-sm overflow-hidden group-hover:shadow-md transition-shadow">
              <img
                src={LogoImage}
                alt="Portfolio Logo"
                title="Portfolio"
                className="w-full h-full object-contain p-0.5 sm:p-1"
                loading="eager"
                decoding="async"
              />
            </span>
            <span className="ml-3 text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              Portfolio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[ 
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "hover:bg-white/50 dark:hover:bg-gray-800/50"
                }`}
                aria-current={activeSection === section.id ? "page" : undefined}
                type="button"
              >
                {section.label}
                {activeSection === section.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={darkMode}
              type="button"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={darkMode}
              type="button"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50">
          <div className="px-4 py-2 space-y-2">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "hover:bg-white/50 dark:hover:bg-gray-800/50"
                }`}
                aria-current={activeSection === section.id ? "page" : undefined}
                type="button"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
