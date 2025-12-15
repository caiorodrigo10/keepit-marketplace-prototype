'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa6';

const testimonials = [
  {
    id: 1,
    name: 'Dianne Russell',
    designation: 'Product designer',
    image: '/images/testimonial/1.png',
    quote:
      'Exceptional quality and variety! This shop never disappoints. From produce to pantry staples, the selection is superb!',
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    designation: 'UI/UX designer',
    image: '/images/testimonial/2.png',
    quote:
      'Reliable, fresh, and affordable! This grocery shop exceeds expectations. The produce prices are reasonable!',
  },
  {
    id: 3,
    name: 'Ronald Richards',
    designation: 'Graphics designer',
    image: '/images/testimonial/3.png',
    quote:
      'Outstanding service! The grocery shop offers a seamless online shopping experience. Quality products, fair prices.',
  },
];

const WhatOurCustomersSay = () => {
  return (
    <section className="testimonial padding-bottom-style2 bg-color">
      <div className="container">
        <div className="section-header">
          <div className="section-header__content">
            <h2 className="mb-10">What our customers say</h2>
          </div>
          <div className="section-header__action">
            <div className="swiper-nav swiper-nav--style1">
              <button
                aria-label="Previous slide"
                className="swiper-nav__btn testimonial__slider-prev"
              >
                <FaArrowLeft />
              </button>
              <button
                aria-label="Next slide"
                className="swiper-nav__btn testimonial__slider-next active"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div
          className="testimonial__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.testimonial__slider-next',
              prevEl: '.testimonial__slider-prev',
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
            }}
          >
            {testimonials.map((testimonial, i: number) => (
              <SwiperSlide key={i}>
                <div className="testimonial__item testimonial__item--style1">
                  <div className="testimonial__item-inner">
                    <div className="testimonial__item-content">
                      <div className="testimonial__quote">
                        <span>
                          <FaQuoteLeft />
                        </span>
                      </div>
                      <p className="mb-0">{testimonial.quote}</p>
                      <div className="testimonial__footer">
                        <div className="testimonial__author">
                          <div className="testimonial__author-thumb">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                          </div>
                          <div className="testimonial__author-designation">
                            <h6>{testimonial.name}</h6>
                            <span>{testimonial.designation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatOurCustomersSay;
