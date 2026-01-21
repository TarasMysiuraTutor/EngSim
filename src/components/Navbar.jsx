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

  const videosText = {
    uk: "Відеоуроки",
    ru: "Видеоуроки",
    en: "Videos",
    de: "Videos",
  };

  const referenceText = {
    uk: "Довідка",
    ru: "Справочник",
    en: "Reference",
    de: "Referenz",
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0a0e27]/95 backdrop-blur-lg border-b border-blue-500/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
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
        <div className="hidden lg:flex gap-6 items-center">
          {/* Home */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {t.navHome}
          </Link>

          {/* Компанія - Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {t.navCompany || "Компанія"}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
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

            <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0e27]/98 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link
                to="/about"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {t.navAbout || "Про мене"}
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t.navServices}
              </Link>
              <Link
                to="/projects"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                {t.navProjects}
              </Link>
              <Link
                to="/testimonials"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                {t.navTestimonials || "Відгуки"}
              </Link>
            </div>
          </div>

          {/* Інструменти - Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {t.navTools || "Інструменти"}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
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

            <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0e27]/98 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link
                to="/calculators"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {t.navCalc}
              </Link>
              <Link
                to="/reference"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                {referenceText[currentLang]}
              </Link>
              <Link
                to="/videos"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {videosText[currentLang]}
              </Link>
            </div>
          </div>

          {/* Допомога - Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.navHelp || "Допомога"}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
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

            <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0e27]/98 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link
                to="/faq"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                FAQ
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t.navContact}
              </Link>
            </div>
          </div>

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
              <span className="text-sm">
                {currentLanguage.code.toUpperCase()}
              </span>
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
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300 py-2"
            >
              {t.navHome}
            </Link>

            {/* Компанія */}
            <div className="border-t border-blue-500/20 pt-2">
              <p className="text-xs text-gray-500 mb-2">КОМПАНІЯ</p>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {t.navAbout || "Про мене"}
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {t.navServices}
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {t.navProjects}
              </Link>
              <Link
                to="/testimonials"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {t.navTestimonials || "Відгуки"}
              </Link>
            </div>

            {/* Інструменти */}
            <div className="border-t border-blue-500/20 pt-2">
              <p className="text-xs text-gray-500 mb-2">ІНСТРУМЕНТИ</p>
              <Link
                to="/calculators"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {t.navCalc}
              </Link>
              <Link
                to="/reference"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {referenceText[currentLang]}
              </Link>
              <Link
                to="/videos"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {videosText[currentLang]}
              </Link>
            </div>

            {/* Допомога */}
            <div className="border-t border-blue-500/20 pt-2">
              <p className="text-xs text-gray-500 mb-2">ДОПОМОГА</p>
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300 py-2 block"
              >
                {t.navContact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;