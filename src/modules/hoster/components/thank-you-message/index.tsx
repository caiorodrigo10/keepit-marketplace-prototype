"use client"

import React from "react"
import Link from "next/link"

interface ThankYouMessageProps {
  establishmentName?: string
  email?: string
}

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({
  establishmentName,
  email,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-keepit-gray-100 to-white flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full">
        <div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          data-aos="fade-up"
        >
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-keepit-green-primary bg-opacity-10 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-keepit-green-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-keepit-black mb-4">
            Obrigado pelo seu interesse!
          </h1>

          {/* Message */}
          <div className="space-y-4 mb-8">
            {establishmentName && (
              <p className="text-lg text-keepit-black">
                Recebemos sua solicitação para o estabelecimento{" "}
                <span className="font-semibold text-keepit-green-primary">
                  {establishmentName}
                </span>
                .
              </p>
            )}

            <p className="text-lg text-keepit-black">
              Nossa equipe entrará em contato{" "}
              {email && (
                <>
                  no email{" "}
                  <span className="font-semibold text-keepit-green-primary">{email}</span>
                </>
              )}{" "}
              em até <span className="font-semibold">2 dias úteis</span> para
              dar continuidade à parceria.
            </p>

            <p className="text-base text-keepit-gray-700">
              Enquanto isso, você pode conhecer mais sobre o Keepit e como
              nossos lockers inteligentes estão transformando a experiência de
              compra online.
            </p>
          </div>

          {/* Next Steps Box */}
          <div className="bg-keepit-gray-100 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-keepit-black mb-3">
              Próximos Passos:
            </h3>
            <ul className="space-y-2 text-sm text-keepit-gray-700">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-keepit-green-primary mr-2 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Nossa equipe analisará sua solicitação e verificará a
                  viabilidade da instalação
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-keepit-green-primary mr-2 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Você receberá um contato para agendar uma visita técnica (se
                  aprovado)
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-keepit-green-primary mr-2 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Assinatura do contrato de parceria e agendamento da instalação
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-keepit-green-primary rounded-lg hover:bg-keepit-green-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Voltar para Home
            </Link>

            <Link
              href="/seja-parceiro"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-keepit-green-primary bg-white border-2 border-keepit-green-primary rounded-lg hover:bg-keepit-green-primary hover:text-white transition-all duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Enviar Outra Solicitação
            </Link>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-keepit-gray-500 mt-8">
            Dúvidas? Entre em contato conosco através do email{" "}
            <a
              href="mailto:parceiros@keepit.com.br"
              className="text-keepit-green-primary hover:underline"
            >
              parceiros@keepit.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThankYouMessage
