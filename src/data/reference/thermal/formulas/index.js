// src/data/reference/thermal/formulas/index.js
import conductionFormulas from './conduction.js';
import convectionFormulas from './convection.js';
import radiationFormulas from './radiation.js';
import heatExchangersFormulas from './heatExchangers.js';
import generalFormulas from './general.js';

export const allFormulas = [
  ...conductionFormulas,
  ...convectionFormulas,
  ...radiationFormulas,
  ...heatExchangersFormulas,
  ...generalFormulas
];

export default allFormulas;