"use client"

import React, { useState, useActionState } from "react"
import FormAccordion from "./form-accordion"
import EstablishmentSection from "./establishment-section"
import ResponsibleSection from "./responsible-section"
import ReviewSection from "./review-section"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { registerHoster } from "@lib/data/hoster"

const RegistrationForm = () => {
  const [message, formAction] = useActionState(registerHoster, null)
  const [currentSection, setCurrentSection] = useState<string>("establishment")

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F8F9FA' }} id="formulario">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E1E1E' }}>
              Cadastro de{" "}
              <span style={{ color: '#67FB94' }}>Parceiro</span>
            </h2>
            <p className="text-lg" style={{ color: '#4A4A4A' }}>
              Preencha em 2 minutos e nossa equipe entrará em contato
            </p>
          </div>

          {/* Form */}
          <form action={formAction} className="w-full" data-aos="fade-up" data-aos-delay="200">
            <FormAccordion
              type="single"
              value={currentSection}
              onValueChange={setCurrentSection}
              collapsible
            >
              <FormAccordion.Item
                value="establishment"
                title="1. Dados do Estabelecimento"
              >
                <EstablishmentSection />
              </FormAccordion.Item>

              <FormAccordion.Item
                value="responsible"
                title="2. Dados do Responsável"
              >
                <ResponsibleSection />
              </FormAccordion.Item>

              <FormAccordion.Item value="review" title="3. Revisão e Confirmação">
                <ReviewSection />
              </FormAccordion.Item>
            </FormAccordion>

            {/* Error Message */}
            {message && (
              <div className="mt-6">
                <ErrorMessage error={message} />
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <SubmitButton
                className="w-full md:w-auto min-w-[300px] font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: '#67FB94',
                  color: '#1E1E1E',
                  borderRadius: '8px'
                }}
              >
                Enviar Solicitação
              </SubmitButton>
            </div>

            {/* Info Footer */}
            <p className="text-center text-sm mt-6" style={{ color: '#9E9E9E' }}>
              Ao enviar, você concorda com nossos termos e nossa equipe entrará
              em contato em até 2 dias úteis
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm
