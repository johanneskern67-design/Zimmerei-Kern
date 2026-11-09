import { expandedGuides } from "../ratgeber/expanded-guides";
import { manufacturerGuides } from "../ratgeber/manufacturer-guides";
import { decisionGuides } from "../ratgeber/decision-guides";
const additionalGuides = [...expandedGuides, ...manufacturerGuides, ...decisionGuides];

export function GET() {
  const defaultLastModified = "2026-08-19";
  const lastModifiedByPath: Record<string, string> = {
    ...Object.fromEntries(additionalGuides.map((guide) => [guide.path.slice(1), guide.dateModified!])),
    "": "2026-11-09",
    dachsanierung: "2026-11-09",
    "dachsanierung-landsberg-am-lech": "2026-11-09",
    "zimmerei-landsberg-am-lech": "2026-11-08",
    einblasdaemmung: "2026-10-18",
    "anbau-aufstockung": "2026-11-09",
    "ratgeber/dachsanierung-photovoltaik": "2026-11-09",
    "ratgeber/statik-bestand": "2026-11-09",
    "ratgeber/braas-dachmodelle": "2026-11-09",
    "ratgeber/anbau-holz-planen": "2026-11-09",
    "planung-cad": "2026-11-08",
    projekte: "2026-09-15",
    "projekte/dachsanierung-grossaitingen-baujahr-1954": "2026-10-15",
    "projekte/dachsanierung-utting-turm": "2026-10-15",
    "projekte/dachsanierung-hausen-geltendorf": "2026-10-15",
    "projekte/dachsanierung-gaube": "2026-10-05",
    "projekte/obergeschoss-holzstaenderbau-landsberg": "2026-09-19",
    "projekte/aufstockung-finning-gaube": "2026-10-04",
    ratgeber: "2026-10-20",
    "ratgeber/dachfenster-erneuern-oder-behalten": "2026-10-20",
    "ratgeber/tageslicht-dachgeschoss": "2026-10-04",
    "ratgeber/holzfaserdaemmung-dachsanierung": "2026-11-09",
    "ratgeber/dachstuhl-erhalten": "2026-11-08",
    "ratgeber/aufstockung-holzbau-bestand": "2026-10-04",
    "ratgeber/oekologisch-sanieren": "2026-10-18",

    "ratgeber/dachsanierung": "2026-10-18",
    "ratgeber/dachsanierung-kosten-landsberg": "2026-11-08",
    "ratgeber/einblasdaemmung-altbau": "2026-10-18",
    "ratgeber/dachsanierung-bewohnt": "2026-10-20",
    "ratgeber/aufstockung-genehmigung-bayern": "2026-08-20",
    "ueber-kern": "2026-10-04",
    kontakt: "2026-10-16",
    ablauf: "2026-10-15",
  };
  const pages = [["", "1.0"], ["dachsanierung-landsberg-am-lech", "0.95"], ["zimmerei-landsberg-am-lech", "0.9"], ["dachsanierung", "0.9"], ["einblasdaemmung", "0.9"], ["anbau-aufstockung", "0.9"], ["planung-cad", "0.8"], ["projekte", "0.8"], ["projekte/dachsanierung-grossaitingen-baujahr-1954", "0.9"], ["projekte/dachsanierung-utting-turm", "0.9"], ["projekte/dachsanierung-hausen-geltendorf", "0.9"], ["projekte/dachsanierung-gaube", "0.8"], ["projekte/obergeschoss-holzstaenderbau-landsberg", "0.9"], ["projekte/aufstockung-finning-gaube", "0.9"], ["ueber-kern", "0.8"], ["ratgeber", "0.9"], ["ratgeber/dachsanierung", "0.8"], ["ratgeber/dachsanierung-kosten-landsberg", "0.8"], ["ratgeber/einblasdaemmung-altbau", "0.8"], ["ratgeber/dachsanierung-bewohnt", "0.8"], ["ratgeber/aufstockung-genehmigung-bayern", "0.8"], ["ratgeber/dachfenster-erneuern-oder-behalten", "0.8"], ["ratgeber/tageslicht-dachgeschoss", "0.8"], ["ratgeber/holzfaserdaemmung-dachsanierung", "0.8"], ["ratgeber/dachstuhl-erhalten", "0.8"], ["ratgeber/aufstockung-holzbau-bestand", "0.8"], ["ratgeber/oekologisch-sanieren", "0.8"], ["ablauf", "0.7"], ["kontakt", "0.8"]];
  pages.push(...additionalGuides.map((guide) => [guide.path.slice(1), "0.8"]));
  const pageImages: Record<string, string[]> = {
    ...Object.fromEntries(additionalGuides.map((guide) => [guide.path.slice(1), [guide.image.replace("/images/", "")]])),
    "ratgeber/dachfenster-erneuern-oder-behalten": ["utting-dachsanierung-dachfenster-pv-detail.webp"],
    "ratgeber/tageslicht-dachgeschoss": ["utting-dachsanierung-fertig.webp"],
    "ratgeber/holzfaserdaemmung-dachsanierung": ["hausen-dachsanierung-dachflaeche.jpg"],
    "ratgeber/dachstuhl-erhalten": ["utting-dachsanierung-turm-innen.webp"],
    "ratgeber/aufstockung-holzbau-bestand": ["finning-aufstockung-montage.webp"],
    "ratgeber/oekologisch-sanieren": ["kern-handwerk-bestand-detail.webp"],

    "": [
      "mix/kern-18.webp",
      "mix/kern-17.webp",
      "kern-hero-bestand-zukunft.webp",
      "kern-dachsanierung-fertig.webp",
      "kern-aufstockung-holzrahmen.webp",
      "kern-anbau-massivholz-ohne-personen-v2.webp",
      "kern-einblasdaemmung-vor-ort.webp",
      "utting-dachsanierung-neuer-dachstuhl.webp",
      "hausen-dachsanierung-fertig.jpg",
      "kern-dachsanierung-detail-fertig.webp",
      "grossaitingen-dachsanierung-fertig.webp",
    ],
    "zimmerei-landsberg-am-lech": [
      "altoettinger-aufstockung-gesamtansicht.webp",
      "altoettinger-aufstockung-montage.webp",
    ],
    ablauf: ["kern-handwerk-bestand-detail.webp"],
    dachsanierung: [
      "utting-dachsanierung-hero.webp",
      "kern-dachsanierung-historisches-tragwerk.webp",
      "grossaitingen-bestand.webp",
      "grossaitingen-aufdachdaemmung.webp",
      "grossaitingen-lattung.webp",
      "grossaitingen-eindeckung-fortschritt.webp",
      "grossaitingen-kamin-spengler.webp",
      "grossaitingen-dachsanierung-fertig.webp",
    ],
    "dachsanierung-landsberg-am-lech": [
      "utting-dachsanierung-neuer-dachstuhl.webp",
      "utting-dachsanierung-fertig.webp",
      "hausen-dachsanierung-gaube.jpg",
      "hausen-dachsanierung-dachflaeche.jpg",
      "hausen-dachsanierung-fertig.jpg",
    ],
    einblasdaemmung: [
      "kern-einblasdaemmung-holzstaenderwand-v2.webp",
      "kern-einblasdaemmung-vor-ort.webp",
    ],
    "anbau-aufstockung": [
      "finning-aufstockung-montage.webp",
      "kern-anbau-massivholz-ohne-personen-v2.webp",
    ],
    "planung-cad": [
      "kern-cad-komplexes-holzbaumodell.webp",
      "kern-dachausbau-wohnraum-aufgeraeumt-v2.webp",
    ],
    projekte: [
      "kern-projekte-dachausbau.webp",
      "grossaitingen-dachsanierung-fertig.webp",
      "utting-dachsanierung-neuer-dachstuhl.webp",
      "hausen-dachsanierung-fertig.jpg",
      "altoettinger-aufstockung-gesamtansicht.webp",
      "finning-aufstockung-montage.webp",
    ],
    "projekte/dachsanierung-grossaitingen-baujahr-1954": [
      "grossaitingen-bestand.webp",
      "grossaitingen-aufdachdaemmung.webp",
      "grossaitingen-lattung.webp",
      "grossaitingen-eindeckung-fortschritt.webp",
      "grossaitingen-kamin-spengler.webp",
      "grossaitingen-neue-ziegel.webp",
      "grossaitingen-dachsanierung-fertig.webp",
    ],
    "projekte/dachsanierung-utting-turm": [
      "utting-dachsanierung-rueckbau-ohne-personen.webp",
      "utting-dachsanierung-neuer-dachstuhl.webp",
      "utting-dachsanierung-turm-innen.webp",
      "utting-dachsanierung-fertig.webp",
    ],
    "projekte/dachsanierung-hausen-geltendorf": [
      "hausen-dachsanierung-gaube.jpg",
      "hausen-dachsanierung-dachflaeche.jpg",
      "hausen-dachsanierung-fertig.jpg",
    ],
    "projekte/dachsanierung-gaube": [
      "kern-dachsanierung-dachaufbau.webp",
      "kern-dachsanierung-detail-fertig.webp",
      "kern-dachsanierung-fertig.webp",
    ],
    "projekte/obergeschoss-holzstaenderbau-landsberg": [
      "altoettinger-aufstockung-cad.webp",
      "altoettinger-aufstockung-montage.webp",
      "altoettinger-aufstockung-innen.webp",
      "altoettinger-aufstockung-gesamtansicht.webp",
      "altoettinger-aufstockung-graue-schalung.webp",
    ],
    "projekte/aufstockung-finning-gaube": [
      "finning-aufstockung-bestand.webp",
      "finning-aufstockung-montage.webp",
      "finning-aufstockung-detail.webp",
    ],
    "ratgeber/dachsanierung": [
      "kern-dachsanierung-scheune.webp",
    ],
    "ratgeber/dachsanierung-kosten-landsberg": [
      "kern-dachsanierung-historisches-tragwerk.webp",
    ],
    "ratgeber/einblasdaemmung-altbau": [
      "kern-einblasdaemmung-holzstaenderwand-v2.webp",
    ],
    "ratgeber/dachsanierung-bewohnt": [
      "kern-dachsanierung-fertig.webp",
    ],
    "ratgeber/aufstockung-genehmigung-bayern": [
      "finning-aufstockung-montage.webp",
    ],
  };
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(([path, priority]) => `  <url>
    <loc>https://dachwerk-kern.de/${path}</loc>
    <lastmod>${lastModifiedByPath[path] ?? defaultLastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
${(pageImages[path] ?? []).map((image) => `    <image:image>
      <image:loc>https://dachwerk-kern.de/images/${image}</image:loc>
    </image:image>`).join("\n")}
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
