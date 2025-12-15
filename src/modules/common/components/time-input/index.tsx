"use client"

import { Label } from "@medusajs/ui"
import React, { useRef, useImperativeHandle } from "react"

type TimeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "placeholder"
> & {
  label: string
  name: string
  required?: boolean
  topLabel?: string
}

const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
  ({ name, label, required, topLabel, disabled, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current!)

    return (
      <div className="flex flex-col w-full">
        {topLabel && (
          <Label className="mb-2 txt-compact-medium-plus">{topLabel}</Label>
        )}
        <div className="flex relative z-0 w-full txt-compact-medium">
          <input
            type="time"
            name={name}
            placeholder=" "
            required={required}
            disabled={disabled}
            className="pt-4 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:cursor-not-allowed"
            ref={inputRef}
            {...props}
          />
          <label
            htmlFor={name}
            onClick={() => !disabled && inputRef.current?.focus()}
            className="flex items-center justify-center mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-ui-fg-subtle"
          >
            {label}
            {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
      </div>
    )
  }
)

TimeInput.displayName = "TimeInput"

export default TimeInput
