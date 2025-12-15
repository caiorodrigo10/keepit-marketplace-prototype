/**
 * Keepit Categories
 * Product categories with icons and metadata
 */

import { Category } from "@/types/keepit"

export const CATEGORIES: Category[] = [
  // Basic Categories
  {
    id: "alimentos",
    name: "Alimentos",
    slug: "alimentos",
    icon: "🍎", // Apple emoji (can be replaced with Phosphor icon)
    type: "basic",
    description: "Frutas, verduras, lanches e refeições prontas",
  },
  {
    id: "bebidas",
    name: "Bebidas",
    slug: "bebidas",
    icon: "🥤", // Cup with straw emoji
    type: "basic",
    description: "Sucos, refrigerantes, águas e bebidas especiais",
  },
  {
    id: "mercado",
    name: "Mercado",
    slug: "mercado",
    icon: "🛒", // Shopping cart emoji
    type: "basic",
    description: "Itens essenciais para o dia a dia",
  },
  {
    id: "farmacia",
    name: "Farmácia",
    slug: "farmacia",
    icon: "💊", // Pill emoji
    type: "basic",
    description: "Medicamentos, higiene e cuidados pessoais",
  },
  {
    id: "eletronicos",
    name: "Eletrônicos",
    slug: "eletronicos",
    icon: "📱", // Mobile phone emoji
    type: "basic",
    description: "Acessórios e eletrônicos",
  },

  // Promotional Categories
  {
    id: "novidades",
    name: "Novidades",
    slug: "novidades",
    icon: "✨", // Sparkles emoji
    type: "promotional",
    color: "#67FB94", // Keepit light green
    description: "Produtos recém-chegados",
  },
  {
    id: "promocoes",
    name: "Promoções",
    slug: "promocoes",
    icon: "🔥", // Fire emoji
    type: "promotional",
    color: "#EF4444", // Error red
    description: "Ofertas especiais com desconto",
  },
  {
    id: "mais-vendidos",
    name: "Mais Vendidos",
    slug: "mais-vendidos",
    icon: "⭐", // Star emoji
    type: "promotional",
    color: "#F59E0B", // Warning yellow
    description: "Os favoritos dos clientes",
  },
]

export const getCategoryById = (id: string): Category | undefined => {
  return CATEGORIES.find((cat) => cat.id === id)
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return CATEGORIES.find((cat) => cat.slug === slug)
}

export const getBasicCategories = (): Category[] => {
  return CATEGORIES.filter((cat) => cat.type === "basic")
}

export const getPromotionalCategories = (): Category[] => {
  return CATEGORIES.filter((cat) => cat.type === "promotional")
}
