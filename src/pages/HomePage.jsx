// ============================================
// HomePage.jsx - ОНОВЛЕНА ГОЛОВНА
// ============================================
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { translations } from "../data/translations";

function HomePage({ currentLang }) {
  const t = translations[currentLang];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Hero t={t} />
        
        {/* Quick Links Section */}
        <section className="py-16 px-4 md:px-8 bg-[#1a1f3a]/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              {t.quickNavigationTitle || "Швидка навігація"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Services Link */}
              <Link
                to="/services"
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {t.navServices}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t.servicesQuickDesc || "Професійні інженерні розрахунки"}
                </p>
              </Link>

              {/* About Link */}
              <Link
                to="/about"
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {t.aboutTitle}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t.aboutQuickDesc || "Досвід та кваліфікація"}
                </p>
              </Link>

              {/* Projects Link */}
              <Link
                to="/projects"
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {t.navProjects}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t.projectsQuickDesc || "Портфоліо виконаних робіт"}
                </p>
              </Link>

              {/* Contact Link */}
              <Link
                to="/contact"
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {t.navContact}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t.contactQuickDesc || "Зв'яжіться зі мною"}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default HomePage;