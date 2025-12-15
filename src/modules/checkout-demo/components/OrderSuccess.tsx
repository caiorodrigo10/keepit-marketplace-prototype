"use client"

import React from "react"
import {
  IoCheckmarkCircleOutline,
  IoQrCodeOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoCalendarOutline,
  IoMailOutline,
  IoDownloadOutline,
} from "react-icons/io5"
import type { MockLocker } from "../data/mockLockers"
import type { PersonalData } from "./PersonalDataForm"

interface OrderSuccessProps {
  orderNumber: string
  personalData: PersonalData
  locker: MockLocker
  total: number
  paymentMethod: "credit_card" | "pix"
}

const OrderSuccess = ({
  orderNumber,
  personalData,
  locker,
  total,
  paymentMethod,
}: OrderSuccessProps) => {
  const pickupDeadline = new Date()
  pickupDeadline.setDate(pickupDeadline.getDate() + 3) // 3 days from now

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="order-success" style={{ paddingBottom: "3rem" }}>
      <div className="container mx-auto px-4">
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {/* Success Icon */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#E8F9ED",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
              }}
            >
              <IoCheckmarkCircleOutline
                style={{
                  fontSize: "3rem",
                  color: "#34BF58",
                }}
              />
            </div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: "0.5rem",
              }}
            >
              Pedido Confirmado!
            </h1>
            <p style={{ fontSize: "1rem", color: "#4A4A4A" }}>
              Pedido #{orderNumber}
            </p>
          </div>

          {/* Demo Warning */}
          <div
            style={{
              backgroundColor: "#FEF3C7",
              borderRadius: "1rem",
              padding: "1rem",
              marginBottom: "2rem",
              textAlign: "center",
              border: "2px solid #F59E0B",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "#92400E", fontWeight: "600" }}>
              ⚠️ DEMONSTRAÇÃO - Este é um pedido mockup e não será processado
            </p>
          </div>

          {/* QR Code Section */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "1rem",
              padding: "2rem",
              marginBottom: "2rem",
              border: "2px solid #67FB94",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: "1.5rem",
              }}
            >
              Seu QR Code de Retirada
            </h2>

            {/* Mock QR Code */}
            <div
              style={{
                backgroundColor: "#F1F1F1",
                borderRadius: "12px",
                padding: "2rem",
                marginBottom: "1.5rem",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #E0E0E0",
                }}
              >
                <IoQrCodeOutline
                  style={{
                    fontSize: "8rem",
                    color: "#9E9E9E",
                  }}
                />
              </div>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.75rem",
                  color: "#9E9E9E",
                  fontWeight: "600",
                }}
              >
                QR CODE MOCKUP
              </p>
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                color: "#4A4A4A",
                marginBottom: "1rem",
              }}
            >
              Use este QR Code no locker para retirar seu pedido
            </p>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: "600",
                backgroundColor: "#67FB94",
                color: "#1E1E1E",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#34BF58"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#67FB94"
              }}
            >
              <IoDownloadOutline style={{ fontSize: "1.25rem" }} />
              Baixar QR Code (Mockup)
            </button>
          </div>

          {/* Locker Information */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "2rem",
              border: "1px solid #E0E0E0",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: "1.5rem",
              }}
            >
              Local de Retirada
            </h3>

            <div style={{ display: "grid", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <IoLocationOutline
                  style={{
                    fontSize: "1.5rem",
                    color: "#67FB94",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#1E1E1E",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {locker.name}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                    {locker.address}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <IoTimeOutline
                  style={{
                    fontSize: "1.5rem",
                    color: "#67FB94",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#1E1E1E",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Horário de Funcionamento
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                    {locker.openingHours}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <IoCalendarOutline
                  style={{
                    fontSize: "1.5rem",
                    color: "#67FB94",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#1E1E1E",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Prazo de Retirada
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                    Até {formatDate(pickupDeadline)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "2rem",
              border: "1px solid #E0E0E0",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: "1.5rem",
              }}
            >
              Detalhes do Pedido
            </h3>

            <div style={{ display: "grid", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #F1F1F1",
                }}
              >
                <span style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                  Número do Pedido
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#1E1E1E",
                  }}
                >
                  #{orderNumber}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #F1F1F1",
                }}
              >
                <span style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                  Forma de Pagamento
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#1E1E1E",
                  }}
                >
                  {paymentMethod === "credit_card" ? "Cartão de Crédito" : "PIX"}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #F1F1F1",
                }}
              >
                <span style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                  Total Pago
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#34BF58",
                  }}
                >
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </span>
              </div>

              <div style={{ display: "flex", gap: "1rem", paddingTop: "0.5rem" }}>
                <IoMailOutline
                  style={{
                    fontSize: "1.25rem",
                    color: "#67FB94",
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                />
                <div style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                  Enviamos a confirmação do pedido e o QR Code para{" "}
                  <strong>{personalData.email}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div
            style={{
              backgroundColor: "#E8F9ED",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: "1rem",
              }}
            >
              Como Retirar seu Pedido
            </h3>
            <ol
              style={{
                paddingLeft: "1.25rem",
                display: "grid",
                gap: "0.75rem",
              }}
            >
              <li style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                Vá até o locker <strong>{locker.name}</strong>
              </li>
              <li style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                Aproxime seu QR Code do leitor no locker
              </li>
              <li style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                O compartimento será aberto automaticamente
              </li>
              <li style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>
                Retire seu pedido e feche o compartimento
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
            }}
          >
            <button
              onClick={() => (window.location.href = "/inicio")}
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
              Continuar Comprando
            </button>

            <button
              onClick={() => (window.location.href = "/account")}
              style={{
                width: "100%",
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
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#9E9E9E"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E0E0E0"
              }}
            >
              Ver Meus Pedidos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
