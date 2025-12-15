"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    })
  }, [])
}
