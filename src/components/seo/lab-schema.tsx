export function LabSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "JM Bioanálises Exames Toxicológicos",
    url: "https://jmtox.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Rua Humberto Milanesi, 436 - Parque Residencial Primavera",
      addressLocality: "Botucatu",
      addressRegion: "SP",
      postalCode: "18610-385",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-14-3881-1156",
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: ["https://www.linkedin.com/company/jmbioanalises"],
    medicalSpecialty: ["Toxicologic"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
