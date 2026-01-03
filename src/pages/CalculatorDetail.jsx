// src/pages/CalculatorDetail.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { calculators } from '../data/calculators';
import { calculatorSEO, categoryMap, getRelatedCalculators } from '../data/calculatorsMetadata';
import { exportToPDF } from '../utils/pdfExport';

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

  // Якщо калькулятор не знайдено
  if (!calc) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 flex items-center justify-center">
        <div className="text-center">
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
      [fieldId]: value === '' ? '' : parseFloat(value)
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
              <div className="flex items-center gap-6 mb-6">
                <span className="text-7xl animate-bounce-custom">{calc.icon}</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                    {calc.title[currentLang]}
                  </h1>
                  <p className="text-xl text-gray-400">
                    {metadata.fullDesc?.[currentLang] || calc.desc[currentLang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Основний контент: 2 колонки на desktop */}
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

                {/* Поля вводу */}
                <div className="space-y-4 mb-6">
                  {calc.fields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-gray-400 mb-2">
                        {field.label[currentLang]}
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all ${
                          errors[field.id]
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50'
                            : 'border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50'
                        }`}
                        placeholder="0.00"
                      />
                      {errors[field.id] && (
                        <p className="mt-1 text-red-400 text-sm">{errors[field.id]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Кнопки */}
                <div className="flex gap-4">
                  <button
                    onClick={handleCalculate}
                    disabled={isCalculating}
                    className="flex-1 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50"
                  >
                    {isCalculating ? '⏳' : t.calculate || 'Calculate'}
                  </button>
                  
                  {result && (
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-gray-600/30 hover:bg-gray-600/50 rounded-xl font-semibold transition-all"
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
                    <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                      <span>✅</span>
                      {t.result || 'Result'}
                    </h3>
                    <div className="bg-[#0a0e27]/50 p-4 rounded-lg border border-blue-500/20">
                      <p className="text-white text-lg whitespace-pre-line font-mono">
                        {typeof result === 'object' ? result[currentLang] : result}
                      </p>
                    </div>

                    <button
                      onClick={handleExportPDF}
                      className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
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
                  </div>
                )}
              </div>

              {/* ПРАВА КОЛОНКА: Теорія */}
              <div className="space-y-8">
                {/* Теорія */}
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

                {/* Коли використовувати */}
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
                      className="group bg-white/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all">
                        {relCalc.icon}
                      </div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">
                        {relCalc.title[currentLang]}
                      </h3>
                      <p className="text-gray-400 text-sm">
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
                {currentLang === 'uk' && 'Звертайтеся до нас за консультацією професійного інженера'}
                {currentLang === 'ru' && 'Обращайтесь к нам за консультацией профессионального инженера'}
                {currentLang === 'en' && 'Contact us for professional engineering consultation'}
                {currentLang === 'de' && 'Kontaktieren Sie uns für professionelle Ingenieurbera tung'}
              </p>
              <Link
                to="/#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold transition-all hover:scale-105"
              >
                {t.contactButton || 'Contact us'}
              </Link>
            </div>
          </div>
        </div>

        <Footer t={t} />
      </div>
    </>
  );
};

export default CalculatorDetail;