"use client"

import React from "react"
import Image from "next/image"

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("formulario")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative bg-keepit-black py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Transforme seu espaço em um{" "}
              <span style={{ color: '#67FB94' }}>Hub Keepit</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0" style={{ color: '#F1F1F1' }}>
              Lockers inteligentes que atraem clientes e geram receita para seu estabelecimento
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50"
              style={{
                backgroundColor: '#67FB94',
                color: '#1E1E1E',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#34BF58'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#67FB94'}
            >
              Quero ser Parceiro
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#67FB94' }}>
                  100+
                </div>
                <div className="text-sm" style={{ color: '#9E9E9E' }}>Parceiros</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#67FB94' }}>
                  24/7
                </div>
                <div className="text-sm" style={{ color: '#9E9E9E' }}>Operação</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#67FB94' }}>
                  Zero
                </div>
                <div className="text-sm" style={{ color: '#9E9E9E' }}>Custo</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative h-[300px] md:h-[400px] lg:h-[500px]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-keepit-green-primary rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="relative h-full bg-keepit-gray-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for locker image */}
              <div className="absolute inset-0 flex items-center justify-center bg-keepit-gray-700">
                <div className="text-center text-white p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 text-keepit-green-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <p className="text-lg font-semibold">
                    Lockers Inteligentes Keepit
                  </p>
                  <p className="text-sm text-keepit-gray-300 mt-2">
                    Tecnologia moderna para seu estabelecimento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
