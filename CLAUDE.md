# Claude Code – KERN Website

## WICHTIG: Repository-Status
Dieses Repository enthält derzeit **nur einen Ausschnitt** des Website-Quellcodes und SEO-Dokumentation. Es ist am 09.11.2026 **kein vollständig startbares oder deploybares Projekt**. Der aktuelle vollständige Quellstand und der Veröffentlichungsweg liegen im **bestehenden Sites-Projekt** der produktiven Website https://dachwerk-kern.de.

Die bloße Existenz von Dateien in GitHub beweist **keine Synchronisierung** mit Sites. Claude darf kein Live-Deployment aus diesem unvollständigen Stand versuchen.

## Vorgehen vor der Entwicklung
1. Zunächst den vollständigen und neuesten Quellcode aus dem bestehenden Sites-Projekt exportieren bzw. mit berechtigtem Agenten bereitstellen lassen. Die aktuelle Source-Version und das zuletzt erfolgreiche Live-Deployment protokollieren.
2. Vollständigkeit prüfen: package.json, Lockfile, Framework-/Build-Konfiguration, app/, weitere Komponenten und Bibliotheken, public/ bzw. alle erforderlichen Assets, Tests und Konfigurationsbeispiele. Fehlende Dateien offen dokumentieren.
3. Vor jedem GitHub-Upload Kundendaten, Zugangsdaten, API-Keys, .env-Dateien, private Logs und unzulässige Assets ausschließen. **Dieses Repository ist öffentlich**; vollständige interne Quellen bevorzugt in einem separaten privaten Repository sichern. Veröffentlichung privater Quellen niemals stillschweigend annehmen.
4. Erst nach nachgewiesener vollständiger Sicherung und erfolgreichem lokalem Build Änderungen auf einem separaten Branch ausführen. Pull Request mit Dateiliste, Tests, sichtbarer Änderung und Rollback-Hinweis erstellen.
5. Vor Merge oder Veröffentlichung mit dem jüngsten Sites-Quellstand und parallelen Arbeiten abgleichen. Kein eigenmächtiger Hostingwechsel, keine zweite Website und kein automatisches Deployment nach GitHub-Push.

## Zielsetzung
- KERN Zimmerei & Holzbau, Schwerpunkt hochwertige Dachsanierung im Bestand, Region Landsberg am Lech und Ammersee.
- Mehr **qualifizierte Dachsanierungsanfragen**, nicht lediglich Klicks.
- Wichtigste regionale Seite: `/dachsanierung-landsberg-am-lech`.
- Bestehenden Inhalt, echte Referenzen, technische SEO-Einstellungen, Anfrageformular und funktionierende Navigation erhalten.
- Keine erfundenen Referenzen, Preise oder Versprechen, keine Testanfragen an Kunden, keine zusätzlichen Abonnements.
- Änderungen müssen auf Desktop und schmalen Mobilansichten, per Build, vorhandenen Tests und Linkprüfung verifiziert werden.

## Verantwortlichkeiten
Die derzeit produktive Website wird ausschließlich im **bestehenden Sites-Projekt** veröffentlicht. GitHub-Commits veröffentlichen **nicht automatisch**.
Claude Code unterstützt Entwicklung und Code-Reviews; ein Merge/Deployment braucht einen vorher definierten, verifizierten Rückweg in das bestehende Sites-Projekt.
