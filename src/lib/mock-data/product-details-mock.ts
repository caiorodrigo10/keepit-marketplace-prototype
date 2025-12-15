// Mock data para página de detalhes de produto
// Foco 100% em UI - sem integração Medusa

export interface ProductDetailsMock {
  id: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  brand: string
  images: string[]
  benefits: string[]
  description: {
    title: string
    paragraphs: string[]
    images: string[]
  }
  additionalInfo: {
    returnPolicy: string
    shipping: string
  }
}

export interface ReviewMock {
  id: number
  author: string
  avatar: string
  date: string
  rating: number
  comment: string
}

export const productDetailsMock: ProductDetailsMock = {
  id: 'prod-1',
  title: 'Big Mac Combo',
  price: 32.90,
  originalPrice: undefined,
  discount: undefined,
  rating: 4.5,
  reviews: 128,
  brand: "McDonald's",
  images: [
    'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop', // Big Mac
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop', // Hamburguer
    'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop', // Batata frita
    'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=600&fit=crop', // Refrigerante
  ],
  benefits: [
    'Big Mac com dois hambúrgueres, alface, queijo e molho especial',
    'Batata média crocante e sequinha',
    'Refrigerante médio gelado de sua escolha',
    'Retirada rápida em 10 minutos no locker mais próximo',
  ],
  description: {
    title: 'O Clássico Big Mac Combo',
    paragraphs: [
      'O Big Mac Combo é o lanche mais icônico do McDonald\'s. Com dois hambúrgueres de carne 100% bovina, alface americana crocante, queijo cheddar derretido, cebola, picles e o inconfundível molho Big Mac, tudo em um pão com gergelim.',
      'Acompanha batata frita média, preparada na hora com batatas selecionadas e fritas até ficarem douradas e crocantes por fora, macias por dentro. O complemento perfeito para seu lanche.',
      'Para completar, escolha seu refrigerante médio favorito - Coca-Cola, Guaraná Antarctica, Fanta ou Sprite. Tudo servido bem gelado para uma experiência completa.',
      'Com o Keepit, você faz seu pedido online e retira em apenas 10 minutos no locker mais próximo. Praticidade e sabor sem filas!',
    ],
    images: [
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop', // Big Mac
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop', // Hamburguer
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop', // Batata frita
    ],
  },
  additionalInfo: {
    returnPolicy: `
      **Política de Retirada**

      Com o Keepit, você compra online e retira em até 10 minutos no locker inteligente mais próximo. Sem filas, sem espera!

      **Como funciona:**
      1. Faça seu pedido online pelo app ou site
      2. Receba um QR Code de retirada por SMS/email
      3. Dirija-se ao locker indicado
      4. Escaneie o QR Code no locker
      5. Retire seu pedido quentinho e fresquinho

      **Importante:**
      - Produto disponível para retirada em até 10 minutos após confirmação do pagamento
      - Lockers disponíveis 24/7 em diversos pontos da cidade
      - Produto mantido na temperatura ideal no locker
      - Prazo de retirada: até 2 horas após disponibilização
    `,
    shipping: `
      **Locais de Retirada (Lockers Keepit)**

      Encontre o locker mais próximo de você e retire seu pedido em minutos! Nossos lockers inteligentes mantêm seu pedido na temperatura perfeita.

      **Lockers disponíveis:**
      - Shopping Paulista - Av. Paulista, 1000
      - Estação Metrô Sé - Praça da Sé
      - Shopping Vila Olímpia - Rua Funchal, 500
      - Av. Faria Lima - Em frente ao metrô

      **Temperatura controlada** para garantir a qualidade do seu lanche!

      Retirada 24 horas por dia, 7 dias por semana. Basta ter seu QR Code em mãos!
    `,
  },
}

export const reviewsMock: ReviewMock[] = [
  {
    id: 1,
    author: 'Juliana Silva',
    avatar: '/images/product-details/testimonials/avatar-1.png',
    date: '11 de Fevereiro, 2025',
    rating: 5,
    comment:
      'Melhor experiência! Pedi o Big Mac Combo pelo app e em 10 minutos estava retirando no locker. Lanche quentinho, batata crocante. Sem fila, sem espera. Keepit é demais!',
  },
  {
    id: 2,
    author: 'Carlos Mendes',
    avatar: '/images/product-details/testimonials/avatar-2.png',
    date: '6 de Março, 2025',
    rating: 4,
    comment:
      'Muito prático! Pedi na hora do almoço, retirei no locker do shopping e não precisei enfrentar fila no McDonald\'s. Big Mac veio perfeito, quente e bem embalado.',
  },
  {
    id: 3,
    author: 'Roberto Oliveira',
    avatar: '/images/product-details/testimonials/avatar-3.png',
    date: '19 de Dezembro, 2024',
    rating: 5,
    comment:
      'Inovação total! O conceito do locker é genial. Pedido pronto em minutos, QR code funcionou perfeitamente. Big Mac estava delicioso, batata sequinha. Recomendo 100%!',
  },
]
