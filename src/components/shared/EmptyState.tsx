/**
 * EmptyState Component
 * Display when no data is available with optional CTA
 */

import { ReactNode } from "react"
import { cn } from "@/lib/util/cn"

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-6 text-center",
        className
      )}
    >
      {icon && (
        <div className="mb-6 text-keepit-gray-500 text-6xl">{icon}</div>
      )}
      <h3 className="text-2xl font-bold text-keepit-gray-900 mb-3">{title}</h3>
      {description && (
        <p className="text-base text-keepit-gray-700 mb-6 max-w-md">
          {description}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 bg-keepit-green-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}
