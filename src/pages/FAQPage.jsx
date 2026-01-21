// ============================================
// FAQPage.jsx
// ============================================
import React from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { translations } from "../data/translations";

function FAQPage({ currentLang }) {
  const t = translations[currentLang];

  const breadcrumbs = [
    { label: t.navHome, path: "/" },
    { label: "FAQ", path: "/faq" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <FAQ currentLang={currentLang} />
      </div>
      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default FAQPage;
