export const AdminSortBar = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="px-4 py-2  bg-[#0a0e27]/98 border border-blue-500/30 rounded-xl text-white mb-6"
  >
    {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
  </select>
);