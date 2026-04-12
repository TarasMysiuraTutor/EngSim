// ============================================
// FAQPage.jsx
// ============================================
import React from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { translations } from "../data/translations";

function FAQPage({ currentLang }) {
  const t = translations[currentLang];

  // ✅ Breadcrumbs БЕЗ дублю Home
  const breadcrumbs = [{ label: "FAQ", path: "/faq" }];

  // ✅ Багатомовне SEO
  const seoFAQ = {
    uk: {
      title: "Питання та відповіді — EngSim",
      description:
        "Відповіді на часті питання щодо інженерних розрахунків, симуляцій, навчальних матеріалів та роботи платформи EngSim.",
      lang: "uk",
      canonical: "https://eng-sim.vercel.app/faq",
    },
    ru: {
      title: "Вопросы и ответы — EngSim",
      description:
        "Ответы на часто задаваемые вопросы об инженерных расчетах, симуляциях и обучающих материалах EngSim.",
      lang: "ru",
      canonical: "https://eng-sim.vercel.app/faq",
    },
    en: {
      title: "FAQ — Engineering Questions & Answers | EngSim",
      description:
        "Frequently asked questions about engineering simulations, calculations, educational content and EngSim platform.",
      lang: "en",
      canonical: "https://eng-sim.vercel.app/faq",
    },
    de: {
      title: "FAQ — Häufige Fragen | EngSim",
      description:
        "Häufig gestellte Fragen zu Ingenieursimulationen, Berechnungen und Lernmaterialien auf EngSim.",
      lang: "de",
      canonical: "https://eng-sim.vercel.app/faq",
    },
  };

  // ✅ FAQ Schema.org (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (t.faqItems || []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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

  return (
    <>
      {/* ✅ SEO + FAQ Schema */}
      <SEO
        {...seoFAQ[currentLang]}
        jsonld={[
          jsonLd, // ✅ FAQPage schema
          buildBreadcrumbJsonLd(breadcrumbs), // ✅ BreadcrumbList schema
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <FAQ currentLang={currentLang} />
      </div>

      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default FAQPage;
