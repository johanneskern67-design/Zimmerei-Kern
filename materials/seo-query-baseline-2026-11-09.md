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
