import { serviceAreaSummary } from "../lib/site-profile";

export default function ServiceAreaCopy({ summary = serviceAreaSummary }: { summary?: string } = {}) {
  return <><p>{summary}</p><p>Dazu gehören auch Eresing, Hurlach, Igling, Weil, Scheuring und Egling sowie Schwifting, Pürgen, Reisch und Hofstetten. Am Ammersee und in seiner Umgebung betreuen wir unter anderem Vorhaben in Utting, Schondorf, Dießen, Finning und Windach.</p></>;
}
