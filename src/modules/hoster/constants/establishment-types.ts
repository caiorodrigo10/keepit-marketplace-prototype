// Establishment Types for Hoster registration

import { EstablishmentType } from "../types/hoster.types"

export const ESTABLISHMENT_TYPES: Array<{
  value: EstablishmentType
  label: string
}> = [
  { value: "university", label: "Universidade/Faculdade" },
  { value: "shopping", label: "Shopping Center" },
  { value: "hospital", label: "Hospital/Clínica" },
  { value: "residential", label: "Condomínio Residencial" },
  { value: "commercial", label: "Condomínio Comercial" },
  { value: "corporate", label: "Empresa/Corporativo" },
  { value: "other", label: "Outro" },
] as const
