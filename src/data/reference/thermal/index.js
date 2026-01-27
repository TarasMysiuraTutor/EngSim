// src/data/reference/thermal/index.js
// ГОЛОВНИЙ ФАЙЛ - збирає всі дані теплообміну

// Імпорт формул
import allFormulas from './formulas/index.js';

// Імпорт таблиць (JSON)
import buildingMaterialsTable from './tables/materialProperties.json';
import waterPropertiesTable from './tables/fluidProperties.json';
import heatTransferCoefficientsTable from './tables/heatTransferCoefficients.json';

// Збираємо все разом
export const thermalReferenceData = {
  // ВСІ ФОРМУЛИ
  formulas: allFormulas,

  // ВСІ ТАБЛИЦІ
  tables: [
    buildingMaterialsTable,
    waterPropertiesTable,
    heatTransferCoefficientsTable
  ],

  // МЕТАДАНІ (для статистики)
  meta: {
    totalFormulas: allFormulas.length,
    totalTables: 3,
    categories: {
      formulas: ['conduction', 'convection', 'radiation', 'heat_exchangers', 'general'],
      tables: ['materials', 'fluids', 'convection']
    }
  }
};

export default thermalReferenceData;