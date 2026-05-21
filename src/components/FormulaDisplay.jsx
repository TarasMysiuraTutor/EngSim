import React from "react";
import katex from "katex";

/**
 * FormulaDisplay — рендерить LaTeX формули через KaTeX.
 * dangerouslySetInnerHTML тут безпечний — KaTeX генерує HTML сам.
 */
const FormulaDisplay = ({ formula, inline = false, className = "" }) => {
  const renderFormula = () => {
    try {
      const html = katex.renderToString(formula, {
        throwOnError: false,
        displayMode: !inline,
      });
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    } catch {
      return <span className="text-red-400">{formula}</span>;
    }
  };

  return (
    <div className={`${inline ? "inline-block" : "block"} ${className}`}>
      {renderFormula()}
    </div>
  );
};

export default FormulaDisplay;
