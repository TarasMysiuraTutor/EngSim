// src/data/reference/hydraulics/index.js
import { allFormulas, basicsFormulas, pressureFormulas, flowFormulas, pumpsFormulas, resistanceFormulas } from './formulas';
import { allTables, fluidsProperties, pipesSteel, resistanceCoefficients, pipeRoughness } from './tables';
import hydraulicsFiles from './files';

export const hydraulicsReferenceData = {
  formulas: allFormulas,
  tables: allTables,
  files: hydraulicsFiles
};

// Експорт по категоріях
export const hydraulicsByCategory = {
  formulas: {
    basics: basicsFormulas,
    pressure: pressureFormulas,
    flow: flowFormulas,
    pumps: pumpsFormulas,
    resistance: resistanceFormulas
  },
  tables: {
    fluidsProperties,
    pipesSteel,
    resistanceCoefficients,
    pipeRoughness
  },
  files: hydraulicsFiles
};

export default hydraulicsReferenceData;