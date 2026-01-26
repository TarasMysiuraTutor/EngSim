// src/data/reference/hydraulics/files/index.js
export const hydraulicsFiles = {
  diagrams: [
    {
      id: 'pipe_system_scheme',
      category: 'basics',
      title: {
        uk: 'Схема трубопровідної системи',
        ru: 'Схема трубопроводной системы',
        en: 'Pipe System Scheme',
        de: 'Rohrleitungssystemschema'
      },
      filename: 'pipe_system.svg',
      path: '/assets/hydraulics/diagrams/pipe_system.svg',
      type: 'diagram',
      format: 'svg',
      description: {
        uk: 'Типова схема трубопровідної системи з насосом',
        ru: 'Типовая схема трубопроводной системы с насосом',
        en: 'Typical piping system with pump',
        de: 'Typisches Rohrleitungssystem mit Pumpe'
      }
    },
    {
      id: 'pump_curves',
      category: 'pumps',
      title: {
        uk: 'Характеристики відцентрового насоса',
        ru: 'Характеристики центробежного насоса',
        en: 'Centrifugal Pump Curves',
        de: 'Kreiselpumpenkennlinien'
      },
      filename: 'pump_curves.png',
      path: '/assets/hydraulics/diagrams/pump_curves.png',
      type: 'diagram',
      format: 'png',
      description: {
        uk: 'Q-H, Q-N, Q-η характеристики',
        ru: 'Q-H, Q-N, Q-η характеристики',
        en: 'Q-H, Q-N, Q-η characteristics',
        de: 'Q-H, Q-N, Q-η Kennlinien'
      }
    },
    {
      id: 'moody_diagram',
      category: 'resistance',
      title: {
        uk: 'Діаграма Муді',
        ru: 'Диаграмма Муди',
        en: 'Moody Diagram',
        de: 'Moody-Diagramm'
      },
      filename: 'moody_diagram.png',
      path: '/assets/hydraulics/diagrams/moody_diagram.png',
      type: 'diagram',
      format: 'png',
      description: {
        uk: 'Визначення коефіцієнта тертя λ',
        ru: 'Определение коэффициента трения λ',
        en: 'Friction factor λ determination',
        de: 'Reibungsbeiwert λ Bestimmung'
      }
    },
    {
      id: 'hydraulic_jump',
      category: 'flow',
      title: {
        uk: 'Гідравлічний стрибок',
        ru: 'Гидравлический прыжок',
        en: 'Hydraulic Jump',
        de: 'Wassersprung'
      },
      filename: 'hydraulic_jump.svg',
      path: '/assets/hydraulics/diagrams/hydraulic_jump.svg',
      type: 'diagram',
      format: 'svg'
    }
  ],

  documents: [
    {
      id: 'dbn_water_supply',
      category: 'basics',
      title: {
        uk: 'ДБН В.2.5-64:2012 - Внутрішній водопровід',
        ru: 'ДБН В.2.5-64:2012 - Внутренний водопровод',
        en: 'DBN V.2.5-64:2012 - Internal Water Supply',
        de: 'DBN V.2.5-64:2012 - Interne Wasserversorgung'
      },
      filename: 'dbn_v_2_5_64_2012.pdf',
      path: '/assets/hydraulics/documents/dbn_v_2_5_64_2012.pdf',
      type: 'document',
      format: 'pdf',
      pages: 256,
      size: '4.2 MB',
      description: {
        uk: 'Внутрішній водопровід та каналізація. Основні положення',
        ru: 'Внутренний водопровод и канализация. Основные положения',
        en: 'Internal water supply and sewerage. Main provisions',
        de: 'Interne Wasserversorgung und Kanalisation. Hauptbestimmungen'
      }
    },
    {
      id: 'dbn_external_networks',
      category: 'basics',
      title: {
        uk: 'ДБН В.2.5-74:2013 - Зовнішні мережі',
        ru: 'ДБН В.2.5-74:2013 - Наружные сети',
        en: 'DBN V.2.5-74:2013 - External Networks',
        de: 'DBN V.2.5-74:2013 - Externe Netze'
      },
      filename: 'dbn_v_2_5_74_2013.pdf',
      path: '/assets/hydraulics/documents/dbn_v_2_5_74_2013.pdf',
      type: 'document',
      format: 'pdf',
      pages: 312,
      size: '5.8 MB',
      description: {
        uk: 'Водопостачання. Зовнішні мережі та споруди',
        ru: 'Водоснабжение. Наружные сети и сооружения',
        en: 'Water supply. External networks and structures',
        de: 'Wasserversorgung. Externe Netze und Strukturen'
      }
    },
    {
      id: 'hydraulics_handbook',
      category: 'basics',
      title: {
        uk: 'Довідник з гідравліки',
        ru: 'Справочник по гидравлике',
        en: 'Hydraulics Handbook',
        de: 'Hydraulik-Handbuch'
      },
      filename: 'hydraulics_handbook.pdf',
      path: '/assets/hydraulics/documents/hydraulics_handbook.pdf',
      type: 'document',
      format: 'pdf',
      pages: 428,
      size: '12.3 MB',
      description: {
        uk: 'Повний довідник інженера-гідравліка',
        ru: 'Полный справочник инженера-гидравлика',
        en: 'Complete hydraulic engineer\'s handbook',
        de: 'Vollständiges Hydraulik-Ingenieurhandbuch'
      }
    },
    {
      id: 'pump_selection_guide',
      category: 'pumps',
      title: {
        uk: 'Посібник з вибору насосів',
        ru: 'Пособие по выбору насосов',
        en: 'Pump Selection Guide',
        de: 'Pumpenauswahlhandbuch'
      },
      filename: 'pump_selection.pdf',
      path: '/assets/hydraulics/documents/pump_selection.pdf',
      type: 'document',
      format: 'pdf',
      pages: 85,
      size: '3.1 MB'
    }
  ]
};

export default hydraulicsFiles;