'use client';
import React from 'react';

import Link from 'next/link';
import { FaStar } from 'react-icons/fa6';
import dynamic from 'next/dynamic';
const FlashSalesCountdown = dynamic(() => import('./FlashSalesCountdown'), {
  ssr: false, // Ensure it's only rendered on the client
});
import products from '../../../../../public/json/popular-product.json';
import Image from 'next/image';

const FlashSales = () => {
  const handleClick = (product: any) => {
    console.log('Add to cart:', product);
    // TODO: Integrate with Medusa cart
  };
  return (
    <section className="product padding-top padding-bottom section-bg">
      <div className="container">
        <div className="section-header">
          <FlashSalesCountdown
            date={new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ).toISOString()}
          />

          <div className="product-btn order-sm-2 order-lg-3">
            <Link className="trk-btn trk-btn--sm " href="/flash-sale">
              View all
            </Link>
          </div>
        </div>
        <div
          className="product__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-4">
            {products?.slice(0, 2).map((product: any, i: number) => (
              <div key={i} className="col-lg">
                <div className="product__item product__item--style11">
                  <div className="product__item-inner">
                    <div className="product__item-badge">-20%</div>
                    <div className="product__item-thumb">
                      <Image
                        width={374}
                        height={232}
                        src={product.imgSrc2}
                        alt={product.title}
                      />
                    </div>
                    <div className="product__item-content">
                      <h4>
                        <Link href="/product-details">{product.title2}</Link>
                      </h4>
                      <div className="product__item-rating">
                        <FaStar /> {product.rating}{' '}
                        <span>({product.reviews} Reviews)</span>
                      </div>
                      <div className="product__item-footer">
                        <div className="product__item-price">
                          <h4>${Number(product.price).toFixed(2)} /</h4>
                          <span>
                            <del>${Number(product.price).toFixed(2)}</del>
                          </span>
                        </div>
                        <div className="product__item-action">
                          <span
                            onClick={() => handleClick(product)}
                            className="trk-btn trk-btn--outline"
                          >
                            Add to cart
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
