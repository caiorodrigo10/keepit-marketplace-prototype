'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { CartProvider, useCart } from '@/modules/cart/context/CartContext'
import { GoogleMapsProvider } from '@/components/location/GoogleMapsProvider'
import MiniCart from '@/modules/cart/components/MiniCart'
import type { SelectedLocation } from '@/types/location'

// Dynamic import para evitar SSR issues
const LocationPickerModal = dynamic(
  () => import('@/components/location/LocationPickerModal'),
  { ssr: false }
)

function CartWithLockerSelector({ children }: { children: React.ReactNode }) {
  const { selectLocker } = useCart()
  const [isLockerModalOpen, setIsLockerModalOpen] = useState(false)
  const [initialLocation, setInitialLocation] = useState<SelectedLocation | null>(null)

  const handleOpenLockerSelector = () => {
    // Usar localização padrão (Av. Paulista) como exemplo
    setInitialLocation({
      lat: -23.5613,
      lng: -46.6563,
      address: 'Av. Paulista, São Paulo - SP',
      formatted_address: 'Av. Paulista, São Paulo - SP',
      place_id: 'ChIJN1uHgK1ZzpQR8ZhALt9oLRo'
    })
    setIsLockerModalOpen(true)
  }

  const handleLockerConfirm = (location: SelectedLocation & { selectedLocker?: any }) => {
    // Salvar o locker selecionado no CartContext
    if (location.selectedLocker) {
      selectLocker({
        id: location.selectedLocker.id,
        name: location.selectedLocker.name,
        address: location.selectedLocker.address,
        lat: location.selectedLocker.lat,
        lng: location.selectedLocker.lng,
        available: location.selectedLocker.available
      })
    }
    setIsLockerModalOpen(false)
  }

  return (
    <>
      {children}
      <MiniCart onOpenLockerSelector={handleOpenLockerSelector} />

      {/* GoogleMapsProvider apenas quando o modal estiver aberto */}
      {isLockerModalOpen && initialLocation && (
        <GoogleMapsProvider>
          <LocationPickerModal
            isOpen={isLockerModalOpen}
            onClose={() => setIsLockerModalOpen(false)}
            onConfirm={handleLockerConfirm}
            initialLocation={initialLocation}
          />
        </GoogleMapsProvider>
      )}
    </>
  )
}

export default function CartProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <CartWithLockerSelector>{children}</CartWithLockerSelector>
    </CartProvider>
  )
}
