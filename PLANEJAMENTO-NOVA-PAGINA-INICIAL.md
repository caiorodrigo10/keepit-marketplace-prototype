# Planejamento - Nova Página /inicio (Vendors e Categorias)

**Versão:** 1.1
**Data:** 2025-01-18
**Objetivo:** Criar uma nova página `/inicio` focada em descoberta de vendors e categorias de estabelecimentos (restaurantes, farmácias, lojas), separada da página raiz que permanece inalterada.

---

## 📊 Mudanças Estruturais

### Antes (Estrutura Atual)

```
/ (raiz)                    → BannerHomeThree + FeaturesBenefits + HowItWorks +
                              PartnerBrands + CustomerTestimonials + AppDownload
                              [FOCO: Categorias de PRODUTOS]

/inicio                     → PopularProducts + FlashSales + SuperSale + FeatureBar
                              [FOCO: Listagem de PRODUTOS]
```

### Depois (Nova Estrutura Proposta)

```
/ (raiz)                    → BannerHomeThree + FeaturesBenefits + HowItWorks +
                              PartnerBrands + CustomerTestimonials + AppDownload
                              [PERMANECE INALTERADA - FOCO: PRODUTOS]

/inicio                     → VendorHero + VendorCategories + FeaturedVendors +
                              VendorBenefits + NearbyLockers
                              [NOVA - FOCO: VENDORS/ESTABELECIMENTOS]

/produtos                   → PopularProducts + FlashSales + SuperSale + FeatureBar
                              [Recebe conteúdo atual de /inicio - FOCO: PRODUTOS]
```

**IMPORTANTE:**
- Página raiz (`/`) = Totalmente focada em **categorias de produtos** (alimentos, limpeza, pets, etc.)
- Página `/inicio` = Totalmente focada em **vendors/estabelecimentos** (restaurantes, farmácias, mercados, etc.)
- Página `/produtos` = Listagem de produtos disponíveis

---

## 🎯 Nova Página /inicio - Seções Propostas

### 1. VendorHero (Hero para Vendors) - **[NOVO]**

#### Objetivo
Criar um hero específico para a descoberta de vendors, diferente do hero da página raiz.

#### Design & Layout

**Estrutura Visual:**
- Banner com imagem de fundo (restaurantes, lockers, estabelecimentos)
- Título principal: "Descubra Estabelecimentos Próximos"
- Subtítulo: "Restaurantes, farmácias, mercados e muito mais com retirada em 10 minutos"
- Busca por endereço/CEP (Google Places API)
- CTA: "Explorar Categorias"

**Diferencial do Hero da Raiz:**
- Raiz (`/`): Foco em **produtos** → "Compre e Retire em 10 Minutos"
- Inicio (`/inicio`): Foco em **vendors/estabelecimentos** → "Descubra Estabelecimentos Próximos"

**Tokens de Design:**
```json
{
  "background": {
    "image": "url('/images/vendor-hero-bg.jpg')",
    "overlay": "linear-gradient(135deg, rgba(103, 251, 148, 0.9) 0%, rgba(30, 30, 30, 0.8) 100%)"
  },
  "title": {
    "fontSize": "2.5rem",
    "fontWeight": "700",
    "color": "#FFFFFF",
    "textAlign": "center"
  },
  "subtitle": {
    "fontSize": "1.125rem",
    "color": "#FFFFFF",
    "textAlign": "center",
    "opacity": "0.95"
  },
  "searchBox": {
    "background": "#FFFFFF",
    "borderRadius": "12px",
    "padding": "1rem 1.5rem",
    "boxShadow": "0 8px 24px rgba(0, 0, 0, 0.15)",
    "maxWidth": "600px"
  }
}
```

---

### 2. CategoryCards (Categorias de Vendors) - **[NOVO/ADAPTADO]**

#### Objetivo
Permitir que o usuário descubra vendors por tipo de estabelecimento (restaurantes, farmácias, mercados, etc.)

#### Design & Layout

**Estrutura Visual:**
- Grid de 6 cards grandes e coloridos
- Ícones ilustrativos (react-icons)
- Cores vibrantes específicas por categoria
- Click abre modal de seleção de região (já implementado)

**Cards de Categoria:**
```javascript
const vendorCategories = [
  {
    id: 1,
    title: 'Restaurantes',
    subtitle: '120+ parceiros',
    icon: IoFastFood,
    categoryKey: 'restaurante',
    color: '#FF6B35', // Laranja
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    description: 'Fast food, lanches, pizzas e muito mais'
  },
  {
    id: 2,
    title: 'Farmácias',
    subtitle: '45+ parceiros',
    icon: IoMedkit,
    categoryKey: 'farmacia',
    color: '#4A90E2', // Azul
    image: 'https://images.unsplash.com/photo-1576602975774-7c4c8da71114?w=600',
    description: 'Medicamentos, suplementos e saúde'
  },
  {
    id: 3,
    title: 'Mercados',
    subtitle: '80+ parceiros',
    icon: IoCart,
    categoryKey: 'mercado',
    color: '#67FB94', // Verde Keepit
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600',
    description: 'Produtos alimentícios e essenciais'
  },
  {
    id: 4,
    title: 'Bebidas',
    subtitle: '35+ parceiros',
    icon: IoBeer,
    categoryKey: 'bebidas',
    color: '#FFD93D', // Amarelo
    image: 'https://images.unsplash.com/photo-1544145945-4f9d6c9e0a6f?w=600',
    description: 'Cervejas, vinhos, destilados e mais'
  },
  {
    id: 5,
    title: 'Pet Shop',
    subtitle: '28+ parceiros',
    icon: MdPets,
    categoryKey: 'petshop',
    color: '#9B59B6', // Roxo
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600',
    description: 'Ração, acessórios e produtos para pets'
  },
  {
    id: 6,
    title: 'Cosméticos',
    subtitle: '52+ parceiros',
    icon: FaSpa,
    categoryKey: 'cosmeticos',
    color: '#E91E63', // Rosa
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
    description: 'Maquiagem, perfumes e cuidados pessoais'
  }
];
```

#### Tokens de Design

```json
{
  "section": {
    "background": "#FFFFFF",
    "paddingBlock": "4rem"
  },
  "title": {
    "fontSize": "2rem",
    "fontWeight": "700",
    "color": "#1E1E1E",
    "textAlign": "center",
    "marginBottom": "1rem"
  },
  "subtitle": {
    "fontSize": "1rem",
    "color": "#4A4A4A",
    "textAlign": "center",
    "marginBottom": "3rem"
  },
  "categoryCard": {
    "background": "#FFFFFF",
    "borderRadius": "1rem",
    "overflow": "hidden",
    "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.08)",
    "transition": "all 0.3s ease",
    "cursor": "pointer",
    "hover": {
      "transform": "translateY(-8px)",
      "boxShadow": "0 12px 24px rgba(0, 0, 0, 0.15)"
    }
  },
  "categoryImage": {
    "height": "180px",
    "objectFit": "cover",
    "width": "100%",
    "position": "relative",
    "overlay": {
      "background": "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
      "position": "absolute",
      "bottom": 0,
      "left": 0,
      "right": 0,
      "height": "100%"
    }
  },
  "categoryIcon": {
    "position": "absolute",
    "top": "1rem",
    "right": "1rem",
    "fontSize": "2.5rem",
    "color": "#FFFFFF",
    "background": "rgba(255,255,255,0.2)",
    "borderRadius": "0.75rem",
    "padding": "0.75rem",
    "backdropFilter": "blur(8px)"
  },
  "categoryContent": {
    "padding": "1.5rem",
    "background": "#FFFFFF"
  },
  "categoryTitle": {
    "fontSize": "1.25rem",
    "fontWeight": "600",
    "color": "#1E1E1E",
    "marginBottom": "0.25rem"
  },
  "categorySubtitle": {
    "fontSize": "0.875rem",
    "color": "#67FB94",
    "fontWeight": "600",
    "marginBottom": "0.5rem"
  },
  "categoryDescription": {
    "fontSize": "0.875rem",
    "color": "#4A4A4A",
    "lineHeight": "1.5"
  }
}
```

#### Grid Responsivo
- **Mobile**: 1 coluna (cards empilhados)
- **Tablet**: 2 colunas
- **Desktop**: 3 colunas

---

### 3. FeaturedVendors (Vendors em Destaque) - **[NOVA]**

#### Objetivo
Destacar vendors parceiros populares e confiáveis, incentivando exploração e confiança na plataforma.

#### Design & Layout

**Estrutura Visual:**
- Fundo #F8F9FA (cinza muito claro)
- Título centralizado
- Carrossel ou grid de cards de vendors
- Cada card mostra logo, nome, categoria, rating, tempo de entrega
- CTA: "Ver todos os parceiros"

**Card de Vendor:**
```javascript
const featuredVendor = {
  id: 1,
  name: "McDonald's Paulista",
  slug: "mcdonalds-paulista",
  logo: "/vendors/mcdonalds.svg",
  coverImage: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600",
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
};
```

#### Tokens de Design

```json
{
  "section": {
    "background": "#F8F9FA",
    "paddingBlock": "5rem"
  },
  "vendorCard": {
    "background": "#FFFFFF",
    "borderRadius": "1rem",
    "overflow": "hidden",
    "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.06)",
    "transition": "all 0.3s ease",
    "maxWidth": "360px",
    "hover": {
      "boxShadow": "0 8px 20px rgba(0, 0, 0, 0.12)",
      "transform": "translateY(-4px)"
    }
  },
  "coverImage": {
    "height": "140px",
    "objectFit": "cover",
    "width": "100%",
    "position": "relative"
  },
  "logo": {
    "position": "absolute",
    "bottom": "-24px",
    "left": "1rem",
    "width": "64px",
    "height": "64px",
    "borderRadius": "0.75rem",
    "border": "3px solid #FFFFFF",
    "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.15)",
    "background": "#FFFFFF"
  },
  "content": {
    "padding": "2rem 1.25rem 1.25rem"
  },
  "name": {
    "fontSize": "1.125rem",
    "fontWeight": "600",
    "color": "#1E1E1E",
    "marginBottom": "0.25rem"
  },
  "category": {
    "fontSize": "0.875rem",
    "color": "#9E9E9E",
    "marginBottom": "0.75rem"
  },
  "rating": {
    "display": "flex",
    "alignItems": "center",
    "gap": "0.5rem",
    "marginBottom": "0.75rem"
  },
  "star": {
    "color": "#F59E0B",
    "fontSize": "16px"
  },
  "ratingText": {
    "fontSize": "0.875rem",
    "fontWeight": "600",
    "color": "#1E1E1E"
  },
  "reviewCount": {
    "fontSize": "0.875rem",
    "color": "#9E9E9E"
  },
  "info": {
    "display": "flex",
    "gap": "1rem",
    "marginBottom": "1rem",
    "fontSize": "0.875rem",
    "color": "#4A4A4A"
  },
  "badges": {
    "display": "flex",
    "gap": "0.5rem",
    "flexWrap": "wrap"
  },
  "badge": {
    "background": "#E8F9ED",
    "color": "#34BF58",
    "padding": "0.25rem 0.75rem",
    "borderRadius": "999px",
    "fontSize": "0.75rem",
    "fontWeight": "600"
  },
  "statusBadge": {
    "open": {
      "background": "#E8F9ED",
      "color": "#34BF58",
      "text": "Aberto"
    },
    "closed": {
      "background": "#FEE2E2",
      "color": "#EF4444",
      "text": "Fechado"
    }
  }
}
```

#### Funcionalidades
1. Mostrar 8-12 vendors em destaque (featured: true no backend)
2. Carrossel com 3 cards visíveis (desktop), 1 card (mobile)
3. Link para página `/vendedores` ou `/parceiros`
4. Click no card → redireciona para `/vendedor/[slug]`
5. Filtro por categoria (dropdown opcional)

---

### 4. HowItWorks (Como Funciona) - **[NOVA]**

#### Objetivo
Educar novos usuários sobre o fluxo de compra e retirada no locker.

**Reutilizar do documento NOVAS-SECOES-HOMEPAGE.md**
- 4 steps em grid responsivo
- Ícones: FaShoppingCart, FaMapMarkerAlt, FaCreditCard, FaQrcode
- Cores: #67FB94 (verde Keepit)
- Animações AOS

---

### 5. FeaturesBenefits (Benefícios) - **[MANTÉM/SIMPLIFICA]**

#### Ajuste Proposto
- **Manter**: Barra de benefícios (Frete grátis, Retire no locker, +300 mil produtos, +200 vendedores)
- **Remover**: Grid de 6 categorias (movido para CategoryCards acima)

**Estrutura Simplificada:**
```javascript
const benefits = [
  {
    id: 1,
    icon: FaTruck,
    title: 'Frete grátis',
    subtitle: 'acima de R$ 50',
  },
  {
    id: 2,
    icon: IoStorefront,
    title: 'Retire no locker',
    subtitle: 'em 10 minutos',
  },
  {
    id: 3,
    icon: FaShoppingBag,
    title: '+300 mil produtos',
    subtitle: 'disponíveis',
  },
  {
    id: 4,
    icon: FaStore,
    title: '+200 vendedores',
    subtitle: 'parceiros',
  },
];
```

---

### 6. NearbyLockers (Lockers Próximos) - **[NOVA - Opcional]**

#### Objetivo
Demonstrar disponibilidade e conveniência dos lockers próximos ao usuário.

**Reutilizar do documento NOVAS-SECOES-HOMEPAGE.md**
- Split screen: Mapa (60%) + Lista de cards (40%)
- Google Maps API com markers
- Geolocation API
- InfoWindow ao clicar

**Decisão:** Implementar na Fase 2 (após MVP básico)

---

### 7. CustomerTestimonials (Depoimentos) - **[NOVA - Opcional]**

#### Objetivo
Construir confiança através de social proof.

**Reutilizar do documento NOVAS-SECOES-HOMEPAGE.md**
- Carrossel com 3 cards (desktop), 1 card (mobile)
- Swiper.js ou react-slick
- Fundo #E8F9ED (verde claro)
- 8-10 depoimentos reais

**Decisão:** Implementar na Fase 2 (após MVP básico)

---

### 8. AppDownload - **[MANTÉM]**
- CTA para download do aplicativo mobile
- Já implementado e funcionando
- Localização: `@modules/home/components/app-download`

---

## 📐 Ordem Final das Seções

### Página `/` (Raiz) - PERMANECE INALTERADA

```
1. BannerHomeThree                     [Existente - Mantém]
2. FeaturesBenefits                    [Existente - Mantém]
3. HowItWorks                          [Existente - Mantém]
4. PartnerBrands                       [Existente - Mantém]
5. CustomerTestimonials                [Existente - Mantém]
6. AppDownload                         [Existente - Mantém]
7. Footer                              [Existente - Mantém]
```

**Foco:** Categorias de produtos (alimentos, limpeza, pets, cosméticos, etc.)

---

### Página `/inicio` (NOVA) - Fase 1 (MVP)

```
1. VendorHero                          [Novo - Hero específico para vendors]
2. VendorCategories                    [Novo - Categorias de estabelecimentos]
3. FeaturedVendors                     [Novo - Vendors em destaque]
4. VendorBenefits                      [Novo - Benefícios específicos de vendors]
5. Footer                              [Existente - Mantém]
```

**Foco:** Descoberta de vendors/estabelecimentos (restaurantes, farmácias, mercados, etc.)

---

### Página `/inicio` - Fase 2 (Melhorias Futuras)

```
1. VendorHero
2. VendorCategories
3. FeaturedVendors
4. VendorBenefits
5. NearbyLockers                       [Nova - Fase 2]
6. VendorTestimonials                  [Nova - Fase 2 - específico de vendors]
7. Footer
```

---

### Página `/produtos` (Recebe conteúdo de /inicio atual)

```
1. PopularProducts                     [Migrado de /inicio]
2. FlashSales                          [Migrado de /inicio]
3. SuperSale                           [Migrado de /inicio]
4. FeatureBar                          [Migrado de /inicio]
5. Footer                              [Existente - Mantém]
```

**Foco:** Listagem completa de produtos disponíveis

---

## 🗂️ Nova Estrutura de Arquivos

```
storefront/src/
├── app/[countryCode]/(main)/
│   ├── page.tsx                       [NÃO MEXER - Mantém inalterada]
│   ├── inicio/
│   │   └── page.tsx                   [RECRIAR - Nova página de vendors]
│   └── produtos/
│       └── page.tsx                   [CRIAR - Recebe conteúdo atual de /inicio]
│
└── modules/home/components/
    ├── banner-home-three/             [Existente - Usado na página raiz]
    ├── features-benefits/             [Existente - Usado na página raiz]
    ├── how-it-works/                  [Existente - Usado na página raiz]
    ├── partner-brands/                [Existente - Usado na página raiz]
    ├── customer-testimonials/         [Existente - Usado na página raiz]
    ├── app-download/                  [Existente - Usado na página raiz]
    │
    ├── vendor-hero/                   [CRIAR NOVO - Para /inicio]
    │   ├── VendorHero.tsx
    │   ├── vendor-hero.scss
    │   └── index.ts
    │
    ├── vendor-categories/             [CRIAR NOVO - Para /inicio]
    │   ├── VendorCategories.tsx
    │   ├── VendorCategoryCard.tsx
    │   ├── vendorCategoriesData.ts
    │   ├── vendor-categories.scss
    │   └── index.ts
    │
    ├── featured-vendors/              [CRIAR NOVO - Para /inicio]
    │   ├── FeaturedVendors.tsx
    │   ├── VendorCard.tsx
    │   ├── vendorsData.ts
    │   ├── featured-vendors.scss
    │   └── index.ts
    │
    ├── vendor-benefits/               [CRIAR NOVO - Para /inicio]
    │   ├── VendorBenefits.tsx
    │   ├── vendor-benefits.scss
    │   └── index.ts
    ├── how-it-works/                  [Criar novo]
    │   ├── HowItWorks.tsx
    │   ├── StepCard.tsx
    │   └── index.ts
    ├── app-download/                  [Existente - Mantém]
    └── [componentes atuais de produtos] [Mover para módulo products]
```

---

## 🔄 Migrações e Mudanças de Rota

### 1. NÃO MEXER: Página `/` (Raiz)

**Arquivo:** `storefront/src/app/[countryCode]/(main)/page.tsx`

**Status:** ✅ JÁ ESTÁ PRONTA - NÃO MODIFICAR

```typescript
// Conteúdo atual (mantém inalterado):
import { Metadata } from "next"
import BannerHomeThree from "@modules/home/components/banner-home-three"
import FeaturesBenefits from "@modules/home/components/features-benefits"
import HowItWorks from "@modules/home/components/how-it-works"
import CustomerTestimonials from "@modules/home/components/customer-testimonials"
import PartnerBrands from "@modules/home/components/partner-brands"
import AppDownload from "@modules/home/components/app-download"
import AOSInit from "@modules/home/components/aos-init"
import { GoogleMapsProvider } from "@/components/location/GoogleMapsProvider"
import "@/style/home-three/style.scss"

export const metadata: Metadata = {
  title: "Keepit Brasil - Compre e Retire em 10 Minutos",
  description: "Marketplace inteligente com lockers...",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <GoogleMapsProvider>
      <AOSInit>
        <BannerHomeThree />
        <FeaturesBenefits />
        <HowItWorks />
        <PartnerBrands />
        <CustomerTestimonials />
        <AppDownload />
      </AOSInit>
    </GoogleMapsProvider>
  )
}
```

---

### 2. RECRIAR: Página `/inicio` (Nova - Foco em Vendors)

**Arquivo:** `storefront/src/app/[countryCode]/(main)/inicio/page.tsx`

```typescript
import { Metadata } from "next"
import VendorHero from "@modules/home/components/vendor-hero"
import VendorCategories from "@modules/home/components/vendor-categories"
import FeaturedVendors from "@modules/home/components/featured-vendors"
import VendorBenefits from "@modules/home/components/vendor-benefits"
import AOSInit from "@modules/home/components/aos-init"
import { GoogleMapsProvider } from "@/components/location/GoogleMapsProvider"
import "@/style/home-three/style.scss"

export const metadata: Metadata = {
  title: "Estabelecimentos - Keepit Brasil",
  description: "Descubra restaurantes, farmácias, mercados e muito mais próximos a você. Retire em 10 minutos nos lockers Keepit.",
}

export default async function InicioPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <GoogleMapsProvider>
      <AOSInit>
        <VendorHero />
        <VendorCategories />
        <FeaturedVendors />
        <VendorBenefits />
      </AOSInit>
    </GoogleMapsProvider>
  )
}
```

---

### 3. CRIAR: Página `/produtos` (Recebe conteúdo atual de /inicio)

**Arquivo:** `storefront/src/app/[countryCode]/(main)/produtos/page.tsx`

```typescript
import { Metadata } from "next"
import PopularProducts from "@modules/home/components/popular-products"
import FlashSales from "@modules/home/components/flash-sales"
import SuperSale from "@modules/home/components/super-sale-banner"
import FeatureBar from "@modules/home/components/feature-bar"
import AOSInit from "@modules/home/components/aos-init"
import "@/style/home-three/style.scss"

export const metadata: Metadata = {
  title: "Produtos Disponíveis - Keepit Brasil",
  description: "Explore produtos disponíveis para retirada rápida nos lockers Keepit. Fast food, farmácia, cosméticos e muito mais.",
}

export default async function ProdutosPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <AOSInit>
      <PopularProducts />
      <FlashSales />
      <SuperSale />
      <FeatureBar />
    </AOSInit>
  )
}
```

---

## 🎨 Componentes a Criar

### 1. FeaturedVendors Component

**Localização:** `storefront/src/modules/home/components/featured-vendors/`

**Arquivos:**
- `FeaturedVendors.tsx` - Componente principal
- `VendorCard.tsx` - Card individual de vendor
- `vendorsData.ts` - Dados mock de vendors
- `index.ts` - Export padrão
- `featured-vendors.scss` - Estilos SCSS

**Exemplo FeaturedVendors.tsx:**
```typescript
'use client';
import React from 'react';
import VendorCard from './VendorCard';
import { featuredVendors } from './vendorsData';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const FeaturedVendors = () => {
  return (
    <section className="featured-vendors">
      <div className="container">
        <div className="featured-vendors__header">
          <h2 className="featured-vendors__title">Parceiros em Destaque</h2>
          <p className="featured-vendors__subtitle">
            Descubra os estabelecimentos mais populares próximos a você
          </p>
        </div>

        <div className="row g-4">
          {featuredVendors.slice(0, 8).map((vendor) => (
            <div key={vendor.id} className="col-12 col-md-6 col-lg-3">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>

        <div className="featured-vendors__cta">
          <Link href="/parceiros" className="btn btn-outline-primary">
            Ver todos os parceiros
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
```

### 2. HowItWorks Component

**Localização:** `storefront/src/modules/home/components/how-it-works/`

**Arquivos:**
- `HowItWorks.tsx` - Componente principal
- `StepCard.tsx` - Card individual de step
- `index.ts` - Export padrão
- `how-it-works.scss` - Estilos SCSS

**Exemplo HowItWorks.tsx:**
```typescript
'use client';
import React from 'react';
import { FaShoppingCart, FaMapMarkerAlt, FaCreditCard, FaQrcode } from 'react-icons/fa';
import StepCard from './StepCard';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FaShoppingCart,
      title: "Escolha seus produtos",
      description: "Navegue por centenas de lojas e adicione ao carrinho",
    },
    {
      number: "02",
      icon: FaMapMarkerAlt,
      title: "Selecione o locker",
      description: "Escolha o locker mais próximo de você no mapa",
    },
    {
      number: "03",
      icon: FaCreditCard,
      title: "Finalize o pedido",
      description: "Pagamento rápido e seguro com Pix, cartão ou boleto",
    },
    {
      number: "04",
      icon: FaQrcode,
      title: "Retire em 10 minutos",
      description: "Use o QR code no app para abrir seu compartimento",
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">Como Funciona</h2>
          <p className="how-it-works__subtitle">
            Simples, rápido e sem filas
          </p>
        </div>

        <div className="how-it-works__grid">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
```

### 3. Atualizar CategoryCards

**Modificações em:** `storefront/src/modules/home/components/category-cards/CategoryCards.tsx`

**Mudanças:**
- Adicionar imagens de cover aos cards
- Ajustar layout para cards maiores e mais visuais
- Manter modal de seleção de região
- Adicionar subtítulo com contagem de parceiros
- Adicionar descrição curta

---

## 🎨 Tokens de Design (SCSS)

### Paleta de Cores

```scss
$keepit-green: #67FB94;
$keepit-black: #1E1E1E;
$keepit-white: #FFFFFF;
$keepit-gray-light: #F8F9FA;
$keepit-gray-medium: #9E9E9E;
$keepit-gray-dark: #4A4A4A;

// Cores de Categoria
$category-restaurant: #FF6B35;
$category-pharmacy: #4A90E2;
$category-market: #67FB94;
$category-drinks: #FFD93D;
$category-petshop: #9B59B6;
$category-cosmetics: #E91E63;

// Status
$status-open: #34BF58;
$status-closed: #EF4444;
$status-warning: #F59E0B;
```

---

## ✅ Checklist de Implementação - Fase 1

### Setup e Estrutura
- [ ] Criar diretório `/produtos` em `app/[countryCode]/(main)/`
- [ ] Criar `page.tsx` em `/produtos` com conteúdo de `/inicio`
- [ ] Atualizar `page.tsx` raiz com nova estrutura
- [ ] Configurar redirecionamento em `/inicio`

### Componentes Novos
- [ ] Criar `featured-vendors/` com todos os arquivos
- [ ] Criar `how-it-works/` com todos os arquivos
- [ ] Criar `vendorsData.ts` com dados mock (8-12 vendors)
- [ ] Criar arquivos SCSS correspondentes

### Modificações em Componentes Existentes
- [ ] Simplificar `FeaturesBenefits.tsx` (remover grid de categorias)
- [ ] Atualizar `CategoryCards.tsx` com novo layout visual
- [ ] Adicionar imagens de cover aos category cards

### Estilos
- [ ] Criar `featured-vendors.scss`
- [ ] Criar `how-it-works.scss`
- [ ] Atualizar `category-cards.scss` (se necessário)
- [ ] Atualizar `features-benefits.scss` (remover estilos de categorias)

### Testes
- [ ] Testar rota `/` (nova homepage)
- [ ] Testar rota `/produtos` (listagem de produtos)
- [ ] Testar redirecionamento `/inicio`
- [ ] Validar responsividade (mobile, tablet, desktop)
- [ ] Testar modal de seleção de região
- [ ] Validar animações AOS
- [ ] Testar links e navegação

### Links e Navegação
- [ ] Atualizar links do header/footer se necessário
- [ ] Verificar breadcrumbs
- [ ] Adicionar link "Ver todos os parceiros" (criar página `/parceiros`)

---

## 🚀 Próximos Passos (Fase 2)

1. **Implementar NearbyLockers**
   - Google Maps API com markers
   - Geolocation
   - Lista de lockers próximos

2. **Implementar CustomerTestimonials**
   - Carrossel com depoimentos
   - Swiper.js ou react-slick
   - Coletar depoimentos reais

3. **Criar Página de Vendors** (`/parceiros` ou `/vendedores`)
   - Listagem completa de vendors
   - Filtros por categoria, localização, avaliação
   - Busca por nome
   - Mapa de vendors

4. **Criar Página Individual de Vendor** (`/vendedor/[slug]`)
   - Informações do vendor
   - Produtos do vendor
   - Avaliações
   - Horários de funcionamento
   - Localização

---

## 📊 Comparação: Antes vs Depois

### Antes (Estrutura Atual)

| Rota | Conteúdo | Foco |
|------|----------|------|
| `/` | BannerHomeThree + FeaturesBenefits + HowItWorks + PartnerBrands + CustomerTestimonials + AppDownload | **Produtos** (alimentos, limpeza, pets) |
| `/inicio` | PopularProducts + FlashSales + SuperSale + FeatureBar | **Produtos** (listagem) |

**Problema:**
- Duas páginas focadas em produtos sem diferenciação clara
- Usuário não consegue descobrir facilmente **estabelecimentos/vendors**
- Falta página dedicada para descoberta de restaurantes, farmácias, mercados, etc.

### Depois (Estrutura Proposta)

| Rota | Conteúdo | Foco |
|------|----------|------|
| `/` | BannerHomeThree + FeaturesBenefits + HowItWorks + PartnerBrands + CustomerTestimonials + AppDownload | **Produtos** (categorias de produtos) [INALTERADA] |
| `/inicio` | VendorHero + VendorCategories + FeaturedVendors + VendorBenefits | **Vendors** (estabelecimentos) [NOVA] |
| `/produtos` | PopularProducts + FlashSales + SuperSale + FeatureBar | **Produtos** (listagem completa) [NOVA] |

**Vantagens:**
- ✅ Separação clara: Página raiz (produtos) vs Página /inicio (vendors)
- ✅ Nova experiência focada em descoberta de estabelecimentos
- ✅ Hierarquia de informação melhorada: descobrir vendors → explorar produtos → comprar
- ✅ Maior foco em marketplace multivendor (diferencial do Keepit)
- ✅ Página raiz permanece inalterada (evita quebrar funcionalidades existentes)

---

## 📌 Notas Importantes

### UX e Fluxo de Navegação

**Jornada do Usuário - Opção 1 (Foco em Produtos):**
1. **Homepage (`/`)**: Descobre categorias de produtos (alimentos, limpeza, pets)
2. **Click em Categoria**: Abre modal → seleciona região → vai para `/produtos?categoria=X&regiao=Y`
3. **Menu "Produtos"**: Link direto para `/produtos`

**Jornada do Usuário - Opção 2 (Foco em Vendors):**
1. **Página Início (`/inicio`)**: Descobre categorias de vendors (restaurantes, farmácias, mercados)
2. **Click em Categoria de Vendor**: Abre modal → seleciona região → lista vendors daquela categoria
3. **Click em Vendor**: Vai para `/vendedor/[slug]` (Fase 2) ou lista produtos do vendor
4. **Menu "Estabelecimentos"**: Link para `/inicio`

**Navegação Principal Sugerida:**
- **Home** (`/`) - Categorias de Produtos
- **Estabelecimentos** (`/inicio`) - Categorias de Vendors
- **Produtos** (`/produtos`) - Listagem Completa

### SEO e Metadata

- **Homepage**: Keywords focadas em "marketplace", "lockers", "categorias", "vendors"
- **Página Produtos**: Keywords focadas em "produtos", "fast food", "farmácia", etc.
- Estruturar breadcrumbs para melhor SEO

### Performance

- Lazy loading de imagens (Next.js Image)
- Componentes server-side quando possível
- Client components apenas onde necessário (modals, carrosséis)

### Acessibilidade

- ARIA labels em todos os cards
- Navegação por teclado
- Alt text em todas as imagens
- Contraste adequado de cores

---

## 🎯 Resumo Executivo

### O Que Muda?

1. **Página raiz (`/`)**: ✅ NÃO MUDA - Permanece inalterada com foco em categorias de produtos
2. **Página `/inicio`**: 🆕 RECRIADA - Nova experiência focada em vendors/estabelecimentos
3. **Página `/produtos`**: 🆕 CRIADA - Recebe conteúdo atual de `/inicio` (listagem de produtos)

### Separação de Conceitos

| Página | Foco | O que mostra |
|--------|------|--------------|
| `/` | **Produtos** | Categorias de produtos (alimentos, limpeza, pets, cosméticos) |
| `/inicio` | **Vendors** | Categorias de estabelecimentos (restaurantes, farmácias, mercados) |
| `/produtos` | **Listagem** | Todos os produtos disponíveis (flash sales, populares, etc.) |

### Novos Componentes (para `/inicio`)

1. **VendorHero**: Hero específico para descoberta de estabelecimentos
2. **VendorCategories**: Grid de categorias de vendors (Restaurantes, Farmácias, Mercados, etc.)
3. **FeaturedVendors**: Cards de vendors em destaque
4. **VendorBenefits**: Benefícios específicos de comprar via vendors

### Resultado Final

**Três páginas distintas e bem definidas:**

**Página `/` (Raiz - Produtos):**
- ✅ Mantém todo conteúdo atual (BannerHomeThree, FeaturesBenefits, HowItWorks, etc.)
- ✅ Foco em categorias de produtos
- ✅ Não quebra nenhuma funcionalidade existente

**Página `/inicio` (Nova - Vendors):**
- ✅ Nova experiência focada em descoberta de estabelecimentos
- ✅ Destaca o diferencial multivendor do Keepit
- ✅ Facilita descoberta de restaurantes, farmácias, mercados próximos
- ✅ Apresenta vendors em destaque para gerar confiança

**Página `/produtos` (Nova - Listagem):**
- ✅ Recebe todo conteúdo atual de `/inicio`
- ✅ Listagem completa de produtos (PopularProducts, FlashSales, SuperSale)
- ✅ Página dedicada para exploração de produtos

---

**Documento criado para:** Keepit Brasil MVP
**Versão:** 1.1 (Atualizado)
**Status:** Aguardando aprovação para iniciar implementação
**Tempo estimado (Fase 1):** 2-3 dias de desenvolvimento

**Prioridade de Implementação:**
1. Criar `/produtos` (copiar de `/inicio` atual) - 2h
2. Criar componentes novos para `/inicio` (VendorHero, VendorCategories, etc.) - 1.5 dias
3. Atualizar `/inicio/page.tsx` com novos componentes - 0.5 dia
4. Testes e ajustes finais - 0.5 dia
