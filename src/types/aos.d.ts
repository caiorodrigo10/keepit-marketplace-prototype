declare module 'aos' {
  interface AOSOptions {
    offset?: number
    delay?: number
    duration?: number
    easing?: string
    once?: boolean
    mirror?: boolean
    anchorPlacement?: string
    disable?: boolean | string | (() => boolean)
  }

  interface AOS {
    init(options?: AOSOptions): void
    refresh(hard?: boolean): void
    refreshHard(): void
  }

  const aos: AOS
  export default aos
}
