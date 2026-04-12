import React, { useEffect, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { Link } from "react-router-dom";

import { formulas } from "../data/formulasData";

const Hero = ({ t }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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

  const stats = [
    { number: "10+", label: t?.statsYears || "Років досвіду" },
    { number: "150+", label: t?.statsProjects || "Проєктів" },
    { number: "98%", label: t?.statsClients || "Задоволених клієнтів" },
    { number: "24/7", label: t?.statsSupport || "Підтримка" },
  ];

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
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
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

        <div className="text-center max-w-6xl relative z-10">
          {/* Головний заголовок */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              {t?.heroTitle || "Інженерні розрахунки"}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
              {t?.heroPreTitle || "Професійні послуги"}
            </p>
          </div>

          {/* Опис */}
          <p
            className={`text-base md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t?.heroPostTitle || "Високоякісні інженерні розрахунки"}
          </p>
          <p
            className={`text-base md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t?.heroSubtitle || "Ваш надійний партнер у технічних проєктах"}
          </p>

          {/* CTA кнопки */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-white w-full sm:w-auto text-center"
            >
              {t?.heroCTA || "Замовити консультацію"}
            </Link>

            <a
              href="https://t.me/Taras_as"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-full font-semibold hover:bg-white/20 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              Telegram
            </a>

            <a
              href="tel:+380XXXXXXXXX"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-full font-semibold hover:bg-white/20 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
            >
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
              {t?.heroCallButton || "Зателефонувати"}
            </a>
          </div>

          {/* Статистика */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg p-4 md:p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Соціальні докази */}
          <div
            className={`flex flex-col md:flex-row gap-4 justify-center items-center text-sm transition-all duration-1000 delay-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-500/20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
              </div>
              <span className="text-gray-300 ml-2">
                {t?.heroTrustedBy || "Довіряють 150+ клієнтів"}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-500/20">
              <div className="flex text-yellow-400">{"⭐".repeat(5)}</div>
              <span className="text-gray-300">
                {t?.heroRating || "5.0 рейтинг"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
