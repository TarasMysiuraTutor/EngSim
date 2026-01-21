// ============================================
// ServicesPage.jsx
// ============================================
import React from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { translations } from "../data/translations";

function ServicesPage({ currentLang }) {
  const t = translations[currentLang];

  const breadcrumbs = [
    { label: t.navHome, path: "/" },
    { label: t.navServices, path: "/services" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <Services t={t} />
      </div>
      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default ServicesPage;