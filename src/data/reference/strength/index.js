// src/data/reference/strength/index.js
// ГОЛОВНИЙ ФАЙЛ - збирає всі дані опору матеріалів

// Імпорт формул
import basicsFormulas from "./formulas/basics.js";
import bendingFormulas from "./formulas/bending.js";
// У майбутньому додавайте:
// import torsionFormulas from './formulas/torsion.js';
// import shearFormulas from './formulas/shear.js';
// import stabilityFormulas from './formulas/stability.js';

// Імпорт таблиць (JSON)
import steelPropertiesTable from "./tables/materials.json";
import sectionsTable from "./tables/sections.json";
// У майбутньому додавайте:
// import boltsTable from './tables/connections.json';
// import deflectionsTable from './tables/design.json';

// Збираємо все разом
export const strengthReferenceData = {
  // ВСІ ФОРМУЛИ
  formulas: [
    ...basicsFormulas,
    ...bendingFormulas, // розкоментувати коли створите
    // ...torsionFormulas,
    // ...shearFormulas,
    // ...stabilityFormulas,
  ],

  // ВСІ ТАБЛИЦІ
  tables: [
    steelPropertiesTable,
    sectionsTable, // розкоментувати коли створите
    // boltsTable,
    // deflectionsTable,
  ],

  // МЕТАДАНІ (для статистики)
  meta: {
    totalFormulas: 15, // 👈 Оновіть
    totalTables: 8, // 👈 Оновіть
    categories: {
      formulas: ["basics", "bending", "torsion", "shear", "stability"],
      tables: ["materials", "sections", "connections", "design", "safety"],
    },
  },
};

export default strengthReferenceData;
