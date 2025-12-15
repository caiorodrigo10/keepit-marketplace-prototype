'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { brands, Brand } from './brandsData';

const PartnerBrands = () => {
  return (
    <section className="partner-brands">
      <div className="partner-brands__container">
        <div
          className="partner-brands__header"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className="partner-brands__title">Marcas que Você Ama</h2>
          <p className="partner-brands__subtitle">
            Centenas de lojas parceiras em diversas categorias
          </p>
        </div>

        <div
          className="partner-brands__grid"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          {brands.map((brand: Brand) => (
            <div key={brand.id} className="brand-card">
              <div className="brand-card__content">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-card__logo"
                  loading="lazy"
                />
                <span className="brand-card__category">{brand.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="partner-brands__cta"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <button className="partner-brands__btn">
            Ver Todas as Lojas
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
