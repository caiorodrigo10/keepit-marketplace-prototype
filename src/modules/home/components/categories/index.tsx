"use client"

import CategoryCard from "@/components/shared/CategoryCard"
import { MOCK_CATEGORIES } from "@/lib/mock-data/categories"

export default function HomeCategories() {
  // Show only top 8 categories on home
  const topCategories = MOCK_CATEGORIES.filter((cat) => cat.featured).slice(0, 8)

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-keepit-gray-900 mb-2">
              Categorias Populares
            </h2>
            <p className="text-keepit-gray-600">
              Explore produtos por categoria
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
