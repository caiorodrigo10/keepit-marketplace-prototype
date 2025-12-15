'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useGoogleMaps } from '@/lib/hooks/useGoogleMaps';
import type { SelectedLocation, Locker } from '@/types/location';
import { MOCK_LOCKERS } from '@/lib/mock-data/lockers';

interface LocationPickerMapProps {
  initialCenter: { lat: number; lng: number };
  onLocationChange: (location: SelectedLocation) => void;
  onLockerSelect?: (locker: Locker) => void;
}

export default function LocationPickerMap({ initialCenter, onLocationChange, onLockerSelect }: LocationPickerMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const [isGeocoding, setIsGeocoding] = useState(false);
  const [selectedLocker, setSelectedLocker] = useState<Locker | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const { isLoaded, geocode } = useGoogleMaps();
  const hasInitialized = useRef(false);

  useEffect(() => {
    console.log('[LocationPickerMap] Effect triggered', {
      isLoaded,
      hasMapRef: !!mapRef.current,
      hasInitialized: hasInitialized.current
    });

    if (!isLoaded || !mapRef.current || hasInitialized.current) return;

    // Check if Google Maps is fully available
    if (typeof window === 'undefined' || !window.google || !window.google.maps) {
      console.error('[LocationPickerMap] Google Maps not loaded');
      return;
    }

    console.log('[LocationPickerMap] Initializing map with center:', initialCenter);
    hasInitialized.current = true;

    // Initialize map directly (removed setTimeout to fix execution issue)
    console.log('[LocationPickerMap] Creating Google Map instance');

    const map = new google.maps.Map(mapRef.current, {
      center: initialCenter,
      zoom: 17,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    googleMapRef.current = map;
    console.log('[LocationPickerMap] Map instance created');

    // Trigger resize after map is loaded to fix gray tiles
    google.maps.event.addListenerOnce(map, 'idle', () => {
      console.log('[LocationPickerMap] Map idle event triggered');
      google.maps.event.trigger(map, 'resize');
      map.setCenter(initialCenter);
    });

    // Handle dragend event
    let dragTimeout: NodeJS.Timeout;
    map.addListener('dragend', () => {
      clearTimeout(dragTimeout);
      dragTimeout = setTimeout(async () => {
        const center = map.getCenter();
        if (center && !isGeocoding) {
          setIsGeocoding(true);
          const location = await geocode(center.lat(), center.lng());
          setIsGeocoding(false);

          if (location) {
            onLocationChange(location);
          }
        }
      }, 500);
    });

    // Initial geocode
    (async () => {
      const location = await geocode(initialCenter.lat, initialCenter.lng);
      if (location) {
        onLocationChange(location);
      }
    })();

    // Add locker markers
    MOCK_LOCKERS.forEach((locker) => {
      const marker = new google.maps.Marker({
        position: { lat: locker.lat, lng: locker.lng },
        map: map,
        title: locker.name,
        icon: {
          url: '/icons/locker-marker.svg',
          scaledSize: new google.maps.Size(40, 40),
        },
      });

      // Add click listener to show InfoWindow
      marker.addListener('click', () => {
        // Close any open InfoWindow
        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }

        // Create InfoWindow content
        const content = `
          <div class="locker-info">
            <h4 class="locker-info__title">${locker.name}</h4>
            <p class="locker-info__address">${locker.address}</p>
            <button class="locker-info__select-btn" id="select-locker-${locker.id}">
              Selecionar este locker
            </button>
          </div>
        `;

        // Create and open InfoWindow
        const infoWindow = new google.maps.InfoWindow({
          content: content,
        });

        infoWindow.open(map, marker);
        infoWindowRef.current = infoWindow;

        // Add listener for select button after InfoWindow opens
        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          const selectBtn = document.getElementById(`select-locker-${locker.id}`);
          if (selectBtn) {
            selectBtn.addEventListener('click', () => {
              // Clear previous selection
              markersRef.current.forEach(m => {
                m.setIcon({
                  url: '/icons/locker-marker.svg',
                  scaledSize: new google.maps.Size(40, 40),
                });
              });

              // Highlight selected marker
              marker.setIcon({
                url: '/icons/locker-marker.svg',
                scaledSize: new google.maps.Size(50, 50),
              });

              setSelectedLocker(locker);
              if (onLockerSelect) {
                onLockerSelect(locker);
              }
              infoWindow.close();

              // Auto-confirmar após selecionar locker
              setTimeout(() => {
                const confirmBtn = document.querySelector('.location-modal__confirm-btn') as HTMLButtonElement;
                if (confirmBtn) {
                  confirmBtn.click();
                }
              }, 300);
            });
          }
        });
      });

      markersRef.current.push(marker);
    });
  }, [isLoaded, geocode, onLocationChange, onLockerSelect]);

  if (!isLoaded) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Carregando mapa...</p>
      </div>
    );
  }

  return (
    <>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

      {/* Fixed pin in center */}
      <div className="location-modal__pin">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="#67FB94"
          />
        </svg>
      </div>
    </>
  );
}
