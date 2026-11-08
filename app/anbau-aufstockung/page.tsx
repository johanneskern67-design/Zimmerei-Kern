import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowMark from "../components/ArrowMark";
import { BreadcrumbStructuredData, ServiceStructuredData } from "../components/StructuredData";
import { FriendlyInquiry, PageHero, RelatedService, SiteFrame } from "../components/SiteChrome";

export const metadata: Metadata = { title: { absolute: "Anbau & Aufstockung in Holzbauweise | Landsberg–Ammersee" }, description: "KERN plant Anbau, Aufstockung und Gauben im Holzrahmenbau für Landsberg, Kaufering und Ammersee. Mit 3D-Planung und echter Referenz aus Finning.", alternates: { canonical: "/anbau-aufstockung" } };
metadata.openGraph = { title: typeof metadata.title === "string" ? metadata.title : (metadata.title as { absolute: string }).absolute, description: metadata.description!, url: "/anbau-aufstockung", type: "website", images: [{ url: "/images/finning-aufstockung-montage.webp" }] };
metadata.twitter = { card: "summary_large_image", title: metadata.openGraph.title, description: metadata.description!, images: ["/images/finning-aufstockung-montage.webp"] };

export default function AnbauAufstockung() { return <SiteFrame>
  <ServiceStructuredData name="Anbau und Aufstockung in Holzbauweise" description="Planung und Holzbau für Anbauten und Aufstockungen im Raum Landsberg, Kaufering und am westlichen Ammersee. Weitere Facharbeiten werden bei Bedarf mit regionalen Partnern abgestimmt." path="/anbau-aufstockung" />
  <BreadcrumbStructuredData items={[{ name: "Startseite", path: "/" }, { name: "Anbau & Aufstockung", path: "/anbau-aufstockung" }]} />
  <PageHero
    eyebrow="Holzbau im Bestand · Landsberg, Kaufering & westlicher Ammersee"
    title={<>Aufstockung. Anbau.<br /><em>Raum für morgen.</em></>}
    description="Ob mehr Platz für die Familie, eine eigene Etage oder zusätzlicher Wohnraum zur Vermietung: KERN prüft, was Ihr Bestand ermöglicht, plant die Erweiterung in Holz und stimmt notwendige Facharbeiten klar ab."
    code="RAUM / KERN"
    image="/images/finning-aufstockung-montage.webp"
    imageAlt="Von KERN ausgeführte Aufstockung in Holzbauweise auf einem Bestandsgebäude in Finning"
  />
  <section className="competence-rail" aria-label="Abgestimmte Projektabwicklung"><span>Planung</span><span>Holzbau</span><span>Regionale Fachfirmen</span><span>Klare Zuständigkeiten</span></section>
  <section className="statement-section section-shell"><p className="section-label">Alles gut abgestimmt</p><div><h2>Ein Bauvorhaben.<br /><em>Ein klarer Ablauf.</em></h2><p className="lead">Wenn das Haus zu eng wird, wünschen Sie sich mehr Platz im vertrauten Zuhause. Wir klären, was der Bestand ermöglicht. Vor dem Start wissen Sie, welche Arbeiten wir übernehmen, welche Partner dazukommen und wie weit Ihr Projekt ausgebaut wird.</p><p>KERN begleitet geeignete Aufstockungen und Anbauten im Raum Landsberg am Lech, Kaufering, Penzing und am westlichen Ammersee. Johannes Kern verbindet dafür Zimmerermeister-Handwerk, Bautechnikerwissen, eigene 3D-CAD-Planung und die Ausführung in Holz.</p></div></section>
  <section className="room-stories section-shell" aria-label="Anbau und Aufstockung">
    <article className="room-story">
      <div className="room-story-image"><Image src="/images/kern-anbau-massivholz-ohne-personen-v2.webp" alt="Massivholzanbau von KERN bei der Montage" fill sizes="(max-width: 860px) 100vw, 48vw" unoptimized /></div>
      <div className="room-story-copy"><p className="section-label">Anbau</p><h2>Neue Räume<br /><em>auf einer Ebene.</em></h2><p>Eine großzügigere Küche, Wohnen mit Gartenbezug oder ein eigenes Büro: Ein Anbau schafft Platz dort, wo Sie ihn brauchen.</p><p>Holz ermöglicht flexible Grundrisse und große Öffnungen. Wir planen die Übergänge zum bestehenden Haus und stimmen die Architektur auf Ihre Wünsche ab.</p></div>
    </article>
    <article className="room-story room-story-reverse">
      <div className="room-story-image"><Image src="/images/finning-aufstockung-montage.webp" alt="Montage einer Holzaufstockung auf einem bestehenden Haus in Finning" fill sizes="(max-width: 860px) 100vw, 48vw" unoptimized /></div>
      <div className="room-story-copy"><p className="section-label">Aufstockung</p><h2>Mehr Wohnfläche<br /><em>über dem Bestand.</em></h2><p>Eine zusätzliche Etage nutzt den Platz über Ihrem Haus. Das vergleichsweise geringe Eigengewicht von Holz kann dabei ein Vorteil für die vorhandene Gebäudestruktur sein.</p><p>Viele Bauteile lassen sich vorfertigen. So kann die Montage zügig erfolgen und die Phase mit offenem Gebäude kurz gehalten werden. Was möglich ist, klären wir anhand des Bestands.</p></div>
    </article>
  </section>

  <section className="phase-section section-shell"><div><p className="section-label">Von der Idee zum Raum</p><h2>Planbar in<br />fünf Etappen.</h2></div><ol className="phase-track"><li><b>01</b><span>Bedarf & Potenzial</span></li><li><b>02</b><span>Bestand & Aufmaß</span></li><li><b>03</b><span>Entwurf & Eingabepläne</span></li><li><b>04</b><span>3D-Konstruktion & Details</span></li><li><b>05</b><span>Bau & abgestimmte Facharbeiten</span></li></ol></section>
  <section className="guide-teaser section-shell"><p className="section-label">Echte Aufstockung · Finning im Landkreis Landsberg</p><div><h2>Bestand geöffnet.<br /><em>Wohnraum erweitert.</em></h2><p>Die ausgeführte Aufstockung mit Gaube zeigt den entscheidenden Weg auf dem bestehenden Haus: Dach abschnittsweise öffnen, vorgefertigte Holzbauteile per Kran versetzen und neue Konstruktion sauber mit dem vorhandenen Tragwerk verbinden.</p><Link className="text-link" href="/projekte/aufstockung-finning-gaube">Aufstockung in Finning ansehen <ArrowMark /></Link></div></section>
  <section className="timber-story section-shell">
    <div className="timber-story-heading"><p className="section-label">Warum Holzbau</p><h2>Holzrahmenbau &amp; Gauben.<br /><em>Raum passend erweitern.</em></h2></div>
    <div className="timber-story-layout">
      <figure><div className="timber-story-image"><Image src="/images/altoettinger-aufstockung-gesamtansicht.webp" alt="Von KERN ausgeführtes Obergeschoss in Holzständerbauweise in Landsberg am Lech" fill sizes="(max-width: 860px) 100vw, 50vw" unoptimized /></div><figcaption>Holzständerbau von KERN · Landsberg am Lech</figcaption></figure>
      <div className="timber-story-copy"><article><h3>Alt und Neu müssen zusammenpassen.</h3><p>Im 3D-Modell klären wir die Höhen und Übergänge zum Haus. Wir prüfen, wie die zusätzlichen Lasten getragen werden und wie die Anschlüsse luftdicht und vor Feuchtigkeit geschützt bleiben.</p></article><article><h3>Mehr Möglichkeiten für Ihren Wohnraum.</h3><p>Holzrahmen, Dämmung und Fassade lassen sich auf die Nutzung und den Bestand abstimmen. Vorgefertigte Elemente können die Zeit auf der Baustelle reduzieren.</p></article><article><h3>Ein Baustoff mit natürlichem Charakter.</h3><p>Holz ist ein nachwachsender Baustoff. Sinnvoll eingesetzt und dauerhaft geschützt, verbindet es eine ressourcenschonende Materialwahl mit einer warmen Wohnatmosphäre. Passende Details und zuverlässiger Feuchteschutz sind dafür entscheidend.</p></article><Link className="text-link" href="/projekte/obergeschoss-holzstaenderbau-landsberg">Dieses Holzbauprojekt ansehen <ArrowMark /></Link></div>
    </div>
  </section>
  <FriendlyInquiry title="Sie wünschen sich mehr Platz?" copy="Ob Anbau oder zusätzliche Etage: Erzählen Sie uns, welcher Raum Ihnen fehlt. Eine erste Idee genügt – Johannes Kern meldet sich persönlich bei Ihnen." />
  <section className="guide-teaser section-shell"><p className="section-label">Genehmigung in Bayern</p><div><h2>Erst Baurecht klären.<br /><em>Dann sicher weiterplanen.</em></h2><p>Ob eine Aufstockung genehmigt werden kann, hängt unter anderem von Bebauungsplan, Abstandsflächen, Statik und dem konkreten Bestand ab. Unser Ratgeber ordnet den Weg zum Bauantrag verständlich ein.</p><Link className="text-link" href="/ratgeber/aufstockung-genehmigung-bayern">Genehmigung für Aufstockungen verstehen <ArrowMark /></Link><Link className="text-link" href="/ratgeber/aufstockung-holzbau-bestand">Was der Bestand für eine Aufstockung tragen muss</Link></div></section>
  <section className="guide-teaser section-shell"><p className="section-label">Ihr Weg zu mehr Wohnraum</p><div><h2>Die richtigen Fragen.<br /><em>Vor der Entscheidung.</em></h2><p>Was passt zum Grundstück und zum Alltag? Unsere Ratgeber führen durch die nächsten Entscheidungen.</p><p><Link className="text-link" href="/ratgeber/anbau-oder-aufstockung">Anbau oder Aufstockung vergleichen</Link></p><p><Link className="text-link" href="/ratgeber/anbau-holz-planen">Einen Holzanbau vorbereiten</Link></p><p><Link className="text-link" href="/ratgeber/anbau-ablauf">Anbau: vom Raumwunsch bis zum Einzug</Link></p><p><Link className="text-link" href="/ratgeber/aufstockung-ablauf">Aufstockung: Ablauf und Wohnen während des Umbaus</Link></p><p><Link className="text-link" href="/ratgeber/anbau-aufstockung-kosten">Das vollständige Budget einer Erweiterung</Link></p><p><Link className="text-link" href="/ratgeber/statik-bestand">Statik und vorhandenes Tragwerk klären</Link></p><p><Link className="text-link" href="/ratgeber/baugenehmigung-anbau-bayern">Genehmigungsweg für einen Anbau in Bayern</Link></p></div></section>
  <RelatedService title="Vorher sehen, wie Ihr Haus wächst." copy="Im 3D-Modell sehen Sie Proportionen und Raumwirkung, bevor gebaut wird. Entwurf, Pläne für den Bauantrag und genaue Ausführungspläne greifen ineinander." href="/planung-cad" linkLabel="3D-CAD & Eingabeplanung ansehen" />
  </SiteFrame>; }
