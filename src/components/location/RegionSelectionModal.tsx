'use client';

import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaMapMarkerAlt, FaMapPin } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import type { GooglePlace, SelectedLocation } from '@/types/location';
import { useRouter } from 'next/navigation';

const AddressAutocomplete = dynamic(
  () => import('@/components/location/AddressAutocomplete'),
  { ssr: false }
);

const LocationPickerModal = dynamic(
  () => import('@/components/location/LocationPickerModal'),
  { ssr: false }
);

interface RegionSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

const RegionSelectionModal: React.FC<RegionSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
}) => {
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState('');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [initialLocation, setInitialLocation] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);

  const handlePlaceSelect = (place: GooglePlace) => {
    console.log('[RegionSelectionModal] Place selected:', place);
    setInitialLocation({
      lat: place.lat,
      lng: place.lng,
      address: place.description,
    });
    setIsLocationModalOpen(true);
  };

  const handleLocationConfirm = (location: SelectedLocation) => {
    console.log('[RegionSelectionModal] Location confirmed:', location);
    setSelectedAddress(location.formatted_address);
    setIsLocationModalOpen(false);
    onClose();

    // Salvar locker em localStorage se selecionado
    if (location.selectedLocker) {
      localStorage.setItem('keepit_selected_locker', JSON.stringify(location.selectedLocker));
      console.log('[RegionSelectionModal] Locker saved to localStorage:', location.selectedLocker);
    } else {
      // Limpar locker se nenhum foi selecionado
      localStorage.removeItem('keepit_selected_locker');
    }

    // Navegar para /inicio com categoria se fornecida
    const url = selectedCategory
      ? `/inicio?category=${selectedCategory}`
      : '/inicio';
    router.push(url);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setInitialLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            address: 'Localização atual',
          });
          setIsLocationModalOpen(true);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Não foi possível obter sua localização. Por favor, digite o endereço manualmente.');
        }
      );
    } else {
      alert('Geolocalização não é suportada neste navegador.');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="region-modal-overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="region-modal">
        <div className="region-modal__header">
          <button
            className="region-modal__close"
            onClick={onClose}
            aria-label="Fechar"
          >
            <IoClose />
          </button>
        </div>

        <div className="region-modal__content">
          {/* Illustration */}
          <div className="region-modal__illustration">
            <div className="region-modal__icon-wrapper">
              <FaMapMarkerAlt className="region-modal__icon region-modal__icon--primary" />
              <FaMapPin className="region-modal__icon region-modal__icon--secondary" />
              <FaMapPin className="region-modal__icon region-modal__icon--tertiary" />
            </div>
          </div>

          {/* Title */}
          <h2 className="region-modal__title">
            Onde você quer receber seu pedido?
          </h2>

          {/* Address Search */}
          <div className="region-modal__search">
            <AddressAutocomplete
              onPlaceSelect={handlePlaceSelect}
              placeholder="Buscar endereço e número"
              defaultValue={selectedAddress}
            />
          </div>

          {/* Use Current Location Button */}
          <button
            className="region-modal__location-btn"
            onClick={handleUseCurrentLocation}
          >
            <div className="region-modal__location-icon">
              <FaMapPin />
            </div>
            <span>Usar minha localização</span>
          </button>

          {/* Footer Text */}
          <div className="region-modal__footer">
            <p className="region-modal__footer-text">
              Já tem um endereço salvo?
            </p>
            <p className="region-modal__footer-subtext">
              Entre na sua conta para selecionar seu endereço.
            </p>
            <button className="region-modal__login-btn">
              Entrar ou cadastrar
            </button>
          </div>
        </div>
      </div>

      {/* Location Picker Modal (Map) */}
      {initialLocation && (
        <LocationPickerModal
          isOpen={isLocationModalOpen}
          onClose={() => setIsLocationModalOpen(false)}
          onConfirm={handleLocationConfirm}
          initialLocation={initialLocation}
        />
      )}
    </>
  );
};

export default RegionSelectionModal;
