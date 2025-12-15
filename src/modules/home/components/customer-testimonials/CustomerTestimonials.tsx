'use client';
import React, { useRef } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials, Testimonial } from './testimonialsData';

const CustomerTestimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="testimonial-card__stars">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    );
  };

  return (
    <section className="customer-testimonials">
      <div className="customer-testimonials__container">
        <div
          className="customer-testimonials__header"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className="customer-testimonials__title">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="customer-testimonials__subtitle">
            Milhares de pessoas já experimentaram a praticidade do Keepit
          </p>
        </div>

        <div className="customer-testimonials__carousel-wrapper">
          <button
            className="customer-testimonials__nav customer-testimonials__nav--left"
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollContainerRef}
            className="customer-testimonials__carousel"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            {testimonials.map((testimonial: Testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-card__header">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonial-card__avatar"
                  />
                  <div className="testimonial-card__info">
                    <h3 className="testimonial-card__name">{testimonial.name}</h3>
                    <p className="testimonial-card__location">{testimonial.location}</p>
                  </div>
                </div>

                {renderStars(testimonial.rating)}

                <p className="testimonial-card__comment">
                  "{testimonial.comment}"
                </p>

                <span className="testimonial-card__category">
                  {testimonial.category}
                </span>
              </div>
            ))}
          </div>

          <button
            className="customer-testimonials__nav customer-testimonials__nav--right"
            onClick={() => scroll('right')}
            aria-label="Próximo"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
