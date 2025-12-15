import { Metadata } from "next"

// Vendor Components
import VendorCategories from "@modules/home/components/vendor-categories"
import FeaturedVendors from "@modules/home/components/featured-vendors"
import VendorBenefits from "@modules/home/components/vendor-benefits"
import AOSInit from "@modules/home/components/aos-init"
import { GoogleMapsProvider } from "@/components/location/GoogleMapsProvider"

// Import SCSS
import "@/style/home-three/style.scss"

export const metadata: Metadata = {
  title: "Estabelecimentos - Keepit Brasil",
  description:
    "Descubra restaurantes, farmácias, mercados e muito mais próximos a você. Retire em 10 minutos nos lockers Keepit.",
}

export default async function InicioPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <GoogleMapsProvider>
      <AOSInit>
        <VendorCategories />
        <FeaturedVendors />
        <VendorBenefits />
      </AOSInit>
    </GoogleMapsProvider>
  )
}
