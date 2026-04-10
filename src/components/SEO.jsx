import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical = "",
  lang = "uk",
  keywords = "",
  image = "https://eng-sim.vercel.app/preview.png",
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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonld && (
        <script type="application/ld+json">
          {JSON.stringify(jsonld)}
        </script>
      )}
    </Helmet>
  );
}
``