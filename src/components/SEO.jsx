import { Helmet } from "react-helmet-async";
import { appConfig } from "@/config/app.config";

export default function SEO({
  title,
  description,
  canonical = "",
  lang = "en",
  keywords = "",
  image = `${appConfig.siteUrl}/og-image.png`,
  jsonld = null,
}) {
  return (
    <Helmet>
      <html lang={lang} />

      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical || appConfig.siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD structured data */}
      {jsonld &&
        (Array.isArray(jsonld) ? jsonld : [jsonld]).map((item, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}

      {/* hreflang */}
      {canonical && (
        <>
          <link rel="alternate" href={canonical} hrefLang="x-default" />
          <link rel="alternate" href={canonical} hrefLang="uk" />
          <link rel="alternate" href={canonical} hrefLang="en" />
          <link rel="alternate" href={canonical} hrefLang="de" />
        </>
      )}
    </Helmet>
  );
}
