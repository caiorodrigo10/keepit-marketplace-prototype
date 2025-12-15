"use client"

import ProductCard from "@/components/shared/ProductCard"
import { MOCK_PRODUCTS } from "@/lib/mock-data/products"
import { ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"

export default function FeaturedProductsSection() {
  // Get featured products with different badges
  const bestSellers = MOCK_PRODUCTS.filter((p) => p.badge === "bestseller").slice(
    0,
    4
  )
  const promotions = MOCK_PRODUCTS.filter((p) => p.badge === "promotion").slice(
    0,
    4
  )

  return (
    <section className="py-12 bg-keepit-gray-50">
      <div className="container mx-auto px-4 space-y-12">
        {/* Best Sellers */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-keepit-gray-900 mb-2">
                Mais Vendidos
              </h2>
              <p className="text-keepit-gray-600">
                Os produtos mais populares do Keepit
              </p>
            </div>
            <Link
              href="/produtos?filter=bestsellers"
              className="hidden md:flex items-center gap-2 text-keepit-green-primary font-medium hover:gap-3 transition-all duration-200"
            >
              Ver todos
              <ArrowRight weight="bold" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link
            href="/produtos?filter=bestsellers"
            className="flex md:hidden items-center justify-center gap-2 text-keepit-green-primary font-medium mt-4 hover:gap-3 transition-all duration-200"
          >
            Ver todos
            <ArrowRight weight="bold" size={20} />
          </Link>
        </div>

        {/* Promotions */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-keepit-gray-900 mb-2">
                Promoções
              </h2>
              <p className="text-keepit-gray-600">Aproveite as ofertas especiais</p>
            </div>
            <Link
              href="/produtos?filter=promotions"
              className="hidden md:flex items-center gap-2 text-keepit-green-primary font-medium hover:gap-3 transition-all duration-200"
            >
              Ver todos
              <ArrowRight weight="bold" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {promotions.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link
            href="/produtos?filter=promotions"
            className="flex md:hidden items-center justify-center gap-2 text-keepit-green-primary font-medium mt-4 hover:gap-3 transition-all duration-200"
          >
            Ver todos
            <ArrowRight weight="bold" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
