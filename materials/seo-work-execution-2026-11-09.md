# KERN Website – technische Ausführung nach V203

Stand: 09.11.2026. Bestehendes Projekt `appgprj_6a7a19fb7800819196bba7f88b8089e2`; Live https://dachwerk-kern.de.

## Ausgangspunkt und Koordination

Neueste gespeicherte und erfolgreich veröffentlichte Version: V203, Commit `d6a4076961cc9aa5898a08b2217515e8b3404577`, Deployment `appgdep_6af17e6581708191b4dc9d49887d220e`. Aktueller Quellstand `c00769c1a17dd0b3fdcc3f8f1910c11c31dcda4d` enthält zusätzlich nur eine Abschlusszeile im Anfrageprotokoll und bleibt erhalten. GitHub dient als Dokumentation, nicht als vollständiges produktives Repository. Arbeitsreservierung/Abschluss: https://github.com/johanneskern67-design/Zimmerei-Kern/issues/1.

## Beleg und Änderung

Die öffentliche Browserprüfung bestätigt: Alle sechs konkreten Leistungsbausteine der regionalen Dachsanierungsseite liegen in einem geschlossenen Detailbereich nach der Anfrage. Besucher müssen erst den Anfrageabschnitt passieren und die Details öffnen, um den vollständigen Umfang zu sehen.

Die vorhandene Leistungsübersicht wird als eigener, beschrifteter Abschnitt vor FAQ und Anfrage platziert. Alle sechs Texte bleiben unverändert; die übrigen ausführlichen Bestands-/Planungserläuterungen bleiben aufklappbar. Einzige Produktdatei: `app/dachsanierung-landsberg-am-lech/page.tsx`. Keine Änderung an Formular, Anfrageverarbeitung, Navigation, Metadaten, Referenzen, Kostenangaben, Tracking oder gemeinsamem CSS. Der Sitemap-Zeitstempel ist bereits 09.11.2026.

Dies behebt eine belegte Lücke in der sichtbaren Leistungsdarstellung. Es ist kein Nachweis einer technischen Ursache des Rankingrückgangs und kein Versprechen einer Ranking-/Anfragesteigerung. Bereits veröffentlichte interne Links und Utting-/Hausen-Belege sind vorhanden und wurden nicht erneut umgesetzt. Finning ist in der aktuellen Quelle eine Aufstockungsreferenz und wurde nicht als weitere Dachsanierung umgedeutet.

## Messbasis

Windsor, finale Daten, zwei vollständige 28-Tage-Fenster: 12.09.–09.10.2026 und 10.10.–06.11.2026. Regionalseite 85 → 40 Impressionen, 1 → 0 Klicks, impressionsgewichtete Position 7,76 → 18,72. Die zugehörigen Query+Seiten-Zeilen decken nur 5 bzw. 21 dieser Impressionen ab. 18 aktuelle Impressionen betreffen „komplettsanierung landsberg“: Dachintention unklar, nicht als qualifizierte Dachnachfrage gezählt.

Separate Query-Abfrage ohne Seitendimension: eng abgegrenzte kaufnahe regionale Dachbegriffe 6 → 8 Impressionen, 1 → 0 Klicks. Explizite Informations-/Vergleichsbegriffe 1 → 750 Impressionen, jeweils 0 Klicks; Markenbegriffe 67 → 64 Impressionen, jeweils 5 Klicks; weitere unklare Begriffe separat. Klassifikation ist konservativ und keine vollständige Erhebung aller Suchanfragen oder Absichten. Parameter, Regeln, Gruppensummen und regionale Rohwerte in `seo-work-execution-2026-11-09.json`.

## Prüfung vor Veröffentlichung

Produktionsbuild inklusive Worker-/Manifestprüfung bestanden; 78/78 vorhandene Tests bestanden; git diff --check sauber. 55 Sitemap-Seiten jeweils HTTP 200, 2.448 interne Linkvorkommen ohne fehlendes Seitenziel oder Anker; Datenschutz, Impressum und robots.txt zusätzlich HTTP 200. Regionalseite: genau eine H1, unveränderter self-canonical, index/follow, sechs Leistungsbausteine außerhalb geschlossener Details und vor der Anfrage. Ein Anfrage-CTA.

Desktop 1363 Pixel visuell geprüft. Schmale Layouts bei 454 und 340 CSS-Pixeln mit Browserzoom geprüft: einspaltig, lesbar, kein horizontaler Überlauf; mobiles Menü geöffnet/geschlossen. Smartphone-Geräteemulation wird von der Browserumgebung blockiert; kein physischer Smartphone- oder vollständiger Geräteemulationstest behauptet. Keine produktive Anfrage erzeugt.

## Veröffentlichung und Fortsetzung

Versions-/Deploymentnachweis und öffentliche Live-Abnahme werden nach dem Deployment im GitHub-Issue ergänzt. Vor Veröffentlichung neuesten Sites-Stand und Remote prüfen. Rückweg: ausschließlich den Abschnitt in dieser Produktdatei an die vorherige Position zurückverschieben; nicht pauschal auf V203 zurückrollen und dadurch fremde Folgeänderungen verlieren.

Noch kein messbarer SEO-/Lead-Effekt. Frühindikatoren erst mit finalisierten Tagen nach der Veröffentlichung; vollständige Wirkungsfenster separat und ohne kausales Versprechen vergleichen. Ohne neuen Befund keine stündlichen Titel-/Textänderungen erzwingen. Formular bleibt beim Anfragegewinnungs-Agenten.

## Veröffentlichungsnachweis

- **V204** erfolgreich am 09.11.2026 um 12:17 Uhr Europe/Berlin veröffentlicht.
- Source-Commit: `cbe6c2fdd32f9c6c2dd5742469e84eadfed13c78`.
- Saved version: `appgprj_6a7a19fb7800819196bba7f88b8089e2~appgver_79f67d9420b0819184ae4b296c392f26`.
- Deployment: `appgdep_6af1abc4fae88191824aa98001916f41`, Status `succeeded`.
- Öffentliche Live-Abnahme danach: https://dachwerk-kern.de/dachsanierung-landsberg-am-lech zeigt sechs Leistungsbausteine außerhalb geschlossener Details, vor der Anfrage. Eine H1, korrekter selbstreferenzieller Canonical, index/follow, Desktopdarstellung bestätigt.
- **Messbarer Ranking-/Anfrageeffekt noch nicht nachweisbar.**

## Dauerhafte Arbeitsteilung

Die neue Aufgabe „KERN Website – Umsetzung“ ist in diesem Work-Kontext aktiviert (stündlich, Minute 40, Europe/Berlin). Die bestehende Aufgabe „KERN SEO, KI & Google“ behält ihren stündlichen Rhythmus (Minute 20) und ist auf Messung/Priorisierung und dokumentierte GitHub-Arbeitsaufträge umgestellt. Sie darf nicht parallel Websitecode ändern. Anfragegewinnung bleibt unverändert beim Formularverantwortlichen. Diese gemeinsame Ablage ist der überprüfbare Übergabeweg; keine unbewiesene direkte Chatverbindung. Neue Aufträge werden nur übernommen, wenn sie tatsächlich über GitHub bzw. zugänglichen Gesprächskontext abrufbar sind.

Arbeitsreservierung für diesen Release abgeschlossen und freigegeben. Kein offener Berechtigungsbedarf für die erfolgte Umsetzung.
