'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, Clock, Star } from '@phosphor-icons/react'
import { useFavorites, FavoriteProduct } from '@lib/context/favorites-context'
import { useToast } from '@lib/context/toast-context'

interface FavoritesGridProps {
  onAddToCart?: (product: FavoriteProduct) => void
}

const FavoritesGrid: React.FC<FavoritesGridProps> = ({ onAddToCart }) => {
  const { favorites, removeFavorite } = useFavorites()
  const { showToast } = useToast()

  const handleRemove = (product: FavoriteProduct) => {
    removeFavorite(product.id)
    showToast({
      type: 'info',
      message: `${product.title} removido dos favoritos`,
    })
  }

  const handleAddToCart = (product: FavoriteProduct) => {
    if (onAddToCart) {
      onAddToCart(product)
    }
    showToast({
      type: 'success',
      message: `${product.title} adicionado ao carrinho`,
    })
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {favorites.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow"
        >
          {/* Image */}
          <div className="relative aspect-square bg-gray-100">
            <Link href={`/produto/${product.id}`}>
              {product.thumbnail ? (
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <ShoppingCart size={48} />
                </div>
              )}
            </Link>

            {/* Remove Button */}
            <button
              onClick={() => handleRemove(product)}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
              title="Remover dos favoritos"
            >
              <Heart size={18} weight="fill" />
            </button>

            {/* Discount Badge */}
            {product.discount && product.discount > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{product.discount}%
              </div>
            )}

            {/* Pickup Badge */}
            {product.availableForPickup && (
              <div className="absolute bottom-2 left-2 bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                <Clock size={12} weight="fill" />
                <span>{product.pickupTime || '10 min'}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-3">
            {/* Title */}
            <Link href={`/produto/${product.id}`}>
              <h3 className="font-medium text-gray-900 text-sm line-clamp-2 hover:text-emerald-600 transition-colors">
                {product.title}
              </h3>
            </Link>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 mt-1">
                <Star size={14} weight="fill" className="text-amber-400" />
                <span className="text-xs text-gray-600">
                  {product.rating.toFixed(1)}
                  {product.reviewCount && (
                    <span className="text-gray-400">
                      {' '}
                      ({product.reviewCount})
                    </span>
                  )}
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mt-2">
              {product.originalPrice && product.originalPrice > product.price && (
                <p className="text-xs text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
              <p className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full mt-3 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavoritesGrid
