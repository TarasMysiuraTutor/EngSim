import { useState } from "react";
const CalculatorRenderer = ({ schema, currentLang, onCalculate, onExportPdf }) => {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = onCalculate(values);
    setResult(res);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "16px", maxWidth: "500px" }}
    >
      {schema.map((field) => (
        <div key={field.name} style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", color: "#fff" }}>
            {field.label[currentLang] ?? field.label.en}
          </label>

          <input
            type="number"
            value={values[field.name] ?? ""}
            onChange={(e) => handleChange(field.name, Number(e.target.value))}
            style={{
              width: "100%",
              padding: "6px",
              marginTop: "4px",
            }}
          />

          {field.unit && <small style={{ color: "#aaa" }}>{field.unit}</small>}
        </div>
      ))}

      <button type="submit">Calculate</button>

      {result && onExportPdf && (
        <button
          type="button"
          onClick={() => onExportPdf(values, result)}
          style={{ marginLeft: "10px" }}
        >
          Export PDF
        </button>
      )}
    </form>
  );
};

export default CalculatorRenderer;
