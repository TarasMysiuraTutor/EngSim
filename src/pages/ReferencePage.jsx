// src/pages/ReferencePage.jsx - ГОЛОВНА СТОРІНКА ДОВІДКИ
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReferencePage = ({ currentLang, setCurrentLang, t }) => {
  // Розділи довідки
  const sections = {
    uk: [
      {
        id: "math",
        icon: "🔢",
        title: "Математика",
        description:
          "Геометрія, тригонометрія, алгебра, диференціальні рівняння",
        items: "25+ формул",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: "strength",
        icon: "⚙️",
        title: "Опір матеріалів",
        description: "Напруження, деформації, балки, колони, з'єднання",
        items: "40+ формул",
        color: "from-purple-500 to-pink-500",
      },
      {
        id: "hydraulic",
        icon: "💧",
        title: "Гідравліка",
        description: "Течія рідин, втрати тиску, насоси, трубопроводи",
        items: "30+ формул",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "hydromechanics",
        icon: "🌀",
        title: "Гідромеханіка",
        description:
          "Осадження, фільтрація, флюїдизація, центрифугування, змішування",
        items: "30+ формул",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "thermal",
        icon: "🌡️",
        title: "Теплообмін",
        description:
          "Теплопровідність, конвекція, випромінювання, теплообмінники",
        items: "35+ формул",
        color: "from-orange-500 to-red-500",
      },
      {
        id: "mass",
        icon: "⚗️",
        title: "Масообмін",
        description: "Дифузія, сушка, абсорбція, екстракція",
        items: "20+ формул",
        color: "from-green-500 to-emerald-500",
      },
    ],
    ru: [
      {
        id: "math",
        icon: "🔢",
        title: "Математика",
        description:
          "Геометрия, тригонометрия, алгебра, дифференциальные уравнения",
        items: "25+ формул",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: "strength",
        icon: "⚙️",
        title: "Сопротивление материалов",
        description: "Напряжения, деформации, балки, колонны, соединения",
        items: "40+ формул",
        color: "from-purple-500 to-pink-500",
      },
      {
        id: "hydraulic",
        icon: "💧",
        title: "Гидравлика",
        description: "Течение жидкостей, потери давления, насосы, трубопроводы",
        items: "30+ формул",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "hydromechanics",
        icon: "🌀" ,
        title: "Гидромеханика",
        description:
          "Осаждение, фильтрация, флюидизация, центрифугирование, смешивание",
        items: "30+ формул",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "thermal",
        icon: "🌡️",
        title: "Теплообмен",
        description: "Теплопроводность, конвекция, излучение, теплообменники",
        items: "35+ формул",
        color: "from-orange-500 to-red-500",
      },
      {
        id: "mass",
        icon: "⚗️",
        title: "Массообмен",
        description: "Диффузия, сушка, абсорбция, экстракция",
        items: "20+ формул",
        color: "from-green-500 to-emerald-500",
      },
    ],
    en: [
      {
        id: "math",
        icon: "🔢",
        title: "Mathematics",
        description: "Geometry, trigonometry, algebra, differential equations",
        items: "25+ formulas",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: "strength",
        icon: "⚙️",
        title: "Strength of Materials",
        description: "Stress, strain, beams, columns, connections",
        items: "40+ formulas",
        color: "from-purple-500 to-pink-500",
      },
      {
        id: "hydraulic",
        icon: "💧",
        title: "Hydraulics",
        description: "Fluid flow, pressure losses, pumps, pipelines",
        items: "30+ formulas",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "hydromechanics",
        icon: "🌀",
        title: "Hydromechanics",
        description:
          "Settling, Filtration, Fluidization, Centrifugation, Mixing",
        items: "30+ formulas",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "thermal",
        icon: "🌡️",
        title: "Heat Transfer",
        description: "Conduction, convection, radiation, heat exchangers",
        items: "35+ formulas",
        color: "from-orange-500 to-red-500",
      },
      {
        id: "mass",
        icon: "⚗️",
        title: "Mass Transfer",
        description: "Diffusion, drying, absorption, extraction",
        items: "20+ formulas",
        color: "from-green-500 to-emerald-500",
      },
    ],
    de: [
      {
        id: "math",
        icon: "🔢",
        title: "Mathematik",
        description:
          "Geometrie, Trigonometrie, Algebra, Differentialgleichungen",
        items: "25+ Formeln",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: "strength",
        icon: "⚙️",
        title: "Festigkeitslehre",
        description: "Spannung, Dehnung, Balken, Säulen, Verbindungen",
        items: "40+ Formeln",
        color: "from-purple-500 to-pink-500",
      },
      {
        id: "hydraulic",
        icon: "💧",
        title: "Hydraulik",
        description: "Fluidströmung, Druckverluste, Pumpen, Rohrleitungen",
        items: "30+ Formeln",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "hydromechanics",
        icon: "🌀",
        title: "Hydromechanik",
        description:
          "Sedimentation, Filtration, Fluidisierung, Zentrifugation, Mischung",
        items: "30+ Formeln",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "thermal",
        icon: "🌡️",
        title: "Wärmeübertragung",
        description: "Leitung, Konvektion, Strahlung, Wärmetauscher",
        items: "35+ Formeln",
        color: "from-orange-500 to-red-500",
      },
      {
        id: "mass",
        icon: "⚗️",
        title: "Stoffübertragung",
        description: "Diffusion, Trocknung, Absorption, Extraktion",
        items: "20+ Formeln",
        color: "from-green-500 to-emerald-500",
      },
    ],
  };

  const pageTitle = {
    uk: "Довідкові дані | EngSim",
    ru: "Справочные данные | EngSim",
    en: "Reference Data | EngSim",
    de: "Referenzdaten | EngSim",
  };

  const pageDesc = {
    uk: "Інженерні довідкові дані: формули, таблиці, стандарти. Математика, опір матеріалів, гідравліка, теплообмін, масообмін.",
    ru: "Инженерные справочные данные: формулы, таблицы, стандарты. Математика, сопротивление материалов, гидравлика, теплообмен, массообмен.",
    en: "Engineering reference data: formulas, tables, standards. Mathematics, strength of materials, hydraulics, heat transfer, mass transfer.",
    de: "Technische Referenzdaten: Formeln, Tabellen, Standards. Mathematik, Festigkeitslehre, Hydraulik, Wärmeübertragung, Stoffübertragung.",
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle[currentLang]}</title>
        <meta name="description" content={pageDesc[currentLang]} />
        <meta property="og:title" content={pageTitle[currentLang]} />
        <meta property="og:description" content={pageDesc[currentLang]} />
        <link
          rel="canonical"
          href="https://tarasmysiuratutor.github.io/EngSim/reference"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={t}
        />

        <div className="pt-32 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <Link
                to="/"
                className="text-blue-400 hover:text-cyan-400 transition-colors"
              >
                {t.home || "Home"}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">
                {currentLang === "uk" && "Довідкові дані"}
                {currentLang === "ru" && "Справочные данные"}
                {currentLang === "en" && "Reference Data"}
                {currentLang === "de" && "Referenzdaten"}
              </span>
            </nav>

            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                {currentLang === "uk" && "📚 Інженерні довідкові дані"}
                {currentLang === "ru" && "📚 Инженерные справочные данные"}
                {currentLang === "en" && "📚 Engineering Reference Data"}
                {currentLang === "de" && "📚 Technische Referenzdaten"}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {currentLang === "uk" &&
                  "Професійні формули, таблиці та стандарти для інженерних розрахунків"}
                {currentLang === "ru" &&
                  "Профессиональные формулы, таблицы и стандарты для инженерных расчетов"}
                {currentLang === "en" &&
                  "Professional formulas, tables and standards for engineering calculations"}
                {currentLang === "de" &&
                  "Professionelle Formeln, Tabellen und Standards für technische Berechnungen"}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/5 border border-blue-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  150+
                </div>
                <div className="text-gray-400 text-sm">
                  {currentLang === "uk" && "Формул"}
                  {currentLang === "ru" && "Формул"}
                  {currentLang === "en" && "Formulas"}
                  {currentLang === "de" && "Formeln"}
                </div>
              </div>
              <div className="bg-white/5 border border-blue-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">
                  {currentLang === "uk" && "Таблиць"}
                  {currentLang === "ru" && "Таблиц"}
                  {currentLang === "en" && "Tables"}
                  {currentLang === "de" && "Tabellen"}
                </div>
              </div>
              <div className="bg-white/5 border border-blue-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-gray-400 text-sm">
                  {currentLang === "uk" && "Розділів"}
                  {currentLang === "ru" && "Разделов"}
                  {currentLang === "en" && "Sections"}
                  {currentLang === "de" && "Abschnitte"}
                </div>
              </div>
              <div className="bg-white/5 border border-blue-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  20+
                </div>
                <div className="text-gray-400 text-sm">
                  {currentLang === "uk" && "Стандартів"}
                  {currentLang === "ru" && "Стандартов"}
                  {currentLang === "en" && "Standards"}
                  {currentLang === "de" && "Standards"}
                </div>
              </div>
            </div>

            {/* Розділи */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections[currentLang].map((section) => (
                <Link
                  key={section.id}
                  to={`/reference/${section.id}`}
                  className="group bg-white/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {section.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                    {section.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {section.description}
                  </p>

                  {/* Items count */}
                  <div className="flex items-center justify-between pt-4 border-t border-blue-500/20">
                    <span
                      className={`text-sm font-semibold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                    >
                      {section.items}
                    </span>
                    <svg
                      className="w-5 h-5 text-blue-400 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {currentLang === "uk" && "📖 Джерела та стандарти"}
                {currentLang === "ru" && "📖 Источники и стандарты"}
                {currentLang === "en" && "📖 Sources and Standards"}
                {currentLang === "de" && "📖 Quellen und Standards"}
              </h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                {currentLang === "uk" &&
                  "Всі дані взяті з європейських (EN, ISO) та українських (ДСТУ, ДБН) стандартів, а також з перевірених інженерних довідників"}
                {currentLang === "ru" &&
                  "Все данные взяты из европейских (EN, ISO) и украинских (ДСТУ, ДБН) стандартов, а также из проверенных инженерных справочников"}
                {currentLang === "en" &&
                  "All data is taken from European (EN, ISO) and Ukrainian (DSTU, DBN) standards, as well as verified engineering handbooks"}
                {currentLang === "de" &&
                  "Alle Daten stammen aus europäischen (EN, ISO) und ukrainischen (DSTU, DBN) Standards sowie verifizierten technischen Handbüchern"}
              </p>
            </div>
          </div>
        </div>

        <Footer t={t} currentLang={currentLang} />
      </div>
    </>
  );
};

export default ReferencePage;
