import React, { useEffect, useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { projectsData } from "./projectsData.jsx";

const Projects = ({ t, currentLang }) => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...new Set([...prev, index])]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="projects"
        className="py-20 px-4 md:px-8 bg-[#0a0e27]/80 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-custom"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
            {t.projectsTitle}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.projectsSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card bg-gradient-to-br from-blue-500/10 to-[#1a1f3a]/80 rounded-2xl border border-blue-500/30 overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col ${
                visibleProjects.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Icon */}
              <div className="h-48 bg-gradient-to-br from-[#1a1f3a] to-[#2a3a5a] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-blue-400 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative z-10">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 min-h-[3.5rem]">
                  {project.title[currentLang]}
                </h3>
                <p className="text-gray-400 mb-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow min-h-[5rem]">
                  {project.desc[currentLang]}
                </p>

                {/* Results */}
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-green-400 font-semibold">
                      {project.results[currentLang]}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500 hover:to-blue-600 border border-blue-500/50 hover:border-blue-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 mt-auto"
                >
                  {t.projectViewDetails}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {t.projectHaveProject}
            </h3>
            <p className="text-gray-400 mb-6 text-lg">
              {t.projectHaveProjectDesc}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-white"
            >
              {t.projectDiscuss}
            </a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          t={t}
          currentLang={currentLang}
        />
      )}
    </>
  );
};

export default Projects;
