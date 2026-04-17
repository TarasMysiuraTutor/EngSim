import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

import books from "../data/json/books.json"; // ✅ Ось головне!

import SEO from "../components/SEO";


import { appConfig } from "@/config/app.config";

const seoLibrary = {
  uk: {
    title: "Інженерна бібліотека — книги для інженерів | EngSim",
    description:
      "Електронна інженерна бібліотека EngSim: підручники, довідники, лабораторні роботи та технічні видання з механіки, гідравліки, теплотехніки та автоматизації.",
    lang: "uk",
    canonical: `${appConfig.siteUrl}/library`,
    keywords:
      "інженерні книги, гідравліка, теплотехніка, опір матеріалів, лабораторні, EngSim, довідники",
  },
  ru: {
    title: "Инженерная библиотека — книги и учебники | EngSim",
    description:
      "Инженерная библиотека EngSim: справочники, лабораторные работы и техническая литература по механике, гидравлике, теплотехнике и автоматизации.",
    lang: "ru",
    canonical: `${appConfig.siteUrl}/library`,
    keywords:
      "инженерные книги, гидравлика, теплотехника, сопромат, лабораторные работы",
  },
  en: {
    title: "Engineering Library — technical books and manuals | EngSim",
    description:
      "EngSim engineering library: textbooks, handbooks, lab manuals, and technical literature on mechanics, hydraulics, thermodynamics, and automation.",
    lang: "en",
    canonical: `${appConfig.siteUrl}/library`,
    keywords:
      "engineering books, hydraulics, thermodynamics, mechanics, textbooks, technical manuals",
  },
  de: {
    title: "Ingenieur Bibliothek — technische Bücher | EngSim",
    description:
      "EngSim Ingenieur-Bibliothek: Lehrbücher, technische Handbücher und Laboranleitungen zu Mechanik, Hydraulik, Thermodynamik und Automatisierung.",
    lang: "de",
    canonical: `${appConfig.siteUrl}/library`,
    keywords:
      "ingenieur bücher, hydraulik, thermodynamik, mechanik, handbuch, laborarbeiten",
  },
};

const LibraryPage = ({ currentLang, setCurrentLang, t }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoLibrary[currentLang].title,
    description: seoLibrary[currentLang].description,
    hasPart: books.map((book) => ({
      "@type": "Book",
      name: book.title[currentLang] || book.title.en,
      description: book.desc[currentLang] || book.desc.en,
      inLanguage: currentLang,
      bookFormat: book.format,
      numberOfPages: Number(book.pages),
      genre: book.category,
      url: `${appConfig.siteUrl}${book.file.replace("./", "/")}`,
      image: `${appConfig.siteUrl}/preview.png`,
    })),
  };

  const buildBreadcrumbJsonLd = (breadcrumbs) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${appConfig.siteUrl}${item.path}`,
    })),
  });
  ``;

  const breadcrumbs = [
    // { label: t.navHome, path: "/" },
    { label: t.navLibrary, path: "/library" },
  ];

  return (
    <>
      <SEO
        {...seoLibrary[currentLang]}
        jsonld={[
          jsonLd, // ✅ твій Person + AboutPage
          buildBreadcrumbJsonLd(breadcrumbs), // ✅ BreadcrumbList
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto pt-24 pb-20 px-6">
          <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            📚 {currentLang === "uk" && "Інженерна література"}
            {currentLang === "ru" && "Инженерная литература"}
            {currentLang === "en" && "Engineering Library"}
            {currentLang === "de" && "Ingenieur Literatur"}
          </h1>

          {/* ✅ ТЕПЕР ВИКОРИСТОВУЄМО ВСІ КНИГИ */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => {
              const title = book.title[currentLang] || book.title.en;
              const desc = book.desc[currentLang] || book.desc.en;

              return (
                <div
                  key={book.id}
                  className="
                  flex flex-col justify-between h-full
                  p-6 bg-white/5 border border-blue-500/20 
                  rounded-xl hover:bg-white/10 hover:border-blue-400/50 
                  transition shadow-sm
                "
                >
                  <div>
                    <div className="text-4xl mb-3">{book.icon}</div>

                    <h3 className="text-xl font-bold text-cyan-400 mb-2">
                      {title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {desc}
                    </p>

                    <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                      <span>📄 {book.pages} pages</span>
                      <span>•</span>
                      <span>{book.format}</span>
                    </div>
                  </div>

                  <a
                    href={book.file}
                    className="
                    mt-4 inline-flex items-center justify-center gap-2
                    px-6 py-2 rounded-lg
                    bg-blue-600/30 hover:bg-blue-600/50
                    border border-blue-400/40
                    text-blue-200 font-medium
                    transition
                  "
                  >
                    ⬇️ {currentLang === "uk" && "Завантажити"}
                    {currentLang === "ru" && "Скачать"}
                    {currentLang === "en" && "Download"}
                    {currentLang === "de" && "Herunterladen"}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <Footer t={t} />
      </div>
    </>
  );
};

export default LibraryPage;
