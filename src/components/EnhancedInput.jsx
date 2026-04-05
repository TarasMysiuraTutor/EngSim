import React, { useState } from "react";

const EnhancedInput = ({
  field,
  value,
  onChange,
  error,
  currentLang,
  showSlider = true,
  showUnit = true,
  onKeyPress,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const min = field.min ?? 0;
  const max = field.max ?? 10000;
  const step = field.step ?? 1;
  const unit = field.unit ?? "";

  const progress = value ? ((value - min) / (max - min)) * 100 : 0;

  const tooltips = {
    uk: field.tooltip?.uk ?? "",
    ru: field.tooltip?.ru ?? "",
    en: field.tooltip?.en ?? "",
    de: field.tooltip?.de ?? "",
  };

  const placeholder = {
    uk: "Введіть значення",
    ru: "Введите значение",
    en: "Enter value",
    de: "Wert eingeben",
  }[currentLang];

  return (
    <div className="mb-6">
      {/* Label */}
      <label className="text-white text-sm block mb-1">
        {field.label[currentLang]}

        {tooltips[currentLang] && (
          <span className="ml-2 text-gray-400 text-xs">ℹ️ {tooltips[currentLang]}</span>
        )}
      </label>

      {/* Input container */}
      <div className="relative">
        <input
          type="number"
          step={step}
          min={min}
          max={max}
          value={value ?? ""}
          onChange={(e) => onChange(parseFloat(e.target.value) || "")}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={onKeyPress}
          autoComplete="off"
          placeholder={placeholder}
          className={`w-full px-4 py-3 ${
            showUnit && unit ? "pr-20" : "pr-4"
          } bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 print:bg-white print:text-black print:border-gray-300 ${
            error
              ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
              : isFocused
              ? "border-cyan-400 focus:ring-cyan-400/50"
              : "border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50"
          }`}
        />

        {/* Unit */}
        {showUnit && unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm">
            {unit}
          </span>
        )}
      </div>

      {/* Slider */}
      {showSlider && (
        <div className="mt-3">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value ?? 0}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer slider-thumb"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #22d3ee ${progress}%, rgba(255,255,255,0.05) ${progress}%, rgba(255,255,255,0.05) 100%)`,
            }}
          />

          <div className="flex justify-between text-gray-400 text-xs mt-1">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}

      {/* Quick values */}
      {field.quickValues?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {field.quickValues.map((qv) => (
            <button
              key={qv}
              type="button"
              onClick={() => onChange(qv)}
              className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                value === qv
                  ? "bg-cyan-500/30 border-cyan-500/50 text-cyan-400"
                  : "bg-white/5 hover:bg-white/10 border-blue-500/20 hover:border-blue-500/50 text-gray-400 hover:text-white"
              }`}
            >
              {qv} {unit}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedInput;