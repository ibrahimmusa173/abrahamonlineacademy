export default function SchemaMarkup() {
  const siteUrl = "https://abrahamonlineacademy.vercel.app";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Educational Organization Schema
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        "name": "Abraham Online Academy",
        "url": siteUrl,
        "logo": `${siteUrl}/banner.png`,
        "description": "Global 1-on-1 virtual education provider for Grades 1–12 offering personalized instruction in Mathematics, Physics, Chemistry, Biology, Coding, English, and Tajweed.",
        "telephone": "+923149500765",
        "email": "tayyabamusa747@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office 8, 3rd Floor, Sarwar Plaza, Shamsabad, Murree Road",
          "addressLocality": "Rawalpindi",
          "addressRegion": "Punjab",
          "postalCode": "44000",
          "addressCountry": "PK"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61593394480120",
          "https://pk.linkedin.com/in/asia-aman-32bb6464",
          "https://www.youtube.com/@AbrahamOnlineAcademy",
          "https://www.instagram.com/musa.aman.9883739"
        ]
      },

      // 2. Founder Entity Schema (Tayyaba Amna)
      {
        "@type": "Person",
        "@id": `${siteUrl}/#founder`,
        "name": "Tayyaba Amna",
        "jobTitle": "Founder & Academic Director",
        "worksFor": { "@id": `${siteUrl}/#organization` },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "MSc Mathematics, B.Ed"
        },
        "description": "Master Educator with 10+ years of global online teaching experience specializing in GCSE, IGCSE, AP, and SAT Mathematics."
      },

      // 3. Managing Director Entity Schema (Asia Aman)
      {
        "@type": "Person",
        "@id": `${siteUrl}/#managing-director`,
        "name": "Asia Aman",
        "jobTitle": "Managing Director & Systems Architect",
        "worksFor": { "@id": `${siteUrl}/#organization` },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "MS Electrical Engineering, BS Computer Engineering"
        },
        "description": "Technical leader driving educational technology, live digital whiteboard integrations, and operational excellence."
      },

      // 4. WebSite Schema with SearchAction
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Abraham Online Academy",
        "publisher": { "@id": `${siteUrl}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteUrl}/courses?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },

      // 5. Speakable Schema (Directs AI Engines & Voice Assistants to Citable Summaries)
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#speakable-page`,
        "url": siteUrl,
        "name": "Abraham Online Academy Global Home",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".answer-capsule", ".geo-summary", "#faq-section"]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}