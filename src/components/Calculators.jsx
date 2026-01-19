// src/components/Calculators.jsx - УНІФІКОВАНА ВЕРСІЯ
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategorySchema } from '../utils/structuredData';

const Calculators = ({ t, currentLang, calculators }) => {
  const [visibleCategories, setVisibleCategories] = useState([]);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    {
      titleKey: 'calcCat1',
      icon: '⚙️',
      categoryId: 'strength',
      calcs: ['stress', 'beam', 'shaft', 'bolt', 'deformation', 'column', 'shear', 'weld']
    },
    {
      titleKey: 'calcCat3',
      icon: '💧',
      categoryId: 'hydraulic',
      calcs: ['pipe', 'pump', 'ventilation', 'pressure_loss', 'orifice', 'valve', 'tank', 'hydraulic_cylinder']
    },
    {
      titleKey: 'calcCat2',
      icon: '🌡️',
      categoryId: 'thermodynamic',
      calcs: ['heattransfer', 'insulation', 'efficiency', 'carnot', 'heat_exchanger', 'convection', 'radiation', 'enthalpy']
    },
    {
      titleKey: 'calcCat4',
      icon: '💡',
      categoryId: 'energy',
      calcs: ['energy', 'power', 'solar', 'wind', 'transformer', 'motor', 'battery', 'cable']
    }
  ];

  // Додаємо structured data для всіх категорій
  useEffect(() => {
    categories.forEach(category => {
      const categoryData = {
        name: t[category.titleKey],
        description: `${t[category.titleKey]} - Професійні інженерні калькулятори`,
        calculators: category.calcs.map(calcKey => {
          const calc = calculators[calcKey];
          return {
            id: calcKey,
            name: calc.title[currentLang],
            description: calc.desc[currentLang]
          };
        }),
        lang: currentLang
      };

      const schema = getCategorySchema(categoryData);
      
      const scriptId = `category-schema-${category.categoryId}`;
      const oldScript = document.getElementById(scriptId);
      if (oldScript) {
        oldScript.remove();
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      categories.forEach(category => {
        const script = document.getElementById(`category-schema-${category.categoryId}`);
        if (script) script.remove();
      });
    };
  }, [currentLang, calculators]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCategories(prev => [...new Set([...prev, index])]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const categoryElements = document.querySelectorAll('.calc-category-wrapper');
    categoryElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 👇 ГОЛОВНА ЗМІНА: Навігація замість відкриття модалки
  const handleCalculatorClick = (calcKey) => {
    navigate(`/calculator/${calcKey}`);
  };

  return (
    <section id="calculators" className="py-20 px-8 relative overflow-hidden bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
        {t.calcTitle}
      </h2>
      
      <div className="max-w-7xl mx-auto">
        {categories.map((category, catIndex) => (
          <div 
            key={catIndex} 
            className={`calc-category-wrapper mb-12 transition-all duration-700 ${
              visibleCategories.includes(catIndex) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            data-index={catIndex}
          >
            <h3 className="text-2xl md:text-3xl text-blue-400 mb-8 pb-4 border-b border-blue-500/30 flex items-center gap-3">
              <span className="animate-bounce-custom">{category.icon}</span>
              <span className="hover:text-cyan-400 transition-colors duration-300">{t[category.titleKey]}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.calcs.map((calcKey, index) => {
                const calc = calculators[calcKey];
                return (
                  <div
                    key={calcKey}
                    onClick={() => handleCalculatorClick(calcKey)}
                    className={`bg-white/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/60 cursor-pointer transition-all duration-500 group hover-lift hover-glow hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${
                      visibleCategories.includes(catIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionDelay: `${(catIndex * 0.2) + (index * 0.1)}s`
                    }}
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {calc.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-cyan-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {calc.title[currentLang]}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                      {calc.desc[currentLang]}
                    </p>
                    
                    {/* Click indicator */}
                    <div className="mt-4 flex items-center justify-between text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>
                        {currentLang === 'de' && 'Öffnen'}
                        {currentLang === 'en' && 'Open'}
                        {currentLang === 'uk' && 'Відкрити'}
                        {currentLang === 'ru' && 'Открыть'}
                      </span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA для перегляду всіх калькуляторів */}
      <div className="text-center mt-16">
        <button
          onClick={() => navigate('/calculators')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
        >
          <span>
            {currentLang === 'uk' && 'Переглянути всі калькулятори'}
            {currentLang === 'ru' && 'Просмотреть все калькуляторы'}
            {currentLang === 'en' && 'View All Calculators'}
            {currentLang === 'de' && 'Alle Rechner anzeigen'}
          </span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Calculators;