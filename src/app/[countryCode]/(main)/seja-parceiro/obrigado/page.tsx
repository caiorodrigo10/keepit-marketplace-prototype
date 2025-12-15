import { Metadata } from "next"
import ThankYouMessage from "@modules/hoster/components/thank-you-message"

export const metadata: Metadata = {
  title: "Solicitação Enviada com Sucesso | Keepit Brasil",
  description:
    "Sua solicitação para se tornar um parceiro Keepit foi recebida com sucesso. Nossa equipe entrará em contato em breve.",
}

export default async function ObrigadoPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; email?: string }>
}) {
  const params = await searchParams
  const establishmentName = params.name
  const email = params.email

  return (
    <ThankYouMessage
      establishmentName={establishmentName}
      email={email}
    />
  )
}
