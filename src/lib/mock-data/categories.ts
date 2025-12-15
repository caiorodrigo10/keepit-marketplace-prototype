export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  description?: string
  featured: boolean
  type?: "default" | "promotional"
  productCount?: number
}

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Alimentos",
    slug: "alimentos",
    icon: "🍎",
    description: "Fast food, lanches e refeições rápidas",
    featured: true,
    productCount: 45,
  },
  {
    id: "cat-2",
    name: "Bebidas",
    slug: "bebidas",
    icon: "🥤",
    description: "Refrigerantes, sucos e águas",
    featured: true,
    productCount: 28,
  },
  {
    id: "cat-3",
    name: "Farmácia",
    slug: "farmacia",
    icon: "💊",
    description: "Medicamentos e produtos de saúde",
    featured: true,
    productCount: 120,
  },
  {
    id: "cat-4",
    name: "Eletrônicos",
    slug: "eletronicos",
    icon: "📱",
    description: "Smartphones, fones e acessórios",
    featured: true,
    productCount: 85,
  },
  {
    id: "cat-5",
    name: "Cosméticos",
    slug: "cosmeticos",
    icon: "✨",
    description: "Maquiagem e produtos de beleza",
    featured: true,
    productCount: 67,
  },
  {
    id: "cat-6",
    name: "Conveniência",
    slug: "conveniencia",
    icon: "🛒",
    description: "Produtos do dia a dia",
    featured: true,
    productCount: 52,
  },
  {
    id: "cat-7",
    name: "Promoções",
    slug: "promocoes",
    icon: "🔥",
    description: "Ofertas e descontos especiais",
    featured: true,
    type: "promotional",
    productCount: 34,
  },
  {
    id: "cat-8",
    name: "Novidades",
    slug: "novidades",
    icon: "⭐",
    description: "Produtos recém-chegados",
    featured: true,
    type: "promotional",
    productCount: 21,
  },
  {
    id: "cat-9",
    name: "Pet Shop",
    slug: "pet-shop",
    icon: "🐾",
    description: "Produtos para pets",
    featured: false,
    productCount: 18,
  },
  {
    id: "cat-10",
    name: "Livros",
    slug: "livros",
    icon: "📚",
    description: "Livros e revistas",
    featured: false,
    productCount: 42,
  },
]
