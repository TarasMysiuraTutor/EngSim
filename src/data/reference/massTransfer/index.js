// src/data/reference/massTransfer/index.js
import {
  allFormulas,
  diffusionFormulas,
  distillationFormulas,
  absorptionFormulas,
  extractionFormulas,
  adsorptionFormulas,
  dryingFormulas,
} from "./formulas";
import {
  allTables,
  diffusionCoefficients,
  equilibriumData,
  massTransferCoefficients,
} from "./tables";
import massTransferFiles from "./files";

export const massTransferReferenceData = {
  formulas: allFormulas,
  tables: allTables,
  files: massTransferFiles,
};

// Експорт по категоріях для зручності
export const massTransferByCategory = {
  formulas: {
    diffusion: diffusionFormulas,
    distillation: distillationFormulas,
    absorption: absorptionFormulas,
    extraction: extractionFormulas,
    adsorption: adsorptionFormulas,
    drying: dryingFormulas,
  },
  tables: {
    diffusionCoefficients,
    equilibriumData,
    massTransferCoefficients,
  },
  files: massTransferFiles,
};

export default massTransferReferenceData;
