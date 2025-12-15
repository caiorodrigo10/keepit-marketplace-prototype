'use client'

import React from 'react'
import { CheckCircle, XCircle, Warning, Info, X } from '@phosphor-icons/react'
import { useToast, ToastType } from '@lib/context/toast-context'

const toastConfig: Record<
  ToastType,
  {
    icon: React.ComponentType<{ size?: number; weight?: 'fill' | 'regular' }>
    bgColor: string
    textColor: string
    borderColor: string
  }
> = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    borderColor: 'border-green-200',
  },
  error: {
    icon: XCircle,
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    borderColor: 'border-red-200',
  },
  warning: {
    icon: Warning,
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-800',
    borderColor: 'border-amber-200',
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-200',
  },
}

const ToastContainer: React.FC = () => {
  const { toasts, hideToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const config = toastConfig[toast.type]
        const Icon = config.icon

        return (
          <div
            key={toast.id}
            className={`
              pointer-events-auto
              flex items-start gap-3 p-4 rounded-xl border shadow-lg
              ${config.bgColor} ${config.borderColor}
              animate-slide-in-right
            `}
            role="alert"
          >
            <Icon size={20} weight="fill" className={config.textColor} />

            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${config.textColor}`}>
                {toast.message}
              </p>

              {toast.action && (
                <button
                  onClick={toast.action.onClick}
                  className={`mt-2 text-sm font-semibold ${config.textColor} underline hover:no-underline`}
                >
                  {toast.action.label}
                </button>
              )}
            </div>

            <button
              onClick={() => hideToast(toast.id)}
              className={`flex-shrink-0 ${config.textColor} hover:opacity-70 transition-opacity`}
            >
              <X size={18} />
            </button>
          </div>
        )
      })}

      <style jsx global>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default ToastContainer
