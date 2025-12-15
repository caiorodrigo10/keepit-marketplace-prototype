// Mock data para categorias da home-three
// Baseado em: /template/torganic-nextjs/src/features/Featured_categories/components/FeaturedCategories.tsx

export interface HomeThreeCategory {
  id: number
  name: string
  slug: string
  icon: string
  productCount: number
}

export const HOME_THREE_CATEGORIES: HomeThreeCategory[] = [
  {
    id: 1,
    name: "Vegetables",
    slug: "vegetables",
    icon: "/images/home-three/categories/vegedata.svg",
    productCount: 45,
  },
  {
    id: 2,
    name: "Snacks",
    slug: "snacks",
    icon: "/images/home-three/categories/snack.svg",
    productCount: 32,
  },
  {
    id: 3,
    name: "Coffee",
    slug: "coffee",
    icon: "/images/home-three/categories/Coffee.svg",
    productCount: 18,
  },
  {
    id: 4,
    name: "Milk",
    slug: "milk",
    icon: "/images/home-three/categories/Milk.svg",
    productCount: 24,
  },
  {
    id: 5,
    name: "Drinks",
    slug: "drinks",
    icon: "/images/home-three/categories/Drinks.svg",
    productCount: 28,
  },
  {
    id: 6,
    name: "Meat",
    slug: "meat",
    icon: "/images/home-three/categories/Meat.svg",
    productCount: 36,
  },
  {
    id: 7,
    name: "Fruits",
    slug: "fruits",
    icon: "/images/home-three/categories/fruits.svg",
    productCount: 52,
  },
  {
    id: 8,
    name: "Organic",
    slug: "organic",
    icon: "/images/home-three/categories/vegedata.svg",
    productCount: 41,
  },
]
