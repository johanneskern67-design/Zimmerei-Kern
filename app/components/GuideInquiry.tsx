"use client";

import { useState } from "react";
import InquiryLink from "./InquiryLink";
import InquiryResponseNote from "./InquiryResponseNote";
import ArrowMark from "./ArrowMark";
import { recordAnonymousAnalytics } from "../lib/anonymous-analytics";

const questions = [
  { label: "Was möchten Sie verändern?", options: ["Dach vollständig sanieren", "Dämmung verbessern", "Mehr Licht oder Platz", "Noch unsicher"] },
  { label: "Wie wird das Dachgeschoss genutzt?", options: ["Bewohnt", "Nicht ausgebaut", "Ausbau geplant", "Noch offen"] },
  { label: "Wann möchten Sie das Vorhaben angehen?", options: ["Möglichst bald", "Im kommenden Jahr", "Später / erste Orientierung"] },
];

export default function GuideInquiry({ project = "Dachsanierung", title, copy, buttonLabel, hint }: { project?: string; title?: string; copy?: string; buttonLabel?: string; hint?: string }) {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const href = `/kontakt?projekt=${encodeURIComponent(project)}#projektanfrage`;
  function choose(index: number, value: string) {
    const next = answers.map((answer, i) => i === index ? value : answer);
    setAnswers(next);
    if (!started) { setStarted(true); recordAnonymousAnalytics(window.location.pathname, "roof_check_started"); }
    if (!completed && next.every(Boolean)) { setCompleted(true); recordAnonymousAnalytics(window.location.pathname, "roof_check_completed"); }
  }
  function handoff() {
    try {
      window.sessionStorage.setItem("kern-inquiry-draft", JSON.stringify({ projekt: project, nachricht: `Freiwilliger Dach-Check:\n${questions.map((q, i) => `${q.label} ${answers[i]}`).join("\n")}` }));
      recordAnonymousAnalytics(window.location.pathname, "roof_check_handoff");
      window.location.assign(href);
    } catch { setStorageError(true); }
  }
  return <section className="friendly-inquiry section-shell guide-inquiry" aria-label="Projektanfrage">
    <div><p className="section-label">Ihr Vorhaben</p><h2>{title || <>Was bedeutet das<br /><em>für Ihr Haus?</em></>}</h2></div>
    <div className="friendly-inquiry-copy">
      <p>{copy || "Eine erste Idee genügt. Johannes Kern prüft Ihre Angaben persönlich. Fotos und vorhandene Pläne können Sie freiwillig ergänzen."}</p>
      <InquiryLink className="text-link" href={href}>{buttonLabel ?? (project === "Dachsanierung" ? "Dachprojekt prüfen lassen" : "Projektanfrage starten")} <ArrowMark /></InquiryLink>
      {hint ? <p className="inquiry-response-note">{hint}</p> : <InquiryResponseNote />}
      <p className="roof-inquiry-next">Mit Ihrer Anfrage erteilen Sie noch keinen Auftrag.</p>
      {project === "Dachsanierung" ? <details className="customer-details"><summary>Dach-Check: drei freiwillige Orientierungsfragen</summary><p>Wenn Sie Ihre Ideen erst ordnen möchten. Sie können jederzeit direkt die Projektanfrage nutzen.</p>
        {questions.map((q, index) => <label key={q.label}>{q.label}<select value={answers[index]} onChange={e => choose(index, e.target.value)}><option value="">Noch offen</option>{q.options.map(option => <option key={option}>{option}</option>)}</select></label>)}
        <button className="button button-secondary" type="button" disabled={!answers.every(Boolean)} onClick={handoff}>Antworten in Projektanfrage übernehmen</button>
        {storageError ? <p role="alert">Ihr Browser kann die Antworten nicht übernehmen. Nutzen Sie die direkte Projektanfrage oben und ergänzen Sie Ihre Angaben dort.</p> : null}
      </details> : null}
    </div>
  </section>;
}
