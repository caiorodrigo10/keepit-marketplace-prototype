"use client"

import React from "react"
import Checkbox from "@modules/common/components/checkbox"

const ReviewSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-keepit-gray-700 mb-4">
          Revisão e Confirmação
        </h4>
        <p className="text-sm text-keepit-gray-700 mb-6">
          Revise as informações preenchidas nas seções anteriores antes de
          enviar sua solicitação.
        </p>

        {/* Info Alert */}
        <div className="bg-keepit-green-primary bg-opacity-10 border border-keepit-green-primary rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-keepit-green-primary mt-0.5 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm text-keepit-black">
              <p className="font-semibold mb-1">
                Verifique seus dados antes de enviar
              </p>
              <p>
                Volte às seções anteriores caso precise fazer alguma alteração.
                Nossa equipe entrará em contato em até 2 dias úteis após o
                envio.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="border border-keepit-gray-300 rounded-lg p-6 bg-keepit-gray-100">
          <div className="space-y-4">
            <Checkbox
              label={
                <span className="text-sm text-keepit-gray-700">
                  Li e concordo com os{" "}
                  <a
                    href="#"
                    className="text-keepit-green-primary hover:opacity-90 underline font-medium"
                    onClick={(e) => e.preventDefault()}
                  >
                    Termos de Parceria
                  </a>{" "}
                  da Keepit Brasil
                </span>
              }
              name="agree_terms"
              required
            />

            <p className="text-xs text-keepit-gray-500 leading-relaxed">
              Ao aceitar os termos, você concorda que a Keepit Brasil entre em
              contato com você através do email e telefone fornecidos para dar
              seguimento ao processo de parceria. Seus dados serão tratados de
              acordo com nossa Política de Privacidade.
            </p>
          </div>
        </div>

        {/* Summary placeholder - will be enhanced later */}
        <div className="mt-6 p-4 bg-white border border-keepit-gray-300 rounded-lg">
          <p className="text-sm text-keepit-gray-700 italic">
            💡 Dica: Certifique-se de que todos os campos obrigatórios (*) foram
            preenchidos corretamente antes de enviar.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
