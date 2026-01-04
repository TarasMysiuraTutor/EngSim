// projectsData.jsx - Дані всіх проектів
import React from 'react';

// Іконки для проектів
const icons = {
  metalStructure: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  heatExchanger: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  ),
  energy: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  ventilation: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  research: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  insulation: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
};

export const projectsData = [
  {
    id: 1,
    icon: icons.metalStructure,
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
    tags: ['МКЕ', 'FEM', 'Steel'],
    results: {
      uk: 'Оптимізація конструкції знизила вагу на 12%',
      ru: 'Оптимизация конструкции снизила вес на 12%',
      en: '12% weight reduction through optimization',
      de: '12% Gewichtsreduzierung durch Optimierung'
    },
    duration: { uk: '3 місяці', ru: '3 месяца', en: '3 months', de: '3 Monate' },
    client: { uk: 'ТехноПром ООО', ru: 'ТехноПром ООО', en: 'TechnoProm LLC', de: 'TechnoProm GmbH' },
    industry: { uk: 'Промисловість', ru: 'Промышленность', en: 'Manufacturing', de: 'Fertigung' },
    year: '2024',
    overview: {
      uk: 'Проект включав повний цикл розрахунків несучого металевого каркасу виробничого цеху площею 2000 м². Необхідно було забезпечити оптимальне співвідношення міцності, надійності та економічності конструкції.',
      ru: 'Проект включал полный цикл расчетов несущего металлического каркаса производственного цеха площадью 2000 м². Необходимо было обеспечить оптимальное соотношение прочности, надежности и экономичности конструкции.',
      en: 'The project included a full cycle of calculations for the load-bearing metal framework of a 2000 m² production facility. The goal was to ensure optimal balance between strength, reliability and cost-effectiveness.',
      de: 'Das Projekt umfasste einen vollständigen Berechnungszyklus für das tragende Metallgerüst einer 2000 m² Produktionshalle.'
    },
    challenges: {
      uk: [
        'Великі прольоти до 24 метрів без проміжних опор',
        'Висока снігова та вітрова навантаження',
        'Розміщення підвісного кранового обладнання',
        'Жорсткі обмеження по бюджету'
      ],
      ru: [
        'Большие пролеты до 24 метров без промежуточных опор',
        'Высокая снеговая и ветровая нагрузка',
        'Размещение подвесного кранового оборудования',
        'Жесткие ограничения по бюджету'
      ],
      en: [
        'Large spans up to 24 meters without supports',
        'High snow and wind loads',
        'Overhead crane equipment placement',
        'Strict budget constraints'
      ],
      de: [
        'Große Spannweiten bis 24 Meter',
        'Hohe Schnee- und Windlasten',
        'Kranausrüstung Platzierung',
        'Budgetbeschränkungen'
      ]
    },
    solution: {
      uk: [
        { title: '3D моделювання', description: 'Детальне моделювання всіх елементів конструкції' },
        { title: 'Статичний аналіз', description: 'МСЕ розрахунок для різних навантажень' },
        { title: 'Динамічний розрахунок', description: 'Аналіз власних частот коливань' },
        { title: 'Оптимізація', description: 'Підбір оптимальних перерізів елементів' }
      ],
      ru: [
        { title: '3D моделирование', description: 'Детальное моделирование всех элементов конструкции' },
        { title: 'Статический анализ', description: 'МКЭ расчет для различных нагрузок' },
        { title: 'Динамический расчет', description: 'Анализ собственных частот колебаний' },
        { title: 'Оптимизация', description: 'Подбор оптимальных сечений элементов' }
      ],
      en: [
        { title: '3D Modeling', description: 'Detailed modeling of all structural elements' },
        { title: 'Static Analysis', description: 'FEM calculations for various loads' },
        { title: 'Dynamic Calculation', description: 'Natural frequency analysis' },
        { title: 'Optimization', description: 'Optimal cross-section selection' }
      ],
      de: [
        { title: '3D-Modellierung', description: 'Detaillierte Modellierung aller Elemente' },
        { title: 'Statische Analyse', description: 'FEM-Berechnungen für Lasten' },
        { title: 'Dynamische Berechnung', description: 'Eigenfrequenzanalyse' },
        { title: 'Optimierung', description: 'Optimale Querschnittswahl' }
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
        { metric: 'Снижение массы на 12%', description: 'По сравнению с начальным' },
        { metric: 'Экономия 450 000 грн', description: 'На материалах и монтаже' },
        { metric: 'Запас прочности 1.5', description: 'Согласно ДБН' },
        { metric: '100% соответствие', description: 'Всем нормам' }
      ],
      en: [
        { metric: '12% mass reduction', description: 'Vs initial design' },
        { metric: '450,000 UAH savings', description: 'On materials' },
        { metric: '1.5 safety factor', description: 'Per building codes' },
        { metric: '100% compliance', description: 'With standards' }
      ],
      de: [
        { metric: '12% Reduzierung', description: 'Vs Ursprungsentwurf' },
        { metric: '450.000 UAH', description: 'Einsparung' },
        { metric: '1,5 Sicherheit', description: 'Gemäß Normen' },
        { metric: '100% Konform', description: 'Mit Standards' }
      ]
    },
    technologies: {
      uk: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'ДБН В.2.6-198', 'Eurocode 3'],
      ru: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'ДБН В.2.6-198', 'Eurocode 3'],
      en: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'Building Codes', 'Eurocode 3'],
      de: ['ANSYS Mechanical', 'SolidWorks', 'AutoCAD', 'Bauvorschriften', 'Eurocode 3']
    }
  },
  {
    id: 2,
    icon: icons.heatExchanger,
    title: {
      uk: 'Теплообмінник для хімзаводу',
      ru: 'Теплообменник для химзавода',
      en: 'Heat Exchanger for Chemical Plant',
      de: 'Wärmetauscher für Chemiewerk'
    },
    desc: {
      uk: 'Проектування пластинчастого теплообмінника',
      ru: 'Проектирование пластинчатого теплообменника',
      en: 'Plate heat exchanger design',
      de: 'Plattenwärmetauscher-Design'
    },
    tags: ['CFD', 'Thermal', 'Chemical'],
    results: {
      uk: 'Підвищення ефективності на 18%',
      ru: 'Повышение эффективности на 18%',
      en: '18% efficiency improvement',
      de: '18% Effizienzsteigerung'
    },
    duration: { uk: '2 місяці', ru: '2 месяца', en: '2 months', de: '2 Monate' },
    client: { uk: 'ХімПром', ru: 'ХимПром', en: 'ChemProm', de: 'ChemProm' },
    industry: { uk: 'Хімічна', ru: 'Химическая', en: 'Chemical', de: 'Chemie' },
    year: '2023',
    overview: {
      uk: 'Розробка високоефективного пластинчастого теплообмінника для процесів хімічного виробництва. CFD-моделювання потоків та підбір матеріалів стійких до агресивного середовища.',
      ru: 'Разработка высокоэффективного пластинчатого теплообменника для процессов химического производства. CFD-моделирование потоков и подбор материалов устойчивых к агрессивной среде.',
      en: 'Development of high-efficiency plate heat exchanger for chemical production processes. CFD flow modeling and selection of corrosion-resistant materials.',
      de: 'Entwicklung eines hocheffizienten Plattenwärmetauschers für chemische Produktionsprozesse.'
    },
    challenges: {
      uk: ['Агресивне хімічне середовище', 'Високі температури до 250°C', 'Вимоги до чистоти продукту', 'Мінімізація втрат тиску'],
      ru: ['Агрессивная химическая среда', 'Высокие температуры до 250°C', 'Требования к чистоте продукта', 'Минимизация потерь давления'],
      en: ['Aggressive chemical environment', 'High temperatures up to 250°C', 'Product purity requirements', 'Pressure loss minimization'],
      de: ['Aggressive Umgebung', 'Hohe Temperaturen bis 250°C', 'Produktreinheit', 'Druckverlustminimierung']
    },
    solution: {
      uk: [
        { title: 'CFD моделювання', description: 'Детальний аналіз потоків рідини та теплообміну' },
        { title: 'Підбір матеріалів', description: 'Нержавіюча сталь 316L для корозійної стійкості' },
        { title: 'Теплові розрахунки', description: 'Оптимізація площі теплообмінної поверхні' },
        { title: 'Гідродинаміка', description: 'Мінімізація втрат тиску при максимальній ефективності' }
      ],
      ru: [
        { title: 'CFD моделирование', description: 'Детальный анализ потоков жидкости и теплообмена' },
        { title: 'Подбор материалов', description: 'Нержавеющая сталь 316L для коррозионной стойкости' },
        { title: 'Тепловые расчеты', description: 'Оптимизация площади теплообменной поверхности' },
        { title: 'Гидродинамика', description: 'Минимизация потерь давления при максимальной эффективности' }
      ],
      en: [
        { title: 'CFD modeling', description: 'Detailed fluid flow and heat transfer analysis' },
        { title: 'Material selection', description: 'Stainless steel 316L for corrosion resistance' },
        { title: 'Thermal calculations', description: 'Heat transfer surface area optimization' },
        { title: 'Hydrodynamics', description: 'Pressure loss minimization with maximum efficiency' }
      ],
      de: [
        { title: 'CFD-Modellierung', description: 'Detaillierte Strömungsanalyse' },
        { title: 'Materialauswahl', description: 'Edelstahl 316L' },
        { title: 'Wärmeberechnung', description: 'Flächenoptimierung' },
        { title: 'Hydrodynamik', description: 'Druckverlustminimierung' }
      ]
    },
    results_detailed: {
      uk: [
        { metric: '+18% ефективність', description: 'Теплопередачі порівняно з попереднім' },
        { metric: '-25% втрати тиску', description: 'Завдяки оптимізованій геометрії' },
        { metric: '99.9% чистота', description: 'Відповідність стандартам якості' },
        { metric: '15 років', description: 'Прогнозований термін служби' }
      ],
      ru: [
        { metric: '+18% эффективность', description: 'Теплопередачи по сравнению с предыдущим' },
        { metric: '-25% потери давления', description: 'Благодаря оптимизированной геометрии' },
        { metric: '99.9% чистота', description: 'Соответствие стандартам качества' },
        { metric: '15 лет', description: 'Прогнозируемый срок службы' }
      ],
      en: [
        { metric: '+18% efficiency', description: 'Heat transfer vs previous design' },
        { metric: '-25% pressure loss', description: 'Due to optimized geometry' },
        { metric: '99.9% purity', description: 'Meeting quality standards' },
        { metric: '15 years', description: 'Projected service life' }
      ],
      de: [
        { metric: '+18% Effizienz', description: 'Wärmeübertragung' },
        { metric: '-25% Druckverlust', description: 'Optimierte Geometrie' },
        { metric: '99,9% Reinheit', description: 'Qualitätsstandards' },
        { metric: '15 Jahre', description: 'Lebensdauer' }
      ]
    },
    technologies: {
      uk: ['ANSYS Fluent', 'COMSOL Multiphysics', 'SolidWorks', 'Нерж. сталь 316L', 'ASME BPE'],
      ru: ['ANSYS Fluent', 'COMSOL Multiphysics', 'SolidWorks', 'Нерж. сталь 316L', 'ASME BPE'],
      en: ['ANSYS Fluent', 'COMSOL Multiphysics', 'SolidWorks', 'Stainless 316L', 'ASME BPE'],
      de: ['ANSYS Fluent', 'COMSOL Multiphysics', 'SolidWorks', 'Edelstahl 316L', 'ASME BPE']
    }
  },
  {
    id: 3,
    icon: icons.energy,
    title: {
      uk: 'Енергоефективність котельні',
      ru: 'Энергоэффективность котельной',
      en: 'Boiler House Energy Efficiency',
      de: 'Energieeffizienz des Kesselhauses'
    },
    desc: {
      uk: 'Термодинамічний аналіз роботи котельні',
      ru: 'Термодинамический анализ работы котельной',
      en: 'Thermodynamic analysis of boiler house',
      de: 'Thermodynamische Analyse des Kesselhauses'
    },
    tags: ['Audit', 'Optimization', 'Energy'],
    results: {
      uk: 'Економія 200 000 грн/рік',
      ru: 'Экономия 200 000 грн/год',
      en: '200,000 UAH/year savings',
      de: '200.000 UAH/Jahr Einsparungen'
    },
    duration: { uk: '1 місяць', ru: '1 месяц', en: '1 month', de: '1 Monat' },
    client: { uk: 'ЕнергоБуд', ru: 'ЭнергоСтрой', en: 'EnergyBuild', de: 'EnergieBau' },
    industry: { uk: 'Енергетика', ru: 'Энергетика', en: 'Energy', de: 'Energie' },
    year: '2023',
    overview: {
      uk: 'Комплексний енергоаудит промислової котельні потужністю 5 МВт. Аналіз термодинамічних циклів, оптимізація режимів роботи та впровадження енергозберігаючих технологій.',
      ru: 'Комплексный энергоаудит промышленной котельной мощностью 5 МВт. Анализ термодинамических циклов, оптимизация режимов работы и внедрение энергосберегающих технологий.',
      en: 'Comprehensive energy audit of 5 MW industrial boiler house. Thermodynamic cycle analysis and energy-saving technology implementation.',
      de: 'Umfassendes Energieaudit eines 5-MW-Kesselhauses.'
    },
    challenges: {
      uk: ['Застаріле обладнання', 'Низький ККД 72%', 'Високі витрати палива', 'Відсутність автоматизації'],
      ru: ['Устаревшее оборудование', 'Низкий КПД 72%', 'Высокие расходы топлива', 'Отсутствие автоматизации'],
      en: ['Outdated equipment', 'Low efficiency 72%', 'High fuel costs', 'Lack of automation'],
      de: ['Veraltete Ausrüstung', 'Niedriger Wirkungsgrad 72%', 'Hohe Kosten', 'Keine Automatisierung']
    },
    solution: {
      uk: [
        { title: 'Енергоаудит', description: 'Повне обстеження та вимірювання параметрів' },
        { title: 'Термодинамічний аналіз', description: 'Розрахунок втрат на кожному етапі' },
        { title: 'Економайзери', description: 'Встановлення для утилізації тепла димових газів' },
        { title: 'Автоматизація', description: 'Система автоматичного регулювання' }
      ],
      ru: [
        { title: 'Энергоаудит', description: 'Полное обследование и измерение параметров' },
        { title: 'Термодинамический анализ', description: 'Расчет потерь на каждом этапе' },
        { title: 'Экономайзеры', description: 'Установка для утилизации тепла' },
        { title: 'Автоматизация', description: 'Система регулирования' }
      ],
      en: [
        { title: 'Energy audit', description: 'Complete inspection and measurement' },
        { title: 'Thermodynamic analysis', description: 'Loss calculation at each stage' },
        { title: 'Economizers', description: 'Flue gas heat recovery' },
        { title: 'Automation', description: 'Automatic control system' }
      ],
      de: [
        { title: 'Energieaudit', description: 'Vollständige Inspektion' },
        { title: 'Thermodynamik', description: 'Verlustberechnung' },
        { title: 'Economizer', description: 'Wärmerückgewinnung' },
        { title: 'Automatisierung', description: 'Kontrollsystem' }
      ]
    },
    results_detailed: {
      uk: [
        { metric: 'ККД 87%', description: 'Підвищення з 72% до 87%' },
        { metric: '-30% палива', description: 'Зниження споживання' },
        { metric: '200 000 грн/рік', description: 'Економія коштів' },
        { metric: '2 роки', description: 'Термін окупності' }
      ],
      ru: [
        { metric: 'КПД 87%', description: 'Повышение с 72% до 87%' },
        { metric: '-30% топлива', description: 'Снижение потребления' },
        { metric: '200 000 грн/год', description: 'Экономия средств' },
        { metric: '2 года', description: 'Срок окупаемости' }
      ],
      en: [
        { metric: '87% efficiency', description: 'Increased from 72%' },
        { metric: '-30% fuel', description: 'Consumption reduction' },
        { metric: '200,000 UAH/year', description: 'Cost savings' },
        { metric: '2 years', description: 'Payback period' }
      ],
      de: [
        { metric: '87% Wirkungsgrad', description: 'Von 72% auf 87%' },
        { metric: '-30% Brennstoff', description: 'Reduzierung' },
        { metric: '200.000 UAH/Jahr', description: 'Einsparungen' },
        { metric: '2 Jahre', description: 'Amortisation' }
      ]
    },
    technologies: {
      uk: ['Тепловізор FLIR', 'Газоаналізатор Testo', 'Excel + VBA', 'Витратоміри', 'SCADA'],
      ru: ['Тепловизор FLIR', 'Газоанализатор Testo', 'Excel + VBA', 'Расходомеры', 'SCADA'],
      en: ['FLIR Thermal Camera', 'Testo Gas Analyzer', 'Excel + VBA', 'Flow Meters', 'SCADA'],
      de: ['FLIR Wärmebildkamera', 'Testo Gasanalysator', 'Excel + VBA', 'Durchflussmesser', 'SCADA']
    }
  },
  {
    id: 4,
    icon: icons.ventilation,
    title: {
      uk: 'Система вентиляції заводу',
      ru: 'Система вентиляции завода',
      en: 'Factory Ventilation System',
      de: 'Werkslüftungssystem'
    },
    desc: {
      uk: 'Розрахунок аеродинаміки повітропроводів',
      ru: 'Расчет аэродинамики воздуховодов',
      en: 'Air duct aerodynamics calculation',
      de: 'Luftkanalerodynamik-Berechnung'
    },
    tags: ['Aerodynamics', 'Ventilation', '3D'],
    results: {
      uk: 'Відповідність всім нормам ДСН',
      ru: 'Соответствие всем нормам ДСН',
      en: 'Full compliance with standards',
      de: 'Vollständige Einhaltung'
    },
    duration: { uk: '2.5 місяця', ru: '2.5 месяца', en: '2.5 months', de: '2,5 Monate' },
    client: { uk: 'Промтех', ru: 'Промтех', en: 'PromTech', de: 'PromTech' },
    industry: { uk: 'Виробництво', ru: 'Производство', en: 'Manufacturing', de: 'Fertigung' },
    year: '2024',
    overview: {
      uk: 'Проектування системи промислової вентиляції для заводу з обробки металу. 3D моделювання розповсюдження забруднень.',
      ru: 'Проектирование системы промышленной вентиляции для завода по обработке металла. 3D моделирование распространения загрязнений.',
      en: 'Industrial ventilation system design for metal processing plant. 3D pollution dispersion modeling.',
      de: 'Industrielle Lüftungssystemplanung für Metallverarbeitungswerk.'
    },
    challenges: {
      uk: ['Високі концентрації пилу', 'Складна геометрія цеху', 'Обмеження по шуму', 'Енергоефективність'],
      ru: ['Высокие концентрации пыли', 'Сложная геометрия цеха', 'Ограничения по шуму', 'Энергоэффективность'],
      en: ['High dust concentrations', 'Complex geometry', 'Noise limitations', 'Energy efficiency'],
      de: ['Hohe Staubkonzentrationen', 'Komplexe Geometrie', 'Lärmgrenzen', 'Energieeffizienz']
    },
    solution: {
      uk: [
        { title: 'CFD моделювання', description: '3D аналіз потоків повітря' },
        { title: 'Аеродинамічні розрахунки', description: 'Оптимізація геометрії' },
        { title: 'Підбір обладнання', description: 'Вентилятори та фільтри' },
        { title: 'Акустичний аналіз', description: 'Розрахунок шумозахисту' }
      ],
      ru: [
        { title: 'CFD моделирование', description: '3D анализ потоков воздуха' },
        { title: 'Аэродинамические расчеты', description: 'Оптимизация геометрии' },
        { title: 'Подбор оборудования', description: 'Вентиляторы и фильтры' },
        { title: 'Акустический анализ', description: 'Расчет шумозащиты' }
      ],
      en: [
        { title: 'CFD modeling', description: '3D air flow analysis' },
        { title: 'Aerodynamic calculations', description: 'Geometry optimization' },
        { title: 'Equipment selection', description: 'Fans and filters' },
        { title: 'Acoustic analysis', description: 'Noise protection' }
      ],
      de: [
        { title: 'CFD-Modellierung', description: '3D-Luftstromanalyse' },
        { title: 'Aerodynamik', description: 'Geometrieoptimierung' },
        { title: 'Geräteauswahl', description: 'Ventilatoren und Filter' },
        { title: 'Akustische Analyse', description: 'Lärmschutz' }
      ]
    },
    results_detailed: {
      uk: [
        { metric: '95% очищення', description: 'Ефективність фільтрації пилу' },
        { metric: '< 65 дБ', description: 'Рівень шуму відповідає нормам' },
        { metric: '-40% енергії', description: 'Порівняно з попереднім проектом' },
        { metric: '100% ДСН', description: 'Відповідність санітарним нормам' }
      ],
      ru: [
        { metric: '95% очистка', description: 'Эффективность фильтрации' },
        { metric: '< 65 дБ', description: 'Уровень шума' },
        { metric: '-40% энергии', description: 'Экономия' },
        { metric: '100% ДСН', description: 'Соответствие нормам' }
      ],
      en: [
        { metric: '95% cleaning', description: 'Filtration efficiency' },
        { metric: '< 65 dB', description: 'Noise level' },
        { metric: '-40% energy', description: 'Energy savings' },
        { metric: '100% compliant', description: 'With standards' }
      ],
      de: [
        { metric: '95% Reinigung', description: 'Filtrationseffizienz' },
        { metric: '< 65 dB', description: 'Lärmpegel' },
        { metric: '-40% Energie', description: 'Einsparungen' },
        { metric: '100% konform', description: 'Mit Standards' }
      ]
    },
    technologies: {
      uk: ['ANSYS CFX', 'SolidWorks Flow Simulation', 'AutoCAD MEP', 'Акустичне ПО', 'ДБН В.2.5-67'],
      ru: ['ANSYS CFX', 'SolidWorks Flow Simulation', 'AutoCAD MEP', 'Акустическое ПО', 'ДБН В.2.5-67'],
      en: ['ANSYS CFX', 'SolidWorks Flow Simulation', 'AutoCAD MEP', 'Acoustic Software', 'Codes'],
      de: ['ANSYS CFX', 'SolidWorks Flow Simulation', 'AutoCAD MEP', 'Akustiksoftware', 'Normen']
    }
  },
  {
    id: 5,
    icon: icons.research,
    title: {
      uk: 'Дослідження матеріалів',
      ru: 'Исследование материалов',
      en: 'Material Research',
      de: 'Materialforschung'
    },
    desc: {
      uk: 'Експериментальне визначення властивостей композитів',
      ru: 'Экспериментальное определение свойств композитов',
      en: 'Experimental composite properties determination',
      de: 'Experimentelle Verbundwerkstoffbestimmung'
    },
    tags: ['Testing', 'Composites', 'Lab'],
    results: {
      uk: 'База даних властивостей матеріалів',
      ru: 'База данных свойств материалов',
      en: 'Material properties database',
      de: 'Materialeigenschaften-Datenbank'
    },
    duration: { uk: '4 місяці', ru: '4 месяца', en: '4 months', de: '4 Monate' },
    client: { uk: 'НДІ Матеріалів', ru: 'НИИ Материалов', en: 'Materials Institute', de: 'Materialinstitut' },
    industry: { uk: 'Наукові дослідження', ru: 'Научные исследования', en: 'Research', de: 'Forschung' },
    year: '2023',
    overview: {
      uk: 'Комплексне дослідження механічних та теплових властивостей нових композитних матеріалів для аерокосмічної галузі.',
      ru: 'Комплексное исследование механических и тепловых свойств новых композитных материалов для аэрокосмической отрасли.',
      en: 'Comprehensive study of mechanical and thermal properties of new composite materials for aerospace.',
      de: 'Umfassende Studie der Eigenschaften neuer Verbundwerkstoffe für Luft- und Raumfahrt.'
    },
    challenges: {
      uk: ['Висока анізотропія властивостей', 'Температурна залежність', 'Складність виготовлення зразків', 'Відсутність стандартів'],
      ru: ['Высокая анизотропия свойств', 'Температурная зависимость', 'Сложность изготовления образцов', 'Отсутствие стандартов'],
      en: ['High property anisotropy', 'Temperature dependency', 'Sample complexity', 'Lack of standards'],
      de: ['Hohe Anisotropie', 'Temperaturabhängigkeit', 'Probenkomplexität', 'Fehlende Standards']
    },
    solution: {
      uk: [
        { title: 'Механічні випробування', description: 'Розтяг, стиск, згин, зсув' },
        { title: 'Теплові дослідження', description: 'Теплопровідність, теплоємність' },
        { title: 'Математичне моделювання', description: 'Конститутивні рівняння' },
        { title: 'База даних', description: 'Систематизація результатів' }
      ],
      ru: [
        { title: 'Механические испытания', description: 'Растяжение, сжатие, изгиб' },
        { title: 'Тепловые исследования', description: 'Теплопроводность, теплоемкость' },
        { title: 'Математическое моделирование', description: 'Конститутивные уравнения' },
        { title: 'База данных', description: 'Систематизация результатов' }
      ],
      en: [
        { title: 'Mechanical testing', description: 'Tension, compression, bending' },
        { title: 'Thermal research', description: 'Thermal conductivity, heat capacity' },
        { title: 'Mathematical modeling', description: 'Constitutive equations' },
        { title: 'Database', description: 'Results systematization' }
      ],
      de: [
        { title: 'Mechanische Tests', description: 'Zug, Druck, Biegung' },
        { title: 'Thermische Forschung', description: 'Wärmeleitfähigkeit' },
        { title: 'Modellierung', description: 'Gleichungen' },
        { title: 'Datenbank', description: 'Systematisierung' }
      ]
    },
    results_detailed: {
      uk: [
        { metric: '120+ зразків', description: 'Випробувано' },
        { metric: '15 параметрів', description: 'Визначено' },
        { metric: 'База даних', description: 'Створена' },
        { metric: '3 публікації', description: 'У журналах' }
      ],
      ru: [
        { metric: '120+ образцов', description: 'Испытано' },
        { metric: '15 параметров', description: 'Определено' },
        { metric: 'База данных', description: 'Создана' },
        { metric: '3 публикации', description: 'В журналах' }
      ],
      en: [
        { metric: '120+ samples', description: 'Tested' },
        { metric: '15 parameters', description: 'Determined' },
        { metric: 'Database', description: 'Created' },
        { metric: '3 publications', description: 'In journals' }
      ],
      de: [
        { metric: '120+ Proben', description: 'Getestet' },
        { metric: '15 Parameter', description: 'Bestimmt' },
        { metric: 'Datenbank', description: 'Erstellt' },
        { metric: '3 Publikationen', description: 'In Zeitschriften' }
      ]
    },
    technologies: {
      uk: ['Instron 5985', 'DSC/TGA', 'MATLAB', 'Python', 'ASTM D3039', 'ISO 527'],
      ru: ['Instron 5985', 'DSC/TGA', 'MATLAB', 'Python', 'ASTM D3039', 'ISO 527'],
      en: ['Instron 5985', 'DSC/TGA', 'MATLAB', 'Python', 'ASTM D3039', 'ISO 527'],
      de: ['Instron 5985', 'DSC/TGA', 'MATLAB', 'Python', 'ASTM D3039', 'ISO 527']
    }
  },
  {
    id: 6,
    icon: icons.insulation,
    title: {
      uk: 'Теплоізоляція трубопроводів',
      ru: 'Теплоизоляция трубопроводов',
      en: 'Pipeline Thermal Insulation',
      de: 'Rohrleitungswärmedämmung'
    },
    desc: {
      uk: 'Розрахунок оптимальної товщини теплоізоляції',
      ru: 'Расчет оптимальной толщины теплоизоляции',
      en: 'Optimal insulation thickness calculation',
      de: 'Optimale Dämmdickenberechnung'
    },
    tags: ['Insulation', 'Heat Loss', 'Pipes'],
    results: {
      uk: 'Зниження втрат тепла на 40%',
      ru: 'Снижение потерь тепла на 40%',
      en: '40% heat loss reduction',
      de: '40% Wärmeverlustreduktion'
    },
    duration: { uk: '1.5 місяця', ru: '1.5 месяца', en: '1.5 months', de: '1,5 Monate' },
    client: { uk: 'Теплоенерго', ru: 'Теплоэнерго', en: 'HeatEnergy', de: 'WärmeEnergie' },
    industry: { uk: 'Теплопостачання', ru: 'Теплоснабжение', en: 'Heat Supply', de: 'Wärmeversorgung' },
    year: '2024',
    overview: {
      uk: 'Техніко-економічне обґрунтування оптимальної товщини теплоізоляції для системи парових трубопроводів довжиною 2.5 км.',
      ru: 'Технико-экономическое обоснование оптимальной толщины теплоизоляции для системы паровых трубопроводов длиной 2.5 км.',
      en: 'Technical and economic justification of optimal insulation thickness for 2.5 km steam pipeline system.',
      de: 'Technische und wirtschaftliche Begründung der optimalen Dämmdicke für 2,5 km Dampfleitungssystem.'
    },
    challenges: {
      uk: ['Різні діаметри труб', 'Високі температури до 300°C', 'Зовнішнє розташування', 'Обмежений бюджет'],
      ru: ['Разные диаметры труб', 'Высокие температуры до 300°C', 'Внешнее расположение', 'Ограниченный бюджет'],
      en: ['Various pipe diameters', 'High temperatures up to 300°C', 'Outdoor location', 'Limited budget'],
      de: ['Verschiedene Durchmesser', 'Hohe Temperaturen bis 300°C', 'Außenstandort', 'Budget']
    },
    solution: {
      uk: [
        { title: 'Теплові розрахунки', description: 'Втрати тепла для різних товщин' },
        { title: 'Економічний аналіз', description: 'Вартість vs економія' },
        { title: 'Підбір матеріалів', description: 'Мінеральна вата' },
        { title: 'Окупність', description: 'Розрахунок терміну' }
      ],
      ru: [
        { title: 'Тепловые расчеты', description: 'Потери тепла' },
        { title: 'Экономический анализ', description: 'Стоимость vs экономия' },
        { title: 'Подбор материалов', description: 'Минеральная вата' },
        { title: 'Окупаемость', description: 'Расчет срока' }
      ],
      en: [
        { title: 'Thermal calculations', description: 'Heat loss analysis' },
        { title: 'Economic analysis', description: 'Cost vs savings' },
        { title: 'Material selection', description: 'Mineral wool' },
        { title: 'Payback', description: 'Period calculation' }
      ],
      de: [
        { title: 'Wärmeberechnungen', description: 'Wärmeverlustanalyse' },
        { title: 'Wirtschaftsanalyse', description: 'Kosten vs Einsparungen' },
        { title: 'Materialauswahl', description: 'Mineralwolle' },
        { title: 'Amortisation', description: 'Zeitberechnung' }
      ]
    },
    results_detailed: {
      uk: [
        { metric: '-40% втрати тепла', description: 'З 850 кВт до 510 кВт' },
        { metric: '180 000 грн/рік', description: 'Економія' },
        { metric: '3.2 року', description: 'Термін окупності' },
        { metric: '25+ років', description: 'Термін служби' }
      ],
      ru: [
        { metric: '-40% потери тепла', description: 'С 850 кВт до 510 кВт' },
        { metric: '180 000 грн/год', description: 'Экономия' },
        { metric: '3.2 года', description: 'Срок окупаемости' },
        { metric: '25+ лет', description: 'Срок службы' }
      ],
      en: [
        { metric: '-40% heat loss', description: 'From 850 kW to 510 kW' },
        { metric: '180,000 UAH/year', description: 'Savings' },
        { metric: '3.2 years', description: 'Payback period' },
        { metric: '25+ years', description: 'Service life' }
      ],
      de: [
        { metric: '-40% Wärmeverlust', description: 'Von 850 kW auf 510 kW' },
        { metric: '180.000 UAH/Jahr', description: 'Einsparungen' },
        { metric: '3,2 Jahre', description: 'Amortisation' },
        { metric: '25+ Jahre', description: 'Lebensdauer' }
      ]
    },
    technologies: {
      uk: ['Excel VBA', 'ДБН В.2.6-31', 'Мінеральна вата', 'Тепловізор', 'NPV аналіз'],
      ru: ['Excel VBA', 'ДБН В.2.6-31', 'Минеральная вата', 'Тепловизор', 'NPV анализ'],
      en: ['Excel VBA', 'Building Codes', 'Mineral Wool', 'Thermal Camera', 'NPV Analysis'],
      de: ['Excel VBA', 'Bauvorschriften', 'Mineralwolle', 'Wärmebildkamera', 'NPV-Analyse']
    }
  }
];