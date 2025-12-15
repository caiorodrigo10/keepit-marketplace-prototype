export interface MockLocker {
  id: string
  name: string
  address: string
  neighborhood: string
  lat: number
  lng: number
  availableSlots: number
  totalSlots: number
  distance: string
  openingHours: string
}

export const mockLockers: MockLocker[] = [
  {
    id: "locker-001",
    name: "Keepit Shopping Paulista",
    address: "Av. Paulista, 1230 - Bela Vista",
    neighborhood: "Bela Vista",
    lat: -23.561684,
    lng: -46.656139,
    availableSlots: 12,
    totalSlots: 24,
    distance: "1.2 km",
    openingHours: "24 horas",
  },
  {
    id: "locker-002",
    name: "Keepit Faria Lima",
    address: "Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi",
    neighborhood: "Itaim Bibi",
    lat: -23.587416,
    lng: -46.685026,
    availableSlots: 8,
    totalSlots: 20,
    distance: "2.5 km",
    openingHours: "24 horas",
  },
  {
    id: "locker-003",
    name: "Keepit Pinheiros",
    address: "R. dos Pinheiros, 870 - Pinheiros",
    neighborhood: "Pinheiros",
    lat: -23.564224,
    lng: -46.688739,
    availableSlots: 15,
    totalSlots: 30,
    distance: "3.1 km",
    openingHours: "24 horas",
  },
  {
    id: "locker-004",
    name: "Keepit Vila Madalena",
    address: "R. Harmonia, 123 - Vila Madalena",
    neighborhood: "Vila Madalena",
    lat: -23.550385,
    lng: -46.691419,
    availableSlots: 6,
    totalSlots: 18,
    distance: "3.8 km",
    openingHours: "24 horas",
  },
  {
    id: "locker-005",
    name: "Keepit Jardins",
    address: "R. Augusta, 2676 - Jardins",
    neighborhood: "Jardins",
    lat: -23.557499,
    lng: -46.663099,
    availableSlots: 10,
    totalSlots: 25,
    distance: "1.8 km",
    openingHours: "24 horas",
  },
]
