"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import React from "react"
import { clx } from "@medusajs/ui"

type FormAccordionItemProps = AccordionPrimitive.AccordionItemProps & {
  value: string
  title: string
  children: React.ReactNode
}

type FormAccordionProps = (
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps
) & {
  children: React.ReactNode
}

const FormAccordion: React.FC<FormAccordionProps> & {
  Item: React.FC<FormAccordionItemProps>
} = ({ children, ...props }) => {
  return (
    <AccordionPrimitive.Root
      {...props}
      className="w-full space-y-4"
    >
      {children}
    </AccordionPrimitive.Root>
  )
}

const Item: React.FC<FormAccordionItemProps> = ({
  value,
  title,
  children,
  ...props
}) => {
  return (
    <AccordionPrimitive.Item
      value={value}
      {...props}
      className={clx(
        "border border-keepit-gray-300 rounded-lg overflow-hidden bg-white shadow-sm",
        "hover:border-keepit-green-primary transition-colors duration-200"
      )}
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="w-full group">
          <div className="flex items-center justify-between p-4 hover:bg-keepit-gray-100 transition-colors">
            <h3 className="text-lg font-semibold text-keepit-black group-hover:text-keepit-green-primary transition-colors">
              {title}
            </h3>
            <div className="ml-auto">
              <svg
                className="w-6 h-6 text-keepit-gray-500 group-hover:text-keepit-green-primary transform group-data-[state=open]:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      <AccordionPrimitive.Content
        className={clx(
          "overflow-hidden",
          "data-[state=closed]:animate-accordion-close",
          "data-[state=open]:animate-accordion-open"
        )}
      >
        <div className="p-6 pt-0 border-t border-keepit-gray-100">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

FormAccordion.Item = Item

export default FormAccordion
