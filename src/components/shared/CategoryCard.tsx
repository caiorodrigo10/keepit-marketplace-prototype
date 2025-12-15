/**
 * CategoryCard Component
 * Display product categories with icon and optional color
 */

"use client"

import Link from "next/link"
import { Category } from "@/types/keepit"
import { cn } from "@/lib/util/cn"
import { CategoryIcon } from "@/lib/util/category-icons"

interface CategoryCardProps {
  category: Category
  onClick?: () => void
  className?: string
  variant?: "default" | "promotional"
}

export default function CategoryCard({
  category,
  onClick,
  className,
  variant = "default",
}: CategoryCardProps) {
  const isPromotional = category.type === "promotional" || variant === "promotional"

  return (
    <Link
      href={`/categorias/${category.slug}`}
      className={cn(
        "group flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-200 cursor-pointer",
        isPromotional
          ? "bg-keepit-gray-50 hover:bg-keepit-gray-100"
          : "bg-white hover:bg-keepit-gray-50 border border-keepit-gray-200",
        className
      )}
      onClick={onClick}
    >
      {/* Icon - Phosphor Icon (solid) */}
      <div className="mb-3 transition-transform duration-200 group-hover:scale-105">
        <CategoryIcon
          emoji={category.icon}
          size={48}
          className="text-keepit-gray-700"
        />
      </div>

      {/* Category Name */}
      <h3 className="text-base font-semibold text-center text-keepit-gray-900 mb-1">
        {category.name}
      </h3>

      {/* Description */}
      {category.description && (
        <p className="text-xs text-center line-clamp-2 text-keepit-gray-600">
          {category.description}
        </p>
      )}

      {/* Promotional Badge */}
      {isPromotional && (
        <div className="mt-2 px-2 py-1 bg-keepit-green-primary rounded-full">
          <span className="text-xs font-medium text-white">Especial</span>
        </div>
      )}
    </Link>
  )
}
