'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, ArrowLeft, Trash } from '@phosphor-icons/react'
import { useFavorites } from '@lib/context/favorites-context'
import { useToast } from '@lib/context/toast-context'
import FavoritesGrid from '@modules/favorites/components/favorites-grid'
import EmptyState from '@modules/common/components/empty-state'

export default function FavoritosPage() {
  const { favorites, clearFavorites, count } = useFavorites()
  const { showToast } = useToast()

  const handleClearAll = () => {
    if (window.confirm('Tem certeza que deseja remover todos os favoritos?')) {
      clearFavorites()
      showToast({
        type: 'info',
        message: 'Todos os favoritos foram removidos',
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Voltar</span>
            </Link>

            <h1 className="font-semibold text-gray-900 flex items-center gap-2">
              <Heart size={20} weight="fill" className="text-red-500" />
              Meus Favoritos
              {count > 0 && (
                <span className="text-sm text-gray-500 font-normal">
                  ({count})
                </span>
              )}
            </h1>

            {count > 0 && (
              <button
                onClick={handleClearAll}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                <Trash size={16} />
                <span className="hidden sm:inline">Limpar</span>
              </button>
            )}

            {count === 0 && <div className="w-16" />}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {count > 0 ? (
          <>
            {/* Info Banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-emerald-800">
                <strong>Dica:</strong> Os favoritos são salvos no seu dispositivo.
                Faça login para sincronizar entre dispositivos.
              </p>
            </div>

            {/* Favorites Grid */}
            <FavoritesGrid />
          </>
        ) : (
          <EmptyState type="favorites" />
        )}
      </main>
    </div>
  )
}
