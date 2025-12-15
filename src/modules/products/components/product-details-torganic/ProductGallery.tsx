'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import { Swiper as SwiperCore } from 'swiper/types'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/thumbs'

interface ProductGalleryProps {
  images: string[]
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  const mainSwiperRef = useRef<SwiperCore | null>(null)

  return (
    <div className="col-md-6 col-12">
      <div className="product-thumb">
        {/* Main Image Slider */}
        <Swiper
          spaceBetween={10}
          loop={true}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className="pro-single-top"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="single-thumb">
                <Image
                  width={584}
                  height={449}
                  src={img}
                  alt={`Imagem do produto ${index + 1}`}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="pro-single-thumbs"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="single-thumb">
                <Image
                  width={184}
                  height={142}
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          className="pro-single-next"
          onClick={() => mainSwiperRef.current?.slidePrev()}
          style={{ cursor: 'pointer' }}
          aria-label="Imagem anterior"
        >
          <FaAngleLeft />
        </div>
        <div
          className="pro-single-prev"
          onClick={() => mainSwiperRef.current?.slideNext()}
          style={{ cursor: 'pointer' }}
          aria-label="Próxima imagem"
        >
          <FaAngleRight />
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
