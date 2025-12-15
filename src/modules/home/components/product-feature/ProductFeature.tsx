'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import ProductCard from '@modules/home/components/product-card-home-three/ProductCard';
import { popularProducts } from '../popular-products/mock-data';

const ProductFeature = ({
  title = 'Featured products',
  show,
}: {
  title?: string;
  show?: boolean;
}) => {
  return (
    <section
      className={`product-feature padding-bottom ${show ? ' padding-top' : ''}`}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-header__content">
            <h2 className="mb-10">{title}</h2>
          </div>
          <div className="section-header__action">
            <div className="swiper-nav swiper-nav--style1">
              <button
                aria-label="Previous slide"
                className="swiper-nav__btn product__slider-prev"
              >
                <FaArrowLeft />
              </button>
              <button
                aria-label="Next slide"
                className="swiper-nav__btn product__slider-next active"
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
                nextEl: '.product__slider-next',
                prevEl: '.product__slider-prev',
              }}
            >
              {popularProducts?.length > 0 &&
                popularProducts.slice(0, 8).map((product: any, i: number) => (
                  <SwiperSlide key={i}>
                    <div className="col" key={i}>
                      <ProductCard data={product} show={show} />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
