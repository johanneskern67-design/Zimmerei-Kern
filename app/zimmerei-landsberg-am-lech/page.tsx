import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowMark from "../components/ArrowMark";
import ServiceAreaCopy from "../components/ServiceAreaCopy";
import { BreadcrumbStructuredData, FaqStructuredData, ServiceStructuredData } from "../components/StructuredData";
import { CtaBand, PageHero, SiteFrame } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Zimmerei Landsberg am Lech & Ammersee | KERN" },
  description: "KERN aus Penzing-Ramsach: Ihr Holzbau-Meisterbetrieb für Landsberg am Lech und Ammersee. Dachsanierung, Dachstühle, Gauben und Holzrahmenbau mit 3D-Planung.",
  alternates: { canonical: "/zimmerei-landsberg-am-lech" },
  openGraph: {
    type: "website",
    siteName: "KERN Zimmerei & Holzbau",
    title: "Zimmerei Landsberg am Lech & Ammersee | KERN",
    description: "Holzbau-Meisterbetrieb aus Penzing-Ramsach für Dachsanierung, Dachstühle und Wohnraumerweiterung in Landsberg am Lech und am Ammersee.",
    url: "/zimmerei-landsberg-am-lech",
    images: [{ url: "/images/altoettinger-aufstockung-gesamtansicht.webp", width: 1200, height: 800, alt: "Obergeschoss in Holzständerbauweise von KERN in Landsberg am Lech" }],
  },
};

const services = [
  ["Komplette Dachsanierung", "Tragwerk, Dämmung, Dachaufbau und Eindeckung werden als ein zusammenhängendes Projekt geplant und ausgeführt."],
  ["Anbau in Holzbauweise", "Neue Wohnfläche wird präzise an den Bestand angeschlossen. Weitere Arbeiten stimmen wir mit passenden Fachfirmen aus der Region ab."],
  ["Aufstockung", "Leichte Holzbaukonstruktionen schaffen zusätzlichen Raum über dem Bestand – vom Aufmaß bis zur Montage."],
  ["Einblasdämmung", "Geeignete Dach-, Wand- und Deckengefache werden fugenarm mit dem zum Bauteil passenden Dämmstoff gefüllt."],
  ["3D-CAD & Eingabeplanung", "Bestand und neue Konstruktion werden digital zusammengeführt, damit Geometrie und Anschlüsse vor der Baustelle geklärt sind."],
  ["Abgestimmte Fachfirmen", "Wenn weitere Arbeiten nötig sind, stimmen wir passende Fachfirmen aus der Region mit Ihnen ab. KERN bleibt Ihr Ansprechpartner."],
];

const faqs = [
  {
    question: "Ist die Zimmerei Kern direkt in Landsberg am Lech ansässig?",
    answer: "KERN Zimmerei & Holzbau hat ihren Betrieb in der Dorfstraße 52 in Penzing-Ramsach, nahe Landsberg am Lech. Landsberg und der Landkreis Landsberg am Lech gehören zum regelmäßigen Einsatzgebiet.",
  },
  {
    question: "Welche Zimmererarbeiten übernimmt KERN im Raum Landsberg?",
    answer: "Unser Schwerpunkt sind komplette Dachsanierungen im Bestand. Hinzu kommen Anbau, Aufstockung, Einblasdämmung und eigene 3D-CAD- und Eingabeplanung.",
  },
  {
    question: "Führt KERN eine Dachsanierung vollständig aus?",
    answer: "Ja. KERN führt die erforderlichen Zimmerer- und Dachdeckerarbeiten vom Tragwerk über Dämmung und Dachaufbau bis zur fertigen Eindeckung aus. Weitere notwendige Arbeiten stimmen wir mit passenden Fachfirmen ab.",
  },
  {
    question: "Warum ist KERN für eine anspruchsvolle Dachsanierung geeignet?",
    answer: "Johannes Kern verbindet die Qualifikation als Zimmerermeister und Bautechniker mit eigener 3D-CAD-Planung. KERN betrachtet Tragwerk, Dämmung, Dachaufbau, Gauben, Dachfenster und Anschlüsse als Gesamtsystem und belegt diese Arbeitsweise mit ausgeführten Dachsanierungen aus dem tatsächlichen Einsatzgebiet.",
  },
  {
    question: "Was wird für eine erste Einschätzung benötigt?",
    answer: "Vorhaben, Projektort und Kontaktdaten genügen für den Einstieg. Fotos, Pläne und weitere Angaben sind freiwillig; Johannes Kern antwortet persönlich.",
  },
];

export default function ZimmereiLandsberg() {
  return <SiteFrame>
    <ServiceStructuredData name="Zimmerei- und Holzbauleistungen für Landsberg am Lech" description="Dachsanierung, Holzbau, Anbau, Aufstockung, Einblasdämmung und 3D-CAD durch KERN aus Penzing-Ramsach im Landkreis Landsberg am Lech." path="/zimmerei-landsberg-am-lech" />
    <FaqStructuredData items={faqs} />
    <BreadcrumbStructuredData items={[{ name: "Startseite", path: "/" }, { name: "Zimmerei Landsberg am Lech", path: "/zimmerei-landsberg-am-lech" }]} />

    <PageHero
      eyebrow="KERN Zimmerei & Holzbau · Penzing-Ramsach"
      title={<>Zimmerei für Landsberg am Lech.<br /><em>Und den Ammersee.</em></>}
      description="KERN ist der persönlich geführte Zimmerermeisterbetrieb von Johannes Kern in Penzing-Ramsach. Für Eigentümer in Landsberg am Lech, Kaufering und am Ammersee verbinden wir Bestandsanalyse, 3D-Planung und handwerkliche Ausführung bis zum fertigen Ergebnis."
      code="LANDSBERG / KERN"
      image="/images/altoettinger-aufstockung-gesamtansicht.webp"
      imageAlt="Von KERN ausgeführtes Obergeschoss in Holzständerbauweise in Landsberg am Lech"
      imagePosition="center 48%"
    />

    <section className="competence-rail" aria-label="KERN im Raum Landsberg am Lech">
      <span><b>Standort</b>Penzing-Ramsach</span>
      <span><b>Region</b>Landkreis Landsberg am Lech</span>
      <span><b>Fokus</b>Dachsanierung</span>
      <span><b>Planung</b>3D-CAD im Haus</span>
    </section>

    <section className="statement-section section-shell">
      <p className="section-label">Zimmerei Kern bei Landsberg</p>
      <div>
        <h2>Ihr Holzbau-Meisterbetrieb.<br /><em>Stark im Bestand.</em></h2>
        <p className="lead">Bei einer Dachsanierung möchten Sie wissen, wer Verantwortung übernimmt. Johannes Kern begleitet Ihr Vorhaben persönlich – mit Zimmerermeister- und Bautechnikerwissen sowie eigener 3D-Planung.</p>
        <p>Wir klären, was Ihr Haus braucht, was erhalten werden kann und wie der Bauablauf vorbereitet wird. Die dokumentierten Projekte zeigen unsere Arbeit bis ins Detail.</p>
        <Link className="text-link" href="/dachsanierung-landsberg-am-lech">Dachsanierung für Landsberg im Detail <ArrowMark /></Link>
      </div>
    </section>

    <section className="module-section section-shell">
      <div className="section-title-row"><p className="section-label">Leistungen für Landsberg & Umgebung</p><p>Planung und Ausführung mit einem festen Ansprechpartner.</p></div>
      <div className="module-grid">{services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="statement-section section-shell service-explainer" id="holzbau-nach-mass"><p className="section-label">Vom Dachstuhl bis zum Carport</p><div><h2>Holzbau nach Maß.<br /><em>Passend zu Ihrem Zuhause.</em></h2><div className="information-columns"><article><h3>Dachstühle &amp; Abbund am Ammersee</h3><p>Ein neuer Dachstuhl braucht eine passende Tragkonstruktion. Beim Abbund werden Hölzer zugeschnitten und ihre Verbindungen vorbereitet. Unsere 3D-CAD-Planung stimmt Sparren, Pfetten, Öffnungen und Anschlüsse vor der Fertigung aufeinander ab.</p><Link className="text-link" href="/planung-cad#dachstuhl-abbund">Dachstuhl und Abbund digital planen <ArrowMark /></Link></article><article><h3>Carports aus Holz</h3><p>Für einen Carport klären wir Stellplatzmaße, Durchfahrtshöhe, Dachform, Entwässerung und Fundamente. So entsteht eine Konstruktion, die zu Haus und Grundstück passt. Erforderliche Nachweise und die örtlichen Vorgaben werden vor der Ausführung geprüft.</p></article><article><h3>Gauben &amp; Holzrahmenbau</h3><p>Eine Gaube schafft nutzbare Höhe und Tageslicht. Holzrahmenwände ermöglichen Anbauten und zusätzliche Geschosse. Tragwerk, Dämmung und Übergänge zum bestehenden Haus werden gemeinsam geplant – von Landsberg und Kaufering bis Dießen am Ammersee.</p><Link className="text-link" href="/anbau-aufstockung">Wohnraum in Holzbauweise erweitern <ArrowMark /></Link></article></div><h3>Ökologischer Holzbau: Materialien bewusst wählen</h3><p>Für Ihr Bauvorhaben in Bayern prüfen wir den Erhalt brauchbarer Bauteile und geeignete Holz- und Dämmstoffe. Holzfaser oder Zellulose können zum Konzept passen; Feuchteschutz, Dauerhaftigkeit und die Eignung des gesamten Aufbaus entscheiden.</p><Link className="text-link" href="/ratgeber/oekologisch-sanieren">Ökologisch sanieren: die Materialwahl abwägen <ArrowMark /></Link></div></section>

    <section className="image-story">
      <div className="image-story-media"><Image src="/images/altoettinger-aufstockung-montage.webp" alt="Montage eines Obergeschosses in Holzständerbauweise durch KERN in Landsberg am Lech" fill sizes="(max-width: 900px) 100vw, 56vw" unoptimized /></div>
      <div className="image-story-copy">
        <p className="section-label">Ausgeführte Referenz · Landsberg</p>
        <h2>Vor Ort gebaut.<br /><em>Schritt für Schritt belegt.</em></h2>
        <p>Das Obergeschoss in der Altöttinger Straße wurde aus statischen Gründen in Holzständerbauweise errichtet. Es zeigt den vollständigen Weg von KERN: digitales Holzbaumodell, vorgefertigte Wände, sichtbare Massivholzdecke, Montage und fertige Holzfassade.</p>

        <Link className="text-link" href="/projekte/obergeschoss-holzstaenderbau-landsberg">Projekt in Landsberg ansehen <ArrowMark /></Link>
      </div>
    </section>

    <section className="region-band" aria-labelledby="landsberg-region-title">
      <div><p className="section-label">Regional verwurzelt</p><h2 id="landsberg-region-title">Unser Einsatzgebiet</h2></div>
      <div><ServiceAreaCopy /><div className="official-links"><Link href="/projekte/dachsanierung-utting-turm">Dachsanierung in Utting ansehen <ArrowMark /></Link><Link href="/projekte/dachsanierung-hausen-geltendorf">Dachsanierung in Hausen ansehen <ArrowMark /></Link></div></div>
    </section>

    <CtaBand title="Ihr Haus steht im Raum Landsberg?" copy="Ob Dachsanierung oder mehr Platz für Ihr Zuhause: Schreiben Sie uns kurz, was Sie vorhaben. Johannes Kern meldet sich persönlich bei Ihnen." button="Kontakt aufnehmen" />
  <section className="guide-faq section-shell" id="fragen">
      <div><p className="section-label">Häufige Fragen</p><h2>Klare Antworten.<br /><em>Schon vor dem Termin.</em></h2></div>
      <div>{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </section>


  </SiteFrame>;
}
