"use client"

import React, { useState } from "react"
import CheckoutProgress from "@modules/checkout-demo/components/CheckoutProgress"
import PersonalDataForm, {
  type PersonalData,
} from "@modules/checkout-demo/components/PersonalDataForm"
import LockerSelection from "@modules/checkout-demo/components/LockerSelection"
import PaymentMethod, {
  type PaymentData,
} from "@modules/checkout-demo/components/PaymentMethod"
import OrderSuccess from "@modules/checkout-demo/components/OrderSuccess"
import type { MockLocker } from "@modules/checkout-demo/data/mockLockers"

type CheckoutStep = 1 | 2 | 3 | "success"

const CheckoutDemoPage = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(1)
  const [personalData, setPersonalData] = useState<PersonalData | null>(null)
  const [selectedLocker, setSelectedLocker] = useState<MockLocker | null>(null)
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)

  // Mock cart data - in production this would come from cart context
  const mockSubtotal = 150.00 // R$ 150.00
  const mockOrderNumber = `KPT-${Date.now().toString().slice(-8)}`

  const handlePersonalDataSubmit = (data: PersonalData) => {
    setPersonalData(data)
    setCurrentStep(2)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLockerSelect = (locker: MockLocker) => {
    setSelectedLocker(locker)
    setCurrentStep(3)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePaymentSubmit = (data: PaymentData) => {
    setPaymentData(data)
    setCurrentStep("success")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackToPersonalData = () => {
    setCurrentStep(1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackToLocker = () => {
    setCurrentStep(2)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Calculate totals
  const serviceFee = mockSubtotal * 0.0399
  const total = mockSubtotal + serviceFee

  return (
    <div className="checkout-demo-page" style={{ backgroundColor: "#F8F9FA" }}>
      {/* Progress Bar - Visible during steps 1, 2, 3 */}
      {currentStep !== "success" && (
        <CheckoutProgress currentStep={currentStep as 1 | 2 | 3} />
      )}

      {/* Step Content */}
      <div style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
        {/* Step 1: Personal Data */}
        {currentStep === 1 && (
          <PersonalDataForm onNext={handlePersonalDataSubmit} />
        )}

        {/* Step 2: Locker Selection */}
        {currentStep === 2 && (
          <LockerSelection
            onNext={handleLockerSelect}
            onBack={handleBackToPersonalData}
          />
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && (
          <PaymentMethod
            subtotal={mockSubtotal}
            onNext={handlePaymentSubmit}
            onBack={handleBackToLocker}
          />
        )}

        {/* Success Page */}
        {currentStep === "success" && personalData && selectedLocker && paymentData && (
          <OrderSuccess
            orderNumber={mockOrderNumber}
            personalData={personalData}
            locker={selectedLocker}
            total={total}
            paymentMethod={paymentData.method}
          />
        )}
      </div>
    </div>
  )
}

export default CheckoutDemoPage
