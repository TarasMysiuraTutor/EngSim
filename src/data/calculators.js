// Головний файл калькуляторів / Главный файл калькуляторов / Main calculators file
import { strengthCalculators } from './strength_of_materials.js';
import { hydraulicsCalculators } from './hydraulics.js';
import { thermodynamicsCalculators } from './thermodynamics.js';
import { energyCalculators } from './energy.js';

export const calculators = {
  ...strengthCalculators,
  ...hydraulicsCalculators,
  ...thermodynamicsCalculators,
  ...energyCalculators
};

// Категорії / Категории / Categories
export const categories = {
  uk: [
    { id: 'strength', name: 'Опір матеріалів', icon: '🔩' },
    { id: 'hydraulics', name: 'Гідравліка', icon: '💧' },
    { id: 'thermodynamics', name: 'Термодинаміка', icon: '🔥' },
    { id: 'energy', name: 'Енергетика', icon: '⚡' }
  ],
  ru: [
    { id: 'strength', name: 'Сопротивление материалов', icon: '🔩' },
    { id: 'hydraulics', name: 'Гидравлика', icon: '💧' },
    { id: 'thermodynamics', name: 'Термодинамика', icon: '🔥' },
    { id: 'energy', name: 'Энергетика', icon: '⚡' }
  ],
  en: [
    { id: 'strength', name: 'Strength of Materials', icon: '🔩' },
    { id: 'hydraulics', name: 'Hydraulics', icon: '💧' },
    { id: 'thermodynamics', name: 'Thermodynamics', icon: '🔥' },
    { id: 'energy', name: 'Energy', icon: '⚡' }
  ],
  de: [
    { id: 'strength', name: 'Festigkeitslehre', icon: '🔩' },
    { id: 'hydraulics', name: 'Hydraulik', icon: '💧' },
    { id: 'thermodynamics', name: 'Thermodynamik', icon: '🔥' },
    { id: 'energy', name: 'Energie', icon: '⚡' }
  ]
};

// Мапа калькуляторів до категорій / Карта калькуляторов к категориям / Calculators to categories map
export const calculatorCategories = {
  // Опір матеріалів / Сопротивление материалов / Strength of Materials
  stress: 'strength',
  beam: 'strength',
  shaft: 'strength',
  bolt: 'strength',
  deformation: 'strength',
  column: 'strength',
  shear: 'strength',
  weld: 'strength',

  // Гідравліка / Гидравлика / Hydraulics
  pipe: 'hydraulics',
  pump: 'hydraulics',
  pressure_loss: 'hydraulics',
  orifice: 'hydraulics',
  valve: 'hydraulics',
  tank: 'hydraulics',
  hydraulic_cylinder: 'hydraulics',
  ventilation: 'hydraulics',

  // Термодинаміка / Термодинамика / Thermodynamics
  heattransfer: 'thermodynamics',
  insulation: 'thermodynamics',
  efficiency: 'thermodynamics',
  carnot: 'thermodynamics',
  heat_exchanger: 'thermodynamics',
  convection: 'thermodynamics',
  radiation: 'thermodynamics',
  enthalpy: 'thermodynamics',

  // Енергетика / Энергетика / Energy
  energy: 'energy',
  power: 'energy',
  solar: 'energy',
  wind: 'energy',
  transformer: 'energy',
  motor: 'energy',
  battery: 'energy',
  cable: 'energy'
};

// Функція отримання калькуляторів за категорією
// Функция получения калькуляторов по категории
// Function to get calculators by category
export function getCalculatorsByCategory(categoryId) {
  const calcIds = Object.entries(calculatorCategories)
    .filter(([_, cat]) => cat === categoryId)
    .map(([id, _]) => id);
  
  return calcIds.map(id => ({
    id,
    ...calculators[id]
  }));
}

// Функція отримання всіх калькуляторів з категоріями
// Функция получения всех калькуляторов с категориями
// Function to get all calculators with categories
export function getAllCalculatorsGrouped() {
  const grouped = {};
  
  for (const [calcId, categoryId] of Object.entries(calculatorCategories)) {
    if (!grouped[categoryId]) {
      grouped[categoryId] = [];
    }
    grouped[categoryId].push({
      id: calcId,
      ...calculators[calcId]
    });
  }
  
  return grouped;
}