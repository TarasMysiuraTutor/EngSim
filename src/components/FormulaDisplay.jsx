// src/components/FormulaDisplay.jsx
// Компонент для красивого відображення формул з KaTeX

import React from 'react';
import katex from 'katex';

const FormulaDisplay = ({ formula, inline = false, className = '' }) => {
  // Функція для рендерингу формули
  const renderFormula = () => {
    // ВАЖЛИВО: Для використання KaTeX потрібно:
    // 1. npm install katex
    // 2. import 'katex/dist/katex.min.css' в App.jsx або index.jsx
    
    // Поки що відображаємо як HTML (для тестування без KaTeX)
    // Коли встановите KaTeX, розкоментуйте код нижче
    
    
    
    try {
      const html = katex.renderToString(formula, {
        throwOnError: false,
        displayMode: !inline
      });
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    } catch (error) {
      console.error('KaTeX render error:', error);
      return <span className="text-red-400">{formula}</span>;
    }
    
    
    // ТИМЧАСОВЕ РІШЕННЯ (без KaTeX):
    // Конвертуємо LaTeX в красивіший HTML
    const formatFormula = (latex) => {
      return latex
        // Дроби \frac{a}{b} → a/b з форматуванням
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '<span class="formula-frac"><span class="formula-num">$1</span><span class="formula-denom">$2</span></span>')
        // Грецькі літери
        .replace(/\\sigma/g, 'σ')
        .replace(/\\varepsilon/g, 'ε')
        .replace(/\\tau/g, 'τ')
        .replace(/\\pi/g, 'π')
        .replace(/\\Delta/g, 'Δ')
        // Індекси _{a} → нижній індекс
        .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
        .replace(/_(\w)/g, '<sub>$1</sub>')
        // Степені ^{a} → верхній індекс
        .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
        .replace(/\^(\w)/g, '<sup>$1</sup>')
        // Множення
        .replace(/\\cdot/g, '·')
        .replace(/\\times/g, '×');
    };

    return (
      <span 
        className={inline ? 'formula-inline' : 'formula-display'}
        dangerouslySetInnerHTML={{ __html: formatFormula(formula) }}
      />
    );
  };

  return (
    <div className={`${inline ? 'inline-block' : 'block'} ${className}`}>
      {renderFormula()}
    </div>
  );
};

export default FormulaDisplay;

/* 
ІНСТРУКЦІЯ ПО ВСТАНОВЛЕННЮ KATEX:

1. Встановіть бібліотеку:
   npm install katex

2. Додайте CSS в src/index.jsx або src/App.jsx:
   import 'katex/dist/katex.min.css';

3. Розкоментуйте код з katex.renderToString вище

4. Видаліть тимчасову функцію formatFormula

ПІСЛЯ ЦЬОГО ФОРМУЛИ БУДУТЬ ВИГЛЯДАТИ ТАК:
- Дроби: чисельник над знаменником
- Індекси: маленькі внизу/вгорі
- Грецькі літери: правильні символи
- Інтеграли, суми: математичні символи
*/