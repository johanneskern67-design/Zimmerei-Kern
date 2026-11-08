# KERN Zimmerei & Holzbau – Website

Quellcode der bestehenden Website https://dachwerk-kern.de.

Dieses bisher leere Repository wird mit dem geprüften Website-Quellstand einschließlich SEO-Update vom 8. November 2026 befüllt. Interne Auswertungen, Kundenanfragen, Zugangsdaten und die interne Git-Historie werden nicht übernommen.

Die Produktion wird im bestehenden Sites-Projekt veröffentlicht. Ein Commit auf GitHub allein löst derzeit keine Veröffentlichung aus. Änderungen müssen zwischen GitHub und dem Sites-Quellrepository abgeglichen, gebaut, geprüft und als neue Site-Version veröffentlicht werden.

## Entwicklung

Node.js mindestens 22.13.0; die vorhandenen Build-Skripte benötigen Bash und GNU-Werkzeuge (unter Windows WSL).

```sh
npm ci
npm run build
node --test tests/*.test.mjs
npm run dev
```

Produktive Schlüssel und Speicherbindungen werden ausschließlich in der Hosting-Umgebung verwaltet. Ohne diese Bindungen ist die lokale Vorschau keine Verbindung zu produktiven Anfragen oder zur Werkstatt.
