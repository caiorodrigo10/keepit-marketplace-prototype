# Tarefas - Implementação Nova Página /inicio

**Data:** 2025-01-18
**Objetivo:** Criar página `/inicio` focada em vendors e migrar produtos para `/produtos`

---

## ✅ Checklist de Implementação

### Fase 1: Criar Página `/produtos` (Migração)

- [ ] **Tarefa 1.1:** Criar diretório `/produtos` em `src/app/[countryCode]/(main)/`
- [ ] **Tarefa 1.2:** Criar `page.tsx` em `/produtos` com conteúdo atual de `/inicio`
- [ ] **Tarefa 1.3:** Testar rota `/produtos` no navegador

**Tempo estimado:** 30 minutos

---

### Fase 2: Criar Componentes para `/inicio`

#### 2.1 VendorHero Component
- [ ] **Tarefa 2.1.1:** Criar diretório `src/modules/home/components/vendor-hero/`
- [ ] **Tarefa 2.1.2:** Criar `VendorHero.tsx` com hero específico para vendors
- [ ] **Tarefa 2.1.3:** Criar `vendor-hero.scss` com estilos
- [ ] **Tarefa 2.1.4:** Criar `index.ts` com export

**Tempo estimado:** 2 horas

#### 2.2 VendorCategories Component
- [ ] **Tarefa 2.2.1:** Criar diretório `src/modules/home/components/vendor-categories/`
- [ ] **Tarefa 2.2.2:** Criar `VendorCategories.tsx` com grid de categorias
- [ ] **Tarefa 2.2.3:** Criar `VendorCategoryCard.tsx` com card individual
- [ ] **Tarefa 2.2.4:** Criar `vendorCategoriesData.ts` com dados das 6 categorias
- [ ] **Tarefa 2.2.5:** Criar `vendor-categories.scss` com estilos
- [ ] **Tarefa 2.2.6:** Criar `index.ts` com export

**Tempo estimado:** 4 horas

#### 2.3 FeaturedVendors Component
- [ ] **Tarefa 2.3.1:** Criar diretório `src/modules/home/components/featured-vendors/`
- [ ] **Tarefa 2.3.2:** Criar `FeaturedVendors.tsx` com seção de vendors
- [ ] **Tarefa 2.3.3:** Criar `VendorCard.tsx` com card individual
- [ ] **Tarefa 2.3.4:** Criar `vendorsData.ts` com dados de 8-12 vendors mock
- [ ] **Tarefa 2.3.5:** Criar `featured-vendors.scss` com estilos
- [ ] **Tarefa 2.3.6:** Criar `index.ts` com export

**Tempo estimado:** 4 horas

#### 2.4 VendorBenefits Component
- [ ] **Tarefa 2.4.1:** Criar diretório `src/modules/home/components/vendor-benefits/`
- [ ] **Tarefa 2.4.2:** Criar `VendorBenefits.tsx` com benefícios específicos
- [ ] **Tarefa 2.4.3:** Criar `vendor-benefits.scss` com estilos
- [ ] **Tarefa 2.4.4:** Criar `index.ts` com export

**Tempo estimado:** 2 horas

---

### Fase 3: Atualizar Página `/inicio`

- [ ] **Tarefa 3.1:** Fazer backup do conteúdo atual de `/inicio/page.tsx`
- [ ] **Tarefa 3.2:** Atualizar `/inicio/page.tsx` com novos componentes
- [ ] **Tarefa 3.3:** Importar todos os componentes necessários
- [ ] **Tarefa 3.4:** Atualizar metadata (title e description)
- [ ] **Tarefa 3.5:** Testar rota `/inicio` no navegador

**Tempo estimado:** 1 hora

---

### Fase 4: Testes e Validação

- [ ] **Tarefa 4.1:** Testar página `/` (raiz) - garantir que permanece inalterada
- [ ] **Tarefa 4.2:** Testar página `/inicio` - validar novos componentes
- [ ] **Tarefa 4.3:** Testar página `/produtos` - validar migração
- [ ] **Tarefa 4.4:** Testar responsividade mobile (iPhone, Android)
- [ ] **Tarefa 4.5:** Testar responsividade tablet (iPad)
- [ ] **Tarefa 4.6:** Testar responsividade desktop (1920px, 1440px)
- [ ] **Tarefa 4.7:** Validar animações AOS
- [ ] **Tarefa 4.8:** Validar Google Maps integration (se aplicável)
- [ ] **Tarefa 4.9:** Validar links e navegação entre páginas
- [ ] **Tarefa 4.10:** Testar performance (Lighthouse)

**Tempo estimado:** 2 horas

---

### Fase 5: Ajustes Finais

- [ ] **Tarefa 5.1:** Corrigir bugs encontrados nos testes
- [ ] **Tarefa 5.2:** Otimizar imagens (lazy loading, Next.js Image)
- [ ] **Tarefa 5.3:** Validar acessibilidade (ARIA labels, alt text)
- [ ] **Tarefa 5.4:** Revisar código (linting, formatação)
- [ ] **Tarefa 5.5:** Documentar mudanças no README (se necessário)

**Tempo estimado:** 1 hora

---

## 📋 Detalhamento das Tarefas

### Tarefa 1.2: Criar `/produtos/page.tsx`

**Código:**
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

### Tarefa 2.1.2: Criar `VendorHero.tsx`

**Estrutura:**
- Hero banner com imagem de fundo
- Título: "Descubra Estabelecimentos Próximos"
- Subtítulo: "Restaurantes, farmácias, mercados e muito mais com retirada em 10 minutos"
- Campo de busca (Google Places API)
- CTA: "Explorar Categorias"

---

### Tarefa 2.2.4: Dados `vendorCategoriesData.ts`

**6 Categorias:**
1. Restaurantes (Laranja #FF6B35)
2. Farmácias (Azul #4A90E2)
3. Mercados (Verde #67FB94)
4. Bebidas (Amarelo #FFD93D)
5. Pet Shop (Roxo #9B59B6)
6. Cosméticos (Rosa #E91E63)

---

### Tarefa 2.3.4: Dados `vendorsData.ts`

**8-12 Vendors Mock:**
- McDonald's Paulista
- Drogasil Pinheiros
- Carrefour Express
- Empório da Cerveja
- Petz Vila Madalena
- O Boticário Shopping
- Burger King
- Raia Drogasil
- etc.

---

### Tarefa 3.2: Atualizar `/inicio/page.tsx`

**Código:**
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

## 🎨 Design Tokens Rápidos

### Cores Principais
- Verde Keepit: `#67FB94`
- Preto: `#1E1E1E`
- Branco: `#FFFFFF`
- Cinza Claro: `#F8F9FA`
- Cinza Médio: `#9E9E9E`

### Cores de Categorias
- Restaurantes: `#FF6B35`
- Farmácias: `#4A90E2`
- Mercados: `#67FB94`
- Bebidas: `#FFD93D`
- Pet Shop: `#9B59B6`
- Cosméticos: `#E91E63`

### Tipografia
- Fonte: Montserrat
- Título Hero: 2.5rem / 700
- Título Seção: 2rem / 700
- Subtítulo: 1rem / 400
- Body: 0.875rem / 400

### Espaçamento
- Padding Seção: 5rem (desktop), 3rem (mobile)
- Gap Grid: 2rem (desktop), 1rem (mobile)
- Border Radius: 1rem (cards), 0.75rem (botões)

---

## 📦 Dependências

Todas as dependências já estão instaladas:
- ✅ React Icons
- ✅ Google Maps API
- ✅ AOS (Animate on Scroll)
- ✅ Next.js Image
- ✅ SCSS

---

## 🚀 Ordem de Execução

1. ✅ Criar `/produtos` (migração simples)
2. ✅ Criar `VendorHero` (componente base)
3. ✅ Criar `VendorCategories` (componente principal)
4. ✅ Criar `FeaturedVendors` (componente intermediário)
5. ✅ Criar `VendorBenefits` (componente simples)
6. ✅ Atualizar `/inicio` (integração)
7. ✅ Testes completos
8. ✅ Ajustes finais

---

## ⏱️ Estimativa Total

- Fase 1: 30 min
- Fase 2: 12 horas
- Fase 3: 1 hora
- Fase 4: 2 horas
- Fase 5: 1 hora

**Total: ~16-17 horas (2 dias de trabalho)**

---

## 📝 Notas Importantes

- ❗ NÃO MODIFICAR página raiz (`/`)
- ❗ Usar componentes existentes como referência (PopularProducts, FlashSales)
- ❗ Seguir padrão de código do projeto (SCSS modules, TypeScript strict)
- ❗ Testar em navegadores: Chrome, Firefox, Safari
- ❗ Validar mobile-first (maioria dos usuários é mobile)

---

**Status:** Pronto para execução
**Aprovado por:** Aguardando aprovação
**Início:** Após aprovação
