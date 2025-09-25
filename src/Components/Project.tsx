import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

// Carousel component for 2 images with smooth fade transition
const ProjectImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400); // match fade-out duration
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      src={images[current]}
      alt={`${alt} ${current + 1}`}
      className={`w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg transition-opacity duration-400 ${fade ? "opacity-100" : "opacity-0"}`}
      style={{ transition: "opacity 0.4s" }}
    />
  );
};

const Projects = ({ projects }: { projects: any[] }) => (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Showcasing innovative solutions that push boundaries and deliver exceptional user experiences
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {projects.filter(p => p.featured).map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden hover:scale-105 transition-all duration-500"
          >
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star size={16} className="mr-1 fill-current" />
                Featured
              </div>
            </div>
            <div className="relative overflow-hidden">
              {Array.isArray(project.image) && project.image.length === 2 ? (
                <ProjectImageCarousel images={project.image} alt={project.title} />
              ) : (
                <img 
                  src={Array.isArray(project.image) ? project.image[0] : project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
                >
                  <Github size={18} className="mr-2" />
                  Code
                </a>
                {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.filter(p => !p.featured).map((project, index) => (
          <div 
            key={index} 
            className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 overflow-hidden hover:scale-105 transition-all duration-500"
          >
            <div className="relative overflow-hidden">
              {Array.isArray(project.image) && project.image.length === 2 ? (
                <ProjectImageCarousel images={project.image} alt={project.title} />
              ) : Array.isArray(project.image) ? (
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 text-sm"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
                {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;