import React, { useState, useEffect } from 'react';
import Navigator from './Components/Navigator';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skill';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Initialize dark mode based on system preference
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const skills = {
    technical: [
      { name: 'HTML', level: 95, icon: '🌐' },
      { name: 'CSS', level: 90, icon: '🎨' },
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'Java', level: 85, icon: '☕' },
      { name: 'C++', level: 80, icon: '💻' },
      { name: 'Solidity', level: 75, icon: '⛓️' },
      { name: 'SQL', level: 80, icon: '🗄️' }
    ],
    soft: [
      { name: 'Problem Solving', icon: '🧩' },
      { name: 'Communication', icon: '💬' },
      { name: 'Adaptability', icon: '🔄' },
      { name: 'Team Collaboration', icon: '🤝' }
    ],
    tools: [
      { name: 'Visual Studio Code', icon: '📝' },
      { name: 'Remix', icon: '🧪' },
      { name: 'Eclipse', icon: '🌑' },
      { name: 'GitHub', icon: '🐙' }
    ]
  };

  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'Revolutionary e-commerce platform with AI recommendations, real-time analytics, and seamless payment integration. Built with modern tech stack for optimal performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'Stripe'],
      featured: true
    },
    {
      title: 'Real-Time Collaboration Suite',
      description: 'Advanced collaboration platform with live editing, video calls, and project management. Supports teams of any size with enterprise-grade security.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      tech: ['React', 'WebRTC', 'Socket.io', 'MongoDB'],
      featured: true
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Intelligent business intelligence platform with predictive analytics, custom reports, and beautiful data visualizations for enterprise clients.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
      featured: false
    },
    {
      title: 'Mobile-First Social Platform',
      description: 'Next-generation social networking app with AR filters, live streaming, and advanced privacy controls. Built for the mobile-first generation.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      tech: ['React Native', 'Firebase', 'WebRTC', 'AR Kit'],
      featured: false
    }
  ];

    return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 text-gray-900 dark:text-white relative overflow-hidden">
        <Navigator
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Home scrollToSection={scrollToSection}/>
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;