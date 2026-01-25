// src/data/reference/math/files/index.js
export const mathFiles = {
  diagrams: [
    {
      id: "unit_circle",
      category: "trigonometry",
      title: {
        uk: "Одинична окружність",
        ru: "Единичная окружность",
        en: "Unit Circle",
        de: "Einheitskreis",
      },
      filename: "unit_circle.svg",
      path: "/assets/math/diagrams/unit_circle.svg",
      type: "diagram",
      format: "svg",
    },
    {
      id: "pythagorean_proof",
      category: "geometry",
      title: {
        uk: "Доведення теореми Піфагора",
        ru: "Доказательство теоремы Пифагора",
        en: "Pythagorean Theorem Proof",
        de: "Beweis des Satzes von Pythagoras",
      },
      filename: "pythagorean_proof.png",
      path: "/assets/math/diagrams/pythagorean_proof.png",
      type: "diagram",
      format: "png",
    },
  ],

  documents: [
    {
      id: "calculus_handbook",
      category: "calculus",
      title: {
        uk: "Довідник з математичного аналізу",
        ru: "Справочник по математическому анализу",
        en: "Calculus Handbook",
        de: "Analysis Handbuch",
      },
      filename: "calculus_handbook.pdf",
      path: "/assets/math/documents/calculus_handbook.pdf",
      type: "document",
      format: "pdf",
      pages: 156,
      size: "2.3 MB",
    },
    {
      id: "trig_tables",
      category: "trigonometry",
      title: {
        uk: "Таблиці тригонометричних функцій",
        ru: "Таблицы тригонометрических функций",
        en: "Trigonometric Tables",
        de: "Trigonometrische Tabellen",
      },
      filename: "trig_tables.pdf",
      path: "/assets/math/documents/trig_tables.pdf",
      type: "document",
      format: "pdf",
      pages: 24,
      size: "890 KB",
    },
  ],
};

export default mathFiles;
