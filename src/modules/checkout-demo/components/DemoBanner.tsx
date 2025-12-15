"use client"

import React from "react"
import { IoWarningOutline } from "react-icons/io5"

const DemoBanner = () => {
  return (
    <div
      className="demo-banner"
      style={{
        backgroundColor: "#FEF3C7",
        borderBottom: "2px solid #F59E0B",
        padding: "0.75rem 1rem",
        textAlign: "center",
      }}
    >
      <div className="container mx-auto">
        <div
          className="demo-banner__content"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            color: "#92400E",
            fontSize: "0.875rem",
            fontWeight: "600",
          }}
        >
          <IoWarningOutline
            style={{ fontSize: "1.25rem", color: "#F59E0B" }}
          />
          <span>
            DEMONSTRAÇÃO - Este checkout é apenas uma interface mockup. Nenhum
            pagamento real será processado.
          </span>
        </div>
      </div>
    </div>
  )
}

export default DemoBanner
