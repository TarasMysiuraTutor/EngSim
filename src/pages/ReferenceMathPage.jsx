// src/pages/ReferenceMathPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mathReferenceData } from '../data/referenceMathData';

const ReferenceMathPage = ({ currentLang, setCurrentLang, t }) => {
  const [activeTab, setActiveTab] = useState('formulas');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = {
    uk: [
      { id: 'all', name: 'Всі', icon: '📚' },
      { id: 'geometry', name: 'Геометрія', icon: '📐' },
      { id: 'trigonometry', name: 'Тригонометрія', icon: '📊' },
      { id: 'algebra', name: 'Алгебра', icon: '🔢' },
      { id: 'calculus', name: 'Мат. аналіз', icon: '∫' },
      { id: 'constants', name: 'Константи', icon: 'π' }
    ],
    ru: [
      { id: 'all', name: 'Все', icon: '📚' },
      { id: 'geometry', name: 'Геометрия', icon: '📐' },
      { id: 'trigonometry', name: 'Тригонометрия', icon: '📊' },
      { id: 'algebra', name: 'Алгебра', icon: '🔢' },
      { id: 'calculus', name: 'Мат. анализ', icon: '∫' },
      { id: 'constants', name: 'Константы', icon: 'π' }
    ],
    en: [
      { id: 'all', name: 'All', icon: '📚' },
      { id: 'geometry', name: 'Geometry', icon: '📐' },
      { id: 'trigonometry', name: 'Trigonometry', icon: '📊' },
      { id: 'algebra', name: 'Algebra', icon: '🔢' },
      { id: 'calculus', name: 'Calculus', icon: '∫' },
      { id: 'constants', name: 'Constants', icon: 'π' }
    ],
    de: [
      { id: 'all', name: 'Alle', icon: '📚' },
      { id: 'geometry', name: 'Geometrie', icon: '📐' },
      { id: 'trigonometry', name: 'Trigonometrie', icon: '📊' },
      { id: 'algebra', name: 'Algebra', icon: '🔢' },
      { id: 'calculus', name: 'Analysis', icon: '∫' },
      { id: 'constants', name: 'Konstanten', icon: 'π' }
    ]
  };

  const filterData = (data) => {
    return data.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        item.title[currentLang]?.toLowerCase().includes(searchLower) ||
        item.formula?.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  };

  const filteredFormulas = filterData(mathReferenceData.formulas);
  const filteredTables = filterData(mathReferenceData.tables);

  const pageTitle = {
    uk: 'Математика | Довідка | EngSim',
    ru: 'Математика | Справочник | EngSim',
    en: 'Mathematics | Reference | EngSim',
    de: 'Mathematik | Referenz | EngSim'
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle[currentLang]}</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />

        <div className="pt-32 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <Link to="/" className="text-blue-400 hover:text-cyan-400 transition-colors">
                {t.home || 'Home'}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to="/reference" className="text-blue-400 hover:text-cyan-400 transition-colors">
                {currentLang === 'uk' && 'Довідка'}
                {currentLang === 'ru' && 'Справочник'}
                {currentLang === 'en' && 'Reference'}
                {currentLang === 'de' && 'Referenz'}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">
                {currentLang === 'uk' && 'Математика'}
                {currentLang === 'ru' && 'Математика'}
                {currentLang === 'en' && 'Mathematics'}
                {currentLang === 'de' && 'Mathematik'}
              </span>
            </nav>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-6 mb-6">
                <span className="text-7xl">🔢</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                    {currentLang === 'uk' && 'Математика'}
                    {currentLang === 'ru' && 'Математика'}
                    {currentLang === 'en' && 'Mathematics'}
                    {currentLang === 'de' && 'Mathematik'}
                  </h1>
                  <p className="text-xl text-gray-400">
                    {currentLang === 'uk' && 'Формули та константи для інженерних розрахунків'}
                    {currentLang === 'ru' && 'Формулы и константы для инженерных расчетов'}
                    {currentLang === 'en' && 'Formulas and constants for engineering calculations'}
                    {currentLang === 'de' && 'Formeln und Konstanten für technische Berechnungen'}
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex gap-4">
              <button
                onClick={() => setActiveTab('formulas')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'formulas'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <span className="text-2xl">📐</span>
                <span>
                  {currentLang === 'uk' && 'Формули'}
                  {currentLang === 'ru' && 'Формулы'}
                  {currentLang === 'en' && 'Formulas'}
                  {currentLang === 'de' && 'Formeln'}
                </span>
                <span className="text-xs opacity-75">({mathReferenceData.formulas.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('tables')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'tables'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <span className="text-2xl">📊</span>
                <span>
                  {currentLang === 'uk' && 'Таблиці'}
                  {currentLang === 'ru' && 'Таблицы'}
                  {currentLang === 'en' && 'Tables'}
                  {currentLang === 'de' && 'Tabellen'}
                </span>
                <span className="text-xs opacity-75">({mathReferenceData.tables.length})</span>
              </button>
            </div>

            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder={
                  currentLang === 'uk' ? '🔍 Пошук...' :
                  currentLang === 'ru' ? '🔍 Поиск...' :
                  currentLang === 'en' ? '🔍 Search...' :
                  '🔍 Suche...'
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
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            {activeTab === 'formulas' ? (
              <div className="space-y-6">
                {filteredFormulas.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                      {item.title[currentLang]}
                    </h3>
                    
                    {/* Formula */}
                    <div className="bg-[#0a0e27]/50 p-6 rounded-xl border border-blue-500/20 font-mono text-white text-xl mb-4">
                      <div dangerouslySetInnerHTML={{ __html: item.formula }} />
                    </div>

                    {/* Variables */}
                    {item.variables && (
                      <div className="mb-4 text-sm text-gray-400">
                        <p className="font-semibold mb-2">
                          {currentLang === 'uk' && 'де:'}
                          {currentLang === 'ru' && 'где:'}
                          {currentLang === 'en' && 'where:'}
                          {currentLang === 'de' && 'wobei:'}
                        </p>
                        <ul className="space-y-1 pl-4">
                          {item.variables.map((v, i) => (
                            <li key={i}>• {v[currentLang]}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Example */}
                    {item.example && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                        <p className="text-green-300 text-sm font-mono">
                          {item.example[currentLang]}
                        </p>
                      </div>
                    )}

                    {/* Source */}
                    {item.source && (
                      <div className="pt-4 border-t border-blue-500/20">
                        <p className="text-xs text-gray-500 mb-1">
                          {currentLang === 'uk' && 'Джерело:'}
                          {currentLang === 'ru' && 'Источник:'}
                          {currentLang === 'en' && 'Source:'}
                          {currentLang === 'de' && 'Quelle:'}
                        </p>
                        {item.source.url ? (
                          <a
                            href={item.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-cyan-400 text-sm flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            {typeof item.source.name === 'object' ? item.source.name[currentLang] : item.source.name}
                          </a>
                        ) : (
                          <p className="text-blue-400 text-sm">
                            {typeof item.source.name === 'object' ? item.source.name[currentLang] : item.source.name}
                          </p>
                        )}
                        {item.source.description && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.source.description[currentLang]}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredTables.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                      {item.title[currentLang]}
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-blue-500/20 border-b border-blue-500/30">
                            {item.headers[currentLang].map((header, i) => (
                              <th key={i} className="px-4 py-3 text-left text-cyan-400 font-semibold">
                                <span dangerouslySetInnerHTML={{ __html: header }} />
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className="border-b border-blue-500/10 hover:bg-white/5 transition-colors"
                            >
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-3 text-gray-300">
                                  {typeof cell === 'object' ? cell[currentLang] : cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Source */}
                    {item.source && (
                      <div className="pt-4 mt-4 border-t border-blue-500/20">
                        <p className="text-xs text-gray-500 mb-1">
                          {currentLang === 'uk' && 'Джерело:'}
                          {currentLang === 'ru' && 'Источник:'}
                          {currentLang === 'en' && 'Source:'}
                          {currentLang === 'de' && 'Quelle:'}
                        </p>
                        <a
                          href={item.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-cyan-400 text-sm flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {item.source.name}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer t={t} currentLang={currentLang} />
      </div>
    </>
  );
};

export default ReferenceMathPage;