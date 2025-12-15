'use client';
import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  FaArrowRight,
  FaArrowLeft,
  FaBurger,
  FaPills,
  FaBrush,
  FaWineGlass,
  FaCookie,
  FaBagShopping,
  FaSoap,
  FaMugHot,
} from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const FeaturedCategories = () => {
  useEffect(() => {
    // Ensure navigation buttons exist
    const nextButton = document.querySelector(
      '.featured-categories__slider-next'
    );
    const prevButton = document.querySelector(
      '.featured-categories__slider-prev'
    );

    if (nextButton && prevButton) {
      nextButton.classList.add('custom-swiper-button-next');
      prevButton.classList.add('custom-swiper-button-prev');

      // Initial active button state
      prevButton.classList.remove('active');
      nextButton.classList.add('active');
    }
  }, []);

  const CardData = [
    { id: 0, icon: <FaBurger size={36} />, name: 'Fast Food' },
    { id: 1, icon: <FaPills size={36} />, name: 'Farmácia' },
    { id: 2, icon: <FaBrush size={36} />, name: 'Cosméticos' },
    { id: 3, icon: <FaWineGlass size={36} />, name: 'Bebidas' },
    { id: 4, icon: <FaCookie size={36} />, name: 'Snacks' },
    { id: 5, icon: <FaBagShopping size={36} />, name: 'Conveniência' },
    { id: 6, icon: <FaSoap size={36} />, name: 'Higiene' },
    { id: 7, icon: <FaMugHot size={36} />, name: 'Café' },
  ];

  return (
    <section className="featured-categories  featured-categories--style2 padding-bottom">
      <div className="container">
        <div className="featured-categories__wrapper">
          <div className="featured-categories__slider">
            <Swiper
              modules={[Navigation]}
              spaceBetween={5}
              slidesPerView={2} // Adjusted for better visibility
              speed={500} // Smooth transition speed
              loop={true}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                1200: {
                  slidesPerView: 7,
                  spaceBetween: 25,
                },
              }}
              navigation={{
                nextEl: '.featured-categories__slider-next',
                prevEl: '.featured-categories__slider-prev',
              }}
              // onSwiper={(swiper) => {
              //   setSwiperInstance(swiper);
              // }}

              onSlideChange={(swiper) => {
                const nextButton = document.querySelector(
                  '.featured-categories__slider-next'
                );
                const prevButton = document.querySelector(
                  '.featured-categories__slider-prev'
                );

                if (nextButton && prevButton) {
                  if (swiper.isEnd) {
                    nextButton.classList.remove('active');
                  } else {
                    nextButton.classList.add('active');
                  }

                  if (swiper.isBeginning) {
                    prevButton.classList.remove('active');
                  } else {
                    prevButton.classList.add('active');
                  }
                }
              }}
            >
              {CardData.map((data, i: number) => (
                <SwiperSlide key={i}>
                  <div className="featured-categories__item active">
                    <div
                      className={`featured-categories__item-inner ${!data.id && 'active'}`}
                    >
                      <div className="featured-categories__thumb" style={{ marginBottom: '12px' }}>
                        {data.icon}
                      </div>
                      <div className="featured-categories__content">
                        <h4>
                          <Link href="/shop" className="stretched-link">
                            {data.name}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-nav swiper-nav--style1">
            <button
              aria-label="Previous slide"
              className="swiper-nav__btn featured-categories__slider-prev"
            >
              <FaArrowLeft />
            </button>
            <button
              aria-label="Previous slide"
              className="swiper-nav__btn featured-categories__slider-next active"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
