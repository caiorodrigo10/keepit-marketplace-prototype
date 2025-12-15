"use client"

import React, { useState } from "react"
import {
  IoCardOutline,
  IoQrCodeOutline,
  IoLockClosedOutline,
  IoWarningOutline,
} from "react-icons/io5"

interface PaymentMethodProps {
  subtotal: number
  onNext: (paymentData: PaymentData) => void
  onBack: () => void
}

export interface PaymentData {
  method: "credit_card" | "pix"
  cardNumber?: string
  cardName?: string
  cardExpiry?: string
  cardCvv?: string
}

const PaymentMethod = ({ subtotal, onNext, onBack }: PaymentMethodProps) => {
  const [selectedMethod, setSelectedMethod] = useState<
    "credit_card" | "pix" | null
  >(null)
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  })

  // Calculate service fee (3.99%)
  const serviceFee = subtotal * 0.0399
  const total = subtotal + serviceFee

  // Format card number
  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    return numbers
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .substring(0, 19)
  }

  // Format expiry date
  const formatExpiry = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length >= 2) {
      return numbers.substring(0, 2) + "/" + numbers.substring(2, 4)
    }
    return numbers
  }

  const handleCardChange = (field: string, value: string) => {
    let formattedValue = value

    if (field === "number") {
      formattedValue = formatCardNumber(value)
    } else if (field === "expiry") {
      formattedValue = formatExpiry(value)
    } else if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "").substring(0, 4)
    }

    setCardData((prev) => ({ ...prev, [field]: formattedValue }))
  }

  const handleConfirm = () => {
    if (selectedMethod === "credit_card") {
      onNext({
        method: "credit_card",
        cardNumber: cardData.number,
        cardName: cardData.name,
        cardExpiry: cardData.expiry,
        cardCvv: cardData.cvv,
      })
    } else if (selectedMethod === "pix") {
      onNext({
        method: "pix",
      })
    }
  }

  const isFormValid = () => {
    if (selectedMethod === "credit_card") {
      return (
        cardData.number.replace(/\D/g, "").length >= 13 &&
        cardData.name.trim().length > 0 &&
        cardData.expiry.length === 5 &&
        cardData.cvv.length >= 3
      )
    }
    return selectedMethod === "pix"
  }

  return (
    <div className="payment-method" style={{ paddingBottom: "2rem" }}>
      <div className="container mx-auto px-4">
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1E1E1E",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Pagamento
          </h2>

          {/* Order Summary */}
          <div
            style={{
              backgroundColor: "#F8F9FA",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "2rem",
              border: "1px solid #E0E0E0",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#1E1E1E",
                marginBottom: "1rem",
              }}
            >
              Resumo do Pedido
            </h3>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.875rem",
                  color: "#4A4A4A",
                }}
              >
                <span>Subtotal</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(subtotal)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.875rem",
                  color: "#4A4A4A",
                }}
              >
                <span>Taxa de serviço (3,99%)</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(serviceFee)}
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid #E0E0E0",
                  paddingTop: "0.75rem",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.125rem",
                  fontWeight: "700",
                  color: "#1E1E1E",
                }}
              >
                <span>Total</span>
                <span style={{ color: "#34BF58" }}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#1E1E1E",
                marginBottom: "1rem",
              }}
            >
              Escolha a forma de pagamento
            </h3>

            <div style={{ display: "grid", gap: "1rem" }}>
              {/* Credit Card Option */}
              <div
                onClick={() => setSelectedMethod("credit_card")}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  border: `2px solid ${selectedMethod === "credit_card" ? "#67FB94" : "#E0E0E0"}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    selectedMethod === "credit_card"
                      ? "0 4px 12px rgba(103, 251, 148, 0.3)"
                      : "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#E8F9ED",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IoCardOutline
                      style={{ fontSize: "1.5rem", color: "#34BF58" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#1E1E1E",
                      }}
                    >
                      Cartão de Crédito
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#9E9E9E" }}>
                      Mockup - Aceita qualquer entrada
                    </div>
                  </div>
                </div>
              </div>

              {/* PIX Option */}
              <div
                onClick={() => setSelectedMethod("pix")}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  border: `2px solid ${selectedMethod === "pix" ? "#67FB94" : "#E0E0E0"}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    selectedMethod === "pix"
                      ? "0 4px 12px rgba(103, 251, 148, 0.3)"
                      : "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#E8F9ED",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IoQrCodeOutline
                      style={{ fontSize: "1.5rem", color: "#34BF58" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#1E1E1E",
                      }}
                    >
                      PIX
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#9E9E9E" }}>
                      Mockup - QR Code de demonstração
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Card Form */}
          {selectedMethod === "credit_card" && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "2rem",
                border: "1px solid #E0E0E0",
              }}
            >
              {/* Demo Warning */}
              <div
                style={{
                  backgroundColor: "#FEF3C7",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IoWarningOutline style={{ color: "#F59E0B", fontSize: "1.25rem" }} />
                <span style={{ fontSize: "0.75rem", color: "#92400E" }}>
                  Interface mockup - Aceita qualquer entrada de dados
                </span>
              </div>

              <div style={{ display: "grid", gap: "1.25rem" }}>
                {/* Card Number */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#4A4A4A",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    value={cardData.number}
                    onChange={(e) => handleCardChange("number", e.target.value)}
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      fontSize: "0.875rem",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Card Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#4A4A4A",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Nome no Cartão
                  </label>
                  <input
                    type="text"
                    value={cardData.name}
                    onChange={(e) =>
                      handleCardChange("name", e.target.value.toUpperCase())
                    }
                    placeholder="NOME COMO ESTÁ NO CARTÃO"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      fontSize: "0.875rem",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                      outline: "none",
                      textTransform: "uppercase",
                    }}
                  />
                </div>

                {/* Expiry and CVV */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#4A4A4A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Validade
                    </label>
                    <input
                      type="text"
                      value={cardData.expiry}
                      onChange={(e) => handleCardChange("expiry", e.target.value)}
                      placeholder="MM/AA"
                      maxLength={5}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        fontSize: "0.875rem",
                        border: "1px solid #E0E0E0",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#4A4A4A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cardData.cvv}
                      onChange={(e) => handleCardChange("cvv", e.target.value)}
                      placeholder="000"
                      maxLength={4}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        fontSize: "0.875rem",
                        border: "1px solid #E0E0E0",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  color: "#9E9E9E",
                  fontSize: "0.75rem",
                }}
              >
                <IoLockClosedOutline />
                <span>Mockup - Dados não serão processados</span>
              </div>
            </div>
          )}

          {/* PIX Instructions */}
          {selectedMethod === "pix" && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "2rem",
                border: "1px solid #E0E0E0",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F1F1F1",
                  borderRadius: "8px",
                  padding: "2rem",
                  marginBottom: "1rem",
                }}
              >
                <IoQrCodeOutline
                  style={{
                    fontSize: "4rem",
                    color: "#9E9E9E",
                    marginBottom: "1rem",
                  }}
                />
                <p style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                  QR Code PIX Mockup
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#9E9E9E",
                    marginTop: "0.5rem",
                  }}
                >
                  Interface de demonstração
                </p>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                Na versão real, o QR Code PIX apareceria aqui para pagamento
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "1rem",
            }}
          >
            <button
              type="button"
              onClick={onBack}
              style={{
                padding: "1rem",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "#FFFFFF",
                color: "#4A4A4A",
                border: "2px solid #E0E0E0",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!isFormValid()}
              style={{
                padding: "1rem",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: isFormValid() ? "#67FB94" : "#E0E0E0",
                color: isFormValid() ? "#1E1E1E" : "#9E9E9E",
                border: "none",
                borderRadius: "8px",
                cursor: isFormValid() ? "pointer" : "not-allowed",
                transition: "all 0.3s ease",
                boxShadow: isFormValid()
                  ? "0 4px 12px rgba(103, 251, 148, 0.3)"
                  : "none",
              }}
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
