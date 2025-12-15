'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Package, NavigationArrow } from '@phosphor-icons/react';
import type { LockerMock } from '@/lib/mock-data/lockers-mock';
import './locker-card.scss';

interface LockerCardProps {
  locker: LockerMock;
  variant?: 'default' | 'compact' | 'horizontal';
  showDistance?: boolean;
  onSelect?: (locker: LockerMock) => void;
}

const LockerCard: React.FC<LockerCardProps> = ({
  locker,
  variant = 'default',
  showDistance = true,
  onSelect,
}) => {
  const availabilityPercentage = Math.round(
    (locker.availableCompartments / locker.totalCompartments) * 100
  );

  const getAvailabilityStatus = () => {
    if (availabilityPercentage >= 50) return 'high';
    if (availabilityPercentage >= 20) return 'medium';
    return 'low';
  };

  const getTypeLabel = (type: LockerMock['type']) => {
    const labels: Record<LockerMock['type'], string> = {
      shopping: 'Shopping',
      street: 'Rua',
      store: 'Loja',
      subway: 'Metrô',
    };
    return labels[type];
  };

  const getTypeIcon = (type: LockerMock['type']) => {
    const icons: Record<LockerMock['type'], string> = {
      shopping: '🛍️',
      street: '🚶',
      store: '🏪',
      subway: '🚇',
    };
    return icons[type];
  };

  const formatDistance = (distance?: number) => {
    if (!distance) return null;
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    }
    return `${distance.toFixed(1)}km`;
  };

  const handleClick = () => {
    if (onSelect) {
      onSelect(locker);
    }
  };

  const cardContent = (
    <>
      {variant !== 'compact' && locker.imageUrl && (
        <div className="locker-card__image">
          <img
            src={locker.imageUrl}
            alt={locker.name}
            loading="lazy"
          />
          <div className="locker-card__type-badge">
            <span>{getTypeIcon(locker.type)}</span>
            <span>{getTypeLabel(locker.type)}</span>
          </div>
        </div>
      )}

      <div className="locker-card__content">
        <div className="locker-card__header">
          <h3 className="locker-card__name">{locker.name}</h3>
          {showDistance && locker.distance && (
            <span className="locker-card__distance">
              <NavigationArrow size={14} weight="fill" />
              {formatDistance(locker.distance)}
            </span>
          )}
        </div>

        <div className="locker-card__address">
          <MapPin size={16} weight="fill" />
          <span>{locker.address}, {locker.city}</span>
        </div>

        <div className="locker-card__hours">
          <Clock size={16} weight="fill" />
          <span>{locker.openingHours}</span>
        </div>

        <div className="locker-card__availability">
          <div className="locker-card__availability-info">
            <Package size={16} weight="fill" />
            <span>
              <strong>{locker.availableCompartments}</strong> de {locker.totalCompartments} disponíveis
            </span>
          </div>
          <div className="locker-card__availability-bar">
            <div
              className={`locker-card__availability-fill locker-card__availability-fill--${getAvailabilityStatus()}`}
              style={{ width: `${availabilityPercentage}%` }}
            />
          </div>
        </div>

        {variant !== 'compact' && (
          <div className="locker-card__actions">
            <button
              className="locker-card__action-btn locker-card__action-btn--primary"
              onClick={handleClick}
            >
              Selecionar Locker
            </button>
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=${locker.latitude},${locker.longitude}`}
              target="_blank"
              className="locker-card__action-btn locker-card__action-btn--secondary"
              onClick={(e) => e.stopPropagation()}
            >
              Como Chegar
            </Link>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      className={`locker-card locker-card--${variant} ${!locker.isActive ? 'locker-card--inactive' : ''}`}
      onClick={variant === 'compact' ? handleClick : undefined}
      role={variant === 'compact' ? 'button' : undefined}
      tabIndex={variant === 'compact' ? 0 : undefined}
    >
      {cardContent}
      {!locker.isActive && (
        <div className="locker-card__inactive-overlay">
          <span>Temporariamente indisponível</span>
        </div>
      )}
    </div>
  );
};

export default LockerCard;
