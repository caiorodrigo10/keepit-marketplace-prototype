/**
 * Keepit Domain Types
 * TypeScript interfaces for Keepit MVP entities
 */

export interface Hoster {
  id: string
  name: string
  location: string
  address: string
  city: string
  state: string
  zipCode: string
  image: string
  availableSlots?: number
  totalSlots?: number
  coordinates?: {
    lat: number
    lng: number
  }
  description?: string
  openingHours?: string
}

export interface Vendor {
  id: string
  name: string
  logo: string
  description?: string
  category?: string
  hosters?: string[] // IDs of hosters where this vendor operates
  featured?: boolean
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number // For showing discounts
  images: string[]
  thumbnail: string
  vendorId: string
  vendor?: Vendor // Populated vendor data
  category: string
  hosterIds: string[] // Hosters where this product is available
  hosters?: Hoster[] // Populated hoster data
  featured?: boolean
  badge?: 'new' | 'promotion' | 'bestseller' | 'exclusive'
  stock?: number
  rating?: number
  reviewCount?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string // Phosphor icon name or emoji
  type: 'promotional' | 'basic'
  color?: string // Optional color for promotional categories
  description?: string
}

export interface CartItem {
  productId: string
  product: Product
  quantity: number
  hosterId: string // Selected locker location
  hoster?: Hoster
}

export interface SearchFilters {
  category?: string
  vendorId?: string
  hosterId?: string
  minPrice?: number
  maxPrice?: number
  query?: string
  featured?: boolean
  badge?: Product['badge']
}
