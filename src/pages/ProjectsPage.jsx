// ============================================
// ProjectsPage.jsx
// ============================================
import React from "react";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { translations } from "../data/translations";

import SEO from "../components/SEO";

import projects from "../data/json/projects.json"; // ✅ Ось головне!

const seoProjects = {
  uk: {
    title: "Інженерні проєкти — EngSim",
    description:
      "seoрахунки та дослідження у механіці, гідравліці, теплотехніці та автоматизації.",
    lang: "uk",
    canonical: "https://eng-sim.vercel.app/projects",
    keywords:
      "інженерні проєкти, інженерія, механіка, гідравліка, моделювання, проєктування",
  },
  ru: {
    title: "Инженерные проекты — EngSim",
    description:
      "Портфолио инженерных проектов EngSim: моделирование, проектирование, расчёты и исследования.",
    lang: "ru",
    canonical: "https://eng-sim.vercel.app/projects",
    keywords:
      "инженерные проекты, гидравлика, моделирование, теплотехника, автоматизация",
  },
  en: {
    title: "Engineering Projects — EngSim",
    description:
      "EngSim portfolio of engineering projects: engineering design, simulation, calculations, and technical analyses.",
    lang: "en",
    canonical: "https://eng-sim.vercel.app/projects",
    keywords:
      "engineering projects, simulations, design, mechanical engineering, hydraulics",
  },
  de: {
    title: "Ingenieurprojekte — EngSim",
    description:
      "EngSim Portfolio technischer Ingenieurprojekte: Modellierung, Berechnungen, Konstruktion und technische Analysen.",
    lang: "de",
    canonical: "https://eng-sim.vercel.app/projects",
    keywords:
      "ingenieur projekte, modellierung, konstruktion, simulation, maschinenbau",
  },
};

function ProjectsPage({ currentLang }) {
  const t = translations[currentLang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoProjects[currentLang].title,
    description: seoProjects[currentLang].description,
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name:
        project.title[currentLang] || project.title.en || "Engineering Project",
      description: project.desc[currentLang] || project.desc.en || "",
      inLanguage: currentLang,
      keywords: (project.tags || []).join(", "),
      dateCreated: project.year || "",
      genre: project.iconType || "",
      url: "https://eng-sim.vercel.app/projects",
      image: "https://eng-sim.vercel.app/preview.png",
    })),
  };

  const buildBreadcrumbJsonLd = (breadcrumbs) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://eng-sim.vercel.app${item.path}`,
    })),
  });
  ``;

  const breadcrumbs = [
    // { label: t.navHome, path: "/" },
    { label: t.navProjects, path: "/projects" },
  ];

  return (
    <>
      <SEO
        {...seoProjects[currentLang]}
        jsonld={[
          jsonLd, // ✅ ProjectsPage
          buildBreadcrumbJsonLd(breadcrumbs), // ✅ BreadcrumbList
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <Projects t={t} currentLang={currentLang} />
      </div>
      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default ProjectsPage;
