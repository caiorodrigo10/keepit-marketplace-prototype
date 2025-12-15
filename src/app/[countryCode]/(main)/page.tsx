import { Metadata } from "next"

// Torganic Home-Three Components
import BannerHomeThree from "@modules/home/components/banner-home-three"
import FeaturesBenefits from "@modules/home/components/features-benefits"
import HowItWorks from "@modules/home/components/how-it-works"
import CustomerTestimonials from "@modules/home/components/customer-testimonials"
import PartnerBrands from "@modules/home/components/partner-brands"
import AOSInit from "@modules/home/components/aos-init"
import NearbyLockers from "@modules/home/components/nearby-lockers"
import { GoogleMapsProvider } from "@/components/location/GoogleMapsProvider"

// Import SCSS
import "@/style/home-three/style.scss"

export const metadata: Metadata = {
  title: "Keepit Brasil - Compre e Retire em 10 Minutos",
  description:
    "Marketplace inteligente com lockers. Compre online e retire seus produtos em 10 minutos nos lockers mais próximos. Fast food, farmácia, cosméticos e muito mais.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <GoogleMapsProvider>
      <AOSInit>
        <BannerHomeThree />
        <FeaturesBenefits />
        <NearbyLockers />
        <HowItWorks />
        <PartnerBrands />
        <CustomerTestimonials />
      </AOSInit>
    </GoogleMapsProvider>
  )
}
