'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoClose } from 'react-icons/io5'
import { FaTrash, FaMapMarkerAlt, FaLock } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import styles from './MiniCart.module.scss'

interface MiniCartProps {
  onOpenLockerSelector?: () => void
}

export default function MiniCart({ onOpenLockerSelector }: MiniCartProps) {
  const {
    items,
    selectedLocker,
    totals,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getItemCount
  } = useCart()

  // Prevenir scroll do body quando o carrinho estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Formatar preço em reais
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const itemCount = getItemCount()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
        onClick={closeCart}
      />

      {/* Mini Cart */}
      <div className={`${styles.miniCart} ${isOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.header}>
          <h2>
            Seu Carrinho{' '}
            {itemCount > 0 && (
              <span className={styles.itemCount}>({itemCount})</span>
            )}
          </h2>
          <button
            className={styles.closeButton}
            onClick={closeCart}
            aria-label="Fechar carrinho"
          >
            <IoClose />
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyIcon}>🛒</div>
              <h3>Seu carrinho está vazio</h3>
              <p>Que tal adicionar alguns produtos deliciosos?</p>
              <Link href="/" onClick={closeCart}>
                <button className={styles.exploreButton}>
                  Explorar Produtos
                </button>
              </Link>
            </div>
          ) : (
            <>
              {/* Lista de itens */}
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <Image
                    src={item.productImage}
                    alt={item.productName}
                    width={80}
                    height={80}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <h4>{item.productName}</h4>
                    <p className={styles.vendorName}>{item.vendorName}</p>
                    <p className={styles.price}>
                      {formatPrice(item.price * item.quantity)}
                      {item.quantity > 1 && (
                        <span style={{ fontSize: '0.875rem', color: '#6B7280', marginLeft: '0.5rem' }}>
                          ({item.quantity}x {formatPrice(item.price)})
                        </span>
                      )}
                    </p>
                  </div>
                  <div className={styles.itemActions}>
                    <div className={styles.quantitySelector}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remover item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Seção do Locker (se houver itens) */}
        {items.length > 0 && (
          <div
            className={`${styles.lockerSection} ${
              !selectedLocker ? styles.noLocker : ''
            }`}
          >
            <div className={styles.lockerHeader}>
              <FaMapMarkerAlt />
              <span>
                {selectedLocker ? 'Locker selecionado:' : 'Selecione um locker'}
              </span>
            </div>
            {selectedLocker ? (
              <div className={styles.lockerInfo}>
                <p className={styles.lockerName}>{selectedLocker.name}</p>
                <button
                  className={styles.changeLocker}
                  onClick={onOpenLockerSelector}
                >
                  Trocar locker
                </button>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  Para finalizar seu pedido, você precisa escolher onde deseja retirar seus produtos.
                </p>
                <button
                  className={styles.selectLocker}
                  onClick={onOpenLockerSelector}
                >
                  Escolher Locker
                </button>
              </>
            )}
          </div>
        )}

        {/* Footer com resumo e checkout */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span className={styles.label}>Subtotal</span>
                <span className={styles.value}>{formatPrice(totals.subtotal)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.label}>Taxa de serviço</span>
                <span className={styles.value}>{formatPrice(totals.serviceFee)}</span>
              </div>
              {totals.discount > 0 && (
                <div className={styles.summaryRow}>
                  <span className={styles.label}>Desconto</span>
                  <span className={styles.value} style={{ color: '#34BF58' }}>
                    -{formatPrice(totals.discount)}
                  </span>
                </div>
              )}
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span className={styles.label}>Total</span>
                <span className={styles.value}>{formatPrice(totals.total)}</span>
              </div>
            </div>

            <Link href="/br/checkout-demo">
              <button
                className={styles.checkoutButton}
                onClick={closeCart}
                style={{
                  backgroundColor: '#67FB94',
                  color: '#1E1E1E',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}
              >
                Finalizar Compra
              </button>
            </Link>

            <Link href="/br/carrinho">
              <button
                className={styles.checkoutButton}
                disabled={!selectedLocker}
                onClick={closeCart}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#4A4A4A',
                  border: '2px solid #E0E0E0',
                  fontWeight: '600'
                }}
              >
                Ver Carrinho Completo
              </button>
            </Link>

            <div className={styles.securityNote}>
              <FaLock />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}