// ============================================
// FILE: src/data/reference/strength/formulas/index.js
// ============================================

import { basicsFormulas } from "./basics";
import { bendingFormulas } from "./bending";
import { connectionsFormulas } from "./connections";
import { designFormulas } from "./design";
import { shearFormulas } from "./shear";
import { stabilityFormulas } from "./stability";
import { torsionFormulas } from "./torsion";


export const allFormulas = [
  ...basicsFormulas,
  ...bendingFormulas,
  ...connectionsFormulas,
  ...designFormulas,
  ...shearFormulas,
  ...stabilityFormulas,
  ...torsionFormulas,
];

export {
  basicsFormulas,
  bendingFormulas,
  connectionsFormulas,
  designFormulas,
  shearFormulas,
  stabilityFormulas,
  torsionFormulas,
};