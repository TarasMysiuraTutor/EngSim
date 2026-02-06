// ShellTubeHeatExchangerCalculator.jsx
// Калькулятор кожухотрубного теплообмінника
// Використовує FormulaDisplay для відображення формул

import React, { useState } from 'react';
import FormulaDisplay from './FormulaDisplay';

const ShellTubeHeatExchangerCalculator = ({ currentLang = 'uk' }) => {
  const [inputs, setInputs] = useState({
    // Гаряча рідина
    mHot: '',      // масова витрата гарячої рідини, кг/с
    tHotIn: '',    // температура входу гарячої рідини, °C
    tHotOut: '',   // температура виходу гарячої рідини, °C
    cpHot: '',     // питома теплоємність гарячої рідини, Дж/(кг·К)
    
    // Холодна рідина
    mCold: '',     // масова витрата холодної рідини, кг/с
    tColdIn: '',   // температура входу холодної рідини, °C
    tColdOut: '',  // температура виходу холодної рідини, °C
    cpCold: '',    // питома теплоємність холодної рідини, Дж/(кг·К)
    
    // Параметри теплообмінника
    U: '',         // коефіцієнт теплопередачі, Вт/(м²·К)
    dTube: '',     // зовнішній діаметр труби, м
    nTubes: '',    // кількість труб
    L: '',         // довжина труби, м
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const translations = {
    uk: {
      title: 'Розрахунок кожухотрубного теплообмінника',
      hotFluid: 'Гаряча рідина',
      coldFluid: 'Холодна рідина',
      heatExchangerParams: 'Параметри теплообмінника',
      massFlow: 'Масова витрата',
      tempIn: 'Температура на вході',
      tempOut: 'Температура на виході',
      specificHeat: 'Питома теплоємність',
      heatTransferCoeff: 'Коефіцієнт теплопередачі',
      tubeDiameter: 'Зовнішній діаметр труби',
      numberOfTubes: 'Кількість труб',
      tubeLength: 'Довжина труби',
      calculate: 'Розрахувати',
      reset: 'Скинути',
      results: 'Результати розрахунку',
      intermediateCalculations: 'Проміжні розрахунки',
      step: 'Крок',
      formula: 'Формула',
      substitution: 'Підстановка',
      result: 'Результат',
      where: 'де',
      heatDutyHot: 'Теплове навантаження (гаряча рідина)',
      heatDutyCold: 'Теплове навантаження (холодна рідина)',
      avgHeatDuty: 'Середнє теплове навантаження',
      tempDifferences: 'Різниці температур на кінцях',
      lmtd: 'Логарифмічна середня різниця температур (LMTD)',
      requiredArea: 'Необхідна площа теплопередачі',
      availableArea: 'Доступна площа теплопередачі',
      areaMargin: 'Запас площі',
      effectiveness: 'Ефективність теплообмінника',
      conclusion: 'Висновок',
      adequate: 'Теплообмінник ПІДХОДИТЬ',
      inadequate: 'Теплообмінник НЕ ПІДХОДИТЬ - потрібно збільшити площу',
      enterData: 'Введіть дані та натисніть "Розрахувати"',
    },
    en: {
      title: 'Shell and Tube Heat Exchanger Calculator',
      hotFluid: 'Hot Fluid',
      coldFluid: 'Cold Fluid',
      heatExchangerParams: 'Heat Exchanger Parameters',
      massFlow: 'Mass Flow Rate',
      tempIn: 'Inlet Temperature',
      tempOut: 'Outlet Temperature',
      specificHeat: 'Specific Heat Capacity',
      heatTransferCoeff: 'Heat Transfer Coefficient',
      tubeDiameter: 'Tube Outer Diameter',
      numberOfTubes: 'Number of Tubes',
      tubeLength: 'Tube Length',
      calculate: 'Calculate',
      reset: 'Reset',
      results: 'Calculation Results',
      intermediateCalculations: 'Intermediate Calculations',
      step: 'Step',
      formula: 'Formula',
      substitution: 'Substitution',
      result: 'Result',
      where: 'where',
      heatDutyHot: 'Heat Duty (Hot Fluid)',
      heatDutyCold: 'Heat Duty (Cold Fluid)',
      avgHeatDuty: 'Average Heat Duty',
      tempDifferences: 'Temperature Differences at Ends',
      lmtd: 'Log Mean Temperature Difference (LMTD)',
      requiredArea: 'Required Heat Transfer Area',
      availableArea: 'Available Heat Transfer Area',
      areaMargin: 'Area Margin',
      effectiveness: 'Heat Exchanger Effectiveness',
      conclusion: 'Conclusion',
      adequate: 'Heat Exchanger is ADEQUATE',
      inadequate: 'Heat Exchanger is INADEQUATE - increase area',
      enterData: 'Enter data and click "Calculate"',
    },
    ru: {
      title: 'Расчет кожухотрубного теплообменника',
      hotFluid: 'Горячая жидкость',
      coldFluid: 'Холодная жидкость',
      heatExchangerParams: 'Параметры теплообменника',
      massFlow: 'Массовый расход',
      tempIn: 'Температура на входе',
      tempOut: 'Температура на выходе',
      specificHeat: 'Удельная теплоемкость',
      heatTransferCoeff: 'Коэффициент теплопередачи',
      tubeDiameter: 'Наружный диаметр трубы',
      numberOfTubes: 'Количество труб',
      tubeLength: 'Длина трубы',
      calculate: 'Рассчитать',
      reset: 'Сбросить',
      results: 'Результаты расчета',
      intermediateCalculations: 'Промежуточные расчеты',
      step: 'Шаг',
      formula: 'Формула',
      substitution: 'Подстановка',
      result: 'Результат',
      where: 'где',
      heatDutyHot: 'Тепловая нагрузка (горячая жидкость)',
      heatDutyCold: 'Тепловая нагрузка (холодная жидкость)',
      avgHeatDuty: 'Средняя тепловая нагрузка',
      tempDifferences: 'Разности температур на концах',
      lmtd: 'Логарифмическая средняя разность температур (LMTD)',
      requiredArea: 'Необходимая площадь теплопередачи',
      availableArea: 'Доступная площадь теплопередачи',
      areaMargin: 'Запас площади',
      effectiveness: 'Эффективность теплообменника',
      conclusion: 'Заключение',
      adequate: 'Теплообменник ПОДХОДИТ',
      inadequate: 'Теплообменник НЕ ПОДХОДИТ - необходимо увеличить площадь',
      enterData: 'Введите данные и нажмите "Рассчитать"',
    },
    de: {
      title: 'Rohrbündel-Wärmetauscher Berechnung',
      hotFluid: 'Heißes Fluid',
      coldFluid: 'Kaltes Fluid',
      heatExchangerParams: 'Wärmetauscher-Parameter',
      massFlow: 'Massenstrom',
      tempIn: 'Eintrittstemperatur',
      tempOut: 'Austrittstemperatur',
      specificHeat: 'Spezifische Wärmekapazität',
      heatTransferCoeff: 'Wärmeübertragungskoeffizient',
      tubeDiameter: 'Rohr-Außendurchmesser',
      numberOfTubes: 'Anzahl der Rohre',
      tubeLength: 'Rohrlänge',
      calculate: 'Berechnen',
      reset: 'Zurücksetzen',
      results: 'Berechnungsergebnisse',
      intermediateCalculations: 'Zwischenberechnungen',
      step: 'Schritt',
      formula: 'Formel',
      substitution: 'Substitution',
      result: 'Ergebnis',
      where: 'wobei',
      heatDutyHot: 'Wärmeleistung (heißes Fluid)',
      heatDutyCold: 'Wärmeleistung (kaltes Fluid)',
      avgHeatDuty: 'Durchschnittliche Wärmeleistung',
      tempDifferences: 'Temperaturdifferenzen an den Enden',
      lmtd: 'Logarithmische mittlere Temperaturdifferenz (LMTD)',
      requiredArea: 'Erforderliche Wärmeübertragungsfläche',
      availableArea: 'Verfügbare Wärmeübertragungsfläche',
      areaMargin: 'Flächenreserve',
      effectiveness: 'Wärmetauscher-Effektivität',
      conclusion: 'Schlussfolgerung',
      adequate: 'Wärmetauscher ist AUSREICHEND',
      inadequate: 'Wärmetauscher ist NICHT AUSREICHEND - Fläche vergrößern',
      enterData: 'Geben Sie Daten ein und klicken Sie "Berechnen"',
    }
  };

  const t = translations[currentLang];

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    const requiredFields = [
      'mHot', 'tHotIn', 'tHotOut', 'cpHot',
      'mCold', 'tColdIn', 'tColdOut', 'cpCold',
      'U', 'dTube', 'nTubes', 'L'
    ];

    requiredFields.forEach(field => {
      if (!inputs[field] || inputs[field] === '') {
        newErrors[field] = 'Required';
      } else if (isNaN(inputs[field]) || parseFloat(inputs[field]) <= 0) {
        newErrors[field] = 'Must be > 0';
      }
    });

    // Перевірка температур
    if (parseFloat(inputs.tHotIn) <= parseFloat(inputs.tHotOut)) {
      newErrors.tHotOut = 'Must be < inlet temp';
    }
    if (parseFloat(inputs.tColdOut) <= parseFloat(inputs.tColdIn)) {
      newErrors.tColdOut = 'Must be > inlet temp';
    }

    return newErrors;
  };

  const calculateHeatExchanger = () => {
    const newErrors = validateInputs();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Конвертація вхідних даних
    const mHot = parseFloat(inputs.mHot);
    const tHotIn = parseFloat(inputs.tHotIn);
    const tHotOut = parseFloat(inputs.tHotOut);
    const cpHot = parseFloat(inputs.cpHot);

    const mCold = parseFloat(inputs.mCold);
    const tColdIn = parseFloat(inputs.tColdIn);
    const tColdOut = parseFloat(inputs.tColdOut);
    const cpCold = parseFloat(inputs.cpCold);

    const U = parseFloat(inputs.U);
    const dTube = parseFloat(inputs.dTube);
    const nTubes = parseFloat(inputs.nTubes);
    const L = parseFloat(inputs.L);

    // КРОК 1: Розрахунок теплового навантаження
    const QHot = mHot * cpHot * (tHotIn - tHotOut);
    const QCold = mCold * cpCold * (tColdOut - tColdIn);
    const QAvg = (QHot + QCold) / 2;

    // КРОК 2: Різниці температур
    const deltaT1 = tHotIn - tColdOut;  // Різниця на одному кінці
    const deltaT2 = tHotOut - tColdIn;  // Різниця на іншому кінці

    // КРОК 3: LMTD (Log Mean Temperature Difference)
    let LMTD;
    if (Math.abs(deltaT1 - deltaT2) < 0.01) {
      LMTD = deltaT1; // Якщо різниці майже однакові
    } else {
      LMTD = (deltaT1 - deltaT2) / Math.log(deltaT1 / deltaT2);
    }

    // КРОК 4: Необхідна площа теплопередачі
    const ARequired = QAvg / (U * LMTD);

    // КРОК 5: Доступна площа теплопередачі
    const AAvailable = Math.PI * dTube * L * nTubes;

    // КРОК 6: Запас площі
    const areaMargin = ((AAvailable - ARequired) / ARequired) * 100;

    // КРОК 7: Ефективність
    const Cmin = Math.min(mHot * cpHot, mCold * cpCold);
    const Cmax = Math.max(mHot * cpHot, mCold * cpCold);
    const QMax = Cmin * (tHotIn - tColdIn);
    const effectiveness = QAvg / QMax;

    setResults({
      QHot,
      QCold,
      QAvg,
      deltaT1,
      deltaT2,
      LMTD,
      ARequired,
      AAvailable,
      areaMargin,
      effectiveness,
      isAdequate: areaMargin >= 0
    });
  };

  const handleReset = () => {
    setInputs({
      mHot: '', tHotIn: '', tHotOut: '', cpHot: '',
      mCold: '', tColdIn: '', tColdOut: '', cpCold: '',
      U: '', dTube: '', nTubes: '', L: ''
    });
    setResults(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔄</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ЛІВА КОЛОНКА: Форма введення */}
          <div className="space-y-6">
            {/* Гаряча рідина */}
            <div className="bg-white/5 border border-red-500/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>🔥</span>
                {t.hotFluid}
              </h2>
              
              <div className="space-y-4">
                <InputField
                  label={t.massFlow}
                  unit="кг/с"
                  value={inputs.mHot}
                  onChange={(v) => handleInputChange('mHot', v)}
                  error={errors.mHot}
                />
                <InputField
                  label={t.tempIn}
                  unit="°C"
                  value={inputs.tHotIn}
                  onChange={(v) => handleInputChange('tHotIn', v)}
                  error={errors.tHotIn}
                />
                <InputField
                  label={t.tempOut}
                  unit="°C"
                  value={inputs.tHotOut}
                  onChange={(v) => handleInputChange('tHotOut', v)}
                  error={errors.tHotOut}
                />
                <InputField
                  label={t.specificHeat}
                  unit="Дж/(кг·К)"
                  value={inputs.cpHot}
                  onChange={(v) => handleInputChange('cpHot', v)}
                  error={errors.cpHot}
                />
              </div>
            </div>

            {/* Холодна рідина */}
            <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span>❄️</span>
                {t.coldFluid}
              </h2>
              
              <div className="space-y-4">
                <InputField
                  label={t.massFlow}
                  unit="кг/с"
                  value={inputs.mCold}
                  onChange={(v) => handleInputChange('mCold', v)}
                  error={errors.mCold}
                />
                <InputField
                  label={t.tempIn}
                  unit="°C"
                  value={inputs.tColdIn}
                  onChange={(v) => handleInputChange('tColdIn', v)}
                  error={errors.tColdIn}
                />
                <InputField
                  label={t.tempOut}
                  unit="°C"
                  value={inputs.tColdOut}
                  onChange={(v) => handleInputChange('tColdOut', v)}
                  error={errors.tColdOut}
                />
                <InputField
                  label={t.specificHeat}
                  unit="Дж/(кг·К)"
                  value={inputs.cpCold}
                  onChange={(v) => handleInputChange('cpCold', v)}
                  error={errors.cpCold}
                />
              </div>
            </div>

            {/* Параметри теплообмінника */}
            <div className="bg-white/5 border border-orange-500/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span>⚙️</span>
                {t.heatExchangerParams}
              </h2>
              
              <div className="space-y-4">
                <InputField
                  label={t.heatTransferCoeff}
                  unit="Вт/(м²·К)"
                  value={inputs.U}
                  onChange={(v) => handleInputChange('U', v)}
                  error={errors.U}
                />
                <InputField
                  label={t.tubeDiameter}
                  unit="м"
                  value={inputs.dTube}
                  onChange={(v) => handleInputChange('dTube', v)}
                  error={errors.dTube}
                />
                <InputField
                  label={t.numberOfTubes}
                  unit=""
                  value={inputs.nTubes}
                  onChange={(v) => handleInputChange('nTubes', v)}
                  error={errors.nTubes}
                />
                <InputField
                  label={t.tubeLength}
                  unit="м"
                  value={inputs.L}
                  onChange={(v) => handleInputChange('L', v)}
                  error={errors.L}
                />
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex gap-4">
              <button
                onClick={calculateHeatExchanger}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/50"
              >
                {t.calculate}
              </button>
              <button
                onClick={handleReset}
                className="px-8 py-4 bg-white/5 border border-gray-500/30 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                {t.reset}
              </button>
            </div>
          </div>

          {/* ПРАВА КОЛОНКА: Результати */}
          <div>
            {results ? (
              <div className="bg-white/5 border border-orange-500/30 rounded-2xl p-8 space-y-6">
                <h2 className="text-3xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                  <span>📊</span>
                  {t.results}
                </h2>

                {/* Крок 1: Теплове навантаження (гаряча) */}
                <CalculationStep
                  stepNumber={1}
                  title={t.heatDutyHot}
                  t={t}
                  formula="Q_{\\text{hot}} = \\dot{m}_{\\text{hot}} \\cdot c_{p,\\text{hot}} \\cdot (T_{\\text{hot,in}} - T_{\\text{hot,out}})"
                  substitution={`Q_{\\text{hot}} = ${inputs.mHot} \\times ${inputs.cpHot} \\times (${inputs.tHotIn} - ${inputs.tHotOut})`}
                  result={`Q_{\\text{hot}} = ${results.QHot.toFixed(2)}\\text{ Вт}`}
                />

                {/* Крок 2: Теплове навантаження (холодна) */}
                <CalculationStep
                  stepNumber={2}
                  title={t.heatDutyCold}
                  t={t}
                  formula="Q_{\\text{cold}} = \\dot{m}_{\\text{cold}} \\cdot c_{p,\\text{cold}} \\cdot (T_{\\text{cold,out}} - T_{\\text{cold,in}})"
                  substitution={`Q_{\\text{cold}} = ${inputs.mCold} \\times ${inputs.cpCold} \\times (${inputs.tColdOut} - ${inputs.tColdIn})`}
                  result={`Q_{\\text{cold}} = ${results.QCold.toFixed(2)}\\text{ Вт}`}
                />

                {/* Крок 3: Середнє теплове навантаження */}
                <CalculationStep
                  stepNumber={3}
                  title={t.avgHeatDuty}
                  t={t}
                  formula="Q_{\\text{avg}} = \\frac{Q_{\\text{hot}} + Q_{\\text{cold}}}{2}"
                  substitution={`Q_{\\text{avg}} = \\frac{${results.QHot.toFixed(2)} + ${results.QCold.toFixed(2)}}{2}`}
                  result={`Q_{\\text{avg}} = ${results.QAvg.toFixed(2)}\\text{ Вт}`}
                />

                <div className="border-t border-orange-500/20 pt-6"></div>

                {/* Крок 4: Різниці температур */}
                <CalculationStep
                  stepNumber={4}
                  title={t.tempDifferences}
                  t={t}
                  formula="\\Delta T_1 = T_{\\text{hot,in}} - T_{\\text{cold,out}}, \\quad \\Delta T_2 = T_{\\text{hot,out}} - T_{\\text{cold,in}}"
                  substitution={`\\Delta T_1 = ${inputs.tHotIn} - ${inputs.tColdOut} = ${results.deltaT1.toFixed(2)}°\\text{C}; \\quad \\Delta T_2 = ${inputs.tHotOut} - ${inputs.tColdIn} = ${results.deltaT2.toFixed(2)}°\\text{C}`}
                  result=""
                />

                {/* Крок 5: LMTD */}
                <CalculationStep
                  stepNumber={5}
                  title={t.lmtd}
                  t={t}
                  formula="\\text{LMTD} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1 / \\Delta T_2)}"
                  substitution={`\\text{LMTD} = \\frac{${results.deltaT1.toFixed(2)} - ${results.deltaT2.toFixed(2)}}{\\ln(${results.deltaT1.toFixed(2)} / ${results.deltaT2.toFixed(2)})}`}
                  result={`\\text{LMTD} = ${results.LMTD.toFixed(2)}°\\text{C}`}
                />

                <div className="border-t border-orange-500/20 pt-6"></div>

                {/* Крок 6: Необхідна площа */}
                <CalculationStep
                  stepNumber={6}
                  title={t.requiredArea}
                  t={t}
                  formula="A_{\\text{req}} = \\frac{Q_{\\text{avg}}}{U \\cdot \\text{LMTD}}"
                  substitution={`A_{\\text{req}} = \\frac{${results.QAvg.toFixed(2)}}{${inputs.U} \\times ${results.LMTD.toFixed(2)}}`}
                  result={`A_{\\text{req}} = ${results.ARequired.toFixed(3)}\\text{ м}^2`}
                />

                {/* Крок 7: Доступна площа */}
                <CalculationStep
                  stepNumber={7}
                  title={t.availableArea}
                  t={t}
                  formula="A_{\\text{avail}} = \\pi \\cdot d_{\\text{tube}} \\cdot L \\cdot n_{\\text{tubes}}"
                  substitution={`A_{\\text{avail}} = \\pi \\times ${inputs.dTube} \\times ${inputs.L} \\times ${inputs.nTubes}`}
                  result={`A_{\\text{avail}} = ${results.AAvailable.toFixed(3)}\\text{ м}^2`}
                />

                {/* Крок 8: Запас площі */}
                <CalculationStep
                  stepNumber={8}
                  title={t.areaMargin}
                  t={t}
                  formula="\\text{Margin} = \\frac{A_{\\text{avail}} - A_{\\text{req}}}{A_{\\text{req}}} \\times 100\\%"
                  substitution={`\\text{Margin} = \\frac{${results.AAvailable.toFixed(3)} - ${results.ARequired.toFixed(3)}}{${results.ARequired.toFixed(3)}} \\times 100\\%`}
                  result={`\\text{Margin} = ${results.areaMargin.toFixed(1)}\\%`}
                />

                {/* Крок 9: Ефективність */}
                <CalculationStep
                  stepNumber={9}
                  title={t.effectiveness}
                  t={t}
                  formula="\\varepsilon = \\frac{Q_{\\text{avg}}}{Q_{\\text{max}}}"
                  substitution=""
                  result={`\\varepsilon = ${(results.effectiveness * 100).toFixed(1)}\\%`}
                />

                <div className="border-t border-orange-500/20 pt-6"></div>

                {/* Висновок */}
                <div className={`p-6 rounded-xl border-2 ${
                  results.isAdequate 
                    ? 'bg-green-500/10 border-green-500/50' 
                    : 'bg-red-500/10 border-red-500/50'
                }`}>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span>{results.isAdequate ? '✅' : '❌'}</span>
                    {t.conclusion}
                  </h3>
                  <p className={`text-lg font-semibold ${
                    results.isAdequate ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {results.isAdequate ? t.adequate : t.inadequate}
                  </p>
                  {results.isAdequate && (
                    <p className="mt-2 text-gray-300">
                      {t.areaMargin}: <span className="font-bold text-green-400">{results.areaMargin.toFixed(1)}%</span>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-orange-500/30 rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4">📐</div>
                <p className="text-xl text-gray-400">
                  {t.enterData}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Компонент для поля вводу
const InputField = ({ label, unit, value, onChange, error }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {unit && <span className="text-gray-500">({unit})</span>}
      </label>
      <input
        type="number"
        step="any"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 bg-[#0a0e27]/50 border ${
          error ? 'border-red-500' : 'border-gray-600/30'
        } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
        placeholder="0.00"
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Компонент для кроку розрахунку з FormulaDisplay
const CalculationStep = ({ stepNumber, title, t, formula, substitution, result }) => {
  return (
    <div className="bg-[#0a0e27]/50 p-6 rounded-xl border border-orange-500/20">
      <h3 className="text-lg font-bold text-orange-300 mb-3">
        {t.step} {stepNumber}: {title}
      </h3>
      
      {/* Формула */}
      {formula && (
        <div className="mb-3 p-4 bg-white/5 rounded-lg">
          <p className="text-xs text-gray-400 mb-2">{t.formula}:</p>
          <div className="text-white overflow-x-auto">
            <FormulaDisplay formula={formula} />
          </div>
        </div>
      )}
      
      {/* Підстановка */}
      {substitution && (
        <div className="mb-3 p-4 bg-white/5 rounded-lg">
          <p className="text-xs text-gray-400 mb-2">{t.substitution}:</p>
          <div className="text-cyan-300 overflow-x-auto">
            <FormulaDisplay formula={substitution} />
          </div>
        </div>
      )}
      
      {/* Результат */}
      {result && (
        <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/30">
          <p className="text-xs text-gray-400 mb-2">{t.result}:</p>
          <div className="text-orange-200 font-bold text-lg overflow-x-auto">
            <FormulaDisplay formula={result} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShellTubeHeatExchangerCalculator;