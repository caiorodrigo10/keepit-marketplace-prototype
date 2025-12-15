// Mock data para lockers Keepit em São Paulo
export interface LockerMock {
  id: string
  code: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  latitude: number
  longitude: number
  description?: string
  imageUrl?: string
  openingHours: string
  isActive: boolean
  totalCompartments: number
  availableCompartments: number
  distance?: number // calculada dinamicamente
  type: 'shopping' | 'street' | 'store' | 'subway'
}

export const lockersMock: LockerMock[] = [
  {
    id: 'locker-001',
    code: 'SPL001',
    name: 'Shopping Paulista - Piso L1',
    address: 'Av. Paulista, 1000 - Bela Vista',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01310-100',
    latitude: -23.5629,
    longitude: -46.6544,
    description: 'Locker localizado no piso L1, próximo à praça de alimentação',
    imageUrl: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=400&h=300&fit=crop',
    openingHours: '24h',
    isActive: true,
    totalCompartments: 50,
    availableCompartments: 32,
    type: 'shopping'
  },
  {
    id: 'locker-002',
    code: 'SPL002',
    name: 'Metrô Sé - Saída Norte',
    address: 'Praça da Sé, s/n - Centro',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01001-000',
    latitude: -23.5507,
    longitude: -46.6333,
    description: 'Locker na estação, próximo às catracas de saída',
    imageUrl: 'https://images.unsplash.com/photo-1551750072-50d4c95b3a7a?w=400&h=300&fit=crop',
    openingHours: '24h',
    isActive: true,
    totalCompartments: 80,
    availableCompartments: 45,
    type: 'subway'
  },
  {
    id: 'locker-003',
    code: 'SPL003',
    name: 'Shopping Vila Olímpia',
    address: 'Rua Funchal, 500 - Vila Olímpia',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04551-060',
    latitude: -23.5957,
    longitude: -46.6849,
    description: 'Locker no piso térreo, entrada principal',
    imageUrl: 'https://images.unsplash.com/photo-1580793241553-e9f3d79b3f48?w=400&h=300&fit=crop',
    openingHours: '10h às 22h',
    isActive: true,
    totalCompartments: 60,
    availableCompartments: 28,
    type: 'shopping'
  },
  {
    id: 'locker-004',
    code: 'SPL004',
    name: 'Av. Faria Lima - Pinheiros',
    address: 'Av. Brigadeiro Faria Lima, 2500 - Pinheiros',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '05426-100',
    latitude: -23.5776,
    longitude: -46.6864,
    description: 'Locker na calçada, em frente ao metrô',
    imageUrl: 'https://images.unsplash.com/photo-1559526642-c3f001ea68ee?w=400&h=300&fit=crop',
    openingHours: '24h',
    isActive: true,
    totalCompartments: 40,
    availableCompartments: 18,
    type: 'street'
  },
  {
    id: 'locker-005',
    code: 'SPL005',
    name: 'Shopping Ibirapuera',
    address: 'Av. Ibirapuera, 3103 - Moema',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04029-200',
    latitude: -23.6067,
    longitude: -46.6671,
    description: 'Locker no estacionamento, piso G1',
    imageUrl: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=300&fit=crop',
    openingHours: '10h às 23h',
    isActive: true,
    totalCompartments: 70,
    availableCompartments: 41,
    type: 'shopping'
  },
  {
    id: 'locker-006',
    code: 'SPL006',
    name: 'Metrô Vila Madalena',
    address: 'Rua Heitor Penteado, 1500 - Vila Madalena',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '05437-002',
    latitude: -23.5467,
    longitude: -46.6906,
    description: 'Locker na saída da estação, lado Rua Heitor Penteado',
    imageUrl: 'https://images.unsplash.com/photo-1546552356-3fae876dcc58?w=400&h=300&fit=crop',
    openingHours: '24h',
    isActive: true,
    totalCompartments: 45,
    availableCompartments: 22,
    type: 'subway'
  },
  {
    id: 'locker-007',
    code: 'SPL007',
    name: 'Carrefour Pamplona',
    address: 'Rua Pamplona, 1704 - Jardim Paulista',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01405-002',
    latitude: -23.5657,
    longitude: -46.6625,
    description: 'Locker na entrada do mercado',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
    openingHours: '7h às 22h',
    isActive: true,
    totalCompartments: 35,
    availableCompartments: 12,
    type: 'store'
  },
  {
    id: 'locker-008',
    code: 'SPL008',
    name: 'Shopping Eldorado',
    address: 'Av. Rebouças, 3970 - Pinheiros',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '05402-600',
    latitude: -23.5724,
    longitude: -46.6963,
    description: 'Locker no piso Tulipa, próximo ao cinema',
    imageUrl: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&h=300&fit=crop',
    openingHours: '10h às 22h',
    isActive: true,
    totalCompartments: 55,
    availableCompartments: 38,
    type: 'shopping'
  },
  {
    id: 'locker-009',
    code: 'SPL009',
    name: 'Terminal Barra Funda',
    address: 'Rua Mário de Andrade, 664 - Barra Funda',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01156-001',
    latitude: -23.5256,
    longitude: -46.6667,
    description: 'Locker no terminal rodoviário, piso térreo',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    openingHours: '5h às 00h',
    isActive: true,
    totalCompartments: 90,
    availableCompartments: 67,
    type: 'subway'
  },
  {
    id: 'locker-010',
    code: 'SPL010',
    name: 'Extra Hiper João Dias',
    address: 'Av. João Dias, 2255 - Santo Amaro',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04723-003',
    latitude: -23.6474,
    longitude: -46.7097,
    description: 'Locker no estacionamento coberto',
    imageUrl: 'https://images.unsplash.com/photo-1587162146766-e06b1189b907?w=400&h=300&fit=crop',
    openingHours: '8h às 22h',
    isActive: true,
    totalCompartments: 65,
    availableCompartments: 43,
    type: 'store'
  },
  {
    id: 'locker-011',
    code: 'SPL011',
    name: 'Metrô Ana Rosa',
    address: 'Av. Conselheiro Rodrigues Alves, 260 - Vila Mariana',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04014-000',
    latitude: -23.5816,
    longitude: -46.6385,
    description: 'Locker na plataforma de conexão linha 1-2',
    imageUrl: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?w=400&h=300&fit=crop',
    openingHours: '24h',
    isActive: true,
    totalCompartments: 50,
    availableCompartments: 29,
    type: 'subway'
  },
  {
    id: 'locker-012',
    code: 'SPL012',
    name: 'Shopping Morumbi',
    address: 'Av. Roque Petroni Jr, 1089 - Morumbi',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04707-900',
    latitude: -23.6221,
    longitude: -46.6982,
    description: 'Locker no piso G, próximo ao supermercado',
    imageUrl: 'https://images.unsplash.com/photo-1553530979-fbb1e56e3e99?w=400&h=300&fit=crop',
    openingHours: '10h às 22h',
    isActive: true,
    totalCompartments: 75,
    availableCompartments: 51,
    type: 'shopping'
  }
]

// Função para calcular distância entre dois pontos (Haversine)
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371 // Raio da Terra em km
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(value: number): number {
  return (value * Math.PI) / 180
}

// Função para buscar lockers próximos
export function getNearbyLockers(
  userLat: number,
  userLon: number,
  maxDistance: number = 5 // km
): LockerMock[] {
  return lockersMock
    .map(locker => ({
      ...locker,
      distance: calculateDistance(userLat, userLon, locker.latitude, locker.longitude)
    }))
    .filter(locker => locker.distance! <= maxDistance)
    .sort((a, b) => a.distance! - b.distance!)
}

// Função para buscar locker por ID
export function getLockerById(id: string): LockerMock | undefined {
  return lockersMock.find(locker => locker.id === id)
}

// Função para buscar lockers por tipo
export function getLockersByType(type: LockerMock['type']): LockerMock[] {
  return lockersMock.filter(locker => locker.type === type)
}

// Função para buscar lockers disponíveis
export function getAvailableLockers(): LockerMock[] {
  return lockersMock.filter(locker => locker.isActive && locker.availableCompartments > 0)
}