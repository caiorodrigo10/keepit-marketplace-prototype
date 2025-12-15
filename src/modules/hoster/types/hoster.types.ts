// Hoster Registration Types

export type EstablishmentType =
  | "university"
  | "shopping"
  | "hospital"
  | "residential"
  | "commercial"
  | "corporate"
  | "other"

export type WorkingHours = {
  opening: string // HH:MM format
  closing: string // HH:MM format
}

export interface Address {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface Establishment {
  name: string
  cnpj: string
  address: Address
  type: EstablishmentType
  typeOther?: string // Required if type === "other"
  workingHours: {
    weekdays: WorkingHours
    saturday: WorkingHours
    sunday: WorkingHours
    is24h: boolean
  }
}

export interface Responsible {
  name: string
  cpf: string
  email: string
  phone: string
  position: string
}

export interface HosterRegistrationData {
  establishment: Establishment
  responsible: Responsible
  timestamp?: Date
  status?: "pending_review"
}

// Form field names (for FormData)
export type EstablishmentFieldNames =
  | "establishment_name"
  | "establishment_cnpj"
  | "establishment_cep"
  | "establishment_street"
  | "establishment_number"
  | "establishment_complement"
  | "establishment_neighborhood"
  | "establishment_city"
  | "establishment_state"
  | "establishment_type"
  | "establishment_type_other"
  | "weekdays_opening"
  | "weekdays_closing"
  | "saturday_opening"
  | "saturday_closing"
  | "sunday_opening"
  | "sunday_closing"
  | "is_24h"

export type ResponsibleFieldNames =
  | "responsible_name"
  | "responsible_cpf"
  | "responsible_email"
  | "responsible_phone"
  | "responsible_position"

export type FormFieldNames = EstablishmentFieldNames | ResponsibleFieldNames | "agree_terms"
