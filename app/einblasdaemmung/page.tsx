import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowMark from "../components/ArrowMark";
import { CtaBand, PageHero, RelatedService, SiteFrame } from "../components/SiteChrome";
import { InsulationGraphic } from "../components/TechnicalVisuals";
import { BreadcrumbStructuredData, ServiceStructuredData } from "../components/StructuredData";

export const metadata: Metadata = { title: "Einblasdämmung Landsberg & Ammersee-Gebiet", description: "Einblasdämmung mit Holzfaser, Mineralwolle, Zellulose oder Stroh: fachgerechte Ausführung durch KERN in Landsberg am Lech und Umgebung sowie im Ammersee-Gebiet.", alternates: { canonical: "/einblasdaemmung" } };
metadata.openGraph = { title: typeof metadata.title === "string" ? metadata.title : (metadata.title as { absolute: string }).absolute, description: metadata.description!, url: "/einblasdaemmung", type: "website", images: [{ url: "/images/kern-einblasdaemmung-vor-ort.webp" }] };
metadata.twitter = { card: "summary_large_image", title: metadata.openGraph.title, description: metadata.description!, images: ["/images/kern-einblasdaemmung-vor-ort.webp"] };

const materials = [
  { code: "HF", title: "Holzfaser", subtitle: "Nachwachsend · wärmespeichernd", product: "STEICOzell", image: "/images/steicozell-holzfaser-hersteller.jpg", imageAlt: "Herstellerabbildung von loser STEICOzell Holzfaser-Einblasdämmung", imageFit: "contain", source: "https://www.steico.com/de/produkte/daemmung/gefachdaemmung/einblasdaemmung/steicozell", text: "Lose Holzfasern werden in Dach-, Wand- oder Deckengefache eingeblasen. Ihre hohe Wärmespeicherfähigkeit unterstützt besonders den sommerlichen Hitzeschutz; zugleich ist der Aufbau diffusionsoffen planbar.", traits: ["guter sommerlicher Hitzeschutz", "feuchtepuffernde Materialeigenschaften", "aus nachwachsendem Rohstoff"] },
  { code: "MW", title: "Mineralwolle", subtitle: "Nichtbrennbar · leicht", product: "URSA PUREFLOC", image: "/images/ursa-purefloc-mineralwolle-hersteller.png", imageAlt: "Herstellerabbildung von URSA PUREFLOC Mineralwolle-Einblasdämmung", imageFit: "contain", source: "https://www.ursa.de/de-de/produkte/einblasdaemmung/ursa-purefloc/", text: "Einblasbare Glas- oder Steinwolle eignet sich dort, wo Wärmeschutz, Schallschutz und besonders der Brandschutz wichtig sind. Je nach Produkt sind Baustoffklassen bis A1 möglich.", traits: ["sehr guter Brandschutz", "gute Wärme- und Schalldämmung", "für Neubau und Sanierung"] },
  { code: "ZE", title: "Zellulose", subtitle: "Recyclingbasiert · anpassungsfähig", product: "ISOCELL Zellulose", image: "/images/isocell-zellulose-hersteller.jpg", imageAlt: "Herstellerabbildung loser ISOCELL Zellulosefasern", imageFit: "cover", source: "https://www.isocell.com/de-de/produkte/produkt/zellulose", text: "Aus aufbereitetem Zeitungspapier entstehen Fasern, die sich im Gefach ineinander verzahnen. Zellulose verbindet guten winterlichen Wärmeschutz mit hohem sommerlichem Komfort und kann Feuchtigkeit puffern.", traits: ["hoher Recyclinganteil", "gute Anpassung an Geometrien", "Wärme-, Hitze- und Schallschutz"] },
  { code: "ST", title: "Stroh", subtitle: "Regional · kreislauffähig", product: "ISO-STROH", image: "/images/iso-stroh-hersteller.jpg", imageAlt: "Herstellerabbildung von aufbereitetem ISO-STROH Einblasdämmstoff", imageFit: "straw", source: "https://www.iso-stroh.ch/", text: "Mechanisch aufbereitetes Weizenstroh kann in zugelassenen Systemen als Einblasdämmstoff eingesetzt werden. Seine hohe Einbaudichte bringt viel Wärmespeichermasse in Dach, Wand oder Decke.", traits: ["regional verfügbarer Rohstoff", "keine synthetische Faser", "hohe Rohdichte und Speicherfähigkeit"] },
];

const materialStrengths = [
  { material: "Holzfaser", strength: "Sommerlicher Hitzeschutz", profile: "Hohe Wärmespeicherfähigkeit und feuchtepuffernde Eigenschaften.", use: "Dach und Wand, wenn Wohnkomfort und ein nachwachsender Rohstoff im Mittelpunkt stehen." },
  { material: "Mineralwolle", strength: "Brandschutz", profile: "Je nach Produkt nichtbrennbar bis Baustoffklasse A1; zugleich gute Wärme- und Schalldämmung.", use: "Konstruktionen mit erhöhten Anforderungen an den vorbeugenden Brandschutz." },
  { material: "Zellulose", strength: "Vielseitige Bestandssanierung", profile: "Anpassungsfähig, recyclingbasiert und leistungsfähig bei Wärme-, Hitze- und Schallschutz.", use: "Unregelmäßige Gefache in Dach, Wand und Decke sowie große Dämmvolumen." },
  { material: "Stroh", strength: "Regionalität & Kreislauffähigkeit", profile: "Hohe Einbaudichte und Speichermasse aus einem regional verfügbaren, nachwachsenden Rohstoff.", use: "Ökologisch ausgerichtete Aufbauten mit passender Produktzulassung und Systemplanung." },
];

export default function Einblasdaemmung() { return <SiteFrame>
  <ServiceStructuredData name="Einblasdämmung" description="Fachgerechte Einblasdämmung mit Holzfaser, Mineralwolle, Zellulose oder Stroh in Landsberg am Lech und Umgebung sowie im Ammersee-Gebiet." path="/einblasdaemmung" />
  <BreadcrumbStructuredData items={[{ name: "Startseite", path: "/" }, { name: "Einblasdämmung", path: "/einblasdaemmung" }]} />
  <PageHero eyebrow="Einblasdämmung · Dach, Wand & Decke" title={<>Einblasdämmung.<br /><em>Wärme bleibt im Haus.</em></>} description="Zieht es, heizt sich der Dachraum stark auf oder sind Hohlräume ungleichmäßig gedämmt? Einblasdämmung füllt auch unregelmäßige Hohlräume mit wenigen Fugen. Wir prüfen, ob der Aufbau geeignet ist und welcher Dämmstoff passt." code="DÄMMUNG / KERN" image="/images/kern-einblasdaemmung-vor-ort.webp" imageAlt="KERN bringt Einblasdämmung mit dem Einblasschlauch in ein vorbereitetes Dachgefache ein" imagePosition="center 38%" />
  <section className="insulation-intro section-shell"><div><p className="section-label">Das Prinzip</p><h2>Hohlräume vollständig nutzen.<br /><em>Wärmeverluste gezielt senken.</em></h2><p className="lead">Eine Einblasmaschine lockert den Dämmstoff auf und transportiert ihn mit Luft durch einen Schlauch zum Bauteil. Dort wird er in der vorgeschriebenen Dichte verteilt.</p><p>Lose Fasern füllen die Hohlräume zwischen den Balken – die sogenannten Gefache – und umschließen Leitungen. Die fugenarme Dämmschicht reduziert Wärmeverluste und unterstützt ein angenehmeres Raumklima – ohne viele zugeschnittene Plattenstücke.</p><p>Dafür muss der Hohlraum trocken, geeignet und an den richtigen Stellen luftdicht sein. Auch die vorgeschriebene Dämmstoffmenge je Hohlraum muss stimmen. Diese Punkte prüfen und dokumentieren wir.</p></div><InsulationGraphic /></section>

  <section className="how-section how-story" id="ablauf">
    <figure className="how-story-image">
      <Image src="/images/kern-einblasdaemmung-holzstaenderwand-v2.webp" alt="Vollständig mit Einblasdämmstoff gefülltes Gefach in einer Holzständerwand" fill sizes="(max-width: 860px) 100vw, 44vw" unoptimized />
      <figcaption>Ein vollständig gefülltes Gefach macht die Ausführung sichtbar.</figcaption>
    </figure>
    <div className="how-story-content">
      <header>
        <p className="section-label">So funktioniert es</p>
        <h2>Ein Ablauf.<br /><em>Vier kontrollierte Schritte.</em></h2>
        <p>Was später verdeckt ist, muss während der Verarbeitung stimmen.</p>
      </header>
      <ol className="how-flow">
        <li><b>01</b><div><h3>Bauteil prüfen</h3><p>Aufbau, Feuchte, Luftdichtheit und Eignung des Hohlraums werden vorab geklärt.</p></div></li>
        <li><b>02</b><div><h3>Gefach vorbereiten</h3><p>Alle Begrenzungen und Durchdringungen müssen druckfest und dauerhaft geschlossen sein.</p></div></li>
        <li><b>03</b><div><h3>Dämmstoff einblasen</h3><p>Der Luftstrom verteilt die Fasern im Hohlraum. Wir halten dabei die vom Hersteller vorgeschriebene Dichte ein.</p></div></li>
        <li><b>04</b><div><h3>Qualität sichern</h3><p>Materialmenge, Füllung und Einblasöffnungen werden kontrolliert und sauber dokumentiert.</p></div></li>
      </ol>
    </div>
  </section>
  <section className="benefit-section"><div className="section-shell"><p className="section-label">Überzeugende Vorteile</p><div className="benefit-grid"><h2>Mehr Wirkung.<br /><em>Weniger Lücken.</em></h2><div><article><h3>Angenehmer wohnen</h3><p>Ein abgestimmter Aufbau reduziert Wärmeverluste; wärmespeichernde Dämmstoffe können sommerliche Hitze verzögern.</p></article><article><h3>Den Bestand sinnvoll nutzen</h3><p>Geeignete Hohlräume werden auch bei unregelmäßiger Geometrie gefüllt. Zugänglichkeit und Aufbau entscheiden über die Eignung.</p></article></div></div></div></section>
  <section className="materials-section section-shell" id="daemmstoffe">
    <div className="section-title-row"><p className="section-label">Dämmstoffe</p><p>Die beste Lösung ist die, die zum Bauteil passt.</p></div>
    <div className="material-grid">{materials.map((material) => <article key={material.code}>
      <a className={`material-card-image material-card-image--${material.imageFit}`} href={material.source} target="_blank" rel="noreferrer" aria-label={`${material.product} auf der Herstellerseite ansehen`}>
        <Image src={material.image} alt={material.imageAlt} fill sizes="(max-width: 580px) calc(100vw - 36px), (max-width: 1100px) 44vw, 22vw" unoptimized />
        <span className="material-image-code">{material.code}</span>
      </a>
      <div className="material-card-body">
        <div className="material-card-source"><span>Herstellerabbildung</span><a href={material.source} target="_blank" rel="noreferrer">{material.product}</a></div>
        <small>{material.subtitle}</small><h3>{material.title}</h3><p>{material.text}</p><details className="material-details"><summary>Materialeigenschaften</summary>{material.traits.map((trait) => <p key={trait}>{trait}</p>)}</details>
      </div>
    </article>)}</div>
    <p className="manufacturer-note">Gezeigt sind konkrete Produktbeispiele und Abbildungen der jeweiligen Hersteller; die Produktnamen führen direkt zur Herstellerinformation. Die Auswahl des tatsächlich eingesetzten Systems erfolgt projektbezogen nach Zulassung, Bauteilaufbau und gewünschtem Schutzziel.</p>
    <div className="material-comparison" id="staerkenvergleich">
      <div className="material-comparison-head"><p className="section-label">Stärken im Vergleich</p><h2>Welcher Dämmstoff<br /><em>wo besonders stark ist.</em></h2><p>Es gibt keinen pauschalen Sieger. Der richtige Dämmstoff ergibt sich aus Bauteil, Schutzziel und gewünschter Materialqualität.</p></div>
      <div className="material-table-wrap"><table><thead><tr><th>Dämmstoff</th><th>Besondere Stärke</th><th>Wichtige Eigenschaften</th><th>Besonders passend</th></tr></thead><tbody>{materialStrengths.map((row) => <tr key={row.material}><th scope="row">{row.material}</th><td data-label="Besondere Stärke"><strong>{row.strength}</strong></td><td data-label="Wichtige Eigenschaften">{row.profile}</td><td data-label="Besonders passend">{row.use}</td></tr>)}</tbody></table></div>
      <p className="comparison-note">Die Angaben zeigen typische Tendenzen. Verbindlich sind immer die Kennwerte, Zulassung und Einbaudichte des konkret gewählten Produkts sowie der geprüfte Gesamtaufbau.</p>
    </div>

  </section>
  <CtaBand title="Welcher Dämmstoff passt zu Ihrem Gebäude?" copy="Sie möchten Ihr Zuhause besser dämmen und sind noch unsicher, was möglich ist? Erzählen Sie uns kurz von Ihrem Gebäude. Johannes Kern meldet sich persönlich bei Ihnen." button="Kontakt aufnehmen" project="Einblasdämmung" />
  <section className="application-section section-shell"><div><p className="section-label">Einsatzbereiche</p><h2>Wo Einblasen<br /><em>seine Stärke zeigt.</em></h2></div><div className="application-grid"><span>Dachschrägen und Kehlbalkenlagen</span><span>Holzrahmenwände und Installationsebenen</span><span>Oberste Geschossdecken</span><span>Decken- und Bodengefache</span><span>Schwer zugängliche Hohlräume</span><span>Neubau und energetische Sanierung</span></div></section>
  <section className="decision-section section-shell"><div><p className="section-label">Materialentscheidung</p><h2>Nicht einfach dämmen.<br /><em>Richtig abstimmen.</em></h2></div><div><p className="lead">Am vorhandenen Bauteil klären wir, welcher Hohlraum gefüllt werden kann und welche Anschlüsse vorbereitet werden müssen. Daraus ergibt sich die Materialwahl.</p><div className="decision-factors"><span>Wärmeschutz</span><span>Hitzeschutz</span><span>Brandschutz</span><span>Feuchte</span><span>Schall</span><span>Ökologie</span></div><p>Wir erklären die Varianten verständlich, planen die Anschlüsse und dokumentieren die fachgerechte Verarbeitung.</p></div></section>
  <section className="guide-teaser section-shell"><p className="section-label">Ratgeber für Bestandsgebäude</p><div><h2>Hohlraum, Feuchte, Material.<br /><em>Vorher richtig prüfen.</em></h2><p>Wann eignet sich Einblasdämmung im Altbau, welche Bauteile müssen vorher geprüft werden und warum entscheidet das Gefach über das Ergebnis?</p><Link className="text-link" href="/ratgeber/einblasdaemmung-altbau#daemmung-waehlen">Dach oder Geschossdecke: die passende Lösung finden <ArrowMark /></Link><Link className="text-link" href="/ratgeber/einblasdaemmung-altbau">Einblasdämmung im Altbau verstehen <ArrowMark /></Link><Link className="text-link" href="/ratgeber/holzfaserdaemmung-dachsanierung">Holzfaser bei der Dachsanierung einordnen</Link></div></section>
  <RelatedService title="Wer richtig dämmt, denkt das ganze Dach mit." copy="Eine Einblasdämmung wirkt dauerhaft nur im abgestimmten System aus Tragwerk, Luftdichtheit, Feuchteschutz und Dachhaut. Bei einer Dachsanierung prüfen und lösen wir diese Ebenen gemeinsam." href="/dachsanierung" linkLabel="Zur Dachsanierung" />

  </SiteFrame>; }
