import { SearchProduct } from './types';
import products from '../../../public/json/popular-product.json';
import { featuredVendors } from '@/modules/home/components/featured-vendors/vendorsData';

// Map products to vendors by category
function getVendorForProduct(productCategory: string): typeof featuredVendors[0] {
  // Category mapping
  const categoryMap: Record<string, string> = {
    'Fast Food': 'restaurante',
    'Farmácia': 'farmacia',
    'Mercado': 'mercado',
    'Bebidas': 'bebidas',
    'Pet Shop': 'petshop',
    'Cosméticos': 'cosmeticos',
    'Snacks': 'restaurante',
    'Higiene': 'farmacia',
    'Café': 'bebidas',
    'Conveniência': 'mercado',
  };

  const vendorCategory = categoryMap[productCategory] || 'restaurante';

  // Find vendors matching category
  const matchingVendors = featuredVendors.filter(
    v => v.categoryKey === vendorCategory
  );

  // Return random vendor from matching ones, or first vendor as fallback
  if (matchingVendors.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingVendors.length);
    return matchingVendors[randomIndex];
  }

  return featuredVendors[0];
}

// Combine products with vendors
export const searchProducts: SearchProduct[] = products.map(product => {
  const vendor = getVendorForProduct(product.categories);

  return {
    id: product.id,
    title: product.title,
    description: product.title2,
    imgSrc: product.imgSrc,
    price: product.price,
    oldPrice: product.oldPrice,
    discount: product.discount,
    rating: product.rating,
    reviews: product.reviews,
    categories: product.categories,
    vendor: {
      id: vendor.id,
      name: vendor.name,
      slug: vendor.slug,
      logo: vendor.logo,
      rating: vendor.rating,
      reviewCount: vendor.reviewCount,
      deliveryTime: vendor.deliveryTime,
      distance: vendor.distance,
      minimumOrder: vendor.minimumOrder,
      isOpen: vendor.isOpen,
      categoryKey: vendor.categoryKey,
    }
  };
});
