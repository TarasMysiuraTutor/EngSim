// src/data/reference/hydraulics/tables/index.js
import fluidsProperties from './fluids.json';
import pipesSteel from './pipes.json';
import resistanceCoefficients from './coefficients.json';
import pipeRoughness from './roughness.json';

export const allTables = [
  fluidsProperties,
  pipesSteel,
  resistanceCoefficients,
  pipeRoughness
];

export {
  fluidsProperties,
  pipesSteel,
  resistanceCoefficients,
  pipeRoughness
};