'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import BlogCard from './BlogCard';
import Link from 'next/link';
import { blogArticles } from './mock-blog-data';

const Blog = () => {
  type BlogPost = {
    imageSrc: string;
    tag: string;
    tagClass: string;
    title: string;
    link: string;
    date: string;
  };

  return (
    <section className="blog padding-top padding-bottom section-bg">
      <div className="container">
        <div className="section-header d-md-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-10">Regular articles</h2>
          </div>
          <div className="section-header__action">
            <div className="swiper-nav swiper-nav--style1">
              <button
                aria-label="Previous slide"
                className="swiper-nav__btn blog__slider-prev"
              >
                <FaArrowLeft />
              </button>
              <button
                aria-label="Next slide"
                className="swiper-nav__btn blog__slider-next active"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="blog__wrapper">
          <div className="blog__slider">
            {blogArticles?.length > 0 ? (
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                speed={800}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.blog__slider-next',
                  prevEl: '.blog__slider-prev',
                }}
                loop={true}
              >
                {blogArticles.map((item: BlogPost, index: number) => (
                  <SwiperSlide key={index}>
                    <BlogCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>No blog found </p>
            )}
          </div>
        </div>
        <div className="section-btn mt-4 text-center">
          <Link className="trk-btn trk-btn--primary " href="/blogs">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
