"use client"

import { usePathname, useRouter } from "next/navigation"
import {
  IoHomeOutline,
  IoHome,
  IoStorefrontOutline,
  IoStorefront,
  IoCartOutline,
  IoCart,
  IoPersonOutline,
  IoPerson
} from "react-icons/io5"
import { useCart } from "@/modules/cart/context/CartContext"
import "./bottom-nav.scss"

interface NavItem {
  id: string
  icon: React.ReactNode
  iconActive: React.ReactNode
  route?: string
  action?: () => void
  badge?: number
}

export default function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { totalItems, toggleCart, isOpen: isCartOpen } = useCart()

  const isActive = (route?: string, checkCart?: boolean) => {
    if (checkCart) return isCartOpen
    if (!route) return false

    // Exact match for home
    if (route === "/") {
      return pathname === "/" || pathname.endsWith("/pt")
    }

    // Check if pathname includes the route
    return pathname.includes(route)
  }

  const handleNavigation = (route?: string, action?: () => void) => {
    if (action) {
      action()
    } else if (route) {
      router.push(route)
    }
  }

  const navItems: NavItem[] = [
    {
      id: "home",
      icon: <IoHomeOutline />,
      iconActive: <IoHome />,
      route: "/",
    },
    {
      id: "store",
      icon: <IoStorefrontOutline />,
      iconActive: <IoStorefront />,
      route: "/inicio",
    },
    {
      id: "cart",
      icon: <IoCartOutline />,
      iconActive: <IoCart />,
      action: toggleCart,
      badge: totalItems,
    },
    {
      id: "account",
      icon: <IoPersonOutline />,
      iconActive: <IoPerson />,
      route: "/account",
    },
  ]

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav__container">
        {navItems.map((item) => {
          const active = isActive(item.route, item.id === "cart")

          return (
            <button
              key={item.id}
              className={`bottom-nav__item ${active ? "bottom-nav__item--active" : ""}`}
              onClick={() => handleNavigation(item.route, item.action)}
              aria-label={item.id}
            >
              <div className="bottom-nav__icon-wrapper">
                <div className="bottom-nav__icon">
                  {active ? item.iconActive : item.icon}
                </div>

                {item.badge && item.badge > 0 && (
                  <span className="bottom-nav__badge">{item.badge}</span>
                )}

                {active && <div className="bottom-nav__indicator" />}
              </div>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
