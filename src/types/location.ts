// Location types for Google Places & Maps integration

export interface GooglePlace {
  placeId: string;
  description: string;
  mainText: string;
  secondaryText: string;
  lat: number;
  lng: number;
}

export interface Locker {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  available: boolean;
}

export interface SelectedLocation {
  lat: number;
  lng: number;
  address: string;
  formatted_address: string;
  placeId?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  selectedLocker?: Locker;
}

export interface AutocompleteOption {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export interface PlaceDetails {
  place_id: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  address_components: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;
}
