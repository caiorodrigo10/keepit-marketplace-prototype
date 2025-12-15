import { SearchProduct, SearchFilters, SortOption } from './types';

/**
 * Search products by query string
 */
export function searchProducts(
  query: string,
  allProducts: SearchProduct[]
): SearchProduct[] {
  if (!query.trim()) {
    return allProducts;
  }

  const queryLower = query.toLowerCase();

  return allProducts
    .filter(product => {
      const searchText = `${product.title} ${product.description} ${product.categories}`.toLowerCase();
      return searchText.includes(queryLower);
    })
    .map(product => ({
      ...product,
      relevanceScore: calculateRelevance(product, query)
    }))
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
}

/**
 * Calculate relevance score for a product
 */
function calculateRelevance(product: SearchProduct, query: string): number {
  let score = 0;
  const queryLower = query.toLowerCase();

  // Exact title match: +100
  if (product.title.toLowerCase() === queryLower) score += 100;

  // Title contains query: +50
  if (product.title.toLowerCase().includes(queryLower)) score += 50;

  // Description contains query: +25
  if (product.description.toLowerCase().includes(queryLower)) score += 25;

  // Category exact match: +30
  if (product.categories.toLowerCase() === queryLower) score += 30;

  // Boost by product rating: rating * 10
  score += product.rating * 10;

  // Boost by vendor rating: rating * 5
  score += product.vendor.rating * 5;

  // Boost if vendor is open: +20
  if (product.vendor.isOpen) score += 20;

  // Boost if has discount: +15
  if (product.discount) score += 15;

  return score;
}

/**
 * Apply filters to products
 */
export function applyFilters(
  products: SearchProduct[],
  filters: Partial<SearchFilters>
): SearchProduct[] {
  return products.filter(product => {
    // Category filter
    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(product.categories)) {
        return false;
      }
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) {
        return false;
      }
    }

    // Minimum rating filter
    if (filters.minRating) {
      if (product.vendor.rating < filters.minRating) {
        return false;
      }
    }

    // Only open filter
    if (filters.onlyOpen) {
      if (!product.vendor.isOpen) {
        return false;
      }
    }

    // With discount filter
    if (filters.withDiscount) {
      if (!product.discount) {
        return false;
      }
    }

    // Minimum order filter
    if (filters.minOrder !== undefined) {
      if (product.vendor.minimumOrder > filters.minOrder) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Sort products by option
 */
export function sortResults(
  products: SearchProduct[],
  sortBy: SortOption
): SearchProduct[] {
  const sorted = [...products];

  switch (sortBy) {
    case SortOption.RELEVANCE:
      return sorted.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));

    case SortOption.PRICE_LOW:
      return sorted.sort((a, b) => a.price - b.price);

    case SortOption.PRICE_HIGH:
      return sorted.sort((a, b) => b.price - a.price);

    case SortOption.RATING:
      return sorted.sort((a, b) => b.vendor.rating - a.vendor.rating);

    case SortOption.DISTANCE:
      return sorted.sort((a, b) => {
        const distA = parseFloat(a.vendor.distance.replace('km', '').replace('m', ''));
        const distB = parseFloat(b.vendor.distance.replace('km', '').replace('m', ''));
        return distA - distB;
      });

    case SortOption.DELIVERY_TIME:
      return sorted.sort((a, b) => {
        const timeA = parseInt(a.vendor.deliveryTime.split('-')[0]);
        const timeB = parseInt(b.vendor.deliveryTime.split('-')[0]);
        return timeA - timeB;
      });

    default:
      return sorted;
  }
}
