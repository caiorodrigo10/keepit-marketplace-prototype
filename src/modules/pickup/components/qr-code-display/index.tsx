'use client'

import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Copy, Check, Clock } from '@phosphor-icons/react'

interface QRCodeDisplayProps {
  code: string
  size?: number
  backupCode: string
  expiresAt?: string
  onCopy?: () => void
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  code,
  size = 200,
  backupCode,
  expiresAt,
  onCopy,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(backupCode)
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const formatExpiryTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const isExpiringSoon = () => {
    if (!expiresAt) return false
    const now = new Date()
    const expiry = new Date(expiresAt)
    const diffHours = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60)
    return diffHours < 1
  }

  return (
    <div className="flex flex-col items-center">
      {/* QR Code Container */}
      <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
        <QRCodeSVG
          value={code}
          size={size}
          level="H"
          includeMargin={false}
          bgColor="#ffffff"
          fgColor="#1a1a1a"
        />
      </div>

      {/* Backup Code */}
      <div className="mt-4 flex flex-col items-center">
        <p className="text-sm text-gray-500 mb-2">Código de retirada</p>
        <div className="flex items-center gap-2">
          <span className="text-xl font-mono font-bold tracking-wider text-gray-900">
            {backupCode}
          </span>
          <button
            onClick={handleCopy}
            className={`p-2 rounded-lg transition-all duration-200 ${
              copied
                ? 'bg-green-100 text-green-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={copied ? 'Copiado!' : 'Copiar código'}
          >
            {copied ? (
              <Check size={18} weight="bold" />
            ) : (
              <Copy size={18} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Expiry Warning */}
      {expiresAt && (
        <div
          className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            isExpiringSoon()
              ? 'bg-red-50 text-red-600'
              : 'bg-amber-50 text-amber-700'
          }`}
        >
          <Clock size={16} weight="fill" />
          <span>Válido até {formatExpiryTime(expiresAt)}</span>
        </div>
      )}
    </div>
  )
}

export default QRCodeDisplay
