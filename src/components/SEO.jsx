import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component Wrapper
 * Mengoptimalkan metadata, Open Graph sharing, dan menyuntikkan JSON-LD Schema untuk LocalBusiness.
 */
export default function SEO() {
  const companyName = "RPM Consult";
  const mainKeyword = "Tax & Legal Consultant";
  const city = "Jakarta";
  
  // Format Title: [Kata Kunci Utama] | [Nama Perusahaan] [Kota] (45 karakter - Maks 60)
  const titleText = `${mainKeyword} | ${companyName} ${city}`;
  
  // Meta Description: Ajakan CTA kuat (142 karakter - Maks 150)
  const descriptionText = "Trusted Tax, Legal & Accounting solutions by RPM Consult Jakarta. Maximize tax efficiency and mitigate legal risks. Book your free consult today!";
  
  const siteUrl = "https://rpm-consult.com";
  const imageUrl = `${siteUrl}/share-preview.jpg`; // Gambar preview untuk social sharing (1200x630 px)

  // JSON-LD Schema Markup untuk LocalBusiness (SEO Terstruktur Google)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT Raka Pradipta Mahawira (RPM Consult)",
    "image": imageUrl,
    "@id": `${siteUrl}/#local-business`,
    "url": siteUrl,
    "telephone": "+6281286866654",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PIK 2 Soho Manhattan Hoek No. 5, Lt. 3 Salembaran Jati, Kosambi",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15214",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.0465,
      "longitude": 106.6917
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rpm-consulting"
    ]
  };

  return (
    <Helmet>
      {/* HTML Meta Tags Utama */}
      <title>{titleText}</title>
      <meta name="description" content={descriptionText} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph Tags (Facebook, LinkedIn, Discord) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleText} />
      <meta property="og:description" content={descriptionText} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={companyName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:description" content={descriptionText} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Penyuntikan Schema Markup JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
}
