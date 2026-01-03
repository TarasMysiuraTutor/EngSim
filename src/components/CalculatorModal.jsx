import React, { useState, useEffect } from 'react';
import { exportToPDF } from '../utils/pdfExport';

const CalculatorModal = ({ currentCalc, currentLang, calculators, t, onClose }) => {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const calc = calculators[currentCalc];

  useEffect(() => {
    // Анімація відкриття
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleInputChange = (fieldId, value) => {
    setFormData({
      ...formData,
      [fieldId]: value === '' ? '' : parseFloat(value)
    });
    
    // Очищаємо помилку
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
    
    // Симуляція розрахунку з затримкою для анімації
    setTimeout(() => {
      const calculatedResult = calc.calculate(formData);
      // ВАЖЛИВО: Зберігаємо весь об'єкт з усіма мовами, а не тільки поточну
      setResult(calculatedResult);
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

  // Експорт в PDF
  const handleExportPDF = () => {
    // Визначаємо мову для PDF (німецька або англійська)
    const pdfLang = currentLang === 'de' ? 'de' : 'en';
    
    // Підготовка даних для PDF
    const inputs = {};
    const results = {};

    // Збираємо вхідні дані з лейблами на потрібній мові
    calc.fields.forEach(field => {
      if (formData[field.id]) {
        // Беремо лейбл німецькою або англійською
        const label = field.label[pdfLang] || field.label['en'] || field.label[currentLang];
        inputs[label] = `${formData[field.id]} ${field.unit || ''}`;
      }
    });

    // Отримуємо результат на потрібній мові для PDF
    const resultLabel = pdfLang === 'de' ? 'Ergebnis' : 'Result';
    
    // Якщо result це об'єкт з мовами - беремо потрібну мову
    // Якщо це рядок - просто беремо його
    const pdfResult = typeof result === 'object' 
      ? (result[pdfLang] || result['en'] || result[currentLang])
      : result;
    
    results[resultLabel] = pdfResult;

    // Формуємо дані для PDF
    const pdfData = {
      calculatorName: calc.title[pdfLang] || calc.title['en'] || calc.title[currentLang],
      inputs: inputs,
      results: results,
      formula: calc.formula?.[pdfLang] || calc.formula?.['en'] || '',
      notes: calc.notes?.[pdfLang] || calc.notes?.['en'] || calc.desc[pdfLang] || calc.desc['en']
    };

    // Викликаємо функцію експорту з правильною мовою
    exportToPDF(pdfData, pdfLang);
  };

  // Кнопка друку
  const handlePrint = () => {
    // Додаємо клас для друку тільки модального вікна
    document.body.classList.add('printing-modal');
    window.print();
    // Видаляємо клас після друку
    setTimeout(() => {
      document.body.classList.remove('printing-modal');
    }, 100);
  };

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[#1a1f3a]/98 to-[#0f1428]/98 border border-blue-500/40 rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn print:bg-white print:text-black print:border-none print:max-h-none print:overflow-visible"
        onClick={(e) => e.stopPropagation()}
        data-print-content
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 print:border-b print:border-gray-300 print:pb-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl animate-bounce-custom print:hidden">{calc.icon}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 print:text-black">
              {calc.title[currentLang]}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-3xl hover:text-blue-400 transition-all duration-300 w-10 h-10 flex items-center justify-center hover:bg-blue-500/20 rounded-full hover:rotate-90 print:hidden"
          >
            ×
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6 print:text-gray-700">{calc.desc[currentLang]}</p>

        {/* Input Fields */}
        <div className="space-y-4 mb-6 print-avoid-break">
          {calc.fields.map((field, index) => (
            <div 
              key={field.id}
              className="animate-fadeInLeft"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <label className="block text-gray-400 mb-2 flex items-center gap-2 print:text-gray-700">
                <span className="text-blue-400 print:hidden">•</span>
                {field.label[currentLang]}
              </label>
              <input
                type="number"
                step="0.01"
                value={formData[field.id] || ''}
                autoComplete="off"
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 print:bg-white print:text-black print:border-gray-300 ${
                  errors[field.id]
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50'
                    : 'border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50'
                }`}
                placeholder="0.00"
              />
              {errors[field.id] && (
                <p className="mt-1 text-red-400 text-sm animate-fadeIn print:hidden">{errors[field.id]}</p>
              )}
            </div>
          ))}
        </div>

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
            
            {/* Visual Result Display */}
            <div className="bg-[#0a0e27]/50 p-4 rounded-lg border border-blue-500/20 print:bg-white print:border-gray-200">
              <p className="text-white text-lg whitespace-pre-line leading-relaxed font-mono print:text-black">
                {typeof result === 'object' ? result[currentLang] : result}
              </p>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-3 mt-6 print:hidden">
              {/* PDF Export Button */}
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

              {/* Print Button */}
              {/* <button
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>
                  {currentLang === 'de' && 'Drucken'}
                  {currentLang === 'en' && 'Print'}
                  {currentLang === 'uk' && 'Друк'}
                  {currentLang === 'ru' && 'Печать'}
                </span>
              </button> */}
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

        @media print {
          /* Налаштування сторінки */
          @page {
            margin: 1.5cm;
            size: A4 portrait;
          }

          /* КОЛИ printing-modal - ховаємо все крім модалки */
          body.printing-modal > *:not(.fixed) {
            display: none !important;
          }

          /* Ховаємо backdrop */
          body.printing-modal .fixed.inset-0 {
            position: static !important;
            background: white !important;
            backdrop-filter: none !important;
          }

          /* Ховаємо кнопки та декорації */
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

          /* Основний контент */
          body {
            background: white !important;
          }

          /* Модальне вікно як звичайний документ */
          .bg-gradient-to-br {
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            max-height: none !important;
            overflow: visible !important;
            box-shadow: none !important;
            padding: 20px !important;
          }

          /* Текст чорний */
          h2, h3, h4, p, label, span {
            color: #000 !important;
            page-break-after: avoid !important;
          }

          /* Поля */
          input, textarea {
            border: 1px solid #ccc !important;
            background: white !important;
            color: #000 !important;
            page-break-inside: avoid !important;
          }

          /* Результати */
          [class*="from-blue-500"] {
            background: #f5f5f5 !important;
            border: 1px solid #ddd !important;
            color: #000 !important;
          }

          /* Компактність */
          .space-y-4 > * {
            margin-bottom: 8px !important;
          }

          .space-y-6 > * {
            margin-bottom: 12px !important;
          }

          /* Footer видимий */
          .print\\:block {
            display: block !important;
            margin-top: 20px !important;
            page-break-before: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CalculatorModal;