export default function SchemaMarkup() {
  const siteUrl = "https://abrahamonlineacademy.vercel.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Abraham Online Academy",
    url: siteUrl,
    logo: `${siteUrl}/banner.png`,
    description:
      "Global distance learning platform providing high-quality virtual instruction for Grades 1 to 12.",
    telephone: "+923135061127",
    email: "tayyabamusa747@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 8, 3rd Floor, Sarwar Plaza, Shamsabad, Murree Road",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      postalCode: "44000",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61593394480120",
      "https://pk.linkedin.com/in/asia-aman-32bb6464",
      "https://www.youtube.com/@AbrahamOnlineAcademy",
      "https://www.instagram.com/musa.aman.9883739",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abraham Online Academy",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/courses?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}