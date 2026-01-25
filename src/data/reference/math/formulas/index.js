// src/data/reference/math/formulas/index.js
import { geometryFormulas } from './geometry';
import { trigonometryFormulas } from './trigonometry';
import { algebraFormulas } from './algebra';
import { calculusFormulas } from './calculus';

export const allFormulas = [
  ...geometryFormulas,
  ...trigonometryFormulas,
  ...algebraFormulas,
  ...calculusFormulas
];

export {
  geometryFormulas,
  trigonometryFormulas,
  algebraFormulas,
  calculusFormulas
};