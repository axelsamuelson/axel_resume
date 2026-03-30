"use client"

import { useEffect } from "react"

const DEBUG_ENDPOINT =
  "http://127.0.0.1:7570/ingest/95a8885c-498d-4c93-b393-8bda79aa9d3d"
const SESSION_ID = "2fba08"

export default function GlobalError({
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
        location: "app/global-error.tsx:useEffect",
        message: "root_global_error_boundary",
        data: {
          errorMessage: error.message,
          digest: error.digest,
          errorStack: error.stack,
        },
        timestamp: Date.now(),
        hypothesisId: "H4",
      }),
    }).catch(() => {})
    // #endregion
  }, [error])

  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
          <h2 className="text-lg font-semibold">Application error</h2>
          <p className="max-w-md text-sm text-white/70">{error.message}</p>
          <button
            type="button"
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
