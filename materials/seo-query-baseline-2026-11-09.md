# KERN SEO – reproduzierbare 28-Tage-Messbasis (Stand 09.11.2026)

## Quelle und Abgrenzung

Windsor.ai, bereits verbundener Connector `searchconsole`, Account `sc-domain:dachwerk-kern.de`. Zielseite: `https://dachwerk-kern.de/dachsanierung-landsberg-am-lech`. Zwei direkt aufeinanderfolgende abgeschlossene 28-Tage-Fenster, **12.09.–09.10.2026** gegen **10.10.–06.11.2026**. Der 06.11. liegt zum Messzeitpunkt drei Kalendertage zurück. Frische/unvollständige Daten wurden nicht eingeschlossen (`include_fresh_data=false`). Abruf jeweils mit `fields: date,page,impressions,clicks,position`, gefiltert auf exakt diese Seiten-URL. Impressionsgewichtete Positionsmittel aus den täglichen Werten berechnet.

| Nur die regionale Zielseite | 12.09.–09.10. | 10.10.–06.11. |
| --- | ---: | ---: |
| Impressionen | 85 | 40 |
| Klicks | 1 | 0 |
| Ø Position (impressionsgewichtet) | 7,76 | 18,72 |

Veränderung: **−52,9 % Impressionen**. Diese Zeitfenster entsprechen absichtlich nicht der früheren Baseline 11.09.–08.10. gegen 09.10.–05.11. (88 → 39 Impressionen). **Achtung:** Die Site-Versionen V195/V196 vom 08.11. liegen nach beiden Fenstern. Diese Zahlen messen **nicht** deren Wirkung.

## Suchanfragen: Datengrenze und Diagnose

Zweiter Windsor-Abruf mit `fields: date,page,query,impressions,clicks,position` und demselben URL-Filter. Die **sichtbaren** Query-Zeilen decken nur 5 von 85 früheren und 21 von 40 aktuellen Seitenimpressionen ab. Für die fehlenden 80 bzw. 19 Impressionen gibt es keine ausreichend detaillierte Suchanfragen-Zuordnung in diesem Export. Google kann seltene/anonymisierte Queries ausblenden. Die Position einzelner sichtbarer Queries darf deshalb nicht auf das gesamte Suchinteresse übertragen werden.

- „komplettsanierung landsberg“: 2 bekannte Impressionen im älteren, 18 im neueren Fenster, aktuell Ø Position 29,50. Im neuen Fenster 45 % aller Seitenimpressionen, aber nicht zwingend 45 % der relevanten Dachsanierungsnachfrage.
- „dachsanierung landsberg am lech“: jeweils 1 bekannte Impression, Position 8 → 13. Zu wenig für einen verlässlichen Trend.
- „dachdecker landsberg“: jeweils 1 bekannte Impression, Position 44 → 22. Ebenfalls keine Trendbasis.
- Im neuen Fenster wird dieselbe exakte Dachsanierungsanfrage zusätzlich auf der Startseite (1 Impression, Position 1) und auf `/dachsanierung` (3 Impressionen, Ø 4,67) erfasst. Mehrere URL-Treffer sind noch kein Beweis für schädliche Kannibalisierung. **Keine** Weiterleitung/noindex ohne zusätzl. Beweis.

## Google-Unternehmensprofil: unabhängiger Kontaktindikator

Windsor.ai, verbundener Connector `google_my_business`, Account `locations/7257717420834917513`, dieselben beiden 28-Tage-Fenster. Summen der täglichen Felder; diese Kennzahlen sind Profilinteraktionen, **keine** nachgewiesenen qualifizierten Dachsanierungsanfragen.

| Messwert | Vorher | Aktuell |
| --- | ---: | ---: |
| Mobile Google-Suche (Impressionen) | 78 | 43 |
| Desktop Google-Suche (Impressionen) | 33 | 29 |
| Mobile Maps (Impressionen) | 17 | 15 |
| Desktop Maps (Impressionen) | 16 | 16 |
| Website-Klicks aus Unternehmensprofil | 36 | 20 |
| Anrufklicks | 0 | 3 |

Keine eigenmächtigen Änderungen an Unternehmensprofil, Beiträgen, Kategorien oder Anzeigen.

## Öffentliche Kontrolle und nächste sichere Maßnahme

Öffentlich am 09.11.2026 geprüft: `https://dachwerk-kern.de/dachsanierung-landsberg-am-lech` zeigt Regionaltitel/H1, echte Utting- und Hausen-Referenzen und den erst nach Leistungs-/Vertrauensdarstellung platzierten Anfrage-CTA. In `https://dachwerk-kern.de/ratgeber/dachsanierung-kosten-landsberg` verweist der Kontextlink „Dachsanierung in Landsberg: Leistungen und Referenzen“ auf die regionale Zielseite. Keine produktive Testanfrage.

**Nicht technisch oder live validiert in diesem Lauf:** nativer Sites-Quellstand/Deployment-ID, mobile Browsergeräteemulation, Google-URL-Indexstatus, Formularabschluss, aktuelle Anzahl qualifizierter Leads. Der GitHub-Ausschnitt dieses Repositories ist **nicht** die vollständige produktive Site; ein Commit hier veröffentlicht nichts auf der Website.

**Folgeauftrag für den bestehenden Sites-Implementierer:** Vor Änderung die neueste Sites-Version und Arbeitsbasis abgleichen. Falls technisch indexierbar und die Links gültig bleiben, weitere Titel-/Navigationseingriffe unterlassen, bis neue vollständige Post-Deployment-Daten vorliegen. Qualifizierte Formularanfragen (ohne personenbezogene Inhalte) separat prüfen und mit regionalen Google-Queries vergleichen; geplante Site-Publikationen müssen getestet und live nachgewiesen werden. Keine zweite Website oder neue kostenpflichtige Verbindung.


## Zusatzprüfung 09.11.2026 – Sitemap-Abruf und Geräte-Segmentierung

**Quelle und Prüfmethode:** Verbundener Windsor.ai-Connector `searchconsole`, Property `sc-domain:dachwerk-kern.de`, mit zuvor aus `get_fields` ermittelten Feld-IDs. Öffentliche Regional- und Kostenseite zusätzlich mit Web-Lesezugriff geprüft; der öffentlich sichtbare XML-Rohinhalt von `/sitemap.xml` und `/robots.txt` war durch das benutzte öffentliche Lesewerkzeug nicht verfügbar. Das ist **kein** Nachweis eines HTTP- oder Google-Crawlfehlers.

**Sitemap-Befund:** Das konkret benannte Sitemap-Objekt `https://dachwerk-kern.de/sitemap.xml` meldet bei Windsor `submitted=156`, `errors=0`, `warnings=0`, `is_sitemaps_index=False`, `last_downloaded=2026-11-07T05:01:47.877Z`, `last_submitted=2026-10-04T15:52:54.166Z`. Eine zusätzliche Connector-Zeile hat `path=null` und `submitted=0`; sie wurde **nicht** als zweite Sitemap interpretiert. Der Connector bezeichnet `indexed` ausdrücklich als **deprecated**, daher ist `indexed=0` nicht als Indexverlust zu interpretieren. Die 156 Einträge sind ohne XML-Rohdaten **nicht** gleichzusetzen mit 156 HTML-Seiten, und die frühere produktive Angabe von 55 Sitemap-Seiten ist damit weder widerlegt noch bestätigt. Der letzte von Google angezeigte Sitemap-Abruf lag **vor** den Veröffentlichungen V195/V196 am 08.11.; hieraus kann keine Aussage über deren Crawling-/Rankingwirkung folgen. Keine Sitemap-Neueinreichung und keine XML-Codeänderung ohne belastbaren konkreten Fehler.

**Gerätesegmentierung der regionalen Zielseite:** Gleicher URL-Filter wie in der obigen Messbasis, zwei abgeschlossene Fenster 12.09.–09.10. und 10.10.–06.11.2026, Felder `date,page,device,impressions,clicks,position`, `include_fresh_data=false`. Vorherige Geräte-Zeilen: Desktop 5 Impressionen, 0 Klicks, impressionsgewichtete Position 35,60; mobil keine zurückgegebenen Zeilen. Aktuelle Geräte-Zeilen: Desktop 19 Impressionen, 0 Klicks, Position 28,63; Mobile 2 Impressionen, 0 Klicks, Position 16,00. **Abdeckung der Geräte-Detaildaten nur 5 von 85 bzw. 21 von 40 Impressionen** der page-only-Abfrage. Daher keine Aussage über die vollständige Desktop/Mobile-Verteilung und insbesondere **kein** Beleg für einen mobilen Rankingabsturz auf dieser URL; fehlende Detailzeilen bleiben unzugeordnet. Der separate Rückgang der mobilen Unternehmensprofil-Impressionen ist keine Gerätezuordnung für organische Webseiten-Impressionen.

**Maßnahme/Test/Status:** Inkonsistente Detailabdeckung und Sitemap-Interpretationsrisiko mit Feld- und Datumsprüfung eingegrenzt; keinerlei Änderung am produktiven HTML, Canonical, Routing, Sitemap, Formular oder Google-Profil. Test: Connector-Antworten der beiden Gerätefenster gegen die bestehende page-only-Baseline verglichen, Sitemap-Objekt nach `path` unterschieden, bestehende regionale Seite und Ratgeber per öffentlichem Lesewerkzeug aufrufbar. **Deployment: keines**, Website-Wirkung noch nicht messbar. Nur dieses Prüfprotokoll wurde fortgeschrieben; Rückweg bei Bedarf: diesen Zusatzabschnitt im GitHub-Dokument revertieren. Nächste Auswertung erst bei einem neu vollständigen GSC-Datenstand **nach** V196 sowie nachgewiesen neuem Sitemap-Abruf; keine Wiederholung von Titel- oder Navigationsänderungen ohne belegte Ursache.


## Zusatzbefund 09.11.2026, 06:xx MEZ – Zielseitenabgleich statt weiterer Titeländerung

**Messung:** Windsor.ai `searchconsole`, `sc-domain:dachwerk-kern.de`, abgeschlossenes Fenster 10.10.–06.11.2026, aggregiert je vollständiger Seiten-URL (`fields: page, clicks, impressions, position`). Allgemeine Leistungsseite `https://dachwerk-kern.de/dachsanierung`: **104 Impressionen, 1 Klick, Ø Position 5,49**. Regionale Seite `https://dachwerk-kern.de/dachsanierung-landsberg-am-lech`: **40 Impressionen, 0 Klicks, Ø Position 18,73**. Diese Gesamtwerte sind nicht auf denselben Query-Mix bezogen und können daher nicht als direkter Positionsvergleich eines gemeinsamen Keywords gelesen werden.

**Reale Suchanfrage:** `dachsanierung landsberg am lech` erscheint in sichtbaren Query+URL-Zeilen auf Startseite (1 Impression, Position 1), allgemeiner Dachsanierungsseite (3 Impressionen, Ø 4,67), regionaler Zielseite (1 Impression, Position 13); **insgesamt fünf** sichtbare Impressionen, null Klicks. Die regionalen Einzeldaten erlauben **keinen** Nachweis schädlicher Kannibalisierung und keine seriöse Entscheidung für Redirect, Noindex, Zusammenlegung oder erneute Meta-/H1-Änderung.  Die Query-Detailzeilen sind unvollständig (allgemeine Seite nur 22 von 104 Impressionen), daher keine extrapolierten Keyword-Mengen.

**Öffentliche Linkabnahme am 09.11.2026:** Startseite `/` (Hauptnavigation und Dachsanierungs-Abschnitt), Kostenratgeber `/ratgeber/dachsanierung-kosten-landsberg` (Kontextlink) und die regionale Seite sind öffentlich aufrufbar. Beide Navigationswege bzw. der Ratgeberlink führen auf `/dachsanierung-landsberg-am-lech`. Der CTA auf der regionalen Seite führt zu `/kontakt?projekt=Dachsanierung`; diese Kontaktseite wurde nur lesend geöffnet, **keine Anfrage abgeschickt**. Die regionale Seite enthält eine H1 und zwei echte Projektverweise (Utting, Hausen). Live-Inhalte sind gegenüber älteren Suchmaschinen-Snippets bereits verändert; ohne aktuellen nativen Sites-Versionsabgleich dürfen solche Änderungen nicht überschrieben werden.

**Änderung/Test/Rückweg:** Reine Ergänzung dieses Messprotokolls im bereits bestehenden Dokument, abgeglichen mit zwei Windsor-Leseabfragen und öffentlichen Seiten, keine Produktivänderung. Rückweg: diesen Zusatzabschnitt revertieren. **Sites-Code/Deployment: keines**; der native Sites-Editor samt Veröffentlichung ist in diesem Lauf nicht verfügbar, die GitHub-Dokumentationsablage ist nicht die vollständige Website-Quelle. **SEO-/Lead-Effekt nach V195/V196: noch nicht messbar.** Nächster sinnvoller Schritt bleibt neuer abgeschlossener GSC-Zeitraum nach dem Deployment plus unabhängige qualifizierte Anfragen-Statistik, nicht stündliche Änderung am Live-Code.


## Zusatzprüfung 09.11.2026 – neuer Google-Sitemap-Abruf nach V196

**Neue belegte Beobachtung:** Windsor.ai-Connector `searchconsole`, Account `sc-domain:dachwerk-kern.de`, lesender Abruf am 09.11.2026 mit den per `get_fields` bestätigten Feldern `path,submitted,errors,warnings,last_downloaded,last_submitted,is_sitemaps_index` (Abfragezeitraum 01.10.–09.11.2026). Die Antwort enthält zur **gleichen** Sitemap `https://dachwerk-kern.de/sitemap.xml` zwei Zeilen mit unterschiedlichen `last_downloaded`-Werten: **07.11.2026 05:01:47 UTC** und **09.11.2026 02:41:23 UTC**. Letzterer ist der neuere erfasste Abruf. Beide Zeilen melden `submitted=156`, `errors=0`, `warnings=0`, `is_sitemaps_index=False`; `last_submitted=04.10.2026 15:52:54 UTC`. Die dritte Zeile `path=null` ist kein zweiter Sitemap-Nachweis.

**Bedeutung und Grenze:** Die Search Console meldet damit einen **Sitemap-Abruf nach** den veröffentlichten Site-Versionen V195/V196 vom 08.11.2026. Das zeigt weder, dass Google die betroffene Zielseite bereits erneut gecrawlt oder indexiert hat, noch eine Verbesserung von Ranking, CTR oder qualifizierten Anfragen. Die Zählweise der 156 eingereichten Inhalte bleibt ohne XML-Rohinhalt unbestätigt. `indexed` ist im Windsor-Feldkatalog veraltet und wurde bewusst nicht zur Diagnose genutzt. Die Web-Lesezugriffe auf `/sitemap.xml` und `/robots.txt` liefern keinen XML-/Text-Rohinhalt; daraus folgt kein Fehler der Website.

**Live-Abgleich:** `/dachsanierung-landsberg-am-lech`, `/dachsanierung`, Startseite, `/zimmerei-landsberg-am-lech` und Kostenratgeber wurden am 09.11.2026 lesend aufgerufen; regionale H1, Utting-/Hausen-Belege, regionale Links und Ratgeber-Verweis sind öffentlich sichtbar. Keine produktive Testanfrage. **Änderung:** Nur diese Dokumentation. **Website-Code/Deployment:** Keines. **Messbarer Effekt:** Noch nicht messbar. **Rückweg:** Diesen Abschnitt per Git-Revert zurücknehmen. **Nächster Schritt:** Erst bei vollständigen Suchdaten nach dem 08.11. und kontrollierter aktueller Sites-Quelle über weitere SEO-Eingriffe entscheiden; URL-Indexstatus bleibt gesondert zu verifizieren.
