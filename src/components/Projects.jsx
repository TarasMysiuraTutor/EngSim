import React, { useEffect, useState, useRef } from "react";
import projectsData from "../data/json/projects.json";
import { formulas } from "../data/formulasData";
import katex from "katex";
import "katex/dist/katex.min.css";

const Projects = ({ t, currentLang }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  // Рендеримо формулу через KaTeX
  const renderFormula = (latex) => {
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: false,
      });
    } catch (error) {
      console.error("KaTeX error:", error);
      return latex;
    }
  };

  // Іконки для проектів
  const icons = {
    metalStructure: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    heatExchanger: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
      </svg>
    ),
    energy: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    ventilation: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    research: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    insulation: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .formula-static {
          color: rgba(96, 165, 250, 0.2);
          transition: color 0.3s ease;
        }

        .formula-static:hover {
          color: rgba(147, 197, 253, 0.4);
        }

        .formula-static .katex * {
          color: inherit !important;
        }

        .formula-static .katex .frac-line {
          border-bottom-color: currentColor !important;
        }
      `,
        }}
      />
      <section
        id="projects"
        className="py-20 px-4 md:px-8 bg-[#0a0e27] relative overflow-hidden"
        ref={sectionRef}
      >
        {/* Animated background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-custom"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Floating formulas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {formulas.map((formula, i) => (
            <div
              key={i}
              className={`absolute ${formula.style} formula-static text-sm md:text-2xl transition-all duration-1000 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                animation: `float ${5 + (i % 10) * 1}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: renderFormula(formula.latex),
                }}
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t.projectsTitle}
          </h2>
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t.projectsSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`service-card  bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 cursor-pointer group relative overflow-hidden flex flex-col justify-between ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                {icons[project.iconType]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title[currentLang]}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.desc[currentLang]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{project.year}</span>
                <span className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                  {t.projectViewDetails} →
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#1a1f3a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title[currentLang]}
                    </h2>
                    <p className="text-gray-400">
                      {selectedProject.client[currentLang]} •{" "}
                      {selectedProject.year}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Overview */}
                {selectedProject.overview && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">
                      {t.projectOverview}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.overview[currentLang]}
                    </p>
                  </div>
                )}

                {/* Results */}
                {selectedProject.results_detailed && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">
                      {t.projectResults}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.results_detailed[currentLang].map(
                        (result, idx) => (
                          <div
                            key={idx}
                            className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20"
                          >
                            <div className="text-2xl font-bold text-blue-400 mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-400">
                              {result.description}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {selectedProject.technologies && (
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-3">
                      {t.projectTecnology}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies[currentLang].map(
                        (tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
