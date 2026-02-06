// src/data/calculatorsMetadata.js
// Метадані для SEO та роутингу (доповнення до існуючих калькуляторів)

import { shellTubeMetadata } from './calculatorData';

// Мапа калькуляторів до категорій
export const categoryMap = {
  stress: 'strength',
  beam: 'strength',
  shaft: 'strength',
  bolt: 'strength',
  deformation: 'strength',
  column: 'strength',
  shear: 'strength',
  weld: 'strength',
  
  pipe: 'hydraulic',
  pump: 'hydraulic',
  ventilation: 'hydraulic',
  pressure_loss: 'hydraulic',
  orifice: 'hydraulic',
  valve: 'hydraulic',
  tank: 'hydraulic',
  hydraulic_cylinder: 'hydraulic',
  
  heattransfer: 'thermodynamic',
  insulation: 'thermodynamic',
  efficiency: 'thermodynamic',
  carnot: 'thermodynamic',
  heat_exchanger: 'thermodynamic',
  convection: 'thermodynamic',
  radiation: 'thermodynamic',
  enthalpy: 'thermodynamic',
  shell_tube: 'thermodynamic', // Додано для окремого калькулятора теплообмінника
  
  energy: 'energy',
  power: 'energy',
  solar: 'energy',
  wind: 'energy',
  transformer: 'energy',
  motor: 'energy',
  battery: 'energy',
  cable: 'energy'
};

// Додаткові описи для SEO (повні тексти для детальних сторінок)
export const calculatorSEO = {
  stress: {
    fullDesc: {
      uk: 'Професійний калькулятор для інженерного розрахунку нормальних напружень в конструкційних елементах. Визначення напружень при розтягу, стиску та згині з урахуванням геометрії перерізу та властивостей матеріалу.',
      ru: 'Профессиональный калькулятор для инженерного расчета нормальных напряжений в конструкционных элементах.',
      en: 'Professional calculator for engineering calculation of normal stresses in structural elements.',
      de: 'Professioneller Rechner für technische Berechnung von Normalspannungen in Strukturelementen.'
    },
    theory: {
      uk: `### Теорія напружень

**Напруження (σ)** - це інтенсивність внутрішніх сил, що виникають в матеріалі під дією зовнішніх навантажень.

#### Основна формула:
\`\`\`
σ = F / A
\`\`\`

Де:
- **σ** - нормальне напруження (МПа)
- **F** - прикладена сила (Н)
- **A** - площа поперечного перерізу (мм²)

#### Допустимі напруження для матеріалів:

| Матеріал | [σ] МПа |
|----------|---------|
| Сталь конструкційна | 160-200 |
| Алюміній | 80-100 |
| Мідь | 120-140 |
| Чавун | 100-120 |
| Дерево (сосна) | 8-12 |

#### Умова міцності:
\`\`\`
σ ≤ [σ] / n
\`\`\`
де n - коефіцієнт запасу міцності (зазвичай 1.5-2.5)`,
      ru: '### Теория напряжений\n\n**Напряжение** - интенсивность внутренних сил...',
      en: '### Stress Theory\n\n**Stress** is the intensity of internal forces...',
      de: '### Spannungstheorie\n\n**Spannung** ist die Intensität innerer Kräfte...'
    },
    useCases: [
      {
        uk: '🏗️ Перевірка міцності стержнів металоконструкцій',
        ru: '🏗️ Проверка прочности стержней металлоконструкций',
        en: '🏗️ Checking strength of steel structure members',
        de: '🏗️ Festigkeitsprüfung von Stahlkonstruktionselementen'
      },
      {
        uk: '🔩 Підбір площі перерізу при розтягу/стиску',
        ru: '🔩 Подбор площади сечения при растяжении/сжатии',
        en: '🔩 Cross-section area selection for tension/compression',
        de: '🔩 Querschnittsflächenauswahl für Zug/Druck'
      },
      {
        uk: '⚙️ Розрахунок елементів ферм та каркасів',
        ru: '⚙️ Расчет элементов ферм и каркасов',
        en: '⚙️ Calculating truss and frame elements',
        de: '⚙️ Berechnung von Fachwerk- und Rahmenelementen'
      },
      {
        uk: '🏭 Проектування несучих конструкцій будівель',
        ru: '🏭 Проектирование несущих конструкций зданий',
        en: '🏭 Designing load-bearing building structures',
        de: '🏭 Planung tragender Gebäudestrukturen'
      }
    ],
    examples: [
      {
        title: {
          uk: '📐 Приклад 1: Стальний стержень',
          ru: '📐 Пример 1: Стальной стержень',
          en: '📐 Example 1: Steel rod',
          de: '📐 Beispiel 1: Stahlstab'
        },
        description: {
          uk: 'Стальний стержень діаметром 20 мм навантажений силою 50 кН',
          ru: 'Стальной стержень диаметром 20 мм нагружен силой 50 кН',
          en: 'Steel rod with 20 mm diameter loaded with 50 kN force',
          de: 'Stahlstab mit 20 mm Durchmesser belastet mit 50 kN Kraft'
        },
        inputs: { force: 50000, area: 314 },
        result: {
          uk: 'σ = 159.2 МПа ✅ (менше допустимого 200 МПа)',
          ru: 'σ = 159.2 МПа ✅ (меньше допустимого 200 МПа)',
          en: 'σ = 159.2 MPa ✅ (below allowable 200 MPa)',
          de: 'σ = 159.2 MPa ✅ (unter zulässig 200 MPa)'
        }
      }
    ],
    relatedCalculators: ['beam', 'deformation', 'column']
  },

  beam: {
    fullDesc: {
      uk: 'Інженерний калькулятор для розрахунку згинальних моментів, поперечних сил та прогинів балок. Підтримка різних схем навантаження та типів опор.',
      ru: 'Инженерный калькулятор для расчета изгибающих моментов, поперечных сил и прогибов балок.',
      en: 'Engineering calculator for calculating bending moments, shear forces and beam deflections.',
      de: 'Technischer Rechner zur Berechnung von Biegemomenten, Querkräften und Balkendurchbiegungen.'
    },
    theory: {
      uk: `### Теорія згину балок

**Згин** - вид деформації, при якому вісь балки викривляється.

#### Максимальний момент для різних схем:

**Однопрогонова балка з рівномірним навантаженням:**
\`\`\`
M_max = q·L² / 8
\`\`\`

**Консольна балка:**
\`\`\`
M_max = q·L² / 2
\`\`\`

**Сила посередині прогону:**
\`\`\`
M_max = F·L / 4
\`\`\`

#### Напруження при згині:
\`\`\`
σ = M / W_x
\`\`\`

де W_x - момент опору перерізу`,
      ru: '### Теория изгиба балок',
      en: '### Beam Bending Theory',
      de: '### Balkenbiegetheorie'
    },
    useCases: [
      {
        uk: '🏢 Проектування перекриттів будівель',
        ru: '🏢 Проектирование перекрытий зданий',
        en: '🏢 Building floor design',
        de: '🏢 Gebäudedeckenplanung'
      }
    ],
    examples: [],
    relatedCalculators: ['stress', 'deformation', 'weld']
  },

  // Додайте решту калькуляторів за потреби...
  // Для економії місця показую структуру для 2-3 прикладів

  heattransfer: {
    fullDesc: {
      uk: 'Розрахунок теплового потоку через однорідну стінку за законом Фур\'є. Визначення теплових втрат через огородження будівель та промислового обладнання.',
      ru: 'Расчет теплового потока через однородную стенку по закону Фурье.',
      en: 'Heat flow calculation through homogeneous wall using Fourier\'s law.',
      de: 'Wärmeflussberechnung durch homogene Wand nach Fourier-Gesetz.'
    },
    theory: {
      uk: `### Закон теплопровідності Фур'є

\`\`\`
Q = λ · A · ΔT / δ
\`\`\`

Де:
- Q - тепловий потік (Вт)
- λ - коефіцієнт теплопровідності (Вт/м·К)
- A - площа поверхні (м²)
- ΔT - різниця температур (°C)
- δ - товщина стінки (м)`,
      ru: '### Закон теплопроводности Фурье',
      en: '### Fourier\'s Law of Heat Conduction',
      de: '### Fourier-Gesetz der Wärmeleitung'
    },
    useCases: [
      {
        uk: '🏠 Теплоізоляція будівель',
        ru: '🏠 Теплоизоляция зданий',
        en: '🏠 Building thermal insulation',
        de: '🏠 Gebäudewärmedämmung'
      }
    ],
    examples: [],
    relatedCalculators: ['insulation', 'heat_exchanger', 'convection']
  },

  pump: {
    fullDesc: {
      uk: 'Розрахунок необхідної потужності насосного обладнання для систем водопостачання, опалення та технологічних процесів.',
      ru: 'Расчет необходимой мощности насосного оборудования.',
      en: 'Calculating required pump equipment power.',
      de: 'Berechnung der erforderlichen Pumpenleistung.'
    },
    theory: {
      uk: `### Потужність насоса

\`\`\`
P = ρ · g · Q · H / η
\`\`\`

Де:
- ρ - густина рідини (кг/м³)
- g = 9.81 м/с²
- Q - витрата (м³/год)
- H - напір (м)
- η - ККД насоса (0.6-0.85)`,
      ru: '### Мощность насоса',
      en: '### Pump Power',
      de: '### Pumpenleistung'
    },
    useCases: [
      {
        uk: '💧 Системи водопостачання',
        ru: '💧 Системы водоснабжения',
        en: '💧 Water supply systems',
        de: '💧 Wasserversorgungssysteme'
      }
    ],
    examples: [],
    relatedCalculators: ['pipe', 'pressure_loss', 'valve']
  },
  shell_tube: shellTubeMetadata,
};

// Функція для отримання slug з ключа калькулятора
export const getCalculatorSlug = (calcKey) => calcKey;

// Функція для отримання повних даних калькулятора
export const getCalculatorData = (calcKey, existingCalculator) => {
  const metadata = calculatorSEO[calcKey] || {};
  
  return {
    slug: calcKey,
    category: categoryMap[calcKey],
    ...existingCalculator,
    ...metadata
  };
};

// Отримати всі калькулятори за категорією
export const getCalculatorsByCategory = (categoryId, calculators) => {
  return Object.entries(categoryMap)
    .filter(([_, cat]) => cat === categoryId)
    .map(([calcKey]) => ({
      id: calcKey,
      slug: calcKey,
      ...calculators[calcKey],
      ...calculatorSEO[calcKey]
    }));
};

// Отримати схожі калькулятори
export const getRelatedCalculators = (currentCalcKey, calculators, limit = 3) => {
  const metadata = calculatorSEO[currentCalcKey];
  const relatedIds = metadata?.relatedCalculators || [];
  
  return relatedIds.slice(0, limit).map(id => ({
    id,
    slug: id,
    ...calculators[id]
  }));
};