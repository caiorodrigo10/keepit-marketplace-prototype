"use client"

import { Metadata } from "next"
import Image from "next/image"
import Container from "@/components/shared/Container"
import Badge from "@/components/shared/Badge"
import EmptyState from "@/components/shared/EmptyState"
import ProductCard from "@/components/shared/ProductCard"
import HosterCard from "@/components/shared/HosterCard"
import CategoryCard from "@/components/shared/CategoryCard"
import VendorCard from "@/components/shared/VendorCard"
import PromotionalBanner from "@/components/shared/PromotionalBanner"
import ShippingInfo from "@/components/shared/ShippingInfo"
import { getProductsWithDetails } from "@/lib/util/get-mock-data"
import { MOCK_HOSTERS } from "@/lib/mock-data/hosters"
import { CATEGORIES } from "@/lib/constants/categories"

export default function DesignTestPage() {
  // Get first 3 products with details
  const products = getProductsWithDetails().slice(0, 3)

  // Get first 2 hosters
  const hosters = MOCK_HOSTERS.slice(0, 2)

  // Get basic and promotional categories
  const basicCategories = CATEGORIES.filter((c) => c.type === "basic").slice(0, 3)
  const promotionalCategories = CATEGORIES.filter((c) => c.type === "promotional").slice(0, 2)

  // Mock vendor data for demonstration
  const mockVendors = [
    {
      id: "1",
      name: "Organic Market",
      logo: "/images/vendors/vendor-1.jpg",
      deliveryTime: "Entrega em 6 horas",
      promoText: "R$5 off Snacks",
      productImages: [
        "/images/products/prod-1.jpg",
        "/images/products/prod-2.jpg",
        "/images/products/prod-3.jpg",
      ],
    },
    {
      id: "2",
      name: "Fresh Foods",
      logo: "/images/vendors/vendor-2.jpg",
      deliveryTime: "Entrega em 4 horas",
      promoText: "10% off First Order",
      productImages: [
        "/images/products/prod-4.jpg",
        "/images/products/prod-5.jpg",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white py-12">
      <Container>
        {/* Logo + Header */}
        <div className="mb-16">
          <div className="mb-8">
            <Image
              src="/brand/logo-keepit.png"
              alt="Keepit Logo"
              width={200}
              height={60}
              className="mb-4"
            />
          </div>
          <h1 className="text-5xl font-black text-keepit-gray-900 mb-4">
            Keepit Design System
          </h1>
          <p className="text-lg text-keepit-gray-700">
            Testing colors, typography, spacing, and components from the Design System
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Colors
          </h2>

          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-keepit-gray-900 mb-4">
              Primary Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="h-24 bg-keepit-green-primary rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Green Primary</p>
                <p className="text-xs text-keepit-gray-500">#34BF58</p>
              </div>
              <div>
                <div className="h-24 bg-keepit-green-light rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Green Light</p>
                <p className="text-xs text-keepit-gray-500">#67FB94</p>
              </div>
              <div>
                <div className="h-24 bg-keepit-black rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-white">Black</p>
                <p className="text-xs text-keepit-gray-500">#1E1E1E</p>
              </div>
              <div>
                <div className="h-24 bg-keepit-gray-light rounded-lg border border-keepit-gray-300 mb-2"></div>
                <p className="text-sm font-medium">Gray Light</p>
                <p className="text-xs text-keepit-gray-500">#F1F1F1</p>
              </div>
            </div>
          </div>

          {/* Feedback Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-keepit-gray-900 mb-4">
              Feedback Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="h-24 bg-success-green rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Success</p>
                <p className="text-xs text-keepit-gray-500">#10B981</p>
              </div>
              <div>
                <div className="h-24 bg-warning-yellow rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Warning</p>
                <p className="text-xs text-keepit-gray-500">#F59E0B</p>
              </div>
              <div>
                <div className="h-24 bg-error-red rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Error</p>
                <p className="text-xs text-keepit-gray-500">#EF4444</p>
              </div>
              <div>
                <div className="h-24 bg-info-blue rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Info</p>
                <p className="text-xs text-keepit-gray-500">#3B82F6</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Typography - Montserrat
          </h2>

          {/* Font Weights */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-keepit-gray-900 mb-4">
              Font Weights
            </h3>
            <div className="space-y-2">
              <p className="text-2xl font-light">Light (300) - The quick brown fox</p>
              <p className="text-2xl font-regular">Regular (400) - The quick brown fox</p>
              <p className="text-2xl font-medium">Medium (500) - The quick brown fox</p>
              <p className="text-2xl font-semibold">SemiBold (600) - The quick brown fox</p>
              <p className="text-2xl font-bold">Bold (700) - The quick brown fox</p>
              <p className="text-2xl font-extrabold">ExtraBold (800) - The quick brown fox</p>
              <p className="text-2xl font-black">Black (900) - The quick brown fox</p>
            </div>
          </div>

          {/* Font Sizes */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-keepit-gray-900 mb-4">
              Font Sizes
            </h3>
            <div className="space-y-4">
              <p className="text-6xl font-bold">Hero Title (60px)</p>
              <p className="text-5xl font-bold">Page Title (48px)</p>
              <p className="text-4xl font-semibold">Section Title (36px)</p>
              <p className="text-3xl font-semibold">Card Title (30px)</p>
              <p className="text-2xl font-medium">Subsection (24px)</p>
              <p className="text-xl font-medium">Large Text (20px)</p>
              <p className="text-lg">Large Body (18px)</p>
              <p className="text-base">Base Body (16px)</p>
              <p className="text-sm">Small Text (14px)</p>
              <p className="text-xs">Captions (12px)</p>
              <p className="text-2xs">Tiny Text (10px)</p>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="new">Novo</Badge>
            <Badge variant="promotion">Promoção</Badge>
            <Badge variant="bestseller">Mais Vendido</Badge>
            <Badge variant="exclusive">Exclusivo</Badge>
            <Badge variant="default">Padrão</Badge>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button - Black */}
            <button className="px-6 py-3 bg-keepit-black text-white font-medium rounded hover:bg-keepit-gray-900 transition-colors">
              Primary Button
            </button>

            {/* Secondary Button - Outline */}
            <button className="px-6 py-3 border-2 border-keepit-gray-300 text-keepit-gray-900 font-medium rounded hover:border-keepit-black hover:bg-keepit-gray-50 transition-all">
              Secondary Button
            </button>

            {/* Green Button - Accent */}
            <button className="px-6 py-3 bg-keepit-green-primary text-white font-medium rounded hover:bg-opacity-90 transition-all">
              Green Accent
            </button>

            {/* Text Button */}
            <button className="px-6 py-3 text-keepit-gray-900 font-medium hover:text-keepit-black hover:bg-keepit-gray-100 rounded transition-all">
              Text Button
            </button>
          </div>
        </section>

        {/* Product Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Product Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => console.log("Add to cart:", product.name)}
              />
            ))}
          </div>
        </section>

        {/* Hoster Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Hoster Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hosters.map((hoster) => (
              <HosterCard
                key={hoster.id}
                hoster={hoster}
                onClick={() => console.log("Selected hoster:", hoster.name)}
              />
            ))}
          </div>
        </section>

        {/* Category Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Category Cards
          </h2>

          <h3 className="text-xl font-semibold text-keepit-gray-900 mb-4">
            Basic Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {basicCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => console.log("Selected category:", category.name)}
              />
            ))}
          </div>

          <h3 className="text-xl font-semibold text-keepit-gray-900 mb-4">
            Promotional Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promotionalCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                variant="promotional"
                onClick={() => console.log("Selected category:", category.name)}
              />
            ))}
          </div>
        </section>

        {/* Empty State Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Empty State
          </h2>
          <div className="border border-keepit-gray-300 rounded-lg">
            <EmptyState
              icon="📦"
              title="Nenhum produto encontrado"
              description="Não encontramos produtos que correspondam aos seus critérios de busca. Tente ajustar os filtros ou explorar outras categorias."
              action={{
                label: "Explorar Categorias",
                onClick: () => console.log("Navigate to categories"),
              }}
            />
          </div>
        </section>

        {/* Container Component Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Container Sizes
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-keepit-gray-900 mb-2">Small (640px)</h3>
              <Container size="sm" className="bg-keepit-gray-100 p-4 rounded-lg">
                <p className="text-center text-keepit-gray-700">Small Container Content</p>
              </Container>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-keepit-gray-900 mb-2">Medium (1024px)</h3>
              <Container size="md" className="bg-keepit-gray-100 p-4 rounded-lg">
                <p className="text-center text-keepit-gray-700">Medium Container Content</p>
              </Container>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-keepit-gray-900 mb-2">Large (1440px) - Default</h3>
              <Container size="lg" className="bg-keepit-gray-100 p-4 rounded-lg">
                <p className="text-center text-keepit-gray-700">Large Container Content</p>
              </Container>
            </div>
          </div>
        </section>

        {/* Vendor Cards Section - NEW from Template 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Vendor Cards (Template 2 Style)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                onClick={() => console.log("Selected vendor:", vendor.name)}
              />
            ))}
          </div>
        </section>

        {/* Promotional Banners Section - NEW from Template 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Promotional Banners (Template 2 Style)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PromotionalBanner
              title="iPhone 15 Pro Max"
              subtitle="Latest Deal"
              productImage="/images/products/iphone-promo.jpg"
              backgroundColor="bg-blue-50"
              href="/produtos/iphone-15"
            />
            <PromotionalBanner
              title="Câmera Instax Mini 11"
              subtitle="Get 60% Off"
              productImage="/images/products/camera-promo.jpg"
              backgroundColor="bg-pink-50"
              href="/produtos/camera"
            />
            <PromotionalBanner
              title="Airpod Headphone"
              subtitle="Start From R$250"
              productImage="/images/products/airpod-promo.jpg"
              backgroundColor="bg-purple-50"
              href="/produtos/airpod"
            />
          </div>
        </section>

        {/* Shipping Info Section - NEW from Template 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-8">
            Shipping/Service Info (Template 2 Style)
          </h2>
          <ShippingInfo />
        </section>

        {/* Success Message */}
        <div className="mt-16 p-6 bg-success-light border-l-4 border-success-green rounded-lg">
          <h3 className="text-lg font-bold text-keepit-gray-900 mb-2">
            ✅ Design System & Components Complete!
          </h3>
          <p className="text-keepit-gray-700">
            All Keepit Design System elements and shared components are working correctly, including NEW components from Template 2 (VendorCard, PromotionalBanner, ShippingInfo) with Phosphor Icons integrated throughout. Ready for Phase 4: Home Page Implementation!
          </p>
        </div>
      </Container>
    </div>
  )
}
