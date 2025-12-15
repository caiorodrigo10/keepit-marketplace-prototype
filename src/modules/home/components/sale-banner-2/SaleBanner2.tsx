import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

import Image from 'next/image';
import Link from 'next/link';

const SaleBanner2 = () => {
  return (
    <section className="sale-banner padding-bottom">
      <div className="container">
        <div
          className="sale-banner__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-3">
            <div className="col-xl-6 col-lg-12">
              <div className="sale-banner__item sale-banner__item--style4">
                <div className="sale-banner__item-inner">
                  <div className="sale-banner__item-thumb">
                    <Image
                      width={272}
                      height={188}
                      src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop"
                      alt="Fresh groceries collection"
                    />
                    <div className="sale-banner__item-discount-badge sale-banner__item-discount-badge--style3">
                      <span className="sale-banner__discount-text">Up to</span>
                      <h4 className="sale-banner__discount-amount">20%</h4>
                    </div>
                  </div>
                  <div className="sale-banner__item-content">
                    <h6>Oferta por tempo limitado</h6>
                    <h3>Mega seleção de produtos</h3>
                    <Link href="/shop" className="trk-btn trk-btn--sm mt-3">
                      Comprar Agora{' '}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6  col-lg-12">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="sale-banner__item sale-banner__item--style5">
                    <div className="sale-banner__item-inner">
                      <div className="sale-banner__item-content">
                        <h4 className="sale-banner__title">
                          Produtos de Farmácia
                        </h4>
                        <Link href="/shop" className="text-btn">
                          Comprar Agora
                        </Link>
                      </div>
                      <div className="sale-banner__item-thumb">
                        <Image
                          width={220}
                          height={167}
                          src="https://images.unsplash.com/photo-1587049352846-4a222e784eaf?w=500&h=400&fit=crop"
                          alt="Organic pure honey"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sale-banner__item sale-banner__item--style52">
                    <div className="sale-banner__item-inner">
                      <div className="sale-banner__item-content">
                        <h4 className="sale-banner__title">
                          Cosméticos e Beleza
                        </h4>
                        <Link href="/login" className="text-btn text-btn--sm">
                          Comprar Agora
                        </Link>
                      </div>
                      <div className="sale-banner__item-thumb">
                        <Image
                          width={225}
                          height={167}
                          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=400&fit=crop"
                          alt="Organic almond butter"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner2;
