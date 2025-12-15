'use client';
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import './vendor-hero.scss';

const VendorHero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="vendor-hero">
      <div className="vendor-hero__overlay"></div>

      <div className="container">
        <div className="vendor-hero__content" data-aos="fade-up">
          <h1 className="vendor-hero__title">
            Descubra Estabelecimentos Próximos
          </h1>

          <p className="vendor-hero__subtitle">
            Restaurantes, farmácias, mercados e muito mais com retirada em 10 minutos
          </p>

          <form className="vendor-hero__search" onSubmit={handleSearch}>
            <div className="vendor-hero__search-wrapper">
              <FaMapMarkerAlt className="vendor-hero__search-icon" />
              <input
                type="text"
                className="vendor-hero__search-input"
                placeholder="Digite seu endereço ou CEP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="vendor-hero__search-button">
                <FaSearch />
                <span>Buscar</span>
              </button>
            </div>
          </form>

          <div className="vendor-hero__categories-link" data-aos="fade-up" data-aos-delay="200">
            <a href="#categories" className="vendor-hero__cta">
              Explorar Categorias
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorHero;
