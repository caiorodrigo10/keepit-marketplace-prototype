'use client';

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import LocationPickerMap from './LocationPickerMap';
import type { SelectedLocation, Locker } from '@/types/location';

interface LocationPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (location: SelectedLocation) => void;
  initialLocation: {
    lat: number;
    lng: number;
    address: string;
  };
}

export default function LocationPickerModal({
  isOpen,
  onClose,
  onConfirm,
  initialLocation,
}: LocationPickerModalProps) {
  const [currentLocation, setCurrentLocation] = React.useState<SelectedLocation>({
    lat: initialLocation.lat,
    lng: initialLocation.lng,
    address: initialLocation.address,
    formatted_address: initialLocation.address,
  });

  const [selectedLocker, setSelectedLocker] = React.useState<Locker | null>(null);

  console.log('[LocationPickerModal] Render', { isOpen, initialLocation });

  if (!isOpen) return null;

  const handleLockerSelect = (locker: Locker) => {
    console.log('[LocationPickerModal] Locker selected:', locker);
    setSelectedLocker(locker);
  };

  const handleConfirm = () => {
    console.log('[LocationPickerModal] Confirming location:', currentLocation);
    const locationWithLocker = {
      ...currentLocation,
      selectedLocker: selectedLocker || undefined,
    };
    onConfirm(locationWithLocker);
  };

  return (
    <div className="location-modal">
      <div className="location-modal__backdrop" onClick={onClose} />

      <div className="location-modal__content">
        <button className="location-modal__back-btn" onClick={onClose}>
          <FaArrowLeft />
        </button>

        <div className="location-modal__header-card">
          <h3>{selectedLocker ? 'LOCKER SELECIONADO' : 'ENDEREÇO'}</h3>
          <p>{selectedLocker ? 'Local de retirada' : 'Ajuste a localização'}</p>
          <div className="address">
            {selectedLocker ? (
              <>
                <strong>{selectedLocker.name}</strong>
                <br />
                {selectedLocker.address}
              </>
            ) : (
              currentLocation.formatted_address
            )}
          </div>
        </div>

        <div className="location-modal__map-container">
          <LocationPickerMap
            initialCenter={{ lat: initialLocation.lat, lng: initialLocation.lng }}
            onLocationChange={setCurrentLocation}
            onLockerSelect={handleLockerSelect}
          />
        </div>

        <button className="location-modal__confirm-btn" onClick={handleConfirm}>
          Confirmar localização
        </button>
      </div>
    </div>
  );
}
