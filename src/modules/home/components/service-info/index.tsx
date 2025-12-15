"use client"

import {
  Clock,
  Package,
  ShieldCheck,
  MapPin,
} from "@phosphor-icons/react"

const SERVICE_FEATURES = [
  {
    icon: Clock,
    title: "Retirada em 10 min",
    description: "Produto disponível rapidamente no locker mais próximo",
  },
  {
    icon: Package,
    title: "Sem Filas",
    description: "Compre online e retire quando quiser, sem esperar",
  },
  {
    icon: ShieldCheck,
    title: "100% Seguro",
    description: "Lockers inteligentes com código QR único",
  },
  {
    icon: MapPin,
    title: "Lockers em Todo Lugar",
    description: "Encontre um locker perto de você",
  },
]

export default function ServiceInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-keepit-gray-900 mb-2">
            Por Que Escolher o Keepit?
          </h2>
          <p className="text-keepit-gray-600">
            A forma mais rápida e conveniente de comprar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-keepit-gray-50 hover:bg-keepit-gray-100 transition-colors duration-200"
              >
                <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
                  <Icon
                    weight="fill"
                    size={40}
                    className="text-keepit-green-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold text-keepit-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-keepit-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
