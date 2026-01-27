// ============================================
// FILE: src/data/reference/hydromechanics/files/index.js
// ============================================

export const hydromechanicsFiles = {
  diagrams: [
    {
      id: "settling-diagram",
      title: {
        uk: "Схема процесу осадження",
        ru: "Схема процесса осаждения",
        en: "Settling Process Diagram",
        de: "Sedimentationsprozessdiagramm"
      },
      format: "png",
      type: "diagram",
      path: "/files/hydromechanics/settling-diagram.png",
      description: {
        uk: "Схематичне зображення процесу гравітаційного осадження",
        ru: "Схематическое изображение процесса гравитационного осаждения",
        en: "Schematic representation of gravitational settling process",
        de: "Schematische Darstellung des Gravitationssedimentationsprozesses"
      }
    },
    {
      id: "centrifuge-scheme",
      title: {
        uk: "Конструкція відстійної центрифуги",
        ru: "Конструкция отстойной центрифуги",
        en: "Sedimenting Centrifuge Design",
        de: "Konstruktion einer Sedimentierzentrifuge"
      },
      format: "pdf",
      type: "technical drawing",
      path: "/files/hydromechanics/centrifuge-design.pdf"
    },
    {
      id: "filter-press-scheme",
      title: {
        uk: "Схема фільтр-преса",
        ru: "Схема фильтр-пресса",
        en: "Filter Press Scheme",
        de: "Filterpresse-Schema"
      },
      format: "png",
      type: "diagram",
      path: "/files/hydromechanics/filter-press.png",
      description: {
        uk: "Будова та принцип роботи рамного фільтр-преса",
        ru: "Устройство и принцип работы рамного фильтр-пресса",
        en: "Structure and operation principle of plate-and-frame filter press",
        de: "Aufbau und Funktionsprinzip der Rahmen-Filterpresse"
      }
    },
    {
      id: "mixer-types-diagram",
      title: {
        uk: "Типи мішалок",
        ru: "Типы мешалок",
        en: "Types of Mixers",
        de: "Rührertypen"
      },
      format: "pdf",
      type: "technical drawing",
      path: "/files/hydromechanics/mixer-types.pdf",
      description: {
        uk: "Креслення основних типів мішалок та їх конструктивні особливості",
        ru: "Чертежи основных типов мешалок и их конструктивные особенности",
        en: "Drawings of main mixer types and their design features",
        de: "Zeichnungen der wichtigsten Rührertypen und ihrer Konstruktionsmerkmale"
      }
    },
    {
      id: "fluidization-regimes-chart",
      title: {
        uk: "Діаграма режимів псевдозрідження",
        ru: "Диаграмма режимов псевдоожижения",
        en: "Fluidization Regimes Chart",
        de: "Wirbelschichtregime-Diagramm"
      },
      format: "png",
      type: "chart",
      path: "/files/hydromechanics/fluidization-regimes.png",
      description: {
        uk: "Залежність режиму псевдозрідження від швидкості газу",
        ru: "Зависимость режима псевдоожижения от скорости газа",
        en: "Fluidization regime dependence on gas velocity",
        de: "Abhängigkeit des Wirbelschichtregimes von der Gasgeschwindigkeit"
      }
    }
  ],
  documents: [
    {
      id: "hydromech-handbook",
      title: {
        uk: "Довідник з гідромеханічних процесів",
        ru: "Справочник по гидромеханическим процессам",
        en: "Hydromechanical Processes Handbook",
        de: "Handbuch der hydromechanischen Prozesse"
      },
      format: "pdf",
      pages: 245,
      size: "12.5 MB",
      path: "/files/hydromechanics/handbook.pdf",
      description: {
        uk: "Повний довідник з теорії та практики гідромеханічних процесів",
        ru: "Полный справочник по теории и практике гидромеханических процессов",
        en: "Complete handbook on theory and practice of hydromechanical processes",
        de: "Vollständiges Handbuch über Theorie und Praxis hydromechanischer Prozesse"
      }
    },
    {
      id: "centrifuge-selection-guide",
      title: {
        uk: "Керівництво з вибору центрифуг",
        ru: "Руководство по выбору центрифуг",
        en: "Centrifuge Selection Guide",
        de: "Zentrifugen-Auswahlhandbuch"
      },
      format: "pdf",
      pages: 68,
      size: "4.2 MB",
      path: "/files/hydromechanics/centrifuge-guide.pdf",
      description: {
        uk: "Методика підбору центрифуг для різних застосувань",
        ru: "Методика подбора центрифуг для различных применений",
        en: "Methodology for selecting centrifuges for various applications",
        de: "Methodik zur Auswahl von Zentrifugen für verschiedene Anwendungen"
      }
    },
    {
      id: "filter-calculations",
      title: {
        uk: "Розрахунок фільтрувального обладнання",
        ru: "Расчет фильтровального оборудования",
        en: "Filter Equipment Calculations",
        de: "Filterausrüstung Berechnungen"
      },
      format: "pdf",
      pages: 92,
      size: "6.8 MB",
      path: "/files/hydromechanics/filter-calc.pdf",
      description: {
        uk: "Практичні методи розрахунку фільтрів різних типів",
        ru: "Практические методы расчета фильтров различных типов",
        en: "Practical methods for calculating different types of filters",
        de: "Praktische Methoden zur Berechnung verschiedener Filtertypen"
      }
    },
    {
      id: "mixing-optimization",
      title: {
        uk: "Оптимізація процесів перемішування",
        ru: "Оптимизация процессов перемешивания",
        en: "Mixing Process Optimization",
        de: "Optimierung von Mischprozessen"
      },
      format: "pdf",
      pages: 124,
      size: "8.9 MB",
      path: "/files/hydromechanics/mixing-optimization.pdf",
      description: {
        uk: "Методи підвищення ефективності перемішування та зниження енерговитрат",
        ru: "Методы повышения эффективности перемешивания и снижения энергозатрат",
        en: "Methods to improve mixing efficiency and reduce energy consumption",
        de: "Methoden zur Verbesserung der Mischeffizienz und Reduzierung des Energieverbrauchs"
      }
    }
  ]
};