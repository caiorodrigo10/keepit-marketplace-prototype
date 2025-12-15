# Planejamento de Novas Seções para Homepage Keepit Brasil

**Versão:** 1.0
**Data:** 2025-01-18
**Objetivo:** Adicionar 4 novas seções à homepage para melhorar conversão, educação do usuário e construção de confiança.

---

## 📋 Seções Atuais da Homepage

1. **BannerHomeThree** - Hero com busca de endereço (Google Places)
2. **FeaturesBenefits** - Barra de benefícios + Grid de 6 categorias
3. **AppDownload** - CTA para download do aplicativo mobile

---

## 🎯 Novas Seções Propostas

### 1. HowItWorks - "Como Funciona"

#### Objetivo
Educar novos usuários sobre o fluxo completo de compra e retirada no locker, reduzindo fricção e aumentando conversão.

#### Design & Layout

**Estrutura Visual:**
- Container centralizado com 4 cards em grid responsivo
- Cada card representa um passo do processo
- Numeração grande e colorida (#67FB94)
- Ícones ilustrativos (react-icons)
- Fundo alternado (#F1F1F1 ou #E8F9ED)

**Responsividade:**
- Mobile: 1 coluna (cards empilhados)
- Tablet: 2 colunas (2x2 grid)
- Desktop: 4 colunas (horizontal)

#### Conteúdo dos Steps

```javascript
const steps = [
  {
    number: "01",
    icon: FaShoppingCart,
    title: "Escolha seus produtos",
    description: "Navegue por centenas de lojas e adicione ao carrinho",
    iconColor: "#67FB94",
  },
  {
    number: "02",
    icon: FaMapMarkerAlt,
    title: "Selecione o locker",
    description: "Escolha o locker mais próximo de você no mapa",
    iconColor: "#67FB94",
  },
  {
    number: "03",
    icon: FaCreditCard,
    title: "Finalize o pedido",
    description: "Pagamento rápido e seguro com Pix, cartão ou boleto",
    iconColor: "#67FB94",
  },
  {
    number: "04",
    icon: FaQrcode,
    title: "Retire em 10 minutos",
    description: "Use o QR code no app para abrir seu compartimento",
    iconColor: "#67FB94",
  }
];
```

#### Tokens de Design (design.json)

```json
{
  "background": "#F1F1F1",
  "card": {
    "background": "#FFFFFF",
    "borderRadius": "1rem",
    "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.08)",
    "padding": "2rem 1.5rem",
    "hover": {
      "transform": "translateY(-4px)",
      "boxShadow": "0 8px 16px rgba(0, 0, 0, 0.12)"
    }
  },
  "number": {
    "fontSize": "3rem",
    "fontWeight": "700",
    "color": "#67FB94",
    "opacity": "0.3"
  },
  "icon": {
    "size": "48px",
    "color": "#67FB94",
    "background": "rgba(103, 251, 148, 0.1)",
    "borderRadius": "0.75rem",
    "padding": "12px"
  },
  "title": {
    "fontSize": "1.25rem",
    "fontWeight": "600",
    "color": "#1E1E1E",
    "marginTop": "1rem"
  },
  "description": {
    "fontSize": "0.875rem",
    "color": "#4A4A4A",
    "lineHeight": "1.6"
  }
}
```

#### Animação AOS
- `data-aos="fade-up"`
- `data-aos-duration="600"`
- `data-aos-delay` escalonado (0, 100, 200, 300)

---

### 2. NearbyLockers - "Lockers Próximos de Você"

#### Objetivo
Demonstrar disponibilidade e conveniência dos lockers, incentivando o usuário a visualizar opções reais próximas a ele.

#### Design & Layout

**Estrutura Visual:**
- Split screen (desktop): Mapa à esquerda (60%), lista de cards à direita (40%)
- Mobile: Mapa colapsável com toggle + lista abaixo
- Fundo branco (#FFFFFF)

**Mapa Interativo:**
- Google Maps API com markers customizados
- Markers disponíveis: #67FB94
- Markers indisponíveis/cheios: #9E9E9E
- InfoWindow ao clicar no marker

**Card de Locker (Lista):**
```javascript
const lockerCard = {
  establishmentName: "Shopping Eldorado",
  establishmentType: "Shopping Center",
  distance: "850m",
  address: "Av. Rebouças, 3970 - Pinheiros",
  operatingHours: "06:00 - 23:00",
  availableSlots: 12,
  totalSlots: 24,
  status: "available" // "available" | "full" | "closed"
};
```

#### Tokens de Design

```json
{
  "background": "#FFFFFF",
  "section": {
    "paddingBlock": "5rem"
  },
  "title": {
    "fontSize": "2rem",
    "fontWeight": "700",
    "color": "#1E1E1E",
    "textAlign": "center",
    "marginBottom": "3rem"
  },
  "map": {
    "borderRadius": "1rem",
    "height": "500px",
    "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.15)"
  },
  "lockerCard": {
    "background": "#FFFFFF",
    "border": "1px solid #E0E0E0",
    "borderRadius": "0.75rem",
    "padding": "1.25rem",
    "marginBottom": "1rem",
    "hover": {
      "borderColor": "#67FB94",
      "boxShadow": "0 4px 12px rgba(103, 251, 148, 0.15)"
    }
  },
  "statusBadge": {
    "available": {
      "background": "#E8F9ED",
      "color": "#34BF58",
      "text": "Disponível"
    },
    "full": {
      "background": "#FEE2E2",
      "color": "#EF4444",
      "text": "Cheio"
    },
    "closed": {
      "background": "#F1F1F1",
      "color": "#9E9E9E",
      "text": "Fechado"
    }
  },
  "progressBar": {
    "height": "6px",
    "background": "#F1F1F1",
    "borderRadius": "999px",
    "fill": "#67FB94"
  }
}
```

#### Funcionalidades
1. Detectar localização do usuário (geolocation API)
2. Mostrar 6-8 lockers mais próximos
3. Filtro por tipo de estabelecimento (dropdown)
4. Botão "Ver todos os lockers" → redireciona para `/lockers`
5. Click no card → centraliza no mapa + abre InfoWindow

#### Componentes Reutilizáveis
- `<GoogleMapsProvider>` (já existe)
- Criar novo: `<LockerMap>`, `<LockerCard>`, `<LockerFilters>`

---

### 3. CustomerTestimonials - "O Que Nossos Clientes Dizem"

#### Objetivo
Construir confiança através de social proof, mostrando avaliações reais de usuários satisfeitos.

#### Design & Layout

**Estrutura Visual:**
- Seção com fundo #E8F9ED (verde muito claro)
- Título centralizado + subtítulo
- Carrossel com 3 cards visíveis (desktop), 1 card (mobile)
- Navegação com setas laterais + dots embaixo
- Auto-play suave (5s por slide)

**Card de Depoimento:**
```javascript
const testimonial = {
  id: 1,
  name: "Maria Silva",
  location: "São Paulo - SP",
  avatar: "/avatars/maria.jpg", // ou gerado via DiceBear API
  rating: 5,
  category: "Fast Food",
  comment: "Pedi um lanche às 19h e retirei no locker da universidade em 8 minutos. Incrível! Nunca mais vou enfrentar fila.",
  date: "Há 2 dias"
};
```

#### Tokens de Design

```json
{
  "background": "#E8F9ED",
  "section": {
    "paddingBlock": "5rem"
  },
  "title": {
    "fontSize": "2rem",
    "fontWeight": "700",
    "color": "#1E1E1E",
    "textAlign": "center"
  },
  "subtitle": {
    "fontSize": "1rem",
    "color": "#4A4A4A",
    "textAlign": "center",
    "marginBottom": "3rem"
  },
  "testimonialCard": {
    "background": "#FFFFFF",
    "borderRadius": "1rem",
    "padding": "2rem",
    "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.08)",
    "maxWidth": "400px",
    "margin": "0 auto"
  },
  "avatar": {
    "size": "64px",
    "borderRadius": "50%",
    "border": "3px solid #67FB94"
  },
  "stars": {
    "color": "#F59E0B",
    "size": "18px"
  },
  "name": {
    "fontSize": "1.125rem",
    "fontWeight": "600",
    "color": "#1E1E1E"
  },
  "location": {
    "fontSize": "0.875rem",
    "color": "#9E9E9E"
  },
  "comment": {
    "fontSize": "0.875rem",
    "color": "#4A4A4A",
    "lineHeight": "1.7",
    "fontStyle": "italic",
    "marginTop": "1rem"
  },
  "categoryBadge": {
    "background": "#D1F4DC",
    "color": "#34BF58",
    "padding": "0.25rem 0.75rem",
    "borderRadius": "999px",
    "fontSize": "0.75rem",
    "fontWeight": "600"
  }
}
```

#### Dados de Exemplo (8-10 depoimentos)

```javascript
const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo - SP",
    rating: 5,
    category: "Fast Food",
    comment: "Pedi um lanche às 19h e retirei no locker da universidade em 8 minutos. Incrível! Nunca mais vou enfrentar fila."
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro - RJ",
    rating: 5,
    category: "Pet Shop",
    comment: "Esqueci de comprar ração pro meu cachorro. O Keepit salvou meu dia! Retirei no caminho do trabalho."
  },
  {
    name: "Ana Rodrigues",
    location: "Belo Horizonte - MG",
    rating: 5,
    category: "Cosméticos",
    comment: "Consigo pegar meus cosméticos na volta do trabalho, sem fila e sem perder tempo. Simplesmente perfeito!"
  },
  {
    name: "Carlos Oliveira",
    location: "Curitiba - PR",
    rating: 5,
    category: "Farmácia",
    comment: "Precisei de um remédio urgente às 22h. Comprei pelo app e retirei no locker do hospital. Muito prático!"
  },
  {
    name: "Juliana Costa",
    location: "Brasília - DF",
    rating: 5,
    category: "Mercado",
    comment: "Faço compras no intervalo do almoço e retiro no fim do dia. Economia de tempo e super conveniente."
  }
];
```

#### Biblioteca de Carrossel
- **Swiper.js** ou **react-slick**
- Configuração:
  - `slidesPerView: { mobile: 1, tablet: 2, desktop: 3 }`
  - `spaceBetween: 24`
  - `autoplay: { delay: 5000 }`
  - `loop: true`
  - `pagination: { clickable: true }`
  - `navigation: true`

---

### 4. PartnerBrands - "Marcas que Você Ama"

#### Objetivo
Destacar a variedade e credibilidade das marcas/lojas disponíveis na plataforma, aumentando confiança e interesse.

#### Design & Layout

**Estrutura Visual:**
- Fundo branco (#FFFFFF)
- Título centralizado: "Marcas que você ama, agora no Keepit"
- Subtítulo: "Centenas de lojas parceiras em diversas categorias"
- Grid de logos (4 colunas desktop, 3 tablet, 2 mobile)
- Logos em escala de cinza com hover colorido
- CTA ao final: "Ver todas as lojas" (botão secundário)

**Grid de Logos:**
```javascript
const partnerBrands = [
  {
    id: 1,
    name: "McDonald's",
    logo: "/brands/mcdonalds.svg",
    category: "Fast Food",
    featured: true
  },
  {
    id: 2,
    name: "Drogasil",
    logo: "/brands/drogasil.svg",
    category: "Farmácia",
    featured: true
  },
  {
    id: 3,
    name: "O Boticário",
    logo: "/brands/boticario.svg",
    category: "Cosméticos",
    featured: true
  },
  {
    id: 4,
    name: "Petz",
    logo: "/brands/petz.svg",
    category: "Pet Shop",
    featured: true
  },
  // ... mais 12-16 marcas
];
```

#### Tokens de Design

```json
{
  "background": "#FFFFFF",
  "section": {
    "paddingBlock": "5rem"
  },
  "title": {
    "fontSize": "2rem",
    "fontWeight": "700",
    "color": "#1E1E1E",
    "textAlign": "center"
  },
  "subtitle": {
    "fontSize": "1rem",
    "color": "#4A4A4A",
    "textAlign": "center",
    "marginBottom": "3rem"
  },
  "logoGrid": {
    "display": "grid",
    "gridTemplateColumns": {
      "mobile": "repeat(2, 1fr)",
      "tablet": "repeat(3, 1fr)",
      "desktop": "repeat(4, 1fr)"
    },
    "gap": "2rem",
    "marginBottom": "3rem"
  },
  "logoCard": {
    "background": "#F8F9FA",
    "border": "1px solid #E0E0E0",
    "borderRadius": "0.75rem",
    "padding": "2rem",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "aspectRatio": "16/9",
    "transition": "all 0.3s ease",
    "hover": {
      "borderColor": "#67FB94",
      "transform": "translateY(-4px)",
      "boxShadow": "0 8px 16px rgba(0, 0, 0, 0.1)"
    }
  },
  "logo": {
    "maxWidth": "120px",
    "maxHeight": "60px",
    "filter": "grayscale(100%)",
    "opacity": "0.6",
    "transition": "all 0.3s ease",
    "hover": {
      "filter": "grayscale(0%)",
      "opacity": "1"
    }
  },
  "ctaButton": {
    "background": "transparent",
    "color": "#67FB94",
    "border": "2px solid #67FB94",
    "borderRadius": "8px",
    "padding": "12px 32px",
    "fontSize": "1rem",
    "fontWeight": "600",
    "hover": {
      "background": "#67FB94",
      "color": "#1E1E1E",
      "transform": "translateY(-2px)"
    }
  }
}
```

#### Categorias de Filtro (Opcional - Fase 2)
```javascript
const categories = [
  { id: "all", name: "Todas", count: 200 },
  { id: "fast-food", name: "Fast Food", count: 45 },
  { id: "farmacia", name: "Farmácias", count: 38 },
  { id: "cosmeticos", name: "Cosméticos", count: 52 },
  { id: "pet", name: "Pet Shop", count: 28 },
  { id: "mercado", name: "Mercado", count: 37 }
];
```

#### Funcionalidades
1. Mostrar 12-16 marcas destacadas (featured: true)
2. Logos otimizados em SVG quando possível
3. Lazy loading de imagens
4. Link para página `/lojas` ou `/marcas`
5. Tooltip com nome da marca ao hover (opcional)

---

## 📐 Ordem Final das Seções na Homepage

```
1. BannerHomeThree (Hero)           [Existente]
2. FeaturesBenefits                 [Existente]
3. HowItWorks                       [NOVA]
4. NearbyLockers                    [NOVA]
5. PartnerBrands                    [NOVA]
6. CustomerTestimonials             [NOVA]
7. AppDownload                      [Existente]
8. Footer                           [Existente]
```

---

## 🛠️ Tecnologias e Bibliotecas Necessárias

### Já Disponíveis
- ✅ React Icons (FaShoppingCart, FaMapMarkerAlt, etc.)
- ✅ Google Maps API (GoogleMapsProvider)
- ✅ AOS (Animate on Scroll)
- ✅ Next.js Image component
- ✅ SCSS modules

### A Instalar
- 📦 **Swiper.js** ou **react-slick** - Para carrossel de depoimentos
  ```bash
  npm install swiper
  # ou
  npm install react-slick slick-carousel
  ```

---

## 📊 Estrutura de Arquivos

```
storefront/src/modules/home/components/
├── how-it-works/
│   ├── HowItWorks.tsx
│   ├── StepCard.tsx
│   └── index.ts
│
├── nearby-lockers/
│   ├── NearbyLockers.tsx
│   ├── LockerMap.tsx
│   ├── LockerCard.tsx
│   ├── LockerFilters.tsx
│   └── index.ts
│
├── customer-testimonials/
│   ├── CustomerTestimonials.tsx
│   ├── TestimonialCard.tsx
│   ├── testimonialsData.ts
│   └── index.ts
│
└── partner-brands/
    ├── PartnerBrands.tsx
    ├── BrandLogo.tsx
    ├── brandsData.ts
    └── index.ts
```

---

## 🎨 Estilo SCSS (Exemplo - HowItWorks)

```scss
// how-it-works.scss
.how-it-works {
  background-color: #F1F1F1;
  padding-block: 5rem;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding-inline: 1.5rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    color: #1E1E1E;
    text-align: center;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1rem;
    color: #4A4A4A;
    text-align: center;
    margin-bottom: 3rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  &__card {
    background: #FFFFFF;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }
  }

  &__number {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: #67FB94;
    opacity: 0.3;
    line-height: 1;
  }

  &__icon-wrapper {
    width: 64px;
    height: 64px;
    background: rgba(103, 251, 148, 0.1);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;

    svg {
      font-size: 32px;
      color: #67FB94;
    }
  }

  &__card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1E1E1E;
    margin-bottom: 0.75rem;
  }

  &__card-description {
    font-size: 0.875rem;
    color: #4A4A4A;
    line-height: 1.6;
  }
}
```

---

## ✅ Checklist de Implementação

### Seção 1: HowItWorks
- [ ] Criar componente `HowItWorks.tsx`
- [ ] Criar componente `StepCard.tsx`
- [ ] Definir array de steps com conteúdo
- [ ] Implementar grid responsivo
- [ ] Adicionar animações AOS
- [ ] Criar SCSS module
- [ ] Importar em `page.tsx`

### Seção 2: NearbyLockers
- [ ] Criar componente `NearbyLockers.tsx`
- [ ] Criar componente `LockerMap.tsx` (Google Maps)
- [ ] Criar componente `LockerCard.tsx`
- [ ] Implementar geolocation API
- [ ] Integrar com Google Maps API
- [ ] Criar markers customizados
- [ ] Adicionar InfoWindow
- [ ] Implementar filtros (opcional)
- [ ] Criar SCSS module

### Seção 3: CustomerTestimonials
- [ ] Criar componente `CustomerTestimonials.tsx`
- [ ] Criar componente `TestimonialCard.tsx`
- [ ] Instalar Swiper.js ou react-slick
- [ ] Criar arquivo `testimonialsData.ts`
- [ ] Implementar carrossel responsivo
- [ ] Configurar auto-play
- [ ] Adicionar navegação (setas + dots)
- [ ] Criar SCSS module

### Seção 4: PartnerBrands
- [ ] Criar componente `PartnerBrands.tsx`
- [ ] Criar componente `BrandLogo.tsx`
- [ ] Criar arquivo `brandsData.ts`
- [ ] Adicionar logos em SVG (ou PNG otimizados)
- [ ] Implementar grid responsivo
- [ ] Adicionar efeito hover (grayscale → color)
- [ ] Criar botão CTA "Ver todas as lojas"
- [ ] Criar SCSS module

### Integração
- [ ] Atualizar `page.tsx` com novas seções
- [ ] Testar ordem e espaçamento
- [ ] Validar responsividade (mobile, tablet, desktop)
- [ ] Otimizar performance (lazy loading)
- [ ] Testar animações AOS
- [ ] Validar acessibilidade (ARIA labels)

---

## 🚀 Próximos Passos

1. **Aprovação do planejamento** - Validar seções com stakeholders
2. **Coleta de conteúdo** - Obter dados reais (depoimentos, logos de marcas)
3. **Desenvolvimento** - Implementar seções na ordem proposta
4. **Testes** - Validar em diferentes dispositivos e navegadores
5. **Deploy** - Publicar em ambiente de staging → produção

---

## 📌 Notas Importantes

- Todas as seções seguem o Design System definido em `design.json`
- Cores principais: Verde #67FB94, Preto #1E1E1E, Branco #FFFFFF
- Fonte: Montserrat (única fonte do projeto)
- Todas as seções são mobile-first e responsivas
- Animações AOS para melhor UX
- Componentes reutilizáveis e modulares
- SCSS seguindo padrão BEM (Block Element Modifier)

---

**Documento criado para:** Keepit Brasil MVP
**Aguardando aprovação para iniciar implementação**
