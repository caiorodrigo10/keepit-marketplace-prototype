'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle,
  MapPin,
  Clock,
  Bell,
  ArrowRight,
  ShoppingBag,
  Package,
} from '@phosphor-icons/react'
import { HttpTypes } from '@medusajs/types'

import QRCodeDisplay from '@modules/pickup/components/qr-code-display'
import Confetti from './confetti'

interface OrderCompletedTemplateProps {
  order: HttpTypes.StoreOrder
}

// Mock locker data - in production this would come from the order
const mockLocker = {
  name: 'Shopping Ibirapuera',
  address: 'Av. Ibirapuera, 3103 - Piso G2, Moema',
  city: 'São Paulo, SP',
  hours: '10:00 às 22:00',
}

// Generate a pickup code based on order ID
const generatePickupCode = (orderId: string) => {
  const hash = orderId.slice(-6).toUpperCase()
  return `KPT-${hash}`
}

// Generate expiry date (24h from now)
const getExpiryDate = () => {
  const date = new Date()
  date.setHours(date.getHours() + 24)
  return date.toISOString()
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
  order,
}) => {
  const [showConfetti, setShowConfetti] = useState(true)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const pickupCode = generatePickupCode(order.id)
  const qrCodeData = `https://keepit.com.br/pickup/${order.id}`
  const expiresAt = getExpiryDate()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const displayId = order.display_id ? `#${order.display_id}` : order.id.slice(-8).toUpperCase()

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Confetti Animation */}
      {showConfetti && <Confetti />}

      <div className="container mx-auto px-4 py-8 max-w-lg">
        {/* Success Header */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isAnimated
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          {/* Animated Check Icon */}
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="absolute w-20 h-20 bg-emerald-200 rounded-full animate-ping opacity-25" />
            <div className="relative w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle
                size={48}
                weight="fill"
                className="text-emerald-600"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Pedido Confirmado!
          </h1>
          <p className="text-gray-600">
            Obrigado pela sua compra. Seu pedido está sendo preparado.
          </p>
        </div>

        {/* Order Number */}
        <div
          className={`bg-white rounded-xl border border-gray-200 p-4 mb-6 text-center transition-all duration-700 delay-100 ${
            isAnimated
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-gray-500 mb-1">Número do pedido</p>
          <p className="text-xl font-bold text-gray-900">{displayId}</p>
        </div>

        {/* Pickup Location Card */}
        <div
          className={`bg-white rounded-xl border border-gray-200 p-5 mb-6 transition-all duration-700 delay-200 ${
            isAnimated
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <MapPin size={20} weight="fill" className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Retire em
              </h3>
              <p className="text-emerald-600 font-medium">{mockLocker.name}</p>
              <p className="text-sm text-gray-600 mt-0.5">
                {mockLocker.address}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Clock size={16} />
            <span>Horário: {mockLocker.hours}</span>
          </div>

          {/* QR Code */}
          <div className="border-t border-gray-100 pt-5 mt-2">
            <p className="text-center text-sm text-gray-500 mb-4">
              Use o QR code abaixo para retirar seu pedido
            </p>
            <QRCodeDisplay
              code={qrCodeData}
              size={180}
              backupCode={pickupCode}
              expiresAt={expiresAt}
            />
          </div>
        </div>

        {/* Estimated Time */}
        <div
          className={`bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 transition-all duration-700 delay-300 ${
            isAnimated
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Clock size={20} weight="fill" className="text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium text-amber-900">
                Previsão de disponibilidade
              </h4>
              <p className="text-sm text-amber-700">
                Aproximadamente 2 horas
              </p>
            </div>
          </div>
        </div>

        {/* Notification Info */}
        <div
          className={`bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 transition-all duration-700 delay-400 ${
            isAnimated
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Bell size={20} weight="fill" className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-blue-900">
                Fique tranquilo!
              </h4>
              <p className="text-sm text-blue-700">
                Você receberá uma notificação quando seu pedido estiver pronto
                para retirada.
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div
          className={`bg-white rounded-xl border border-gray-200 p-4 mb-6 transition-all duration-700 delay-500 ${
            isAnimated
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Package size={18} />
            Resumo do pedido
          </h3>

          <div className="space-y-2 text-sm">
            {order.items?.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-600">
                <span>
                  {item.quantity}x {item.product_title || item.title}
                </span>
                <span>
                  R${' '}
                  {((item.unit_price || 0) * item.quantity / 100)
                    .toFixed(2)
                    .replace('.', ',')}
                </span>
              </div>
            ))}

            <div className="border-t border-gray-100 pt-2 mt-2">
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total</span>
                <span>
                  R${' '}
                  {((order.total || 0) / 100).toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`space-y-3 transition-all duration-700 delay-600 ${
            isAnimated
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <Link
            href={`/retirada/${order.id}`}
            className="flex items-center justify-center gap-2 w-full p-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
          >
            <span>Ver detalhes da retirada</span>
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full p-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            <ShoppingBag size={20} />
            <span>Continuar comprando</span>
          </Link>
        </div>

        {/* Email Confirmation Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Enviamos os detalhes do pedido para o seu email.
        </p>
      </div>
    </div>
  )
}

export default OrderCompletedTemplate
