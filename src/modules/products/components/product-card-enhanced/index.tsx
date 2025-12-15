'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  ShoppingCart,
  Clock,
  Star,
  Lightning,
} from '@phosphor-icons/react'
import { useFavorites, FavoriteProduct } from '@lib/context/favorites-context'
import { useToast } from '@lib/context/toast-context'

interface ProductCardEnhancedProps {
  product: {
    id: string
    title: string
    handle?: string
    thumbnail?: string
    price: number
    originalPrice?: number
    discount?: number
    rating?: number
    reviewCount?: number
    availableForPickup?: boolean
    pickupTime?: string
  }
  onAddToCart?: () => void
}

const ProductCardEnhanced: React.FC<ProductCardEnhancedProps> = ({
  product,
  onAddToCart,
}) => {
  const { toggleFavorite, isFavorite } = useFavorites()
  const { showToast } = useToast()

  const isProductFavorite = isFavorite(product.id)

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const favoriteProduct: FavoriteProduct = {
      id: product.id,
      title: product.title,
      handle: product.handle,
      thumbnail: product.thumbnail,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount,
      rating: product.rating,
      reviewCount: product.reviewCount,
      availableForPickup: product.availableForPickup,
      pickupTime: product.pickupTime,
    }

    toggleFavorite(favoriteProduct)

    showToast({
      type: isProductFavorite ? 'info' : 'success',
      message: isProductFavorite
        ? `${product.title} removido dos favoritos`
        : `${product.title} adicionado aos favoritos`,
    })
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (onAddToCart) {
      onAddToCart()
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

  const productUrl = `/produto/${product.handle || product.id}`

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Link href={productUrl}>
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <ShoppingCart size={48} />
            </div>
          )}
        </Link>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`
            absolute top-3 right-3 w-9 h-9 rounded-full shadow-md flex items-center justify-center
            transition-all duration-200 z-10
            ${
              isProductFavorite
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-400 hover:text-red-500'
            }
          `}
          title={isProductFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart
            size={18}
            weight={isProductFavorite ? 'fill' : 'regular'}
            className={isProductFavorite ? '' : 'group-hover:scale-110 transition-transform'}
          />
        </button>

        {/* Badges Container */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {/* Discount Badge */}
          {product.discount && product.discount > 0 && (
            <div className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              -{product.discount}%
            </div>
          )}

          {/* Quick Pickup Badge */}
          {product.availableForPickup && (
            <div className="bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 animate-pulse">
              <Lightning size={12} weight="fill" />
              <span>{product.pickupTime || '10 min'}</span>
            </div>
          )}
        </div>

        {/* Quick Add Button - appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} weight="bold" />
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {/* Content */}
      <Link href={productUrl} className="block p-4">
        {/* Title */}
        <h3 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-emerald-600 transition-colors min-h-[40px]">
          {product.title}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  weight="fill"
                  className={
                    star <= Math.round(product.rating!)
                      ? 'text-amber-400'
                      : 'text-gray-200'
                  }
                />
              ))}
            </div>
            {product.reviewCount && (
              <span className="text-xs text-gray-500">
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Pickup Info */}
        {product.availableForPickup && (
          <div className="mt-2 flex items-center gap-1 text-xs text-emerald-600">
            <Clock size={14} />
            <span>Retire em até {product.pickupTime || '10 minutos'}</span>
          </div>
        )}
      </Link>
    </div>
  )
}

export default ProductCardEnhanced
