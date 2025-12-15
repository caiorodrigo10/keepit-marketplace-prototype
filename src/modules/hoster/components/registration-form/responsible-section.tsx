"use client"

import React from "react"
import Input from "@modules/common/components/input"
import MaskedInput from "@modules/common/components/masked-input"

const ResponsibleSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-keepit-gray-700 mb-4">
          Dados do Responsável
        </h4>
        <p className="text-sm text-keepit-gray-700 mb-6">
          Informações da pessoa responsável pelo estabelecimento que será o
          contato principal da parceria.
        </p>

        <div className="space-y-4">
          <Input
            label="Nome Completo"
            name="responsible_name"
            required
            autoComplete="name"
            placeholder="Ex: João da Silva Santos"
          />

          <MaskedInput
            label="CPF"
            name="responsible_cpf"
            maskType="cpf"
            required
            autoComplete="off"
            placeholder="000.000.000-00"
          />

          <Input
            label="Email"
            name="responsible_email"
            type="email"
            required
            autoComplete="email"
            placeholder="Ex: joao.silva@email.com"
          />

          <MaskedInput
            label="Telefone/WhatsApp"
            name="responsible_phone"
            maskType="phone"
            required
            autoComplete="tel"
            placeholder="(00) 00000-0000"
          />

          <Input
            label="Cargo/Função"
            name="responsible_position"
            required
            autoComplete="organization-title"
            placeholder="Ex: Gerente, Proprietário, Diretor"
          />
        </div>
      </div>
    </div>
  )
}

export default ResponsibleSection
