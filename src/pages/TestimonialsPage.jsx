// ============================================
// TestimonialsPage.jsx
// ============================================
import React from "react";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { translations } from "../data/translations";

function TestimonialsPage({ currentLang }) {
  const t = translations[currentLang];

  const breadcrumbs = [
    { label: t.navHome, path: "/" },
    { label: t.testimonialsTitle, path: "/testimonials" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <Testimonials t={t} />
      </div>
      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default TestimonialsPage;