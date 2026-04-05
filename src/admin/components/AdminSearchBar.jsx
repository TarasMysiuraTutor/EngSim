import { Search } from "lucide-react";

export const AdminSearchBar = ({ value, onChange, placeholder }) => (
  <div className="relative mb-6">
    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-2 bg-white/10 border border-blue-500/30 rounded-xl text-white"
    />
  </div>
);