import React, { useEffect, useState } from 'react';

const Projects = ({ t, currentLang }) => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: {
        uk: 'Розрахунок металоконструкції',
        ru: 'Расчет металлоконструкции',
        en: 'Metal Structure Calculation',
        de: 'Metallkonstruktionsberechnung'
      },
      desc: {
        uk: 'Комплексний аналіз міцності та стійкості каркасу виробничого цеху',
        ru: 'Комплексний анализ прочности и устойчивости каркаса производственного цеха',
        en: 'Comprehensive strength and stability analysis of production facility framework',
        de: 'Umfassende Festigkeits- und Stabilitätsanalyse des Produktionshallenrahmens'
      },
      details: {
        uk: 'Проект включав статичний та динамічний аналіз, розрахунок на вітрові та снігові навантаження',
        ru: 'Проект включал статический и динамический анализ, расчет на ветровые и снеговые нагрузки',
        en: 'Project included static and dynamic analysis, wind and snow load calculations',
        de: 'Projekt umfasste statische und dynamische Analyse, Wind- und Schneelastberechnungen'
      },
      tags: ['МКЕ', 'FEM', 'Steel'],
      results: {
        uk: 'Оптимізація конструкції знизила вагу на 12%',
        ru: 'Оптимизация конструкции снизила вес на 12%',
        en: '12% weight reduction through optimization',
        de: '12% Gewichtsreduzierung durch Optimierung'
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: {
        uk: 'Теплообмінник для хімзаводу',
        ru: 'Теплообменник для химзавода',
        en: 'Heat Exchanger for Chemical Plant',
        de: 'Wärmetauscher für Chemiewerk'
      },
      desc: {
        uk: 'Проектування пластинчастого теплообмінника, розрахунок теплопередачі',
        ru: 'Проектирование пластинчатого теплообменника, расчет теплопередачи',
        en: 'Plate heat exchanger design, heat transfer calculation',
        de: 'Plattenwärmetauscher-Design, Wärmeübertragungsberechnung'
      },
      details: {
        uk: 'CFD-моделювання потоків, підбір матеріалів стійких до агресивного середовища',
        ru: 'CFD-моделирование потоков, подбор материалов устойчивых к агрессивной среде',
        en: 'CFD flow modeling, selection of corrosion-resistant materials',
        de: 'CFD-Strömungsmodellierung, Auswahl korrosionsbeständiger Materialien'
      },
      tags: ['CFD', 'Thermal', 'Chemical'],
      results: {
        uk: 'Підвищення ефективності на 18%',
        ru: 'Повышение эффективности на 18%',
        en: '18% efficiency improvement',
        de: '18% Effizienzsteigerung'
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: {
        uk: 'Енергоефективність котельні',
        ru: 'Энергоэффективность котельной',
        en: 'Boiler House Energy Efficiency',
        de: 'Energieeffizienz des Kesselhauses'
      },
      desc: {
        uk: 'Термодинамічний аналіз роботи котельні, підвищення ККД на 15%',
        ru: 'Термодинамический анализ работы котельной, повышение КПД на 15%',
        en: 'Thermodynamic analysis of boiler house, 15% efficiency increase',
        de: 'Thermodynamische Analyse des Kesselhauses, 15% Wirkungsgradsteigerung'
      },
      details: {
        uk: 'Енергоаудит, оптимізація режимів роботи, встановлення економайзерів',
        ru: 'Энергоаудит, оптимизация режимов работы, установка экономайзеров',
        en: 'Energy audit, operation mode optimization, economizer installation',
        de: 'Energieaudit, Betriebsmodusoptimierung, Economizer-Installation'
      },
      tags: ['Audit', 'Optimization', 'Energy'],
      results: {
        uk: 'Економія 200 000 грн/рік',
        ru: 'Экономия 200 000 грн/год',
        en: '200,000 UAH/year savings',
        de: '200.000 UAH/Jahr Einsparungen'
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: {
        uk: 'Система вентиляції заводу',
        ru: 'Система вентиляции завода',
        en: 'Factory Ventilation System',
        de: 'Werkslüftungssystem'
      },
      desc: {
        uk: 'Розрахунок аеродинаміки повітропроводів, моделювання потоків',
        ru: 'Расчет аэродинамики воздуховодов, моделирование потоков',
        en: 'Air duct aerodynamics calculation, flow modeling',
        de: 'Luftkanalerodynamik-Berechnung, Strömungsmodellierung'
      },
      details: {
        uk: '3D-моделювання розповсюдження забруднень, підбір обладнання',
        ru: '3D-моделирование распространения загрязнений, подбор оборудования',
        en: '3D pollution dispersion modeling, equipment selection',
        de: '3D-Verschmutzungsausbreitungsmodellierung, Gerätewahl'
      },
      tags: ['Aerodynamics', 'Ventilation', '3D'],
      results: {
        uk: 'Відповідність всім нормам ДСН',
        ru: 'Соответствие всем нормам ДСН',
        en: 'Full compliance with safety standards',
        de: 'Vollständige Einhaltung der Sicherheitsstandards'
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: {
        uk: 'Дослідження матеріалів',
        ru: 'Исследование материалов',
        en: 'Material Research',
        de: 'Materialforschung'
      },
      desc: {
        uk: 'Експериментальне визначення властивостей композитних матеріалів',
        ru: 'Экспериментальное определение свойств композитных материалов',
        en: 'Experimental determination of composite material properties',
        de: 'Experimentelle Bestimmung von Verbundwerkstoffeigenschaften'
      },
      details: {
        uk: 'Лабораторні випробування на розтяг, стиск, згин. Створення математичних моделей',
        ru: 'Лабораторные испытания на растяжение, сжатие, изгиб. Создание математических моделей',
        en: 'Tension, compression, bending lab tests. Mathematical modeling',
        de: 'Zug-, Druck-, Biegelabortests. Mathematische Modellierung'
      },
      tags: ['Testing', 'Composites', 'Lab'],
      results: {
        uk: 'База даних властивостей матеріалів',
        ru: 'База данных свойств материалов',
        en: 'Material properties database created',
        de: 'Materialeigenschaften-Datenbank erstellt'
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: {
        uk: 'Теплоізоляція трубопроводів',
        ru: 'Теплоизоляция трубопроводов',
        en: 'Pipeline Thermal Insulation',
        de: 'Rohrleitungswärmedämmung'
      },
      desc: {
        uk: 'Розрахунок оптимальної товщини теплоізоляції для парових трубопроводів',
        ru: 'Расчет оптимальной толщины теплоизоляции для паровых трубопроводов',
        en: 'Optimal thermal insulation thickness calculation for steam pipelines',
        de: 'Optimale Wärmedämmdickenberechnung für Dampfleitungen'
      },
      details: {
        uk: 'Економічне обґрунтування, розрахунок терміну окупності, технічна документація',
        ru: 'Экономическое обоснование, расчет срока окупаемости, техническая документация',
        en: 'Economic justification, payback period calculation, technical documentation',
        de: 'Wirtschaftliche Begründung, Amortisationszeitberechnung, technische Dokumentation'
      },
      tags: ['Insulation', 'Heat Loss', 'Pipes'],
      results: {
        uk: 'Зниження втрат тепла на 40%',
        ru: 'Снижение потерь тепла на 40%',
        en: '40% heat loss reduction',
        de: '40% Wärmeverlustreduktion'
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...new Set([...prev, index])]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#0a0e27]/80 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
          {t.projectsTitle}
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {t.projectsSubtitle}
        </p>
      </div>
      
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card bg-gradient-to-br from-blue-500/10 to-[#1a1f3a]/80 rounded-2xl border border-blue-500/30 overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col ${
              visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${index * 0.1}s`
            }}
          >
            {/* Icon Header */}
            <div className="h-48 bg-gradient-to-br from-[#1a1f3a] to-[#2a3a5a] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-blue-400 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative z-10">
                {project.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 min-h-[3.5rem]">
                {project.title[currentLang]}
              </h3>
              <p className="text-gray-400 mb-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow min-h-[5rem]">
                {project.desc[currentLang]}
              </p>
              
              {/* Results Badge */}
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-400 font-semibold min-h-[1.5rem]">
                    {project.results[currentLang]}
                  </span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-4 min-h-[2rem]">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-cyan-400 hover:bg-blue-500/30 hover:scale-110 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button - завжди внизу */}
              <button
                onClick={() => setSelectedProject(index)}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500 hover:to-blue-600 border border-blue-500/50 hover:border-blue-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 mt-auto"
              >
                {t.projectViewDetails}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-blue-500/30 rounded-2xl max-w-2xl w-full p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-blue-400 mb-6">
              {projects[selectedProject].icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
              {projects[selectedProject].title[currentLang]}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {projects[selectedProject].desc[currentLang]}
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {projects[selectedProject].details[currentLang]}
            </p>

            {/* Results */}
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-400 font-semibold">
                  {projects[selectedProject].results[currentLang]}
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedProject(null)}
            >
              {t.projectOrderSimilar}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            {t.projectHaveProject}
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            {t.projectHaveProjectDesc}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-white"
          >
            {t.projectDiscuss}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;