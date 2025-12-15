'use client';
import React from 'react';
import { FaShoppingCart, FaMapMarkerAlt, FaCreditCard, FaQrcode } from 'react-icons/fa';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      number: '01',
      icon: FaShoppingCart,
      title: 'Escolha seus produtos',
      description: 'Navegue por centenas de lojas e adicione ao carrinho',
    },
    {
      number: '02',
      icon: FaMapMarkerAlt,
      title: 'Selecione o locker',
      description: 'Escolha o locker mais próximo de você no mapa',
    },
    {
      number: '03',
      icon: FaCreditCard,
      title: 'Finalize o pedido',
      description: 'Pagamento rápido e seguro com Pix, cartão ou boleto',
    },
    {
      number: '04',
      icon: FaQrcode,
      title: 'Retire em 10 minutos',
      description: 'Use o QR code no app para abrir seu compartimento',
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <h2
          className="how-it-works__title"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Como Funciona
        </h2>
        <p
          className="how-it-works__subtitle"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          Seu pedido em 4 passos simples
        </p>

        <div className="how-it-works__grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="how-it-works__card"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                <span className="how-it-works__number">{step.number}</span>

                <div className="how-it-works__icon-wrapper">
                  <IconComponent />
                </div>

                <h3 className="how-it-works__card-title">{step.title}</h3>
                <p className="how-it-works__card-description">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
