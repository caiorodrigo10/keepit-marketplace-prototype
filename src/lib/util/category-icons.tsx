/**
 * Category Icon Mapper
 * Maps emoji category icons to Phosphor Icons (solid)
 */

import {
  AppleLogo,
  Coffee,
  Pill,
  DeviceMobile,
  ShoppingCart,
  Sparkle,
  Fire,
  Star,
  IconProps,
} from "@phosphor-icons/react"

type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>

const ICON_MAP: Record<string, IconComponent> = {
  "🍎": AppleLogo,
  "🥤": Coffee, // Using Coffee for drinks
  "🛒": ShoppingCart,
  "💊": Pill,
  "📱": DeviceMobile,
  "✨": Sparkle,
  "🔥": Fire,
  "⭐": Star,
}

interface CategoryIconProps {
  emoji: string
  className?: string
  size?: number
}

export function CategoryIcon({ emoji, className, size = 64 }: CategoryIconProps) {
  const IconComponent = ICON_MAP[emoji]

  if (!IconComponent) {
    // Fallback to emoji if no icon found
    return <span className={className}>{emoji}</span>
  }

  return <IconComponent weight="fill" size={size} className={className} />
}
