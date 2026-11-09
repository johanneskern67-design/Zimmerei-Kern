import { expandedGuides } from "../expanded-guides";
import FocusedGuide, { guideMetadata } from "../FocusedGuide";
const guide = expandedGuides.find((item) => item.slug === "anbau-holz-planen")!;
const seoTitle = "Anbau aus Holz am Ammersee planen | KERN";
const seoDescription = "Anbau aus Holz am Ammersee: zusätzlichen Wohnraum schaffen und passend ans bestehende Haus anschließen. Mit persönlicher Begleitung durch Johannes Kern.";
const baseMetadata = guideMetadata(guide);
export const metadata = { ...baseMetadata, title: { absolute: seoTitle }, description: seoDescription,
  openGraph: { ...baseMetadata.openGraph, title: seoTitle, description: seoDescription },
  twitter: { card: "summary_large_image" as const, title: seoTitle, description: seoDescription, images: [guide.image] } };
export default function Page() { return <FocusedGuide guide={guide} />; }
