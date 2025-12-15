'use client';

import React, { useEffect, useRef, useState } from 'react';
import { mockLockers, type MockLocker } from '../data/mockLockers';
import { IoLocationOutline } from 'react-icons/io5';

interface LockerMapProps {
  onLockerSelect?: (locker: MockLocker) => void;
  selectedLockerId?: string;
}

export default function LockerMap({ onLockerSelect, selectedLockerId }: LockerMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasInitialized = useRef(false);

  // Av. Paulista center coordinates
  const paulistaCenter = { lat: -23.561684, lng: -46.656139 };

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (typeof window !== 'undefined' && window.google && window.google.maps) {
        setIsLoaded(true);
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
      if (!apiKey) {
        console.error('[LockerMap] Google Maps API key not found');
        return;
      }

      const callbackName = 'initLockerMap';

      (window as any)[callbackName] = () => {
        setIsLoaded(true);
        delete (window as any)[callbackName];
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=pt-BR&region=BR&callback=${callbackName}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || hasInitialized.current) return;
    if (typeof window === 'undefined' || !window.google || !window.google.maps) return;

    hasInitialized.current = true;

    const map = new google.maps.Map(mapRef.current, {
      center: paulistaCenter,
      zoom: 14,
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
    mockLockers.forEach((locker) => {
      const isSelected = selectedLockerId === locker.id;

      const marker = new google.maps.Marker({
        position: { lat: locker.lat, lng: locker.lng },
        map: map,
        title: locker.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: isSelected ? '#34BF58' : '#67FB94',
          fillOpacity: 1,
          strokeColor: '#1E1E1E',
          strokeWeight: 3,
          scale: isSelected ? 12 : 10,
        },
        animation: isSelected ? google.maps.Animation.BOUNCE : undefined,
      });

      // InfoWindow content
      const availabilityPercent = (locker.availableSlots / locker.totalSlots) * 100;
      const availabilityColor = availabilityPercent > 50 ? '#34BF58' : availabilityPercent > 20 ? '#F59E0B' : '#EF4444';

      const infoContent = `
        <div style="padding: 8px; max-width: 250px;">
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #1E1E1E;">${locker.name}</h4>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #4A4A4A;">${locker.address}</p>
          <div style="display: flex; gap: 12px; margin-bottom: 8px; font-size: 11px;">
            <div>
              <span style="color: #9E9E9E; display: block;">Distância</span>
              <span style="font-weight: 600; color: #1E1E1E;">${locker.distance}</span>
            </div>
            <div>
              <span style="color: #9E9E9E; display: block;">Disponível</span>
              <span style="font-weight: 600; color: ${availabilityColor};">${locker.availableSlots}/${locker.totalSlots}</span>
            </div>
          </div>
          ${onLockerSelect ? `
            <button
              onclick="window.selectLocker('${locker.id}')"
              style="
                width: 100%;
                padding: 8px;
                background: #67FB94;
                color: #1E1E1E;
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

        // Store InfoWindow reference
        (marker as any).infoWindow = infoWindow;

        // Pan to marker
        map.panTo({ lat: locker.lat, lng: locker.lng });
      });

      markersRef.current.push(marker);
    });

    // Global function for InfoWindow button
    (window as any).selectLocker = (lockerId: string) => {
      const locker = mockLockers.find(l => l.id === lockerId);
      if (locker && onLockerSelect) {
        onLockerSelect(locker);
      }
    };

  }, [isLoaded, selectedLockerId, onLockerSelect]);

  if (!isLoaded) {
    return (
      <div style={{
        backgroundColor: '#F1F1F1',
        borderRadius: '1rem',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #E0E0E0',
      }}>
        <div style={{ textAlign: 'center', color: '#9E9E9E' }}>
          <IoLocationOutline style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Carregando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '400px',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '2px solid #E0E0E0'
      }}
    />
  );
}
