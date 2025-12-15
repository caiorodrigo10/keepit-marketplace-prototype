// Helpers para gerar dados completos de produtos a partir de dados básicos
// Interface genérica para produtos (compatível com popular-product.json)
export interface BasicProduct {
  id: number
  title: string
  title2?: string
  imgSrc: string
  imgSrc2?: string
  rating: number
  reviews: number
  price: number
  oldPrice?: number
  discount?: number
  categories: string
  quantity: number
}

/**
 * Extrai marca/vendor do nome da categoria
 */
export function extractBrandFromCategory(category: string): string {
  const brandMap: Record<string, string> = {
    'Best sellers': 'Keepit Market',
    'Features': 'Keepit Fresh',
    'Flash sale': 'Keepit Express',
    'Mercado': 'Pão de Açúcar',
    'Fast Food': "McDonald's",
    'Farmácia': 'Drogasil',
    'Bebidas': 'Zé Delivery',
    'Pet Shop': 'Petlove',
    'Cosméticos': 'Sephora',
    'Snacks': 'Keepit Snacks',
    'Higiene': 'Keepit Higiene',
    'Café': 'Keepit Café',
    'Conveniência': 'Keepit Express',
  }

  return brandMap[category] || 'Keepit'
}

/**
 * Gera array de imagens baseado no produto
 * Usa apenas a imagem principal da vitrine
 */
export function generateImages(product: BasicProduct): string[] {
  // Retorna apenas a imagem principal
  return [product.imgSrc]
}

/**
 * Gera benefícios do produto
 */
export function generateBenefits(product: BasicProduct): string[] {
  const benefits: string[] = []

  // Benefício 1: Característica principal
  benefits.push(`${product.title} de alta qualidade`)

  // Benefício 2: Qualidade
  if (product.discount) {
    benefits.push(`Desconto de ${product.discount}% - economize agora!`)
  } else {
    benefits.push('Produto fresco e selecionado')
  }

  // Benefício 3: Avaliação
  benefits.push(`Avaliação ${product.rating}/5 com ${product.reviews} reviews`)

  // Benefício 4: Keepit (sempre o mesmo)
  benefits.push('Retirada rápida em 10 minutos no locker mais próximo')

  return benefits
}

/**
 * Gera título da descrição
 */
export function generateDescriptionTitle(product: BasicProduct): string {
  return `Sobre ${product.title}`
}

/**
 * Gera parágrafos de descrição do produto
 */
export function generateDescriptionParagraphs(
  product: BasicProduct
): string[] {
  const paragraphs: string[] = []

  // Parágrafo 1: Descrição do produto
  const description =
    product.title2 ||
    `${product.title} é um produto de excelente qualidade, cuidadosamente selecionado para você.`
  paragraphs.push(description)

  // Parágrafo 2: Qualidade
  paragraphs.push(
    `Nosso ${product.title} passa por rigoroso controle de qualidade. Trabalhamos com fornecedores certificados para garantir produtos frescos e saudáveis para você e sua família.`
  )

  // Parágrafo 3: Preço e desconto
  if (product.discount) {
    paragraphs.push(
      `Aproveite o desconto especial de ${product.discount}%! De R$ ${product.oldPrice?.toFixed(2) || (product.price * 1.2).toFixed(2)} por apenas R$ ${product.price.toFixed(2)}. Uma oportunidade imperdível!`
    )
  } else {
    paragraphs.push(
      `Por apenas R$ ${product.price.toFixed(2)}, você leva qualidade e sabor para sua casa. Preço justo para um produto excepcional.`
    )
  }

  // Parágrafo 4: Keepit (sempre o mesmo)
  paragraphs.push(
    `Com o Keepit, você faz seu pedido online e retira em apenas 10 minutos no locker inteligente mais próximo. Praticidade, rapidez e qualidade sem filas!`
  )

  return paragraphs
}

/**
 * Template padrão de informações adicionais (mesmo para todos)
 */
export const KEEPIT_STANDARD_INFO = {
  returnPolicy: `
**Política de Retirada**

Com o Keepit, você compra online e retira em até 10 minutos no locker inteligente mais próximo. Sem filas, sem espera!

**Como funciona:**
1. Faça seu pedido online pelo app ou site
2. Receba um QR Code de retirada por SMS/email
3. Dirija-se ao locker indicado
4. Escaneie o QR Code no locker
5. Retire seu pedido fresquinho

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
- Shopping Paulista - Av. Paulista, 1230
- Shopping Faria Lima - Av. Brigadeiro Faria Lima, 3477
- Shopping Pinheiros - R. dos Pinheiros, 870
- Shopping Vila Madalena - R. Harmonia, 123
- Shopping Jardins - R. Augusta, 2676

**Temperatura controlada** para garantir a qualidade do seu produto!

Retirada 24 horas por dia, 7 dias por semana. Basta ter seu QR Code em mãos!
  `,
}
