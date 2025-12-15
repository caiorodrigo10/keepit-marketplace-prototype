/**
 * Keepit Mock Data Utilities
 * Functions for filtering and searching mock data
 */

import { Product, Vendor, Hoster, SearchFilters } from "@/types/keepit"
import { MOCK_PRODUCTS } from "@/lib/mock-data/products"
import { MOCK_VENDORS, getVendorById } from "@/lib/mock-data/vendors"
import { MOCK_HOSTERS, getHosterById } from "@/lib/mock-data/hosters"

/**
 * Search products with comprehensive filters
 */
export function searchProducts(filters: SearchFilters = {}): Product[] {
  let results = [...MOCK_PRODUCTS]

  // Filter by category
  if (filters.category) {
    results = results.filter(
      (p) => p.category.toLowerCase() === filters.category?.toLowerCase()
    )
  }

  // Filter by vendor
  if (filters.vendorId) {
    results = results.filter((p) => p.vendorId === filters.vendorId)
  }

  // Filter by hoster
  if (filters.hosterId) {
    results = results.filter((p) => p.hosterIds.includes(filters.hosterId!))
  }

  // Filter by price range
  if (filters.minPrice !== undefined) {
    results = results.filter((p) => p.price >= filters.minPrice!)
  }
  if (filters.maxPrice !== undefined) {
    results = results.filter((p) => p.price <= filters.maxPrice!)
  }

  // Filter by featured
  if (filters.featured !== undefined) {
    results = results.filter((p) => p.featured === filters.featured)
  }

  // Filter by badge
  if (filters.badge) {
    results = results.filter((p) => p.badge === filters.badge)
  }

  // Text search (name or description)
  if (filters.query && filters.query.trim()) {
    const query = filters.query.toLowerCase().trim()
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    )
  }

  return results
}

/**
 * Get products with populated vendor and hoster data
 */
export function getProductsWithDetails(
  filters: SearchFilters = {}
): (Product & { vendor?: Vendor; hosters?: Hoster[] })[] {
  const products = searchProducts(filters)

  return products.map((product) => ({
    ...product,
    vendor: getVendorById(product.vendorId),
    hosters: product.hosterIds
      .map((hosterId) => getHosterById(hosterId))
      .filter((h): h is Hoster => h !== undefined),
  }))
}

/**
 * Get a single product by ID with populated details
 */
export function getProductWithDetails(
  productId: string
): (Product & { vendor?: Vendor; hosters?: Hoster[] }) | undefined {
  const product = MOCK_PRODUCTS.find((p) => p.id === productId)

  if (!product) return undefined

  return {
    ...product,
    vendor: getVendorById(product.vendorId),
    hosters: product.hosterIds
      .map((hosterId) => getHosterById(hosterId))
      .filter((h): h is Hoster => h !== undefined),
  }
}

/**
 * Search vendors by name or category
 */
export function searchVendors(query: string = "", category?: string): Vendor[] {
  let results = [...MOCK_VENDORS]

  if (category) {
    results = results.filter(
      (v) => v.category?.toLowerCase() === category.toLowerCase()
    )
  }

  if (query.trim()) {
    const q = query.toLowerCase().trim()
    results = results.filter(
      (v) =>
        v.name.toLowerCase().includes(q) ||
        v.description?.toLowerCase().includes(q)
    )
  }

  return results
}

/**
 * Search hosters by location
 */
export function searchHosters(query: string = ""): Hoster[] {
  if (!query.trim()) return [...MOCK_HOSTERS]

  const q = query.toLowerCase().trim()
  return MOCK_HOSTERS.filter(
    (h) =>
      h.name.toLowerCase().includes(q) ||
      h.location.toLowerCase().includes(q) ||
      h.city.toLowerCase().includes(q) ||
      h.state.toLowerCase().includes(q) ||
      h.address.toLowerCase().includes(q)
  )
}

/**
 * Get related products (same category, different vendor)
 */
export function getRelatedProducts(
  productId: string,
  limit: number = 4
): Product[] {
  const product = MOCK_PRODUCTS.find((p) => p.id === productId)
  if (!product) return []

  return MOCK_PRODUCTS.filter(
    (p) =>
      p.id !== productId && // Exclude the same product
      p.category === product.category && // Same category
      p.vendorId !== product.vendorId // Different vendor
  ).slice(0, limit)
}

/**
 * Get discount percentage
 */
export function getDiscountPercentage(product: Product): number {
  if (!product.originalPrice || product.originalPrice <= product.price) {
    return 0
  }
  return Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )
}

/**
 * Sort products by different criteria
 */
export function sortProducts(
  products: Product[],
  sortBy: "price-asc" | "price-desc" | "name" | "rating" | "newest" = "newest"
): Product[] {
  const sorted = [...products]

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price)
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case "rating":
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    case "newest":
      // Assuming products with 'new' badge are newest
      return sorted.sort((a, b) => {
        if (a.badge === "new" && b.badge !== "new") return -1
        if (a.badge !== "new" && b.badge === "new") return 1
        return 0
      })
    default:
      return sorted
  }
}
