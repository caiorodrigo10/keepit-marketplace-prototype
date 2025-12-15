'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useGooglePlaces } from '@/lib/hooks/useGooglePlaces';
import type { GooglePlace } from '@/types/location';

interface AddressAutocompleteProps {
  onPlaceSelect: (place: GooglePlace) => void;
  placeholder?: string;
  defaultValue?: string;
}

export default function AddressAutocomplete({
  onPlaceSelect,
  placeholder = 'Endereço de entrega e número',
  defaultValue = '',
}: AddressAutocompleteProps) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { predictions, isLoading, searchPlaces, getPlaceDetails, clearPredictions } = useGooglePlaces();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log('[AddressAutocomplete] Input changed:', value);
    setInputValue(value);
    searchPlaces(value);
    setShowDropdown(true);
  };

  const handleOptionClick = async (placeId: string, description: string) => {
    console.log('[AddressAutocomplete] Option clicked:', { placeId, description });
    const placeDetails = await getPlaceDetails(placeId);
    console.log('[AddressAutocomplete] Place details received:', placeDetails);

    if (placeDetails) {
      setInputValue(description);
      setShowDropdown(false);
      clearPredictions();
      console.log('[AddressAutocomplete] Calling onPlaceSelect with:', placeDetails);
      onPlaceSelect(placeDetails);
    } else {
      console.error('[AddressAutocomplete] Failed to get place details');
    }
  };

  return (
    <div className="address-autocomplete" ref={dropdownRef}>
      <div className="banner__search-wrapper">
        <div className="banner__search-icon">
          <FaMapMarkerAlt />
        </div>
        <input
          type="text"
          className="banner__search-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => predictions.length > 0 && setShowDropdown(true)}
        />
        <button className="banner__search-btn" type="button">
          Buscar
        </button>
      </div>

      {showDropdown && predictions.length > 0 && (
        <div className="address-autocomplete__dropdown">
          {predictions.map((prediction) => (
            <div
              key={prediction.place_id}
              className="address-autocomplete__option"
              onClick={() => handleOptionClick(prediction.place_id, prediction.description)}
            >
              <div className="address-autocomplete__option-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="address-autocomplete__option-text">
                <div className="address-autocomplete__option-main">
                  {prediction.structured_formatting.main_text}
                </div>
                <div className="address-autocomplete__option-secondary">
                  {prediction.structured_formatting.secondary_text}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isLoading && showDropdown && (
        <div className="address-autocomplete__dropdown">
          <div className="address-autocomplete__option">
            <div className="address-autocomplete__option-text">
              Buscando endereços...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
