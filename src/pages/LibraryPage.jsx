import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const resources = [
  {
    title: "Strength of Materials — Beer & Johnston",
    desc: "Classic engineering textbook covering stress, strain, beams, and deflection.",
    pages: 612,
    format: "PDF",
    file: "/library/beer_strength_of_materials.pdf",
    icon: "📘",
  },
  {
    title: "Hydraulics Reference Handbook",
    desc: "Quick formulas and charts for pipes, pumps, flows, and pressure losses.",
    pages: 92,
    format: "PDF",
    file: "/library/hydraulics_reference.pdf",
    icon: "💧",
  },
  {
    title: "Thermodynamics Basics",
    desc: "Fundamentals of heat transfer, cycles, and energy equations.",
    pages: 154,
    format: "PDF",
    file: "/library/thermodynamics_basics.pdf",
    icon: "🔥",
  },
];

const LibraryPage = ({ currentLang, setCurrentLang, t }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />

      <div className="max-w-6xl mx-auto pt-24 pb-20 px-6">
        <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          📚 {currentLang === "uk" && "Інженерна література"}
          {currentLang === "ru" && "Инженерная литература"}
          {currentLang === "en" && "Engineering Library"}
          {currentLang === "de" && "Ingenieur Literatur"}
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((book) => (
            <div
              key={book.title}
              className="
    flex flex-col justify-between h-full
    p-6 bg-white/5 border border-blue-500/20 
    rounded-xl hover:bg-white/10 hover:border-blue-400/50 
    transition shadow-sm
  "
            >
              <div>
                <div className="text-4xl mb-3">{book.icon}</div>

                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {book.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {book.desc}
                </p>

                <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                  <span>📄 {book.pages} pages</span>
                  <span>•</span>
                  <span>{book.format}</span>
                </div>
              </div>

              <a
                href={book.file}
                className="
      mt-4 inline-flex items-center justify-center gap-2
      px-6 py-2 rounded-lg
      bg-blue-600/30 hover:bg-blue-600/50
      border border-blue-400/40
      text-blue-200 font-medium
      transition
    "
              >
                ⬇️ Download
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer t={t} />
    </div>
  );
};

export default LibraryPage;
