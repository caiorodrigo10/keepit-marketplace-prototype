/**
 * Keepit Mock Data - Hosters
 * 7 realistic hoster locations across Brazil
 */

import { Hoster } from "@/types/keepit"

export const MOCK_HOSTERS: Hoster[] = [
  {
    id: "hoster-1",
    name: "Keepit Praia do Recreio",
    location: "Praia do Recreio",
    address: "Av. das Américas, 15500",
    city: "Rio de Janeiro",
    state: "RJ",
    zipCode: "22790-702",
    image: "/mock-images/hosters/recreio.jpg",
    availableSlots: 24,
    totalSlots: 50,
    coordinates: {
      lat: -23.0187,
      lng: -43.4603,
    },
    description: "Localização privilegiada próxima à praia e ao shopping.",
    openingHours: "24 horas",
  },
  {
    id: "hoster-2",
    name: "Keepit Av. Paulista",
    location: "Avenida Paulista",
    address: "Av. Paulista, 1578",
    city: "São Paulo",
    state: "SP",
    zipCode: "01310-200",
    image: "/mock-images/hosters/paulista.jpg",
    availableSlots: 18,
    totalSlots: 60,
    coordinates: {
      lat: -23.5629,
      lng: -46.6544,
    },
    description: "No coração financeiro de São Paulo, próximo ao metrô Trianon-MASP.",
    openingHours: "24 horas",
  },
  {
    id: "hoster-3",
    name: "Keepit Maracanã",
    location: "Maracanã",
    address: "Av. Radial Oeste, 5555",
    city: "Rio de Janeiro",
    state: "RJ",
    zipCode: "20271-110",
    image: "/mock-images/hosters/maracana.jpg",
    availableSlots: 32,
    totalSlots: 45,
    coordinates: {
      lat: -22.9121,
      lng: -43.2302,
    },
    description: "Ao lado do estádio do Maracanã, acesso fácil para eventos esportivos.",
    openingHours: "24 horas",
  },
  {
    id: "hoster-4",
    name: "Keepit Barra Shopping",
    location: "Barra da Tijuca",
    address: "Av. das Américas, 4666",
    city: "Rio de Janeiro",
    state: "RJ",
    zipCode: "22640-102",
    image: "/mock-images/hosters/barra.jpg",
    availableSlots: 15,
    totalSlots: 70,
    coordinates: {
      lat: -23.0031,
      lng: -43.3615,
    },
    description: "Dentro do Barra Shopping, um dos maiores shopping centers da América Latina.",
    openingHours: "09:00 - 22:00",
  },
  {
    id: "hoster-5",
    name: "Keepit Vila Madalena",
    location: "Vila Madalena",
    address: "Rua Harmonia, 500",
    city: "São Paulo",
    state: "SP",
    zipCode: "05435-000",
    image: "/mock-images/hosters/vilamadalena.jpg",
    availableSlots: 28,
    totalSlots: 40,
    coordinates: {
      lat: -23.5447,
      lng: -46.6899,
    },
    description: "No bairro boêmio mais famoso de São Paulo, cercado por bares e restaurantes.",
    openingHours: "24 horas",
  },
  {
    id: "hoster-6",
    name: "Keepit Centro Histórico",
    location: "Centro",
    address: "Praça da Sé, 111",
    city: "São Paulo",
    state: "SP",
    zipCode: "01001-000",
    image: "/mock-images/hosters/centro.jpg",
    availableSlots: 20,
    totalSlots: 55,
    coordinates: {
      lat: -23.5505,
      lng: -46.6333,
    },
    description: "No coração de São Paulo, próximo ao metrô Sé e ao marco zero da cidade.",
    openingHours: "06:00 - 22:00",
  },
  {
    id: "hoster-7",
    name: "Keepit Copacabana",
    location: "Copacabana",
    address: "Av. Atlântica, 2500",
    city: "Rio de Janeiro",
    state: "RJ",
    zipCode: "22041-001",
    image: "/mock-images/hosters/copacabana.jpg",
    availableSlots: 35,
    totalSlots: 65,
    coordinates: {
      lat: -22.9711,
      lng: -43.1822,
    },
    description: "De frente para a praia de Copacabana, no calçadão mais famoso do Rio.",
    openingHours: "24 horas",
  },
]

export const getHosterById = (id: string): Hoster | undefined => {
  return MOCK_HOSTERS.find((hoster) => hoster.id === id)
}

export const getHostersByCity = (city: string): Hoster[] => {
  return MOCK_HOSTERS.filter(
    (hoster) => hoster.city.toLowerCase() === city.toLowerCase()
  )
}

export const getHostersByState = (state: string): Hoster[] => {
  return MOCK_HOSTERS.filter(
    (hoster) => hoster.state.toLowerCase() === state.toLowerCase()
  )
}

export const getHostersWithAvailableSlots = (): Hoster[] => {
  return MOCK_HOSTERS.filter(
    (hoster) => hoster.availableSlots && hoster.availableSlots > 0
  )
}
