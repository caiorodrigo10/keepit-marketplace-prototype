"use client"

import { ArrowRight, ShoppingCartSimple } from "@phosphor-icons/react"
import Link from "next/link"
import { useState, useEffect } from "react"

const HERO_SLIDES = [
  {
    id: 1,
    title: "Retire em 10 Minutos",
    subtitle: "Compre agora e retire no locker mais próximo",
    description: "Sem filas, sem espera. Seu produto disponível quando você precisar.",
    image: "/template-images/products/product-img1.png",
    ctaText: "Explorar Produtos",
    ctaLink: "/produtos",
  },
  {
    id: 2,
    title: "Fast Food, Mais Rápido",
    subtitle: "Peça seu combo e retire no caminho",
    description: "McDonald's, Subway e muito mais. Pronto em 10 minutos.",
    image: "/template-images/products/product-img2.png",
    ctaText: "Ver Restaurantes",
    ctaLink: "/categorias/alimentos",
  },
  {
    id: 3,
    title: "Farmácia 24h no Locker",
    subtitle: "Medicamentos disponíveis a qualquer hora",
    description: "Compre online e retire com segurança no locker.",
    image: "/template-images/products/product-img5.png",
    ctaText: "Ir para Farmácia",
    ctaLink: "/categorias/farmacia",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = HERO_SLIDES[currentSlide]

  return (
    <div className="relative bg-keepit-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
          {/* Content */}
          <div className="z-10 space-y-6">
            <div className="inline-block px-4 py-2 bg-keepit-green-primary/10 rounded-full">
              <span className="text-sm font-medium text-keepit-green-primary">
                {slide.subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-keepit-gray-900 leading-tight">
              {slide.title}
            </h1>

            <p className="text-lg text-keepit-gray-600 max-w-xl">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-keepit-green-primary text-white rounded-full font-medium hover:bg-keepit-green-dark transition-colors duration-200"
              >
                {slide.ctaText}
                <ShoppingCartSimple weight="fill" size={20} />
              </Link>

              <Link
                href="/como-funciona"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-keepit-gray-900 rounded-full font-medium border-2 border-keepit-gray-200 hover:border-keepit-gray-300 transition-colors duration-200"
              >
                Como Funciona
                <ArrowRight weight="bold" size={20} />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 pt-8">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-keepit-green-primary"
                      : "w-4 bg-keepit-gray-300 hover:bg-keepit-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 animate-fade-in">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-keepit-green-primary/5 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
        <svg
          className="absolute top-0 left-0 w-full h-16"
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 32L48 37.3C96 43 192 53 288 48C384 43 480 23 576 18.7C672 15 768 27 864 32C960 37 1056 35 1152 32C1248 29 1344 25 1392 23L1440 21V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0V32Z"
            fill="#F1F1F1"
          />
        </svg>
      </div>
    </div>
  )
}
