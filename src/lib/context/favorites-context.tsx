'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react'

export interface FavoriteProduct {
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

interface FavoritesContextType {
  favorites: FavoriteProduct[]
  addFavorite: (product: FavoriteProduct) => void
  removeFavorite: (productId: string) => void
  toggleFavorite: (product: FavoriteProduct) => void
  isFavorite: (productId: string) => boolean
  clearFavorites: () => void
  count: number
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
)

const STORAGE_KEY = 'keepit_favorites'

interface FavoritesProviderProps {
  children: ReactNode
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setFavorites(parsed)
        }
      }
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
    setIsInitialized(true)
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
      } catch (error) {
        console.error('Error saving favorites:', error)
      }
    }
  }, [favorites, isInitialized])

  const addFavorite = useCallback((product: FavoriteProduct) => {
    setFavorites((prev) => {
      // Check if already exists
      if (prev.some((p) => p.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }, [])

  const removeFavorite = useCallback((productId: string) => {
    setFavorites((prev) => prev.filter((p) => p.id !== productId))
  }, [])

  const toggleFavorite = useCallback((product: FavoriteProduct) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === product.id)
      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      }
      return [...prev, product]
    })
  }, [])

  const isFavorite = useCallback(
    (productId: string) => {
      return favorites.some((p) => p.id === productId)
    },
    [favorites]
  )

  const clearFavorites = useCallback(() => {
    setFavorites([])
  }, [])

  const value: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    count: favorites.length,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}

export default FavoritesContext
