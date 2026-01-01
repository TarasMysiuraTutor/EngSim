import React, { useEffect, useRef, useState } from 'react';

const Calculators = ({ t, currentLang, openCalculator, calculators }) => {
  const [visibleCategories, setVisibleCategories] = useState([]);
  const sectionRef = useRef(null);

  const categories = [
    {
      titleKey: 'calcCat1',
      icon: '⚙️',
      calcs: ['stress', 'beam', 'shaft', 'bolt', 'deformation', 'column', 'shear', 'weld']
    },
    {
      titleKey: 'calcCat3',
      icon: '💧',
      calcs: ['pipe', 'pump', 'ventilation', 'pressure_loss', 'orifice', 'valve', 'tank', 'hydraulic_cylinder']
    },
    {
      titleKey: 'calcCat2',
      icon: '🌡️',
      calcs: ['heattransfer', 'insulation', 'efficiency', 'carnot', 'heat_exchanger', 'convection', 'radiation', 'enthalpy']
    },
    {
      titleKey: 'calcCat4',
      icon: '💡',
      calcs: ['energy', 'power', 'solar', 'wind', 'transformer', 'motor', 'battery', 'cable']
    }
  ];

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

  return (
    <section id="calculators" className="py-20 px-8 relative overflow-hidden" ref={sectionRef}>
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
                    onClick={() => openCalculator(calcKey)}
                    className={`bg-white/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/60 cursor-pointer transition-all duration-500 group hover-lift hover-glow ${
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
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {calc.desc[currentLang]}
                    </p>
                    
                    {/* Click indicator */}
                    <div className="mt-4 flex items-center gap-2 text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Click to calculate</span>
                      <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
};

export default Calculators;