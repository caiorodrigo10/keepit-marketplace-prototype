// Mock data para produtos relacionados
// Reutiliza estrutura similar aos produtos da home-three

export interface RelatedProductMock {
  id: string
  title: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  categories: string
  inStock: boolean
}

export const relatedProductsMock: RelatedProductMock[] = [
  {
    id: 'prod-rel-1',
    title: 'Abóbora Orgânica Fresca',
    price: 12.90,
    originalPrice: 15.90,
    rating: 4.5,
    image: '/images/home-three/products/product-01.png',
    categories: 'Legumes',
    inStock: true,
  },
  {
    id: 'prod-rel-2',
    title: 'Tomates Orgânicos Premium',
    price: 8.50,
    rating: 4.8,
    image: '/images/home-three/products/product-02.png',
    categories: 'Legumes',
    inStock: true,
  },
  {
    id: 'prod-rel-3',
    title: 'Maçãs Verdes Orgânicas',
    price: 18.90,
    originalPrice: 22.00,
    rating: 4.7,
    image: '/images/home-three/products/product-03.png',
    categories: 'Frutas',
    inStock: true,
  },
  {
    id: 'prod-rel-4',
    title: 'Alface Crespa Orgânica',
    price: 6.90,
    rating: 4.6,
    image: '/images/home-three/products/product-04.png',
    categories: 'Verduras',
    inStock: true,
  },
  {
    id: 'prod-rel-5',
    title: 'Cenouras Orgânicas',
    price: 9.90,
    rating: 4.9,
    image: '/images/home-three/products/product-05.png',
    categories: 'Legumes',
    inStock: true,
  },
  {
    id: 'prod-rel-6',
    title: 'Morangos Orgânicos',
    price: 24.90,
    originalPrice: 28.90,
    rating: 4.8,
    image: '/images/home-three/products/product-06.png',
    categories: 'Frutas',
    inStock: true,
  },
  {
    id: 'prod-rel-7',
    title: 'Batata Doce Orgânica',
    price: 11.50,
    rating: 4.7,
    image: '/images/home-three/products/product-07.png',
    categories: 'Legumes',
    inStock: true,
  },
  {
    id: 'prod-rel-8',
    title: 'Bananas Orgânicas',
    price: 7.90,
    rating: 4.6,
    image: '/images/home-three/products/product-08.png',
    categories: 'Frutas',
    inStock: true,
  },
]
