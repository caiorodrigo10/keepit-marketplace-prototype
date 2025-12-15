'use client'

import React from 'react'
import Link from 'next/link'
import { Heart } from '@phosphor-icons/react'
import { useFavorites } from '@lib/context/favorites-context'

interface HeaderFavoritesButtonProps {
  className?: string
}

const HeaderFavoritesButton: React.FC<HeaderFavoritesButtonProps> = ({
  className = '',
}) => {
  const { count } = useFavorites()

  return (
    <Link
      href="/favoritos"
      className={`relative p-2 text-gray-600 hover:text-emerald-600 transition-colors ${className}`}
      title="Meus favoritos"
    >
      <Heart size={24} weight={count > 0 ? 'fill' : 'regular'} className={count > 0 ? 'text-red-500' : ''} />

      {/* Badge */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full px-1">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </Link>
  )
}

export default HeaderFavoritesButton
