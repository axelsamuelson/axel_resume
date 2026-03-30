import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"
import ProjectCardImage from "@/components/project-card-image"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
}

// Server Component (no client hooks)
export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <div
        className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] lg:h-full"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="relative overflow-hidden rounded-[1.35rem] bg-black lg:h-full">
          {/* Image stays outside RevealOnView so it is never opacity:0 (fixes hidden / unloaded images). */}
          <div
            className={cn(
              "relative z-0 min-h-[14rem] w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-0 lg:h-full",
              imageContainerClassName
            )}
          >
            <ProjectCardImage
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              priority={priority}
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/30" />
          </div>

          <RevealOnView
            delay={revealDelay}
            variant="media"
            className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between"
          >
            <div className="flex flex-wrap gap-2 p-4 sm:p-5">
              {tags.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="pointer-events-auto bg-black/50 text-white border-white/20 backdrop-blur-sm"
                >
                  {t}
                </Badge>
              ))}
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                  <p className="text-sm text-white/70">{subtitle}</p>
                </div>
                <Link
                  href={href}
                  className="pointer-events-auto inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20 sm:self-auto"
                  aria-label={`Open case study: ${title}`}
                >
                  Case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </article>
  )
}
