'use client'

import React from 'react'
import {
  CheckCircle,
  Package,
  Truck,
  MapPin,
  ShoppingBag,
  XCircle,
  Circle,
} from '@phosphor-icons/react'

export type OrderStatus =
  | 'confirmed'
  | 'preparing'
  | 'in_transit'
  | 'at_locker'
  | 'picked_up'
  | 'cancelled'

export interface TimelineEvent {
  status: OrderStatus
  timestamp?: string
  description?: string
}

interface OrderTimelineProps {
  currentStatus: OrderStatus
  events: TimelineEvent[]
  orientation?: 'vertical' | 'horizontal'
}

const statusConfig: Record<
  OrderStatus,
  {
    label: string
    icon: React.ComponentType<{ size?: number; weight?: 'fill' | 'regular' }>
    color: string
    bgColor: string
  }
> = {
  confirmed: {
    label: 'Pedido Confirmado',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  preparing: {
    label: 'Preparando',
    icon: Package,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  in_transit: {
    label: 'A caminho do locker',
    icon: Truck,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  at_locker: {
    label: 'Disponível no locker',
    icon: MapPin,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  picked_up: {
    label: 'Retirado',
    icon: ShoppingBag,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
  cancelled: {
    label: 'Cancelado',
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
}

const statusOrder: OrderStatus[] = [
  'confirmed',
  'preparing',
  'in_transit',
  'at_locker',
  'picked_up',
]

const OrderTimeline: React.FC<OrderTimelineProps> = ({
  currentStatus,
  events,
  orientation = 'vertical',
}) => {
  const currentIndex = statusOrder.indexOf(currentStatus)
  const isCancelled = currentStatus === 'cancelled'

  const formatDate = (dateString?: string) => {
    if (!dateString) return null
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getEventForStatus = (status: OrderStatus) => {
    return events.find((e) => e.status === status)
  }

  if (orientation === 'horizontal') {
    return (
      <div className="w-full overflow-x-auto pb-2">
        <div className="flex items-center justify-between min-w-[500px]">
          {statusOrder.map((status, index) => {
            const config = statusConfig[status]
            const Icon = config.icon
            const isCompleted = index < currentIndex
            const isCurrent = index === currentIndex && !isCancelled
            const isPending = index > currentIndex

            return (
              <React.Fragment key={status}>
                {/* Step */}
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      ${
                        isCompleted || isCurrent
                          ? `${config.bgColor} ${config.color}`
                          : 'bg-gray-100 text-gray-400'
                      }
                      ${isCurrent ? 'ring-2 ring-offset-2 ring-emerald-500' : ''}
                    `}
                  >
                    {isCompleted ? (
                      <CheckCircle size={24} weight="fill" />
                    ) : isCurrent ? (
                      <Icon size={20} weight="fill" />
                    ) : (
                      <Circle size={20} />
                    )}
                  </div>
                  <span
                    className={`
                      mt-2 text-xs text-center max-w-[80px]
                      ${isCurrent ? 'font-semibold text-gray-900' : 'text-gray-500'}
                    `}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Connector Line */}
                {index < statusOrder.length - 1 && (
                  <div
                    className={`
                      flex-1 h-0.5 mx-2
                      ${index < currentIndex ? 'bg-green-500' : 'bg-gray-200'}
                    `}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }

  // Vertical orientation
  return (
    <div className="relative">
      {statusOrder.map((status, index) => {
        const config = statusConfig[status]
        const Icon = config.icon
        const event = getEventForStatus(status)
        const isCompleted = index < currentIndex
        const isCurrent = index === currentIndex && !isCancelled
        const isPending = index > currentIndex
        const isLast = index === statusOrder.length - 1

        return (
          <div key={status} className="relative flex gap-4">
            {/* Vertical Line */}
            {!isLast && (
              <div
                className={`
                  absolute left-5 top-10 w-0.5 h-full -translate-x-1/2
                  ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                `}
              />
            )}

            {/* Icon */}
            <div
              className={`
                relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                ${
                  isCompleted || isCurrent
                    ? `${config.bgColor} ${config.color}`
                    : 'bg-gray-100 text-gray-400'
                }
                ${isCurrent ? 'ring-2 ring-offset-2 ring-emerald-500' : ''}
              `}
            >
              {isCompleted ? (
                <CheckCircle size={24} weight="fill" />
              ) : isCurrent ? (
                <Icon size={20} weight="fill" />
              ) : (
                <Circle size={20} />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 pb-8 ${isPending ? 'opacity-50' : ''}`}>
              <h4
                className={`
                  font-medium
                  ${isCurrent ? 'text-gray-900' : 'text-gray-700'}
                `}
              >
                {config.label}
              </h4>

              {event?.timestamp && (
                <p className="text-sm text-gray-500 mt-0.5">
                  {formatDate(event.timestamp)}
                </p>
              )}

              {event?.description && (
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              )}

              {isCurrent && status === 'at_locker' && (
                <p className="text-sm text-emerald-600 font-medium mt-1">
                  Pronto para retirada!
                </p>
              )}

              {isPending && (
                <p className="text-sm text-gray-400 mt-0.5">Aguardando</p>
              )}
            </div>
          </div>
        )
      })}

      {/* Cancelled State */}
      {isCancelled && (
        <div className="relative flex gap-4 mt-4 pt-4 border-t border-red-200">
          <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-100 text-red-600">
            <XCircle size={24} weight="fill" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-red-700">Pedido Cancelado</h4>
            {getEventForStatus('cancelled')?.timestamp && (
              <p className="text-sm text-red-500 mt-0.5">
                {formatDate(getEventForStatus('cancelled')?.timestamp)}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderTimeline
