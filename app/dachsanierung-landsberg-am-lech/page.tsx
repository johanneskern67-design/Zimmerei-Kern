import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowMark from "../components/ArrowMark";
import ServiceAreaCopy from "../components/ServiceAreaCopy";
import { BreadcrumbStructuredData, FaqStructuredData, ServiceStructuredData } from "../components/StructuredData";
import { InlineInquiry, PageHero, SiteFrame } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Komplette Dachsanierung Landsberg am Lech | KERN" },
  description: "Komplette Dachsanierung in Landsberg am Lech: Tragwerk, Dämmung und Eindeckung, persönlich begleitet von Johannes Kern. Dachprojekt prüfen lassen.",
  alternates: { canonical: "/dachsanierung-landsberg-am-lech" },
  openGraph: {
    type: "website",
    siteName: "KERN Zimmerei & Holzbau",
    title: "Komplette Dachsanierung Landsberg am Lech | KERN",
    description: "Komplette Dachsanierung in Landsberg am Lech: Tragwerk, Dämmung und Eindeckung, persönlich begleitet von Johannes Kern. Dachprojekt prüfen lassen.",
    url: "/dachsanierung-landsberg-am-lech",
    images: [{
      url: "/images/utting-dachsanierung-neuer-dachstuhl.webp",
      width: 1536,
      height: 1152,
      alt: "Von KERN neu aufgebauter Dachstuhl bei einer kompletten Dachsanierung in Utting am Ammersee",
    }],
  },
};
metadata.twitter = { card: "summary_large_image", title: metadata.openGraph!.title, description: metadata.description!, images: ["/images/kern-social.webp"] };


const services = [
  ["Bestand erfassen", "Wir prüfen Dachfläche, tragende Balken, Anschlüsse und Feuchtespuren. Ihre spätere Nutzung planen wir von Anfang an mit."],
  ["Rückbau vorbereiten", "Gerüst, Wetterschutz, Rückbau und Materialwege werden vorab geplant. So können wir das bestehende Dach Schritt für Schritt öffnen."],
  ["Balken prüfen und verstärken", "Schadhafte oder zu schwache Bauteile werden gezielt ersetzt oder ergänzt. Neue Öffnungen und Gauben werden konstruktiv mitgedacht."],
  ["Dämmung abstimmen", "Wärmeschutz, Luftdichtheit und Feuchtesicherheit werden passend zum vorhandenen Aufbau und zur künftigen Nutzung entwickelt."],
  ["Dach neu aufbauen", "Unterdeckbahn, Konterlattung, Lattung und Eindeckung bilden einen durchgängigen, dauerhaft funktionierenden Dachaufbau."],
  ["Fachpartner abstimmen", "Erforderliche Leistungen wie Statik, Spenglerarbeiten und Dachfenster werden projektbezogen eingebunden und zentral abgestimmt."],
];

const faqs: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  {
    question: "Für welche Dachprojekte ist KERN der richtige Ansprechpartner?",
    answer: "KERN passt besonders zu kompletten oder umfangreichen Dachsanierungen an Bestandsgebäuden im Raum Landsberg am Lech, Kaufering, Penzing und am Ammersee. Typische Anlässe sind ein gealterter Dachaufbau, eine energetische Verbesserung, konstruktive Änderungen wie Gauben oder eine geplante Photovoltaikanlage, vor der der Dachbestand dauerhaft geklärt werden soll.",
  },
  {
    question: "Wie erhalte ich eine erste Einschätzung für mein Dach?",
    answer: "Schreiben Sie kurz, was Sie vorhaben und wo Ihr Haus steht. Kontaktdaten genügen für den Einstieg; Fotos, Pläne und Baujahr sind freiwillig. Johannes Kern meldet sich persönlich bei Ihnen.",
    link: { href: "/ablauf", label: "So läuft die Zusammenarbeit mit KERN ab" },
  },
  {
    question: "Ist KERN direkt in Landsberg am Lech ansässig?",
    answer: "KERN Zimmerei & Holzbau sitzt in Penzing-Ramsach, nahe Landsberg am Lech. Landsberg gehört zum regelmäßigen Einsatzgebiet; Bestandsaufnahme, Abstimmung und Baustellenbetreuung begleitet Johannes Kern persönlich.",
  },
  {
    question: "Übernimmt KERN eine Dachsanierung in Landsberg vollständig?",
    answer: "Ja. KERN führt die erforderlichen Zimmerer- und Dachdeckerarbeiten vom Tragwerk über Dämmung und Dachaufbau bis zur fertigen Eindeckung aus. Benötigte Fachleistungen wie Statik, Dachfenster oder Spenglerarbeiten werden projektbezogen eingebunden und zentral abgestimmt.",
    link: { href: "/dachsanierung", label: "Dachaufbau und Sanierungsarbeiten im Detail" },
  },
  {
    question: "Was kostet eine Dachsanierung in Landsberg am Lech?",
    answer: "Eine belastbare Summe hängt unter anderem von Dachfläche, Geometrie, Tragwerk, Dämmstandard, Gerüst, Anschlüssen, Dachfenstern und erst nach dem Öffnen sichtbaren Schäden ab. KERN ordnet deshalb zuerst Bestand und Leistungsumfang ein, statt mit einem pauschalen Quadratmeterpreis falsche Sicherheit zu geben.",
    link: { href: "/ratgeber/dachsanierung-kosten-landsberg", label: "Kostenfaktoren und Angebote richtig vergleichen" },
  },
  {
    question: "Kann eine energetische Dachsanierung gefördert werden?",
    answer: "Eine Förderung kommt je nach Maßnahme und geltendem Programm in Betracht. Ob Ihr Dachaufbau förderfähig ist, welche Zuschüsse möglich sind und welche Unterlagen benötigt werden, klären Sie projektbezogen mit einem zugelassenen Energieeffizienz-Experten. Maßgeblich sind die aktuellen amtlichen Förderbedingungen.",
  },
];

export default function DachsanierungLandsberg() {
  return (
    <SiteFrame>
      <ServiceStructuredData
        name="Dachsanierung in Landsberg am Lech"
        description="Komplette Dachsanierung mit Zimmerer- und Dachdeckerarbeiten durch KERN aus Penzing-Ramsach für Landsberg am Lech und den Landkreis."
        path="/dachsanierung-landsberg-am-lech"
        serviceType="Komplette und umfangreiche Dachsanierung im Bestand"
        audience="Eigentümer von Bestandsgebäuden im Raum Landsberg am Lech"
      />
      <FaqStructuredData items={faqs} />
      <BreadcrumbStructuredData items={[
        { name: "Startseite", path: "/" },
        { name: "Dachsanierung", path: "/dachsanierung" },
        { name: "Dachsanierung Landsberg am Lech", path: "/dachsanierung-landsberg-am-lech" },
      ]} />

      <PageHero
        eyebrow="Komplette Dachsanierung · Landsberg am Lech"
        title={<>Dachsanierung in Landsberg am Lech.<br /><em>Vollständig aus einer Hand.</em></>}
        shortDescription="Ihr Dach komplett erneuern. Mit einem festen Ansprechpartner aus Ramsach-Penzing – für Landsberg und das Ammersee-Gebiet."
        description="Es geht um Schutz, Substanz und den Wert Ihres Hauses. KERN übernimmt die komplette Dachsanierung vom kontrollierten Rückbau bis zur fertigen Eindeckung – persönlich geführt aus Penzing-Ramsach."
        code="LANDSBERG / DACH"
        image="/images/utting-dachsanierung-neuer-dachstuhl.webp"
        imageAlt="Von KERN neu aufgebauter Dachstuhl bei einer kompletten Dachsanierung in Utting am Ammersee"
        imagePosition="center 48%"
        imageDisclosure="Ausgeführtes KERN-Projekt · Utting am Ammersee"
      >

        <Link className="text-link" href="/projekte/dachsanierung-utting-turm">Ausgeführtes Dachprojekt ansehen <ArrowMark /></Link>
      </PageHero>

      <section className="competence-rail" aria-label="Dachsanierung von KERN im Raum Landsberg">
        <span><b>Standort</b>Penzing-Ramsach</span>
        <span><b>Region</b>Landkreis Landsberg am Lech</span>
        <span><b>Umfang</b>Komplettes Dach</span>
        <span><b>Führung</b>Persönlich durch KERN</span>
      </section>



      <section className="image-story">
        <div className="image-story-media">
          <Image
            src="/images/utting-dachsanierung-fertig.webp"
            alt="Fertig ausgeführte Dacheindeckung mit Dachfenstern am KERN-Projekt in Utting am Ammersee"
            fill
            sizes="(max-width: 900px) 100vw, 56vw"
            style={{ objectPosition: "center 35%" }}
            unoptimized
          />
        </div>
        <div className="image-story-copy">
          <p className="section-label">Echte Referenzen aus dem Einsatzgebiet</p>
          <h2>Vom Rückbau.<br /><em>Bis zum fertigen Dach.</em></h2>
          <p>Beim Projekt in Utting am Ammersee hat KERN den vorhandenen Dachaufbau zurückgebaut, die Holzkonstruktion rund um den Bestandsturm erneuert, Dachfenster integriert und die Dachdeckung vollständig ausgeführt.</p>
          <p>Eine zweite dokumentierte Dachsanierung in Hausen bei Geltendorf zeigt den aufgedoppelten Dachstuhl, zwei neue Gauben und einen Dachaufbau mit eingeblasener Holzfaserdämmung.</p>
          <div className="official-links" aria-label="Dokumentierte Dachsanierungen im Einsatzgebiet">
            <Link href="/projekte/dachsanierung-utting-turm">Dachsanierung in Utting ansehen <ArrowMark /></Link>
            <Link href="/projekte/dachsanierung-hausen-geltendorf">Dachsanierung in Hausen ansehen <ArrowMark /></Link>
          </div>
        </div>
      </section>

      <section className="guide-faq section-shell" id="fragen">
        <div><p className="section-label">Häufige Fragen</p><h2>Klarheit vor<br /><em>dem ersten Termin.</em></h2></div>
        <div>{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p>{item.link ? <p><Link className="text-link" href={item.link.href}>{item.link.label} <ArrowMark /></Link></p> : null}</details>)}</div>
      </section>

      <InlineInquiry
        eyebrow="Erste Einschätzung im Raum Landsberg"
        title="Sie denken über eine Dachsanierung nach?"
        copy="Auch wenn Ihre Ideen noch nicht ganz konkret sind: Schreiben Sie uns kurz, was Sie vorhaben. Johannes Kern meldet sich persönlich bei Ihnen."
        button="Kontakt aufnehmen"
        project="Dachsanierung"
      />

      <details className="roof-service-details customer-details"><summary>Leistungsumfang, Planung und Fachpartner im Detail</summary>
      <section className="statement-section section-shell">
        <p className="section-label">Dachsanierung im Bestand</p>
        <div>
          <h2>Mehr als neue Ziegel.<br /><em>Ein Dach als Gesamtsystem.</em></h2>
          <p className="lead">Unser Schwerpunkt sind komplette oder umfangreiche Dachsanierungen im Bestand. Ein altes Dach wirft viele Fragen auf: Was muss erneuert werden? Was lässt sich erhalten? Und wie passt die Sanierung zu Ihrem Budget? Wir betrachten Tragwerk, Feuchtigkeit, Dämmung und Nutzung gemeinsam, bevor wir den Aufbau festlegen.</p>
          <p>Johannes Kern verbindet Zimmerermeister-Handwerk, Bautechnikerwissen und eigene 3D-Planung. Sie besprechen Ihr Vorhaben mit dem Ansprechpartner, der auch die Ausführung begleitet. In Utting blieb der charakteristische Turm erhalten; in Hausen wurden zwei Gauben und Holzfaserdämmung in den vorhandenen Dachstuhl eingebunden. Erforderliche Fachpartner werden klar abgestimmt.</p>
          <Link className="text-link" href="/dachsanierung">Alle Arbeiten ansehen <ArrowMark /></Link>
        </div>
      </section>

      <section className="module-section section-shell">
        <div className="section-title-row">
          <p className="section-label">Leistungsumfang</p>
          <p>Vom ersten Aufmaß bis zur fertigen Eindeckung.</p>
        </div>
        <div className="module-grid">
          {services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      </details>

      <section className="statement-section section-shell" id="photovoltaik">
        <p className="section-label">Photovoltaik im Raum Landsberg geplant?</p>
        <div>
          <h2>Erst den Dachbestand klären.<br /><em>Dann dauerhaft montieren.</em></h2>
          <p className="lead">Eine neue PV-Anlage soll viele Jahre auf dem Dach bleiben. Deshalb lohnt es sich, Dachdeckung, Unterbau, Tragwerk und Dämmung vor der Montage gemeinsam einzuordnen.</p>
          <p>KERN prüft den vorhandenen Dachaufbau und klärt, ob eine Sanierung oder energetische Verbesserung sinnvoll vorgezogen werden sollte. So lässt sich vermeiden, dass Module für ohnehin absehbare Dacharbeiten erneut demontiert werden müssen.</p>
          <p className="technical-note"><strong>Klare Zuständigkeit:</strong> KERN übernimmt die erforderlichen Dacharbeiten. Planung, Montage und elektrischer Anschluss der Photovoltaikanlage bleiben beim beauftragten PV-Fachbetrieb; die Schnittstellen werden projektbezogen abgestimmt.</p>
          <Link className="text-link" href="/dachsanierung#photovoltaik">Was vor der PV-Montage wichtig ist <ArrowMark /></Link>
        </div>
      </section>

      <section className="region-band" aria-labelledby="roof-region-title">
        <div>
          <p className="section-label">Regional verwurzelt</p>
          <h2 id="roof-region-title">Unser Einsatzgebiet</h2>
        </div>
        <div>
          <ServiceAreaCopy />
          <Link className="text-link" href="/zimmerei-landsberg-am-lech">KERN im Raum Landsberg kennenlernen <ArrowMark /></Link>
        </div>
      </section>

      <section className="guide-teaser section-shell">
        <p className="section-label">Förderung projektbezogen prüfen</p>
        <div>
          <h2>Erst Förderweg klären.<br /><em>Dann verbindlich starten.</em></h2>
          <p>Bei einer energetischen Dachsanierung lohnt sich eine frühzeitige Prüfung der passenden Förderung. Ein zugelassener Energieeffizienz-Experte klärt Programm, technische Anforderungen, Antrag und zulässige Vertragsgestaltung für Ihr Gebäude. KERN stimmt den ausführbaren Dachaufbau darauf ab. Maßgeblich sind die aktuellen amtlichen Förderbedingungen; eine Förderzusage lässt sich aus dieser Website nicht ableiten.</p>
          <div className="official-links">
            <a href="https://www.energiewechsel.de/KAENEF/Navigation/DE/Service/FAQ/BEG/faq-beg.html" target="_blank" rel="noopener noreferrer">Aktuelle BEG-FAQ des Bundes <ArrowMark /></a>
            <Link href="/ratgeber/dachsanierung-kosten-landsberg">Kostenfaktoren im Raum Landsberg <ArrowMark /></Link>
          </div>
        </div>
      </section>






    </SiteFrame>
  );
}
