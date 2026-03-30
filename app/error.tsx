"use client"

import { useEffect } from "react"

const DEBUG_ENDPOINT =
  "http://127.0.0.1:7570/ingest/95a8885c-498d-4c93-b393-8bda79aa9d3d"
const SESSION_ID = "2fba08"

export default function ErrorBoundaryPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // #region agent log
    fetch(DEBUG_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": SESSION_ID,
      },
      body: JSON.stringify({
        sessionId: SESSION_ID,
        location: "app/error.tsx:useEffect",
        message: "segment_error_boundary",
        data: {
          errorMessage: error.message,
          digest: error.digest,
          errorStack: error.stack,
        },
        timestamp: Date.now(),
        hypothesisId: "H3",
      }),
    }).catch(() => {})
    // #endregion
  }, [error])

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 bg-neutral-950 px-4 py-16 text-center text-white">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <p className="max-w-md text-sm text-white/70">{error.message}</p>
      <button
        type="button"
        className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
