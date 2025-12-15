/**
 * Mock Locker Data - 20 lockers near Av. Paulista
 * For demonstration purposes only
 */

export interface Locker {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  available: boolean;
}

export const MOCK_LOCKERS: Locker[] = [
  {
    id: 'LCK-001',
    name: 'Keepit Av. Paulista 1000',
    address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
    lat: -23.5615,
    lng: -46.6563,
    available: true,
  },
  {
    id: 'LCK-002',
    name: 'Keepit Metrô Consolação',
    address: 'R. da Consolação, 2001 - Consolação, São Paulo - SP',
    lat: -23.5558,
    lng: -46.6600,
    available: true,
  },
  {
    id: 'LCK-003',
    name: 'Keepit Trianon-MASP',
    address: 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP',
    lat: -23.5618,
    lng: -46.6557,
    available: true,
  },
  {
    id: 'LCK-004',
    name: 'Keepit Jardins',
    address: 'R. Augusta, 2516 - Jardins, São Paulo - SP',
    lat: -23.5645,
    lng: -46.6510,
    available: true,
  },
  {
    id: 'LCK-005',
    name: 'Keepit Metrô Brigadeiro',
    address: 'Av. Brigadeiro Luís Antônio, 2344 - Bela Vista, São Paulo - SP',
    lat: -23.5650,
    lng: -46.6520,
    available: true,
  },
  {
    id: 'LCK-006',
    name: 'Keepit Alameda Santos',
    address: 'Al. Santos, 1940 - Jardim Paulista, São Paulo - SP',
    lat: -23.5635,
    lng: -46.6525,
    available: true,
  },
  {
    id: 'LCK-007',
    name: 'Keepit Shopping Paulista',
    address: 'Av. Paulista, 1230 - Bela Vista, São Paulo - SP',
    lat: -23.5625,
    lng: -46.6580,
    available: true,
  },
  {
    id: 'LCK-008',
    name: 'Keepit Rua Augusta',
    address: 'R. Augusta, 1470 - Consolação, São Paulo - SP',
    lat: -23.5580,
    lng: -46.6590,
    available: true,
  },
  {
    id: 'LCK-009',
    name: 'Keepit Alameda Jaú',
    address: 'Al. Jaú, 1626 - Jardim Paulista, São Paulo - SP',
    lat: -23.5660,
    lng: -46.6540,
    available: true,
  },
  {
    id: 'LCK-010',
    name: 'Keepit Rua Haddock Lobo',
    address: 'R. Haddock Lobo, 595 - Cerqueira César, São Paulo - SP',
    lat: -23.5595,
    lng: -46.6620,
    available: true,
  },
  {
    id: 'LCK-011',
    name: 'Keepit Av. Rebouças',
    address: 'Av. Rebouças, 3970 - Jardim Paulista, São Paulo - SP',
    lat: -23.5670,
    lng: -46.6700,
    available: true,
  },
  {
    id: 'LCK-012',
    name: 'Keepit Oscar Freire',
    address: 'R. Oscar Freire, 379 - Jardim Paulista, São Paulo - SP',
    lat: -23.5640,
    lng: -46.6690,
    available: true,
  },
  {
    id: 'LCK-013',
    name: 'Keepit Metrô Paraíso',
    address: 'R. Vergueiro, 1421 - Paraíso, São Paulo - SP',
    lat: -23.5750,
    lng: -46.6410,
    available: true,
  },
  {
    id: 'LCK-014',
    name: 'Keepit Alameda Campinas',
    address: 'Al. Campinas, 463 - Jardim Paulista, São Paulo - SP',
    lat: -23.5655,
    lng: -46.6650,
    available: true,
  },
  {
    id: 'LCK-015',
    name: 'Keepit Rua Pamplona',
    address: 'R. Pamplona, 145 - Bela Vista, São Paulo - SP',
    lat: -23.5665,
    lng: -46.6530,
    available: true,
  },
  {
    id: 'LCK-016',
    name: 'Keepit Shopping Frei Caneca',
    address: 'R. Frei Caneca, 569 - Consolação, São Paulo - SP',
    lat: -23.5545,
    lng: -46.6635,
    available: true,
  },
  {
    id: 'LCK-017',
    name: 'Keepit Rua Estados Unidos',
    address: 'R. Estados Unidos, 1573 - Jardim América, São Paulo - SP',
    lat: -23.5675,
    lng: -46.6680,
    available: true,
  },
  {
    id: 'LCK-018',
    name: 'Keepit Alameda Ribeirão Preto',
    address: 'Al. Ribeirão Preto, 130 - Bela Vista, São Paulo - SP',
    lat: -23.5690,
    lng: -46.6490,
    available: true,
  },
  {
    id: 'LCK-019',
    name: 'Keepit Rua Bela Cintra',
    address: 'R. Bela Cintra, 986 - Consolação, São Paulo - SP',
    lat: -23.5565,
    lng: -46.6615,
    available: true,
  },
  {
    id: 'LCK-020',
    name: 'Keepit Rua da Consolação',
    address: 'R. da Consolação, 3811 - Cerqueira César, São Paulo - SP',
    lat: -23.5530,
    lng: -46.6605,
    available: true,
  },
];
