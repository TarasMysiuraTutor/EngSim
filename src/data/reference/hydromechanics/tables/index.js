// ============================================
// FILE: src/data/reference/hydromechanics/tables/index.js
// ============================================

import { settlingRegimesTable } from "./settlingRegimes";
import { filterTypesTable } from "./filterTypes";
import { centrifugeComparisonTable } from "./centrifugeComparison";
import { mixerTypesTable } from "./mixerTypes";
import { fluidizationRegimesTable } from "./fluidizationRegimes";

export const hydromechanicsTables = [
  settlingRegimesTable,
  filterTypesTable,
  centrifugeComparisonTable,
  mixerTypesTable,
  fluidizationRegimesTable,
];