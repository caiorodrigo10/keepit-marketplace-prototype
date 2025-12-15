'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'
import { relatedProductsMock } from '@/lib/mock-data/related-products-mock'
import ProductCard from '@/modules/home/components/product-card-home-three/ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'

const RelatedProducts = () => {
  return (
    <section className="product-feature padding-bottom padding-top">
      <div className="container">
        <div className="section-header">
          <div className="section-header__content">
            <h2 className="mb-10">Produtos Relacionados</h2>
          </div>
          <div className="section-header__action">
            <div className="swiper-nav swiper-nav--style1">
              <button
                aria-label="Slide anterior"
                className="swiper-nav__btn related-products__slider-prev"
              >
                <FaArrowLeft />
              </button>
              <button
                aria-label="Próximo slide"
                className="swiper-nav__btn related-products__slider-next active"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="product__wrapper">
          <div className="product-feature__slider">
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              loop={true}
              slidesPerView={2}
              grabCursor={true}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              speed={500}
              navigation={{
                nextEl: '.related-products__slider-next',
                prevEl: '.related-products__slider-prev',
              }}
            >
              {relatedProductsMock.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="col">
                    <ProductCard data={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
