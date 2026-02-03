// src/components/FileCard.jsx
import React from "react";
import { getFileUrl } from "../data/reference/hydromechanics/files";

const FileCard = ({ file, currentLang }) => {
  const fileUrl = getFileUrl(file);

  // Іконки за типом файлу
  const fileIcons = {
    pdf: "📕",
    png: "🖼️",
    jpg: "🖼️",
    svg: "📊",
    mp4: "🎥",
    youtube: "▶️",
  };

  return (
    <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl group">
      <div className="flex items-start gap-4">
        {/* Thumbnail or Icon */}
        <div className="text-5xl flex-shrink-0">
          {file.thumbnail ? (
            <img
              src={file.thumbnail}
              alt={file.title[currentLang]}
              className="w-16 h-16 object-cover rounded-lg"
            />
          ) : (
            <span>{fileIcons[file.format] || "📄"}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
            {file.title[currentLang]}
          </h3>

          {/* Metadata */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <span className="font-semibold">{file.format.toUpperCase()}</span>
            </span>

            {file.pages && (
              <span>
                • {file.pages}{" "}
                {currentLang === "uk"
                  ? "стор."
                  : currentLang === "ru"
                    ? "стр."
                    : "pages"}
              </span>
            )}

            {file.size && <span>• {file.size}</span>}

            {file.year && <span>• {file.year}</span>}

            {file.edition && (
              <span className="text-blue-400">• {file.edition}</span>
            )}
          </div>

          {/* Authors */}
          {file.authors && file.authors.length > 0 && (
            <p className="text-xs text-gray-500 mb-2">
              {file.authors.join(", ")}
            </p>
          )}

          {/* Description */}
          {file.description && (
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {file.description[currentLang]}
            </p>
          )}

          {/* Tags */}
          {file.tags && file.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {file.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={fileUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-sm font-semibold"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {currentLang === "uk" && "Завантажити"}
              {currentLang === "ru" && "Скачать"}
              {currentLang === "en" && "Download"}
              {currentLang === "de" && "Herunterladen"}
            </a>

            {file.format !== "youtube" && (
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 transition-all text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {currentLang === "uk" && "Переглянути"}
                {currentLang === "ru" && "Просмотр"}
                {currentLang === "en" && "Preview"}
                {currentLang === "de" && "Vorschau"}
              </a>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {file.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-semibold rounded-full border border-yellow-500/30">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileCard;
