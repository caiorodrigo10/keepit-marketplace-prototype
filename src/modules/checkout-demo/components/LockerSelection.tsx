"use client"

import React, { useState } from "react"
import {
  IoLocationOutline,
  IoTimeOutline,
  IoCheckmarkCircle,
} from "react-icons/io5"
import { mockLockers, type MockLocker } from "../data/mockLockers"
import LockerMap from "./LockerMap"

interface LockerSelectionProps {
  onNext: (locker: MockLocker) => void
  onBack: () => void
}

const LockerSelection = ({ onNext, onBack }: LockerSelectionProps) => {
  const [selectedLocker, setSelectedLocker] = useState<MockLocker | null>(null)

  const handleSelectLocker = (locker: MockLocker) => {
    setSelectedLocker(locker)
  }

  const handleConfirm = () => {
    if (selectedLocker) {
      onNext(selectedLocker)
    }
  }

  return (
    <div className="locker-selection" style={{ paddingBottom: "2rem" }}>
      <div className="container mx-auto px-4">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1E1E1E",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Escolha seu Locker Keepit
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#4A4A4A",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Selecione o locker mais próximo para retirar seu pedido
          </p>

          {/* Google Maps */}
          <div style={{ marginBottom: "2rem" }}>
            <LockerMap
              onLockerSelect={handleSelectLocker}
              selectedLockerId={selectedLocker?.id}
            />
          </div>

          {/* Lockers List */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {mockLockers.map((locker) => {
              const isSelected = selectedLocker?.id === locker.id
              const availabilityPercent =
                (locker.availableSlots / locker.totalSlots) * 100

              return (
                <div
                  key={locker.id}
                  onClick={() => handleSelectLocker(locker)}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "1rem",
                    padding: "1.25rem",
                    border: `2px solid ${isSelected ? "#67FB94" : "#E0E0E0"}`,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isSelected
                      ? "0 4px 12px rgba(103, 251, 148, 0.3)"
                      : "0 2px 8px rgba(0, 0, 0, 0.08)",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "#67FB94"
                      e.currentTarget.style.transform = "translateY(-2px)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "#E0E0E0"
                      e.currentTarget.style.transform = "translateY(0)"
                    }
                  }}
                >
                  {/* Selected Indicator */}
                  {isSelected && (
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                      }}
                    >
                      <IoCheckmarkCircle
                        style={{
                          fontSize: "1.75rem",
                          color: "#67FB94",
                        }}
                      />
                    </div>
                  )}

                  <div style={{ display: "grid", gap: "0.75rem" }}>
                    {/* Header */}
                    <div>
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "700",
                          color: "#1E1E1E",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {locker.name}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.875rem",
                          color: "#4A4A4A",
                        }}
                      >
                        <IoLocationOutline style={{ fontSize: "1rem" }} />
                        <span>{locker.address}</span>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: "1rem",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid #F1F1F1",
                      }}
                    >
                      {/* Distance */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "#9E9E9E",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Distância
                        </div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            color: "#1E1E1E",
                          }}
                        >
                          {locker.distance}
                        </div>
                      </div>

                      {/* Availability */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "#9E9E9E",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Disponibilidade
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: "600",
                              color:
                                availabilityPercent > 50
                                  ? "#34BF58"
                                  : availabilityPercent > 20
                                  ? "#F59E0B"
                                  : "#EF4444",
                            }}
                          >
                            {locker.availableSlots}/{locker.totalSlots}
                          </div>
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor:
                                availabilityPercent > 50
                                  ? "#34BF58"
                                  : availabilityPercent > 20
                                  ? "#F59E0B"
                                  : "#EF4444",
                            }}
                          />
                        </div>
                      </div>

                      {/* Opening Hours */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "#9E9E9E",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Horário
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            color: "#1E1E1E",
                          }}
                        >
                          <IoTimeOutline />
                          {locker.openingHours}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
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
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#9E9E9E"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E0E0E0"
              }}
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!selectedLocker}
              style={{
                padding: "1rem",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: selectedLocker ? "#67FB94" : "#E0E0E0",
                color: selectedLocker ? "#1E1E1E" : "#9E9E9E",
                border: "none",
                borderRadius: "8px",
                cursor: selectedLocker ? "pointer" : "not-allowed",
                transition: "all 0.3s ease",
                boxShadow: selectedLocker
                  ? "0 4px 12px rgba(103, 251, 148, 0.3)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (selectedLocker) {
                  e.currentTarget.style.backgroundColor = "#34BF58"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }
              }}
              onMouseLeave={(e) => {
                if (selectedLocker) {
                  e.currentTarget.style.backgroundColor = "#67FB94"
                  e.currentTarget.style.transform = "translateY(0)"
                }
              }}
            >
              Continuar para Pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LockerSelection
