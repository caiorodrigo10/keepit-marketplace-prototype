'use client'

import React, { useState } from 'react'
import { Bell, Package, Tag, Megaphone, X } from '@phosphor-icons/react'

// Mock notifications - in production these would come from an API
const mockNotifications = [
  {
    id: '1',
    type: 'order',
    title: 'Seu pedido está pronto!',
    message: 'O pedido #KPT-ABC123 está disponível para retirada no locker Shopping Ibirapuera.',
    time: '5 min atrás',
    read: false,
    icon: Package,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: '2',
    type: 'promo',
    title: '10% OFF em Bebidas',
    message: 'Aproveite o desconto especial em todas as bebidas até domingo!',
    time: '2 horas atrás',
    read: false,
    icon: Tag,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: '3',
    type: 'system',
    title: 'Novo locker disponível',
    message: 'Agora você pode retirar no Shopping Morumbi! Confira os horários.',
    time: '1 dia atrás',
    read: true,
    icon: Megaphone,
    color: 'bg-blue-100 text-blue-600',
  },
]

interface HeaderNotificationsButtonProps {
  className?: string
}

const HeaderNotificationsButton: React.FC<HeaderNotificationsButtonProps> = ({
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState(mockNotifications)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  return (
    <div className={`relative ${className}`}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors"
        title="Notificações"
      >
        <Bell size={24} weight={unreadCount > 0 ? 'fill' : 'regular'} />

        {/* Badge */}
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Content */}
          <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Notificações</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Marcar todas como lidas
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notification) => {
                  const Icon = notification.icon
                  return (
                    <div
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={`
                        px-4 py-3 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors
                        ${!notification.read ? 'bg-emerald-50/50' : ''}
                      `}
                    >
                      <div className="flex gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.color}`}
                        >
                          <Icon size={20} weight="fill" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-medium text-gray-900 text-sm">
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-1.5" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <Bell size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Sem notificações</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-sm text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Ver todas as notificações
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default HeaderNotificationsButton
