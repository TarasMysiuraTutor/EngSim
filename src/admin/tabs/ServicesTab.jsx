// src/admin/components/tabs/ServicesTab.jsx

import React from "react";
import { Check, Copy } from "lucide-react";
import { adminTranslations } from "../i18n/adminTranslations";

export const ServicesTab = ({
  currentLang,
  serviceData,
  setServiceData,
  iconPalette,
  copied,
  copyToClipboard
}) => {
  const t = adminTranslations[currentLang];

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">

        {/* BASIC INFO */}
        <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {t.servicesBasic}
          </h2>

          <div className="space-y-4">

            <input
              type="number"
              placeholder="ID"
              value={serviceData.id}
              onChange={e => setServiceData(prev => ({ ...prev, id: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0e27] border rounded-xl text-white"
            />

            <label className="text-sm text-gray-400"> {t.servicesIcon} </label>

            <div className="grid grid-cols-6 gap-2">
              {iconPalette.map(icon => (
                <button
                  key={icon.name}
                  onClick={() => setServiceData(prev => ({ ...prev, icon: icon.name }))}
                  className={`
                    p-3 rounded-xl transition-all
                    ${serviceData.icon === icon.name
                      ? "bg-blue-500 border-2 border-blue-400"
                      : "bg-white/5 border border-blue-500/30 hover:bg-white/10"}
                  `}
                >
                  <span className="text-2xl">{icon.icon}</span>
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder={t.servicesTitleKey}
              value={serviceData.titleKey}
              onChange={e => setServiceData(prev => ({ ...prev, titleKey: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0e27] border rounded-xl text-white"
            />

            <input
              type="text"
              placeholder={t.servicesDescKey}
              value={serviceData.descKey}
              onChange={e => setServiceData(prev => ({ ...prev, descKey: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a0e27] border rounded-xl text-white"
            />

            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                {t.servicesFeatures}
              </label>

              {[0, 1, 2].map(i => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Feature ${i + 1}`}
                  value={serviceData.featuresKeys[i]}
                  onChange={e => {
                    const updated = [...serviceData.featuresKeys];
                    updated[i] = e.target.value;
                    setServiceData(prev => ({ ...prev, featuresKeys: updated }));
                  }}
                  className="w-full px-4 py-2 bg-[#0a0e27] border rounded-xl text-white mb-2"
                />
              ))}
            </div>

          </div>
        </div>

        {/* JSON PREVIEW */}
        <div className="bg-[#0a0e27] border border-blue-500/30 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-cyan-400">
              {t.jsonPreview}
            </h2>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r 
                  from-blue-500 to-cyan-500 rounded-xl font-semibold"
            >
              {copied ? <Check size={16}/> : <Copy size={16}/>}
              {copied ? t.copied : t.copy}
            </button>
          </div>

          <div className="bg-black/50 border border-blue-500/20 rounded-xl p-4 overflow-x-auto max-h-60">
            <pre className="text-green-400 text-sm font-mono">
              {JSON.stringify(serviceData, null, 2)}
            </pre>
          </div>

        </div>
      </div>
    </>
  );
};