import React from 'react';

import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
const SuperSale = () => {
  return (
    <section className="sale-banner padding-top padding-bottom">
      <div className="container">
        <div
          className="sale-banner__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="sale-banner__item sale-banner__item--style1">
            <div className="sale-banner__item-inner">
              <div className="sale-banner__item-thumb">
                <Image
                  width={510}
                  height={324}
                  className="sale-banner__image"
                  src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800&h=600&fit=crop"
                  alt="Fresh vegetables"
                />
                <div className="sale-banner__item-discount-badge">
                  <span>Up to</span>
                  <h3 className="sale-banner__discount-amount">20%</h3>
                  <span>Discount</span>
                </div>
              </div>
              <div className="sale-banner__item-content">
                <h2>Super Ofertas Keepit</h2>
                <p>
                  Descubra um mundo de produtos de conveniência, farmácia, cosméticos
                  e fast food ao alcance de um clique.
                </p>
                <Link href="/shop" className="trk-btn trk-btn--md mt-3">
                  Comprar Agora
                  <span>
                    <FaArrowRight />
                  </span>{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bg-shape */}
      <div className="sale-banner__shape">
        <span className="sale-banner__shape-item sale-banner__shape-item--1">
          <Image
            width={43}
            height={35}
            src="/images/product/sale-banner/leaf-1.png"
            alt="shape icon"
          />
        </span>
        <span className="sale-banner__shape-item sale-banner__shape-item--2">
          <Image
            width={51}
            height={48}
            src="/images/product/sale-banner/leaf-2.png"
            alt="shape icon"
          />
        </span>
      </div>
    </section>
  );
};

export default SuperSale;
