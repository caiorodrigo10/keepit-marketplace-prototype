import { Metadata } from "next"
import Script from "next/script"

// Swiper CSS imports
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/free-mode"
import "swiper/css/autoplay"
import "swiper/css/mousewheel"
import "swiper/css/pagination"

import { getBaseURL } from "@lib/util/env"
import ConditionalHeader from "@modules/layout/templates/conditional-header/ConditionalHeader"
import { Footer } from "@modules/layout/templates/footer-torganic"
import CartProviderWrapper from "@modules/layout/templates/cart-provider-wrapper"
import BottomNav from "@modules/layout/components/bottom-nav"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <CartProviderWrapper>
      <Script src="/js/trk-menu.js" />
      <ConditionalHeader />
      {props.children}
      <Footer />
      <BottomNav />
    </CartProviderWrapper>
  )
}
