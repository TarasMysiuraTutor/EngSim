// src/pages/ReferenceMassTransferPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { massTransferReferenceData } from "../data/reference/massTransfer";

// Компонент для відображення формул через KaTeX
import FormulaDisplay from "../components/FormulaDisplay";

const ReferenceMassTransferPage = ({ currentLang, setCurrentLang, t }) => {
  const { formulas, tables, files } = massTransferReferenceData;

  const [activeTab, setActiveTab] = useState("formulas");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Категорії
  const categories = {
    uk: [
      { id: "all", name: "Всі", icon: "📚" },
      { id: "diffusion", name: "Дифузія", icon: "🌊" },
      { id: "distillation", name: "Ректифікація", icon: "⚗️" },
      { id: "absorption", name: "Абсорбція", icon: "💨" },
      { id: "extraction", name: "Екстракція", icon: "🧪" },
      { id: "adsorption", name: "Адсорбція", icon: "🔬" },
      { id: "drying", name: "Сушіння", icon: "🌡️" },
    ],
    ru: [
      { id: "all", name: "Все", icon: "📚" },
      { id: "diffusion", name: "Диффузия", icon: "🌊" },
      { id: "distillation", name: "Ректификация", icon: "⚗️" },
      { id: "absorption", name: "Абсорбция", icon: "💨" },
      { id: "extraction", name: "Экстракция", icon: "🧪" },
      { id: "adsorption", name: "Адсорбция", icon: "🔬" },
      { id: "drying", name: "Сушка", icon: "🌡️" },
    ],
    en: [
      { id: "all", name: "All", icon: "📚" },
      { id: "diffusion", name: "Diffusion", icon: "🌊" },
      { id: "distillation", name: "Distillation", icon: "⚗️" },
      { id: "absorption", name: "Absorption", icon: "💨" },
      { id: "extraction", name: "Extraction", icon: "🧪" },
      { id: "adsorption", name: "Adsorption", icon: "🔬" },
      { id: "drying", name: "Drying", icon: "🌡️" },
    ],
    de: [
      { id: "all", name: "Alle", icon: "📚" },
      { id: "diffusion", name: "Diffusion", icon: "🌊" },
      { id: "distillation", name: "Destillation", icon: "⚗️" },
      { id: "absorption", name: "Absorption", icon: "💨" },
      { id: "extraction", name: "Extraktion", icon: "🧪" },
      { id: "adsorption", name: "Adsorption", icon: "🔬" },
      { id: "drying", name: "Trocknung", icon: "🌡️" },
    ],
  };

  // Фільтрація формул
  const filterFormulas = () => {
    return formulas.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        item.title[currentLang]?.toLowerCase().includes(searchLower) ||
        item.formula?.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  };

  // Фільтрація таблиць
  const filterTables = () => {
    return tables.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = item.title[currentLang]
        ?.toLowerCase()
        .includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  };

  const filteredFormulas = filterFormulas();
  const filteredTables = filterTables();

  const pageTitle = {
    uk: "Масообмінні процеси | Довідка | EngSim",
    ru: "Массообменные процессы | Справочник | EngSim",
    en: "Mass Transfer | Reference | EngSim",
    de: "Stoffübertragung | Referenz | EngSim",
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle[currentLang]}</title>
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
              <Link
                to="/reference"
                className="text-blue-400 hover:text-cyan-400 transition-colors"
              >
                {currentLang === "uk" && "Довідка"}
                {currentLang === "ru" && "Справочник"}
                {currentLang === "en" && "Reference"}
                {currentLang === "de" && "Referenz"}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">
                {currentLang === "uk" && "Масообмінні процеси"}
                {currentLang === "ru" && "Массообменные процессы"}
                {currentLang === "en" && "Mass Transfer"}
                {currentLang === "de" && "Stoffübertragung"}
              </span>
            </nav>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-6 mb-6">
                <span className="text-7xl">🧬</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                    {currentLang === "uk" && "Масообмінні процеси"}
                    {currentLang === "ru" && "Массообменные процессы"}
                    {currentLang === "en" && "Mass Transfer Processes"}
                    {currentLang === "de" && "Stoffübertragungsprozesse"}
                  </h1>
                  <p className="text-xl text-gray-400">
                    {currentLang === "uk" &&
                      "Формули, коефіцієнти та методи розрахунку"}
                    {currentLang === "ru" &&
                      "Формулы, коэффициенты и методы расчета"}
                    {currentLang === "en" &&
                      "Formulas, coefficients and calculation methods"}
                    {currentLang === "de" &&
                      "Formeln, Koeffizienten und Berechnungsmethoden"}
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex gap-4">
              <button
                onClick={() => setActiveTab("formulas")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "formulas"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                <span className="text-2xl">📐</span>
                <span>
                  {currentLang === "uk" && "Формули"}
                  {currentLang === "ru" && "Формулы"}
                  {currentLang === "en" && "Formulas"}
                  {currentLang === "de" && "Formeln"}
                </span>
                <span className="text-xs opacity-75">({formulas.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("tables")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "tables"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                <span className="text-2xl">📊</span>
                <span>
                  {currentLang === "uk" && "Таблиці"}
                  {currentLang === "ru" && "Таблицы"}
                  {currentLang === "en" && "Tables"}
                  {currentLang === "de" && "Tabellen"}
                </span>
                <span className="text-xs opacity-75">({tables.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("files")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "files"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                <span className="text-2xl">📁</span>
                <span>
                  {currentLang === "uk" && "Файли"}
                  {currentLang === "ru" && "Файлы"}
                  {currentLang === "en" && "Files"}
                  {currentLang === "de" && "Dateien"}
                </span>
              </button>
            </div>

            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder={
                  currentLang === "uk"
                    ? "🔍 Пошук..."
                    : currentLang === "ru"
                      ? "🔍 Поиск..."
                      : currentLang === "en"
                        ? "🔍 Search..."
                        : "🔍 Suche..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-2xl px-6 py-4 bg-white/5 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-4 mb-12">
              {categories[currentLang].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Content - Formulas */}
            {activeTab === "formulas" && (
              <div className="space-y-6">
                {filteredFormulas.map((formula) => (
                  <div
                    key={formula.id}
                    className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                      {formula.title[currentLang]}
                    </h3>

                    {/* Formula with KaTeX */}
                    <div className="bg-[#0a0e27]/50 p-6 rounded-xl border border-blue-500/20 mb-4">
                      {formula.latex ? (
                        <div className="text-center">
                          <FormulaDisplay
                            formula={formula.latex}
                            className="text-white text-2xl flex items-center justify-center"
                          />
                          {/* <FormulaDisplay latex={formula.latex} /> */}
                        </div>
                      ) : (
                        <div className="text-3xl font-mono text-center text-white">
                          {formula.formula}
                        </div>
                      )}
                    </div>

                    {/* Variables */}
                    {formula.variables && (
                      <div className="mb-4 text-sm text-gray-400">
                        <p className="font-semibold mb-2">
                          {currentLang === "uk" && "де:"}
                          {currentLang === "ru" && "где:"}
                          {currentLang === "en" && "where:"}
                          {currentLang === "de" && "wobei:"}
                        </p>
                        <ul className="space-y-1 pl-4">
                          {formula.variables.map((v, i) => (
                            <li key={i}>• {v[currentLang]}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Example */}
                    {formula.example && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                        <p className="text-green-300 text-sm font-mono">
                          {formula.example[currentLang]}
                        </p>
                      </div>
                    )}

                    {/* Source */}
                    {formula.source && (
                      <div className="pt-4 border-t border-blue-500/20">
                        <p className="text-xs text-gray-500 mb-1">
                          {currentLang === "uk" && "Джерело:"}
                          {currentLang === "ru" && "Источник:"}
                          {currentLang === "en" && "Source:"}
                          {currentLang === "de" && "Quelle:"}
                        </p>

                        <a
                          href={formula.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-cyan-400 text-sm flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {formula.source.name}
                        </a>
                      </div>
                    )}
                  </div>
                ))}

                {filteredFormulas.length === 0 && (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-xl text-gray-400">
                      {currentLang === "uk" && "Нічого не знайдено"}
                      {currentLang === "ru" && "Ничего не найдено"}
                      {currentLang === "en" && "No results found"}
                      {currentLang === "de" && "Keine Ergebnisse gefunden"}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Content - Tables */}
            {activeTab === "tables" && (
              <div className="space-y-6">
                {filteredTables.map((table) => (
                  <div
                    key={table.id}
                    className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                      {table.title[currentLang]}
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-blue-500/20 border-b border-blue-500/30">
                            {table.headers[currentLang].map((header, i) => (
                              <th
                                key={i}
                                className="px-4 py-3 text-left text-cyan-400 font-semibold"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className="border-b border-blue-500/10 hover:bg-white/5 transition-colors"
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className="px-4 py-3 text-gray-300"
                                >
                                  {typeof cell === "object"
                                    ? cell[currentLang]
                                    : cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Source */}
                    {table.source && (
                      <div className="pt-4 mt-4 border-t border-blue-500/20">
                        <p className="text-xs text-gray-500 mb-1">
                          {currentLang === "uk" && "Джерело:"}
                          {currentLang === "ru" && "Источник:"}
                          {currentLang === "en" && "Source:"}
                          {currentLang === "de" && "Quelle:"}
                        </p>

                        <a
                          href={table.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-cyan-400 text-sm flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {table.source.name}
                        </a>
                      </div>
                    )}
                  </div>
                ))}

                {filteredTables.length === 0 && (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-xl text-gray-400">
                      {currentLang === "uk" && "Нічого не знайдено"}
                      {currentLang === "ru" && "Ничего не найдено"}
                      {currentLang === "en" && "No results found"}
                      {currentLang === "de" && "Keine Ergebnisse gefunden"}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Content - Files */}
            {activeTab === "files" && (
              <div className="space-y-8">
                {/* Diagrams */}
                {files.diagrams && files.diagrams.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <span>📊</span>
                      <span>
                        {currentLang === "uk" && "Діаграми та схеми"}
                        {currentLang === "ru" && "Диаграммы и схемы"}
                        {currentLang === "en" && "Diagrams and Schemes"}
                        {currentLang === "de" && "Diagramme und Schemata"}
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {files.diagrams.map((file) => (
                        <div
                          key={file.id}
                          className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-4xl">🖼️</span>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-cyan-400 mb-2">
                                {file.title[currentLang]}
                              </h3>
                              {file.description && (
                                <p className="text-sm text-gray-400 mb-3">
                                  {file.description[currentLang]}
                                </p>
                              )}
                              <p className="text-xs text-gray-500 mb-3">
                                {file.format.toUpperCase()} • {file.type}
                              </p>

                              <a
                                href={file.path}
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 text-sm"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  />
                                </svg>
                                {currentLang === "uk" && "Завантажити"}
                                {currentLang === "ru" && "Скачать"}
                                {currentLang === "en" && "Download"}
                                {currentLang === "de" && "Herunterladen"}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Documents */}
                {files.documents && files.documents.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <span>📄</span>
                      <span>
                        {currentLang === "uk" && "Документи та довідники"}
                        {currentLang === "ru" && "Документы и справочники"}
                        {currentLang === "en" && "Documents and Handbooks"}
                        {currentLang === "de" && "Dokumente und Handbücher"}
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {files.documents.map((file) => (
                        <div
                          key={file.id}
                          className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-4xl">📕</span>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-cyan-400 mb-2">
                                {file.title[currentLang]}
                              </h3>
                              {file.description && (
                                <p className="text-sm text-gray-400 mb-3">
                                  {file.description[currentLang]}
                                </p>
                              )}
                              <div className="flex gap-4 text-sm text-gray-500 mb-3">
                                <span>{file.format.toUpperCase()}</span>
                                {file.pages && (
                                  <span>
                                    • {file.pages}{" "}
                                    {currentLang === "uk"
                                      ? "стор."
                                      : currentLang === "ru"
                                        ? "стр."
                                        : currentLang === "en"
                                          ? "pages"
                                          : "Seiten"}
                                  </span>
                                )}
                                {file.size && <span>• {file.size}</span>}
                              </div>

                              <a
                                href={file.path}
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 text-sm"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  />
                                </svg>
                                {currentLang === "uk" && "Завантажити"}
                                {currentLang === "ru" && "Скачать"}
                                {currentLang === "en" && "Download"}
                                {currentLang === "de" && "Herunterladen"}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Footer t={t} currentLang={currentLang} />
      </div>
    </>
  );
};

export default ReferenceMassTransferPage;
