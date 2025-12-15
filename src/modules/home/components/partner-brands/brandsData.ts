export interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
  featured: boolean;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "McDonald's",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg',
    category: 'Fast Food',
    featured: true,
  },
  {
    id: 2,
    name: 'Burger King',
    logo: 'https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-4-1.png',
    category: 'Fast Food',
    featured: true,
  },
  {
    id: 3,
    name: 'Subway',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg',
    category: 'Fast Food',
    featured: true,
  },
  {
    id: 4,
    name: 'Starbucks',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
    category: 'Café',
    featured: true,
  },
  {
    id: 5,
    name: 'Drogasil',
    logo: 'https://logodownload.org/wp-content/uploads/2018/01/drogasil-logo.png',
    category: 'Farmácia',
    featured: true,
  },
  {
    id: 6,
    name: 'Raia',
    logo: 'https://logodownload.org/wp-content/uploads/2018/01/droga-raia-logo.png',
    category: 'Farmácia',
    featured: true,
  },
  {
    id: 8,
    name: 'Natura',
    logo: 'https://logodownload.org/wp-content/uploads/2014/05/natura-logo-4-1.png',
    category: 'Cosméticos',
    featured: true,
  },
  {
    id: 10,
    name: 'Nike',
    logo: 'https://logodownload.org/wp-content/uploads/2014/04/nike-logo-4-1.png',
    category: 'Esportes',
    featured: true,
  },
  {
    id: 11,
    name: 'Petz',
    logo: 'https://logodownload.org/wp-content/uploads/2023/10/petz-logo-2.png',
    category: 'Pet Shop',
    featured: true,
  },
  {
    id: 12,
    name: 'Cobasi',
    logo: 'https://logodownload.org/wp-content/uploads/2021/08/cobasi-logo.png',
    category: 'Pet Shop',
    featured: true,
  },
  {
    id: 14,
    name: 'Pão de Açúcar',
    logo: 'https://logodownload.org/wp-content/uploads/2014/05/pao-de-acucar-logo.jpg',
    category: 'Mercado',
    featured: true,
  },
  {
    id: 16,
    name: 'Americanas',
    logo: 'https://logodownload.org/wp-content/uploads/2019/10/americanas-logo-5.png',
    category: 'Varejo',
    featured: true,
  },
];
