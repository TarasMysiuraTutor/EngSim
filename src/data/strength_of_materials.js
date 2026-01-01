// Опір матеріалів / Сопротивление материалов / Strength of Materials
export const strengthCalculators = {
  stress: {
    title: { uk: 'Напруження', ru: 'Напряжения', en: 'Stress', de: 'Spannung' },
    icon: '📐',
    desc: { uk: 'Розрахунок σ = F/A', ru: 'Расчет σ = F/A', en: 'Calculate σ = F/A', de: 'Berechnung σ = F/A' },
    fields: [
      { id: 'force', label: { uk: 'Сила (Н)', ru: 'Сила (Н)', en: 'Force (N)', de: 'Kraft (N)' } },
      { id: 'area', label: { uk: 'Площа (мм²)', ru: 'Площадь (мм²)', en: 'Area (mm²)', de: 'Fläche (mm²)' } }
    ],
    calculate: (inputs) => {
      const sigma = inputs.force / inputs.area;
      return {
        uk: `Нормальне напруження: ${sigma.toFixed(2)} МПа`,
        ru: `Нормальное напряжение: ${sigma.toFixed(2)} МПа`,
        en: `Normal stress: ${sigma.toFixed(2)} MPa`,
        de: `Normalspannung: ${sigma.toFixed(2)} MPa`
      };
    }
  },

  beam: {
    title: { uk: 'Балка на згин', ru: 'Балка на изгиб', en: 'Beam Bending', de: 'Balkenbeugung' },
    icon: '🔧',
    desc: { uk: 'Момент та прогин', ru: 'Момент и прогиб', en: 'Moment and deflection', de: 'Moment und Durchbiegung' },
    fields: [
      { id: 'load', label: { uk: 'Навантаження (кН)', ru: 'Нагрузка (кН)', en: 'Load (kN)', de: 'Last (kN)' } },
      { id: 'length', label: { uk: 'Довжина (м)', ru: 'Длина (м)', en: 'Length (m)', de: 'Länge (m)' } }
    ],
    calculate: (inputs) => {
      const M = (inputs.load * inputs.length) / 4;
      return {
        uk: `Максимальний момент: ${M.toFixed(2)} кН·м`,
        ru: `Максимальный момент: ${M.toFixed(2)} кН·м`,
        en: `Maximum moment: ${M.toFixed(2)} kN·m`,
        de: `Maximales Moment: ${M.toFixed(2)} kN·m`
      };
    }
  },

  shaft: {
    title: { uk: 'Вал на кручення', ru: 'Вал на кручение', en: 'Shaft Torsion', de: 'Wellentorsion' },
    icon: '⚙️',
    desc: { uk: 'Дотичне напруження', ru: 'Касательное напряжение', en: 'Shear stress', de: 'Schubspannung' },
    fields: [
      { id: 'torque', label: { uk: 'Крутний момент (Н·м)', ru: 'Крутящий момент (Н·м)', en: 'Torque (N·m)', de: 'Drehmoment (N·m)' } },
      { id: 'diameter', label: { uk: 'Діаметр (мм)', ru: 'Диаметр (мм)', en: 'Diameter (mm)', de: 'Durchmesser (mm)' } }
    ],
    calculate: (inputs) => {
      const W = Math.PI * Math.pow(inputs.diameter, 3) / 16;
      const tau = (inputs.torque * 1000) / W;
      return {
        uk: `Дотичне напруження: ${tau.toFixed(2)} МПа`,
        ru: `Касательное напряжение: ${tau.toFixed(2)} МПа`,
        en: `Shear stress: ${tau.toFixed(2)} MPa`,
        de: `Schubspannung: ${tau.toFixed(2)} MPa`
      };
    }
  },

  bolt: {
    title: { uk: 'Болтове з\'єднання', ru: 'Болтовое соединение', en: 'Bolt Connection', de: 'Schraubenverbindung' },
    icon: '🔩',
    desc: { uk: 'Кількість болтів', ru: 'Количество болтов', en: 'Number of bolts', de: 'Anzahl der Schrauben' },
    fields: [
      { id: 'force', label: { uk: 'Навантаження (кН)', ru: 'Нагрузка (кН)', en: 'Load (kN)', de: 'Last (kN)' } },
      { id: 'allowable', label: { uk: 'Допустиме напруження (МПа)', ru: 'Допустимое напряжение (МПа)', en: 'Allowable stress (MPa)', de: 'Zulässige Spannung (MPa)' } },
      { id: 'diameter', label: { uk: 'Діаметр болта (мм)', ru: 'Диаметр болта (мм)', en: 'Bolt diameter (mm)', de: 'Schraubendurchmesser (mm)' } }
    ],
    calculate: (inputs) => {
      const area = Math.PI * Math.pow(inputs.diameter, 2) / 4;
      const n = Math.ceil((inputs.force * 1000) / (inputs.allowable * area));
      return {
        uk: `Необхідна кількість болтів: ${n}`,
        ru: `Необходимое количество болтов: ${n}`,
        en: `Required number of bolts: ${n}`,
        de: `Erforderliche Anzahl an Schrauben: ${n}`
      };
    }
  },

  deformation: {
    title: { uk: 'Деформація', ru: 'Деформация', en: 'Deformation', de: 'Verformung' },
    icon: '📏',
    desc: { uk: 'Видовження стрижня', ru: 'Удлинение стержня', en: 'Bar elongation', de: 'Stabverlängerung' },
    fields: [
      { id: 'force', label: { uk: 'Сила (кН)', ru: 'Сила (кН)', en: 'Force (kN)', de: 'Kraft (kN)' } },
      { id: 'length', label: { uk: 'Довжина (м)', ru: 'Длина (м)', en: 'Length (m)', de: 'Länge (m)' } },
      { id: 'area', label: { uk: 'Площа перерізу (мм²)', ru: 'Площадь сечения (мм²)', en: 'Cross-section area (mm²)', de: 'Querschnittsfläche (mm²)' } },
      { id: 'E', label: { uk: 'Модуль пружності (ГПа)', ru: 'Модуль упругости (ГПа)', en: 'Elastic modulus (GPa)', de: 'Elastizitätsmodul (GPa)' } }
    ],
    calculate: (inputs) => {
      const deltaL = (inputs.force * 1000 * inputs.length * 1000) / (inputs.area * inputs.E * 1000);
      const epsilon = (deltaL / (inputs.length * 1000)) * 100;
      return {
        uk: `Видовження: ${deltaL.toFixed(3)} мм\nВідносна деформація: ${epsilon.toFixed(4)}%`,
        ru: `Удлинение: ${deltaL.toFixed(3)} мм\nОтносительная деформация: ${epsilon.toFixed(4)}%`,
        en: `Elongation: ${deltaL.toFixed(3)} mm\nRelative strain: ${epsilon.toFixed(4)}%`,
        de: `Verlängerung: ${deltaL.toFixed(3)} mm\nRelative Dehnung: ${epsilon.toFixed(4)}%`
      };
    }
  },

  column: {
    title: { uk: 'Стійкість колони', ru: 'Устойчивость колонны', en: 'Column Stability', de: 'Säulenstabilität' },
    icon: '🏛️',
    desc: { uk: 'Критична сила', ru: 'Критическая сила', en: 'Critical force', de: 'Kritische Kraft' },
    fields: [
      { id: 'E', label: { uk: 'Модуль пружності (ГПа)', ru: 'Модуль упругости (ГПа)', en: 'Elastic modulus (GPa)', de: 'Elastizitätsmodul (GPa)' } },
      { id: 'I', label: { uk: 'Момент інерції (см⁴)', ru: 'Момент инерции (см⁴)', en: 'Moment of inertia (cm⁴)', de: 'Trägheitsmoment (cm⁴)' } },
      { id: 'L', label: { uk: 'Довжина колони (м)', ru: 'Длина колонны (м)', en: 'Column length (m)', de: 'Säulenlänge (m)' } },
      { id: 'mu', label: { uk: 'Коефіцієнт закріплення', ru: 'Коэффициент закрепления', en: 'Fixity coefficient', de: 'Fixierungskoeffizient' } }
    ],
    calculate: (inputs) => {
      const Lcr = inputs.mu * inputs.L;
      const Pcr = (Math.PI * Math.PI * inputs.E * 1000 * inputs.I * 10000) / (Math.pow(Lcr * 1000, 2));
      return {
        uk: `Критична сила: ${(Pcr / 1000).toFixed(2)} кН\nРозрахункова довжина: ${Lcr.toFixed(2)} м`,
        ru: `Критическая сила: ${(Pcr / 1000).toFixed(2)} кН\nРасчетная длина: ${Lcr.toFixed(2)} м`,
        en: `Critical force: ${(Pcr / 1000).toFixed(2)} kN\nEffective length: ${Lcr.toFixed(2)} m`,
        de: `Kritische Kraft: ${(Pcr / 1000).toFixed(2)} kN\nEffektive Länge: ${Lcr.toFixed(2)} m`
      };
    }
  },

  shear: {
    title: { uk: 'Зріз', ru: 'Срез', en: 'Shear', de: 'Scherung' },
    icon: '✂️',
    desc: { uk: 'Напруження зрізу', ru: 'Напряжение среза', en: 'Shear stress', de: 'Scherspannung' },
    fields: [
      { id: 'force', label: { uk: 'Зрізуюча сила (кН)', ru: 'Срезающая сила (кН)', en: 'Shear force (kN)', de: 'Scherkraft (kN)' } },
      { id: 'area', label: { uk: 'Площа зрізу (мм²)', ru: 'Площадь среза (мм²)', en: 'Shear area (mm²)', de: 'Scherfläche (mm²)' } },
      { id: 'n', label: { uk: 'Кількість площин зрізу', ru: 'Количество плоскостей среза', en: 'Number of shear planes', de: 'Anzahl Scherebenen' } }
    ],
    calculate: (inputs) => {
      const tau = (inputs.force * 1000) / (inputs.area * inputs.n);
      return {
        uk: `Напруження зрізу: ${tau.toFixed(2)} МПа\nЗагальна площа: ${(inputs.area * inputs.n).toFixed(0)} мм²`,
        ru: `Напряжение среза: ${tau.toFixed(2)} МПа\nОбщая площадь: ${(inputs.area * inputs.n).toFixed(0)} мм²`,
        en: `Shear stress: ${tau.toFixed(2)} MPa\nTotal area: ${(inputs.area * inputs.n).toFixed(0)} mm²`,
        de: `Scherspannung: ${tau.toFixed(2)} MPa\nGesamtfläche: ${(inputs.area * inputs.n).toFixed(0)} mm²`
      };
    }
  },

  weld: {
    title: { uk: 'Зварний шов', ru: 'Сварной шов', en: 'Weld Joint', de: 'Schweißnaht' },
    icon: '🔥',
    desc: { uk: 'Розрахунок швів', ru: 'Расчет швов', en: 'Weld calculation', de: 'Schweißnahtberechnung' },
    fields: [
      { id: 'force', label: { uk: 'Навантаження (кН)', ru: 'Нагрузка (кН)', en: 'Load (kN)', de: 'Last (kN)' } },
      { id: 'legSize', label: { uk: 'Катет шва (мм)', ru: 'Катет шва (мм)', en: 'Weld leg (mm)', de: 'Schweißnahtdicke (mm)' } },
      { id: 'length', label: { uk: 'Довжина шва (мм)', ru: 'Длина шва (мм)', en: 'Weld length (mm)', de: 'Schweißnahtlänge (mm)' } },
      { id: 'allowable', label: { uk: 'Допустиме напруження (МПа)', ru: 'Допустимое напряжение (МПа)', en: 'Allowable stress (MPa)', de: 'Zulässige Spannung (MPa)' } }
    ],
    calculate: (inputs) => {
      const thickness = inputs.legSize * 0.7;
      const area = thickness * inputs.length;
      const tau = (inputs.force * 1000) / area;
      const safety = inputs.allowable / tau;
      return {
        uk: `Розрахункова товщина: ${thickness.toFixed(2)} мм\nНапруження: ${tau.toFixed(2)} МПа\nКоефіцієнт запасу: ${safety.toFixed(2)}`,
        ru: `Расчетная толщина: ${thickness.toFixed(2)} мм\nНапряжение: ${tau.toFixed(2)} МПа\nКоэффициент запаса: ${safety.toFixed(2)}`,
        en: `Effective thickness: ${thickness.toFixed(2)} mm\nStress: ${tau.toFixed(2)} MPa\nSafety factor: ${safety.toFixed(2)}`,
        de: `Wirksame Dicke: ${thickness.toFixed(2)} mm\nSpannung: ${tau.toFixed(2)} MPa\nSicherheitsfaktor: ${safety.toFixed(2)}`
      };
    }
  }
};