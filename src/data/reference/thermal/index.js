// src/data/reference/thermal/index.js
// ГОЛОВНИЙ ФАЙЛ - збирає всі дані теплообміну

// Імпорт формул
import allFormulas from './formulas/index.js';

// Імпорт таблиць (JSON)
import airPropertiesTable from './tables/airProperties.json';
import emissivityTable from './tables/emissivity.json';
import waterPropertiesTable from './tables/fluidProperties.json';
import heatExchangerTypesTable from './tables/heatExchangerTypes.json';
import heatTransferCoefficientsTable from './tables/heatTransferCoefficients.json';
import buildingMaterialsTable from './tables/materialProperties.json';
import metalPropertiesTable from './tables/metalProperties.json';
import steamPropertiesTable from './tables/steamProperties.json';

// Збираємо все разом
export const thermalReferenceData = {
  // ВСІ ФОРМУЛИ
  formulas: allFormulas,

  // ВСІ ТАБЛИЦІ
  tables: [
    buildingMaterialsTable,
    metalPropertiesTable,
    waterPropertiesTable,
    airPropertiesTable,
    steamPropertiesTable,
    heatTransferCoefficientsTable,
    emissivityTable,
    heatExchangerTypesTable
  ],

  // МЕТАДАНІ (для статистики)
  meta: {
    totalFormulas: allFormulas.length,
    totalTables: 8,
    categories: {
      formulas: ['conduction', 'convection', 'radiation', 'heat_exchangers', 'general', 'phase_change'],
      tables: ['materials', 'fluids', 'convection', 'radiation', 'heat_exchangers']
    }
  }
};

export default thermalReferenceData;
