// Гідравліка / Гидравлика / Hydraulics

export const hydraulicsCalculators = {
  pipe: {
    title: {
      uk: "Розрахунок труб",
      ru: "Расчет труб",
      en: "Pipe Calculation",
      de: "Rohrberechnung",
    },
    icon: "🚿",
    desc: {
      uk: "Швидкість, число Re",
      ru: "Скорость, число Re",
      en: "Velocity, Re number",
      de: "Geschwindigkeit, Re-Zahl",
    },
    fields: [
      {
        id: "Q",
        label: {
          uk: "Витрата (м³/год)",
          ru: "Расход (м³/ч)",
          en: "Flow rate (m³/h)",
          de: "Durchfluss (m³/h)",
        },
        unit: "m³/h", // ⭐ ДОДАНО
        min: 0, // ⭐ ДОДАНО
        max: 1000, // ⭐ ДОДАНО
        step: 1, // ⭐ ДОДАНО
        quickValues: [10, 50, 100, 200, 500], // ⭐ ОПЦІОНАЛЬНО
        tooltip: {
          // ⭐ ОПЦІОНАЛЬНО
          uk: "Об'ємна витрата рідини через трубу за годину",
          en: "Volumetric flow rate of fluid through pipe per hour",
        },
      },
      {
        id: "d",
        label: {
          uk: "Діаметр (мм)",
          ru: "Диаметр (мм)",
          en: "Diameter (mm)",
          de: "Durchmesser (mm)",
        },
        unit: "mm", // ⭐ ДОДАНО
        min: 0, // ⭐ ДОДАНО
        max: 1000, // ⭐ ДОДАНО
        step: 1, // ⭐ ДОДАНО
        quickValues: [10, 50, 100, 200, 500], // ⭐ ОПЦІОНАЛЬНО
        tooltip: {
          // ⭐ ОПЦІОНАЛЬНО
          uk: "Діаметр труби в міліметрах",
          en: "Diameter of the pipe in millimeters",
          ru: "Диаметр трубы в миллиметрах",
          de: "Durchmesser des Rohrs in Millimetern",
        },
      },
      {
        id: "rho",
        label: {
          uk: "Густина (кг/м³)",
          ru: "Плотность (кг/м³)",
          en: "Density (kg/m³)",
          de: "Dichte (kg/m³)",
        },
        unit: "kg/m³", // ⭐ ДОДАНО
        min: 0, // ⭐ ДОДАНО
        max: 10000, // ⭐ ДОДАНО
        step: 1, // ⭐ ДОДАНО
        quickValues: [10, 50, 100, 200, 500], // ⭐ ОПЦІОНАЛЬНО
        tooltip: {
          // ⭐ ОПЦІОНАЛЬНО
          uk: "Густина рідини в кілограмах на кубічний метр",
          en: "Density of the fluid in kilograms per cubic meter",
          ru: "Плотность жидкости в килограммах на кубический метр",
          de: "Dichte der Flüssigkeit in Kilogramm pro Kubikmeter",
        },
      },
      {
        id: "mu",
        label: {
          uk: "В'язкість (Па·с)",
          ru: "Вязкость (Па·с)",
          en: "Viscosity (Pa·s)",
          de: "Viskosität (Pa·s)",
        }, unit: "Pa·s", // ⭐ ДОДАНО
        min: 0, // ⭐ ДОДАНО
        max: 100, // ⭐ ДОДАНО
        step: 1, // ⭐ ДОДАНО
        quickValues: [10, 50, 100, 200, 500], // ⭐ ОПЦІОНАЛЬНО
        tooltip: {
          // ⭐ ОПЦІОНАЛЬНО
          uk: "В'язкість рідини в паскал-секундах",
          en: "Viscosity of the fluid in pascal-seconds",
          ru: "Вязкость жидкости в паскалях-секундах",
          de: "Viskosität der Flüssigkeit in Pascal-Sekunden",
        },
      },
    ],

    calculate: (inputs) => {
      const A = (Math.PI * Math.pow(inputs.d / 1000, 2)) / 4;
      const v = inputs.Q / 3600 / A;
      const Re = (inputs.rho * v * (inputs.d / 1000)) / inputs.mu;
      const regime =
        Re < 2300
          ? { uk: "ламінарний", ru: "ламинарный", en: "laminar", de: "laminar" }
          : {
              uk: "турбулентний",
              ru: "турбулентный",
              en: "turbulent",
              de: "turbulent",
            };
      return {
        uk: `Швидкість: ${v.toFixed(2)} м/с\nЧисло Рейнольдса: ${Re.toFixed(
          0
        )}\nРежим: ${regime.uk}`,
        ru: `Скорость: ${v.toFixed(2)} м/с\nЧисло Рейнольдса: ${Re.toFixed(
          0
        )}\nРежим: ${regime.ru}`,
        en: `Velocity: ${v.toFixed(2)} m/s\nReynolds number: ${Re.toFixed(
          0
        )}\nFlow: ${regime.en}`,
        de: `Geschwindigkeit: ${v.toFixed(2)} m/s\nReynolds-Zahl: ${Re.toFixed(
          0
        )}\nStrömung: ${regime.de}`,
      };
    },
  },

  pump: {
    title: {
      uk: "Підбір насосу",
      ru: "Подбор насоса",
      en: "Pump Selection",
      de: "Pumpenauswahl",
    },
    icon: "💧",
    desc: {
      uk: "Необхідна потужність",
      ru: "Необходимая мощность",
      en: "Required power",
      de: "Erforderliche Leistung",
    },
    fields: [
      {
        id: "Q",
        label: {
          uk: "Продуктивність (м³/год)",
          ru: "Производительность (м³/ч)",
          en: "Flow rate (m³/h)",
          de: "Förderstrom (m³/h)",
        },
      },
      {
        id: "H",
        label: {
          uk: "Напір (м)",
          ru: "Напор (м)",
          en: "Head (m)",
          de: "Förderhöhe (m)",
        },
      },
      {
        id: "rho",
        label: {
          uk: "Густина (кг/м³)",
          ru: "Плотность (кг/м³)",
          en: "Density (kg/m³)",
          de: "Dichte (kg/m³)",
        },
      },
      {
        id: "eta",
        label: {
          uk: "ККД насосу (%)",
          ru: "КПД насоса (%)",
          en: "Pump efficiency (%)",
          de: "Pumpenwirkungsgrad (%)",
        },
      },
    ],
    calculate: (inputs) => {
      const P =
        (inputs.rho * 9.81 * (inputs.Q / 3600) * inputs.H) / (inputs.eta / 100);
      return {
        uk: `Необхідна потужність: ${(P / 1000).toFixed(2)} кВт`,
        ru: `Необходимая мощность: ${(P / 1000).toFixed(2)} кВт`,
        en: `Required power: ${(P / 1000).toFixed(2)} kW`,
        de: `Erforderliche Leistung: ${(P / 1000).toFixed(2)} kW`,
      };
    },
  },

  pressure_loss: {
    title: {
      uk: "Втрати тиску",
      ru: "Потери давления",
      en: "Pressure Loss",
      de: "Druckverlust",
    },
    icon: "📉",
    desc: {
      uk: "Втрати на тертя",
      ru: "Потери на трение",
      en: "Friction losses",
      de: "Reibungsverluste",
    },
    fields: [
      {
        id: "L",
        label: {
          uk: "Довжина труби (м)",
          ru: "Длина трубы (м)",
          en: "Pipe length (m)",
          de: "Rohrlänge (m)",
        },
      },
      {
        id: "d",
        label: {
          uk: "Діаметр (мм)",
          ru: "Диаметр (мм)",
          en: "Diameter (mm)",
          de: "Durchmesser (mm)",
        },
      },
      {
        id: "v",
        label: {
          uk: "Швидкість (м/с)",
          ru: "Скорость (м/с)",
          en: "Velocity (m/s)",
          de: "Geschwindigkeit (m/s)",
        },
      },
      {
        id: "lambda",
        label: {
          uk: "Коефіцієнт тертя",
          ru: "Коэффициент трения",
          en: "Friction factor",
          de: "Reibungsfaktor",
        },
      },
    ],
    calculate: (inputs) => {
      const deltaP =
        inputs.lambda *
        (inputs.L / (inputs.d / 1000)) *
        ((1000 * Math.pow(inputs.v, 2)) / 2);
      const deltaH = deltaP / (1000 * 9.81);
      return {
        uk: `Втрати тиску: ${(deltaP / 1000).toFixed(
          2
        )} кПа\nВтрати напору: ${deltaH.toFixed(2)} м`,
        ru: `Потери давления: ${(deltaP / 1000).toFixed(
          2
        )} кПа\nПотери напора: ${deltaH.toFixed(2)} м`,
        en: `Pressure loss: ${(deltaP / 1000).toFixed(
          2
        )} kPa\nHead loss: ${deltaH.toFixed(2)} m`,
        de: `Druckverlust: ${(deltaP / 1000).toFixed(
          2
        )} kPa\nFörderhöhenverlust: ${deltaH.toFixed(2)} m`,
      };
    },
  },

  orifice: {
    title: {
      uk: "Отвір/діафрагма",
      ru: "Отверстие/диафрагма",
      en: "Orifice/Diaphragm",
      de: "Öffnung/Blende",
    },
    icon: "⭕",
    desc: {
      uk: "Витрата через отвір",
      ru: "Расход через отверстие",
      en: "Flow through orifice",
      de: "Durchfluss durch Öffnung",
    },
    fields: [
      {
        id: "A",
        label: {
          uk: "Площа отвору (см²)",
          ru: "Площадь отверстия (см²)",
          en: "Orifice area (cm²)",
          de: "Öffnungsfläche (cm²)",
        },
      },
      {
        id: "H",
        label: {
          uk: "Напір (м)",
          ru: "Напор (м)",
          en: "Head (m)",
          de: "Druckhöhe (m)",
        },
      },
      {
        id: "mu",
        label: {
          uk: "Коефіцієнт витрати",
          ru: "Коэффициент расхода",
          en: "Discharge coefficient",
          de: "Durchflusskoeffizient",
        },
      },
    ],
    calculate: (inputs) => {
      const Q =
        inputs.mu * (inputs.A / 10000) * Math.sqrt(2 * 9.81 * inputs.H) * 3600;
      const v = Math.sqrt(2 * 9.81 * inputs.H);
      return {
        uk: `Витрата: ${Q.toFixed(2)} м³/год\nШвидкість: ${v.toFixed(2)} м/с`,
        ru: `Расход: ${Q.toFixed(2)} м³/ч\nСкорость: ${v.toFixed(2)} м/с`,
        en: `Flow rate: ${Q.toFixed(2)} m³/h\nVelocity: ${v.toFixed(2)} m/s`,
        de: `Durchfluss: ${Q.toFixed(2)} m³/h\nGeschwindigkeit: ${v.toFixed(
          2
        )} m/s`,
      };
    },
  },

  valve: {
    title: {
      uk: "Підбір клапана",
      ru: "Подбор клапана",
      en: "Valve Selection",
      de: "Ventilauswahl",
    },
    icon: "🔧",
    desc: {
      uk: "Коефіцієнт Kv",
      ru: "Коэффициент Kv",
      en: "Kv coefficient",
      de: "Kv-Wert",
    },
    fields: [
      {
        id: "Q",
        label: {
          uk: "Витрата (м³/год)",
          ru: "Расход (м³/ч)",
          en: "Flow rate (m³/h)",
          de: "Durchfluss (m³/h)",
        },
      },
      {
        id: "deltaP",
        label: {
          uk: "Перепад тиску (бар)",
          ru: "Перепад давления (бар)",
          en: "Pressure drop (bar)",
          de: "Druckabfall (bar)",
        },
      },
      {
        id: "rho",
        label: {
          uk: "Густина (кг/м³)",
          ru: "Плотность (кг/м³)",
          en: "Density (kg/m³)",
          de: "Dichte (kg/m³)",
        },
      },
    ],
    calculate: (inputs) => {
      const Kv =
        (inputs.Q * Math.sqrt(inputs.rho / 1000)) / Math.sqrt(inputs.deltaP);
      return {
        uk: `Необхідний Kv: ${Kv.toFixed(
          2
        )} м³/год\nРекомендація: оберіть клапан з Kv ≥ ${Math.ceil(Kv)}`,
        ru: `Необходимый Kv: ${Kv.toFixed(
          2
        )} м³/ч\nРекомендация: выберите клапан с Kv ≥ ${Math.ceil(Kv)}`,
        en: `Required Kv: ${Kv.toFixed(
          2
        )} m³/h\nRecommendation: select valve with Kv ≥ ${Math.ceil(Kv)}`,
        de: `Erforderlicher Kv: ${Kv.toFixed(
          2
        )} m³/h\nEmpfehlung: Ventil mit Kv ≥ ${Math.ceil(Kv)} wählen`,
      };
    },
  },

  tank: {
    title: {
      uk: "Витікання з бака",
      ru: "Истечение из бака",
      en: "Tank Discharge",
      de: "Tankentleerung",
    },
    icon: "🪣",
    desc: {
      uk: "Час спорожнення",
      ru: "Время опорожнения",
      en: "Emptying time",
      de: "Entleerungszeit",
    },
    fields: [
      {
        id: "A_tank",
        label: {
          uk: "Площа бака (м²)",
          ru: "Площадь бака (м²)",
          en: "Tank area (m²)",
          de: "Tankfläche (m²)",
        },
      },
      {
        id: "A_hole",
        label: {
          uk: "Площа отвору (см²)",
          ru: "Площадь отверстия (см²)",
          en: "Hole area (cm²)",
          de: "Öffnungsfläche (cm²)",
        },
      },
      {
        id: "H",
        label: {
          uk: "Початковий рівень (м)",
          ru: "Начальный уровень (м)",
          en: "Initial level (m)",
          de: "Anfangsniveau (m)",
        },
      },
      {
        id: "mu",
        label: {
          uk: "Коефіцієнт витрати",
          ru: "Коэффициент расхода",
          en: "Discharge coefficient",
          de: "Durchflusskoeffizient",
        },
      },
    ],
    calculate: (inputs) => {
      const t =
        (2 * inputs.A_tank * Math.sqrt(inputs.H)) /
        (inputs.mu * (inputs.A_hole / 10000) * Math.sqrt(2 * 9.81));
      return {
        uk: `Час спорожнення: ${(t / 60).toFixed(1)} хв (${t.toFixed(0)} с)`,
        ru: `Время опорожнения: ${(t / 60).toFixed(1)} мин (${t.toFixed(0)} с)`,
        en: `Emptying time: ${(t / 60).toFixed(1)} min (${t.toFixed(0)} s)`,
        de: `Entleerungszeit: ${(t / 60).toFixed(1)} min (${t.toFixed(0)} s)`,
      };
    },
  },

  hydraulic_cylinder: {
    title: {
      uk: "Гідроциліндр",
      ru: "Гидроцилиндр",
      en: "Hydraulic Cylinder",
      de: "Hydraulikzylinder",
    },
    icon: "🔩",
    desc: {
      uk: "Зусилля і швидкість",
      ru: "Усилие и скорость",
      en: "Force and speed",
      de: "Kraft und Geschwindigkeit",
    },
    fields: [
      {
        id: "D",
        label: {
          uk: "Діаметр поршня (мм)",
          ru: "Диаметр поршня (мм)",
          en: "Piston diameter (mm)",
          de: "Kolbendurchmesser (mm)",
        },
      },
      {
        id: "P",
        label: {
          uk: "Тиск (бар)",
          ru: "Давление (бар)",
          en: "Pressure (bar)",
          de: "Druck (bar)",
        },
      },
      {
        id: "Q",
        label: {
          uk: "Витрата (л/хв)",
          ru: "Расход (л/мин)",
          en: "Flow rate (l/min)",
          de: "Durchfluss (l/min)",
        },
      },
    ],
    calculate: (inputs) => {
      const A = (Math.PI * Math.pow(inputs.D / 1000, 2)) / 4;
      const F = inputs.P * 100000 * A;
      const v = inputs.Q / 1000 / 60 / A;
      return {
        uk: `Зусилля: ${(F / 1000).toFixed(1)} кН\nШвидкість: ${(
          v * 1000
        ).toFixed(1)} мм/с`,
        ru: `Усилие: ${(F / 1000).toFixed(1)} кН\nСкорость: ${(
          v * 1000
        ).toFixed(1)} мм/с`,
        en: `Force: ${(F / 1000).toFixed(1)} kN\nSpeed: ${(v * 1000).toFixed(
          1
        )} mm/s`,
        de: `Kraft: ${(F / 1000).toFixed(1)} kN\nGeschwindigkeit: ${(
          v * 1000
        ).toFixed(1)} mm/s`,
      };
    },
  },

  ventilation: {
    title: {
      uk: "Вентиляція",
      ru: "Вентиляция",
      en: "Ventilation",
      de: "Lüftung",
    },
    icon: "💨",
    desc: {
      uk: "Витрата повітря",
      ru: "Расход воздуха",
      en: "Air flow rate",
      de: "Luftdurchsatz",
    },
    fields: [
      {
        id: "V",
        label: {
          uk: "Об'єм приміщення (м³)",
          ru: "Объем помещения (м³)",
          en: "Room volume (m³)",
          de: "Raumvolumen (m³)",
        },
      },
      {
        id: "n",
        label: {
          uk: "Кратність повітрообміну (1/год)",
          ru: "Кратность воздухообмена (1/ч)",
          en: "Air changes per hour (1/h)",
          de: "Luftwechsel pro Stunde (1/h)",
        },
      },
      {
        id: "v",
        label: {
          uk: "Швидкість повітря (м/с)",
          ru: "Скорость воздуха (м/с)",
          en: "Air velocity (m/s)",
          de: "Luftgeschwindigkeit (m/s)",
        },
      },
    ],
    calculate: (inputs) => {
      const L = inputs.V * inputs.n;
      const A = L / 3600 / inputs.v;
      const d = Math.sqrt((4 * A) / Math.PI) * 1000;
      return {
        uk: `Витрата повітря: ${L.toFixed(0)} м³/год\nПлоща перерізу: ${(
          A * 10000
        ).toFixed(0)} см²\nДіаметр каналу: ${d.toFixed(0)} мм`,
        ru: `Расход воздуха: ${L.toFixed(0)} м³/ч\nПлощадь сечения: ${(
          A * 10000
        ).toFixed(0)} см²\nДиаметр канала: ${d.toFixed(0)} мм`,
        en: `Air flow: ${L.toFixed(0)} m³/h\nCross-section: ${(
          A * 10000
        ).toFixed(0)} cm²\nDuct diameter: ${d.toFixed(0)} mm`,
        de: `Luftdurchsatz: ${L.toFixed(0)} m³/h\nQuerschnitt: ${(
          A * 10000
        ).toFixed(0)} cm²\nKanaldurchmesser: ${d.toFixed(0)} mm`,
      };
    },
  },
};
