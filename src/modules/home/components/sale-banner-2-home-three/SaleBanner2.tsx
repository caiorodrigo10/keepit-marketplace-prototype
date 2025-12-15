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
                      src="/images/product/sale-banner/4.png"
                      alt="banner image"
                    />
                    <div className="sale-banner__item-discount-badge sale-banner__item-discount-badge--style3">
                      <span className="sale-banner__discount-text">Up to</span>
                      <h4 className="sale-banner__discount-amount">20%</h4>
                    </div>
                  </div>
                  <div className="sale-banner__item-content">
                    <h6>Limited time only</h6>
                    <h3>Super grocery collection</h3>
                    <Link href="/shop" className="trk-btn trk-btn--sm mt-3">
                      Shop Now{' '}
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
                          Organic pure honey
                        </h4>
                        <Link href="/shop" className="text-btn">
                          Shop Now
                        </Link>
                      </div>
                      <div className="sale-banner__item-thumb">
                        <Image
                          width={220}
                          height={167}
                          src="/images/product/sale-banner/5.png"
                          alt="Fresh Honey"
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
                          Organic almond butter
                        </h4>
                        <Link href="/login" className="text-btn text-btn--sm">
                          Shop Now
                        </Link>
                      </div>
                      <div className="sale-banner__item-thumb">
                        <Image
                          width={225}
                          height={167}
                          src="/images/product/sale-banner/6.png"
                          alt="Fresh Honey"
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
