'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import {
  ArrowLeft,
  Package,
  ShareNetwork,
  Question,
  CheckCircle,
  Warning,
} from '@phosphor-icons/react'
import Link from 'next/link'

import QRCodeDisplay from '@modules/pickup/components/qr-code-display'
import PickupCountdown from '@modules/pickup/components/pickup-countdown'
import LockerInfo from '@modules/pickup/components/locker-info'
import PickupInstructions from '@modules/pickup/components/pickup-instructions'
import OrderTimeline from '@modules/order/components/order-timeline'
import { getPickupOrderById, PickupOrder } from '@lib/mock-data/pickup'

export default function RetiradaPage() {
  const params = useParams()
  const id = params.id as string

  const [showTimeline, setShowTimeline] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)

  // Get mock data
  const order = getPickupOrderById(id) || getPickupOrderById('pickup_1')

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <Package size={64} className="text-gray-300 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900">
            Pedido não encontrado
          </h1>
          <p className="text-gray-600 mt-2">
            Verifique o código e tente novamente
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-4 text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft size={20} />
            Voltar ao início
          </Link>
        </div>
      </div>
    )
  }

  const isReady = order.status === 'at_locker'
  const isInTransit = order.status === 'in_transit'
  const totalPrice = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/account/orders"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Meus pedidos</span>
            </Link>

            <h1 className="font-semibold text-gray-900">
              Pedido {order.orderId}
            </h1>

            <button
              onClick={() => setShowShareModal(true)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              <ShareNetwork size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-lg">
        {/* Status Banner */}
        {isReady ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle
                  size={24}
                  weight="fill"
                  className="text-emerald-600"
                />
              </div>
              <div>
                <h2 className="font-semibold text-emerald-900">
                  Pronto para Retirada!
                </h2>
                <p className="text-sm text-emerald-700">
                  Seu pedido está aguardando no locker
                </p>
              </div>
            </div>
          </div>
        ) : isInTransit ? (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Warning size={24} weight="fill" className="text-amber-600" />
              </div>
              <div>
                <h2 className="font-semibold text-amber-900">A caminho</h2>
                <p className="text-sm text-amber-700">
                  Seu pedido está sendo enviado ao locker
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/* QR Code Section */}
        {isReady && (
          <section className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <QRCodeDisplay
              code={order.qrCodeData}
              size={200}
              backupCode={order.backupCode}
              expiresAt={order.expiresAt}
            />
          </section>
        )}

        {/* Countdown */}
        {isReady && (
          <section className="mb-6">
            <PickupCountdown
              expiresAt={order.expiresAt}
              showProgress={true}
              totalHours={24}
            />
          </section>
        )}

        {/* Locker Info */}
        <section className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">
            Local de retirada
          </h3>
          <LockerInfo
            name={order.locker.name}
            address={`${order.locker.address}, ${order.locker.city}`}
            hours={order.locker.hours}
            isOpen={order.locker.isOpen}
            lat={order.locker.lat}
            lng={order.locker.lng}
            phone={order.locker.phone}
          />
        </section>

        {/* Pickup Instructions */}
        {isReady && (
          <section className="mb-6">
            <PickupInstructions />
          </section>
        )}

        {/* Order Items */}
        <section className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Itens do pedido</h3>
            <span className="text-sm text-gray-500">
              {order.items.length}{' '}
              {order.items.length === 1 ? 'item' : 'itens'}
            </span>
          </div>

          <div className="space-y-3">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
              >
                {/* Image placeholder */}
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Package size={24} className="text-gray-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                </div>

                <p className="font-medium text-gray-900">
                  R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-lg text-gray-900">
              R$ {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </section>

        {/* Timeline Toggle */}
        <section className="mb-6">
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">
              Acompanhar pedido
            </span>
            <span
              className={`transform transition-transform ${showTimeline ? 'rotate-180' : ''}`}
            >
              ▼
            </span>
          </button>

          {showTimeline && (
            <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
              <OrderTimeline
                currentStatus={order.status}
                events={order.timeline}
                orientation="vertical"
              />
            </div>
          )}
        </section>

        {/* Help Button */}
        <section className="mb-6">
          <Link
            href="/suporte"
            className="flex items-center justify-center gap-2 w-full p-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            <Question size={20} />
            Preciso de ajuda
          </Link>
        </section>
      </main>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Compartilhar pedido
            </h3>
            <p className="text-gray-600 mb-4">
              Envie os dados de retirada para outra pessoa
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  const text = `Retirada Keepit\nPedido: ${order.orderId}\nCódigo: ${order.backupCode}\nLocal: ${order.locker.name}\nEndereço: ${order.locker.address}`
                  if (navigator.share) {
                    navigator.share({ text })
                  } else {
                    navigator.clipboard.writeText(text)
                    alert('Copiado para a área de transferência!')
                  }
                  setShowShareModal(false)
                }}
                className="w-full p-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700"
              >
                Compartilhar
              </button>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
