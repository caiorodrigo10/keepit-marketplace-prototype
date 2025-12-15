"use client"

import { Label } from "@medusajs/ui"
import React, { useState, useRef, useImperativeHandle } from "react"
import { applyMask, removeMask } from "@modules/hoster/utils/mask-helpers"

type MaskType = "cpf" | "cnpj" | "cep" | "phone"

type MaskedInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "placeholder"
> & {
  label: string
  name: string
  maskType: MaskType
  required?: boolean
  topLabel?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    {
      name,
      label,
      maskType,
      required,
      topLabel,
      value: controlledValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const hiddenInputRef = useRef<HTMLInputElement>(null)
    const [displayValue, setDisplayValue] = useState("")

    useImperativeHandle(ref, () => inputRef.current!)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value
      const formatted = applyMask(rawValue, maskType)

      setDisplayValue(formatted)

      // Update hidden input with unmasked value (only digits)
      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = removeMask(formatted)
      }

      // Call parent onChange if provided
      if (onChange) {
        // Create a synthetic event with unmasked value
        const syntheticEvent = {
          ...e,
          target: {
            ...e.target,
            value: removeMask(formatted),
          },
        }
        onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>)
      }
    }

    // Get placeholder based on mask type
    const getPlaceholder = (): string => {
      switch (maskType) {
        case "cpf":
          return "000.000.000-00"
        case "cnpj":
          return "00.000.000/0000-00"
        case "cep":
          return "00000-000"
        case "phone":
          return "(00) 00000-0000"
        default:
          return ""
      }
    }

    // Get max length based on mask type
    const getMaxLength = (): number => {
      switch (maskType) {
        case "cpf":
          return 14 // 000.000.000-00
        case "cnpj":
          return 18 // 00.000.000/0000-00
        case "cep":
          return 9 // 00000-000
        case "phone":
          return 15 // (00) 00000-0000
        default:
          return undefined
      }
    }

    return (
      <div className="flex flex-col w-full">
        {topLabel && (
          <Label className="mb-2 txt-compact-medium-plus">{topLabel}</Label>
        )}
        <div className="flex relative z-0 w-full txt-compact-medium">
          {/* Visible input with mask */}
          <input
            type="text"
            name={`${name}_display`}
            value={displayValue}
            onChange={handleChange}
            placeholder=" "
            required={required}
            maxLength={getMaxLength()}
            className="pt-4 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover"
            ref={inputRef}
            {...props}
          />

          {/* Hidden input with unmasked value for form submission */}
          <input
            type="hidden"
            name={name}
            ref={hiddenInputRef}
            value={removeMask(displayValue)}
          />

          <label
            htmlFor={`${name}_display`}
            onClick={() => inputRef.current?.focus()}
            className="flex items-center justify-center mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-ui-fg-subtle"
          >
            {label}
            {required && <span className="text-rose-500">*</span>}
          </label>

          {/* Placeholder hint */}
          {displayValue === "" && (
            <span className="absolute right-4 top-3 text-ui-fg-muted text-sm pointer-events-none">
              {getPlaceholder()}
            </span>
          )}
        </div>
      </div>
    )
  }
)

MaskedInput.displayName = "MaskedInput"

export default MaskedInput
