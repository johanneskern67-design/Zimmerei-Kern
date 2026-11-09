import { planningSequence } from "../content/planning-sequence";

export default function PlanningSequence() {
  if (!planningSequence.approved || !planningSequence.project || planningSequence.images.some(image => !image.src || !image.alt)) return null;
  return <section className="planning-sequence section-shell" aria-label="Vom Bestand zum Ergebnis">
    <h2>Ihr Haus. Vorher durchdacht.</h2>
    <div className="planning-sequence-images">{planningSequence.images.map(image => <figure key={image.label}>
      <img src={image.src} alt={image.alt} width={1200} height={900} loading="lazy" />
      <figcaption>{image.label}</figcaption>
    </figure>)}</div>
  </section>;
}
