import Image from "next/image"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  id?: string
  title?: string
  period?: string
  summary?: string
  bullets?: string[]
  imageSrc?: string
  tags?: string[]
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  revealDelay?: number
  containerClassName?: string
}

export default function ProjectCard({
  id,
  title = "Role title",
  period,
  summary,
  bullets = [],
  imageSrc = "/placeholder.jpg",
  tags = [],
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  revealDelay = 0,
  containerClassName,
}: Props) {
  return (
    <article id={id} className={cn("scroll-mt-6", containerClassName)}>
      <RevealOnView delay={revealDelay} variant="media">
        <div
          className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          <div className="relative min-h-[min(72vh,640px)] overflow-hidden rounded-[1.35rem] lg:min-h-[calc(100svh-2rem)]">
            <div className="absolute inset-0 z-0">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, min(1200px, 70vw)"
                className="object-cover"
                priority={priority}
              />
            </div>

            <div
              className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}99, ${gradientTo}66)`,
              }}
              aria-hidden
            />

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-[12%] via-black/48 via-[40%] to-black/[0.96]"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-end px-4 pb-8 pt-28 sm:px-6 sm:pb-10 sm:pt-36 lg:px-8 lg:pb-12 lg:pt-40">
              <div className="w-full max-w-2xl rounded-xl border border-white/[0.08] bg-black/25 px-5 py-6 backdrop-blur-sm sm:rounded-xl sm:px-6 sm:py-7">
                {tags.length > 0 ? (
                  <p className="mb-5 text-xs font-medium tracking-wide text-white/45">
                    {tags.join(" · ")}
                  </p>
                ) : null}

                <header>
                  <h2 className="text-balance text-lg font-medium leading-snug tracking-tight text-white sm:text-xl">
                    {title}
                  </h2>
                  {period ? (
                    <p className="mt-2 text-sm text-white/50">{period}</p>
                  ) : null}
                </header>

                {summary ? (
                  <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-[15px] sm:leading-[1.65]">
                    {summary}
                  </p>
                ) : null}

                {bullets.length > 0 ? (
                  <ul
                    className={cn(
                      "space-y-3 border-l border-white/10 pl-4 text-sm leading-relaxed text-white/75 sm:text-[15px]",
                      summary ? "mt-6" : "mt-5"
                    )}
                  >
                    {bullets.map((b, i) => (
                      <li key={i} className="pl-1">
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </RevealOnView>
    </article>
  )
}
