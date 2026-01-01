// Енергетика / Энергетика / Energy
export const energyCalculators = {
  energy: {
    title: { uk: 'Енергозбереження', ru: 'Энергосбережение', en: 'Energy Savings', de: 'Energieeinsparung' },
    icon: '🔋',
    desc: { uk: 'Окупність інвестицій', ru: 'Окупаемость инвестиций', en: 'Investment payback', de: 'Investitionsamortisation' },
    fields: [
      { id: 'savings', label: { uk: 'Економія енергії (кВт·год/рік)', ru: 'Экономия энергии (кВт·ч/год)', en: 'Energy savings (kWh/year)', de: 'Energieeinsparung (kWh/Jahr)' } },
      { id: 'cost', label: { uk: 'Вартість енергії ($/кВт·год)', ru: 'Стоимость энергии ($/кВт·ч)', en: 'Energy cost ($/kWh)', de: 'Energiekosten ($/kWh)' } },
      { id: 'investment', label: { uk: 'Інвестиції ($)', ru: 'Инвестиции ($)', en: 'Investment ($)', de: 'Investition ($)' } }
    ],
    calculate: (inputs) => {
      const annualSavings = inputs.savings * inputs.cost;
      const payback = inputs.investment / annualSavings;
      return {
        uk: `Річна економія: $${annualSavings.toFixed(0)}\nТермін окупності: ${payback.toFixed(1)} років`,
        ru: `Годовая экономия: $${annualSavings.toFixed(0)}\nСрок окупаемости: ${payback.toFixed(1)} лет`,
        en: `Annual savings: $${annualSavings.toFixed(0)}\nPayback period: ${payback.toFixed(1)} years`,
        de: `Jährliche Einsparung: $${annualSavings.toFixed(0)}\nAmortisationszeit: ${payback.toFixed(1)} Jahre`
      };
    }
  },

  power: {
    title: { uk: 'Потужність обладнання', ru: 'Мощность оборудования', en: 'Equipment Power', de: 'Anlagenleistung' },
    icon: '⚡',
    desc: { uk: 'Споживання енергії', ru: 'Потребление энергии', en: 'Energy consumption', de: 'Energieverbrauch' },
    fields: [
      { id: 'P', label: { uk: 'Потужність (кВт)', ru: 'Мощность (кВт)', en: 'Power (kW)', de: 'Leistung (kW)' } },
      { id: 'hours', label: { uk: 'Години роботи/день', ru: 'Часы работы/день', en: 'Operating hours/day', de: 'Betriebsstunden/Tag' } },
      { id: 'days', label: { uk: 'Робочих днів/рік', ru: 'Рабочих дней/год', en: 'Working days/year', de: 'Arbeitstage/Jahr' } },
      { id: 'cost', label: { uk: 'Вартість енергії ($/кВт·год)', ru: 'Стоимость энергии ($/кВт·ч)', en: 'Energy cost ($/kWh)', de: 'Energiekosten ($/kWh)' } }
    ],
    calculate: (inputs) => {
      const annual = inputs.P * inputs.hours * inputs.days;
      const annualCost = annual * inputs.cost;
      return {
        uk: `Річне споживання: ${annual.toFixed(0)} кВт·год\nВартість: $${annualCost.toFixed(0)}/рік`,
        ru: `Годовое потребление: ${annual.toFixed(0)} кВт·ч\nСтоимость: $${annualCost.toFixed(0)}/год`,
        en: `Annual consumption: ${annual.toFixed(0)} kWh\nCost: $${annualCost.toFixed(0)}/year`,
        de: `Jahresverbrauch: ${annual.toFixed(0)} kWh\nKosten: $${annualCost.toFixed(0)}/Jahr`
      };
    }
  },

  solar: {
    title: { uk: 'Сонячна енергія', ru: 'Солнечная энергия', en: 'Solar Energy', de: 'Solarenergie' },
    icon: '☀️',
    desc: { uk: 'Вироблення енергії', ru: 'Выработка энергии', en: 'Energy production', de: 'Energieerzeugung' },
    fields: [
      { id: 'area', label: { uk: 'Площа панелей (м²)', ru: 'Площадь панелей (м²)', en: 'Panel area (m²)', de: 'Panelfläche (m²)' } },
      { id: 'efficiency', label: { uk: 'ККД панелей (%)', ru: 'КПД панелей (%)', en: 'Panel efficiency (%)', de: 'Panelwirkungsgrad (%)' } },
      { id: 'radiation', label: { uk: 'Сонячна радіація (кВт·год/м²/день)', ru: 'Солнечная радиация (кВт·ч/м²/день)', en: 'Solar radiation (kWh/m²/day)', de: 'Sonneneinstrahlung (kWh/m²/Tag)' } },
      { id: 'days', label: { uk: 'Сонячних днів/рік', ru: 'Солнечных дней/год', en: 'Sunny days/year', de: 'Sonnentage/Jahr' } }
    ],
    calculate: (inputs) => {
      const dailyProduction = inputs.area * (inputs.efficiency / 100) * inputs.radiation;
      const annualProduction = dailyProduction * inputs.days;
      return {
        uk: `Добова вироблення: ${dailyProduction.toFixed(2)} кВт·год\nРічне вироблення: ${annualProduction.toFixed(0)} кВт·год`,
        ru: `Суточная выработка: ${dailyProduction.toFixed(2)} кВт·ч\nГодовая выработка: ${annualProduction.toFixed(0)} кВт·ч`,
        en: `Daily production: ${dailyProduction.toFixed(2)} kWh\nAnnual production: ${annualProduction.toFixed(0)} kWh`,
        de: `Tägliche Produktion: ${dailyProduction.toFixed(2)} kWh\nJahresproduktion: ${annualProduction.toFixed(0)} kWh`
      };
    }
  },

  wind: {
    title: { uk: 'Вітрова енергія', ru: 'Ветровая энергия', en: 'Wind Energy', de: 'Windenergie' },
    icon: '💨',
    desc: { uk: 'Потужність турбіни', ru: 'Мощность турбины', en: 'Turbine power', de: 'Turbinenleistung' },
    fields: [
      { id: 'D', label: { uk: 'Діаметр ротора (м)', ru: 'Диаметр ротора (м)', en: 'Rotor diameter (m)', de: 'Rotordurchmesser (m)' } },
      { id: 'v', label: { uk: 'Швидкість вітру (м/с)', ru: 'Скорость ветра (м/с)', en: 'Wind speed (m/s)', de: 'Windgeschwindigkeit (m/s)' } },
      { id: 'Cp', label: { uk: 'Коефіцієнт потужності', ru: 'Коэффициент мощности', en: 'Power coefficient', de: 'Leistungsbeiwert' } }
    ],
    calculate: (inputs) => {
      const A = Math.PI * Math.pow(inputs.D / 2, 2);
      const P = 0.5 * 1.225 * A * Math.pow(inputs.v, 3) * inputs.Cp;
      const annualEnergy = P * 8760 / 1000;
      return {
        uk: `Потужність: ${(P / 1000).toFixed(2)} кВт\nРічна енергія (100% використання): ${annualEnergy.toFixed(0)} МВт·год`,
        ru: `Мощность: ${(P / 1000).toFixed(2)} кВт\nГодовая энергия (100% использования): ${annualEnergy.toFixed(0)} МВт·ч`,
        en: `Power: ${(P / 1000).toFixed(2)} kW\nAnnual energy (100% utilization): ${annualEnergy.toFixed(0)} MWh`,
        de: `Leistung: ${(P / 1000).toFixed(2)} kW\nJahresenergie (100% Nutzung): ${annualEnergy.toFixed(0)} MWh`
      };
    }
  },

  transformer: {
    title: { uk: 'Трансформатор', ru: 'Трансформатор', en: 'Transformer', de: 'Transformator' },
    icon: '🔌',
    desc: { uk: 'Параметри та втрати', ru: 'Параметры и потери', en: 'Parameters and losses', de: 'Parameter und Verluste' },
    fields: [
      { id: 'S', label: { uk: 'Потужність (кВА)', ru: 'Мощность (кВА)', en: 'Power (kVA)', de: 'Leistung (kVA)' } },
      { id: 'U1', label: { uk: 'Первинна напруга (В)', ru: 'Первичное напряжение (В)', en: 'Primary voltage (V)', de: 'Primärspannung (V)' } },
      { id: 'U2', label: { uk: 'Вторинна напруга (В)', ru: 'Вторичное напряжение (В)', en: 'Secondary voltage (V)', de: 'Sekundärspannung (V)' } },
      { id: 'losses', label: { uk: 'Втрати (%)', ru: 'Потери (%)', en: 'Losses (%)', de: 'Verluste (%)' } }
    ],
    calculate: (inputs) => {
      const k = inputs.U2 / inputs.U1;
      const I1 = (inputs.S * 1000) / inputs.U1;
      const I2 = (inputs.S * 1000) / inputs.U2;
      const lossesKW = inputs.S * (inputs.losses / 100);
      return {
        uk: `Коефіцієнт трансформації: ${k.toFixed(3)}\nПервинний струм: ${I1.toFixed(2)} А\nВторинний струм: ${I2.toFixed(2)} А\nВтрати: ${lossesKW.toFixed(2)} кВт`,
        ru: `Коэффициент трансформации: ${k.toFixed(3)}\nПервичный ток: ${I1.toFixed(2)} А\nВторичный ток: ${I2.toFixed(2)} А\nПотери: ${lossesKW.toFixed(2)} кВт`,
        en: `Transformation ratio: ${k.toFixed(3)}\nPrimary current: ${I1.toFixed(2)} A\nSecondary current: ${I2.toFixed(2)} A\nLosses: ${lossesKW.toFixed(2)} kW`,
        de: `Transformationsverhältnis: ${k.toFixed(3)}\nPrimärstrom: ${I1.toFixed(2)} A\nSekundärstrom: ${I2.toFixed(2)} A\nVerluste: ${lossesKW.toFixed(2)} kW`
      };
    }
  },

  motor: {
    title: { uk: 'Електродвигун', ru: 'Электродвигатель', en: 'Electric Motor', de: 'Elektromotor' },
    icon: '🔄',
    desc: { uk: 'Струм та ККД', ru: 'Ток и КПД', en: 'Current and efficiency', de: 'Strom und Wirkungsgrad' },
    fields: [
      { id: 'P', label: { uk: 'Потужність (кВт)', ru: 'Мощность (кВт)', en: 'Power (kW)', de: 'Leistung (kW)' } },
      { id: 'U', label: { uk: 'Напруга (В)', ru: 'Напряжение (В)', en: 'Voltage (V)', de: 'Spannung (V)' } },
      { id: 'cosφ', label: { uk: 'Коефіцієнт потужності', ru: 'Коэффициент мощности', en: 'Power factor', de: 'Leistungsfaktor' } },
      { id: 'eta', label: { uk: 'ККД (%)', ru: 'КПД (%)', en: 'Efficiency (%)', de: 'Wirkungsgrad (%)' } }
    ],
    calculate: (inputs) => {
      const I = (inputs.P * 1000) / (Math.sqrt(3) * inputs.U * inputs.cosφ * (inputs.eta / 100));
      const Pin = inputs.P / (inputs.eta / 100);
      const losses = Pin - inputs.P;
      return {
        uk: `Струм: ${I.toFixed(2)} А\nСпоживана потужність: ${Pin.toFixed(2)} кВт\nВтрати: ${losses.toFixed(2)} кВт`,
        ru: `Ток: ${I.toFixed(2)} А\nПотребляемая мощность: ${Pin.toFixed(2)} кВт\nПотери: ${losses.toFixed(2)} кВт`,
        en: `Current: ${I.toFixed(2)} A\nInput power: ${Pin.toFixed(2)} kW\nLosses: ${losses.toFixed(2)} kW`,
        de: `Strom: ${I.toFixed(2)} A\nEingangsleistung: ${Pin.toFixed(2)} kW\nVerluste: ${losses.toFixed(2)} kW`
      };
    }
  },

  battery: {
    title: { uk: 'Акумулятор', ru: 'Аккумулятор', en: 'Battery', de: 'Batterie' },
    icon: '🔋',
    desc: { uk: 'Час роботи', ru: 'Время работы', en: 'Operating time', de: 'Betriebszeit' },
    fields: [
      { id: 'capacity', label: { uk: 'Ємність (А·год)', ru: 'Емкость (А·ч)', en: 'Capacity (Ah)', de: 'Kapazität (Ah)' } },
      { id: 'voltage', label: { uk: 'Напруга (В)', ru: 'Напряжение (В)', en: 'Voltage (V)', de: 'Spannung (V)' } },
      { id: 'power', label: { uk: 'Споживана потужність (Вт)', ru: 'Потребляемая мощность (Вт)', en: 'Power consumption (W)', de: 'Leistungsaufnahme (W)' } },
      { id: 'dod', label: { uk: 'Глибина розряду (%)', ru: 'Глубина разряда (%)', en: 'Depth of discharge (%)', de: 'Entladetiefe (%)' } }
    ],
    calculate: (inputs) => {
      const energyWh = inputs.capacity * inputs.voltage * (inputs.dod / 100);
      const timeHours = energyWh / inputs.power;
      return {
        uk: `Доступна енергія: ${energyWh.toFixed(1)} Вт·год\nЧас роботи: ${timeHours.toFixed(2)} год (${(timeHours * 60).toFixed(0)} хв)`,
        ru: `Доступная энергия: ${energyWh.toFixed(1)} Вт·ч\nВремя работы: ${timeHours.toFixed(2)} ч (${(timeHours * 60).toFixed(0)} мин)`,
        en: `Available energy: ${energyWh.toFixed(1)} Wh\nOperating time: ${timeHours.toFixed(2)} h (${(timeHours * 60).toFixed(0)} min)`,
        de: `Verfügbare Energie: ${energyWh.toFixed(1)} Wh\nBetriebszeit: ${timeHours.toFixed(2)} h (${(timeHours * 60).toFixed(0)} min)`
      };
    }
  },

  cable: {
    title: { uk: 'Вибір кабелю', ru: 'Выбор кабеля', en: 'Cable Selection', de: 'Kabelauswahl' },
    icon: '⚡',
    desc: { uk: 'Переріз провідника', ru: 'Сечение проводника', en: 'Conductor cross-section', de: 'Leiterquerschnitt' },
    fields: [
      { id: 'I', label: { uk: 'Струм (А)', ru: 'Ток (А)', en: 'Current (A)', de: 'Strom (A)' } },
      { id: 'j', label: { uk: 'Густина струму (А/мм²)', ru: 'Плотность тока (А/мм²)', en: 'Current density (A/mm²)', de: 'Stromdichte (A/mm²)' } },
      { id: 'length', label: { uk: 'Довжина (м)', ru: 'Длина (м)', en: 'Length (m)', de: 'Länge (m)' } },
      { id: 'U', label: { uk: 'Напруга (В)', ru: 'Напряжение (В)', en: 'Voltage (V)', de: 'Spannung (V)' } }
    ],
    calculate: (inputs) => {
      const A = inputs.I / inputs.j;
      const standardSizes = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240];
      const selectedSize = standardSizes.find(s => s >= A) || standardSizes[standardSizes.length - 1];
      const R = 0.0175 * inputs.length / selectedSize;
      const deltaU = inputs.I * R;
      const dropPercent = (deltaU / inputs.U) * 100;
      return {
        uk: `Розрахунковий переріз: ${A.toFixed(2)} мм²\nСтандартний переріз: ${selectedSize} мм²\nПадіння напруги: ${deltaU.toFixed(2)} В (${dropPercent.toFixed(2)}%)`,
        ru: `Расчетное сечение: ${A.toFixed(2)} мм²\nСтандартное сечение: ${selectedSize} мм²\nПадение напряжения: ${deltaU.toFixed(2)} В (${dropPercent.toFixed(2)}%)`,
        en: `Calculated cross-section: ${A.toFixed(2)} mm²\nStandard cross-section: ${selectedSize} mm²\nVoltage drop: ${deltaU.toFixed(2)} V (${dropPercent.toFixed(2)}%)`,
        de: `Berechneter Querschnitt: ${A.toFixed(2)} mm²\nStandardquerschnitt: ${selectedSize} mm²\nSpannungsabfall: ${deltaU.toFixed(2)} V (${dropPercent.toFixed(2)}%)`
      };
    }
  }
};