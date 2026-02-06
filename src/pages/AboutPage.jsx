// ============================================
// AboutPage.jsx
// ============================================
import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import AcademicProfiles from "../components/AcademicProfiles";

import { translations } from "../data/translations";

function AboutPage({ currentLang }) {
  const t = translations[currentLang];

  const breadcrumbs = [
    { label: t.navHome, path: "/" },
    { label: t.aboutTitle, path: "/about" },
  ];

  return (
    <>
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
