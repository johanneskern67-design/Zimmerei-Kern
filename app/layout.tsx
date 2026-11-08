import type { Metadata } from "next";
import PrivacyPageview from "./components/PrivacyPageview";
import PrivacyPreferences from "./components/PrivacyPreferences";
import { serviceAreaStructured } from "./lib/site-profile";
import "./globals.css";
import "./mixed-design.css";

const siteUrl = "https://dachwerk-kern.de";
const siteTitle = "KERN Zimmerei & Holzbau | Dachsanierung Landsberg & Ammersee";
const siteDescription = "KERN aus Ramsach-Penzing ist auf komplette Dachsanierungen im Bestand spezialisiert – im Raum Landsberg am Lech, Kaufering und am Ammersee.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Zimmerei Kern",
  },
  description: siteDescription,
  keywords: ["Zimmerei Kern", "komplette Dachsanierung im Bestand", "Dachsanierung Landsberg am Lech", "Dachsanierung Ammersee-Gebiet", "Zimmerei Landsberg am Lech", "Zimmerei Penzing", "Dachdämmung", "Dacheindeckung", "Einblasdämmung Landsberg", "Holzbau"],
  alternates: {
    canonical: "/",
  },
  // Resolve preview text from each page; fixed layout titles would hide its topic.
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "KERN Zimmerei & Holzbau",
    images: [{ url: "/images/kern-social.webp", width: 1400, height: 735, alt: "Dachsanierung von KERN im Raum Landsberg am Lech" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness", "RoofingContractor"],
      "@id": `${siteUrl}/#business`,
      name: "KERN Zimmerei & Holzbau",
      legalName: "Johannes Kern – Zimmerei & Holzbau",
      alternateName: ["Zimmerei Kern", "Dachwerk Kern"],
      description: "Seit 2019 Meisterbetrieb: persönlich geführte Zimmerei mit Sitz in Ramsach-Penzing und Spezialisierung auf komplette Dachsanierungen im Bestand im Raum Landsberg am Lech, Kaufering und am Ammersee.",
      url: siteUrl,
      potentialAction: { "@type": "ContactAction", name: "Dachprojekt prüfen lassen", target: `${siteUrl}/kontakt#projektanfrage` },
      hasMap: "https://www.google.com/maps?cid=8591618332635140753",
      image: `${siteUrl}/images/kern-hero-bestand-zukunft.webp`,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        contentUrl: `${siteUrl}/images/kern-logo-square.png`,
        url: `${siteUrl}/images/kern-logo-square.png`,
        width: 1200,
        height: 1200,
        caption: "Logo der KERN Zimmerei & Holzbau aus Penzing-Ramsach",
      },
      telephone: "+4981939988898",
      email: "info@kern-zimmerei-holzbau.de",
      vatID: "DE301202671",
      foundingDate: "2015-06",
      slogan: "Dächer erneuern. Räume erweitern. Bestand weiterbauen.",
      sameAs: [
        "https://www.google.com/maps?cid=8591618332635140753",
        "https://www.instagram.com/zimmerei_kern/",
        "https://www.facebook.com/Zimmerei.Kern/",
      ],
      founder: { "@id": `${siteUrl}/ueber-kern#johannes-kern` },
      contactPoint: [
        { "@type": "ContactPoint", name: "Büro", telephone: "+4981939988898", email: "info@kern-zimmerei-holzbau.de", url: `${siteUrl}/kontakt`, contactType: "customer service", availableLanguage: ["de"] },
      ],
      address: { "@type": "PostalAddress", streetAddress: "Dorfstraße 52", postalCode: "86929", addressLocality: "Penzing", addressRegion: "Bayern", addressCountry: "DE" },
      geo: { "@type": "GeoCoordinates", latitude: 47.998, longitude: 10.927 },
      areaServed: serviceAreaStructured,
      knowsAbout: ["Komplette Dachsanierung im Bestand", "Zimmererarbeiten", "Energetische Dachdämmung", "Luftdichtheit", "Dachaufbau", "Dacheindeckung", "Dachfensterkoordination", "Koordination von Spenglerarbeiten", "Holzbau", "Einblasdämmung", "3D-CAD-Holzbauplanung"],
      subjectOf: [
        { "@id": `${siteUrl}/projekte/dachsanierung-utting-turm#article` },
        { "@id": `${siteUrl}/projekte/dachsanierung-hausen-geltendorf#article` },
        { "@id": `${siteUrl}/projekte/dachsanierung-grossaitingen-baujahr-1954#article` },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen von KERN Zimmerei & Holzbau",
        itemListElement: [
          {
            "@type": "Offer",
            url: `${siteUrl}/dachsanierung`,
            itemOffered: { "@type": "Service", "@id": `${siteUrl}/dachsanierung#service`, name: "Komplette Dachsanierung im Bestand", url: `${siteUrl}/dachsanierung` },
          },
          {
            "@type": "Offer",
            url: `${siteUrl}/anbau-aufstockung`,
            itemOffered: { "@type": "Service", "@id": `${siteUrl}/anbau-aufstockung#service`, name: "Anbau und Aufstockung in Holzbauweise", url: `${siteUrl}/anbau-aufstockung` },
          },
          {
            "@type": "Offer",
            url: `${siteUrl}/einblasdaemmung`,
            itemOffered: { "@type": "Service", "@id": `${siteUrl}/einblasdaemmung#service`, name: "Einblasdämmung", url: `${siteUrl}/einblasdaemmung` },
          },
          {
            "@type": "Offer",
            url: `${siteUrl}/planung-cad`,
            itemOffered: { "@type": "Service", "@id": `${siteUrl}/planung-cad#service`, name: "3D-CAD-Konstruktion und Eingabeplanung", url: `${siteUrl}/planung-cad` },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/ueber-kern#johannes-kern`,
      name: "Johannes Kern",
      givenName: "Johannes",
      familyName: "Kern",
      jobTitle: "Inhaber, Zimmerermeister und Bautechniker",
      url: `${siteUrl}/ueber-kern#johannes-kern`,
      worksFor: { "@id": `${siteUrl}/#business` },
      knowsAbout: ["Komplette Dachsanierung im Bestand", "Zimmererarbeiten", "Dachdeckerarbeiten", "Energetische Dachsanierung", "Dachdämmung", "Holzbau", "Aufstockung", "Anbau", "3D-CAD-Holzbauplanung"],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Zimmerermeister", credentialCategory: "Meisterqualifikation" },
        { "@type": "EducationalOccupationalCredential", name: "Bautechniker", credentialCategory: "Berufliche Qualifikation" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "KERN Zimmerei & Holzbau",
      alternateName: ["Zimmerei Kern", "Dachwerk Kern"],
      url: siteUrl,
      inLanguage: "de-DE",
      publisher: { "@id": `${siteUrl}/#business` },
      about: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="alternate" type="application/rss+xml" title="KERN – aktuelle Inhalte" href={`${siteUrl}/feed.xml`} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <PrivacyPageview />
        {children}
        <PrivacyPreferences />
      </body>
    </html>
  );
}
