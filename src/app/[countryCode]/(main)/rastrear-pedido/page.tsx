'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package,
  MagnifyingGlass,
  QrCode,
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  Storefront,
  ShoppingBag,
  ArrowRight,
  Warning,
} from '@phosphor-icons/react';
import { mockPickupOrders } from '@/lib/mock-data/pickup';
import OrderTimeline from '@/modules/order/components/order-timeline';
import './rastrear-pedido.scss';

// Mock order data for tracking
const mockOrders = [
  {
    id: 'KPT-2024-ABC123',
    status: 'at_locker' as const,
    events: [
      { status: 'confirmed' as const, timestamp: '2024-11-27T14:30:00', description: 'Pedido confirmado' },
      { status: 'preparing' as const, timestamp: '2024-11-27T15:00:00', description: 'Preparando seu pedido' },
      { status: 'in_transit' as const, timestamp: '2024-11-27T16:30:00', description: 'A caminho do locker' },
      { status: 'at_locker' as const, timestamp: '2024-11-27T17:00:00', description: 'Disponível no locker' },
    ],
    locker: {
      name: 'Shopping Ibirapuera',
      address: 'Av. Ibirapuera, 3103 - Piso G2',
      hours: '10h às 22h',
      lat: -23.6115,
      lng: -46.6589,
    },
    expiresAt: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), // 3 hours from now
    items: [
      { name: 'Camiseta Básica Preta', quantity: 2 },
      { name: 'Calça Jeans Slim', quantity: 1 },
    ],
    total: 249.70,
  },
  {
    id: 'KPT-2024-DEF456',
    status: 'in_transit' as const,
    events: [
      { status: 'confirmed' as const, timestamp: '2024-11-27T10:00:00', description: 'Pedido confirmado' },
      { status: 'preparing' as const, timestamp: '2024-11-27T11:00:00', description: 'Preparando seu pedido' },
      { status: 'in_transit' as const, timestamp: '2024-11-27T14:00:00', description: 'A caminho do locker' },
    ],
    locker: {
      name: 'Metrô Paulista',
      address: 'Estação Paulista - Linha 4 Amarela',
      hours: '24h',
      lat: -23.5534,
      lng: -46.6600,
    },
    estimatedDelivery: '18:00',
    items: [
      { name: 'Hambúrguer Artesanal', quantity: 2 },
      { name: 'Batata Frita Grande', quantity: 1 },
    ],
    total: 78.90,
  },
];

export default function RastrearPedidoPage() {
  const [orderCode, setOrderCode] = useState('');
  const [searchedOrder, setSearchedOrder] = useState<typeof mockOrders[0] | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const order = mockOrders.find(o =>
        o.id.toLowerCase() === orderCode.toUpperCase() ||
        orderCode.toUpperCase().includes('ABC') ||
        orderCode.toUpperCase().includes('DEF')
      );

      if (order) {
        setSearchedOrder(order);
        setError('');
      } else if (orderCode.length > 0) {
        setSearchedOrder(null);
        setError('Pedido não encontrado. Verifique o código e tente novamente.');
      }
      setIsSearching(false);
    }, 800);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      confirmed: 'Confirmado',
      preparing: 'Preparando',
      in_transit: 'Em Trânsito',
      at_locker: 'No Locker',
      picked_up: 'Retirado',
      cancelled: 'Cancelado',
    };
    return labels[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      confirmed: '#3b82f6',
      preparing: '#f59e0b',
      in_transit: '#8b5cf6',
      at_locker: '#00c853',
      picked_up: '#10b981',
      cancelled: '#ef4444',
    };
    return colors[status] || '#6b7280';
  };

  return (
    <div className="rastrear-page">
      <div className="container">
        {/* Header */}
        <div className="rastrear-page__header">
          <div className="rastrear-page__icon">
            <Package size={32} weight="fill" />
          </div>
          <h1 className="rastrear-page__title">Rastrear Pedido</h1>
          <p className="rastrear-page__subtitle">
            Digite o código do seu pedido para acompanhar o status
          </p>
        </div>

        {/* Search Form */}
        <form className="rastrear-page__search" onSubmit={handleSearch}>
          <div className="rastrear-page__search-input-wrapper">
            <MagnifyingGlass size={20} className="rastrear-page__search-icon" />
            <input
              type="text"
              placeholder="Ex: KPT-2024-ABC123"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              className="rastrear-page__search-input"
            />
          </div>
          <button
            type="submit"
            className="rastrear-page__search-btn"
            disabled={isSearching || !orderCode.trim()}
          >
            {isSearching ? 'Buscando...' : 'Rastrear'}
          </button>
        </form>

        {/* QR Code Option */}
        <div className="rastrear-page__qr-option">
          <span>ou</span>
          <button className="rastrear-page__qr-btn">
            <QrCode size={20} weight="fill" />
            Escanear QR Code do email
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rastrear-page__error">
            <Warning size={20} weight="fill" />
            {error}
          </div>
        )}

        {/* Order Result */}
        {searchedOrder && (
          <div className="rastrear-page__result">
            {/* Order Header */}
            <div className="rastrear-page__order-header">
              <div className="rastrear-page__order-info">
                <h2 className="rastrear-page__order-id">
                  Pedido #{searchedOrder.id}
                </h2>
                <span
                  className="rastrear-page__order-status"
                  style={{ backgroundColor: getStatusColor(searchedOrder.status) }}
                >
                  {getStatusLabel(searchedOrder.status)}
                </span>
              </div>
              <div className="rastrear-page__order-total">
                R$ {searchedOrder.total.toFixed(2).replace('.', ',')}
              </div>
            </div>

            {/* Timeline */}
            <div className="rastrear-page__timeline">
              <h3 className="rastrear-page__section-title">Acompanhe seu pedido</h3>
              <OrderTimeline
                currentStatus={searchedOrder.status}
                events={searchedOrder.events}
                orientation="vertical"
              />
            </div>

            {/* Locker Info */}
            <div className="rastrear-page__locker">
              <h3 className="rastrear-page__section-title">
                <MapPin size={20} weight="fill" />
                Local de Retirada
              </h3>
              <div className="rastrear-page__locker-card">
                <div className="rastrear-page__locker-info">
                  <h4>{searchedOrder.locker.name}</h4>
                  <p>{searchedOrder.locker.address}</p>
                  <span className="rastrear-page__locker-hours">
                    <Clock size={14} weight="fill" />
                    {searchedOrder.locker.hours}
                  </span>
                </div>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${searchedOrder.locker.lat},${searchedOrder.locker.lng}`}
                  target="_blank"
                  className="rastrear-page__locker-directions"
                >
                  Ver no mapa
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>

              {/* Mini Map Placeholder */}
              <div className="rastrear-page__mini-map">
                <div className="rastrear-page__mini-map-placeholder">
                  <MapPin size={32} weight="fill" />
                  <span>{searchedOrder.locker.name}</span>
                </div>
              </div>
            </div>

            {/* Estimated Delivery or Pickup Info */}
            {searchedOrder.status === 'at_locker' ? (
              <div className="rastrear-page__pickup-info">
                <div className="rastrear-page__pickup-badge">
                  <CheckCircle size={24} weight="fill" />
                  <span>Pronto para Retirada!</span>
                </div>
                <p>
                  Retire até {formatDate(searchedOrder.expiresAt!)}
                </p>
                <Link
                  href={`/br/retirada/pickup_1`}
                  className="rastrear-page__pickup-btn"
                >
                  Ver QR de Retirada
                  <ArrowRight size={18} weight="bold" />
                </Link>
              </div>
            ) : (
              <div className="rastrear-page__estimate">
                <Clock size={20} weight="fill" />
                <span>
                  Previsão de chegada: <strong>Hoje às {searchedOrder.estimatedDelivery}</strong>
                </span>
              </div>
            )}

            {/* Order Items */}
            <div className="rastrear-page__items">
              <h3 className="rastrear-page__section-title">
                <ShoppingBag size={20} weight="fill" />
                Itens do Pedido
              </h3>
              <ul className="rastrear-page__items-list">
                {searchedOrder.items.map((item, index) => (
                  <li key={index}>
                    <span className="rastrear-page__item-qty">{item.quantity}x</span>
                    <span className="rastrear-page__item-name">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="rastrear-page__help">
          <h3>Precisa de ajuda?</h3>
          <p>Se tiver problemas com seu pedido, entre em contato conosco.</p>
          <div className="rastrear-page__help-actions">
            <Link href="/br/suporte" className="rastrear-page__help-btn">
              Central de Ajuda
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda com meu pedido"
              target="_blank"
              className="rastrear-page__help-btn rastrear-page__help-btn--whatsapp"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
