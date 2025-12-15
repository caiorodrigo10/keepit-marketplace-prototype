'use client';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="app-download__content">
              <div className="app-download__icon-group">
                <FaArrowRight className="app-download__arrow" />
                <FaArrowRight className="app-download__arrow" />
                <FaArrowRight className="app-download__arrow" />
              </div>

              <h2 className="app-download__title">
                Aproveite melhor no aplicativo mobile!
              </h2>

              <p className="app-download__description">
                Baixe o aplicativo Keepit e faça suas compras sem filas e com entrega em 10 minutos,
                24/7! Tão rápido quanto na sua loja favorita, mas muito mais fácil e conveniente!
              </p>

              <div className="app-download__buttons">
                <a
                  href="#"
                  className="app-download__btn app-download__btn--google"
                  aria-label="Baixar na Google Play"
                >
                  {/* Google Play badge será inserido aqui */}
                </a>

                <a
                  href="#"
                  className="app-download__btn app-download__btn--apple"
                  aria-label="Baixar na App Store"
                >
                  {/* App Store badge será inserido aqui */}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="app-download__image">
              <Image
                src="/images/app-download-mobile.jpg"
                alt="Pessoa usando aplicativo mobile Keepit para fazer compras"
                width={800}
                height={1000}
                priority
                className="app-download__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
