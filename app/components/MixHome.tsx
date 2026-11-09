import Image from "next/image";
import Link from "next/link";
import ArrowMark from "./ArrowMark";
import ServiceAreaCopy from "./ServiceAreaCopy";
import PlanningSequence from "./PlanningSequence";
import MixHomeEffects from "./MixHomeEffects";

const services = [
  {
    title: "Komplette Dachsanierung",
    copy: "Vom Tragwerk über Dämmung und Dachaufbau bis zur fertigen Eindeckung: Zimmerer- und Dachdeckerarbeiten komplett durch KERN.",
    image: "/images/kern-dachsanierung-fertig.webp",
    alt: "Von KERN fertig sanierter Dachstuhl mit neuer Gaube",
    href: "/dachsanierung-landsberg-am-lech",
  },
  {
    title: "Aufstockung & Wohnraumerweiterung",
    copy: "Neue Wohnfläche auf dem bestehenden Haus – in Holz gebaut. Nötige Facharbeiten stimmen wir vor dem Start gemeinsam mit Ihnen ab.",
    image: "/images/kern-aufstockung-holzrahmen.webp",
    alt: "Aufstockung in Holzrahmenbauweise durch KERN",
    href: "/anbau-aufstockung",
  },
  {
    title: "Holzbau & Anbauten",
    copy: "Mehr Platz am bestehenden Haus – präzise in Holz gebaut. Für weitere Arbeiten binden wir passende Fachfirmen aus der Region ein.",
    image: "/images/kern-anbau-massivholz-ohne-personen-v2.webp",
    alt: "Montage eines modernen Massivholzanbaus durch KERN",
    href: "/anbau-aufstockung",
  },
  {
    title: "Einblasdämmung",
    copy: "Auch unregelmäßige Hohlräume sorgfältig dämmen. Wir prüfen den Aufbau, wählen das passende Material und kontrollieren die eingebrachte Menge.",
    image: "/images/kern-einblasdaemmung-vor-ort.webp",
    alt: "Einblasdämmung wird von KERN vor Ort ausgeführt",
    href: "/einblasdaemmung",
  },
];

const process = [
  [
    "01",
    "Kennenlernen – eine erste Idee genügt",
    "Erzählen Sie uns, was Sie an Ihrem Haus verändern möchten. Für den Anfang reichen Ihr Vorhaben, der Ort und Ihre Kontaktdaten. Fotos und vorhandene Pläne helfen, sind aber keine Voraussetzung. Johannes Kern meldet sich persönlich und bespricht mit Ihnen den nächsten sinnvollen Schritt."
  ],
  [
    "02",
    "Bestandsaufnahme – verstehen, was Ihr Haus braucht",
    "Bevor wir eine Lösung festlegen, schauen wir uns den Bestand an. Wir prüfen Dachaufbau, sichtbare Bauteile und wichtige Anschlüsse. Gemeinsam klären wir, was erhalten werden kann und welche Fragen noch untersucht werden müssen. Den Umfang weiterer Prüfungen stimmen wir vorher mit Ihnen ab."
  ],
  [
    "03",
    "3D-Planung – die Veränderung gemeinsam durchdenken",
    "Im vereinbarten Planungsumfang machen wir Gauben, Dachumbauten oder Erweiterungen im eigenen 3D-Modell sichtbar. Wir besprechen Raumwirkung, Konstruktion und Anschlüsse und klären erforderliche Fachplanungen. Sie erfahren, welche Leistungen vorgesehen sind und worauf das Angebot beruht."
  ],
  [
    "04",
    "Ausführung – persönlich begleitet bis zur Abnahme",
    "Vor dem Start stimmen wir Bauablauf, Zugänge und Schutzmaßnahmen mit Ihnen ab. Während der Arbeiten bleibt Johannes Kern Ihr Ansprechpartner und bespricht notwendige Entscheidungen mit Ihnen. Zum Abschluss gehen wir die ausgeführten Leistungen gemeinsam durch."
  ]
];


export default function MixHome(){return <div className="mix-home"><MixHomeEffects />
<div className="mix-section-group" dangerouslySetInnerHTML={{__html:"<section class=\"n-world\" aria-labelledby=\"n-title\">\n  <div class=\"n-space\" aria-hidden=\"true\"><i class=\"n-orbit one\"></i><i class=\"n-orbit two\"></i><i class=\"n-axis\"></i></div>\n  <div class=\"n-hero-title\"><p class=\"n-micro\">Zimmerei KERN · Penzing-Ramsach · Raum Landsberg am Lech, Ammersee und Umgebung</p><h1 id=\"n-title\"><span class=\"n-morgen\">Ihr Zuhause bleibt.</span> <span class=\"n-zuhause\">Ihr Dach wird bereit für die Zukunft.</span></h1><p class=\"n-hero-intro\">Komplette Dachsanierung aus einer Hand: Wir stimmen Tragwerk, Dämmung und neue Eindeckung auf Ihr bestehendes Haus ab. Johannes Kern, Zimmerermeister und Bautechniker, begleitet Sie persönlich – von der ersten Beratung bis zur gemeinsamen Abnahme.</p></div>\n  <div class=\"n-world-image\"><img class=\"photo-asset photo-18\" src=\"/images/mix/kern-18.webp\" alt=\"KERN-Projekt in Utting: neuer Dachstuhl am Haus mit historischem Turm\" width=\"1280\" height=\"960\" loading=\"eager\" decoding=\"async\" fetchpriority=\"high\"><span class=\"mix-photo-label\">Utting · neuer Dachstuhl am erhaltenen Turm</span></div>\n  <div class=\"n-world-fragment\"><img class=\"photo-asset photo-17\" src=\"/images/mix/kern-17.webp\" alt=\"Das fertig gedeckte Dach in Utting\" width=\"1152\" height=\"864\" loading=\"lazy\" decoding=\"async\"><span>UTTING · DAS FERTIGE DACH</span></div>\n  \n  <div class=\"n-hero-bottom\"><a class=\"n-discover\" href=\"#dachgeschichte\"><span>Eine Dachsanierung erleben</span><b aria-hidden=\"true\">⟶</b></a><a class=\"n-project-cue\" href=\"/projekte/dachsanierung-utting-turm\">Ein echtes KERN-Projekt<br><span>Utting am Ammersee ↗</span></a></div>\n</section>\n\n\n<section class=\"n-story\" id=\"dachgeschichte\" aria-labelledby=\"n-transform-title\">\n<input class=\"visually-hidden-control\" type=\"radio\" name=\"n-bauphase\" id=\"n-phase-0\" checked aria-label=\"Bauphase: neuer Dachstuhl\">\n<input class=\"visually-hidden-control\" type=\"radio\" name=\"n-bauphase\" id=\"n-phase-1\" aria-label=\"Bauphase: fertige Dachdeckung\">\n<div class=\"n-story-shell\">\n  <div class=\"n-story-heading\"><div><p class=\"n-kicker\">01 / Eine Dachsanierung in Utting</p><h2 id=\"n-transform-title\">Ein Dach wird neu.<br><em>Sein Charakter bleibt.</em></h2></div><p>Vom neuen Dachstuhl bis zu den fertigen Ziegeln. Der historische Turm bleibt Teil des Hauses.</p></div>\n  <div class=\"n-portal\"><div class=\"n-portal-ring\" aria-hidden=\"true\"></div><div class=\"n-portal-photo\"><img class=\"photo-asset photo-18 n-phase-first\" src=\"/images/mix/kern-18.webp\" alt=\"Bauphase 1: neuer Dachstuhl am erhaltenen Turm in Utting\" width=\"1280\" height=\"960\" loading=\"lazy\" decoding=\"async\"><img class=\"photo-asset photo-17 n-phase-second\" src=\"/images/mix/kern-17.webp\" alt=\"Bauphase 2: fertig erneuerte Dachdeckung in Utting, aus einem anderen Blickwinkel\" width=\"1152\" height=\"864\" loading=\"lazy\" decoding=\"async\"></div><div class=\"n-portal-id\" aria-hidden=\"true\">UTTING<span>ECHTE BAUSTELLE. EIGENE AUFNAHMEN.</span></div></div>\n  <div class=\"n-story-footer\"><div class=\"n-story-caption\"><span class=\"n-caption-0\">01 / Neues Tragwerk. Vertrauter Turm.</span><span class=\"n-caption-1\">02 / Fertiges Dach. Erhaltener Charakter.</span><small>Zwei Bauphasen desselben Hauses · unterschiedliche Blickwinkel.</small></div><div class=\"n-phase-controls\" role=\"group\" aria-label=\"Bauphase auswählen\"><label for=\"n-phase-0\"><span>01</span> Dachstuhl</label><label for=\"n-phase-1\"><span>02</span> Fertiges Dach</label></div><div class=\"n-story-footnote\"><span class=\"n-auto-hint\">Bauphasen über die Bildauswahl entdecken.</span><a href=\"/projekte/dachsanierung-utting-turm\">Projekt im Detail <b aria-hidden=\"true\">⟶</b></a></div></div>\n  <div class=\"n-story-progress\" aria-hidden=\"true\"><span></span></div>\n</div></section>\n\n"}} />
          <div className="kh-project-grid kh-project-grid-complementary" data-kern-reveal>
            <Link href="/projekte/dachsanierung-hausen-geltendorf">
              <Image src="/images/hausen-dachsanierung-fertig.jpg" alt="Fertiggestellte Dachsanierung mit zwei Gauben in Hausen bei Geltendorf" fill sizes="(max-width: 900px) 100vw, 34vw" unoptimized />
              <span><small>Dachsanierung · Hausen bei Geltendorf</small>Zwei Gauben. Dachaufbau mit Holzfaser.</span>
            </Link>
            <Link href="/projekte/dachsanierung-grossaitingen-baujahr-1954">
              <Image src="/images/grossaitingen-dachsanierung-fertig.webp" alt="Fertig sanierter Dachstuhl mit neuen roten Dachziegeln in Großaitingen" fill sizes="(max-width: 900px) 100vw, 34vw" unoptimized />
              <span><small>Dachsanierung · Großaitingen</small>Haus von 1954. Dach vollständig erneuert.</span>
            </Link>
          </div>
<div className="mix-section-group" dangerouslySetInnerHTML={{__html:"\n<section class=\"n-human\" aria-labelledby=\"n-human-title\" data-mix-reveal=\"\">\n  <div class=\"n-section-head\"><p class=\"n-kicker\">02 / Ihr Haus verdient Vertrauen</p><span>Persönlich geplant. Handwerklich ausgeführt.</span></div>\n  <div class=\"n-human-grid\"><figure class=\"n-human-image\"><img class=\"photo-asset photo-14\" src=\"/images/mix/kern-14.webp\" alt=\"Handwerk im Bestand: historische Holzbalken und neue Dachkonstruktion\" width=\"1280\" height=\"960\" loading=\"lazy\" decoding=\"async\"><figcaption>Weiterbauen, mit Respekt vor dem, was da ist.</figcaption></figure><div class=\"n-human-copy\"><h2 id=\"n-human-title\"><span>Ihr Vorhaben.<br><em>Mein Handwerk.</em></span></h2><p>Ich bin Johannes Kern, Zimmerermeister und Bautechniker. Meine Zimmerei in Penzing-Ramsach ist Ihr Meisterbetrieb für Dachsanierung und Holzbau im Raum Landsberg am Lech, Ammersee und Umgebung. Vom ersten Gespräch bis zur Ausführung bin ich Ihr fester Ansprechpartner. Gemeinsam klären wir, was Ihr Haus braucht und was Ihnen wichtig ist.</p><div class=\"n-person\"><strong>Johannes Kern</strong><span>Zimmerermeister &amp; Bautechniker</span></div><div class=\"n-proof\"><span>Gegründet <b>2015</b></span><span>Meisterbetrieb seit <b>2019</b></span></div><a class=\"n-line-link\" href=\"/ueber-kern\">KERN kennenlernen <span aria-hidden=\"true\">⟶</span></a><details class=\"mix-personal-details\"><summary>Mehr über KERN und Ihr Dachprojekt</summary><p>Ein Dach, das Ihr Zuhause schützt und zu Ihrem Haus passt. KERN verbindet Tragwerk, Dämmung und neue Eindeckung – persönlich begleitet durch Johannes Kern, in Landsberg am Lech und Umgebung sowie im Ammersee-Gebiet.</p><p>Seit 2015 regional verwurzelt, seit 2019 Meisterbetrieb. Planung, Ausführung und Partnergewerke werden persönlich abgestimmt.</p></details></div></div>\n<div class=\"n-reviews\"><div><div class=\"n-review-score\"><strong>4,8 <small>/ 5</small></strong><span>auf Google<br>16 veröffentlichte Bewertungen</span></div><p class=\"n-review-source\">Google-Bewertungen · Bewertungsstand 16. Oktober 2026. 4,8 von 5 Sternen. <br><a href=\"https://www.google.com/maps?cid=8591618332635140753\" target=\"_blank\" rel=\"noopener noreferrer\">Google-Profil und aktuelle Bewertungen ⟶</a></p></div><div class=\"n-review-quotes\"><blockquote>„Zuverlässiger, sehr sauber arbeitender Betrieb – recht herzlichen Dank.“<cite>Google-Bewertung · August 2026 · gekürzt</cite></blockquote><blockquote>„Seit Jahren absolut kompetent, fachlich einwandfrei und termingerecht.“<cite>Google-Bewertung · August 2026 · gekürzt</cite></blockquote><details class=\"mix-more-reviews\"><summary>Weitere Kundenstimme lesen</summary><blockquote>„Alles perfekt – von der Erstberatung bis zur Umsetzung der Zimmererarbeiten für ein neues Dach im Denkmalschutz.“<cite>Google-Bewertung · August 2026 · gekürzt</cite></blockquote></details></div><details class=\"n-review-disclosure\"><summary>Quelle und Hinweise zu den Kundenstimmen</summary><p>Quelle: öffentliches Google-Unternehmensprofil. Die dargestellten Rezensionen wurden redaktionell gekürzt. KERN nimmt keine unabhängige Prüfung vor, ob Bewertende die Leistung tatsächlich genutzt haben.</p></details></div><div class=\"n-human-foot\"><p>Sie haben Ihr eigenes Dach vor Augen?<br>Eine erste Idee genügt.</p><a class=\"n-line-link\" href=\"/kontakt?projekt=Dachsanierung#projektanfrage\">Dachprojekt prüfen lassen <b aria-hidden=\"true\">⟶</b></a></div></section>\n\n\n<section class=\"n-manifest\" id=\"neue-perspektiven\" aria-labelledby=\"n-manifest-title\" data-mix-reveal=\"\">\n  <div class=\"n-section-head\"><p class=\"n-kicker\">03 / Im vertrauten Zuhause weiterdenken</p><span>Ihr Haus hat noch etwas vor.</span></div>\n  <h2 id=\"n-manifest-title\">Mehr Wohnraum.<br><em>Im eigenen Zuhause.</em></h2>\n  <div class=\"n-manifest-layout\">\n    <figure class=\"n-slice-photo\"><img class=\"photo-asset photo-9\" src=\"/images/mix/kern-9.webp\" alt=\"Massivholzanbau: Montage eines Holzbauteils mit dem Kran\" width=\"1280\" height=\"720\" loading=\"lazy\" decoding=\"async\"><figcaption>Anbau in Massivholz · KERN</figcaption></figure>\n    <div class=\"n-manifest-copy\"><p class=\"n-big-copy\">Ein Anbau oder eine zusätzliche Etage.</p><p>Mit einem Anbau aus Holz oder einer Aufstockung schaffen wir zusätzlichen Wohnraum neben Ihrem Haus oder auf dem bestehenden Gebäude. Wir stimmen die neue Holzkonstruktion auf den Bestand ab und begleiten Ihr Vorhaben von der Planung bis zur Ausführung.</p><a class=\"n-line-link\" href=\"/anbau-aufstockung\">Anbau &amp; Aufstockung ansehen <span aria-hidden=\"true\">⟶</span></a></div>\n    <figure class=\"n-cut-photo\"><img class=\"photo-asset photo-10\" src=\"/images/mix/kern-10.webp\" alt=\"Holzrahmenkonstruktion einer Aufstockung von KERN\" width=\"1280\" height=\"960\" loading=\"lazy\" decoding=\"async\"><figcaption>Mehr Raum beginnt mit einer Idee.</figcaption></figure>\n  </div>\n</section>\n\n\n<section class=\"n-capabilities\" aria-labelledby=\"n-cap-title\" data-mix-reveal=\"\">\n  <div class=\"n-section-head\"><p class=\"n-kicker\">04 / Dachsanierung ist unser Schwerpunkt</p><span>Unsere Leistungen im Überblick.</span></div>\n  <h2 id=\"n-cap-title\">Dach erneuern.<br><em>Raum schaffen. Dämmen.</em></h2>\n  <p class=\"n-service-note\">Dachstuhl sanieren, Dach dämmen und neu eindecken: Wir betrachten tragende Balken, Feuchteschutz und Anschlüsse gemeinsam. Neue Gauben und zusätzlichen Wohnraum planen wir bei Bedarf mit.</p><div class=\"n-service-orbit\">\n    <a class=\"n-service n-service-roof\" href=\"/dachsanierung\"><div class=\"n-service-img\"><img class=\"photo-asset photo-7\" src=\"/images/mix/kern-7.webp\" alt=\"Hausen: saniertes Dach mit zwei Gauben\" width=\"864\" height=\"1080\" loading=\"lazy\" decoding=\"async\"><span class=\"n-service-idx\">01 / ERNEUERN</span><span class=\"n-service-arrow\" aria-hidden=\"true\">⟶</span></div><h3>Dachsanierung<br><em>&amp; Dachausbau</em></h3><p>Dachstuhl erhalten oder erneuern, Dämmung und neue Eindeckung aufeinander abstimmen.</p></a>\n    <a class=\"n-service n-service-space\" href=\"/anbau-aufstockung\"><div class=\"n-service-img\"><img class=\"photo-asset photo-2\" src=\"/images/mix/kern-2.webp\" alt=\"Aufstockung in Holzrahmenbauweise in Finning\" width=\"1280\" height=\"960\" loading=\"lazy\" decoding=\"async\"><span class=\"n-service-idx\">02 / WEITERBAUEN</span><span class=\"n-service-arrow\" aria-hidden=\"true\">⟶</span></div><h3>Aufstockung<br><em>&amp; Anbau</em></h3><p>Zusätzlicher Wohnraum in Holzbauweise.</p></a>\n    <a class=\"n-service n-service-warm\" href=\"/einblasdaemmung\"><div class=\"n-service-img\"><img class=\"photo-asset photo-13\" src=\"/images/mix/kern-13.webp\" alt=\"Eingeblasene Dämmung in einer Holzständerwand\" width=\"1280\" height=\"853\" loading=\"lazy\" decoding=\"async\"><span class=\"n-service-idx\">03 / WOHLFÜHLEN</span><span class=\"n-service-arrow\" aria-hidden=\"true\">⟶</span></div><h3>Einblasdämmung</h3><p>Hohlräume in Dach, Wand und Decke passend dämmen.</p></a>\n    <div class=\"n-orbit-note\"><span class=\"n-note-star\" aria-hidden=\"true\">✳</span><p>Für Häuser, die<br>noch viel vorhaben.</p><a class=\"n-line-link\" href=\"/ablauf\">So gehen wir es an <span aria-hidden=\"true\">⟶</span></a></div>\n  </div>\n</section>\n\n\n<section class=\"n-blueprint\" aria-labelledby=\"n-blueprint-title\" data-mix-reveal=\"\">\n  <div class=\"n-blueprint-lines\" aria-hidden=\"true\"></div>\n  <div class=\"n-blueprint-copy\"><p class=\"n-kicker\">05 / Klarheit, bevor gebaut wird</p><h2 id=\"n-blueprint-title\">Ihr Umbau.<br><em>Vorab in 3D geplant.</em></h2><p>Wie wirkt die neue Gaube? Wie viel Platz entsteht? Im eigenen 3D-Modell sehen Sie Ihre Idee vorab. Wir planen die Maße und Anschlüsse, bevor gebaut wird.</p><a class=\"n-line-link\" href=\"/planung-cad\">3D-Planung ansehen <span aria-hidden=\"true\">⟶</span></a></div>\n  <a class=\"n-blueprint-model\" href=\"/planung-cad\"><img class=\"photo-asset photo-12\" src=\"/images/mix/kern-12.webp\" alt=\"Echte KERN-CAD-Abbildung eines geplanten Holztragwerks\" width=\"1206\" height=\"748\" loading=\"lazy\" decoding=\"async\"><span>KERN / EIGENE PLANUNG · MODELLABBILDUNG <b aria-hidden=\"true\">⟶</b></span></a>\n</section>\n\n\n"}} />
<PlanningSequence />
        <section id="kh-process" className="kh-process kh-shell" aria-labelledby="kh-process-title" data-kern-reveal>
          <header>
            <p className="kh-eyebrow">So arbeiten wir</p>
            <h2 id="kh-process-title">Ein klarer Weg.<br /><em>Vom Bestand zum Ergebnis.</em></h2>
            <div className="kh-process-image"><Image src="/images/kern-handwerk-bestand-detail.webp" alt="Handwerkliches Detail aus einer Dachsanierung von KERN" fill sizes="(max-width: 900px) 100vw, 40vw" unoptimized /></div>
          </header>
          <ol>
            {process.map(([number, title, copy]) => (
              <li key={number}>
                <b>{number}</b>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </section>
<div className="mix-section-group" dangerouslySetInnerHTML={{__html:"\n<section class=\"n-invitation\" aria-labelledby=\"n-invitation-title\" data-mix-reveal=\"\"><div class=\"n-invitation-orbit\" aria-hidden=\"true\"></div><p class=\"n-kicker\">Der nächste Schritt beginnt mit Ihrer Idee.</p><h2 id=\"n-invitation-title\">Ihr Dachprojekt.<br><em>Persönlich besprechen.</em></h2><div class=\"n-invitation-bottom\"><p>Was möchten Sie verändern?<br>Ein erster Gedanke genügt.</p><a class=\"n-start-project\" href=\"/kontakt?projekt=Dachsanierung#projektanfrage\">Dachprojekt prüfen lassen <b aria-hidden=\"true\">⟶</b></a><span>Persönlich an Johannes Kern.<br>Unverbindlich.</span></div><div class=\"n-next-steps\"><p><span>01 / Ihre Idee</span>Vorhaben, Ort und Kontaktdaten genügen.<br>Fotos und Pläne sind freiwillig.</p><p><span>02 / Persönliche Rückmeldung</span>Johannes Kern antwortet persönlich – in der Regel innerhalb von zwei Werktagen.</p><p><span>03 / Gemeinsam klären</span>Wir besprechen offene Fragen und den nächsten Schritt für Ihr Haus.</p></div><p class=\"n-request-assurance\">Mit einer Anfrage beauftragen Sie noch keine Arbeiten. <a href=\"/ablauf\">So läuft die Zusammenarbeit ab.</a></p><details class=\"mix-inquiry-details\"><summary>Was passiert nach Ihrer Anfrage?</summary><p>Ihre Anfrage geht direkt an Johannes Kern. Er prüft Ihre Angaben und meldet sich in der Regel innerhalb von zwei Werktagen per E-Mail oder mit dem gewünschten Rückruf. Gemeinsam klären wir den nächsten sinnvollen Schritt. Mit der Anfrage beauftragen Sie noch keine Sanierung.</p><p>Für den Anfang reichen Ihr Vorhaben, der Ort und Ihre Kontaktdaten. Fotos, Pläne und technische Dachangaben sind freiwillig.</p></details></section>\n"}} />        <details className="kh-depth customer-details">
          <summary>Alle Leistungen, Dachaufbau und Einsatzgebiet im Detail</summary>
        <section className="kh-services kh-shell" aria-labelledby="kh-services-title">
          <header className="kh-section-heading">
            <p className="kh-eyebrow">Unsere Leistungen</p>
            <h2 id="kh-services-title">
              Zimmerei für Landsberg<br />
              <em>und den Ammersee.</em>
            </h2>
            <p>
              Dachsanierung ist unser Schwerpunkt. Mehr Wohnraum und passende
              Dämmung denken wir bei Bedarf mit.
            </p>
          </header>
          <div className="kh-service-grid">
            {services.map((service, index) => (
              <Link className="kh-service" href={service.href} key={service.title}>
                <figure>
                  <Image src={service.image} alt={service.alt} fill sizes={index === 0 ? "(max-width: 650px) 100vw, 50vw" : "(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw"} unoptimized />
                </figure>
                <div>
                  {index === 0 ? <span className="kh-service-focus">Unser Schwerpunkt</span> : null}
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ArrowMark />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="kh-focus">
          <Image
            src="/images/kern-dachsanierung-waehrend-ohne-personen-v2.webp"
            alt="KERN saniert ein bestehendes Dachtragwerk"
            fill
            sizes="100vw"
            unoptimized
          />
          <div className="kh-focus-shade" />
          <span className="kh-photo-label">Echte Baustelle · Raum Landsberg am Lech</span>
          <div className="kh-focus-copy">
            <p className="kh-eyebrow">Dachsanierung mit System</p>
            <h2>
              Das Dach wird neu.<br />
              <em>Der Charakter bleibt.</em>
            </h2>
            <p>
              Sie möchten sich in Ihrem Haus wohlfühlen und wissen, dass das Dach
              gut vorbereitet erneuert wird. Deshalb betrachten wir Tragwerk,
              Feuchteschutz, Dämmung und Anschlüsse gemeinsam.
            </p>
            <p className="kh-focus-note">
              In Utting blieb der charakteristische Turm erhalten; in Hausen wurden zwei Gauben
              und Holzfaserdämmung in den Bestand eingebunden. Im Angebot machen wir
              nachvollziehbar, welche Lösung zu Ihrem Haus und Ihrem Budget passt.
            </p>
            <Link className="kh-text-link" href="/dachsanierung-landsberg-am-lech">
              Dachsanierung für Landsberg &amp; Umgebung ansehen <ArrowMark />
            </Link>
          </div>
        </section>

        <section className="region-band" aria-labelledby="region-title">
          <div>
            <p className="section-label">Regional verwurzelt</p>
            <h2 id="region-title">Unser Einsatzgebiet</h2>
          </div>
          <div>
            <ServiceAreaCopy />
            <div className="official-links kh-region-links">
              <Link className="kh-text-link kh-region-link" href="/dachsanierung-landsberg-am-lech">
                Dachsanierung in Landsberg <ArrowMark />
              </Link>
              <Link className="kh-text-link kh-region-link" href="/zimmerei-landsberg-am-lech">
                Zimmerei für Landsberg am Lech <ArrowMark />
              </Link>
            </div>
          </div>
        </section>
        </details>
</div>;}
