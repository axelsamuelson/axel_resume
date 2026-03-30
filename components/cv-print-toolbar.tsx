"use client"

import Link from "next/link"
import { ArrowLeft, FileDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CvPrintToolbar() {
  return (
    <div
      className="print:hidden sticky top-0 z-50 border-b border-zinc-200/90 bg-white/90 px-4 py-3 shadow-[0_1px_0_0_rgba(24,24,27,0.06)] backdrop-blur-md"
      role="toolbar"
      aria-label="CV-export"
    >
      <div className="mx-auto flex max-w-[210mm] flex-wrap items-center justify-center gap-3 sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <Button type="button" size="lg" className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800" onClick={() => window.print()}>
            <FileDown className="size-4" />
            Spara som PDF
          </Button>
          <Button type="button" size="lg" variant="outline" className="rounded-full border-zinc-300 bg-white hover:bg-zinc-50" asChild>
            <Link href="/">
              <ArrowLeft className="size-4" />
              Tillbaka till portfolio
            </Link>
          </Button>
        </div>
        <p className="w-full text-center text-xs leading-relaxed text-zinc-500 sm:w-auto sm:text-right">
          Välj &quot;Spara som PDF&quot; i utskriftsdialogen.
        </p>
      </div>
    </div>
  )
}
