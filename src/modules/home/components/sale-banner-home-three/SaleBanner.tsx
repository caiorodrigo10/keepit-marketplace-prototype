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
                      src="/images/product/sale-banner/2.png"
                      alt="Fresh Fish"
                    />
                  </div>
                  <div className="sale-banner__item-content">
                    <span className="sale-banner__offer">10% OFF</span>
                    <h3 className="sale-banner__title">Special sea food</h3>
                    <p className="sale-banner__description">
                      Dive into a world of exquisite flavors with our seafood.
                    </p>
                    <Link href="/shop" className="trk-btn trk-btn--md">
                      Shop Now{' '}
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
                      src="/images/product/sale-banner/3.png"
                      alt="Fresh Fish"
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
                      Today's Best Deal
                    </span>
                    <h3 className="sale-banner__title">Healthy fruits </h3>
                    <p className="sale-banner__description">
                      Saver the goodness of nature with our fruits.
                    </p>
                    <Link href="/shop" className="trk-btn trk-btn--md">
                      Shop Now{' '}
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
