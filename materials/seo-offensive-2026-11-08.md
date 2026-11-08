# KERN – regionale SEO-Offensive, 08.11.2026

## Recherche und Aussagegrenzen

Live-Websuche zu Zimmerei Landsberg am Lech, Zimmerei Ammersee, Dachsanierung und Dachstuhl/Abbund. Drei relevante lokale Vergleichsbetriebe wurden direkt aufgerufen. Die Trefferreihenfolge der Recherche ist **kein ortsfestes Google-Top-3-Ranking**. Für eine nachgewiesene Veränderung von Konkurrenzseiten fehlt ein früherer vollständiger Snapshot; dieser Bericht setzt einen dokumentierten Vergleichspunkt.

| Betrieb / gelesene Seiten | Sichtbare Schwerpunkte | KERN-Ansatz aus dem Seitenvergleich |
| --- | --- | --- |
| Koller, Homepage und allgemeine Zimmererarbeiten | Holzhausbau, Aufstockung, nachhaltiger Holzbau, Landsberg/Ammersee, Dachstuhl, Carport, Abbundhalle | Konkreter Weg vom Bestandsaufmaß über CAD/Fertigungsmaße zur Ausführung; offene Annahmen benennen. Keine Behauptung, der Wettbewerber könne dies nicht. |
| Schuster, Homepage einschließlich Leistungsabschnitt | Weil, Landsberg, Ammersee, Holzbau/Sanierung, Dachstühle, Carports, Anbauten, Bewertungen | Technische Entscheidungshilfen und nachvollziehbare Dachaufbau-/Aufmaßdetails ergänzen; die gelesene Seite zeigt überwiegend Leistungsübersicht und Projektbeispiele. |
| Ammer Lech Bau, Homepage und Dachsanierung | Dachsanierung Weilheim/Ammersee, Dachstuhlsanierung, Aufsparren-/Zwischensparrendämmung, Zellulose, Gauben, Förderung | Dachsanierung stärker mit konkreten Prüfentscheidungen, Kostenfaktoren und dokumentierten KERN-Referenzen verbinden. Der gelesene Leistungsabschnitt erklärt das Angebot, enthält aber keine ausführliche Flächenermittlung. |

Quellen: https://zimmerei-koller.com/ ; https://zimmerei-koller.com/allgemeine-zimmererarbeiten-landsberg/ ; https://schuster-holzbau.de/ ; https://ammer-lech-bau.de/ ; https://ammer-lech-bau.de/dachsanierung/ .

Bereits im selben Monatslauf aus eigenen Search-Console-Daten beobachtet: „zimmerei landsberg“ auf der regionalen Zimmerei-Seite von 2 auf 10 Impressionen und 0 auf 1 Klick (11.09.–08.10. gegenüber 09.10.–05.11.2026). Die geringe Datenmenge erlaubt keine allgemeine Nachfrageprognose. „dachsanierung landsberg am lech“ wurde auf mehreren eigenen URLs sichtbar: Seitenrollen bewusst trennen, keine zusätzlichen nahezu identischen Ortsseiten. Keine behaupteten Suchvolumina oder gesicherte Top-3-Platzierung.

## Umsetzung

- Bestehende Zimmerei-Seite: Landsberg am Lech/Ammersee in Titel, Beschreibung und H1; Dachstühle/Abbund, Carports, Gauben und Holzrahmenbau als verständliche Lösungen. Ökologische Materialwahl ohne pauschale Umweltversprechen oder bayernweites Einsatzgebiet.
- Dachsanierung: eigener sichtbarer Abschnitt Aufdachdämmung, Luftdichtheit, Anschlüsse, Einsparfaktoren und die KERN-interne 0,60-m-Aufmaßregel. Keine Darstellung als gesetzliche Dämmvorschrift.
- CAD-Seite: Dachstuhl und Abbund samt Weg von Aufmaß und 3D-Modell zu Fertigungsmaßen und Werkplanung. Keine unbelegte eigene CNC-Anlage oder vollständig automatische Angebotssoftware behauptet.
- Anbau/Aufstockung und Einblasdämmung: spezifische Metadaten und passende Social-Vorschauen; regionale Dachsanierungsseite behält ihre eigenständige Suchabsicht. Bewährter Startseiten-Hero und dezenter Anfrageweg erhalten.
- Bestehendes JSON-LD erweitert: expliziter LocalBusiness-Typ neben RoofingContractor, echter Firmenname mit „Dachwerk Kern“ als alternateName, vorhandene Telefonnummer/Adresse, Meisterbetrieb und regionale Orte. Öffentliche ContactAction führt ins Anfrageformular. Kein erfundenes Bewertungsrating, keine versteckte API/Secrets in Suchmaschinen-Markup.
- Werkstatt-Brücke vorhanden; Runtime enthält die notwendigen WERKSTATT-Konfigurationsschlüssel. Das bestätigt Konfiguration, nicht einen neu ausgeführten Live-Projektimport. Kein produktiver Testkunde angelegt.
- Drei kopierfertige Google-Beiträge in `materials/google-beitraege-2026-11.md`. Bewertungs-Automatik als separater Werkstatt-Commit `1548ee2` auf GitHub, kein automatischer Sites-Release daraus behauptet.

Google nennt für AI-Funktionen keine besonderen Schema-Tricks: https://developers.google.com/search/docs/appearance/ai-features . LocalBusiness-Dokumentation: https://developers.google.com/search/docs/appearance/structured-data/local-business . Maps-Ranking: Relevanz, Entfernung und Bekanntheit, https://support.google.com/business/answer/7091?hl=de .

## Prüfung

Alle 55 Sitemap-URLs lokal mit dem gebauten Worker abgerufen: HTTP 200, je ein H1, eindeutige Titel/Beschreibungen, selbstreferenzielle Canonicals, parsebares JSON-LD, keine noindex-Direktive. 40 unterschiedliche interne Seitenlinks aus den bearbeiteten Seiten ohne HTTP-Fehler. Build und Sites-Artefaktprüfung erfolgreich. 77 Tests bestanden, einschließlich der absichtlich aktualisierten Titel-/Sitemap-Datumswerte. Sichtprüfung der neuen Inhalte im Browser; Zwischenüberschriften und Absätze mit ausreichendem Abstand gestaltet. Das misst technische Auslieferung, noch keine Google-Indexierung oder Rankingwirkung.

Dieses GitHub-Repository enthält weiterhin ein abgegrenztes Update-Paket, keinen vollständigen Site-Quellbestand und keinen belegten automatischen Deployment-Workflow. Die bestehende Site wird separat aus ihrem vollständigen Quellrepository veröffentlicht.
