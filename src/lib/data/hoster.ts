"use server"

import { redirect } from "next/navigation"
import type { HosterRegistrationData } from "@modules/hoster/types/hoster.types"
import {
  validateCPF,
  validateCNPJ,
  validateCEP,
  validatePhone,
  validateEmail,
  validateRequired,
} from "@modules/hoster/utils/validation-helpers"

export async function registerHoster(
  _currentState: unknown,
  formData: FormData
): Promise<string | null> {
  // Extract form data
  const establishment_name = formData.get("establishment_name") as string
  const establishment_cnpj = formData.get("establishment_cnpj") as string
  const establishment_cep = formData.get("establishment_cep") as string
  const establishment_street = formData.get("establishment_street") as string
  const establishment_number = formData.get("establishment_number") as string
  const establishment_complement = formData.get(
    "establishment_complement"
  ) as string
  const establishment_neighborhood = formData.get(
    "establishment_neighborhood"
  ) as string
  const establishment_city = formData.get("establishment_city") as string
  const establishment_state = formData.get("establishment_state") as string
  const establishment_type = formData.get("establishment_type") as string
  const establishment_type_other = formData.get(
    "establishment_type_other"
  ) as string

  const weekdays_opening = formData.get("weekdays_opening") as string
  const weekdays_closing = formData.get("weekdays_closing") as string
  const saturday_opening = formData.get("saturday_opening") as string
  const saturday_closing = formData.get("saturday_closing") as string
  const sunday_opening = formData.get("sunday_opening") as string
  const sunday_closing = formData.get("sunday_closing") as string
  const is_24h = formData.get("is_24h") === "on"

  const responsible_name = formData.get("responsible_name") as string
  const responsible_cpf = formData.get("responsible_cpf") as string
  const responsible_email = formData.get("responsible_email") as string
  const responsible_phone = formData.get("responsible_phone") as string
  const responsible_position = formData.get("responsible_position") as string

  const agree_terms = formData.get("agree_terms") === "on"

  // Validations
  if (!validateRequired(establishment_name)) {
    return "Nome do estabelecimento é obrigatório"
  }

  if (!validateRequired(establishment_cnpj)) {
    return "CNPJ é obrigatório"
  }

  // Validate CNPJ format (only format, not check digit validation)
  if (!validateCNPJ(establishment_cnpj)) {
    return "CNPJ inválido. Use o formato: XX.XXX.XXX/XXXX-XX"
  }

  if (!validateRequired(establishment_cep)) {
    return "CEP é obrigatório"
  }

  if (!validateCEP(establishment_cep)) {
    return "CEP inválido. Use o formato: XXXXX-XXX"
  }

  if (
    !validateRequired(establishment_street) ||
    !validateRequired(establishment_number) ||
    !validateRequired(establishment_neighborhood) ||
    !validateRequired(establishment_city) ||
    !validateRequired(establishment_state)
  ) {
    return "Todos os campos de endereço são obrigatórios"
  }

  if (!validateRequired(establishment_type)) {
    return "Tipo de estabelecimento é obrigatório"
  }

  if (
    establishment_type === "other" &&
    !validateRequired(establishment_type_other)
  ) {
    return "Por favor, especifique o tipo de estabelecimento"
  }

  // Validate working hours (unless 24h)
  if (!is_24h) {
    if (
      !validateRequired(weekdays_opening) ||
      !validateRequired(weekdays_closing) ||
      !validateRequired(saturday_opening) ||
      !validateRequired(saturday_closing) ||
      !validateRequired(sunday_opening) ||
      !validateRequired(sunday_closing)
    ) {
      return "Todos os horários de funcionamento são obrigatórios"
    }
  }

  if (!validateRequired(responsible_name)) {
    return "Nome do responsável é obrigatório"
  }

  if (!validateRequired(responsible_cpf)) {
    return "CPF do responsável é obrigatório"
  }

  if (!validateCPF(responsible_cpf)) {
    return "CPF inválido. Use o formato: XXX.XXX.XXX-XX"
  }

  if (!validateRequired(responsible_email)) {
    return "Email do responsável é obrigatório"
  }

  if (!validateEmail(responsible_email)) {
    return "Email inválido"
  }

  if (!validateRequired(responsible_phone)) {
    return "Telefone do responsável é obrigatório"
  }

  if (!validatePhone(responsible_phone)) {
    return "Telefone inválido. Use o formato: (XX) XXXXX-XXXX"
  }

  if (!validateRequired(responsible_position)) {
    return "Cargo/Função do responsável é obrigatório"
  }

  if (!agree_terms) {
    return "Você precisa concordar com os Termos de Parceria para continuar"
  }

  // Build registration data object
  const registrationData: HosterRegistrationData = {
    establishment: {
      name: establishment_name,
      cnpj: establishment_cnpj,
      address: {
        zipCode: establishment_cep,
        street: establishment_street,
        number: establishment_number,
        complement: establishment_complement || undefined,
        neighborhood: establishment_neighborhood,
        city: establishment_city,
        state: establishment_state,
      },
      type: establishment_type as any,
      typeOther:
        establishment_type === "other" ? establishment_type_other : undefined,
      workingHours: {
        weekdays: {
          opening: is_24h ? "00:00" : weekdays_opening,
          closing: is_24h ? "23:59" : weekdays_closing,
        },
        saturday: {
          opening: is_24h ? "00:00" : saturday_opening,
          closing: is_24h ? "23:59" : saturday_closing,
        },
        sunday: {
          opening: is_24h ? "00:00" : sunday_opening,
          closing: is_24h ? "23:59" : sunday_closing,
        },
        is24h: is_24h,
      },
    },
    responsible: {
      name: responsible_name,
      cpf: responsible_cpf,
      email: responsible_email,
      phone: responsible_phone,
      position: responsible_position,
    },
    timestamp: new Date(),
    status: "pending_review",
  }

  // TODO: Enviar para backend real quando disponível
  // registrationData contém todos os dados do formulário

  // Simulate delay (mock API call)
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Redirect to thank you page
  redirect(
    `/seja-parceiro/obrigado?name=${encodeURIComponent(establishment_name)}&email=${encodeURIComponent(responsible_email)}`
  )
}
