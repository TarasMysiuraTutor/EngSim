// Термодинаміка / Термодинамика / Thermodynamics
export const thermodynamicsCalculators = {
  heattransfer: {
    title: { uk: 'Теплопередача', ru: 'Теплопередача', en: 'Heat Transfer', de: 'Wärmeübertragung' },
    icon: '🔥',
    desc: { uk: 'Тепловий потік Q', ru: 'Тепловой поток Q', en: 'Heat flow Q', de: 'Wärmestrom Q' },
    fields: [
      { id: 'lambda', label: { uk: 'Теплопровідність (Вт/м·К)', ru: 'Теплопроводность (Вт/м·К)', en: 'Conductivity (W/m·K)', de: 'Leitfähigkeit (W/m·K)' } },
      { id: 'thickness', label: { uk: 'Товщина (мм)', ru: 'Толщина (мм)', en: 'Thickness (mm)', de: 'Dicke (mm)' } },
      { id: 'area', label: { uk: 'Площа (м²)', ru: 'Площадь (м²)', en: 'Area (m²)', de: 'Fläche (m²)' } },
      { id: 'dT', label: { uk: 'Різниця температур (°C)', ru: 'Разность температур (°C)', en: 'Temperature difference (°C)', de: 'Temperaturdifferenz (°C)' } }
    ],
    calculate: (inputs) => {
      const Q = (inputs.lambda * inputs.area * inputs.dT) / (inputs.thickness / 1000);
      return {
        uk: `Тепловий потік: ${Q.toFixed(2)} Вт`,
        ru: `Тепловой поток: ${Q.toFixed(2)} Вт`,
        en: `Heat flow: ${Q.toFixed(2)} W`,
        de: `Wärmestrom: ${Q.toFixed(2)} W`
      };
    }
  },

  insulation: {
    title: { uk: 'Теплоізоляція', ru: 'Теплоизоляция', en: 'Insulation', de: 'Dämmung' },
    icon: '🧱',
    desc: { uk: 'Товщина ізоляції', ru: 'Толщина изоляции', en: 'Insulation thickness', de: 'Dämmstärke' },
    fields: [
      { id: 'T1', label: { uk: 'Внутрішня температура (°C)', ru: 'Внутренняя температура (°C)', en: 'Inner temperature (°C)', de: 'Innentemperatur (°C)' } },
      { id: 'T2', label: { uk: 'Зовнішня температура (°C)', ru: 'Внешняя температура (°C)', en: 'Outer temperature (°C)', de: 'Außentemperatur (°C)' } },
      { id: 'lambda', label: { uk: 'Теплопровідність (Вт/м·К)', ru: 'Теплопроводность (Вт/м·К)', en: 'Conductivity (W/m·K)', de: 'Leitfähigkeit (W/m·K)' } },
      { id: 'Qmax', label: { uk: 'Допустимі втрати (Вт/м²)', ru: 'Допустимые потери (Вт/м²)', en: 'Allowable losses (W/m²)', de: 'Zulässige Verluste (W/m²)' } }
    ],
    calculate: (inputs) => {
      const thickness = (inputs.lambda * (inputs.T1 - inputs.T2)) / inputs.Qmax;
      return {
        uk: `Мінімальна товщина: ${(thickness * 1000).toFixed(1)} мм`,
        ru: `Минимальная толщина: ${(thickness * 1000).toFixed(1)} мм`,
        en: `Minimum thickness: ${(thickness * 1000).toFixed(1)} mm`,
        de: `Mindeststärke: ${(thickness * 1000).toFixed(1)} mm`
      };
    }
  },

  efficiency: {
    title: { uk: 'ККД циклу', ru: 'КПД цикла', en: 'Cycle Efficiency', de: 'Wirkungsgrad' },
    icon: '⚡',
    desc: { uk: 'Ефективність η', ru: 'Эффективность η', en: 'Efficiency η', de: 'Effizienz η' },
    fields: [
      { id: 'Qh', label: { uk: 'Підведене тепло (кДж)', ru: 'Подведенное тепло (кДж)', en: 'Heat input (kJ)', de: 'Zugeführte Wärme (kJ)' } },
      { id: 'W', label: { uk: 'Корисна робота (кДж)', ru: 'Полезная работа (кДж)', en: 'Useful work (kJ)', de: 'Nutzarbeit (kJ)' } }
    ],
    calculate: (inputs) => {
      const eta = (inputs.W / inputs.Qh) * 100;
      return {
        uk: `ККД: ${eta.toFixed(2)}%`,
        ru: `КПД: ${eta.toFixed(2)}%`,
        en: `Efficiency: ${eta.toFixed(2)}%`,
        de: `Wirkungsgrad: ${eta.toFixed(2)}%`
      };
    }
  },

  carnot: {
    title: { uk: 'Цикл Карно', ru: 'Цикл Карно', en: 'Carnot Cycle', de: 'Carnot-Kreisprozess' },
    icon: '🔄',
    desc: { uk: 'Ідеальний ККД', ru: 'Идеальный КПД', en: 'Ideal efficiency', de: 'Idealer Wirkungsgrad' },
    fields: [
      { id: 'T_hot', label: { uk: 'Температура нагрівача (°C)', ru: 'Температура нагревателя (°C)', en: 'Hot temperature (°C)', de: 'Heiztemperatur (°C)' } },
      { id: 'T_cold', label: { uk: 'Температура холодильника (°C)', ru: 'Температура холодильника (°C)', en: 'Cold temperature (°C)', de: 'Kühltemperatur (°C)' } }
    ],
    calculate: (inputs) => {
      const T1 = inputs.T_hot + 273.15;
      const T2 = inputs.T_cold + 273.15;
      const eta = ((T1 - T2) / T1) * 100;
      return {
        uk: `Максимальний ККД Карно: ${eta.toFixed(2)}%\nТемператури: ${T1.toFixed(1)} К / ${T2.toFixed(1)} К`,
        ru: `Максимальный КПД Карно: ${eta.toFixed(2)}%\nТемпературы: ${T1.toFixed(1)} К / ${T2.toFixed(1)} К`,
        en: `Maximum Carnot efficiency: ${eta.toFixed(2)}%\nTemperatures: ${T1.toFixed(1)} K / ${T2.toFixed(1)} K`,
        de: `Maximaler Carnot-Wirkungsgrad: ${eta.toFixed(2)}%\nTemperaturen: ${T1.toFixed(1)} K / ${T2.toFixed(1)} K`
      };
    }
  },

  heat_exchanger: {
    title: { uk: 'Теплообмінник', ru: 'Теплообменник', en: 'Heat Exchanger', de: 'Wärmetauscher' },
    icon: '♨️',
    desc: { uk: 'Передана потужність', ru: 'Переданная мощность', en: 'Heat transfer power', de: 'Wärmeübertragungsleistung' },
    fields: [
      { id: 'k', label: { uk: 'Коефіцієнт теплопередачі (Вт/м²·К)', ru: 'Коэффициент теплопередачи (Вт/м²·К)', en: 'Heat transfer coefficient (W/m²·K)', de: 'Wärmedurchgangskoeffizient (W/m²·K)' } },
      { id: 'A', label: { uk: 'Площа поверхні (м²)', ru: 'Площадь поверхности (м²)', en: 'Surface area (m²)', de: 'Oberfläche (m²)' } },
      { id: 'dT', label: { uk: 'Середня різниця температур (°C)', ru: 'Средняя разность температур (°C)', en: 'Mean temperature difference (°C)', de: 'Mittlere Temperaturdifferenz (°C)' } }
    ],
    calculate: (inputs) => {
      const Q = inputs.k * inputs.A * inputs.dT;
      return {
        uk: `Теплова потужність: ${(Q / 1000).toFixed(2)} кВт`,
        ru: `Тепловая мощность: ${(Q / 1000).toFixed(2)} кВт`,
        en: `Heat power: ${(Q / 1000).toFixed(2)} kW`,
        de: `Wärmeleistung: ${(Q / 1000).toFixed(2)} kW`
      };
    }
  },

  convection: {
    title: { uk: 'Конвекція', ru: 'Конвекция', en: 'Convection', de: 'Konvektion' },
    icon: '🌡️',
    desc: { uk: 'Коефіцієнт тепловіддачі', ru: 'Коэффициент теплоотдачи', en: 'Heat transfer coefficient', de: 'Wärmeübergangskoeffizient' },
    fields: [
      { id: 'Nu', label: { uk: 'Число Нуссельта', ru: 'Число Нуссельта', en: 'Nusselt number', de: 'Nusselt-Zahl' } },
      { id: 'lambda', label: { uk: 'Теплопровідність (Вт/м·К)', ru: 'Теплопроводность (Вт/м·К)', en: 'Conductivity (W/m·K)', de: 'Leitfähigkeit (W/m·K)' } },
      { id: 'L', label: { uk: 'Характерний розмір (м)', ru: 'Характерный размер (м)', en: 'Characteristic length (m)', de: 'Charakteristische Länge (m)' } }
    ],
    calculate: (inputs) => {
      const alpha = (inputs.Nu * inputs.lambda) / inputs.L;
      return {
        uk: `Коефіцієнт тепловіддачі: ${alpha.toFixed(2)} Вт/(м²·К)`,
        ru: `Коэффициент теплоотдачи: ${alpha.toFixed(2)} Вт/(м²·К)`,
        en: `Heat transfer coefficient: ${alpha.toFixed(2)} W/(m²·K)`,
        de: `Wärmeübergangskoeffizient: ${alpha.toFixed(2)} W/(m²·K)`
      };
    }
  },

  radiation: {
    title: { uk: 'Теплове випромінювання', ru: 'Тепловое излучение', en: 'Thermal Radiation', de: 'Wärmestrahlung' },
    icon: '☀️',
    desc: { uk: 'Закон Стефана-Больцмана', ru: 'Закон Стефана-Больцмана', en: 'Stefan-Boltzmann law', de: 'Stefan-Boltzmann-Gesetz' },
    fields: [
      { id: 'epsilon', label: { uk: 'Ступінь чорноти', ru: 'Степень черноты', en: 'Emissivity', de: 'Emissionsgrad' } },
      { id: 'A', label: { uk: 'Площа (м²)', ru: 'Площадь (м²)', en: 'Area (m²)', de: 'Fläche (m²)' } },
      { id: 'T', label: { uk: 'Температура поверхні (°C)', ru: 'Температура поверхности (°C)', en: 'Surface temperature (°C)', de: 'Oberflächentemperatur (°C)' } }
    ],
    calculate: (inputs) => {
      const sigma = 5.67e-8;
      const T_K = inputs.T + 273.15;
      const Q = inputs.epsilon * sigma * inputs.A * Math.pow(T_K, 4);
      return {
        uk: `Потужність випромінювання: ${Q.toFixed(2)} Вт\nТемпература: ${T_K.toFixed(1)} К`,
        ru: `Мощность излучения: ${Q.toFixed(2)} Вт\nТемпература: ${T_K.toFixed(1)} К`,
        en: `Radiation power: ${Q.toFixed(2)} W\nTemperature: ${T_K.toFixed(1)} K`,
        de: `Strahlungsleistung: ${Q.toFixed(2)} W\nTemperatur: ${T_K.toFixed(1)} K`
      };
    }
  },

  enthalpy: {
    title: { uk: 'Зміна ентальпії', ru: 'Изменение энтальпии', en: 'Enthalpy Change', de: 'Enthalpieänderung' },
    icon: '📊',
    desc: { uk: 'Теплота процесу', ru: 'Теплота процесса', en: 'Process heat', de: 'Prozesswärme' },
    fields: [
      { id: 'm', label: { uk: 'Маса речовини (кг)', ru: 'Масса вещества (кг)', en: 'Substance mass (kg)', de: 'Substanzmasse (kg)' } },
      { id: 'cp', label: { uk: 'Питома теплоємність (кДж/кг·К)', ru: 'Удельная теплоемкость (кДж/кг·К)', en: 'Specific heat (kJ/kg·K)', de: 'Spezifische Wärme (kJ/kg·K)' } },
      { id: 'dT', label: { uk: 'Зміна температури (°C)', ru: 'Изменение температуры (°C)', en: 'Temperature change (°C)', de: 'Temperaturänderung (°C)' } }
    ],
    calculate: (inputs) => {
      const Q = inputs.m * inputs.cp * inputs.dT;
      const P_hour = Q / 3.6;
      return {
        uk: `Теплота: ${Q.toFixed(2)} кДж\nПотужність (за 1 год): ${P_hour.toFixed(2)} кВт`,
        ru: `Теплота: ${Q.toFixed(2)} кДж\nМощность (за 1 ч): ${P_hour.toFixed(2)} кВт`,
        en: `Heat: ${Q.toFixed(2)} kJ\nPower (per 1 h): ${P_hour.toFixed(2)} kW`,
        de: `Wärme: ${Q.toFixed(2)} kJ\nLeistung (pro 1 h): ${P_hour.toFixed(2)} kW`
      };
    }
  }
};