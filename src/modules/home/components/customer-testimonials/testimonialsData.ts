export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  category: string;
  comment: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'São Paulo - SP',
    rating: 5,
    category: 'Fast Food',
    comment: 'Pedi um lanche às 19h e retirei no locker da universidade em 8 minutos. Incrível! Nunca mais vou enfrentar fila.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
  },
  {
    id: 2,
    name: 'João Santos',
    location: 'Rio de Janeiro - RJ',
    rating: 5,
    category: 'Pet Shop',
    comment: 'Esqueci de comprar ração pro meu cachorro. O Keepit salvou meu dia! Retirei no caminho do trabalho.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Joao',
  },
  {
    id: 3,
    name: 'Ana Rodrigues',
    location: 'Belo Horizonte - MG',
    rating: 5,
    category: 'Cosméticos',
    comment: 'Consigo pegar meus cosméticos na volta do trabalho, sem fila e sem perder tempo. Simplesmente perfeito!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  },
  {
    id: 4,
    name: 'Carlos Oliveira',
    location: 'Curitiba - PR',
    rating: 5,
    category: 'Farmácia',
    comment: 'Precisei de um remédio urgente às 22h. Comprei pelo app e retirei no locker do hospital. Muito prático!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
  },
  {
    id: 5,
    name: 'Juliana Costa',
    location: 'Brasília - DF',
    rating: 5,
    category: 'Mercado',
    comment: 'Faço compras no intervalo do almoço e retiro no fim do dia. Economia de tempo e super conveniente.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana',
  },
  {
    id: 6,
    name: 'Pedro Almeida',
    location: 'Porto Alegre - RS',
    rating: 5,
    category: 'Fast Food',
    comment: 'Melhor inovação! Pego meu café da manhã no locker a caminho do trabalho todos os dias.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
  },
];
