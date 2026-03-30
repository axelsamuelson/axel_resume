"use client"

import { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const PLACEHOLDER = "/placeholder.jpg"

type Props = {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

/**
 * Plain <img> avoids Next/Image + fill edge cases inside animated parents.
 * Falls back to /placeholder.jpg if the file is missing.
 */
export default function ProjectCardImage({ src, alt, priority, className }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src)

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  const onError = useCallback(() => {
    setCurrentSrc((prev) => (prev === PLACEHOLDER ? prev : PLACEHOLDER))
  }, [])

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={onError}
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  )
}
