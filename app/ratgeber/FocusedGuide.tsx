import { guideConversions, guideInquiryHint } from "./guide-conversions";
import GuideInquiry from "../components/GuideInquiry";
import type { Metadata } from "next";
import Link from "next/link";
import { ArticleDate, ArticleStructuredData, BreadcrumbStructuredData, FaqStructuredData } from "../components/StructuredData";
import { PageHero, SiteFrame } from "../components/SiteChrome";

export type FocusedGuideContent = {
  slug: string; path: string; title: string; category: string; description: string;
  image: string; imageAlt: string; imageDisclosure?: string;
  datePublished?: string; dateModified?: string; checklist?: string[];
  comparison?: { title: string; columns: [string, string, string]; rows: [string, string, string][] };
  sections: { id: string; title: string; paragraphs: string[]; sources?: { label: string; href: string }[] }[];
  proof: { title: string; copy: string; href: string; label: string };
  faqs: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
  related: { label: string; href: string }[];
  project: string;
};
const publicationDate = "2026-10-04";
export function guideMetadata(guide: FocusedGuideContent): Metadata {
  return { title: guide.title, description: guide.description, alternates: { canonical: guide.path }, openGraph: { type: "article", title: guide.title, description: guide.description, url: guide.path, images: [{ url: guide.image, alt: guide.imageAlt }] } };
}
export default function FocusedGuide({ guide }: { guide: FocusedGuideContent }) {
  const conversion = guideConversions[guide.slug];
  const published = guide.datePublished ?? publicationDate;
  const modified = conversion ? "2026-11-09" : guide.dateModified ?? published;
  const formattedDate = new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${modified}T12:00:00Z`));
  return <SiteFrame>
    <ArticleStructuredData headline={guide.title} description={guide.description} path={guide.path} image={guide.image} datePublished={published} dateModified={modified} />
    <FaqStructuredData items={guide.faqs} />
    <BreadcrumbStructuredData items={[{ name: "Startseite", path: "/" }, { name: "Ratgeber", path: "/ratgeber" }, { name: guide.title, path: guide.path }]} />
    <PageHero eyebrow={`KERN Ratgeber · ${guide.category}`} title={guide.title} description={guide.description} code="WISSEN / KERN" image={guide.image} imageAlt={guide.imageAlt} imageDisclosure={guide.imageDisclosure} />
    <ArticleDate datePublished={published} dateModified={modified} />
    <article className="focused-guide">
      <nav className="guide-jump section-shell" aria-label="Inhalt"><p className="section-label">Direkt zum Thema</p><div>{guide.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#fragen">Häufige Fragen</a></div></nav>
      {guide.sections.map((section) => <section key={section.id} id={section.id} className="guide-section section-shell"><div><h2>{section.title}</h2></div><div>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.sources ? <p className="guide-section-sources">Zum Nachlesen: {section.sources.map((source, index) => <span key={source.href}>{index > 0 ? " · " : ""}<a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></span>)}</p> : null}</div></section>)}
      {guide.comparison ? <section className="guide-comparison section-shell" aria-label={guide.comparison.title}><h2>{guide.comparison.title}</h2><table><thead><tr>{guide.comparison.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{guide.comparison.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td data-label={guide.comparison!.columns[index]} key={index}>{cell}</td>)}</tr>)}</tbody></table></section> : null}
      {guide.checklist ? <section className="guide-section section-shell guide-preparation" aria-label="Ihre Vorbereitung"><div><p className="section-label">Für Ihr Vorhaben</p><h2>Das können Sie<br /><em>jetzt vorbereiten.</em></h2></div><ol>{guide.checklist.map((item) => <li key={item}>{item}</li>)}</ol></section> : null}
      <section className="focused-guide-proof section-shell"><div><p className="section-label">Aus der Arbeit von KERN</p><h2>{guide.proof.title}</h2></div><div><p>{guide.proof.copy}</p><Link className="text-link" href={guide.proof.href}>{guide.proof.label}</Link></div></section>
      {!conversion ? <GuideInquiry project={guide.project} /> : null}
      <section className="guide-faq section-shell" id="fragen"><div><p className="section-label">Häufige Fragen</p><h2>Was vor der Entscheidung wichtig ist.</h2></div><div>{guide.faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>
      <section className="focused-guide-sources section-shell"><div><h2>Quellen und weiterführende Informationen</h2><p>Stand: {formattedDate}. Herstellerinformationen beziehen sich auf ihre jeweiligen Produkte. Die Einordnung für Ihr Haus erfolgt anhand des Bestands.</p><p>Orientierung für private Bauherren: Erforderliche Fachplanung, baurechtliche Prüfung und Förderprüfung werden für das konkrete Vorhaben geklärt.</p></div><ul>{guide.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></section>
      {conversion ? <GuideInquiry project={guide.project} {...conversion} hint={guideInquiryHint} /> : null}
      <nav className="focused-guide-related section-shell" aria-label="Passende nächste Themen"><p className="section-label">Weiterlesen</p>{guide.related.map((link) => <Link className="text-link" href={link.href} key={link.href}>{link.label}</Link>)}{guide.project === "Dachsanierung" && !guide.related.some((link) => link.href === "/dachsanierung-landsberg-am-lech") ? <Link className="text-link" href="/dachsanierung-landsberg-am-lech">Dachsanierung in Landsberg am Lech und am Ammersee: Leistungen und Referenzen</Link> : null}</nav>
    </article>
  </SiteFrame>;
}
