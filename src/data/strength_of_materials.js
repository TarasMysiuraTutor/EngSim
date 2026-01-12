// src/data/strength_of_materials.js - ОНОВЛЕНА ВЕРСІЯ
export const strengthCalculators = {
  stress: {
    title: { uk: 'Напруження', ru: 'Напряжения', en: 'Stress', de: 'Spannung' },
    icon: '📐',
    desc: { uk: 'Розрахунок σ = F/A', ru: 'Расчет σ = F/A', en: 'Calculate σ = F/A', de: 'Berechnung σ = F/A' },
    fields: [
      { 
        id: 'force', 
        label: { uk: 'Сила', ru: 'Сила', en: 'Force', de: 'Kraft' },
        unit: 'N',
        min: 0,
        max: 1000000,
        step: 100,
        quickValues: [1000, 5000, 10000, 50000, 100000],
        tooltip: {
          uk: 'Зовнішня сила, що діє на елемент конструкції. Для перетворення: 1 кН = 1000 Н',
          ru: 'Внешняя сила, действующая на элемент конструкции. Для преобразования: 1 кН = 1000 Н',
          en: 'External force acting on the structural element. Conversion: 1 kN = 1000 N',
          de: 'Äußere Kraft auf das Strukturelement. Umrechnung: 1 kN = 1000 N'
        }
      },
      { 
        id: 'area', 
        label: { uk: 'Площа перерізу', ru: 'Площадь сечения', en: 'Cross-section area', de: 'Querschnittsfläche' },
        unit: 'mm²',
        min: 1,
        max: 100000,
        step: 10,
        quickValues: [100, 314, 500, 1000, 2500],
        tooltip: {
          uk: 'Площа поперечного перерізу. Для круга: A = π·d²/4. Приклад: d=20мм → A=314мм²',
          ru: 'Площадь поперечного сечения. Для круга: A = π·d²/4. Пример: d=20мм → A=314мм²',
          en: 'Cross-sectional area. For circle: A = π·d²/4. Example: d=20mm → A=314mm²',
          de: 'Querschnittsfläche. Für Kreis: A = π·d²/4. Beispiel: d=20mm → A=314mm²'
        }
      }
    ],
    calculate: (inputs) => {
      const sigma = inputs.force / inputs.area;
      const safetyStatus = sigma < 160 ? 
        { uk: '✅ Безпечно', ru: '✅ Безопасно', en: '✅ Safe', de: '✅ Sicher' } : 
        sigma < 200 ? 
        { uk: '⚠️ Граничне', ru: '⚠️ Предельное', en: '⚠️ Borderline', de: '⚠️ Grenzwertig' } : 
        { uk: '❌ Небезпечно', ru: '❌ Опасно', en: '❌ Unsafe', de: '❌ Unsicher' };
      
      return {
        uk: `Нормальне напруження: ${sigma.toFixed(2)} МПа\nСтатус: ${safetyStatus.uk}`,
        ru: `Нормальное напряжение: ${sigma.toFixed(2)} МПа\nСтатус: ${safetyStatus.ru}`,
        en: `Normal stress: ${sigma.toFixed(2)} MPa\nStatus: ${safetyStatus.en}`,
        de: `Normalspannung: ${sigma.toFixed(2)} MPa\nStatus: ${safetyStatus.de}`
      };
    }
  },

  beam: {
    title: { uk: 'Балка на згин', ru: 'Балка на изгиб', en: 'Beam Bending', de: 'Balkenbeugung' },
    icon: '🔧',
    desc: { uk: 'Момент та прогин', ru: 'Момент и прогиб', en: 'Moment and deflection', de: 'Moment und Durchbiegung' },
    fields: [
      { 
        id: 'load', 
        label: { uk: 'Навантаження', ru: 'Нагрузка', en: 'Load', de: 'Last' },
        unit: 'kN',
        min: 0,
        max: 1000,
        step: 0.5,
        quickValues: [5, 10, 25, 50, 100],
        tooltip: {
          uk: 'Зосереджене навантаження посередині прогону балки',
          ru: 'Сосредоточенная нагрузка в середине пролета балки',
          en: 'Concentrated load at the middle of beam span',
          de: 'Konzentrierte Last in der Mitte der Balkenspannweite'
        }
      },
      { 
        id: 'length', 
        label: { uk: 'Довжина прогону', ru: 'Длина пролета', en: 'Span length', de: 'Spannweite' },
        unit: 'm',
        min: 0.1,
        max: 50,
        step: 0.1,
        quickValues: [2, 3, 5, 6, 10],
        tooltip: {
          uk: 'Відстань між опорами балки (для простої балки)',
          ru: 'Расстояние между опорами балки (для простой балки)',
          en: 'Distance between beam supports (for simple beam)',
          de: 'Abstand zwischen Balkenauflagern (für einfachen Balken)'
        }
      }
    ],
    calculate: (inputs) => {
      const M = (inputs.load * inputs.length) / 4;
      return {
        uk: `Максимальний момент: ${M.toFixed(2)} кН·м\n(для простої балки з силою посередині)`,
        ru: `Максимальный момент: ${M.toFixed(2)} кН·м\n(для простой балки с силой посередине)`,
        en: `Maximum moment: ${M.toFixed(2)} kN·m\n(for simple beam with center load)`,
        de: `Maximales Moment: ${M.toFixed(2)} kN·m\n(für einfachen Balken mit Mittellast)`
      };
    }
  },

  shaft: {
    title: { uk: 'Вал на кручення', ru: 'Вал на кручение', en: 'Shaft Torsion', de: 'Wellentorsion' },
    icon: '⚙️',
    desc: { uk: 'Дотичне напруження', ru: 'Касательное напряжение', en: 'Shear stress', de: 'Schubspannung' },
    fields: [
      { 
        id: 'torque', 
        label: { uk: 'Крутний момент', ru: 'Крутящий момент', en: 'Torque', de: 'Drehmoment' },
        unit: 'N·m',
        min: 0,
        max: 100000,
        step: 10,
        quickValues: [100, 500, 1000, 5000, 10000],
        tooltip: {
          uk: 'Обертальний момент, що діє на вал. 1 Н·м = 0.001 кН·м',
          ru: 'Вращательный момент, действующий на вал. 1 Н·м = 0.001 кН·м',
          en: 'Rotational moment acting on shaft. 1 N·m = 0.001 kN·m',
          de: 'Drehmoment auf Welle. 1 N·m = 0.001 kN·m'
        }
      },
      { 
        id: 'diameter', 
        label: { uk: 'Діаметр валу', ru: 'Диаметр вала', en: 'Shaft diameter', de: 'Wellendurchmesser' },
        unit: 'mm',
        min: 1,
        max: 1000,
        step: 1,
        quickValues: [20, 30, 50, 80, 100],
        tooltip: {
          uk: 'Зовнішній діаметр круглого валу',
          ru: 'Наружный диаметр круглого вала',
          en: 'Outer diameter of circular shaft',
          de: 'Außendurchmesser der runden Welle'
        }
      }
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
      { 
        id: 'force', 
        label: { uk: 'Навантаження', ru: 'Нагрузка', en: 'Load', de: 'Last' },
        unit: 'kN',
        min: 0,
        max: 1000,
        step: 1,
        quickValues: [10, 25, 50, 100, 200],
        tooltip: {
          uk: 'Загальна сила, що діє на з\'єднання',
          ru: 'Общая сила, действующая на соединение',
          en: 'Total force acting on connection',
          de: 'Gesamtkraft auf Verbindung'
        }
      },
      { 
        id: 'allowable', 
        label: { uk: 'Допустиме напруження', ru: 'Допустимое напряжение', en: 'Allowable stress', de: 'Zulässige Spannung' },
        unit: 'МПа',
        min: 50,
        max: 500,
        step: 10,
        quickValues: [100, 140, 160, 200],
        tooltip: {
          uk: 'Допустиме напруження для матеріалу болта (сталь: 140-200 МПа)',
          ru: 'Допустимое напряжение для материала болта (сталь: 140-200 МПа)',
          en: 'Allowable stress for bolt material (steel: 140-200 MPa)',
          de: 'Zulässige Spannung für Schraubenmaterial (Stahl: 140-200 MPa)'
        }
      },
      { 
        id: 'diameter', 
        label: { uk: 'Діаметр болта', ru: 'Диаметр болта', en: 'Bolt diameter', de: 'Schraubendurchmesser' },
        unit: 'мм',
        min: 6,
        max: 64,
        step: 2,
        quickValues: [10, 12, 16, 20, 24],
        tooltip: {
          uk: 'Номінальний діаметр різьби болта (M10, M12, M16...)',
          ru: 'Номинальный диаметр резьбы болта (M10, M12, M16...)',
          en: 'Nominal thread diameter of bolt (M10, M12, M16...)',
          de: 'Nenngewindedurchmesser der Schraube (M10, M12, M16...)'
        }
      }
    ],
    calculate: (inputs) => {
      const area = Math.PI * Math.pow(inputs.diameter, 2) / 4;
      const n = Math.ceil((inputs.force * 1000) / (inputs.allowable * area));
      return {
        uk: `Необхідна кількість болтів: ${n} шт`,
        ru: `Необходимое количество болтов: ${n} шт`,
        en: `Required number of bolts: ${n} pcs`,
        de: `Erforderliche Anzahl Schrauben: ${n} Stk`
      };
    }
  },

  deformation: {
    title: { uk: 'Деформація', ru: 'Деформация', en: 'Deformation', de: 'Verformung' },
    icon: '📏',
    desc: { uk: 'Видовження стрижня', ru: 'Удлинение стержня', en: 'Bar elongation', de: 'Stabverlängerung' },
    fields: [
      { 
        id: 'force', 
        label: { uk: 'Сила', ru: 'Сила', en: 'Force', de: 'Kraft' },
        unit: 'кН',
        min: 0,
        max: 1000,
        step: 1,
        quickValues: [10, 25, 50, 100],
        tooltip: {
          uk: 'Розтягуюча або стискаюча сила',
          ru: 'Растягивающая или сжимающая сила',
          en: 'Tensile or compressive force',
          de: 'Zug- oder Druckkraft'
        }
      },
      { 
        id: 'length', 
        label: { uk: 'Довжина стрижня', ru: 'Длина стержня', en: 'Bar length', de: 'Stablänge' },
        unit: 'м',
        min: 0.1,
        max: 100,
        step: 0.1,
        quickValues: [1, 2, 5, 10],
        tooltip: {
          uk: 'Початкова довжина стрижня до деформації',
          ru: 'Начальная длина стержня до деформации',
          en: 'Initial length of bar before deformation',
          de: 'Anfangslänge des Stabs vor Verformung'
        }
      },
      { 
        id: 'area', 
        label: { uk: 'Площа перерізу', ru: 'Площадь сечения', en: 'Cross-section area', de: 'Querschnittsfläche' },
        unit: 'мм²',
        min: 10,
        max: 10000,
        step: 10,
        quickValues: [100, 314, 500, 1000],
        tooltip: {
          uk: 'Площа поперечного перерізу стрижня',
          ru: 'Площадь поперечного сечения стержня',
          en: 'Cross-sectional area of bar',
          de: 'Querschnittsfläche des Stabs'
        }
      },
      { 
        id: 'E', 
        label: { uk: 'Модуль пружності', ru: 'Модуль упругости', en: 'Elastic modulus', de: 'Elastizitätsmodul' },
        unit: 'ГПа',
        min: 10,
        max: 500,
        step: 1,
        quickValues: [70, 105, 200, 210],
        tooltip: {
          uk: 'Модуль Юнга: Алюміній≈70, Мідь≈105, Сталь≈200 ГПа',
          ru: 'Модуль Юнга: Алюминий≈70, Медь≈105, Сталь≈200 ГПа',
          en: 'Young\'s modulus: Aluminum≈70, Copper≈105, Steel≈200 GPa',
          de: 'Elastizitätsmodul: Aluminium≈70, Kupfer≈105, Stahl≈200 GPa'
        }
      }
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
      { 
        id: 'E', 
        label: { uk: 'Модуль пружності', ru: 'Модуль упругости', en: 'Elastic modulus', de: 'Elastizitätsmodul' },
        unit: 'ГПа',
        min: 10,
        max: 500,
        step: 1,
        quickValues: [70, 105, 200, 210]
      },
      { 
        id: 'I', 
        label: { uk: 'Момент інерції', ru: 'Момент инерции', en: 'Moment of inertia', de: 'Trägheitsmoment' },
        unit: 'см⁴',
        min: 1,
        max: 100000,
        step: 10,
        quickValues: [10, 50, 100, 500, 1000]
      },
      { 
        id: 'L', 
        label: { uk: 'Довжина колони', ru: 'Длина колонны', en: 'Column length', de: 'Säulenlänge' },
        unit: 'м',
        min: 0.1,
        max: 100,
        step: 0.1,
        quickValues: [2, 3, 5, 10]
      },
      { 
        id: 'mu', 
        label: { uk: 'Коефіцієнт закріплення', ru: 'Коэффициент закрепления', en: 'Fixity coefficient', de: 'Fixierungskoeffizient' },
        unit: '',
        min: 0.5,
        max: 2,
        step: 0.1,
        quickValues: [0.5, 0.7, 1, 2],
        tooltip: {
          uk: 'Залежить від типу закріплення: защемлення-защемлення≈0.5, защемлення-шарнір≈0.7, шарнір-шарнір≈1',
          ru: 'Зависит от типа закрепления: защемление-защемление≈0.5, защемление-шарнир≈0.7, шарнир-шарнир≈1',
          en: 'Depends on support type: fixed-fixed≈0.5, fixed-pinned≈0.7, pinned-pinned≈1',
          de: 'Abhängig vom Lagertyp: eingespannt-eingespannt≈0.5, eingespannt-gelenkig≈0.7, gelenkig-gelenkig≈1'
        }
      }
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
      { 
        id: 'force', 
        label: { uk: 'Зрізуюча сила', ru: 'Срезающая сила', en: 'Shear force', de: 'Scherkraft' },
        unit: 'кН',
        min: 0,
        max: 1000,
        step: 1,
        quickValues: [10, 25, 50, 100]
      },
      { 
        id: 'area', 
        label: { uk: 'Площа зрізу', ru: 'Площадь среза', en: 'Shear area', de: 'Scherfläche' },
        unit: 'мм²',
        min: 10,
        max: 10000,
        step: 10,
        quickValues: [100, 314, 500, 1000]
      },
      { 
        id: 'n', 
        label: { uk: 'Кількість площин зрізу', ru: 'Количество плоскостей среза', en: 'Number of shear planes', de: 'Anzahl Scherebenen' },
        unit: '',
        min: 1,
        max: 10,
        step: 1,
        quickValues: [1, 2, 4],
        tooltip: {
          uk: 'Одно- або двозрізне з\'єднання',
          ru: 'Одно- или двухсрезное соединение',
          en: 'Single or double shear connection',
          de: 'Einschnitt- oder Doppelschnittverbindung'
        }
      }
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
      { 
        id: 'force', 
        label: { uk: 'Навантаження', ru: 'Нагрузка', en: 'Load', de: 'Last' },
        unit: 'кН',
        min: 0,
        max: 1000,
        step: 1,
        quickValues: [10, 25, 50, 100]
      },
      { 
        id: 'legSize', 
        label: { uk: 'Катет шва', ru: 'Катет шва', en: 'Weld leg', de: 'Schweißnahtdicke' },
        unit: 'мм',
        min: 3,
        max: 30,
        step: 1,
        quickValues: [4, 5, 6, 8, 10],
        tooltip: {
          uk: 'Розмір катета кутового шва (зазвичай 4-10 мм)',
          ru: 'Размер катета углового шва (обычно 4-10 мм)',
          en: 'Fillet weld leg size (typically 4-10 mm)',
          de: 'Kehlnahtdicke (typischerweise 4-10 mm)'
        }
      },
      { 
        id: 'length', 
        label: { uk: 'Довжина шва', ru: 'Длина шва', en: 'Weld length', de: 'Schweißnahtlänge' },
        unit: 'мм',
        min: 10,
        max: 10000,
        step: 10,
        quickValues: [100, 200, 500, 1000]
      },
      { 
        id: 'allowable', 
        label: { uk: 'Допустиме напруження', ru: 'Допустимое напряжение', en: 'Allowable stress', de: 'Zulässige Spannung' },
        unit: 'МПа',
        min: 50,
        max: 300,
        step: 10,
        quickValues: [100, 120, 140, 160]
      }
    ],
    calculate: (inputs) => {
      const thickness = inputs.legSize * 0.7;
      const area = thickness * inputs.length;
      const tau = (inputs.force * 1000) / area;
      const safety = inputs.allowable / tau;
      const status = safety >= 1.5 ? 
        { uk: '✅ Достатній запас', ru: '✅ Достаточный запас', en: '✅ Sufficient safety', de: '✅ Ausreichend' } :
        safety >= 1.0 ?
        { uk: '⚠️ Мінімальний запас', ru: '⚠️ Минимальный запас', en: '⚠️ Minimal safety', de: '⚠️ Minimal' } :
        { uk: '❌ Недостатньо', ru: '❌ Недостаточно', en: '❌ Insufficient', de: '❌ Unzureichend' };
      
      return {
        uk: `Розрахункова товщина: ${thickness.toFixed(2)} мм\nНапруження: ${tau.toFixed(2)} МПа\nКоефіцієнт запасу: ${safety.toFixed(2)}\n${status.uk}`,
        ru: `Расчетная толщина: ${thickness.toFixed(2)} мм\nНапряжение: ${tau.toFixed(2)} МПа\nКоэффициент запаса: ${safety.toFixed(2)}\n${status.ru}`,
        en: `Effective thickness: ${thickness.toFixed(2)} mm\nStress: ${tau.toFixed(2)} MPa\nSafety factor: ${safety.toFixed(2)}\n${status.en}`,
        de: `Wirksame Dicke: ${thickness.toFixed(2)} mm\nSpannung: ${tau.toFixed(2)} MPa\nSicherheitsfaktor: ${safety.toFixed(2)}\n${status.de}`
      };
    }
  }
};