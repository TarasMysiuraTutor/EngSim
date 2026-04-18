// calculatorData.js
// Додайте цей об'єкт до вашого файлу data/calculators.js

export const shellTubeHeatExchanger = {
  icon: "🔄",
  title: {
    uk: "Кожухотрубний теплообмінник",
    ru: "Кожухотрубный теплообменник",
    en: "Shell and Tube Heat Exchanger",
    de: "Rohrbündel-Wärmetauscher",
  },
  desc: {
    uk: "Розрахунок площі теплопередачі, LMTD та ефективності кожухотрубного теплообмінника",
    ru: "Расчет площади теплопередачи, LMTD и эффективности кожухотрубного теплообменника",
    en: "Calculation of heat transfer area, LMTD and effectiveness of shell and tube heat exchanger",
    de: "Berechnung der Wärmeübertragungsfläche, LMTD und Effektivität des Rohrbündel-Wärmetauschers",
  },
  fields: [
    // Гаряча рідина
    {
      id: "mHot",
      label: {
        uk: "Масова витрата гарячої рідини",
        ru: "Массовый расход горячей жидкости",
        en: "Hot fluid mass flow rate",
        de: "Massenstrom der heißen Flüssigkeit",
      },
      unit: "кг/с",
    },
    {
      id: "tHotIn",
      label: {
        uk: "Температура входу гарячої рідини",
        ru: "Температура входа горячей жидкости",
        en: "Hot fluid inlet temperature",
        de: "Eintrittstemperatur der heißen Flüssigkeit",
      },
      unit: "°C",
    },
    {
      id: "tHotOut",
      label: {
        uk: "Температура виходу гарячої рідини",
        ru: "Температура выхода горячей жидкости",
        en: "Hot fluid outlet temperature",
        de: "Austrittstemperatur der heißen Flüssigkeit",
      },
      unit: "°C",
    },
    {
      id: "cpHot",
      label: {
        uk: "Питома теплоємність гарячої рідини",
        ru: "Удельная теплоемкость горячей жидкости",
        en: "Hot fluid specific heat capacity",
        de: "Spezifische Wärmekapazität der heißen Flüssigkeit",
      },
      unit: "Дж/(кг·К)",
    },
    // Холодна рідина
    {
      id: "mCold",
      label: {
        uk: "Масова витрата холодної рідини",
        ru: "Массовый расход холодной жидкости",
        en: "Cold fluid mass flow rate",
        de: "Massenstrom der kalten Flüssigkeit",
      },
      unit: "кг/с",
    },
    {
      id: "tColdIn",
      label: {
        uk: "Температура входу холодної рідини",
        ru: "Температура входа холодной жидкости",
        en: "Cold fluid inlet temperature",
        de: "Eintrittstemperatur der kalten Flüssigkeit",
      },
      unit: "°C",
    },
    {
      id: "tColdOut",
      label: {
        uk: "Температура виходу холодної рідини",
        ru: "Температура выхода холодной жидкости",
        en: "Cold fluid outlet temperature",
        de: "Austrittstemperatur der kalten Flüssigkeit",
      },
      unit: "°C",
    },
    {
      id: "cpCold",
      label: {
        uk: "Питома теплоємність холодної рідини",
        ru: "Удельная теплоемкость холодной жидкости",
        en: "Cold fluid specific heat capacity",
        de: "Spezifische Wärmekapazität der kalten Flüssigkeit",
      },
      unit: "Дж/(кг·К)",
    },
    // Параметри теплообмінника
    {
      id: "U",
      label: {
        uk: "Коефіцієнт теплопередачі",
        ru: "Коэффициент теплопередачи",
        en: "Overall heat transfer coefficient",
        de: "Wärmeübertragungskoeffizient",
      },
      unit: "Вт/(м²·К)",
    },
    {
      id: "dTube",
      label: {
        uk: "Зовнішній діаметр труби",
        ru: "Наружный диаметр трубы",
        en: "Tube outer diameter",
        de: "Rohr-Außendurchmesser",
      },
      unit: "м",
    },
    {
      id: "nTubes",
      label: {
        uk: "Кількість труб",
        ru: "Количество труб",
        en: "Number of tubes",
        de: "Anzahl der Rohre",
      },
      unit: "",
    },
    {
      id: "L",
      label: {
        uk: "Довжина труби",
        ru: "Длина трубы",
        en: "Tube length",
        de: "Rohrlänge",
      },
      unit: "м",
    },
  ],
  calculate: (data) => {
    const mHot = parseFloat(data.mHot);
    const tHotIn = parseFloat(data.tHotIn);
    const tHotOut = parseFloat(data.tHotOut);
    const cpHot = parseFloat(data.cpHot);

    const mCold = parseFloat(data.mCold);
    const tColdIn = parseFloat(data.tColdIn);
    const tColdOut = parseFloat(data.tColdOut);
    const cpCold = parseFloat(data.cpCold);

    const U = parseFloat(data.U);
    const dTube = parseFloat(data.dTube);
    const nTubes = parseFloat(data.nTubes);
    const L = parseFloat(data.L);

    // Розрахунки
    const QHot = mHot * cpHot * (tHotIn - tHotOut);
    const QCold = mCold * cpCold * (tColdOut - tColdIn);
    const QAvg = (QHot + QCold) / 2;

    const deltaT1 = tHotIn - tColdOut;
    const deltaT2 = tHotOut - tColdIn;

    let LMTD;
    if (Math.abs(deltaT1 - deltaT2) < 0.01) {
      LMTD = deltaT1;
    } else {
      LMTD = (deltaT1 - deltaT2) / Math.log(deltaT1 / deltaT2);
    }

    const ARequired = QAvg / (U * LMTD);
    const AAvailable = Math.PI * dTube * L * nTubes;
    const areaMargin = ((AAvailable - ARequired) / ARequired) * 100;

    const Cmin = Math.min(mHot * cpHot, mCold * cpCold);
    const QMax = Cmin * (tHotIn - tColdIn);
    const effectiveness = (QAvg / QMax) * 100;

    return {
      uk: `Теплове навантаження: ${QAvg.toFixed(2)} Вт
LMTD: ${LMTD.toFixed(2)} °C
Необхідна площа: ${ARequired.toFixed(3)} м²
Доступна площа: ${AAvailable.toFixed(3)} м²
Запас площі: ${areaMargin.toFixed(1)}%
Ефективність: ${effectiveness.toFixed(1)}%

${areaMargin >= 0 ? "✅ Теплообмінник ПІДХОДИТЬ" : "❌ Теплообмінник НЕ ПІДХОДИТЬ"}`,

      ru: `Тепловая нагрузка: ${QAvg.toFixed(2)} Вт
LMTD: ${LMTD.toFixed(2)} °C
Необходимая площадь: ${ARequired.toFixed(3)} м²
Доступная площадь: ${AAvailable.toFixed(3)} м²
Запас площади: ${areaMargin.toFixed(1)}%
Эффективность: ${effectiveness.toFixed(1)}%

${areaMargin >= 0 ? "✅ Теплообменник ПОДХОДИТ" : "❌ Теплообменник НЕ ПОДХОДИТ"}`,

      en: `Heat duty: ${QAvg.toFixed(2)} W
LMTD: ${LMTD.toFixed(2)} °C
Required area: ${ARequired.toFixed(3)} m²
Available area: ${AAvailable.toFixed(3)} m²
Area margin: ${areaMargin.toFixed(1)}%
Effectiveness: ${effectiveness.toFixed(1)}%

${areaMargin >= 0 ? "✅ Heat exchanger is ADEQUATE" : "❌ Heat exchanger is INADEQUATE"}`,

      de: `Wärmeleistung: ${QAvg.toFixed(2)} W
LMTD: ${LMTD.toFixed(2)} °C
Erforderliche Fläche: ${ARequired.toFixed(3)} m²
Verfügbare Fläche: ${AAvailable.toFixed(3)} m²
Flächenreserve: ${areaMargin.toFixed(1)}%
Effektivität: ${effectiveness.toFixed(1)}%

${areaMargin >= 0 ? "✅ Wärmetauscher ist AUSREICHEND" : "❌ Wärmetauscher ist NICHT AUSREICHEND"}`,
    };
  },
};

// Метадані для SEO
export const shellTubeMetadata = {
  fullDesc: {
    uk: "Професійний калькулятор для розрахунку кожухотрубних теплообмінників. Розраховує теплове навантаження, логарифмічну середню різницю температур (LMTD), необхідну площу теплопередачі та ефективність теплообмінника.",
    ru: "Профессиональный калькулятор для расчета кожухотрубных теплообменников. Рассчитывает тепловую нагрузку, логарифмическую среднюю разность температур (LMTD), необходимую площадь теплопередачи и эффективность теплообменника.",
    en: "Professional calculator for shell and tube heat exchanger design. Calculates heat duty, log mean temperature difference (LMTD), required heat transfer area and heat exchanger effectiveness.",
    de: "Professioneller Rechner für Rohrbündel-Wärmetauscher. Berechnet Wärmeleistung, logarithmische mittlere Temperaturdifferenz (LMTD), erforderliche Wärmeübertragungsfläche und Effektivität.",
  },
  theory: {
    uk: `Кожухотрубний теплообмінник - один з найпоширеніших типів теплообмінного обладнання в промисловості.

Принцип роботи:
• Одна рідина тече всередині труб (трубний простір)
• Інша рідина омиває труби ззовні (міжтрубний/кожуховий простір)
• Теплопередача відбувається через стінки труб

Основне рівняння теплопередачі:
Q = U × A × LMTD

де:
Q - теплове навантаження (Вт)
U - загальний коефіцієнт теплопередачі (Вт/(м²·К))
A - площа теплопередачі (м²)
LMTD - логарифмічна середня різниця температур (°C)

LMTD розраховується як:
LMTD = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)

де ΔT₁ та ΔT₂ - різниці температур на кінцях теплообмінника.`,

    ru: `Кожухотрубный теплообменник - один из наиболее распространенных типов теплообменного оборудования в промышленности.

Принцип работы:
• Одна жидкость течет внутри труб (трубное пространство)
• Другая жидкость омывает трубы снаружи (межтрубное/кожуховое пространство)
• Теплопередача происходит через стенки труб

Основное уравнение теплопередачи:
Q = U × A × LMTD

где:
Q - тепловая нагрузка (Вт)
U - общий коэффициент теплопередачи (Вт/(м²·К))
A - площадь теплопередачи (м²)
LMTD - логарифмическая средняя разность температур (°C)

LMTD рассчитывается как:
LMTD = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)

где ΔT₁ и ΔT₂ - разности температур на концах теплообменника.`,

    en: `Shell and tube heat exchanger is one of the most common types of heat transfer equipment in industry.

Operating principle:
• One fluid flows inside the tubes (tube side)
• Another fluid flows outside the tubes (shell side)
• Heat transfer occurs through tube walls

Basic heat transfer equation:
Q = U × A × LMTD

where:
Q - heat duty (W)
U - overall heat transfer coefficient (W/(m²·K))
A - heat transfer area (m²)
LMTD - log mean temperature difference (°C)

LMTD is calculated as:
LMTD = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)

where ΔT₁ and ΔT₂ are temperature differences at the ends of the heat exchanger.`,

    de: `Rohrbündel-Wärmetauscher ist einer der häufigsten Typen von Wärmeübertragungsgeräten in der Industrie.

Funktionsprinzip:
• Eine Flüssigkeit fließt innerhalb der Rohre (Rohrseite)
• Andere Flüssigkeit umströmt die Rohre von außen (Mantelseite)
• Wärmeübertragung erfolgt durch Rohrwände

Grundlegende Wärmeübertragungsgleichung:
Q = U × A × LMTD

wobei:
Q - Wärmeleistung (W)
U - Wärmeübertragungskoeffizient (W/(m²·K))
A - Wärmeübertragungsfläche (m²)
LMTD - logarithmische mittlere Temperaturdifferenz (°C)

LMTD wird berechnet als:
LMTD = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)

wobei ΔT₁ und ΔT₂ Temperaturdifferenzen an den Enden des Wärmetauschers sind.`,
  },
  useCases: [
    {
      uk: "Проектування нових теплообмінників для хімічних процесів",
      ru: "Проектирование новых теплообменников для химических процессов",
      en: "Design of new heat exchangers for chemical processes",
      de: "Auslegung neuer Wärmetauscher für chemische Prozesse",
    },
    {
      uk: "Перевірка існуючого обладнання на відповідність новим умовам",
      ru: "Проверка существующего оборудования на соответствие новым условиям",
      en: "Verification of existing equipment for new operating conditions",
      de: "Überprüfung bestehender Anlagen für neue Betriebsbedingungen",
    },
    {
      uk: "Оптимізація енергоспоживання в системах теплообміну",
      ru: "Оптимизация энергопотребления в системах теплообмена",
      en: "Energy consumption optimization in heat exchange systems",
      de: "Energieverbrauchsoptimierung in Wärmeaustauschsystemen",
    },
    {
      uk: "Розрахунки для нафтопереробної та газової промисловості",
      ru: "Расчеты для нефтеперерабатывающей и газовой промышленности",
      en: "Calculations for oil refining and gas industry",
      de: "Berechnungen für Öl- und Gasindustrie",
    },
  ],
};

// Додайте до categoryMap
// 'shell_tube': 'thermodynamic'
