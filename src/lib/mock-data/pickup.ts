import { OrderStatus, TimelineEvent } from '@modules/order/components/order-timeline'

export interface PickupOrder {
  id: string
  orderId: string
  qrCodeData: string
  backupCode: string
  expiresAt: string
  createdAt: string
  status: OrderStatus
  locker: {
    id: string
    name: string
    address: string
    city: string
    hours: string
    isOpen: boolean
    lat: number
    lng: number
    phone?: string
  }
  items: {
    id: string
    name: string
    quantity: number
    price: number
    image?: string
  }[]
  customer: {
    name: string
    email: string
  }
  timeline: TimelineEvent[]
}

// Generate expiry date 6 hours from now
const getExpiryDate = (hoursFromNow: number = 6) => {
  const date = new Date()
  date.setHours(date.getHours() + hoursFromNow)
  return date.toISOString()
}

// Generate past date
const getPastDate = (hoursAgo: number) => {
  const date = new Date()
  date.setHours(date.getHours() - hoursAgo)
  return date.toISOString()
}

export const mockPickupOrders: PickupOrder[] = [
  {
    id: 'pickup_1',
    orderId: 'KPT-2024-ABC123',
    qrCodeData: 'https://keepit.com.br/pickup/KPT-2024-ABC123',
    backupCode: 'ABC-123-XYZ',
    expiresAt: getExpiryDate(6),
    createdAt: getPastDate(2),
    status: 'at_locker',
    locker: {
      id: 'loc_1',
      name: 'Shopping Ibirapuera',
      address: 'Av. Ibirapuera, 3103 - Piso G2, Moema',
      city: 'São Paulo, SP',
      hours: '10:00 às 22:00',
      isOpen: true,
      lat: -23.6115,
      lng: -46.6589,
      phone: '(11) 3040-1234',
    },
    items: [
      {
        id: 'item_1',
        name: 'Camiseta Básica Preta',
        quantity: 2,
        price: 79.9,
        image: '/images/products/camiseta-preta.jpg',
      },
      {
        id: 'item_2',
        name: 'Calça Jeans Slim Azul',
        quantity: 1,
        price: 189.9,
        image: '/images/products/calca-jeans.jpg',
      },
    ],
    customer: {
      name: 'João Silva',
      email: 'joao@email.com',
    },
    timeline: [
      {
        status: 'confirmed',
        timestamp: getPastDate(2),
        description: 'Pagamento confirmado',
      },
      {
        status: 'preparing',
        timestamp: getPastDate(1.5),
        description: 'Pedido em separação',
      },
      {
        status: 'in_transit',
        timestamp: getPastDate(1),
        description: 'Saiu para entrega no locker',
      },
      {
        status: 'at_locker',
        timestamp: getPastDate(0.5),
        description: 'Disponível para retirada',
      },
    ],
  },
  {
    id: 'pickup_2',
    orderId: 'KPT-2024-DEF456',
    qrCodeData: 'https://keepit.com.br/pickup/KPT-2024-DEF456',
    backupCode: 'DEF-456-UVW',
    expiresAt: getExpiryDate(1), // Expiring soon!
    createdAt: getPastDate(20),
    status: 'at_locker',
    locker: {
      id: 'loc_2',
      name: 'Estação Paulista',
      address: 'Av. Paulista, 1500 - Subsolo',
      city: 'São Paulo, SP',
      hours: '06:00 às 00:00',
      isOpen: true,
      lat: -23.5632,
      lng: -46.6542,
    },
    items: [
      {
        id: 'item_3',
        name: 'Tênis Running Pro',
        quantity: 1,
        price: 399.9,
        image: '/images/products/tenis.jpg',
      },
    ],
    customer: {
      name: 'Maria Santos',
      email: 'maria@email.com',
    },
    timeline: [
      {
        status: 'confirmed',
        timestamp: getPastDate(20),
      },
      {
        status: 'preparing',
        timestamp: getPastDate(19),
      },
      {
        status: 'in_transit',
        timestamp: getPastDate(18),
      },
      {
        status: 'at_locker',
        timestamp: getPastDate(17),
      },
    ],
  },
  {
    id: 'pickup_3',
    orderId: 'KPT-2024-GHI789',
    qrCodeData: 'https://keepit.com.br/pickup/KPT-2024-GHI789',
    backupCode: 'GHI-789-RST',
    expiresAt: getExpiryDate(12),
    createdAt: getPastDate(1),
    status: 'in_transit',
    locker: {
      id: 'loc_3',
      name: 'Shopping Morumbi',
      address: 'Av. Roque Petroni Jr., 1089 - Térreo',
      city: 'São Paulo, SP',
      hours: '10:00 às 22:00',
      isOpen: false, // Currently closed
      lat: -23.6234,
      lng: -46.6987,
      phone: '(11) 3045-5678',
    },
    items: [
      {
        id: 'item_4',
        name: 'Mochila Urban',
        quantity: 1,
        price: 249.9,
      },
      {
        id: 'item_5',
        name: 'Garrafa Térmica 500ml',
        quantity: 2,
        price: 89.9,
      },
    ],
    customer: {
      name: 'Pedro Oliveira',
      email: 'pedro@email.com',
    },
    timeline: [
      {
        status: 'confirmed',
        timestamp: getPastDate(1),
      },
      {
        status: 'preparing',
        timestamp: getPastDate(0.5),
      },
      {
        status: 'in_transit',
        timestamp: getPastDate(0.2),
        description: 'Previsão de chegada: hoje às 18:00',
      },
    ],
  },
]

export const getPickupOrderById = (id: string): PickupOrder | undefined => {
  // Try to find by pickup id or order id
  return mockPickupOrders.find(
    (order) => order.id === id || order.orderId === id
  )
}

export const getPickupOrderByCode = (code: string): PickupOrder | undefined => {
  return mockPickupOrders.find(
    (order) => order.backupCode === code || order.orderId === code
  )
}
