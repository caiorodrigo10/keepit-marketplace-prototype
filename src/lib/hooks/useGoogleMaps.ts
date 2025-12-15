'use client';

import { useCallback } from 'react';
import { useGoogleMapsContext } from '@/components/location/GoogleMapsProvider';
import type { SelectedLocation } from '@/types/location';

interface UseGoogleMapsReturn {
  isLoaded: boolean;
  loadError: Error | null;
  geocode: (lat: number, lng: number) => Promise<SelectedLocation | null>;
}

export function useGoogleMaps(): UseGoogleMapsReturn {
  const { isLoaded, loadError } = useGoogleMapsContext();

  const geocode = useCallback(async (lat: number, lng: number): Promise<SelectedLocation | null> => {
    if (!isLoaded) {
      console.error('Google Maps not loaded yet');
      return null;
    }

    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, lng);

    return new Promise((resolve) => {
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const result = results[0];

          // Extract address components
          let city = '';
          let state = '';
          let postalCode = '';
          let country = '';

          result.address_components.forEach((component) => {
            if (component.types.includes('locality')) {
              city = component.long_name;
            }
            if (component.types.includes('administrative_area_level_1')) {
              state = component.short_name;
            }
            if (component.types.includes('postal_code')) {
              postalCode = component.long_name;
            }
            if (component.types.includes('country')) {
              country = component.short_name;
            }
          });

          resolve({
            lat,
            lng,
            address: result.formatted_address,
            formatted_address: result.formatted_address,
            placeId: result.place_id,
            city,
            state,
            postalCode,
            country,
          });
        } else {
          console.error('Geocoding failed:', status);
          resolve(null);
        }
      });
    });
  }, [isLoaded]);

  return {
    isLoaded,
    loadError,
    geocode,
  };
}
