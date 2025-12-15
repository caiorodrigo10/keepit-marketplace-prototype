'use client'

import React from 'react'
import { Clock, Warning, WarningCircle } from '@phosphor-icons/react'
import { useCountdown, CountdownStatus } from '@lib/hooks/use-countdown'

interface PickupCountdownProps {
  expiresAt: string
  onExpire?: () => void
  showProgress?: boolean
  totalHours?: number
  compact?: boolean
}

const statusConfig: Record<
  CountdownStatus,
  {
    bgColor: string
    textColor: string
    progressColor: string
    icon: React.ReactNode
    label: string
  }
> = {
  normal: {
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    progressColor: 'bg-green-500',
    icon: <Clock size={20} weight="fill" />,
    label: 'Retire em',
  },
  warning: {
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    progressColor: 'bg-amber-500',
    icon: <Warning size={20} weight="fill" />,
    label: 'Retire em',
  },
  urgent: {
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    progressColor: 'bg-red-500',
    icon: <WarningCircle size={20} weight="fill" />,
    label: 'Retire em',
  },
  expired: {
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-600',
    progressColor: 'bg-gray-400',
    icon: <WarningCircle size={20} weight="fill" />,
    label: 'Expirado',
  },
}

const PickupCountdown: React.FC<PickupCountdownProps> = ({
  expiresAt,
  onExpire,
  showProgress = true,
  totalHours = 24,
  compact = false,
}) => {
  const countdown = useCountdown(expiresAt, {
    totalHours,
    onExpire,
  })

  const config = statusConfig[countdown.status]

  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bgColor} ${config.textColor}`}
      >
        {config.icon}
        <span className="font-semibold text-sm">
          {countdown.isExpired ? 'Expirado' : countdown.formattedTime}
        </span>
      </div>
    )
  }

  return (
    <div className={`rounded-xl p-4 ${config.bgColor}`}>
      {/* Header */}
      <div className={`flex items-center gap-2 ${config.textColor}`}>
        {config.icon}
        <span className="font-medium">{config.label}</span>
      </div>

      {/* Timer */}
      <div className={`mt-2 ${config.textColor}`}>
        {countdown.isExpired ? (
          <div>
            <p className="text-2xl font-bold">Tempo expirado</p>
            <p className="text-sm mt-1 opacity-80">
              Entre em contato com o suporte
            </p>
          </div>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold font-mono tracking-tight">
              {countdown.formattedTime}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {showProgress && !countdown.isExpired && (
        <div className="mt-3">
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <div
              className={`h-full ${config.progressColor} rounded-full transition-all duration-1000 ease-linear`}
              style={{ width: `${countdown.percentage}%` }}
            />
          </div>
          <p className={`text-xs mt-1 ${config.textColor} opacity-70`}>
            {Math.round(countdown.percentage)}% do tempo restante
          </p>
        </div>
      )}

      {/* Urgent Warning */}
      {countdown.status === 'urgent' && !countdown.isExpired && (
        <div
          className={`mt-3 flex items-center gap-2 text-sm ${config.textColor} animate-pulse`}
        >
          <WarningCircle size={16} weight="fill" />
          <span>Seu pedido expira em breve!</span>
        </div>
      )}
    </div>
  )
}

export default PickupCountdown
