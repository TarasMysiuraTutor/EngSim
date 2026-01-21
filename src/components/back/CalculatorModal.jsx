// src/components/CalculatorModal.jsx - ПОВНА ОНОВЛЕНА ВЕРСІЯ
import React, { useState, useEffect } from 'react';
import { exportToPDF } from '../utils/pdfExport';
import { useCalculationHistory } from '../hooks/useCalculationHistory';
import EnhancedInput from './EnhancedInput';

const CalculatorModal = ({ currentCalc, currentLang, calculators, t, onClose }) => {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Використовуємо хук історії
  const {
    addCalculation,
    getCalculatorHistory,
    removeCalculation,
    clearHistory,
    formatTime
  } = useCalculationHistory();

  const calc = calculators[currentCalc];
  const calcHistory = getCalculatorHistory(currentCalc);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleInputChange = (fieldId, value) => {
    setFormData({
      ...formData,
      [fieldId]: value === '' ? '' : value
    });
    
    if (errors[fieldId]) {
      setErrors({
        ...errors,
        [fieldId]: ''
      });
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    calc.fields.forEach(field => {
      if (!formData[field.id] || formData[field.id] === '' || isNaN(formData[field.id])) {
        newErrors[field.id] = {
          uk: 'Введіть значення',
          ru: 'Введите значение',
          en: 'Enter value',
          de: 'Wert eingeben'
        }[currentLang];
      } else if (formData[field.id] <= 0) {
        newErrors[field.id] = {
          uk: 'Має бути > 0',
          ru: 'Должно быть > 0',
          en: 'Must be > 0',
          de: 'Muss > 0 sein'
        }[currentLang];
      }
    });
    return newErrors;
  };

  const handleCalculate = () => {
    const newErrors = validateInputs();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsCalculating(true);
    setShowResult(false);
    
    setTimeout(() => {
      const calculatedResult = calc.calculate(formData);
      setResult(calculatedResult);
      
      // Зберігаємо в історію
      addCalculation(
        currentCalc,
        calc.title[currentLang],
        formData,
        calculatedResult,
        currentLang
      );
      
      setIsCalculating(false);
      setTimeout(() => {
        setShowResult(true);
      }, 100);
    }, 800);
  };

  const handleReset = () => {
    setFormData({});
    setResult(null);
    setErrors({});
    setShowResult(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  const handleExportPDF = () => {
    const pdfLang = currentLang === 'de' ? 'de' : 'en';
    
    const inputs = {};
    calc.fields.forEach(field => {
      if (formData[field.id]) {
        const label = field.label[pdfLang] || field.label['en'] || field.label[currentLang];
        inputs[label] = `${formData[field.id]} ${field.unit || ''}`;
      }
    });

    const resultLabel = pdfLang === 'de' ? 'Ergebnis' : 'Result';
    const pdfResult = typeof result === 'object' 
      ? (result[pdfLang] || result['en'] || result[currentLang])
      : result;
    
    const pdfData = {
      calculatorName: calc.title[pdfLang] || calc.title['en'] || calc.title[currentLang],
      inputs: inputs,
      results: { [resultLabel]: pdfResult },
      formula: calc.formula?.[pdfLang] || calc.formula?.['en'] || '',
      notes: calc.notes?.[pdfLang] || calc.notes?.['en'] || calc.desc[pdfLang] || calc.desc['en']
    };

    exportToPDF(pdfData, pdfLang);
  };

  const handleLoadFromHistory = (historyItem) => {
    setFormData(historyItem.inputs);
    setResult(historyItem.result);
    setShowResult(true);
    setShowHistory(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[#1a1f3a]/98 to-[#0f1428]/98 border border-blue-500/40 rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn print:bg-white print:text-black print:border-none print:max-h-none print:overflow-visible"
        onClick={(e) => e.stopPropagation()}
        data-print-content
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 print:border-b print:border-gray-300 print:pb-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl animate-bounce-custom print:hidden">{calc.icon}</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 print:text-black">
                {calc.title[currentLang]}
              </h2>
              <p className="text-sm text-gray-500 mt-1 print:hidden">
                {calcHistory.length > 0 && (
                  <span>
                    {currentLang === 'uk' && `${calcHistory.length} розрахунків в історії`}
                    {currentLang === 'ru' && `${calcHistory.length} расчетов в истории`}
                    {currentLang === 'en' && `${calcHistory.length} calculations in history`}
                    {currentLang === 'de' && `${calcHistory.length} Berechnungen im Verlauf`}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-2 print:hidden">
            {/* Кнопка історії */}
            {calcHistory.length > 0 && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="text-2xl hover:text-blue-400 transition-all duration-300 w-10 h-10 flex items-center justify-center hover:bg-blue-500/20 rounded-full relative"
                title={currentLang === 'uk' ? 'Історія' : currentLang === 'ru' ? 'История' : currentLang === 'en' ? 'History' : 'Verlauf'}
              >
                🕐
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {calcHistory.length}
                </span>
              </button>
            )}
            <button
              onClick={onClose}
              className="text-3xl hover:text-blue-400 transition-all duration-300 w-10 h-10 flex items-center justify-center hover:bg-blue-500/20 rounded-full hover:rotate-90"
            >
              ×
            </button>
          </div>
        </div>

        {/* History Sidebar */}
        {showHistory && (
          <div className="mb-6 bg-white/5 border border-blue-500/30 rounded-xl p-4 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-cyan-400">
                {currentLang === 'uk' && '📜 Історія розрахунків'}
                {currentLang === 'ru' && '📜 История расчетов'}
                {currentLang === 'en' && '📜 Calculation History'}
                {currentLang === 'de' && '📜 Berechnungsverlauf'}
              </h3>
              <button
                onClick={() => {
                  if (window.confirm(
                    currentLang === 'uk' ? 'Очистити всю історію?' :
                    currentLang === 'ru' ? 'Очистить всю историю?' :
                    currentLang === 'en' ? 'Clear all history?' :
                    'Gesamten Verlauf löschen?'
                  )) {
                    clearHistory();
                    setShowHistory(false);
                  }
                }}
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                {currentLang === 'uk' && 'Очистити'}
                {currentLang === 'ru' && 'Очистить'}
                {currentLang === 'en' && 'Clear'}
                {currentLang === 'de' && 'Löschen'}
              </button>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {calcHistory.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-blue-500/20 rounded-lg p-3 hover:bg-white/10 transition-all cursor-pointer group"
                  onClick={() => handleLoadFromHistory(item)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-400">
                      {formatTime(item.timestamp)[currentLang]}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCalculation(item.id);
                      }}
                      className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                  <div className="text-sm">
                    {Object.entries(item.inputs).map(([key, value]) => {
                      const field = calc.fields.find(f => f.id === key);
                      return (
                        <div key={key} className="text-gray-300">
                          <span className="text-gray-500">{field?.label[currentLang]}:</span> {value}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 text-xs font-mono text-cyan-400">
                    {typeof item.result === 'object' ? item.result[currentLang] : item.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 mb-6 print:text-gray-700">{calc.desc[currentLang]}</p>

        {/* ============ ОНОВЛЕНА СЕКЦІЯ INPUT FIELDS ============ */}
        <div className="space-y-6 mb-6 print-avoid-break">
          {calc.fields.map((field, index) => (
            <div 
              key={field.id}
              className="animate-fadeInLeft"
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: 'both' 
              }}
            >
              <EnhancedInput
                field={field}
                value={formData[field.id]}
                onChange={(value) => handleInputChange(field.id, value)}
                error={errors[field.id]}
                currentLang={currentLang}
                showSlider={true}
                showUnit={true}
                onKeyPress={handleKeyPress}
              />
            </div>
          ))}
        </div>
        {/* ============ КІНЕЦЬ ОНОВЛЕНОЇ СЕКЦІЇ ============ */}

        {/* Buttons */}
        <div className="flex gap-4 mb-6 print:hidden">
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className={`flex-1 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
              isCalculating 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-lg hover:shadow-blue-500/50'
            }`}
          >
            {isCalculating ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {currentLang === 'uk' && 'Розрахунок...'}
                {currentLang === 'ru' && 'Расчет...'}
                {currentLang === 'en' && 'Calculating...'}
                {currentLang === 'de' && 'Berechnung...'}
              </span>
            ) : (
              t.calculate
            )}
          </button>
          
          {result && (
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gray-600/30 hover:bg-gray-600/50 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              {currentLang === 'uk' && 'Скинути'}
              {currentLang === 'ru' && 'Сбросить'}
              {currentLang === 'en' && 'Reset'}
              {currentLang === 'de' && 'Zurücksetzen'}
            </button>
          )}
        </div>

        {/* Result */}
        {result && (
          <div className={`p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl transition-all duration-500 print:bg-gray-50 print:border-gray-300 print-avoid-break ${
            showResult ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce-custom print:hidden">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-cyan-400 print:text-black">
                {t.result}
              </h3>
            </div>
            
            <div className="bg-[#0a0e27]/50 p-4 rounded-lg border border-blue-500/20 print:bg-white print:border-gray-200">
              <p className="text-white text-lg whitespace-pre-line leading-relaxed font-mono print:text-black">
                {typeof result === 'object' ? result[currentLang] : result}
              </p>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-3 mt-6 print:hidden">
              <button
                onClick={handleExportPDF}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>
                  {currentLang === 'de' && 'Als PDF'}
                  {currentLang === 'en' && 'As PDF'}
                  {currentLang === 'uk' && 'Як PDF'}
                  {currentLang === 'ru' && 'Как PDF'}
                </span>
              </button>
            </div>

            {/* Progress bar animation */}
            <div className="mt-4 h-2 bg-gray-700/30 rounded-full overflow-hidden print:hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-shimmer"></div>
            </div>

            {/* Decorative sparkles */}
            <div className="flex justify-center gap-2 mt-4 print:hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-custom"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* Help text */}
        <div className="mt-6 text-center text-gray-500 text-sm print:hidden">
          {currentLang === 'uk' && '💡 Підказка: Натисніть Enter для швидкого розрахунку'}
          {currentLang === 'ru' && '💡 Подсказка: Нажмите Enter для быстрого расчета'}
          {currentLang === 'en' && '💡 Tip: Press Enter for quick calculation'}
          {currentLang === 'de' && '💡 Tipp: Drücken Sie Enter für schnelle Berechnung'}
        </div>

        {/* Print-only footer */}
        <div className="hidden print:block mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>Erstellt mit EngSim - Ingenieurtechnische Rechner</p>
          <p>Viktor Sukaylo | https://tarasmysiuratutor.github.io/EngSim/</p>
          <p className="mt-2 text-xs italic">
            Dieser Bericht dient nur zu Informationszwecken. 
            Für finale Berechnungen konsultieren Sie bitte einen qualifizierten Ingenieur.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmerAnimation {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmerAnimation 2s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeInLeft {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s ease-out;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        @keyframes bounceCustom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-custom {
          animation: bounceCustom 2s ease-in-out infinite;
        }

        @keyframes pulseCustom {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-pulse-custom {
          animation: pulseCustom 2s ease-in-out infinite;
        }

        @media print {
          @page {
            margin: 1.5cm;
            size: A4 portrait;
          }

          body.printing-modal > *:not(.fixed) {
            display: none !important;
          }

          body.printing-modal .fixed.inset-0 {
            position: static !important;
            background: white !important;
            backdrop-filter: none !important;
          }

          .print\\:hidden,
          button,
          svg.animate-spin,
          svg.animate-bounce,
          .absolute,
          [class*="blur"],
          [class*="shadow"],
          .border-blue-500 {
            display: none !important;
          }

          body {
            background: white !important;
          }

          .bg-gradient-to-br {
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            max-height: none !important;
            overflow: visible !important;
            box-shadow: none !important;
            padding: 20px !important;
          }

          h2, h3, h4, p, label, span {
            color: #000 !important;
            page-break-after: avoid !important;
          }

          input, textarea {
            border: 1px solid #ccc !important;
            background: white !important;
            color: #000 !important;
            page-break-inside: avoid !important;
          }

          [class*="from-blue-500"] {
            background: #f5f5f5 !important;
            border: 1px solid #ddd !important;
            color: #000 !important;
          }

          .space-y-4 > * {
            margin-bottom: 8px !important;
          }

          .space-y-6 > * {
            margin-bottom: 12px !important;
          }

          .print\\:block {
            display: block !important;
            margin-top: 20px !important;
            page-break-before: avoid !important;
          }

          .print-avoid-break {
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CalculatorModal;