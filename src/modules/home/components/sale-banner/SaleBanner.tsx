import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
const SaleBanner = () => {
  return (
    <section className="sale-banner padding-top padding-bottom">
      <div className="container">
        <div
          className="sale-banner__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="sale-banner__item sale-banner__item--style2">
                <div className="sale-banner__item-inner">
                  <div className="sale-banner__item-thumb">
                    <Image
                      width={254}
                      height={172}
                      src="https://images.unsplash.com/photo-1559737558-2f5a58f43c59?w=600&h=400&fit=crop"
                      alt="Fresh seafood"
                    />
                  </div>
                  <div className="sale-banner__item-content">
                    <span className="sale-banner__offer">10% OFF</span>
                    <h3 className="sale-banner__title">Fast Food Delivery</h3>
                    <p className="sale-banner__description">
                      Peça online e retire em 10 minutos no locker mais próximo.
                    </p>
                    <Link href="/shop" className="trk-btn trk-btn--md">
                      Comprar Agora{' '}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sale-banner__item sale-banner__item--style22">
                <div className="sale-banner__item-inner">
                  <div className="sale-banner__item-thumb">
                    <Image
                      width={168}
                      height={214}
                      src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=500&fit=crop"
                      alt="Healthy fresh fruits"
                    />
                    <div className="sale-banner__item-discount-badge sale-banner__item-discount-badge--style2">
                      <span className="sale-banner__discount-text">Up to</span>
                      <h4 className="sale-banner__discount-amount">20%</h4>
                      <span className="sale-banner__discount-text">
                        Discount
                      </span>
                    </div>
                  </div>
                  <div className="sale-banner__item-content">
                    <span className="sale-banner__offer">
                      Melhor Oferta do Dia
                    </span>
                    <h3 className="sale-banner__title">Produtos de Conveniência</h3>
                    <p className="sale-banner__description">
                      Tudo que você precisa no seu dia a dia, disponível em instantes.
                    </p>
                    <Link href="/shop" className="trk-btn trk-btn--md">
                      Comprar Agora{' '}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
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

export default SaleBanner;
