import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"

import CvPrintToolbar from "@/components/cv-print-toolbar"
import {
  about,
  certificationsSection,
  contactDetails,
  educationExperiences,
  languagesSection,
  skillsSection,
  workExperiences,
  type Experience,
} from "@/lib/cv-data"

export const metadata: Metadata = {
  title: "CV - Axel Samuelson",
  description: "Growth leader - CV / resume (print to PDF)",
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="border-b border-zinc-200 pb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 print:border-zinc-300">
      {children}
    </h2>
  )
}

function ExperienceBlock({ exp }: { exp: Experience }) {
  return (
    <section className="break-inside-avoid border-b border-zinc-100 py-5 last:border-b-0 first:pt-0 print:py-4">
      <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-zinc-950">{exp.title}</h3>
      <p className="mt-1 text-xs font-medium tabular-nums text-zinc-500">{exp.period}</p>
      {exp.summary ? (
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-700">{exp.summary}</p>
      ) : null}
      {exp.bullets.length > 0 ? (
        <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 marker:text-violet-600 print:marker:text-zinc-800">
          {exp.bullets.map((b, i) => (
            <li key={`${exp.id}-b${i}`} className="pl-0.5">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

export default function CvPage() {
  return (
    <>
      <CvPrintToolbar />
      <main className="min-h-screen bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100 text-zinc-900 print:bg-white print:text-black">
        <article className="mx-auto max-w-[210mm] px-4 py-10 pb-20 print:max-w-none print:px-0 print:py-0 print:pb-0">
          <div className="overflow-hidden rounded-3xl border border-zinc-200/90 bg-white px-7 py-9 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] ring-1 ring-zinc-950/[0.04] sm:px-11 sm:py-11 print:rounded-none print:border-0 print:px-0 print:py-0 print:shadow-none print:ring-0">
            <header className="flex flex-col gap-8 border-b border-zinc-200 pb-10 sm:flex-row sm:items-start sm:gap-10 print:pb-8">
              <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-zinc-100 shadow-lg ring-4 ring-white sm:mx-0 print:h-28 print:w-28">
                <Image
                  src="/images/axel_profile_picture.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="128px"
                  priority
                />
              </div>
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 print:text-zinc-800">Curriculum vitae</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-[2rem] sm:leading-tight">Axel Samuelson</h1>
                <p className="mt-2 text-sm font-medium text-zinc-600">
                  Building profitable DTC brands, from acquisition to P&L.
                </p>
                <div className="mt-5 flex flex-col gap-2 text-sm text-zinc-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1 sm:gap-y-1">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-[3px] transition-colors hover:text-violet-800 hover:decoration-violet-300 print:text-zinc-900 print:no-underline"
                  >
                    {contactDetails.email}
                  </a>
                  <span className="hidden text-zinc-300 sm:inline" aria-hidden>
                    ·
                  </span>
                  <a
                    href={`tel:${contactDetails.phoneHref}`}
                    className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-[3px] transition-colors hover:text-violet-800 hover:decoration-violet-300 print:text-zinc-900 print:no-underline"
                  >
                    {contactDetails.phone}
                  </a>
                  <span className="hidden text-zinc-300 sm:inline" aria-hidden>
                    ·
                  </span>
                  <span className="text-zinc-700 print:text-zinc-900">{contactDetails.location}</span>
                </div>
              </div>
            </header>

            <section className="mt-10 print:mt-8">
              <SectionTitle>About</SectionTitle>
              <p className="mt-4 text-sm leading-[1.65] text-zinc-800">{about}</p>
            </section>

            <section className="mt-10 print:mt-8">
              <SectionTitle>Work experience</SectionTitle>
              <div className="mt-1">
                {workExperiences.map((exp) => (
                  <ExperienceBlock key={exp.id} exp={exp} />
                ))}
              </div>
            </section>

            <section className="mt-10 print:mt-8">
              <SectionTitle>Education</SectionTitle>
              <div className="mt-1">
                {educationExperiences.map((exp) => (
                  <ExperienceBlock key={exp.id} exp={exp} />
                ))}
              </div>
            </section>

            <section className="mt-10 print:mt-8">
              <SectionTitle>{skillsSection.title}</SectionTitle>
              <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3 print:grid-cols-1">
                {skillsSection.blocks.map((b) => (
                  <div key={b.label} className="min-w-0">
                    <dt className="font-semibold text-zinc-900">{b.label}</dt>
                    <dd className="mt-1 leading-relaxed text-zinc-700">{b.text}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="mt-10 print:mt-8">
              <SectionTitle>{certificationsSection.title}</SectionTitle>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-800 marker:text-violet-600 print:marker:text-zinc-800">
                {certificationsSection.items.map((item) => (
                  <li key={item} className="pl-0.5">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 print:mt-8">
              <SectionTitle>{languagesSection.title}</SectionTitle>
              <p className="mt-4 text-sm leading-relaxed text-zinc-800">{languagesSection.text}</p>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}
