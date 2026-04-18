import { meta } from "@/calculators/massTransfer/diffusionFlatWall/meta";
import { schema } from "@/calculators/massTransfer/diffusionFlatWall/schema";
import { calculate } from "@/calculators/massTransfer/diffusionFlatWall/formulas";

import CalculatorRenderer from "@/components/CalculatorRenderer";

// ✅ ТВОЇ реальні сервіси
import { useCalculationHistory } from "@/hooks/useCalculationHistory";
import { exportToPDF } from "@/utils/pdfExport";


const DiffusionFlatWallPage = ({ currentLang }) => {
 
  const { addCalculation } = useCalculationHistory();

  const handleCalculate = (inputs) => {
    // 1️⃣ ЧИСТИЙ РОЗРАХУНОК (як зараз)
    const results = calculate(inputs);

    // 2️⃣ ✅ ПУНКТ 6 — ІСТОРІЯ
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
    // 3️⃣ ✅ ПУНКТ 6 — PDF
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

  return (
    <>
      <h1>{meta.title[currentLang]}</h1>

      
<CalculatorRenderer
  schema={schema}
  currentLang={currentLang}
  onCalculate={handleCalculate}
  onExportPdf={handleExportPdf}
/>

    </>
  );
};

export default DiffusionFlatWallPage;
``