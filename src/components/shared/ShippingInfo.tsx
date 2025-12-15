/**
 * ShippingInfo Component
 * Based on Template 2 ShippingOne component
 * Displays shipping/service information cards
 */

"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/util/cn"
import {
  CarProfile,
  HandHeart,
  CreditCard,
  Chats,
} from "@phosphor-icons/react"

interface ShippingInfoItem {
  icon: "shipping" | "satisfaction" | "payment" | "support"
  title: string
  description: string
}

interface ShippingInfoProps {
  items?: ShippingInfoItem[]
  className?: string
}

const defaultItems: ShippingInfoItem[] = [
  {
    icon: "shipping",
    title: "Entrega Grátis",
    description: "Entrega grátis em toda a região",
  },
  {
    icon: "satisfaction",
    title: "100% Satisfação",
    description: "Garantia de qualidade em todos os produtos",
  },
  {
    icon: "payment",
    title: "Pagamentos Seguros",
    description: "Compre com segurança e tranquilidade",
  },
  {
    icon: "support",
    title: "Suporte 24/7",
    description: "Atendimento sempre que você precisar",
  },
]

const iconMap: Record<string, ReactNode> = {
  shipping: <CarProfile weight="fill" className="text-3xl" />,
  satisfaction: <HandHeart weight="fill" className="text-3xl" />,
  payment: <CreditCard weight="fill" className="text-3xl" />,
  support: <Chats weight="fill" className="text-3xl" />,
}

export default function ShippingInfo({
  items = defaultItems,
  className,
}: ShippingInfoProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-2xl bg-keepit-green-primary bg-opacity-5 hover:bg-opacity-10 transition-all duration-200"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-keepit-green-primary text-white flex-shrink-0">
            {iconMap[item.icon]}
          </div>
          <div>
            <h6 className="text-base font-semibold text-keepit-gray-900 mb-0">
              {item.title}
            </h6>
            <span className="text-sm text-keepit-gray-700">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
