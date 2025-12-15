import { Metadata } from "next"

// Torganic Home-Three Components
import PopularProducts from "@modules/home/components/popular-products"
import FlashSales from "@modules/home/components/flash-sales"
import SuperSale from "@modules/home/components/super-sale-banner"
import FeatureBar from "@modules/home/components/feature-bar"
import AOSInit from "@modules/home/components/aos-init"

// Import SCSS
import "@/style/home-three/style.scss"

export const metadata: Metadata = {
  title: "Produtos Disponíveis - Keepit Brasil",
  description:
    "Explore produtos disponíveis para retirada rápida nos lockers Keepit. Fast food, farmácia, cosméticos e muito mais.",
}

export default async function ProdutosPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <AOSInit>
      <PopularProducts />
      <FlashSales />
      <SuperSale />
      <FeatureBar />
    </AOSInit>
  )
}
