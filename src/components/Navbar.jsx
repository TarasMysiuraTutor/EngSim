import React, { useState } from "react";

const Navbar = ({ currentLang, setCurrentLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  const languages = [
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
    { code: "uk", flag: "🇺🇦", name: "Українська" },
    { code: "ru", flag: "🇷🇺", name: "Русский" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0a0e27]/95 backdrop-blur-lg border-b border-blue-500/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          <img
            className="w-12 h-12 mr-2"
            src="./public/logo-192x192.png"
            alt="logo-icon"
          />
          {t.logo}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {t.navHome}
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "#services")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {t.navServices}
          </a>
          <a
            href="#calculators"
            onClick={(e) => scrollToSection(e, "#calculators")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {t.navCalc}
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {t.navProjects}
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {t.navContact}
          </a>

          {/* Language Dropdown */}
          <div className="relative ml-4 pl-4 border-l border-blue-500/30">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300"
            >
              <span className="text-xl"></span>
              {/* <span className="text-xl">{currentLanguage.flag}</span> */}
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
                    <span className="text-2xl"></span>
                    {/* <span className="text-2xl">{lang.flag}</span> */}
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
              <span className="text-lg">{currentLanguage.flag}</span>
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
                    <span className="text-xl">{lang.flag}</span>
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
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navHome}
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "#services")}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navServices}
            </a>
            <a
              href="#calculators"
              onClick={(e) => scrollToSection(e, "#calculators")}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navCalc}
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navProjects}
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
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
