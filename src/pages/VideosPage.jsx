// src/pages/VideosPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoCard from "../components/VideoCard";
import VideoFilter from "../components/VideoFilter";
import { videosData } from "../data/videosData";

import videos from "../data/json/videos.json"; // ✅ Ось головне!


import SEO from "../components/SEO";

const seoVideos = {
  uk: {
    title: "Інженерні відеоуроки — EngSim",
    description:
      "Добірка відеоуроків з механіки, гідравліки, теплотехніки, моделювання та інженерних симуляцій.",
    lang: "uk",
    canonical: "https://eng-sim.vercel.app/videos",
    keywords:
      "інженерні відео, механіка, гідравліка, відеоуроки, інженерія, EngSim",
  },
  ru: {
    title: "Инженерные видеоуроки — EngSim",
    description:
      "Подборка видеоуроков по механике, гидравлике, теплотехнике и инженерному моделированию.",
    lang: "ru",
    canonical: "https://eng-sim.vercel.app/videos",
    keywords: "инженерные видео, гидравлика, механика, моделирование, EngSim",
  },
  en: {
    title: "Engineering Video Tutorials — EngSim",
    description:
      "Collection of engineering tutorials on mechanics, hydraulics, thermodynamics, and simulation.",
    lang: "en",
    canonical: "https://eng-sim.vercel.app/videos",
    keywords:
      "engineering videos, tutorials, hydraulics, mechanics, simulation",
  },
  de: {
    title: "Ingenieur Video Tutorials — EngSim",
    description:
      "Sammlung von Ingenieur-Videolektionen zu Mechanik, Hydraulik, Thermodynamik und Simulation.",
    lang: "de",
    canonical: "https://eng-sim.vercel.app/videos",
    keywords: "ingenieur videos, hydraulik, mechanik, tutorials, simulation",
  },
};

const VideosPage = ({ currentLang, setCurrentLang, t }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Категорії
  const categories = {
    uk: [
      { id: "all", name: "Всі відео" },
      { id: "solidworks", name: "SolidWorks" },
      { id: "flownex", name: "FlowNEX" },
      { id: "autocad", name: "AutoCAD" },
      { id: "mathcad", name: "MathCAD" },
      { id: "other", name: "Інше" },
    ],
    ru: [
      { id: "all", name: "Все видео" },
      { id: "solidworks", name: "SolidWorks" },
      { id: "flownex", name: "FlowNEX" },
      { id: "autocad", name: "AutoCAD" },
      { id: "mathcad", name: "MathCAD" },
      { id: "other", name: "Другое" },
    ],
    en: [
      { id: "all", name: "All Videos" },
      { id: "solidworks", name: "SolidWorks" },
      { id: "flownex", name: "FlowNEX" },
      { id: "autocad", name: "AutoCAD" },
      { id: "mathcad", name: "MathCAD" },
      { id: "other", name: "Other" },
    ],
    de: [
      { id: "all", name: "Alle Videos" },
      { id: "solidworks", name: "SolidWorks" },
      { id: "flownex", name: "FlowNEX" },
      { id: "autocad", name: "AutoCAD" },
      { id: "mathcad", name: "MathCAD" },
      { id: "other", name: "Andere" },
    ],
  };

  // Фільтрація відео
  const filteredVideos = videosData.filter((video) => {
    const matchesCategory =
      selectedCategory === "all" || video.category === selectedCategory;
    const matchesSearch =
      video.title[currentLang]
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      video.description[currentLang]
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const pageTitle = {
    uk: "Відеоуроки та Проекти | EngSim",
    ru: "Видеоуроки и Проекты | EngSim",
    en: "Video Tutorials and Projects | EngSim",
    de: "Video-Tutorials und Projekte | EngSim",
  };

  const pageDesc = {
    uk: "Навчальні відео з інженерних програм: SolidWorks, FlowNEX, AutoCAD, MathCAD. Покрокові інструкції та приклади проектів.",
    ru: "Обучающие видео по инженерным программам: SolidWorks, FlowNEX, AutoCAD, MathCAD.",
    en: "Educational videos on engineering software: SolidWorks, FlowNEX, AutoCAD, MathCAD. Step-by-step tutorials.",
    de: "Lehrvideos zu Ingenieurprogrammen: SolidWorks, FlowNEX, AutoCAD, MathCAD.",
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle[currentLang]}</title>
        <meta name="description" content={pageDesc[currentLang]} />
        <meta property="og:title" content={pageTitle[currentLang]} />
        <meta property="og:description" content={pageDesc[currentLang]} />
        <link
          rel="canonical"
          href="https://eng-sim.vercel.app/videos"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={t}
        />
        <SEO {...seoVideos[currentLang]} />
        <SEO
          {...seoVideos[currentLang]}
          jsonld={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: seoVideos[currentLang].title,
            description: seoVideos[currentLang].description,
            hasPart: videos.map((video) => ({
              "@type": "VideoObject",
              name: video.title?.[currentLang] || video.title?.en,
              description:
                video.description?.[currentLang] || video.description?.en || "",
              thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
              uploadDate: video.date,
              duration: video.duration || "",
              genre: video.category,
              contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
              embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
            })),
          }}
        />

        <div className="pt-32 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <Link
                to="/"
                className="text-blue-400 hover:text-cyan-400 transition-colors"
              >
                {t.home || "Home"}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">
                {currentLang === "uk" && "Відеоуроки"}
                {currentLang === "ru" && "Видеоуроки"}
                {currentLang === "en" && "Video Tutorials"}
                {currentLang === "de" && "Video-Tutorials"}
              </span>
            </nav>

            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                {currentLang === "uk" && "🎥 Відеоуроки та Проекти"}
                {currentLang === "ru" && "🎥 Видеоуроки и Проекты"}
                {currentLang === "en" && "🎥 Video Tutorials and Projects"}
                {currentLang === "de" && "🎥 Video-Tutorials und Projekte"}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                {currentLang === "uk" &&
                  "Навчальні матеріали з інженерних програм: SolidWorks, FlowNEX, AutoCAD, MathCAD. Покрокові інструкції та практичні приклади."}
                {currentLang === "ru" &&
                  "Обучающие материалы по инженерным программам: SolidWorks, FlowNEX, AutoCAD, MathCAD. Пошаговые инструкции и практические примеры."}
                {currentLang === "en" &&
                  "Educational content on engineering software: SolidWorks, FlowNEX, AutoCAD, MathCAD. Step-by-step guides and practical examples."}
                {currentLang === "de" &&
                  "Lehrmaterialien zu Ingenieurprogrammen: SolidWorks, FlowNEX, AutoCAD, MathCAD. Schritt-für-Schritt-Anleitungen."}
              </p>
            </div>

            {/* Фільтри та пошук */}
            <VideoFilter
              categories={categories[currentLang]}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
              currentLang={currentLang}
            />

            {/* Статистика */}
            <div className="mb-8 flex items-center gap-4 text-sm text-gray-400">
              <span>
                {currentLang === "uk" &&
                  `Знайдено: ${filteredVideos.length} відео`}
                {currentLang === "ru" &&
                  `Найдено: ${filteredVideos.length} видео`}
                {currentLang === "en" &&
                  `Found: ${filteredVideos.length} videos`}
                {currentLang === "de" &&
                  `Gefunden: ${filteredVideos.length} Videos`}
              </span>
            </div>

            {/* Сітка відео */}
            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    currentLang={currentLang}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-gray-400">
                  {currentLang === "uk" &&
                    "Відео не знайдено. Спробуйте інший запит."}
                  {currentLang === "ru" &&
                    "Видео не найдено. Попробуйте другой запрос."}
                  {currentLang === "en" &&
                    "No videos found. Try another search."}
                  {currentLang === "de" &&
                    "Keine Videos gefunden. Versuchen Sie eine andere Suche."}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {currentLang === "uk" && "📺 Підпишіться на наш YouTube канал"}
                {currentLang === "ru" && "📺 Подпишитесь на наш YouTube канал"}
                {currentLang === "en" && "📺 Subscribe to our YouTube channel"}
                {currentLang === "de" &&
                  "📺 Abonnieren Sie unseren YouTube-Kanal"}
              </h2>
              <p className="text-gray-400 mb-6">
                {currentLang === "uk" &&
                  "Отримуйте сповіщення про нові відеоуроки та проекти"}
                {currentLang === "ru" &&
                  "Получайте уведомления о новых видеоуроках и проектах"}
                {currentLang === "en" &&
                  "Get notifications about new tutorials and projects"}
                {currentLang === "de" &&
                  "Erhalten Sie Benachrichtigungen über neue Tutorials"}
              </p>
              <a
                href="https://youtube.com/@ТарасМисюра-ж8и"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-semibold transition-all hover:scale-105"
              >
                {currentLang === "uk" && "Перейти на YouTube"}
                {currentLang === "ru" && "Перейти на YouTube"}
                {currentLang === "en" && "Go to YouTube"}
                {currentLang === "de" && "Zu YouTube gehen"}
              </a>
            </div>
          </div>
        </div>

        <Footer t={t} />
      </div>
    </>
  );
};

export default VideosPage;
