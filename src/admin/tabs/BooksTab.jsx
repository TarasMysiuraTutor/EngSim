// src/admin/tabs/BooksTab.jsx
import React from "react";
import { Copy, Check } from "lucide-react";
import { adminTranslations } from "../i18n/adminTranslations";

export const BooksTab = ({
  currentLang,
  bookData,
  setBookData,
  copied,
  copyToClipboard
}) => {

  const t = adminTranslations[currentLang];

  // -----------------------------------------
  // ✅ handlers
  // -----------------------------------------
  const setField = (field, value) => {
    setBookData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const setMultilang = (field, lang, value) => {
    setBookData(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: value
      }
    }));
  };

  return (
    <>
      {/* =======================================
          ✅ TWO-COLUMN FORM AREA
      ======================================= */}
      <div className="grid lg:grid-cols-2 gap-8 mb-10">

        {/* LEFT: BASIC INFO */}
        <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {t.booksBasic}
          </h2>

          <div className="space-y-4">

            {/* ID */}
            <input
              type="number"
              placeholder="ID"
              value={bookData.id}
              onChange={e => setField("id", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
            />

            {/* FILE */}
            <input
              type="text"
              placeholder={t.booksFile}
              value={bookData.file}
              onChange={e => setField("file", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
            />

            {/* PAGES */}
            <input
              type="number"
              placeholder={t.booksPages}
              value={bookData.pages}
              onChange={e => setField("pages", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
            />

            {/* FORMAT */}
            <select
              value={bookData.format}
              onChange={e => setField("format", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
            >
              <option value="PDF">PDF</option>
              <option value="EPUB">EPUB</option>
            </select>

            {/* ICON */}
            <input
              type="text"
              placeholder={t.booksIcon}
              value={bookData.icon}
              onChange={e => setField("icon", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
            />

            {/* CATEGORY */}
            <select
              value={bookData.category}
              onChange={e => setField("category", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
            >
              <option value="general">General</option>
              <option value="strength">Strength</option>
              <option value="hydraulic">Hydraulic</option>
              <option value="thermodynamic">Thermodynamic</option>
              <option value="energy">Energy</option>
            </select>

          </div>
        </div>

        {/* RIGHT: TITLES + DESCRIPTIONS */}
        <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">

          {/* ✅ Titles */}
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {t.booksTitles}
          </h2>

          {["uk", "ru", "en", "de"].map(lang => (
            <div key={lang} className="mb-3">
              <label className="block text-sm text-gray-400 mb-1">
                {lang.toUpperCase()}
              </label>

              <input
                type="text"
                value={bookData.title[lang]}
                onChange={e => setMultilang("title", lang, e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
              />
            </div>
          ))}

          {/* ✅ Descriptions */}
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-6">
            {t.booksDescriptions}
          </h2>

          {["uk", "ru", "en", "de"].map(lang => (
            <div key={lang} className="mb-3">
              <label className="block text-sm text-gray-400 mb-1">
                {lang.toUpperCase()}
              </label>

              <textarea
                rows="2"
                value={bookData.desc[lang]}
                onChange={e => setMultilang("desc", lang, e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
              />
            </div>
          ))}
        </div>

      </div>

      {/* =======================================
          ✅ JSON PREVIEW BLOCK
      ======================================= */}
      <div className="bg-[#0a0e27] border border-blue-500/30 rounded-2xl p-6">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-400">
            {t.jsonPreview}
          </h2>

          <button
            onClick={() => copyToClipboard(bookData)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r 
            from-blue-500 to-cyan-500 hover:scale-105 transition-all font-semibold"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? t.copied : t.copy}
          </button>
        </div>

        <div className="bg-black/40 border border-blue-500/20 rounded-xl p-4 max-h-[450px] overflow-auto">
          <pre className="text-green-400 text-sm font-mono">
            {JSON.stringify(bookData, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
};