// src/admin/components/tabs/TestimonialsTab.jsx

import React from "react";
import TestimonialGenerator from "../../components/TestimonialGenerator";
import { adminTranslations } from "../i18n/adminTranslations";

export const TestimonialsTab = ({ currentLang }) => {
  const t = adminTranslations[currentLang];

  return (
    <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        {t.testimonialsTitle}
      </h2>

      <TestimonialGenerator />
    </div>
  );
};