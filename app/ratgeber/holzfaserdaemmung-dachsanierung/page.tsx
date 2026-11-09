import { focusedGuides } from "../focused-guides";
import FocusedGuide, { guideMetadata } from "../FocusedGuide";
const guide = focusedGuides[2];
const seoTitle = "Dachsanierung mit Holzfaser in Landsberg | KERN";
const seoDescription = "Dachsanierung mit Holzfaserdämmung im Raum Landsberg: Aufbau, Materialwahl und Anschlüsse verstehen. KERN erklärt, worauf es im Bestand ankommt.";
const baseMetadata = guideMetadata(guide);
export const metadata = { ...baseMetadata, title: { absolute: seoTitle }, description: seoDescription,
  openGraph: { ...baseMetadata.openGraph, title: seoTitle, description: seoDescription },
  twitter: { card: "summary_large_image" as const, title: seoTitle, description: seoDescription, images: [guide.image] } };
export default function Page() { return <FocusedGuide guide={guide} />; }
