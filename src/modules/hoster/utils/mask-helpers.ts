// Mask formatting helpers for Brazilian document formats

/**
 * Remove all non-digit characters from a string
 */
export function removeMask(value: string): string {
  return value.replace(/\D/g, "")
}

/**
 * Format CPF: XXX.XXX.XXX-XX
 */
export function formatCPF(value: string): string {
  const digits = removeMask(value)

  if (digits.length === 0) return ""
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
  if (digits.length <= 9)
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`

  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`
}

/**
 * Format CNPJ: XX.XXX.XXX/XXXX-XX
 */
export function formatCNPJ(value: string): string {
  const digits = removeMask(value)

  if (digits.length === 0) return ""
  if (digits.length <= 2) return digits
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`
  if (digits.length <= 8)
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`
  if (digits.length <= 12)
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`

  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`
}

/**
 * Format CEP: XXXXX-XXX
 */
export function formatCEP(value: string): string {
  const digits = removeMask(value)

  if (digits.length === 0) return ""
  if (digits.length <= 5) return digits

  return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`
}

/**
 * Format Phone: (XX) XXXXX-XXXX
 */
export function formatPhone(value: string): string {
  const digits = removeMask(value)

  if (digits.length === 0) return ""
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

/**
 * Apply mask based on mask type
 */
export function applyMask(
  value: string,
  maskType: "cpf" | "cnpj" | "cep" | "phone"
): string {
  switch (maskType) {
    case "cpf":
      return formatCPF(value)
    case "cnpj":
      return formatCNPJ(value)
    case "cep":
      return formatCEP(value)
    case "phone":
      return formatPhone(value)
    default:
      return value
  }
}
