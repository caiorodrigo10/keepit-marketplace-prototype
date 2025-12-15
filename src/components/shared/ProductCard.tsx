/**
 * ProductCard Component
 * ESTILO 100% BASEADO NO TEMPLATE 2 (product__item--style2)
 * Adaptado para Tailwind CSS mantendo visual idêntico
 */

"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types/keepit"
import { cn } from "@/lib/util/cn"
import { getDiscountPercentage } from "@/lib/util/get-mock-data"
import { Star, Storefront } from "@phosphor-icons/react"

interface ProductCardProps {
  product: Product
  onClick?: () => void
  className?: string
  showVendor?: boolean
}

export default function ProductCard({
  product,
  onClick,
  className,
  showVendor = true,
}: ProductCardProps) {
  const discount = getDiscountPercentage(product)
  const productUrl = `/produtos/${product.id}`

  return (
    <div className={cn("product-item-wrapper group", className)}>
      {/* Product Item Inner - Border que muda no hover */}
      <div className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden transition-all duration-300 hover:border-keepit-green-primary relative">

        {/* Badges */}
        {discount > 0 && (
          <div className="absolute top-4 left-4 z-10 bg-warning-yellow text-keepit-gray-900 text-xs font-medium px-2.5 py-0.5 rounded">
            -{discount}%
          </div>
        )}

        {product.badge === 'new' && (
          <div className="absolute top-4 left-4 z-10 bg-keepit-black text-white text-xs font-medium px-2.5 py-0.5 rounded">
            Novo
          </div>
        )}

        <Link href={productUrl} className="block">
          {/* Image Thumb */}
          <div className="relative w-full aspect-[237/175] overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="px-4 py-4">
            {/* Title */}
            <h5 className="text-base md:text-lg font-medium text-keepit-gray-900 mb-0 line-clamp-1 hover:text-keepit-green-primary transition-colors">
              {product.name}
            </h5>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 mt-1 mb-2 text-sm">
                <span className="text-keepit-gray-600 font-bold text-xs">
                  {product.rating.toFixed(1)}
                </span>
                <Star weight="fill" className="text-warning-yellow text-base" />
                {product.reviewCount && (
                  <span className="text-keepit-gray-600 font-bold text-xs">
                    ({product.reviewCount})
                  </span>
                )}
              </div>
            )}

            {/* Vendor Name */}
            {showVendor && product.vendor && (
              <div className="flex items-center gap-1 mb-2">
                <Storefront weight="fill" className="text-keepit-green-primary text-sm" />
                <span className="text-xs text-keepit-gray-500">
                  By {product.vendor.name}
                </span>
              </div>
            )}

            {/* Footer - Grid Layout como no template */}
            <div className="grid gap-2 mt-2">
              {/* Price */}
              <div className="flex items-center gap-2">
                <h4 className="text-xl md:text-2xl font-bold text-keepit-gray-900 mb-0">
                  R${product.price.toFixed(2)}
                  {product.originalPrice && product.originalPrice > product.price && ' /'}
                </h4>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-keepit-gray-500">
                    <del>R${product.originalPrice.toFixed(2)}</del>
                  </span>
                )}
              </div>

              {/* Progress Bar - Sold indicator */}
              {product.stock !== undefined && (
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-keepit-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-keepit-green-primary rounded-full transition-all"
                      style={{ width: `${Math.min(100, (product.stock / 100) * 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-keepit-gray-600">
                    Sold: {Math.floor(product.stock / 2)}/{product.stock}
                  </span>
                </div>
              )}

              {/* Add Button - Outline style que vira solid no hover do card */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onClick?.()
                }}
                className="w-full px-4 py-2 border-2 border-keepit-green-primary text-keepit-green-primary font-medium rounded-lg transition-all duration-300 group-hover:bg-keepit-green-primary group-hover:text-white"
              >
                Add
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
