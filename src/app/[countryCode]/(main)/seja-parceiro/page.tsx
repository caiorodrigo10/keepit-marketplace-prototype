import { Metadata } from "next"
import HeroSection from "@modules/hoster/components/hero-section"
import BenefitsSection from "@modules/hoster/components/benefits-section"
import RegistrationForm from "@modules/hoster/components/registration-form"

export const metadata: Metadata = {
  title: "Seja Parceiro Keepit | Hospede Lockers Inteligentes",
  description:
    "Cadastre seu estabelecimento e torne-se um parceiro Keepit. Aumente o tráfego de clientes, ganhe comissões e agregue valor com nossos lockers inteligentes.",
}

export default async function SejaParceiroPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <RegistrationForm />
    </>
  )
}
