// ============================================
// FILE: src/data/reference/hydromechanics/formulas/index.js
// ============================================

import { settlingFormulas } from "./settling";
import { filtrationFormulas } from "./filtration";
import { centrifugationFormulas } from "./centrifugation";
import { fluidizationFormulas } from "./fluidization";
import { mixingFormulas } from "./mixing";

export const hydromechanicsFormulas = [
  ...settlingFormulas,
  ...filtrationFormulas,
  ...centrifugationFormulas,
  ...fluidizationFormulas,
  ...mixingFormulas,
];