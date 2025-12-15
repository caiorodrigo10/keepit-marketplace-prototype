'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavigationArrow, X, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { IoLocationOutline } from 'react-icons/io5';
import type { LockerMock } from '@/lib/mock-data/lockers-mock';
import LockerCard from '../locker-card';
import './locker-map.scss';

interface LockerMapProps {
  lockers: LockerMock[];
  center?: { lat: number; lng: number };
  zoom?: number;
  onLockerSelect?: (locker: LockerMock) => void;
  selectedLockerId?: string;
  height?: string;
  showLockerPanel?: boolean;
}

// Coordenadas padrão: Av. Paulista, São Paulo
const DEFAULT_CENTER = { lat: -23.5629, lng: -46.6544 };
const DEFAULT_ZOOM = 14;

const getTypeColor = (type: LockerMock['type']) => {
  const colors: Record<LockerMock['type'], string> = {
    shopping: '#9c27b0',
    subway: '#2196f3',
    store: '#ff9800',
    street: '#4caf50',
  };
  return colors[type];
};

const LockerMap: React.FC<LockerMapProps> = ({
  lockers,
  center = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
  onLockerSelect,
  selectedLockerId,
  height = '500px',
  showLockerPanel = true,
}) => {
  const [selectedLocker, setSelectedLocker] = useState<LockerMock | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [panelIndex, setPanelIndex] = useState(0);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const userMarkerRef = useRef<google.maps.Marker | null>(null);
  const hasInitialized = useRef(false);

  // Find selected locker from ID prop
  useEffect(() => {
    if (selectedLockerId) {
      const locker = lockers.find((l) => l.id === selectedLockerId);
      if (locker) {
        setSelectedLocker(locker);
      }
    }
  }, [selectedLockerId, lockers]);

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (typeof window !== 'undefined' && window.google && window.google.maps) {
        setIsMapLoaded(true);
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
      if (!apiKey) {
        console.error('[LockerMap] Google Maps API key not found');
        return;
      }

      const callbackName = 'initLockerPageMap';

      if ((window as any)[callbackName]) {
        // Script already loading
        return;
      }

      (window as any)[callbackName] = () => {
        setIsMapLoaded(true);
        delete (window as any)[callbackName];
      };

      // Check if script already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        if (window.google && window.google.maps) {
          setIsMapLoaded(true);
        }
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=pt-BR&region=BR&callback=${callbackName}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Initialize Google Map
  useEffect(() => {
    if (!isMapLoaded || !mapContainerRef.current || hasInitialized.current) return;
    if (typeof window === 'undefined' || !window.google || !window.google.maps) return;

    hasInitialized.current = true;

    const map = new google.maps.Map(mapContainerRef.current, {
      center: center,
      zoom: zoom,
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    googleMapRef.current = map;

    // Add markers for each locker
    lockers.forEach((locker) => {
      const isSelected = selectedLockerId === locker.id;
      const markerColor = getTypeColor(locker.type);

      const marker = new google.maps.Marker({
        position: { lat: locker.latitude, lng: locker.longitude },
        map: map,
        title: locker.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: isSelected ? '#ff5252' : markerColor,
          fillOpacity: 1,
          strokeColor: '#fff',
          strokeWeight: 2,
          scale: isSelected ? 12 : 10,
        },
        animation: isSelected ? google.maps.Animation.BOUNCE : undefined,
      });

      // InfoWindow content
      const availabilityPercent = (locker.availableCompartments / locker.totalCompartments) * 100;
      const availabilityColor = availabilityPercent > 50 ? '#4caf50' : availabilityPercent > 20 ? '#ff9800' : '#f44336';

      const infoContent = `
        <div style="padding: 8px; max-width: 250px;">
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #1E1E1E;">${locker.name}</h4>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #4A4A4A;">${locker.address}</p>
          <div style="display: flex; gap: 12px; margin-bottom: 8px; font-size: 11px;">
            <div>
              <span style="color: #9E9E9E; display: block;">Tipo</span>
              <span style="font-weight: 600; color: ${markerColor};">${locker.type}</span>
            </div>
            <div>
              <span style="color: #9E9E9E; display: block;">Disponível</span>
              <span style="font-weight: 600; color: ${availabilityColor};">${locker.availableCompartments}/${locker.totalCompartments}</span>
            </div>
          </div>
          ${onLockerSelect ? `
            <button
              onclick="window.selectLockerFromMap('${locker.id}')"
              style="
                width: 100%;
                padding: 8px;
                background: #00c853;
                color: #fff;
                border: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 12px;
                cursor: pointer;
              "
            >
              Selecionar este locker
            </button>
          ` : ''}
        </div>
      `;

      const infoWindow = new google.maps.InfoWindow({
        content: infoContent,
      });

      marker.addListener('click', () => {
        // Close all other InfoWindows
        markersRef.current.forEach((m) => {
          (m as any).infoWindow?.close();
        });

        infoWindow.open(map, marker);
        (marker as any).infoWindow = infoWindow;

        // Update selected locker
        setSelectedLocker(locker);

        // Pan to marker
        map.panTo({ lat: locker.latitude, lng: locker.longitude });
      });

      markersRef.current.push(marker);
    });

    // Global function for InfoWindow button
    (window as any).selectLockerFromMap = (lockerId: string) => {
      const locker = lockers.find(l => l.id === lockerId);
      if (locker && onLockerSelect) {
        onLockerSelect(locker);
      }
    };

  }, [isMapLoaded, lockers, center, zoom, selectedLockerId, onLockerSelect]);

  // Get user location
  const getUserLocation = useCallback(() => {
    if (!navigator.geolocation) {
      console.warn('Geolocation not supported');
      return;
    }

    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(userPos);
        setIsLoadingLocation(false);

        // Add or update user marker on map
        if (googleMapRef.current && window.google) {
          if (userMarkerRef.current) {
            userMarkerRef.current.setPosition(userPos);
          } else {
            userMarkerRef.current = new google.maps.Marker({
              position: userPos,
              map: googleMapRef.current,
              title: 'Sua localização',
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: '#007aff',
                fillOpacity: 1,
                strokeColor: '#fff',
                strokeWeight: 3,
                scale: 8,
              },
              zIndex: 1000,
            });
          }
          googleMapRef.current.panTo(userPos);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        setIsLoadingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const handleLockerClick = (locker: LockerMock) => {
    setSelectedLocker(locker);

    // Pan map to locker
    if (googleMapRef.current) {
      googleMapRef.current.panTo({ lat: locker.latitude, lng: locker.longitude });
    }

    if (onLockerSelect) {
      onLockerSelect(locker);
    }
  };

  const handleClosePopup = () => {
    setSelectedLocker(null);
  };

  // Panel navigation for mobile
  const visibleLockers = lockers.slice(panelIndex, panelIndex + 3);
  const canGoPrev = panelIndex > 0;
  const canGoNext = panelIndex + 3 < lockers.length;

  // Loading state
  if (!isMapLoaded) {
    return (
      <div className="locker-map" style={{ height }}>
        <div className="locker-map__container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: '#f5f5f5',
          }}>
            <div style={{ textAlign: 'center', color: '#9E9E9E' }}>
              <IoLocationOutline style={{ fontSize: '3rem', marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Carregando mapa...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="locker-map" style={{ height }}>
      <div className="locker-map__container" ref={mapContainerRef}>
        {/* Google Map will be rendered here */}
      </div>

      {/* Legend overlay */}
      <div className="locker-map__legend">
        <div className="locker-map__legend-item">
          <span className="locker-map__legend-dot" style={{ background: '#9c27b0' }} />
          <span>Shopping</span>
        </div>
        <div className="locker-map__legend-item">
          <span className="locker-map__legend-dot" style={{ background: '#2196f3' }} />
          <span>Metrô</span>
        </div>
        <div className="locker-map__legend-item">
          <span className="locker-map__legend-dot" style={{ background: '#ff9800' }} />
          <span>Loja</span>
        </div>
        <div className="locker-map__legend-item">
          <span className="locker-map__legend-dot" style={{ background: '#4caf50' }} />
          <span>Rua</span>
        </div>
      </div>

      {/* Location button */}
      <button
        className="locker-map__location-btn"
        onClick={getUserLocation}
        disabled={isLoadingLocation}
        title="Minha localização"
      >
        <NavigationArrow
          size={20}
          weight="fill"
          className={isLoadingLocation ? 'locker-map__location-btn-spin' : ''}
        />
      </button>

      {/* Selected locker popup */}
      {selectedLocker && (
        <div className="locker-map__popup">
          <button className="locker-map__popup-close" onClick={handleClosePopup}>
            <X size={20} weight="bold" />
          </button>
          <LockerCard
            locker={selectedLocker}
            variant="compact"
            showDistance={!!userLocation}
            onSelect={onLockerSelect}
          />
        </div>
      )}

      {/* Bottom panel with nearby lockers */}
      {showLockerPanel && (
        <div className="locker-map__panel">
          <div className="locker-map__panel-header">
            <h4>Lockers próximos</h4>
            <div className="locker-map__panel-nav">
              <button
                className="locker-map__panel-nav-btn"
                onClick={() => setPanelIndex(Math.max(0, panelIndex - 3))}
                disabled={!canGoPrev}
              >
                <CaretLeft size={18} weight="bold" />
              </button>
              <button
                className="locker-map__panel-nav-btn"
                onClick={() => setPanelIndex(panelIndex + 3)}
                disabled={!canGoNext}
              >
                <CaretRight size={18} weight="bold" />
              </button>
            </div>
          </div>
          <div className="locker-map__panel-list">
            {visibleLockers.map((locker) => (
              <button
                key={locker.id}
                className={`locker-map__panel-item ${
                  selectedLocker?.id === locker.id ? 'locker-map__panel-item--selected' : ''
                }`}
                onClick={() => handleLockerClick(locker)}
              >
                <div
                  className="locker-map__panel-item-color"
                  style={{ background: getTypeColor(locker.type) }}
                />
                <div className="locker-map__panel-item-info">
                  <span className="locker-map__panel-item-name">{locker.name}</span>
                  <span className="locker-map__panel-item-address">{locker.address}</span>
                </div>
                <div className="locker-map__panel-item-availability">
                  <span>{locker.availableCompartments}</span>
                  <small>livres</small>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LockerMap;
