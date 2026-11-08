import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const publicRoutes = [
  "/",
  "/zimmerei-landsberg-am-lech",
  "/dachsanierung-landsberg-am-lech",
  "/dachsanierung",
  "/einblasdaemmung",
  "/anbau-aufstockung",
  "/planung-cad",
  "/projekte",
  "/projekte/dachsanierung-grossaitingen-baujahr-1954",
  "/projekte/dachsanierung-utting-turm",
  "/projekte/dachsanierung-hausen-geltendorf",
  "/projekte/dachsanierung-gaube",
  "/projekte/obergeschoss-holzstaenderbau-landsberg",
  "/projekte/aufstockung-finning-gaube",
  "/ueber-kern",
  "/ratgeber",
  "/ratgeber/dachsanierung",
  "/ratgeber/dachsanierung-kosten-landsberg",
  "/ratgeber/einblasdaemmung-altbau",
  "/ratgeber/dachsanierung-bewohnt",
  "/ratgeber/aufstockung-genehmigung-bayern",
  "/ratgeber/dachfenster-erneuern-oder-behalten",
  "/ratgeber/tageslicht-dachgeschoss",
  "/ratgeber/holzfaserdaemmung-dachsanierung",
  "/ratgeber/dachstuhl-erhalten",
  "/ratgeber/aufstockung-holzbau-bestand",
  "/ratgeber/oekologisch-sanieren",
  "/kontakt",
];

test("keeps the complete homepage heading readable on narrow mobile screens", async () => {
  const assetsUrl = new URL("../dist/client/assets/", import.meta.url);
  const cssFiles = (await readdir(assetsUrl)).filter((name) => name.endsWith(".css"));
  const css = (await Promise.all(cssFiles.map((name) => readFile(new URL(name, assetsUrl), "utf8")))).join("\n");

  assert.match(css, /\.kh-hero-copy h1>em\{white-space:nowrap;display:block\}/i);
  assert.match(css, /@media\s*\((?:max-width:650px|width<=650px)\)[\s\S]*?\.kh-hero-copy h1>em\{white-space:normal\}/i);
});

test("uses open text sections and continuous sequences across pages", async () => {
  const [globalCss, homeCss, home, roof, planning, insulation, projects, guide] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/home-redesign.css", import.meta.url), "utf8"),
    readFile(new URL("../app/components/MixHome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/dachsanierung/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/planung-cad/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/einblasdaemmung/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/projekte/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ratgeber/GuideTemplate.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(home, /className="kh-process kh-shell"/i);
  assert.match(homeCss, /\.kh-process ol\s*\{[\s\S]*?grid-template-columns:\s*1fr/i);
  assert.match(globalCss, /open text compositions/i);
  assert.match(globalCss, /\.phase-track,[\s\S]*?\.information-flow ol,[\s\S]*?\.guide-section-dark ol/i);
  assert.match(globalCss, /\.benefit-grid>div,[\s\S]*?\.planning-benefit-grid>div,[\s\S]*?\.guide-factors/i);
  assert.match(globalCss, /\.application-grid,[\s\S]*?\.principle-row/i);
  assert.doesNotMatch(globalCss, /counter-reset:kern-check/i);
  assert.doesNotMatch(globalCss, /content:counter\(kern-check/i);
  assert.match(roof, /className="phase-track"/i);
  assert.match(planning, /className="cad-intro/i);
  assert.match(planning, /className="planning-benefit-grid/i);
  assert.match(insulation, /className="benefit-grid"/i);
  assert.match(projects, /Eigene Baustellenbilder zeigen den Weg vom geöffneten Bestand/i);
  assert.match(guide, /className="guide-factors/i);
});

test("renders production metadata without development preview leakage", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /<title>Zimmerei KERN \| Dachsanierung Landsberg (?:&|&amp;) Ammersee<\/title>/i);
  assert.match(html, /Damit Ihr Zuhause[\s\S]*Zukunft hat/i);
  assert.match(html, /KERN Zimmerei (?:&|&amp;) Holzbau/i);
  assert.match(html, /Dachsanierung\./i);
  assert.match(html, /Landsberg (?:&|&amp;) Ammersee/i);
  assert.match(html, /in Landsberg am Lech und Umgebung/i);
  assert.match(html, /href=["']\/zimmerei-landsberg-am-lech["']/i);
  assert.match(
    html,
    /<a[^>]+href=["']#dachgeschichte["'][^>]*>[\s\S]*?Eine Dachsanierung[\s\S]*?<\/a>/i,
  );
  assert.match(html, /href=["']\/kontakt\?projekt=Dachsanierung#projektanfrage["'][^>]*>[\s\S]*?Dachprojekt prüfen lassen/i);
  const hero = html.match(/<section class="n-world"[\s\S]*?<\/section>/)?.[0] ?? "";
  assert.doesNotMatch(hero, /href="\/kontakt|Dachprojekt prüfen lassen|Dach-Check/i);
  assert.match(hero, /href="#dachgeschichte"[^>]*>[\s\S]*Eine Dachsanierung/i);
  assert.match(html, /<section class="n-story" id="dachgeschichte"/);
  assert.match(html, /href=["']\/projekte\/dachsanierung-hausen-geltendorf["']/i);
  assert.match(html, /Dachsanierung · Hausen bei Geltendorf/i);
  assert.match(html, /Zwei Gauben\. Dachaufbau mit Holzfaser\./i);
  assert.match(html, /4,8 von 5 Sternen/i);
  assert.match(html, /16 veröffentlichte Bewertungen/i);
  assert.match(html, /keine unabhängige Prüfung/i);
  assert.match(html, /https:\/\/www\.google\.com\/maps\?cid=8591618332635140753/i);
  assert.match(html, /08193 9988898/i);
  assert.match(html, /\/images\/logo-transparent\.png/i);
  assert.match(html, /"legalName":"Johannes Kern – Zimmerei (?:&|&amp;) Holzbau"/i);
  assert.match(html, /"@id":"https:\/\/dachwerk-kern\.de\/ueber-kern#johannes-kern"/i);
  assert.match(html, /"contentUrl":"https:\/\/dachwerk-kern\.de\/images\/kern-logo-square\.png"/i);
  assert.doesNotMatch(html, /firmeneintrag\.creditreform\.de/i);
  assert.match(html, /"subjectOf":\[\{"@id":"https:\/\/dachwerk-kern\.de\/projekte\/dachsanierung-utting-turm#article"/i);
  assert.match(html, /"areaServed":\[[^\]]*"name":"Kaufering"[^\]]*"name":"Penzing"[^\]]*Westliches Ammerseegebiet und umliegende Gemeinden/i);
  assert.match(html, /Ammersee-Gebiet/i);
});

test("keeps the regional roof-renovation strategy consistent", async () => {
  const [layout, structuredData, home, roof, landsberg, carpentry] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/StructuredData.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/dachsanierung/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/dachsanierung-landsberg-am-lech/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/zimmerei-landsberg-am-lech/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /serviceAreaStructured/i);
  assert.match(layout, /Komplette Dachsanierung im Bestand/i);
  assert.match(layout, /Dachfensterkoordination/i);
  assert.match(structuredData, /"@type": "Project"/i);
  assert.doesNotMatch(home, /25 Minuten Fahrzeit/i);
  assert.match(roof, /Direkt durch KERN/i);
  assert.match(roof, /Mit regionalen Fachpartnern/i);
  assert.match(roof, /href="\/ratgeber\/dachdaemmung-varianten"/i);
  assert.match(roof, /Dämmarten für den Dachaufbau vergleichen/i);
  assert.match(landsberg, /Ammersee/i);
  const serviceHero = landsberg.match(/<PageHero[\s\S]*?<\/PageHero>/)?.[0] ?? "";
  assert.doesNotMatch(serviceHero, /<InquiryLink/);
  assert.doesNotMatch(`${home}\n${landsberg}\n${layout}`, /Ammersee-Westufer/i);
  assert.doesNotMatch(carpentry, /25 Minuten Fahrzeit/i);
  assert.doesNotMatch(`${home}\n${roof}\n${landsberg}\n${carpentry}`, /30 bis 40 Kilometern/i);
});

test("keeps the homepage project image above the hero background and below its text", async () => {
  const css = await readFile(new URL("../app/home-redesign.css", import.meta.url), "utf8");

  assert.match(css, /\.kh-hero\s*>\s*img\s*\{[\s\S]*?z-index:\s*0;/i);
  assert.match(css, /\.kh-hero-shade\s*\{[\s\S]*?z-index:\s*1;/i);
  assert.match(css, /\.kh-hero-content\s*\{[\s\S]*?z-index:\s*2;/i);
});

test("does not emit broken runtime font requests", async () => {
  const [layout, css] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(layout, /next\/font/i);
  assert.match(css, /--font-geist-sans:Arial,Helvetica,sans-serif/i);
  assert.match(css, /--font-geist-mono:"Courier New",Courier,monospace/i);
});

test("keeps the project inquiry low-friction, durable before uploads, and anonymously measurable", async () => {
  const [form, inquiryApi, inquiryStatusApi, uploadApi, analyticsApi, privacyPage, analyticsClient, statisticsPage, ownerPage] = await Promise.all([
    readFile(new URL("../app/components/ProjectInquiryForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/api/inquiries/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/inquiries/[id]/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/upload/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/pageview/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/datenschutz/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/lib/anonymous-analytics.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/statistik/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/anfragen/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(form, /Wie sind Sie auf KERN aufmerksam geworden\?/i);
  assert.match(form, /Google-Search-Anzeige/i);
  assert.match(form, /defaultValue=\{validInitialSource\}/i);
  assert.match(inquiryApi, /const allowedSources = new Set\(\[[\s\S]*?"Google-Search-Anzeige"/i);
  assert.doesNotMatch(form, /<select name="quelle"\s+required/i);
  assert.match(form, /recordInquiryEvent\("inquiry_started"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_project_selected"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_details_completed"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_submit_attempted"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_saved"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_upload_failed"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_form_abandoned"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_upload_abandoned"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_completed"\)/i);
  assert.match(form, /recordInquiryEvent\("inquiry_submitted"\)/i);
  assert.match(form, /Schritt \{step\} von 2/i);
  assert.match(form, /Worum geht es\?/i);
  assert.match(form, /Wie dürfen wir antworten\?/i);
  assert.match(form, /Sie sehen vor dem Senden noch einmal eine Zusammenfassung/i);
  assert.match(form, /className="form-optional roof-optional"/i);
  assert.match(form, /Fotos oder Pläne mitschicken/i);
  assert.match(form, /className=\{`upload-panel upload-panel-visible/i);
  assert.doesNotMatch(form, /<details className="form-optional upload-optional"/i);
  assert.ok(form.indexOf('upload-panel upload-panel-visible') < form.indexOf('Weiter zu den Kontaktdaten'), "the attachment picker must stay directly visible in the project-details step");
  assert.match(form, /Die Anfrage funktioniert auch ohne Dateien/i);
  assert.match(form, /MAX_FILE_SIZE = 30 \* 1024 \* 1024/i);
  assert.match(form, /MAX_FILE_COUNT = 6/i);
  assert.match(form, /Ihre übrigen Formulareingaben bleiben erhalten/i);
  assert.match(form, /role="alert"/i);
  assert.match(form, /type="radio" name="kontaktweg" value="E-Mail bevorzugt"/i);
  assert.match(form, /type="radio" name="kontaktweg" value="Rückruf gewünscht"/i);
  assert.match(form, /Ihre Angaben sind in die Projektanfrage übernommen/i);
  assert.match(form, /CORE_SERVICE_AREA_POSTAL_PREFIXES = \["82", "86"\]/i);
  assert.match(form, /Ihr Ort scheint außerhalb dieses Kerngebiets zu liegen/i);
  assert.match(form, /Sie können die Anfrage trotzdem senden/i);
  assert.doesNotMatch(inquiryApi, /const required = \[[^\]]*"quelle"/i);
  assert.match(analyticsApi, /"inquiry_started"/i);
  assert.match(analyticsApi, /"inquiry_project_selected"/i);
  assert.match(analyticsApi, /"inquiry_details_completed"/i);
  assert.match(analyticsApi, /"inquiry_submit_attempted"/i);
  assert.match(analyticsApi, /"inquiry_save_failed"/i);
  assert.match(analyticsApi, /"inquiry_saved"/i);
  assert.match(analyticsApi, /"inquiry_upload_failed"/i);
  assert.match(analyticsApi, /"inquiry_form_abandoned"/i);
  assert.match(analyticsApi, /"inquiry_upload_abandoned"/i);
  assert.match(analyticsApi, /"inquiry_completed"/i);
  assert.match(analyticsApi, /"inquiry_submitted"/i);
  assert.match(analyticsApi, /"inquiry_cta_clicked"/i);
  assert.match(analyticsClient, /"inquiry_cta_clicked"/i);
  assert.match(analyticsApi, /oai-authenticated-user-email/i);
  assert.match(analyticsClient, /kern-analytics-excluded/i);
  assert.match(analyticsClient, /credentials:\s*"same-origin"/i);
  assert.match(statisticsPage, /CLEAN_MEASUREMENT_START/i);
  assert.match(statisticsPage, /Eigene und interne Testaufrufe/i);
  assert.match(statisticsPage, /Wo der Anfrageweg stockt/i);
  assert.match(statisticsPage, /Formular verlassen/i);
  assert.match(statisticsPage, /Upload abgebrochen/i);
  assert.match(statisticsPage, /Gesichert, nicht vollständig/i);
  assert.match(privacyPage, /Formulareingaben, Chattexte, Kontaktdaten, Dateinamen[\s\S]*?werden nicht in dieser Statistik gespeichert/i);
  assert.match(privacyPage, /Die freiwillige Reichweitenmessung bleibt bis zu Ihrer Zustimmung ausgeschaltet/i);
  assert.match(privacyPage, /gewählte Formularschritte/i);
  assert.match(privacyPage, /lokale Ausschlussmarkierung/i);
  assert.match(privacyPage, /__cf_bm/i);
  assert.match(form, /method="post"/i);
  assert.match(form, /action="\/api\/inquiries"/i);
  assert.match(form, /Das Online-Formular benötigt JavaScript/i);
  assert.match(form, /Content-Type": "application\/octet-stream"/i);
  assert.match(uploadApi, /request\.arrayBuffer\(\)/i);
  assert.match(uploadApi, /MAX_FILE_SIZE = 30 \* 1024 \* 1024/i);
  assert.ok(form.indexOf('fetch("/api/inquiries"') < form.indexOf("fetch(`/api/upload?"), "the inquiry must be stored before attachment uploads begin");
  assert.match(form, /expectedFileCount:\s*files\.length/i);
  assert.match(inquiryApi, /attachmentStatus:\s*expectedFileCount === 0 \? "keine"/i);
  assert.match(uploadApi, /attachFileToRecord/i);
  assert.match(uploadApi, /uploadId \|\| crypto\.randomUUID\(\)/i);
  assert.match(inquiryStatusApi, /export async function PATCH/i);
  assert.match(inquiryStatusApi, /"unvollstaendig"/i);
  assert.match(inquiryStatusApi, /kern-admin-attachments-/i);
  assert.match(inquiryStatusApi, /createAttachmentSummaryEmail/i);
  assert.match(inquiryStatusApi, /notification\.attachmentSummary = "gesendet"/i);
  assert.match(ownerPage, /Dateiübertragung offen/i);
  assert.match(ownerPage, /Anfrage gesichert/i);
  assert.match(privacyPage, /Kontaktdaten und Projektbeschreibung werden nach dem Absenden zuerst gesichert/i);
});

test("keeps extension and submission-planning claims within the stated scope", async () => {
  const [home, extensionPage, planningPage, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/anbau-aufstockung/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/planung-cad/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(`${home}\n${extensionPage}`, /Generalunternehmer|schlüsselfertig|bezugsfertig/i);
  assert.match(extensionPage, /Vor dem Start wissen Sie/i);
  assert.match(extensionPage, /welche Arbeiten wir übernehmen, welche Partner dazukommen und wie weit Ihr Projekt ausgebaut wird/i);
  assert.match(extensionPage, /Aufstockung\. Anbau/i);
  assert.match(extensionPage, /Raum für morgen/i);
  assert.match(extensionPage, /zusätzlicher Wohnraum zur Vermietung/i);
  assert.match(extensionPage, /Holz ist ein nachwachsender Baustoff/i);
  assert.match(extensionPage, /Sinnvoll eingesetzt und dauerhaft geschützt/i);
  assert.match(extensionPage, /ressourcenschonende Materialwahl/i);
  assert.match(extensionPage, /Raum Landsberg am Lech, Kaufering, Penzing und am westlichen Ammersee/i);
  assert.match(extensionPage, /Zimmerermeister-Handwerk, Bautechnikerwissen, eigene 3D-CAD-Planung und die Ausführung in Holz/i);
  assert.doesNotMatch(extensionPage, /Aufstockung einordnen|Anbau einordnen/i);
  assert.match(extensionPage, /<FriendlyInquiry title="Sie wünschen sich mehr Platz\?"/i);
  assert.doesNotMatch(extensionPage, /prüfen lassen/i);
  assert.match(extensionPage, /projekte\/aufstockung-finning-gaube/i);
  assert.match(extensionPage, /Echte Aufstockung · Finning im Landkreis Landsberg/i);
  assert.doesNotMatch(extensionPage, /Ausgeführte Referenz in Landsberg/i);
  assert.ok(extensionPage.indexOf("Warum Holzbau") < extensionPage.indexOf("Sie wünschen sich mehr Platz?"));
  assert.match(planningPage, /Art\. 61 Abs\. 3 BayBO/i);
  assert.match(planningPage, /Fachplaner oder Unterschriften/i);
  assert.doesNotMatch(layout, /Anbau und Aufstockung schlüsselfertig/i);
});

test("connects the about page to the KERN business and owner entities", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `entity-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/ueber-kern", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /"@type":"AboutPage"/i);
  assert.match(html, /"@id":"https:\/\/dachwerk-kern\.de\/#business"/i);
  assert.match(html, /"@id":"https:\/\/dachwerk-kern\.de\/ueber-kern#johannes-kern"/i);
  assert.match(html, /Johannes Kern · Inhaber/i);
  assert.match(html, /Juni 2015/i);
  assert.match(html, /August 2019/i);
  assert.match(html, /Penzing-Ramsach/i);
  assert.match(html, /anspruchsvolle[\s\S]*?Dachsanierungen/i);
  assert.match(html, /Warum KERN für anspruchsvolle/i);
  assert.match(html, /Zimmerermeister-Handwerk, Bautechnikerwissen und eigene 3D-CAD-Planung/i);
  assert.match(html, /Turm in Utting erhalten/i);
  assert.match(html, /Gauben und Holzfaserdämmung in Hausen/i);
  assert.match(html, /Haus von 1954 in Großaitingen/i);
  assert.match(html, /"hasCredential":\[\{"@type":"EducationalOccupationalCredential","name":"Zimmerermeister"/i);
});

test("connects the KERN business catalog to the four canonical service entities", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `service-catalog-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(match[1]));
  const graph = jsonLdBlocks.find((block) => Array.isArray(block["@graph"]))?.["@graph"] ?? [];
  const business = graph.find((item) => item["@id"] === "https://dachwerk-kern.de/#business");
  const offers = business?.hasOfferCatalog?.itemListElement ?? [];
  const services = [
    ["/dachsanierung", "Komplette Dachsanierung im Bestand"],
    ["/anbau-aufstockung", "Anbau und Aufstockung in Holzbauweise"],
    ["/einblasdaemmung", "Einblasdämmung"],
    ["/planung-cad", "3D-CAD-Konstruktion und Eingabeplanung"],
  ];

  assert.equal(response.status, 200);
  assert.equal(business?.geo?.["@type"], "GeoCoordinates");
  assert.equal(business?.geo?.latitude, 47.998);
  assert.equal(business?.geo?.longitude, 10.927);
  assert.equal(offers.length, services.length, "catalog must represent exactly the four visible core services");
  for (const [route, name] of services) {
    const canonicalUrl = `https://dachwerk-kern.de${route}`;
    const serviceId = `${canonicalUrl}#service`;
    const offer = offers.find((item) => item.itemOffered?.["@id"] === serviceId);
    assert.equal(offer?.url, canonicalUrl, `${route} needs its canonical offer URL`);
    assert.equal(offer?.itemOffered?.name, name, `${route} needs its visible service name`);

    const serviceResponse = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
    const serviceHtml = await serviceResponse.text();
    assert.equal(serviceResponse.status, 200, `${route} must render`);
    assert.match(serviceHtml, new RegExp(`\\"@id\\":\\"${serviceId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\"`), `${route} must expose the same service entity`);
    assert.match(serviceHtml, /\"provider\":\{\"@id\":\"https:\/\/dachwerk-kern\.de\/#business\"\}/i, `${route} must link back to KERN`);
  }
});

test("renders the local Landsberg landing page with indexable SEO signals", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `local-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/zimmerei-landsberg-am-lech", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /<title>Zimmerei Landsberg am Lech (?:&amp;|&) Ammersee \| KERN<\/title>/i);
  assert.match(html, /<link(?=[^>]*rel=["']canonical["'])(?=[^>]*href=["']https:\/\/dachwerk-kern\.de\/zimmerei-landsberg-am-lech["'])[^>]*>/i);
  assert.match(html, /Zimmerei für Landsberg/i);
  assert.match(html, /Landkreis Landsberg am Lech/i);
  assert.doesNotMatch(html, /25 Minuten Fahrzeit/i);
  assert.match(html, /Ammersee/i);
  assert.match(html, /Unser Einsatzgebiet/i);
  assert.match(html, /Warum ist KERN für eine anspruchsvolle Dachsanierung geeignet\?/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("keeps the core roof-renovation page focused on the complete service", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `roof-region-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/dachsanierung", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Dachsanierung im Bestand: Aufbau (?:&|&amp;) Ablauf \| KERN<\/title>/i);
  assert.match(html, /<h1[^>]*>[\s\S]*Dachsanierung im Bestand\.[\s\S]*Komplett durch KERN\.[\s\S]*<\/h1>/i);
  assert.match(html, /geschütztes, behagliches Zuhause/i);
  assert.match(html, /href=["']\/kontakt\?projekt=Dachsanierung#projektanfrage["']/i);
  assert.doesNotMatch(html, /Dach in Ruhe einordnen/i);
  assert.match(html, /Vom Tragwerk über Dämmung und Dachaufbau bis zur fertigen Eindeckung/i);
  assert.ok(html.indexOf("Was wir komplett abdecken") < html.indexOf("Sie denken über eine Dachsanierung nach?"));
  assert.match(html, /Wie lange dauert eine komplette Dachsanierung\?/i);
  assert.match(html, /mehrere Arbeitstage bis mehrere Wochen/i);
  assert.match(html, /Dachsanierung in Utting am Ammersee ansehen/i);
  assert.match(html, /Photovoltaik geplant\?/i);
  assert.match(html, /<section[^>]+id=["']photovoltaik["']/i);
  assert.match(html, /Erst das Dach klären/i);
  assert.doesNotMatch(html, /Dach vor Photovoltaik prüfen lassen/i);
  assert.match(html, /Photovoltaikanlage bleiben beim beauftragten PV-Fachbetrieb/i);
  assert.ok(html.indexOf("Projektphasen") < html.indexOf("Photovoltaik geplant?"), "the PV inquiry occasion must follow service and process information");
  assert.equal((html.match(/class="friendly-inquiry /g) ?? []).length, 1);
});

test("offers a clear, correctly preselected inquiry path alongside service and project proof", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `inquiry-path-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const roofResponse = await worker.fetch(new Request("http://localhost/dachsanierung", { headers: { accept: "text/html" } }), env, ctx);
  const roofHtml = await roofResponse.text();
  assert.equal(roofResponse.status, 200);
  assert.match(roofHtml, /Sie denken über eine Dachsanierung nach\?/i);
  assert.match(roofHtml, /Dachprojekt prüfen lassen/i);
  assert.match(roofHtml, /Eine erste Idee genügt/i);
  assert.match(roofHtml, /Dachprojekt prüfen lassen/i);
  assert.ok(roofHtml.indexOf("Vollständige Dachsanierung ansehen") < roofHtml.indexOf("Sie denken über eine Dachsanierung nach?"));

  const projectsResponse = await worker.fetch(new Request("http://localhost/projekte", { headers: { accept: "text/html" } }), env, ctx);
  const projectsHtml = await projectsResponse.text();
  assert.equal(projectsResponse.status, 200);
  assert.match(projectsHtml, /Sie planen etwas Vergleichbares\?/i);
  assert.match(projectsHtml, /href=["']\/kontakt#projektanfrage["']/i);
  assert.ok(projectsHtml.indexOf("Haus von 1954") < projectsHtml.indexOf("Sie planen etwas Vergleichbares?"));

  const extensionResponse = await worker.fetch(new Request("http://localhost/projekte/obergeschoss-holzstaenderbau-landsberg", { headers: { accept: "text/html" } }), env, ctx);
  const extensionHtml = await extensionResponse.text();
  assert.equal(extensionResponse.status, 200);
  assert.match(extensionHtml, /Johannes Kern meldet sich persönlich bei Ihnen/i);
  assert.match(extensionHtml, /Planen Sie ein leichtes Obergeschoss aus Holz\?/i);
  assert.match(extensionHtml, /href=["']\/kontakt#projektanfrage["']/i);
  assert.doesNotMatch(extensionHtml, /Ihre Aufstockung|projekt=Aufstockung/i);
});

test("renders the Landsberg roof-renovation landing page with distinct local SEO signals", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `local-roof-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/dachsanierung-landsberg-am-lech", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Dachsanierung Landsberg am Lech \| KERN Meisterbetrieb<\/title>/i);
  assert.match(html, /<link(?=[^>]*rel=["']canonical["'])(?=[^>]*href=["']https:\/\/dachwerk-kern\.de\/dachsanierung-landsberg-am-lech["'])[^>]*>/i);
  assert.match(html, /<h1[^>]*>[\s\S]*Dachsanierung in Landsberg am Lech\.[\s\S]*Vollständig aus einer Hand\.[\s\S]*<\/h1>/i);
  assert.match(html, /Schutz, Substanz und den Wert Ihres Hauses/i);
  assert.match(html, /Für welche Dachprojekte/i);
  assert.match(html, /komplette oder umfangreiche Dachsanierungen/i);
  assert.match(html, /Wie erhalte ich eine erste Einschätzung für mein Dach\?/i);
  assert.doesNotMatch(html, /kurze[nr]? Wege/i);
  assert.match(html, /"serviceType":"Komplette und umfangreiche Dachsanierung im Bestand"/i);
  assert.match(html, /"audienceType":"Eigentümer von Bestandsgebäuden im Raum Landsberg am Lech"/i);
  assert.match(html, /"mainEntityOfPage":\{"@type":"WebPage","@id":"https:\/\/dachwerk-kern\.de\/dachsanierung-landsberg-am-lech"\}/i);
  assert.match(html, /href=["']\/kontakt\?projekt=Dachsanierung#projektanfrage["']/i);
  const localRoofSource = await readFile(new URL("../app/dachsanierung-landsberg-am-lech/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(localRoofSource, /<RoofInquiryAction \/>/i);
  assert.doesNotMatch(html, /Dach in Ruhe einordnen/i);
  assert.match(html, /Dachprojekt prüfen lassen/i);
  assert.ok(html.indexOf("Leistungsumfang") < html.indexOf("Sie denken über eine Dachsanierung nach?"));
  assert.match(html, /Ausgeführtes KERN-Projekt · Utting am Ammersee/i);
  assert.match(html, /Echte Referenzen aus dem Einsatzgebiet/i);
  assert.match(html, /aufgedoppelten Dachstuhl, zwei neue Gauben/i);
  assert.match(html, /href=["']\/projekte\/dachsanierung-hausen-geltendorf["']/i);
  assert.match(html, /<section[^>]+id=["']photovoltaik["']/i);
  assert.match(html, /Erst den Dachbestand klären/i);
  assert.match(html, /href=["']\/dachsanierung#photovoltaik["']/i);
  assert.ok(html.indexOf("Echte Referenzen aus dem Einsatzgebiet") < html.indexOf("Sie denken über eine Dachsanierung nach?"));
  assert.match(html, /Unser Einsatzgebiet/i);
  assert.match(html, /Förderung projektbezogen prüfen/i);
  assert.doesNotMatch(html, /Mindestinvestitionsvolumen von 30.000 Euro/i);
  assert.doesNotMatch(html, /21\. Juli 2026/i);
  assert.doesNotMatch(html, /noindex/i);

  const guideResponse = await worker.fetch(
    new Request("http://localhost/ratgeber/dachsanierung-kosten-landsberg", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const guideHtml = await guideResponse.text();

  assert.equal(guideResponse.status, 200);
  assert.match(guideHtml, /href=["']\/dachsanierung-landsberg-am-lech["'][^>]*>Dachsanierung in Landsberg: Leistungen und Referenzen/i);
  assert.doesNotMatch(guideHtml, /href=["']\/dachsanierung["'][^>]*>Unsere Dachsanierung ansehen/i);
  assert.match(guideHtml, /"dateModified":"2026-11-08"/i);
});

test("supports the core roof-renovation page with contextual project and guide links", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `roof-links-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const sources = [
    ["/projekte/dachsanierung-utting-turm", /Komplette Dachsanierung von KERN/i],
    ["/projekte/dachsanierung-gaube", /Komplette Dachsanierung im Bestand/i],
    ["/ratgeber/dachsanierung", /Dachsanierung von KERN ansehen/i],
  ];

  for (const [route, anchorText] of sources) {
    const response = await worker.fetch(
      new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, new RegExp(`<a[^>]+href=["']\\/dachsanierung["'][^>]*>[\\s\\S]*?${anchorText.source}[\\s\\S]*?<\\/a>`, "i"));
  }
});

test("names the approved service area and visible localities without driving times", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `service-area-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const routes = ["/", "/dachsanierung", "/dachsanierung-landsberg-am-lech", "/zimmerei-landsberg-am-lech", "/kontakt"];

  for (const route of routes) {
    const response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} must render`);
    assert.match(html, /Landsberg/i, `${route} must name Landsberg`);
    assert.match(html, /Ammersee/i, `${route} must name the Ammersee area`);
    assert.doesNotMatch(html, /Ammersee-Westufer/i, `${route} must describe the area naturally`);
    assert.doesNotMatch(html, /25 Minuten|25 Fahrminuten/i, `${route} must use the natural regional service area`);
    assert.doesNotMatch(html, /30 bis 40 Kilometern|30 Fahrminuten|30-Minuten/i, `${route} must not reintroduce a former radius`);
    if (route !== "/kontakt") {
      assert.match(html, /Unser Einsatzgebiet/i);
      assert.match(html, /Raum Landsberg am Lech, Kaufering und Penzing sowie im westlichen Ammerseegebiet und in umliegenden Gemeinden/i);
      const visible = html.replace(/<script[\s\S]*?<\/script>/gi, "");
      assert.match(visible, /Eresing, Hurlach, Igling, Weil, Scheuring und Egling/i);
    }
  }

  const rootResponse = await worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), env, ctx);
  const rootHtml = await rootResponse.text();
  assert.match(rootHtml, /"areaServed":\[[^\]]*"name":"Kaufering"[^\]]*"name":"Penzing"[^\]]*Westliches Ammerseegebiet und umliegende Gemeinden/i);
  assert.match(rootHtml, /href=["']\/projekte\/dachsanierung-utting-turm["']/i);
  assert.match(rootHtml, /href=["']\/projekte\/dachsanierung-hausen-geltendorf["']/i);
});

test("supports the regional Landsberg page with contextual local links", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `local-links-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const sources = [
    ["/", /Zimmerei für Landsberg am Lech/i],
    ["/dachsanierung", /Zimmerei für Landsberg am Lech/i],
    ["/ueber-kern", /KERN im Raum Landsberg kennenlernen/i],
    ["/projekte/obergeschoss-holzstaenderbau-landsberg", /Leistungen von KERN im Raum Landsberg/i],
  ];

  for (const [route, anchorText] of sources) {
    const response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} must render`);
    assert.match(html, new RegExp(`<a[^>]+href=["']\\/zimmerei-landsberg-am-lech["'][^>]*>[\\s\\S]*?${anchorText.source}[\\s\\S]*?<\\/a>`, "i"));
  }
});

test("supports the Landsberg roof page with contextual internal links", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `local-roof-links-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const sources = [
    ["/", /Dachsanierung in Landsberg/i],
    ["/dachsanierung", /Dachsanierung in Landsberg am Lech/i],
    ["/zimmerei-landsberg-am-lech", /Dachsanierung für Landsberg im Detail/i],
    ["/projekte/dachsanierung-utting-turm", /Dachsanierung für Landsberg am Lech/i],
    ["/projekte/dachsanierung-hausen-geltendorf", /Dachsanierung für Landsberg am Lech und Umgebung/i],
    ["/projekte/dachsanierung-grossaitingen-baujahr-1954", /Dachsanierung für Landsberg und das Ammersee-Gebiet/i],
  ];

  for (const [route, anchorText] of sources) {
    const response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} must render`);
    assert.match(html, new RegExp(`<a[^>]+href=["']\\/dachsanierung-landsberg-am-lech["'][^>]*>[\\s\\S]*?${anchorText.source}[\\s\\S]*?<\\/a>`, "i"));
  }
});

test("keeps the homepage's two strongest roof paths on the Landsberg service page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `homepage-roof-paths-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<a(?=[^>]*class=["'][^"']*kh-service)(?=[^>]*href=["']\/dachsanierung-landsberg-am-lech["'])[^>]*>[\s\S]*?Komplette Dachsanierung[\s\S]*?<\/a>/i);
  assert.match(html, /<a(?=[^>]*class=["'][^"']*kh-text-link)(?=[^>]*href=["']\/dachsanierung-landsberg-am-lech["'])[^>]*>[\s\S]*?Dachsanierung für Landsberg (?:&amp;|&) Umgebung ansehen[\s\S]*?<\/a>/i);
});

test("all public sitemap pages expose complete indexable metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `audit-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  for (const route of publicRoutes) {
    const response = await worker.fetch(
      new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    const html = await response.text();
    const h1Count = html.match(/<h1\b/gi)?.length ?? 0;

    assert.equal(response.status, 200, `${route} must return 200`);
    assert.match(html, /<title>[^<]{10,}<\/title>/i, `${route} needs a descriptive title`);
    assert.match(html, /<meta(?=[^>]*\bname=["']description["'])(?=[^>]*\bcontent=["'][^"']{80,}["'])[^>]*>/i, `${route} needs a useful meta description`);
    assert.match(html, /<link(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']https:\/\/dachwerk-kern\.de\/[^"']*["'])[^>]*>/i, `${route} needs a production canonical`);
    const ogTitle = html.match(/<meta property="og:title" content="([^"]+)"/)?.[1];
    const twitterTitle = html.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1];
    const ogDescription = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1];
    const twitterDescription = html.match(/<meta name="twitter:description" content="([^"]+)"/)?.[1];
    assert.ok(ogTitle, `${route} needs a share title`);
    assert.equal(twitterTitle, ogTitle, `${route} must share its own topic on both card formats`);
    assert.equal(twitterDescription, ogDescription, `${route} must share its own description`);
    if (route !== "/") {
      assert.doesNotMatch(ogTitle, /^KERN Zimmerei (?:&|&amp;) Holzbau \| Dachsanierung Landsberg/, `${route} must not inherit the generic homepage preview`);
    }
    assert.equal(h1Count, 1, `${route} must contain exactly one h1`);
    assert.doesNotMatch(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex)/i, `${route} must remain indexable`);
  }
});

test("keeps visible and structured article dates accurate on every guide and project article", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `article-dates-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const articles = [
    ["/ratgeber/dachfenster-erneuern-oder-behalten", "2026-10-04", "2026-10-20"],
    ["/ratgeber/tageslicht-dachgeschoss", "2026-10-04", "2026-10-04"],
    ["/ratgeber/holzfaserdaemmung-dachsanierung", "2026-10-04", "2026-10-20"],
    ["/ratgeber/dachstuhl-erhalten", "2026-10-04", "2026-11-08"],
    ["/ratgeber/aufstockung-holzbau-bestand", "2026-10-04", "2026-10-04"],
    ["/ratgeber/oekologisch-sanieren", "2026-10-04", "2026-10-18"],
    ["/ratgeber/dachsanierung", "2026-08-16", "2026-10-18"],
    ["/ratgeber/dachsanierung-kosten-landsberg", "2026-08-18", "2026-11-08"],
    ["/ratgeber/einblasdaemmung-altbau", "2026-08-18", "2026-10-18"],
    ["/ratgeber/dachsanierung-bewohnt", "2026-08-18", "2026-10-20"],
    ["/ratgeber/aufstockung-genehmigung-bayern", "2026-08-18", "2026-08-20"],
    ["/ratgeber/dachdaemmung-varianten", "2026-10-18", "2026-11-04"],
    ["/projekte/dachsanierung-utting-turm", "2026-08-19", "2026-10-15"],
    ["/projekte/dachsanierung-hausen-geltendorf", "2026-09-03", "2026-10-15"],
    ["/projekte/dachsanierung-gaube", "2026-08-19", "2026-08-20"],
    ["/projekte/obergeschoss-holzstaenderbau-landsberg", "2026-08-19", "2026-09-19"],
    ["/projekte/aufstockung-finning-gaube", "2026-08-19", "2026-10-04"],
    ["/projekte/dachsanierung-grossaitingen-baujahr-1954", "2026-09-14", "2026-10-15"],
  ];

  for (const [route, published, modified] of articles) {
    const response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} must render`);
    assert.match(html, /Fachlich verantwortlich[\s\S]*?Johannes Kern · Zimmerermeister (?:&|&amp;) Bautechniker/i, `${route} needs a visible expert byline`);
    assert.match(html, /href=["']\/ueber-kern#johannes-kern["']/i, `${route} needs to link its expert attribution`);
    assert.match(html, new RegExp(`\\"@id\\":\\"https:\\/\\/dachwerk-kern\\.de${route.replaceAll("/", "\\/")}#article\\"`), `${route} needs a stable article entity`);
    assert.match(html, /"isPartOf":\{"@id":"https:\/\/dachwerk-kern\.de\/#website"\}/i, `${route} needs to belong to the KERN website entity`);
    assert.match(html, new RegExp(`\\"datePublished\\":\\"${published}\\"`), `${route} must expose its true publication date`);
    assert.match(html, new RegExp(`\\"dateModified\\":\\"${modified}\\"`), `${route} must expose its true modification date`);
    assert.match(html, new RegExp(`<time[^>]+dateTime=\\"${published}\\"`, "i"), `${route} must show its publication date visibly`);
    if (modified !== published) {
      assert.match(html, new RegExp(`<time[^>]+dateTime=\\"${modified}\\"`, "i"), `${route} must show its update date visibly`);
    }
  }
});

test("answers the Altbau insulation comparison directly with visible expert sources", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `insulation-answer-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/ratgeber/dachdaemmung-varianten", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Dachdämmung im Altbau: Auf-, Zwischen- oder Untersparrendämmung\?/i);
  assert.match(html, /Kurzantwort: Der Bestand entscheidet über die Dämmart/i);
  assert.match(html, /Eine pauschal beste Variante gibt es deshalb nicht/i);
  assert.match(html, /verbraucherzentrale\.de/i);
  assert.match(html, /fnr\.de\/fileadmin\/Mediathek\/662\/Broschuere_Altbausanierung_2024\.pdf/i);
});

test("marks up only confirmed project locations in Article data", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `project-locations-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const confirmedProjects = [
    ["/projekte/dachsanierung-utting-turm", "Utting am Ammersee"],
    ["/projekte/dachsanierung-hausen-geltendorf", "Hausen bei Geltendorf"],
    ["/projekte/aufstockung-finning-gaube", "Finning"],
    ["/projekte/obergeschoss-holzstaenderbau-landsberg", "Landsberg am Lech"],
    ["/projekte/dachsanierung-grossaitingen-baujahr-1954", "Großaitingen"],
  ];

  for (const [route, place] of confirmedProjects) {
    const response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} must render`);
    assert.match(html, new RegExp(`\\"contentLocation\\":\\{\\"@type\\":\\"Place\\",\\"name\\":\\"${place}\\"\\}`), `${route} must expose its visible project place`);
    assert.match(html, new RegExp(`<dt>Ort<\\/dt><dd>${place}<\\/dd>`, "i"), `${route} must show the same place to readers`);
  }

  const unconfirmedResponse = await worker.fetch(new Request("http://localhost/projekte/dachsanierung-gaube", { headers: { accept: "text/html" } }), env, ctx);
  const unconfirmedHtml = await unconfirmedResponse.text();
  assert.doesNotMatch(unconfirmedHtml, /\\"contentLocation\\"/i, "project without a confirmed visible place must not invent one");
});

test("separates documented references from linked work situations without dead ends", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `project-proof-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/projekte", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Ausführlich dokumentierte Referenzen/i);
  assert.match(html, /Weitere echte Arbeitssituationen/i);
  const expectedLinks = [
    ["/projekte/dachsanierung-grossaitingen-baujahr-1954", "Dachsanierung in Großaitingen ansehen"],
    ["/projekte/dachsanierung-utting-turm", "Dachsanierung in Utting ansehen"],
    ["/projekte/dachsanierung-hausen-geltendorf", "Dachsanierung in Hausen ansehen"],
    ["/projekte/dachsanierung-gaube", "Dachsanierung mit Gaube ansehen"],
    ["/projekte/obergeschoss-holzstaenderbau-landsberg", "Obergeschoss in Holzständerbauweise ansehen"],
    ["/projekte/aufstockung-finning-gaube", "Aufstockung in Finning ansehen"],
    ["/anbau-aufstockung", "Anbau (?:&|&amp;) Aufstockung ansehen"],
    ["/einblasdaemmung", "Einblasdämmung ansehen"],
    ["/planung-cad", "3D-CAD (?:&|&amp;) Planung ansehen"],
    ["/dachsanierung", "Dachsanierung im Bestand ansehen"],
  ];

  for (const [href, label] of expectedLinks) {
    assert.match(html, new RegExp(`<a[^>]+href=["']${href}["'][^>]*>[\\s\\S]*?${label}[\\s\\S]*?<\\/a>`, "i"), `${href} needs a descriptive destination link`);
  }
  assert.doesNotMatch(html, />Projekt im Detail\s*</i, "generic repeated project links should be replaced by descriptive labels");
});

test("describes the unlocated roof project with confirmed facts only", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `project-facts-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/projekte/dachsanierung-gaube", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<dt>Projekt<\/dt><dd>Dachsanierung im Bestand<\/dd>/i);
  assert.match(html, /<dt>Gebäude<\/dt><dd>Bestehendes Holzhaus<\/dd>/i);
  assert.match(html, /<dt>Bauteil<\/dt><dd>Gaube und Übergänge<\/dd>/i);
  assert.match(html, /<dt>Dokumentation<\/dt><dd>Dachaufbau bis Ergebnis<\/dd>/i);
  assert.doesNotMatch(html, /<dt>Ort<\/dt>/i);
  assert.doesNotMatch(html, /\\"contentLocation\\"/i);
});

test("documents the Hausen roof renovation with its confirmed scope and inquiry path", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `hausen-project-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/projekte/dachsanierung-hausen-geltendorf", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<dt>Ort<\/dt><dd>Hausen bei Geltendorf<\/dd>/i);
  assert.match(html, /<dt>Erweiterung<\/dt><dd>Zwei neue Gauben<\/dd>/i);
  assert.match(html, /<dt>Dämmung<\/dt><dd>Eingeblasene Holzfaser<\/dd>/i);
  assert.match(html, /KERN doppelte den Dachstuhl auf/i);
  assert.match(html, /an den Altbestand angeschlossen werden/i);
  assert.match(html, /href=["']\/kontakt\?projekt=Dachsanierung#projektanfrage["']/i);
  assert.doesNotMatch(html, /WhatsApp|0173|08101|kern-dach\.de/i);
});

test("gives every KERN guide one relevant real project image across HTML, Open Graph and Article data", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `guide-images-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const guides = [
    ["/ratgeber/dachsanierung", "kern-dachsanierung-scheune.webp"],
    ["/ratgeber/dachsanierung-kosten-landsberg", "kern-dachsanierung-historisches-tragwerk.webp"],
    ["/ratgeber/einblasdaemmung-altbau", "kern-einblasdaemmung-holzstaenderwand-v2.webp"],
    ["/ratgeber/dachsanierung-bewohnt", "kern-dachsanierung-fertig.webp"],
    ["/ratgeber/aufstockung-genehmigung-bayern", "finning-aufstockung-montage.webp"],
  ];

  for (const [route, imageName] of guides) {
    const response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    const imageUrl = `https://dachwerk-kern.de/images/${imageName}`;
    assert.equal(response.status, 200, `${route} must render`);
    assert.match(html, new RegExp(`<meta(?=[^>]+property=["']og:image["'])(?=[^>]+content=["']${imageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'])[^>]*>`, "i"), `${route} needs its own Open Graph image`);
    assert.match(html, new RegExp(`\\"image\\":\\"${imageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\"`), `${route} needs the same Article image`);
    assert.match(html, new RegExp(`<img(?=[^>]+src=["'][^"']*${imageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?=[^>]+alt=["'][^"']{20,}["'])[^>]*>`, "i"), `${route} must show the image with useful alt text`);
    assert.doesNotMatch(html, /<meta(?=[^>]+property=["']og:image["'])(?=[^>]+content=["']https:\/\/dachwerk-kern\.de\/images\/kern-social\.webp["'])[^>]*>/i, `${route} must not keep the generic preview image`);
  }
});

test("shows real KERN execution instead of an AI symbol image in the insulation hero", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `insulation-hero-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/einblasdaemmung", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<section class=["']page-hero page-hero--image["'][\s\S]*?kern-einblasdaemmung-vor-ort\.webp/i);
  assert.match(html, /KERN bringt Einblasdämmung mit dem Einblasschlauch in ein vorbereitetes Dachgefache ein/i);
  assert.doesNotMatch(html, /KI-generiertes Symbolbild/i);
});

test("sitemap exposes original KERN project photos to Google image crawling", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `image-sitemap-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/sitemap.xml"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const xml = await response.text();
  const imageCount = xml.match(/<image:image>/g)?.length ?? 0;

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^application\/xml\b/i);
  assert.match(xml, /xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/i);
  assert.equal(imageCount, 101, `expected 101 image entries, received ${imageCount}`);
  assert.match(xml, /https:\/\/dachwerk-kern\.de\/projekte\/dachsanierung-grossaitingen-baujahr-1954/);
  assert.match(xml, /https:\/\/dachwerk-kern\.de\/images\/grossaitingen-dachsanierung-fertig\.webp/);
  assert.match(xml, /https:\/\/dachwerk-kern\.de\/projekte\/dachsanierung-utting-turm/);
  assert.match(xml, /https:\/\/dachwerk-kern\.de\/images\/utting-dachsanierung-fertig\.webp/);
  assert.match(xml, /https:\/\/dachwerk-kern\.de\/images\/hausen-dachsanierung-fertig\.jpg/);
  assert.match(xml, /https:\/\/dachwerk-kern\.de\/images\/altoettinger-aufstockung-graue-schalung\.webp/);
  assert.doesNotMatch(xml, /hausen-dachsanierung-dachaufbau|finning-aufstockung-baufortschritt/);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/ratgeber\/einblasdaemmung-altbau<\/loc>[\s\S]*?<image:loc>https:\/\/dachwerk-kern\.de\/images\/kern-einblasdaemmung-holzstaenderwand-v2\.webp<\/image:loc>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/ratgeber\/aufstockung-genehmigung-bayern<\/loc>[\s\S]*?<image:loc>https:\/\/dachwerk-kern\.de\/images\/finning-aufstockung-montage\.webp<\/image:loc>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/dachsanierung<\/loc>\s*<lastmod>2026-11-08<\/lastmod>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/anbau-aufstockung<\/loc>\s*<lastmod>2026-11-08<\/lastmod>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/dachsanierung-landsberg-am-lech<\/loc>\s*<lastmod>2026-10-20<\/lastmod>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/projekte\/dachsanierung-utting-turm<\/loc>\s*<lastmod>2026-10-15<\/lastmod>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/projekte\/obergeschoss-holzstaenderbau-landsberg<\/loc>\s*<lastmod>2026-09-19<\/lastmod>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/projekte\/aufstockung-finning-gaube<\/loc>\s*<lastmod>2026-10-04<\/lastmod>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/ratgeber\/dachsanierung<\/loc>\s*<lastmod>2026-10-18<\/lastmod>/i);
  assert.match(xml, /<loc>https:\/\/dachwerk-kern\.de\/einblasdaemmung<\/loc>\s*<lastmod>2026-10-18<\/lastmod>/i);
});

test("recent-update feed exposes only meaningful KERN changes to crawlers", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `rss-feed-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const [feedResponse, robotsResponse, homeResponse] = await Promise.all([
    worker.fetch(new Request("http://localhost/feed.xml"), env, ctx),
    worker.fetch(new Request("http://localhost/robots.txt"), env, ctx),
    worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), env, ctx),
  ]);
  const feed = await feedResponse.text();
  const robots = await robotsResponse.text();
  const home = await homeResponse.text();
  const itemCount = feed.match(/<item>/g)?.length ?? 0;

  assert.equal(feedResponse.status, 200);
  assert.match(feedResponse.headers.get("content-type") ?? "", /^application\/rss\+xml\b/i);
  assert.match(feed, /<rss version="2\.0">/i);
  assert.equal(itemCount, 48);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/projekte\/dachsanierung-grossaitingen-baujahr-1954<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/dachsanierung-landsberg-am-lech<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/dachsanierung<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/projekte\/dachsanierung-utting-turm<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/projekte\/dachsanierung-hausen-geltendorf<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/projekte\/obergeschoss-holzstaenderbau-landsberg<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/einblasdaemmung<\/link>/i);
  assert.match(feed, /<title>Einblasdämmung mit echter KERN-Ausführung<\/title>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/projekte\/aufstockung-finning-gaube<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/ratgeber\/dachsanierung-kosten-landsberg<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/ratgeber\/einblasdaemmung-altbau<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/ratgeber\/dachsanierung-bewohnt<\/link>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/ratgeber\/aufstockung-genehmigung-bayern<\/link>/i);
  assert.match(feed, /<pubDate>Thu, 20 Aug 2026 03:49:00 GMT<\/pubDate>/i);
  assert.match(feed, /<lastBuildDate>Sun, 08 Nov 2026 13:50:00 GMT<\/lastBuildDate>/i);
  assert.match(feed, /<title>KERN als Fachbetrieb für anspruchsvolle Dachsanierungen<\/title>/i);
  assert.match(feed, /<title>Dachsanierung in Landsberg – Umfang, Ansprechpartner und Referenzen<\/title>/i);
  assert.match(feed, /<title>Dämmarten bei der Dachsanierung vergleichen<\/title>/i);
  assert.match(feed, /<title>Dachdämmung im Altbau: Auf-, Zwischen- oder Untersparrendämmung\?<\/title>/i);
  assert.match(feed, /<link>https:\/\/dachwerk-kern\.de\/ratgeber\/dachdaemmung-varianten<\/link>/i);
  assert.match(robots, /^Sitemap: https:\/\/dachwerk-kern\.de\/feed\.xml$/m);
  assert.match(robots, /^User-agent: OAI-SearchBot$/m);
  assert.match(robots, /^Disallow: \/anfragen$/m);
  assert.match(robots, /^Disallow: \/api\/$/m);
  assert.match(home, /<link(?=[^>]*rel=["']alternate["'])(?=[^>]*type=["']application\/rss\+xml["'])(?=[^>]*href=["']https:\/\/dachwerk-kern\.de\/feed\.xml["'])[^>]*>/i);
});

test('renders the unified roof inquiry with unknown answers and smartphone uploads', async () => {
  const { default: worker } = await import('../dist/server/index.js');
  const response = await worker.fetch(new Request('http://localhost/kontakt?projekt=Dachsanierung', { headers: { accept: 'text/html' } }), { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  const html = await response.text();
  assert.equal(response.status, 200);
  for (const label of ['Ihre Dachsanierung', 'Gebäudebaujahr', 'Dachform', 'Dachfläche', 'Vorhandene Dämmung', 'Nutzung des Dachgeschosses', 'Nicht bekannt', '30 MB']) assert.ok(html.includes(label), label);
  assert.match(html, /image\/heic/);
  assert.match(html, /application\/pdf/);
  assert.match(html, /method="post"/);
  assert.doesNotMatch(html, /class="ai-advisor|25 Fahrminuten|25 Minuten/);
});

// Protect the agreed customer journey: one calm closing invitation plus a focused
// hero action only on documented project pages; service pages first establish trust.
test("keeps contact guidance focused without repeating the Dach-Check label", async () => {
  const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url).href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const priorityRoofRoutes = new Set([
    "/projekte/dachsanierung-gaube",
    "/projekte/dachsanierung-grossaitingen-baujahr-1954",
    "/projekte/dachsanierung-hausen-geltendorf",
    "/projekte/dachsanierung-utting-turm",
  ]);
  for (const route of publicRoutes.filter((route) => route !== "/kontakt")) {
    const response = await worker.fetch(new Request(`http://localhost${route}`), env, ctx);
    const html = await response.text();
    const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
    assert.equal((main.match(route === "/" ? /class="n-invitation"/g : /class="friendly-inquiry /g) ?? []).length, 1, route);
    const hero = main.match(/<section class="(?:page-hero|n-world)[\s\S]*?<\/section>/)?.[0] ?? "";
    if (priorityRoofRoutes.has(route)) {
      assert.match(hero, /href="\/kontakt\?projekt=Dachsanierung#projektanfrage"/i, route);
    } else {
      assert.doesNotMatch(hero, /href="\/kontakt|prüfen lassen/i, route);
    }
    if (route.startsWith("/ratgeber")) {
      assert.ok((main.match(/Dach-Check/g) ?? []).length <= 1, route);
      assert.match(main, /href="\/kontakt\?projekt=[^"]+#projektanfrage"[^>]*>(?:Dachprojekt prüfen lassen|Projektanfrage starten)/, route);
    } else assert.doesNotMatch(main, /Dach-Check|Passt Ihr Dachprojekt zu KERN/i, route);
    assert.match(main, /Kontakt aufnehmen|Dachprojekt prüfen lassen|Dachprojekt anfragen|Projekt anfragen|Projektanfrage starten/i, route);
  }
});

test("new focused guides connect verified sources, real projects and a single friendly inquiry", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `focused-guides-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const routes = publicRoutes.filter((route) => ["dachfenster-erneuern-oder-behalten", "tageslicht-dachgeschoss", "holzfaserdaemmung-dachsanierung", "dachstuhl-erhalten", "aufstockung-holzbau-bestand", "oekologisch-sanieren"].some((slug) => route === `/ratgeber/${slug}`));
  const hub = await (await worker.fetch(new Request("http://localhost/ratgeber"), env, ctx)).text();
  for (const route of routes) {
    const html = await (await worker.fetch(new Request(`http://localhost${route}`), env, ctx)).text();
    assert.ok(hub.includes(`href="${route}"`), `${route} must be reachable through the guide library`);
    assert.match(html, /Quellen und weiterführende Informationen/);
    assert.match(html, /href="https:\/\/(?:www\.)?(?:velux\.de|steico\.com|informationsdienst-holz\.de|nachhaltigesbauen\.de|prospekte\.velux\.de)\//);
    assert.match(html, /Aus der Arbeit von KERN/);
    assert.match(html, /href="\/projekte\//);
    assert.match(html, /Was bedeutet das/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.ok(html.indexOf("Aus der Arbeit von KERN") < html.indexOf("Was bedeutet das"));
  }
  const about = await (await worker.fetch(new Request("http://localhost/ueber-kern"), env, ctx)).text();
  assert.match(about, /id="haltung"/);
  assert.match(about, /Mich begeistert am Holzbau/);
  assert.match(about, /kommende Generationen/);
});

test("contact always starts with the project choice, including preselected service links", async () => {
  const { default: worker } = await import('../dist/server/index.js');
  const env = { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  for (const path of ['/kontakt', '/kontakt?projekt=Dachsanierung', '/kontakt?projekt=Aufstockung']) {
    const html = await (await worker.fetch(new Request(`http://localhost${path}`), env, ctx)).text();
    assert.match(html, /Schritt <!-- -->1<!-- --> von 2/, path);
    const steps = [...html.matchAll(/<section class="form-step"([^>]*)>([\s\S]*?)<\/section>/g)];
    assert.equal(steps.length, 2, path);
    assert.doesNotMatch(steps[0][1], /hidden=""/, path);
    assert.match(steps[0][2], /Worum geht es\?/, path);
    assert.match(steps[1][1], /hidden=""/, path);
    if (path.includes('projekt=')) assert.match(steps[0][2], /selected=""/, `${path} keeps the suggested service`);
  }
  const formSource = await readFile(new URL('../app/components/ProjectInquiryForm.tsx', import.meta.url), 'utf8');
  const restoredDraft = formSource.match(/let rawDraft[\s\S]*?return \(\) =>/)?.[0] ?? '';
  assert.match(restoredDraft, /setProject\(draftProject\)/);
  assert.match(restoredDraft, /setMessage\(draftMessage\)/);
  assert.doesNotMatch(restoredDraft, /setStep\(/, 'restoring a draft must preserve the first step');
});

test("guide navigation opens the whole library and each matching subject section", async () => {
  const { default: worker } = await import('../dist/server/index.js');
  const env = { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const home = await (await worker.fetch(new Request('http://localhost/'), env, ctx)).text();
  const hub = await (await worker.fetch(new Request('http://localhost/ratgeber'), env, ctx)).text();
  const menu = home.match(/<details class="guide-menu"[\s\S]*?<\/details>/)?.[0] ?? '';
  assert.match(menu, /<summary>Ratgeber<\/summary>/);
  assert.match(menu, /href="\/ratgeber"[^>]*>Alle Ratgeber/);
  for (const [id, title] of [['dachsanierung-bestand', 'Dachsanierung & Bestand'], ['dachfenster-tageslicht', 'Dachfenster & Tageslicht'], ['daemmung-wohnkomfort', 'Dämmung & Wohnkomfort'], ['holzbau-weiterbauen', 'Anbau & Aufstockung'], ['sanierungsstart-budget', 'Sanierungsstart & Budget'], ['genehmigung-fachplanung', 'Genehmigung & Fachplanung'], ['oekologisch-sanieren', 'Ökologisch sanieren']]) {
    assert.ok(menu.includes(`href="/ratgeber#${id}"`));
    const section = hub.match(new RegExp(`<article[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/article>`))?.[1] ?? '';
    assert.ok(section.includes(title.replace('&', '&amp;')));
    assert.match(section, /href="\/ratgeber\//);
  }
});
