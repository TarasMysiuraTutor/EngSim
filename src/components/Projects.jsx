import React, { useEffect, useState } from 'react';

const Projects = ({ t, currentLang }) => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      icon: '🏗️',
      title: {
        uk: 'Розрахунок металоконструкції',
        ru: 'Расчет металлоконструкции',
        en: 'Metal Structure Calculation',
        de: 'Metallkonstruktionsberechnung'
      },
      desc: {
        uk: 'Комплексний аналіз міцності та стійкості каркасу виробничого цеху',
        ru: 'Комплексный анализ прочности и устойчивости каркаса производственного цеха',
        en: 'Comprehensive strength and stability analysis of production facility framework',
        de: 'Umfassende Festigkeits- und Stabilitätsanalyse des Produktionshallenrahmens'
      },
      tags: ['МКЕ', 'FEM', 'Steel']
    },
    {
      icon: '🔥',
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
      tags: ['CFD', 'Thermal', 'Chemical']
    },
    {
      icon: '⚡',
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
      tags: ['Audit', 'Optimization', 'Energy']
    },
    {
      icon: '🏭',
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
      tags: ['Aerodynamics', 'Ventilation', '3D']
    },
    {
      icon: '🔬',
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
      tags: ['Testing', 'Composites', 'Lab']
    },
    {
      icon: '🌡️',
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
      tags: ['Insulation', 'Heat Loss', 'Pipes']
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
    <section id="projects" className="py-20 px-8 bg-[#0a0e27]/80 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
        {t.projectsTitle}
      </h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card bg-gradient-to-br from-blue-500/10 to-[#1a1f3a]/80 rounded-2xl border border-blue-500/30 overflow-hidden cursor-pointer group hover-lift hover-glow transition-all duration-500 ${
              visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <div className="h-48 bg-gradient-to-br from-[#1a1f3a] to-[#2a3a5a] flex items-center justify-center text-6xl md:text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
              {project.icon}
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title[currentLang]}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {project.desc[currentLang]}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-sm text-cyan-400 hover:bg-blue-500/30 hover:scale-110 transition-all duration-300"
                    style={{
                      animation: `fadeIn 0.5s ease-out ${0.3 + i * 0.1}s both`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;