'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import { CartState, CartContextValue, CartItem, CartTotals, VendorGroup, AppliedCoupon } from '../types/cart.types'
import { LockerMock } from '@/lib/mock-data/lockers-mock'

// Taxa de serviço fixa
const SERVICE_FEE = 2.90

// Estado inicial
const initialState: CartState = {
  items: [],
  selectedLocker: null,
  coupon: null,
  totals: {
    subtotal: 0,
    serviceFee: 0,
    discount: 0,
    total: 0
  },
  estimatedTime: 0,
  isOpen: false
}

// Criar contexto
const CartContext = createContext<CartContextValue | undefined>(undefined)

// Provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CartState>(initialState)

  // Carregar carrinho do localStorage ao montar
  useEffect(() => {
    const savedCart = localStorage.getItem('keepit-cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        setState(prev => ({
          ...prev,
          items: parsed.items || [],
          selectedLocker: parsed.selectedLocker || null,
          coupon: parsed.coupon || null
        }))
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error)
      }
    }
  }, [])

  // Salvar carrinho no localStorage quando mudar
  useEffect(() => {
    if (state.items.length > 0 || state.selectedLocker) {
      const toSave = {
        items: state.items,
        selectedLocker: state.selectedLocker,
        coupon: state.coupon
      }
      localStorage.setItem('keepit-cart', JSON.stringify(toSave))
    } else {
      localStorage.removeItem('keepit-cart')
    }
  }, [state.items, state.selectedLocker, state.coupon])

  // Recalcular totais quando itens ou cupom mudarem
  useEffect(() => {
    const subtotal = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const serviceFee = state.items.length > 0 ? SERVICE_FEE : 0

    let discount = 0
    if (state.coupon) {
      if (state.coupon.type === 'percentage') {
        discount = subtotal * (state.coupon.value / 100)
      } else {
        discount = state.coupon.value
      }
    }

    const total = Math.max(0, subtotal + serviceFee - discount)

    setState(prev => ({
      ...prev,
      totals: {
        subtotal,
        serviceFee,
        discount,
        total
      }
    }))
  }, [state.items, state.coupon])

  // Recalcular tempo estimado quando itens mudarem
  useEffect(() => {
    if (state.items.length === 0) {
      setState(prev => ({ ...prev, estimatedTime: 0 }))
      return
    }

    // Pegar o maior tempo entre todos os vendedores
    const vendorTimes = new Map<string, number>()
    state.items.forEach(item => {
      const currentTime = vendorTimes.get(item.vendorId) || 0
      vendorTimes.set(item.vendorId, Math.max(currentTime, item.preparationTime))
    })

    const maxTime = Math.max(...Array.from(vendorTimes.values()))
    setState(prev => ({ ...prev, estimatedTime: maxTime }))
  }, [state.items])

  // Funções do carrinho
  const addToCart = useCallback((item: Omit<CartItem, 'id' | 'quantity'>) => {
    setState(prev => {
      // Verificar se o produto já está no carrinho
      const existingItem = prev.items.find(i => i.productId === item.productId)

      if (existingItem) {
        // Incrementar quantidade
        return {
          ...prev,
          items: prev.items.map(i =>
            i.id === existingItem.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        }
      }

      // Adicionar novo item
      const newItem: CartItem = {
        ...item,
        id: `cart-item-${Date.now()}-${Math.random()}`,
        quantity: 1
      }

      return {
        ...prev,
        items: [...prev.items, newItem]
      }
    })
  }, [])

  const removeFromCart = useCallback((itemId: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }))
  }, [])

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setState(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    }))
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setState(prev => ({
      ...prev,
      items: [],
      coupon: null,
      totals: {
        subtotal: 0,
        serviceFee: 0,
        discount: 0,
        total: 0
      },
      estimatedTime: 0
    }))
  }, [])

  // Funções do locker
  const selectLocker = useCallback((locker: LockerMock) => {
    setState(prev => ({ ...prev, selectedLocker: locker }))
  }, [])

  const clearLocker = useCallback(() => {
    setState(prev => ({ ...prev, selectedLocker: null }))
  }, [])

  // Funções do cupom
  const applyCoupon = useCallback(async (code: string): Promise<boolean> => {
    // Simular validação de cupom
    // Em produção, isso seria uma chamada à API
    const mockCoupons: Record<string, AppliedCoupon> = {
      'PRIMEIRA10': {
        code: 'PRIMEIRA10',
        type: 'percentage',
        value: 10,
        discountAmount: 0 // calculado depois
      },
      'KEEPIT5': {
        code: 'KEEPIT5',
        type: 'fixed',
        value: 5,
        discountAmount: 5
      }
    }

    const coupon = mockCoupons[code.toUpperCase()]
    if (coupon) {
      setState(prev => ({ ...prev, coupon }))
      return true
    }

    return false
  }, [])

  const removeCoupon = useCallback(() => {
    setState(prev => ({ ...prev, coupon: null }))
  }, [])

  // Funções do mini cart
  const openCart = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: true }))
  }, [])

  const closeCart = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }))
  }, [])

  const toggleCart = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }))
  }, [])

  // Helpers
  const getItemCount = useCallback(() => {
    return state.items.reduce((acc, item) => acc + item.quantity, 0)
  }, [state.items])

  const getVendorGroups = useCallback((): VendorGroup[] => {
    const groups = new Map<string, VendorGroup>()

    state.items.forEach(item => {
      if (!groups.has(item.vendorId)) {
        groups.set(item.vendorId, {
          vendorId: item.vendorId,
          vendorName: item.vendorName,
          items: [],
          subtotal: 0,
          preparationTime: 0
        })
      }

      const group = groups.get(item.vendorId)!
      group.items.push(item)
      group.subtotal += item.price * item.quantity
      group.preparationTime = Math.max(group.preparationTime, item.preparationTime)
    })

    return Array.from(groups.values())
  }, [state.items])

  // Valor do contexto
  const value: CartContextValue = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    selectLocker,
    clearLocker,
    applyCoupon,
    removeCoupon,
    openCart,
    closeCart,
    toggleCart,
    getItemCount,
    getVendorGroups
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Hook para usar o contexto
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider')
  }
  return context
}