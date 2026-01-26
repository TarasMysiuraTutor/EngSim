// src/pages/ReferenceStrengthPage.jsx - З KATEX
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormulaDisplay from '../components/FormulaDisplay';
import { strengthReferenceData } from '../data/reference/strength';

const ReferenceStrengthPage = ({ currentLang, setCurrentLang, t }) => {
  const [activeTab, setActiveTab] = useState('formulas');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = {
    uk: [
      { id: 'all', name: 'Всі', icon: '📚' },
      { id: 'basics', name: 'Основи', icon: '📐' },
      { id: 'shear', name: 'Зсув', icon: '✂️' },
      { id: 'torsion', name: 'Кручення', icon: '🔄' },
      { id: 'bending', name: 'Згин', icon: '↔️' },
      { id: 'stability', name: 'Стійкість', icon: '⚖️' },
      { id: 'materials', name: 'Матеріали', icon: '🔩' },
      { id: 'sections', name: 'Перерізи', icon: '▭' },
      { id: 'design', name: 'Проектування', icon: '📋' },
      { id: 'connections', name: 'З\'єднання', icon: '🔗' },
      { id: 'safety', name: 'Безпека', icon: '🛡️' }
    ],
    ru: [
      { id: 'all', name: 'Все', icon: '📚' },
      { id: 'basics', name: 'Основы', icon: '📐' },
      { id: 'shear', name: 'Сдвиг', icon: '✂️' },
      { id: 'torsion', name: 'Кручение', icon: '🔄' },
      { id: 'bending', name: 'Изгиб', icon: '↔️' },
      { id: 'stability', name: 'Устойчивость', icon: '⚖️' },
      { id: 'materials', name: 'Материалы', icon: '🔩' },
      { id: 'sections', name: 'Сечения', icon: '▭' },
      { id: 'design', name: 'Проектирование', icon: '📋' },
      { id: 'connections', name: 'Соединения', icon: '🔗' },
      { id: 'safety', name: 'Безопасность', icon: '🛡️' }
    ],
    en: [
      { id: 'all', name: 'All', icon: '📚' },
      { id: 'basics', name: 'Basics', icon: '📐' },
      { id: 'shear', name: 'Shear', icon: '✂️' },
      { id: 'torsion', name: 'Torsion', icon: '🔄' },
      { id: 'bending', name: 'Bending', icon: '↔️' },
      { id: 'stability', name: 'Stability', icon: '⚖️' },
      { id: 'materials', name: 'Materials', icon: '🔩' },
      { id: 'sections', name: 'Sections', icon: '▭' },
      { id: 'design', name: 'Design', icon: '📋' },
      { id: 'connections', name: 'Connections', icon: '🔗' },
      { id: 'safety', name: 'Safety', icon: '🛡️' }
    ],
    de: [
      { id: 'all', name: 'Alle', icon: '📚' },
      { id: 'basics', name: 'Grundlagen', icon: '📐' },
      { id: 'shear', name: 'Schub', icon: '✂️' },
      { id: 'torsion', name: 'Torsion', icon: '🔄' },
      { id: 'bending', name: 'Biegung', icon: '↔️' },
      { id: 'stability', name: 'Stabilität', icon: '⚖️' },
      { id: 'materials', name: 'Materialien', icon: '🔩' },
      { id: 'sections', name: 'Querschnitte', icon: '▭' },
      { id: 'design', name: 'Bemessung', icon: '📋' },
      { id: 'connections', name: 'Verbindungen', icon: '🔗' },
      { id: 'safety', name: 'Sicherheit', icon: '🛡️' }
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

  const filteredFormulas = filterData(strengthReferenceData.formulas);
  const filteredTables = filterData(strengthReferenceData.tables);

  return (
    <>
      <Helmet>
        <title>{currentLang === 'uk' ? 'Опір матеріалів' : 'Strength of Materials'} | EngSim</title>
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
                {currentLang === 'uk' ? 'Довідка' : 'Reference'}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">
                {currentLang === 'uk' ? 'Опір матеріалів' : 'Strength of Materials'}
              </span>
            </nav>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-6 mb-6">
                <span className="text-7xl">⚙️</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                    {currentLang === 'uk' ? 'Опір матеріалів' : 'Strength of Materials'}
                  </h1>
                  <p className="text-xl text-gray-400">
                    {currentLang === 'uk' ? 'Формули з KaTeX відображенням' : 'Formulas with KaTeX rendering'}
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
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <span className="text-2xl">📐</span>
                <span>{currentLang === 'uk' ? 'Формули' : 'Formulas'}</span>
                <span className="text-xs opacity-75">({strengthReferenceData.formulas.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('tables')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'tables'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <span className="text-2xl">📊</span>
                <span>{currentLang === 'uk' ? 'Таблиці' : 'Tables'}</span>
                <span className="text-xs opacity-75">({strengthReferenceData.tables.length})</span>
              </button>
            </div>

            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder={currentLang === 'uk' ? '🔍 Пошук...' : '🔍 Search...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-2xl px-6 py-4 bg-white/5 border border-purple-500/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories[currentLang].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            {activeTab === 'formulas' ? (
              <div className="space-y-6">
                {filteredFormulas.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="bg-white/5 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">
                      {item.title[currentLang]}
                    </h3>
                    
                    {/* Formula with KaTeX */}
                    <div className="bg-[#0a0e27]/50 p-6 rounded-xl border border-purple-500/20 mb-4">
                      <FormulaDisplay 
                        formula={item.formula} 
                        className="text-white text-2xl flex items-center justify-center"
                      />
                      
                    </div>

                    {/* Variables */}
                    {item.variables && (
                      <div className="mb-4 text-sm text-gray-400">
                        <p className="font-semibold mb-2">
                          {currentLang === 'uk' ? 'де:' : 'where:'}
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
                          💡 {item.example[currentLang]}
                        </p>
                      </div>
                    )}

                    {/* Source */}
                    {item.source && (
                      <div className="pt-4 border-t border-purple-500/20">
                        <p className="text-xs text-gray-500 mb-1">
                          {currentLang === 'uk' ? 'Джерело:' : 'Source:'}
                        </p>
                        <a
                          href={item.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-pink-400 text-sm flex items-center gap-2"
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
            ) : (
              <div className="space-y-6">
                {filteredTables.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="bg-white/5 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">
                      {item.title[currentLang]}
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-purple-500/20 border-b border-purple-500/30">
                            {item.headers[currentLang].map((header, i) => (
                              <th key={i} className="px-4 py-3 text-left text-purple-400 font-semibold">
                                <span dangerouslySetInnerHTML={{ __html: header }} />
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-purple-500/10 hover:bg-white/5 transition-colors">
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

                    {/* Note */}
                    {item.note && (
                      <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-sm text-yellow-300">
                          ℹ️ {item.note[currentLang]}
                        </p>
                      </div>
                    )}

                    {/* Source */}
                    {item.source && (
                      <div className="pt-4 mt-4 border-t border-purple-500/20">
                        <p className="text-xs text-gray-500 mb-1">
                          {currentLang === 'uk' ? 'Джерело:' : 'Source:'}
                        </p>
                        <a
                          href={item.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-pink-400 text-sm flex items-center gap-2"
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

export default ReferenceStrengthPage;