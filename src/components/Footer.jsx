// src/components/Footer.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LegalModal from "./LegalModal";

const Footer = ({ t, currentLang }) => {
  const [modalType, setModalType] = useState(null);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Функція для навігації на головну сторінку з якорем
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const baseUrl = import.meta.env.BASE_URL;
    const currentPath = window.location.pathname;

    // Перевіряємо чи ми на головній сторінці
    const isHomePage =
      currentPath === baseUrl ||
      currentPath === `${baseUrl}/` ||
      currentPath === `${baseUrl}index.html`;

    if (!isHomePage) {
      // Якщо не на головній - переходимо через navigate
      navigate(`/#${sectionId}`);
      // Після переходу скролимо (з затримкою для завантаження)
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Якщо на головній - просто скролимо
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navigationLinks = [
    { label: t.footerAbout || "About", href: "about" },
    { label: t.footerServices || "Services", href: "services" },
    { label: t.footerProjects || "Projects", href: "projects" },
    { label: t.footerCalculators || "Calculators", href: "calculators" },
    { label: t.footerContact || "Contact", href: "contact" },
  ];

  const legalLinks = [
    {
      label: t.footerPrivacy || "Privacy Policy",
      onClick: () => setModalType("privacy"),
    },
    {
      label: t.footerTerms || "Terms of Service",
      onClick: () => setModalType("terms"),
    },
  ];

  const contactInfo = [
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      text: t.contactQuickPhone || "+380676840263",
      href: "tel:+380676840263",
    },
    {
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      text: t.contactQuickEmail || "contact@example.com",
      href: "mailto:contact@example.com",
    },
  ];

  const socialLinks = [
    {
      name: "Telegram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
      ),
      href: "https://t.me/Taras_as",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/taras-mysiura-41350027a",
    },
    // {
    //   name: "Facebook",
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    //     </svg>
    //   ),
    //   href: "#",
    // },
    {
      name: "Viber",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 512 512">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="10"
            d="M269 186a30 30 0 0 1 31 31m-38-58a64 64 0 0 1 64 67m-73-93a97 97 0 0 1 99 104"
          />
          <path
            fill="currentColor"
            d="M288 274q10-13 24-4l36 27q8 10-7 28t-28 15q-53-12-102-60t-61-104q0-20 25-34 13-9 22 5l25 35q6 12-7 22c-39 15 51 112 73 70zM95 232c0 78 14 95 36 118 7 7 32 19 38 19v69c0 4 4 7 8 3l53-63 26 1c144 0 161-56 161-147S400 85 256 85 95 141 95 232zm-30 0c0-126 55-177 191-177s191 51 191 177-55 177-191 177c-10 0-18 0-32-2l-38 43c-7 8-28 11-28-13v-42c-6 0-20-6-39-18-19-13-54-44-54-145z"
          />
        </svg>

        // <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        //   <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.633 9.82c-.06 3.11-.13 8.95 5.508 10.533v2.458s-.038.97.606 1.17c.779.242 1.236-.485 1.98-1.287.408-.44.972-1.084 1.397-1.58 3.85.326 6.812-.42 7.15-.53.776-.253 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.029-.017zM11.454 2.2c.545-.003.976.016.976.016 4.604.02 6.554 1.462 7.03 1.9 1.61 1.46 2.497 4.797 1.848 10.1-.6 4.89-4.17 5.117-4.816 5.327-.292.095-2.895.738-6.164.525 0 0-2.445 2.944-3.206 3.705-.12.12-.26.167-.352.145-.13-.03-.166-.188-.165-.414l.02-4.584c-4.846-1.32-4.548-6.256-4.497-8.85.053-2.595.543-4.654 1.917-6.063 1.86-1.77 5.445-2.026 7.41-1.807zm.156 1.784a.314.314 0 0 0-.112.03c-.232.087-.34.33-.243.556.894 2.093 1.29 2.627 2.092 3.48.742.792 1.29 1.27 3.303 2.174.22.098.477-.01.574-.243.096-.232-.01-.487-.232-.584-1.884-.845-2.35-1.248-2.99-1.94-.716-.772-1.086-1.25-1.92-3.158-.07-.155-.24-.268-.474-.315zm-2.074.674c-.15-.003-.3.014-.455.05-.95.22-1.706.733-2.267 1.446-.675.86-.99 1.783-1.027 2.93-.01.428.333.792.76.803.428.01.79-.333.802-.76.028-.828.265-1.498.724-2.093.367-.477.833-.798 1.458-.934.426-.093.712-.508.62-.933-.07-.322-.345-.55-.615-.51zm1.08 2.05a.48.48 0 0 0-.088.013c-.383.075-.627.453-.55.836.154.766.423 1.24.87 1.638.447.398.937.582 1.773.677.394.045.75-.24.795-.633.044-.394-.24-.75-.634-.795-.626-.07-.933-.197-1.194-.45-.26-.254-.43-.56-.553-1.13-.062-.328-.336-.572-.418-.156z"/>
        // </svg>
      ),
      href: "viber://chat?number=380939036449",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com/TarasMysiura",
    },
  ];

  return (
    <footer className="bg-[#0a0e27] border-t border-blue-500/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              {t.logo || "EngSim"}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footerDescription ||
                "Professional engineering calculators and educational materials"}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-blue-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t.footerQuickLinks || "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${link.href}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>

                  {/* <a
                    href={`#${link.href}`}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group cursor-pointer"
                  ></a> */}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t.footerContactInfo || "Contact Info"}
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <Link
                    to={`/$contact}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm group"
                  >
                    <span className="flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </span>
                    <span className="break-all">{contact.text}</span>
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-3 text-gray-400 text-sm pt-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{t.contactAvailable || "Available 24/7"}</span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t.footerLegal || "Legal"}
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.onClick}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group text-left"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {t.contactTitle || "Contact Us"}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {t.aboutName || "EngSim"}.{" "}
              {t.footerRights || "All rights reserved."}
            </p>
            <p className="flex items-center gap-2">
              <span>{t.footerSpan1 || "Made with"}</span>
              <svg
                className="w-4 h-4 text-red-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t.footerSpan2 || "for engineers"}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {modalType && (
        <LegalModal
          isOpen={modalType !== null}
          onClose={() => setModalType(null)}
          type={modalType}
          t={t}
          currentLang={currentLang}
        />
      )}
    </footer>
  );
};

export default Footer;
