// ============================================
// ServicesPage.jsx
// ============================================
import React from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { translations } from "../data/translations";

import SEO from "../components/SEO";
import services from "../data/json/services.json";
import { adminTranslations } from "../admin/i18n/adminTranslations";


import { appConfig } from "@/config/app.config";

const seoServices = {
  uk: {
    title: "Інженерні послуги — EngSim",
    description:
      "Професійні інженерні послуги: розрахунки, моделювання, консалтинг, гідравліка, теплотехніка, автоматизація та енергетика.",
    lang: "uk",
    canonical: `${appConfig.siteUrl}/services`,
    keywords:
      "інженерні послуги, розрахунки, моделювання, гідравліка, механіка, інженерний консалтинг",
  },
  ru: {
    title: "Инженерные услуги — EngSim",
    description:
      "Профессиональные инженерные услуги: расчёты, моделирование, гидравлика, теплотехника, консалтинг, энергетика.",
    lang: "ru",
    canonical: `${appConfig.siteUrl}/services`,
    keywords:
      "инженерные услуги, расчеты, моделирование, инженерный консалтинг, гидравлика, механика",
  },
  en: {
    title: "Engineering Services — EngSim",
    description:
      "Professional engineering services: simulations, calculations, design support, hydraulics, thermodynamics, and consulting.",
    lang: "en",
    canonical: `${appConfig.siteUrl}/services`,
    keywords:
      "engineering services, calculations, simulations, hydraulics, consulting, design support",
  },
  de: {
    title: "Ingenieurdienstleistungen — EngSim",
    description:
      "Professionelle Ingenieurdienstleistungen: Simulationen, Berechnungen, Hydraulik, Thermodynamik und technischer Support.",
    lang: "de",
    canonical: `${appConfig.siteUrl}/services`,
    keywords:
      "ingenieur dienstleistungen, berechnungen, simulationen, hydraulik, consulting",
  },
};

function ServicesPage({ currentLang }) {
  const t = translations[currentLang];

  const breadcrumbs = [{ label: t.navServices, path: "/services" }];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoServices[currentLang].title,
    description: seoServices[currentLang].description,
    hasPart: (services || []).map((service) => ({
      "@type": "Service",
      name:
        adminTranslations[currentLang][service.titleKey] || service.titleKey,
      description:
        adminTranslations[currentLang][service.descKey] || service.descKey,
      provider: {
        "@type": "Organization",
        name: "EngSim",
      },
      areaServed: "Worldwide",
      serviceType: service.icon,
      termsOfService: `${appConfig.siteUrl}/services`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
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
      item: `${appConfig.siteUrl}${item.path}`,
    })),
  });
  ``;

  return (
    <>
      <SEO
        {...seoServices[currentLang]}
        jsonld={[
          jsonLd, // ✅ ServicesPage
          buildBreadcrumbJsonLd(breadcrumbs), // ✅ BreadcrumbList
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <Services t={t} />
      </div>
      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default ServicesPage;
