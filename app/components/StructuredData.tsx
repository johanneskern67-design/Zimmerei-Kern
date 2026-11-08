import { serviceAreaStructured } from "../lib/site-profile";

const siteUrl = "https://dachwerk-kern.de";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function ServiceStructuredData({
  name,
  description,
  path,
  serviceType = name,
  audience = "Eigentümer von Bestandsgebäuden",
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  audience?: string;
}) {
  const serviceUrl = `${siteUrl}${path}`;
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name,
    description,
    serviceType,
    url: serviceUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": serviceUrl },
    provider: { "@id": `${siteUrl}/#business` },
    audience: { "@type": "Audience", audienceType: audience },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}/kontakt#projektanfrage`,
      availableLanguage: ["de"],
    },
    areaServed: serviceAreaStructured,
  }} />;
}

export function BreadcrumbStructuredData({ items }: { items: { name: string; path: string }[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }} />;
}

type ArticleDates = { datePublished: string; dateModified?: string };

const articleMonths = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

function formatArticleDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return `${day}. ${articleMonths[month - 1]} ${year}`;
}

export function ArticleDate({ datePublished, dateModified }: ArticleDates) {
  const effectiveModified = dateModified ?? datePublished;
  return (
    <p className="article-date section-shell">
      <span>Fachlich verantwortlich <a href="/ueber-kern#johannes-kern">Johannes Kern · Zimmerermeister &amp; Bautechniker</a></span>
      <span>Veröffentlicht <time dateTime={datePublished}>{formatArticleDate(datePublished)}</time></span>
      {effectiveModified !== datePublished ? <span>Aktualisiert <time dateTime={effectiveModified}>{formatArticleDate(effectiveModified)}</time></span> : null}
    </p>
  );
}

export function ArticleStructuredData({ headline, description, path, image = "/images/kern-social.webp", datePublished = "2026-08-16", dateModified, contentLocation }: { headline: string; description: string; path: string; image?: string; datePublished?: string; dateModified?: string; contentLocation?: string }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}${path}#article`,
    headline,
    description,
    image: `${siteUrl}${image}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}${path}` },
    author: { "@id": `${siteUrl}/ueber-kern#johannes-kern` },
    publisher: { "@id": `${siteUrl}/#business` },
    ...(contentLocation ? {
      contentLocation: { "@type": "Place", name: contentLocation },
      about: {
        "@type": "Project",
        "@id": `${siteUrl}${path}#project`,
        name: headline,
        description,
        url: `${siteUrl}${path}`,
        image: `${siteUrl}${image}`,
        location: { "@type": "Place", name: contentLocation },
      },
      mentions: [
        { "@id": `${siteUrl}/#business` },
        { "@id": `${siteUrl}/dachsanierung#service` },
      ],
    } : {}),
  }} />;
}

export function AboutStructuredData() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/ueber-kern#webpage`,
    name: "Über KERN Zimmerei & Holzbau und Johannes Kern",
    description: "Unternehmensprofil der von Johannes Kern geführten Zimmerei in Penzing-Ramsach.",
    url: `${siteUrl}/ueber-kern`,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: [
      { "@id": `${siteUrl}/#business` },
      { "@id": `${siteUrl}/ueber-kern#johannes-kern` },
    ],
  }} />;
}

export function FaqStructuredData({ items }: { items: { question: string; answer: string }[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }} />;
}
