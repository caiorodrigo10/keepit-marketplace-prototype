"use client"

import React, { useState } from "react"
import { IoMailOutline, IoPersonOutline, IoCallOutline } from "react-icons/io5"

interface PersonalDataFormProps {
  onNext: (data: PersonalData) => void
}

export interface PersonalData {
  name: string
  email: string
  cpf: string
  phone: string
}

const PersonalDataForm = ({ onNext }: PersonalDataFormProps) => {
  const [formData, setFormData] = useState<PersonalData>({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  })

  const [errors, setErrors] = useState<Partial<PersonalData>>({})

  // CPF Formatting and Validation
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }
    return value
  }

  const validateCPF = (cpf: string): boolean => {
    const numbers = cpf.replace(/\D/g, "")
    if (numbers.length !== 11) return false

    // Basic CPF validation (check if all digits are the same)
    if (/^(\d)\1{10}$/.test(numbers)) return false

    // Validate first digit
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(numbers.charAt(i)) * (10 - i)
    }
    let digit = 11 - (sum % 11)
    if (digit >= 10) digit = 0
    if (digit !== parseInt(numbers.charAt(9))) return false

    // Validate second digit
    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(numbers.charAt(i)) * (11 - i)
    }
    digit = 11 - (sum % 11)
    if (digit >= 10) digit = 0
    if (digit !== parseInt(numbers.charAt(10))) return false

    return true
  }

  // Phone Formatting
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
    }
    return value
  }

  const handleChange = (field: keyof PersonalData, value: string) => {
    let formattedValue = value

    if (field === "cpf") {
      formattedValue = formatCPF(value)
    } else if (field === "phone") {
      formattedValue = formatPhone(value)
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }))

    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<PersonalData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome completo é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.cpf.trim()) {
      newErrors.cpf = "CPF é obrigatório"
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = "CPF inválido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório"
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Telefone inválido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onNext(formData)
    }
  }

  return (
    <div className="personal-data-form">
      <div className="container mx-auto px-4" style={{ maxWidth: "600px" }}>
        <div
          className="form-card"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1E1E1E",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Dados Pessoais
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#4A4A4A",
                  marginBottom: "0.5rem",
                }}
              >
                Nome Completo
              </label>
              <div style={{ position: "relative" }}>
                <IoPersonOutline
                  style={{
                    position: "absolute",
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9E9E9E",
                    fontSize: "1.25rem",
                  }}
                />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Digite seu nome completo"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 3rem",
                    fontSize: "0.875rem",
                    border: `1px solid ${errors.name ? "#EF4444" : "#E0E0E0"}`,
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => {
                    if (!errors.name) e.target.style.borderColor = "#67FB94"
                  }}
                  onBlur={(e) => {
                    if (!errors.name) e.target.style.borderColor = "#E0E0E0"
                  }}
                />
              </div>
              {errors.name && (
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#EF4444",
                    marginTop: "0.25rem",
                  }}
                >
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#4A4A4A",
                  marginBottom: "0.5rem",
                }}
              >
                E-mail
              </label>
              <div style={{ position: "relative" }}>
                <IoMailOutline
                  style={{
                    position: "absolute",
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9E9E9E",
                    fontSize: "1.25rem",
                  }}
                />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 3rem",
                    fontSize: "0.875rem",
                    border: `1px solid ${errors.email ? "#EF4444" : "#E0E0E0"}`,
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => {
                    if (!errors.email) e.target.style.borderColor = "#67FB94"
                  }}
                  onBlur={(e) => {
                    if (!errors.email) e.target.style.borderColor = "#E0E0E0"
                  }}
                />
              </div>
              {errors.email && (
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#EF4444",
                    marginTop: "0.25rem",
                  }}
                >
                  {errors.email}
                </span>
              )}
            </div>

            {/* CPF Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="cpf"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#4A4A4A",
                  marginBottom: "0.5rem",
                }}
              >
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                value={formData.cpf}
                onChange={(e) => handleChange("cpf", e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  fontSize: "0.875rem",
                  border: `1px solid ${errors.cpf ? "#EF4444" : "#E0E0E0"}`,
                  borderRadius: "8px",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => {
                  if (!errors.cpf) e.target.style.borderColor = "#67FB94"
                }}
                onBlur={(e) => {
                  if (!errors.cpf) e.target.style.borderColor = "#E0E0E0"
                }}
              />
              {errors.cpf && (
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#EF4444",
                    marginTop: "0.25rem",
                  }}
                >
                  {errors.cpf}
                </span>
              )}
            </div>

            {/* Phone Field */}
            <div style={{ marginBottom: "2rem" }}>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#4A4A4A",
                  marginBottom: "0.5rem",
                }}
              >
                Telefone
              </label>
              <div style={{ position: "relative" }}>
                <IoCallOutline
                  style={{
                    position: "absolute",
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9E9E9E",
                    fontSize: "1.25rem",
                  }}
                />
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 3rem",
                    fontSize: "0.875rem",
                    border: `1px solid ${errors.phone ? "#EF4444" : "#E0E0E0"}`,
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => {
                    if (!errors.phone) e.target.style.borderColor = "#67FB94"
                  }}
                  onBlur={(e) => {
                    if (!errors.phone) e.target.style.borderColor = "#E0E0E0"
                  }}
                />
              </div>
              {errors.phone && (
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#EF4444",
                    marginTop: "0.25rem",
                  }}
                >
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "#67FB94",
                color: "#1E1E1E",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(103, 251, 148, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#34BF58"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#67FB94"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Continuar para Seleção de Locker
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PersonalDataForm
