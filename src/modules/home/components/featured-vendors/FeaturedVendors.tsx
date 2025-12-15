'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import VendorCard from './VendorCard';
import { featuredVendors } from './vendorsData';
import './featured-vendors.scss';

const FeaturedVendors = () => {
  return (
    <section className="featured-vendors">
      <div className="container">
        <div className="featured-vendors__header" data-aos="fade-up">
          <h2 className="featured-vendors__title">Parceiros em Destaque</h2>
          <p className="featured-vendors__subtitle">
            Descubra os estabelecimentos mais populares próximos a você
          </p>
        </div>

        <div className="row g-4">
          {featuredVendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className="col-12 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>

        <div className="featured-vendors__cta" data-aos="fade-up">
          <Link href="/parceiros" className="featured-vendors__button">
            Ver todos os parceiros
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
