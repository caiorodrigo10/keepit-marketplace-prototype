"use client"

import { useAOS } from "@/lib/hooks/useAOS"

export default function AOSInit({ children }: { children: React.ReactNode }) {
  useAOS()
  return <>{children}</>
}
