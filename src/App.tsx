import React, { useState, useEffect } from 'react';
import {ChatApp_1, ChatApp_2, DT_1,DT_2,DT_3, UPC_1,UPC_2, VDApp} from './Asserts/ImageNav';
import Navigator from './Components/Navigator';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skill';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LoadingAnimation from './Components/LoadingAnimation';

function App() {
const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Loading timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

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
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'React', icon: '⚛️' },
      { name: 'Java', icon: '☕' },
      { name: 'C++', icon: '💻' },
      { name: 'Solidity', icon: '⛓️' },
      { name: 'SQL', icon: '🗄️' }
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
      title: 'Decentralized Chat Application',
      description: 'Secure, peer-to-peer messaging app using blockchain for identity and encryption. Features real-time chat',
      image : [ChatApp_1, ChatApp_2],
      github: 'https://github.com/V-Varadharajan/ChatApp/',
      tech: ['Bootstrap', 'Ganache', 'Remix', 'Solidity', 'HTML', 'CSS', 'JavaScript'],
      featured: true
    },
    {
      title: 'Unified Peer Communication',
      description: 'Decentralized video calling app with WebRTC and Socket.io for real-time communication.',
      image: [UPC_1, UPC_2],
      github: 'https://github.com/V-Varadharajan/Decentralized-Video-Calling-App.git',
      demo: 'https://decentralized-video-calling-app.onrender.com/',
      tech: ['WebRTC', 'Socket.io', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
      featured: true
    },
    {
      title: 'Digital Tailoring',
      description: 'Full-stack e-commerce platform for custom tailoring services with user-friendly design, Modern platform for client management, measurements, and orders',
      image: [DT_1, DT_2,DT_3],
      github: 'https://github.com/V-Varadharajan/Oxford-Tailors',
      demo: 'https://oxford-tailors.vercel.app/',
      tech: ['React', 'Mysql', 'Node.js', 'Express', 'HTML', 'JavaScript'],
      featured: true
    },
    {
      title: 'Voting DApp',
      description: 'A decentralized voting DApp on Eclipse TestNet, enabling secure, transparent, and tamper-proof elections with wallet-based voter authentication.',
      image: [VDApp],
      tech: ['Solidity','Hardhat','MetaMask','React','TypeScript'],
      github: 'https://github.com/V-Varadharajan/Voting-DApp.git',
      demo: 'https://voting-d-app-eosin.vercel.app/',
      featured: true
    }
  ];

  // Show loading animation first
  if (isLoading) {
    return <LoadingAnimation />;
  }

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