import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShaderClient from "@/components/dot-grid-shader-client"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import {
  about,
  certificationsSection,
  contactDetails,
  educationExperiences,
  experiences,
  languagesSection,
  skillsSection,
  workExperiences,
} from "@/lib/cv-data"

export default function Page() {
  return (
    <main className="bg-neutral-950 text-white">
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[480px_1fr]">
          <aside className="lg:sticky lg:top-4 lg:max-h-[calc(100svh-2rem)] lg:self-start">
            <div className="relative flex max-h-[calc(100svh-2rem)] flex-col overflow-y-auto overflow-x-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 z-0 opacity-5 mix-blend-soft-light">
                <DotGridShaderClient />
              </div>
              <RevealOnView
                as="div"
                intensity="hero"
                className="relative z-10 flex flex-col gap-10"
                staggerChildren
              >
                <div>
                  <div className="mb-8 flex items-center gap-4 sm:gap-5">
                    <div
                      className="shrink-0 w-[5.5rem] rounded-2xl border border-white/10 p-0.5 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] sm:w-24"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #0f172a, #6d28d9)",
                      }}
                    >
                      <div className="relative aspect-square w-full overflow-hidden rounded-[1.15rem] bg-black">
                        <Image
                          src="/images/axel_profile_picture.jpeg"
                          alt="Axel Samuelson"
                          fill
                          className="object-cover"
                          sizes="96px"
                          priority
                        />
                      </div>
                    </div>
                    <div className="min-w-0 leading-[1.1]">
                      <span className="block text-2xl font-extrabold tracking-tight">axel</span>
                      <div className="mt-0.5 flex items-center gap-2">
                        <span className="text-2xl font-extrabold tracking-tight">samuelson</span>
                        <span
                          className="h-2 w-2 shrink-0 rounded-full bg-white/60"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>

                  <AnimatedHeading
                    className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                    lines={["Building profitable DTC brands,", "from acquisition to P&L."]}
                  />

                  <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-white/70 sm:text-base">{about}</p>

                  <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-white/70">
                    <p className="text-xs font-semibold tracking-widest text-white/50">CONTACT</p>
                    <p>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="text-white/85 underline decoration-white/25 underline-offset-2 transition-colors hover:text-white hover:decoration-white/50"
                      >
                        {contactDetails.email}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`tel:${contactDetails.phoneHref}`}
                        className="text-white/85 underline decoration-white/25 underline-offset-2 transition-colors hover:text-white hover:decoration-white/50"
                      >
                        {contactDetails.phone}
                      </a>
                    </p>
                    <p className="text-white/80">{contactDetails.location}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button asChild size="lg" className="rounded-full">
                      <Link href={`mailto:${contactDetails.email}`}>
                        Get in touch
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                      <Link href="/cv">
                        <FileDown className="mr-2 h-4 w-4" />
                        CV som PDF
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-10">
                    <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">EXPERIENCE</p>
                    <ul className="grid grid-cols-1 gap-x-4 gap-y-2.5 text-base font-bold leading-tight text-white/25 sm:grid-cols-2 sm:text-lg">
                      {workExperiences.map((exp) => (
                        <li key={exp.id}>
                          <Link
                            href={`#${exp.id}`}
                            className="transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm"
                          >
                            {exp.linkLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">EDUCATION</p>
                    <ul className="grid grid-cols-1 gap-x-4 gap-y-2.5 text-base font-bold leading-tight text-white/25 sm:grid-cols-2 sm:text-lg">
                      {educationExperiences.map((exp) => (
                        <li key={exp.id}>
                          <Link
                            href={`#${exp.id}`}
                            className="transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm"
                          >
                            {exp.linkLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 space-y-6 border-t border-white/10 pt-10">
                    <div>
                      <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
                        {skillsSection.title}
                      </p>
                      <dl className="space-y-3 text-sm text-white/70">
                        {skillsSection.blocks.map((b) => (
                          <div key={b.label}>
                            <dt className="font-semibold text-white/85">{b.label}</dt>
                            <dd className="mt-0.5 leading-relaxed">{b.text}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div>
                      <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
                        {certificationsSection.title}
                      </p>
                      <ul className="space-y-2 text-sm leading-relaxed text-white/70">
                        {certificationsSection.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
                        {languagesSection.title}
                      </p>
                      <p className="text-sm text-white/70">{languagesSection.text}</p>
                    </div>
                  </div>
                </div>
              </RevealOnView>
            </div>
          </aside>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <ProjectCard
                key={exp.id}
                id={exp.id}
                title={exp.title}
                period={exp.period}
                summary={exp.summary}
                bullets={exp.bullets}
                imageSrc={exp.imageSrc}
                tags={exp.tags}
                priority={idx === 0}
                gradientFrom={exp.gradientFrom}
                gradientTo={exp.gradientTo}
                revealDelay={idx * 0.05}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
