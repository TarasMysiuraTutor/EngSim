// src/data/reference/massTransfer/files/index.js
export const massTransferFiles = {
  diagrams: [
    {
      id: 'mccabe_thiele_diagram',
      category: 'distillation',
      title: {
        uk: 'Діаграма МакКейба-Тіле',
        ru: 'Диаграмма МакКейба-Тиле',
        en: 'McCabe-Thiele Diagram',
        de: 'McCabe-Thiele-Diagramm'
      },
      description: {
        uk: 'Графічний метод розрахунку ректифікаційних колон',
        ru: 'Графический метод расчета ректификационных колонн',
        en: 'Graphical method for distillation column design',
        de: 'Grafische Methode für Destillationskolonnenentwurf'
      },
      filename: 'mccabe_thiele.png',
      path: '/assets/massTransfer/diagrams/mccabe_thiele.png',
      type: 'diagram',
      format: 'png'
    },
    {
      id: 'equilibrium_curve',
      category: 'distillation',
      title: {
        uk: 'Криві рівноваги',
        ru: 'Кривые равновесия',
        en: 'Equilibrium Curves',
        de: 'Gleichgewichtskurven'
      },
      description: {
        uk: 'Діаграма y-x для типових бінарних систем',
        ru: 'Диаграмма y-x для типичных бинарных систем',
        en: 'y-x diagram for typical binary systems',
        de: 'y-x-Diagramm für typische binäre Systeme'
      },
      filename: 'equilibrium_curves.svg',
      path: '/assets/massTransfer/diagrams/equilibrium_curves.svg',
      type: 'diagram',
      format: 'svg'
    },
    {
      id: 'absorption_column_scheme',
      category: 'absorption',
      title: {
        uk: 'Схема абсорбційної колони',
        ru: 'Схема абсорбционной колонны',
        en: 'Absorption Column Scheme',
        de: 'Absorptionskolonnenschema'
      },
      description: {
        uk: 'Принципова схема насадкової абсорбційної колони',
        ru: 'Принципиальная схема насадочной абсорбционной колонны',
        en: 'Schematic of packed absorption column',
        de: 'Schema der gepackten Absorptionskolonne'
      },
      filename: 'absorption_column.svg',
      path: '/assets/massTransfer/diagrams/absorption_column.svg',
      type: 'diagram',
      format: 'svg'
    },
    {
      id: 'adsorption_isotherms',
      category: 'adsorption',
      title: {
        uk: 'Типи ізотерм адсорбції',
        ru: 'Типы изотерм адсорбции',
        en: 'Types of Adsorption Isotherms',
        de: 'Arten von Adsorptionsisothermen'
      },
      description: {
        uk: 'Класифікація ізотерм за Брунауером (I-V типи)',
        ru: 'Классификация изотерм по Брунауэру (I-V типы)',
        en: 'Brunauer classification of isotherms (Types I-V)',
        de: 'Brunauer-Klassifikation der Isothermen (Typen I-V)'
      },
      filename: 'adsorption_isotherms.png',
      path: '/assets/massTransfer/diagrams/adsorption_isotherms.png',
      type: 'diagram',
      format: 'png'
    },
    {
      id: 'drying_curve',
      category: 'drying',
      title: {
        uk: 'Крива сушіння',
        ru: 'Кривая сушки',
        en: 'Drying Curve',
        de: 'Trocknungskurve'
      },
      description: {
        uk: 'Залежність вологості та швидкості сушіння від часу',
        ru: 'Зависимость влажности и скорости сушки от времени',
        en: 'Moisture content and drying rate vs time',
        de: 'Feuchtigkeitsgehalt und Trocknungsrate vs Zeit'
      },
      filename: 'drying_curve.svg',
      path: '/assets/massTransfer/diagrams/drying_curve.svg',
      type: 'diagram',
      format: 'svg'
    },
    {
      id: 'psychrometric_chart',
      category: 'drying',
      title: {
        uk: 'Психрометрична діаграма',
        ru: 'Психрометрическая диаграмма',
        en: 'Psychrometric Chart',
        de: 'Psychrometrisches Diagramm'
      },
      description: {
        uk: 'I-d діаграма вологого повітря',
        ru: 'I-d диаграмма влажного воздуха',
        en: 'h-w diagram for humid air',
        de: 'h-x-Diagramm für feuchte Luft'
      },
      filename: 'psychrometric_chart.png',
      path: '/assets/massTransfer/diagrams/psychrometric_chart.png',
      type: 'diagram',
      format: 'png'
    }
  ],
  
  documents: [
    {
      id: 'mass_transfer_handbook',
      category: 'diffusion',
      title: {
        uk: 'Довідник з масообмінних процесів',
        ru: 'Справочник по массообменным процессам',
        en: 'Mass Transfer Handbook',
        de: 'Stoffübertragungshandbuch'
      },
      description: {
        uk: 'Повний довідник з коефіцієнтами дифузії, масовіддачі та кореляціями',
        ru: 'Полный справочник по коэффициентам диффузии, массоотдачи и корреляциям',
        en: 'Complete handbook of diffusion coefficients, mass transfer coefficients and correlations',
        de: 'Vollständiges Handbuch der Diffusionskoeffizienten, Stoffübergangskoeffizienten und Korrelationen'
      },
      filename: 'mass_transfer_handbook.pdf',
      path: '/assets/massTransfer/documents/mass_transfer_handbook.pdf',
      type: 'document',
      format: 'pdf',
      pages: 342,
      size: '8.5 MB'
    },
    {
      id: 'distillation_design_guide',
      category: 'distillation',
      title: {
        uk: 'Посібник з проектування ректифікаційних колон',
        ru: 'Пособие по проектированию ректификационных колонн',
        en: 'Distillation Column Design Guide',
        de: 'Leitfaden für Destillationskolonnenentwurf'
      },
      description: {
        uk: 'Методики розрахунку, вибір обладнання, приклади',
        ru: 'Методики расчета, выбор оборудования, примеры',
        en: 'Calculation methods, equipment selection, examples',
        de: 'Berechnungsmethoden, Geräteauswahl, Beispiele'
      },
      filename: 'distillation_design.pdf',
      path: '/assets/massTransfer/documents/distillation_design.pdf',
      type: 'document',
      format: 'pdf',
      pages: 156,
      size: '4.2 MB'
    },
    {
      id: 'absorption_stripping',
      category: 'absorption',
      title: {
        uk: 'Абсорбція та десорбція',
        ru: 'Абсорбция и десорбция',
        en: 'Absorption and Stripping',
        de: 'Absorption und Strippen'
      },
      description: {
        uk: 'Теорія, розрахунки, промислові застосування',
        ru: 'Теория, расчеты, промышленные применения',
        en: 'Theory, calculations, industrial applications',
        de: 'Theorie, Berechnungen, industrielle Anwendungen'
      },
      filename: 'absorption_stripping.pdf',
      path: '/assets/massTransfer/documents/absorption_stripping.pdf',
      type: 'document',
      format: 'pdf',
      pages: 98,
      size: '2.8 MB'
    },
    {
      id: 'adsorption_processes',
      category: 'adsorption',
      title: {
        uk: 'Адсорбційні процеси в хімічній технології',
        ru: 'Адсорбционные процессы в химической технологии',
        en: 'Adsorption Processes in Chemical Engineering',
        de: 'Adsorptionsprozesse in der Chemietechnik'
      },
      description: {
        uk: 'Адсорбенти, ізотерми, динаміка адсорбції',
        ru: 'Адсорбенты, изотермы, динамика адсорбции',
        en: 'Adsorbents, isotherms, adsorption dynamics',
        de: 'Adsorbentien, Isothermen, Adsorptionsdynamik'
      },
      filename: 'adsorption_processes.pdf',
      path: '/assets/massTransfer/documents/adsorption_processes.pdf',
      type: 'document',
      format: 'pdf',
      pages: 215,
      size: '6.1 MB'
    },
    {
      id: 'drying_technologies',
      category: 'drying',
      title: {
        uk: 'Сучасні технології сушіння',
        ru: 'Современные технологии сушки',
        en: 'Modern Drying Technologies',
        de: 'Moderne Trocknungstechnologien'
      },
      description: {
        uk: 'Типи сушарок, режими сушіння, енергоефективність',
        ru: 'Типы сушилок, режимы сушки, энергоэффективность',
        en: 'Dryer types, drying regimes, energy efficiency',
        de: 'Trocknertypen, Trocknungsregime, Energieeffizienz'
      },
      filename: 'drying_technologies.pdf',
      path: '/assets/massTransfer/documents/drying_technologies.pdf',
      type: 'document',
      format: 'pdf',
      pages: 187,
      size: '5.3 MB'
    },
    {
      id: 'nrtl_unifac_models',
      category: 'distillation',
      title: {
        uk: 'Моделі NRTL та UNIFAC',
        ru: 'Модели NRTL и UNIFAC',
        en: 'NRTL and UNIFAC Models',
        de: 'NRTL- und UNIFAC-Modelle'
      },
      description: {
        uk: 'Термодинамічні моделі для розрахунку рівноваги',
        ru: 'Термодинамические модели для расчета равновесия',
        en: 'Thermodynamic models for equilibrium calculations',
        de: 'Thermodynamische Modelle für Gleichgewichtsberechnungen'
      },
      filename: 'nrtl_unifac.pdf',
      path: '/assets/massTransfer/documents/nrtl_unifac.pdf',
      type: 'document',
      format: 'pdf',
      pages: 67,
      size: '1.9 MB'
    }
  ]
};

export default massTransferFiles;