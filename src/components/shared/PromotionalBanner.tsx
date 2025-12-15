/**
 * PromotionalBanner Component
 * Based on Template 2 PromotionalTwo component
 * Displays promotional offers with product images
 */

"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/util/cn"
import { Plus } from "@phosphor-icons/react"

interface PromotionalBannerProps {
  title: string
  subtitle: string
  productImage: string
  backgroundImage?: string
  backgroundColor?: string
  href: string
  className?: string
}

export default function PromotionalBanner({
  title,
  subtitle,
  productImage,
  backgroundImage,
  backgroundColor = "bg-keepit-gray-100",
  href,
  className,
}: PromotionalBannerProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden p-8",
        backgroundColor,
        className
      )}
    >
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex-1">
          <span className="text-sm text-keepit-gray-900 font-medium block mb-2">
            {subtitle}
          </span>
          <h6 className="text-lg font-semibold text-keepit-gray-900 mb-0">
            {title}
          </h6>
          <Link
            href={href}
            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-keepit-gray-900 border-b-2 border-keepit-gray-900 hover:text-keepit-green-primary hover:border-keepit-green-primary transition-colors"
          >
            Shop Now
            <Plus weight="bold" className="text-base" />
          </Link>
        </div>

        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src={productImage}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
