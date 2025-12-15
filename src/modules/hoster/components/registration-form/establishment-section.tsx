"use client"

import React, { useState } from "react"
import Input from "@modules/common/components/input"
import MaskedInput from "@modules/common/components/masked-input"
import TimeInput from "@modules/common/components/time-input"
import NativeSelect from "@modules/common/components/native-select"
import Checkbox from "@modules/common/components/checkbox"
import { BRAZILIAN_STATES } from "@modules/hoster/constants/brazilian-states"
import { ESTABLISHMENT_TYPES } from "@modules/hoster/constants/establishment-types"

const EstablishmentSection = () => {
  const [selectedType, setSelectedType] = useState("")
  const [is24h, setIs24h] = useState(false)

  return (
    <div className="space-y-6">
      {/* Dados Básicos */}
      <div>
        <h4 className="text-sm font-semibold text-keepit-gray-700 mb-4">
          Informações Básicas
        </h4>
        <div className="space-y-4">
          <Input
            label="Nome do Estabelecimento"
            name="establishment_name"
            required
            autoComplete="organization"
            placeholder="Ex: Padaria Pão Quente"
          />

          <MaskedInput
            label="CNPJ"
            name="establishment_cnpj"
            maskType="cnpj"
            required
            autoComplete="off"
            placeholder="00.000.000/0000-00"
          />
        </div>
      </div>

      {/* Endereço */}
      <div>
        <h4 className="text-sm font-semibold text-keepit-gray-700 mb-4">Endereço</h4>
        <div className="space-y-4">
          <MaskedInput
            label="CEP"
            name="establishment_cep"
            maskType="cep"
            required
            autoComplete="postal-code"
            placeholder="00000-000"
          />

          <Input
            label="Rua/Avenida"
            name="establishment_street"
            required
            autoComplete="address-line1"
            placeholder="Ex: Avenida Paulista"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Número"
              name="establishment_number"
              required
              autoComplete="off"
              placeholder="Ex: 1578"
            />
            <Input
              label="Complemento"
              name="establishment_complement"
              autoComplete="address-line2"
              placeholder="Ex: Loja 5, Bloco A"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Bairro"
              name="establishment_neighborhood"
              required
              autoComplete="off"
              placeholder="Ex: Bela Vista"
            />
            <NativeSelect
              name="establishment_state"
              placeholder="Selecione o estado"
              required
            >
              <option value="">Selecione o estado</option>
              {BRAZILIAN_STATES.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </NativeSelect>
          </div>

          <Input
            label="Cidade"
            name="establishment_city"
            required
            autoComplete="address-level2"
            placeholder="Ex: São Paulo"
          />
        </div>
      </div>

      {/* Tipo de Estabelecimento */}
      <div>
        <h4 className="text-sm font-semibold text-keepit-gray-700 mb-4">
          Tipo de Estabelecimento
        </h4>
        <div className="space-y-4">
          <NativeSelect
            name="establishment_type"
            placeholder="Selecione o tipo"
            required
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Selecione o tipo</option>
            {ESTABLISHMENT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </NativeSelect>

          {selectedType === "other" && (
            <Input
              label="Especifique o tipo de estabelecimento"
              name="establishment_type_other"
              required
              placeholder="Ex: Academia, Coworking, etc."
            />
          )}
        </div>
      </div>

      {/* Horário de Funcionamento */}
      <div>
        <h4 className="text-sm font-semibold text-keepit-gray-700 mb-4">
          Horário de Funcionamento
        </h4>

        <div className="space-y-4">
          {/* Checkbox 24h */}
          <div className="mb-4">
            <Checkbox
              label="Funciona 24 horas"
              name="is_24h"
              checked={is24h}
              onChange={(e) => setIs24h(e.target.checked)}
            />
          </div>

          {/* Segunda a Sexta */}
          <div>
            <label className="block text-sm font-medium text-keepit-gray-700 mb-2">
              Segunda a Sexta
            </label>
            <div className="grid grid-cols-2 gap-4">
              <TimeInput
                label="Abertura"
                name="weekdays_opening"
                required={!is24h}
                disabled={is24h}
              />
              <TimeInput
                label="Fechamento"
                name="weekdays_closing"
                required={!is24h}
                disabled={is24h}
              />
            </div>
          </div>

          {/* Sábado */}
          <div>
            <label className="block text-sm font-medium text-keepit-gray-700 mb-2">
              Sábado
            </label>
            <div className="grid grid-cols-2 gap-4">
              <TimeInput
                label="Abertura"
                name="saturday_opening"
                required={!is24h}
                disabled={is24h}
              />
              <TimeInput
                label="Fechamento"
                name="saturday_closing"
                required={!is24h}
                disabled={is24h}
              />
            </div>
          </div>

          {/* Domingo */}
          <div>
            <label className="block text-sm font-medium text-keepit-gray-700 mb-2">
              Domingo
            </label>
            <div className="grid grid-cols-2 gap-4">
              <TimeInput
                label="Abertura"
                name="sunday_opening"
                required={!is24h}
                disabled={is24h}
              />
              <TimeInput
                label="Fechamento"
                name="sunday_closing"
                required={!is24h}
                disabled={is24h}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstablishmentSection
