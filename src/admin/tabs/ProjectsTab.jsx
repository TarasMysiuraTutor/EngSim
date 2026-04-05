// src/admin/tabs/ProjectsTab.jsx
import React from "react";
import { Copy, Check } from "lucide-react";
import { adminTranslations } from "../i18n/adminTranslations";


export const ProjectsTab = ({
  currentLang,
  projectData,
  setProjectData,
  projectIconTypes,
  copied,
  copyToClipboard,
}) => {
  const t = adminTranslations[currentLang];

  // -----------------------------------------
  // ✅ handlers
  // -----------------------------------------

  const setField = (field, value) => {
    setProjectData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const setMultilang = (field, lang, value) => {
    setProjectData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: value,
      },
    }));
  };

  return (
    <>
      {/* =======================================
          ✅ TWO-COLUMN LAYOUT
      ======================================= */}
      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* ✅ BASIC INFO */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {t.projectsBasic}
            </h2>

            <div className="space-y-4">
              {/* ID + YEAR */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="ID"
                  value={projectData.id}
                  onChange={(e) => setField("id", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
                />

                <input
                  type="text"
                  placeholder={t.projectsYear}
                  value={projectData.year}
                  onChange={(e) => setField("year", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
                />
              </div>

              {/* ✅ ICON TYPE */}
              <select
                value={projectData.iconType}
                onChange={(e) => setField("iconType", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
              >
                {projectIconTypes.map((icon) => (
                  <option key={icon.value} value={icon.value}>
                    {icon.label}
                  </option>
                ))}
              </select>

              {/* ✅ TAGS */}
              <input
                type="text"
                placeholder={t.projectsTags}
                value={projectData.tags.join(", ")}
                onChange={(e) =>
                  setField(
                    "tags",
                    e.target.value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  )
                }
                className="w-full px-4 py-3 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
              />
            </div>
          </div>

          {/* ✅ TITLES */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {t.projectsTitles}
            </h2>

            {["uk", "ru", "en", "de"].map((lang) => (
              <div key={lang} className="mb-3">
                <label className="text-sm text-gray-400 mb-1 block">
                  {lang.toUpperCase()}
                </label>

                <input
                  type="text"
                  value={projectData.title[lang]}
                  onChange={(e) => setMultilang("title", lang, e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
                />
              </div>
            ))}
          </div>

          {/* ✅ SHORT DESCRIPTION */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {t.projectsDesc}
            </h2>

            {["uk", "ru", "en", "de"].map((lang) => (
              <div key={lang} className="mb-3">
                <label className="text-sm text-gray-400 mb-1 block">
                  {lang.toUpperCase()}
                </label>

                <textarea
                  rows={2}
                  value={projectData.desc[lang]}
                  onChange={(e) => setMultilang("desc", lang, e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================================
            ✅ RIGHT COLUMN
        ================================ */}
        <div className="space-y-8">
          {/* ✅ EXTENDED FIELDS */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
            {["overview", "results", "duration", "client", "industry"].map(
              (field) => (
                <div key={field} className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-300 capitalize mb-2">
                    {field}
                  </h3>

                  {["uk", "ru", "en", "de"].map((lang) => (
                    <div key={lang} className="mb-2">
                      <label className="text-sm text-gray-400 mb-1 block">
                        {lang.toUpperCase()}
                      </label>

                      <input
                        type="text"
                        value={projectData[field][lang]}
                        onChange={(e) =>
                          setMultilang(field, lang, e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-xl bg-[#0a0e27] border border-blue-500/30 text-white"
                      />
                    </div>
                  ))}
                </div>
              ),
            )}
          </div>

          {/* ✅ JSON PREVIEW */}
          <div className="bg-[#0a0e27] border border-blue-500/30 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-cyan-400">
                {t.jsonPreview}
              </h2>

              <button
                onClick={() => copyToClipboard(projectData)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl 
                bg-gradient-to-r from-blue-500 to-cyan-500 
                hover:scale-105 transition-all font-semibold"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? t.copied : t.copy}
              </button>
            </div>

            <div className="bg-black/40 border border-blue-500/20 rounded-xl p-4 max-h-[450px] overflow-auto">
              <pre className="text-green-400 text-sm font-mono">
                {JSON.stringify(projectData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
``;
