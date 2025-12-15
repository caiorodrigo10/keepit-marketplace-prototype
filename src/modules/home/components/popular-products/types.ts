export type Product = {
  title?: string;
  imgSrc?: string;
  rating?: number;
  reviews?: number;
  price?: number;
  discount?: number; // Optional property
  oldPrice?: number; // Optional property
  badge?: string; // Optional property
  new?: boolean; // Optional property
  categories?: string;
};

export type Tab = {
  id: string;
  label: string;
};
