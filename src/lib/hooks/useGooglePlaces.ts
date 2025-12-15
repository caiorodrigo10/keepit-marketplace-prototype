'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useGoogleMapsContext } from '@/components/location/GoogleMapsProvider';
import type { AutocompleteOption, GooglePlace, PlaceDetails } from '@/types/location';

interface UseGooglePlacesReturn {
  predictions: AutocompleteOption[];
  isLoading: boolean;
  error: string | null;
  searchPlaces: (input: string) => void;
  getPlaceDetails: (placeId: string) => Promise<GooglePlace | null>;
  clearPredictions: () => void;
}

export function useGooglePlaces(): UseGooglePlacesReturn {
  const { isLoaded } = useGoogleMapsContext();
  const [predictions, setPredictions] = useState<AutocompleteOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize services when Google Maps is loaded
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined' && window.google && window.google.maps) {
      autocompleteServiceRef.current = new google.maps.places.AutocompleteService();

      // PlacesService requires a div element
      const div = document.createElement('div');
      placesServiceRef.current = new google.maps.places.PlacesService(div);
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [isLoaded]);

  const searchPlaces = useCallback((input: string) => {
    if (!input || input.length < 3) {
      setPredictions([]);
      return;
    }

    // Debounce search
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      if (!autocompleteServiceRef.current) {
        setError('Google Places service not initialized');
        return;
      }

      setIsLoading(true);
      setError(null);

      autocompleteServiceRef.current.getPlacePredictions(
        {
          input,
          componentRestrictions: { country: 'br' },
          types: ['address'],
        },
        (predictions, status) => {
          setIsLoading(false);

          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            setPredictions(predictions);
          } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            setPredictions([]);
          } else {
            setError('Erro ao buscar endereços. Tente novamente.');
            setPredictions([]);
          }
        }
      );
    }, 300);
  }, []);

  const getPlaceDetails = useCallback(async (placeId: string): Promise<GooglePlace | null> => {
    return new Promise((resolve) => {
      if (!placesServiceRef.current) {
        setError('Google Places service not initialized');
        resolve(null);
        return;
      }

      placesServiceRef.current.getDetails(
        {
          placeId,
          fields: ['place_id', 'formatted_address', 'geometry', 'address_components'],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place && place.geometry?.location) {
            const prediction = predictions.find((p) => p.place_id === placeId);

            const googlePlace: GooglePlace = {
              placeId: place.place_id || placeId,
              description: place.formatted_address || '',
              mainText: prediction?.structured_formatting.main_text || '',
              secondaryText: prediction?.structured_formatting.secondary_text || '',
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };

            resolve(googlePlace);
          } else {
            setError('Erro ao obter detalhes do endereço');
            resolve(null);
          }
        }
      );
    });
  }, [predictions]);

  const clearPredictions = useCallback(() => {
    setPredictions([]);
    setError(null);
  }, []);

  return {
    predictions,
    isLoading,
    error,
    searchPlaces,
    getPlaceDetails,
    clearPredictions,
  };
}
