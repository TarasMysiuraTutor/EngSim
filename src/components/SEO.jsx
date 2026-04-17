import { Helmet } from "react-helmet-async";
import { appConfig } from "@/config/app.config";


export default function SEO({
  title,
  description,
  canonical = "",
  lang = "uk",
  keywords = "",
  image = `${appConfig.siteUrl}/preview.png`,
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

      {/* {jsonld && (
        <script type="application/ld+json">{JSON.stringify(jsonld)}</script>
      )} */}

      {jsonld &&
        (Array(jsonld) ? jsonld : [jsonld]).map((item, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}

      <link rel="alternate" href={canonical} hrefLang="x-default" />
      <link rel="alternate" href={canonical} hrefLang="uk" />
      <link rel="alternate" href={canonical} hrefLang="ru" />
      <link rel="alternate" href={canonical} hrefLang="en" />
      <link rel="alternate" href={canonical} hrefLang="de" />
    </Helmet>
  );
}
``;
