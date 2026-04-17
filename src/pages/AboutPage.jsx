// ============================================
// ============================================
import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import AcademicProfiles from "../components/AcademicProfiles";
import SEO from "../components/SEO";

import { translations } from "../data/translations";

import { appConfig } from "@/config/app.config";

function AboutPage({ currentLang }) {
  const t = translations[currentLang];

  const breadcrumbs = [
    // { label: t.navHome, path: "/" },
    { label: t.aboutTitle, path: "/about" },
  ];

  // ✅ БАГАТОМОВНЕ SEO
  const seoAbout = {
    uk: {
      title: "Про мене — EngSim",
      description:
        "Освітня діяльність, інженерна експертиза та професійний досвід у механіці, гідравліці, теплотехніці та автоматизації.",
      lang: "uk",
      canonical: `${appConfig.siteUrl}/about`,
    },
    ru: {
      title: "Обо мне — EngSim",
      description:
        "Образовательная деятельность, инженерная экспертиза и профессиональный опыт в механике, гидравлике и теплоэнергетике.",
      lang: "ru",
      canonical: `${appConfig.siteUrl}/about`,
    },
    en: {
      title: "About Me — EngSim",
      description:
        "Engineering educator and simulation specialist with experience in mechanics, hydraulics, thermodynamics, and automation.",
      lang: "en",
      canonical: `${appConfig.siteUrl}/about`,
    },
    de: {
      title: "Über mich — EngSim",
      description:
        "Ingenieurpädagoge und Simulationsexperte mit Erfahrung in Mechanik, Hydraulik, Thermodynamik und Automatisierung.",
      lang: "de",
      canonical: `${appConfig.siteUrl}/about`,
    },
  };

  // ✅ JSON-LD (AboutPage + Person)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: seoAbout[currentLang].title,
    description: seoAbout[currentLang].description,
    mainEntity: {
      "@type": "Person",
      name: t.aboutName,
      jobTitle: t.aboutRole,
      description: `${t.aboutBio1} ${t.aboutBio2} ${t.aboutBio3}`,
      image: `${appConfig.siteUrl}/my-photo.png`,
      knowsAbout: [
        t.aboutExpertise1,
        t.aboutExpertise2,
        t.aboutExpertise3,
        t.aboutExpertise4,
        t.aboutExpertise5,
        t.aboutExpertise6,
      ],
      alumniOf: [t.aboutEducation1, t.aboutEducation2, t.aboutEducation3],
    },
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

  return (
    <>
      {/* ✅ SEO */}
      <SEO
        {...seoAbout[currentLang]}
        jsonld={[
          jsonLd, // ✅ твій Person + AboutPage
          buildBreadcrumbJsonLd(breadcrumbs), // ✅ BreadcrumbList
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <About t={t} />
      </div>

      <AcademicProfiles t={t} />
      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default AboutPage;
``;
