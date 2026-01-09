// src/components/CalculatorModal.jsx - ФРАГМЕНТ З ІНТЕГРАЦІЄЮ
import React, { useState, useEffect } from 'react';
import { exportToPDF } from '../utils/pdfExport';
import { useCalculationHistory } from '../hooks/useCalculationHistory';
import EnhancedInput from './EnhancedInput'; // НОВИЙ ІМПОРТ

const CalculatorModal = ({ currentCalc, currentLang, calculators, t, onClose }) => {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const {
    addCalculation,
    getCalculatorHistory,
    removeCalculation,
    clearHistory,
    formatTime
  } = useCalculationHistory();

  const calc = calculators[currentCalc];
  const calcHistory = getCalculatorHistory(currentCalc);

  // ... решта коду без змін до Input Fields

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[#1a1f3a]/98 to-[#0f1428]/98 border border-blue-500/40 rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - без змін */}
        {/* ... */}

        {/* History Sidebar - без змін */}
        {/* ... */}

        {/* Description */}
        <p className="text-gray-400 mb-6">{calc.desc[currentLang]}</p>

        {/* ============ ОНОВЛЕНА СЕКЦІЯ INPUT FIELDS ============ */}
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
              {/* ВИКОРИСТОВУЄМО НОВИЙ КОМПОНЕНТ */}
              <EnhancedInput
                field={field}
                value={formData[field.id]}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    [field.id]: value
                  });
                  
                  // Очищаємо помилку
                  if (errors[field.id]) {
                    setErrors({
                      ...errors,
                      [field.id]: ''
                    });
                  }
                }}
                error={errors[field.id]}
                currentLang={currentLang}
                showSlider={true}
                showUnit={true}
              />
            </div>
          ))}
        </div>
        {/* ============ КІНЕЦЬ ОНОВЛЕНОЇ СЕКЦІЇ ============ */}

        {/* Buttons - без змін */}
        {/* ... */}

        {/* Result - без змін */}
        {/* ... */}

        {/* Решта компонента без змін */}
      </div>
    </div>
  );
};

export default CalculatorModal;