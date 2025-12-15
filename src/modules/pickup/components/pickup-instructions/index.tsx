'use client'

import React from 'react'
import { MapPin, QrCode, DoorOpen, Package } from '@phosphor-icons/react'

interface PickupInstructionsProps {
  compact?: boolean
}

const steps = [
  {
    icon: MapPin,
    title: 'Vá até o locker',
    description: 'Dirija-se ao locker Keepit indicado',
  },
  {
    icon: QrCode,
    title: 'Escaneie o QR code',
    description: 'Use a câmera do locker para escanear',
  },
  {
    icon: DoorOpen,
    title: 'Aguarde a abertura',
    description: 'A porta abrirá automaticamente',
  },
  {
    icon: Package,
    title: 'Retire e feche',
    description: 'Pegue seu pedido e feche a porta',
  },
]

const PickupInstructions: React.FC<PickupInstructionsProps> = ({
  compact = false,
}) => {
  if (compact) {
    return (
      <div className="bg-gray-50 rounded-xl p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Como retirar</h4>
        <ol className="space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-medium flex-shrink-0">
                {index + 1}
              </span>
              <span>{step.title}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-xl p-5">
      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Package size={20} className="text-emerald-600" />
        Como retirar seu pedido
      </h4>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="flex gap-4">
              {/* Step Number & Line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-emerald-200 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-emerald-600" weight="fill" />
                  <h5 className="font-medium text-gray-900">{step.title}</h5>
                </div>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PickupInstructions
