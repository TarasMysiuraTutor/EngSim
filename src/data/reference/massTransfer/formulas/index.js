// src/data/reference/massTransfer/formulas/index.js
import { diffusionFormulas } from './diffusion';
import { distillationFormulas } from './distillation';
import { absorptionFormulas } from './absorption';
import { extractionFormulas } from './extraction';
import { adsorptionFormulas } from './adsorption';
import { dryingFormulas } from './drying';

export const allFormulas = [
  ...diffusionFormulas,
  ...distillationFormulas,
  ...absorptionFormulas,
  ...extractionFormulas,
  ...adsorptionFormulas,
  ...dryingFormulas
];

export {
  diffusionFormulas,
  distillationFormulas,
  absorptionFormulas,
  extractionFormulas,
  adsorptionFormulas,
  dryingFormulas
};