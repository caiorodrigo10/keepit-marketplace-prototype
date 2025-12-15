'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { FaMapMarkerAlt } from 'react-icons/fa';
import type { GooglePlace, SelectedLocation } from '@/types/location';

// Dynamic imports to avoid SSR issues
const AddressAutocomplete = dynamic(
  () => import('@/components/location/AddressAutocomplete'),
  { ssr: false, loading: () => (
    <div className="banner__search-wrapper">
      <div className="banner__search-icon">
        <FaMapMarkerAlt />
      </div>
      <input
        type="text"
        className="banner__search-input"
        placeholder="Endereço de entrega e número"
        disabled
      />
      <button className="banner__search-btn" disabled>
        Buscar
      </button>
    </div>
  )}
);

const LocationPickerModal = dynamic(
  () => import('@/components/location/LocationPickerModal'),
  { ssr: false }
);

const BannerHomeThree = () => {
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialLocation, setInitialLocation] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);

  const handlePlaceSelect = (place: GooglePlace) => {
    console.log('[BannerHomeThree] Place selected:', place);
    setInitialLocation({
      lat: place.lat,
      lng: place.lng,
      address: place.description,
    });
    setIsModalOpen(true);
  };

  const handleLocationConfirm = (location: SelectedLocation) => {
    console.log('[BannerHomeThree] Location confirmed:', location);
    setSelectedAddress(location.formatted_address);
    setIsModalOpen(false);

    // Redireciona para a página /inicio com os produtos
    router.push('/inicio');
  };

  return (
    <>
      <section className="banner banner--style3 banner--centered">
        <div
          className="banner__wrapper"
          style={{ background: '#1E1E1E' }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div
                  className="banner__content banner__content--centered"
                  data-aos="fade-up"
                  data-aos-duration={800}
                >
                  <h1 className="banner__content-heading">
                    Retire onde e quando quiser
                  </h1>
                  <p className="banner__content-moto">
                    Compre online, retire no locker. Rápido e sem complicação.
                  </p>

                  {/* Search Bar with Google Places Autocomplete */}
                  <div className="banner__search">
                    <AddressAutocomplete
                      onPlaceSelect={handlePlaceSelect}
                      placeholder="Endereço de entrega e número"
                      defaultValue={selectedAddress}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Picker Modal */}
      {initialLocation && (
        <LocationPickerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleLocationConfirm}
          initialLocation={initialLocation}
        />
      )}
    </>
  );
};

export default BannerHomeThree;
