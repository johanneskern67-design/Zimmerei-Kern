import type { Metadata } from "next";
import { SiteFrame } from "./components/SiteChrome";
import MixHome from "./components/MixHome";
import "./home-redesign.css";
import "./mix-home.css";

const homeTitle = "Dachsanierung Landsberg & Ammersee | Zimmerei KERN";
const homeDescription = "Komplette Dachsanierung im Bestand – persönlich begleitet von Zimmerermeister Johannes Kern. Für Landsberg, Ammersee und Umgebung. KERN kennenlernen.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "KERN Zimmerei & Holzbau",
    title: homeTitle,
    description: homeDescription,
    url: "/",
    images: [{ url: "/images/kern-social.webp", width: 1400, height: 735, alt: "Dachsanierung der Zimmerei Kern im Raum Landsberg am Lech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/images/kern-social.webp"],
  },
};


export default function Home(){return <SiteFrame><MixHome /></SiteFrame>;}
