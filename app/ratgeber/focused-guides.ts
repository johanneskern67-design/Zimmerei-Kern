import type { FocusedGuideContent } from "./FocusedGuide";
import { expandedGuides } from "./expanded-guides";
import { manufacturerGuides } from "./manufacturer-guides";
import { withManufacturerDetails } from "./manufacturer-details";
import { decisionGuides } from "./decision-guides";
import { withDecisionDetails } from "./decision-details";

const existingGuides: FocusedGuideContent[] = [
  {
    "slug": "dachfenster-erneuern-oder-behalten",
    "imageDisclosure": "Projektfoto digital bereinigt · Bauteile unverändert",
    "path": "/ratgeber/dachfenster-erneuern-oder-behalten",
    "title": "Dachfenster erneuern oder behalten?",
    "category": "Dachfenster",
    "description": "Ein altes Dachfenster muss nicht allein wegen seines Alters ersetzt werden. Zustand, Anschlüsse und der geplante Dachaufbau entscheiden, welche Lösung zu Ihrem Haus passt.",
    "image": "/images/utting-dachsanierung-dachfenster-pv-detail.webp",
    "imageAlt": "Dachfenster mit Rollladen in der erneuerten Dachfläche des KERN-Projekts in Utting",
    "sections": [
      {
        "id": "abschnitt-1",
        "title": "Zuerst den Zustand klären",
        "paragraphs": [
          "Ein vertrautes Fenster behalten zu können, klingt zunächst sinnvoll. Entscheidend ist jedoch, ob Rahmen, Verglasung, Beschläge und Dichtungen weiterhin zur Nutzung passen. Auch Feuchtespuren und die Anschlüsse an den Dachaufbau gehören zur Beurteilung.",
          "Zugluft oder Wasser am Fenster haben nicht immer dieselbe Ursache. Deshalb betrachten wir Fenster und Einbausituation gemeinsam. Für den Einstieg helfen Fotos und die Typenangaben; eine Beurteilung vor Ort ersetzen sie nicht."
        ]
      },
      {
        "id": "abschnitt-2",
        "title": "Reparatur und Austausch abwägen",
        "paragraphs": [
          "Bei einem begrenzten Defekt kann eine Reparatur oder ein passendes Ersatzteil sinnvoll sein. Verfügbarkeit und Eignung hängen vom konkreten Fenster ab. Sind mehrere Bauteile verschlissen oder soll der Komfort deutlich verändert werden, lohnt sich der Vergleich mit einem Austausch.",
          "Wenn das Dach ohnehin saniert wird, sollten Fenster, Eindeckrahmen, Dämmanschluss und innere Luftdichtheit zusammen geplant werden. Ein technisch geeigneter Weiterbestand ist eine andere Entscheidung als das erneute Einbauen eines ausgebauten, gealterten Fensters."
        ]
      },
      {
        "id": "abschnitt-3",
        "title": "Den gewünschten Komfort mitplanen",
        "paragraphs": [
          "Vielleicht wünschen Sie sich mehr Tageslicht, einen leichter bedienbaren Flügel oder besseren sommerlichen Schutz. Größe, Öffnungsart, Verglasung und außenliegender Hitzeschutz werden deshalb passend zum Raum besprochen.",
          "Vor der Entscheidung klären wir auch, welche Innenbekleidungen und Anschlussarbeiten betroffen sind. Im Angebot sollen Fensterlösung, Nebenarbeiten und gegebenenfalls erforderliche Fachpartner nachvollziehbar sein."
        ]
      },
      {
        "id": "velux-bestand",
        "title": "VELUX im Bestand: Typ und Anschluss gemeinsam prüfen",
        "paragraphs": [
          "Bei einem VELUX-Fenster hilft das Typenschild, Größe und Ausführung einzuordnen. Es ermöglicht die gezielte Suche nach passenden Ersatzteilen oder Austauschvarianten. Das Maß der sichtbaren Innenverkleidung allein ist dafür nicht ausreichend. Fotografieren Sie das Schild nur, wenn es sicher erreichbar ist.",
          "Unterscheiden Sie zwischen einem begrenzten Defekt, einem verschlissenen Fenster und einem neuen Wohnwunsch. Ein Wartungsbedarf führt nicht automatisch zum Austausch; mehr Licht oder elektrische Bedienung kann dagegen eine andere Lösung nahelegen. Welche Teile erhalten werden können, klären Fensterzustand und geplanter Dachaufbau gemeinsam."
        ]
      }
    ],
    "proof": {
      "title": "Am sanierten Dach nachvollziehbar",
      "copy": "In Utting wurden Dachfenster in die erneuerte Dachfläche eingebunden. Die Projektbilder zeigen, wie Fenster, Eindeckung und Anschlüsse zu einem stimmigen Dach zusammenfinden.",
      "href": "/projekte/dachsanierung-utting-turm",
      "label": "Dachsanierung in Utting ansehen"
    },
    "faqs": [
      {
        "question": "Muss ein Dachfenster nach einem bestimmten Alter ersetzt werden?",
        "answer": "Eine pauschale Altersgrenze genügt nicht. Zustand, Ersatzteilverfügbarkeit, Anschlussdetails und Ihre Anforderungen müssen zusammen beurteilt werden."
      },
      {
        "question": "Welche Angaben helfen beim ersten Gespräch?",
        "answer": "Fotos vom Fenster und den Anschlüssen sowie ein Foto des Typenschilds, wenn erreichbar. Alle Unterlagen bleiben bei der Anfrage freiwillig."
      },
      {
        "question": "Ist der Austausch bei der Dachsanierung immer günstiger?",
        "answer": "Gemeinsame Arbeiten können Zugänge und Anschlussarbeiten bündeln. Ob daraus ein wirtschaftlicher Vorteil entsteht, hängt vom konkreten Umfang ab."
      }
    ],
    "sources": [
      {
        "label": "VELUX: Wartung und Reparatur",
        "href": "https://www.velux.de/service/kundendienst"
      },
      {
        "label": "VELUX: Typenschild",
        "href": "https://www.velux.de/service/typenschild"
      },
      {
        "label": "VELUX: technische Planung und Einbau",
        "href": "https://www.velux.de/fachkunden/tools-technik/planungshinweise"
      }
    ],
    "related": [
      {
        "label": "Mehr Tageslicht planen",
        "href": "/ratgeber/tageslicht-dachgeschoss"
      },
      {
        "label": "Kosten einer Dachsanierung verstehen",
        "href": "/ratgeber/dachsanierung-kosten-landsberg"
      },
      {
        "label": "VELUX: Ausstattung, Einbau und Kosten",
        "href": "/ratgeber/dachfenster-kosten-einbau"
      },
      {
        "label": "Hitzeschutz im Dachgeschoss",
        "href": "/ratgeber/hitzeschutz-dachgeschoss"
      }
    ],
    "project": "Dachsanierung",
    "dateModified": "2026-10-18"
  },
  {
    "slug": "tageslicht-dachgeschoss",
    "path": "/ratgeber/tageslicht-dachgeschoss",
    "title": "Mehr Tageslicht im Dachgeschoss",
    "category": "Dachfenster & Wohnkomfort",
    "description": "Mehr Licht verändert die Wirkung eines Dachraums. Fensterposition, Ausblick, Bedienung und sommerlicher Hitzeschutz sollten gemeinsam geplant werden.",
    "image": "/images/utting-dachsanierung-fertig.webp",
    "imageAlt": "Erneuerte Dachfläche mit Dachfenstern neben dem erhaltenen Turm in Utting",
    "sections": [
      {
        "id": "abschnitt-1",
        "title": "Vom Raum aus denken",
        "paragraphs": [
          "Wo möchten Sie lesen, arbeiten oder gemeinsam sitzen? Die Nutzung gibt der Fensterplanung eine Richtung. Ein heller Arbeitsplatz braucht eine andere Anordnung als ein Schlafzimmer, in dem Verdunkelung und Ruhe wichtig sind.",
          "Dachneigung, Raumtiefe und Fensterposition beeinflussen die Lichtverteilung. Wir besprechen deshalb nicht nur die Fenstergröße, sondern auch, wo das Licht gebraucht wird und welcher Ausblick im Sitzen oder Stehen entsteht."
        ]
      },
      {
        "id": "abschnitt-2",
        "title": "Licht und sommerlichen Komfort verbinden",
        "paragraphs": [
          "Mehr Glas allein ist noch keine vollständige Lösung. Ausrichtung, Verschattung, Verglasung und Lüftungsmöglichkeiten gehören dazu. Außenliegender Hitzeschutz kann die Sonneneinstrahlung begrenzen; eine innenliegende Verdunkelung erfüllt eine andere Aufgabe.",
          "Welche Kombination passt, hängt von Raum und Nutzung ab. Unser Ziel ist ein Dachraum, der sich im Alltag gut anfühlt – mit Licht an der richtigen Stelle und einem dazu passenden Schutz vor Sonne und Blendung."
        ]
      },
      {
        "id": "abschnitt-3",
        "title": "Die Öffnung konstruktiv vorbereiten",
        "paragraphs": [
          "Ein größeres Fenster oder eine Fenstergruppe verändert auch die Konstruktion. Sparrenlage, mögliche Wechsel, Dämmung, Luftdichtheit und Dachanschlüsse müssen abgestimmt werden. Erforderliche Nachweise werden projektbezogen geklärt.",
          "Eigene 3D-Planung hilft bei KERN, Position und Proportionen vorab verständlich zu machen. Sie ersetzt keine genaue Tageslichtberechnung, kann aber die Entscheidung über Raumwirkung und Geometrie unterstützen."
        ]
      }
    ],
    "proof": {
      "title": "Licht im echten Projekt",
      "copy": "Die fertige Dachansicht in Utting zeigt, wie die Dachfenster mit der charakteristischen Turmform zusammenspielen. Der Projektbericht macht auch die konstruktive Arbeit hinter der fertigen Ansicht sichtbar.",
      "href": "/projekte/dachsanierung-utting-turm",
      "label": "Fenster und Anschlüsse in Utting ansehen"
    },
    "faqs": [
      {
        "question": "Ist ein größeres Fenster immer die beste Lösung?",
        "answer": "Nicht automatisch. Lichtverteilung, Ausblick, Hitzeschutz, Bedienbarkeit und konstruktiver Aufwand müssen zur Nutzung passen."
      },
      {
        "question": "Kann ich ein Fenster später vergrößern?",
        "answer": "Das muss am vorhandenen Dach geprüft werden. Neben der Öffnung können Tragwerk, Innenbekleidung und Anschlussdetails betroffen sein."
      },
      {
        "question": "Was sollte ich vor der Planung überlegen?",
        "answer": "Welche Bereiche hell werden sollen, wie Sie den Raum nutzen und wo Hitze oder Blendung bisher stören. Vorhandene Fotos helfen beim Gespräch."
      }
    ],
    "sources": [
      {
        "label": "VELUX: Lichtlösungen",
        "href": "https://www.velux.de/produkte/dachfenster/lichtloesungen"
      },
      {
        "label": "VELUX: Tageslichtplanung",
        "href": "https://prospekte.velux.de/prospect/29/velux-leitfaden-raum-fuer-tageslicht.pdf"
      },
      {
        "label": "VELUX: Hitze- und Sonnenschutz",
        "href": "https://www.velux.de/produkte/sonnenschutz-und-rolllaeden"
      }
    ],
    "related": [
      {
        "label": "Dachfenster behalten oder erneuern",
        "href": "/ratgeber/dachfenster-erneuern-oder-behalten"
      },
      {
        "label": "Eigene 3D-Planung von KERN",
        "href": "/planung-cad"
      }
    ],
    "project": "Dachsanierung"
  },
  {
    "slug": "holzfaserdaemmung-dachsanierung",
    "path": "/ratgeber/holzfaserdaemmung-dachsanierung",
    "title": "Holzfaserdämmung bei der Dachsanierung",
    "category": "Dämmung",
    "description": "Holzfaser kann Wärme- und sommerlichen Hitzeschutz verbinden. Entscheidend bleiben das konkrete Produkt, die Dämmstärke und ein zum Bestand passender Gesamtaufbau.",
    "image": "/images/hausen-dachsanierung-dachflaeche.jpg",
    "imageAlt": "Dachfläche des KERN-Projekts in Hausen bei Geltendorf",
    "sections": [
      {
        "id": "abschnitt-1",
        "title": "Wohnkomfort braucht einen passenden Aufbau",
        "paragraphs": [
          "Ein Dachraum soll im Winter behaglich sein und sich im Sommer möglichst wenig aufheizen. Holzfaserdämmstoffe bringen Wärmespeicherfähigkeit mit. Wie gut ein Dach insgesamt funktioniert, hängt aber auch von Fenstern, Verschattung, Lüftung und den übrigen Schichten ab.",
          "Wir wählen Dämmstoff und Stärke deshalb passend zur Konstruktion und zur Nutzung. So wird aus der Materialwahl ein durchdachter Dachaufbau, der Ihre Wünsche an das Wohnen und die Anforderungen des Hauses zusammenbringt."
        ]
      },
      {
        "id": "abschnitt-2",
        "title": "Holzfaser ist nicht nur ein Produkt",
        "paragraphs": [
          "Flexible Matten, feste Platten und lose Einblasfasern erfüllen unterschiedliche Aufgaben. Eine für Gefache geeignete Dämmung ist nicht automatisch als Unterdeckung oder druckbelastete Schicht einsetzbar. Maßgeblich sind die Vorgaben des jeweiligen Produkts.",
          "Bei der Sanierung prüfen wir, welcher Platz vorhanden ist und wie Traufe, Ortgang, Fenster und Durchdringungen angeschlossen werden. Dämmung, Luftdichtheit und Feuchteschutz müssen zusammenpassen."
        ]
      },
      {
        "id": "abschnitt-3",
        "title": "Ökologie und Ausführung gemeinsam betrachten",
        "paragraphs": [
          "Holzfaser nutzt einen nachwachsenden Rohstoff. Für die Materialentscheidung gehören trotzdem Herkunft, Herstellung, erforderliche Zusätze, Nutzungsdauer und spätere Trennbarkeit in den Blick. Ein langlebiger Aufbau ist wichtiger als ein einzelnes Schlagwort.",
          "KERN erklärt passende Varianten und ihre Grenzen. Bei Einblasdämmung werden unter anderem Gefach, Einbaudichte und Materialmenge kontrolliert; beim Plattenaufbau sind die vorgesehenen Anschluss- und Befestigungsdetails zu beachten."
        ]
      }
    ],
    "proof": {
      "title": "Holzfaser im ausgeführten Dach",
      "copy": "In Hausen wurde der Dachstuhl aufgedoppelt, um zwei Gauben ergänzt und ein Dachaufbau mit eingeblasener Holzfaserdämmung ausgeführt. Der Projektbericht zeigt, wie Dämmung und die Weiterentwicklung des bestehenden Dachs zusammen geplant wurden.",
      "href": "/projekte/dachsanierung-hausen-geltendorf",
      "label": "Dachsanierung mit Holzfaser in Hausen"
    },
    "faqs": [
      {
        "question": "Ist Holzfaser für jedes alte Dach geeignet?",
        "answer": "Nein. Aufbau, Feuchte, verfügbare Dämmstärke und die Anforderungen an Brand-, Wärme- und Schallschutz müssen geprüft werden."
      },
      {
        "question": "Sind Holzfaserplatten und Einblasfasern austauschbar?",
        "answer": "Sie haben unterschiedliche Einsatzbereiche. Entscheidend sind Produktvorgaben und die geplante Funktion im Bauteil."
      },
      {
        "question": "Wie finde ich die passende Dämmung?",
        "answer": "Aus Bestandsaufnahme und gewünschtem Ergebnis entwickeln wir geeignete Varianten. Herstellerkennwerte ersetzen die Betrachtung des Gesamtaufbaus nicht."
      }
    ],
    "sources": [
      {
        "label": "STEICO: Dachsanierung mit Holzfaser",
        "href": "https://www.steico.com/de/loesungen/sanierung/dachsanierung"
      },
      {
        "label": "STEICO: Dämmprodukte und Einsatzbereiche",
        "href": "https://www.steico.com/de/produkte/daemmung"
      },
      {
        "label": "Nachhaltiges Bauen: Materialien und Lebenszyklus",
        "href": "https://www.nachhaltigesbauen.de/themen/materialgerechtund-aufwandsarm/"
      }
    ],
    "related": [
      {
        "label": "Einblasdämmstoffe im Vergleich",
        "href": "/einblasdaemmung#staerkenvergleich"
      },
      {
        "label": "Ökologisch sanieren",
        "href": "/ratgeber/oekologisch-sanieren"
      }
    ],
    "project": "Dachsanierung"
  },
  {
    "slug": "dachstuhl-erhalten",
    "path": "/ratgeber/dachstuhl-erhalten",
    "title": "Dachstuhl sanieren oder erneuern?",
    "category": "Dachsanierung & Bestand",
    "description": "Dachstuhl sanieren, erhalten oder erneuern? KERN erklärt Bestandsprüfung, Dämmung und Kostenfaktoren für Ihr Dach in Landsberg am Lech und am Ammersee.",
    "dateModified": "2026-11-08",
    "image": "/images/utting-dachsanierung-turm-innen.webp",
    "imageAlt": "Erhaltene historische Holzkonstruktion im Turm des KERN-Projekts in Utting",
    "sections": [
      {
        "id": "abschnitt-1",
        "title": "Altes Holz genau ansehen",
        "paragraphs": [
          "Wer einen Dachstuhl sanieren möchte, muss nicht automatisch alle Balken austauschen. Ein vorhandener Dachstuhl kann zum Charakter eines Hauses gehören. Sein Alter allein entscheidet nicht über die weitere Nutzung. Wichtig sind Zustand, Verbindungen, Verformungen und die Lasten, die er künftig aufnehmen soll.",
          "Feuchtespuren, geschädigte Bereiche oder frühere Umbauten werden gezielt untersucht. Sichtbare Oberflächen liefern Anhaltspunkte; verdeckte Bauteile können erst nach geeigneter Untersuchung oder Öffnung beurteilt werden."
        ]
      },
      {
        "id": "abschnitt-2",
        "title": "Schadensursachen zuerst klären",
        "paragraphs": [
          "Eine undichte Stelle zu schließen und den betroffenen Balken zu ergänzen sind zwei unterschiedliche Aufgaben. Für eine dauerhafte Lösung muss klar sein, woher die Feuchtigkeit kommt und wie sie künftig ferngehalten wird.",
          "Geeignete vorhandene Bauteile können erhalten, andere gezielt verstärkt oder ersetzt werden. Welche Maßnahme trägt, muss fachlich beurteilt und bei Bedarf durch Tragwerksplanung nachgewiesen werden. Eine Ferndiagnose anhand eines einzelnen Fotos reicht dafür nicht."
        ]
      },
      {
        "id": "abschnitt-3",
        "title": "Die künftige Nutzung verändert die Aufgabe",
        "paragraphs": [
          "Neue Gauben, Fenster, Dämmaufbauten oder ein Dachausbau können die Anforderungen verändern. Auch ein bislang nutzbarer Dachstuhl muss deshalb im Zusammenhang mit dem geplanten Vorhaben betrachtet werden.",
          "Wir besprechen, welche Substanz erhalten werden kann und wo neue Anschlüsse nötig sind. Im Angebot werden bekannte Arbeiten und noch offene Befunde unterschieden. So bleibt der Wunsch nach Erhalt mit einer realistischen Planung verbunden."
        ]
      },
      {
        "id": "dachstuhl-daemmen",
        "title": "Dachstuhl sanieren und das Dach dämmen",
        "paragraphs": [
          "Bei einer energetischen Dachsanierung gehören Tragwerk und Dämmung zusammen. Eine Zwischensparrendämmung liegt zwischen den schrägen Dachbalken; eine Aufsparrendämmung bildet eine zusätzliche Dämmschicht darüber. Welche Lösung passt, hängt vom vorhandenen Dachaufbau und der Nutzung des Dachgeschosses ab.",
          "Mehr Dämmstoff allein ergibt noch kein dauerhaft funktionierendes Dach. Luftdichte Anschlüsse verhindern, dass warme, feuchte Raumluft in die Konstruktion strömt. Feuchteschutz, Dachfenster und Übergänge zu Wänden müssen zum gesamten Aufbau passen. Wird von außen saniert, prüfen wir auch, ob die vorhandene Innenbekleidung erhalten bleiben kann."
        ],
        "sources": [
          {
            "label": "INFORMATIONSDIENST HOLZ: Holzschutz, Kapitel Ertüchtigung von Steildächern",
            "href": "https://informationsdienst-holz.de/publikationen/2-informationsdienst-holz-holzbau-handbuch/reihe-5-holzschutz/holzschutz-bauliche-massnahmen"
          }
        ]
      },
      {
        "id": "dachstuhl-landsberg-ammersee",
        "title": "Bestandsprüfung in Landsberg und am Ammersee",
        "paragraphs": [
          "Als Zimmerei-Meisterbetrieb aus Penzing-Ramsach begleitet KERN Dachsanierungen in Landsberg am Lech, Ammersee und Umgebung. Johannes Kern bespricht mit Ihnen, welche Teile erhalten werden können und wie Dämmung, neue Eindeckung und gewünschter Wohnraum zusammenpassen.",
          "Für die erste Einordnung helfen der Projektort, das ungefähre Baujahr sowie vorhandene Fotos und Pläne. Ob einzelne Balken verstärkt oder größere Teile erneuert werden müssen, klären wir am Gebäude und bei Bedarf mit der Tragwerksplanung. Erst daraus entsteht ein nachvollziehbarer Leistungsumfang."
        ]
      }
    ],
    "proof": {
      "title": "Den Charakter bewahren",
      "copy": "In Utting blieb die charakteristische Holzkonstruktion im Turm erkennbar. Neue Bauteile und Dachflächen wurden daran angeschlossen. Der Projektbericht zeigt konkret, wie Erhalt und Erneuerung zusammengeführt wurden.",
      "href": "/projekte/dachsanierung-utting-turm",
      "label": "Historisches Holz in Utting ansehen"
    },
    "faqs": [
      {
        "question": "Muss ein alter Dachstuhl immer ersetzt werden?",
        "answer": "Nein. Entscheidend sind Zustand, Tragfähigkeit und die geplante Nutzung. Der Umfang wird nach Bestandsprüfung festgelegt."
      },
      {
        "question": "Kann man einzelne Balken ergänzen?",
        "answer": "Das kann eine geeignete Lösung sein. Verbindungen, Lastabtrag und Schadensursache müssen dazu fachlich geklärt werden."
      },
      {
        "question": "Was passiert bei erst später sichtbaren Schäden?",
        "answer": "Der Befund kann zusätzliche Arbeiten erforderlich machen. Umfang und Auswirkungen müssen nach der Untersuchung nachvollziehbar geklärt werden."
      },
      {
        "question": "Was kostet es, einen Dachstuhl zu sanieren?",
        "answer": "Entscheidend sind der Zustand der Balken und Verbindungen, die Zugänglichkeit sowie der Umfang von Verstärkung oder Austausch. Gerüst, Witterungsschutz, Dämmung und Eindeckung können zusätzlich dazugehören. Ein pauschaler Quadratmeterpreis bildet diese Unterschiede nicht zuverlässig ab; das Angebot sollte die Leistungen und noch offenen Befunde getrennt benennen."
      },
      {
        "question": "Kann ein alter Dachstuhl erhalten und trotzdem gedämmt werden?",
        "answer": "Ja, wenn Zustand und Tragfähigkeit dafür geeignet sind. Der Dämmaufbau muss zusammen mit Luftdichtheit und Feuchteschutz geplant werden. Die passende Lösung ergibt sich aus der Bestandsprüfung und der künftigen Nutzung."
      }
    ],
    "sources": [
      {
        "label": "INFORMATIONSDIENST HOLZ: Holzbau im Bestand",
        "href": "https://informationsdienst-holz.de/artikel/holzbau-im-bestand"
      },
      {
        "label": "INFORMATIONSDIENST HOLZ: baulicher Holzschutz",
        "href": "https://informationsdienst-holz.de/artikel/holzschutz-bauliche-massnahmen-1"
      },
      {
        "label": "INFORMATIONSDIENST HOLZ: Überprüfung von Holztragwerken",
        "href": "https://informationsdienst-holz.de/publikationen/leitfaden-ueberpruefung-von-weitgespannten-holztragwerken"
      }
    ],
    "related": [
      {
        "label": "Komplette Dachsanierung von KERN",
        "href": "/dachsanierung"
      },
      {
        "label": "Budget und offene Risiken verstehen",
        "href": "/ratgeber/dachsanierung-kosten-landsberg"
      },
      {
        "label": "Aufsparren- und Zwischensparrendämmung vergleichen",
        "href": "/ratgeber/dachdaemmung-varianten"
      },
      {
        "label": "Dachsanierung in Landsberg und am Ammersee",
        "href": "/dachsanierung-landsberg-am-lech"
      }
    ],
    "project": "Dachsanierung"
  },
  {
    "slug": "aufstockung-holzbau-bestand",
    "path": "/ratgeber/aufstockung-holzbau-bestand",
    "title": "Aufstockung in Holzbauweise: Was trägt der Bestand?",
    "category": "Aufstockung",
    "description": "Mehr Wohnraum im vertrauten Haus: Eine Holzaufstockung kann vorhandene Flächen nutzen. Tragfähigkeit, Baurecht, Anschlüsse und Bauablauf müssen vorher geklärt werden.",
    "image": "/images/finning-aufstockung-montage.webp",
    "imageAlt": "Montage einer Holzaufstockung auf dem Bestandsgebäude in Finning",
    "sections": [
      {
        "id": "abschnitt-1",
        "title": "Mehr Raum, ohne den Standort aufzugeben",
        "paragraphs": [
          "Eine zusätzliche Etage kann Platz für Familie, Arbeiten oder eine eigene Wohneinheit schaffen. Sie nutzt das vorhandene Gebäude, statt automatisch neue Grundstücksfläche zu bebauen. Ob das zu Ihrem Haus passt, beginnt mit einer Prüfung des Bestands.",
          "Die Tragfähigkeit muss über die ganze Konstruktion betrachtet werden: Dach beziehungsweise Decke, tragende Wände und Fundamente gehören zum Lastweg. Holz bringt vergleichsweise wenig Eigengewicht mit, macht einen statischen Nachweis aber nicht entbehrlich."
        ]
      },
      {
        "id": "abschnitt-2",
        "title": "Die neue Etage früh sichtbar machen",
        "paragraphs": [
          "Höhe, Treppe, Raumaufteilung und Dachform beeinflussen die Alltagstauglichkeit. In der 3D-Planung lassen sich Proportionen und Anschlussstellen besprechen, bevor Bauteile gefertigt werden.",
          "Parallel werden die erforderlichen baurechtlichen und fachplanerischen Fragen geklärt. Erst daraus ergibt sich ein ausführbarer Entwurf. Unser Genehmigungsratgeber beschreibt, welche Schritte dafür in Bayern früh vorbereitet werden sollten."
        ]
      },
      {
        "id": "abschnitt-3",
        "title": "Vorfertigung und Wetterschutz abstimmen",
        "paragraphs": [
          "Holzbauteile lassen sich vorfertigen und am Gebäude zusammenführen. Damit die offene Bauphase kontrollierbar bleibt, müssen Aufmaß, Kranstellung, Montagefolge und Witterungsschutz zusammenpassen.",
          "Eine Aufstockung betrifft auch Zugänge, Innenarbeiten und möglicherweise die Nutzung während der Baustelle. KERN bespricht Umfang und Zuständigkeiten vor dem Start. Wie weit ein Projekt ausgebaut wird und welche Fachpartner beteiligt sind, wird konkret vereinbart."
        ]
      }
    ],
    "proof": {
      "title": "Auf dem bestehenden Haus gebaut",
      "copy": "Die Baustellenbilder der Aufstockung mit Gaube in Finning zeigen das geöffnete Bestandsdach, die Montage vorgefertigter Holzbauteile und die konstruktiven Anschlüsse. So wird sichtbar, wie auf einem vertrauten Haus neuer Raum entsteht.",
      "href": "/projekte/aufstockung-finning-gaube",
      "label": "Aufstockung in Finning ansehen"
    },
    "faqs": [
      {
        "question": "Ist eine Aufstockung aus Holz immer möglich?",
        "answer": "Nein. Tragfähigkeit, Geometrie, Erschließung und die baurechtlichen Voraussetzungen müssen am konkreten Gebäude geprüft werden."
      },
      {
        "question": "Kann ich währenddessen im Haus wohnen?",
        "answer": "Das hängt von Trennung der Bereiche, Schutzmaßnahmen und Innenarbeiten ab. Die Nutzung wird für die einzelnen Bauphasen geklärt."
      },
      {
        "question": "Ist das Projekt automatisch komplett bezugsfertig?",
        "answer": "Der vereinbarte Leistungsumfang entscheidet. KERN verbindet Planung und Holzbau; zusätzliche Facharbeiten und Ausbauzustände werden klar abgestimmt."
      }
    ],
    "sources": [
      {
        "label": "INFORMATIONSDIENST HOLZ: Aufbauen, umbauen, nachverdichten",
        "href": "https://informationsdienst-holz.de/publikationen/aufbauen-umbauen-nachverdichten"
      },
      {
        "label": "INFORMATIONSDIENST HOLZ: Holzbau im Bestand",
        "href": "https://informationsdienst-holz.de/artikel/holzbau-im-bestand"
      },
      {
        "label": "INFORMATIONSDIENST HOLZ: Witterungsschutz in der Bauphase",
        "href": "https://informationsdienst-holz.de/publikationen/r05t01f01-feuchtemanagement-witterungsschutz-in-der-bauphase"
      }
    ],
    "related": [
      {
        "label": "Aufstockung und Genehmigung in Bayern",
        "href": "/ratgeber/aufstockung-genehmigung-bayern"
      },
      {
        "label": "Anbau und Aufstockung von KERN",
        "href": "/anbau-aufstockung"
      }
    ],
    "project": "Aufstockung"
  },
  {
    "slug": "oekologisch-sanieren",
    "path": "/ratgeber/oekologisch-sanieren",
    "title": "Ökologisch sanieren: Bestand und Materialien bewusst wählen",
    "category": "Ökologischer Holzbau",
    "description": "Nachhaltige Sanierung beginnt beim vorhandenen Gebäude. Erhalt, passende Materialien, langlebige Details und spätere Nutzung gehören in eine gemeinsame Entscheidung.",
    "image": "/images/kern-handwerk-bestand-detail.webp",
    "imageAlt": "Handwerklich weiterentwickeltes historisches Dachtragwerk aus einer KERN-Dachsanierung",
    "sections": [
      {
        "id": "abschnitt-1",
        "title": "Bewahren, was weiter genutzt werden kann",
        "paragraphs": [
          "Ein bestehendes Haus enthält bereits Materialien, Arbeit und Geschichte. Vor einem Austausch lohnt sich die Frage, welche Bauteile fachlich geeignet sind und weiter genutzt werden können. Erhalt ist eine Möglichkeit zur Ressourcenschonung, muss aber mit Funktion und Sicherheit vereinbar sein.",
          "Wir betrachten deshalb den Zustand und die geplante Nutzung. Ein Bauteil nur aus Prinzip zu behalten wäre ebenso wenig sinnvoll wie brauchbare Substanz ohne Prüfung zu entfernen."
        ]
      },
      {
        "id": "abschnitt-2",
        "title": "Materialien über ihre Nutzungszeit betrachten",
        "paragraphs": [
          "Ein nachwachsender Rohstoff ist ein wichtiges Merkmal, aber noch keine vollständige Umweltbewertung. Herstellung, Transport, erforderliche Zusätze, Wartung, Nutzungsdauer und späterer Rückbau beeinflussen die Gesamtbetrachtung.",
          "Holz und Holzfaser können passende Möglichkeiten sein. Welche Lösung sinnvoll ist, hängt auch von Brand-, Feuchte-, Wärme- und Schallschutz ab. Produktinformationen und Umweltdeklarationen helfen beim Vergleich; sie beziehen sich auf konkrete Produkte und ersetzen keine Gebäudeplanung."
        ]
      },
      {
        "id": "abschnitt-3",
        "title": "Langlebigkeit entsteht an den Details",
        "paragraphs": [
          "Gute Anschlüsse, Feuchteschutz und eine passende Konstruktion unterstützen die langfristige Nutzung. Auch Reparierbarkeit und möglichst trennbare Schichten sollten bei der Planung bedacht werden.",
          "Für KERN bedeutet ökologischer Holzbau, vorhandene Substanz bewusst weiterzuentwickeln und neue Materialien passend einzusetzen. Ihre Wünsche, das Budget und die Anforderungen des Gebäudes werden gemeinsam abgewogen – mit dem Ziel, Ihr Haus für eine lange weitere Nutzung vorzubereiten."
        ]
      },
      {
        "id": "sanierungsentscheidung",
        "title": "Aus der Haltung einen umsetzbaren Plan machen",
        "paragraphs": [
          "Notieren Sie für Ihr Haus, welche Bauteile bleiben sollen und welche Funktionen heute nicht gut genug sind. Eine bewusste Sanierung verbindet diese Bestandsaufnahme mit Ihren Wohnzielen. Sie muss nicht mit einer vollständigen Erneuerung beginnen.",
          "Vergleichen Sie Varianten einschließlich späterer Pflege und Reparatur. Ein einfach zugängliches Detail kann langfristig wertvoller sein als eine nur auf dem Papier günstige Materialentscheidung. Für die Umsetzung werden technische Eignung, Budget und Ihre Prioritäten zusammengeführt."
        ]
      }
    ],
    "proof": {
      "title": "Haltung in der Ausführung zeigen",
      "copy": "Das Projekt in Utting verbindet erhaltene historische Holzkonstruktion mit erneuerten Dachflächen. Es zeigt, wie der vertraute Charakter eines Hauses bewahrt und die Konstruktion zugleich weiterentwickelt werden kann.",
      "href": "/projekte/dachsanierung-utting-turm",
      "label": "Erhaltenen Bestand und neue Konstruktion ansehen"
    },
    "faqs": [
      {
        "question": "Ist Holzbau immer automatisch ökologisch?",
        "answer": "Eine belastbare Bewertung betrachtet Materialherkunft, Herstellung, Konstruktion, Nutzung und Rückbau. Der Rohstoff allein reicht dafür nicht."
      },
      {
        "question": "Kann nachhaltige Sanierung auch vorhandene Materialien nutzen?",
        "answer": "Ja, wenn Zustand und Anforderungen es zulassen. Was weiterverwendet werden kann, wird fachlich am Bestand geklärt."
      },
      {
        "question": "Was ist der erste sinnvolle Schritt?",
        "answer": "Den Zustand, Ihre künftige Nutzung und die Ziele der Sanierung klären. Daraus entstehen passende Varianten statt einer vorschnellen Materialentscheidung."
      }
    ],
    "sources": [
      {
        "label": "Nachhaltiges Bauen: Materialien und Ressourcenschonung",
        "href": "https://www.nachhaltigesbauen.de/themen/materialgerechtund-aufwandsarm/"
      },
      {
        "label": "Nachhaltiges Bauen: Umwelt und Energie über den Lebenszyklus",
        "href": "https://www.nachhaltigesbauen.de/themen/umweltschonendund-energieeffizient/"
      },
      {
        "label": "Nachhaltiges Bauen: Wirtschaftlichkeit und Langlebigkeit",
        "href": "https://www.nachhaltigesbauen.de/themen/wirtschaftlichund-langlebig/"
      }
    ],
    "related": [
      {
        "label": "Holzfaserdämmung bei der Dachsanierung",
        "href": "/ratgeber/holzfaserdaemmung-dachsanierung"
      },
      {
        "label": "Johannes Kern und seine Haltung",
        "href": "/ueber-kern#haltung"
      },
      {
        "label": "Ökologische Materialien konkret vergleichen",
        "href": "/ratgeber/oekologische-sanierung-materialwahl"
      },
      {
        "label": "Altmaterialien vor dem Rückbau klären",
        "href": "/ratgeber/schadstoffe-rueckbau-altbau"
      }
    ],
    "project": "Dachsanierung",
    "dateModified": "2026-10-18"
  }
];

export const focusedGuides: FocusedGuideContent[] = [...existingGuides.map(withManufacturerDetails).map(withDecisionDetails), ...expandedGuides, ...manufacturerGuides, ...decisionGuides];
