"use client"

import dynamic from "next/dynamic"

const DotGridShader = dynamic(() => import("@/components/DotGridShader"), {
  ssr: false,
})

export default function DotGridShaderClient() {
  return <DotGridShader />
}
