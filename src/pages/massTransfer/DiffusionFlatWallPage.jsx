import { meta } from "@/calculators/massTransfer/diffusionFlatWall/meta";
import { schema } from "@/calculators/massTransfer/diffusionFlatWall/schema";
import { calculate } from "@/calculators/massTransfer/diffusionFlatWall/formulas";

import CalculatorRenderer from "@/components/CalculatorRenderer";
import { useCalculationHistory } from "@/hooks/useCalculationHistory";
import SEO from "@/components/SEO";
import { exportToPDF } from "@/utils/pdfExport";


const DiffusionFlatWallPage = ({ currentLang }) => {
 
  const { addCalculation } = useCalculationHistory();

  const handleCalculate = (inputs) => {
    const results = calculate(inputs);
    addCalculation(
      meta.id,               // calculatorId
      meta.title[currentLang],      // calculatorName
      inputs,
      results,
      currentLang
    );

    return results;
  };

  const handleExportPdf = (inputs, results) => {
    // PDF export
    exportToPDF(
      {
        calculatorName: meta.title[currentLang],
        inputs,
        results,
        formula: meta.formulaLatex, // якщо є
        notes: meta.notes?.[currentLang],  // опційно
      },
      currentLang
    );
  };

  const lang = currentLang || "en";
  const titles = {
    en: "Diffusion Through Flat Wall — Mass Transfer Calculator",
    uk: "Дифузія через плоску стінку — Калькулятор масопередачі",
    de: "Diffusion durch ebene Wand — Stoffübertragungs-Rechner",
  };

  return (
    <>
      <SEO
        title={titles[lang] || titles.en}
        description="Calculate diffusion mass transfer through a flat wall. EngSim engineering calculator."
        lang={lang}
      />
    <>
      <h1>{meta.title[currentLang]}</h1>

      
<CalculatorRenderer
  schema={schema}
  currentLang={currentLang}
  onCalculate={handleCalculate}
  onExportPdf={handleExportPdf}
/>

    </>
    </>
  );
};

export default DiffusionFlatWallPage;
``