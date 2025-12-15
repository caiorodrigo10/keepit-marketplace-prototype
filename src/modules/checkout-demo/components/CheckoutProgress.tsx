"use client"

import React from "react"
import {
  IoPersonOutline,
  IoPerson,
  IoLocationOutline,
  IoLocation,
  IoCardOutline,
  IoCard,
} from "react-icons/io5"

interface CheckoutProgressProps {
  currentStep: 1 | 2 | 3
}

const CheckoutProgress = ({ currentStep }: CheckoutProgressProps) => {
  const steps = [
    {
      id: 1,
      label: "Dados Pessoais",
      icon: IoPersonOutline,
      iconActive: IoPerson,
    },
    {
      id: 2,
      label: "Locker",
      icon: IoLocationOutline,
      iconActive: IoLocation,
    },
    {
      id: 3,
      label: "Pagamento",
      icon: IoCardOutline,
      iconActive: IoCard,
    },
  ]

  return (
    <div className="checkout-progress" style={{ padding: "2rem 0" }}>
      <div className="container mx-auto px-4">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {steps.map((step, index) => {
            const isActive = step.id === currentStep
            const isCompleted = step.id < currentStep
            const Icon = isActive || isCompleted ? step.iconActive : step.icon

            return (
              <React.Fragment key={step.id}>
                {/* Step Circle */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        isActive || isCompleted ? "#67FB94" : "#E0E0E0",
                      color: isActive || isCompleted ? "#1E1E1E" : "#9E9E9E",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      boxShadow:
                        isActive || isCompleted
                          ? "0 4px 12px rgba(103, 251, 148, 0.3)"
                          : "none",
                    }}
                  >
                    <Icon />
                  </div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: isActive ? "600" : "400",
                      color: isActive || isCompleted ? "#1E1E1E" : "#9E9E9E",
                      textAlign: "center",
                      maxWidth: "80px",
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: "3px",
                      backgroundColor:
                        step.id < currentStep ? "#67FB94" : "#E0E0E0",
                      margin: "0 1rem",
                      marginBottom: "2rem",
                      transition: "background-color 0.3s ease",
                      maxWidth: "120px",
                    }}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CheckoutProgress
