// src/data/calculatorsMetadata.js
// Метадані для SEO та роутингу (доповнення до існуючих калькуляторів)

import { shellTubeMetadata } from "./shellTubeHeatExchanger";

// Мапа калькуляторів до категорій
export const categoryMap = {
  // Опір матеріалів / Сопротивление материалов / Strength of Materials
  stress: "strength",
  beam: "strength",
  shaft: "strength",
  bolt: "strength",
  deformation: "strength",
  column: "strength",
  shear: "strength",
  weld: "strength",

  // Гідравліка / Гидравлика / Hydraulics
  pipe: "hydraulic",
  pump: "hydraulic",
  ventilation: "hydraulic",
  pressure_loss: "hydraulic",
  orifice: "hydraulic",
  valve: "hydraulic",
  tank: "hydraulic",
  hydraulic_cylinder: "hydraulic",

  // Термодинаміка / Thermodynamics
  heattransfer: "thermodynamic",
  insulation: "thermodynamic",
  efficiency: "thermodynamic",
  carnot: "thermodynamic",
  heat_exchanger: "thermodynamic",
  convection: "thermodynamic",
  radiation: "thermodynamic",
  enthalpy: "thermodynamic",
  shell_tube: "thermodynamic", // Додано для окремого калькулятора теплообмінника

  // Енергетика / Энергетика / Energy
  energy: "energy",
  power: "energy",
  solar: "energy",
  wind: "energy",
  transformer: "energy",
  motor: "energy",
  battery: "energy",
  cable: "energy",

  // Масообмін / Массоперенос / Mass Transfer
  diffusion_flat_wall: "mass-transfer",
};

// Додаткові описи для SEO (повні тексти для детальних сторінок)
export const calculatorSEO = {
  stress: {
    fullDesc: {
      uk: "Професійний калькулятор для інженерного розрахунку нормальних напружень в конструкційних елементах. Визначення напружень при розтягу, стиску та згині з урахуванням геометрії перерізу та властивостей матеріалу.",
      ru: "Профессиональный калькулятор для инженерного расчета нормальных напряжений в конструкционных элементах.",
      en: "Professional calculator for engineering calculation of normal stresses in structural elements.",
      de: "Professioneller Rechner für technische Berechnung von Normalspannungen in Strukturelementen.",
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
      ru: "### Теория напряжений\n\n**Напряжение** - интенсивность внутренних сил...",
      en: "### Stress Theory\n\n**Stress** is the intensity of internal forces...",
      de: "### Spannungstheorie\n\n**Spannung** ist die Intensität innerer Kräfte...",
    },
    useCases: [
      {
        uk: "🏗️ Перевірка міцності стержнів металоконструкцій",
        ru: "🏗️ Проверка прочности стержней металлоконструкций",
        en: "🏗️ Checking strength of steel structure members",
        de: "🏗️ Festigkeitsprüfung von Stahlkonstruktionselementen",
      },
      {
        uk: "🔩 Підбір площі перерізу при розтягу/стиску",
        ru: "🔩 Подбор площади сечения при растяжении/сжатии",
        en: "🔩 Cross-section area selection for tension/compression",
        de: "🔩 Querschnittsflächenauswahl für Zug/Druck",
      },
      {
        uk: "⚙️ Розрахунок елементів ферм та каркасів",
        ru: "⚙️ Расчет элементов ферм и каркасов",
        en: "⚙️ Calculating truss and frame elements",
        de: "⚙️ Berechnung von Fachwerk- und Rahmenelementen",
      },
      {
        uk: "🏭 Проектування несучих конструкцій будівель",
        ru: "🏭 Проектирование несущих конструкций зданий",
        en: "🏭 Designing load-bearing building structures",
        de: "🏭 Planung tragender Gebäudestrukturen",
      },
    ],
    examples: [
      {
        title: {
          uk: "📐 Приклад 1: Стальний стержень",
          ru: "📐 Пример 1: Стальной стержень",
          en: "📐 Example 1: Steel rod",
          de: "📐 Beispiel 1: Stahlstab",
        },
        description: {
          uk: "Стальний стержень діаметром 20 мм навантажений силою 50 кН",
          ru: "Стальной стержень диаметром 20 мм нагружен силой 50 кН",
          en: "Steel rod with 20 mm diameter loaded with 50 kN force",
          de: "Stahlstab mit 20 mm Durchmesser belastet mit 50 kN Kraft",
        },
        inputs: { force: 50000, area: 314 },
        result: {
          uk: "σ = 159.2 МПа ✅ (менше допустимого 200 МПа)",
          ru: "σ = 159.2 МПа ✅ (меньше допустимого 200 МПа)",
          en: "σ = 159.2 MPa ✅ (below allowable 200 MPa)",
          de: "σ = 159.2 MPa ✅ (unter zulässig 200 MPa)",
        },
      },
    ],
    relatedCalculators: ["beam", "deformation", "column"],
  },

  beam: {
    fullDesc: {
      uk: "Інженерний калькулятор для розрахунку згинальних моментів, поперечних сил та прогинів балок. Підтримка різних схем навантаження та типів опор.",
      ru: "Инженерный калькулятор для расчета изгибающих моментов, поперечных сил и прогибов балок.",
      en: "Engineering calculator for calculating bending moments, shear forces and beam deflections.",
      de: "Technischer Rechner zur Berechnung von Biegemomenten, Querkräften und Balkendurchbiegungen.",
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
      ru: "### Теория изгиба балок",
      en: "### Beam Bending Theory",
      de: "### Balkenbiegetheorie",
    },
    useCases: [
      {
        uk: "🏢 Проектування перекриттів будівель",
        ru: "🏢 Проектирование перекрытий зданий",
        en: "🏢 Building floor design",
        de: "🏢 Gebäudedeckenplanung",
      },
    ],
    examples: [],
    relatedCalculators: ["stress", "deformation", "weld"],
  },

  heattransfer: {
    fullDesc: {
      uk: "Розрахунок теплового потоку через однорідну стінку за законом Фур'є. Визначення теплових втрат через огородження будівель та промислового обладнання.",
      ru: "Расчет теплового потока через однородную стенку по закону Фурье.",
      en: "Heat flow calculation through homogeneous wall using Fourier's law.",
      de: "Wärmeflussberechnung durch homogene Wand nach Fourier-Gesetz.",
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
      ru: "### Закон теплопроводности Фурье",
      en: "### Fourier's Law of Heat Conduction",
      de: "### Fourier-Gesetz der Wärmeleitung",
    },
    useCases: [
      {
        uk: "🏠 Теплоізоляція будівель",
        ru: "🏠 Теплоизоляция зданий",
        en: "🏠 Building thermal insulation",
        de: "🏠 Gebäudewärmedämmung",
      },
    ],
    examples: [],
    relatedCalculators: ["insulation", "heat_exchanger", "convection"],
  },

  pump: {
    fullDesc: {
      uk: "Розрахунок необхідної потужності насосного обладнання для систем водопостачання, опалення та технологічних процесів.",
      ru: "Расчет необходимой мощности насосного оборудования.",
      en: "Calculating required pump equipment power.",
      de: "Berechnung der erforderlichen Pumpenleistung.",
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
      ru: "### Мощность насоса",
      en: "### Pump Power",
      de: "### Pumpenleistung",
    },
    useCases: [
      {
        uk: "💧 Системи водопостачання",
        ru: "💧 Системы водоснабжения",
        en: "💧 Water supply systems",
        de: "💧 Wasserversorgungssysteme",
      },
    ],
    examples: [],
    relatedCalculators: ["pipe", "pressure_loss", "valve"],
  },
  shell_tube: shellTubeMetadata,
  diffusion_flat_wall: {
    fullDesc: {
      uk: "Професійний калькулятор для інженерного розрахунку стаціонарного масопереносу шляхом дифузії через плоску стінку. Дозволяє визначити потік маси за першим законом Фіка з урахуванням коефіцієнта дифузії, градієнта концентрації та геометрії шару.",
      ru: "Профессиональный калькулятор для инженерного расчета стационарного массопереноса путем диффузии через плоскую стенку.",
      en: "Professional calculator for engineering calculation of steady-state mass transfer by diffusion through a flat wall.",
      de: "Professioneller Rechner für die ingenieurmäßige Berechnung des stationären Stofftransports durch Diffusion durch eine ebene Wand.",
    },

    theory: {
      uk: `### Теорія масообміну

**Масообмін** — це процес перенесення речовини внаслідок градієнта концентрації.

У випадку **стаціонарної дифузії через плоску стінку** процес описується **першим законом Фіка**.

#### Основна формула:
\`\`\`
J = -D · (ΔC / Δx)
\`\`\`

Де:
- **J** — густина потоку маси (кг/(м²·с))
- **D** — коефіцієнт дифузії (м²/с)
- **ΔC** — різниця концентрацій по товщині шару
- **Δx** — товщина дифузійного шару

Знак «–» вказує, що дифузія відбувається у напрямку зменшення концентрації.

#### Умови застосування:
- стаціонарний режим
- одновимірний масоперенос
- сталий коефіцієнт дифузії
- відсутність хімічних реакцій`,

      ru: "### Теория массообмена\n\n**Массообмен** — процесс переноса вещества под действием градиента концентрации...\n\nОсновная формула первого закона Фика:\nJ = -D · (ΔC / Δx)",
      en: "### Mass Transfer Theory\n\n**Mass transfer** is the transport of matter caused by a concentration gradient...\n\nThe process is described by Fick’s first law:\nJ = -D · (ΔC / Δx)",
      de: "### Stoffübergangstheorie\n\n**Stofftransport** ist der Transport von Materie infolge eines Konzentrationsgradienten...\n\nBeschrieben durch das erste Ficksche Gesetz:\nJ = -D · (ΔC / Δx)",
    },

    useCases: [
      {
        uk: "🧪 Аналіз дифузії газів і рідин через мембрани",
        ru: "🧪 Анализ диффузии газов и жидкостей через мембраны",
        en: "🧪 Analysis of gas and liquid diffusion through membranes",
        de: "🧪 Analyse der Diffusion von Gasen und Flüssigkeiten durch Membranen",
      },
      {
        uk: "🏭 Проєктування апаратів масообміну та сепарації",
        ru: "🏭 Проектирование аппаратов массообмена и сепарации",
        en: "🏭 Design of mass transfer and separation equipment",
        de: "🏭 Auslegung von Stoffaustausch- und Trennapparaten",
      },
      {
        uk: "⚗️ Розрахунок дифузійних процесів у хімічній технології",
        ru: "⚗️ Расчет диффузионных процессов в химической технологии",
        en: "⚗️ Calculation of diffusion processes in chemical engineering",
        de: "⚗️ Berechnung von Diffusionsprozessen in der chemischen Verfahrenstechnik",
      },
      {
        uk: "🌬️ Оцінка проникності захисних і бар'єрних матеріалів",
        ru: "🌬️ Оценка проницаемости защитных и барьерных материалов",
        en: "🌬️ Evaluation of permeability of protective and barrier materials",
        de: "🌬️ Bewertung der Permeabilität von Schutz- und Barriermaterialien",
      },
    ],

    examples: [
      {
        title: {
          uk: "📐 Приклад: Дифузія газу через мембрану",
          ru: "📐 Пример: Диффузия газа через мембрану",
          en: "📐 Example: Gas diffusion through a membrane",
          de: "📐 Beispiel: Gasdiffusion durch eine Membran",
        },
        description: {
          uk: "Коефіцієнт дифузії 1.8·10⁻⁵ м²/с, різниця концентрацій 0.5 кг/м³, товщина шару 2 мм",
          ru: "Коэффициент диффузии 1.8·10⁻⁵ м²/с, разность концентраций 0.5 кг/м³, толщина слоя 2 мм",
          en: "Diffusion coefficient 1.8·10⁻⁵ m²/s, concentration difference 0.5 kg/m³, layer thickness 2 mm",
          de: "Diffusionskoeffizient 1.8·10⁻⁵ m²/s, Konzentrationsdifferenz 0.5 kg/m³, Schichtdicke 2 mm",
        },
        inputs: { D: 1.8e-5, deltaC: 0.5, deltaX: 0.002 },
        result: {
          uk: "J = 4.5·10⁻³ кг/(м²·с)",
          ru: "J = 4.5·10⁻³ кг/(м²·с)",
          en: "J = 4.5·10⁻³ kg/(m²·s)",
          de: "J = 4.5·10⁻³ kg/(m²·s)",
        },
      },
    ],

    relatedCalculators: ["convection", "heattransfer", "shell_tube"],
  },
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
    ...metadata,
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
      ...calculatorSEO[calcKey],
    }));
};

// Отримати схожі калькулятори
export const getRelatedCalculators = (
  currentCalcKey,
  calculators,
  limit = 3,
) => {
  const metadata = calculatorSEO[currentCalcKey];
  const relatedIds = metadata?.relatedCalculators || [];

  return relatedIds.slice(0, limit).map((id) => ({
    id,
    slug: id,
    ...calculators[id],
  }));
};
