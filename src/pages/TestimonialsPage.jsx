// ============================================
// TestimonialsPage.jsx
// ============================================
import React from "react";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { translations } from "../data/translations";

function TestimonialsPage({ currentLang }) {
  const t = translations[currentLang];

  // ✅ Breadcrumbs БЕЗ дублю Home
  const breadcrumbs = [{ label: t.testimonialsTitle, path: "/testimonials" }];

  // ✅ SEO для сторінки відгуків
  const seoTestimonials = {
    uk: {
      title: "Відгуки та рекомендації — EngSim",
      description:
        "Відгуки студентів і спеціалістів про інженерні розрахунки, навчальні матеріали та консультації EngSim.",
      lang: "uk",
      canonical: "https://eng-sim.vercel.app/testimonials",
      image: "https://eng-sim.vercel.app/og/testimonials.png",
    },
    ru: {
      title: "Отзывы и рекомендации — EngSim",
      description:
        "Отзывы студентов и специалистов об инженерных услугах, обучении и материалах EngSim.",
      lang: "ru",
      canonical: "https://eng-sim.vercel.app/testimonials",
      image: "https://eng-sim.vercel.app/og/testimonials.png",
    },
    en: {
      title: "Testimonials & Reviews — EngSim",
      description:
        "Reviews and testimonials from students and engineers about EngSim educational materials, simulations and consulting.",
      lang: "en",
      canonical: "https://eng-sim.vercel.app/testimonials",
      image: "https://eng-sim.vercel.app/og/testimonials.png",
    },
    de: {
      title: "Referenzen & Bewertungen — EngSim",
      description:
        "Erfahrungsberichte und Bewertungen von Studierenden und Ingenieuren zu EngSim Lernmaterialien und Beratung.",
      lang: "de",
      canonical: "https://eng-sim.vercel.app/testimonials",
      image: "https://eng-sim.vercel.app/og/testimonials.png",
    },
  };

  // ✅ BreadcrumbList schema
  const buildBreadcrumbJsonLd = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://eng-sim.vercel.app${item.path}`,
    })),
  });

  // ✅ Testimonials / Reviews schema
  // (навіть якщо зараз відгуки статичні — Google це приймає)
  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoTestimonials[currentLang].title,
    description: seoTestimonials[currentLang].description,
    mainEntity: {
      "@type": "CreativeWork",
      name: "EngSim Testimonials",
      about: "Engineering education, simulations and consulting",
    },
  };

  return (
    <>
      {/* ✅ SEO + BreadcrumbList + Testimonials schema */}
      <SEO
        {...seoTestimonials[currentLang]}
        jsonld={[buildBreadcrumbJsonLd(breadcrumbs), reviewsJsonLd]}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 pt-20">
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
        <Testimonials t={t} />
      </div>

      <Footer t={t} currentLang={currentLang} />
    </>
  );
}

export default TestimonialsPage;
