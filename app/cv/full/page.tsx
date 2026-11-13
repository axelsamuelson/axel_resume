import type { Metadata } from "next";
import { site } from "@/lib/content";
import CvDocument from "../CvDocument";

export const metadata: Metadata = {
  title: `CV (full) – ${site.name}`,
  description: site.description,
  alternates: { canonical: "/cv/full" },
};

// Full version: every result, how-point and earlier-role description.
export default function FullCV() {
  return <CvDocument variant="full" />;
}
