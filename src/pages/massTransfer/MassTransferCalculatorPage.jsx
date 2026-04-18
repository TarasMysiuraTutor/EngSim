import { useLanguage } from "@/stores/language";
import { useHistory } from "@/services/history";
import { exportToPdf } from "@/services/pdf";

import CalculatorRenderer from "@/components/CalculatorRenderer";

const MassTransferCalculatorPage = ({
  meta,
  schema,
  calculate,
}) => {
  const { lang } = useLanguage();
  const history = useHistory(meta.id);

  const handleCalculate = (values) => {
    // ✅ 1. розрахунок (твоя існуюча логіка)
    const result = calculate(values);

    // ✅ 2. історія (пункт 6)
    if (meta.allowHistory) {
      history.add({
        calculatorId: meta.id,
        inputs: values,
        result,
        lang,
        timestamp: Date.now(),
      });
    }

    return result;
  };

  const handleExportPdf = (values, result) => {
    // ✅ 3. PDF (пункт 6)
    if (meta.allowPdf) {
      exportToPdf({
        meta,
        inputs: values,
        result,
        lang,
      });
    }
  };

  return (
    <>
      <h1>{meta.title[lang]}</h1>

      <CalculatorRenderer
        schema={schema}
        onCalculate={handleCalculate}
        onExportPdf={handleExportPdf}
      />
    </>
  );
};

export default MassTransferCalculatorPage;