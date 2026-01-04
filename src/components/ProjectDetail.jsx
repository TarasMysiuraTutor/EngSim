import React, { useEffect, useState } from 'react';

const ProjectDetail = ({ project, onClose, t, currentLang }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: { uk: 'Огляд', ru: 'Обзор', en: 'Overview', de: 'Überblick' }, icon: '📋' },
    { id: 'challenge', label: { uk: 'Завдання', ru: 'Задача', en: 'Challenge', de: 'Aufgabe' }, icon: '🎯' },
    { id: 'solution', label: { uk: 'Рішення', ru: 'Решение', en: 'Solution', de: 'Lösung' }, icon: '💡' },
    { id: 'results', label: { uk: 'Результати', ru: 'Результаты', en: 'Results', de: 'Ergebnisse' }, icon: '📈' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div className="min-h-screen py-8 px-4">
        <div 
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-blue-500/30 rounded-2xl overflow-hidden shadow-2xl animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with hero image/icon */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-[#2a3a5a] to-[#1a2a4a] flex items-center justify-center overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Icon */}
            <div className="text-blue-400 transform scale-150 relative z-10">
              {project.icon}
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-black/70 transition-all duration-300 hover:rotate-90 z-20"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-12">
            {/* Title and meta */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {project.title[currentLang]}
              </h1>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-sm text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">
                    {currentLang === 'uk' ? 'Термін' : currentLang === 'ru' ? 'Срок' : currentLang === 'en' ? 'Duration' : 'Dauer'}
                  </div>
                  <div className="text-white font-semibold">{project.duration[currentLang]}</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">
                    {currentLang === 'uk' ? 'Клієнт' : currentLang === 'ru' ? 'Клиент' : currentLang === 'en' ? 'Client' : 'Kunde'}
                  </div>
                  <div className="text-white font-semibold">{project.client[currentLang]}</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">
                    {currentLang === 'uk' ? 'Галузь' : currentLang === 'ru' ? 'Отрасль' : currentLang === 'en' ? 'Industry' : 'Branche'}
                  </div>
                  <div className="text-white font-semibold">{project.industry[currentLang]}</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">
                    {currentLang === 'uk' ? 'Рік' : currentLang === 'ru' ? 'Год' : currentLang === 'en' ? 'Year' : 'Jahr'}
                  </div>
                  <div className="text-white font-semibold">{project.year}</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex gap-2 border-b border-blue-500/30 overflow-x-auto pb-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-t-lg font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-blue-500/20 text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label[currentLang]}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-lg p-6 md:p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.overview[currentLang]}
                    </p>
                  </div>
                )}

                {activeTab === 'challenge' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {currentLang === 'uk' ? 'Виклики проекту:' : currentLang === 'ru' ? 'Вызовы проекта:' : currentLang === 'en' ? 'Project Challenges:' : 'Projektherausforderungen:'}
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges[currentLang].map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300 leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'solution' && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {currentLang === 'uk' ? 'Наше рішення:' : currentLang === 'ru' ? 'Наше решение:' : currentLang === 'en' ? 'Our Solution:' : 'Unsere Lösung:'}
                    </h3>
                    {project.solution[currentLang].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/40 rounded-full flex items-center justify-center text-blue-400 font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                          <p className="text-gray-300 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'results' && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {currentLang === 'uk' ? 'Досягнуті результати:' : currentLang === 'ru' ? 'Достигнутые результаты:' : currentLang === 'en' ? 'Achieved Results:' : 'Erzielte Ergebnisse:'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.results_detailed[currentLang].map((result, i) => (
                        <div key={i} className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <div className="text-green-400 font-semibold mb-1">{result.metric}</div>
                              <div className="text-gray-300 text-sm">{result.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technologies used */}
            <div className="mb-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {currentLang === 'uk' ? 'Використані технології:' : currentLang === 'ru' ? 'Использованные технологии:' : currentLang === 'en' ? 'Technologies Used:' : 'Verwendete Technologien:'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies[currentLang].map((tech, i) => (
                  <div key={i} className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-lg text-white font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                onClick={onClose}
              >
                {currentLang === 'uk' ? 'Замовити подібний проект' : currentLang === 'ru' ? 'Заказать похожий проект' : currentLang === 'en' ? 'Order Similar Project' : 'Ähnliches Projekt bestellen'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                onClick={onClose}
                className="px-8 py-4 bg-white/10 border border-blue-500/30 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                {currentLang === 'uk' ? 'Назад до проектів' : currentLang === 'ru' ? 'Назад к проектам' : currentLang === 'en' ? 'Back to Projects' : 'Zurück zu Projekten'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example of detailed project data structure
export const detailedProjects = [
  {
    id: 1,
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
    tags: ['МКЕ', 'FEM', 'Steel'],
    duration: {
      uk: '3 місяці',
      ru: '3 месяца',
      en: '3 months',
      de: '3 Monate'
    },
    client: {
      uk: 'ТехноПром ООО',
      ru: 'ТехноПром ООО',
      en: 'TechnoProm LLC',
      de: 'TechnoProm GmbH'
    },
    industry: {
      uk: 'Промисловість',
      ru: 'Промышленность',
      en: 'Manufacturing',
      de: 'Fertigung'
    },
    year: '2024',
    overview: {
      uk: 'Проект включав повний цикл розрахунків несучого металевого каркасу виробничого цеху площею 2000 м². Необхідно було забезпечити оптимальне співвідношення міцності, надійності та економічності конструкції.',
      ru: 'Проект включал полный цикл расчетов несущего металлического каркаса производственного цеха площадью 2000 м². Необходимо было обеспечить оптимальное соотношение прочности, надежности и экономичности конструкции.',
      en: 'The project included a full cycle of calculations for the load-bearing metal framework of a 2000 m² production facility. The goal was to ensure optimal balance between strength, reliability and cost-effectiveness.',
      de: 'Das Projekt umfasste einen vollständigen Berechnungszyklus für das tragende Metallgerüst einer 2000 m² Produktionshalle. Ziel war ein optimales Verhältnis zwischen Festigkeit, Zuverlässigkeit und Wirtschaftlichkeit.'
    },
    challenges: {
      uk: [
        'Великі прольоти до 24 метрів без проміжних опор',
        'Висока снігова та вітрова навантаження для регіону',
        'Необхідність розміщення підвісного кранового обладнання',
        'Жорсткі обмеження по бюджету проекту'
      ],
      ru: [
        'Большие пролеты до 24 метров без промежуточных опор',
        'Высокая снеговая и ветровая нагрузка для региона',
        'Необходимость размещения подвесного кранового оборудования',
        'Жесткие ограничения по бюджету проекта'
      ],
      en: [
        'Large spans up to 24 meters without intermediate supports',
        'High snow and wind loads for the region',
        'Need to accommodate overhead crane equipment',
        'Strict project budget constraints'
      ],
      de: [
        'Große Spannweiten bis 24 Meter ohne Zwischenstützen',
        'Hohe Schnee- und Windlasten für die Region',
        'Notwendigkeit zur Aufnahme von Krananlagen',
        'Strenge Budgetbeschränkungen'
      ]
    },
    solution: {
      uk: [
        {
          title: 'Створення 3D моделі',
          description: 'Детальне тривимірне моделювання всіх елементів конструкції з урахуванням вузлів з\'єднання та особливостей монтажу'
        },
        {
          title: 'Статичний аналіз',
          description: 'Розрахунок напружень та деформацій методом скінченних елементів (МСЕ) для різних комбінацій навантажень'
        },
        {
          title: 'Динамічний розрахунок',
          description: 'Аналіз власних частот коливань та перевірка на резонанс при роботі кранового обладнання'
        },
        {
          title: 'Оптимізація',
          description: 'Ітераційний підбір оптимальних перерізів елементів з мінімізацією маси конструкції при збереженні необхідного запасу міцності'
        }
      ],
      ru: [
        {
          title: 'Создание 3D модели',
          description: 'Детальное трехмерное моделирование всех элементов конструкции с учетом узлов соединения и особенностей монтажа'
        },
        {
          title: 'Статический анализ',
          description: 'Расчет напряжений и деформаций методом конечных элементов (МКЭ) для различных комбинаций нагрузок'
        },
        {
          title: 'Динамический расчет',
          description: 'Анализ собственных частот колебаний и проверка на резонанс при работе кранового оборудования'
        },
        {
          title: 'Оптимизация',
          description: 'Итерационный подбор оптимальных сечений элементов с минимизацией массы конструкции при сохранении необходимого запаса прочности'
        }
      ],
      en: [
        {
          title: '3D Modeling',
          description: 'Detailed three-dimensional modeling of all structural elements including connection nodes and installation specifics'
        },
        {
          title: 'Static Analysis',
          description: 'Finite Element Method (FEM) stress and deformation calculations for various load combinations'
        },
        {
          title: 'Dynamic Calculation',
          description: 'Natural frequency analysis and resonance verification during crane equipment operation'
        },
        {
          title: 'Optimization',
          description: 'Iterative selection of optimal element cross-sections minimizing structure mass while maintaining required safety factors'
        }
      ],
      de: [
        {
          title: '3D-Modellierung',
          description: 'Detaillierte dreidimensionale Modellierung aller Strukturelemente einschließlich Verbindungsknoten und Installationsspezifikationen'
        },
        {
          title: 'Statische Analyse',
          description: 'FEM-Spannungs- und Verformungsberechnungen für verschiedene Lastkombinationen'
        },
        {
          title: 'Dynamische Berechnung',
          description: 'Eigenfrequenzanalyse und Resonanzprüfung beim Kranbetrieb'
        },
        {
          title: 'Optimierung',
          description: 'Iterative Auswahl optimaler Elementquerschnitte zur Minimierung der Strukturmasse bei Aufrechterhaltung erforderlicher Sicherheitsfaktoren'
        }
      ]
    },
    results_detailed: {
      uk: [
        { metric: 'Зниження маси на 12%', description: 'Порівняно з початковим проектом' },
        { metric: 'Економія 450 000 грн', description: 'На матеріалах і монтажі' },
        { metric: 'Запас міцності 1.5', description: 'Відповідно до ДБН' },
        { metric: '100% відповідність', description: 'Всім будівельним нормам' }
      ],
      ru: [
        { metric: 'Снижение массы на 12%', description: 'По сравнению с начальным проектом' },
        { metric: 'Экономия 450 000 грн', description: 'На материалах и монтаже' },
        { metric: 'Запас прочности 1.5', description: 'Согласно ДБН' },
        { metric: '100% соответствие', description: 'Всем строительным нормам' }
      ],
      en: [
        { metric: '12% mass reduction', description: 'Compared to initial design' },
        { metric: '450,000 UAH savings', description: 'On materials and installation' },
        { metric: '1.5 safety factor', description: 'According to building codes' },
        { metric: '100% compliance', description: 'With all construction standards' }
      ],
      de: [
        { metric: '12% Massenreduzierung', description: 'Im Vergleich zum ursprünglichen Entwurf' },
        { metric: '450.000 UAH Einsparung', description: 'Bei Material und Montage' },
        { metric: '1,5 Sicherheitsfaktor', description: 'Gemäß Bauvorschriften' },
        { metric: '100% Konformität', description: 'Mit allen Baustandards' }
      ]
    },
    technologies: {
      uk: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'ДБН В.2.6-198:2014', 'Eurocode 3'],
      ru: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'ДБН В.2.6-198:2014', 'Eurocode 3'],
      en: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'Ukrainian Building Codes', 'Eurocode 3'],
      de: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'Ukrainische Bauvorschriften', 'Eurocode 3']
    }
  }
];

export default ProjectDetail;