export interface Vendor {
  id: number;
  name: string;
  slug: string;
  logo: string;
  coverImage: string;
  category: string;
  categoryKey: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  minimumOrder: number;
  badges: string[];
  distance: string;
  isOpen: boolean;
  openingHours: string;
}

export const featuredVendors: Vendor[] = [
  {
    id: 1,
    name: "McDonald's Paulista",
    slug: "mcdonalds-paulista",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/200px-McDonald%27s_Golden_Arches.svg.png",
    coverImage: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&h=300&fit=crop",
    category: "Restaurante",
    categoryKey: "restaurante",
    rating: 4.8,
    reviewCount: 1240,
    deliveryTime: "8-12 min",
    minimumOrder: 15.00,
    badges: ["Mais popular", "Entrega rápida"],
    distance: "850m",
    isOpen: true,
    openingHours: "06:00 - 23:00"
  },
  {
    id: 2,
    name: "Drogasil Pinheiros",
    slug: "drogasil-pinheiros",
    logo: "https://logodownload.org/wp-content/uploads/2018/01/drogasil-logo.png",
    coverImage: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=300&fit=crop",
    category: "Farmácia",
    categoryKey: "farmacia",
    rating: 4.7,
    reviewCount: 856,
    deliveryTime: "10-15 min",
    minimumOrder: 0,
    badges: ["24 horas", "Desconto"],
    distance: "1.2km",
    isOpen: true,
    openingHours: "24 horas"
  },
  {
    id: 3,
    name: "Pão de Açúcar",
    slug: "pao-de-acucar",
    logo: "https://logodownload.org/wp-content/uploads/2014/05/pao-de-acucar-logo.jpg",
    coverImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=300&fit=crop",
    category: "Mercado",
    categoryKey: "mercado",
    rating: 4.5,
    reviewCount: 654,
    deliveryTime: "12-18 min",
    minimumOrder: 20.00,
    badges: ["Promoção"],
    distance: "950m",
    isOpen: true,
    openingHours: "07:00 - 22:00"
  },
  {
    id: 4,
    name: "Starbucks",
    slug: "starbucks",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=300&fit=crop",
    category: "Bebidas",
    categoryKey: "bebidas",
    rating: 4.9,
    reviewCount: 423,
    deliveryTime: "10-15 min",
    minimumOrder: 25.00,
    badges: ["Especializado", "Café Premium"],
    distance: "1.5km",
    isOpen: true,
    openingHours: "10:00 - 22:00"
  },
  {
    id: 5,
    name: "Petz Vila Madalena",
    slug: "petz-vila-madalena",
    logo: "https://logodownload.org/wp-content/uploads/2023/10/petz-logo-2.png",
    coverImage: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=300&fit=crop",
    category: "Pet Shop",
    categoryKey: "petshop",
    rating: 4.6,
    reviewCount: 312,
    deliveryTime: "15-20 min",
    minimumOrder: 30.00,
    badges: ["Especializado"],
    distance: "2.1km",
    isOpen: true,
    openingHours: "09:00 - 20:00"
  },
  {
    id: 6,
    name: "Natura Shopping",
    slug: "natura-shopping",
    logo: "https://logodownload.org/wp-content/uploads/2014/05/natura-logo-4-1.png",
    coverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=300&fit=crop",
    category: "Cosméticos",
    categoryKey: "cosmeticos",
    rating: 4.8,
    reviewCount: 987,
    deliveryTime: "12-16 min",
    minimumOrder: 0,
    badges: ["Lançamentos"],
    distance: "1.8km",
    isOpen: true,
    openingHours: "10:00 - 22:00"
  },
  {
    id: 7,
    name: "Burger King Faria Lima",
    slug: "burger-king-faria-lima",
    logo: "https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-4-1.png",
    coverImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=300&fit=crop",
    category: "Restaurante",
    categoryKey: "restaurante",
    rating: 4.6,
    reviewCount: 765,
    deliveryTime: "10-14 min",
    minimumOrder: 18.00,
    badges: ["Cupons"],
    distance: "1.1km",
    isOpen: true,
    openingHours: "10:00 - 23:00"
  },
  {
    id: 8,
    name: "Raia Drogasil",
    slug: "raia-drogasil",
    logo: "https://logodownload.org/wp-content/uploads/2018/01/droga-raia-logo.png",
    coverImage: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&h=300&fit=crop",
    category: "Farmácia",
    categoryKey: "farmacia",
    rating: 4.7,
    reviewCount: 543,
    deliveryTime: "8-12 min",
    minimumOrder: 0,
    badges: ["Mais próximo"],
    distance: "650m",
    isOpen: true,
    openingHours: "07:00 - 23:00"
  }
];
