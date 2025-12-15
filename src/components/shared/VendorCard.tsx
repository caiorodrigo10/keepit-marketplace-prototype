/**
 * VendorCard Component
 * Based on Template 2 TopVendorsOne component
 * Displays vendor/store information with promotional offers
 */

"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/util/cn"

interface VendorCardProps {
  vendor: {
    id: string
    name: string
    logo: string
    deliveryTime?: string
    promoText?: string
    productImages?: string[] // Up to 5 product images
  }
  onClick?: () => void
  className?: string
}

export default function VendorCard({
  vendor,
  onClick,
  className,
}: VendorCardProps) {
  return (
    <div
      className={cn(
        "vendor-card text-center px-4 pb-6 bg-white rounded-lg border border-keepit-gray-200 hover:border-keepit-gray-300 transition-all duration-200",
        className
      )}
      onClick={onClick}
    >
      <Link href={`/vendors/${vendor.id}`} className="block">
        {/* Vendor Logo */}
        <div className="flex justify-center mb-3 mt-3">
          <div className="relative w-20 h-20">
            <Image
              src={vendor.logo}
              alt={vendor.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Vendor Name */}
        <h6 className="text-base font-semibold text-keepit-gray-900 mt-8 mb-2">
          {vendor.name}
        </h6>

        {/* Delivery Time */}
        {vendor.deliveryTime && (
          <span className="text-sm text-keepit-gray-700 block mb-2">
            {vendor.deliveryTime}
          </span>
        )}

        {/* Promo Button */}
        {vendor.promoText && (
          <div className="inline-block">
            <span className="inline-block bg-keepit-green-primary text-white text-xs font-medium px-4 py-1.5 rounded-full mt-2">
              {vendor.promoText}
            </span>
          </div>
        )}

        {/* Product Images Grid */}
        {vendor.productImages && vendor.productImages.length > 0 && (
          <div className="flex justify-center flex-wrap gap-2 mt-5">
            {vendor.productImages.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-white border border-keepit-gray-200 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </Link>
    </div>
  )
}
