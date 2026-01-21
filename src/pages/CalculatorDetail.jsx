// src/pages/CalculatorDetail.jsx - ПОВНИЙ ФУНКЦІОНАЛ З МОДАЛКИ
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EnhancedInput from '../components/EnhancedInput';
import { calculators } from '../data/calculators';
import { calculatorSEO, categoryMap, getRelatedCalculators } from '../data/calculatorsMetadata';
import { exportToPDF } from '../utils/pdfExport';
import { useCalculationHistory } from '../hooks/useCalculationHistory';

const CalculatorDetail = ({ currentLang, setCurrentLang, t }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const calc = calculators[slug];
  const metadata = calculatorSEO[slug] || {};

  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // 👇 ДОДАНО: Історія розрахунків
  const {
    addCalculation,
    getCalculatorHistory,
    removeCalculation,
    clearHistory,
    formatTime
  } = useCalculationHistory();

  const calcHistory = calc ? getCalculatorHistory(slug) : [];

  // Якщо калькулятор не знайдено
  if (!calc) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 flex items-center justify-center">
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />
        <div className="text-center pt-32">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl mb-4">
            {currentLang === 'uk' && 'Калькулятор не знайдено'}
            {currentLang === 'ru' && 'Калькулятор не найден'}
            {currentLang === 'en' && 'Calculator not found'}
            {currentLang === 'de' && 'Rechner nicht gefunden'}
          </h1>
          <Link to="/calculators" className="text-blue-400 hover:text-cyan-400">
            {currentLang === 'uk' && '← Повернутися до каталогу'}
            {currentLang === 'ru' && '← Вернуться к каталогу'}
            {currentLang === 'en' && '← Back to catalog'}
            {currentLang === 'de' && '← Zurück zum Katalog'}
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (fieldId, value) => {
    setFormData({
      ...formData,
      [fieldId]: value === '' ? '' : value
    });
    
    if (errors[fieldId]) {
      setErrors({ ...errors, [fieldId]: '' });
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
      
      // 👇 ДОДАНО: Зберігаємо в історію
      addCalculation(
        slug,
        calc.title[currentLang],
        formData,
        calculatedResult,
        currentLang
      );
      
      setIsCalculating(false);
      setTimeout(() => setShowResult(true), 100);
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

  // 👇 ДОДАНО: Завантажити з історії
  const handleLoadFromHistory = (historyItem) => {
    setFormData(historyItem.inputs);
    setResult(historyItem.result);
    setShowResult(true);
    setShowHistory(false);
  };

  const handleExportPDF = () => {
    const pdfLang = currentLang === 'de' ? 'de' : 'en';
    const inputs = {};
    
    calc.fields.forEach(field => {
      if (formData[field.id]) {
        const label = field.label[pdfLang] || field.label['en'];
        inputs[label] = `${formData[field.id]} ${field.unit || ''}`;
      }
    });

    const resultLabel = pdfLang === 'de' ? 'Ergebnis' : 'Result';
    const pdfResult = typeof result === 'object' ? 
      (result[pdfLang] || result['en'] || result[currentLang]) : result;

    const pdfData = {
      calculatorName: calc.title[pdfLang] || calc.title[currentLang],
      inputs: inputs,
      results: { [resultLabel]: pdfResult },
      formula: calc.formula?.[pdfLang] || '',
      notes: metadata.fullDesc?.[pdfLang] || calc.desc[pdfLang]
    };

    exportToPDF(pdfData, pdfLang);
  };

  const relatedCalcs = getRelatedCalculators(slug, calculators, 3);
  const pageTitle = `${calc.title[currentLang]} | EngSim`;
  const pageDesc = metadata.fullDesc?.[currentLang] || calc.desc[currentLang];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <link rel="canonical" href={`https://tarasmysiuratutor.github.io/EngSim/calculator/${slug}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />

        <div className="pt-32 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <Link to="/" className="text-blue-400 hover:text-cyan-400 transition-colors">
                {t.home || 'Home'}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to="/calculators" className="text-blue-400 hover:text-cyan-400 transition-colors">
                {currentLang === 'uk' && 'Калькулятори'}
                {currentLang === 'ru' && 'Калькуляторы'}
                {currentLang === 'en' && 'Calculators'}
                {currentLang === 'de' && 'Rechner'}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">{calc.title[currentLang]}</span>
            </nav>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-6">
                  <span className="text-7xl animate-bounce-custom">{calc.icon}</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                      {calc.title[currentLang]}
                    </h1>
                    <p className="text-xl text-gray-400">
                      {metadata.fullDesc?.[currentLang] || calc.desc[currentLang]}
                    </p>
                    {calcHistory.length > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        {currentLang === 'uk' && `${calcHistory.length} розрахунків в історії`}
                        {currentLang === 'ru' && `${calcHistory.length} расчетов в истории`}
                        {currentLang === 'en' && `${calcHistory.length} calculations in history`}
                        {currentLang === 'de' && `${calcHistory.length} Berechnungen im Verlauf`}
                      </p>
                    )}
                  </div>
                </div>

                {/* 👇 ДОДАНО: Кнопка історії */}
                {calcHistory.length > 0 && (
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="relative px-4 py-2 bg-white/5 hover:bg-white/10 border border-blue-500/30 hover:border-blue-500/60 rounded-xl transition-all duration-300"
                    title={currentLang === 'uk' ? 'Історія' : currentLang === 'ru' ? 'История' : currentLang === 'en' ? 'History' : 'Verlauf'}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🕒</span>
                      <span className="font-semibold">
                        {currentLang === 'uk' && 'Історія'}
                        {currentLang === 'ru' && 'История'}
                        {currentLang === 'en' && 'History'}
                        {currentLang === 'de' && 'Verlauf'}
                      </span>
                    </div>
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      {calcHistory.length}
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* 👇 ДОДАНО: History Sidebar */}
            {showHistory && (
              <div className="mb-8 bg-white/5 border border-blue-500/30 rounded-2xl p-6 animate-fadeIn">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                    <span>📜</span>
                    {currentLang === 'uk' && 'Історія розрахунків'}
                    {currentLang === 'ru' && 'История расчетов'}
                    {currentLang === 'en' && 'Calculation History'}
                    {currentLang === 'de' && 'Berechnungsverlauf'}
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
                    className="text-sm text-red-400 hover:text-red-300 transition-colors px-3 py-1 border border-red-400/30 rounded-lg hover:bg-red-400/10"
                  >
                    {currentLang === 'uk' && 'Очистити'}
                    {currentLang === 'ru' && 'Очистить'}
                    {currentLang === 'en' && 'Clear'}
                    {currentLang === 'de' && 'Löschen'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                  {calcHistory.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white/5 border border-blue-500/20 rounded-lg p-4 hover:bg-white/10 hover:border-blue-500/40 transition-all cursor-pointer group"
                      onClick={() => handleLoadFromHistory(item)}
                    >
                      <div className="flex justify-between items-start mb-3">
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
                      <div className="text-sm space-y-1">
                        {Object.entries(item.inputs).map(([key, value]) => {
                          const field = calc.fields.find(f => f.id === key);
                          return (
                            <div key={key} className="text-gray-300 flex justify-between">
                              <span className="text-gray-500">{field?.label[currentLang]}:</span>
                              <span className="font-mono">{value}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 text-xs font-mono text-cyan-400">
                        {typeof item.result === 'object' ? item.result[currentLang] : item.result}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Основний контент: 2 колонки */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* ЛІВА КОЛОНКА: Калькулятор */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                  <span>🧮</span>
                  {currentLang === 'uk' && 'Розрахунок'}
                  {currentLang === 'ru' && 'Расчет'}
                  {currentLang === 'en' && 'Calculation'}
                  {currentLang === 'de' && 'Berechnung'}
                </h2>

                {/* 👇 ОНОВЛЕНО: EnhancedInput зі слайдерами */}
                <div className="space-y-6 mb-6">
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

                {/* Кнопки */}
                <div className="flex gap-4">
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
                      t.calculate || 'Calculate'
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

                {/* Результат */}
                {result && (
                  <div className={`mt-6 p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl transition-all duration-500 ${
                    showResult ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce-custom">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-cyan-400">
                        {t.result || 'Result'}
                      </h3>
                    </div>
                    
                    <div className="bg-[#0a0e27]/50 p-4 rounded-lg border border-blue-500/20">
                      <p className="text-white text-lg whitespace-pre-line leading-relaxed font-mono">
                        {typeof result === 'object' ? result[currentLang] : result}
                      </p>
                    </div>

                    <button
                      onClick={handleExportPDF}
                      className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>
                        {currentLang === 'de' && 'Als PDF exportieren'}
                        {currentLang === 'en' && 'Export as PDF'}
                        {currentLang === 'uk' && 'Експортувати як PDF'}
                        {currentLang === 'ru' && 'Экспортировать как PDF'}
                      </span>
                    </button>

                    {/* Progress bar animation */}
                    <div className="mt-4 h-2 bg-gray-700/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                )}

                {/* Help text */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                  {currentLang === 'uk' && '💡 Підказка: Натисніть Enter для швидкого розрахунку'}
                  {currentLang === 'ru' && '💡 Подсказка: Нажмите Enter для быстрого расчета'}
                  {currentLang === 'en' && '💡 Tip: Press Enter for quick calculation'}
                  {currentLang === 'de' && '💡 Tipp: Drücken Sie Enter für schnelle Berechnung'}
                </div>
              </div>

              {/* ПРАВА КОЛОНКА: Теорія */}
              <div className="space-y-8">
                {metadata.theory && (
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                      <span>📖</span>
                      {currentLang === 'uk' && 'Теорія'}
                      {currentLang === 'ru' && 'Теория'}
                      {currentLang === 'en' && 'Theory'}
                      {currentLang === 'de' && 'Theorie'}
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
                      {metadata.theory[currentLang]}
                    </div>
                  </div>
                )}

                {metadata.useCases && (
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                      <span>💡</span>
                      {currentLang === 'uk' && 'Коли використовувати'}
                      {currentLang === 'ru' && 'Когда использовать'}
                      {currentLang === 'en' && 'When to use'}
                      {currentLang === 'de' && 'Wann zu verwenden'}
                    </h2>
                    <ul className="space-y-3">
                      {metadata.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{useCase[currentLang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Схожі калькулятори */}
            {relatedCalcs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
                  <span>🔗</span>
                  {currentLang === 'uk' && 'Схожі калькулятори'}
                  {currentLang === 'ru' && 'Похожие калькуляторы'}
                  {currentLang === 'en' && 'Related Calculators'}
                  {currentLang === 'de' && 'Ähnliche Rechner'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedCalcs.map((relCalc) => (
                    <Link
                      key={relCalc.id}
                      to={`/calculator/${relCalc.id}`}
                      className="group bg-white/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                    >
                      <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all">
                        {relCalc.icon}
                      </div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-blue-300 transition-colors">
                        {relCalc.title[currentLang]}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {relCalc.desc[currentLang]}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {currentLang === 'uk' && '📞 Потрібна допомога з розрахунками?'}
                {currentLang === 'ru' && '📞 Нужна помощь с расчетами?'}
                {currentLang === 'en' && '📞 Need help with calculations?'}
                {currentLang === 'de' && '📞 Brauchen Sie Hilfe bei Berechnungen?'}
              </h2>
              <p className="text-gray-400 mb-6">
                {currentLang === 'uk' && 'Звертайтесь до нас за консультацією професійного інженера'}
                {currentLang === 'ru' && 'Обращайтесь к нам за консультацией профессионального инженера'}
                {currentLang === 'en' && 'Contact us for professional engineering consultation'}
                {currentLang === 'de' && 'Kontaktieren Sie uns für professionelle Ingenieurberatung'}
              </p>
              <button
                onClick={() => navigate('/#contact')}
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold transition-all hover:scale-105"
              >
                {t.contactButton || 'Contact us'}
              </button>
            </div>
          </div>
        </div>

        <Footer t={t} currentLang={currentLang} />
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

        @keyframes bounceCustom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-custom {
          animation: bounceCustom 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default CalculatorDetail;