'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShoppingCart,
  Heart,
  Package,
  MagnifyingGlass,
  Bell,
} from '@phosphor-icons/react'

type EmptyStateType = 'cart' | 'favorites' | 'orders' | 'search' | 'notifications'

interface EmptyStateProps {
  type: EmptyStateType
  title?: string
  description?: string
  action?: {
    label: string
    href: string
  }
}

const emptyStateConfig: Record<
  EmptyStateType,
  {
    icon: React.ComponentType<{ size?: number; weight?: 'thin' | 'light' }>
    defaultTitle: string
    defaultDescription: string
    defaultAction: { label: string; href: string }
    color: string
  }
> = {
  cart: {
    icon: ShoppingCart,
    defaultTitle: 'Seu carrinho está vazio',
    defaultDescription: 'Adicione produtos para começar suas compras',
    defaultAction: { label: 'Ver produtos', href: '/' },
    color: 'text-gray-300',
  },
  favorites: {
    icon: Heart,
    defaultTitle: 'Nenhum favorito ainda',
    defaultDescription: 'Toque no coração para salvar produtos que você ama',
    defaultAction: { label: 'Explorar produtos', href: '/' },
    color: 'text-red-200',
  },
  orders: {
    icon: Package,
    defaultTitle: 'Você ainda não fez pedidos',
    defaultDescription: 'Que tal fazer sua primeira compra?',
    defaultAction: { label: 'Fazer primeiro pedido', href: '/' },
    color: 'text-emerald-200',
  },
  search: {
    icon: MagnifyingGlass,
    defaultTitle: 'Nenhum resultado encontrado',
    defaultDescription: 'Tente buscar por outro termo ou categoria',
    defaultAction: { label: 'Ver todos os produtos', href: '/produtos' },
    color: 'text-blue-200',
  },
  notifications: {
    icon: Bell,
    defaultTitle: 'Sem notificações',
    defaultDescription: 'Você está em dia! Nenhuma notificação no momento.',
    defaultAction: { label: 'Ir para início', href: '/' },
    color: 'text-amber-200',
  },
}

const EmptyState: React.FC<EmptyStateProps> = ({
  type,
  title,
  description,
  action,
}) => {
  const config = emptyStateConfig[type]
  const Icon = config.icon

  const displayTitle = title ?? config.defaultTitle
  const displayDescription = description ?? config.defaultDescription
  const displayAction = action ?? config.defaultAction

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {/* Icon */}
      <div className={`mb-6 ${config.color}`}>
        <Icon size={80} weight="thin" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {displayTitle}
      </h3>

      {/* Description */}
      <p className="text-gray-500 mb-6 max-w-sm">{displayDescription}</p>

      {/* Action Button */}
      <Link
        href={displayAction.href}
        className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
      >
        {displayAction.label}
      </Link>
    </div>
  )
}

export default EmptyState
