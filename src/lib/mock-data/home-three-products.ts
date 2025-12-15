// Mock data para produtos da home-three
// Agora usa popular-product.json como fonte única de dados
import popularProducts from '../../../public/json/popular-product.json'

export interface HomeThreeProduct {
  id: number
  title: string
  title2?: string
  imgSrc: string
  imgSrc2?: string
  rating: number
  reviews: number
  price: number
  oldPrice?: number
  discount?: number
  new?: string | number
  categories: string
  quantity: number
}

// Exporta produtos do popular-product.json
export const HOME_THREE_PRODUCTS: HomeThreeProduct[] = popularProducts as HomeThreeProduct[]

// Funções auxiliares para filtrar produtos
export const getProductsByCategory = (category: string) => {
  return HOME_THREE_PRODUCTS.filter(
    (product) => product.categories.toLowerCase() === category.toLowerCase()
  )
}

export const getBestSellers = () => {
  // Fast Food é a categoria mais relevante para "best sellers"
  return HOME_THREE_PRODUCTS.filter(p =>
    p.categories === 'Fast Food' || p.categories === 'Bebidas'
  ).slice(0, 6)
}

export const getFeaturedProducts = () => {
  // Farmácia e Cosméticos para "featured"
  return HOME_THREE_PRODUCTS.filter(p =>
    p.categories === 'Farmácia' || p.categories === 'Cosméticos'
  ).slice(0, 6)
}

export const getNewArrivals = () => {
  // Snacks e Higiene para "new arrivals"
  return HOME_THREE_PRODUCTS.filter(p =>
    p.categories === 'Snacks' || p.categories === 'Higiene'
  ).slice(0, 6)
}

export const getFlashSaleProducts = () => {
  return HOME_THREE_PRODUCTS.filter((product) => product.discount).slice(0, 6)
}
