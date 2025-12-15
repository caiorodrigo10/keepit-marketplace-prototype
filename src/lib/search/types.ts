// Search-related types
export interface SearchProduct {
  // Product data
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  categories: string;

  // Vendor data
  vendor: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    rating: number;
    reviewCount: number;
    deliveryTime: string;
    distance: string;
    minimumOrder: number;
    isOpen: boolean;
    categoryKey: string;
  }

  // Calculated field for sorting
  relevanceScore?: number;
}

export interface SearchFilters {
  categories: string[];
  priceRange: [number, number];
  minRating: number;
  maxDeliveryTime?: number;
  onlyOpen: boolean;
  withDiscount: boolean;
  minOrder: number;
}

export enum SortOption {
  RELEVANCE = 'relevancia',
  PRICE_LOW = 'preco-menor',
  PRICE_HIGH = 'preco-maior',
  RATING = 'avaliacao',
  DISTANCE = 'distancia',
  DELIVERY_TIME = 'tempo-entrega',
}
