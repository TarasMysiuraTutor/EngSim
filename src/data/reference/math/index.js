// src/data/reference/math/index.js
import { allFormulas, geometryFormulas, trigonometryFormulas, algebraFormulas, calculusFormulas } from './formulas';
import { allTables, constants, trigValues, areaFormulas, derivativesTable, integralsTable,volumeFormulas } from './tables';
import mathFiles from './files';

export const mathReferenceData = {
  formulas: allFormulas,
  tables: allTables,
  files: mathFiles
};

// Експорт по категоріях для зручності
export const mathByCategory = {
  formulas: {
    geometry: geometryFormulas,
    trigonometry: trigonometryFormulas,
    algebra: algebraFormulas,
    calculus: calculusFormulas
  },
  tables: {
    constants,
    trigValues,
    areaFormulas,
    derivativesTable,
    integralsTable,
    volumeFormulas
  },
  files: mathFiles
};

export default mathReferenceData;