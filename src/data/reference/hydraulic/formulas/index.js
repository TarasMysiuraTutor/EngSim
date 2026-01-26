// src/data/reference/hydraulics/formulas/index.js
import { basicsFormulas } from './basics';
import { pressureFormulas } from './pressure';
import { flowFormulas } from './flow';
import { pumpsFormulas } from './pumps';
import { resistanceFormulas } from './resistance';

export const allFormulas = [
  ...basicsFormulas,
  ...pressureFormulas,
  ...flowFormulas,
  ...pumpsFormulas,
  ...resistanceFormulas
];

export {
  basicsFormulas,
  pressureFormulas,
  flowFormulas,
  pumpsFormulas,
  resistanceFormulas
};