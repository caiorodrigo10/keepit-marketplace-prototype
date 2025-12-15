'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { MapTrifold, ListBullets, NavigationArrow } from '@phosphor-icons/react';
import LockerMap from '@/modules/lockers/components/locker-map';
import LockerList from '@/modules/lockers/components/locker-list';
import { lockersMock, calculateDistance, type LockerMock } from '@/lib/mock-data/lockers-mock';
import './lockers.scss';

type ViewMode = 'map' | 'list';

// Default location: Av. Paulista, São Paulo
const DEFAULT_LOCATION = { lat: -23.5629, lng: -46.6544 };

export default function LockersPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedLocker, setSelectedLocker] = useState<LockerMock | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  // Get user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoadingLocation(false);
        },
        () => {
          // Use default location if geolocation fails
          setUserLocation(DEFAULT_LOCATION);
          setIsLoadingLocation(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setUserLocation(DEFAULT_LOCATION);
      setIsLoadingLocation(false);
    }
  }, []);

  // Calculate distances and sort lockers
  const lockersWithDistance = useMemo(() => {
    if (!userLocation) return lockersMock;

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
      .sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
  }, [userLocation]);

  const handleLockerSelect = (locker: LockerMock) => {
    setSelectedLocker(locker);
    // In a real app, this could open a modal or navigate to locker details
    console.log('Selected locker:', locker);
  };

  const mapCenter = userLocation || DEFAULT_LOCATION;

  return (
    <div className="lockers-page">
      {/* Header */}
      <div className="lockers-page__header">
        <div className="container">
          <div className="lockers-page__header-content">
            <div className="lockers-page__title-area">
              <h1 className="lockers-page__title">Lockers Keepit</h1>
              <p className="lockers-page__subtitle">
                Encontre o locker mais próximo para retirar seus pedidos
              </p>
            </div>

            {/* View mode toggle */}
            <div className="lockers-page__view-toggle">
              <button
                className={`lockers-page__view-btn ${viewMode === 'map' ? 'lockers-page__view-btn--active' : ''}`}
                onClick={() => setViewMode('map')}
              >
                <MapTrifold size={20} weight="bold" />
                <span>Mapa</span>
              </button>
              <button
                className={`lockers-page__view-btn ${viewMode === 'list' ? 'lockers-page__view-btn--active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <ListBullets size={20} weight="bold" />
                <span>Lista</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="lockers-page__stats">
            <div className="lockers-page__stat">
              <span className="lockers-page__stat-value">{lockersMock.length}</span>
              <span className="lockers-page__stat-label">Lockers</span>
            </div>
            <div className="lockers-page__stat">
              <span className="lockers-page__stat-value">
                {lockersMock.reduce((sum, l) => sum + l.availableCompartments, 0)}
              </span>
              <span className="lockers-page__stat-label">Compartimentos livres</span>
            </div>
            <div className="lockers-page__stat">
              <span className="lockers-page__stat-value">24h</span>
              <span className="lockers-page__stat-label">Disponíveis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lockers-page__content">
        <div className="container">
          {isLoadingLocation ? (
            <div className="lockers-page__loading">
              <NavigationArrow size={32} className="lockers-page__loading-icon" />
              <p>Buscando sua localização...</p>
            </div>
          ) : (
            <>
              {viewMode === 'map' ? (
                <LockerMap
                  lockers={lockersWithDistance}
                  center={mapCenter}
                  zoom={13}
                  onLockerSelect={handleLockerSelect}
                  selectedLockerId={selectedLocker?.id}
                  height="calc(100vh - 280px)"
                  showLockerPanel={true}
                />
              ) : (
                <LockerList
                  lockers={lockersWithDistance}
                  variant="grid"
                  showFilters={true}
                  showSearch={true}
                  onLockerSelect={handleLockerSelect}
                  emptyMessage="Nenhum locker encontrado na sua região"
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Selected locker info bar (mobile) */}
      {selectedLocker && viewMode === 'map' && (
        <div className="lockers-page__selected-bar">
          <div className="lockers-page__selected-info">
            <span className="lockers-page__selected-name">{selectedLocker.name}</span>
            <span className="lockers-page__selected-address">{selectedLocker.address}</span>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocker.latitude},${selectedLocker.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="lockers-page__directions-btn"
          >
            <NavigationArrow size={18} weight="fill" />
            Ir
          </a>
        </div>
      )}
    </div>
  );
}
