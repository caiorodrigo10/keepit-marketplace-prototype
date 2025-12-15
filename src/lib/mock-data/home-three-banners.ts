// Mock data para banners da home-three
// Baseado nos componentes Banner e SuperSale do Torganic

export interface HomeThreeBanner {
  id: number
  type: "hero" | "sale" | "promo"
  title: string
  subtitle?: string
  description: string
  cta: {
    text: string
    link: string
  }
  image: string
  backgroundImage?: string
  discount?: number
}

export const HOME_THREE_BANNERS: HomeThreeBanner[] = [
  {
    id: 1,
    type: "hero",
    title: "Top-notch Groceries, Affordable Price",
    description:
      "Vegetables contain many vitamins are good for your health. Vegetables contain many vitamins.",
    cta: {
      text: "Shop now",
      link: "/produtos",
    },
    image: "/images/home-three/1.png",
    backgroundImage: "/images/home-three/bg.png",
  },
  {
    id: 2,
    type: "sale",
    title: "Super Sale Vegetables",
    description:
      "Discover a world of fresh produce, pantry staples, and more at your fingertips.",
    cta: {
      text: "Shop Now",
      link: "/produtos",
    },
    image: "/images/home-three/banners/1.png",
    discount: 20,
  },
  {
    id: 3,
    type: "promo",
    title: "Fresh Organic Fruits",
    description:
      "Get the best quality organic fruits delivered to your doorstep.",
    cta: {
      text: "Explore Now",
      link: "/produtos",
    },
    image: "/images/home-three/banners/2.png",
    discount: 15,
  },
  {
    id: 4,
    type: "promo",
    title: "Healthy Lifestyle Starts Here",
    description:
      "Browse through our wide selection of health-focused products.",
    cta: {
      text: "Shop Collection",
      link: "/produtos",
    },
    image: "/images/home-three/banners/vegs-banner.png",
    discount: 25,
  },
]

// Função para pegar o banner hero principal
export const getHeroBanner = () => {
  return HOME_THREE_BANNERS.find((banner) => banner.type === "hero")
}

// Função para pegar banners de sale
export const getSaleBanners = () => {
  return HOME_THREE_BANNERS.filter((banner) => banner.type === "sale")
}

// Função para pegar banners promocionais
export const getPromoBanners = () => {
  return HOME_THREE_BANNERS.filter((banner) => banner.type === "promo")
}
