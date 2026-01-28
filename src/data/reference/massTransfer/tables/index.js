// src/data/reference/massTransfer/tables/index.js
import diffusionCoefficients from './diffusionCoefficients.json';
import equilibriumData from './equilibriumData.json';
import massTransferCoefficients from './massTransferCoefficients.json';
import liquidDiffusionCoefficients from './liquidDiffusionCoefficients.json';
import packingCharacteristics from './packingCharacteristics.json';
import adsorbentProperties from './adsorbentProperties.json';
import dryingEquipment from './dryingEquipment.json';

export const allTables = [
  diffusionCoefficients,
  liquidDiffusionCoefficients,
  equilibriumData,
  massTransferCoefficients,
  packingCharacteristics,
  adsorbentProperties,
  dryingEquipment
];

export {
  diffusionCoefficients,
  liquidDiffusionCoefficients,
  equilibriumData,
  massTransferCoefficients,
  packingCharacteristics,
  adsorbentProperties,
  dryingEquipment
};