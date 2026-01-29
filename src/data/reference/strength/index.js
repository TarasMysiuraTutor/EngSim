// src/data/reference/strength/index.js

import {
  allFormulas,
  basicsFormulas,
  bendingFormulas,
  connectionsFormulas,
  designFormulas,
  shearFormulas,
  stabilityFormulas,
  torsionFormulas,
} from "./formulas";

import {
  allTables,
  boltsTable,
  heaSections,
  steelProperties,
  sectionsTable,
} from "./tables";
 
import strengthFiles from "./files";

// Збираємо все разом
export const strengthReferenceData = {
  formulas: allFormulas,
    tables: allTables,
    files: strengthFiles,
}

// Експорт по категоріях для зручності
export const strengthByCategory = {
  formulas: {
    basics: basicsFormulas,
    bending: bendingFormulas,
    connections: connectionsFormulas,
    design: designFormulas,
    shear: shearFormulas,
    stability: stabilityFormulas,
    torsion: torsionFormulas,
  },
  tables: {
    steelProperties,
    sectionsTable, // розкоментувати коли створите
    boltsTable,
  },
  files: strengthFiles,
};
   
export default strengthReferenceData;


  // МЕТАДАНІ (для статистики)
  // meta: {
  //   totalFormulas: 15, // 👈 Оновіть
  //   totalTables: 8, // 👈 Оновіть
  //   categories: {
  //     formulas: ["basics", "bending", "torsion", "shear", "stability"],
  //     tables: ["materials", "sections", "connections", "design", "safety"],
  //   },
  // },


