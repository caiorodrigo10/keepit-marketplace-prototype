"use client"

import React from "react"

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#67FB94' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Mais Clientes",
      description: "Visitantes diários buscando retiradas",
      badge: "+30% fluxo",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#67FB94' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Zero Custo",
      description: "Instalação e manutenção gratuitas",
      badge: "R$ 0/mês",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#67FB94' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Marca Moderna",
      description: "Tecnologia inovadora no seu espaço",
      badge: "Top Startup",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#67FB94' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Ganhe Comissão",
      description: "Receita por transação realizada",
      badge: "R$/pedido",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E1E1E' }}>
            Por que escolher{" "}
            <span style={{ color: '#67FB94' }}>Keepit</span>?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#4A4A4A' }}>
            Benefícios que transformam seu estabelecimento
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '1rem'
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1E1E1E' }}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#4A4A4A' }}>
                {benefit.description}
              </p>

              {/* Badge */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: '#E8F9ED',
                  color: '#34BF58'
                }}
              >
                {benefit.badge}
              </div>

              {/* Hover indicator */}
              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all duration-300 rounded-full" style={{ backgroundColor: '#67FB94' }}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-12 md:mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-lg mb-4" style={{ color: '#1E1E1E' }}>
            Pronto para começar?
          </p>
          <button
            onClick={() => {
              const formElement = document.getElementById("formulario")
              if (formElement) {
                formElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50"
            style={{
              backgroundColor: '#67FB94',
              color: '#1E1E1E',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#34BF58'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#67FB94'}
          >
            Cadastrar Estabelecimento
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
