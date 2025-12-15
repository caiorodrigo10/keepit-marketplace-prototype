// Validation helpers for Brazilian document formats

// Regex patterns for Brazilian formats
export const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
export const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
export const CEP_REGEX = /^\d{5}-\d{3}$/
export const PHONE_REGEX = /^\(\d{2}\) \d{5}-\d{4}$/
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Validates CPF format (XXX.XXX.XXX-XX)
 * Note: This only validates format, not if CPF is valid according to check digits
 */
export function validateCPF(cpf: string): boolean {
  if (!cpf) return false
  return CPF_REGEX.test(cpf)
}

/**
 * Validates CNPJ format (XX.XXX.XXX/XXXX-XX)
 * Note: This only validates format, not if CNPJ is valid according to check digits
 */
export function validateCNPJ(cnpj: string): boolean {
  if (!cnpj) return false
  return CNPJ_REGEX.test(cnpj)
}

/**
 * Validates CEP format (XXXXX-XXX)
 */
export function validateCEP(cep: string): boolean {
  if (!cep) return false
  return CEP_REGEX.test(cep)
}

/**
 * Validates phone format ((XX) XXXXX-XXXX)
 */
export function validatePhone(phone: string): boolean {
  if (!phone) return false
  return PHONE_REGEX.test(phone)
}

/**
 * Validates email format
 */
export function validateEmail(email: string): boolean {
  if (!email) return false
  return EMAIL_REGEX.test(email)
}

/**
 * Validates required field (not empty)
 */
export function validateRequired(value: string | undefined | null): boolean {
  return Boolean(value && value.trim().length > 0)
}

/**
 * Validates time format (HH:MM)
 */
export function validateTime(time: string): boolean {
  if (!time) return false
  const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/
  return timeRegex.test(time)
}
