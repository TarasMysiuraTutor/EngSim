// src/components/EnhancedInput.jsx
import React, { useState } from 'react';

const EnhancedInput = ({ 
  field, 
  value, 
  onChange, 
  error, 
  currentLang,
  showSlider = true,
  showUnit = true,
  onKeyPress
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Значення за замовчуванням
  const min = field.min || 0;
  const max = field.max || 10000;
  const step = field.step || 1;
  const unit = field.unit || '';

  // Обчислення прогресу для візуалізації
  const progress = value ? ((value - min) / (max - min)) * 100 : 0;

  // Підказки для різних мов
  const tooltips = {
    uk: field.tooltip?.uk || '',
    ru: field.tooltip?.ru || '',
    en: field.tooltip?.en || '',
    de: field.tooltip?.de || ''
  };

  const placeholder = {
    uk: 'Введіть значення',
    ru: 'Введите значение',
    en: 'Enter value',
    de: 'Wert eingeben'
  }[currentLang];

  return (
    <div className="space-y-2">
      {/* Label з підказкою */}
      <div className="flex items-center justify-between">
        <label className="block text-gray-400 text-sm font-medium flex items-center gap-2 print:text-gray-700">
          <span className="text-blue-400 print:hidden">•</span>
          {field.label[currentLang]}
          
          {tooltips[currentLang] && (
            <div className="group relative inline-block print:hidden">
              <span className="cursor-help text-gray-500 hover:text-blue-400 transition-colors text-base">
                ℹ️
              </span>
              <div className="invisible group-hover:visible absolute left-0 top-6 z-50 w-64 p-3 bg-gray-900 border border-blue-500/30 rounded-lg text-xs text-gray-300 shadow-xl">
                {tooltips[currentLang]}
                <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 border-l border-t border-blue-500/30 transform rotate-45"></div>
              </div>
            </div>
          )}
        </label>

        {/* Показуємо поточне значення з одиницями */}
        {showUnit && value && unit && (
          <span className="text-sm text-cyan-400 font-medium print:hidden">
            {value} {unit}
          </span>
        )}
      </div>

      {/* Input з одиницями */}
      <div className="relative">
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || '')}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={onKeyPress}
          autoComplete="off"
          className={`w-full px-4 py-3 ${showUnit && unit ? 'pr-20' : 'pr-4'} bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 print:bg-white print:text-black print:border-gray-300 ${
            error
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50'
              : isFocused
              ? 'border-cyan-400 focus:ring-cyan-400/50'
              : 'border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50'
          }`}
          placeholder={placeholder}
        />
        
        {/* Одиниця виміру справа */}
        {showUnit && unit && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none print:text-gray-600">
            {unit}
          </div>
        )}

        {/* Прогрес бар знизу input */}
        {isFocused && value && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700 rounded-full overflow-hidden print:hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
              style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            />
          </div>
        )}
      </div>

      {/* Range Slider */}
      {showSlider && (
        <div className="relative px-1 print:hidden">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value || min}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer slider-thumb"
            style={{
              background: `linear-gradient(to right, 
                rgb(59, 130, 246) 0%, 
                rgb(34, 211, 238) ${progress}%, 
                rgba(255, 255, 255, 0.05) ${progress}%, 
                rgba(255, 255, 255, 0.05) 100%)`
            }}
          />
          
          {/* Мітки min/max */}
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </div>
      )}

      {/* Помилка */}
      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm animate-fadeIn print:hidden">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}

      {/* Швидкі значення (опціонально) */}
      {field.quickValues && field.quickValues.length > 0 && (
        <div className="flex gap-2 flex-wrap print:hidden">
          {field.quickValues.map((qv) => (
            <button
              key={qv}
              onClick={() => onChange(qv)}
              type="button"
              className={`px-3 py-1 text-xs rounded-lg transition-all ${
                value === qv
                  ? 'bg-cyan-500/30 border-cyan-500/50 text-cyan-400'
                  : 'bg-white/5 hover:bg-white/10 border-blue-500/20 hover:border-blue-500/50 text-gray-400 hover:text-white'
              } border`}
            >
              {qv} {unit}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        /* Custom slider thumb styles */
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #22d3ee);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.8);
        }

        .slider-thumb::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #22d3ee);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.8);
        }

        /* Remove default input number arrows */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default EnhancedInput;