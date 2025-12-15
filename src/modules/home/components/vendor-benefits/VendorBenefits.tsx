'use client';
import React from 'react';
import { FaMapMarkerAlt, FaShoppingBag, FaClock, FaShieldAlt } from 'react-icons/fa';
import './vendor-benefits.scss';

const VendorBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: 'Perto de você',
      description: 'Estabelecimentos próximos',
    },
    {
      id: 2,
      icon: FaShoppingBag,
      title: 'Variedade',
      description: 'Centenas de opções',
    },
    {
      id: 3,
      icon: FaClock,
      title: 'Retirada rápida',
      description: 'Em até 10 minutos',
    },
    {
      id: 4,
      icon: FaShieldAlt,
      title: 'Seguro',
      description: 'Pagamento protegido',
    },
  ];

  return (
    <section className="vendor-benefits">
      <div className="container">
        <div className="row g-3 g-md-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="vendor-benefits__item">
                <div className="vendor-benefits__icon">
                  <benefit.icon />
                </div>
                <div className="vendor-benefits__content">
                  <h6 className="vendor-benefits__title">{benefit.title}</h6>
                  <p className="vendor-benefits__description">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorBenefits;
