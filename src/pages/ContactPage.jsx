// ============================================
// ContactPage.jsx
// ============================================
import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { translations } from "../data/translations";

import SEO from "../components/SEO";

function ContactPage({ currentLang }) {
  const t = translations[currentLang];

  const seoContact = {
    uk: {
      title: "Контакти — EngSim",
      description:
        "Зв’яжіться зі мною щодо інженерних консультацій, симуляцій, навчання та технічної підтримки.",
      lang: "uk",
      canonical: "https://eng-sim.vercel.app/contact",
    },
    ru: {
      title: "Контакты — EngSim",
      description:
        "Свяжитесь со мной по вопросам инженерного консалтинга, моделирования и технической поддержки.",
      lang: "ru",
      canonical: "https://eng-sim.vercel.app/contact",
    },
    en: {
      title: "Contact — EngSim",
      description:
        "Get in touch for engineering consulting, simulation services, training, and technical support.",
      lang: "en",
      canonical: "https://eng-sim.vercel.app/contact",
    },
    de: {
      title: "Kontakt — EngSim",
      description:
        "Kontaktieren Sie mich für Ingenieurberatung, Simulation, Schulungen und technischen Support.",
      lang: "de",
      canonical: "https://eng-sim.vercel.app/contact",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: seoContact[currentLang].title,
    description: seoContact[currentLang].description,
    mainEntity: {
      "@type": "Organization",
      name: "EngSim",
      url: "https://eng-sim.vercel.app",
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "your@email.com",
          contactType: "technical support",
          availableLanguage: ["uk", "ru", "en", "de"],
        },
      ],
    },
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
    { label: t.navContact, path: "/contact" },
  ];

  return (
    <>
      <SEO
        {...seoContact[currentLang]}
        jsonld={[
          jsonLd, // ✅ твій Person + ContactPage
          buildBreadcrumbJsonLd(breadcrumbs), // ✅ BreadcrumbList
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <Contact t={t} currentLang={currentLang} />
      </div>
      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default ContactPage;
