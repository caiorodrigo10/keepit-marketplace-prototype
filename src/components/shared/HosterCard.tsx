/**
 * HosterCard Component
 * Display hoster/establishment information with locker availability
 */

"use client"

import Image from "next/image"
import Link from "next/link"
import { Hoster } from "@/types/keepit"
import { cn } from "@/lib/util/cn"
import { MapPin, Clock } from "@phosphor-icons/react"

interface HosterCardProps {
  hoster: Hoster
  onClick?: () => void
  className?: string
  showAvailability?: boolean
}

export default function HosterCard({
  hoster,
  onClick,
  className,
  showAvailability = true,
}: HosterCardProps) {
  const availabilityPercentage = hoster.availableSlots && hoster.totalSlots
    ? (hoster.availableSlots / hoster.totalSlots) * 100
    : 0

  const getAvailabilityColor = () => {
    if (availabilityPercentage > 50) return "text-success-green"
    if (availabilityPercentage > 20) return "text-warning-yellow"
    return "text-error-red"
  }

  const getAvailabilityBg = () => {
    if (availabilityPercentage > 50) return "bg-success-light"
    if (availabilityPercentage > 20) return "bg-warning-light"
    return "bg-error-light"
  }

  return (
    <div
      className={cn(
        "group bg-white rounded-lg border border-keepit-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <Link href={`/hosters/${hoster.id}`} className="block">
        {/* Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden bg-keepit-gray-100">
          <Image
            src={hoster.image}
            alt={hoster.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Hoster Name */}
          <h3 className="text-lg font-bold text-keepit-gray-900 mb-2">
            {hoster.name}
          </h3>

          {/* Location */}
          <div className="flex items-start gap-2 mb-3">
            <MapPin className="text-keepit-gray-500 text-lg mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-keepit-gray-700">
                {hoster.location}
              </p>
              <p className="text-xs text-keepit-gray-500">{hoster.address}</p>
              <p className="text-xs text-keepit-gray-500">
                {hoster.city}, {hoster.state}
              </p>
            </div>
          </div>

          {/* Description */}
          {hoster.description && (
            <p className="text-sm text-keepit-gray-600 mb-3 line-clamp-2">
              {hoster.description}
            </p>
          )}

          {/* Opening Hours */}
          {hoster.openingHours && (
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-keepit-gray-500 text-lg flex-shrink-0" />
              <p className="text-sm text-keepit-gray-700 font-medium">
                {hoster.openingHours}
              </p>
            </div>
          )}

          {/* Availability Status */}
          {showAvailability && hoster.availableSlots !== undefined && hoster.totalSlots && (
            <div
              className={cn(
                "flex items-center justify-between p-3 rounded-lg mt-3",
                getAvailabilityBg()
              )}
            >
              <div>
                <p className="text-xs text-keepit-gray-700 font-medium mb-1">
                  Compartimentos Disponíveis
                </p>
                <p className={cn("text-lg font-bold", getAvailabilityColor())}>
                  {hoster.availableSlots} / {hoster.totalSlots}
                </p>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-keepit-gray-300"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - availabilityPercentage / 100)}`}
                    className={getAvailabilityColor()}
                  />
                </svg>
                <span
                  className={cn(
                    "absolute inset-0 flex items-center justify-center text-sm font-bold",
                    getAvailabilityColor()
                  )}
                >
                  {Math.round(availabilityPercentage)}%
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
