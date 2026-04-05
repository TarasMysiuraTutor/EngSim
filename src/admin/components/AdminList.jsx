// src/admin/components/AdminList.jsx
import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { adminTranslations } from "../i18n/adminTranslations";

// ✅ Функція для отримання заголовку з fallback-механізмом
const getTitle = (item, lang) => {
  if (item?.title) {
    return (
      item.title[lang] ||
      item.title.en ||
      item.title.uk ||
      item.title.ru ||
      item.title.de ||
      `#${item.id}`
    );
  }
  return `#${item.id}`;
};

// ✅ Функція для короткого опису (50–80 символів)
const getShortDesc = (item, lang) => {
  if (!item?.desc) return null;
  const text =
    item.desc[lang] ||
    item.desc.en ||
    item.desc.uk ||
    item.desc.ru ||
    item.desc.de ||
    "";

  if (text.length <= 120) return text;
  return text.slice(0, 120) + "...";
};

export const AdminList = ({ items, onEdit, onDelete, currentLang }) => {
  const t = adminTranslations[currentLang];

  if (!items.length)
    return (
      <p className="text-gray-400 italic mb-10">
        {t.emptyList ?? "Список порожній"}
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {items.map((item) => {
        const title = getTitle(item, currentLang);
        const shortDesc = getShortDesc(item, currentLang);

        return (
          <div
            key={item.id}
            className="
              bg-white/5 border border-white/10 rounded-2xl p-6 
              shadow-lg hover:bg-white/10 transition-all 
              flex flex-col justify-between h-full
            "
          >
            {/* ---------- TITLE ---------- */}
            <h3 className="text-lg text-cyan-300 font-bold mb-1">
              {title}
            </h3>

            {/* ---------- CATEGORY ---------- */}
            {item.category && (
              <p className="text-xs text-gray-400 mb-3">
                {item.category}
              </p>
            )}

            {/* ---------- SHORT DESCRIPTION ---------- */}
            {shortDesc && (
              <p className="text-gray-300 text-sm leading-snug mb-6 line-clamp-3">
                {shortDesc}
              </p>
            )}

            <div className="flex gap-3 mt-auto pt-4">

              {/* ---------- EDIT ---------- */}
              <button
                onClick={() => onEdit(item.id)}
                className="
                  flex items-center gap-2 px-4 py-2 
                  bg-blue-500/20 border border-blue-500/40 rounded-xl 
                  hover:bg-blue-500/30 transition-all w-full justify-center
                "
              >
                <Edit2 size={16} /> {t.edit ?? "Edit"}
              </button>

              {/* ---------- DELETE ---------- */}
              <button
                onClick={() => onDelete(item.id)}
                className="
                  flex items-center justify-center px-4 py-2 
                  bg-red-500/20 border border-red-500/40 rounded-xl 
                  hover:bg-red-500/30 transition-all
                "
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};