import { RoofChoices } from "../components/CustomerDecisions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowMark from "../components/ArrowMark";
import ServiceAreaCopy from "../components/ServiceAreaCopy";
import { BreadcrumbStructuredData, FaqStructuredData, ServiceStructuredData } from "../components/StructuredData";
import { InlineInquiry, PageHero, SiteFrame } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Energetische Dachsanierung am Ammersee | KERN" },
  description: "Energetische Dachsanierung am Ammersee: Dämmung, Luftdichtheit und Eindeckung passend zum Bestand planen. Persönlich begleitet von Johannes Kern.",
  alternates: { canonical: "/dachsanierung" },
  openGraph: {
    title: "Energetische Dachsanierung am Ammersee | KERN",
    description: "Energetische Dachsanierung am Ammersee: Dämmung, Luftdichtheit und Eindeckung passend zum Bestand planen. Persönlich begleitet von Johannes Kern.",
    url: "/dachsanierung",
    type: "website",
    images: [{
      url: "/images/grossaitingen-dachsanierung-fertig.webp",
      width: 1536,
      height: 1152,
      alt: "Von KERN vollständig saniertes Dach eines Bestandsgebäudes in Großaitingen",
    }],
  },
};
metadata.twitter = { card: "summary_large_image", title: metadata.openGraph!.title, description: metadata.description!, images: ["/images/kern-social.webp"] };


const modules = [
  ["Bestandsaufnahme", "Tragwerk, Dachhaut, Feuchtespuren und Ihre Wünsche bestimmen den Sanierungsumfang."],
  ["Tragwerk & Geometrie", "Beschädigte oder zu schwache Balken werden verstärkt oder ersetzt. Gauben und neue Öffnungen planen wir passend zur Konstruktion."],
  ["Dämmung & Luftdichtheit", "Wärmeschutz, sommerlicher Hitzeschutz und Feuchtesicherheit werden auf Ihren Dachaufbau abgestimmt."],
  ["Dachaufbau & Eindeckung", "Unterdeckung, Konterlattung, Lattung und Eindeckung schützen die darunterliegende Konstruktion."],
  ["Wohnraum im Dach", "Licht, Raumhöhe und Anschlüsse werden für die künftige Nutzung früh mitgeplant."],
  ["Fachpartner abstimmen", "Benötigte Spengler-, Dachfenster- und Statikleistungen binden wir projektbezogen ein. Ihr zentraler Ansprechpartner bleibt KERN."],
];

const dachsanierungFaqs: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  { question: "Übernimmt KERN wirklich die komplette Dachsanierung?", answer: "Ja. KERN führt die erforderlichen Zimmerer- und Dachdeckerarbeiten vom Tragwerk über Dämmung und Dachaufbau bis zur fertigen Eindeckung aus. Benötigte Fachleistungen wie Statik, Dachfenster oder Spenglerarbeiten werden projektbezogen eingebunden und zentral abgestimmt." },
  { question: "Kann das Haus während der Dachsanierung bewohnt bleiben?", answer: "Das hängt vom vorhandenen Gebäude, dem Umfang der Innenarbeiten, der Trennung zwischen Wohnraum und Baustelle sowie dem notwendigen Wetterschutz ab. KERN prüft diese Punkte vorab und legt einen passenden Bauablauf fest; eine pauschale Zusage wäre unseriös.", link: { href: "/ratgeber/dachsanierung-bewohnt", label: "Sanierung im bewohnten Haus vorbereiten" } },
  { question: "Wie lange dauert eine komplette Dachsanierung?", answer: "Die Dauer hängt von Dachfläche, Geometrie, Tragwerk, Gauben, Dachfenstern und dem Umfang der Arbeiten ab. Je nach Projekt kann die Ausführung mehrere Arbeitstage bis mehrere Wochen beanspruchen. Einen belastbaren Bauablauf legt KERN nach Bestandsprüfung und Planung fest; Witterung und erst nach dem Öffnen sichtbare Schäden werden dabei berücksichtigt." },
  { question: "Was benötigt KERN für eine erste Einschätzung?", answer: "Vorhaben, Projektort und Kontaktdaten genügen. Fotos, Pläne, Baujahr und technische Dachangaben können Sie freiwillig ergänzen." },
  { question: "Was kostet eine komplette Dachsanierung?", answer: "Dachfläche, Tragwerk, Dämmung, Fenster, Anschlüsse und Gerüst bestimmen den Aufwand. Nach der Bestandsaufnahme benennen wir Leistungsumfang, Optionen und noch offene Annahmen im Angebot. Werden nach dem Öffnen weitere Schäden sichtbar, erläutern wir den Befund und besprechen die nötigen Arbeiten sowie die absehbaren Mehrkosten mit Ihnen. Zusätzliche Leistungen stimmen wir vor ihrer Ausführung mit Ihnen ab.", link: { href: "/ratgeber/dachsanierung-kosten-landsberg", label: "Kostenfaktoren und Angebote vergleichen" } },
  { question: "Sollte eine Dachsanierung vor der Photovoltaik-Montage erfolgen?", answer: "Wenn Dachdeckung, Tragwerk, Anschlüsse oder Dämmung in absehbarer Zeit erneuert werden müssen, ist die Prüfung vor der Montage sinnvoll. KERN ordnet den Dachbestand und die nötigen Dacharbeiten ein und stimmt Schnittstellen mit dem beauftragten PV-Fachbetrieb ab. Planung, Montage und elektrischer Anschluss der Photovoltaikanlage gehören nicht zum KERN-Leistungsumfang.", link: { href: "#photovoltaik", label: "Dach und Photovoltaik aufeinander abstimmen" } },
];

export default function Dachsanierung() { return <SiteFrame>
  <ServiceStructuredData name="Komplette Dachsanierung im Bestand" description="Komplette Dachsanierung mit Zimmererarbeiten, energetischer Dämmung, Luftdichtheit, Dachaufbau und Eindeckung durch KERN im Raum Landsberg am Lech, Kaufering und am Ammersee." path="/dachsanierung" />
  <FaqStructuredData items={dachsanierungFaqs} />
  <BreadcrumbStructuredData items={[{ name: "Startseite", path: "/" }, { name: "Dachsanierung", path: "/dachsanierung" }]} />
  <PageHero
    eyebrow="Zimmerer- & Dachdeckerarbeiten · Bestand komplett erneuern"
    title={<>Dachsanierung im Bestand.<br /><em>Komplett durch KERN.</em></>}
    shortDescription="Ein neues Dach für Ihr Zuhause. Von der Bestandsprüfung bis zur fertigen Eindeckung – persönlich begleitet durch Johannes Kern."
        description="Bei Ihrem Dach geht es um mehr als neue Ziegel: um ein geschütztes, behagliches Zuhause, den Wert Ihrer Immobilie und die Möglichkeiten im Dachraum. KERN plant und führt die komplette Sanierung vom Tragwerk bis zur fertigen Eindeckung."
    code="DACH / KERN"
    image="/images/utting-dachsanierung-hero.webp"
    imageAlt="Fertig gedecktes Dach am erhaltenen Turm in Utting: eigenes KERN-Projekt"
    imagePosition="36% center"
    imageDisclosure="KERN-Projekt in Utting · fertig gedecktes Dach"
  ></PageHero>
  <section className="competence-rail" aria-label="Leistungsumfang der Dachsanierung"><span>Bestandsprüfung</span><span>Zimmererarbeiten</span><span>Dachdeckerarbeiten</span><span>Fertige Eindeckung</span></section>
  <section className="guide-faq section-shell" id="fragen"><div><p className="section-label">Häufige Fragen</p><h2>Klarheit vor<br /><em>dem ersten Termin.</em></h2></div><div>{dachsanierungFaqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p>{item.link ? <p><Link className="text-link" href={item.link.href}>{item.link.label} <ArrowMark /></Link></p> : null}</details>)}</div></section>


  <section className="roof-progress section-shell" aria-labelledby="roof-progress-title">
    <header className="roof-progress-head">
      <p className="section-label">Echte Baustelle · Großaitingen</p>
      <div><h2 id="roof-progress-title">Schicht für Schicht.<br /><em>Bis zum fertigen Dach.</em></h2><p>Das Haus von 1954 zeigt den tatsächlichen Baufortschritt: Aufdachdämmung, Lattung, Spenglerarbeiten und neue rote Dachziegel.</p></div>
    </header>
    <div className="roof-progress-grid">
      <figure><Image src="/images/grossaitingen-bestand.webp" alt="Haus von 1954 vor der Dachsanierung in Großaitingen" fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" unoptimized /><figcaption>Bestand</figcaption></figure>
      <figure><Image src="/images/grossaitingen-aufdachdaemmung.webp" alt="Aufdachdämmung auf dem Haus in Großaitingen" fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" unoptimized /><figcaption>Aufdachdämmung</figcaption></figure>
      <figure><Image src="/images/grossaitingen-lattung.webp" alt="Lattung über der Aufdachdämmung in Großaitingen" fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" unoptimized /><figcaption>Lattung</figcaption></figure>
      <figure><Image src="/images/grossaitingen-eindeckung-fortschritt.webp" alt="Verlegung der neuen roten Dachziegel in Großaitingen" fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" unoptimized /><figcaption>Neue Eindeckung</figcaption></figure>
      <figure><Image src="/images/grossaitingen-kamin-spengler.webp" alt="Vorbereitete Anschlüsse am Kamin während der Spenglerarbeiten" fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" unoptimized /><figcaption>Anschlüsse</figcaption></figure>
      <figure><Image src="/images/grossaitingen-dachsanierung-fertig.webp" alt="Fertig sanierter Dachstuhl mit roten Dachziegeln in Großaitingen" fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" unoptimized /><figcaption>Fertiges Dach</figcaption></figure>
    </div>
    <Link className="text-link" href="/projekte/dachsanierung-grossaitingen-baujahr-1954">Vollständige Dachsanierung ansehen <ArrowMark /></Link>
  </section>
  <section className="statement-section section-shell service-explainer" id="aufdachdaemmung"><p className="section-label">Energetische Dachsanierung · Landsberg &amp; Ammersee</p><div><h2>Aufdachdämmung.<br /><em>Wärme im Haus halten.</em></h2><p className="lead">Wird das Dach neu eingedeckt, lässt sich der Wärmeschutz von außen mitplanen. Eine Aufdachdämmung liegt oberhalb der Sparren und kann die Wärmebrücken des Tragwerks verringern. Ob sie allein oder zusammen mit einer Zwischensparrendämmung sinnvoll ist, ergibt sich aus dem Bestand.</p><h3>Dämmung, Luftdichtheit und Anschlüsse zusammen planen</h3><p>Entscheidend sind nicht nur Material und Dämmstärke: Dampfbremse, Unterdeckung sowie die Anschlüsse an Traufe, Ortgang, Kamin und Dachfenster müssen zum Aufbau passen. Ein abgestimmtes Dach kann Heizenergie einsparen und den Wohnkomfort verbessern. Eine konkrete Einsparung lässt sich erst aus Gebäudezustand, Nutzung und energetischer Planung ableiten.</p><h3>Die 0,60-m-Regel im KERN-Aufmaß</h3><p>Bei unserer Kalkulation werden Trauf- und Ortgangüberstände von <strong>weniger als 0,60 m</strong> der Aufdachdämmfläche zugerechnet. Vordächer und Überstände bleiben im Aufmaß separat nachvollziehbar. Das ist eine interne Regel zur Flächenermittlung – keine allgemeine Dämm- oder Genehmigungsvorschrift. Wo die Dämmung tatsächlich endet, legt die Detailplanung am Gebäude fest.</p><div className="official-links"><Link href="/ratgeber/dachdaemmung-varianten">Aufsparren- und Zwischensparrendämmung vergleichen <ArrowMark /></Link><Link href="/ratgeber/dachsanierung-kosten-landsberg">Kosten der Dachsanierung nachvollziehen <ArrowMark /></Link></div></div></section>
  <details className="roof-service-details"><summary>Leistungsumfang und Fachpartner im Detail</summary>
  <section className="module-section section-shell"><div className="section-title-row"><p className="section-label">Was wir komplett abdecken</p><p>Vom ersten Aufmaß bis zum fertigen Dach.</p></div><div className="module-grid">{modules.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="statement-section section-shell" aria-labelledby="responsibility-title"><p className="section-label">Leistungsumfang &amp; Schnittstellen</p><div><h2 id="responsibility-title">Vieles direkt durch KERN.<br /><em>Fachpartner klar abgestimmt.</em></h2><p className="lead">Sie möchten Ihr Dach erneuern, ohne die einzelnen Gewerke selbst zusammenführen zu müssen. Johannes Kern bleibt Ihr fester Ansprechpartner: Wir planen Aufbau und Bauablauf gemeinsam und benennen im Angebot klar, welche Arbeiten KERN und welche Fachpartner übernehmen.</p><div className="module-grid"><article><h3>Direkt durch KERN</h3><p>Bestandsaufnahme und Planung, Zimmererarbeiten am Tragwerk, energetische Dämmung, Luftdichtheit, Dachaufbau sowie Dachdeckerarbeiten bis zur fertigen Eindeckung.</p></article><article><h3>Mit regionalen Fachpartnern</h3><p>Spenglerarbeiten, erforderliche statische Nachweise und besondere Dachfensterleistungen werden projektbezogen beauftragt und mit dem Bauablauf koordiniert.</p></article></div></div></section>
  </details>
  <InlineInquiry
    eyebrow="Erste Einschätzung"
    title="Sie denken über eine Dachsanierung nach?"
    copy="Auch wenn Ihre Ideen noch nicht ganz konkret sind: Schreiben Sie uns kurz, was Sie vorhaben. Johannes Kern meldet sich persönlich bei Ihnen."
    button="Kontakt aufnehmen"
    project="Dachsanierung"
  />

  <section className="image-story" id="dachstuhl"><div className="image-story-media"><Image src="/images/kern-dachsanierung-historisches-tragwerk.webp" alt="Erhaltenes historisches Dachtragwerk mit neu aufgebauter Dachfläche" fill sizes="(max-width: 900px) 100vw, 56vw" unoptimized /></div><div className="image-story-copy"><p className="section-label">Historisches Tragwerk · neuer Dachaufbau</p><h2>Bewahren, was trägt. <em>Erneuern, was schützt.</em></h2><p>Ihr Haus soll seinen Charakter behalten. Wir beurteilen vorhandene Balken, erhalten geeignete Bauteile und ergänzen sie gezielt. Der neue Dachaufbau bringt Wärme-, Feuchte- und Wetterschutz mit dem Bestand zusammen.</p><Link className="text-link" href="/projekte/dachsanierung-utting-turm">Dachsanierung in Utting am Ammersee ansehen <ArrowMark /></Link><Link className="text-link" href="/ratgeber/dachstuhl-erhalten">Wann ein Dachstuhl erhalten werden kann</Link></div></section>
  <section className="phase-section section-shell"><div><p className="section-label">Projektphasen</p><h2>Vom ersten Blick<br />zum dichten Dach.</h2></div><ol className="phase-track"><li><b>01</b><span>Erstgespräch & Unterlagen</span></li><li><b>02</b><span>Aufmaß & Bestandsprüfung</span></li><li><b>03</b><span>3D-Konstruktion & Planung</span></li><li><b>04</b><span>Ausführung & Abstimmung</span></li><li><b>05</b><span>Gemeinsame Abnahme</span></li></ol></section>

  <section className="region-band" aria-labelledby="roof-region-title"><div><p className="section-label">Regional verwurzelt</p><h2 id="roof-region-title">Unser Einsatzgebiet</h2></div><div><ServiceAreaCopy /><div className="official-links"><Link href="/dachsanierung-landsberg-am-lech">Dachsanierung in Landsberg am Lech <ArrowMark /></Link><Link href="/zimmerei-landsberg-am-lech">Zimmerei für Landsberg am Lech <ArrowMark /></Link></div></div></section>
  <section className="guide-teaser section-shell"><p className="section-label">Orientierung vor dem Projektstart</p><div><h2>Kosten, Ablauf und<br /><em>die richtigen Entscheidungen.</em></h2><p>Unsere Dachsanierungs-Ratgeber erklären, welche Faktoren das Budget bestimmen, wie eine Sanierung vorbereitet wird und was während der Arbeiten im bewohnten Haus wichtig ist.</p><div className="official-links"><Link href="/ratgeber/dachsanierung">Dachsanierung richtig planen <ArrowMark /></Link><Link href="/ratgeber/dachsanierung-kosten-landsberg">Kostenfaktoren in Landsberg <ArrowMark /></Link><Link href="/ratgeber/dachdaemmung-varianten">Dämmarten für den Dachaufbau vergleichen <ArrowMark /></Link><Link href="/ratgeber/dachsanierung-bewohnt">Sanieren im bewohnten Haus <ArrowMark /></Link><Link href="/ratgeber/dach-reparieren-oder-sanieren">Reparatur oder Sanierung abwägen <ArrowMark /></Link><Link href="/ratgeber/dachsanierung-angebote-vergleichen">Dachangebote vollständig vergleichen <ArrowMark /></Link><Link href="/ratgeber/dachziegel-oder-dachsteine">Dachziegel oder Dachsteine? <ArrowMark /></Link></div></div></section>

  <section className="statement-section section-shell" id="photovoltaik"><p className="section-label">Photovoltaik geplant?</p><div><h2>Erst das Dach klären.<br /><em>Dann die Anlage montieren.</em></h2><p className="lead">Wer eine Photovoltaikanlage plant, möchte das Dach danach möglichst nicht wieder öffnen. Deshalb ist vorher der richtige Zeitpunkt, Dachdeckung, Tragwerk, Anschlüsse und Dämmung gemeinsam einzuordnen.</p><p><Link className="text-link" href="/ratgeber/dachsanierung-photovoltaik">Dach und Photovoltaik Schritt für Schritt abstimmen</Link></p><p className="technical-note"><strong>Klare Leistungsgrenze:</strong> KERN übernimmt die Dachsanierung. Planung, Montage und elektrischer Anschluss der Photovoltaikanlage bleiben beim beauftragten PV-Fachbetrieb; die Schnittstellen werden projektbezogen abgestimmt.</p></div></section>

  <RoofChoices />

  <section className="crosslink-section section-shell"><p className="section-label">Sinnvolle Ergänzung</p><div><h2>Hohlräume effizient dämmen.</h2><p>Je nach Dachaufbau kann Einblasdämmung die Hohlräume zwischen den Balken gleichmäßig füllen. Wir prüfen, welcher Dämmstoff zum Aufbau und Ihren Wünschen passt.</p><Link className="text-link" href="/einblasdaemmung">Zur Einblasdämmung <ArrowMark /></Link></div></section>

  </SiteFrame>; }
