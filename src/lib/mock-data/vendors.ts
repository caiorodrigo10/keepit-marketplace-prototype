/**
 * Keepit Mock Data - Vendors
 * 15 realistic vendor/store brands operating in the marketplace
 */

import { Vendor } from "@/types/keepit"

export const MOCK_VENDORS: Vendor[] = [
  {
    id: "vendor-1",
    name: "Pão de Açúcar",
    logo: "/mock-images/vendors/pao-de-acucar.png",
    description: "Supermercado premium com produtos de alta qualidade e marcas exclusivas.",
    category: "mercado",
    featured: true,
    hosters: ["hoster-1", "hoster-2", "hoster-4", "hoster-7"],
  },
  {
    id: "vendor-2",
    name: "Drogasil",
    logo: "/mock-images/vendors/drogasil.png",
    description: "Farmácia líder com ampla linha de medicamentos e produtos de higiene.",
    category: "farmacia",
    featured: true,
    hosters: ["hoster-2", "hoster-3", "hoster-5", "hoster-6"],
  },
  {
    id: "vendor-3",
    name: "McDonald's",
    logo: "/mock-images/vendors/mcdonalds.png",
    description: "A rede de fast-food mais famosa do mundo.",
    category: "alimentos",
    featured: true,
    hosters: ["hoster-1", "hoster-2", "hoster-3", "hoster-4", "hoster-7"],
  },
  {
    id: "vendor-4",
    name: "Cacau Show",
    logo: "/mock-images/vendors/cacau-show.png",
    description: "A maior rede de chocolates finos do Brasil.",
    category: "alimentos",
    featured: false,
    hosters: ["hoster-4", "hoster-5", "hoster-7"],
  },
  {
    id: "vendor-5",
    name: "Subway",
    logo: "/mock-images/vendors/subway.png",
    description: "Sanduíches naturais e personalizados para uma alimentação equilibrada.",
    category: "alimentos",
    featured: false,
    hosters: ["hoster-1", "hoster-2", "hoster-6"],
  },
  {
    id: "vendor-6",
    name: "Havaianas",
    logo: "/mock-images/vendors/havaianas.png",
    description: "As sandálias mais icônicas do Brasil.",
    category: "eletronicos",
    featured: false,
    hosters: ["hoster-4", "hoster-7"],
  },
  {
    id: "vendor-7",
    name: "Americanas Express",
    logo: "/mock-images/vendors/americanas.png",
    description: "Varejo com eletrônicos, livros, brinquedos e muito mais.",
    category: "eletronicos",
    featured: true,
    hosters: ["hoster-2", "hoster-4", "hoster-6"],
  },
  {
    id: "vendor-8",
    name: "Bob's",
    logo: "/mock-images/vendors/bobs.png",
    description: "A primeira rede de fast-food brasileira, famosa pelo milkshake de ovomaltine.",
    category: "alimentos",
    featured: false,
    hosters: ["hoster-3", "hoster-5", "hoster-7"],
  },
  {
    id: "vendor-9",
    name: "Coca-Cola",
    logo: "/mock-images/vendors/coca-cola.png",
    description: "Bebidas refrescantes para todos os momentos.",
    category: "bebidas",
    featured: true,
    hosters: ["hoster-1", "hoster-2", "hoster-3", "hoster-4", "hoster-5", "hoster-6", "hoster-7"],
  },
  {
    id: "vendor-10",
    name: "Starbucks",
    logo: "/mock-images/vendors/starbucks.png",
    description: "Cafés especiais e bebidas personalizadas.",
    category: "bebidas",
    featured: true,
    hosters: ["hoster-2", "hoster-4", "hoster-5"],
  },
  {
    id: "vendor-11",
    name: "Natura",
    logo: "/mock-images/vendors/natura.png",
    description: "Cosméticos e produtos de beleza sustentáveis.",
    category: "farmacia",
    featured: false,
    hosters: ["hoster-4", "hoster-5", "hoster-7"],
  },
  {
    id: "vendor-12",
    name: "Spoleto",
    logo: "/mock-images/vendors/spoleto.png",
    description: "Massas frescas e personalizadas na sua frente.",
    category: "alimentos",
    featured: false,
    hosters: ["hoster-2", "hoster-4", "hoster-6"],
  },
  {
    id: "vendor-13",
    name: "Outback",
    logo: "/mock-images/vendors/outback.png",
    description: "Steaks australianos e o famoso Bloomin' Onion.",
    category: "alimentos",
    featured: false,
    hosters: ["hoster-4", "hoster-7"],
  },
  {
    id: "vendor-14",
    name: "iPlace",
    logo: "/mock-images/vendors/iplace.png",
    description: "Produtos Apple e acessórios premium.",
    category: "eletronicos",
    featured: false,
    hosters: ["hoster-2", "hoster-4"],
  },
  {
    id: "vendor-15",
    name: "Mundo Verde",
    logo: "/mock-images/vendors/mundo-verde.png",
    description: "Produtos naturais, suplementos e alimentação saudável.",
    category: "alimentos",
    featured: false,
    hosters: ["hoster-2", "hoster-5", "hoster-6"],
  },
]

export const getVendorById = (id: string): Vendor | undefined => {
  return MOCK_VENDORS.find((vendor) => vendor.id === id)
}

export const getVendorsByCategory = (category: string): Vendor[] => {
  return MOCK_VENDORS.filter(
    (vendor) => vendor.category?.toLowerCase() === category.toLowerCase()
  )
}

export const getFeaturedVendors = (): Vendor[] => {
  return MOCK_VENDORS.filter((vendor) => vendor.featured === true)
}

export const getVendorsByHoster = (hosterId: string): Vendor[] => {
  return MOCK_VENDORS.filter(
    (vendor) => vendor.hosters && vendor.hosters.includes(hosterId)
  )
}
