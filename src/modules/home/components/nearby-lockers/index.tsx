'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, NavigationArrow, Package, Clock } from '@phosphor-icons/react';
import { lockersMock, calculateDistance, type LockerMock } from '@/lib/mock-data/lockers-mock';
import './nearby-lockers.scss';

interface NearbyLockersProps {
  maxLockers?: number;
}

// Default location: Av. Paulista, São Paulo
const DEFAULT_LOCATION = { lat: -23.5629, lng: -46.6544 };

const NearbyLockers: React.FC<NearbyLockersProps> = ({ maxLockers = 4 }) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoading(false);
        },
        () => {
          setUserLocation(DEFAULT_LOCATION);
          setIsLoading(false);
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      setUserLocation(DEFAULT_LOCATION);
      setIsLoading(false);
    }
  }, []);

  const nearbyLockers = useMemo(() => {
    if (!userLocation) return [];

    return lockersMock
      .map((locker) => ({
        ...locker,
        distance: calculateDistance(
          userLocation.lat,
          userLocation.lng,
          locker.latitude,
          locker.longitude
        ),
      }))
      .sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity))
      .slice(0, maxLockers);
  }, [userLocation, maxLockers]);

  const formatDistance = (distance?: number) => {
    if (!distance) return '';
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    }
    return `${distance.toFixed(1)}km`;
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

  if (isLoading) {
    return (
      <section className="nearby-lockers nearby-lockers--loading">
        <div className="container">
          <div className="nearby-lockers__skeleton">
            <div className="nearby-lockers__skeleton-header" />
            <div className="nearby-lockers__skeleton-cards">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="nearby-lockers__skeleton-card" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="nearby-lockers">
      <div className="container">
        {/* Section Header */}
        <div className="nearby-lockers__header">
          <div className="nearby-lockers__title-area">
            <div className="nearby-lockers__icon">
              <MapPin size={24} weight="fill" />
            </div>
            <div>
              <h2 className="nearby-lockers__title">Lockers Próximos</h2>
              <p className="nearby-lockers__subtitle">
                Retire seus pedidos em minutos
              </p>
            </div>
          </div>
          <Link href="/br/lockers" className="nearby-lockers__see-all">
            Ver todos
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="nearby-lockers__grid">
          {nearbyLockers.map((locker) => (
            <div key={locker.id} className="nearby-lockers__card">
              <div className="nearby-lockers__card-header">
                <span className="nearby-lockers__card-type">
                  {getTypeIcon(locker.type)}
                </span>
                <span className="nearby-lockers__card-distance">
                  <NavigationArrow size={12} weight="fill" />
                  {formatDistance(locker.distance)}
                </span>
              </div>

              <h3 className="nearby-lockers__card-name">{locker.name}</h3>

              <div className="nearby-lockers__card-address">
                <MapPin size={14} weight="fill" />
                <span>{locker.address}</span>
              </div>

              <div className="nearby-lockers__card-info">
                <div className="nearby-lockers__card-info-item">
                  <Package size={14} weight="fill" />
                  <span>{locker.availableCompartments} livres</span>
                </div>
                <div className="nearby-lockers__card-info-item">
                  <Clock size={14} weight="fill" />
                  <span>{locker.openingHours}</span>
                </div>
              </div>

              <div className="nearby-lockers__card-availability">
                <div
                  className="nearby-lockers__card-availability-bar"
                  style={{
                    '--fill-percentage': `${(locker.availableCompartments / locker.totalCompartments) * 100}%`
                  } as React.CSSProperties}
                />
              </div>

              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${locker.latitude},${locker.longitude}`}
                target="_blank"
                className="nearby-lockers__card-btn"
              >
                <NavigationArrow size={16} weight="fill" />
                Como Chegar
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="nearby-lockers__cta">
          <div className="nearby-lockers__cta-content">
            <MapPin size={32} weight="fill" />
            <div>
              <h3>Encontre o locker perfeito</h3>
              <p>Explore todos os {lockersMock.length} lockers disponíveis em São Paulo</p>
            </div>
          </div>
          <Link href="/br/lockers" className="nearby-lockers__cta-btn">
            Ver no Mapa
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NearbyLockers;
