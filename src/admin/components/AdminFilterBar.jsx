import { adminTranslations } from "../i18n/adminTranslations";

export const AdminFilterBar = ({ value, onChange, options, currentLang }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="px-4 py-2  bg-[#0a0e27]/98 border border-blue-500/30 rounded-xl text-white mb-6 mr-6" 
  >
    <option value="all">
      {adminTranslations[currentLang].filterCategoryAll}
    </option>
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);
