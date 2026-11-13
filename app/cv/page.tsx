import type { Metadata } from "next";
import { site } from "@/lib/content";
import CvDocument from "./CvDocument";

export const metadata: Metadata = {
  title: `CV – ${site.name}`,
  description: site.description,
  alternates: { canonical: "/cv" },
};

// Short version: two A4 pages.
export default function CV() {
  return <CvDocument variant="short" />;
}
