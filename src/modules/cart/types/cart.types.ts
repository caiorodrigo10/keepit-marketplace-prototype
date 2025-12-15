// Tipos para o sistema de carrinho do Keepit

import { LockerMock } from '@/lib/mock-data/lockers-mock'

export interface CartItem {
  id: string
  productId: string
  productName: string
  productImage: string
  productDescription?: string
  vendorId: string
  vendorName: string
  price: number
  quantity: number
  preparationTime: number // em minutos
}

export interface CartTotals {
  subtotal: number
  serviceFee: number
  discount: number
  total: number
}

export interface AppliedCoupon {
  code: string
  type: 'percentage' | 'fixed'
  value: number
  discountAmount: number
}

export interface CartState {
  items: CartItem[]
  selectedLocker: LockerMock | null
  coupon: AppliedCoupon | null
  totals: CartTotals
  estimatedTime: number // em minutos (maior tempo entre vendedores)
  isOpen: boolean // estado do mini cart
}

export interface CartContextValue extends CartState {
  // Ações do carrinho
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void

  // Locker
  selectLocker: (locker: LockerMock) => void
  clearLocker: () => void

  // Cupom
  applyCoupon: (code: string) => Promise<boolean>
  removeCoupon: () => void

  // Mini Cart
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void

  // Helpers
  getItemCount: () => number
  getVendorGroups: () => VendorGroup[]
}

export interface VendorGroup {
  vendorId: string
  vendorName: string
  items: CartItem[]
  subtotal: number
  preparationTime: number
}