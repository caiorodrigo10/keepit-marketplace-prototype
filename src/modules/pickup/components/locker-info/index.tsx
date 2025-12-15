'use client'

import React from 'react'
import { MapPin, Clock, NavigationArrow, Phone } from '@phosphor-icons/react'

interface LockerInfoProps {
  name: string
  address: string
  hours: string
  isOpen?: boolean
  lat?: number
  lng?: number
  phone?: string
  onNavigate?: () => void
}

const LockerInfo: React.FC<LockerInfoProps> = ({
  name,
  address,
  hours,
  isOpen = true,
  lat,
  lng,
  phone,
  onNavigate,
}) => {
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate()
    } else if (lat && lng) {
      // Open in Google Maps
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
      window.open(url, '_blank')
    }
  }

  const handleCall = () => {
    if (phone) {
      window.location.href = `tel:${phone}`
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <MapPin size={20} weight="fill" className="text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600 mt-0.5">{address}</p>
          </div>
        </div>

        {/* Status Badge */}
        <span
          className={`
            px-2.5 py-1 rounded-full text-xs font-medium
            ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
          `}
        >
          {isOpen ? 'Aberto' : 'Fechado'}
        </span>
      </div>

      {/* Hours */}
      <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
        <Clock size={16} />
        <span>Horário: {hours}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleNavigate}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
        >
          <NavigationArrow size={18} weight="fill" />
          <span>Como chegar</span>
        </button>

        {phone && (
          <button
            onClick={handleCall}
            className="flex items-center justify-center px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <Phone size={18} weight="fill" />
          </button>
        )}
      </div>
    </div>
  )
}

export default LockerInfo
