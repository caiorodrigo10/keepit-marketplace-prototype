// Todos os produtos com dados completos para páginas de detalhes
import popularProducts from '../../../public/json/popular-product.json'
import { ProductDetailsMock } from './product-details-mock'
import {
  BasicProduct,
  extractBrandFromCategory,
  generateImages,
  generateBenefits,
  generateDescriptionTitle,
  generateDescriptionParagraphs,
  KEEPIT_STANDARD_INFO,
} from './product-data-generators'

/**
 * Converte produto básico em produto completo com todos os dados necessários
 */
function generateProductDetails(
  basicProduct: BasicProduct
): ProductDetailsMock {
  const images = generateImages(basicProduct)

  return {
    id: basicProduct.id.toString(),
    title: basicProduct.title,
    price: basicProduct.price,
    originalPrice: basicProduct.oldPrice,
    discount: basicProduct.discount,
    rating: basicProduct.rating,
    reviews: basicProduct.reviews,
    brand: extractBrandFromCategory(basicProduct.categories),
    images: images,
    benefits: generateBenefits(basicProduct),
    description: {
      title: generateDescriptionTitle(basicProduct),
      paragraphs: generateDescriptionParagraphs(basicProduct),
      images: images, // Usa a mesma imagem da vitrine
    },
    additionalInfo: KEEPIT_STANDARD_INFO,
  }
}

/**
 * Array com todos os produtos completos (25 produtos de popular-product.json)
 */
export const ALL_PRODUCTS_DETAILS: ProductDetailsMock[] =
  popularProducts.map(generateProductDetails)

/**
 * Busca produto por ID
 * @param id - ID do produto (string ou number)
 * @returns Produto encontrado ou null
 */
export function getProductById(
  id: string | number
): ProductDetailsMock | null {
  const productId = typeof id === 'number' ? id.toString() : id
  return ALL_PRODUCTS_DETAILS.find((p) => p.id === productId) || null
}

/**
 * Retorna todos os IDs de produtos disponíveis
 * Útil para generateStaticParams no Next.js
 */
export function getAllProductIds(): string[] {
  return ALL_PRODUCTS_DETAILS.map((p) => p.id)
}

/**
 * Retorna produtos relacionados (exclui o produto atual)
 * @param currentProductId - ID do produto atual
 * @param limit - Quantidade de produtos a retornar (padrão: 4)
 */
export function getRelatedProducts(
  currentProductId: string,
  limit: number = 4
): ProductDetailsMock[] {
  return ALL_PRODUCTS_DETAILS.filter((p) => p.id !== currentProductId).slice(
    0,
    limit
  )
}
