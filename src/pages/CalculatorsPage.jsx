// src/pages/CalculatorsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { calculators } from '../data/calculators';
import { categoryMap } from '../data/calculatorsMetadata';

const CalculatorsPage = ({ currentLang, setCurrentLang, t }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Категорії з перекладами
  const categories = {
    uk: [
      { id: 'all', name: 'Всі калькулятори', icon: '📊' },
      { id: 'strength', name: 'Опір матеріалів', icon: '⚙️' },
      { id: 'hydraulic', name: 'Гідравліка', icon: '💧' },
      { id: 'thermodynamic', name: 'Термодинаміка', icon: '🌡️' },
      { id: 'energy', name: 'Енергетика', icon: '💡' }
    ],
    ru: [
      { id: 'all', name: 'Все калькуляторы', icon: '📊' },
      { id: 'strength', name: 'Сопротивление материалов', icon: '⚙️' },
      { id: 'hydraulic', name: 'Гидравлика', icon: '💧' },
      { id: 'thermodynamic', name: 'Термодинамика', icon: '🌡️' },
      { id: 'energy', name: 'Энергетика', icon: '💡' }
    ],
    en: [
      { id: 'all', name: 'All Calculators', icon: '📊' },
      { id: 'strength', name: 'Strength of Materials', icon: '⚙️' },
      { id: 'hydraulic', name: 'Hydraulics', icon: '💧' },
      { id: 'thermodynamic', name: 'Thermodynamics', icon: '🌡️' },
      { id: 'energy', name: 'Energy', icon: '💡' }
    ],
    de: [
      { id: 'all', name: 'Alle Rechner', icon: '📊' },
      { id: 'strength', name: 'Festigkeitslehre', icon: '⚙️' },
      { id: 'hydraulic', name: 'Hydraulik', icon: '💧' },
      { id: 'thermodynamic', name: 'Thermodynamik', icon: '🌡️' },
      { id: 'energy', name: 'Energie', icon: '💡' }
    ]
  };

  // Фільтрація калькуляторів
  const filteredCalculators = Object.entries(calculators).filter(([key, calc]) => {
    const matchesCategory = selectedCategory === 'all' || categoryMap[key] === selectedCategory;
    const matchesSearch = calc.title[currentLang]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         calc.desc[currentLang]?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const pageTitle = {
    uk: 'Інженерні калькулятори | EngSim',
    ru: 'Инженерные калькуляторы | EngSim',
    en: 'Engineering Calculators | EngSim',
    de: 'Technische Rechner | EngSim'
  };

  const pageDesc = {
    uk: '32 професійних інженерних калькулятора: опір матеріалів, гідравліка, термодинаміка, енергетика. Безкоштовні розрахунки онлайн.',
    ru: '32 профессиональных инженерных калькулятора: сопротивление материалов, гидравлика, термодинамика, энергетика.',
    en: '32 professional engineering calculators: strength of materials, hydraulics, thermodynamics, energy. Free online calculations.',
    de: '32 professionelle technische Rechner: Festigkeitslehre, Hydraulik, Thermodynamik, Energie.'
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle[currentLang]}</title>
        <meta name="description" content={pageDesc[currentLang]} />
        <meta property="og:title" content={pageTitle[currentLang]} />
        <meta property="og:description" content={pageDesc[currentLang]} />
        <link rel="canonical" href="https://tarasmysiuratutor.github.io/EngSim/calculators" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar 
          currentLang={currentLang} 
          setCurrentLang={setCurrentLang} 
          t={t} 
        />

        {/* Hero Section */}
        <div className="pt-32 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <Link to="/" className="text-blue-400 hover:text-cyan-400 transition-colors">
                {t.home || 'Home'}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">
                {currentLang === 'uk' && 'Калькулятори'}
                {currentLang === 'ru' && 'Калькуляторы'}
                {currentLang === 'en' && 'Calculators'}
                {currentLang === 'de' && 'Rechner'}
              </span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              {currentLang === 'uk' && 'Інженерні калькулятори'}
              {currentLang === 'ru' && 'Инженерные калькуляторы'}
              {currentLang === 'en' && 'Engineering Calculators'}
              {currentLang === 'de' && 'Technische Rechner'}
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              {currentLang === 'uk' && '32 професійних інструменти для інженерних розрахунків. Швидко, точно, безкоштовно.'}
              {currentLang === 'ru' && '32 профессиональных инструмента для инженерных расчетов. Быстро, точно, бесплатно.'}
              {currentLang === 'en' && '32 professional tools for engineering calculations. Fast, accurate, free.'}
              {currentLang === 'de' && '32 professionelle Werkzeuge für technische Berechnungen. Schnell, genau, kostenlos.'}
            </p>

            {/* Пошук */}
            <div className="mb-8">
              <input
                type="text"
                placeholder={
                  currentLang === 'uk' ? '🔍 Пошук калькулятора...' :
                  currentLang === 'ru' ? '🔍 Поиск калькулятора...' :
                  currentLang === 'en' ? '🔍 Search calculator...' :
                  '🔍 Rechner suchen...'
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-2xl px-6 py-4 bg-white/5 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>

            {/* Фільтр категорій */}
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
                  <span className="text-2xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className="text-xs opacity-75">
                    ({cat.id === 'all' ? Object.keys(calculators).length : 
                      Object.entries(categoryMap).filter(([_, catId]) => catId === cat.id).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Сітка калькуляторів */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCalculators.map(([key, calc]) => (
                <Link
                  key={key}
                  to={`/calculator/${key}`}
                  className="group bg-white/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {calc.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-blue-300 transition-colors">
                    {calc.title[currentLang]}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                    {calc.desc[currentLang]}
                  </p>

                  {/* Категорія */}
                  <div className="text-xs text-blue-400 flex items-center gap-2">
                    <span>
                      {categories[currentLang].find(c => c.id === categoryMap[key])?.name}
                    </span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Якщо нічого не знайдено */}
            {filteredCalculators.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-gray-400">
                  {currentLang === 'uk' && 'Нічого не знайдено. Спробуйте інший запит.'}
                  {currentLang === 'ru' && 'Ничего не найдено. Попробуйте другой запрос.'}
                  {currentLang === 'en' && 'Nothing found. Try another query.'}
                  {currentLang === 'de' && 'Nichts gefunden. Versuchen Sie eine andere Anfrage.'}
                </p>
              </div>
            )}
          </div>
        </div>

        <Footer t={t} />
      </div>
    </>
  );
};

export default CalculatorsPage;