/**
 * Container Component
 * Max-width wrapper with responsive padding for consistent layout
 */

import { ReactNode } from "react"
import { cn } from "@/lib/util/cn"

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "full"
}

const sizeClasses = {
  sm: "max-w-[640px]",
  md: "max-w-[1024px]",
  lg: "max-w-[1440px]",
  full: "max-w-full",
}

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}
