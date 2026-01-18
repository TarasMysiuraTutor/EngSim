// src/data/videosData.js - РОЗШИРЕНА ВЕРСІЯ З ФАЙЛАМИ

export const videosData = [
  {
    id: 1,
    title: {
      uk: "ІНСТРУКЦІЯ 01. Основи аналізу трубопровідного потоку в FlowNEX",
      ru: "РУКОВОДСТВО 01. Основные принципы потока в трубах в FlowNEX",
      en: "TUTORIAL 01. Basic Pipe Flow Analysis in FlowNEX",
      de: "TUTORIAL 01. Grundlegende Rohrflussanalyse in FlowNEX",
    },
    description: {
      en: "PROBLEM DESCRIPTION: TUTORIAL 01. Water flows between two tanks through a single basic pipe. A sharp entry type geometry can be assumed for the pipe inlet from Tank A. Gauge pressure readings are shown below. Take the atmospheric pressure = 100 kPa.The objective is to calculate the mass flow rate through the pipe.",
      uk: "ОПИС ПРОБЛЕМИ: ІНСТРУКЦІЯ 01. Вода тече між двома резервуарами через одиничний базовий трубопровід. Можна припустити геометрію з різким входом для трубопроводу з Резервуара A. Показники тисків вказуються нижче. Приймемо атмосферний тиск = 100 кПа. Мета - розрахувати масовий витік води через трубопровід.",
      ru: "ОПИСАНИЕ ПРОБЛЕМЫ: РУКОВОДСТВО 01. Вода течет между двумя резервуарами через одиничный базовый трубопровод. Можно предположить геометрию с острым входом для трубопровода из Резервуара A. Показания давления указаны ниже. Примем атмосферное давление = 100 кПа. Цель - рассчитать массовый расход воды через трубопровод.",
      de: "PROBLEM-BESCHREIBUNG: TUTORIAL 01. Wasser fließt zwischen zwei Tanks durch einen einzelnen grundlegenden Rohrleitung. Ein scharfer Eingangstyp kann für den Rohreintritt aus Tank A angenommen werden. Druckmesswerte sind unten dargestellt. Nehmen Sie den atmosphärischen Druck = 100 kPa an. Das Ziel ist es, die Massenstromrate durch die Rohrleitung zu berechnen.",
    },

    youtubeId: "D7DFO0kUESI", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
    category: "flownex",
    categoryName: {
      uk: "FlowNEX",
      ru: "FlowNEX",
      en: "FlowNEX",
      de: "FlowNEX",
    },
    duration: "20:30",
    date: "2025-12-25",

    // 👇 НОВИЙ ФУНКЦІОНАЛ: Thumbnail з Cloudinary
    thumbnail: {
      uk: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_01_Basic_Pipe_Flow_uk_tlmuzu.jpg",
      ru: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_01_Basic_Pipe_Flow_ru_on5g9h.jpg",
      en: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_01_Basic_Pipe_Flow_en_cho78i.jpg",
      de: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_01_Basic_Pipe_Flow_de_ygrupi.jpg",

      // АБО якщо завантажили локально в проект:
      // thumbnail: "/images/thumbnails/video1.jpg",
    },
    // 👇 НОВИЙ ФУНКЦІОНАЛ: Інструкції для завантаження
    instructions: {
      uk: {
        url: "https://drive.google.com/file/d/1rM4vTqSmSlZ1OcYmpTlMBQYk3m9QgmAT/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow uk.pdf",
        size: "831 kB",
      },
      ru: {
        url: "https://drive.google.com/file/d/1k3aOPLrGn7D7air6L81X_gdHSduN1na0/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow ru.pdf",
        size: "830 kB",
      },
      en: {
        url: "https://drive.google.com/file/d/1wqzDTj-V5InOmLXCR6f8kNOmDlRUYakJ/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow en.pdf",
        size: "613 kB",
      },
      de: {
        url: "https://drive.google.com/file/d/108p5mPCYgttF-EG74-exHxVJ15qZTlHR/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow de.pdf",
        size: "800 kB",
      },
    },

    // 👇 ДОДАТКОВІ ФАЙЛИ (опціонально)
    resources: [
      {
        type: "model", // model, drawing, archive
        name: {
          uk: "3D модель трубопроводу",
          ru: "3D модель трубопровода",
          en: "3D pipe model",
          de: "3D Rohrmodell",
        },
        url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/models/part.SLDPRT",
        filename: "complex_part.SLDPRT",
        size: "1.2 MB",
      },
      {
        type: "drawing",
        name: {
          uk: "Креслення трубопроводу",
          ru: "Чертеж трубопровода",
          en: "Pipe drawing",
          de: "Rohrzeichnung",
        },
        url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/drawings/part-drawing.PDF",
        filename: "part_drawing.PDF",
        size: "850 KB",
      },
    ],
  },
  {
    id: 2,
    title: {
      uk: "ІНСТРУКЦІЯ 02. Взаємозв'язані резервуари в FlowNEX",
      ru: "РУКОВОДСТВО 02. Взаимосвязанные резервуары в FlowNEX",
      en: "Tutorial 02. Interconnected Tanks in FlowNEX",
      de: "Tutorial 02. Interconnected Tanks in FlowNEX",
    },
    description: {
      en: "PROBLEM DESCRIPTION: TUTORIAL 02. Three tanks are interconnected at junction J. The elevation of junction J is given in the table below. The tank conditions are given in the tables below. Determine the static pressure in junction J as well as the corresponding mass flow rates through each of the three pipes.",
      uk: "ОПИС ПРОБЛЕМИ: ІНСТРУКЦІЯ 02. Три резервуари з'єднані в точці J. Висота точки J задана в таблиці нижче. Умови резервуарів задані в таблицях нижче. Визначте статичний тиск у точці J, а також відповідні масові витоки через кожен з трьох трубопроводів.",
      ru: "ОПИСАНИЕ ПРОБЛЕМЫ: РУКОВОДСТВО 02. Три резервуара соединены в точке J. Высота точки J задана в таблице ниже. Условия резервуаров заданы в таблицах ниже. Определите статическое давление в точке J, а также соответствующие массовые расходы через каждый из трех трубопроводов.",
      de: "PROBLEM-BESCHREIBUNG: TUTORIAL 02. Drei Tanks sind an Knotenpunkt J miteinander verbunden. Die Höhe des Knotenpunkts J ist in der Tabelle unten gegeben. Die Tankbedingungen sind in den Tabellen unten gegeben. Bestimmen Sie den statischen Druck im Knotenpunkt J sowie die entsprechenden Massenströme durch jeden der drei Rohre.",
    },
    youtubeId: "ByAOdKbjMF8", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
    category: "flownex",
    categoryName: {
      uk: "FlowNEX",
      ru: "FlowNEX",
      en: "FlowNEX",
      de: "FlowNEX",
    },
    duration: "20:30",
    date: "2025-12-25",

    // 👇 НОВИЙ ФУНКЦІОНАЛ: Thumbnail з Cloudinary
    thumbnail: {
      uk: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_02_Interconnected_Tanks_uk_h6wm6l.jpg",
      ru: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_02_Interconnected_Tanks_ru_qi66lg.jpg",
      en: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_02_Interconnected_Tanks_en_xsaxws.jpg",
      de: "https://res.cloudinary.com/dxbxxnifb/image/upload/v1768728495/Tutorial_02_Interconnected_Tanks_de_dohqam.jpg",

      // АБО якщо завантажили локально в проект:
      // thumbnail: "/images/thumbnails/video1.jpg",
    },
    // 👇 НОВИЙ ФУНКЦІОНАЛ: Інструкції для завантаження
    instructions: {
      uk: {
        url: "https://drive.google.com/file/d/1rM4vTqSmSlZ1OcYmpTlMBQYk3m9QgmAT/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow uk.pdf",
        size: "2.5 MB",
      },
      ru: {
        url: "https://drive.google.com/file/d/1k3aOPLrGn7D7air6L81X_gdHSduN1na0/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow ru.pdf",
        size: "2.5 MB",
      },
      en: {
        url: "https://drive.google.com/file/d/1wqzDTj-V5InOmLXCR6f8kNOmDlRUYakJ/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow en.pdf",
        size: "1.1 MB",
      },
      de: {
        url: "https://drive.google.com/file/d/108p5mPCYgttF-EG74-exHxVJ15qZTlHR/view?usp=sharing",
        filename: "Tutorial 01 Basic Pipe Flow de.pdf",
        size: "2.5 MB",
      },
    },

    // 👇 ДОДАТКОВІ ФАЙЛИ (опціонально)
    resources: [
      {
        type: "model", // model, drawing, archive
        name: {
          uk: "3D модель трубопроводу",
          ru: "3D модель трубопровода",
          en: "3D pipe model",
          de: "3D Rohrmodell",
        },
        url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/models/part.SLDPRT",
        filename: "complex_part.SLDPRT",
        size: "1.2 MB",
      },
      {
        type: "drawing",
        name: {
          uk: "Креслення трубопроводу",
          ru: "Чертеж трубопровода",
          en: "Pipe drawing",
          de: "Rohrzeichnung",
        },
        url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/drawings/part-drawing.PDF",
        filename: "part_drawing.PDF",
        size: "850 KB",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: {
  //     uk: "Проектування складної деталі в SolidWorks",
  //     ru: "Проектирование сложной детали в SolidWorks",
  //     en: "Complex Part Design in SolidWorks",
  //     de: "Komplexe Teilegestaltung in SolidWorks",
  //   },
  //   description: {
  //     uk: "Покрокове створення складної інженерної деталі з використанням основних інструментів SolidWorks",
  //     ru: "Пошаговое создание сложной инженерной детали с использованием основных инструментов SolidWorks",
  //     en: "Step-by-step creation of a complex engineering part using core SolidWorks tools",
  //     de: "Schritt-für-Schritt-Erstellung eines komplexen technischen Teils mit SolidWorks",
  //   },
  //   youtubeId: "D7DFO0kUESI",
  //   category: "solidworks",
  //   categoryName: {
  //     uk: "SolidWorks",
  //     ru: "SolidWorks",
  //     en: "SolidWorks",
  //     de: "SolidWorks",
  //   },
  //   duration: "15:30",
  //   date: "2024-01-15",

  //   // 👇 НОВИЙ ФУНКЦІОНАЛ: Thumbnail з Cloudinary
  //   thumbnail:
  //     "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/videos/solidworks-part-design.jpg",
  //   // АБО якщо завантажили локально в проект:
  //   // thumbnail: "/images/thumbnails/video1.jpg",

  //   // 👇 НОВИЙ ФУНКЦІОНАЛ: Інструкції для завантаження
  //   instructions: {
  //     uk: {
  //       url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/instructions/solidworks-tutorial-uk.pdf",
  //       filename: "Інструкція_SolidWorks_Деталь.pdf",
  //       size: "2.5 MB",
  //     },
  //     ru: {
  //       url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/instructions/solidworks-tutorial-ru.pdf",
  //       filename: "Инструкция_SolidWorks_Деталь.pdf",
  //       size: "2.5 MB",
  //     },
  //     en: {
  //       url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/instructions/solidworks-tutorial-en.pdf",
  //       filename: "SolidWorks_Tutorial_Part.pdf",
  //       size: "2.5 MB",
  //     },
  //     de: {
  //       url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/instructions/solidworks-tutorial-de.pdf",
  //       filename: "SolidWorks_Anleitung_Teil.pdf",
  //       size: "2.5 MB",
  //     },
  //   },

  //   // 👇 ДОДАТКОВІ ФАЙЛИ (опціонально)
  //   resources: [
  //     {
  //       type: "model", // model, drawing, archive
  //       name: {
  //         uk: "3D модель деталі",
  //         ru: "3D модель детали",
  //         en: "3D part model",
  //         de: "3D-Teilmodell",
  //       },
  //       url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/models/part.SLDPRT",
  //       filename: "complex_part.SLDPRT",
  //       size: "1.2 MB",
  //     },
  //     {
  //       type: "drawing",
  //       name: {
  //         uk: "Креслення деталі",
  //         ru: "Чертеж детали",
  //         en: "Part drawing",
  //         de: "Teilezeichnung",
  //       },
  //       url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/drawings/part-drawing.PDF",
  //       filename: "part_drawing.PDF",
  //       size: "850 KB",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: {
  //     uk: "Аналіз потоку рідини в FlowNEX",
  //     ru: "Анализ потока жидкости в FlowNEX",
  //     en: "Fluid Flow Analysis in FlowNEX",
  //     de: "Strömungsanalyse in FlowNEX",
  //   },
  //   description: {
  //     uk: "Налаштування та проведення гідравлічного розрахунку в FlowNEX для трубопровідної системи",
  //     ru: "Настройка и проведение гидравлического расчета в FlowNEX для трубопроводной системы",
  //     en: "Setup and hydraulic calculation in FlowNEX for pipeline systems",
  //     de: "Einrichtung und hydraulische Berechnung in FlowNEX für Rohrleitungssysteme",
  //   },
  //   youtubeId: "dQw4w9WgXcQ",
  //   category: "flownex",
  //   categoryName: {
  //     uk: "FlowNEX",
  //     ru: "FlowNEX",
  //     en: "FlowNEX",
  //     de: "FlowNEX",
  //   },
  //   duration: "22:45",
  //   date: "2024-01-10",
  //   thumbnail:
  //     "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/videos/flownex-analysis.jpg",

  //   instructions: {
  //     uk: {
  //       url: "/instructions/flownex-tutorial-uk.pdf",
  //       filename: "FlowNEX_Інструкція.pdf",
  //       size: "3.1 MB",
  //     },
  //     en: {
  //       url: "/instructions/flownex-tutorial-en.pdf",
  //       filename: "FlowNEX_Tutorial.pdf",
  //       size: "3.1 MB",
  //     },
  //   },
  // },
  // {
  //   id: 5,
  //   title: {
  //     uk: "Проектування складної деталі в SolidWorks",
  //     ru: "Проектирование сложной детали в SolidWorks",
  //     en: "Complex Part Design in SolidWorks",
  //     de: "Komplexe Teilegestaltung in SolidWorks",
  //   },
  //   description: {
  //     uk: "Покрокове створення складної інженерної деталі з використанням основних інструментів SolidWorks",
  //     ru: "Пошаговое создание сложной инженерной детали с использованием основных инструментов SolidWorks",
  //     en: "Step-by-step creation of a complex engineering part using core SolidWorks tools",
  //     de: "Schritt-für-Schritt-Erstellung eines komplexen technischen Teils mit SolidWorks",
  //   },
  //   youtubeId: "dQw4w9WgXcQ", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID вашого відео
  //   category: "solidworks",
  //   categoryName: {
  //     uk: "SolidWorks",
  //     ru: "SolidWorks",
  //     en: "SolidWorks",
  //     de: "SolidWorks",
  //   },
  //   duration: "15:30",
  //   date: "2024-01-15",
  // },
  // {
  //   id: 6,
  //   title: {
  //     uk: "Аналіз потоку рідини в FlowNEX",
  //     ru: "Анализ потока жидкости в FlowNEX",
  //     en: "Fluid Flow Analysis in FlowNEX",
  //     de: "Strömungsanalyse in FlowNEX",
  //   },
  //   description: {
  //     uk: "Налаштування та проведення гідравлічного розрахунку в FlowNEX для трубопровідної системи",
  //     ru: "Настройка и проведение гидравлического расчета в FlowNEX для трубопроводной системы",
  //     en: "Setup and hydraulic calculation in FlowNEX for pipeline systems",
  //     de: "Einrichtung und hydraulische Berechnung in FlowNEX für Rohrleitungssysteme",
  //   },
  //   youtubeId: "dQw4w9WgXcQ", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
  //   category: "flownex",
  //   categoryName: {
  //     uk: "FlowNEX",
  //     ru: "FlowNEX",
  //     en: "FlowNEX",
  //     de: "FlowNEX",
  //   },
  //   duration: "22:45",
  //   date: "2024-01-10",
  // },
  // {
  //   id: 7,
  //   title: {
  //     uk: "Аналіз потоку рідини в FlowNEX",
  //     ru: "Анализ потока жидкости в FlowNEX",
  //     en: "Fluid Flow Analysis in FlowNEX",
  //     de: "Strömungsanalyse in FlowNEX",
  //   },
  //   description: {
  //     uk: "Налаштування та проведення гідравлічного розрахунку в FlowNEX для трубопровідної системи",
  //     ru: "Настройка и проведение гидравлического расчета в FlowNEX для трубопроводной системы",
  //     en: "Setup and hydraulic calculation in FlowNEX for pipeline systems",
  //     de: "Einrichtung und hydraulische Berechnung in FlowNEX für Rohrleitungssysteme",
  //   },
  //   youtubeId: "dQw4w9WgXcQ", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
  //   category: "flownex",
  //   categoryName: {
  //     uk: "FlowNEX",
  //     ru: "FlowNEX",
  //     en: "FlowNEX",
  //     de: "FlowNEX",
  //   },
  //   duration: "22:45",
  //   date: "2024-01-10",
  // },
  // {
  //   id: 8,
  //   title: {
  //     uk: "Основи креслення в AutoCAD",
  //     ru: "Основы черчения в AutoCAD",
  //     en: "AutoCAD Drawing Basics",
  //     de: "AutoCAD Zeichnungsgrundlagen",
  //   },
  //   description: {
  //     uk: "Створення технічного креслення деталі з розмірами та анотаціями",
  //     ru: "Создание технического чертежа детали с размерами и аннотациями",
  //     en: "Creating technical drawings with dimensions and annotations",
  //     de: "Erstellung technischer Zeichnungen mit Maßen und Anmerkungen",
  //   },
  //   youtubeId: "dQw4w9WgXcQ", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
  //   category: "autocad",
  //   categoryName: {
  //     uk: "AutoCAD",
  //     ru: "AutoCAD",
  //     en: "AutoCAD",
  //     de: "AutoCAD",
  //   },
  //   duration: "18:20",
  //   date: "2024-01-05",
  // },
  // {
  //   id: 9,
  //   title: {
  //     uk: "Розрахунки матриць в MathCAD",
  //     ru: "Расчеты матриц в MathCAD",
  //     en: "Matrix Calculations in MathCAD",
  //     de: "Matrixberechnungen in MathCAD",
  //   },
  //   description: {
  //     uk: "Виконання матричних обчислень та розв'язання систем рівнянь",
  //     ru: "Выполнение матричных вычислений и решение систем уравнений",
  //     en: "Performing matrix calculations and solving equation systems",
  //     de: "Durchführung von Matrixberechnungen und Lösung von Gleichungssystemen",
  //   },
  //   youtubeId: "dQw4w9WgXcQ", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
  //   category: "mathcad",
  //   categoryName: {
  //     uk: "MathCAD",
  //     ru: "MathCAD",
  //     en: "MathCAD",
  //     de: "MathCAD",
  //   },
  //   duration: "12:15",
  //   date: "2023-12-28",
  // },
  // {
  //   id: 10,
  //   title: {
  //     uk: "Збірка механічного вузла в SolidWorks",
  //     ru: "Сборка механического узла в SolidWorks",
  //     en: "Mechanical Assembly in SolidWorks",
  //     de: "Mechanische Baugruppe in SolidWorks",
  //   },
  //   description: {
  //     uk: "Створення складального креслення та експлуатаційних відомостей для механічного вузла",
  //     ru: "Создание сборочного чертежа и эксплуатационных документов для механического узла",
  //     en: "Creating assembly drawings and operational documentation for mechanical units",
  //     de: "Erstellen von Montagezeichnungen und Betriebsdokumentation",
  //   },
  //   youtubeId: "dQw4w9WgXcQ", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
  //   category: "solidworks",
  //   categoryName: {
  //     uk: "SolidWorks",
  //     ru: "SolidWorks",
  //     en: "SolidWorks",
  //     de: "SolidWorks",
  //   },
  //   duration: "25:40",
  //   date: "2023-12-20",
  // },
  // {
  //   id: 11,
  //   title: {
  //     uk: "Моделювання теплообміну в FlowNEX",
  //     ru: "Моделирование теплообмена в FlowNEX",
  //     en: "Heat Transfer Simulation in FlowNEX",
  //     de: "Wärmeübertragungssimulation in FlowNEX",
  //   },
  //   description: {
  //     uk: "Налаштування теплових розрахунків для системи опалення та аналіз результатів",
  //     ru: "Настройка тепловых расчетов для системы отопления и анализ результатов",
  //     en: "Setting up thermal calculations for heating systems and analyzing results",
  //     de: "Einrichtung thermischer Berechnungen für Heizsysteme",
  //   },
  //   youtubeId: "dQw4w9WgXcQ", // ⚠️ ЗАМІНІТЬ на реальний YouTube ID
  //   category: "flownex",
  //   categoryName: {
  //     uk: "FlowNEX",
  //     ru: "FlowNEX",
  //     en: "FlowNEX",
  //     de: "FlowNEX",
  //   },
  //   duration: "20:10",
  //   date: "2023-12-15",
  // },
];

// ========================================
// ДОПОМІЖНІ ФУНКЦІЇ
// ========================================

/**
 * Отримати thumbnail - з Cloudinary або fallback на YouTube
 * Підтримує багатомовні thumbnails
 */
export const getVideoThumbnail = (video, lang = 'en') => {
  if (video.thumbnail) {
    // Якщо thumbnail - об'єкт з мовами
    if (typeof video.thumbnail === 'object' && !Array.isArray(video.thumbnail)) {
      return video.thumbnail[lang] || video.thumbnail['en'] || Object.values(video.thumbnail)[0];
    }
    // Якщо thumbnail - просто рядок
    return video.thumbnail;
  }
  // Fallback на YouTube thumbnail
  return `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
};

/**
 * Конвертувати Google Drive посилання у direct download
 */
export const convertGoogleDriveUrl = (url) => {
  // Формат: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // Конвертуємо в: https://drive.google.com/uc?export=download&id=FILE_ID
  
  const match = url.match(/\/d\/([^/]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return url; // Повертаємо оригінальний якщо не Google Drive
};

/**
 * Завантажити інструкцію
 */
export const downloadInstruction = (video, lang) => {
  const instruction = video.instructions?.[lang];
  if (!instruction) {
    console.warn(`Інструкція для мови ${lang} не знайдена`);
    return;
  }

  // Конвертуємо Google Drive URL якщо потрібно
  const downloadUrl = instruction.url.includes('drive.google.com') 
    ? convertGoogleDriveUrl(instruction.url)
    : instruction.url;

  // Відкриваємо в новому вікні для завантаження
  window.open(downloadUrl, '_blank');
};

/**
 * Завантажити ресурс (модель, креслення)
 */
export const downloadResource = (resource) => {
  const link = document.createElement('a');
  link.href = resource.url;
  link.download = resource.filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Перевірити чи є інструкція для мови
 */
export const hasInstruction = (video, lang) => {
  return video.instructions && video.instructions[lang];
};

/**
 * Перевірити чи є додаткові ресурси
 */
export const hasResources = (video) => {
  return video.resources && video.resources.length > 0;
};

// ========================================
// ЯК ЗАВАНТАЖИТИ ФАЙЛИ НА CLOUDINARY
// ========================================

/*
КРОК 1: Створіть аккаунт на cloudinary.com (безкоштовно)

КРОК 2: Завантажте файли:
  - Зображення (thumbnails): Media Library → Upload → Image
  - PDF/Документи: Upload → Raw
  - 3D моделі: Upload → Raw

КРОК 3: Скопіюйте URL файлу після завантаження

КРОК 4: Замініть YOUR_CLOUD_NAME на ваш cloud name з Cloudinary

Приклад URL:
https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg
                           ^^^^                          ^^^^^^^^^^
                        cloud name                      public_id

АЛЬТЕРНАТИВА - Локальні файли:
Покладіть файли в public/instructions/ та public/images/thumbnails/
Тоді URL буде: "/instructions/tutorial.pdf" або "/images/thumbnails/video1.jpg"
*/

// ========================================
// ПРИКЛАД ВИКОРИСТАННЯ
// ========================================

/*
// В компоненті VideoCard.jsx:
import { getVideoThumbnail, downloadInstruction, hasInstruction } from '../data/videosData';

const thumbnail = getVideoThumbnail(video);

<img src={thumbnail} alt={video.title[currentLang]} />

if (hasInstruction(video, currentLang)) {
  <button onClick={() => downloadInstruction(video, currentLang)}>
    Завантажити інструкцію
  </button>
}
*/