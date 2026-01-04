import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = ({ currentLang, setCurrentLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const navigate = useNavigate();

  const languages = [
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
    { code: "uk", flag: "🇺🇦", name: "Українська" },
    { code: "ru", flag: "🇷🇺", name: "Русский" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    // Отримуємо базовий URL з Vite
    const baseUrl = import.meta.env.BASE_URL;
    
    // Перевіряємо чи ми на головній сторінці
    if (window.location.pathname !== baseUrl && window.location.pathname !== `${baseUrl}index.html`) {
      // Якщо ні - переходимо на головну з якорем
      window.location.href = `${baseUrl}#${id}`;
      return;
    }
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0a0e27]/95 backdrop-blur-lg border-b border-blue-500/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            className="w-12 h-12 mr-3 rounded-full border-2 border-blue-400"
            src={logo}
            alt="logo-icon"
          />
          {t.logo}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <a
            href="/#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {t.navHome}
          </a>
          <a
            href="/#services"
            onClick={(e) => scrollToSection(e, '#services')}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.navServices}
          </a>
          <a
            href="/#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {t.navProjects}
          </a>
          
          {/* Калькулятори - окрема сторінка */}
          <Link
            to="/calculators"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {t.navCalc}
          </Link>
          
          <a
            href="/#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.navContact}
          </a>

          {/* Language Dropdown */}
          <div className="relative ml-4 pl-4 border-l border-blue-500/30">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300"
            >
              <span className="text-sm">
                {currentLanguage.code.toUpperCase()}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  langDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {langDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-[#0a0e27]/98 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 min-w-[180px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setLangDropdown(false);
                      localStorage.setItem("preferredLang", lang.code);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300 ${
                      currentLang === lang.code ? "bg-blue-500/30" : ""
                    }`}
                  >
                    <span className="text-l">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Mobile Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1 px-2 py-1 rounded bg-blue-500/20"
            >
              <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
            </button>

            {langDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-[#0a0e27]/98 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setLangDropdown(false);
                      localStorage.setItem("preferredLang", lang.code);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 hover:bg-blue-500/20 ${
                      currentLang === lang.code ? "bg-blue-500/30" : ""
                    }`}
                  >
                    <span className="text-xs">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0e27]/98 border-t border-blue-500/30">
          <div className="flex flex-col px-8 py-4 space-y-4">
            <a
              href="/#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navHome}
            </a>
            <a
              href="/#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navServices}
            </a>
            <a
              href="/#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navProjects}
            </a>
            
            {/* Калькулятори для мобільного */}
            <Link
              to="/calculators"
              className="flex items-center gap-2 py-2 hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {t.navCalc}
            </Link>
            
            <a
              href="/#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navContact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;