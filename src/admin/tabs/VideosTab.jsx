// src/admin/components/tabs/VideosTab.jsx

import React from "react";
import { Check, Copy } from "lucide-react";
import { adminTranslations } from "../i18n/adminTranslations";

export const VideosTab = ({
  currentLang,
  videoData,
  setVideoData,
  copied,
  copyToClipboard
}) => {
  const t = adminTranslations[currentLang];

  const handleInput = (field, value) => {
    setVideoData(prev => ({ ...prev, [field]: value }));
  };

  const handleTitleChange = (lang, value) => {
    setVideoData(prev => ({
      ...prev,
      title: { ...prev.title, [lang]: value }
    }));
  };

  const handleDescChange = (lang, value) => {
    setVideoData(prev => ({
      ...prev,
      description: { ...prev.description, [lang]: value }
    }));
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">

        {/* BASIC INFO */}
        <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {t.videosBasic}
          </h2>

          <div className="space-y-4">

            <input
              type="number"
              placeholder="ID"
              value={videoData.id}
              onChange={e => handleInput("id", e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border rounded-xl text-white"
            />

            <input
              type="text"
              placeholder="YouTube ID"
              value={videoData.youtubeId}
              onChange={e => handleInput("youtubeId", e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border rounded-xl text-white"
            />

            <input
              type="text"
              placeholder={t.videosDuration}
              value={videoData.duration}
              onChange={e => handleInput("duration", e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border rounded-xl text-white"
            />

            <input
              type="date"
              value={videoData.date}
              onChange={e => handleInput("date", e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border rounded-xl text-white"
            />

          </div>
        </div>

        {/* TITLES */}
        <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {t.videosTitles}
          </h2>

          {["uk", "ru", "en", "de"].map(lang => (
            <div key={lang} className="mb-3">
              <label className="text-sm text-gray-400 mb-1 block">
                {lang.toUpperCase()}
              </label>
              <input
                type="text"
                value={videoData.title[lang]}
                onChange={e => handleTitleChange(lang, e.target.value)}
                className="w-full px-4 py-2 bg-[#0a0e27] border rounded-xl text-white"
              />
            </div>
          ))}

          <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-6">
            {t.videosDescriptions}
          </h2>

          {["uk", "ru", "en", "de"].map(lang => (
            <div key={lang} className="mb-3">
              <label className="text-sm text-gray-400 mb-1 block">
                {lang.toUpperCase()}
              </label>
              <textarea
                value={videoData.description[lang]}
                onChange={e => handleDescChange(lang, e.target.value)}
                className="w-full px-4 py-2 bg-[#0a0e27] border rounded-xl text-white"
                rows="2"
              />
            </div>
          ))}
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
            {JSON.stringify(videoData, null, 2)}
          </pre>
        </div>

      </div>
    </>
  );
};