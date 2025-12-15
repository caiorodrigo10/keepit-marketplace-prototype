/**
 * Badge Component
 * Visual labels for products (Novo, Promoção, Bestseller, Exclusivo)
 */

import { ReactNode } from "react"
import { cn } from "@/lib/util/cn"
import { Product } from "@/types/keepit"

interface BadgeProps {
  variant?: Product["badge"] | "default"
  children: ReactNode
  className?: string
}

const variantStyles = {
  new: "bg-keepit-green-primary text-white font-medium",
  promotion: "bg-error-red text-white font-medium",
  bestseller: "bg-warning-yellow text-white font-medium",
  exclusive: "bg-keepit-black text-white font-medium",
  default: "bg-keepit-gray-200 text-keepit-gray-700 font-medium",
}

export default function Badge({
  variant = "default",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-xs rounded-full transition-all",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
